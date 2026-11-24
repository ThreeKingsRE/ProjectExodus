import test from 'node:test'
import assert from 'node:assert/strict'
const m = await import('../lib/discussions/meetings.ts')
const { checkMeetingLink, parseDiscussionExtras, meetingState, shapeMeeting, formatMeetingTime } = m.default || m

test('links: any public https website, for every kind of link', () => {
  for (const kind of ['join', 'agenda']) {
    for (const ok of ['https://us02web.zoom.us/j/123456789?pwd=abc', 'https://meet.google.com/abc-defg-hij', 'https://www.brightonny.gov/meetings', 'https://www.cheltenhamtownship.org/join', 'https://co.example.us/meeting', 'https://example.com/meet', 'https://smalltown.net/board', 'https://calendar.google.com/calendar/u/0?cid=abc']) {
      assert.ok(checkMeetingLink(ok, kind).ok, `${kind} ${ok}`)
    }
    for (const bad of ['http://zoom.us/j/1', 'https://user:pw@zoom.us/j/1', 'javascript:alert(1)', 'not a url', 'ftp://example.com/a', 'https://bit.ly/abc', 'https://tinyurl.com/x', 'https://127.0.0.1/j', 'https://10.0.0.5/join', 'https://[::1]/j']) {
      assert.ok(!checkMeetingLink(bad, kind).ok, `${kind} ${bad}`)
    }
  }
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
