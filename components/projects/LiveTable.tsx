'use client'

// A table in the initiative overview read from a workspace spreadsheet. It shows
// which file version the numbers came from and when; members can refresh it to
// pull the newest version (it also refreshes on its own when the file changes).

import { useEffect, useState } from 'react'
import { RefreshCw, Table2 } from 'lucide-react'
import type { LiveTableView } from '@/lib/projects/live-tables'

function ago(iso: string | null): string {
  if (!iso) return 'not yet'
  const s = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1000)
  if (s < 60) return 'just now'
  if (s < 3600) return `${Math.floor(s / 60)} min ago`
  if (s < 86400) return `${Math.floor(s / 3600)} h ago`
  return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
}

export function LiveTable({ id, projectId, initial, canRefresh = false }: {
  id: string
  projectId?: string
  initial?: LiveTableView | null
  /** Members can pull the newest version */
  canRefresh?: boolean
}) {
  const [view, setView] = useState<LiveTableView | null>(initial ?? null)
  const [busy, setBusy] = useState(false)
  const [note, setNote] = useState<string | null>(null)

  // In the workspace the rows load on the client (members only)
  useEffect(() => {
    if (initial !== undefined || !projectId) return
    let live = true
    fetch(`/api/projects/${projectId}/live-tables?ids=${id}`)
      .then((r) => r.json())
      .then((j) => { if (live && j.success) setView(j.data.tables[0] ?? null) })
      .catch(() => {})
    return () => { live = false }
  }, [id, projectId, initial])

  const refresh = async () => {
    if (!projectId) return
    setBusy(true); setNote(null)
    try {
      const res = await fetch(`/api/projects/${projectId}/live-tables`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh: true, tableId: id }),
      })
      const j = await res.json()
      if (j.success && j.data.tables[0]) { setView(j.data.tables[0]); setNote(j.data.tables[0].error ? null : 'Up to date') }
      else setNote(j.error ?? 'Couldn’t refresh.')
    } catch { setNote('Couldn’t refresh. Check your connection.') }
    setBusy(false)
  }

  if (!view) return <div className="rounded-xl border border-dashed border-[var(--border)] p-4 text-sm text-[var(--muted-foreground)]">Loading table…</div>
  const data = view.data
  return (
    <figure className="space-y-2">
      {view.title && <figcaption className="text-base font-bold">{view.title}</figcaption>}
      {data && data.header.length > 0 ? (
        <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full sm:min-w-[420px] border-collapse text-left text-xs leading-5 sm:text-sm sm:leading-6 [&_th]:!px-2 [&_td]:!px-2 [&_th]:!py-2 [&_td]:!py-2 sm:[&_th]:!px-4 sm:[&_td]:!px-4 sm:[&_th]:!py-3 sm:[&_td]:!py-3">
            <thead className="bg-[var(--muted)]">
              <tr>{data.header.map((h, i) => <th key={i} scope="col" className="px-4 py-3 font-bold">{h}</th>)}</tr>
            </thead>
            <tbody>
              {data.rows.map((row, r) => (
                <tr key={r} className="border-t border-[var(--border)]">
                  {data.header.map((_, c) => <td key={c} className={`px-4 py-3 align-top ${/^[($-]?[$]?[\d,.]+%?\)?$/.test(row[c] ?? '') ? 'tabular-nums' : ''}`}>{row[c] ?? ''}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-[var(--border)] p-4 text-sm text-[var(--muted-foreground)]">This table has no rows yet.</p>
      )}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--muted-foreground)]">
        <span className="inline-flex items-center gap-1"><Table2 size={13} aria-hidden />
          From {view.sourceTitle ?? 'the workspace spreadsheet'}{view.sheet ? ` · ${view.sheet}` : ''}{view.range ? ` ${view.range}` : ''} · updated {ago(view.refreshedAt)}
        </span>
        {canRefresh && projectId && (
          <button type="button" onClick={refresh} disabled={busy} className="inline-flex min-h-9 items-center gap-1 rounded-full border border-[var(--border)] px-3 font-semibold text-[var(--foreground)] hover:bg-[var(--muted)] disabled:opacity-60">
            <RefreshCw size={13} className={busy ? 'animate-spin' : ''} aria-hidden /> {busy ? 'Refreshing…' : 'Refresh'}
          </button>
        )}
        {note && <span role="status">{note}</span>}
      </div>
      {view.error && <p role="alert" className="text-xs text-amber-600">Last refresh: {view.error}{data ? ' Showing the last good version.' : ''}</p>}
    </figure>
  )
}
