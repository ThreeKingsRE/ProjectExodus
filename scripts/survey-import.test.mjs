import test from 'node:test'
import assert from 'node:assert/strict'
const m = await import('../lib/projects/survey-import.ts')
const { parseCsv, readResultsCsv, summarizeImported, googleSheetCsvUrl } = m.default || m

const googleForms = [
  'Timestamp,Do you live in Riverknoll?,What matters most?,How important is a private bedroom?,Anything else?',
  '11/18/2026 10:01:00,Yes,"Rent, Privacy",5,"Keep the gardens, please"',
  '11/18/2026 10:05:00,No,Privacy,4,',
  '11/18/2026 11:12:00,Yes,"Rent, Shared kitchen",5,"Quotes ""inside"" and',
  'a second line"',
  '11/19/2026 09:00:00,Yes,Rent,3,Cheaper is better',
].join('\r\n')

test('CSV parser handles quotes, commas, escaped quotes and line breaks', () => {
  const rows = parseCsv(googleForms)
  assert.equal(rows.length, 5)
  assert.equal(rows[1][2], 'Rent, Privacy')
  assert.equal(rows[3][4], 'Quotes "inside" and\na second line')
})

test('Google Forms export summarizes like a built survey', () => {
  const parsed = readResultsCsv(googleForms)
  assert.equal(parsed.ok, true)
  const s = summarizeImported(parsed.data)
  assert.deepEqual(s.map(q => q.label), ['Do you live in Riverknoll?', 'What matters most?', 'How important is a private bedroom?', 'Anything else?'])
  const [live, matters, scale, other] = s
  assert.equal(live.type, 'SINGLE_CHOICE')
  assert.deepEqual(live.counts, [{ option: 'Yes', count: 3 }, { option: 'No', count: 1 }])
  assert.equal(matters.type, 'MULTIPLE_CHOICE')
  assert.deepEqual(Object.fromEntries(matters.counts.map(c => [c.option, c.count])), { Rent: 3, Privacy: 2, 'Shared kitchen': 1 })
  assert.equal(scale.type, 'SCALE'); assert.equal(scale.average, 4.25)
  assert.equal(other.answered, 3)
  assert.ok(other.texts.includes('Keep the gardens, please'))
})

test('a web page instead of CSV is explained, not imported', () => {
  const r = readResultsCsv('<!DOCTYPE html><html><body>Sign in</body></html>')
  assert.equal(r.ok, false)
  assert.match(r.error, /Publish the sheet/)
})

test('only Google Sheets links are fetched, converted to CSV addresses', () => {
  assert.equal(googleSheetCsvUrl('https://docs.google.com/spreadsheets/d/e/2PACX-abc_123/pubhtml'), 'https://docs.google.com/spreadsheets/d/e/2PACX-abc_123/pub?output=csv')
  assert.equal(googleSheetCsvUrl('https://docs.google.com/spreadsheets/d/e/2PACX-abc/pub?gid=42&single=true&output=csv'), 'https://docs.google.com/spreadsheets/d/e/2PACX-abc/pub?output=csv&gid=42')
  assert.equal(googleSheetCsvUrl('https://docs.google.com/spreadsheets/d/1AbC-dEf/edit#gid=7'), 'https://docs.google.com/spreadsheets/d/1AbC-dEf/export?format=csv&gid=7')
  for (const bad of ['http://docs.google.com/spreadsheets/d/1AbC/edit', 'https://evil.example/spreadsheets/d/1AbC/edit', 'https://docs.google.com/forms/d/abc/edit', 'https://169.254.169.254/latest', 'not a url']) {
    assert.equal(googleSheetCsvUrl(bad), null, bad)
  }
})
