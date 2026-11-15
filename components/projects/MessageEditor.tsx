'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function MessageEditor({ projectId, message, onSaved }: { projectId: string; message: { id: string; content: string }; onSaved: () => void }) {
  const [editing, setEditing] = useState(false)
  const [content, setContent] = useState(message.content)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  if (!editing) return <Button variant="ghost" size="sm" onClick={() => { setContent(message.content); setEditing(true); setError('') }}>Edit message</Button>
  async function save(event: React.FormEvent) {
    event.preventDefault()
    setBusy(true)
    setError('')
    try {
      const response = await fetch(`/api/projects/${projectId}/messages`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messageId: message.id, content }) })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error(result.error || 'Could not save your message.')
      setEditing(false)
      onSaved()
    } catch (err) { setError(err instanceof Error ? err.message : 'Please try again.') }
    finally { setBusy(false) }
  }
  return <form onSubmit={save} className="mt-3 space-y-3 text-left">
    <label className="block font-semibold">Edit message<textarea value={content} onChange={e => setContent(e.target.value)} rows={10} maxLength={10000} required className="mt-2 w-full rounded-lg border-2 border-[var(--border)] bg-[var(--background)] p-3 text-[var(--foreground)]" /></label>
    {error && <p role="alert" className="text-red-500">{error}</p>}
    <div className="flex gap-2"><Button type="submit" disabled={busy || !content.trim()}>{busy ? 'SAVING…' : 'SAVE MESSAGE'}</Button><Button type="button" variant="outline" disabled={busy} onClick={() => setEditing(false)}>Cancel</Button></div>
  </form>
}
