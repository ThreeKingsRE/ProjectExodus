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
import { capitalProfile, capitalOrnament, type CapitalKind } from './orders-detail'

const VIGNOLA =
  'Proportions after Giacomo Barozzi da Vignola, Regola delli cinque ordini d’architettura (Rome, 1562). Simplified; drawn by Project Exodus.'

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

const E_HALF = 2.2 // entablature half-width shown on the whole-order strip, in M

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
  const M = Math.min(17, 548 / total)
  const AX = 480 // column centreline (whole order sits at the right; the capital and base are enlarged on the left)
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
  const cp = capitalProfile(o.capital, ru)
  prof.push(...cp.pts.map(([r, h]): Pt => [r, C + h]))
  const capLabels = cp.labels.map((l) => ({ ...l, h: C + l.h }))
  prof.push([0, colH])

  const toPx = (pts: Pt[], mirror = false): Pt[] => pts.map(([r, h]) => [X(mirror ? -r : r), Y(h)])
  const right = toPx(prof)
  const left = toPx([...prof].reverse(), true)
  const outlineD = path([...right, ...left], true)

  const layers: SheetSpec['layers'] = { hatch: [], shading: [], fine: [], profile: [], cut: [], center: [], dims: [], labels: [], notes: [] }
  let defs = `<clipPath id="cl-${o.id}"><rect x="0" y="0" width="${AX}" height="800"/></clipPath>
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

  capitalOrnament(o.capital, layers, { X, Y: (h) => Y(C + h), M }, ru, `cr-${o.id}`, true)

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

  layers.dims!.push(hDim(Y(0) + 16, X(-1), X(1), 'D = 2 M'))
  layers.notes!.push(
    text(AX, Y(0) + 40, `H = ${colH} M = ${o.diameters} D`, 'text-anchor="middle" class="t-sub"'),
    text(AX, Y(0) + 52, 'WHOLE ORDER', 'text-anchor="middle" class="t-small"'),
  )
  // entablature callouts on the right of the strip
  for (const [name, h] of [['CORNICE', eF + cornice / 2], ['FRIEZE', eA + o.ent.frieze / 2], ['ARCHITRAVE', e0 + o.ent.architrave / 2]] as const) {
    layers.labels!.push(
      `${el(`M${f(xr + 2)} ${f(Y(h))}H${f(xr + 8)}`)}<text x="${f(xr + 10)}" y="${f(Y(h) + 3)}" class="t-small">${name}</text>`,
    )
  }

  const detail = detailViews(o, layers)
  defs += detail.defs

  return {
    id: o.id,
    title: o.name,
    subtitle: `Column and entablature · ${o.diameters} diameters`,
    view: 'HALF SECTION · HALF ELEVATION · CAPITAL AND BASE DETAILS',
    sheetNo: o.sheetNo,
    source: VIGNOLA,
    scale: { unitPx: M, unitName: 'modules', count: 4 },
    defs,
    layers,
    bounds: [detail.bounds[0], Math.min(Y(eC), detail.bounds[1]) - 4, X(E_HALF) + 6, Math.max(Y(0) + 4, detail.bounds[3])],
    description: o.description,
  }
}


// ---------------------------------------------------------------------------
// Enlarged views of the capital and the base, drawn on the left of the sheet
// ---------------------------------------------------------------------------

function basePts(kind: 'tuscan' | 'attic'): Pt[] {
  const p: Pt[] = [[0, 0]]
  if (kind === 'tuscan') {
    p.push([1.375, 0], [1.375, 0.5])
    p.push(...arc(1.175, 0.7, 0.2, 0.2, -Math.PI / 2, Math.PI / 2))
    p.push([1.1, 0.9], [1.1, 1.0])
    p.push(...arc(1.1, 1.15, 0.1, 0.15, -Math.PI / 2, -Math.PI, 6))
  } else {
    p.push([1.375, 0], [1.375, 1 / 3])
    p.push(...arc(1.25, 0.458, 0.125, 0.125, -Math.PI / 2, Math.PI / 2))
    p.push([1.15, 0.583], [1.15, 0.62])
    p.push(...arc(1.15, 0.72, 0.13, 0.1, -Math.PI / 2, -1.5 * Math.PI, 10))
    p.push([1.13, 0.82], [1.13, 0.85])
    p.push(...arc(1.06, 0.925, 0.075, 0.075, -Math.PI / 2, Math.PI / 2, 8))
    p.push([1.1, 1.0])
    p.push(...arc(1.1, 1.1, 0.1, 0.1, -Math.PI / 2, -Math.PI, 6))
  }
  return p
}

function detailViews(o: OrderSpec, layers: NonNullable<SheetSpec['layers']>): { defs: string; bounds: [number, number, number, number] } {
  const ru = o.topR
  const kind = o.capital
  const maxR = kind === 'ionic' || kind === 'composite' ? 1.85 : 1.45
  const AXd = 235
  const Md = Math.min(86, 110 / maxR)
  const below = 1.4 // shaft shown under the capital
  const above = 0.7 // architrave shown above it
  const Hb = (below + o.capH + above) * Md
  const top = 52
  const Yd = (h: number) => top + Hb - (h + below) * Md // h = height above the underside of the capital
  const Xd = (r: number) => AXd + r * Md
  const id = o.id
  const clipL = `dl-${id}`
  const clipR = `dr-${id}`

  // ---------------- capital ----------------
  const cp = capitalProfile(kind, ru)
  const prof: Pt[] = [[0, -below], [ru, -below], [ru, -0.2 + 0.03]]
  prof.push([ru + 0.06, -0.17], ...arc(ru + 0.06, -0.075, 0.09, 0.09, -Math.PI / 2, Math.PI / 2, 8))
  prof.push(...cp.pts, [0, o.capH])
  const toPx = (pts: Pt[], mirror = false): Pt[] => pts.map(([r, h]) => [Xd(mirror ? -r : r), Yd(h)])
  const outline = path([...toPx(prof), ...toPx([...prof].reverse(), true)], true)
  const defs = `<clipPath id="${clipL}"><rect x="0" y="0" width="${AXd}" height="800"/></clipPath>
    <clipPath id="${clipR}"><rect x="${AXd}" y="0" width="400" height="800"/></clipPath>`
  layers.hatch!.push(`<g clip-path="url(#${clipL})"><path d="${outline}" fill="url(#h-stone)" stroke="none"/></g>`)
  layers.cut!.push(`<path d="${outline}" clip-path="url(#${clipL})"/>`)
  layers.profile!.push(`<path d="${outline}" clip-path="url(#${clipR})"/>`)
  // joints at the astragal and the underside of the capital
  layers.fine!.push(el(`M${f(AXd)} ${f(Yd(-0.17))}H${f(Xd(ru + 0.06))}M${f(AXd)} ${f(Yd(0))}H${f(Xd(ru + 0.06))}`))

  // fluting (or plain shading) on the shaft, with the rounded flute ends
  const h0 = -below + 0.15
  const h1 = -0.42
  if (o.flutes === 0) {
    for (let k = 5; k <= 9; k++) layers.shading!.push(el(`M${f(Xd(ru * Math.sin((k / 10) * (Math.PI / 2))))} ${f(Yd(h0))}V${f(Yd(h1 + 0.3))}`))
  } else {
    const n = o.flutes
    const step = (2 * Math.PI) / n
    const arris: number[] = []
    for (let a = step / 2; a < Math.PI / 2; a += step) {
      const edges = n === 24 ? [a - step * 0.12, a + step * 0.12] : [a]
      for (const e of edges) if (e > 0 && e < Math.PI / 2) arris.push(e)
    }
    for (const e of arris) layers.fine!.push(el(`M${f(Xd(ru * Math.sin(e)))} ${f(Yd(h0))}V${f(Yd(h1))}`))
    // flute ends: a semicircle between each pair of arrises
    for (let i = 0; i + 1 < arris.length; i += n === 24 ? 2 : 1) {
      const xa = Xd(ru * Math.sin(arris[i]))
      const xb = Xd(ru * Math.sin(arris[i + 1]))
      const cx = (xa + xb) / 2
      const rx = Math.abs(xb - xa) / 2
      if (rx < 1.2) continue
      layers.fine!.push(el(path(arc(cx, Yd(h1), rx, rx * 1.1, Math.PI, 2 * Math.PI, 10))))
    }
  }

  capitalOrnament(kind, layers, { X: Xd, Y: Yd, M: Md }, ru, clipR)

  // architrave fragment above the abacus
  const eh = Yd(o.capH)
  const eTop = Yd(o.capH + above)
  const ew = 1.65
  const archD = path([[Xd(-ew), eh], [Xd(ew), eh], [Xd(ew), eTop], [Xd(-ew), eTop]], true)
  layers.hatch!.push(`<g clip-path="url(#${clipL})"><path d="${archD}" fill="url(#h-stone)" stroke="none"/></g>`)
  layers.cut!.push(`<path d="M${f(Xd(-ew))} ${f(eh)}V${f(eTop)}H${f(AXd)}V${f(eh)}Z"/>`)
  layers.profile!.push(`<path d="M${f(AXd)} ${f(eh)}H${f(Xd(ew))}V${f(eTop)}H${f(AXd)}" />`)
  for (const frac of o.capital === 'doric' || o.capital === 'tuscan' ? [0.7] : [0.3, 0.62]) {
    layers.fine!.push(el(`M${f(AXd)} ${f(eh + (eTop - eh) * frac)}H${f(Xd(ew))}`))
  }
  layers.profile!.push(breakLine(Xd(ew), eh, eTop), breakLine(Xd(-ew), eh, eTop))
  layers.center!.push(el(`M${f(AXd)} ${f(eTop - 10)}V${f(Yd(-below) + 8)}`))

  // callouts (left), dimensions (right)
  const items: { text: string; at: Pt }[] = [
    { text: 'ARCHITRAVE', at: [Xd(-ew), (eh + eTop) / 2] },
    ...cp.labels.map((c) => ({ text: c.text, at: [Xd(-c.r), Yd(c.h)] as Pt })),
    { text: 'ASTRAGAL', at: [Xd(-(ru + 0.12)), Yd(-0.1)] },
    { text: o.flutes ? 'FLUTED SHAFT' : 'SHAFT', at: [Xd(-ru), Yd(-0.9)] },
  ]
  layers.labels!.push(...leftLabels(items, AREA.x0 + 10, Xd(-maxR) - 8))
  const dimX = Xd(maxR) + 14
  layers.dims!.push(vDim(dimX, Yd(0), Yd(o.capH), `${mods(o.capH)} M`, Xd(1.45)))
  layers.notes!.push(
    text(AXd, Yd(-below) + 24, 'CAPITAL · HALF SECTION · HALF ELEVATION', 'text-anchor="middle" class="t-small"'),
  )

  // ---------------- base ----------------
  const Mb = 52
  const bTopH = 1.5
  const bBottom = 592
  const Yb = (h: number) => bBottom - h * Mb
  const Xb = (r: number) => AXd + r * Mb
  const bp = basePts(o.base)
  const shaftTopR = 1
  const bprof: Pt[] = [...bp, [shaftTopR, 1.2], [shaftTopR, bTopH]]
  bprof.push([0, bTopH])
  const bPx = (pts: Pt[], mirror = false): Pt[] => pts.map(([r, h]) => [Xb(mirror ? -r : r), Yb(h)])
  const bOutline = path([...bPx(bprof), ...bPx([...bprof].reverse(), true)], true)
  const bl = `bl-${id}`
  const br = `br-${id}`
  const bdefs = `<clipPath id="${bl}"><rect x="0" y="0" width="${AXd}" height="800"/></clipPath>
    <clipPath id="${br}"><rect x="${AXd}" y="0" width="400" height="800"/></clipPath>`
  layers.hatch!.push(`<g clip-path="url(#${bl})"><path d="${bOutline}" fill="url(#h-stone)" stroke="none"/></g>`)
  layers.cut!.push(`<path d="${bOutline}" clip-path="url(#${bl})"/>`)
  layers.profile!.push(`<path d="${bOutline}" clip-path="url(#${br})"/>`)
  const joints = o.base === 'tuscan' ? [0.5, 0.9, 1.0] : [1 / 3, 0.583, 0.62, 0.82, 0.85, 1.0]
  for (const h of joints) {
    const r = bp.reduce((best, [pr, ph]) => (Math.abs(ph - h) < Math.abs(best[1] - h) ? [pr, ph] : best), [0, -9])[0] as number
    layers.fine!.push(el(`M${f(AXd)} ${f(Yb(h))}H${f(Xb(Math.max(r, 1)))}`))
  }
  layers.profile!.push(breakLine(Xb(1), Yb(bTopH), Yb(1.2), 3))
  const bItems: { text: string; at: Pt }[] = o.base === 'tuscan'
    ? [{ text: 'FILLET', at: [Xb(-1.1), Yb(0.95)] }, { text: 'TORUS', at: [Xb(-1.3), Yb(0.7)] }, { text: 'PLINTH', at: [Xb(-1.375), Yb(0.25)] }]
    : [
        { text: 'APOPHYGE', at: [Xb(-1.1), Yb(1.08)] },
        { text: 'UPPER TORUS', at: [Xb(-1.13), Yb(0.925)] },
        { text: 'SCOTIA', at: [Xb(-1.1), Yb(0.72)] },
        { text: 'LOWER TORUS', at: [Xb(-1.375), Yb(0.458)] },
        { text: 'PLINTH', at: [Xb(-1.375), Yb(0.17)] },
      ]
  layers.labels!.push(...leftLabels(bItems, AREA.x0 + 10, Xb(-1.375) - 8, 13))
  layers.notes!.push(text(AXd, bBottom + 16, 'BASE · HALF SECTION · HALF ELEVATION', 'text-anchor="middle" class="t-small"'))
  layers.center!.push(el(`M${f(AXd)} ${f(Yb(bTopH) - 6)}V${f(bBottom + 6)}`))

  return { defs: defs + bdefs, bounds: [Xd(-maxR) - 6, top - 4, Xd(maxR) + 6, bBottom + 4] }
}
