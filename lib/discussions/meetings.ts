// Discussions: meeting cards, allowed links, towns and categories.
// Pure (no server imports) so the form, the API and the tests share it.

import { looksLikeStreetAddress } from '@/lib/career/career'

/** Platforms people really use to hold public meetings. Subdomains are included. */
const MEETING_HOSTS = ['zoom.us', 'zoomgov.com', 'meet.google.com', 'teams.microsoft.com', 'teams.live.com', 'webex.com', 'youtube.com', 'youtu.be', 'facebook.com', 'fb.watch', 'swagit.com']
/** Where towns publish agendas, minutes and calendars (plus every .gov site). */
const AGENDA_HOSTS = ['calendar.google.com', 'outlook.live.com', 'outlook.office.com', 'granicus.com', 'legistar.com', 'boarddocs.com', 'civicclerk.com', 'municode.com', 'ecode360.com', 'primegov.com', 'novusagenda.com', 'civicplus.com']

const hostMatches = (host: string, domain: string) => host === domain || host.endsWith(`.${domain}`)
const isGov = (host: string) => host === 'gov' || host.endsWith('.gov')

export type LinkKind = 'join' | 'agenda'

/** A link is allowed only if it is https, has no login in it, and is on a known meeting platform or a .gov site. */
export function checkMeetingLink(raw: string, kind: LinkKind): { ok: true; url: string } | { ok: false; error: string } {
  let u: URL
  try { u = new URL(raw.trim()) } catch { return { ok: false, error: 'That doesn’t look like a link.' } }
  if (u.protocol !== 'https:') return { ok: false, error: 'Links must start with https://' }
  if (u.username || u.password) return { ok: false, error: 'Links with a login in them aren’t allowed.' }
  const host = u.hostname.toLowerCase()
  const ok = isGov(host) || MEETING_HOSTS.some((d) => hostMatches(host, d)) || (kind === 'agenda' && AGENDA_HOSTS.some((d) => hostMatches(host, d)))
  if (!ok) {
    return { ok: false, error: kind === 'join'
      ? 'For safety, join links must be Zoom, Google Meet, Teams, Webex, a YouTube/Facebook live stream, or a .gov page.'
      : 'For safety, agenda and calendar links must be a .gov page, Google/Outlook calendar, or a known town-meeting site (Granicus, Legistar, BoardDocs...).' }
  }
  return { ok: true, url: u.toString().slice(0, 1000) }
}

export const CATEGORIES = [
  { id: 'town-hall', label: 'Town hall' },
  { id: 'school-board', label: 'School board' },
  { id: 'planning-zoning', label: 'Planning & zoning' },
  { id: 'elections', label: 'Elections' },
  { id: 'budget', label: 'Budget' },
  { id: 'public-safety', label: 'Public safety' },
  { id: 'housing', label: 'Housing' },
  { id: 'transportation', label: 'Transportation' },
  { id: 'environment', label: 'Environment' },
  { id: 'general', label: 'General' },
] as const
export const categoryLabel = (id: string | null | undefined) => CATEGORIES.find((c) => c.id === id)?.label ?? null

export interface MeetingFields {
  meetingAt: Date | null
  meetingEndsAt: Date | null
  meetingTimezone: string | null
  meetingJoinUrl: string | null
  agendaUrl: string | null
  calendarUrl: string | null
  place: string | null
  category: string | null
}

const str = (v: unknown, n: number) => (typeof v === 'string' && v.trim() ? v.trim().slice(0, n) : null)
const validTz = (tz: string) => { try { new Intl.DateTimeFormat('en-US', { timeZone: tz }); return true } catch { return false } }
const DAY = 86400000

/** Validate the meeting/place/category part of a new discussion. */
export function parseDiscussionExtras(body: Record<string, unknown>, now = new Date()): { ok: true; data: MeetingFields } | { ok: false; error: string } {
  const out: MeetingFields = { meetingAt: null, meetingEndsAt: null, meetingTimezone: null, meetingJoinUrl: null, agendaUrl: null, calendarUrl: null, place: null, category: null }

  const place = str(body.place, 80)
  if (place) {
    if (looksLikeStreetAddress(place)) return { ok: false, error: 'Use a town or region (like “Brighton, NY”), not a street address.' }
    out.place = place
  }
  const category = str(body.category, 40)
  if (category) {
    if (!CATEGORIES.some((c) => c.id === category)) return { ok: false, error: 'Pick a category from the list.' }
    out.category = category
  }

  const links: [keyof MeetingFields, unknown, LinkKind][] = [['meetingJoinUrl', body.meetingJoinUrl, 'join'], ['agendaUrl', body.agendaUrl, 'agenda'], ['calendarUrl', body.calendarUrl, 'agenda']]
  let anyLink = false
  for (const [key, raw, kind] of links) {
    const v = str(raw, 1000)
    if (!v) continue
    const r = checkMeetingLink(v, kind)
    if (!r.ok) return { ok: false, error: r.error }
    ;(out as unknown as Record<string, unknown>)[key] = r.url
    anyLink = true
  }

  const at = typeof body.meetingAt === 'string' ? new Date(body.meetingAt) : null
  if (at && !isNaN(+at)) {
    if (+at < +now - DAY) return { ok: false, error: 'That meeting date is in the past.' }
    if (+at > +now + 2 * 365 * DAY) return { ok: false, error: 'That meeting is too far away.' }
    out.meetingAt = at
    const end = typeof body.meetingEndsAt === 'string' ? new Date(body.meetingEndsAt) : null
    if (end && !isNaN(+end)) {
      if (+end <= +at) return { ok: false, error: 'The meeting ends before it starts.' }
      if (+end - +at > DAY) return { ok: false, error: 'A meeting can’t run longer than 24 hours.' }
      out.meetingEndsAt = end
    }
    const tz = str(body.meetingTimezone, 60)
    out.meetingTimezone = tz && validTz(tz) ? tz : 'UTC'
  } else if (anyLink) {
    return { ok: false, error: 'Add the meeting date and time to go with those links.' }
  }
  return { ok: true, data: out }
}

export type MeetingState = 'upcoming' | 'live' | 'past'
export function meetingState(m: { meetingAt: Date | string | null; meetingEndsAt?: Date | string | null }, now = new Date()): MeetingState | null {
  if (!m.meetingAt) return null
  const start = +new Date(m.meetingAt)
  const end = m.meetingEndsAt ? +new Date(m.meetingEndsAt) : start + 2 * 3600000
  if (+now < start) return 'upcoming'
  return +now <= end ? 'live' : 'past'
}

/** What the page may see of a post's meeting: Join links are for signed-in members only. */
export function shapeMeeting<T extends Partial<MeetingFields> & { id?: string }>(p: T, signedIn: boolean) {
  return {
    ...p,
    meetingJoinUrl: signedIn ? p.meetingJoinUrl ?? null : null,
  }
}

/** "Tue, Dec 9 · 7:00 PM EST" in the meeting's own timezone. */
export function formatMeetingTime(iso: string | Date, tz: string | null | undefined): string {
  const d = new Date(iso)
  const zone = tz && validTz(tz) ? tz : undefined
  const day = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', timeZone: zone })
  const time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZoneName: 'short', timeZone: zone })
  return `${day} · ${time}`
}

export const RULES = [
  'Be specific and stay on the topic, not the person.',
  'No personal attacks, harassment or hate.',
  'Share sources for facts, and say when something is your opinion.',
  'Only post meeting links you trust, and never share private information.',
]
