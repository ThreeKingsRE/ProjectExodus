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
