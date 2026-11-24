// "Every 2nd and 4th Wednesday at 6 PM": members can enter a posted schedule once.
// Occurrences keep the same wall-clock time across daylight saving changes.

import { zonedToUtc } from '@/lib/calendar/ics'

export type Repeat = 'WEEKLY' | 'BIWEEKLY' | 'MONTHLY_NTH'
export const MAX_REPEATS = 24

export function localParts(d: Date, tz: string) {
  const f = new Intl.DateTimeFormat('en-US', { timeZone: tz, year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' })
  const o: Record<string, number> = {}
  for (const p of f.formatToParts(d)) if (p.type !== 'literal') o[p.type] = +p.value
  return { y: o.year, m0: o.month - 1, d: o.day, h: o.hour % 24, mi: o.minute }
}

const nthWeekday = (y: number, m0: number, weekday: number, n: number) => {
  const first = new Date(Date.UTC(y, m0, 1)).getUTCDay()
  const day = 1 + ((weekday - first + 7) % 7) + (n - 1) * 7
  const last = new Date(Date.UTC(y, m0 + 1, 0)).getUTCDate()
  return day <= last ? day : day - 7 // a 5th weekday that doesn't exist becomes the last one
}

/** The first occurrence plus the following ones (total = count, at most 24). */
export function expandRepeat(first: Date, tz: string, repeat: Repeat, count: number): Date[] {
  const n = Math.max(1, Math.min(MAX_REPEATS, Math.floor(count)))
  const { y, m0, d, h, mi } = localParts(first, tz)
  const dow = new Date(Date.UTC(y, m0, d)).getUTCDay()
  const nth = Math.ceil(d / 7)
  const out: Date[] = []
  for (let k = 0; k < n; k++) {
    let yy = y, mm = m0, dd = d
    if (repeat === 'WEEKLY' || repeat === 'BIWEEKLY') {
      const t = new Date(Date.UTC(y, m0, d + k * (repeat === 'WEEKLY' ? 7 : 14)))
      yy = t.getUTCFullYear(); mm = t.getUTCMonth(); dd = t.getUTCDate()
    } else {
      const t = new Date(Date.UTC(y, m0 + k, 1))
      yy = t.getUTCFullYear(); mm = t.getUTCMonth(); dd = nthWeekday(yy, mm, dow, nth)
    }
    out.push(new Date(zonedToUtc(yy, mm, dd, h, mi, 0, tz)))
  }
  return out
}
