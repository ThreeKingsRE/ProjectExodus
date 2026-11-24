// Legistar: the system many cities, counties and school boards use to publish
// meetings. Its public Web API returns each meeting with its agenda, minutes and
// video links, and whether it was cancelled. Pure mapping here; fetching is in server.ts.

import { zonedToUtc } from '@/lib/calendar/ics'

export interface MeetingInput {
  externalId: string; title: string; body: string | null
  startsAt: Date; endsAt: Date | null; timeKnown: boolean; timezone: string
  location: string | null; agendaUrl: string | null; minutesUrl: string | null; recordingUrl: string | null; sourceUrl: string | null
  status: 'SCHEDULED' | 'CANCELED'; statusNote: string | null
}

export const CLIENT_RE = /^[a-z0-9][a-z0-9-]{1,39}$/i

const https = (v: unknown): string | null => {
  if (typeof v !== 'string') return null
  try { const u = new URL(v.trim()); return u.protocol === 'https:' ? u.toString().slice(0, 1000) : null } catch { return null }
}
const clean = (v: unknown, n: number) => (typeof v === 'string' && v.replace(/\s+/g, ' ').trim() ? v.replace(/\s+/g, ' ').trim().slice(0, n) : null)

/** "2:00 PM" -> [14, 0]; blank or unreadable -> null */
export function parseTime(t: unknown): [number, number] | null {
  const m = typeof t === 'string' ? t.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i) : null
  if (!m) return null
  let h = +m[1] % 12
  if (m[3].toUpperCase() === 'PM') h += 12
  return [h, +m[2]]
}

export function mapLegistarEvent(ev: Record<string, unknown>, tz: string): MeetingInput | null {
  const id = ev.EventId
  const date = typeof ev.EventDate === 'string' ? ev.EventDate.slice(0, 10) : ''
  const dm = date.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (id == null || !dm) return null
  const time = parseTime(ev.EventTime)
  const [h, mi] = time ?? [12, 0]
  const startsAt = new Date(zonedToUtc(+dm[1], +dm[2] - 1, +dm[3], h, mi, 0, tz))
  if (isNaN(+startsAt)) return null
  const body = clean(ev.EventBodyName, 120)
  const comment = clean(ev.EventComment, 300)
  const cancelled = /cancel/i.test(String(ev.EventAgendaStatusName ?? '')) || /cancel/i.test(comment ?? '')
  return {
    externalId: String(id), title: body ?? 'Meeting', body, startsAt, endsAt: null, timeKnown: !!time, timezone: tz,
    location: clean(ev.EventLocation, 300),
    agendaUrl: https(ev.EventAgendaFile), minutesUrl: https(ev.EventMinutesFile),
    recordingUrl: https(ev.EventVideoPath) ?? https(ev.EventMedia),
    sourceUrl: https(ev.EventInSiteURL),
    status: cancelled ? 'CANCELED' : 'SCHEDULED', statusNote: cancelled ? comment : null,
  }
}
