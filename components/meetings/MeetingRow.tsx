'use client'

// One meeting: when, what, and (tap to open) every link: join, agenda, minutes,
// recording, the official page. Members can fill in a missing link or add a summary.

import { useState } from 'react'
import { ChevronDown, CircleSlash, ExternalLink, FileText, MapPin, MessageSquarePlus, Plus, ShieldCheck, Video } from 'lucide-react'
import type { MeetingView } from '@/lib/meetings/server'
import { dayKey, whenText } from './format'

interface Note { id: string; content: string; createdAt: string; user: { id: string; name: string | null } }
const field = 'w-full rounded-xl bg-[var(--muted)] px-3 py-2 text-sm outline-none placeholder:text-[var(--muted-foreground)]'
const link = 'no-min-size inline-flex h-9 items-center gap-1.5 rounded-full bg-[var(--muted)] px-3.5 text-xs font-bold !text-[var(--foreground)]'

export function MeetingRow({ m: initial, signedIn, showPlace = false }: { m: MeetingView; signedIn: boolean; showPlace?: boolean }) {
  const [m, setM] = useState(initial)
  const [open, setOpen] = useState(false)
  const [notes, setNotes] = useState<Note[] | null>(null)
  const [note, setNote] = useState('')
  const [kind, setKind] = useState<'minutesUrl' | 'recordingUrl' | 'agendaUrl'>('minutesUrl')
  const [url, setUrl] = useState('')
  const [msg, setMsg] = useState<string | null>(null)
  const past = +new Date(m.startsAt) < Date.now() - 3 * 3600000
  const canceled = m.status === 'CANCELED'

  const toggle = () => {
    setOpen((v) => !v)
    if (!open && notes === null) fetch(`/api/meetings/${m.id}/notes`).then((r) => r.json()).then((j) => setNotes(j.success ? j.data : [])).catch(() => setNotes([]))
  }
  const addNote = async () => {
    if (!note.trim()) return
    const res = await fetch(`/api/meetings/${m.id}/notes`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content: note }) })
    const j = await res.json()
    if (j.success) { setNotes((n) => [...(n ?? []), j.data]); setNote(''); setMsg(null) } else setMsg(j.error)
  }
  const addLink = async () => {
    const res = await fetch(`/api/meetings/${m.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ [kindValue]: url }) })
    const j = await res.json()
    if (j.success) { setM(j.data); setUrl(''); setMsg(null) } else setMsg(j.error)
  }

  const missing = [!m.minutesUrl && 'minutesUrl', !m.recordingUrl && 'recordingUrl', !m.agendaUrl && 'agendaUrl'].filter(Boolean) as ('minutesUrl' | 'recordingUrl' | 'agendaUrl')[]
  // The dropdown only offers links that are still missing, so the chosen type must be one of them
  const kindValue = missing.includes(kind) ? kind : missing[0]

  return (
    <li className={`overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] ${canceled ? 'opacity-80' : ''}`}>
      <button type="button" onClick={toggle} aria-expanded={open} className="no-min-size flex w-full items-start gap-3 p-3 text-left">
        <span className="grid w-12 shrink-0 place-items-center rounded-xl bg-[var(--muted)] py-1.5 text-center leading-none">
          <span className="text-[10px] font-bold uppercase text-[var(--muted-foreground)]">{new Date(dayKey(m) + 'T12:00:00').toLocaleDateString('en-US', { month: 'short' })}</span>
          <span className="text-lg font-black">{+dayKey(m).slice(8, 10)}</span>
        </span>
        <span className="min-w-0 flex-1">
          <span className={`block text-[15px] font-bold leading-snug ${canceled ? 'line-through' : ''}`}>{m.title}</span>
          {showPlace && <span className="block truncate text-xs font-semibold text-[var(--primary)]">{m.place.label}</span>}
          <span className="block text-xs text-[var(--muted-foreground)]">{whenText(m)}</span>
          <span className="mt-1.5 flex flex-wrap items-center gap-1 text-[10px] font-bold">
            {canceled && <span className="inline-flex items-center gap-0.5 rounded-full bg-rose-500/15 px-2 py-0.5 text-rose-600 dark:text-rose-300"><CircleSlash className="h-3 w-3" aria-hidden />Canceled</span>}
            {m.official ? <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-700 dark:text-emerald-300"><ShieldCheck className="h-3 w-3" aria-hidden />Official calendar</span> : <span className="rounded-full bg-[var(--muted)] px-2 py-0.5 text-[var(--muted-foreground)]">Added by a member</span>}
            {m.agendaUrl && <span className="rounded-full bg-[var(--muted)] px-2 py-0.5">Agenda</span>}
            {m.minutesUrl && <span className="rounded-full bg-[var(--muted)] px-2 py-0.5">Minutes</span>}
            {m.recordingUrl && <span className="rounded-full bg-[var(--muted)] px-2 py-0.5">Video</span>}
            {m.notes > 0 && <span className="rounded-full bg-[var(--muted)] px-2 py-0.5">{m.notes} {m.notes === 1 ? 'note' : 'notes'}</span>}
          </span>
        </span>
        <ChevronDown className={`mt-1 h-4 w-4 shrink-0 text-[var(--muted-foreground)] transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden />
      </button>

      {open && (
        <div className="space-y-3 border-t border-[var(--border)] p-3 text-sm ">
          {m.statusNote && <p className="rounded-lg bg-rose-500/10 p-2 text-xs">{m.statusNote}</p>}
          {m.location && <p className="flex gap-2 text-[var(--muted-foreground)]"><MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />{m.location}</p>}
          <div className="flex flex-wrap gap-2">
            {m.joinUrl && <a href={m.joinUrl} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--primary-foreground)' }} className="no-min-size inline-flex h-9 items-center gap-1.5 rounded-full bg-[var(--primary)] px-3.5 text-xs font-bold"><Video className="h-4 w-4" aria-hidden />Join <ExternalLink className="h-3 w-3" aria-hidden /></a>}
            {m.agendaUrl && <a href={m.agendaUrl} target="_blank" rel="noopener noreferrer nofollow" className={link}><FileText className="h-4 w-4" aria-hidden />Agenda</a>}
            {m.minutesUrl && <a href={m.minutesUrl} target="_blank" rel="noopener noreferrer nofollow" className={link}><FileText className="h-4 w-4" aria-hidden />Minutes</a>}
            {m.recordingUrl && <a href={m.recordingUrl} target="_blank" rel="noopener noreferrer nofollow" className={link}><Video className="h-4 w-4" aria-hidden />Recording</a>}
            {m.sourceUrl && <a href={m.sourceUrl} target="_blank" rel="noopener noreferrer nofollow" className={link}><ExternalLink className="h-4 w-4" aria-hidden />Official page</a>}
          </div>
          {!m.joinUrl && !signedIn && !past && <p className="text-xs text-[var(--muted-foreground)]">Sign in to see the join link when one is posted.</p>}
          {past && !m.minutesUrl && <p className="text-xs text-[var(--muted-foreground)]">Minutes aren’t posted yet. Many boards publish them after their next meeting.</p>}

          {signedIn && missing.length > 0 && (
            <div className="space-y-1.5">
              <p className="text-xs font-semibold">Know where it’s posted? Add the link</p>
              <div className="flex gap-1.5">
                <select value={kindValue} onChange={(e) => setKind(e.target.value as typeof kind)} aria-label="Link type" className={`${field} !w-28 shrink-0`}>
                  {missing.map((k) => <option key={k} value={k}>{k === 'minutesUrl' ? 'Minutes' : k === 'recordingUrl' ? 'Recording' : 'Agenda'}</option>)}
                </select>
                <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://…" aria-label="Link" inputMode="url" className={`${field} min-w-0 flex-1`} />
                <button type="button" onClick={addLink} disabled={!url.trim()} aria-label="Add link" className="no-min-size grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--primary)] disabled:opacity-40" style={{ color: 'var(--primary-foreground)' }}><Plus className="h-4 w-4" /></button>
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <p className="flex items-center gap-1.5 text-xs font-semibold"><MessageSquarePlus className="h-3.5 w-3.5" aria-hidden />What happened (member notes)</p>
            {notes?.map((n) => (
              <div key={n.id} className="rounded-xl bg-[var(--muted)] p-2.5 text-[13px]"><p className="whitespace-pre-wrap">{n.content}</p><p className="mt-1 text-[11px] text-[var(--muted-foreground)]">{n.user.name || 'Member'} · {new Date(n.createdAt).toLocaleDateString()}</p></div>
            ))}
            {notes?.length === 0 && <p className="text-xs text-[var(--muted-foreground)]">No notes yet.</p>}
            {signedIn ? (
              <div className="flex gap-1.5">
                <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={2} maxLength={2000} placeholder="Key decisions, votes, what to know…" aria-label="Add a note" className={`${field} min-w-0 flex-1 resize-none`} />
                <button type="button" onClick={addNote} disabled={!note.trim()} aria-label="Post note" className="no-min-size grid h-10 w-10 shrink-0 place-items-center self-end rounded-full bg-[var(--primary)] disabled:opacity-40" style={{ color: 'var(--primary-foreground)' }}><Plus className="h-4 w-4" /></button>
              </div>
            ) : <p className="text-xs text-[var(--muted-foreground)]">Sign in to add a note.</p>}
            {msg && <p role="alert" className="text-xs text-red-500">{msg}</p>}
          </div>
        </div>
      )}
    </li>
  )
}
