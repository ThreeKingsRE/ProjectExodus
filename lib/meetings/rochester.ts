import { zonedToUtc } from '@/lib/calendar/ics'
import type { MeetingInput } from './legistar'

export const ROCHESTER_LIST = 'https://www.cityofrochester.gov/meetings'
export const ROCHESTER_REF = 'cityofrochester'
export const ROCHESTER_KEY = 'pl:3663000'
export function isRochesterCalendar(raw: string) {
  try {
    const u = new URL(raw)
    return u.origin === new URL(ROCHESTER_LIST).origin && /^\/meetings(?:\/calendar)?\/?$/.test(u.pathname)
  } catch { return false }
}

const months = 'january february march april may june july august september october november december'.split(' ')
const plain = (s: string) => s.replace(/<[^>]*>/g, ' ').replace(/&(amp|quot|nbsp|#39|#039);/g, (_, k: string) => ({ amp: '&', quot: '"', nbsp: ' ', '#39': "'", '#039': "'" }[k] ?? '')).replace(/\s+/g, ' ').trim()
const content = (row: string, name: string) => plain(row.match(new RegExp('class="[^"]*\\b' + name + '\\b[^"]*"[^>]*>([\\s\\S]*?)</div>'))?.[1] ?? '')

function clock(raw: string, fallback?: string) {
  const m = raw.trim().match(/^(\d{1,2})(?::(\d{2}))?\s*([ap]\.?\s*m\.?)?$/i)
  if (!m || +m[1] < 1 || +m[1] > 12 || +(m[2] ?? 0) >= 60) return null
  const period = m[3]?.[0].toLowerCase() ?? fallback
  if (!period) return null
  return { hour: +m[1] % 12 + (period === 'p' ? 12 : 0), minute: +(m[2] ?? 0), period, explicit: Boolean(m[3]) }
}

export function parseRochesterMeetings(html: string, now: Date): MeetingInput[] {
  const timezone = 'America/New_York'
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: timezone, year: 'numeric', month: 'numeric', day: 'numeric' }).formatToParts(now)
  const part = (type: string) => Number(parts.find(p => p.type === type)?.value)
  const year = part('year'), today = part('month') * 100 + part('day')
  const events = new Map<string, MeetingInput>()
  for (const row of html.split(/<div class="views-row">/).slice(1)) {
    const link = row.match(/<a href="(\/meetings\/[a-z0-9-]+)" class="fullclick">([\s\S]*?)<\/a>/i)
    const date = content(row, 'card-date-time-top').match(/^([a-z]+)\s+(\d{1,2})(?:,\s*(\d{4}))?$/i)
    if (!link || !date) continue
    const month = months.indexOf(date[1].toLowerCase()), day = +date[2]
    if (month < 0 || day < 1 || day > 31) continue
    const y = date[3] ? +date[3] : year + ((month + 1) * 100 + day < today ? 1 : 0)
    if (new Date(Date.UTC(y, month, day)).getUTCMonth() !== month) continue
    const [startText, endText] = content(row, 'card-date-time-bottom').split(/\s+[-–—]\s+/)
    const end = endText ? clock(endText) : null
    const start = clock(startText, end?.period)
    // A range like 11 - 1 p.m. crosses noon.
    if (start && end && !start.explicit && start.hour > end.hour) start.hour = (start.hour + 12) % 24
    const at = (h: number, min: number) => new Date(zonedToUtc(y, month, day, h, min, 0, timezone))
    const startsAt = at(start?.hour ?? 12, start?.minute ?? 0)
    const endAt = end ? at(end.hour, end.minute) : null
    const endsAt = endAt && endAt > startsAt ? endAt : null
    const title = plain(link[2]).slice(0, 160)
    if (!title) continue
    const sourceUrl = new URL(link[1], ROCHESTER_LIST).href
    const agenda = row.match(/<h5[^>]*>\s*Agenda\s*<\/h5>\s*<span[^>]*>\s*<a href="(\/sites\/default\/files\/[^"]+)"/i)?.[1]
    events.set(sourceUrl, { externalId: 'rochester:' + link[1], title, body: content(row, 'category') || plain(row.match(/<span class="category">([^<]*)/)?.[1] ?? '') || null,
      startsAt, endsAt, timeKnown: Boolean(start), timezone,
      location: content(row, 'field--name-field-provus-location').slice(0, 300) || null,
      agendaUrl: agenda ? new URL(agenda, ROCHESTER_LIST).href : null, minutesUrl: null, recordingUrl: null, sourceUrl,
      status: /\bcancell?ed\b/i.test(title) ? 'CANCELED' : 'SCHEDULED', statusNote: null })
  }
  return [...events.values()]
}
