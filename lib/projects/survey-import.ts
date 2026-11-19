// Results for linked surveys (Google Forms, Microsoft Forms, Typeform...):
// owners connect the form's results as CSV, either a Google Sheets link the
// site fetches, or an uploaded CSV export. Columns are summarized into the
// same per-question results the built-in survey dashboard shows.

import type { QuestionSummary } from './surveys'

export const MAX_IMPORT_ROWS = 5000
export const MAX_IMPORT_COLUMNS = 100
export const MAX_CELL_LENGTH = 2000
export const MAX_CSV_BYTES = 3 * 1024 * 1024

export interface ImportedResults { header: string[]; rows: string[][] }

/** RFC 4180 CSV parser (quoted fields, embedded commas, quotes and newlines). */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let quoted = false
  const src = text.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n')
  for (let i = 0; i < src.length; i++) {
    const c = src[i]
    if (quoted) {
      if (c === '"') {
        if (src[i + 1] === '"') { field += '"'; i++ } else quoted = false
      } else field += c
      continue
    }
    if (c === '"' && field === '') quoted = true
    else if (c === ',') { row.push(field); field = '' }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && src[i + 1] === '\n') i++
      row.push(field); field = ''
      if (row.some(v => v !== '')) rows.push(row)
      row = []
    } else field += c
  }
  row.push(field)
  if (row.some(v => v !== '')) rows.push(row)
  return rows
}

/** Parse CSV text into a capped header + rows, or explain what's wrong. */
export function readResultsCsv(text: string): { ok: true; data: ImportedResults } | { ok: false; error: string } {
  if (text.length > MAX_CSV_BYTES) return { ok: false, error: 'That file is too large (3 MB maximum).' }
  if (/^\s*<(!doctype|html)/i.test(text)) {
    return { ok: false, error: 'That link returned a web page, not CSV. Publish the sheet to the web as CSV (or share it as “Anyone with the link”) and try again.' }
  }
  const all = parseCsv(text)
  if (all.length < 1 || all[0].every(h => !h.trim())) return { ok: false, error: 'No columns found. Is this a CSV export of the responses?' }
  const header = all[0].slice(0, MAX_IMPORT_COLUMNS).map(h => h.trim().slice(0, 300))
  const rows = all.slice(1, MAX_IMPORT_ROWS + 1).map(r => header.map((_, i) => (r[i] ?? '').trim().slice(0, MAX_CELL_LENGTH)))
  return { ok: true, data: { header, rows } }
}

const isNumeric = (v: string) => /^-?\d+(\.\d+)?$/.test(v)
const SKIP = /^(timestamp|submitted|submitted at|start time|completion time|submission id|id)$/i

/** Summarize each column like a survey question; time and ID columns are skipped. */
export function summarizeImported(data: ImportedResults, textLimit = 200): QuestionSummary[] {
  const out: QuestionSummary[] = []
  data.header.forEach((label, col) => {
    if (!label || SKIP.test(label)) return
    const values = data.rows.map(r => r[col] ?? '').filter(v => v !== '')
    const base = { id: `col${col}`, label, answered: values.length }
    if (!values.length) { out.push({ ...base, type: 'SHORT_TEXT', texts: [] }); return }

    if (values.every(isNumeric)) {
      const nums = values.map(Number)
      const average = Math.round((nums.reduce((a, b) => a + b, 0) / nums.length) * 100) / 100
      const min = Math.min(...nums), max = Math.max(...nums)
      const ints = nums.every(Number.isInteger)
      if (ints && max - min <= 10 && min >= 0) {
        const counts = []
        for (let s = min; s <= max; s++) counts.push({ option: String(s), count: nums.filter(n => n === s).length })
        out.push({ ...base, type: 'SCALE', average, min, max, counts })
      } else out.push({ ...base, type: 'NUMBER', average, min, max })
      return
    }

    // Multi-select answers arrive joined with ", " (Google Forms) or ";" (Microsoft Forms)
    const sep = values.some(v => v.includes(';')) ? ';' : ', '
    const parts = values.flatMap(v => v.split(sep).map(p => p.trim()).filter(Boolean))
    const distinctParts = new Set(parts)
    const distinctWhole = new Set(values)
    const multi = parts.length > values.length && distinctParts.size <= 20 && distinctParts.size < distinctWhole.size + 1
    const choiceSet = multi ? distinctParts : distinctWhole
    // A choice question repeats short answers; all-different or long answers are free text
    const avgLength = values.reduce((n, v) => n + v.length, 0) / values.length
    const repeats = (multi ? parts.length : values.length) > choiceSet.size
    const isChoice = repeats && avgLength <= 60 && choiceSet.size <= 15 && (choiceSet.size <= 6 || choiceSet.size <= values.length * 0.5)
    if (isChoice) {
      const tally = new Map<string, number>()
      for (const v of multi ? parts : values) tally.set(v, (tally.get(v) ?? 0) + 1)
      const counts = [...tally].sort((a, b) => b[1] - a[1]).map(([option, count]) => ({ option, count }))
      out.push({ ...base, type: multi ? 'MULTIPLE_CHOICE' : 'SINGLE_CHOICE', counts })
      return
    }
    out.push({ ...base, type: values.some(v => v.length > 120) ? 'LONG_TEXT' : 'SHORT_TEXT', texts: values.slice(-textLimit).reverse() })
  })
  return out
}

/**
 * A Google Sheets link the site may fetch, as its CSV address. Accepts a
 * "Publish to web" link (…/d/e/<id>/pub…) or a normal sheet link shared as
 * "Anyone with the link" (…/d/<id>/edit#gid=…). Only docs.google.com is allowed.
 */
export function googleSheetCsvUrl(raw: unknown): string | null {
  if (typeof raw !== 'string') return null
  let url: URL
  try { url = new URL(raw.trim()) } catch { return null }
  if (url.protocol !== 'https:' || url.hostname !== 'docs.google.com') return null
  const published = url.pathname.match(/^\/spreadsheets\/d\/e\/([A-Za-z0-9_-]+)\/pub(?:html)?$/)
  if (published) {
    const gid = url.searchParams.get('gid')
    return `https://docs.google.com/spreadsheets/d/e/${published[1]}/pub?output=csv${gid && /^\d+$/.test(gid) ? `&gid=${gid}` : ''}`
  }
  const sheet = url.pathname.match(/^\/spreadsheets\/d\/([A-Za-z0-9_-]+)(?:\/.*)?$/)
  if (sheet && sheet[1] !== 'e') {
    const gid = (url.hash.match(/gid=(\d+)/) ?? url.search.match(/gid=(\d+)/))?.[1]
    return `https://docs.google.com/spreadsheets/d/${sheet[1]}/export?format=csv${gid ? `&gid=${gid}` : ''}`
  }
  return null
}
