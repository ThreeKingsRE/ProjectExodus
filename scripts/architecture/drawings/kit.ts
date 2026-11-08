/**
 * Small conveniences shared by the drawing families, on top of sheet.ts.
 */
import { type Pt, type SheetSpec, type LayerName, f, path, el, leftLabels, AREA } from './sheet'

export type Layers = Required<SheetSpec['layers']>

export function newLayers(): Layers {
  return { hatch: [], shading: [], fine: [], profile: [], cut: [], center: [], dims: [], labels: [], notes: [] }
}

/** Credit for drawings constructed by us rather than traced from a source. */
export const ORIGINAL =
  'Original drawing by Project Exodus from the standard geometric construction of this form; no external drawing reproduced.'

export interface Meta {
  id: string
  title: string
  subtitle: string
  view: string
  sheetNo: string
  source: string
  description: string
  scale: SheetSpec['scale']
}

/** Tracks the drawing's extents as shapes are added, for the plate crop. */
export class Bounds {
  x0 = Infinity
  y0 = Infinity
  x1 = -Infinity
  y1 = -Infinity
  add(...pts: Pt[]) {
    for (const [x, y] of pts) {
      this.x0 = Math.min(this.x0, x)
      this.y0 = Math.min(this.y0, y)
      this.x1 = Math.max(this.x1, x)
      this.y1 = Math.max(this.y1, y)
    }
    return this
  }
  get(pad = 4): [number, number, number, number] {
    return [this.x0 - pad, this.y0 - pad, this.x1 + pad, this.y1 + pad]
  }
}

export function finish(meta: Meta, layers: Layers, bounds: Bounds, defs = ''): SheetSpec {
  return { ...meta, layers, bounds: bounds.get(), defs }
}

/** Closed polygon filled with a hatch pattern, outlined in the given layer. */
export function hatched(L: Layers, pts: Pt[] | string, pattern = 'h-stone', outline: LayerName | null = 'cut') {
  const d = typeof pts === 'string' ? pts : path(pts, true)
  L.hatch.push(`<path d="${d}" fill="url(#${pattern})" stroke="none"/>`)
  if (outline) L[outline].push(el(d))
}

/** Same polygon but filled with paper to mask lines behind it. */
export function masked(L: Layers, pts: Pt[], layer: LayerName = 'profile') {
  L[layer].push(`<path d="${path(pts, true)}" style="fill: var(--_paper)"/>`)
}

export const circle = (c: Pt, r: number, attrs = '') =>
  `<circle cx="${f(c[0])}" cy="${f(c[1])}" r="${f(r)}"${attrs ? ' ' + attrs : ''}/>`

export const line = (a: Pt, b: Pt, attrs = '') => el(`M${f(a[0])} ${f(a[1])}L${f(b[0])} ${f(b[1])}`, attrs)

export const rect = (x: number, y: number, w: number, h: number): Pt[] => [[x, y], [x + w, y], [x + w, y + h], [x, y + h]]

/** Points around a circle (y-down page space), angles in radians. */
export function ring(c: Pt, r: number, a0 = 0, a1 = 2 * Math.PI, n = 72): Pt[] {
  return Array.from({ length: n + 1 }, (_, i) => {
    const a = a0 + ((a1 - a0) * i) / n
    return [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)] as Pt
  })
}

/** Standard left-side callouts for a drawing whose left edge is at `edgeX`. */
export function callouts(L: Layers, items: { text: string; at: Pt }[], edgeX: number) {
  L.labels.push(...leftLabels(items, AREA.x0 + 10, Math.min(edgeX - 14, AREA.x0 + 150)))
}

/** Small accent arrow (e.g. thrust, light, flow). */
export function arrow(L: Layers, a: Pt, b: Pt, layer: LayerName = 'center') {
  const ang = Math.atan2(b[1] - a[1], b[0] - a[0])
  const h = 7
  const p1: Pt = [b[0] - h * Math.cos(ang - 0.4), b[1] - h * Math.sin(ang - 0.4)]
  const p2: Pt = [b[0] - h * Math.cos(ang + 0.4), b[1] - h * Math.sin(ang + 0.4)]
  L[layer].push(el(`M${f(a[0])} ${f(a[1])}L${f(b[0])} ${f(b[1])}M${f(p1[0])} ${f(p1[1])}L${f(b[0])} ${f(b[1])}L${f(p2[0])} ${f(p2[1])}`, 'stroke-dasharray="none"'))
}

/** Parallel course lines clipped to a polygon (webs of vaults, paving, etc.). */
export function courses(L: Layers, clipId: string, poly: Pt[], angle: number, spacing: number, layer: LayerName = 'shading') {
  const xs = poly.map((p) => p[0])
  const ys = poly.map((p) => p[1])
  const cx = (Math.min(...xs) + Math.max(...xs)) / 2
  const cy = (Math.min(...ys) + Math.max(...ys)) / 2
  const R = Math.hypot(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys))
  const dx = Math.cos(angle)
  const dy = Math.sin(angle)
  const parts: string[] = []
  for (let o = -R; o <= R; o += spacing) {
    const ox = cx - dy * o
    const oy = cy + dx * o
    parts.push(`M${f(ox - dx * R)} ${f(oy - dy * R)}L${f(ox + dx * R)} ${f(oy + dy * R)}`)
  }
  L[layer].push(`<g clip-path="url(#${clipId})"><path d="${parts.join('')}"/></g>`)
  return `<clipPath id="${clipId}"><path d="${path(poly, true)}"/></clipPath>`
}

// ---------------------------------------------------------------------------
// Axonometric / paraline views, for elements that read best in three dimensions
// ---------------------------------------------------------------------------

/** Model point: x to the right, y into depth, z up (all in page px). */
export type P3 = [number, number, number]

/**
 * A paraline projector. `origin` is where model (0,0,0) lands on the page.
 * isometric: both ground axes at 30°; planometric (military): 45°/45° with the
 * plan undistorted; oblique (cavalier/cabinet): x flat, depth at `depthAngle`.
 */
export function axo(origin: Pt, kind: 'isometric' | 'planometric' | 'oblique' = 'isometric', depthScale = kind === 'oblique' ? 0.5 : 1) {
  const deg = Math.PI / 180
  const [ax, ay] = kind === 'isometric' ? [30 * deg, 30 * deg] : kind === 'planometric' ? [45 * deg, 45 * deg] : [0, 45 * deg]
  // oblique: depth recedes up and to the right; the others: x up-right, y up-left
  const ySign = kind === 'oblique' ? 1 : -1
  const P = (p: P3): Pt => [
    origin[0] + p[0] * Math.cos(ax) + ySign * p[1] * depthScale * Math.cos(ay),
    origin[1] - p[0] * Math.sin(ax) - p[1] * depthScale * Math.sin(ay) - p[2],
  ]
  return Object.assign(P, { kind })
}
export type Axo = ReturnType<typeof axo>

/** Tone patterns for shaded faces; pass AXO_DEFS to finish() when using face(..., 'mid'|'dark'). */
export const AXO_DEFS = `<pattern id="h-tone" width="3.2" height="3.2" patternUnits="userSpaceOnUse" patternTransform="rotate(90)"><line x1="0" y1="0" x2="0" y2="3.2" class="ink l-hair"/></pattern><pattern id="h-tone-d" width="2.2" height="2.2" patternUnits="userSpaceOnUse" patternTransform="rotate(90)"><line x1="0" y1="0" x2="0" y2="2.2" class="ink l-hair"/></pattern>`

/**
 * One planar face, painted in order (painter's algorithm: draw far faces first).
 * Fills with paper so it hides what is behind it, then tone, then outline.
 */
export function face(L: Layers, P: Axo, pts: P3[], tone: 'light' | 'mid' | 'dark' = 'light', outline: LayerName = 'profile') {
  const d = path(pts.map(P), true)
  // paper fill and tone travel in the same layer as the outline so stacking order holds
  L[outline].push(`<path d="${d}" style="fill: var(--_paper)"/>`)
  if (tone !== 'light') L[outline].push(`<path d="${d}" fill="url(#${tone === 'mid' ? 'h-tone' : 'h-tone-d'})" stroke="none"/>`)
  L[outline].push(el(d))
}

/**
 * Box from (x,y,z) of size w (x), d (y), h (z). Draws the three faces seen from
 * the viewer: top, the y=min face (front) and the x=max or x=min side.
 */
export function box(L: Layers, P: Axo, [x, y, z]: P3, w: number, d: number, h: number, tones: { top?: 'light' | 'mid' | 'dark'; front?: 'light' | 'mid' | 'dark'; side?: 'light' | 'mid' | 'dark' } = {}, outline: LayerName = 'profile') {
  const { top = 'light', front = 'mid', side = 'dark' } = tones
  // isometric/planometric: y recedes up-left, so the x=min side faces the viewer;
  // oblique: y recedes up-right, so the x=max side does
  const sx = P.kind === 'oblique' ? x + w : x
  face(L, P, [[sx, y, z], [sx, y + d, z], [sx, y + d, z + h], [sx, y, z + h]], side, outline)
  face(L, P, [[x, y, z], [x + w, y, z], [x + w, y, z + h], [x, y, z + h]], front, outline)
  face(L, P, [[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]], top, outline)
}

/** Add 3D points to the bounds through the projector. */
export function addAxo(B: Bounds, P: Axo, ...pts: P3[]) {
  B.add(...pts.map(P))
}

/**
 * A thin wall following a plan curve, from z0 to z0+h, painted segment by
 * segment far-to-near with only its real edges stroked: top, bottom, ends and
 * the vertical silhouettes where the curve turns away from the viewer.
 */
export function axoWall(L: Layers, P: Axo, plan: Array<[number, number]>, z0: number, h: number, tone: 'light' | 'mid' | 'dark' = 'mid', layer: LayerName = 'profile') {
  // viewing direction in plan: iso/planometric look towards +x +y; oblique towards +y
  const view: [number, number] = P.kind === 'oblique' ? [0, 1] : [1, 1]
  const segs = plan.slice(1).map((b, i) => {
    const a = plan[i]
    const nx = b[1] - a[1]
    const ny = -(b[0] - a[0])
    return { a, b, i, facing: Math.sign(nx * view[0] + ny * view[1]), depth: ((a[0] + b[0]) * view[0] + (a[1] + b[1]) * view[1]) / 2 }
  })
  const fill = tone === 'light' ? '' : `<path d="__D__" fill="url(#${tone === 'mid' ? 'h-tone' : 'h-tone-d'})" stroke="none"/>`
  for (const s of [...segs].sort((p, q) => q.depth - p.depth)) {
    const quad = path([P([s.a[0], s.a[1], z0]), P([s.b[0], s.b[1], z0]), P([s.b[0], s.b[1], z0 + h]), P([s.a[0], s.a[1], z0 + h])], true)
    L[layer].push(`<path d="${quad}" style="fill: var(--_paper); stroke: var(--_paper); stroke-width: 0.6"/>`)
    if (fill) L[layer].push(fill.replace('__D__', quad))
    L[layer].push(line(P([s.a[0], s.a[1], z0 + h]), P([s.b[0], s.b[1], z0 + h])), line(P([s.a[0], s.a[1], z0]), P([s.b[0], s.b[1], z0])))
    const prev = segs[s.i - 1]
    const verts: Array<[number, number]> = []
    if (s.i === 0) verts.push(s.a)
    if (s.i === segs.length - 1) verts.push(s.b)
    if (prev && prev.facing !== s.facing) verts.push(s.a)
    for (const v of verts) L[layer].push(line(P([v[0], v[1], z0]), P([v[0], v[1], z0 + h])))
  }
}

// ---------------------------------------------------------------------------
// Shaded solids: curved surfaces and mixed objects painted far-to-near
// ---------------------------------------------------------------------------

/** One paintable piece; larger key = farther from the viewer. */
export type Item = { key: number; svg: string[] }
export type Tone = 'light' | 'mid' | 'dark'

/** Depth key for a model point: viewer above (normal isometric) or below (worm's-eye). */
export const depthKey = (view: 'above' | 'below') => (p: P3) => (view === 'above' ? p[0] + p[1] - p[2] : p[0] + p[1] + p[2])

/** Worm's-eye isometric: plan seen from below, z up the page (after Choisy). */
export function wormsEye(origin: Pt, s = 1) {
  const c = Math.cos(Math.PI / 6) * s
  const k = Math.sin(Math.PI / 6) * s
  return Object.assign((p: P3): Pt => [origin[0] + p[0] * c - p[1] * c, origin[1] + p[0] * k + p[1] * k - p[2] * s], { kind: 'isometric' as const })
}

const sub = (a: P3, b: P3): P3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
const cross = (a: P3, b: P3): P3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]

/** Tone from the angle between a face and the light (two-sided). */
export function toneOf(pts: P3[], light: P3 = [-0.45, -0.25, 0.86]): Tone {
  const n = cross(sub(pts[2], pts[0]), sub(pts[pts.length - 1], pts[1]))
  const len = Math.hypot(...n) || 1
  const d = Math.abs((n[0] * light[0] + n[1] * light[1] + n[2] * light[2]) / len)
  return d > 0.72 ? 'light' : d > 0.4 ? 'mid' : 'dark'
}

/**
 * A planar polygon as a paintable item. `edges` lists which sides to stroke
 * (index i strokes pts[i] → pts[i+1]); default all. Seams between adjacent
 * pieces are hidden by a hairline paper stroke.
 */
export function polyItem(P: (p: P3) => Pt, pts: P3[], key: number, tone: Tone | 'cut' = 'light', edges?: number[]): Item {
  const scr = pts.map(P)
  const d = path(scr, true)
  const svg = [`<path d="${d}" style="fill: var(--_paper); stroke: var(--_paper); stroke-width: 0.8"/>`]
  if (tone === 'cut') svg.push(`<path d="${d}" fill="url(#h-stone)" stroke="none"/>`)
  else if (tone !== 'light') svg.push(`<path d="${d}" fill="url(#${tone === 'mid' ? 'h-tone' : 'h-tone-d'})" stroke="none"/>`)
  const which = edges ?? pts.map((_, i) => i)
  if (which.length === pts.length) svg.push(el(d))
  else for (const i of which) svg.push(el(path([scr[i], scr[(i + 1) % scr.length]])))
  return { key, svg }
}

/** A line segment (rib, strut, rail) as a paintable item. */
export function lineItem(P: (p: P3) => Pt, a: P3, b: P3, key: number, attrs = ''): Item {
  return { key, svg: [el(path([P(a), P(b)]), attrs)] }
}

/**
 * Parametric surface f(u, v), u,v in [0,1], cut into nu × nv quads, each
 * shaded by its own normal. Grid lines listed in uLines / vLines (by index)
 * and the surface boundary are stroked, so ribs and edges hide correctly.
 */
export function surfaceItems(P: (p: P3) => Pt, f: (u: number, v: number) => P3, nu: number, nv: number, key: (p: P3) => number,
  opts: { uLines?: number[]; vLines?: number[]; boundary?: boolean; tone?: (pts: P3[]) => Tone } = {}): Item[] {
  const { uLines = [], vLines = [], boundary = true, tone = (pts: P3[]) => toneOf(pts) } = opts
  const items: Item[] = []
  for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) {
    const q: P3[] = [f(i / nu, j / nv), f((i + 1) / nu, j / nv), f((i + 1) / nu, (j + 1) / nv), f(i / nu, (j + 1) / nv)]
    const edges: number[] = []
    if (vLines.includes(j) || (boundary && j === 0)) edges.push(0)
    if (uLines.includes(i + 1) || (boundary && i === nu - 1)) edges.push(1)
    if (vLines.includes(j + 1) || (boundary && j === nv - 1)) edges.push(2)
    if (uLines.includes(i) || (boundary && i === 0)) edges.push(3)
    const c: P3 = [(q[0][0] + q[2][0]) / 2, (q[0][1] + q[2][1]) / 2, (q[0][2] + q[2][2]) / 2]
    items.push(polyItem(P, q, key(c), tone(q), edges))
  }
  return items
}

/** Paint items far-to-near into one layer. */
export function paint(L: Layers, items: Item[], layer: LayerName = 'profile') {
  for (const it of [...items].sort((a, b) => b.key - a.key)) L[layer].push(...it.svg)
}
