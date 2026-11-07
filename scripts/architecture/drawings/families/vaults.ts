/**
 * Vaults and domes.
 *
 * Views by type: barrel vault and oculus in SECTION; domes in HALF SECTION /
 * HALF ELEVATION; groin, rib and fan vaults, pendentives and squinches as a
 * REFLECTED CEILING PLAN (the plan looking up, the usual way to show vaulting).
 */
import { type Pt, type SheetSpec, f, path, el, vDim, hDim, text, breakLine } from '../sheet'
import { newLayers, finish, hatched, masked, circle, line, rect, ring, callouts, arrow, courses, Bounds, ORIGINAL } from '../kit'

const RCP = 'REFLECTED CEILING PLAN'

// ---------------------------------------------------------------------------
// Barrel vault: transverse section
// ---------------------------------------------------------------------------
function barrelVault(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const S = 230
  const AX = 340
  const SY = 330
  const r = S / 2
  const t = 0.12 * S
  const wall = 0.3 * S
  const wallH = 0.95 * S
  const xi = AX - r
  const xo = AX + r

  // walls in section
  for (const s of [-1, 1]) {
    const x0 = s < 0 ? xi - wall : xo
    hatched(L, rect(x0, SY, wall, wallH))
    B.add([x0, SY], [x0 + wall, SY + wallH])
  }
  // vault ring (cut) and haunch fill
  const inner = ring([AX, SY], r, Math.PI, 2 * Math.PI, 60)
  const outer = ring([AX, SY], r + t, 2 * Math.PI, Math.PI, 60)
  hatched(L, [...inner, ...outer])
  const haunchH = 0.42 * S
  // haunch fill: from the extrados at the springing up to haunch height, out to the wall face
  const alpha = Math.asin(haunchH / (r + t))
  for (const s of [-1, 1]) {
    const xEdge = AX + s * (r + wall)
    const arcPts = s < 0 ? ring([AX, SY], r + t, Math.PI, Math.PI + alpha, 16) : ring([AX, SY], r + t, 2 * Math.PI, 2 * Math.PI - alpha, 16)
    hatched(L, [...arcPts, [xEdge, SY - haunchH], [xEdge, SY]], 'h-concrete', 'profile')
  }
  B.add([AX - r - wall, SY - r - t])
  // floor and roof indication
  L.profile.push(line([xi - wall - 20, SY + wallH], [xo + wall + 20, SY + wallH]))
  L.fine.push(el(`M${f(xi - wall)} ${f(SY - haunchH)}L${f(AX)} ${f(SY - r - t - 26)}L${f(xo + wall)} ${f(SY - haunchH)}`, 'stroke-dasharray="6 4"'))
  L.notes.push(text(AX + 40, SY - r - t - 18, 'ROOF OVER (INDICATIVE)', 'class="t-small"'))
  // springing line, centre, thrust
  L.center.push(line([xi - wall - 10, SY], [xo + wall + 10, SY]), line([AX, SY + 20], [AX, SY - r - t - 10]))
  L.center.push(circle([AX, SY], 2.5))
  arrow(L, [xi + 4, SY - 8], [xi - wall - 26, SY - 8])
  arrow(L, [xo - 4, SY - 8], [xo + wall + 26, SY - 8])
  L.notes.push(text(xo + wall + 2, SY - 14, 'THRUST', 'class="t-small t-accent"'))
  // dims
  L.dims.push(hDim(SY + wallH + 22, xi, xo, 'SPAN'), vDim(xo + wall + 40, SY, SY - r, 'RISE = SPAN/2'))
  callouts(L, [
    { text: 'EXTRADOS', at: [AX - (r + t) * 0.71, SY - (r + t) * 0.71] },
    { text: 'BARREL VAULT', at: [AX - r * 0.35, SY - r * 0.94 - t / 2] },
    { text: 'HAUNCH FILL', at: [xi - wall + 8, SY - haunchH + 14] },
    { text: 'INTRADOS', at: [AX - r * 0.87, SY - r * 0.5] },
    { text: 'SPRINGING LINE', at: [xi - wall, SY] },
    { text: 'WALL (SECTION)', at: [xi - wall, SY + wallH / 2] },
  ], xi - wall)
  return finish({
    id: 'barrel-vault', title: 'Barrel Vault', subtitle: 'Continuous semicircular vault · transverse section', view: 'SECTION', sheetNo: 'VLT-01',
    source: ORIGINAL, scale: { unitPx: S / 10, unitName: 'tenths of span', count: 5 },
    description: 'Cross-section through a semicircular barrel vault on two thick walls, showing the vault ring, haunch fill and the outward thrust at the springing.',
  }, L, B)
}

// ---------------------------------------------------------------------------
// Square-bay reflected plans: groin, rib, fan, pendentive, squinch
// ---------------------------------------------------------------------------
interface Bay {
  L: ReturnType<typeof newLayers>
  B: Bounds
  c: Pt
  h: number // half bay
  corners: Pt[]
  defs: string[]
}

function bay(halfBay = 150, pier = 26, opts: { arches?: boolean } = {}): Bay {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [330, 330]
  const h = halfBay
  const corners: Pt[] = [[c[0] - h, c[1] - h], [c[0] + h, c[1] - h], [c[0] + h, c[1] + h], [c[0] - h, c[1] + h]]
  // piers (cut, at springing level)
  for (const [x, y] of corners) {
    hatched(L, rect(x - pier / 2, y - pier / 2, pier, pier))
    B.add([x - pier / 2 - 30, y - pier / 2 - 30], [x + pier / 2 + 30, y + pier / 2 + 30])
  }
  // bay outline and arches/walls between piers (shown above: dashed edges)
  if (opts.arches !== false) {
    for (let i = 0; i < 4; i++) {
      const a = corners[i]
      const b = corners[(i + 1) % 4]
      const nx = (b[1] - a[1]) / (2 * h)
      const ny = -(b[0] - a[0]) / (2 * h)
      const off = 14
      L.fine.push(line(a, b), line([a[0] - nx * off, a[1] - ny * off], [b[0] - nx * off, b[1] - ny * off], 'stroke-dasharray="6 4"'))
    }
  }
  // axes
  L.center.push(line([c[0] - h - 40, c[1]], [c[0] + h + 40, c[1]]), line([c[0], c[1] - h - 40], [c[0], c[1] + h + 40]))
  L.dims.push(hDim(c[1] + h + 50, corners[0][0], corners[1][0], 'BAY'))
  return { L, B, c, h, corners, defs: [] }
}

function groinVault(): SheetSpec {
  const { L, B, c, h, corners, defs } = bay()
  // groins: the intersections of two barrels, along the diagonals
  L.profile.push(line(corners[0], corners[2]), line(corners[1], corners[3]))
  // webs: each triangle's courses run perpendicular to its barrel axis
  const tris: Array<[Pt[], number]> = [
    [[corners[0], corners[1], c], 0], // north web: barrel runs N-S, courses E-W
    [[corners[2], corners[3], c], 0],
    [[corners[1], corners[2], c], Math.PI / 2],
    [[corners[3], corners[0], c], Math.PI / 2],
  ]
  tris.forEach(([poly, ang], i) => defs.push(courses(L, `gv-${i}`, poly, ang, 12)))
  // barrel directions
  arrow(L, [c[0], c[1] - 30], [c[0], c[1] - h + 26])
  arrow(L, [c[0] + 30, c[1]], [c[0] + h - 26, c[1]])
  L.notes.push(text(c[0] + 6, c[1] - h + 46, 'BARREL A', 'class="t-small t-accent"'), text(c[0] + h - 70, c[1] - 6, 'BARREL B', 'class="t-small t-accent"'))
  callouts(L, [
    { text: 'TRANSVERSE ARCH', at: [c[0] - h * 0.55, corners[0][1] - 14] },
    { text: 'WEB (COURSES)', at: [c[0] - h * 0.5, c[1] - h * 0.62] },
    { text: 'GROIN', at: [c[0] - h * 0.5, c[1] - h * 0.5] },
    { text: 'CROWN', at: [c[0] - 3, c[1]] },
    { text: 'PIER', at: [corners[3][0] - 13, corners[3][1]] },
  ], corners[0][0] - 20)
  return finish({
    id: 'groin-vault', title: 'Groin Vault', subtitle: 'Two barrel vaults intersecting at right angles', view: RCP, sheetNo: 'VLT-02',
    source: ORIGINAL, scale: { unitPx: h / 5, unitName: 'tenths of bay', count: 5 },
    description: 'Plan looking up at a square bay covered by two intersecting barrel vaults, with the diagonal groins where they meet and the stone courses of each web.',
  }, L, B, defs.join('\n    '))
}

function ribVault(): SheetSpec {
  const { L, B, c, h, corners, defs } = bay()
  const rib = 5
  const doubleLine = (a: Pt, b: Pt, layer: 'profile' | 'fine' = 'profile') => {
    const len = Math.hypot(b[0] - a[0], b[1] - a[1])
    const nx = (-(b[1] - a[1]) / len) * rib
    const ny = ((b[0] - a[0]) / len) * rib
    L[layer].push(line([a[0] + nx, a[1] + ny], [b[0] + nx, b[1] + ny]), line([a[0] - nx, a[1] - ny], [b[0] - nx, b[1] - ny]))
  }
  doubleLine(corners[0], corners[2])
  doubleLine(corners[1], corners[3])
  // ridge ribs (tiercerons omitted: quadripartite)
  for (let i = 0; i < 4; i++) defs.push(courses(L, `rv-${i}`, [corners[i], corners[(i + 1) % 4], c], i % 2 ? Math.PI / 2 : 0, 11))
  L.fine.push(line([c[0] - h, c[1]], [c[0] + h, c[1]], 'stroke-dasharray="2 3"'), line([c[0], c[1] - h], [c[0], c[1] + h], 'stroke-dasharray="2 3"'))
  // boss
  masked(L, ring(c, 16, 0, 2 * Math.PI, 40))
  L.profile.push(circle(c, 16))
  for (let k = 0; k < 8; k++) {
    const a = (k * Math.PI) / 4
    L.fine.push(line([c[0] + 6 * Math.cos(a), c[1] + 6 * Math.sin(a)], [c[0] + 14 * Math.cos(a), c[1] + 14 * Math.sin(a)]))
  }
  L.fine.push(circle(c, 5))
  // shafts on the piers carrying the ribs
  for (const [x, y] of corners) L.cut.push(circle([x + (x < c[0] ? 13 : -13), y + (y < c[1] ? 13 : -13)], 6))
  callouts(L, [
    { text: 'WALL RIB', at: [c[0] - h * 0.55, corners[0][1] - 14] },
    { text: 'RIDGE LINE', at: [c[0] - h * 0.7, c[1]] },
    { text: 'DIAGONAL RIB', at: [c[0] - h * 0.62, c[1] - h * 0.62] },
    { text: 'WEB', at: [c[0] - h * 0.55, c[1] - h * 0.3] },
    { text: 'BOSS', at: [c[0] - 16, c[1] + 4] },
    { text: 'VAULTING SHAFT', at: [corners[3][0] + 7, corners[3][1] - 13] },
  ], corners[0][0] - 20)
  return finish({
    id: 'rib-vault', title: 'Rib Vault', subtitle: 'Quadripartite vault on diagonal ribs', view: RCP, sheetNo: 'VLT-03',
    source: ORIGINAL, scale: { unitPx: h / 5, unitName: 'tenths of bay', count: 5 },
    description: 'Plan looking up at a square bay divided into four webs by crossing diagonal ribs, with a carved boss where the ribs meet and shafts rising from the piers.',
  }, L, B, defs.join('\n    '))
}

function fanVault(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [330, 330]
  const hw = 170
  const hh = 120
  const R = 112 // conoid radius
  const corners: Pt[] = [[c[0] - hw, c[1] - hh], [c[0] + hw, c[1] - hh], [c[0] + hw, c[1] + hh], [c[0] - hw, c[1] + hh]]
  L.fine.push(el(path(corners, true)))
  B.add(...corners.map(([x, y]) => [x + (x < c[0] ? -40 : 40), y + (y < c[1] ? -40 : 40)] as Pt))
  corners.forEach(([x, y], i) => {
    hatched(L, rect(x - 13, y - 13, 26, 26))
    const a0 = [0, Math.PI / 2, Math.PI, 1.5 * Math.PI][i]
    const start = a0 // quarter facing into the bay
    const sx = x < c[0] ? 1 : -1
    const sy = y < c[1] ? 1 : -1
    const base = Math.atan2(sy, sx) - Math.PI / 4
    void start
    // conoid edge and ring ribs
    for (const k of [1, 0.75, 0.5, 0.28]) {
      L[k === 1 ? 'profile' : 'fine'].push(el(path(ring([x, y], R * k, base, base + Math.PI / 2, 24))))
    }
    // radiating ribs with cusped panels
    for (let j = 0; j <= 8; j++) {
      const a = base + (j * Math.PI) / 16
      L.fine.push(line([x + 8 * Math.cos(a), y + 8 * Math.sin(a)], [x + R * Math.cos(a), y + R * Math.sin(a)]))
    }
    // cusps in the outer ring of panels
    for (let j = 0; j < 8; j++) {
      const a = base + ((j + 0.5) * Math.PI) / 16
      const p: Pt = [x + R * 0.875 * Math.cos(a), y + R * 0.875 * Math.sin(a)]
      L.fine.push(circle(p, 3.2))
    }
  })
  // central spandrel with pendant boss
  const spandrel = ring(c, 26, 0, 2 * Math.PI, 40)
  L.profile.push(el(path(spandrel, true)))
  L.fine.push(circle(c, 9), circle(c, 3))
  L.center.push(line([c[0] - hw - 30, c[1]], [c[0] + hw + 30, c[1]]), line([c[0], c[1] - hh - 30], [c[0], c[1] + hh + 30]))
  L.dims.push(hDim(c[1] + hh + 40, corners[0][0], corners[1][0], 'BAY'))
  callouts(L, [
    { text: 'CONOID (FAN)', at: [corners[0][0] + R * 0.95, corners[0][1] + R * 0.2] },
    { text: 'RING RIB', at: [corners[0][0] + R * 0.53, corners[0][1] + R * 0.53] },
    { text: 'RADIATING RIBS', at: [corners[0][0] + R * 0.2, corners[0][1] + R * 0.3] },
    { text: 'CENTRAL SPANDREL', at: [c[0] - 26, c[1]] },
    { text: 'PENDANT BOSS', at: [c[0] - 3, c[1] + 4] },
    { text: 'PIER', at: [corners[3][0] - 13, corners[3][1]] },
  ], corners[0][0] - 20)
  return finish({
    id: 'fan-vault', title: 'Fan Vault', subtitle: 'English Perpendicular · cone-shaped fans of equal ribs', view: RCP, sheetNo: 'VLT-04',
    source: ORIGINAL, scale: { unitPx: hh / 5, unitName: 'tenths of bay width', count: 5 },
    description: 'Plan looking up at a rectangular bay where four half-cone fans spring from the corners, each covered in radiating ribs and ring ribs with cusped panels, leaving a central spandrel with a pendant boss.',
  }, L, B)
}

function pendentive(): SheetSpec {
  const { L, B, c, h, corners, defs } = bay(150, 26)
  // dome base ring inscribed in the square; the pendentives fill the corners
  const r = h
  L.profile.push(el(path(ring(c, r), true)))
  L.fine.push(el(path(ring(c, r - 10), true)))
  corners.forEach((corner, i) => {
    const a = Math.atan2(corner[1] - c[1], corner[0] - c[0])
    // spherical triangle: between the ring arc and the two adjacent arch faces
    const arcPts = ring(c, r, a - Math.PI / 4, a + Math.PI / 4, 20)
    const poly: Pt[] = [corner, ...arcPts]
    defs.push(`<clipPath id="pd-${i}"><path d="${path(poly, true)}"/></clipPath>`)
    // contour lines showing the spherical curvature
    const parts: string[] = []
    for (let k = 1; k <= 5; k++) {
      const rr = r + ((Math.hypot(h, h) - r) * k) / 6
      parts.push(path(ring(c, rr, a - Math.PI / 4, a + Math.PI / 4, 20)))
    }
    L.shading.push(`<g clip-path="url(#pd-${i})"><path d="${parts.join(' ')}"/></g>`)
  })
  callouts(L, [
    { text: 'SUPPORTING ARCH', at: [c[0] - h * 0.5, corners[0][1] - 14] },
    { text: 'PENDENTIVE', at: [corners[0][0] + 22, corners[0][1] + 22] },
    { text: 'DOME BASE RING', at: [c[0] - r, c[1] + 16] },
    { text: 'PIER', at: [corners[3][0] - 13, corners[3][1]] },
  ], corners[0][0] - 20)
  return finish({
    id: 'pendentive', title: 'Pendentive', subtitle: 'Spherical triangles carrying a dome over a square', view: RCP, sheetNo: 'VLT-05',
    source: ORIGINAL, scale: { unitPx: h / 5, unitName: 'tenths of bay', count: 5 },
    description: 'Plan looking up at a square bay where four curved triangular surfaces in the corners rise from the piers to form a continuous circular ring that carries a dome.',
  }, L, B, defs.join('\n    '))
}

function squinch(): SheetSpec {
  const { L, B, c, h, corners } = bay(150, 26)
  // octagon formed by four corner squinches
  const cut = h * 0.82
  const oct: Pt[] = []
  corners.forEach((corner) => {
    const sx = Math.sign(corner[0] - c[0])
    const sy = Math.sign(corner[1] - c[1])
    oct.push([c[0] + sx * cut, c[1] + sy * h], [c[0] + sx * h, c[1] + sy * cut])
  })
  // order the octagon points around the centre
  oct.sort((p, q) => Math.atan2(p[1] - c[1], p[0] - c[0]) - Math.atan2(q[1] - c[1], q[0] - c[0]))
  L.profile.push(el(path(oct, true)))
  // each squinch: a stepped half-cone niche shown by concentric arcs to the corner
  corners.forEach((corner) => {
    const sx = Math.sign(corner[0] - c[0])
    const sy = Math.sign(corner[1] - c[1])
    const a: Pt = [c[0] + sx * cut, c[1] + sy * h]
    const b: Pt = [c[0] + sx * h, c[1] + sy * cut]
    const mid: Pt = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
    for (let k = 1; k <= 4; k++) {
      const t = k / 5
      const p: Pt = [mid[0] + (corner[0] - mid[0]) * t, mid[1] + (corner[1] - mid[1]) * t]
      const ha: Pt = [a[0] + (corner[0] - a[0]) * t, a[1] + (corner[1] - a[1]) * t]
      const hb: Pt = [b[0] + (corner[0] - b[0]) * t, b[1] + (corner[1] - b[1]) * t]
      L.fine.push(el(`M${f(ha[0])} ${f(ha[1])}Q${f(p[0] + (mid[0] - corner[0]) * 0.25)} ${f(p[1] + (mid[1] - corner[1]) * 0.25)} ${f(hb[0])} ${f(hb[1])}`))
    }
    L.profile.push(line(a, b))
  })
  // dome base circle inscribed in the octagon
  const rIn = h * Math.cos(Math.PI / 8) * 0.98
  L.profile.push(el(path(ring(c, rIn), true)))
  callouts(L, [
    { text: 'WALL ABOVE ARCH', at: [c[0] - h * 0.3, corners[0][1] - 14] },
    { text: 'SQUINCH', at: [corners[0][0] + 26, corners[0][1] + 26] },
    { text: 'OCTAGON', at: [c[0] - h, c[1] - h * 0.5] },
    { text: 'DOME BASE', at: [c[0] - rIn, c[1] + 18] },
    { text: 'PIER', at: [corners[3][0] - 13, corners[3][1]] },
  ], corners[0][0] - 20)
  return finish({
    id: 'squinch', title: 'Squinch', subtitle: 'Corner arches turning a square into an octagon', view: RCP, sheetNo: 'VLT-06',
    source: ORIGINAL, scale: { unitPx: h / 5, unitName: 'tenths of bay', count: 5 },
    description: 'Plan looking up at a square bay where an arched niche spans each corner, turning the square into an octagon that carries a round dome.',
  }, L, B)
}

// ---------------------------------------------------------------------------
// Domes: half section / half elevation
// ---------------------------------------------------------------------------
interface DomeOpts {
  id: string
  title: string
  subtitle: string
  sheetNo: string
  description: string
  /** right-half outer profile in units of dome radius: [x, y up] from base */
  profile: Pt[]
  shell: number // thickness in radius units
  finial: 'lantern' | 'cross'
  gores: number
}

function domeSheet(o: DomeOpts): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const AX = 320
  const R = 150
  const base = 400 // y of dome springing
  const drumH = 0.55 * R
  const X = (u: number) => AX + u * R
  const Y = (u: number) => base - u * R
  const P = ([x, y]: Pt): Pt => [X(x), Y(y)]

  const outer = o.profile
  const inner = outer.map(([x, y], i) => {
    const a = outer[Math.max(0, i - 1)]
    const b = outer[Math.min(outer.length - 1, i + 1)]
    let nx = b[1] - a[1]
    let ny = -(b[0] - a[0])
    const len = Math.hypot(nx, ny) || 1
    nx /= len
    ny /= len
    return [Math.max(0, x - nx * o.shell), y - ny * o.shell] as Pt
  })
  const topY = outer[outer.length - 1][1]

  // Section half (left): shell hatched, drum wall hatched
  const leftOuter = outer.map(([x, y]) => P([-x, y]))
  const leftInner = inner.map(([x, y]) => P([-x, y]))
  hatched(L, [...leftOuter, ...[...leftInner].reverse()])
  const drumOut = outer[0][0]
  const drumIn = inner[0][0]
  hatched(L, [P([-drumOut, 0]), P([-drumIn, 0]), P([-drumIn, -drumH / R]), P([-drumOut, -drumH / R])])
  // window cut in the drum (section)
  L.fine.push(el(path([P([-drumOut, -0.12]), P([-drumIn, -0.12])])), el(path([P([-drumOut, -0.4]), P([-drumIn, -0.4])])))

  // Elevation half (right): outline, gores, drum with windows
  L.profile.push(el(path(outer.map(P))))
  for (let k = 1; k < o.gores; k++) {
    const frac = Math.sin((k / o.gores) * (Math.PI / 2))
    L.fine.push(el(path(outer.slice(0, -1).map(([x, y]) => P([x * frac, y])))))
  }
  L.profile.push(el(path([P([drumOut, 0]), P([drumOut, -drumH / R]), P([0, -drumH / R])])))
  L.profile.push(el(path([P([0, 0]), P([drumOut + 0.06, 0]), P([drumOut + 0.06, 0.04]), P([0, 0.04])])))
  for (const wx of [0.22, 0.62]) {
    const w = 0.13
    L.fine.push(el(`M${f(X(wx))} ${f(Y(-0.42))}V${f(Y(-0.18))}A${f(w * R / 2)} ${f(w * R / 2)} 0 0 1 ${f(X(wx + w))} ${f(Y(-0.18))}V${f(Y(-0.42))}Z`))
  }
  // base of drum (break)
  L.profile.push(breakLine(X(-drumOut), Y(-drumH / R), Y(-drumH / R - 0.15)), breakLine(X(drumOut), Y(-drumH / R), Y(-drumH / R - 0.15)))

  // Finial
  const tipX = AX
  const tipY = Y(topY)
  if (o.finial === 'lantern') {
    const lw = 0.16 * R
    const lh = 0.36 * R
    L.profile.push(el(path([[tipX - lw, tipY], [tipX - lw, tipY - lh], [tipX + lw, tipY - lh], [tipX + lw, tipY]], false)))
    L.profile.push(el(`M${f(tipX - lw - 4)} ${f(tipY - lh)}H${f(tipX + lw + 4)}M${f(tipX - lw * 0.6)} ${f(tipY - lh)}Q${f(tipX)} ${f(tipY - lh - 0.3 * R)} ${f(tipX + lw * 0.6)} ${f(tipY - lh)}`))
    L.fine.push(line([tipX + lw * 0.35, tipY - 4], [tipX + lw * 0.35, tipY - lh + 6]), line([tipX + lw * 0.7, tipY - 4], [tipX + lw * 0.7, tipY - lh + 6]))
    L.profile.push(line([tipX, tipY - lh - 0.23 * R], [tipX, tipY - lh - 0.36 * R]), circle([tipX, tipY - lh - 0.39 * R], 4))
    B.add([tipX, tipY - lh - 0.45 * R])
  } else {
    const ch = 0.42 * R
    L.profile.push(line([tipX, tipY], [tipX, tipY - ch]), line([tipX - 0.1 * R, tipY - ch * 0.72], [tipX + 0.1 * R, tipY - ch * 0.72]))
    L.profile.push(circle([tipX, tipY - ch * 0.25], 4))
    B.add([tipX, tipY - ch - 4])
  }

  L.center.push(line([AX, Y(-drumH / R - 0.25)], [AX, tipY - 20]))
  L.center.push(line([X(-1.35), Y(0)], [X(1.35), Y(0)]))
  B.add(P([-drumOut - 0.1, -drumH / R - 0.2]), P([drumOut + 0.1, 0]))
  const widest = Math.max(...outer.map((p) => p[0]))
  L.dims.push(hDim(Y(-drumH / R - 0.15) + 24, X(-drumOut), X(drumOut), 'DIAMETER'))
  L.dims.push(vDim(X(widest) + 40, Y(0), Y(topY), 'RISE', X(0.1)))

  const shellMid = outer[Math.floor(outer.length * 0.55)]
  callouts(L, [
    { text: o.finial === 'lantern' ? 'LANTERN' : 'FINIAL', at: [tipX - 3, tipY - (o.finial === 'lantern' ? 0.2 * R : 0.3 * R)] },
    { text: 'SHELL (SECTION)', at: P([-shellMid[0] + o.shell / 2, shellMid[1]]) },
    { text: 'SPRINGING', at: P([-drumOut, 0]) },
    { text: 'DRUM', at: P([-drumOut, -0.3]) },
  ], X(-widest) - 10)
  L.notes.push(
    text(AX - 10, Y(-drumH / R - 0.15) + 62, 'HALF SECTION', 'text-anchor="end" class="t-sub"'),
    text(AX + 10, Y(-drumH / R - 0.15) + 62, 'HALF ELEVATION', 'class="t-sub"'),
  )
  return finish({
    id: o.id, title: o.title, subtitle: o.subtitle, view: 'HALF SECTION · HALF ELEVATION', sheetNo: o.sheetNo,
    source: ORIGINAL, scale: { unitPx: R / 5, unitName: 'tenths of diameter', count: 5 },
    description: o.description,
  }, L, B)
}

const hemisphere: Pt[] = Array.from({ length: 41 }, (_, i) => {
  const a = (i / 40) * (Math.PI / 2)
  return [Math.cos(a), Math.sin(a)] as Pt
})

// onion: neck, swelling bulb wider than the drum, then a reverse curve to a point
const onion: Pt[] = (() => {
  const pts: Pt[] = []
  for (let i = 0; i <= 40; i++) {
    const t = i / 40
    const y = t * 1.55
    let x: number
    if (y < 0.55) x = 0.82 + 0.38 * Math.sin((y / 0.55) * (Math.PI / 2))
    else if (y < 1.15) x = 1.2 * Math.cos(((y - 0.55) / 0.6) * (Math.PI / 2.35))
    else x = 0.36 * Math.pow(Math.max(0, 1 - (y - 1.15) / 0.4), 1.6) // clamp: float error past the tip
    pts.push([Math.max(0, x), y])
  }
  pts[0] = [0.82, 0]
  return pts
})()

function oculus(): SheetSpec {
  // Pantheon proportions: rotunda diameter = height to the crown = 43.3 m;
  // the dome is a hemisphere (an inscribed sphere touches the floor); oculus 8.2 m.
  const L = newLayers()
  const B = new Bounds()
  const m = 6.6 // px per metre
  const AX = 318
  const floor = 590
  const D = 43.3
  const r = (D / 2) * m
  const spring = floor - (D / 2) * m // dome springs at half height
  const wall = 6.2 * m
  const shellBase = 6 * m
  const shellTop = 1.5 * m
  const oc = (8.2 / 2) * m
  const X = (u: number) => AX + u
  void X

  // drum walls (section)
  for (const s of [-1, 1]) {
    const x0 = s < 0 ? AX - r - wall : AX + r
    hatched(L, rect(x0, spring, wall, floor - spring))
  }
  // dome shell: thick at the haunch, thin at the oculus, stepped outside
  for (const s of [-1, 1]) {
    const innerArc: Pt[] = []
    const outerArc: Pt[] = []
    for (let i = 0; i <= 40; i++) {
      const a = (i / 40) * (Math.PI / 2 - Math.asin(oc / r))
      const ix = AX + s * r * Math.cos(a)
      const iy = spring - r * Math.sin(a)
      innerArc.push([ix, iy])
      const th = shellBase + (shellTop - shellBase) * (i / 40)
      outerArc.push([AX + s * (r + th) * Math.cos(a), spring - (r + th) * Math.sin(a)])
    }
    const poly = [...innerArc, ...[...outerArc].reverse(), [AX + s * (r + wall), spring - 4.5 * m] as Pt, [AX + s * (r + wall), spring] as Pt]
    hatched(L, poly)
    // coffers: five stepped rings shown as notches on the intrados
    for (let k = 0; k < 5; k++) {
      const a0 = 0.12 + k * 0.2
      const a1 = a0 + 0.12
      const p0: Pt = [AX + s * r * Math.cos(a0), spring - r * Math.sin(a0)]
      const p1: Pt = [AX + s * r * Math.cos(a1), spring - r * Math.sin(a1)]
      const d = 0.7 * m
      L.fine.push(el(path([p0, [p0[0] + s * d * Math.cos(a0), p0[1] - d * Math.sin(a0)], [p1[0] + s * d * Math.cos(a1), p1[1] - d * Math.sin(a1)], p1])))
    }
  }
  // inscribed sphere
  L.center.push(el(path(ring([AX, spring], r), true)))
  // light from the oculus
  L.center.push(line([AX - oc, spring - r], [AX - oc - 60, floor]), line([AX + oc, spring - r], [AX + oc + 60, floor]))
  L.notes.push(text(AX + oc + 64, floor - 8, 'SUNLIGHT', 'class="t-small t-accent"'))
  // floor
  L.profile.push(line([AX - r - wall - 20, floor], [AX + r + wall + 20, floor]))
  B.add([AX - r - wall - 20, spring - r - shellTop - 10], [AX + r + wall + 20, floor + 4])
  L.dims.push(hDim(floor + 20, AX - r, AX + r, 'DIAMETER 43.3 M'))
  L.dims.push(vDim(AX + r + wall + 18, floor, spring - r, 'H 43.3 M', AX + r))
  L.dims.push(hDim(spring - r - shellTop - 22, AX - oc, AX + oc, '').replace(/<text[^>]*>[^<]*<\/text>/, ''))
  L.notes.push(text(AX, spring - r - shellTop - 30, 'OCULUS 8.2 M', 'text-anchor="middle" class="t-small"'))
  callouts(L, [
    { text: 'OCULUS', at: [AX - oc, spring - r] },
    { text: 'COFFERS', at: [AX - r * Math.cos(0.75), spring - r * Math.sin(0.75)] },
    { text: 'DOME SHELL', at: [AX - (r + 3 * m) * Math.cos(0.45), spring - (r + 3 * m) * Math.sin(0.45)] },
    { text: 'INSCRIBED SPHERE', at: [AX - r * 0.71, spring + r * 0.71] },
    { text: 'DRUM WALL', at: [AX - r - wall, spring + 8 * m] },
  ], AX - r - wall)
  return finish({
    id: 'oculus', title: 'Oculus', subtitle: 'Open eye at the crown of a dome · Pantheon, Rome', view: 'SECTION', sheetNo: 'VLT-07',
    source: 'Dimensions of the Pantheon, Rome (c. 125 CE): rotunda diameter and height 43.3 m, oculus 8.2 m. Original drawing by Project Exodus; coffering and shell simplified.',
    scale: { unitPx: 5 * m, unitName: '5 m', count: 4 },
    description: 'Section through a domed rotunda proportioned like the Pantheon: a coffered hemispherical dome whose sphere would just touch the floor, open at the crown so a shaft of sunlight falls into the room.',
  }, L, B)
}

export const VAULT_SHEETS: Array<() => SheetSpec> = [
  barrelVault,
  groinVault,
  ribVault,
  fanVault,
  pendentive,
  squinch,
  oculus,
  () =>
    domeSheet({
      id: 'dome', title: 'Dome', subtitle: 'Hemispherical dome on a drum, with lantern', sheetNo: 'VLT-08',
      description: 'Half section and half elevation of a hemispherical dome raised on a windowed drum and crowned by a small lantern, with the meridian ribs shown on the elevation half.',
      profile: hemisphere, shell: 0.09, finial: 'lantern', gores: 6,
    }),
  () =>
    domeSheet({
      id: 'onion-dome', title: 'Onion Dome', subtitle: 'Bulbous dome swelling beyond its drum', sheetNo: 'VLT-09',
      description: 'Half section and half elevation of an onion dome: it swells wider than the drum, then tapers through a reverse curve to a point topped by a cross finial.',
      profile: onion, shell: 0.05, finial: 'cross', gores: 5,
    }),
]
