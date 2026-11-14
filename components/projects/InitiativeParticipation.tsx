'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'

export function InitiativeParticipation({ projectId, role = null }: { projectId: string; role?: string | null }) {
  const router = useRouter()
  const [currentRole, setCurrentRole] = useState(role)
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')
  async function choose(intent: 'follow' | 'collaborate') {
    setBusy(true)
    setMessage('')
    try {
      const response = await fetch('/api/projects/join', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ projectId, intent }) })
      const result = await response.json()
      if (response.status === 401) { router.push(`/auth/signin?callbackUrl=${encodeURIComponent(window.location.pathname)}`); return }
      if (!response.ok || !result.success) throw new Error(result.error || 'Could not save your participation.')
      setCurrentRole(result.data.role)
      setMessage(result.approvalRequired ? 'You are following. Contact the organizer about collaboration requirements.' : intent === 'follow' ? 'You are following this initiative.' : 'You joined as a collaborator.')
      router.refresh()
    } catch (error) { setMessage(error instanceof Error ? error.message : 'Please try again.') }
    finally { setBusy(false) }
  }
  const collaborating = !!currentRole && currentRole !== 'VIEWER'
  return <div className="space-y-2">
    <div className="flex flex-wrap gap-2">
      <Button size="sm" variant="outline" disabled={busy || !!currentRole} onClick={() => choose('follow')}>{currentRole ? 'FOLLOWING' : 'FOLLOW INITIATIVE'}</Button>
      <Button size="sm" disabled={busy || collaborating} onClick={() => choose('collaborate')}>{collaborating ? 'COLLABORATING' : busy ? 'SAVING…' : 'COLLABORATE'}</Button>
    </div>
    <p role="status" className="max-w-xl text-sm text-theme-muted">{message || 'Following saves your interest. Collaborating joins the project team; it is not a counted endorsement.'}</p>
  </div>
}
