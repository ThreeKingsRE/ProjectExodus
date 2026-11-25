/**
 * Capitals of the five orders: the profile (shared by the whole-order view and the
 * enlarged capital detail) and the carved ornament drawn on the elevation half.
 * Heights `h` are in modules (M) measured up from the underside of the capital.
 */
import { type Pt, f, path, el, breakLine } from '../sheet'

export type CapitalKind = 'tuscan' | 'doric' | 'ionic' | 'corinthian' | 'composite'

export interface CapLabel { text: string; h: number; r: number }

/** Where things are on the page: X maps a radius (in M) to px, Y maps a height above the capital's underside. */
export interface Frame { X: (r: number) => number; Y: (h: number) => number; M: number }

/** Convex quarter-round (ovolo/echinus) from (x0, h0) out and up to (x1, h1). */
const ovolo = (x0: number, h0: number, x1: number, h1: number, steps = 10): Pt[] =>
  Array.from({ length: steps + 1 }, (_, i) => {
    const t = (i / steps) * (Math.PI / 2)
    return [x0 + (x1 - x0) * Math.sin(t), h1 - (h1 - h0) * Math.cos(t)] as Pt
  })

export const capitalHeight: Record<CapitalKind, number> = { tuscan: 1, doric: 1, ionic: 2 / 3, corinthian: 7 / 3, composite: 7 / 3 }

/** Right-half profile of a capital, [radius, height above its underside], starting at the neck. `ru` = upper shaft radius. */
export function capitalProfile(kind: CapitalKind, ru: number): { pts: Pt[]; labels: CapLabel[] } {
  const pts: Pt[] = []
  const labels: CapLabel[] = []
  const C = 0
  switch (kind) {
    case 'tuscan':
      pts.push([ru, C + 0.05], [ru, C + 0.33], [ru + 0.06, C + 0.33], [ru + 0.06, C + 0.4])
      pts.push(...ovolo(ru + 0.06, C + 0.4, 1.2, C + 0.67))
      pts.push([1.25, C + 0.67], [1.25, C + 1])
      labels.push({ text: 'ABACUS', h: C + 0.83, r: 1.25 }, { text: 'ECHINUS', h: C + 0.55, r: 1.05 }, { text: 'NECKING', h: C + 0.2, r: ru })
      break
    case 'doric':
      pts.push([ru, C + 0.05], [ru, C + 0.3])
      for (let k = 0; k < 3; k++) pts.push([ru + 0.04 + k * 0.03, C + 0.3 + k * 0.035], [ru + 0.04 + k * 0.03, C + 0.33 + k * 0.035])
      pts.push(...ovolo(ru + 0.1, C + 0.41, 1.2, C + 0.67))
      pts.push([1.25, C + 0.67], [1.25, C + 0.9], [1.32, C + 0.9], [1.32, C + 1])
      labels.push({ text: 'ABACUS', h: C + 0.8, r: 1.25 }, { text: 'ECHINUS', h: C + 0.55, r: 1.1 }, { text: 'ANNULETS', h: C + 0.36, r: ru + 0.07 }, { text: 'NECKING', h: C + 0.17, r: ru })
      break
    case 'ionic':
      pts.push([ru, C + 0.02], ...ovolo(ru, C + 0.02, 1.1, C + 0.33))
      pts.push([1.1, C + 0.33], [1.18, C + 0.5], [1.25, C + 0.5], [1.25, C + 2 / 3])
      labels.push({ text: 'ABACUS', h: C + 0.58, r: 1.25 }, { text: 'ECHINUS', h: C + 0.2, r: 1.0 }, { text: 'VOLUTE', h: C - 0.1, r: 1.6 })
      break
    case 'corinthian':
    case 'composite': {
      const bell = (h: number) => ru + (1.0 - ru) * Math.pow(Math.min(1, h / 2), 1.6)
      // the silhouette: the bell, with each row of leaves swelling out to its tips and then folding back under them
      const bump = (h: number, tip: number, reach: number) => {
        const rise = tip - 0.55
        if (h < rise || h > tip + 0.12) return 0
        if (h <= tip) { const t = (h - rise) / (tip - rise); return reach * (1 - Math.pow(1 - t, 2.2)) }
        return reach * (1 - (h - tip) / 0.12)
      }
      pts.push([ru, C + 0.05])
      for (let i = 1; i <= 34; i++) {
        const h = C + 0.05 + (i / 34) * (2.0 - 0.05)
        const r = bell(h) + bump(h, 0.9, 0.2) + bump(h, 1.62, 0.2)
        pts.push([Math.min(r, 1.24), h])
      }
      if (kind === 'composite') {
        pts.push([1.0, C + 1.9], ...ovolo(1.0, C + 1.9, 1.15, C + 1.97))
        pts.push([1.05, C + 1.97], [1.05, C + 2.0])
      }
      pts.push([1.12, C + 2.0], [1.12, C + 2.12], [1.42, C + 2.12], [1.42, C + 7 / 3])
      labels.push(
        { text: 'ABACUS', h: C + 2.22, r: 1.42 },
        { text: kind === 'composite' ? 'ECHINUS' : 'CAULICOLI', h: C + 1.8, r: 1.05 },
        { text: 'UPPER LEAVES', h: C + 1.3, r: 1.15 },
        { text: 'LOWER LEAVES', h: C + 0.55, r: 1.05 },
      )
      break
    }
  }
  return { pts, labels }
}

// ---------------------------------------------------------------------------
// Ornament
// ---------------------------------------------------------------------------

/** Logarithmic spiral (volute / helix) about (vx, vy), R at the outer end, finishing in an eye. */
function spiral(g: Frame, vx: number, vy: number, R: number, scale: number, turns = 2.75, dir: 1 | -1 = 1, n = 52): Pt[] {
  const pts: Pt[] = []
  for (let i = 0; i <= n; i++) {
    const th = (i / n) * turns * 2 * Math.PI
    const r = R * scale * Math.pow(0.1 / R, i / n)
    pts.push([g.X(vx + dir * r * Math.sin(th)), g.Y(vy + r * Math.cos(th))])
  }
  return pts
}

/**
 * One acanthus leaf seen from the front: serrated lobes up each side, a midrib, ribs running
 * to every tooth, and the tip rolled over toward the viewer. Returns the silhouette (filled
 * with paper to hide whatever is behind it) and the detail lines.
 *  cx = centre radius, h0..h1 = base and tip height, w = half-width (all in M).
 */
export function acanthus(g: Frame, cx: number, h0: number, h1: number, w: number, clip: string, lite = false, teeth = 5) {
  const H = h1 - h0
  // half-width of the leaf at height fraction v: swells to full width, then closes toward the tip
  const env = (v: number) => (v < 0.5 ? w * (0.4 + 0.6 * Math.sin((v / 0.5) * (Math.PI / 2))) : w * (1 - 0.62 * Math.pow((v - 0.5) / 0.5, 1.4)))
  const side: Pt[] = [] // right side, bottom to top, [offset, height]
  const tips: Pt[] = []
  side.push([env(0) * 0.9, h0])
  for (let k = 0; k < teeth; k++) {
    const v0 = 0.06 + (0.8 * k) / teeth
    const dv = 0.8 / teeth
    const notch: Pt = [env(v0) * 0.52, h0 + H * v0]
    const tip: Pt = [env(v0 + dv * 0.6) * 1.12, h0 + H * (v0 + dv * 0.8)]
    side.push(notch, tip)
    tips.push(tip)
  }
  const topV = 0.9
  const crown: Pt = [0, h1]
  const shoulder: Pt = [env(topV) * 0.7, h0 + H * topV]

  const P = (o: number, h: number, mirror: 1 | -1): [number, number] => [g.X(cx + mirror * o), g.Y(h)]
  const half = (mirror: 1 | -1) => {
    let d = ''
    let prev = side[0]
    for (let i = 1; i < side.length; i++) {
      const cur = side[i]
      const isTip = i % 2 === 0
      // fingers: a slight outward bulge into each tip, a straight-ish return to the next notch
      const c: Pt = isTip ? [(prev[0] + cur[0]) / 2 + 0.03 * w, (prev[1] + cur[1]) / 2 + 0.02 * H] : [prev[0] + 0.02 * w, prev[1] - (prev[1] - cur[1]) * 0.45 + 0.0]
      const [qx, qy] = P(c[0], c[1], mirror)
      const [x, y] = P(cur[0], cur[1], mirror)
      d += `Q${f(qx)} ${f(qy)} ${f(x)} ${f(y)}`
      prev = cur
    }
    const [sx, sy] = P(shoulder[0], shoulder[1], mirror)
    const [cx2, cy2] = P(shoulder[0] * 0.5, h1 - H * 0.02, mirror)
    const [tx, ty] = P(crown[0], crown[1], mirror)
    d += `L${f(sx)} ${f(sy)}Q${f(cx2)} ${f(cy2)} ${f(tx)} ${f(ty)}`
    return d
  }
  const rightD = half(1)
  const leftD = half(-1)
  const [bx, by] = P(side[0][0], side[0][1], 1)
  const [lbx, lby] = P(side[0][0], side[0][1], -1)
  const poly: string[] = []
  for (const m of [1, -1] as const) {
    const pts: Pt[] = [side[0], ...side.slice(1), shoulder, crown]
    const ordered = m === 1 ? pts : [...pts].reverse()
    for (const [o, h] of ordered) { const [x, y] = P(o, h, m); poly.push(`${poly.length ? 'L' : 'M'}${f(x)} ${f(y)}`) }
  }
  const fill = `<path d="${poly.join('')}Z" style="fill: var(--_paper); stroke: none" clip-path="url(#${clip})"/>`
  const outline = `M${f(bx)} ${f(by)}${rightD}M${f(lbx)} ${f(lby)}${leftD}`

  const detail: string[] = []
  if (lite) return { outline: `<path d="${poly.join('')}Z" style="fill: var(--_paper)" clip-path="url(#${clip})"/>`, detail: `<path d="M${f(g.X(cx))} ${f(g.Y(h0))}L${f(g.X(cx))} ${f(g.Y(h1 - H * 0.12))}" clip-path="url(#${clip})"/>` }
  // midrib
  detail.push(`M${f(g.X(cx))} ${f(g.Y(h0))}L${f(g.X(cx))} ${f(g.Y(h1 - H * 0.12))}`)
  // ribs from the midrib out to each tooth, both sides
  tips.forEach((t, k) => {
    for (const m of [1, -1] as const) {
      const [ex, ey] = P(t[0] * 0.92, t[1] - H * 0.01, m)
      const [sx, sy] = [g.X(cx), g.Y(h0 + H * (0.05 + (0.62 * k) / teeth))]
      const [qx, qy] = [g.X(cx + m * t[0] * 0.45), g.Y(t[1] - H * 0.09)]
      detail.push(`M${f(sx)} ${f(sy)}Q${f(qx)} ${f(qy)} ${f(ex)} ${f(ey)}`)
    }
  })
  // the rolled-over tip: a lobe hanging below the crown with its own rib
  const t0 = h0 + H * 0.84
  detail.push(`M${f(g.X(cx - w * 0.38))} ${f(g.Y(t0 + H * 0.04))}Q${f(g.X(cx))} ${f(g.Y(t0 - H * 0.2))} ${f(g.X(cx + w * 0.38))} ${f(g.Y(t0 + H * 0.04))}`)
  detail.push(`M${f(g.X(cx))} ${f(g.Y(t0 - H * 0.12))}L${f(g.X(cx))} ${f(g.Y(t0 + H * 0.06))}`)
  return { outline: `${fill}<path d="${outline}" clip-path="url(#${clip})"/>`, detail: `<path d="${detail.join('')}" clip-path="url(#${clip})"/>` }
}

interface Layers { fine?: string[]; profile?: string[]; shading?: string[] }

/** Carved ornament on the elevation (right) half. `clip` is the clipPath id of that half. */
/** `lite` draws the same carving with less detail, for the small whole-order view. */
export function capitalOrnament(kind: CapitalKind, L: Layers, g: Frame, ru: number, clip: string, lite = false) {
  const { X, Y, M } = g
  const fine = L.fine!
  const profile = L.profile!
  const dot = (r: number, h: number, rad: number) => `<circle cx="${f(X(r))}" cy="${f(Y(h))}" r="${f(rad * M)}" clip-path="url(#${clip})"/>`

  if (kind === 'ionic' || kind === 'composite') {
    const vy = kind === 'ionic' ? 0.1 : 1.75
    const vx = kind === 'ionic' ? 1.32 : 1.3
    const R = kind === 'ionic' ? 0.48 : 0.42
    profile.push(el(path(spiral(g, vx, vy, R, 1))))
    fine.push(el(path(spiral(g, vx, vy, R, 0.8))))
    fine.push(dot(vx, vy, 0.075))
    // the channel (canal) that carries the scroll across the front of the capital
    for (const dh of [R, R * 0.8]) fine.push(el(`M${f(X(0))} ${f(Y(vy + dh))}H${f(X(vx))}`))
    // egg-and-dart on the echinus
    const ey = kind === 'ionic' ? 0.2 : 1.72
    for (let k = 0; k < 3; k++) {
      const cx = X(0.15 + k * 0.32)
      fine.push(`<ellipse cx="${f(cx)}" cy="${f(Y(ey))}" rx="${f(0.11 * M)}" ry="${f(0.13 * M)}"/>`)
      fine.push(el(`M${f(cx + 0.16 * M)} ${f(Y(ey + 0.12))}L${f(cx + 0.16 * M)} ${f(Y(ey - 0.12))}`))
    }
    if (kind === 'ionic') {
      // cushion (balteus) bands at the sides of the scroll
      fine.push(el(`M${f(X(1.1))} ${f(Y(0.33))}Q${f(X(1.26))} ${f(Y(0.3))} ${f(X(1.3))} ${f(Y(0.2))}`))
    }
  }
  if (kind === 'corinthian' || kind === 'composite') {
    // Bell (kalathos) behind the leaves
    const bellPts: Pt[] = []
    for (let i = 0; i <= 16; i++) {
      const u = i / 16
      bellPts.push([X(ru + (1.0 - ru) * Math.pow(u, 1.6)), Y(2.0 * u)])
    }
    fine.push(el(path(bellPts)))

    // Upper row first so the lower row overlaps it
    const upper: Array<[number, number, number, number]> = [[0.5, 0.7, 1.72, 0.38], [1.02, 0.7, 1.66, 0.26]]
    const lower: Array<[number, number, number, number]> = [[0.8, 0.05, 0.98, 0.34], [0, 0.05, 1.05, 0.42]]
    for (const [cx, b, t, w] of upper) { const l = acanthus(g, cx, b, t, w, clip, lite); profile.push(l.outline, l.detail) }
    if (kind === 'corinthian') {
      // caulicoli: stalks rising between the leaves, each ending in the helix under the abacus
      for (const d of [0, 0.045]) fine.push(el(`M${f(X(0.28 + d))} ${f(Y(1.5))}Q${f(X(0.5 + d))} ${f(Y(1.92))} ${f(X(1.1))} ${f(Y(1.95))}`))
      profile.push(el(path(spiral(g, 1.2, 1.9, 0.26, 1, 2.4))))
      fine.push(el(path(spiral(g, 1.2, 1.9, 0.26, 0.74, 2.4))))
      for (const d of [0, 0.04]) fine.push(el(`M${f(X(0.04 + d))} ${f(Y(1.62))}Q${f(X(0.06 + d))} ${f(Y(1.9))} ${f(X(0.22))} ${f(Y(2.0))}`))
      profile.push(el(path(spiral(g, 0.3, 1.96, 0.16, 1, 2.2))))
    }
    for (const [cx, b, t, w] of lower) { const l = acanthus(g, cx, b, t, w, clip, lite); profile.push(l.outline, l.detail) }
    // flower (fleuron) at the middle of the abacus, with its stem
    fine.push(dot(0, 2.22, 0.09))
    fine.push(el(`M${f(X(0))} ${f(Y(2.13))}V${f(Y(2.0))}`))
    // concave sides of the abacus: the corner "horn" and the centre of each side
    fine.push(el(`M${f(X(1.42))} ${f(Y(2.12))}Q${f(X(1.2))} ${f(Y(2.2))} ${f(X(1.1))} ${f(Y(7 / 3))}`))
  }
  if (kind === 'doric' || kind === 'tuscan') {
    fine.push(el(`M${f(X(0))} ${f(Y(0.67))}H${f(X(1.25))}`))
  }
  void breakLine
}
