'use client'

// Story editor helper: link a table to a workspace spreadsheet. Pick the file,
// the sheet, and optionally a range; it inserts {{table:ID}} into the story at the
// cursor. The table then follows the newest version of that file.

import { useState } from 'react'
import { Table2 } from 'lucide-react'

interface FileOption { id: string; title: string }

export function LiveTableInserter({ projectId, onInsert }: { projectId: string; onInsert: (token: string) => void }) {
  const [open, setOpen] = useState(false)
  const [files, setFiles] = useState<FileOption[] | null>(null)
  const [fileId, setFileId] = useState('')
  const [sheets, setSheets] = useState<string[]>([])
  const [sheet, setSheet] = useState('')
  const [range, setRange] = useState('')
  const [title, setTitle] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const start = async () => {
    setOpen(true); setError(null)
    if (files) return
    const j = await fetch(`/api/projects/${projectId}/live-tables`).then((r) => r.json()).catch(() => null)
    if (j?.success) setFiles(j.data.files)
    else setError(j?.error ?? 'Couldn’t load the workspace spreadsheets.')
  }

  const pickFile = async (id: string) => {
    setFileId(id); setSheets([]); setSheet(''); setError(null)
    if (!id) return
    setBusy(true)
    const j = await fetch(`/api/projects/${projectId}/live-tables?fileId=${encodeURIComponent(id)}`).then((r) => r.json()).catch(() => null)
    setBusy(false)
    if (j?.success) { setSheets(j.data.sheets); setSheet(j.data.sheets[0] ?? '') }
    else setError(j?.error ?? 'Couldn’t read that file.')
  }

  const insert = async () => {
    setBusy(true); setError(null)
    const j = await fetch(`/api/projects/${projectId}/live-tables`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fileId, sheet: sheet || undefined, range: range || undefined, title: title || undefined }),
    }).then((r) => r.json()).catch(() => null)
    setBusy(false)
    if (!j?.success) { setError(j?.error ?? 'Couldn’t create the table.'); return }
    onInsert(j.data.token)
    setOpen(false); setRange(''); setTitle('')
  }

  if (!open) {
    return (
      <button type="button" onClick={start} className="inline-flex min-h-10 items-center gap-2 rounded-lg border-2 border-[var(--border)] px-3 text-sm font-bold hover:bg-[var(--muted)]">
        <Table2 size={16} aria-hidden /> Insert live table from a spreadsheet
      </button>
    )
  }
  const field = 'w-full rounded-lg border-2 border-[var(--border)] bg-[var(--background)] p-2'
  return (
    <div className="space-y-3 rounded-xl border-2 border-[var(--border)] p-4">
      <p className="text-sm font-bold">Live table</p>
      <p className="text-xs text-theme-muted">Reads a sheet from a workspace spreadsheet (.xlsx, .csv or Google Sheet). When a newer version of the file is added (…-v13.xlsx), the table updates; anyone on the team can also press Refresh.</p>
      {files && files.length === 0 && <p className="text-sm">No spreadsheets in the workspace yet. Add one under Files first.</p>}
      {files && files.length > 0 && (
        <>
          <label className="block text-sm font-semibold">Spreadsheet
            <select value={fileId} onChange={(e) => pickFile(e.target.value)} className={field}>
              <option value="">Choose a file…</option>
              {files.map((f) => <option key={f.id} value={f.id}>{f.title}</option>)}
            </select>
          </label>
          {sheets.length > 0 && (
            <label className="block text-sm font-semibold">Sheet
              <select value={sheet} onChange={(e) => setSheet(e.target.value)} className={field}>
                {sheets.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </label>
          )}
          <label className="block text-sm font-semibold">Cells (optional)
            <input value={range} onChange={(e) => setRange(e.target.value)} placeholder="e.g. D5:E12 — blank for the whole sheet" className={field} />
          </label>
          <label className="block text-sm font-semibold">Caption (optional)
            <input value={title} onChange={(e) => setTitle(e.target.value)} maxLength={120} placeholder="e.g. Base case at a glance" className={field} />
          </label>
        </>
      )}
      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
      <div className="flex gap-2">
        <button type="button" onClick={insert} disabled={!fileId || busy} className="min-h-10 rounded-lg bg-[var(--primary)] px-4 text-sm font-bold text-[var(--primary-foreground)] disabled:opacity-50">{busy ? 'Working…' : 'Insert table'}</button>
        <button type="button" onClick={() => setOpen(false)} className="min-h-10 rounded-lg border-2 border-[var(--border)] px-4 text-sm font-bold">Cancel</button>
      </div>
    </div>
  )
}
