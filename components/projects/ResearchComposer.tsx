'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function ResearchComposer({ projectId, onSaved, onCancel }: { projectId: string; onSaved: () => void; onCancel: () => void }) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    setBusy(true)
    setError('')
    try {
      const response = await fetch(`/api/projects/${projectId}/research`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ heading: form.get('heading'), summary: form.get('summary'), fullContent: form.get('fullContent'), sourceTitle: form.get('sourceTitle'), sourceUrl: form.get('sourceUrl'), tags: String(form.get('tags') || '').split(',').map(tag => tag.trim()).filter(Boolean) }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error(result.error || 'Could not publish this research note.')
      onSaved()
    } catch (err) { setError(err instanceof Error ? err.message : 'Please try again.') }
    finally { setBusy(false) }
  }
  const inputClass = 'mt-2 w-full rounded-lg border-2 border-[var(--border)] bg-[var(--background)] p-3 text-[var(--foreground)]'
  return <form onSubmit={submit} className="space-y-4 rounded-2xl border-2 border-theme-primary bg-[var(--card)] p-6">
    <h3 className="text-xl font-black">Share research</h3>
    <label className="block font-semibold">Title<input name="heading" required maxLength={200} className={inputClass} /></label>
    <label className="block font-semibold">Summary<textarea name="summary" required maxLength={1500} rows={3} className={inputClass} /></label>
    <label className="block font-semibold">Research note<textarea name="fullContent" maxLength={30000} rows={10} className={inputClass} /></label>
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="block font-semibold">Source title<input name="sourceTitle" maxLength={200} className={inputClass} /></label>
      <label className="block font-semibold">Source URL<input name="sourceUrl" type="url" placeholder="https://…" className={inputClass} /></label>
    </div>
    <label className="block font-semibold">Tags, separated by commas<input name="tags" maxLength={300} className={inputClass} /></label>
    {error && <p role="alert" className="text-red-500">{error}</p>}
    <div className="flex gap-3"><Button type="submit" disabled={busy}>{busy ? 'PUBLISHING…' : 'PUBLISH RESEARCH'}</Button><Button type="button" variant="outline" disabled={busy} onClick={onCancel}>Cancel</Button></div>
  </form>
}
