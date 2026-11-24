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
