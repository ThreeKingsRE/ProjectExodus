// Minimal iCalendar (.ics) reader and writer, dependency-free.
//
// Reads VEVENTs from Google, Outlook, and Apple calendars, including all-day
// events, TZID time zones, and the common RRULE patterns (daily, weekly with
// BYDAY, monthly by day or by "2nd Tuesday", yearly, with INTERVAL, COUNT, UNTIL,
// EXDATE, and RECURRENCE-ID overrides). Writes a subscribable calendar feed.

export interface IcsEvent {
  uid: string
  title: string
  description?: string
  location?: string
  start: Date
  /** Timed events: exclusive end. All-day events: inclusive last day (UTC midnight). */
  end: Date
  allDay: boolean
  /** Wall-clock zone used to expand repeats ('UTC' for all-day and UTC times). */
  tz: string
  rrule?: Record<string, string>
  exdates: number[]
  recurrenceId?: number
  status?: string
}

export interface Occurrence {
  uid: string
  title: string
  description?: string
  location?: string
  start: string // ISO
  end: string // ISO
  allDay: boolean
}

const DAY_MS = 86400000

// Common Windows zone names sent by Outlook/Exchange.
const WINDOWS_ZONES: Record<string, string> = {
  'Eastern Standard Time': 'America/New_York',
  'Central Standard Time': 'America/Chicago',
  'Mountain Standard Time': 'America/Denver',
  'US Mountain Standard Time': 'America/Phoenix',
  'Pacific Standard Time': 'America/Los_Angeles',
  'Alaskan Standard Time': 'America/Anchorage',
  'Hawaiian Standard Time': 'Pacific/Honolulu',
  'Atlantic Standard Time': 'America/Halifax',
  'GMT Standard Time': 'Europe/London',
  'Greenwich Standard Time': 'Atlantic/Reykjavik',
  'W. Europe Standard Time': 'Europe/Berlin',
  'Romance Standard Time': 'Europe/Paris',
  'Central Europe Standard Time': 'Europe/Budapest',
  'E. Europe Standard Time': 'Europe/Chisinau',
  'India Standard Time': 'Asia/Kolkata',
  'China Standard Time': 'Asia/Shanghai',
  'Tokyo Standard Time': 'Asia/Tokyo',
  'AUS Eastern Standard Time': 'Australia/Sydney',
  UTC: 'UTC',
}

function validZone(tz: string | undefined): string | null {
  if (!tz) return null
  const name = WINDOWS_ZONES[tz] ?? tz.replace(/^\/.*?\//, '') // strip "/mozilla.org/..." prefixes
  try {
    new Intl.DateTimeFormat('en-US', { timeZone: name })
    return name
  } catch {
    return null
  }
}

const dtfCache = new Map<string, Intl.DateTimeFormat>()
function tzOffsetMs(tz: string, utcMs: number): number {
  if (tz === 'UTC') return 0
  let dtf = dtfCache.get(tz)
  if (!dtf) {
    dtf = new Intl.DateTimeFormat('en-US', {
      timeZone: tz, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
    })
    dtfCache.set(tz, dtf)
  }
  const parts: Record<string, number> = {}
  for (const p of dtf.formatToParts(new Date(utcMs))) if (p.type !== 'literal') parts[p.type] = Number(p.value)
  const asUtc = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour % 24, parts.minute, parts.second)
  return asUtc - Math.floor(utcMs / 1000) * 1000
}

/** Convert a wall-clock time in `tz` to a UTC timestamp. */
export function zonedToUtc(y: number, mo: number, d: number, h: number, mi: number, s: number, tz: string): number {
  const guess = Date.UTC(y, mo, d, h, mi, s)
  if (tz === 'UTC') return guess
  const first = guess - tzOffsetMs(tz, guess)
  const second = guess - tzOffsetMs(tz, first)
  return second
}

/** Wall-clock parts of a UTC timestamp in `tz`. */
function utcToZoned(ms: number, tz: string) {
  const shifted = new Date(ms + tzOffsetMs(tz, ms))
  return {
    y: shifted.getUTCFullYear(), mo: shifted.getUTCMonth(), d: shifted.getUTCDate(),
    h: shifted.getUTCHours(), mi: shifted.getUTCMinutes(), s: shifted.getUTCSeconds(),
  }
}

function unfold(text: string): string[] {
  return text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/\n[ \t]/g, '').split('\n')
}

interface Prop { name: string; params: Record<string, string>; value: string }

function parseLine(line: string): Prop | null {
  // NAME;PARAM=VAL;PARAM="V:AL":value
  let i = 0
  let inQuote = false
  for (; i < line.length; i++) {
    const c = line[i]
    if (c === '"') inQuote = !inQuote
    else if (c === ':' && !inQuote) break
  }
  if (i >= line.length) return null
  const head = line.slice(0, i)
  const value = line.slice(i + 1)
  const segments = head.match(/(?:[^;"]|"[^"]*")+/g) ?? []
  const name = (segments.shift() ?? '').toUpperCase()
  const params: Record<string, string> = {}
  for (const seg of segments) {
    const eq = seg.indexOf('=')
    if (eq > 0) params[seg.slice(0, eq).toUpperCase()] = seg.slice(eq + 1).replace(/^"|"$/g, '')
  }
  return { name, params, value }
}

function unescapeText(v: string): string {
  return v.replace(/\\n/gi, '\n').replace(/\\([,;\\])/g, '$1')
}

interface ParsedTime { ms: number; allDay: boolean; tz: string }

function parseTime(prop: Prop, calendarTz: string | null): ParsedTime | null {
  const v = prop.value.trim()
  const date = /^(\d{4})(\d{2})(\d{2})$/.exec(v)
  if (date || prop.params.VALUE === 'DATE') {
    const m = date ?? /^(\d{4})(\d{2})(\d{2})/.exec(v)
    if (!m) return null
    return { ms: Date.UTC(+m[1], +m[2] - 1, +m[3]), allDay: true, tz: 'UTC' }
  }
  const m = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})?(Z)?$/.exec(v)
  if (!m) return null
  const [y, mo, d, h, mi, s] = [+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +(m[6] ?? 0)]
  if (m[7]) return { ms: Date.UTC(y, mo, d, h, mi, s), allDay: false, tz: 'UTC' }
  const tz = validZone(prop.params.TZID) ?? calendarTz ?? 'UTC'
  return { ms: zonedToUtc(y, mo, d, h, mi, s, tz), allDay: false, tz }
}

function parseDuration(v: string): number | null {
  const m = /^([+-])?P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/.exec(v.trim())
  if (!m) return null
  const ms = ((+(m[2] ?? 0) * 7 + +(m[3] ?? 0)) * 86400 + +(m[4] ?? 0) * 3600 + +(m[5] ?? 0) * 60 + +(m[6] ?? 0)) * 1000
  return m[1] === '-' ? -ms : ms
}

/** Parse VEVENTs from an .ics document. Unparseable events are skipped. */
export function parseIcs(text: string, maxEvents = 5000): { events: IcsEvent[]; calendarName?: string } {
  const lines = unfold(text)
  const events: IcsEvent[] = []
  let calendarName: string | undefined
  let calendarTz: string | null = null
  let current: Prop[] | null = null
  let depth = 0 // nested components inside VEVENT (e.g. VALARM)

  for (const raw of lines) {
    if (!raw) continue
    const prop = parseLine(raw)
    if (!prop) continue
    if (prop.name === 'BEGIN') {
      if (prop.value.toUpperCase() === 'VEVENT' && !current) { current = []; depth = 0 } else if (current) depth++
      continue
    }
    if (prop.name === 'END') {
      if (current && depth > 0) { depth--; continue }
      if (current && prop.value.toUpperCase() === 'VEVENT') {
        const ev = buildEvent(current, calendarTz)
        if (ev) events.push(ev)
        current = null
        if (events.length >= maxEvents) break
      }
      continue
    }
    if (current) {
      if (depth === 0) current.push(prop)
    } else if (prop.name === 'X-WR-CALNAME') {
      calendarName = unescapeText(prop.value).slice(0, 120)
    } else if (prop.name === 'X-WR-TIMEZONE') {
      calendarTz = validZone(prop.value.trim())
    }
  }
  return { events, calendarName }
}

function buildEvent(props: Prop[], calendarTz: string | null): IcsEvent | null {
  const get = (n: string) => props.find(p => p.name === n)
  const dtstart = get('DTSTART')
  if (!dtstart) return null
  const start = parseTime(dtstart, calendarTz)
  if (!start) return null

  let endMs: number
  const dtend = get('DTEND')
  const duration = get('DURATION')
  const endParsed = dtend ? parseTime(dtend, calendarTz) : null
  if (endParsed) endMs = endParsed.ms
  else if (duration && parseDuration(duration.value) !== null) endMs = start.ms + parseDuration(duration.value)!
  else endMs = start.allDay ? start.ms + DAY_MS : start.ms

  // All-day DTEND is exclusive; store the inclusive last day.
  if (start.allDay) endMs = Math.max(start.ms, endMs - DAY_MS)
  else endMs = Math.max(start.ms, endMs)

  const rruleProp = get('RRULE')
  let rrule: Record<string, string> | undefined
  if (rruleProp) {
    rrule = {}
    for (const part of rruleProp.value.split(';')) {
      const [k, v] = part.split('=')
      if (k && v) rrule[k.toUpperCase()] = v.toUpperCase()
    }
  }
  const exdates: number[] = []
  for (const p of props.filter(p => p.name === 'EXDATE')) {
    for (const v of p.value.split(',')) {
      const t = parseTime({ ...p, value: v }, calendarTz)
      if (t) exdates.push(t.ms)
    }
  }
  const recurrenceProp = get('RECURRENCE-ID')
  const recurrence = recurrenceProp ? parseTime(recurrenceProp, calendarTz) : null
  const summary = get('SUMMARY')
  const status = get('STATUS')?.value.toUpperCase()

  return {
    uid: (get('UID')?.value || `${start.ms}-${summary?.value ?? ''}`).slice(0, 255),
    title: summary ? unescapeText(summary.value).slice(0, 200) || '(No title)' : '(No title)',
    description: get('DESCRIPTION') ? unescapeText(get('DESCRIPTION')!.value).slice(0, 4000) : undefined,
    location: get('LOCATION') ? unescapeText(get('LOCATION')!.value).slice(0, 300) : undefined,
    start: new Date(start.ms),
    end: new Date(endMs),
    allDay: start.allDay,
    tz: start.tz,
    rrule,
    exdates,
    recurrenceId: recurrence?.ms,
    status,
  }
}

const WEEKDAYS = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

function parseUntil(v: string | undefined, tz: string): number | null {
  if (!v) return null
  const t = parseTime({ name: 'UNTIL', params: {}, value: v }, tz)
  if (!t) return null
  // A date-only UNTIL includes that whole day.
  return t.allDay ? t.ms + DAY_MS - 1 : t.ms
}

function daysInMonth(y: number, mo: number) {
  return new Date(Date.UTC(y, mo + 1, 0)).getUTCDate()
}

function nthWeekdayOfMonth(y: number, mo: number, weekday: number, n: number): number | null {
  const dim = daysInMonth(y, mo)
  if (n > 0) {
    const first = new Date(Date.UTC(y, mo, 1)).getUTCDay()
    const day = 1 + ((weekday - first + 7) % 7) + (n - 1) * 7
    return day <= dim ? day : null
  }
  const last = new Date(Date.UTC(y, mo, dim)).getUTCDay()
  const day = dim - ((last - weekday + 7) % 7) + (n + 1) * 7
  return day >= 1 ? day : null
}

/** Expand events (including repeats) into occurrences overlapping [from, to]. */
export function expandEvents(events: IcsEvent[], from: Date, to: Date, maxOccurrences = 2000): Occurrence[] {
  const out: Occurrence[] = []
  const fromMs = from.getTime()
  const toMs = to.getTime()

  // Occurrences replaced by RECURRENCE-ID overrides
  const overridden = new Map<string, Set<number>>()
  for (const e of events) {
    if (e.recurrenceId !== undefined) {
      if (!overridden.has(e.uid)) overridden.set(e.uid, new Set())
      overridden.get(e.uid)!.add(e.recurrenceId)
    }
  }

  const push = (e: IcsEvent, startMs: number, endMs: number) => {
    const overlaps = e.allDay ? endMs + DAY_MS > fromMs && startMs <= toMs : endMs > fromMs && startMs <= toMs
    if (!overlaps || e.status === 'CANCELLED') return
    out.push({
      uid: e.uid, title: e.title, description: e.description, location: e.location,
      start: new Date(startMs).toISOString(), end: new Date(endMs).toISOString(), allDay: e.allDay,
    })
  }

  for (const e of events) {
    if (out.length >= maxOccurrences) break
    const length = e.end.getTime() - e.start.getTime()
    if (!e.rrule || e.recurrenceId !== undefined) {
      push(e, e.start.getTime(), e.end.getTime())
      continue
    }
    const r = e.rrule
    const freq = r.FREQ
    const interval = Math.max(1, parseInt(r.INTERVAL ?? '1', 10) || 1)
    const count = r.COUNT ? parseInt(r.COUNT, 10) : null
    const until = parseUntil(r.UNTIL, e.tz)
    const skip = new Set([...e.exdates, ...(overridden.get(e.uid) ?? [])])
    const base = utcToZoned(e.start.getTime(), e.tz)
    const startMs = e.start.getTime()
    let emitted = 0
    let produced = 0
    let iterations = 0

    const consider = (y: number, mo: number, d: number): boolean => {
      // returns false to stop
      const ms = e.allDay ? Date.UTC(y, mo, d) : zonedToUtc(y, mo, d, base.h, base.mi, base.s, e.tz)
      if (ms < startMs) return true
      if (until !== null && ms > until) return false
      if (count !== null && produced >= count) return false
      produced++
      if (ms > toMs) return false
      if (!skip.has(ms)) {
        push(e, ms, ms + length)
        emitted++
      }
      return emitted < maxOccurrences
    }

    const byDay = (r.BYDAY ?? '').split(',').filter(Boolean)
    const byMonthDay = (r.BYMONTHDAY ?? '').split(',').filter(Boolean).map(Number).filter(n => Number.isInteger(n) && n !== 0)

    let keepGoing = true
    if (freq === 'DAILY') {
      for (let k = 0; keepGoing && iterations++ < 20000; k += interval) {
        const dt = new Date(Date.UTC(base.y, base.mo, base.d + k))
        keepGoing = consider(dt.getUTCFullYear(), dt.getUTCMonth(), dt.getUTCDate())
      }
    } else if (freq === 'WEEKLY') {
      const days = (byDay.length ? byDay.map(d => WEEKDAYS.indexOf(d.slice(-2))) : [new Date(Date.UTC(base.y, base.mo, base.d)).getUTCDay()])
        .filter(d => d >= 0)
      const order = (d: number) => (d + 6) % 7 // Monday-first weeks (WKST=MO)
      days.sort((a, b) => order(a) - order(b))
      const baseDow = new Date(Date.UTC(base.y, base.mo, base.d)).getUTCDay()
      const weekStart = Date.UTC(base.y, base.mo, base.d - order(baseDow))
      for (let w = 0; keepGoing && iterations++ < 5000; w += interval) {
        for (const d of days) {
          const dt = new Date(weekStart + (w * 7 + order(d)) * DAY_MS)
          keepGoing = consider(dt.getUTCFullYear(), dt.getUTCMonth(), dt.getUTCDate())
          if (!keepGoing) break
        }
      }
    } else if (freq === 'MONTHLY') {
      for (let k = 0; keepGoing && iterations++ < 2400; k += interval) {
        const y = base.y + Math.floor((base.mo + k) / 12)
        const mo = (base.mo + k) % 12
        const dim = daysInMonth(y, mo)
        let candidates: number[] = []
        if (byDay.length) {
          for (const spec of byDay) {
            const m = /^([+-]?\d+)?([A-Z]{2})$/.exec(spec)
            if (!m) continue
            const wd = WEEKDAYS.indexOf(m[2])
            if (wd < 0) continue
            if (m[1]) {
              const day = nthWeekdayOfMonth(y, mo, wd, parseInt(m[1], 10))
              if (day) candidates.push(day)
            } else {
              for (let day = 1; day <= dim; day++) if (new Date(Date.UTC(y, mo, day)).getUTCDay() === wd) candidates.push(day)
            }
          }
          if (r.BYSETPOS && candidates.length) {
            candidates.sort((a, b) => a - b)
            const pos = parseInt(r.BYSETPOS, 10)
            const pick = pos > 0 ? candidates[pos - 1] : candidates[candidates.length + pos]
            candidates = pick ? [pick] : []
          }
        } else if (byMonthDay.length) {
          candidates = byMonthDay.map(n => (n > 0 ? n : dim + n + 1)).filter(n => n >= 1 && n <= dim)
        } else if (base.d <= dim) {
          candidates = [base.d]
        }
        for (const day of [...new Set(candidates)].sort((a, b) => a - b)) {
          keepGoing = consider(y, mo, day)
          if (!keepGoing) break
        }
      }
    } else if (freq === 'YEARLY') {
      for (let k = 0; keepGoing && iterations++ < 500; k += interval) {
        const y = base.y + k
        if (base.d <= daysInMonth(y, base.mo)) keepGoing = consider(y, base.mo, base.d)
      }
    } else {
      push(e, startMs, e.end.getTime()) // Unsupported rule: show the first occurrence
    }
  }

  return out.sort((a, b) => a.start.localeCompare(b.start))
}

// ---------- Writing ----------

function escapeText(v: string): string {
  return v.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n')
}

/** Fold lines at 75 octets as RFC 5545 requires. */
function fold(line: string): string {
  const bytes = new TextEncoder().encode(line)
  if (bytes.length <= 75) return line
  const out: string[] = []
  let current = ''
  let size = 0
  for (const ch of line) {
    const n = new TextEncoder().encode(ch).length
    if (size + n > (out.length ? 74 : 75)) {
      out.push(current)
      current = ''
      size = 0
    }
    current += ch
    size += n
  }
  out.push(current)
  return out.join('\r\n ')
}

const pad = (n: number) => String(n).padStart(2, '0')
function utcStamp(d: Date) {
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`
}
function dateStamp(d: Date) {
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}`
}

export interface FeedEvent {
  uid: string
  title: string
  description?: string
  location?: string
  start: Date
  end?: Date | null // inclusive for all-day
  allDay: boolean
  updatedAt: Date
  url?: string
}

export function buildIcs(calendarName: string, events: FeedEvent[]): string {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Project Exodus//Initiative Calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${escapeText(calendarName)}`,
    'REFRESH-INTERVAL;VALUE=DURATION:PT1H',
    'X-PUBLISHED-TTL:PT1H',
  ]
  for (const e of events) {
    lines.push('BEGIN:VEVENT', `UID:${e.uid}`, `DTSTAMP:${utcStamp(e.updatedAt)}`)
    if (e.allDay) {
      const last = e.end && e.end > e.start ? e.end : e.start
      lines.push(`DTSTART;VALUE=DATE:${dateStamp(e.start)}`, `DTEND;VALUE=DATE:${dateStamp(new Date(last.getTime() + DAY_MS))}`)
    } else {
      const end = e.end && e.end > e.start ? e.end : new Date(e.start.getTime() + 3600000)
      lines.push(`DTSTART:${utcStamp(e.start)}`, `DTEND:${utcStamp(end)}`)
    }
    lines.push(`SUMMARY:${escapeText(e.title)}`)
    if (e.description) lines.push(`DESCRIPTION:${escapeText(e.description)}`)
    if (e.location) lines.push(`LOCATION:${escapeText(e.location)}`)
    if (e.url) lines.push(`URL:${e.url}`)
    lines.push('END:VEVENT')
  }
  lines.push('END:VCALENDAR')
  return lines.map(fold).join('\r\n') + '\r\n'
}
