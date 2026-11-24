import test from 'node:test'
import assert from 'node:assert/strict'
const d = await import('../lib/meetings/directory.ts'), h = await import('../lib/meetings/holidays.ts'), l = await import('../lib/meetings/legistar.ts')
const { buildDirectory, splitGovName, placeLabel, placeSubtitle, parseSearch, tzFor, slugify } = d.default || d
const { usHolidays, holidaysBetween } = h.default || h
const { mapLegistarEvent, parseTime, CLIENT_RE } = l.default || l

// Real lines from the Census reference files
const FILES = {
  states: 'STATE|STATEFP|STATENS|STATE_NAME\nNY|36|01779796|New York\nPA|42|01779798|Pennsylvania\nTX|48|01779801|Texas\n',
  counties: 'STATE|STATEFP|COUNTYFP|COUNTYNS|COUNTYNAME|CLASSFP|FUNCSTAT\nNY|36|055|00974156|Monroe County|H1|A\nPA|42|101|01209187|Philadelphia County|H6|C\n',
  places: 'STATE|STATEFP|COUNTYFP|COUNTYNAME|PLACEFP|PLACENS|PLACENAME|TYPE|CLASSFP|FUNCSTAT\nNY|36|055|Monroe County|22865|02391654|East Rochester village|INCORPORATED PLACE|C1|A\nNY|36|055|Monroe County|63000|00979426|Rochester city|INCORPORATED PLACE|C5|A\nNY|36|055|Monroe County|08257|02389242|Brighton CDP|CENSUS DESIGNATED PLACE|U1|S\nNY|36|051|Livingston County|63000|00979426|Rochester city|INCORPORATED PLACE|C5|A\n',
  cousubs: 'STATE|STATEFP|COUNTYFP|COUNTYNAME|COUSUBFP|COUSUBNS|COUSUBNAME|CLASSFP|FUNCSTAT\nNY|36|055|Monroe County|08246|00978753|Brighton town|T1|A\nNY|36|055|Monroe County|63000|00979426|Rochester city|C5|F\nPA|42|101|Philadelphia County|60000|01209177|Philadelphia township|T1|A\nNY|36|055|Monroe County|90171|00161593|Brighton CCD|Z5|S\n',
}

test('directory: governments only, towns included, no statistical places, unique slugs', () => {
  const dir = buildDirectory(FILES)
  const by = (k) => dir.find((r) => r.key === k)
  assert.ok(by('us') && by('st:36') && by('co:36055'))
  assert.equal(by('co:42101'), undefined, 'inactive county (FUNCSTAT C) skipped')
  assert.ok(by('pl:3663000'), 'Rochester city')
  assert.equal(dir.filter((r) => r.key === 'pl:3663000').length, 1, 'a place listed under two counties appears once')
  assert.ok(!dir.some((r) => /CDP/.test(r.fullName)), 'CDPs are not governments')
  assert.ok(by('cs:3605508246'), 'Brighton town (a county subdivision) is in')
  assert.equal(by('cs:3605563000'), undefined, 'fictitious Rochester subdivision skipped')
  assert.equal(new Set(dir.map((r) => r.slug)).size, dir.length)
  assert.equal(by('cs:3605508246').slug, 'ny-monroe-brighton-town')
})

test('labels and search', () => {
  assert.deepEqual(splitGovName('Brighton town'), { name: 'Brighton', govType: 'town' })
  assert.deepEqual(splitGovName('Nashville-Davidson metropolitan government (balance)'), { name: 'Nashville-Davidson', govType: 'metropolitan government' })
  const dir = buildDirectory(FILES), b = dir.find((r) => r.key === 'cs:3605508246')
  assert.equal(placeLabel(b), 'Town of Brighton')
  assert.equal(placeSubtitle(b), 'Monroe County, New York')
  assert.equal(placeLabel(dir.find((r) => r.key === 'co:36055')), 'Monroe County')
  const states = [{ abbr: 'NY', name: 'New York' }, { abbr: 'PA', name: 'Pennsylvania' }, { abbr: 'TX', name: 'Texas' }]
  assert.deepEqual(parseSearch('brighton ny', states), { text: 'brighton', state: 'NY' })
  assert.deepEqual(parseSearch('Monroe County, New York', states), { text: 'Monroe County', state: 'NY' })
  assert.deepEqual(parseSearch('texas', states), { text: '', state: 'TX' })
  assert.deepEqual(parseSearch('brighton', states), { text: 'brighton', state: null })
  assert.equal(tzFor('CA'), 'America/Los_Angeles'); assert.equal(tzFor(null), 'America/New_York'); assert.equal(slugify('Doña Ana County'), 'dona-ana-county')
})

test('federal holidays: rules, weekend observance, election day', () => {
  const y26 = Object.fromEntries(usHolidays(2026).map((x) => [x.name, x.date]))
  assert.equal(y26['Martin Luther King Jr. Day'], '2026-01-19')
  assert.equal(y26['Memorial Day'], '2026-05-25')
  assert.equal(y26['Labor Day'], '2026-09-07')
  assert.equal(y26['Thanksgiving Day'], '2026-11-26')
  assert.equal(y26['Election Day'], '2026-11-03')
  assert.equal(y26['Independence Day (observed)'], '2026-07-03', 'July 4 2026 is a Saturday')
  assert.equal(y26['Christmas Day'], '2026-12-25')
  assert.ok(usHolidays(2029).some((x) => x.name === 'Inauguration Day'))
  assert.ok(!usHolidays(2027).some((x) => x.name === 'Inauguration Day'))
  assert.equal(holidaysBetween('2026-11-20', '2026-12-31').map((x) => x.name).join('|'), 'Thanksgiving Day|Christmas Day')
})

test('Legistar mapping: real Seattle event, time zones, cancellation, links', () => {
  assert.deepEqual(parseTime('2:00 PM'), [14, 0]); assert.deepEqual(parseTime('12:30 AM'), [0, 30]); assert.equal(parseTime(''), null)
  const ev = { EventId: 6921, EventBodyName: 'City Council', EventDate: '2027-01-05T00:00:00', EventTime: '2:00 PM', EventAgendaStatusName: 'Cancelled', EventComment: 'Cancellation Notice', EventLocation: 'Council Chamber, City Hall\r\n600 4th Avenue\r\nSeattle, WA 98104', EventAgendaFile: 'https://legistar2.granicus.com/seattle/meetings/2027/1/a.pdf', EventMinutesFile: null, EventVideoPath: null, EventInSiteURL: 'https://seattle.legistar.com/MeetingDetail.aspx?LEGID=6921' }
  const m = mapLegistarEvent(ev, 'America/Los_Angeles')
  assert.equal(m.startsAt.toISOString(), '2027-01-05T22:00:00.000Z')
  assert.equal(m.status, 'CANCELED'); assert.equal(m.statusNote, 'Cancellation Notice')
  assert.equal(m.location, 'Council Chamber, City Hall 600 4th Avenue Seattle, WA 98104')
  assert.equal(m.minutesUrl, null); assert.ok(m.agendaUrl.startsWith('https://')); assert.equal(m.timeKnown, true)
  const noTime = mapLegistarEvent({ ...ev, EventTime: null, EventAgendaStatusName: 'Final', EventComment: null }, 'America/New_York')
  assert.equal(noTime.timeKnown, false); assert.equal(noTime.status, 'SCHEDULED')
  assert.equal(mapLegistarEvent({ ...ev, EventAgendaFile: 'javascript:alert(1)' }, 'UTC').agendaUrl, null)
  assert.equal(mapLegistarEvent({ EventId: 1 }, 'UTC'), null)
  assert.ok(CLIENT_RE.test('seattle') && !CLIENT_RE.test('../x') && !CLIENT_RE.test('a b'))
})

const hl = await import('../lib/meetings/legistar-html.ts'), sf = await import('../lib/meetings/safe-fetch.ts'), rc = await import('../lib/meetings/recurrence.ts')
const { parseLegistarCalendarHtml } = hl.default || hl
const { isPublicIp, checkPublicUrl, normalizeCalendarUrl, safeGetText } = sf.default || sf
const { expandRepeat, localParts } = rc.default || rc
import { readFileSync } from 'node:fs'

test('Legistar calendar page: real Philadelphia rows become meetings', () => {
  const rows = readFileSync(new URL('./fixtures/legistar-calendar-rows.html', import.meta.url), 'utf8')
  const html = '<th class="rgHeader">Name</th><th class="rgHeader">Meeting Date</th><th class="rgHeader"></th><th class="rgHeader">Meeting Time</th><th class="rgHeader">Meeting Location</th><th class="rgHeader">Meeting Details</th><th class="rgHeader">Transcripts</th><th class="rgHeader">Agenda</th><th class="rgHeader">Accessible Agenda</th><th class="rgHeader">Agenda Packet</th><th class="rgHeader">Minutes</th><th class="rgHeader">Accessible Minutes</th><th class="rgHeader">Exhibits</th>' + rows
  const ms = parseLegistarCalendarHtml(html, 'phila', 'America/New_York')
  assert.equal(ms.length, 2)
  const a = ms.find((m) => m.title === 'Committee on Transportation and Public Utilities')
  assert.equal(a.externalId, '1467942'); assert.equal(a.startsAt.toISOString(), '2026-11-30T15:00:00.000Z', '10:00 AM Eastern in November')
  assert.equal(a.location, 'Room 400, City Hall'); assert.match(a.agendaUrl, /^https:\/\/phila\.legistar\.com\/View\.ashx\?M=A&ID=1467942/)
  assert.equal(a.minutesUrl, null); assert.match(a.sourceUrl, /MeetingDetail\.aspx\?ID=1467942/)
  const b = ms.find((m) => m.externalId === '1467949'); assert.equal(b.agendaUrl, null)
  assert.deepEqual(parseLegistarCalendarHtml('<html>no table</html>', 'phila', 'UTC'), [])
})

test('any-website calendars: public https only, nothing internal', async () => {
  for (const ip of ['8.8.8.8', '151.101.1.1', '2606:4700::1111']) assert.ok(isPublicIp(ip), ip)
  for (const ip of ['127.0.0.1', '10.1.2.3', '192.168.0.9', '172.16.5.5', '169.254.169.254', '100.64.0.1', '0.0.0.0', '224.0.0.1', '::1', 'fd00::1', 'fe80::1', '::ffff:10.0.0.1']) assert.ok(!isPublicIp(ip), ip)
  assert.equal(normalizeCalendarUrl('webcal://town.example.org/cal.ics'), 'https://town.example.org/cal.ics')
  for (const bad of ['http://x.org/a.ics', 'https://127.0.0.1/a.ics', 'https://[::1]/a', 'https://user:pw@x.org/a', 'https://x.org:8443/a', 'https://localhost/a', 'https://intranet/a', 'ftp://x.org/a', 'nope']) assert.equal(checkPublicUrl(bad).ok, false, bad)
  assert.ok(checkPublicUrl('webcal://www.townofexample.org/calendar.ics').ok)
  await assert.rejects(safeGetText('https://localhost/x.ics'), /isn’t a public|address|allowed/i)
})

test('repeating meetings keep their local time through daylight saving', () => {
  const tz = 'America/New_York'
  const first = new Date('2026-12-09T23:00:00Z') // Wed Dec 9, 6:00 PM EST
  const weekly = expandRepeat(first, tz, 'WEEKLY', 4)
  assert.deepEqual(weekly.map((d) => d.toISOString()), ['2026-12-09T23:00:00.000Z', '2026-12-16T23:00:00.000Z', '2026-12-23T23:00:00.000Z', '2026-12-30T23:00:00.000Z'])
  const monthly = expandRepeat(first, tz, 'MONTHLY_NTH', 6) // 2nd Wednesday
  assert.deepEqual(monthly.map((d) => localParts(d, tz)).map((p) => `${p.y}-${p.m0 + 1}-${p.d} ${p.h}:${String(p.mi).padStart(2, '0')}`), ['2026-12-9 18:00', '2027-1-13 18:00', '2027-2-10 18:00', '2027-3-10 18:00', '2027-4-14 18:00', '2027-5-12 18:00'])
  assert.equal(monthly[4].toISOString(), '2027-04-14T22:00:00.000Z', 'April is daylight time: 6 PM = 22:00Z')
  assert.equal(expandRepeat(first, tz, 'BIWEEKLY', 3)[2].toISOString(), '2027-01-06T23:00:00.000Z')
  assert.equal(expandRepeat(first, tz, 'WEEKLY', 999).length, 24)
})

const dc = await import('../lib/meetings/discover.ts')
const { findCalendarLinks } = dc.default || dc

test('calendar pages: find the hidden iCal / Subscribe links', () => {
  const html = `<html><head><link rel="alternate" type="text/calendar" href="/events/feed.ics"></head><body>
    <a href="/common/modules/iCalendar/iCalendar.aspx?catID=14&amp;feed=calendar">iCal</a>
    <a href="webcal://town.example.org/cal/export.ics">Subscribe</a>
    <a href="/calendar/ical">Drupal</a><a href="/events/?ical=1">Events</a><a href="/about">About</a><a href="/news.pdf">News</a>
    <a href="http://insecure.example.org/a.ics">insecure</a></body></html>`
  const links = findCalendarLinks(html, 'https://www.town.example.org/calendar')
  assert.equal(links[0], 'https://www.town.example.org/events/feed.ics', 'the declared calendar link comes first')
  assert.ok(links.includes('https://town.example.org/cal/export.ics'))
  assert.ok(links.some((l) => l.includes('/iCalendar.aspx?catID=14&feed=calendar')))
  assert.ok(!links.some((l) => l.includes('/about') || l.endsWith('.pdf') || l.startsWith('http://')))
  assert.equal(findCalendarLinks('<p>nothing</p>', 'https://x.org/').length, 0)
  assert.ok(findCalendarLinks(html, 'https://www.town.example.org/calendar', 2).length <= 2)
})

test('finding a calendar by name: guesses, and the check that it is the right place', async () => {
  const g = await import('../lib/meetings/guess.ts'), { legistarGuesses, looksLikeThisPlace } = g.default || g
  const sea = { kind: 'PLACE', name: 'Seattle', govType: 'city', state: 'WA', stateName: 'Washington' }
  const names = legistarGuesses(sea).map((x) => x.client)
  assert.ok(names.includes('seattle') && names.includes('cityofseattle') && names.includes('seattlewa'))
  assert.ok(legistarGuesses(sea).find((x) => x.client === 'seattlewa').qualified)
  assert.ok(!legistarGuesses(sea).find((x) => x.client === 'seattle').qualified)
  // A city never gets county names, and a county never gets city ones
  assert.ok(!names.some((n) => n.includes('county')))
  const king = { kind: 'COUNTY', name: 'King', govType: 'county', state: 'WA', stateName: 'Washington' }
  assert.ok(legistarGuesses(king).some((x) => x.client === 'kingcounty'))
  assert.ok(legistarGuesses({ kind: 'PLACE', name: 'St. Paul', govType: 'city', state: 'MN', stateName: 'Minnesota' }).some((x) => x.client === 'saintpaul'))
  assert.deepEqual(legistarGuesses({ kind: 'PLACE', name: 'Ab', govType: null, state: 'NY', stateName: 'New York' }), [])
  // Verification: the right state and name, from the site's own meeting locations
  assert.ok(looksLikeThisPlace(sea, ['Council Chamber, City Hall\r\n600 4th Avenue\r\nSeattle, WA 98104', 'City Council']))
  assert.ok(!looksLikeThisPlace({ ...sea, name: 'Denver', state: 'IA', stateName: 'Iowa' }, ['City & County Building, Room 391\r\n1437 Bannock Street\r\nDenver, CO 80202']))
  assert.ok(!looksLikeThisPlace(sea, ['Council Chambers', 'City Council']))
  assert.ok(!looksLikeThisPlace({ kind: 'PLACE', name: 'Albany', govType: 'city', state: 'NY', stateName: 'New York' }, ['Harold L. Joyce Albany County Office Building, Albany, GA']))
  assert.ok(!looksLikeThisPlace(king, ['City Hall, King City, WA']))
})
