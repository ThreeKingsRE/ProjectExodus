/**
 * Arch family, drawn in elevation from their compass constructions.
 *
 * Each arch is defined by its intrados (inner curve) in span units: span = 1,
 * origin at the centre of the springing line, y up. The voussoir ring,
 * joints, keystone, imposts, piers and walling are derived from it, and the
 * centres of curvature are shown as construction lines.
 */
import { type Pt, type SheetSpec, f, path, el, vDim, hDim, leftLabels, text, AREA } from '../sheet'

const CONSTRUCTION_SOURCE =
  'Original geometric construction drawn by Project Exodus from the standard compass method for this arch form; no external drawing reproduced.'

type ArchKind = 'round' | 'pointed' | 'horseshoe' | 'ogee' | 'tudor' | 'trefoil'

interface Centre {
  at: Pt
  r: number
}

interface ArchGeometry {
  intrados: Pt[] // left springing -> right springing
  centres: Centre[] // construction centres (left side; mirrored)
  rise: number
}

const arcPts = (c: Pt, r: number, a0: number, a1: number, n = 40): Pt[] =>
  Array.from({ length: n + 1 }, (_, i) => {
    const a = a0 + ((a1 - a0) * i) / n
    return [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)] as Pt
  })

const mirrorHalf = (left: Pt[]): Pt[] => [...left, ...[...left].reverse().slice(1).map(([x, y]) => [-x, y] as Pt)]

function geometry(kind: ArchKind): ArchGeometry {
  const deg = Math.PI / 180
  switch (kind) {
    case 'round':
      return { intrados: arcPts([0, 0], 0.5, Math.PI, 0, 80), centres: [{ at: [0, 0], r: 0.5 }], rise: 0.5 }
    case 'pointed': {
      // equilateral: each side struck from the opposite springing point, radius = span
      const left = arcPts([0.5, 0], 1, Math.PI, Math.PI - 60 * deg, 40)
      return { intrados: mirrorHalf(left), centres: [{ at: [0.5, 0], r: 1 }], rise: Math.sqrt(0.75) }
    }
    case 'horseshoe': {
      // circle carried below its centre: centre raised so the opening at the
      // springing is narrower than the diameter
      const r = 0.6
      const cy = Math.sqrt(r * r - 0.25)
      // from the left springing (below and left of the centre) over the top
      // to the right springing
      const below = Math.atan(cy / 0.5)
      const intrados = arcPts([0, cy], r, Math.PI + below, -below, 100)
      return { intrados, centres: [{ at: [0, cy], r }], rise: cy + r }
    }
    case 'ogee': {
      // two pairs of arcs: convex below, concave above, meeting in a point
      const r = 0.25
      const k = 1.5 // vertical stretch for a taller, more elegant ogee
      const lower = arcPts([-0.25, 0], r, Math.PI, Math.PI / 2, 30).map(([x, y]) => [x, y * k] as Pt)
      const upper = arcPts([-0.25, 0.5], r, (3 * Math.PI) / 2, 2 * Math.PI, 30).map(([x, y]) => [x, y * k] as Pt)
      return {
        intrados: mirrorHalf([...lower, ...upper.slice(1)]),
        centres: [{ at: [-0.25, 0], r }, { at: [-0.25, 0.5 * k], r }],
        rise: 0.5 * k,
      }
    }
    case 'tudor': {
      // four-centred: small haunch arcs, then long flat arcs meeting in a point
      const r1 = 0.25
      const c1: Pt = [-0.25, 0]
      const th = 125 * deg
      const P: Pt = [c1[0] + r1 * Math.cos(th), c1[1] + r1 * Math.sin(th)]
      const r2 = 1.0
      const c2: Pt = [P[0] - r2 * Math.cos(th), P[1] - r2 * Math.sin(th)]
      const phiApex = Math.acos((0 - c2[0]) / r2)
      const lower = arcPts(c1, r1, Math.PI, th, 24)
      const upper = arcPts(c2, r2, th, phiApex, 40)
      const apexY = c2[1] + r2 * Math.sin(phiApex)
      return { intrados: mirrorHalf([...lower, ...upper.slice(1)]), centres: [{ at: c1, r: r1 }, { at: c2, r: r2 }], rise: apexY }
    }
    case 'trefoil': {
      // envelope of three circles: two side lobes on the springing line and a
      // crown lobe above, giving cusps where they meet
      const circles: Centre[] = [
        { at: [-0.25, 0], r: 0.25 },
        { at: [0, 0.3], r: 0.25 },
        { at: [0.25, 0], r: 0.25 },
      ]
      const origin: Pt = [0, 0.12]
      const pts: Pt[] = []
      for (let i = 0; i <= 160; i++) {
        const a = Math.PI - (Math.PI * i) / 160
        const dir: Pt = [Math.cos(a), Math.sin(a)]
        let best = 0
        for (const c of circles) {
          // furthest intersection of the ray with this circle
          const ox = origin[0] - c.at[0]
          const oy = origin[1] - c.at[1]
          const b = ox * dir[0] + oy * dir[1]
          const disc = b * b - (ox * ox + oy * oy - c.r * c.r)
          if (disc >= 0) best = Math.max(best, -b + Math.sqrt(disc))
        }
        pts.push([origin[0] + dir[0] * best, Math.max(0, origin[1] + dir[1] * best)])
      }
      pts[0] = [-0.5, 0]
      pts[pts.length - 1] = [0.5, 0]
      return { intrados: pts, centres: [circles[0], circles[1]], rise: 0.55 }
    }
  }
}

/** Offset a polyline outward (away from the arch centre line) by d. */
function offsetOut(pts: Pt[], d: number, centre: Pt): Pt[] {
  return pts.map((p, i) => {
    const a = pts[Math.max(0, i - 1)]
    const b = pts[Math.min(pts.length - 1, i + 1)]
    let nx = -(b[1] - a[1])
    let ny = b[0] - a[0]
    const len = Math.hypot(nx, ny) || 1
    nx /= len
    ny /= len
    // make the normal point away from the centre
    if ((p[0] - centre[0]) * nx + (p[1] - centre[1]) * ny < 0) {
      nx = -nx
      ny = -ny
    }
    return [p[0] + nx * d, p[1] + ny * d] as Pt
  })
}

/** Keep the part of a polyline at or above y = h, interpolating the cut points. */
function trimAbove(pts: Pt[], h: number): Pt[] {
  const out: Pt[] = []
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i]
    const prev = pts[i - 1]
    if (prev && (prev[1] < h) !== (p[1] < h)) {
      const t = (h - prev[1]) / (p[1] - prev[1])
      out.push([prev[0] + (p[0] - prev[0]) * t, h])
    }
    if (p[1] >= h) out.push(p)
  }
  return out
}

/** Points at equal arc-length fractions along a polyline. */
function atFractions(pts: Pt[], fracs: number[]): Array<{ p: Pt; i: number }> {
  const cum = [0]
  for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]))
  const total = cum[cum.length - 1]
  return fracs.map((fr) => {
    const target = fr * total
    let i = cum.findIndex((c) => c >= target)
    if (i <= 0) i = 1
    const t = (target - cum[i - 1]) / (cum[i] - cum[i - 1] || 1)
    const p: Pt = [pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * t, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * t]
    return { p, i }
  })
}

interface ArchSpec {
  id: string
  name: string
  kind: ArchKind
  sheetNo: string
  subtitle: string
  description: string
  highlight?: 'keystone' | 'voussoir'
}

export const ARCHES: ArchSpec[] = [
  { id: 'round-arch', name: 'Round Arch', kind: 'round', sheetNo: 'ARC-01', subtitle: 'Semicircular arch · struck from one centre',
    description: 'Elevation of a semicircular stone arch with wedge-shaped voussoirs, a keystone at the crown, imposts and piers, with its single centre of curvature marked.' },
  { id: 'pointed-arch', name: 'Pointed Arch', kind: 'pointed', sheetNo: 'ARC-02', subtitle: 'Equilateral arch · radius equals span',
    description: 'Elevation of an equilateral pointed arch, each side struck from the opposite springing point, with voussoirs, imposts and piers.' },
  { id: 'horseshoe-arch', name: 'Horseshoe Arch', kind: 'horseshoe', sheetNo: 'ARC-03', subtitle: 'Arc carried below its centre',
    description: 'Elevation of a horseshoe arch whose curve continues below its centre, so the opening narrows at the springing, with voussoirs and piers.' },
  { id: 'ogee-arch', name: 'Ogee Arch', kind: 'ogee', sheetNo: 'ARC-04', subtitle: 'Reverse curves meeting in a point',
    description: 'Elevation of an ogee arch formed by a convex curve rising into a concave curve on each side, meeting in a point, with the four centres marked.' },
  { id: 'tudor-arch', name: 'Tudor Arch', kind: 'tudor', sheetNo: 'ARC-05', subtitle: 'Four-centred depressed arch',
    description: 'Elevation of a low, wide four-centred arch: tight curves at the haunches flattening into long arcs that meet in a shallow point.' },
  { id: 'trefoil-arch', name: 'Trefoil Arch', kind: 'trefoil', sheetNo: 'ARC-06', subtitle: 'Three lobes divided by cusps',
    description: 'Elevation of a cusped arch with three circular lobes, set in a semicircular stone surround.' },
  { id: 'keystone', name: 'Keystone', kind: 'round', sheetNo: 'ARC-07', subtitle: 'The central voussoir that locks the arch', highlight: 'keystone',
    description: 'Elevation of a semicircular arch with the central wedge-shaped stone at the crown shown hatched and projecting.' },
  { id: 'voussoir', name: 'Voussoir', kind: 'round', sheetNo: 'ARC-08', subtitle: 'Wedge-shaped stone of an arch ring', highlight: 'voussoir',
    description: 'Elevation of a semicircular arch with one wedge-shaped stone of the ring shown hatched, its joints radiating from the centre.' },
]

export function buildArch(a: ArchSpec): SheetSpec {
  const g = geometry(a.kind)
  const S = 220 // span in px
  const AX = 300
  const SY = 352 // springing line
  const X = (u: number) => AX + u * S
  const Y = (u: number) => SY - u * S
  const P = ([x, y]: Pt): Pt => [X(x), Y(y)]

  const depth = 0.17
  const pierW = 0.22
  const pierH = 0.85
  const ringCentre: Pt = [0, a.kind === 'horseshoe' ? g.centres[0].at[1] : 0.05]
  // trefoil sits in a round surround; others use their own intrados
  const ringInner = a.kind === 'trefoil' ? arcPts([0, 0], 0.5, Math.PI, 0, 80) : g.intrados
  // The ring stops at the impost: trim any extrados below the springing line
  // (the horseshoe's ring would otherwise run down past the imposts)
  const extrados = trimAbove(offsetOut(ringInner, depth, ringCentre), 0)

  const layers: SheetSpec['layers'] = { hatch: [], shading: [], fine: [], profile: [], cut: [], center: [], dims: [], labels: [], notes: [] }

  // Walling: ashlar courses behind the arch, clipped outside the arch ring
  const wallTop = g.rise + depth + 0.16
  const wx0 = -0.5 - pierW - 0.2
  const wx1 = 0.5 + pierW + 0.2
  const openingD = path([...ringInner, [0.5, -pierH], [-0.5, -pierH]].map(P), true)
  const ringOuterD = path([...extrados, [0.5 + pierW, 0], [0.5 + pierW, -pierH], [-0.5 - pierW, -pierH], [-0.5 - pierW, 0]].map(P), true)
  const id = a.id
  const defs = `<clipPath id="wall-${id}" clip-rule="evenodd"><path clip-rule="evenodd" d="M${f(X(wx0))} ${f(Y(wallTop))}H${f(X(wx1))}V${f(Y(-pierH))}H${f(X(wx0))}Z ${ringOuterD}"/></clipPath>
    <pattern id="ashlar-${id}" width="${f(S * 0.24)}" height="${f(S * 0.12)}" patternUnits="userSpaceOnUse" x="${f(X(0))}" y="${f(Y(0))}">
      <path d="M0 0H${f(S * 0.24)}M0 ${f(S * 0.06)}H${f(S * 0.24)}M${f(S * 0.06)} 0V${f(S * 0.06)}M${f(S * 0.18)} ${f(S * 0.06)}V${f(S * 0.12)}" class="ink l-hair"/>
    </pattern>`
  layers.shading!.push(`<rect x="${f(X(wx0))}" y="${f(Y(wallTop))}" width="${f((wx1 - wx0) * S)}" height="${f((wallTop + pierH) * S)}" fill="url(#ashlar-${id})" stroke="none" clip-path="url(#wall-${id})"/>`)

  // Arch ring
  layers.profile!.push(el(path(ringInner.map(P))), el(path(extrados.map(P))))
  if (a.kind === 'trefoil') {
    layers.profile!.push(el(path(g.intrados.map(P))))
    // cusp infill between the lobes and the round surround
    layers.hatch!.push(`<path d="${path([...ringInner.map(P), ...[...g.intrados].reverse().map(P)], true)}" fill="url(#h-stone)" stroke="none"/>`)
  }

  // Voussoir joints: odd count so a keystone sits at the crown
  const n = 13
  const fr = Array.from({ length: n + 1 }, (_, i) => i / n)
  const inner = atFractions(ringInner, fr)
  const outer = atFractions(extrados, fr)
  for (let i = 1; i < n; i++) layers.fine!.push(el(path([P(inner[i].p), P(outer[i].p)])))

  const mid = (n - 1) / 2
  const stone = (k: number, lift = 0) => {
    const i0 = inner[k].p
    const i1 = inner[k + 1].p
    const o0 = outer[k].p
    const o1 = outer[k + 1].p
    const up = (p: Pt): Pt => [p[0] + (p[0] - ringCentre[0]) * lift, p[1] + (p[1] - ringCentre[1]) * lift]
    return path([P(i0), P(up(o0)), P(up(o1)), P(i1)], true)
  }
  // Keystone always drawn slightly proud of the ring
  layers.profile!.push(el(stone(mid, 0.12)))
  if (a.highlight === 'keystone') layers.hatch!.push(`<path d="${stone(mid, 0.12)}" fill="url(#h-stone)" stroke="none"/>`)
  if (a.highlight === 'voussoir') {
    layers.hatch!.push(`<path d="${stone(3)}" fill="url(#h-stone)" stroke="none"/>`)
    layers.cut!.push(el(stone(3)))
    // joints radiate from the centre
    for (const k of [3, 4]) layers.center!.push(el(path([P(ringCentre), P(outer[k].p)])))
  }

  // Imposts and piers
  const imp = 0.05
  for (const s of [-1, 1]) {
    const xi = s * 0.5
    const xo = s * (0.5 + pierW)
    layers.profile!.push(el(path([[xi, 0], [xi - s * 0.03, 0], [xi - s * 0.03, -imp], [xo + s * 0.03, -imp], [xo + s * 0.03, 0], [xi, 0]].map(P))))
    layers.profile!.push(el(path([[xi, -imp], [xi, -pierH]].map(P))), el(path([[xo, -imp], [xo, -pierH]].map(P))))
  }
  layers.fine!.push(el(`M${f(X(-0.5 - pierW - 0.05))} ${f(Y(-pierH))}H${f(X(0.5 + pierW + 0.05))}`, 'stroke-dasharray="6 4"'))

  // Construction: springing line, centres, radii
  layers.center!.push(el(`M${f(X(-0.75))} ${f(Y(0))}H${f(X(0.75))}`))
  layers.center!.push(el(`M${f(X(0))} ${f(Y(-0.2))}V${f(Y(g.rise + depth + 0.12))}`))
  const centres = g.centres.flatMap((c) => (Math.abs(c.at[0]) < 1e-6 ? [c] : [c, { at: [-c.at[0], c.at[1]] as Pt, r: c.r }]))
  for (const c of centres) {
    const [cx, cy] = P(c.at)
    layers.center!.push(el(`M${f(cx - 5)} ${f(cy)}H${f(cx + 5)}M${f(cx)} ${f(cy - 5)}V${f(cy + 5)}`, 'stroke-dasharray="none"'))
  }
  // one radius line per distinct centre on the left, to its arc
  for (const c of g.centres) {
    const target = g.intrados.reduce((best, p) =>
      Math.abs(Math.hypot(p[0] - c.at[0], p[1] - c.at[1]) - c.r) < 0.004 && p[0] < -0.05 && p[1] > best[1] ? p : best, [0, -1] as Pt)
    if (target[1] >= 0) {
      layers.fine!.push(el(path([P(c.at), P(target)]), 'stroke-dasharray="3 3"'))
      const mx = (X(c.at[0]) + X(target[0])) / 2
      const my = (Y(c.at[1]) + Y(target[1])) / 2
      layers.notes!.push(text(mx - 4, my - 4, `R ${c.r.toFixed(2)} S`, 'class="t-small" text-anchor="end"'))
    }
  }

  // Dimensions: span and rise
  layers.dims!.push(hDim(Y(-pierH) + 18, X(-0.5), X(0.5), 'SPAN S'))
  layers.dims!.push(vDim(X(0.5 + pierW) + 26, Y(0), Y(g.rise), `RISE ${g.rise.toFixed(2)} S`, X(0.12)))

  // Labels
  const crown = g.intrados.reduce((best, p) => (p[1] > best[1] ? p : best))
  const haunch = atFractions(ringInner, [0.18])[0].p
  const haunchOut = atFractions(extrados, [0.25])[0].p
  const items = [
    { text: 'KEYSTONE', at: P([outer[mid].p[0] - 0.02, outer[mid].p[1]]) },
    { text: 'EXTRADOS', at: P(haunchOut) },
    { text: 'VOUSSOIR', at: P(atFractions(extrados, [0.32])[0].p) },
    { text: 'INTRADOS', at: P(haunch) },
    { text: 'SPRINGER', at: P(atFractions(ringInner, [0.03])[0].p) },
    { text: 'IMPOST', at: P([-0.5 - pierW - 0.03, -imp / 2]) },
    { text: 'PIER', at: P([-0.5 - pierW, -pierH / 2]) },
  ]
  if (a.kind === 'trefoil') items.push({ text: 'CUSP', at: P(g.intrados[Math.round(g.intrados.length * 0.3)]) })
  if (a.kind !== 'trefoil' && crown[1] > 0) items.push({ text: 'CROWN', at: P([crown[0] - 0.01, crown[1]]) })
  layers.labels!.push(...leftLabels(items, AREA.x0 + 10, X(-0.5 - pierW - 0.28)))
  layers.notes!.push(text(X(0.5 + pierW) + 6, Y(0) - 4, 'SPRINGING LINE', 'class="t-small"'))

  const top = Math.max(g.rise + depth, ...extrados.map((p) => p[1])) + 0.14
  return {
    id: a.id,
    title: a.name,
    subtitle: a.subtitle,
    view: 'ELEVATION',
    sheetNo: a.sheetNo,
    source: CONSTRUCTION_SOURCE,
    scale: { unitPx: S / 10, unitName: 'tenths of span', count: 5 },
    defs,
    layers,
    bounds: [X(wx0) - 4, Y(top), X(wx1) + 4, Y(-pierH) + 4],
    description: a.description,
  }
}
