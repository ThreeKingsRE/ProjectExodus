/**
 * Drawing-sheet toolkit for the architecture library.
 *
 * Every element is drawn once (as layers) and rendered two ways:
 *  - SHEET: the full technical sheet with title block, part labels,
 *    dimensions and the source credit. Used on element detail views.
 *  - PLATE: just the drawing plus the source credit, with no name, labels or
 *    dimensions, so games can show it without giving the answer away.
 *
 * House style is ink on paper (vellum). Every drawing must carry a source
 * credit; renderSheet/renderPlate refuse to build without one.
 */

export type Pt = [number, number]

export const f = (n: number) => (Math.round(n * 100) / 100).toString()

export const LAYERS = [
  'hatch', // material hatching in cut areas
  'shading', // tone lines on elevations
  'fine', // secondary edges: fillets, flutes, joints
  'profile', // visible outlines
  'cut', // outlines of cut (section) surfaces, heaviest
  'center', // centrelines
  'dims', // dimensions
  'labels', // part callouts
  'notes', // view labels and notes
] as const
export type LayerName = (typeof LAYERS)[number]

/** Layers shown on the unlabeled plate (no names, no dimensions). */
const PLATE_LAYERS: LayerName[] = ['hatch', 'shading', 'fine', 'profile', 'cut', 'center']

export interface SheetSpec {
  id: string
  title: string
  subtitle: string
  /** e.g. 'HALF SECTION · HALF ELEVATION', 'PLAN', 'ELEVATION' */
  view: string
  sheetNo: string
  /** Required credit printed on every rendering, e.g. 'Proportions after …' */
  source: string
  scale: { unitPx: number; unitName: string; count: number }
  defs?: string
  layers: Partial<Record<LayerName, string[]>>
  /** Extents of the drawing itself (no labels), in page px: [x0, y0, x1, y1] */
  bounds: [number, number, number, number]
  /** Short plain-language description for <desc> / alt text (no element name) */
  description: string
}

export const PAGE_W = 600
export const PAGE_H = 780
/** Drawing area above the title block */
export const AREA = { x0: 24, y0: 28, x1: PAGE_W - 24, y1: PAGE_H - 132 }

const STYLE = `
    svg { --_ink: var(--ink, #1f2a37); --_paper: var(--paper, #f4efe3); --_accent: var(--accent, #9a3412); }
    .paper { fill: var(--_paper); }
    .ink { stroke: var(--_ink); fill: none; stroke-linecap: round; stroke-linejoin: round; }
    .solid { fill: var(--_ink); stroke: none; }
    .l-profile { stroke-width: 1.5; }
    .l-cut { stroke-width: 2.2; }
    .l-fine { stroke-width: 0.6; }
    .l-hair, .l-shading { stroke-width: 0.35; }
    .l-dims, .l-labels { stroke-width: 0.45; }
    .l-center { stroke-width: 0.5; stroke-dasharray: 14 3 2 3; stroke: var(--_accent); }
    text { fill: var(--_ink); font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 9px; letter-spacing: 0.08em; stroke: none; }
    .t-title { font-size: 17px; font-weight: 700; letter-spacing: 0.14em; }
    .t-sub { font-size: 9px; opacity: 0.85; }
    .t-small { font-size: 7.5px; opacity: 0.85; }
    .t-accent { fill: var(--_accent); }`

const PATTERNS = `
    <pattern id="h-stone" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="6" class="ink l-hair"/>
    </pattern>
    <pattern id="h-brick" width="16" height="8" patternUnits="userSpaceOnUse">
      <path d="M0 0H16M0 4H16M4 0V4M12 4V8" class="ink l-hair"/>
    </pattern>
    <pattern id="h-concrete" width="10" height="10" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="3" r="0.6" class="solid"/><circle cx="7" cy="7" r="0.5" class="solid"/><path d="M5 1l1.2 1.6h-2.4z" class="ink l-hair"/>
    </pattern>
    <pattern id="h-earth" width="12" height="12" patternUnits="userSpaceOnUse">
      <path d="M0 12L12 0M-3 3L3 -3M9 15L15 9" class="ink l-hair"/><path d="M0 6L6 0" class="ink l-hair" stroke-dasharray="2 2"/>
    </pattern>
    <pattern id="h-timber" width="40" height="6" patternUnits="userSpaceOnUse">
      <path d="M0 3C10 1 20 5 40 3" class="ink l-hair"/>
    </pattern>`

const LAYER_CLASS: Record<LayerName, string> = {
  hatch: 'ink l-hair',
  shading: 'ink l-shading',
  fine: 'ink l-fine',
  profile: 'ink l-profile',
  cut: 'ink l-cut',
  center: 'ink l-center',
  dims: 'ink l-dims',
  labels: 'ink l-labels',
  notes: '',
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Wrap text to lines of at most `max` characters (monospace layout). */
export function wrap(text: string, max: number): string[] {
  const words = text.split(/\s+/)
  const lines: string[] = []
  let line = ''
  for (const w of words) {
    if ((line + ' ' + w).trim().length > max && line) {
      lines.push(line)
      line = w
    } else {
      line = (line + ' ' + w).trim()
    }
  }
  if (line) lines.push(line)
  return lines
}

function layersSvg(spec: SheetSpec, names: readonly LayerName[]) {
  return names
    .filter((n) => spec.layers[n]?.length)
    .map((n) => `  <g class="layer-${n} ${LAYER_CLASS[n]}">\n    ${spec.layers[n]!.join('\n    ')}\n  </g>`)
    .join('\n')
}

function assertSource(spec: SheetSpec) {
  if (!spec.source || spec.source.trim().length < 8) {
    throw new Error(`${spec.id}: every drawing needs a source credit`)
  }
}

/**
 * Fit the drawing into AREA. Drawings are authored in page px; if one runs past
 * the right/bottom edge or above the top, scale it (uniformly, anchored at the
 * left margin so the label column stays put) and shift it vertically.
 * The scale bar is scaled with it, so dimensions stay honest.
 */
/** Approximate extents of the labels/dimension text on the drawing layers (monospace, so width ≈ chars). */
function textExtents(spec: SheetSpec): [number, number, number, number] | null {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity
  for (const n of LAYERS) {
    for (const chunk of spec.layers[n] ?? []) {
      for (const m of chunk.matchAll(/<text ([^>]*)>([^<]*)<\/text>/g)) {
        const attrs = m[1]
        const x = Number(/\bx="([-\d.]+)"/.exec(attrs)?.[1])
        const y = Number(/\by="([-\d.]+)"/.exec(attrs)?.[1])
        if (!Number.isFinite(x) || !Number.isFinite(y) || /transform=/.test(attrs)) continue
        const size = /t-small|t-credit/.test(attrs) ? 7.5 : 9
        const w = m[2].replace(/&[a-z#0-9]+;/g, '_').length * size * 0.68
        const anchor = /text-anchor="(middle|end)"/.exec(attrs)?.[1]
        const left = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x
        x0 = Math.min(x0, left); x1 = Math.max(x1, left + w)
        y0 = Math.min(y0, y - size); y1 = Math.max(y1, y + 2)
      }
    }
  }
  return Number.isFinite(x0) ? [x0, y0, x1, y1] : null
}

/**
 * Fit the drawing into AREA. Drawings are authored in page px; if one (or its
 * labels) runs past the right/bottom edge or above the top, scale it uniformly,
 * anchored at the left margin so the label column stays put, and shift it
 * vertically. The scale bar is scaled with it, so dimensions stay honest.
 */
export function sheetFit(spec: SheetSpec): { s: number; transform: string } {
  const [, by0, bx1, by1] = spec.bounds
  const tol = 6 // bounds carry a 4px pad; ignore overruns within it
  const t = textExtents(spec)
  const cx1 = Math.max(bx1 - tol, t ? t[2] : -Infinity)
  const cy0 = Math.min(by0, t ? t[1] : Infinity)
  const cy1 = Math.max(by1, t ? t[3] : -Infinity)
  let s = 1
  if (cx1 > AREA.x1) s = Math.min(s, (AREA.x1 - AREA.x0) / (cx1 - AREA.x0))
  if (cy1 - cy0 > AREA.y1 - AREA.y0) s = Math.min(s, (AREA.y1 - AREA.y0) / (cy1 - cy0))
  // vertical placement after scaling about the drawing's top edge
  let top = cy0
  if (cy0 < AREA.y0 - tol) top = AREA.y0
  if (top + (cy1 - cy0) * s > AREA.y1 + tol) top = AREA.y1 - (cy1 - cy0) * s
  const ty = top - cy0 * s
  const tx = AREA.x0 * (1 - s)
  if (s === 1 && Math.abs(ty) < 0.01) return { s, transform: '' }
  return { s, transform: `translate(${f(tx)} ${f(ty)})${s === 1 ? '' : ` scale(${f(s)})`}` }
}

export function renderSheet(spec: SheetSpec): string {
  assertSource(spec)
  const fit = sheetFit(spec)
  const tbTop = PAGE_H - 116
  const split = PAGE_W - 200
  // The credit is never truncated: wrap to the title block, fail the build if it can't fit
  const sourceLines = wrap(`SOURCE: ${spec.source}`, 74)
  if (sourceLines.length > 4) throw new Error(`${spec.id}: source credit too long for the title block (${sourceLines.length} lines; max 4)`)
  const unitName = spec.scale.unitName
  const unitPx = spec.scale.unitPx * fit.s
  // keep the scale bar inside the title block whatever the unit size
  const count = Math.max(1, Math.min(spec.scale.count, Math.floor(168 / unitPx)))
  const bar = Array.from({ length: count }, (_, i) =>
    `<rect x="${f(split + 16 + i * unitPx)}" y="${tbTop + 66}" width="${f(unitPx)}" height="5" class="${i % 2 ? 'ink l-fine' : 'solid'}"/>`
  ).join('')

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${PAGE_W} ${PAGE_H}" role="img" aria-labelledby="t d">
  <title id="t">${esc(spec.title)}: ${esc(spec.view.toLowerCase())}</title>
  <desc id="d">${esc(spec.description)} Source: ${esc(spec.source)}</desc>
  <style>${STYLE}
  </style>
  <defs>${PATTERNS}
    ${spec.defs ?? ''}
  </defs>
  <rect class="paper" width="${PAGE_W}" height="${PAGE_H}"/>
  <rect class="ink l-fine" x="12" y="12" width="${PAGE_W - 24}" height="${PAGE_H - 24}"/>
${fit.transform ? `  <g transform="${fit.transform}">\n${layersSvg(spec, LAYERS)}\n  </g>` : layersSvg(spec, LAYERS)}
  <g class="title-block">
    <path class="ink l-fine" d="M12 ${tbTop}H${PAGE_W - 12}M${split} ${tbTop}V${PAGE_H - 12}"/>
    <text class="t-title" x="26" y="${tbTop + 28}">${esc(spec.title.toUpperCase())}</text>
    <text class="t-sub" x="26" y="${tbTop + 46}">${esc(spec.subtitle.toUpperCase())}</text>
    ${sourceLines.map((l, i) => `<text class="t-small" x="26" y="${tbTop + 62 + i * 10}">${esc(l)}</text>`).join('\n    ')}
    <text class="t-sub" x="${split + 16}" y="${tbTop + 20}">SHEET  ${esc(spec.sheetNo)}</text>
    ${spec.view.split(' · ').slice(0, 2).map((l, i) => `<text class="t-small" x="${split + 16}" y="${tbTop + 35 + i * 10}">${esc(l)}</text>`).join('')}
    <text class="t-small" x="${split + 16}" y="${tbTop + 60}">SCALE IN ${esc(unitName.toUpperCase())}</text>
    ${bar}
    <text class="t-small" x="${split + 14}" y="${tbTop + 85}">0</text>
    <text class="t-small" x="${f(split + 14 + count * unitPx)}" y="${tbTop + 85}">${count}</text>
    <text class="t-small" x="${split + 16}" y="${tbTop + 98}">PROJECT EXODUS · ARCHITECTURE</text>
  </g>
</svg>
`
}

export function renderPlate(spec: SheetSpec): string {
  assertSource(spec)
  const pad = 14
  const [bx0, by0, bx1, by1] = spec.bounds
  const w = bx1 - bx0 + pad * 2
  const sourceLines = wrap(`SOURCE: ${spec.source}`, Math.max(24, Math.floor((w - 12) / 4.6)))
  const creditH = 8 + sourceLines.length * 9
  const h = by1 - by0 + pad * 2 + creditH
  const x0 = bx0 - pad
  const y0 = by0 - pad

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${f(x0)} ${f(y0)} ${f(w)} ${f(h)}" role="img" aria-labelledby="t d">
  <title id="t">Architectural drawing</title>
  <desc id="d">${esc(spec.description)} Source: ${esc(spec.source)}</desc>
  <style>${STYLE}
    .t-credit { font-size: 7.5px; opacity: 0.75; letter-spacing: 0.04em; }
  </style>
  <defs>${PATTERNS}
    ${spec.defs ?? ''}
  </defs>
  <rect class="paper" x="${f(x0)}" y="${f(y0)}" width="${f(w)}" height="${f(h)}"/>
${layersSvg(spec, PLATE_LAYERS)}
  ${sourceLines.map((l, i) => `<text class="t-credit" x="${f(x0 + 6)}" y="${f(by1 + pad + 6 + (i + 1) * 9)}">${esc(l)}</text>`).join('\n  ')}
</svg>
`
}

// ---------------------------------------------------------------------------
// Drawing helpers (page px)
// ---------------------------------------------------------------------------

export const path = (pts: Pt[], close = false) =>
  pts.map(([x, y], i) => `${i ? 'L' : 'M'}${f(x)} ${f(y)}`).join(' ') + (close ? ' Z' : '')

export const el = (d: string, attrs = '') => `<path d="${d}"${attrs ? ' ' + attrs : ''}/>`

/** Sample an ellipse arc; angles in radians, SVG y-down coordinates. */
export function arc(cx: number, cy: number, rx: number, ry: number, a0: number, a1: number, steps = 12): Pt[] {
  const pts: Pt[] = []
  for (let i = 0; i <= steps; i++) {
    const a = a0 + ((a1 - a0) * i) / steps
    pts.push([cx + rx * Math.cos(a), cy + ry * Math.sin(a)])
  }
  return pts
}

/** Vertical dimension with architectural ticks and extension lines. */
export function vDim(x: number, y0: number, y1: number, label: string, extTo?: number): string {
  const tick = (y: number) => `M${f(x - 4)} ${f(y + 4)}L${f(x + 4)} ${f(y - 4)}`
  const ext = (y: number) => `M${f(extTo ?? x - 10)} ${f(y)}L${f(x + 6)} ${f(y)}`
  const ty = (y0 + y1) / 2
  return `${el(`M${f(x)} ${f(y0)}L${f(x)} ${f(y1)}${tick(y0)}${tick(y1)}${ext(y0)}${ext(y1)}`)}<text x="${f(x + 8)}" y="${f(ty + 3)}">${esc(label)}</text>`
}

/** Horizontal dimension, label below the line. */
export function hDim(y: number, x0: number, x1: number, label: string): string {
  const tick = (x: number) => `M${f(x - 4)} ${f(y + 4)}L${f(x + 4)} ${f(y - 4)}`
  const ext = (x: number) => `M${f(x)} ${f(y - 6)}L${f(x)} ${f(y + 6)}`
  return `${el(`M${f(x0)} ${f(y)}L${f(x1)} ${f(y)}${tick(x0)}${tick(x1)}${ext(x0)}${ext(x1)}`)}<text x="${f((x0 + x1) / 2)}" y="${f(y + 14)}" text-anchor="middle">${esc(label)}</text>`
}

/** Zig-zag break line: the member continues beyond the drawing. */
export function breakLine(x: number, y0: number, y1: number, amp = 5): string {
  const mid = (y0 + y1) / 2
  return el(`M${f(x)} ${f(y0)}L${f(x)} ${f(mid - 7)}L${f(x + amp)} ${f(mid - 3)}L${f(x - amp)} ${f(mid + 3)}L${f(x)} ${f(mid + 7)}L${f(x)} ${f(y1)}`)
}

/**
 * Part callouts on the left: labels keep their order but are spaced at least
 * `gap` px apart; crowded ones get a dog-leg leader to their point.
 */
export function leftLabels(items: { text: string; at: Pt }[], textX: number, elbowX: number, gap = 15): string[] {
  const sorted = [...items].sort((a, b) => a.at[1] - b.at[1])
  const ys: number[] = []
  for (const it of sorted) {
    const prev = ys[ys.length - 1]
    ys.push(prev === undefined ? it.at[1] : Math.max(it.at[1], prev + gap))
  }
  // If labels were pushed down, shift the whole group up around the original centre
  const drift = ys.reduce((s, y, i) => s + (y - sorted[i].at[1]), 0) / ys.length
  const adj = ys.map((y) => y - drift)
  for (let i = 1; i < adj.length; i++) adj[i] = Math.max(adj[i], adj[i - 1] + gap)

  return sorted.map((it, i) => {
    const ly = adj[i]
    const textEnd = textX + it.text.length * 6.1 + 6
    const [px, py] = it.at
    const d =
      Math.abs(ly - py) < 0.5
        ? `M${f(textEnd)} ${f(ly)}L${f(px - 2.5)} ${f(py)}`
        : `M${f(textEnd)} ${f(ly)}L${f(elbowX)} ${f(ly)}L${f(px - 2.5)} ${f(py)}`
    return `${el(d)}<circle cx="${f(px - 2.5)}" cy="${f(py)}" r="1.5" class="solid"/><text x="${f(textX)}" y="${f(ly + 3)}">${esc(it.text)}</text>`
  })
}

export const text = (x: number, y: number, s: string, attrs = '') =>
  `<text x="${f(x)}" y="${f(y)}"${attrs ? ' ' + attrs : ''}>${esc(s)}</text>`
