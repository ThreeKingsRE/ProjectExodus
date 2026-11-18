// Date helpers for the initiative calendar. All-day items are stored at UTC
// midnight with an inclusive end day; timed items are real instants shown in
// the viewer's local time.

export interface CalEntry {
  key: string
  itemId?: string
  feedId?: string
  title: string
  start: Date
  end: Date // all-day: inclusive last day (UTC midnight); timed: exclusive end
  allDay: boolean
  color: string
  kind?: 'MILESTONE' | 'TASK' | 'EVENT'
  status?: 'TODO' | 'IN_PROGRESS' | 'BLOCKED' | 'DONE'
  assigneeIds?: string[]
  external?: boolean
  location?: string | null
  description?: string | null
}

export const KIND_COLOR = { MILESTONE: '#a855f7', TASK: '#3b82f6', EVENT: '#10b981' } as const

const pad = (n: number) => String(n).padStart(2, '0')

/** Local calendar day key, e.g. 2026-11-17 */
export const localKey = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
/** UTC calendar day key, used for all-day items */
export const utcKey = (d: Date) => `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`

export const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate())
export const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n)
export const startOfWeek = (d: Date) => addDays(startOfDay(d), -d.getDay()) // Sunday-first
export const startOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1)
export const sameDay = (a: Date, b: Date) => localKey(a) === localKey(b)

/** Local midnight for the calendar day an all-day UTC date represents. */
export const allDayToLocal = (d: Date) => new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())

/** The local day keys an entry covers. */
export function entryDayKeys(e: CalEntry): string[] {
  const keys: string[] = []
  if (e.allDay) {
    let d = allDayToLocal(e.start)
    const last = allDayToLocal(e.end < e.start ? e.start : e.end)
    for (let i = 0; i < 400 && d <= last; i++, d = addDays(d, 1)) keys.push(localKey(d))
  } else {
    let d = startOfDay(e.start)
    const lastInstant = new Date(Math.max(e.start.getTime(), e.end.getTime() - 1))
    const last = startOfDay(lastInstant)
    for (let i = 0; i < 60 && d <= last; i++, d = addDays(d, 1)) keys.push(localKey(d))
  }
  return keys
}

/** Group entries by local day key. */
export function byDay(entries: CalEntry[]): Map<string, CalEntry[]> {
  const map = new Map<string, CalEntry[]>()
  for (const e of entries) for (const k of entryDayKeys(e)) {
    if (!map.has(k)) map.set(k, [])
    map.get(k)!.push(e)
  }
  for (const list of map.values()) list.sort((a, b) => Number(b.allDay) - Number(a.allDay) || a.start.getTime() - b.start.getTime())
  return map
}

export interface PlacedEntry { entry: CalEntry; top: number; height: number; lane: number; lanes: number }

/** Lay out timed entries for one day into side-by-side lanes. Units are minutes from midnight. */
export function layoutDay(entries: CalEntry[], day: Date): PlacedEntry[] {
  const dayStart = startOfDay(day).getTime()
  const dayEnd = addDays(day, 1).getTime()
  const timed = entries
    .filter(e => !e.allDay)
    .map(e => {
      const s = Math.max(e.start.getTime(), dayStart)
      const en = Math.min(Math.max(e.end.getTime(), e.start.getTime() + 30 * 60000), dayEnd)
      return { entry: e, top: (s - dayStart) / 60000, bottom: (en - dayStart) / 60000 }
    })
    .sort((a, b) => a.top - b.top || b.bottom - a.bottom)

  const placed: PlacedEntry[] = []
  let cluster: typeof timed = []
  let clusterEnd = -1
  const flush = () => {
    const laneEnds: number[] = []
    const lanesOf: number[] = []
    for (const t of cluster) {
      let lane = laneEnds.findIndex(end => end <= t.top)
      if (lane === -1) { lane = laneEnds.length; laneEnds.push(t.bottom) } else laneEnds[lane] = t.bottom
      lanesOf.push(lane)
    }
    cluster.forEach((t, i) => placed.push({ entry: t.entry, top: t.top, height: Math.max(20, t.bottom - t.top), lane: lanesOf[i], lanes: laneEnds.length }))
    cluster = []
  }
  for (const t of timed) {
    if (cluster.length && t.top >= clusterEnd) { flush(); clusterEnd = -1 }
    cluster.push(t)
    clusterEnd = Math.max(clusterEnd, t.bottom)
  }
  if (cluster.length) flush()
  return placed
}

export const fmtTime = (d: Date) => d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
export const fmtDay = (d: Date, opts: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' }) => d.toLocaleDateString([], opts)

/** Values for <input type="date"> / <input type="datetime-local"> */
export const toDateInput = (d: Date, allDay: boolean) => (allDay ? utcKey(d) : localKey(d))
export const toDateTimeInput = (d: Date) => `${localKey(d)}T${pad(d.getHours())}:${pad(d.getMinutes())}`
