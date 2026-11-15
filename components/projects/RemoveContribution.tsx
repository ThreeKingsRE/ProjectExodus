'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function RemoveContribution({ endpoint, messageId, label, onRemoved }: { endpoint: string; messageId?: string; label: string; onRemoved: () => void }) {
  const [confirming, setConfirming] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  async function remove() {
    setBusy(true)
    setError('')
    try {
      const response = await fetch(endpoint, { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, ...(messageId ? { body: JSON.stringify({ messageId }) } : {}) })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error(result.error || 'Could not remove this contribution.')
      onRemoved()
    } catch (err) { setError(err instanceof Error ? err.message : 'Please try again.') }
    finally { setBusy(false) }
  }
  return <div className="my-2 text-left">{confirming ? <><p className="text-sm">Permanently remove this contribution? This cannot be undone.</p><Button variant="outline" size="sm" disabled={busy} onClick={remove}>{busy ? 'REMOVING…' : 'Confirm removal'}</Button><Button variant="ghost" size="sm" disabled={busy} onClick={() => setConfirming(false)}>Cancel</Button></> : <Button variant="ghost" size="sm" onClick={() => setConfirming(true)}>{label}</Button>}{error && <p role="alert" className="text-red-500">{error}</p>}</div>
}
