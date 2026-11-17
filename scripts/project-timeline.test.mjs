import test from 'node:test'
import assert from 'node:assert/strict'
const mod = await import('../lib/projects/timeline.ts')
const { parseTimelineInput, canAddItems, canEditItem, canReassignOrDelete, canViewTimeline, normalizeFeedUrl, parseWhen } = mod.default || mod

const owner = { userId: 'o', role: 'OWNER', isCreator: true }
const admin = { userId: 'a', role: 'ADMIN', isCreator: false }
const contributor = { userId: 'c', role: 'CONTRIBUTOR', isCreator: false }
const other = { userId: 'c2', role: 'CONTRIBUTOR', isCreator: false }
const follower = { userId: 'f', role: 'VIEWER', isCreator: false }
const outsider = { userId: 'x', role: null, isCreator: false }

test('who can see, add, edit, and reassign', () => {
  assert.equal(canViewTimeline(follower), true)
  assert.equal(canViewTimeline(outsider), false)
  assert.equal(canAddItems(contributor), true)
  assert.equal(canAddItems(follower), false)
  const mine = { createdById: 'c', assigneeIds: ['c2'] }
  assert.equal(canEditItem(mine, contributor), true, 'creator')
  assert.equal(canEditItem(mine, other), true, 'assignee')
  assert.equal(canEditItem(mine, { ...other, userId: 'zz' }), false)
  assert.equal(canEditItem(mine, admin), true)
  assert.equal(canEditItem({ createdById: 'f', assigneeIds: ['f'] }, follower), false)
  assert.equal(canReassignOrDelete(mine, other), false, 'assignee cannot reassign')
  assert.equal(canReassignOrDelete(mine, contributor), true)
  assert.equal(canReassignOrDelete(mine, owner), true)
})

test('dates: all-day strings become UTC midnight; rules per kind', () => {
  assert.equal(parseWhen('2026-12-01', true).toISOString(), '2026-12-01T00:00:00.000Z')
  assert.equal(parseWhen('2026-12-01T15:30:00.000Z', false).toISOString(), '2026-12-01T15:30:00.000Z')
  assert.equal(parseWhen('nope', true), 'invalid')
  assert.equal(parseTimelineInput({ kind: 'MILESTONE', title: 'Pitch ready' }, false).ok, false)
  assert.equal(parseTimelineInput({ kind: 'EVENT', title: 'Walkthrough', endAt: '2026-12-01' }, false).ok, false)
  assert.equal(parseTimelineInput({ kind: 'TASK', title: 'x', startAt: '2026-12-05', endAt: '2026-12-01' }, false).ok, false)
  const task = parseTimelineInput({ kind: 'TASK', title: ' Draft budget ', endAt: '2026-12-01', assigneeIds: ['a', 'a', 'b'] }, false)
  assert.equal(task.ok, true)
  assert.equal(task.data.title, 'Draft budget')
  assert.equal(task.data.status, 'TODO')
  assert.equal(task.data.allDay, true)
  assert.deepEqual(task.data.assigneeIds, ['a', 'b'])
  const event = parseTimelineInput({ kind: 'EVENT', title: 'Call', allDay: false, startAt: '2026-12-01T15:00:00Z', endAt: '2026-12-01T16:00:00Z' }, false)
  assert.equal(event.ok, true)
  assert.equal(event.data.startAt.toISOString(), '2026-12-01T15:00:00.000Z')
})

test('updates are checked against existing values', () => {
  const existing = { kind: 'EVENT', startAt: new Date('2026-12-05T15:00:00Z'), endAt: new Date('2026-12-05T16:00:00Z'), allDay: false }
  assert.equal(parseTimelineInput({ endAt: '2026-12-04T10:00:00Z' }, true, existing).ok, false)
  assert.equal(parseTimelineInput({ startAt: null }, true, existing).ok, false, 'event needs a start')
  const ok = parseTimelineInput({ status: 'DONE' }, true, existing)
  assert.deepEqual(ok, { ok: true, data: { status: 'DONE' } })
  const toAllDay = parseTimelineInput({ allDay: true }, true, existing)
  assert.equal(toAllDay.ok, true)
  assert.equal(toAllDay.data.startAt.toISOString(), '2026-12-05T00:00:00.000Z')
})

test('only supported calendar links are accepted', () => {
  assert.equal(normalizeFeedUrl('webcal://calendar.google.com/calendar/ical/x%40gmail.com/private-abc/basic.ics').ok, true)
  assert.equal(normalizeFeedUrl('https://outlook.office365.com/owa/calendar/abc/reachcalendar.ics').ok, true)
  assert.equal(normalizeFeedUrl('https://p42-caldav.icloud.com/published/2/abc').ok, true)
  assert.equal(normalizeFeedUrl('http://calendar.google.com/x').ok, false)
  assert.equal(normalizeFeedUrl('https://169.254.169.254/latest').ok, false)
  assert.equal(normalizeFeedUrl('https://calendar.google.com.evil.com/x').ok, false)
  assert.equal(normalizeFeedUrl('https://calendar.google.com:8443/x').ok, false)
})
