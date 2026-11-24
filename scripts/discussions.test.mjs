import test from 'node:test'
import assert from 'node:assert/strict'
const m = await import('../lib/discussions/meetings.ts')
const { checkMeetingLink, parseDiscussionExtras, meetingState, shapeMeeting, formatMeetingTime } = m.default || m

test('join links: meeting platforms and government/school/nonprofit sites; nothing hidden or internal', () => {
  for (const ok of ['https://us02web.zoom.us/j/123456789?pwd=abc', 'https://meet.google.com/abc-defg-hij', 'https://teams.microsoft.com/l/meetup-join/xyz', 'https://townofexample.webex.com/meet/clerk', 'https://www.youtube.com/live/abc', 'https://www.brightonny.gov/meetings', 'https://www.cheltenhamtownship.org/join', 'https://co.example.us/meeting', 'https://district.k12.pa.us/board', 'https://vimeo.com/event/1']) {
    assert.ok(checkMeetingLink(ok, 'join').ok, ok)
  }
  for (const bad of ['http://zoom.us/j/1', 'https://zoom.us.evil.com/j/1', 'https://evilzoom.us.example.com/j/1', 'https://example.com/meet', 'https://user:pw@zoom.us/j/1', 'javascript:alert(1)', 'not a url', 'https://bit.ly/abc', 'https://tinyurl.com/x', 'https://127.0.0.1/j', 'https://10.0.0.5/join']) {
    assert.ok(!checkMeetingLink(bad, 'join').ok, bad)
  }
})

test('agenda, minutes, recording and calendar links: any public website', () => {
  for (const ok of ['https://calendar.google.com/calendar/u/0?cid=abc', 'https://townofexample.granicus.com/agenda', 'https://www.townofhenrietta.org/minutes.pdf', 'https://co.example.us/a', 'https://example.com/agenda.pdf', 'https://smalltown.net/board']) {
    assert.ok(checkMeetingLink(ok, 'agenda').ok, ok)
  }
  for (const bad of ['http://example.com/a', 'https://bit.ly/abc', 'https://1.2.3.4/a', 'https://user:pw@example.com/a', 'ftp://example.com/a', 'javascript:alert(1)']) assert.ok(!checkMeetingLink(bad, 'agenda').ok, bad)
})

test('meeting extras: dates, timezone, links need a date, no street addresses', () => {
  const now = new Date('2026-12-01T12:00:00Z')
  const good = parseDiscussionExtras({ meetingAt: '2026-12-09T00:00:00Z', meetingEndsAt: '2026-12-09T02:00:00Z', meetingTimezone: 'America/New_York', meetingJoinUrl: 'https://zoom.us/j/123', place: 'Brighton, NY', category: 'town-hall' }, now)
  assert.ok(good.ok)
  assert.equal(good.data.meetingTimezone, 'America/New_York')
  assert.equal(good.data.category, 'town-hall')
  assert.equal(parseDiscussionExtras({ meetingJoinUrl: 'https://zoom.us/j/123' }, now).ok, false, 'link without date')
  assert.equal(parseDiscussionExtras({ meetingAt: '2026-01-01T00:00:00Z' }, now).ok, false, 'past')
  assert.equal(parseDiscussionExtras({ meetingAt: '2026-12-09T05:00:00Z', meetingEndsAt: '2026-12-09T04:00:00Z' }, now).ok, false, 'ends before start')
  assert.equal(parseDiscussionExtras({ place: '12 Oak St' }, now).ok, false)
  assert.equal(parseDiscussionExtras({ category: 'nonsense' }, now).ok, false)
  assert.equal(parseDiscussionExtras({ meetingAt: '2026-12-09T00:00:00Z', meetingTimezone: 'Not/AZone' }, now).data.meetingTimezone, 'UTC')
  const plain = parseDiscussionExtras({}, now)
  assert.ok(plain.ok && plain.data.meetingAt === null)
})

test('state, redaction and display', () => {
  const now = new Date('2026-12-09T00:30:00Z')
  assert.equal(meetingState({ meetingAt: '2026-12-09T00:00:00Z', meetingEndsAt: '2026-12-09T02:00:00Z' }, now), 'live')
  assert.equal(meetingState({ meetingAt: '2026-12-10T00:00:00Z' }, now), 'upcoming')
  assert.equal(meetingState({ meetingAt: '2026-12-08T00:00:00Z' }, now), 'past')
  assert.equal(meetingState({ meetingAt: null }, now), null)
  assert.equal(shapeMeeting({ meetingJoinUrl: 'https://zoom.us/j/1' }, false).meetingJoinUrl, null)
  assert.equal(shapeMeeting({ meetingJoinUrl: 'https://zoom.us/j/1' }, true).meetingJoinUrl, 'https://zoom.us/j/1')
  assert.match(formatMeetingTime('2026-12-09T00:00:00Z', 'America/New_York'), /Tue, Dec 8 · 7:00 PM EST/)
})
