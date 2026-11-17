// Shared initiative timeline: milestones, tasks, and events with owners,
// dates, and status. Pure validation and permission rules.

import type { MemberRole } from './files'

export const TIMELINE_KINDS = ['MILESTONE', 'TASK', 'EVENT'] as const
export type TimelineKind = (typeof TIMELINE_KINDS)[number]

export const TIMELINE_STATUSES = ['TODO', 'IN_PROGRESS', 'BLOCKED', 'DONE'] as const
export type TimelineStatus = (typeof TIMELINE_STATUSES)[number]

export const KIND_LABEL: Record<TimelineKind, string> = { MILESTONE: 'Milestone', TASK: 'Task', EVENT: 'Event' }
export const STATUS_LABEL: Record<TimelineStatus, string> = { TODO: 'To do', IN_PROGRESS: 'In progress', BLOCKED: 'Blocked', DONE: 'Done' }

export interface TimelineViewer {
  userId: string
  role: MemberRole | null
  isCreator: boolean
}

const TEAM: MemberRole[] = ['CONTRIBUTOR', 'MODERATOR', 'ADMIN', 'OWNER']

export function isManager(v: TimelineViewer) {
  return v.isCreator || v.role === 'OWNER' || v.role === 'ADMIN'
}
export function canViewTimeline(v: TimelineViewer) {
  return v.isCreator || v.role !== null
}
/** Contributors and up add items; followers (viewers) can only look. */
export function canAddItems(v: TimelineViewer) {
  return isManager(v) || (v.role !== null && TEAM.includes(v.role))
}

interface ItemRef { createdById: string; assigneeIds: string[] }

/** Managers, the item's creator, and its assignees can update it. */
export function canEditItem(item: ItemRef, v: TimelineViewer) {
  if (isManager(v)) return true
  if (!canAddItems(v)) return false
  return item.createdById === v.userId || item.assigneeIds.includes(v.userId)
}
/** Changing who is assigned, or deleting, is for managers and the item's creator. */
export function canReassignOrDelete(item: ItemRef, v: TimelineViewer) {
  return isManager(v) || (canAddItems(v) && item.createdById === v.userId)
}

export interface TimelineInput {
  kind: TimelineKind
  title: string
  description: string | null
  location: string | null
  startAt: Date | null
  endAt: Date | null
  allDay: boolean
  status: TimelineStatus
  assigneeIds: string[]
  milestoneId: string | null
  color: string | null
  isPublic: boolean
}

type Result<T> = { ok: true; data: T } | { ok: false; error: string }

/** Parse "YYYY-MM-DD" (all-day, stored at UTC midnight) or an ISO date-time. */
export function parseWhen(value: unknown, allDay: boolean): Date | null | 'invalid' {
  if (value === null || value === undefined || value === '') return null
  if (typeof value !== 'string') return 'invalid'
  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (dateOnly) {
    const d = new Date(Date.UTC(+dateOnly[1], +dateOnly[2] - 1, +dateOnly[3]))
    return Number.isNaN(d.getTime()) ? 'invalid' : d
  }
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return 'invalid'
  return allDay ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())) : d
}

const COLOR = /^#[0-9a-fA-F]{6}$/

/**
 * Validate a create (partial=false) or update (partial=true) body.
 * For updates, `existing` supplies the current values so date rules can be checked.
 */
export function parseTimelineInput(
  body: unknown,
  partial: boolean,
  existing?: Pick<TimelineInput, 'kind' | 'startAt' | 'endAt' | 'allDay'>,
): Result<Partial<TimelineInput>> {
  if (!body || typeof body !== 'object') return { ok: false, error: 'Invalid request.' }
  const b = body as Record<string, unknown>
  const data: Partial<TimelineInput> = {}

  if (b.kind !== undefined || !partial) {
    if (!TIMELINE_KINDS.includes(b.kind as TimelineKind)) return { ok: false, error: 'Choose milestone, task, or event.' }
    data.kind = b.kind as TimelineKind
  }
  if (b.title !== undefined || !partial) {
    const title = typeof b.title === 'string' ? b.title.trim() : ''
    if (!title || title.length > 200) return { ok: false, error: 'Give it a title (up to 200 characters).' }
    data.title = title
  }
  if (b.description !== undefined) {
    const d = typeof b.description === 'string' ? b.description.trim() : ''
    if (d.length > 4000) return { ok: false, error: 'Description is too long.' }
    data.description = d || null
  }
  if (b.location !== undefined) {
    const l = typeof b.location === 'string' ? b.location.trim() : ''
    data.location = l.slice(0, 300) || null
  }
  if (b.allDay !== undefined || !partial) data.allDay = b.allDay === undefined ? true : b.allDay === true
  const allDay = data.allDay ?? existing?.allDay ?? true

  for (const key of ['startAt', 'endAt'] as const) {
    if (b[key] !== undefined || (b.allDay !== undefined && existing?.[key])) {
      const raw = b[key] !== undefined ? b[key] : existing?.[key]?.toISOString()
      const parsed = parseWhen(raw, allDay)
      if (parsed === 'invalid') return { ok: false, error: `Invalid ${key === 'startAt' ? 'start' : 'end'} date.` }
      data[key] = parsed
    }
  }
  if (b.status !== undefined || !partial) {
    const status = b.status ?? 'TODO'
    if (!TIMELINE_STATUSES.includes(status as TimelineStatus)) return { ok: false, error: 'Invalid status.' }
    data.status = status as TimelineStatus
  }
  if (b.assigneeIds !== undefined) {
    if (!Array.isArray(b.assigneeIds) || b.assigneeIds.length > 50 || !b.assigneeIds.every(id => typeof id === 'string' && id.length <= 64)) {
      return { ok: false, error: 'Invalid assignees.' }
    }
    data.assigneeIds = [...new Set(b.assigneeIds as string[])]
  }
  if (b.milestoneId !== undefined) {
    data.milestoneId = typeof b.milestoneId === 'string' && b.milestoneId ? b.milestoneId.slice(0, 64) : null
  }
  if (b.isPublic !== undefined) data.isPublic = b.isPublic === true
  if (b.color !== undefined) {
    if (b.color !== null && b.color !== '' && !(typeof b.color === 'string' && COLOR.test(b.color))) return { ok: false, error: 'Invalid color.' }
    data.color = (b.color as string) || null
  }

  // Date rules, using existing values for anything not being changed
  const kind = data.kind ?? existing?.kind
  const start = data.startAt !== undefined ? data.startAt : existing?.startAt ?? null
  const end = data.endAt !== undefined ? data.endAt : existing?.endAt ?? null
  if (kind === 'MILESTONE' && !end && !start) return { ok: false, error: 'Milestones need a target date.' }
  if (kind === 'EVENT' && !start) return { ok: false, error: 'Events need a start date.' }
  if (start && end && end.getTime() < start.getTime()) return { ok: false, error: 'The end can’t be before the start.' }
  return { ok: true, data }
}

/** Prisma `where` clause for items overlapping [from, to], plus undated items. */
export function rangeWhere(projectId: string, from: Date, to: Date) {
  return {
    projectId,
    OR: [
      { startAt: { lte: to }, endAt: { gte: from } },
      { startAt: { gte: from, lte: to }, endAt: null },
      { startAt: null, endAt: { gte: from, lte: to } },
      { startAt: null, endAt: null },
    ],
  }
}

/** Accept only https (or webcal) links to the calendar services we support. */
const FEED_HOSTS = ['calendar.google.com', 'outlook.office365.com', 'outlook.live.com', 'outlook.office.com']
export function normalizeFeedUrl(raw: unknown): { ok: true; url: string } | { ok: false; error: string } {
  if (typeof raw !== 'string' || !raw.trim()) return { ok: false, error: 'Paste your calendar’s private iCal address.' }
  let value = raw.trim()
  if (value.startsWith('webcal://')) value = `https://${value.slice('webcal://'.length)}`
  let url: URL
  try {
    url = new URL(value)
  } catch {
    return { ok: false, error: 'That doesn’t look like a link.' }
  }
  if (url.protocol !== 'https:' || url.username || url.password || url.port) return { ok: false, error: 'Use an https:// or webcal:// link.' }
  const host = url.hostname.toLowerCase()
  const allowed = FEED_HOSTS.includes(host) || /^p\d+-caldav\.icloud\.com$/.test(host)
  if (!allowed) return { ok: false, error: 'Supported calendars: Google Calendar, Outlook / Microsoft 365, and Apple iCloud.' }
  if (value.length > 2048) return { ok: false, error: 'That link is too long.' }
  return { ok: true, url: url.toString() }
}
