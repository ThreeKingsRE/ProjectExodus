import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
const mod = await import('../lib/projects/live-tables.ts')
const { seriesKeyOf, versionOf, newestInSeries, parseRange, shapeTable, formatNumber, readLiveTable, isSpreadsheetUrl, exportUrlFor } = mod.default || mod

test('version series: names with v11/v12/version 3 share a key', () => {
  assert.equal(seriesKeyOf('https://www.projxodus.com/projects/riverknoll-renewal/riverknoll-feasibility-v12.xlsx'), 'riverknoll feasibility')
  assert.equal(seriesKeyOf('Riverknoll Feasibility v13'), 'riverknoll feasibility')
  assert.equal(seriesKeyOf('Budget version 3.csv'), 'budget')
  assert.equal(versionOf('riverknoll-feasibility-v12.xlsx'), 12)
  assert.equal(versionOf('budget.xlsx'), 0)
})

test('newest in series: highest version wins, then most recently changed', () => {
  const at = (d) => new Date(d)
  const files = [
    { title: 'Feasibility v11', viewUrl: '/projects/x/feasibility-v11.xlsx', updatedAt: at('2026-11-18'), createdAt: at('2026-11-01') },
    { title: 'Feasibility v12', viewUrl: '/projects/x/feasibility-v12.xlsx', updatedAt: at('2026-11-10'), createdAt: at('2026-11-10') },
    { title: 'Other', viewUrl: '/projects/x/other-v40.xlsx', updatedAt: at('2026-11-19'), createdAt: at('2026-11-19') },
  ]
  assert.equal(newestInSeries(files, 'feasibility').title, 'Feasibility v12')
  assert.equal(newestInSeries(files, 'missing'), null)
})

test('ranges', () => {
  assert.deepEqual(parseRange('d5:e14'), { r0: 4, c0: 3, r1: 13, c1: 4 })
  assert.equal(parseRange(''), null)
  assert.throws(() => parseRange('A1-B2'), /range like A1:F12/)
  const t = shapeTable([['a', 'b', ''], ['', '', ''], ['1', '2', '']], null, [], null)
  assert.deepEqual(t.header, ['a', 'b'])
  assert.deepEqual(t.rows, [['1', '2']])
})

test('number formats follow the spreadsheet', () => {
  assert.equal(formatNumber(158870956, '"$"#,##0'), '$158,870,956')
  assert.equal(formatNumber(0.932, '0%'), '93%')
  assert.equal(formatNumber(1234.5, '#,##0.00'), '1,234.50')
  assert.equal(formatNumber(-500, '#,##0 ;(#,##0)'), '(500)')
  assert.equal(formatNumber(46000, 'm/d/yyyy'), '2025-12-09')
  assert.equal(formatNumber(2.5, undefined), '2.5')
})

test('reads both Riverknoll workbook versions (prefixed and plain XML)', async () => {
  for (const v of ['v11', 'v12']) {
    const bytes = new Uint8Array(await readFile(`private/projects/riverknoll-renewal/riverknoll-feasibility-${v}.xlsx`))
    const t = await readLiveTable(`https://www.projxodus.com/projects/riverknoll-renewal/riverknoll-feasibility-${v}.xlsx`, 'Summary', 'D5:E14', { readHosted: async () => bytes })
    assert.ok(t.sheets.includes('Summary'), v)
    assert.deepEqual(t.rows[0], ['Total project uses', '$158,870,956'], v)
  }
  const bytes = new Uint8Array(await readFile('private/projects/riverknoll-renewal/riverknoll-feasibility-v12.xlsx'))
  await assert.rejects(readLiveTable('https://www.projxodus.com/projects/x/f-v12.xlsx', 'Nope', null, { readHosted: async () => bytes }), /no sheet named/)
})

test('only safe sources are fetched', async () => {
  assert.equal(isSpreadsheetUrl('https://docs.google.com/spreadsheets/d/abcdefghijklmnopqrstuvwxyz/edit'), true)
  assert.equal(isSpreadsheetUrl('https://example.com/report.pdf'), false)
  assert.equal(exportUrlFor('https://evil.example/x.xlsx'), null)
  assert.match(exportUrlFor('https://docs.google.com/spreadsheets/d/abcdefghijklmnopqrstuvwxyz/edit#gid=0').url, /export\?format=xlsx$/)
  // Arbitrary hosts and path traversal are refused before any request
  await assert.rejects(readLiveTable('https://evil.example/x.xlsx', null, null, { readHosted: async () => null }), /Google Sheets/)
  await assert.rejects(readLiveTable('/projects/../../etc/passwd.csv', null, null, { readHosted: async () => new Uint8Array() }), /Invalid file path/)
})
