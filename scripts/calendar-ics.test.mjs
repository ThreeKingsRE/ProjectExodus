import test from 'node:test'
import assert from 'node:assert/strict'
const mod = await import('../lib/calendar/ics.ts')
const { parseIcs, expandEvents, buildIcs, zonedToUtc } = mod.default || mod

const cal = (body, head = '') => `BEGIN:VCALENDAR\r\nVERSION:2.0\r\n${head}${body}END:VCALENDAR\r\n`
const ev = lines => `BEGIN:VEVENT\r\n${lines.join('\r\n')}\r\nEND:VEVENT\r\n`
const range = (a, b) => [new Date(a), new Date(b)]

test('time zones convert to UTC, including DST', () => {
  assert.equal(new Date(zonedToUtc(2026, 6, 1, 9, 0, 0, 'America/New_York')).toISOString(), '2026-07-01T13:00:00.000Z')
  assert.equal(new Date(zonedToUtc(2026, 11, 1, 9, 0, 0, 'America/New_York')).toISOString(), '2026-12-01T14:00:00.000Z')
})

test('parses timed, all-day, folded, escaped, and Outlook-zone events', () => {
  const { events, calendarName } = parseIcs(cal(
    ev(['UID:a', 'DTSTART;TZID=America/New_York:20261117T150000', 'DTEND;TZID=America/New_York:20261117T163000', 'SUMMARY:Team sync\\, weekly', 'DESCRIPTION:Line one\\nLine', ' two', 'BEGIN:VALARM', 'TRIGGER:-PT10M', 'END:VALARM']) +
    ev(['UID:b', 'DTSTART;VALUE=DATE:20261120', 'DTEND;VALUE=DATE:20261123', 'SUMMARY:Site visit']) +
    ev(['UID:c', 'DTSTART;TZID=Eastern Standard Time:20261118T090000', 'DURATION:PT45M', 'SUMMARY:Outlook meeting']),
    'X-WR-CALNAME:Riverknoll team\r\n',
  ))
  assert.equal(calendarName, 'Riverknoll team')
  assert.equal(events.length, 3)
  const [a, b, c] = events
  assert.equal(a.title, 'Team sync, weekly')
  assert.equal(a.description, 'Line one\nLinetwo')
  assert.equal(a.start.toISOString(), '2026-11-17T20:00:00.000Z')
  assert.equal(a.end.toISOString(), '2026-11-17T21:30:00.000Z')
  assert.equal(b.allDay, true)
  assert.equal(b.start.toISOString(), '2026-11-20T00:00:00.000Z')
  assert.equal(b.end.toISOString(), '2026-11-22T00:00:00.000Z', 'inclusive last day')
  assert.equal(c.start.toISOString(), '2026-11-18T14:00:00.000Z')
  assert.equal(c.end.toISOString(), '2026-11-18T14:45:00.000Z')
})

test('weekly repeats with BYDAY, EXDATE, overrides, and DST-stable wall time', () => {
  const { events } = parseIcs(cal(
    ev(['UID:w', 'DTSTART;TZID=America/New_York:20261026T100000', 'DTEND;TZID=America/New_York:20261026T110000', 'RRULE:FREQ=WEEKLY;BYDAY=MO,WE;COUNT=6', 'EXDATE;TZID=America/New_York:20261028T100000', 'SUMMARY:Standup']) +
    ev(['UID:w', 'RECURRENCE-ID;TZID=America/New_York:20261104T100000', 'DTSTART;TZID=America/New_York:20261104T140000', 'DTEND;TZID=America/New_York:20261104T150000', 'SUMMARY:Standup (moved)']),
  ))
  const occ = expandEvents(events, ...range('2026-10-01T00:00:00Z', '2026-12-31T00:00:00Z'))
  const starts = occ.map(o => `${o.start} ${o.title}`)
  assert.deepEqual(starts, [
    '2026-10-26T14:00:00.000Z Standup',
    '2026-11-02T15:00:00.000Z Standup', // after DST ends: still 10am local
    '2026-11-04T19:00:00.000Z Standup (moved)',
    '2026-11-09T15:00:00.000Z Standup',
    '2026-11-11T15:00:00.000Z Standup',
  ])
})

test('monthly "2nd Tuesday", last Friday, yearly, until, and range limits', () => {
  const { events } = parseIcs(cal(
    ev(['UID:m', 'DTSTART:20260113T170000Z', 'DTEND:20260113T180000Z', 'RRULE:FREQ=MONTHLY;BYDAY=2TU;UNTIL=20260430T000000Z', 'SUMMARY:Board']) +
    ev(['UID:f', 'DTSTART;VALUE=DATE:20260130', 'RRULE:FREQ=MONTHLY;BYDAY=-1FR', 'SUMMARY:Payday']) +
    ev(['UID:y', 'DTSTART;VALUE=DATE:20240229', 'RRULE:FREQ=YEARLY', 'SUMMARY:Leap day']),
  ))
  const occ = expandEvents(events, ...range('2026-01-01T00:00:00Z', '2028-12-31T00:00:00Z'))
  const board = occ.filter(o => o.title === 'Board').map(o => o.start.slice(0, 10))
  assert.deepEqual(board, ['2026-01-13', '2026-02-10', '2026-03-10', '2026-04-14'])
  const pay = occ.filter(o => o.title === 'Payday').map(o => o.start.slice(0, 10))
  assert.equal(pay[0], '2026-01-30')
  assert.equal(pay[1], '2026-02-27')
  assert.equal(pay.length, 36)
  const leap = occ.filter(o => o.title === 'Leap day').map(o => o.start.slice(0, 10))
  assert.deepEqual(leap, ['2028-02-29'])

  const narrow = expandEvents(events, ...range('2026-03-01T00:00:00Z', '2026-03-31T23:59:59Z'))
  assert.deepEqual(narrow.map(o => o.title), ['Board', 'Payday'])
})

test('cancelled events are dropped; bad input is tolerated', () => {
  const { events } = parseIcs(cal(ev(['UID:x', 'DTSTART:20261101T100000Z', 'STATUS:CANCELLED', 'SUMMARY:Gone']) + ev(['UID:bad', 'SUMMARY:No start'])))
  assert.equal(events.length, 1)
  assert.equal(expandEvents(events, ...range('2026-01-01', '2027-01-01')).length, 0)
  assert.deepEqual(parseIcs('garbage').events, [])
})

test('writes a feed that reads back the same', () => {
  const ics = buildIcs('Riverknoll, timeline', [
    { uid: 'i1@projxodus.com', title: 'Pitch deck due; v2', description: 'Owner: Ana\nStatus: To do', start: new Date('2026-12-01T00:00:00Z'), end: new Date('2026-12-02T00:00:00Z'), allDay: true, updatedAt: new Date('2026-11-17T00:00:00Z') },
    { uid: 'i2@projxodus.com', title: 'Contractor walkthrough '.repeat(5).trim(), start: new Date('2026-12-03T15:00:00Z'), end: null, allDay: false, updatedAt: new Date('2026-11-17T00:00:00Z') },
  ])
  assert.ok(ics.split('\r\n').every(l => new TextEncoder().encode(l).length <= 75))
  const { events, calendarName } = parseIcs(ics)
  assert.equal(calendarName, 'Riverknoll, timeline')
  assert.equal(events[0].title, 'Pitch deck due; v2')
  assert.equal(events[0].description, 'Owner: Ana\nStatus: To do')
  assert.equal(events[0].end.toISOString(), '2026-12-02T00:00:00.000Z')
  assert.equal(events[1].end.toISOString(), '2026-12-03T16:00:00.000Z')
  assert.equal(events[1].title, 'Contractor walkthrough '.repeat(5).trim())
})
