'use client'

import { useCallback, useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Check, Loader2, Mail, Search, UserPlus, X } from 'lucide-react'

interface Invite { id: string; email: string | null; role: string; createdAt: string; invitedUser: { id: string; name: string | null } | null; invitedBy: { name: string | null } }
interface JoinRequest { id: string; message: string | null; createdAt: string; user: { id: string; name: string | null; image: string | null; bio?: string | null } }
interface Person { id: string; name: string | null; image?: string | null }

const ROLE_LABEL: Record<string, string> = { CONTRIBUTOR: 'Collaborator', MODERATOR: 'Moderator', ADMIN: 'Admin' }

/** Owners and admins invite people and answer requests to collaborate. */
export function TeamInvitesPanel({ projectId, onChanged }: { projectId: string; onChanged: () => void }) {
  const [canManage, setCanManage] = useState(false)
  const [canInviteAdmins, setCanInviteAdmins] = useState(false)
  const [invites, setInvites] = useState<Invite[]>([])
  const [requests, setRequests] = useState<JoinRequest[]>([])
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Person[]>([])
  const [picked, setPicked] = useState<Person | null>(null)
  const [role, setRole] = useState('CONTRIBUTOR')
  const [message, setMessage] = useState('')
  const [busy, setBusy] = useState<string | null>(null)
  const [notice, setNotice] = useState<{ ok: boolean; text: string } | null>(null)

  const load = useCallback(async () => {
    const res = await fetch(`/api/projects/${projectId}/invites`).then(r => r.json()).catch(() => null)
    if (!res?.success) return
    setCanManage(res.data.canManage)
    setCanInviteAdmins(res.data.canInviteAdmins)
    setInvites(res.data.invites ?? [])
    setRequests(res.data.requests ?? [])
  }, [projectId])

  useEffect(() => { load() }, [load])

  // Search people by name as the owner types (an email address is invited directly)
  useEffect(() => {
    const q = query.trim()
    if (picked || q.length < 2 || q.includes('@')) { setResults([]); return }
    const t = setTimeout(async () => {
      const res = await fetch(`/api/users/search?q=${encodeURIComponent(q)}&limit=6`).then(r => r.json()).catch(() => null)
      setResults(res?.data?.users ?? [])
    }, 250)
    return () => clearTimeout(t)
  }, [query, picked])

  if (!canManage) return null

  const act = async (key: string, url: string, body: unknown) => {
    setBusy(key)
    setNotice(null)
    try {
      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json.error || 'Something went wrong.')
      await load()
      onChanged()
      return json
    } catch (e) {
      setNotice({ ok: false, text: e instanceof Error ? e.message : 'Something went wrong.' })
      return null
    } finally {
      setBusy(null)
    }
  }

  const sendInvite = async () => {
    const isEmail = !picked && query.includes('@')
    if (!picked && !isEmail) { setNotice({ ok: false, text: 'Choose a person from the list or type an email address.' }); return }
    const json = await act('invite', `/api/projects/${projectId}/invites`, {
      ...(picked ? { userId: picked.id } : { email: query.trim() }), role, message,
    })
    if (json) {
      setNotice({ ok: true, text: `Invitation sent to ${json.data.invitedName}${json.data.emailed ? ' by email too' : ''}. They’ll see it on this page.` })
      setQuery(''); setPicked(null); setMessage('')
    }
  }

  const input = 'w-full rounded-lg border-2 border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm'

  return (
    <Card className="border-2 border-theme-primary">
      <CardContent className="p-4 space-y-5">
        <div>
          <h2 className="text-xl font-black flex items-center gap-2"><UserPlus className="w-5 h-5" />BUILD YOUR TEAM</h2>
          <p className="text-sm text-theme-muted">Anyone can follow. Collaborators join only when you invite them or approve their request.</p>
        </div>

        {requests.length > 0 && (
          <section className="space-y-2">
            <h3 className="font-black">Requests to collaborate ({requests.length})</h3>
            {requests.map(r => (
              <div key={r.id} className="flex flex-wrap items-start gap-3 rounded-lg border-2 border-[var(--border)] p-3">
                <div className="min-w-0 flex-1">
                  <p className="font-bold">{r.user.name || 'A follower'}</p>
                  {r.user.bio && <p className="text-xs text-theme-muted line-clamp-2">{r.user.bio}</p>}
                  {r.message && <p className="mt-1 text-sm italic">“{r.message}”</p>}
                  <p className="text-xs text-theme-muted">{new Date(r.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="font-bold" disabled={!!busy} onClick={() => act(`a-${r.id}`, `/api/projects/${projectId}/join-requests/${r.id}`, { action: 'approve' })}>
                    {busy === `a-${r.id}` ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Check className="w-4 h-4 mr-1" />}ADD TO TEAM
                  </Button>
                  <Button size="sm" variant="ghost" disabled={!!busy} onClick={() => act(`d-${r.id}`, `/api/projects/${projectId}/join-requests/${r.id}`, { action: 'decline' })}>Decline</Button>
                </div>
              </div>
            ))}
          </section>
        )}

        <section className="space-y-2">
          <h3 className="font-black">Invite someone</h3>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-theme-muted" />
            <input
              className={`${input} pl-9`}
              value={picked ? picked.name || 'Selected person' : query}
              onChange={e => { setPicked(null); setQuery(e.target.value) }}
              placeholder="Search by name, or type an email address"
              aria-label="Person to invite"
            />
            {picked && <button className="absolute right-3 top-1/2 -translate-y-1/2" onClick={() => setPicked(null)} aria-label="Clear"><X className="w-4 h-4" /></button>}
            {results.length > 0 && (
              <ul className="absolute z-20 mt-1 w-full overflow-hidden rounded-lg border-2 border-[var(--border)] bg-[var(--background)] shadow-lg">
                {results.map(p => (
                  <li key={p.id}>
                    <button className="w-full px-3 py-2 text-left text-sm hover:bg-[var(--muted)]" onClick={() => { setPicked(p); setResults([]) }}>{p.name || 'Unnamed member'}</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <select className={`${input} w-auto`} value={role} onChange={e => setRole(e.target.value)} aria-label="Role">
              <option value="CONTRIBUTOR">Collaborator</option>
              <option value="MODERATOR">Moderator</option>
              {canInviteAdmins && <option value="ADMIN">Admin</option>}
            </select>
            <input className={`${input} flex-1 min-w-[12rem]`} maxLength={1000} value={message} onChange={e => setMessage(e.target.value)} placeholder="Personal note (optional)" aria-label="Personal note" />
            <Button className="font-bold" disabled={busy === 'invite'} onClick={sendInvite}>
              {busy === 'invite' ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Mail className="w-4 h-4 mr-1" />}INVITE
            </Button>
          </div>
          {notice && <p className={`text-sm font-bold ${notice.ok ? 'text-green-600' : 'text-red-500'}`} role="status">{notice.text}</p>}
        </section>

        {invites.length > 0 && (
          <section className="space-y-2">
            <h3 className="font-black">Waiting for an answer ({invites.length})</h3>
            <ul className="space-y-1">
              {invites.map(i => (
                <li key={i.id} className="flex items-center gap-2 rounded-lg border-2 border-[var(--border)] px-3 py-2 text-sm">
                  <span className="min-w-0 flex-1 truncate"><strong>{i.invitedUser?.name || i.email}</strong> <span className="text-theme-muted">as {ROLE_LABEL[i.role] ?? i.role} · invited by {i.invitedBy.name || 'an admin'}</span></span>
                  <Button size="sm" variant="ghost" disabled={!!busy} onClick={() => act(`r-${i.id}`, `/api/projects/${projectId}/invites/${i.id}`, { action: 'revoke' })}>Cancel</Button>
                </li>
              ))}
            </ul>
          </section>
        )}
      </CardContent>
    </Card>
  )
}
