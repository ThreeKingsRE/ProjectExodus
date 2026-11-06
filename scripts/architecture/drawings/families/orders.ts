/**
 * The five classical orders, drawn half-section / half-elevation from one
 * proportional model. Module M = lower radius of the shaft (D = 2 M).
 *
 * Proportions follow Vignola's canon, simplified for teaching:
 *   column height (base + shaft + capital): Tuscan 7 D, Doric 8 D,
 *   Ionic 9 D, Corinthian and Composite 10 D; entablature = 1/4 column.
 */
import {
  type Pt, type SheetSpec, f, path, el, arc, vDim, hDim, breakLine, leftLabels, text, AREA,
} from '../sheet'

const VIGNOLA =
  'Proportions after Giacomo Barozzi da Vignola, Regola delli cinque ordini d’architettura (Rome, 1562). Simplified; drawn by Project Exodus.'

type CapitalKind = 'tuscan' | 'doric' | 'ionic' | 'corinthian' | 'composite'

interface OrderSpec {
  id: string
  name: string
  sheetNo: string
  diameters: number // column height in D
  base: 'tuscan' | 'attic'
  capital: CapitalKind
  capH: number // capital height in M
  flutes: 0 | 20 | 24
  topR: number // upper shaft radius in M
  ent: { architrave: number; frieze: number; cornice: number } // in M
  description: string
}

export const ORDERS: OrderSpec[] = [
  {
    id: 'tuscan-column', name: 'Tuscan Order', sheetNo: 'COL-01', diameters: 7, base: 'tuscan', capital: 'tuscan',
    capH: 1, flutes: 0, topR: 0.8, ent: { architrave: 1, frieze: 7 / 6, cornice: 4 / 3 },
    description: 'Half section and half elevation of a plain, unfluted column with a simple moulded base and capital, carrying a plain entablature.',
  },
  {
    id: 'doric-column', name: 'Doric Order', sheetNo: 'COL-02', diameters: 8, base: 'attic', capital: 'doric',
    capH: 1, flutes: 20, topR: 5 / 6, ent: { architrave: 1, frieze: 1.5, cornice: 1.5 },
    description: 'Half section and half elevation of a fluted column with a cushion capital and annulets, carrying an entablature with triglyphs and metopes.',
  },
  {
    id: 'ionic-column', name: 'Ionic Order', sheetNo: 'COL-03', diameters: 9, base: 'attic', capital: 'ionic',
    capH: 2 / 3, flutes: 24, topR: 5 / 6, ent: { architrave: 1.25, frieze: 1.5, cornice: 1.75 },
    description: 'Half section and half elevation of a fluted column with a scroll (volute) capital, carrying an entablature with a three-band architrave and dentils.',
  },
  {
    id: 'corinthian-column', name: 'Corinthian Order', sheetNo: 'COL-04', diameters: 10, base: 'attic', capital: 'corinthian',
    capH: 7 / 3, flutes: 24, topR: 5 / 6, ent: { architrave: 1.5, frieze: 1.5, cornice: 2 },
    description: 'Half section and half elevation of a slender fluted column with a tall bell capital wrapped in two rows of acanthus leaves, carrying an entablature with dentils and modillions.',
  },
  {
    id: 'composite-column', name: 'Composite Order', sheetNo: 'COL-05', diameters: 10, base: 'attic', capital: 'composite',
    capH: 7 / 3, flutes: 24, topR: 5 / 6, ent: { architrave: 1.5, frieze: 1.5, cornice: 2 },
    description: 'Half section and half elevation of a slender fluted column whose capital combines two rows of acanthus leaves with large corner scrolls, carrying an entablature with dentils and modillions.',
  },
]

const E_HALF = 3 // entablature half-width shown, in M

/** 16.333 -> '16 1/3' (drafting-style fractions; the font has no glyphs for ⅓ etc.) */
function mods(n: number): string {
  const whole = Math.floor(n + 1e-6)
  const rest = n - whole
  const fracs: Array<[number, string]> = [[1 / 6, '1/6'], [1 / 4, '1/4'], [1 / 3, '1/3'], [1 / 2, '1/2'], [2 / 3, '2/3'], [3 / 4, '3/4'], [5 / 6, '5/6']]
  const hit = fracs.find(([v]) => Math.abs(rest - v) < 0.01)
  if (rest < 0.01) return `${whole}`
  if (!hit) return n.toFixed(2)
  return whole ? `${whole} ${hit[1]}` : hit[1]
}

export function buildOrder(o: OrderSpec): SheetSpec {
  const colH = o.diameters * 2 // in M
  const entH = o.ent.architrave + o.ent.frieze + o.ent.cornice
  const total = colH + entH
  const M = Math.min(28, 548 / total)
  const AX = 300 // column centreline
  const GY = 600 // ground line
  const X = (m: number) => AX + m * M
  const Y = (m: number) => GY - m * M

  const capBottom = colH - o.capH
  const shaftBottom = o.base === 'tuscan' ? 1.15 : 1.1
  const shaftTop = capBottom - 0.2 // astragal straddles the top of the shaft

  /** Shaft radius with entasis: straight for the lower third, then curving in. */
  const shaftR = (t: number) =>
    t < 1 / 3 ? 1 : 1 - (1 - o.topR) * Math.sin(((t - 1 / 3) / (2 / 3)) * (Math.PI / 2))
  const rAt = (h: number) => shaftR(Math.min(1, Math.max(0, (h - shaftBottom) / (shaftTop - shaftBottom))))
  const ru = o.topR

  // ---- right-half profile, bottom to top, in modules [radius, height] ----
  const prof: Pt[] = [[0, 0]]
  if (o.base === 'tuscan') {
    prof.push([1.375, 0], [1.375, 0.5])
    prof.push(...arc(1.175, 0.7, 0.2, 0.2, -Math.PI / 2, Math.PI / 2))
    prof.push([1.1, 0.9], [1.1, 1.0])
    prof.push(...arc(1.1, 1.15, 0.1, 0.15, -Math.PI / 2, -Math.PI, 6))
  } else {
    prof.push([1.375, 0], [1.375, 1 / 3]) // plinth
    prof.push(...arc(1.25, 0.458, 0.125, 0.125, -Math.PI / 2, Math.PI / 2)) // lower torus
    prof.push([1.15, 0.583], [1.15, 0.62]) // fillet
    prof.push(...arc(1.15, 0.72, 0.13, 0.1, -Math.PI / 2, -1.5 * Math.PI, 10)) // scotia (concave)
    prof.push([1.13, 0.82], [1.13, 0.85]) // fillet
    prof.push(...arc(1.06, 0.925, 0.075, 0.075, -Math.PI / 2, Math.PI / 2, 8)) // upper torus
    prof.push([1.1, 1.0])
    prof.push(...arc(1.1, 1.1, 0.1, 0.1, -Math.PI / 2, -Math.PI, 6)) // apophyge
  }
  for (let i = 0; i <= 32; i++) {
    const t = i / 32
    prof.push([shaftR(t), shaftBottom + (shaftTop - shaftBottom) * t])
  }
  // astragal (belongs to the shaft) at the top
  prof.push([ru + 0.06, shaftTop + 0.03])
  prof.push(...arc(ru + 0.06, capBottom - 0.075, 0.09, 0.09, -Math.PI / 2, Math.PI / 2, 8))
  const C = capBottom
  const capLabels: { text: string; h: number; r: number }[] = []
  /** Convex quarter-round (ovolo/echinus) from (x0, h0) out and up to (x1, h1). */
  const ovolo = (x0: number, h0: number, x1: number, h1: number, steps = 10): Pt[] =>
    Array.from({ length: steps + 1 }, (_, i) => {
      const t = (i / steps) * (Math.PI / 2)
      return [x0 + (x1 - x0) * Math.sin(t), h1 - (h1 - h0) * Math.cos(t)] as Pt
    })
  switch (o.capital) {
    case 'tuscan':
      prof.push([ru, C + 0.05], [ru, C + 0.33], [ru + 0.06, C + 0.33], [ru + 0.06, C + 0.4])
      prof.push(...ovolo(ru + 0.06, C + 0.4, 1.2, C + 0.67))
      prof.push([1.25, C + 0.67], [1.25, C + 1])
      capLabels.push({ text: 'ABACUS', h: C + 0.83, r: 1.25 }, { text: 'ECHINUS', h: C + 0.55, r: 1.05 }, { text: 'NECKING', h: C + 0.2, r: ru })
      break
    case 'doric':
      prof.push([ru, C + 0.05], [ru, C + 0.3])
      for (let k = 0; k < 3; k++) prof.push([ru + 0.04 + k * 0.03, C + 0.3 + k * 0.035], [ru + 0.04 + k * 0.03, C + 0.33 + k * 0.035])
      prof.push(...ovolo(ru + 0.1, C + 0.41, 1.2, C + 0.67))
      prof.push([1.25, C + 0.67], [1.25, C + 0.9], [1.32, C + 0.9], [1.32, C + 1])
      capLabels.push({ text: 'ABACUS', h: C + 0.8, r: 1.25 }, { text: 'ECHINUS', h: C + 0.55, r: 1.1 }, { text: 'ANNULETS', h: C + 0.36, r: ru + 0.07 }, { text: 'NECKING', h: C + 0.17, r: ru })
      break
    case 'ionic':
      prof.push([ru, C + 0.02], ...ovolo(ru, C + 0.02, 1.1, C + 0.33))
      prof.push([1.1, C + 0.33], [1.18, C + 0.5], [1.25, C + 0.5], [1.25, C + 2 / 3])
      capLabels.push({ text: 'ABACUS', h: C + 0.58, r: 1.25 }, { text: 'ECHINUS', h: C + 0.2, r: 1.0 }, { text: 'VOLUTE', h: C - 0.1, r: 1.6 })
      break
    case 'corinthian':
    case 'composite': {
      // bell with leaf tips projecting; abacus with concave sides
      const bell = (u: number) => ru + (1.0 - ru) * Math.pow(u, 1.6)
      const leafTip = (hc: number, reach: number) => [
        [bell((hc - 0.25) / 2), C + hc - 0.25] as Pt,
        [reach, C + hc - 0.05] as Pt,
        [reach - 0.08, C + hc + 0.05] as Pt,
        [bell((hc + 0.05) / 2), C + hc + 0.05] as Pt,
      ]
      prof.push([ru, C + 0.05])
      prof.push(...leafTip(0.75, 1.12))
      prof.push(...leafTip(1.5, 1.22))
      if (o.capital === 'composite') {
        prof.push([1.0, C + 1.6], ...ovolo(1.0, C + 1.6, 1.15, C + 1.85))
        prof.push([1.05, C + 1.85], [1.05, C + 2.0])
      } else {
        prof.push([1.05, C + 1.6], [1.0, C + 2.0])
      }
      prof.push([1.12, C + 2.0], [1.12, C + 2.12], [1.42, C + 2.12], [1.42, C + 7 / 3])
      capLabels.push(
        { text: 'ABACUS', h: C + 2.22, r: 1.42 },
        { text: o.capital === 'composite' ? 'ECHINUS' : 'CAULICOLI', h: C + 1.8, r: 1.05 },
        { text: 'UPPER LEAVES', h: C + 1.3, r: 1.15 },
        { text: 'LOWER LEAVES', h: C + 0.55, r: 1.05 },
      )
      break
    }
  }
  prof.push([0, colH])

  const toPx = (pts: Pt[], mirror = false): Pt[] => pts.map(([r, h]) => [X(mirror ? -r : r), Y(h)])
  const right = toPx(prof)
  const left = toPx([...prof].reverse(), true)
  const outlineD = path([...right, ...left], true)

  const layers: SheetSpec['layers'] = { hatch: [], shading: [], fine: [], profile: [], cut: [], center: [], dims: [], labels: [], notes: [] }
  const defs = `<clipPath id="cl-${o.id}"><rect x="0" y="0" width="${AX}" height="800"/></clipPath>
    <clipPath id="cr-${o.id}"><rect x="${AX}" y="0" width="400" height="800"/></clipPath>
    <clipPath id="cc-${o.id}"><path d="${outlineD}"/></clipPath>`

  // Section (left half): hatch + heavy cut outline. Elevation (right): profile.
  layers.hatch!.push(`<g clip-path="url(#cl-${o.id})"><path d="${outlineD}" fill="url(#h-stone)" stroke="none"/></g>`)
  layers.cut!.push(`<path d="${outlineD}" clip-path="url(#cl-${o.id})"/>`)
  layers.profile!.push(`<path d="${outlineD}" clip-path="url(#cr-${o.id})"/>`)

  // Horizontal joints of base/capital mouldings on the elevation half
  const joints = o.base === 'tuscan' ? [0.5, 0.9, 1.0] : [1 / 3, 0.583, 0.62, 0.82, 0.85, 1.0]
  for (const h of joints) {
    const r = prof.reduce((best, [pr, ph]) => (Math.abs(ph - h) < Math.abs(best[1] - h) ? [pr, ph] : best), [0, -9])[0] as number
    layers.fine!.push(el(`M${f(AX)} ${f(Y(h))}H${f(X(Math.max(r, 1)))}`))
  }
  layers.fine!.push(el(`M${f(AX)} ${f(Y(shaftTop + 0.03))}H${f(X(ru + 0.06))}M${f(AX)} ${f(Y(C))}H${f(X(ru + 0.06))}`))

  // Shaft treatment on the elevation half
  const shaftLine = (frac: number, h0: number, h1: number) => {
    const pts: Pt[] = []
    for (let i = 0; i <= 24; i++) {
      const h = h0 + ((h1 - h0) * i) / 24
      pts.push([X(rAt(h) * frac), Y(h)])
    }
    return pts
  }
  if (o.flutes === 0) {
    for (let k = 5; k <= 9; k++) layers.shading!.push(el(path(shaftLine(Math.sin((k / 10) * (Math.PI / 2)), shaftBottom + 0.15, shaftTop - 0.15))))
  } else {
    const n = o.flutes
    const step = (2 * Math.PI) / n
    const h0 = shaftBottom + 0.2
    const h1 = shaftTop - 0.2
    for (let a = step / 2; a < Math.PI / 2; a += step) {
      const edges = o.flutes === 24 ? [a - step * 0.12, a + step * 0.12] : [a] // fillets vs sharp arrises
      for (const e of edges) if (e > 0 && e < Math.PI / 2) layers.fine!.push(el(path(shaftLine(Math.sin(e), h0, h1))))
      // flute shadow: a hairline just inside each flute
      const mid = a + step / 2
      if (mid < Math.PI / 2) layers.shading!.push(el(path(shaftLine(Math.sin(mid - step * 0.18), h0 + 0.1, h1 - 0.1))))
    }
    // rounded flute ends
    layers.fine!.push(el(`M${f(AX)} ${f(Y(h0))}H${f(X(rAt(h0)))}`, 'stroke-dasharray="2 3"'))
    layers.fine!.push(el(`M${f(AX)} ${f(Y(h1))}H${f(X(rAt(h1)))}`, 'stroke-dasharray="2 3"'))
  }

  // Capital ornament on the elevation half
  if (o.capital === 'ionic' || o.capital === 'composite') {
    const vy = o.capital === 'ionic' ? C + 0.1 : C + 1.75
    const vx = o.capital === 'ionic' ? 1.32 : 1.3
    const R = o.capital === 'ionic' ? 0.48 : 0.42
    const spiral = (scale: number) => {
      const pts: Pt[] = []
      const turns = 3
      for (let i = 0; i <= 180; i++) {
        const th = (i / 180) * turns * 2 * Math.PI
        const r = R * scale * Math.pow(0.11 / R, i / 180)
        pts.push([X(vx + r * Math.sin(th)), Y(vy + r * Math.cos(th))])
      }
      return pts
    }
    layers.profile!.push(el(path(spiral(1))))
    layers.fine!.push(el(path(spiral(0.82))))
    layers.fine!.push(`<circle cx="${f(X(vx))}" cy="${f(Y(vy))}" r="${f(0.08 * M)}"/>`)
    // canal joining the volute to the axis
    layers.profile!.push(el(`M${f(AX)} ${f(Y(vy + R))}H${f(X(vx))}`))
    // egg-and-dart on the echinus
    const ey = o.capital === 'ionic' ? C + 0.2 : C + 1.72
    for (let k = 0; k < 3; k++) {
      const cx = X(0.15 + k * 0.32)
      layers.fine!.push(`<ellipse cx="${f(cx)}" cy="${f(Y(ey))}" rx="${f(0.11 * M)}" ry="${f(0.13 * M)}"/>`)
      layers.fine!.push(el(`M${f(cx + 0.16 * M)} ${f(Y(ey + 0.12))}L${f(cx + 0.16 * M)} ${f(Y(ey - 0.12))}`))
    }
  }
  if (o.capital === 'corinthian' || o.capital === 'composite') {
    // Bell (kalathos) behind the leaves
    const bellPts: Pt[] = []
    for (let i = 0; i <= 16; i++) {
      const u = i / 16
      bellPts.push([X(ru + (1.0 - ru) * Math.pow(u, 1.6)), Y(C + 2.0 * u)])
    }
    layers.fine!.push(el(path(bellPts)))

    // Acanthus leaf: rounded lobes up each side, tip turned over toward the
    // viewer, midrib. Filled with paper so it hides the bell behind it.
    const leaf = (cx: number, h0: number, h1: number, w: number) => {
      const lobes = 3
      const side = (dir: 1 | -1) => {
        let d = ''
        for (let i = 0; i < lobes; i++) {
          const u0 = i / lobes
          const u1 = (i + 1) / lobes
          const wAt = (u: number) => w * (0.55 + 0.45 * Math.sin(Math.PI * (0.2 + 0.6 * u)))
          const ha = h0 + (h1 - h0) * 0.8 * u0
          const hb = h0 + (h1 - h0) * 0.8 * u1
          const notch = (u: number) => X(cx + dir * wAt(u) * 0.78)
          const bulge = X(cx + dir * wAt((u0 + u1) / 2) * 1.12)
          d += `Q${f(bulge)} ${f(Y((ha + hb) / 2))} ${f(notch(u1))} ${f(Y(hb))}`
        }
        return d
      }
      const top = h0 + (h1 - h0) * 0.8
      const outline =
        `M${f(X(cx))} ${f(Y(h0))}` +
        `L${f(X(cx + w * 0.45))} ${f(Y(h0))}` +
        side(1).replace(/^Q/, 'Q') +
        `Q${f(X(cx + w * 0.7))} ${f(Y(h1))} ${f(X(cx))} ${f(Y(h1))}` +
        `Q${f(X(cx - w * 0.7))} ${f(Y(h1))} ${f(X(cx - w * 0.78 * 0.55 - w * 0.2))} ${f(Y(top))}` +
        `L${f(X(cx - w * 0.45))} ${f(Y(h0))}Z`
      // turned-over tip: a small drooping lobe below the crown
      const tip = `M${f(X(cx - w * 0.35))} ${f(Y(top + 0.04))}Q${f(X(cx))} ${f(Y(top - 0.22))} ${f(X(cx + w * 0.35))} ${f(Y(top + 0.04))}`
      return [
        `<path d="${outline}" style="fill: var(--_paper)" clip-path="url(#cr-${o.id})"/>`,
        `<path d="${tip}" clip-path="url(#cr-${o.id})"/><path d="M${f(X(cx))} ${f(Y(h0))}V${f(Y(top - 0.1))}" clip-path="url(#cr-${o.id})"/>`,
      ]
    }
    // back row (upper leaves) first so the front row overlaps it
    const rows: Array<[number, number, number, number]> = [
      // [centre, bottom, top, half width] in M
      [0.45, C + 0.6, C + 1.55, 0.32], [1.0, C + 0.6, C + 1.5, 0.2],
      [0, C + 0.05, C + 0.85, 0.34], [0.78, C + 0.05, C + 0.8, 0.28],
    ]
    for (const [cx, b, t, w] of rows) {
      const [outline, detail] = leaf(cx, b, t, w)
      layers.profile!.push(outline, detail)
    }
    if (o.capital === 'corinthian') {
      // caulicoli and helices rising to the abacus corners
      layers.fine!.push(el(path([[X(0.55), Y(C + 1.55)], [X(0.9), Y(C + 1.8)], [X(1.22), Y(C + 1.95)]])))
      layers.profile!.push(`<circle cx="${f(X(1.25))}" cy="${f(Y(C + 1.9))}" r="${f(0.12 * M)}"/>`)
      layers.fine!.push(el(path([[X(0.35), Y(C + 1.55)], [X(0.25), Y(C + 1.85)], [X(0.12), Y(C + 1.95)]])))
      layers.fine!.push(`<circle cx="${f(X(0.12))}" cy="${f(Y(C + 2.0))}" r="${f(0.06 * M)}"/>`)
    }
    // fleuron at the centre of the abacus
    layers.fine!.push(`<circle cx="${f(AX)}" cy="${f(Y(C + 2.22))}" r="${f(0.09 * M)}"/>`)
  }
  if (o.capital === 'doric' || o.capital === 'tuscan') {
    layers.fine!.push(el(`M${f(AX)} ${f(Y(C + 0.67))}H${f(X(1.25))}`))
  }

  // ---- Entablature ----
  const e0 = colH
  const eA = e0 + o.ent.architrave
  const eF = eA + o.ent.frieze
  const eC = eF + o.ent.cornice
  const xl = X(-E_HALF)
  const xr = X(E_HALF)
  const band = (h: number, cls: 'profile' | 'fine' = 'profile') => layers[cls]!.push(el(`M${f(xl)} ${f(Y(h))}H${f(xr)}`))
  band(e0)
  band(eA)
  band(eF)
  band(eC)
  layers.profile!.push(breakLine(xl, Y(eC), Y(e0)), breakLine(xr, Y(eC), Y(e0)))

  const cornice = o.ent.cornice
  if (o.capital === 'doric') {
    band(eA - 0.15, 'fine') // taenia
    for (const cx of [-2.5, 0, 2.5]) {
      const x0 = X(cx - 0.5)
      const x1 = X(cx + 0.5)
      const xa = Math.max(x0, xl + 2)
      const xb = Math.min(x1, xr - 2)
      if (xb <= xa) continue
      layers.profile!.push(el(`M${f(xa)} ${f(Y(eA))}V${f(Y(eF - 0.1))}H${f(xb)}V${f(Y(eA))}`))
      for (const g of [-0.25, 0, 0.25]) {
        const gx = X(cx + g)
        if (gx > xa + 2 && gx < xb - 2) layers.fine!.push(el(`M${f(gx - 0.04 * M)} ${f(Y(eA + 0.1))}V${f(Y(eF - 0.3))}M${f(gx + 0.04 * M)} ${f(Y(eA + 0.1))}V${f(Y(eF - 0.3))}`))
      }
      // regula and guttae under the taenia
      layers.fine!.push(el(`M${f(xa)} ${f(Y(eA - 0.15))}H${f(xb)}V${f(Y(eA - 0.22))}H${f(xa)}Z`))
      for (let g = 0; g < 6; g++) {
        const gx = X(cx - 0.42 + g * 0.168)
        if (gx > xa && gx < xb) layers.fine!.push(el(`M${f(gx - 2)} ${f(Y(eA - 0.22))}L${f(gx - 1.5)} ${f(Y(eA - 0.32))}H${f(gx + 1.5)}L${f(gx + 2)} ${f(Y(eA - 0.22))}`))
      }
    }
    band(eF + cornice * 0.15, 'fine')
    band(eF + cornice * 0.55, 'fine')
    band(eF + cornice * 0.75, 'fine')
  } else if (o.capital === 'tuscan') {
    band(eA - 0.15, 'fine')
    band(eF + cornice * 0.3, 'fine')
    band(eF + cornice * 0.75, 'fine')
  } else {
    // three fasciae
    const a = o.ent.architrave
    band(e0 + a * 0.28, 'fine')
    band(e0 + a * 0.6, 'fine')
    band(eA - a * 0.12, 'fine')
    // dentils
    const d0 = eF + cornice * 0.12
    const d1 = eF + cornice * 0.32
    band(d0, 'fine')
    band(d1, 'fine')
    for (let x = -E_HALF + 0.12; x < E_HALF - 0.3; x += 0.36) {
      layers.fine!.push(el(`M${f(X(x))} ${f(Y(d0))}V${f(Y(d1))}H${f(X(x + 0.22))}V${f(Y(d0))}`))
    }
    if (o.capital !== 'ionic') {
      // modillions: scrolled brackets under the corona
      const m0 = eF + cornice * 0.4
      const m1 = eF + cornice * 0.62
      band(m1, 'fine')
      for (let x = -E_HALF + 0.35; x < E_HALF - 0.4; x += 1.1) {
        // front face of the bracket with its scroll below
        layers.fine!.push(el(`M${f(X(x))} ${f(Y(m1))}V${f(Y(m0 + 0.08))}H${f(X(x + 0.36))}V${f(Y(m1))}`))
        layers.fine!.push(`<circle cx="${f(X(x + 0.18))}" cy="${f(Y(m0 + 0.04))}" r="${f(0.07 * M)}"/>`)
      }
    }
    band(eF + cornice * 0.8, 'fine')
  }

  // ---- Centreline, dimensions, labels, notes ----
  layers.center!.push(el(`M${AX} ${f(Y(-0.6))}V${f(Y(eC + 0.6))}`))
  layers.notes!.push(text(AX + 4, Y(eC + 0.45), '℄', 'class="t-accent"'))

  const dx1 = X(E_HALF) + 30
  const dx2 = dx1 + 72
  layers.dims!.push(
    vDim(dx1, Y(0), Y(1), '1 M'),
    vDim(dx1, Y(1), Y(C), `${mods(C - 1)} M`),
    vDim(dx1, Y(C), Y(colH), `${mods(o.capH)} M`),
    vDim(dx1, Y(e0), Y(eC), `${mods(entH)} M`),
    vDim(dx2, Y(0), Y(colH), `${colH} M = ${o.diameters} D`),
    hDim(Y(0) + 16, X(-1), X(1), 'D = 2 M'),
  )

  const labelItems = [
    { text: 'CORNICE', at: [xl, Y(eF + cornice / 2)] as Pt },
    { text: 'FRIEZE', at: [xl, Y(eA + o.ent.frieze / 2)] as Pt },
    { text: 'ARCHITRAVE', at: [xl, Y(e0 + o.ent.architrave / 2)] as Pt },
    ...capLabels.map((c) => ({ text: c.text, at: [X(-c.r), Y(c.h)] as Pt })),
    { text: 'SHAFT', at: [X(-rAt((shaftBottom + shaftTop) / 2)), Y((shaftBottom + shaftTop) / 2)] as Pt },
    ...(o.base === 'tuscan'
      ? [{ text: 'TORUS', at: [X(-1.375), Y(0.7)] as Pt }, { text: 'PLINTH', at: [X(-1.375), Y(0.25)] as Pt }]
      : [
          { text: 'UPPER TORUS', at: [X(-1.13), Y(0.925)] as Pt },
          { text: 'SCOTIA', at: [X(-1.05), Y(0.72)] as Pt },
          { text: 'LOWER TORUS', at: [X(-1.375), Y(0.458)] as Pt },
          { text: 'PLINTH', at: [X(-1.375), Y(0.17)] as Pt },
        ]),
  ]
  layers.labels!.push(...leftLabels(labelItems, AREA.x0 + 10, xl - 14))

  layers.notes!.push(
    text(AX - 10, Y(0) + 44, 'HALF SECTION', 'text-anchor="end" class="t-sub"'),
    text(AX + 10, Y(0) + 44, 'HALF ELEVATION', 'class="t-sub"'),
  )

  const volR = o.capital === 'ionic' || o.capital === 'composite' ? 1.85 : 1.45
  return {
    id: o.id,
    title: o.name,
    subtitle: `Column and entablature · ${o.diameters} diameters`,
    view: 'HALF SECTION · HALF ELEVATION',
    sheetNo: o.sheetNo,
    source: VIGNOLA,
    scale: { unitPx: M, unitName: 'modules', count: 4 },
    defs,
    layers,
    bounds: [X(-Math.max(E_HALF, volR)) - 6, Y(eC) - 4, X(Math.max(E_HALF, volR)) + 6, Y(0) + 4],
    description: o.description,
  }
}
