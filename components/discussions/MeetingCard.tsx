'use client'

// The meeting attached to a discussion: when, where, and one tap to join.

import { CalendarPlus, CalendarDays, ExternalLink, FileText, MapPin, Video } from 'lucide-react'
import { categoryLabel, formatMeetingTime, meetingState } from '@/lib/discussions/meetings'

export interface MeetingData {
  id: string
  meetingAt?: string | null; meetingEndsAt?: string | null; meetingTimezone?: string | null
  meetingJoinUrl?: string | null; agendaUrl?: string | null; calendarUrl?: string | null
  place?: string | null; category?: string | null
}

const STATE = {
  upcoming: { label: 'Upcoming', cls: 'bg-sky-500/15 text-sky-600 dark:text-sky-300' },
  live: { label: 'Happening now', cls: 'bg-rose-500/15 text-rose-600 dark:text-rose-300' },
  past: { label: 'Past', cls: 'bg-[var(--muted)] text-[var(--muted-foreground)]' },
} as const

const btn = 'no-min-size inline-flex h-9 items-center gap-1.5 rounded-full px-3.5 text-xs font-bold'
const soft = `${btn} bg-[var(--muted)] !text-[var(--foreground)]`

export function MeetingChip({ m }: { m: MeetingData }) {
  const st = meetingState({ meetingAt: m.meetingAt ?? null, meetingEndsAt: m.meetingEndsAt })
  if (!st || !m.meetingAt) return null
  return (
    <span className={`inline-flex max-w-full items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${STATE[st].cls}`}>
      <CalendarDays className="h-3 w-3 shrink-0" aria-hidden />
      <span className="truncate">{formatMeetingTime(m.meetingAt, m.meetingTimezone)}</span>
    </span>
  )
}

export function MeetingCard({ m }: { m: MeetingData }) {
  const st = meetingState({ meetingAt: m.meetingAt ?? null, meetingEndsAt: m.meetingEndsAt })
  if (!st || !m.meetingAt) return null
  const cat = categoryLabel(m.category)
  return (
    <div className="mx-auto w-full max-w-[92%] rounded-3xl border border-white/10 bg-[var(--card)] p-4 shadow-[0_12px_36px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-2">
        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${STATE[st].cls}`}>
          {st === 'live' && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-500" />}{STATE[st].label}
        </span>
        {cat && <span className="rounded-full bg-[var(--muted)] px-2 py-0.5 text-[11px] font-semibold">{cat}</span>}
      </div>
      <p className="mt-2 flex items-center gap-2 text-[17px] font-bold leading-snug"><CalendarDays className="h-5 w-5 shrink-0 text-[var(--primary)]" aria-hidden />{formatMeetingTime(m.meetingAt, m.meetingTimezone)}</p>
      {m.place && <p className="mt-0.5 flex items-center gap-2 text-sm text-[var(--muted-foreground)]"><MapPin className="h-4 w-4 shrink-0" aria-hidden />{m.place}</p>}
      <div className="mt-3 flex flex-wrap gap-2">
        {m.meetingJoinUrl
          ? <a href={m.meetingJoinUrl} target="_blank" rel="noopener noreferrer nofollow" style={{ color: 'var(--primary-foreground)' }} className={`${btn} bg-[var(--primary)]`}><Video className="h-4 w-4" aria-hidden /> Join meeting <ExternalLink className="h-3 w-3" aria-hidden /></a>
          : null}
        {m.agendaUrl && <a href={m.agendaUrl} target="_blank" rel="noopener noreferrer nofollow" className={soft}><FileText className="h-4 w-4" aria-hidden /> Agenda</a>}
        {m.calendarUrl && <a href={m.calendarUrl} target="_blank" rel="noopener noreferrer nofollow" className={soft}><CalendarDays className="h-4 w-4" aria-hidden /> Town calendar</a>}
        {st !== 'past' && <a href={`/api/social/post/${m.id}/ics`} className={soft}><CalendarPlus className="h-4 w-4" aria-hidden /> Add to my calendar</a>}
      </div>
    </div>
  )
}
