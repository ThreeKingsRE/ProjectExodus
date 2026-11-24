// Some Legistar cities (Philadelphia...) keep their Web API behind a private key but
// publish the same meetings on their public calendar page. This reads that page: one row
// per meeting, with the agenda, packet and minutes links. Pure: fetching is in server.ts.

import { zonedToUtc } from '@/lib/calendar/ics'
import { parseTime, type MeetingInput } from './legistar'

const text = (h: string) => h.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim()

export function legistarCalendarUrl(client: string) { return `https://${client}.legistar.com/Calendar.aspx` }

export function parseLegistarCalendarHtml(html: string, client: string, tz: string): MeetingInput[] {
  const base = `https://${client}.legistar.com/`
  const headers = [...html.matchAll(/<th[^>]*class="rgHeader[^"]*"[^>]*>([\s\S]*?)<\/th>/g)].map((m) => text(m[1]).toLowerCase())
  const idx = (re: RegExp, fallback: number) => { const i = headers.findIndex((h) => re.test(h)); return i >= 0 ? i : fallback }
  const col = { name: idx(/^name$/, 0), date: idx(/^meeting date$/, 1), time: idx(/^meeting time$/, 3), loc: idx(/^meeting location$/, 4), details: idx(/^meeting details$/, 5), agenda: idx(/^agenda$/, 7), minutes: idx(/^minutes$/, 10), video: idx(/^video$/, -1) }
  const abs = (h: string) => { try { const u = new URL(h.replace(/&amp;/g, '&'), base); return u.protocol === 'https:' && u.hostname.endsWith('.legistar.com') || u.hostname.endsWith('.granicus.com') ? u.toString().slice(0, 1000) : null } catch { return null } }

  const out: MeetingInput[] = []
  for (const row of html.match(/<tr[^>]*class="rg(?:Alt)?Row[^"]*"[^>]*>[\s\S]*?<\/tr>/g) ?? []) {
    const cells = [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((m) => m[1])
    if (cells.length < 6) continue
    const link = (i: number) => { const m = i >= 0 && cells[i] ? cells[i].match(/href="([^"]+)"/) : null; return m ? abs(m[1]) : null }
    const dm = text(cells[col.date] ?? '').match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
    const title = text(cells[col.name] ?? '')
    const details = link(col.details)
    const id = (details ?? row).match(/[?&]ID=(\d+)/i)?.[1]
    if (!dm || !title || !id) continue
    const time = parseTime(text(cells[col.time] ?? ''))
    const [h, mi] = time ?? [12, 0]
    const startsAt = new Date(zonedToUtc(+dm[3], +dm[1] - 1, +dm[2], h, mi, 0, tz))
    if (isNaN(+startsAt)) continue
    const cancelled = /cancel/i.test(text(row))
    out.push({
      externalId: id, title: title.slice(0, 160), body: title.slice(0, 120), startsAt, endsAt: null, timeKnown: !!time, timezone: tz,
      location: text(cells[col.loc] ?? '').slice(0, 300) || null,
      agendaUrl: link(col.agenda), minutesUrl: link(col.minutes), recordingUrl: link(col.video), sourceUrl: details,
      status: cancelled ? 'CANCELED' : 'SCHEDULED', statusNote: cancelled ? 'Marked cancelled on the official calendar' : null,
    })
  }
  return out
}
