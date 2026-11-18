'use client'

import { useCallback, useEffect, useState } from 'react'
import { MessageSquare, Trash2 } from 'lucide-react'
import type { CommentTarget } from '@/lib/projects/item-comments'

interface ItemComment {
  id: string
  body: string
  createdAt: string
  user: { id: string; name: string | null; image: string | null }
  canDelete: boolean
}

/**
 * Comment thread for one initiative file or timeline item. Collapsed to a
 * "N comments" toggle; opens to the thread and a reply box. Whoever can see
 * the item can comment on it (the server enforces this).
 */
export function ItemComments({ projectId, type, id, count = 0, defaultOpen = false }: {
  projectId: string
  type: CommentTarget
  id: string
  /** Known count for the collapsed label */
  count?: number
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  const [comments, setComments] = useState<ItemComment[] | null>(null)
  const [canComment, setCanComment] = useState(false)
  const [draft, setDraft] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  // Once the thread is loaded its length is the count; before that, the known count
  const total = comments ? comments.length : count

  const load = useCallback(async () => {
    try {
      const res = await fetch(`/api/projects/${projectId}/comments?${new URLSearchParams({ type, id })}`)
      const json = await res.json()
      if (!json.success) throw new Error(json.error)
      setComments(json.data)
      setCanComment(!!json.canComment)
    } catch {
      setComments([])
      setError('Couldn’t load comments.')
    }
  }, [projectId, type, id])

  // Threads opened by default (e.g. inside an item's dialog) load on mount
  useEffect(() => { if (defaultOpen) void load() }, [defaultOpen, load])
  const toggle = () => {
    if (!open && comments === null) void load()
    setOpen((o) => !o)
  }

  const post = async () => {
    const body = draft.trim()
    if (!body || busy) return
    setBusy(true)
    setError(null)
    const res = await fetch(`/api/projects/${projectId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, id, body }),
    }).catch(() => null)
    const json = await res?.json().catch(() => null)
    setBusy(false)
    if (json?.success) {
      setDraft('')
      setComments((c) => [...(c ?? []), json.data])
    } else setError(json?.error ?? 'Could not post. Try again.')
  }

  const remove = async (commentId: string) => {
    const res = await fetch(`/api/projects/${projectId}/comments?commentId=${encodeURIComponent(commentId)}`, { method: 'DELETE' }).catch(() => null)
    if (res?.ok) {
      setComments((c) => (c ?? []).filter((x) => x.id !== commentId))
    }
  }

  return (
    <div className="text-sm">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-theme-muted hover:text-theme-primary"
      >
        <MessageSquare className="h-3.5 w-3.5" />
        {total === 0 ? 'Comment' : `${total} ${total === 1 ? 'comment' : 'comments'}`}
      </button>

      {open && (
        <div className="mt-2 space-y-2 border-l-2 border-[var(--border)] pl-3">
          {comments === null ? (
            <p className="text-xs text-theme-muted">Loading…</p>
          ) : comments.length === 0 ? (
            <p className="text-xs text-theme-muted">No comments yet.</p>
          ) : (
            <ul className="space-y-2">
              {comments.map((c) => (
                <li key={c.id} className="group">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold">{c.user.name ?? 'Member'}</span>
                    <span className="text-theme-muted">{new Date(c.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' })}</span>
                    {c.canDelete && (
                      <button type="button" onClick={() => remove(c.id)} aria-label="Delete comment" className="ml-auto p-0.5 text-theme-muted opacity-60 hover:text-red-600 hover:opacity-100">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>
                  <p className="whitespace-pre-wrap leading-relaxed">{c.body}</p>
                </li>
              ))}
            </ul>
          )}

          {canComment && (
            <div>
              <label className="sr-only" htmlFor={`comment-${type}-${id}`}>Write a comment</label>
              <textarea
                id={`comment-${type}-${id}`}
                value={draft}
                onChange={(e) => setDraft(e.target.value.slice(0, 2000))}
                onKeyDown={(e) => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) post() }}
                rows={2}
                placeholder="Add a comment…"
                className="w-full rounded-lg border-2 border-[var(--border)] bg-[var(--background)] p-2 text-sm focus:border-theme-primary focus:outline-none"
              />
              <div className="mt-1 flex items-center justify-between">
                <span className="text-[11px] text-theme-muted">{draft.length}/2000</span>
                <button
                  type="button"
                  onClick={post}
                  disabled={!draft.trim() || busy}
                  className="rounded-md bg-[var(--primary)] px-3 py-1 text-xs font-bold text-[var(--primary-foreground)] disabled:opacity-40"
                >
                  {busy ? 'Posting…' : 'Post'}
                </button>
              </div>
            </div>
          )}
          {error && <p className="text-xs text-red-600" role="status">{error}</p>}
        </div>
      )}
    </div>
  )
}

/** Comment counts for many items at once (only items the viewer can see). */
export async function fetchCommentCounts(projectId: string, type: CommentTarget, ids: string[]): Promise<Record<string, number>> {
  if (!ids.length) return {}
  const res = await fetch(`/api/projects/${projectId}/comments?${new URLSearchParams({ type, ids: ids.join(',') })}`).catch(() => null)
  const json = await res?.json().catch(() => null)
  return json?.success ? json.data : {}
}
