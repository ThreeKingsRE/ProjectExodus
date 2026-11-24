// US federal holidays (and Election Day), computed from the rules, so the calendar is
// never empty and never needs an update.

export interface Holiday { date: string; name: string; kind: 'federal' | 'civic' }

const pad = (n: number) => String(n).padStart(2, '0')
const iso = (y: number, m0: number, d: number) => `${y}-${pad(m0 + 1)}-${pad(d)}`

/** The nth (1-based) given weekday (0=Sun) of a month. */
function nth(year: number, m0: number, weekday: number, n: number) {
  const first = new Date(Date.UTC(year, m0, 1)).getUTCDay()
  return 1 + ((weekday - first + 7) % 7) + (n - 1) * 7
}
function lastWeekday(year: number, m0: number, weekday: number) {
  const last = new Date(Date.UTC(year, m0 + 1, 0))
  return last.getUTCDate() - ((last.getUTCDay() - weekday + 7) % 7)
}

export function usHolidays(year: number): Holiday[] {
  const out: Holiday[] = []
  const fixed = (m0: number, d: number, name: string) => {
    out.push({ date: iso(year, m0, d), name, kind: 'federal' })
    const dow = new Date(Date.UTC(year, m0, d)).getUTCDay()
    // A holiday on a weekend is observed on the nearest weekday
    if (dow === 6) out.push({ date: iso(year, m0, d - 1), name: `${name} (observed)`, kind: 'federal' })
    if (dow === 0) out.push({ date: iso(year, m0, d + 1), name: `${name} (observed)`, kind: 'federal' })
  }
  fixed(0, 1, 'New Year’s Day')
  if (year % 4 === 1) out.push({ date: iso(year, 0, 20), name: 'Inauguration Day', kind: 'federal' })
  out.push({ date: iso(year, 0, nth(year, 0, 1, 3)), name: 'Martin Luther King Jr. Day', kind: 'federal' })
  out.push({ date: iso(year, 1, nth(year, 1, 1, 3)), name: 'Washington’s Birthday', kind: 'federal' })
  out.push({ date: iso(year, 4, lastWeekday(year, 4, 1)), name: 'Memorial Day', kind: 'federal' })
  fixed(5, 19, 'Juneteenth')
  fixed(6, 4, 'Independence Day')
  out.push({ date: iso(year, 8, nth(year, 8, 1, 1)), name: 'Labor Day', kind: 'federal' })
  out.push({ date: iso(year, 9, nth(year, 9, 1, 2)), name: 'Columbus / Indigenous Peoples’ Day', kind: 'federal' })
  out.push({ date: iso(year, 10, nth(year, 10, 1, 1) + 1), name: 'Election Day', kind: 'civic' })
  fixed(10, 11, 'Veterans Day')
  out.push({ date: iso(year, 10, nth(year, 10, 4, 4)), name: 'Thanksgiving Day', kind: 'federal' })
  fixed(11, 25, 'Christmas Day')
  return out.sort((a, b) => a.date.localeCompare(b.date))
}

/** Holidays between two dates (inclusive), as YYYY-MM-DD strings. */
export function holidaysBetween(from: string, to: string): Holiday[] {
  const y1 = +from.slice(0, 4), y2 = +to.slice(0, 4)
  const all: Holiday[] = []
  for (let y = y1; y <= y2; y++) all.push(...usHolidays(y))
  return all.filter((h) => h.date >= from && h.date <= to)
}
