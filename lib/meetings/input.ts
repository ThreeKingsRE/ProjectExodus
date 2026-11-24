// Validation for meetings members add, and notes. Links go through the same
// allowlist as Discussions (meeting platforms and .gov only).

import { checkMeetingLink } from '@/lib/discussions/meetings'

const str = (v: unknown, n: number) => (typeof v === 'string' && v.replace(/\s+/g, ' ').trim() ? v.replace(/\s+/g, ' ').trim().slice(0, n) : null)
const DAY = 86400000
const validTz = (tz: string) => { try { new Intl.DateTimeFormat('en-US', { timeZone: tz }); return true } catch { return false } }

export interface NewMeeting {
  title: string; body: string | null; startsAt: Date; endsAt: Date | null; timezone: string; location: string | null
  joinUrl: string | null; agendaUrl: string | null; minutesUrl: string | null; recordingUrl: string | null
}

type LinkKey = 'joinUrl' | 'agendaUrl' | 'minutesUrl' | 'recordingUrl'
const LINKS: [LinkKey, 'join' | 'agenda'][] = [['joinUrl', 'join'], ['agendaUrl', 'agenda'], ['minutesUrl', 'agenda'], ['recordingUrl', 'agenda']]

/** Check one or more links; returns the clean values or the first problem. */
export function parseLinks(body: Record<string, unknown>, keys: readonly LinkKey[] = LINKS.map(([k]) => k)): { ok: true; data: Partial<Record<LinkKey, string>> } | { ok: false; error: string } {
  const data: Partial<Record<LinkKey, string>> = {}
  for (const [key, kind] of LINKS) {
    if (!keys.includes(key)) continue
    const v = str(body[key], 1000)
    if (!v) continue
    const r = checkMeetingLink(v, kind)
    if (!r.ok) return { ok: false, error: r.error }
    data[key] = r.url
  }
  return { ok: true, data }
}

export function parseNewMeeting(body: Record<string, unknown>, now = new Date()): { ok: true; data: NewMeeting } | { ok: false; error: string } {
  const title = str(body.title, 160)
  if (!title) return { ok: false, error: 'Give the meeting a title, like “Town Board”.' }
  const at = typeof body.startsAt === 'string' ? new Date(body.startsAt) : null
  if (!at || isNaN(+at)) return { ok: false, error: 'Pick the meeting date and time.' }
  if (+at < +now - 3 * 365 * DAY || +at > +now + 2 * 365 * DAY) return { ok: false, error: 'That date is too far from today.' }
  const end = typeof body.endsAt === 'string' && body.endsAt ? new Date(body.endsAt) : null
  if (end && (isNaN(+end) || +end <= +at || +end - +at > DAY)) return { ok: false, error: 'The end time has to be after the start, within 24 hours.' }
  const links = parseLinks(body)
  if (!links.ok) return links
  const tz = str(body.timezone, 60)
  return {
    ok: true,
    data: {
      title, body: str(body.body, 120), startsAt: at, endsAt: end, timezone: tz && validTz(tz) ? tz : 'UTC', location: str(body.location, 300),
      joinUrl: links.data.joinUrl ?? null, agendaUrl: links.data.agendaUrl ?? null, minutesUrl: links.data.minutesUrl ?? null, recordingUrl: links.data.recordingUrl ?? null,
    },
  }
}

export const parseNote = (v: unknown) => str(v, 2000)
