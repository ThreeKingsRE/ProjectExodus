'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/Button'
import { Bell, BellRing, Check, Handshake, Loader2, Mail, X } from 'lucide-react'

interface InviteInfo {
  mine: { id: string; role: string; message: string | null; invitedBy: { name: string | null } } | null
  myRequest: { id: string; status: string } | null
}

const ROLE_WORD: Record<string, string> = { CONTRIBUTOR: 'a collaborator', MODERATOR: 'a moderator', ADMIN: 'an admin' }

/**
 * Follow / Ask to collaborate, and the banner for a pending invitation.
 * Anyone can follow; only the owner's invitation or approval makes a collaborator.
 */
export function ParticipationBar({ projectId, projectName, isCreator, isTeam, isFollowing, onChanged }: {
  projectId: string
  projectName: string
  isCreator: boolean
  isTeam: boolean
  isFollowing: boolean
  onChanged: () => void
}) {
  const { status } = useSession()
  const router = useRouter()
  const [info, setInfo] = useState<InviteInfo | null>(null)
  const [busy, setBusy] = useState<string | null>(null)
  const [asking, setAsking] = useState(false)
  const [note, setNote] = useState('')
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    if (status !== 'authenticated') return
    const res = await fetch(`/api/projects/${projectId}/invites`).then(r => r.json()).catch(() => null)
    if (res?.success) setInfo({ mine: res.data.mine, myRequest: res.data.myRequest })
  }, [projectId, status])

  useEffect(() => { load() }, [load])

  const call = async (key: string, url: string, body: unknown, method = 'POST') => {
    if (status !== 'authenticated') { router.push('/auth/signin'); return }
    setBusy(key)
    setError(null)
    try {
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || json.success === false) throw new Error(json.error || 'Something went wrong.')
      await load()
      onChanged()
      return true
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong.')
      return false
    } finally {
      setBusy(null)
    }
  }

  if (isCreator) return null
  const invite = info?.mine
  const requestPending = info?.myRequest?.status === 'PENDING'

  return (
    <div className="space-y-3">
      {invite && !isTeam && (
        <div className="flex flex-wrap items-center gap-3 rounded-xl border-2 border-theme-primary bg-[var(--primary)]/10 p-3">
          <Mail className="w-5 h-5 text-theme-primary shrink-0" />
          <p className="min-w-0 flex-1 text-sm">
            <strong>{invite.invitedBy.name || 'The owner'}</strong> invited you to join {projectName} as {ROLE_WORD[invite.role] ?? 'a collaborator'}.
            {invite.message && <span className="block text-theme-muted italic">“{invite.message}”</span>}
          </p>
          <div className="flex gap-2">
            <Button size="sm" className="font-bold" disabled={!!busy} onClick={() => call('accept', `/api/projects/${projectId}/invites/${invite.id}`, { action: 'accept' })}>
              {busy === 'accept' ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Check className="w-4 h-4 mr-1" />}ACCEPT
            </Button>
            <Button size="sm" variant="ghost" disabled={!!busy} onClick={() => call('decline', `/api/projects/${projectId}/invites/${invite.id}`, { action: 'decline' })}>Decline</Button>
          </div>
        </div>
      )}

      {!isTeam && (
        <div className="flex flex-wrap items-center gap-2">
          {isFollowing ? (
            <Button
              size="sm"
              variant="outline"
              className="font-black"
              disabled={!!busy}
              onClick={async () => {
                if (!window.confirm(`Unfollow ${projectName}?`)) return
                await call('unfollow', `/api/projects/join?projectId=${encodeURIComponent(projectId)}`, {}, 'DELETE')
              }}
              title="Unfollow"
            >
              <BellRing className="w-4 h-4 mr-1" />FOLLOWING
            </Button>
          ) : (
            <Button size="sm" className="font-black" disabled={!!busy} onClick={() => call('follow', '/api/projects/join', { projectId, intent: 'follow' })}>
              {busy === 'follow' ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Bell className="w-4 h-4 mr-1" />}FOLLOW
            </Button>
          )}

          {requestPending ? (
            <>
              <span className="text-sm font-bold text-theme-muted">Request to collaborate sent</span>
              <Button size="sm" variant="ghost" disabled={!!busy} onClick={() => call('cancel', `/api/projects/${projectId}/join-requests/${info!.myRequest!.id}`, { action: 'cancel' })}>Cancel request</Button>
            </>
          ) : !invite && (
            <Button size="sm" variant="outline" className="font-black" disabled={!!busy} onClick={() => (status === 'authenticated' ? setAsking(true) : router.push('/auth/signin'))}>
              <Handshake className="w-4 h-4 mr-1" />ASK TO COLLABORATE
            </Button>
          )}
        </div>
      )}

      {asking && (
        <div className="space-y-2 rounded-xl border-2 border-[var(--border)] p-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold">Ask to join the team</p>
            <button onClick={() => setAsking(false)} aria-label="Close"><X className="w-4 h-4" /></button>
          </div>
          <textarea
            rows={3}
            maxLength={1000}
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder="Tell the owner how you’d like to help (optional)"
            className="w-full rounded-lg border-2 border-[var(--border)] bg-[var(--background)] p-2 text-sm"
          />
          <p className="text-xs text-theme-muted">You’ll follow the initiative now. The owner decides whether to add you to the team.</p>
          <Button
            size="sm"
            className="font-bold"
            disabled={!!busy}
            onClick={async () => { if (await call('ask', '/api/projects/join', { projectId, intent: 'collaborate', message: note })) { setAsking(false); setNote('') } }}
          >
            {busy === 'ask' ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Handshake className="w-4 h-4 mr-1" />}SEND REQUEST
          </Button>
        </div>
      )}

      {error && <p className="text-sm font-bold text-red-500" role="alert">{error}</p>}
    </div>
  )
}
