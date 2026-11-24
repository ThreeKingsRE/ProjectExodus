// Server side of Meetings: seeding the directory, searching it, pulling meetings
// from official sources, and shaping what the pages receive.

import { prisma } from '@/lib/db'
import { CENSUS_BASE, CENSUS_FILES, buildDirectory, federalRow, parseSearch, placeLabel, placeSubtitle, tzFor, type JurisdictionRow } from './directory'
import { CLIENT_RE, mapLegistarEvent, type MeetingInput } from './legistar'
import { checkMeetingLink } from '@/lib/discussions/meetings'
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

/** Confirm a Legistar name really exists before saving it. */
export async function verifyLegistar(client: string): Promise<void> {
  await legistarGet(client, 'bodies?$top=1')
}

async function legistarMeetings(client: string, tz: string, from: Date, to: Date): Promise<MeetingInput[]> {
  const d = (x: Date) => x.toISOString().slice(0, 10)
  const filter = encodeURIComponent(`EventDate ge datetime'${d(from)}' and EventDate lt datetime'${d(to)}'`)
  const data = await legistarGet(client, `events?$filter=${filter}&$orderby=EventDate asc&$top=1000`)
  return (Array.isArray(data) ? data : []).flatMap((e) => { const m = mapLegistarEvent(e as Record<string, unknown>, tz); return m ? [m] : [] })
}

/** Calendar feeds: https only, on known government/meeting hosts, every redirect re-checked. */
async function fetchIcsText(raw: string): Promise<string> {
  let url = raw
  for (let hop = 0; hop < 4; hop++) {
    const ok = checkMeetingLink(url, 'agenda')
    if (!ok.ok) throw new Error(ok.error)
    const res = await fetch(ok.url, { redirect: 'manual', signal: AbortSignal.timeout(10000), cache: 'no-store', headers: { Accept: 'text/calendar, */*;q=0.1', 'User-Agent': 'ProjectExodus-Meetings/1.0' } })
    if (res.status >= 300 && res.status < 400) {
      const next = res.headers.get('location')
      if (!next) throw new Error('The calendar link redirected without a destination.')
      url = new URL(next, ok.url).toString()
      continue
    }
    if (!res.ok) throw new Error(`The calendar answered with an error (${res.status}).`)
    const text = await res.text()
    if (text.length > 5 * 1024 * 1024) throw new Error('That calendar is too large (5 MB max).')
    if (!text.includes('BEGIN:VCALENDAR')) throw new Error('That link didn’t return a calendar (.ics).')
    return text
  }
  throw new Error('The calendar link redirected too many times.')
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
    const found = src.kind === 'LEGISTAR' ? await legistarMeetings(src.ref, tz, from, to) : await icsMeetings(src.ref, tz, from, to)
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
    if (found.length) {
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
