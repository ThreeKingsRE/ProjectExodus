// Server side of Meetings: seeding the directory, searching it, pulling meetings
// from official sources, and shaping what the pages receive.

import { prisma } from '@/lib/db'
import { CENSUS_BASE, CENSUS_FILES, buildDirectory, federalRow, parseSearch, placeLabel, placeSubtitle, tzFor, type JurisdictionRow } from './directory'
import { CLIENT_RE, mapLegistarEvent, type MeetingInput } from './legistar'
import { safeGetText, normalizeCalendarUrl } from './safe-fetch'
import { legistarCalendarUrl, parseLegistarCalendarHtml } from './legistar-html'
import { KNOWN_SOURCES } from './known'
import { legistarGuesses, looksLikeThisPlace } from './guess'
import { findCalendarLinks, looksLikeCalendar, looksLikeHtml } from './discover'
import { expandEvents, parseIcs } from '@/lib/calendar/ics'

const DAY = 86400000

// ── Directory ───────────────────────────────────────────────────────────────

const get = async (file: string) => {
  const res = await fetch(CENSUS_BASE + file, { signal: AbortSignal.timeout(30000), cache: 'no-store' })
  if (!res.ok) throw new Error(`Census file ${file}: ${res.status}`)
  return res.text()
}

/** Load every state, county, city, village, town and township. Safe to run again (skips what exists). */
export async function seedDirectory(): Promise<{ total: number; added: number }> {
  const [states, counties, places, cousubs] = await Promise.all([get(CENSUS_FILES.states), get(CENSUS_FILES.counties), get(CENSUS_FILES.places), get(CENSUS_FILES.cousubs)])
  const rows = buildDirectory({ states, counties, places, cousubs })
  let added = 0
  for (let i = 0; i < rows.length; i += 2000) {
    const r = await prisma.jurisdiction.createMany({ data: rows.slice(i, i + 2000), skipDuplicates: true })
    added += r.count
  }
  return { total: rows.length, added }
}

let seeding: Promise<unknown> | null = null
/** First visit on an empty database loads the directory (a federal row alone is not enough). */
export async function ensureDirectory(): Promise<void> {
  const n = await prisma.jurisdiction.count()
  if (n >= 1000) return
  if (!seeding) seeding = seedDirectory().catch((e) => { console.error('Directory seed failed:', e) }).finally(() => { seeding = null })
  await seeding
}

export async function ensureFederal() {
  const f = federalRow()
  return prisma.jurisdiction.upsert({ where: { key: f.key }, create: f, update: {} })
}

const brief = (j: JurisdictionRow & { id: string }) => ({ id: j.id, slug: j.slug, kind: j.kind, label: placeLabel(j), subtitle: placeSubtitle(j), state: j.state })
export type PlaceBrief = ReturnType<typeof brief>
export { brief as placeBrief }

const KIND_ORDER: Record<string, number> = { TOWNSHIP: 0, PLACE: 0, COUNTY: 1, STATE: 2, FEDERAL: 3 }

export async function searchPlaces(q: string, limit = 30): Promise<PlaceBrief[]> {
  const states: { abbr: string; name: string }[] = (await prisma.jurisdiction.findMany({ where: { kind: 'STATE' }, select: { state: true, name: true } })).map((s: { state: string; name: string }) => ({ abbr: s.state, name: s.name }))
  const { text, state } = parseSearch(q, states)
  if (!text && !state) return []
  const where: Record<string, unknown> = {}
  if (state) where.state = state
  if (text) where.OR = [{ name: { contains: text, mode: 'insensitive' } }, { fullName: { contains: text, mode: 'insensitive' } }, { countyName: { contains: text, mode: 'insensitive' } }]
  const rows: (JurisdictionRow & { id: string })[] = await prisma.jurisdiction.findMany({ where, take: 200 })
  const t = text.toLowerCase()
  const score = (r: JurisdictionRow) => (r.name.toLowerCase() === t ? 0 : r.name.toLowerCase().startsWith(t) ? 1 : r.fullName.toLowerCase().includes(t) ? 2 : 3) * 10 + (KIND_ORDER[r.kind] ?? 4)
  return rows.sort((a, b) => score(a) - score(b) || a.fullName.localeCompare(b.fullName)).slice(0, limit).map(brief)
}

// ── Sources ─────────────────────────────────────────────────────────────────

const LEGISTAR = 'https://webapi.legistar.com/v1/'

async function legistarGet(client: string, path: string): Promise<unknown> {
  if (!CLIENT_RE.test(client)) throw new Error('That doesn’t look like a Legistar name. Use the part before .legistar.com, like “seattle”.')
  const res = await fetch(`${LEGISTAR}${client}/${path}`, { signal: AbortSignal.timeout(15000), cache: 'no-store', headers: { Accept: 'application/json' } })
  if (res.status === 403) throw new Error('That Legistar calendar needs a private key, so it can’t be read automatically.')
  if (!res.ok) throw new Error('No public Legistar calendar was found with that name.')
  return res.json()
}

/** Confirm a Legistar name really exists, and say how to read it: the open API, or (when that needs
 *  a private key) the public calendar page. */
export async function detectLegistar(client: string): Promise<'LEGISTAR' | 'LEGISTAR_HTML'> {
  try { await legistarGet(client, 'bodies?$top=1'); return 'LEGISTAR' } catch (e) {
    if (!(e instanceof Error) || !/private key/.test(e.message)) throw e
  }
  let html: string
  try { html = await safeGetText(legistarCalendarUrl(client), { accept: 'text/html' }) } catch { throw new Error('That Legistar site couldn’t be read automatically.') }
  if (!parseLegistarCalendarHtml(html, client, 'UTC').length) throw new Error('That Legistar calendar page has no meetings listed to read right now.')
  return 'LEGISTAR_HTML'
}

async function legistarMeetings(client: string, tz: string, from: Date, to: Date): Promise<MeetingInput[]> {
  const d = (x: Date) => x.toISOString().slice(0, 10)
  const filter = encodeURIComponent(`EventDate ge datetime'${d(from)}' and EventDate lt datetime'${d(to)}'`)
  const data = await legistarGet(client, `events?$filter=${filter}&$orderby=EventDate asc&$top=1000`)
  return (Array.isArray(data) ? data : []).flatMap((e) => { const m = mapLegistarEvent(e as Record<string, unknown>, tz); return m ? [m] : [] })
}

/** Turn whatever a member pasted into the real calendar-feed address: the link itself if it is a
 *  calendar, or (for a calendar PAGE) the iCal / Subscribe link found inside it. */
export async function resolveCalendarUrl(raw: string): Promise<string> {
  const first = normalizeCalendarUrl(raw)
  const text = await safeGetText(first)
  if (looksLikeCalendar(text)) return first
  if (looksLikeHtml(text)) {
    for (const candidate of findCalendarLinks(text, first)) {
      try { if (looksLikeCalendar(await safeGetText(candidate))) return candidate } catch { /* try the next one */ }
    }
  }
  throw new Error('We couldn’t find a calendar feed at that link. On the town’s calendar page, look for a “Subscribe”, “iCal” or “Export” button, copy its address, and paste it here.')
}

/** Any public calendar link (.ics or webcal://) on any website; see safe-fetch for the protections. */
async function fetchIcsText(raw: string): Promise<string> {
  const text = await safeGetText(normalizeCalendarUrl(raw))
  if (!text.includes('BEGIN:VCALENDAR')) throw new Error('That link didn’t return a calendar (.ics). Look for “Subscribe”, “iCal” or “Export” on the calendar page.')
  return text
}

async function icsMeetings(url: string, tz: string, from: Date, to: Date): Promise<MeetingInput[]> {
  const { events } = parseIcs(await fetchIcsText(url))
  return expandEvents(events, from, to, 1500).map((o) => {
    const start = new Date(o.start)
    return {
      externalId: `${o.uid}|${o.start}`, title: o.title.slice(0, 160), body: null, startsAt: start, endsAt: o.end ? new Date(o.end) : null,
      timeKnown: !o.allDay, timezone: tz, location: o.location?.replace(/\s+/g, ' ').trim().slice(0, 300) || null,
      agendaUrl: null, minutesUrl: null, recordingUrl: null, sourceUrl: null, status: 'SCHEDULED' as const, statusNote: null,
    }
  })
}

/** Pull a source’s meetings (a year back, 150 days ahead) and keep the database in step with it. */
export async function refreshSource(sourceId: string): Promise<{ count: number; error: string | null }> {
  const src = await prisma.meetingSource.findUnique({ where: { id: sourceId }, include: { jurisdiction: { select: { id: true, state: true } } } })
  if (!src || !src.enabled) return { count: 0, error: null }
  const tz = src.timezone || tzFor(src.jurisdiction.state)
  const from = new Date(Date.now() - 365 * DAY), to = new Date(Date.now() + 150 * DAY)
  try {
    const found = src.kind === 'LEGISTAR' ? await legistarMeetings(src.ref, tz, from, to)
      : src.kind === 'LEGISTAR_HTML' ? parseLegistarCalendarHtml(await safeGetText(legistarCalendarUrl(src.ref), { accept: 'text/html' }), src.ref, tz)
        : await icsMeetings(src.ref, tz, from, to)
    for (let i = 0; i < found.length; i += 25) {
      await prisma.$transaction(found.slice(i, i + 25).map((m) => {
        // The source owns the schedule; links it doesn't have yet (added by members) are kept
        const links = Object.fromEntries(Object.entries({ agendaUrl: m.agendaUrl, minutesUrl: m.minutesUrl, recordingUrl: m.recordingUrl, sourceUrl: m.sourceUrl }).filter(([, v]) => v))
        const core = { title: m.title, body: m.body, startsAt: m.startsAt, endsAt: m.endsAt, timezone: m.timezone, timeKnown: m.timeKnown, location: m.location, status: m.status, statusNote: m.statusNote }
        return prisma.meeting.upsert({
          where: { sourceId_externalId: { sourceId: src.id, externalId: m.externalId } },
          create: { ...core, ...links, jurisdictionId: src.jurisdictionId, sourceId: src.id, externalId: m.externalId },
          update: { ...core, ...links },
        })
      }))
    }
    // Upcoming meetings that vanished from the official calendar were removed there
    if (found.length && src.kind !== 'LEGISTAR_HTML') {
      await prisma.meeting.deleteMany({ where: { sourceId: src.id, startsAt: { gte: new Date(), lt: to }, externalId: { notIn: found.map((m) => m.externalId) } } })
    }
    await prisma.meetingSource.update({ where: { id: src.id }, data: { lastFetchedAt: new Date(), lastError: null } })
    return { count: found.length, error: null }
  } catch (e) {
    const error = e instanceof Error ? e.message.slice(0, 300) : 'Refresh failed'
    await prisma.meetingSource.update({ where: { id: src.id }, data: { lastFetchedAt: new Date(), lastError: error } }).catch(() => {})
    return { count: 0, error }
  }
}

/** Sources not refreshed in the last `staleMs`, for a set of places (or everywhere). */
export async function staleSourceIds(jurisdictionIds: string[] | null, staleMs: number, take = 20): Promise<string[]> {
  const rows: { id: string }[] = await prisma.meetingSource.findMany({
    where: { enabled: true, ...(jurisdictionIds ? { jurisdictionId: { in: jurisdictionIds } } : {}), OR: [{ lastFetchedAt: null }, { lastFetchedAt: { lt: new Date(Date.now() - staleMs) } }] },
    select: { id: true }, orderBy: { lastFetchedAt: 'asc' }, take,
  })
  return rows.map((r) => r.id)
}

// ── Shaping ─────────────────────────────────────────────────────────────────

export const MEETING_SELECT = {
  id: true, title: true, body: true, startsAt: true, endsAt: true, timezone: true, timeKnown: true, location: true,
  joinUrl: true, agendaUrl: true, minutesUrl: true, recordingUrl: true, sourceUrl: true, status: true, statusNote: true, sourceId: true,
  jurisdiction: { select: { id: true, slug: true, kind: true, name: true, govType: true, fullName: true, countyName: true, stateName: true, state: true } },
  _count: { select: { notes: true } },
}

type MeetingRow = {
  id: string; title: string; body: string | null; startsAt: Date; endsAt: Date | null; timezone: string | null; timeKnown: boolean; location: string | null
  joinUrl: string | null; agendaUrl: string | null; minutesUrl: string | null; recordingUrl: string | null; sourceUrl: string | null
  status: string; statusNote: string | null; sourceId: string | null
  jurisdiction: JurisdictionRow & { id: string }; _count: { notes: number }
}
export function shapeMeeting(m: MeetingRow, signedIn: boolean) {
  return {
    id: m.id, title: m.title, body: m.body, startsAt: m.startsAt.toISOString(), endsAt: m.endsAt?.toISOString() ?? null, timezone: m.timezone, timeKnown: m.timeKnown,
    location: m.location, joinUrl: signedIn ? m.joinUrl : null, agendaUrl: m.agendaUrl, minutesUrl: m.minutesUrl, recordingUrl: m.recordingUrl, sourceUrl: m.sourceUrl,
    status: m.status, statusNote: m.statusNote, official: !!m.sourceId, notes: m._count.notes,
    place: brief(m.jurisdiction),
  }
}
export type MeetingView = ReturnType<typeof shapeMeeting>

export async function listMeetings(jurisdictionIds: string[], from: Date, to: Date, signedIn: boolean, opts: { order?: 'asc' | 'desc'; take?: number } = {}): Promise<MeetingView[]> {
  if (!jurisdictionIds.length) return []
  const rows: MeetingRow[] = await prisma.meeting.findMany({
    where: { jurisdictionId: { in: jurisdictionIds }, startsAt: { gte: from, lt: to } },
    select: MEETING_SELECT, orderBy: { startsAt: opts.order ?? 'asc' }, take: opts.take ?? 1500,
  })
  return rows.map((m) => shapeMeeting(m, signedIn))
}


// ── Built-in sources ────────────────────────────────────────────────────────

let knownDone = false
/** Connect the calendars in known.ts (Rochester, Philadelphia...) once the directory exists. */
export async function ensureKnownSources(): Promise<number> {
  if (knownDone) return 0
  let created = 0
  for (const k of KNOWN_SOURCES) {
    const j = await prisma.jurisdiction.findUnique({ where: { key: k.key }, select: { id: true } })
    if (!j) continue
    const exists = await prisma.meetingSource.findUnique({ where: { jurisdictionId_kind_ref: { jurisdictionId: j.id, kind: k.kind, ref: k.ref } }, select: { id: true } })
    if (!exists) { await prisma.meetingSource.create({ data: { jurisdictionId: j.id, kind: k.kind, ref: k.ref, label: k.label } }); created++ }
  }
  knownDone = true
  return created
}

/** How much of the country is covered. */
export async function coverageStats() {
  const [places, upcoming, connected] = await Promise.all([
    prisma.jurisdiction.count(),
    prisma.meeting.count({ where: { startsAt: { gte: new Date() } } }),
    prisma.meetingSource.groupBy({ by: ['jurisdictionId'], where: { enabled: true } }),
  ])
  return { places, connected: connected.length, upcoming }
}

// ── Phone calendar feed ─────────────────────────────────────────────────────

const esc = (t: string) => t.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n')
const fold = (line: string) => { const out: string[] = []; let l = line; while (l.length > 74) { out.push(l.slice(0, 74)); l = ' ' + l.slice(74) } out.push(l); return out.join('\r\n') }
const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

export interface FeedPrefs { week: boolean; day: boolean; today: boolean }

/** The member's subscribed calendar. Alarms ride inside it, so their phone's own calendar app does the reminding. */
export function buildMeetingFeed(name: string, meetings: MeetingView[], prefs: FeedPrefs, siteUrl: string): string {
  const L = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Project Exodus//Meetings//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', `X-WR-CALNAME:${esc(name)}`, 'REFRESH-INTERVAL;VALUE=DURATION:PT6H', 'X-PUBLISHED-TTL:PT6H']
  const alarms: [string, string][] = [...(prefs.week ? [['-P7D', 'in 1 week']] : []), ...(prefs.day ? [['-P1D', 'tomorrow']] : []), ...(prefs.today ? [['-PT1H', 'in 1 hour']] : [])] as [string, string][]
  for (const m of meetings) {
    const start = new Date(m.startsAt), end = m.endsAt ? new Date(m.endsAt) : new Date(+start + 2 * 3600000)
    const desc = [m.body && m.body !== m.title ? m.body : null, m.joinUrl && `Join: ${m.joinUrl}`, m.agendaUrl && `Agenda: ${m.agendaUrl}`, m.minutesUrl && `Minutes: ${m.minutesUrl}`, m.recordingUrl && `Recording: ${m.recordingUrl}`, `Details: ${siteUrl}/meetings/${m.place.slug}`].filter(Boolean).join('\n')
    L.push('BEGIN:VEVENT', `UID:meeting-${m.id}@projxodus.com`, `DTSTAMP:${stamp(new Date())}`)
    if (m.timeKnown) L.push(`DTSTART:${stamp(start)}`, `DTEND:${stamp(end)}`)
    else { const d = new Date(m.startsAt).toLocaleDateString('en-CA', { timeZone: m.timezone || 'UTC' }).replace(/-/g, ''); L.push(`DTSTART;VALUE=DATE:${d}`) }
    L.push(`SUMMARY:${esc(`${m.title} (${m.place.label})`)}`, `DESCRIPTION:${esc(desc)}`)
    if (m.location) L.push(`LOCATION:${esc(m.location)}`)
    if (m.status === 'CANCELED') L.push('STATUS:CANCELLED')
    if (m.timeKnown && m.status !== 'CANCELED') for (const [trigger, when] of alarms) L.push('BEGIN:VALARM', 'ACTION:DISPLAY', `DESCRIPTION:${esc(`${m.title} ${when}`)}`, `TRIGGER:${trigger}`, 'END:VALARM')
    L.push('END:VEVENT')
  }
  L.push('END:VCALENDAR')
  return L.map(fold).join('\r\n') + '\r\n'
}

// ── Reminders ───────────────────────────────────────────────────────────────

const WINDOWS: { lead: 'TODAY' | 'DAY' | 'WEEK'; from: number; to: number; label: string }[] = [
  { lead: 'TODAY', from: 0, to: 24 * 3600000, label: 'Today' },
  { lead: 'DAY', from: 24 * 3600000, to: 48 * 3600000, label: 'Tomorrow' },
  { lead: 'WEEK', from: 7 * 86400000, to: 8 * 86400000, label: 'Next week' },
]

/** Daily sweep: tell each member about meetings coming up in the places they asked to be reminded about. */
export async function sendReminders(now = new Date()): Promise<{ users: number; sent: number }> {
  const follows: { userId: string; jurisdictionId: string; user: { id: string; email: string; meetingRemindToday: boolean; meetingRemindDay: boolean; meetingRemindWeek: boolean; meetingEmail: boolean } }[] = await prisma.meetingCalendarFollow.findMany({
    where: { remind: true },
    select: { userId: true, jurisdictionId: true, user: { select: { id: true, email: true, meetingRemindToday: true, meetingRemindDay: true, meetingRemindWeek: true, meetingEmail: true } } },
    take: 5000,
  })
  if (!follows.length) return { users: 0, sent: 0 }
  const places = [...new Set(follows.map((f) => f.jurisdictionId))]
  const meetings: { id: string; title: string; startsAt: Date; timeKnown: boolean; timezone: string | null; status: string; jurisdictionId: string; jurisdiction: { slug: string; name: string; govType: string | null; kind: string; fullName: string } }[] = await prisma.meeting.findMany({
    where: { jurisdictionId: { in: places }, status: 'SCHEDULED', startsAt: { gte: now, lt: new Date(+now + 8 * 86400000) } },
    select: { id: true, title: true, startsAt: true, timeKnown: true, timezone: true, status: true, jurisdictionId: true, jurisdiction: { select: { slug: true, name: true, govType: true, kind: true, fullName: true } } },
  })
  const byUser = new Map<string, typeof follows>()
  for (const f of follows) byUser.set(f.userId, [...(byUser.get(f.userId) ?? []), f])
  const { createNotification } = await import('@/lib/notifications')
  const { sendEmail, siteUrl } = await import('@/lib/email/send')
  const { placeLabel } = await import('./directory')
  let sent = 0
  for (const [userId, fs] of byUser) {
    const u = fs[0].user
    const mine = new Set(fs.map((f) => f.jurisdictionId))
    for (const w of WINDOWS) {
      if (!(w.lead === 'TODAY' ? u.meetingRemindToday : w.lead === 'DAY' ? u.meetingRemindDay : u.meetingRemindWeek)) continue
      const due = meetings.filter((m) => mine.has(m.jurisdictionId) && +m.startsAt >= +now + w.from && +m.startsAt < +now + w.to)
      if (!due.length) continue
      const done = new Set((await prisma.meetingReminder.findMany({ where: { userId, lead: w.lead, meetingId: { in: due.map((m) => m.id) } }, select: { meetingId: true } })).map((r: { meetingId: string }) => r.meetingId))
      const fresh = due.filter((m) => !done.has(m.id))
      if (!fresh.length) continue
      const line = (m: (typeof fresh)[number]) => {
        const t = m.timeKnown ? new Date(m.startsAt).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: m.timezone || undefined, timeZoneName: 'short' }) : 'time not posted'
        const d = new Date(m.startsAt).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', timeZone: m.timezone || undefined })
        return `${m.title} (${placeLabel(m.jurisdiction)}), ${d} ${t}`
      }
      const message = fresh.slice(0, 4).map(line).join('\n') + (fresh.length > 4 ? `\n+${fresh.length - 4} more` : '')
      const title = `${w.label}: ${fresh.length} ${fresh.length === 1 ? 'meeting' : 'meetings'} on your calendar`
      await createNotification({ userId, type: 'SYSTEM', title, message, link: '/meetings' }).catch(() => null)
      if (u.meetingEmail && u.email) {
        const link = `${siteUrl()}/meetings`
        await sendEmail({ to: u.email, subject: title, text: `${message}\n\nSee your calendar: ${link}\n\nChange these reminders on the Meetings page.`, html: `<div style="font-family:Arial,sans-serif;line-height:1.5"><h3>${title}</h3><p style="white-space:pre-line">${message.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]!)}</p><p><a href="${link}">Open your calendar</a></p></div>` }).catch(() => null)
      }
      await prisma.meetingReminder.createMany({ data: fresh.map((m) => ({ userId, meetingId: m.id, lead: w.lead })), skipDuplicates: true })
      sent++
    }
  }
  return { users: byUser.size, sent }
}

// ── Find a place's calendar from its name ───────────────────────────────────

export interface FoundSource { client: string; kind: 'LEGISTAR' | 'LEGISTAR_HTML'; verified: boolean }

/** Try the usual Legistar names for a place. `verified` means the site's own meeting locations
 *  and board names show it belongs to this place; otherwise it is only a suggestion. */
export async function findLegistarFor(j: { kind: string; name: string; govType: string | null; state: string | null; stateName: string | null }): Promise<FoundSource | null> {
  let suggestion: FoundSource | null = null
  for (const g of legistarGuesses(j)) {
    let rows: Record<string, unknown>[]
    try { rows = (await legistarGet(g.client, 'events?$orderby=EventDate desc&$top=30')) as Record<string, unknown>[] } catch (e) {
      if (e instanceof Error && /private key/.test(e.message)) {
        // A real Legistar site that keeps its API private: read its public page instead
        try { const kind = await detectLegistar(g.client); if (g.qualified) return { client: g.client, kind, verified: true }; suggestion ??= { client: g.client, kind, verified: false } } catch { /* no readable page */ }
      }
      continue
    }
    if (!Array.isArray(rows) || !rows.length) continue
    const texts = rows.flatMap((r) => [r.EventLocation, r.EventBodyName, r.EventComment]).map((v) => (typeof v === 'string' ? v : null))
    if (g.qualified || looksLikeThisPlace(j, texts)) return { client: g.client, kind: 'LEGISTAR', verified: true }
    suggestion ??= { client: g.client, kind: 'LEGISTAR', verified: false }
  }
  return suggestion
}

/** Look for a calendar for a place with none, and connect it if it checks out. Remembers the try. */
export async function autoConnect(jurisdictionId: string, opts: { force?: boolean } = {}): Promise<{ connected: boolean; suggestion: FoundSource | null; count: number }> {
  const j = await prisma.jurisdiction.findUnique({ where: { id: jurisdictionId } })
  if (!j || j.kind === 'STATE' || j.kind === 'FEDERAL') return { connected: false, suggestion: null, count: 0 }
  if (!opts.force && j.guessedAt && Date.now() - +j.guessedAt < 14 * DAY) return { connected: false, suggestion: null, count: 0 }
  await prisma.jurisdiction.update({ where: { id: j.id }, data: { guessedAt: new Date() } })
  if (await prisma.meetingSource.count({ where: { jurisdictionId: j.id } })) return { connected: false, suggestion: null, count: 0 }
  const found = await findLegistarFor(j)
  if (!found) return { connected: false, suggestion: null, count: 0 }
  if (!found.verified) return { connected: false, suggestion: found, count: 0 }
  const src = await prisma.meetingSource.upsert({
    where: { jurisdictionId_kind_ref: { jurisdictionId: j.id, kind: found.kind, ref: found.client } },
    create: { jurisdictionId: j.id, kind: found.kind, ref: found.client, label: 'Found automatically' }, update: { enabled: true },
  })
  const r = await refreshSource(src.id)
  return { connected: !r.error, suggestion: null, count: r.count }
}
