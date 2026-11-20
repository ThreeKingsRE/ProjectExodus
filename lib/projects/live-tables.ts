// Live tables: overview tables read from a workspace spreadsheet (.xlsx, .csv,
// or a Google Sheet). A table follows its file's version series, so when a newer
// version (…-v13.xlsx) is added, the next refresh reads that one.

import JSZip from 'jszip'
import { parseCsv } from './survey-import'

export const MAX_TABLE_ROWS = 60
export const MAX_TABLE_COLUMNS = 16
export const MAX_SOURCE_BYTES = 8 * 1024 * 1024
const MAX_CELL = 200

export interface LiveTableData { header: string[]; rows: string[][]; sheets: string[]; sheet: string | null }

/** What the overview shows for a live table */
export interface LiveTableView {
  id: string
  title: string | null
  sheet: string | null
  range: string | null
  data: LiveTableData | null
  sourceTitle: string | null
  refreshedAt: string | null
  error: string | null
}

/** The overview text marks a live table with its own line: {{table:ID}} */
export const LIVE_TABLE_TOKEN = /^\{\{table:([a-z0-9]{8,40})\}\}$/

// ---------- version series ----------

/** File name without folders, query or extension. */
function baseName(nameOrUrl: string): string {
  const clean = nameOrUrl.split(/[?#]/)[0]
  const last = clean.split('/').filter(Boolean).pop() ?? clean
  try { return decodeURIComponent(last).replace(/\.[a-z0-9]{2,5}$/i, '') } catch { return last.replace(/\.[a-z0-9]{2,5}$/i, '') }
}

const VERSION = /(?:[\s._-]*(?:v|ver|version)[\s._-]*(\d+(?:\.\d+)?))\s*$/i

/** "riverknoll-feasibility-v12.xlsx" and "Riverknoll Feasibility v13" -> "riverknoll feasibility" */
export function seriesKeyOf(nameOrUrl: string): string {
  return baseName(nameOrUrl).replace(VERSION, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
}

/** The version number in a name, or 0 when there is none. */
export function versionOf(nameOrUrl: string): number {
  const m = baseName(nameOrUrl).match(VERSION)
  return m ? Number(m[1]) : 0
}

/** Pick the newest file of a series: highest version number, then most recently changed. */
export function newestInSeries<T extends { title: string; viewUrl: string; updatedAt: Date | string; createdAt: Date | string }>(files: T[], seriesKey: string): T | null {
  const inSeries = files.filter((f) => seriesKeyOf(f.viewUrl) === seriesKey || seriesKeyOf(f.title) === seriesKey)
  if (!inSeries.length) return null
  const version = (f: T) => Math.max(versionOf(f.viewUrl), versionOf(f.title))
  return inSeries.sort((a, b) => version(b) - version(a) || +new Date(b.updatedAt) - +new Date(a.updatedAt))[0]
}

export function isSpreadsheetUrl(url: string): boolean {
  return /\.(xlsx|csv)(?:[?#]|$)/i.test(url) || /docs\.google\.com\/spreadsheets\/d\//i.test(url)
}

// ---------- ranges ----------

function colIndex(letters: string): number {
  let n = 0
  for (const ch of letters.toUpperCase()) n = n * 26 + (ch.charCodeAt(0) - 64)
  return n - 1
}

/** "A1:F12" -> zero-based bounds; null when blank. Throws on a malformed range. */
export function parseRange(range: string | null | undefined): { r0: number; c0: number; r1: number; c1: number } | null {
  if (!range || !range.trim()) return null
  const m = range.trim().toUpperCase().match(/^([A-Z]{1,3})(\d{1,6}):([A-Z]{1,3})(\d{1,6})$/)
  if (!m) throw new Error('Use a range like A1:F12, or leave it blank for the whole sheet.')
  const [a, b] = [{ r: Number(m[2]) - 1, c: colIndex(m[1]) }, { r: Number(m[4]) - 1, c: colIndex(m[3]) }]
  return { r0: Math.min(a.r, b.r), c0: Math.min(a.c, b.c), r1: Math.max(a.r, b.r), c1: Math.max(a.c, b.c) }
}

/** Cut a grid to a range (or trim empty edges), cap its size, and split off the header row. */
export function shapeTable(grid: string[][], range: string | null | undefined, sheets: string[], sheet: string | null): LiveTableData {
  const bounds = parseRange(range)
  let cut = bounds
    ? grid.slice(bounds.r0, bounds.r1 + 1).map((row) => Array.from({ length: bounds.c1 - bounds.c0 + 1 }, (_, i) => row[bounds.c0 + i] ?? ''))
    : grid
  cut = cut.filter((row) => row.some((v) => v.trim() !== ''))
  const width = Math.min(MAX_TABLE_COLUMNS, Math.max(0, ...cut.map((r) => {
    let w = r.length
    while (w > 0 && !r[w - 1]?.trim()) w--
    return w
  })))
  const rows = cut.map((r) => Array.from({ length: width }, (_, i) => (r[i] ?? '').trim().slice(0, MAX_CELL)))
  return { header: rows[0] ?? [], rows: rows.slice(1, MAX_TABLE_ROWS + 1), sheets, sheet }
}

// ---------- .xlsx ----------

const decode = (s: string) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n))).replace(/&amp;/g, '&')
const attr = (tag: string, name: string) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1]

const BUILTIN_FORMATS: Record<number, string> = {
  1: '0', 2: '0.00', 3: '#,##0', 4: '#,##0.00', 9: '0%', 10: '0.00%', 14: 'm/d/yyyy', 15: 'd-mmm-yy', 16: 'd-mmm', 17: 'mmm-yy', 22: 'm/d/yyyy h:mm',
  37: '#,##0 ;(#,##0)', 38: '#,##0 ;[Red](#,##0)', 39: '#,##0.00;(#,##0.00)', 40: '#,##0.00;[Red](#,##0.00)', 44: '_("$"* #,##0.00_)',
}

/** Show a number the way the spreadsheet formats it (currency, %, separators, dates). */
export function formatNumber(value: number, format: string | undefined): string {
  if (!format || format === 'General') return Number.isInteger(value) ? String(value) : String(Math.round(value * 1e6) / 1e6)
  const f = format.split(';')[value < 0 && format.includes(';') ? 1 : 0] ?? format
  const plain = f.replace(/"[^"]*"|\[[^\]]*\]|\\.|_.|\*./g, '')
  if (/[ymd]/i.test(plain) && !/[#0]/.test(plain)) {
    const date = new Date(Math.round((value - 25569) * 86400 * 1000))
    return isNaN(+date) ? String(value) : date.toISOString().slice(0, 10)
  }
  const percent = plain.includes('%')
  const decimals = (plain.match(/\.(0+)/)?.[1].length) ?? 0
  const grouped = plain.includes(',')
  const n = Math.abs(percent ? value * 100 : value)
  let text = n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping: grouped })
  if (/\$/.test(f)) text = `$${text}`
  if (percent) text += '%'
  if (value < 0) text = format.includes(';') && /\(/.test(f) ? `(${text})` : `-${text}`
  return text
}

/** Read one sheet of an .xlsx file into a grid of display strings. */
export async function readXlsx(buffer: ArrayBuffer | Uint8Array, wantedSheet?: string | null): Promise<{ grid: string[][]; sheets: string[]; sheet: string }> {
  const zip = await JSZip.loadAsync(buffer)
  // Some tools write prefixed elements (<x:sheet>, <x:c>); drop element prefixes so
  // one set of patterns reads both. Attributes such as r:id are left alone.
  const text = async (path: string) => ((await zip.file(path)?.async('string')) ?? '').replace(/<(\/?)[A-Za-z][\w.-]*:/g, '<$1')
  const workbook = await text('xl/workbook.xml')
  const rels = await text('xl/_rels/workbook.xml.rels')
  const sheetTags = [...workbook.matchAll(/<sheet\b[^>]*\/?>/g)].map((m) => m[0])
  const sheets = sheetTags.map((t) => decode(attr(t, 'name') ?? ''))
  if (!sheets.length) throw new Error('That workbook has no sheets.')
  const index = wantedSheet ? sheets.findIndex((s) => s.toLowerCase() === wantedSheet.toLowerCase()) : 0
  if (index === -1) throw new Error(`The newest version has no sheet named “${wantedSheet}”. Sheets: ${sheets.join(', ')}.`)
  const relId = attr(sheetTags[index], 'r:id')
  const target = [...rels.matchAll(/<Relationship\b[^>]*\/?>/g)].map((m) => m[0]).find((t) => attr(t, 'Id') === relId)
  const targetPath = attr(target ?? '', 'Target') ?? `worksheets/sheet${index + 1}.xml`
  const sheetXml = await text(targetPath.startsWith('/') ? targetPath.slice(1) : `xl/${targetPath.replace(/^\.\//, '')}`)

  const shared = [...(await text('xl/sharedStrings.xml')).matchAll(/<si>([\s\S]*?)<\/si>/g)]
    .map((m) => decode([...m[1].matchAll(/<t\b[^>]*>([\s\S]*?)<\/t>/g)].map((t) => t[1]).join('')))

  // Number formats: cell style index -> format code
  const styles = await text('xl/styles.xml')
  const custom = new Map([...styles.matchAll(/<numFmt\b[^>]*\/?>/g)].map((m) => [Number(attr(m[0], 'numFmtId')), decode(attr(m[0], 'formatCode') ?? '')]))
  const xfs = styles.match(/<cellXfs\b[^>]*>([\s\S]*?)<\/cellXfs>/)?.[1] ?? ''
  const styleFormats = [...xfs.matchAll(/<xf\b[^>]*\/?>/g)].map((m) => {
    const id = Number(attr(m[0], 'numFmtId') ?? 0)
    return custom.get(id) ?? BUILTIN_FORMATS[id]
  })

  const grid: string[][] = []
  for (const cell of sheetXml.matchAll(/<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)) {
    const attrs = cell[1]
    const ref = attr(attrs, 'r')
    if (!ref) continue
    const m = ref.match(/^([A-Z]+)(\d+)$/)
    if (!m) continue
    const r = Number(m[2]) - 1, c = colIndex(m[1])
    if (r > 5000 || c > 200) continue
    const body = cell[2] ?? ''
    const type = attr(attrs, 't')
    const raw = body.match(/<v>([\s\S]*?)<\/v>/)?.[1]
    let value = ''
    if (type === 's' && raw !== undefined) value = shared[Number(raw)] ?? ''
    else if (type === 'inlineStr') value = decode([...body.matchAll(/<t\b[^>]*>([\s\S]*?)<\/t>/g)].map((t) => t[1]).join(''))
    else if (type === 'b') value = raw === '1' ? 'TRUE' : 'FALSE'
    else if (type === 'str' || type === 'e') value = decode(raw ?? '')
    else if (raw !== undefined && raw !== '') {
      const num = Number(raw)
      value = Number.isFinite(num) ? formatNumber(num, styleFormats[Number(attr(attrs, 's') ?? 0)]) : decode(raw)
    }
    ;(grid[r] ??= [])[c] = value
  }
  const filled = Array.from({ length: grid.length }, (_, i) => Array.from({ length: grid[i]?.length ?? 0 }, (_, j) => grid[i]?.[j] ?? ''))
  return { grid: filled, sheets, sheet: sheets[index] }
}

// ---------- reading a source ----------

/** Google Sheets / Drive links -> a direct export URL. Other hosts are not fetched. */
export function exportUrlFor(url: string, sheetGid?: string | null): { url: string; kind: 'csv' | 'xlsx' } | null {
  const sheet = url.match(/^https:\/\/docs\.google\.com\/spreadsheets\/d\/([A-Za-z0-9_-]{20,})/)
  // Export the whole workbook as .xlsx so sheet names can be chosen like any workbook
  if (sheet) return { url: `https://docs.google.com/spreadsheets/d/${sheet[1]}/export?format=xlsx`, kind: 'xlsx' }
  const drive = url.match(/^https:\/\/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=download&)?id=)([A-Za-z0-9_-]{20,})/)
  if (drive) return { url: `https://drive.google.com/uc?export=download&id=${drive[1]}`, kind: /\.csv/i.test(url) ? 'csv' : 'xlsx' }
  void sheetGid
  return null
}

/** Fetch a remote file with a timeout and size cap. Only called for Google hosts. */
async function fetchCapped(url: string): Promise<Uint8Array> {
  const res = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(20000) })
  if (!res.ok) {
    throw new Error(res.status === 401 || res.status === 403 || res.status === 404
      ? 'Google wouldn’t share that file. Share it as “Anyone with the link can view”, or add it to the workspace as an .xlsx.'
      : `The file host returned an error (${res.status}). Try again in a minute.`)
  }
  const host = new URL(res.url).hostname
  if (!/(^|\.)google(usercontent)?\.com$/.test(host)) throw new Error('That link redirected somewhere unexpected.')
  const buf = new Uint8Array(await res.arrayBuffer())
  if (buf.byteLength > MAX_SOURCE_BYTES) throw new Error('That file is too large to read (8 MB maximum).')
  return buf
}

export interface SourceReader {
  /** Read a file hosted on this site (e.g. /projects/riverknoll-renewal/x.xlsx); null if missing */
  readHosted: (path: string) => Promise<Uint8Array | null>
}

/** Read a table from a workspace file link (site-hosted .xlsx/.csv, or a Google Sheet/Drive file). */
export async function readLiveTable(url: string, sheet: string | null | undefined, range: string | null | undefined, reader: SourceReader): Promise<LiveTableData> {
  let bytes: Uint8Array | null = null
  let kind: 'csv' | 'xlsx'
  const sitePath = url.match(/^(?:https:\/\/(?:www\.)?projxodus\.com)?(\/projects\/[A-Za-z0-9._/-]+\.(xlsx|csv))$/i)
  if (sitePath) {
    if (sitePath[1].includes('..')) throw new Error('Invalid file path.')
    bytes = await reader.readHosted(sitePath[1])
    if (!bytes) throw new Error('That file is no longer on the site.')
    kind = sitePath[2].toLowerCase() as 'csv' | 'xlsx'
  } else {
    const exp = exportUrlFor(url)
    if (!exp) throw new Error('Live tables read .xlsx or .csv files in the workspace, or Google Sheets. Add the spreadsheet as one of those.')
    bytes = await fetchCapped(exp.url)
    kind = exp.kind
  }
  if (bytes.byteLength > MAX_SOURCE_BYTES) throw new Error('That file is too large to read (8 MB maximum).')
  if (kind === 'csv') {
    const grid = parseCsv(new TextDecoder().decode(bytes))
    return shapeTable(grid, range, [], null)
  }
  const book = await readXlsx(bytes, sheet)
  return shapeTable(book.grid, range, book.sheets, book.sheet)
}
