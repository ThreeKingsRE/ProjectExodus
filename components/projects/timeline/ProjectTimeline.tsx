'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import {
  CalendarDays, ChevronLeft, ChevronRight, Plus, Loader2, X, Save, Trash2, Diamond, CheckCircle2,
  Circle, Clock, AlertTriangle, Link2, Check, Upload, CalendarPlus, RefreshCw, MapPin, Users,
} from 'lucide-react'
import { ItemComments } from '@/components/projects/team/ItemComments'
import {
  KIND_LABEL, STATUS_LABEL, TIMELINE_KINDS, TIMELINE_STATUSES,
  type TimelineKind, type TimelineStatus,
} from '@/lib/projects/timeline'
import {
  KIND_COLOR, addDays, allDayToLocal, byDay, fmtDay, fmtTime, layoutDay, localKey, sameDay, startOfDay,
  startOfMonth, startOfWeek, toDateInput, toDateTimeInput, type CalEntry,
} from './calendarUtils'

type View = 'timeline' | 'month' | 'week' | 'day'

interface Item {
  id: string
  kind: TimelineKind
  title: string
  description: string | null
  location: string | null
  startAt: string | null
  endAt: string | null
  allDay: boolean
  status: TimelineStatus
  assigneeIds: string[]
  milestoneId: string | null
  color: string | null
  isPublic: boolean
  imported: boolean
  createdBy: { id: string; name: string | null }
  canEdit: boolean
  canReassign: boolean
}
interface External { uid: string; title: string; start: string; end: string; allDay: boolean; feedId: string; color: string; location?: string; description?: string }
interface Member { id: string; name: string; image: string | null; role: string }
interface FeedStatus { id: string; name: string; color: string; error: string | null }
interface TimelineData {
  items: Item[]
  external: External[]
  feeds: FeedStatus[]
  milestones: { id: string; title: string; endAt: string | null; startAt: string | null; status: TimelineStatus }[]
  members: Member[]
  me: string
  canAdd: boolean
  canManage: boolean
}

const HOUR_PX = 44
const STATUS_ICON = { TODO: Circle, IN_PROGRESS: Clock, BLOCKED: AlertTriangle, DONE: CheckCircle2 } as const

function rangeFor(view: View, cursor: Date): [Date, Date] {
  if (view === 'day') return [startOfDay(cursor), addDays(cursor, 1)]
  if (view === 'week') { const s = startOfWeek(cursor); return [s, addDays(s, 7)] }
  if (view === 'month') { const s = startOfWeek(startOfMonth(cursor)); return [s, addDays(s, 42)] }
  const s = startOfWeek(addDays(cursor, -14)); return [s, addDays(s, 7 * 16)]
}

function toEntry(i: Item): CalEntry | null {
  const s = i.startAt ?? i.endAt
  if (!s) return null
  const start = new Date(s)
  let end = new Date(i.endAt ?? s)
  if (!i.allDay && (!i.startAt || !i.endAt || end <= start)) end = new Date(start.getTime() + 60 * 60000)
  return {
    key: `i-${i.id}`, itemId: i.id, title: i.title, start, end, allDay: i.allDay,
    color: i.color || KIND_COLOR[i.kind], kind: i.kind, status: i.status, assigneeIds: i.assigneeIds,
    location: i.location, description: i.description,
  }
}

export function ProjectTimeline({ projectId }: { projectId: string }) {
  const [view, setView] = useState<View>('month')
  const [cursor, setCursor] = useState(() => startOfDay(new Date()))
  const [data, setData] = useState<TimelineData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [who, setWho] = useState<string>('all') // 'all' | 'mine' | userId
  const [showDone, setShowDone] = useState(true)
  const [showLinked, setShowLinked] = useState(true)
  const [editing, setEditing] = useState<{ item: Item | null; defaults?: Partial<Item> } | null>(null)
  const [viewingExternal, setViewingExternal] = useState<CalEntry | null>(null)
  const [calendarsOpen, setCalendarsOpen] = useState(false)

  const [from, to] = useMemo(() => rangeFor(view, cursor), [view, cursor])

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const qs = new URLSearchParams({ from: from.toISOString(), to: to.toISOString() })
      const res = await fetch(`/api/projects/${projectId}/timeline?${qs}`)
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json.error || 'Failed to load the timeline.')
      setData(json.data)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load the timeline.')
    } finally {
      setLoading(false)
    }
  }, [projectId, from, to])

  useEffect(() => { load() }, [load])

  const memberName = useCallback((id: string) => data?.members.find(m => m.id === id)?.name ?? 'Former member', [data])

  const visibleItems = useMemo(() => {
    if (!data) return []
    return data.items.filter(i => {
      if (!showDone && i.status === 'DONE') return false
      if (who === 'mine') return i.assigneeIds.includes(data.me) || (i.assigneeIds.length === 0 && i.createdBy.id === data.me)
      if (who !== 'all') return i.assigneeIds.includes(who)
      return true
    })
  }, [data, who, showDone])

  const entries = useMemo(() => {
    const list = visibleItems.map(toEntry).filter((e): e is CalEntry => !!e)
    if (data && showLinked && who === 'all') {
      for (const x of data.external) {
        list.push({
          key: `x-${x.feedId}-${x.uid}-${x.start}`, feedId: x.feedId, title: x.title, start: new Date(x.start), end: new Date(x.end),
          allDay: x.allDay, color: x.color, external: true, location: x.location, description: x.description,
        })
      }
    }
    return list
  }, [visibleItems, data, showLinked, who])

  const days = useMemo(() => byDay(entries), [entries])

  const move = (dir: -1 | 1) => {
    setCursor(c => view === 'day' ? addDays(c, dir) : view === 'week' ? addDays(c, 7 * dir) : view === 'month'
      ? new Date(c.getFullYear(), c.getMonth() + dir, 1) : addDays(c, 28 * dir))
  }

  const openEntry = (e: CalEntry) => {
    if (e.external) { setViewingExternal(e); return }
    const item = data?.items.find(i => i.id === e.itemId)
    if (item) setEditing({ item })
  }

  const newOn = (day: Date, hour?: number) => {
    if (!data?.canAdd) return
    if (hour === undefined) {
      const key = localKey(day)
      setEditing({ item: null, defaults: { kind: 'EVENT', allDay: true, startAt: `${key}T00:00:00.000Z`, endAt: `${key}T00:00:00.000Z` } })
    } else {
      const s = new Date(day.getFullYear(), day.getMonth(), day.getDate(), hour)
      setEditing({ item: null, defaults: { kind: 'EVENT', allDay: false, startAt: s.toISOString(), endAt: new Date(s.getTime() + 3600000).toISOString() } })
    }
  }

  const title = view === 'day' ? fmtDay(cursor, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
    : view === 'week' ? `${fmtDay(from, { month: 'short', day: 'numeric' })} – ${fmtDay(addDays(to, -1), { month: 'short', day: 'numeric', year: 'numeric' })}`
    : view === 'month' ? cursor.toLocaleDateString([], { month: 'long', year: 'numeric' })
    : `${fmtDay(from, { month: 'short', day: 'numeric' })} – ${fmtDay(addDays(to, -1), { month: 'short', day: 'numeric', year: 'numeric' })}`

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-black">TEAM CALENDAR</h2>
          <p className="max-w-2xl text-sm text-theme-muted">
            This initiative’s own calendar. Schedule meetings, deadlines, tasks and milestones for the team here; no personal calendar needed.
            Already use Google, Outlook or Apple Calendar? Linking or importing one is optional.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {data?.canAdd && (
            <Button className="font-bold" onClick={() => newOn(startOfDay(new Date()))}>
              <Plus className="w-4 h-4 mr-2" />SCHEDULE
            </Button>
          )}
          <Button variant="outline" className="font-bold" onClick={() => setCalendarsOpen(true)} title="Optional: show an existing calendar here, import one, or add this calendar to your own">
            <CalendarPlus className="w-4 h-4 mr-2" />LINK OR IMPORT
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex rounded-lg border-2 border-[var(--border)] overflow-hidden" role="tablist" aria-label="Calendar view">
          {(['timeline', 'month', 'week', 'day'] as View[]).map(v => (
            <button
              key={v}
              role="tab"
              aria-selected={view === v}
              onClick={() => setView(v)}
              className={`px-3 py-1.5 text-sm font-bold capitalize ${view === v ? 'bg-[var(--primary)] text-[var(--primary-foreground)]' : 'hover:bg-[var(--muted)]'}`}
            >
              {v}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <Button size="sm" variant="ghost" onClick={() => move(-1)} aria-label="Previous"><ChevronLeft className="w-4 h-4" /></Button>
          <Button size="sm" variant="outline" className="font-bold" onClick={() => setCursor(startOfDay(new Date()))}>Today</Button>
          <Button size="sm" variant="ghost" onClick={() => move(1)} aria-label="Next"><ChevronRight className="w-4 h-4" /></Button>
        </div>
        <p className="font-black">{title}</p>
        <div className="ml-auto flex flex-wrap items-center gap-3 text-sm">
          <select value={who} onChange={e => setWho(e.target.value)} className="rounded-lg border-2 border-[var(--border)] bg-[var(--background)] px-2 py-1.5 text-sm" aria-label="Whose items">
            <option value="all">Everyone</option>
            <option value="mine">Just mine</option>
            {data?.members.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
          </select>
          <label className="flex items-center gap-1.5"><input type="checkbox" checked={showDone} onChange={e => setShowDone(e.target.checked)} />Done</label>
          {data && data.feeds.length > 0 && (
            <label className="flex items-center gap-1.5"><input type="checkbox" checked={showLinked} onChange={e => setShowLinked(e.target.checked)} />Linked calendars</label>
          )}
        </div>
      </div>

      {data?.canAdd && (view === 'month' || view === 'week' || view === 'day') && (
        <p className="text-xs text-theme-muted">
          {entries.length === 0
            ? 'Nothing scheduled yet. Click any day to schedule something for the team, or use Schedule above.'
            : view === 'month' ? 'Tip: click a day to schedule something on it.' : 'Tip: click an hour to schedule an event at that time.'}
        </p>
      )}
      {data && !data.canAdd && entries.length === 0 && (
        <p className="text-xs text-theme-muted">Nothing on the team calendar yet.</p>
      )}

      {data?.feeds.some(f => f.error) && (
        <p className="rounded-lg bg-yellow-500/10 p-2 text-xs text-yellow-700 dark:text-yellow-400">
          {data.feeds.filter(f => f.error).map(f => `${f.name}: ${f.error}`).join(' · ')}
        </p>
      )}

      {error ? (
        <Card className="border-2 border-dashed"><CardContent className="p-8 text-center text-theme-muted">{error}</CardContent></Card>
      ) : !data ? (
        <div className="flex justify-center py-16"><Loader2 className="w-8 h-8 animate-spin text-theme-primary" /></div>
      ) : (
        <div className={`relative ${loading ? 'opacity-60' : ''}`}>
          {view === 'month' && <MonthView cursor={cursor} from={from} days={days} onOpen={openEntry} onNew={newOn} onDay={d => { setCursor(d); setView('day') }} />}
          {(view === 'week' || view === 'day') && (
            <TimeGrid dates={view === 'week' ? Array.from({ length: 7 }, (_, i) => addDays(from, i)) : [cursor]} days={days} onOpen={openEntry} onNew={newOn} />
          )}
          {view === 'timeline' && (
            <GanttView from={from} to={to} items={visibleItems} milestones={data.milestones} memberName={memberName} onOpen={i => setEditing({ item: i })} />
          )}
        </div>
      )}

      {/* Legend */}
      {data && (
        <div className="flex flex-wrap gap-3 text-xs text-theme-muted">
          {TIMELINE_KINDS.map(k => (
            <span key={k} className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-sm" style={{ background: KIND_COLOR[k] }} />{KIND_LABEL[k]}</span>
          ))}
          {data.feeds.map(f => (
            <span key={f.id} className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-sm border border-dashed" style={{ borderColor: f.color, background: `${f.color}33` }} />{f.name}</span>
          ))}
        </div>
      )}

      {editing && data && (
        <ItemForm
          projectId={projectId}
          item={editing.item}
          defaults={editing.defaults}
          data={data}
          onClose={() => setEditing(null)}
          onSaved={() => { setEditing(null); load() }}
        />
      )}

      {viewingExternal && (
        <Modal title={viewingExternal.title} onClose={() => setViewingExternal(null)}>
          <p className="text-sm">{describeWhen(viewingExternal)}</p>
          {viewingExternal.location && <p className="flex items-center gap-1 text-sm"><MapPin className="w-4 h-4" />{viewingExternal.location}</p>}
          {viewingExternal.description && <p className="whitespace-pre-wrap text-sm text-theme-muted">{viewingExternal.description}</p>}
          <p className="text-xs text-theme-muted">From the linked calendar “{data?.feeds.find(f => f.id === viewingExternal.feedId)?.name}”. Edit it in that calendar.</p>
        </Modal>
      )}

      {calendarsOpen && data && (
        <CalendarsPanel projectId={projectId} canAdd={data.canAdd} canManage={data.canManage} onClose={() => setCalendarsOpen(false)} onChanged={load} />
      )}
    </div>
  )
}

function describeWhen(e: CalEntry) {
  if (e.allDay) {
    const s = allDayToLocal(e.start)
    const en = allDayToLocal(e.end)
    return sameDay(s, en) ? fmtDay(s, { weekday: 'long', month: 'long', day: 'numeric' }) : `${fmtDay(s)} – ${fmtDay(en)}`
  }
  return sameDay(e.start, e.end) || e.end.getTime() - e.start.getTime() < 86400000
    ? `${fmtDay(e.start, { weekday: 'long', month: 'long', day: 'numeric' })}, ${fmtTime(e.start)} – ${fmtTime(e.end)}`
    : `${fmtDay(e.start)} ${fmtTime(e.start)} – ${fmtDay(e.end)} ${fmtTime(e.end)}`
}

function Chip({ e, onOpen, compact }: { e: CalEntry; onOpen: (e: CalEntry) => void; compact?: boolean }) {
  const done = e.status === 'DONE'
  return (
    <button
      onClick={ev => { ev.stopPropagation(); onOpen(e) }}
      className={`flex w-full items-center gap-1 truncate rounded px-1.5 py-0.5 text-left text-[11px] font-semibold leading-tight ${done ? 'opacity-50 line-through' : ''} ${e.external ? 'border border-dashed' : 'text-white'}`}
      style={e.external ? { borderColor: e.color, background: `${e.color}22` } : { background: e.color }}
      title={e.title}
    >
      {e.kind === 'MILESTONE' && <Diamond className="w-3 h-3 shrink-0" />}
      {e.status === 'BLOCKED' && <AlertTriangle className="w-3 h-3 shrink-0" />}
      {!e.allDay && !compact && <span className="shrink-0 opacity-80">{fmtTime(e.start).replace(':00', '')}</span>}
      <span className="truncate">{e.title}</span>
    </button>
  )
}

function MonthView({ cursor, from, days, onOpen, onNew, onDay }: {
  cursor: Date; from: Date; days: Map<string, CalEntry[]>; onOpen: (e: CalEntry) => void; onNew: (d: Date) => void; onDay: (d: Date) => void
}) {
  const today = new Date()
  const cells = Array.from({ length: 42 }, (_, i) => addDays(from, i))
  return (
    <div className="overflow-hidden rounded-xl border-2 border-[var(--border)]">
      <div className="grid grid-cols-7 border-b border-[var(--border)] bg-[var(--muted)] text-center text-xs font-bold">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d} className="py-1.5">{d}</div>)}
      </div>
      <div className="grid grid-cols-7">
        {cells.map(d => {
          const list = days.get(localKey(d)) ?? []
          const outside = d.getMonth() !== cursor.getMonth()
          return (
            <div
              key={localKey(d)}
              onClick={() => onNew(d)}
              className={`min-h-[84px] sm:min-h-[104px] border-b border-r border-[var(--border)] p-1 ${outside ? 'bg-[var(--muted)]/40 text-theme-muted' : ''}`}
            >
              <button
                onClick={ev => { ev.stopPropagation(); onDay(d) }}
                className={`mb-0.5 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${sameDay(d, today) ? 'bg-[var(--primary)] text-[var(--primary-foreground)]' : 'hover:bg-[var(--muted)]'}`}
                aria-label={fmtDay(d, { weekday: 'long', month: 'long', day: 'numeric' })}
              >
                {d.getDate()}
              </button>
              <div className="space-y-0.5">
                {list.slice(0, 3).map(e => <Chip key={e.key} e={e} onOpen={onOpen} compact />)}
                {list.length > 3 && (
                  <button onClick={ev => { ev.stopPropagation(); onDay(d) }} className="text-[11px] font-bold text-theme-muted hover:text-theme-primary">+{list.length - 3} more</button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function TimeGrid({ dates, days, onOpen, onNew }: {
  dates: Date[]; days: Map<string, CalEntry[]>; onOpen: (e: CalEntry) => void; onNew: (d: Date, hour?: number) => void
}) {
  const scroller = useRef<HTMLDivElement>(null)
  useEffect(() => { scroller.current?.scrollTo({ top: HOUR_PX * 7 }) }, [])
  const today = new Date()
  const now = new Date()
  const nowTop = (now.getHours() * 60 + now.getMinutes()) * (HOUR_PX / 60)
  const cols = `3rem repeat(${dates.length}, minmax(0, 1fr))`

  return (
    <div className="overflow-hidden rounded-xl border-2 border-[var(--border)]">
      {/* Day headers + all-day row */}
      <div className="grid border-b border-[var(--border)] bg-[var(--muted)]" style={{ gridTemplateColumns: cols }}>
        <div />
        {dates.map(d => (
          <div key={localKey(d)} className="py-1.5 text-center text-xs font-bold">
            <span className={sameDay(d, today) ? 'text-theme-primary' : ''}>{fmtDay(d, { weekday: 'short' })} {d.getDate()}</span>
          </div>
        ))}
      </div>
      <div className="grid border-b border-[var(--border)]" style={{ gridTemplateColumns: cols }}>
        <div className="py-1 pr-1 text-right text-[10px] text-theme-muted">all day</div>
        {dates.map(d => (
          <div key={localKey(d)} className="min-h-[28px] space-y-0.5 border-l border-[var(--border)] p-0.5" onClick={() => onNew(d)}>
            {(days.get(localKey(d)) ?? []).filter(e => e.allDay).map(e => <Chip key={e.key} e={e} onOpen={onOpen} />)}
          </div>
        ))}
      </div>
      {/* Hours */}
      <div ref={scroller} className="max-h-[560px] overflow-y-auto">
        <div className="relative grid" style={{ gridTemplateColumns: cols, height: HOUR_PX * 24 }}>
          <div className="relative">
            {Array.from({ length: 24 }, (_, h) => (
              <div key={h} className="absolute right-1 -translate-y-1/2 text-[10px] text-theme-muted" style={{ top: h * HOUR_PX }}>
                {h === 0 ? '' : new Date(2000, 0, 1, h).toLocaleTimeString([], { hour: 'numeric' })}
              </div>
            ))}
          </div>
          {dates.map(d => {
            const placed = layoutDay(days.get(localKey(d)) ?? [], d)
            return (
              <div key={localKey(d)} className="relative border-l border-[var(--border)]">
                {Array.from({ length: 24 }, (_, h) => (
                  <div
                    key={h}
                    onClick={() => onNew(d, h)}
                    className="absolute inset-x-0 border-t border-[var(--border)]/60 hover:bg-[var(--muted)]/50"
                    style={{ top: h * HOUR_PX, height: HOUR_PX }}
                  />
                ))}
                {sameDay(d, today) && <div className="pointer-events-none absolute inset-x-0 z-10 h-0.5 bg-red-500" style={{ top: nowTop }} />}
                {placed.map(p => {
                  const done = p.entry.status === 'DONE'
                  return (
                    <button
                      key={p.entry.key}
                      onClick={() => onOpen(p.entry)}
                      className={`absolute z-[5] overflow-hidden rounded-md px-1.5 py-0.5 text-left text-[11px] font-semibold leading-tight shadow-sm ${p.entry.external ? 'border border-dashed' : 'text-white'} ${done ? 'opacity-50 line-through' : ''}`}
                      style={{
                        top: p.top * (HOUR_PX / 60),
                        height: p.height * (HOUR_PX / 60) - 2,
                        left: `calc(${(p.lane / p.lanes) * 100}% + 2px)`,
                        width: `calc(${100 / p.lanes}% - 4px)`,
                        ...(p.entry.external ? { borderColor: p.entry.color, background: `${p.entry.color}22` } : { background: p.entry.color }),
                      }}
                      title={p.entry.title}
                    >
                      <span className="block truncate">{p.entry.title}</span>
                      <span className="block truncate opacity-80">{fmtTime(p.entry.start)}</span>
                    </button>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function GanttView({ from, to, items, milestones, memberName, onOpen }: {
  from: Date; to: Date; items: Item[]; milestones: TimelineData['milestones']; memberName: (id: string) => string; onOpen: (i: Item) => void
}) {
  const DAY_PX = 18
  const totalDays = Math.round((to.getTime() - from.getTime()) / 86400000)
  const weeks = Array.from({ length: Math.ceil(totalDays / 7) }, (_, w) => addDays(from, w * 7))
  const today = startOfDay(new Date())
  const offset = (d: Date) => Math.round((startOfDay(d).getTime() - from.getTime()) / 86400000)
  const todayLeft = today >= from && today < to ? offset(today) * DAY_PX + DAY_PX / 2 : null

  const groups = useMemo(() => {
    const ms = items.filter(i => i.kind === 'MILESTONE')
    const out: { milestone: Item | null; title: string; rows: Item[] }[] = ms.map(m => ({ milestone: m, title: m.title, rows: items.filter(i => i.milestoneId === m.id) }))
    // Linked items whose milestone is outside the range still group under it
    const known = new Set(ms.map(m => m.id))
    for (const m of milestones) {
      if (known.has(m.id)) continue
      const rows = items.filter(i => i.milestoneId === m.id)
      if (rows.length) out.push({ milestone: null, title: m.title, rows })
    }
    const loose = items.filter(i => i.kind !== 'MILESTONE' && (!i.milestoneId || (!known.has(i.milestoneId) && !milestones.some(m => m.id === i.milestoneId))))
    if (loose.length) out.push({ milestone: null, title: 'Other tasks & events', rows: loose })
    return out
  }, [items, milestones])

  const bar = (i: Item) => {
    const s = i.startAt ?? i.endAt
    if (!s) return null
    const startD = i.allDay ? allDayToLocal(new Date(s)) : new Date(s)
    const endD = i.endAt ? (i.allDay ? allDayToLocal(new Date(i.endAt)) : new Date(i.endAt)) : startD
    const left = offset(startD)
    const width = Math.max(1, offset(endD) - left + 1)
    if (left > totalDays || left + width < 0) return null
    return { left: Math.max(0, left) * DAY_PX, width: Math.min(width, totalDays - Math.max(0, left)) * DAY_PX }
  }

  const Row = ({ i, indent }: { i: Item; indent?: boolean }) => {
    const b = bar(i)
    const Icon = i.kind === 'MILESTONE' ? Diamond : STATUS_ICON[i.status]
    const color = i.color || KIND_COLOR[i.kind]
    return (
      <div className="flex border-b border-[var(--border)]/60">
        <button onClick={() => onOpen(i)} className={`sticky left-0 z-10 flex w-48 sm:w-64 shrink-0 items-center gap-1.5 bg-[var(--background)] px-2 py-1.5 text-left text-sm hover:bg-[var(--muted)] ${indent ? 'pl-6' : 'font-bold'}`}>
          <Icon className="w-3.5 h-3.5 shrink-0" style={{ color }} />
          <span className={`truncate ${i.status === 'DONE' ? 'line-through opacity-60' : ''}`}>{i.title}</span>
          {i.assigneeIds.length > 0 && <span className="ml-auto shrink-0 truncate text-[10px] text-theme-muted max-w-[5rem]">{i.assigneeIds.map(memberName).map(n => n.split(' ')[0]).join(', ')}</span>}
        </button>
        <div className="relative" style={{ width: totalDays * DAY_PX }}>
          {todayLeft !== null && <div className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-red-500/60" style={{ left: todayLeft }} />}
          {b && (i.kind === 'MILESTONE' ? (
            <button onClick={() => onOpen(i)} className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45" style={{ left: b.left + b.width - DAY_PX / 2, background: color }} aria-label={i.title} />
          ) : (
            <button onClick={() => onOpen(i)} className={`absolute top-1.5 bottom-1.5 rounded ${i.status === 'DONE' ? 'opacity-50' : ''}`} style={{ left: b.left + 1, width: b.width - 2, background: color }} aria-label={i.title} />
          ))}
        </div>
      </div>
    )
  }

  if (!groups.length) {
    return (
      <Card className="border-2 border-dashed">
        <CardContent className="p-10 text-center text-theme-muted">
          <CalendarDays className="w-12 h-12 mx-auto mb-3 opacity-50" />
          Nothing scheduled in this range. Add a milestone to set a target, then add the tasks that get you there.
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="overflow-x-auto rounded-xl border-2 border-[var(--border)]">
      <div className="min-w-max">
        <div className="flex border-b border-[var(--border)] bg-[var(--muted)]">
          <div className="sticky left-0 z-10 w-48 sm:w-64 shrink-0 bg-[var(--muted)] px-2 py-1.5 text-xs font-bold">Milestone / task</div>
          <div className="relative flex" style={{ width: totalDays * DAY_PX }}>
            {weeks.map(w => (
              <div key={localKey(w)} className="shrink-0 border-l border-[var(--border)] px-1 py-1.5 text-[10px] font-bold" style={{ width: 7 * DAY_PX }}>
                {fmtDay(w, { month: 'short', day: 'numeric' })}
              </div>
            ))}
          </div>
        </div>
        <div>
          {groups.map(g => {
            const done = g.rows.filter(r => r.status === 'DONE').length
            return (
              <div key={g.milestone?.id ?? g.title}>
                {g.milestone ? <Row i={g.milestone} /> : (
                  <div className="sticky left-0 bg-[var(--muted)]/50 px-2 py-1 text-xs font-bold text-theme-muted">{g.title}</div>
                )}
                {g.milestone && g.rows.length > 0 && (
                  <div className="sticky left-0 w-48 sm:w-64 px-6 pb-1 text-[10px] text-theme-muted">{done}/{g.rows.length} done</div>
                )}
                {g.rows.map(r => <Row key={r.id} i={r} indent />)}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-label={title}>
      <div className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-[var(--background)] p-5 sm:rounded-2xl space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-black truncate">{title}</h3>
          <button type="button" onClick={onClose} aria-label="Close"><X className="w-5 h-5" /></button>
        </div>
        {children}
      </div>
    </div>
  )
}

function ItemForm({ projectId, item, defaults, data, onClose, onSaved }: {
  projectId: string; item: Item | null; defaults?: Partial<Item>; data: TimelineData; onClose: () => void; onSaved: () => void
}) {
  const base = item ?? ({ kind: 'TASK', allDay: true, status: 'TODO', assigneeIds: [data.me], ...defaults } as Partial<Item>)
  const readOnly = !!item && !item.canEdit
  const canReassign = !item || item.canReassign
  const [kind, setKind] = useState<TimelineKind>(base.kind ?? 'TASK')
  const [title, setTitle] = useState(base.title ?? '')
  const [allDay, setAllDay] = useState(base.allDay ?? true)
  const initial = (iso: string | null | undefined, ad: boolean) => (iso ? (ad ? toDateInput(new Date(iso), true) : toDateTimeInput(new Date(iso))) : '')
  const [start, setStart] = useState(initial(base.startAt, base.allDay ?? true))
  const [end, setEnd] = useState(initial(base.endAt, base.allDay ?? true))
  const [status, setStatus] = useState<TimelineStatus>(base.status ?? 'TODO')
  const [assignees, setAssignees] = useState<string[]>(base.assigneeIds ?? [])
  const [milestoneId, setMilestoneId] = useState(base.milestoneId ?? '')
  const [location, setLocation] = useState(base.location ?? '')
  const [description, setDescription] = useState(base.description ?? '')
  const [isPublic, setIsPublic] = useState(base.isPublic ?? false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const switchAllDay = (next: boolean) => {
    const conv = (v: string) => {
      if (!v) return ''
      if (next) return v.slice(0, 10)
      return `${v.slice(0, 10)}T09:00`
    }
    setStart(conv(start))
    setEnd(conv(end))
    setAllDay(next)
  }

  const toIso = (v: string) => (!v ? null : allDay ? v.slice(0, 10) : new Date(v).toISOString())

  const save = async () => {
    setSaving(true)
    setError(null)
    try {
      const body: Record<string, unknown> = {
        kind, title, allDay, status, location, description, isPublic,
        startAt: toIso(start), endAt: toIso(end),
        milestoneId: kind === 'MILESTONE' ? null : milestoneId || null,
      }
      if (canReassign) body.assigneeIds = assignees
      const res = await fetch(item ? `/api/projects/${projectId}/timeline/${item.id}` : `/api/projects/${projectId}/timeline`, {
        method: item ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json.error || 'Could not save.')
      onSaved()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not save.')
    } finally {
      setSaving(false)
    }
  }

  const remove = async () => {
    if (!item || !window.confirm(`Delete "${item.title}"?`)) return
    const res = await fetch(`/api/projects/${projectId}/timeline/${item.id}`, { method: 'DELETE' })
    if (res.ok) onSaved()
  }

  const input = 'w-full rounded-lg border-2 border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm disabled:opacity-70'
  const startLabel = kind === 'EVENT' ? 'Starts' : 'Start (optional)'
  const endLabel = kind === 'MILESTONE' ? 'Target date' : kind === 'TASK' ? 'Due' : 'Ends'

  return (
    <Modal title={item ? (readOnly ? item.title : 'EDIT') : 'SCHEDULE ON THE TEAM CALENDAR'} onClose={onClose}>
      <fieldset disabled={readOnly} className="space-y-4">
        <div className="flex rounded-lg border-2 border-[var(--border)] overflow-hidden" role="radiogroup" aria-label="Type">
          {TIMELINE_KINDS.map(k => (
            <button
              type="button"
              key={k}
              role="radio"
              aria-checked={kind === k}
              onClick={() => setKind(k)}
              className={`flex-1 px-3 py-2 text-sm font-bold ${kind === k ? 'text-white' : 'hover:bg-[var(--muted)]'}`}
              style={kind === k ? { background: KIND_COLOR[k] } : undefined}
            >
              {KIND_LABEL[k]}
            </button>
          ))}
        </div>

        <input className={input} maxLength={200} value={title} onChange={e => setTitle(e.target.value)} placeholder={kind === 'MILESTONE' ? 'e.g. Pitch deck final' : kind === 'TASK' ? 'e.g. Update cost model' : 'e.g. Contractor walkthrough'} aria-label="Title" />

        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={allDay} onChange={e => switchAllDay(e.target.checked)} />All day</label>
        <div className="grid grid-cols-2 gap-2">
          {kind !== 'MILESTONE' && (
            <label className="space-y-1 text-xs font-bold">{startLabel}
              <input type={allDay ? 'date' : 'datetime-local'} className={input} value={start} onChange={e => setStart(e.target.value)} />
            </label>
          )}
          <label className={`space-y-1 text-xs font-bold ${kind === 'MILESTONE' ? 'col-span-2' : ''}`}>{endLabel}
            <input type={allDay ? 'date' : 'datetime-local'} className={input} value={end} onChange={e => setEnd(e.target.value)} />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <label className="space-y-1 text-xs font-bold">Status
            <select className={input} value={status} onChange={e => setStatus(e.target.value as TimelineStatus)}>
              {TIMELINE_STATUSES.map(s => <option key={s} value={s}>{STATUS_LABEL[s]}</option>)}
            </select>
          </label>
          {kind !== 'MILESTONE' && (
            <label className="space-y-1 text-xs font-bold">Counts toward
              <select className={input} value={milestoneId} onChange={e => setMilestoneId(e.target.value)}>
                <option value="">No milestone</option>
                {data.milestones.map(m => <option key={m.id} value={m.id}>{m.title}</option>)}
              </select>
            </label>
          )}
        </div>

        <div className="space-y-1">
          <p className="flex items-center gap-1 text-xs font-bold"><Users className="w-3.5 h-3.5" />Who’s responsible</p>
          {!canReassign && <p className="text-xs text-theme-muted">Only the person who added this or an admin can change who’s assigned.</p>}
          <div className="max-h-40 space-y-1 overflow-y-auto rounded-lg border-2 border-[var(--border)] p-2">
            {data.members.map(m => (
              <label key={m.id} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  disabled={!canReassign}
                  checked={assignees.includes(m.id)}
                  onChange={e => setAssignees(a => (e.target.checked ? [...a, m.id] : a.filter(x => x !== m.id)))}
                />
                {m.name}{m.id === data.me && ' (you)'} <span className="text-xs text-theme-muted">{m.role.toLowerCase()}</span>
              </label>
            ))}
          </div>
        </div>

        <input className={input} maxLength={300} value={location} onChange={e => setLocation(e.target.value)} placeholder="Location or meeting link (optional)" aria-label="Location" />
        <textarea className={input} rows={3} maxLength={4000} value={description} onChange={e => setDescription(e.target.value)} placeholder="Notes (optional)" aria-label="Notes" />
        <label className="flex items-start gap-2 text-sm">
          <input type="checkbox" className="mt-1" checked={isPublic} onChange={e => setIsPublic(e.target.checked)} />
          <span><strong>Share with followers</strong><span className="block text-xs text-theme-muted">Shows on the Shared tab so followers can track progress. Notes and assignees stay with the team.</span></span>
        </label>
      </fieldset>

      {item && (
        <p className="text-xs text-theme-muted">
          Added by {item.createdBy.name || 'a member'}{item.imported && ' from an imported calendar'}.
          {readOnly && ' Only its creator, assignees, or an admin can change it.'}
        </p>
      )}
      {error && <p className="text-sm font-bold text-red-500" role="alert">{error}</p>}

      {item && (
        <div className="rounded-lg border-2 border-[var(--border)] p-3">
          <p className="mb-1 text-xs font-black uppercase tracking-wide text-theme-muted">
            Comments{item.isPublic ? ' · followers can see and comment' : ' · team only'}
          </p>
          <ItemComments projectId={projectId} type="TIMELINE_ITEM" id={item.id} defaultOpen />
        </div>
      )}

      <div className="flex flex-wrap justify-end gap-2">
        {item?.canReassign && <Button type="button" variant="ghost" className="mr-auto text-red-500" onClick={remove}><Trash2 className="w-4 h-4 mr-1" />Delete</Button>}
        <Button type="button" variant="ghost" onClick={onClose}>{readOnly ? 'Close' : 'Cancel'}</Button>
        {!readOnly && (
          <Button type="button" className="font-bold" disabled={saving} onClick={save}>
            {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}SAVE
          </Button>
        )}
      </div>
    </Modal>
  )
}

interface FeedRow { id: string; name: string; color: string; ownerName: string; isMine: boolean; canRemove: boolean; url?: string; fetchedAt: string | null; lastError: string | null }

const FEED_COLORS = ['#6366f1', '#f59e0b', '#ef4444', '#14b8a6', '#ec4899', '#84cc16']

function CalendarsPanel({ projectId, canAdd, canManage, onClose, onChanged }: {
  projectId: string; canAdd: boolean; canManage: boolean; onClose: () => void; onChanged: () => void
}) {
  const [links, setLinks] = useState<{ url: string; webcal: string; google: string } | null>(null)
  const [feeds, setFeeds] = useState<FeedRow[]>([])
  const [copied, setCopied] = useState(false)
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [color, setColor] = useState(FEED_COLORS[0])
  const [busy, setBusy] = useState<string | null>(null)
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null)

  const loadAll = useCallback(async () => {
    const [l, f] = await Promise.all([
      fetch(`/api/projects/${projectId}/calendar-link`).then(r => r.json()).catch(() => null),
      fetch(`/api/projects/${projectId}/calendars`).then(r => r.json()).catch(() => null),
    ])
    if (l?.success) setLinks(l.data)
    if (f?.success) setFeeds(f.data)
  }, [projectId])

  useEffect(() => { loadAll() }, [loadAll])

  const copy = async () => {
    if (!links) return
    try { await navigator.clipboard.writeText(links.url) } catch { window.prompt('Copy this calendar link:', links.url) }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const resetLink = async () => {
    if (!window.confirm('Reset the calendar link? Anyone subscribed with the old link stops getting updates and needs the new one.')) return
    const r = await fetch(`/api/projects/${projectId}/calendar-link`, { method: 'POST' }).then(r => r.json())
    if (r.success) setLinks(r.data)
  }

  const link = async () => {
    setBusy('link')
    setMessage(null)
    try {
      const res = await fetch(`/api/projects/${projectId}/calendars`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, url, color }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json.error || 'Could not link that calendar.')
      setMessage({ ok: true, text: `Linked “${json.data.name}” (${json.data.eventCount} events).` })
      setName(''); setUrl('')
      await loadAll()
      onChanged()
    } catch (e) {
      setMessage({ ok: false, text: e instanceof Error ? e.message : 'Could not link that calendar.' })
    } finally {
      setBusy(null)
    }
  }

  const unlink = async (f: FeedRow) => {
    if (!window.confirm(`Remove “${f.name}” from this initiative? Nothing changes in the original calendar.`)) return
    const res = await fetch(`/api/projects/${projectId}/calendars/${f.id}`, { method: 'DELETE' })
    if (res.ok) { await loadAll(); onChanged() }
  }

  const importFile = async (file: File) => {
    setBusy('import')
    setMessage(null)
    try {
      const form = new FormData()
      form.append('file', file)
      const res = await fetch(`/api/projects/${projectId}/timeline/import`, { method: 'POST', body: form })
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json.error || 'Import failed.')
      const { imported, skipped, truncated } = json.data
      setMessage({ ok: true, text: `Imported ${imported} event${imported === 1 ? '' : 's'}${skipped ? `, skipped ${skipped} already imported` : ''}${truncated ? '. Only the first 500 were imported' : ''}.` })
      onChanged()
    } catch (e) {
      setMessage({ ok: false, text: e instanceof Error ? e.message : 'Import failed.' })
    } finally {
      setBusy(null)
    }
  }

  const input = 'w-full rounded-lg border-2 border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm'

  return (
    <Modal title="LINK OR IMPORT A CALENDAR (OPTIONAL)" onClose={onClose}>
      <section className="space-y-2">
        <h4 className="font-black">Add this timeline to your calendar</h4>
        <p className="text-sm text-theme-muted">Subscribe once and the initiative’s milestones, tasks, and events show up in Google Calendar, Outlook, or your phone, updating on their own.</p>
        {links ? (
          <div className="flex flex-wrap gap-2">
            <a href={links.google} target="_blank" rel="noopener noreferrer"><Button size="sm" className="font-bold"><CalendarPlus className="w-4 h-4 mr-1" />ADD TO GOOGLE CALENDAR</Button></a>
            <a href={links.webcal}><Button size="sm" variant="outline" className="font-bold">APPLE / OUTLOOK</Button></a>
            <Button size="sm" variant="outline" className="font-bold" onClick={copy}>{copied ? <Check className="w-4 h-4 mr-1" /> : <Link2 className="w-4 h-4 mr-1" />}{copied ? 'COPIED' : 'COPY LINK'}</Button>
            {canManage && <Button size="sm" variant="ghost" onClick={resetLink}><RefreshCw className="w-4 h-4 mr-1" />Reset link</Button>}
          </div>
        ) : <Loader2 className="w-5 h-5 animate-spin" />}
        <p className="text-xs text-theme-muted">Keep this link private: anyone who has it can see the timeline. Google may take a few hours to show changes.</p>
      </section>

      <section className="space-y-2 border-t border-[var(--border)] pt-4">
        <h4 className="font-black">Linked calendars</h4>
        <p className="text-sm text-theme-muted">Show a team member’s Google, Outlook, or Apple calendar here. Everyone in the initiative can see those events, so link a calendar made for this work, not a personal one.</p>
        {feeds.length > 0 && (
          <ul className="space-y-1">
            {feeds.map(f => (
              <li key={f.id} className="flex items-center gap-2 rounded-lg border-2 border-[var(--border)] px-2 py-1.5 text-sm">
                <span className="h-3 w-3 shrink-0 rounded-sm" style={{ background: f.color }} />
                <span className="min-w-0 flex-1 truncate"><strong>{f.name}</strong> <span className="text-xs text-theme-muted">by {f.ownerName}</span>
                  {f.lastError && <span className="block text-xs text-yellow-600">{f.lastError}</span>}
                </span>
                {f.canRemove && <Button size="sm" variant="ghost" onClick={() => unlink(f)} aria-label={`Remove ${f.name}`}><Trash2 className="w-4 h-4" /></Button>}
              </li>
            ))}
          </ul>
        )}
        {canAdd && (
          <div className="space-y-2 rounded-lg bg-[var(--muted)] p-3">
            <input className={input} value={url} onChange={e => setUrl(e.target.value)} placeholder="Private iCal address (https:// or webcal://)" aria-label="Private iCal address" />
            <div className="flex gap-2">
              <input className={input} maxLength={80} value={name} onChange={e => setName(e.target.value)} placeholder="Name (optional)" aria-label="Calendar name" />
              <div className="flex shrink-0 items-center gap-1" role="radiogroup" aria-label="Color">
                {FEED_COLORS.map(c => (
                  <button key={c} type="button" role="radio" aria-checked={color === c} aria-label={c} onClick={() => setColor(c)} className={`h-6 w-6 rounded-full ${color === c ? 'ring-2 ring-offset-2 ring-[var(--foreground)]' : ''}`} style={{ background: c }} />
                ))}
              </div>
            </div>
            <Button size="sm" className="font-bold" disabled={!url || busy === 'link'} onClick={link}>
              {busy === 'link' ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Link2 className="w-4 h-4 mr-1" />}LINK CALENDAR
            </Button>
            <details className="text-xs text-theme-muted">
              <summary className="cursor-pointer font-bold">Where do I find the private address?</summary>
              <ul className="mt-1 list-disc space-y-1 pl-4">
                <li><strong>Google Calendar</strong> (on a computer): Settings, then click the calendar under “Settings for my calendars,” then “Integrate calendar,” then copy “Secret address in iCal format.”</li>
                <li><strong>Outlook</strong>: Settings, then Calendar, then Shared calendars, then “Publish a calendar,” choose “Can view all details,” then copy the ICS link.</li>
                <li><strong>Apple iCloud</strong>: in the Calendar app, share the calendar as a Public Calendar and copy the link.</li>
              </ul>
            </details>
          </div>
        )}
      </section>

      {canAdd && (
        <section className="space-y-2 border-t border-[var(--border)] pt-4">
          <h4 className="font-black">Import a calendar file</h4>
          <p className="text-sm text-theme-muted">Upload an .ics file exported from Google, Outlook, or Apple. Its events become timeline items the team can edit and assign. Repeating events are added for the next 12 months.</p>
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border-2 border-[var(--primary)] px-3 py-1.5 text-sm font-bold text-[var(--primary)] hover:bg-[var(--muted)]">
            {busy === 'import' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}CHOOSE .ICS FILE
            <input type="file" accept=".ics,text/calendar" className="sr-only" disabled={busy === 'import'} onChange={e => { const f = e.target.files?.[0]; if (f) importFile(f); e.target.value = '' }} />
          </label>
        </section>
      )}

      {message && <p className={`text-sm font-bold ${message.ok ? 'text-green-600' : 'text-red-500'}`} role="status">{message.text}</p>}
    </Modal>
  )
}
