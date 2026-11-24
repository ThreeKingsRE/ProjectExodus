'use client'

// How a member wants to hear about meetings: reminders (in the app and by email),
// and a link that puts their meetings in their phone's own calendar app.

import { useState } from 'react'
import { Bell, CalendarSync, Check, Copy, RotateCcw } from 'lucide-react'

export interface Reminders { today: boolean; day: boolean; week: boolean; email: boolean }
interface Links { https: string; webcal: string; google: string }

const row = 'flex items-center gap-2 text-sm'

export function RemindersPanel({ reminders, onChange, hasPlaces }: { reminders: Reminders; onChange: (r: Reminders) => void; hasPlaces: boolean }) {
  const [open, setOpen] = useState(false)
  const [links, setLinks] = useState<Links | null>(null)
  const [copied, setCopied] = useState(false)
  const [busy, setBusy] = useState(false)

  const set = async (k: keyof Reminders, v: boolean) => {
    onChange({ ...reminders, [k]: v })
    const key = k === 'today' ? 'remindToday' : k === 'day' ? 'remindDay' : k === 'week' ? 'remindWeek' : 'email'
    await fetch('/api/meetings/me', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ [key]: v }) })
  }
  const loadLinks = async (reset = false) => {
    setBusy(true)
    const res = await fetch('/api/meetings/feed', reset ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reset: true }) } : undefined)
    const j = await res.json(); if (j.success) setLinks(j.data); setBusy(false)
  }
  const toggle = () => { setOpen((v) => !v); if (!open && !links) loadLinks() }

  return (
    <section aria-label="Reminders" className="rounded-2xl border border-[var(--border)] bg-[var(--card)]">
      <button type="button" onClick={toggle} aria-expanded={open} className="no-min-size flex w-full items-center gap-2 p-3 text-left">
        <Bell className="h-5 w-5 text-[var(--primary)]" aria-hidden />
        <span className="flex-1"><span className="block text-sm font-bold">Reminders & phone calendar</span><span className="block text-xs text-[var(--muted-foreground)]">Get notified before meetings, or put them in your phone’s calendar.</span></span>
        <span className="text-xs font-semibold text-[var(--primary)]">{open ? 'Close' : 'Set up'}</span>
      </button>
      {open && (
        <div className="space-y-4 border-t border-[var(--border)] p-3">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Remind me</p>
            {hasPlaces ? <p className="text-xs text-[var(--muted-foreground)]">Tap the bell next to a place on your calendar to get reminders for it. Reminders arrive in your notifications each morning.</p> : <p className="text-xs text-[var(--muted-foreground)]">Add a place to your calendar first, then tap its bell.</p>}
            <label className={row}><input type="checkbox" checked={reminders.today} onChange={(e) => set('today', e.target.checked)} className="h-4 w-4" /> The day of the meeting</label>
            <label className={row}><input type="checkbox" checked={reminders.day} onChange={(e) => set('day', e.target.checked)} className="h-4 w-4" /> The day before</label>
            <label className={row}><input type="checkbox" checked={reminders.week} onChange={(e) => set('week', e.target.checked)} className="h-4 w-4" /> A week before</label>
            <label className={row}><input type="checkbox" checked={reminders.email} onChange={(e) => set('email', e.target.checked)} className="h-4 w-4" /> Also email me the reminders</label>
          </div>

          <div className="space-y-2">
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]"><CalendarSync className="h-3.5 w-3.5" aria-hidden />Phone calendar</p>
            <p className="text-xs text-[var(--muted-foreground)]">Subscribe once and every place on your calendar shows up in your phone’s calendar app and stays updated. Your reminder choices above ring as alerts on the meeting (an hour before, a day before, a week before).</p>
            {links ? (
              <div className="flex flex-wrap gap-2">
                <a href={links.webcal} style={{ color: 'var(--primary-foreground)' }} className="no-min-size inline-flex h-10 items-center rounded-full bg-[var(--primary)] px-4 text-sm font-bold">Add to iPhone / Apple Calendar</a>
                <a href={links.google} target="_blank" rel="noopener noreferrer" className="no-min-size inline-flex h-10 items-center rounded-full bg-[var(--muted)] px-4 text-sm font-bold !text-[var(--foreground)]">Add to Google Calendar</a>
                <button type="button" onClick={() => navigator.clipboard?.writeText(links.https).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500) })} className="no-min-size inline-flex h-10 items-center gap-1.5 rounded-full bg-[var(--muted)] px-4 text-sm font-bold">{copied ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}{copied ? 'Copied' : 'Copy link'}</button>
              </div>
            ) : <p className="text-xs text-[var(--muted-foreground)]">{busy ? 'Making your link…' : ''}</p>}
            <p className="text-[11px] text-[var(--muted-foreground)]">Keep the link private: anyone who has it can see your calendar. <button type="button" onClick={() => loadLinks(true)} className="no-min-size inline-flex items-center gap-0.5 font-semibold text-[var(--primary)] underline"><RotateCcw className="h-3 w-3" aria-hidden />Make a new link</button> if it leaks. Google Calendar refreshes subscriptions slowly and ignores their alerts; Apple Calendar keeps both.</p>
          </div>
        </div>
      )}
    </section>
  )
}
