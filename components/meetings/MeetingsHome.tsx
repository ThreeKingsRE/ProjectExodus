'use client'

// Your personal Meetings calendar: a month of the places you picked, plus federal
// holidays. Visitors see the federal default; members add places to make it theirs.

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Loader2, X } from 'lucide-react'
import { holidaysBetween } from '@/lib/meetings/holidays'
import type { MeetingView } from '@/lib/meetings/server'
import { PlaceSearch, type Place } from './PlaceSearch'
import { MeetingRow } from './MeetingRow'
import { dayKey } from './format'

interface Me { signedIn: boolean; places: Place[]; showHolidays: boolean }
const pad = (n: number) => String(n).padStart(2, '0')
const ymd = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
const DOW = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export default function MeetingsHome() {
  const [me, setMe] = useState<Me | null>(null)
  const [month, setMonth] = useState(() => { const d = new Date(); return new Date(d.getFullYear(), d.getMonth(), 1) })
  const [meetings, setMeetings] = useState<MeetingView[]>([])
  const [isDefault, setIsDefault] = useState(true)
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(() => ymd(new Date()))
  const [note, setNote] = useState<string | null>(null)
  const [tick, setTick] = useState(0)

  useEffect(() => { fetch('/api/meetings/me').then((r) => r.json()).then((j) => { if (j.success) setMe(j.data) }).catch(() => {}) }, [tick])

  const gridStart = useMemo(() => { const d = new Date(month); d.setDate(1 - d.getDay()); return d }, [month])
  const days = useMemo(() => Array.from({ length: 42 }, (_, i) => { const d = new Date(gridStart); d.setDate(gridStart.getDate() + i); return d }), [gridStart])

  useEffect(() => {
    setLoading(true)
    const from = new Date(days[0]); const to = new Date(days[41]); to.setDate(to.getDate() + 2)
    fetch(`/api/meetings/events?from=${from.toISOString()}&to=${to.toISOString()}`).then((r) => r.json())
      .then((j) => { if (j.success) { setMeetings(j.data.meetings); setIsDefault(j.data.isDefault) } }).catch(() => {}).finally(() => setLoading(false))
  }, [days, tick])

  const showHolidays = me?.showHolidays ?? true
  const holidays = useMemo(() => (showHolidays ? holidaysBetween(ymd(days[0]), ymd(days[41])) : []), [days, showHolidays])
  const byDay = useMemo(() => { const m = new Map<string, MeetingView[]>(); for (const x of meetings) { const k = dayKey(x); m.set(k, [...(m.get(k) ?? []), x]) } return m }, [meetings])
  const holidayByDay = useMemo(() => { const m = new Map<string, string[]>(); for (const h of holidays) m.set(h.date, [...(m.get(h.date) ?? []), h.name]); return m }, [holidays])

  const addPlace = async (p: Place) => {
    if (!me?.signedIn) { setNote('Sign in to add places to your own calendar.'); return }
    const res = await fetch('/api/meetings/follow', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug: p.slug, follow: true }) })
    const j = await res.json(); setNote(j.success ? `${p.label} added.` : j.error); setTick((t) => t + 1)
  }
  const removePlace = async (p: Place) => { await fetch('/api/meetings/follow', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug: p.slug, follow: false }) }); setTick((t) => t + 1) }
  const setHolidays = async (v: boolean) => { setMe((m) => (m ? { ...m, showHolidays: v } : m)); if (me?.signedIn) await fetch('/api/meetings/me', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ showHolidays: v }) }) }

  const today = ymd(new Date())
  const dayMeetings = byDay.get(selected) ?? []
  const dayHolidays = holidayByDay.get(selected) ?? []
  const upcoming = meetings.filter((m) => +new Date(m.startsAt) >= Date.now() - 3 * 3600000).slice(0, 12)
  const move = (n: number) => setMonth((m) => new Date(m.getFullYear(), m.getMonth() + n, 1))

  return (
    <div className="mx-auto space-y-4 px-3 py-4 sm:space-y-5 sm:px-6 sm:py-8" style={{ maxWidth: '48rem' }}>
      <header>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-xs">Project Exodus</p>
        <h1 style={{ fontSize: 'clamp(1.5rem, 6vw, 2.25rem)', lineHeight: 1.1 }} className="mt-1 font-black">Meetings</h1>
        <p className="mt-1 text-xs text-[var(--muted-foreground)] sm:text-sm">Government meetings in one place: when they are, how to join, and the agendas, minutes and recordings after. Pick your towns to build your own calendar.</p>
      </header>

      <PlaceSearch onPick={addPlace} placeholder="Add a state, county, city or town" />
      <p className="-mt-2 text-xs text-[var(--muted-foreground)]">Or <Link href="/meetings/browse" className="font-semibold text-[var(--primary)] underline">browse by state</Link>.</p>
      {note && <p role="status" className="rounded-xl bg-[var(--muted)] p-2.5 text-xs">{note} {!me?.signedIn && <Link href="/auth/signin?callbackUrl=/meetings" className="font-semibold text-[var(--primary)] underline">Sign in</Link>}</p>}

      {me && !me.signedIn && isDefault && (
        <p className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-3 text-xs text-[var(--muted-foreground)]"><strong className="text-[var(--foreground)]">Showing the federal default.</strong> <Link href="/auth/signin?callbackUrl=/meetings" className="font-semibold text-[var(--primary)] underline">Sign in</Link> to choose your own towns. Your calendar is saved to your account.</p>
      )}

      {me?.signedIn && (
        <div className="flex flex-wrap items-center gap-1.5">
          {me.places.length === 0 && <span className="text-xs text-[var(--muted-foreground)]">Your calendar is blank. Search above to add the places you care about.</span>}
          {me.places.map((p) => (
            <span key={p.id} className="inline-flex items-center gap-1 rounded-full bg-[var(--primary)]/15 py-1 pl-3 pr-1.5 text-xs font-semibold">
              <Link href={`/meetings/${p.slug}`} className="no-min-size text-[var(--primary)]">{p.label}</Link>
              <button type="button" onClick={() => removePlace(p)} aria-label={`Remove ${p.label}`} className="no-min-size grid h-5 w-5 place-items-center rounded-full hover:bg-[var(--primary)]/20"><X className="h-3 w-3" /></button>
            </span>
          ))}
        </div>
      )}

      <section aria-label="Calendar" className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-3 sm:p-4">
        <div className="mb-2 flex items-center justify-between">
          <button type="button" onClick={() => move(-1)} aria-label="Previous month" className="no-min-size grid h-9 w-9 place-items-center rounded-full hover:bg-[var(--muted)]"><ChevronLeft className="h-5 w-5" /></button>
          <h2 style={{ fontSize: '1.05rem', lineHeight: 1.2 }} className="flex items-center gap-2 font-black">{month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}{loading && <Loader2 className="h-4 w-4 animate-spin text-[var(--muted-foreground)]" aria-label="Loading" />}</h2>
          <button type="button" onClick={() => move(1)} aria-label="Next month" className="no-min-size grid h-9 w-9 place-items-center rounded-full hover:bg-[var(--muted)]"><ChevronRight className="h-5 w-5" /></button>
        </div>
        <div className="grid grid-cols-7 text-center text-[10px] font-bold text-[var(--muted-foreground)]">{DOW.map((d, i) => <span key={i} className="py-1">{d}</span>)}</div>
        <div className="grid grid-cols-7 gap-0.5">
          {days.map((d) => {
            const k = ymd(d), n = byDay.get(k)?.length ?? 0, h = holidayByDay.get(k)
            const inMonth = d.getMonth() === month.getMonth()
            return (
              <button key={k} type="button" onClick={() => setSelected(k)} aria-pressed={selected === k} aria-label={`${d.toDateString()}${n ? `, ${n} meetings` : ''}${h ? `, ${h.join(', ')}` : ''}`}
                className={`no-min-size flex h-12 flex-col items-center justify-start gap-0.5 rounded-xl pt-1 text-[13px] sm:h-14 ${selected === k ? 'bg-[var(--primary)] text-[var(--primary-foreground)]' : k === today ? 'bg-[var(--muted)] font-bold' : ''} ${inMonth ? '' : 'opacity-35'}`}>
                <span>{d.getDate()}</span>
                <span className="flex h-1.5 items-center gap-0.5">
                  {h && <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />}
                  {n > 0 && <span className={`h-1.5 w-1.5 rounded-full ${selected === k ? 'bg-[var(--primary-foreground)]' : 'bg-[var(--primary)]'}`} />}
                  {n > 1 && <span className={`h-1.5 w-1.5 rounded-full ${selected === k ? 'bg-[var(--primary-foreground)]' : 'bg-[var(--primary)]'}`} />}
                </span>
              </button>
            )
          })}
        </div>
        <label className="mt-2 flex items-center gap-2 text-xs"><input type="checkbox" checked={showHolidays} onChange={(e) => setHolidays(e.target.checked)} className="h-4 w-4" /> Show federal holidays <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" /></label>
      </section>

      <section aria-label="Selected day" className="space-y-2">
        <h2 style={{ fontSize: '1rem', lineHeight: 1.2 }} className="font-black">{new Date(selected + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h2>
        {dayHolidays.map((h) => <p key={h} className="rounded-xl bg-amber-500/10 px-3 py-2 text-sm font-semibold text-amber-700 dark:text-amber-300">{h}</p>)}
        {dayMeetings.length > 0 ? <ul className="space-y-2">{dayMeetings.map((m) => <MeetingRow key={m.id} m={m} signedIn={!!me?.signedIn} showPlace />)}</ul>
          : dayHolidays.length === 0 && <p className="rounded-xl border border-dashed border-[var(--border)] p-4 text-center text-sm text-[var(--muted-foreground)]">Nothing on this day.</p>}
      </section>

      {upcoming.length > 0 && (
        <section aria-label="Coming up" className="space-y-2">
          <h2 style={{ fontSize: '1rem', lineHeight: 1.2 }} className="font-black">Coming up</h2>
          <ul className="space-y-2">{upcoming.map((m) => <MeetingRow key={m.id} m={m} signedIn={!!me?.signedIn} showPlace />)}</ul>
        </section>
      )}
    </div>
  )
}
