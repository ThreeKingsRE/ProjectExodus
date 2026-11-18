import { prisma } from '@/lib/db'
import { parseIcs, type IcsEvent } from './ics'
import { normalizeFeedUrl } from '@/lib/projects/timeline'

const FETCH_TIMEOUT_MS = 10000
const MAX_BYTES = 5 * 1024 * 1024
const CACHE_MS = 15 * 60 * 1000
const MAX_STORED_EVENTS = 3000

/**
 * Fetch a calendar's private iCal link. Redirects are followed manually and
 * every hop must stay on a supported calendar host, so a link can't be used to
 * reach internal addresses.
 */
export async function fetchIcs(rawUrl: string): Promise<string> {
  let url = rawUrl
  for (let hop = 0; hop < 4; hop++) {
    const checked = normalizeFeedUrl(url)
    if (!checked.ok) throw new Error(checked.error)
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)
    let res: Response
    try {
      res = await fetch(checked.url, {
        redirect: 'manual',
        signal: controller.signal,
        headers: { Accept: 'text/calendar, text/plain;q=0.8, */*;q=0.1', 'User-Agent': 'ProjectExodus-Calendar/1.0' },
        cache: 'no-store',
      })
    } finally {
      clearTimeout(timer)
    }
    if (res.status >= 300 && res.status < 400) {
      const next = res.headers.get('location')
      if (!next) throw new Error('The calendar link redirected without a destination.')
      url = new URL(next, checked.url).toString()
      continue
    }
    if (!res.ok) throw new Error(res.status === 404 || res.status === 401 || res.status === 403
      ? 'The calendar link was refused. It may have been reset; copy the private address again.'
      : `The calendar service answered with an error (${res.status}).`)
    const length = Number(res.headers.get('content-length') || 0)
    if (length > MAX_BYTES) throw new Error('That calendar is too large to link (5 MB max).')
    const text = await res.text()
    if (text.length > MAX_BYTES) throw new Error('That calendar is too large to link (5 MB max).')
    if (!text.includes('BEGIN:VCALENDAR')) throw new Error('That link didn’t return a calendar. Use the private iCal (.ics) address.')
    return text
  }
  throw new Error('The calendar link redirected too many times.')
}

/** Keep events that can still show up: recurring ones and anything from the last ~13 months on. */
export function eventsWorthStoring(events: IcsEvent[]): IcsEvent[] {
  const cutoff = Date.now() - 400 * 86400000
  return events.filter(e => e.rrule || e.end.getTime() >= cutoff).slice(0, MAX_STORED_EVENTS)
}

export function reviveEvents(raw: unknown): IcsEvent[] {
  if (!Array.isArray(raw)) return []
  return raw.map((e: any) => ({ ...e, start: new Date(e.start), end: new Date(e.end), exdates: Array.isArray(e.exdates) ? e.exdates : [] }))
}

interface FeedRow { id: string; url: string; cachedEvents: unknown; fetchedAt: Date | null }

/** Events for a linked calendar, refreshed at most every 15 minutes. */
export async function feedEvents(feed: FeedRow): Promise<{ events: IcsEvent[]; error: string | null }> {
  const fresh = feed.fetchedAt && Date.now() - feed.fetchedAt.getTime() < CACHE_MS
  if (fresh) return { events: reviveEvents(feed.cachedEvents), error: null }
  try {
    const { events } = parseIcs(await fetchIcs(feed.url))
    const keep = eventsWorthStoring(events)
    await prisma.projectCalendarFeed.update({
      where: { id: feed.id },
      data: { cachedEvents: JSON.parse(JSON.stringify(keep)), fetchedAt: new Date(), lastError: null },
    })
    return { events: keep, error: null }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Could not refresh this calendar.'
    // Keep showing the last good copy; retry after the cache window.
    await prisma.projectCalendarFeed.update({ where: { id: feed.id }, data: { lastError: message, fetchedAt: new Date() } }).catch(() => {})
    return { events: reviveEvents(feed.cachedEvents), error: message }
  }
}
