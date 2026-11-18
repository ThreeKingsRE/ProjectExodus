import test from 'node:test'
import assert from 'node:assert/strict'
process.env.TZ = 'America/New_York'
const mod = await import('../components/projects/timeline/calendarUtils.ts')
const { entryDayKeys, byDay, layoutDay } = mod.default || mod

const e = (o) => ({ key: Math.random().toString(), title: 't', color: '#000', ...o })

test('all-day items land on their calendar days regardless of local time zone', () => {
  const entry = e({ allDay: true, start: new Date('2026-11-20T00:00:00Z'), end: new Date('2026-11-22T00:00:00Z') })
  assert.deepEqual(entryDayKeys(entry), ['2026-11-20', '2026-11-21', '2026-11-22'])
})

test('timed items use local days; an event ending at midnight does not spill over', () => {
  const late = e({ allDay: false, start: new Date('2026-11-18T03:00:00Z'), end: new Date('2026-11-18T04:00:00Z') }) // 10pm Nov 17 local
  assert.deepEqual(entryDayKeys(late), ['2026-11-17'])
  const toMidnight = e({ allDay: false, start: new Date('2026-11-17T22:00:00Z'), end: new Date('2026-11-18T05:00:00Z') }) // 5pm-midnight
  assert.deepEqual(entryDayKeys(toMidnight), ['2026-11-17'])
  const map = byDay([late, toMidnight])
  assert.equal(map.get('2026-11-17').length, 2)
})

test('overlapping timed items are placed side by side', () => {
  const day = new Date(2026, 10, 17)
  const a = e({ allDay: false, start: new Date(2026, 10, 17, 9), end: new Date(2026, 10, 17, 10) })
  const b = e({ allDay: false, start: new Date(2026, 10, 17, 9, 30), end: new Date(2026, 10, 17, 11) })
  const c = e({ allDay: false, start: new Date(2026, 10, 17, 13), end: new Date(2026, 10, 17, 14) })
  const placed = layoutDay([a, b, c], day)
  const byTitle = new Map(placed.map(p => [p.entry, p]))
  assert.equal(byTitle.get(a).lane, 0)
  assert.equal(byTitle.get(b).lane, 1)
  assert.equal(byTitle.get(a).lanes, 2)
  assert.equal(byTitle.get(c).lanes, 1)
  assert.equal(byTitle.get(a).top, 540)
  assert.equal(byTitle.get(b).height, 90)
})
