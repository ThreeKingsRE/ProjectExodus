// Live document collaboration server, running on Cloudflare Workers (Durable Objects).
//
// Each document is its own room (its own Durable Object), so rooms are isolated and
// scale on their own. The Next.js app issues a short-lived signed token at
// /api/documents/[id]/collab-token; this server checks it before any WebSocket reaches
// a room. Both sides share PARTYKIT_SECRET (the name is kept from when this ran on
// PartyKit, so the Vercel settings stay the same).

import { routePartykitRequest, type Connection, type ConnectionContext } from 'partyserver'
import { YServer } from 'y-partyserver'
import * as Y from 'yjs'
import { verifyCollabToken, type CollabTokenClaims } from '../lib/collab-token'

interface Env {
  Document: DurableObjectNamespace
  PARTYKIT_SECRET?: string
}

const CLAIMS_HEADER = 'x-exodus-collab-claims'
/** Storage values are kept well under the size limit by splitting the saved document */
const CHUNK = 96 * 1024

function colorFor(id: string): string {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B88B', '#82E0AA']
  let hash = 0
  for (let i = 0; i < id.length; i++) hash = id.charCodeAt(i) + ((hash << 5) - hash)
  return colors[Math.abs(hash) % colors.length]
}

export class Document extends YServer<Env> {
  // Save to storage a couple of seconds after edits stop (and at least every 10 s while typing)
  static callbackOptions = { debounceWait: 2000, debounceMaxWait: 10000 }

  async onLoad() {
    const count = await this.ctx.storage.get<number>('ydoc:count')
    if (!count) return
    const parts: Uint8Array[] = []
    for (let i = 0; i < count; i++) {
      const part = await this.ctx.storage.get<Uint8Array>(`ydoc:${i}`)
      if (!part) return // incomplete save: start fresh rather than load half a document
      parts.push(part)
    }
    const all = new Uint8Array(parts.reduce((n, p) => n + p.length, 0))
    let offset = 0
    for (const p of parts) { all.set(p, offset); offset += p.length }
    Y.applyUpdate(this.document, all)
  }

  async onSave() {
    const update = Y.encodeStateAsUpdate(this.document)
    const count = Math.max(1, Math.ceil(update.length / CHUNK))
    const previous = (await this.ctx.storage.get<number>('ydoc:count')) ?? 0
    const entries: Record<string, unknown> = { 'ydoc:count': count, lastUpdated: Date.now() }
    for (let i = 0; i < count; i++) entries[`ydoc:${i}`] = update.slice(i * CHUNK, (i + 1) * CHUNK)
    await this.ctx.storage.put(entries)
    for (let i = count; i < previous; i++) await this.ctx.storage.delete(`ydoc:${i}`)
  }

  // Viewers get a read-only socket: they receive updates but their edits are dropped
  isReadOnly(connection: Connection): boolean {
    return !(connection.state as { canEdit?: boolean } | null)?.canEdit
  }

  async onConnect(connection: Connection, ctx: ConnectionContext) {
    let claims: CollabTokenClaims | null = null
    try {
      const raw = ctx.request.headers.get(CLAIMS_HEADER)
      claims = raw ? (JSON.parse(raw) as CollabTokenClaims) : null
    } catch {
      claims = null
    }
    // Defense in depth: the check in fetch() below should already have rejected these
    if (!claims || claims.room !== this.name) {
      connection.close(4001, 'Unauthorized')
      return
    }
    connection.setState({ canEdit: claims.canEdit, user: { id: claims.sub, name: claims.name, color: colorFor(claims.sub) } })
    return super.onConnect(connection, ctx)
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    if (url.pathname === '/health') return Response.json({ status: 'ok' })

    const secret = env.PARTYKIT_SECRET
    const res = await routePartykitRequest(request, env, {
      // Runs before a WebSocket reaches the room: only a valid token for this exact room gets in
      onBeforeConnect: async (req, lobby) => {
        if (!secret) return new Response('Collaboration server not configured', { status: 503 })
        const token = new URL(req.url).searchParams.get('token')
        if (!token) return new Response('Unauthorized', { status: 401 })
        const claims = await verifyCollabToken(token, secret, lobby.name)
        if (!claims) return new Response('Unauthorized', { status: 401 })
        // Overwrite (never trust) any client-supplied value for this header
        const headers = new Headers(req.headers)
        headers.set(CLAIMS_HEADER, JSON.stringify(claims))
        return new Request(req, { headers })
      },
      // Plain HTTP requests to a room are never needed
      onBeforeRequest: async () => new Response('Not found', { status: 404 }),
    })
    return res ?? new Response('Not found', { status: 404 })
  },
}
