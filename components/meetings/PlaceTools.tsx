'use client'

// For one place: add a meeting by hand, or connect its official calendar so it
// updates automatically.

import { useState } from 'react'
import { Loader2, Plug } from 'lucide-react'
import { zonedToUtc } from '@/lib/calendar/ics'

const field = 'w-full rounded-xl bg-[var(--muted)] px-3 py-2.5 text-[15px] outline-none placeholder:text-[var(--muted-foreground)]'

/** "2026-12-09T19:00" in the place's timezone -> ISO */
const toIso = (local: string, tz: string) => {
  const m = local.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/)
  return m ? new Date(zonedToUtc(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], 0, tz)).toISOString() : ''
}

export function AddMeeting({ slug, tz, onAdded }: { slug: string; tz: string; onAdded: () => void }) {
  const [open, setOpen] = useState(false)
  const [f, setF] = useState({ title: '', body: '', startsAt: '', endsAt: '', location: '', joinUrl: '', agendaUrl: '', minutesUrl: '', recordingUrl: '' })
  const [repeat, setRepeat] = useState<'' | 'WEEKLY' | 'BIWEEKLY' | 'MONTHLY_NTH'>('')
  const [count, setCount] = useState(12)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement>) => setF((p) => ({ ...p, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true); setError(null)
    const res = await fetch('/api/meetings', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug, ...f, title: f.title || f.body, startsAt: toIso(f.startsAt, tz), endsAt: f.endsAt ? toIso(f.endsAt, tz) : null, timezone: tz, repeat: repeat ? { kind: repeat, count } : undefined }) })
    const j = await res.json().catch(() => ({}))
    setBusy(false)
    if (!res.ok) { setError(j.error || 'Couldn’t add that.'); return }
    setOpen(false); setRepeat(''); setF({ title: '', body: '', startsAt: '', endsAt: '', location: '', joinUrl: '', agendaUrl: '', minutesUrl: '', recordingUrl: '' }); onAdded()
  }

  if (!open) return <button type="button" onClick={() => setOpen(true)} className="no-min-size inline-flex h-10 items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-4 text-sm font-bold">+ Add a meeting</button>
  return (
    <form onSubmit={submit} className="space-y-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3">
      <p className="text-sm font-bold">Add a meeting</p>
      <input required value={f.title} onChange={set('title')} placeholder="Board or committee (Town Board, Planning Board…)" aria-label="Title" maxLength={160} className={field} />
      <div className="grid grid-cols-2 gap-2">
        <label className="text-[11px] font-semibold">Starts<input required type="datetime-local" value={f.startsAt} onChange={set('startsAt')} className={`${field} mt-1`} /></label>
        <label className="text-[11px] font-semibold">Ends (optional)<input type="datetime-local" value={f.endsAt} onChange={set('endsAt')} className={`${field} mt-1`} /></label>
      </div>
      <p className="text-[11px] text-[var(--muted-foreground)]">Times are in this place’s time zone ({tz.replace('_', ' ')}).</p>
      <label className="block text-[11px] font-semibold">Repeats
        <select value={repeat} onChange={(e) => setRepeat(e.target.value as typeof repeat)} className={`${field} mt-1`}>
          <option value="">Just this once</option>
          <option value="WEEKLY">Every week</option>
          <option value="BIWEEKLY">Every 2 weeks</option>
          <option value="MONTHLY_NTH">Monthly, same weekday (like the 2nd Wednesday)</option>
        </select>
      </label>
      {repeat && <label className="block text-[11px] font-semibold">How many meetings to add (up to 24)<input type="number" min={2} max={24} value={count} onChange={(e) => setCount(+e.target.value)} className={`${field} mt-1`} /></label>}
      {repeat && <p className="text-[11px] text-[var(--muted-foreground)]">Use the schedule the town publishes. Holidays can move a meeting, so check the official page when it matters.</p>}
      <input value={f.location} onChange={set('location')} placeholder="Where (Town Hall, 1 Main St…)" aria-label="Location" maxLength={300} className={field} />
      <input value={f.joinUrl} onChange={set('joinUrl')} placeholder="Join link (Zoom, Meet, Teams…)" aria-label="Join link" inputMode="url" className={field} />
      <input value={f.agendaUrl} onChange={set('agendaUrl')} placeholder="Agenda link" aria-label="Agenda link" inputMode="url" className={field} />
      <input value={f.minutesUrl} onChange={set('minutesUrl')} placeholder="Minutes link (after it happens)" aria-label="Minutes link" inputMode="url" className={field} />
      <input value={f.recordingUrl} onChange={set('recordingUrl')} placeholder="Recording link" aria-label="Recording link" inputMode="url" className={field} />
      <p className="text-[11px] text-[var(--muted-foreground)]">Links can be any website (https). Join links show only to signed-in members.</p>
      {error && <p role="alert" className="text-xs text-red-500">{error}</p>}
      <div className="flex gap-2">
        <button type="submit" disabled={busy} style={{ color: 'var(--primary-foreground)' }} className="no-min-size inline-flex h-10 items-center gap-2 rounded-full bg-[var(--primary)] px-5 text-sm font-bold disabled:opacity-60">{busy && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />} Add</button>
        <button type="button" onClick={() => setOpen(false)} className="no-min-size h-10 px-3 text-sm font-semibold">Cancel</button>
      </div>
    </form>
  )
}

export function ConnectSource({ slug, onConnected }: { slug: string; onConnected: () => void }) {
  const [open, setOpen] = useState(false)
  const [kind, setKind] = useState<'LEGISTAR' | 'ICS'>('LEGISTAR')
  const [ref, setRef] = useState('')
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true); setMsg(null)
    const res = await fetch('/api/meetings/sources', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug, kind, ref }) })
    const j = await res.json().catch(() => ({}))
    setBusy(false)
    if (!res.ok) { setMsg(j.error || 'That didn’t work.'); return }
    setMsg(`Connected. ${j.data.count} meetings imported, and it keeps itself up to date.`); setRef(''); onConnected()
  }

  if (!open) return <button type="button" onClick={() => setOpen(true)} className="no-min-size inline-flex h-10 items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 text-sm font-bold"><Plug className="h-4 w-4" aria-hidden />Connect a calendar (any calendar link)</button>
  return (
    <form onSubmit={submit} className="space-y-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3">
      <p className="text-sm font-bold">Connect the official calendar</p>
      <p className="text-xs text-[var(--muted-foreground)]">Paste <strong>any calendar link or calendar page</strong> from any website (.gov, .us, .org, .com…): a “Subscribe” / “iCal” link (.ics or webcal://), a Google Calendar’s public address, the town’s calendar page itself (we’ll look for the feed), or a Legistar name. Once connected, it updates by itself for everyone.</p>
      <div className="flex gap-1.5">
        {(['LEGISTAR', 'ICS'] as const).map((k) => <button key={k} type="button" onClick={() => setKind(k)} aria-pressed={kind === k} className={`no-min-size h-9 rounded-full px-3 text-xs font-bold ${kind === k ? 'bg-[var(--primary)] text-[var(--primary-foreground)]' : 'bg-[var(--muted)]'}`}>{k === 'LEGISTAR' ? 'Legistar name' : 'Any calendar link'}</button>)}
      </div>
      <input required value={ref} onChange={(e) => setRef(e.target.value)} placeholder={kind === 'LEGISTAR' ? 'The part before .legistar.com (like seattle)' : 'https://… or webcal://…  (.ics calendar link)'} aria-label="Calendar" className={field} />
      {msg && <p role={msg.startsWith('Connected') ? 'status' : 'alert'} className={`text-xs ${msg.startsWith('Connected') ? 'text-emerald-600' : 'text-red-500'}`}>{msg}</p>}
      <div className="flex gap-2">
        <button type="submit" disabled={busy} style={{ color: 'var(--primary-foreground)' }} className="no-min-size inline-flex h-10 items-center gap-2 rounded-full bg-[var(--primary)] px-5 text-sm font-bold disabled:opacity-60">{busy && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />} Check and connect</button>
        <button type="button" onClick={() => setOpen(false)} className="no-min-size h-10 px-3 text-sm font-semibold">Close</button>
      </div>
    </form>
  )
}
