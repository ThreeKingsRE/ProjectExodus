'use client'

// "Find it for me": look up the town's official calendar by name, no link needed.

import { useState } from 'react'
import { Search } from 'lucide-react'

type Found = { connected: boolean; suggestion: { client: string } | null; count: number }

export function FindForMe({ slug, onDone }: { slug: string; onDone: () => void }) {
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)
  const [suggest, setSuggest] = useState<string | null>(null)

  const call = async (url: string, body: object) => {
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    return res.json().catch(() => ({ success: false, error: 'Something went wrong.' }))
  }
  async function find() {
    setBusy(true); setMsg(null); setSuggest(null)
    const j = await call('/api/meetings/find', { slug })
    setBusy(false)
    if (!j.success) return setMsg(j.error || 'Couldn’t search right now.')
    const d = j.data as Found
    if (d.connected) { setMsg(`Found it! ${d.count} meetings loaded.`); return onDone() }
    if (d.suggestion) return setSuggest(d.suggestion.client)
    setMsg('We couldn’t find a public calendar by name. Add the schedule below or paste the town’s calendar link.')
  }
  async function confirm() {
    if (!suggest) return
    setBusy(true)
    const j = await call('/api/meetings/sources', { slug, kind: 'LEGISTAR', ref: suggest })
    setBusy(false)
    if (!j.success) return setMsg(j.error || 'That one didn’t work.')
    setSuggest(null); setMsg('Connected!'); onDone()
  }
  return (
    <div className="mt-2 text-sm">
      {!suggest && <button type="button" onClick={find} disabled={busy} className="no-min-size inline-flex h-9 items-center gap-1.5 rounded-full bg-[var(--primary)] px-4 text-[13px] font-bold disabled:opacity-60" style={{ color: 'var(--primary-foreground)' }}><Search className="h-4 w-4" aria-hidden />{busy ? 'Looking…' : 'Find it for me'}</button>}
      {suggest && (
        <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-2.5">
          <p>We found a possible match: <strong>{suggest}.legistar.com</strong>. Is that this place’s official calendar?</p>
          <div className="mt-2 flex gap-2">
            <button type="button" onClick={confirm} disabled={busy} className="no-min-size h-8 rounded-full bg-[var(--primary)] px-3 text-xs font-bold" style={{ color: 'var(--primary-foreground)' }}>{busy ? 'Connecting…' : 'Yes, connect it'}</button>
            <button type="button" onClick={() => setSuggest(null)} className="no-min-size h-8 rounded-full border border-[var(--border)] px-3 text-xs font-semibold">No</button>
          </div>
        </div>
      )}
      {msg && <p className="mt-1.5 text-xs text-[var(--muted-foreground)]" role="status">{msg}</p>}
    </div>
  )
}
