/**
 * Build the architecture drawing library.
 *
 *   npm run arch:drawings            # write SVGs + manifest
 *   npm run arch:drawings -- --check # CI: fail if outputs are stale or invalid
 *
 * For each element: public/architecture/drawings/<id>.svg (full sheet) and
 * <id>.plate.svg (unlabeled, for games/thumbnails), plus
 * data/architecture/drawings-manifest.json listing what exists.
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync, readdirSync, unlinkSync } from 'fs'
import { gzipSync } from 'zlib'
import { renderSheet, renderPlate, sheetFit, type SheetSpec } from './sheet'
import { ORDERS, buildOrder } from './families/orders'
import { ARCHES, buildArch } from './families/arches'
import { VAULT_SHEETS } from './families/vaults'
import { FLOOR_SHEETS } from './families/floors'
import { STAIR_SHEETS } from './families/stairs'
import { ROOF_SHEETS } from './families/roofs'
import { INTERIOR_SHEETS } from './families/interiors'
import { OPENING_SHEETS } from './families/openings'
import { STRUCTURE_SHEETS } from './families/structure'
import { LANDSCAPE_SHEETS } from './families/landscape'
import { ROOM_SHEETS } from './families/rooms'
import { RELIGIOUS_SHEETS } from './families/religious'
import { DECORATIVE_SHEETS } from './families/decorative'
import { FACADE_SHEETS } from './families/facade'
import { SOLID_SHEETS } from './families/solids'
import { ELEMENT_SUMMARIES } from '../../../data/architecture/summary'

const OUT_DIR = 'public/architecture/drawings'
const MANIFEST = 'data/architecture/drawings-manifest.json'
const MAX_GZIP = 14 * 1024 // per file budget

const specs: SheetSpec[] = [...ORDERS.map(buildOrder), ...ARCHES.map(buildArch), ...VAULT_SHEETS.map((build) => build()), ...FLOOR_SHEETS.map((build) => build()), ...STAIR_SHEETS.map((build) => build()), ...ROOF_SHEETS.map((build) => build()), ...INTERIOR_SHEETS.map((build) => build()), ...OPENING_SHEETS.map((build) => build()), ...STRUCTURE_SHEETS.map((build) => build()), ...LANDSCAPE_SHEETS.map((build) => build()), ...ROOM_SHEETS.map((build) => build()), ...RELIGIOUS_SHEETS.map((build) => build()), ...DECORATIVE_SHEETS.map((build) => build()), ...FACADE_SHEETS.map((build) => build()), ...SOLID_SHEETS.map((build) => build())]

const known = new Set(ELEMENT_SUMMARIES.map((e) => e.id))
const files = new Map<string, string>()
const manifest: Record<string, { view: string; sheetNo: string; source: string; aspect: number }> = {}
const problems: string[] = []

for (const spec of specs) {
  if (!known.has(spec.id)) problems.push(`${spec.id}: not an element id in the summaries`)
  if (manifest[spec.id]) problems.push(`${spec.id}: built twice`)
  {
    const { s } = sheetFit(spec)
    if (s < 0.8) problems.push(`${spec.id}: drawing had to shrink to ${Math.round(s * 100)}% to fit the sheet; redraw it smaller`)
  }
  const sheet = renderSheet(spec)
  const plate = renderPlate(spec)
  for (const [name, svg] of [[`${spec.id}.svg`, sheet], [`${spec.id}.plate.svg`, plate]] as const) {
    if (!/viewBox="[\d.\s-]+"/.test(svg)) problems.push(`${name}: missing viewBox`)
    if (!svg.includes('<title') || !svg.includes('<desc')) problems.push(`${name}: missing title/desc`)
    if (!svg.includes('SOURCE:')) problems.push(`${name}: source credit not printed on the drawing`)
    if (/NaN|undefined/.test(svg)) problems.push(`${name}: contains NaN/undefined`)
    const gz = gzipSync(svg).length
    if (gz > MAX_GZIP) problems.push(`${name}: ${gz} B gzipped exceeds ${MAX_GZIP} B budget`)
    files.set(name, svg)
  }
  const [x0, y0, x1, y1] = spec.bounds
  manifest[spec.id] = {
    view: spec.view,
    sheetNo: spec.sheetNo,
    source: spec.source,
    aspect: Math.round(((x1 - x0) / (y1 - y0)) * 1000) / 1000,
  }
}

for (const id of known) if (!manifest[id]) problems.push(`${id}: element has no drawing`)

const manifestJson = JSON.stringify(manifest, null, 1) + '\n'

if (problems.length) {
  console.error(problems.map((p) => `✗ ${p}`).join('\n'))
  process.exit(1)
}

if (process.argv.includes('--check')) {
  const stale: string[] = []
  for (const [name, svg] of files) {
    const p = `${OUT_DIR}/${name}`
    if (!existsSync(p) || readFileSync(p, 'utf8') !== svg) stale.push(p)
  }
  if (!existsSync(MANIFEST) || readFileSync(MANIFEST, 'utf8') !== manifestJson) stale.push(MANIFEST)
  if (stale.length) {
    console.error(`Drawings are out of date (run npm run arch:drawings):\n  ${stale.join('\n  ')}`)
    process.exit(1)
  }
  console.log(`drawings up to date: ${specs.length} elements`)
} else {
  mkdirSync(OUT_DIR, { recursive: true })
  // remove outputs for drawings that no longer exist
  for (const name of readdirSync(OUT_DIR)) {
    if (name.endsWith('.svg') && !files.has(name)) unlinkSync(`${OUT_DIR}/${name}`)
  }
  let total = 0
  for (const [name, svg] of files) {
    writeFileSync(`${OUT_DIR}/${name}`, svg)
    total += gzipSync(svg).length
  }
  writeFileSync(MANIFEST, manifestJson)
  console.log(`wrote ${files.size} files for ${specs.length} elements (avg ${(total / files.size / 1024).toFixed(1)} KB gz)`)
}
