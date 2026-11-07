/**
 * Ceilings, walls and interior wall parts.
 *
 * Ceilings that are about their profile (tray, coved, dropped, exposed beams,
 * tented) are drawn in SECTION through a room; patterned ceilings (coffered,
 * rose, muqarnas, and the RCP convention itself) as REFLECTED CEILING PLANS.
 * Wall constructions in SECTION; log walls, niches and interior wall parts in
 * ELEVATION; alcoves in PLAN.
 */
import { type Pt, type SheetSpec, f, path, el, vDim, hDim, text } from '../sheet'
import { newLayers, finish, hatched, masked, circle, line, rect, ring, callouts, arrow, courses, Bounds, ORIGINAL, type Layers } from '../kit'

const ACCENT = 'style="stroke: var(--_accent)"'
const RCP = 'REFLECTED CEILING PLAN'

const highlight = (L: Layers, poly: Pt[], pattern = 'h-stone') => {
  L.hatch.push(`<path d="${path(poly, true)}" fill="url(#${pattern})" stroke="none"/>`)
  L.cut.push(`<path d="${path(poly, true)}" ${ACCENT}/>`)
}

// ---------------------------------------------------------------------------
// Room section scaffold for ceiling profiles
// ---------------------------------------------------------------------------
const RX0 = 175
const RX1 = 490
const FLOOR = 470
const SLAB = 140
const WT = 20

function roomSection(L: Layers, B: Bounds, opts: { slab?: boolean } = {}) {
  hatched(L, rect(RX0 - WT, SLAB, WT, FLOOR - SLAB))
  hatched(L, rect(RX1, SLAB, WT, FLOOR - SLAB))
  hatched(L, rect(RX0 - WT, FLOOR, RX1 - RX0 + 2 * WT, 16), 'h-concrete')
  if (opts.slab !== false) hatched(L, rect(RX0 - WT, SLAB - 18, RX1 - RX0 + 2 * WT, 18), 'h-concrete')
  B.add([RX0 - WT - 10, SLAB - 30], [RX1 + WT + 10, FLOOR + 16])
}

function tray(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  roomSection(L, B)
  const low = 250
  const high = 205
  const band = 80
  const ceil: Pt[] = [[RX0, low], [RX0 + band, low], [RX0 + band, high], [RX1 - band, high], [RX1 - band, low], [RX1, low]]
  L.cut.push(el(path(ceil)))
  L.cut.push(el(path(ceil.map(([x, y]) => [x, y - 8] as Pt))))
  // crown mouldings at the steps
  for (const x of [RX0 + band, RX1 - band]) L.profile.push(el(`M${x} ${high + 12}q${x < 360 ? 8 : -8} 0 ${x < 360 ? 8 : -8} -12`))
  // concealed cove lighting in the step
  for (const x of [RX0 + band + 10, RX1 - band - 10]) L.fine.push(circle([x, high + 34], 4))
  L.notes.push(text(360, FLOOR - 120, 'ROOM', 'text-anchor="middle" class="t-sub"'))
  L.dims.push(vDim(RX1 + WT + 18, low, high, 'STEP'), vDim(RX1 + WT + 18, FLOOR, low, 'LOW CLG'))
  callouts(L, [
    { text: 'STRUCTURAL SLAB', at: [RX0 - WT, SLAB - 9] },
    { text: 'RAISED CENTRE (TRAY)', at: [RX0 + band + 40, high] },
    { text: 'CROWN MOULDING', at: [RX0 + band, high + 8] },
    { text: 'PERIMETER BAND', at: [RX0 + 20, low] },
    { text: 'WALL', at: [RX0 - WT, 360] },
  ], RX0 - WT - 10)
  return finish({
    id: 'tray-ceiling', title: 'Tray Ceiling', subtitle: 'Central panel raised above a lower perimeter band', view: 'SECTION', sheetNo: 'CLG-01',
    source: ORIGINAL, scale: { unitPx: (RX1 - RX0) / 10, unitName: 'tenths of room width', count: 4 },
    description: 'Section through a room whose ceiling steps up in the middle like an upturned tray, with a moulding and hidden lighting at the step.',
  }, L, B)
}

function coved(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  roomSection(L, B)
  const clg = 200
  const r = 60
  const left = ring([RX0 + r, clg + r], r, Math.PI, 1.5 * Math.PI, 20)
  const right = ring([RX1 - r, clg + r], r, 1.5 * Math.PI, 2 * Math.PI, 20)
  L.cut.push(el(path([[RX0, FLOOR - 200], ...left, ...right, [RX1, FLOOR - 200]])))
  L.fine.push(el(path(ring([RX0 + r, clg + r], r - 8, Math.PI, 1.5 * Math.PI, 20))), el(path(ring([RX1 - r, clg + r], r - 8, 1.5 * Math.PI, 2 * Math.PI, 20))))
  L.dims.push(hDim(clg - 16, RX0, RX0 + r, 'R'))
  callouts(L, [
    { text: 'FLAT CEILING', at: [RX0 + r + 60, clg] },
    { text: 'COVE (CONCAVE)', at: [RX0 + r * 0.29, clg + r * 0.29] },
    { text: 'WALL', at: [RX0 - WT, 360] },
  ], RX0 - WT - 10)
  return finish({
    id: 'coved-ceiling', title: 'Coved Ceiling', subtitle: 'Concave curve joining wall to ceiling', view: 'SECTION', sheetNo: 'CLG-02',
    source: ORIGINAL, scale: { unitPx: (RX1 - RX0) / 10, unitName: 'tenths of room width', count: 4 },
    description: 'Section through a room where a smooth concave curve replaces the sharp corner between walls and ceiling.',
  }, L, B)
}

function dropped(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  roomSection(L, B)
  const grid = 250
  // hangers
  for (let x = RX0 + 40; x < RX1; x += 70) L.fine.push(line([x, SLAB], [x, grid]))
  // T-bar grid and tiles
  for (let x = RX0; x <= RX1; x += 60) L.profile.push(el(`M${f(x - 5)} ${grid}h10M${f(x)} ${grid}v-8`))
  L.cut.push(line([RX0, grid + 2], [RX1, grid + 2]))
  // duct and light in the plenum
  L.profile.push(el(path(rect(RX0 + 160, SLAB + 30, 120, 50), true)))
  L.fine.push(line([RX0 + 160, SLAB + 30], [RX0 + 280, SLAB + 80]), line([RX0 + 280, SLAB + 30], [RX0 + 160, SLAB + 80]))
  L.profile.push(el(path(rect(RX0 + 300, grid - 14, 50, 14), true)))
  arrow(L, [RX0 + 325, grid + 6], [RX0 + 325, grid + 40])
  L.notes.push(text(360, (SLAB + grid) / 2 + 40, 'PLENUM (SERVICES)', 'text-anchor="middle" class="t-sub"'))
  L.dims.push(vDim(RX1 + WT + 18, SLAB, grid, 'PLENUM'), vDim(RX1 + WT + 18, grid, FLOOR, 'CLEAR HT'))
  callouts(L, [
    { text: 'STRUCTURAL SLAB', at: [RX0 - WT, SLAB - 9] },
    { text: 'HANGER WIRE', at: [RX0 + 40, SLAB + 50] },
    { text: 'DUCT', at: [RX0 + 160, SLAB + 55] },
    { text: 'T-BAR GRID + TILES', at: [RX0 + 60, grid] },
    { text: 'RECESSED LIGHT', at: [RX0 + 300, grid - 7] },
  ], RX0 - WT - 10)
  return finish({
    id: 'dropped-ceiling', title: 'Dropped Ceiling', subtitle: 'Suspended grid hiding services below the slab', view: 'SECTION', sheetNo: 'CLG-03',
    source: ORIGINAL, scale: { unitPx: 60, unitName: '600 mm tiles', count: 3 },
    description: 'Section through a room with a lightweight ceiling of tiles in a metal grid hung on wires below the concrete slab, leaving a void above for ducts and cables.',
  }, L, B)
}

function exposedBeams(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  roomSection(L, B, { slab: false })
  const boards = 170
  hatched(L, rect(RX0 - WT, boards - 12, RX1 - RX0 + 2 * WT, 12), 'h-timber')
  for (let x = RX0 + 20; x < RX1 - 20; x += 64) {
    hatched(L, rect(x, boards, 30, 44), 'h-timber')
    L.fine.push(el(`M${x + 4} ${boards + 6}l22 32M${x + 26} ${boards + 6}l-22 32`)) // timber end-grain cross
  }
  L.dims.push(hDim(boards - 30, RX0 + 20, RX0 + 84, 'SPACING'), vDim(RX1 + WT + 18, boards, boards + 44, 'DEPTH'))
  callouts(L, [
    { text: 'FLOOR BOARDS ABOVE', at: [RX0 - WT, boards - 6] },
    { text: 'EXPOSED BEAM (JOIST)', at: [RX0 + 20, boards + 22] },
    { text: 'WALL', at: [RX0 - WT, 360] },
  ], RX0 - WT - 10)
  return finish({
    id: 'exposed-beams', title: 'Exposed Beams', subtitle: 'Structural timbers left visible below the floor above', view: 'SECTION', sheetNo: 'CLG-04',
    source: ORIGINAL, scale: { unitPx: 64, unitName: 'beam spacings', count: 3 },
    description: 'Section across a room ceiling where the timber beams carrying the floor above are left exposed instead of being hidden behind plaster.',
  }, L, B)
}

function tented(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  roomSection(L, B)
  const eave = 260
  const apex = 170
  const mid = (RX0 + RX1) / 2
  L.cut.push(el(path([[RX0, eave], [mid, apex], [RX1, eave]])))
  // draped fabric folds radiating from the apex
  for (let k = 1; k < 8; k++) {
    const x = RX0 + ((RX1 - RX0) * k) / 8
    const y = eave - (eave - apex) * (1 - Math.abs(x - mid) / (mid - RX0))
    L.fine.push(el(`M${f(mid)} ${apex}Q${f((mid + x) / 2)} ${f((apex + y) / 2 + 10)} ${f(x)} ${f(y)}`))
  }
  // scalloped valance at the eaves
  const sc: string[] = []
  for (let x = RX0; x < RX1; x += 34) sc.push(`M${x} ${eave}q17 22 34 0`)
  L.profile.push(el(sc.join('')))
  L.profile.push(circle([mid, apex + 10], 6))
  L.notes.push(text(mid, FLOOR - 120, 'ROOM', 'text-anchor="middle" class="t-sub"'))
  callouts(L, [
    { text: 'CROWN BOSS', at: [mid - 6, apex + 10] },
    { text: 'TENT PANELS', at: [RX0 + 60, eave - 30] },
    { text: 'SCALLOPED VALANCE', at: [RX0 + 17, eave + 11] },
    { text: 'WALL', at: [RX0 - WT, 360] },
  ], RX0 - WT - 10)
  return finish({
    id: 'tented-ceiling', title: 'Tented Ceiling', subtitle: 'Ceiling shaped like a canopy of fabric', view: 'SECTION', sheetNo: 'CLG-05',
    source: ORIGINAL, scale: { unitPx: (RX1 - RX0) / 10, unitName: 'tenths of room width', count: 4 },
    description: 'Section through a room whose ceiling rises to a central point in panels like a fabric tent, edged with a scalloped valance.',
  }, L, B)
}

// ---------------------------------------------------------------------------
// Reflected ceiling plans
// ---------------------------------------------------------------------------
function rcpRoom(L: Layers, B: Bounds, x0: number, y0: number, w: number, h: number) {
  hatched(L, [[x0 - 16, y0 - 16], [x0 + w + 16, y0 - 16], [x0 + w + 16, y0 + h + 16], [x0 - 16, y0 + h + 16], [x0 - 16, y0 - 16], [x0, y0], [x0, y0 + h], [x0 + w, y0 + h], [x0 + w, y0], [x0, y0]])
  B.add([x0 - 16, y0 - 16], [x0 + w + 16, y0 + h + 16])
}

function rcpConvention(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 190
  const y0 = 80
  const w = 360
  const h = 300
  rcpRoom(L, B, x0, y0, w, h)
  // 600 mm grid
  const g = 30
  const grid: string[] = []
  for (let x = x0 + g; x < x0 + w; x += g) grid.push(`M${x} ${y0}V${y0 + h}`)
  for (let y = y0 + g; y < y0 + h; y += g) grid.push(`M${x0} ${y}H${x0 + w}`)
  L.shading.push(el(grid.join('')))
  // light fixtures (2x4), supply diffusers, return grilles, sprinklers, ceiling height tag
  const lights: Pt[] = [[x0 + 2 * g, y0 + 2 * g], [x0 + 6 * g, y0 + 2 * g], [x0 + 10 * g, y0 + 2 * g], [x0 + 2 * g, y0 + 6 * g], [x0 + 6 * g, y0 + 6 * g], [x0 + 10 * g, y0 + 6 * g]]
  for (const [x, y] of lights) {
    masked(L, rect(x, y, g, 2 * g))
    L.profile.push(el(path(rect(x, y, g, 2 * g), true)), line([x, y], [x + g, y + 2 * g]), line([x + g, y], [x, y + 2 * g]))
  }
  for (const [x, y] of [[x0 + 4 * g, y0 + 4 * g], [x0 + 8 * g, y0 + 4 * g]] as Pt[]) {
    masked(L, rect(x, y, g, g))
    L.profile.push(el(path(rect(x, y, g, g), true)), el(path(rect(x + 7, y + 7, g - 14, g - 14), true)), line([x, y], [x + 7, y + 7]), line([x + g, y], [x + g - 7, y + 7]), line([x, y + g], [x + 7, y + g - 7]), line([x + g, y + g], [x + g - 7, y + g - 7]))
  }
  masked(L, rect(x0 + 6 * g, y0 + 8 * g, g, g))
  L.profile.push(el(path(rect(x0 + 6 * g, y0 + 8 * g, g, g), true)))
  for (let k = 1; k < 5; k++) L.fine.push(line([x0 + 6 * g + 3, y0 + 8 * g + (k * g) / 5], [x0 + 7 * g - 3, y0 + 8 * g + (k * g) / 5]))
  for (const [x, y] of [[x0 + 3 * g, y0 + 4.5 * g], [x0 + 7 * g, y0 + 4.5 * g], [x0 + 11 * g, y0 + 4.5 * g]] as Pt[]) L.profile.push(circle([x, y], 3), line([x - 6, y], [x + 6, y]))
  L.profile.push(`<ellipse cx="${x0 + w - 50}" cy="${y0 + h - 30}" rx="34" ry="13"/>`)
  L.notes.push(text(x0 + w - 50, y0 + h - 27, 'CLG +2700', 'text-anchor="middle" class="t-small"'))
  // legend
  const lx = x0
  const ly = y0 + h + 34
  const legend: Array<[string, string]> = [['⊠', 'LIGHT FIXTURE'], ['◰', 'SUPPLY DIFFUSER'], ['≡', 'RETURN GRILLE'], ['⊖', 'SPRINKLER HEAD']]
  legend.forEach(([sym, label], i) => L.notes.push(text(lx + i * 92, ly, `${sym} ${label}`, 'class="t-small"')))
  B.add([lx, ly + 6])
  L.dims.push(hDim(y0 - 30, x0, x0 + g, '600'))
  callouts(L, [
    { text: 'CEILING GRID', at: [x0 + g, y0 + g * 0.5] },
    { text: 'LIGHT FIXTURE', at: [x0 + 2 * g, y0 + 3 * g] },
    { text: 'SUPPLY DIFFUSER', at: [x0 + 4 * g, y0 + 4.5 * g] },
    { text: 'SPRINKLER', at: [x0 + 3 * g - 6, y0 + 4.5 * g] },
    { text: 'RETURN GRILLE', at: [x0 + 6 * g, y0 + 8.5 * g] },
    { text: 'WALL (CUT)', at: [x0 - 16, y0 + h - 40] },
  ], x0 - 16)
  return finish({
    id: 'reflected-ceiling-plan', title: 'Reflected Ceiling Plan', subtitle: 'The ceiling drawn as if mirrored onto the floor', view: RCP, sheetNo: 'CLG-06',
    source: ORIGINAL, scale: { unitPx: g, unitName: '600 mm grid', count: 5 },
    description: 'Example reflected ceiling plan of an office ceiling: a 600 mm tile grid with light fittings, air diffusers, a return grille, sprinkler heads and a ceiling height tag, with a legend.',
  }, L, B)
}

function coffered(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 190
  const y0 = 80
  const n = 4
  const cell = 86
  const beam = 12
  rcpRoom(L, B, x0, y0, n * cell + beam, n * cell + beam)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const x = x0 + beam + i * cell
      const y = y0 + beam + j * cell
      const s = cell - beam
      L.profile.push(el(path(rect(x, y, s, s), true)))
      L.fine.push(el(path(rect(x + 8, y + 8, s - 16, s - 16), true)), el(path(rect(x + 14, y + 14, s - 28, s - 28), true)))
      L.shading.push(el(`M${x} ${y}l8 8M${x + s} ${y}l-8 8M${x + s} ${y + s}l-8 -8M${x} ${y + s}l8 -8`))
      const c: Pt = [x + s / 2, y + s / 2]
      L.profile.push(circle(c, 10))
      for (let k = 0; k < 8; k++) {
        const a = (k * Math.PI) / 4
        L.fine.push(el(`M${f(c[0])} ${f(c[1])}Q${f(c[0] + 9 * Math.cos(a + 0.4))} ${f(c[1] + 9 * Math.sin(a + 0.4))} ${f(c[0] + 10 * Math.cos(a))} ${f(c[1] + 10 * Math.sin(a))}`))
      }
    }
  }
  L.dims.push(hDim(y0 - 30, x0 + beam, x0 + cell, 'COFFER'), hDim(y0 - 30, x0, x0 + beam, ''))
  callouts(L, [
    { text: 'BEAM (RIB)', at: [x0 + cell + beam / 2, y0 + cell * 0.5] },
    { text: 'COFFER', at: [x0 + beam + 8, y0 + beam + 30] },
    { text: 'STEPPED MOULDING', at: [x0 + beam + 14, y0 + cell + beam + 40] },
    { text: 'ROSETTE', at: [x0 + beam + (cell - beam) / 2 - 10, y0 + 2 * cell + beam + (cell - beam) / 2] },
  ], x0 - 16)
  return finish({
    id: 'coffered-ceiling', title: 'Coffered Ceiling', subtitle: 'Grid of sunken panels between crossing beams', view: RCP, sheetNo: 'CLG-07',
    source: ORIGINAL, scale: { unitPx: cell / 2, unitName: 'half coffers', count: 4 },
    description: 'Plan looking up at a ceiling divided by crossing beams into a grid of square sunken panels, each with stepped mouldings and a carved rosette at its centre.',
  }, L, B)
}

function ceilingRose(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [360, 300]
  for (const r of [150, 142, 120, 64, 56, 20]) L[r === 150 || r === 64 ? 'profile' : 'fine'].push(circle(c, r))
  // bead ring
  for (let k = 0; k < 60; k++) L.fine.push(circle([c[0] + 146 * Math.cos((k * Math.PI) / 30), c[1] + 146 * Math.sin((k * Math.PI) / 30)], 2))
  // acanthus petals between 64 and 120
  for (let k = 0; k < 16; k++) {
    const a = (k * Math.PI) / 8
    const p = (r: number, da: number): Pt => [c[0] + r * Math.cos(a + da), c[1] + r * Math.sin(a + da)]
    L.profile.push(el(`M${f(p(66, -0.1)[0])} ${f(p(66, -0.1)[1])}Q${f(p(100, -0.24)[0])} ${f(p(100, -0.24)[1])} ${f(p(118, 0)[0])} ${f(p(118, 0)[1])}Q${f(p(100, 0.24)[0])} ${f(p(100, 0.24)[1])} ${f(p(66, 0.1)[0])} ${f(p(66, 0.1)[1])}`))
    L.fine.push(line(p(70, 0), p(108, 0)))
  }
  // central pendant fixing
  L.profile.push(circle(c, 8))
  L.center.push(line([c[0] - 170, c[1]], [c[0] + 170, c[1]]), line([c[0], c[1] - 170], [c[0], c[1] + 170]))
  B.add([c[0] - 170, c[1] - 170], [c[0] + 170, c[1] + 170])
  L.dims.push(hDim(c[1] + 180, c[0] - 150, c[0] + 150, 'DIAMETER'))
  callouts(L, [
    { text: 'BEAD MOULDING', at: [c[0] - 146, c[1] - 20] },
    { text: 'LEAF PETALS', at: [c[0] - 100, c[1] - 30] },
    { text: 'INNER RING', at: [c[0] - 64, c[1] + 20] },
    { text: 'PENDANT FIXING', at: [c[0] - 8, c[1] + 4] },
  ], c[0] - 170)
  return finish({
    id: 'ceiling-rose', title: 'Ceiling Rose', subtitle: 'Moulded medallion around a light fitting', view: RCP, sheetNo: 'CLG-08',
    source: ORIGINAL, scale: { unitPx: 30, unitName: '0.1 m (indicative)', count: 5 },
    description: 'Plan looking up at a round plaster ornament on a ceiling: rings of beads and mouldings around sixteen leaf-shaped petals, with the light fitting hanging from its centre.',
  }, L, B)
}

function muqarnasCeiling(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [360, 300]
  const n = 8
  const tiers = [24, 52, 84, 118, 150]
  const star = (r: number, phase: number): Pt[] =>
    Array.from({ length: 2 * n + 1 }, (_, i) => {
      const a = (i * Math.PI) / n + phase
      const rr = i % 2 ? r * 0.8 : r
      return [c[0] + rr * Math.cos(a), c[1] + rr * Math.sin(a)] as Pt
    })
  tiers.forEach((r, t) => {
    const phase = t % 2 ? Math.PI / (2 * n) : 0
    const s = star(r, phase)
    L[t === tiers.length - 1 ? 'profile' : 'fine'].push(el(path(s, true)))
    if (t > 0) {
      // facets: connect this tier's points to the previous tier's points
      const prev = star(tiers[t - 1], (t - 1) % 2 ? Math.PI / (2 * n) : 0)
      for (let i = 0; i < 2 * n; i++) {
        L.fine.push(line(s[i], prev[i]))
        // small pointed niche in each cell
        const m: Pt = [(s[i][0] + s[i + 1][0]) / 2, (s[i][1] + s[i + 1][1]) / 2]
        const pm: Pt = [(prev[i][0] + prev[i + 1][0]) / 2, (prev[i][1] + prev[i + 1][1]) / 2]
        L.shading.push(el(`M${f(s[i][0])} ${f(s[i][1])}Q${f((m[0] + pm[0]) / 2)} ${f((m[1] + pm[1]) / 2)} ${f(s[i + 1][0])} ${f(s[i + 1][1])}`))
      }
    }
  })
  L.profile.push(circle(c, 12))
  // square bay with squinch corners
  const h = 175
  rcpRoom(L, B, c[0] - h, c[1] - h, 2 * h, 2 * h)
  for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) L.fine.push(line([c[0] + sx * h, c[1] + sy * 60], [c[0] + sx * 60, c[1] + sy * h]))
  callouts(L, [
    { text: 'OUTER TIER', at: [c[0] - 150, c[1] + 4] },
    { text: 'CELLS (NICHES)', at: [c[0] - 100, c[1] - 20] },
    { text: 'STAR TIERS', at: [c[0] - 52, c[1] + 10] },
    { text: 'CROWN', at: [c[0] - 12, c[1]] },
    { text: 'CORNER TRANSITION', at: [c[0] - h + 30, c[1] - h + 60] },
  ], c[0] - h - 16)
  return finish({
    id: 'muqarnas-ceiling', title: 'Muqarnas Ceiling', subtitle: 'Tiers of small niches rising to a star', view: RCP, sheetNo: 'CLG-09',
    source: 'Simplified eight-fold tier scheme in the manner of Islamic muqarnas vaulting. Original drawing by Project Exodus; not a measured survey of a specific building.',
    scale: { unitPx: 34, unitName: 'tiers (indicative)', count: 4 },
    description: 'Plan looking up at a vault built from many tiers of small faceted niches stepping inward like a honeycomb to an eight-pointed star at the crown.',
  }, L, B)
}

// ---------------------------------------------------------------------------
// Wall constructions (sections)
// ---------------------------------------------------------------------------
function wallSection(kind: 'adobe' | 'rammed-earth' | 'coping' | 'parapet' | 'plinth' | 'curtain-wall'): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const ground = 500
  let meta: { title: string; subtitle: string; sheetNo: string; description: string; source?: string; scale: SheetSpec['scale'] }
  const items: { text: string; at: Pt }[] = []

  if (kind === 'adobe' || kind === 'rammed-earth') {
    const t = 80
    const top = 160
    const x = cx - t / 2
    hatched(L, rect(x - 14, ground - 50, t + 28, 70), 'h-stone') // stone footing
    hatched(L, rect(x - 40, ground, t + 80, 20), 'h-earth', 'profile')
    if (kind === 'adobe') {
      const bricks: string[] = []
      for (let y = ground - 50, row = 0; y > top + 10; y -= 18, row++) {
        bricks.push(`M${x} ${y}H${x + t}`)
        const off = row % 2 ? t / 2 : 0
        bricks.push(`M${x + off} ${y}V${y - 18}`)
        if (!off) bricks.push(`M${x + t / 2} ${y}V${y - 18}`)
      }
      L.hatch.push(`<path d="${path(rect(x, top, t, ground - 50 - top), true)}" fill="url(#h-earth)" stroke="none"/>`)
      L.fine.push(el(bricks.join('')))
      L.cut.push(el(path(rect(x, top, t, ground - 50 - top), true)))
      L.profile.push(el(path(rect(x - 5, top, 5, ground - 50 - top), true)), el(path(rect(x + t, top, 5, ground - 50 - top), true)))
      // vigas through the wall top, parapet
      hatched(L, ring([x + t / 2, top + 40], 12, 0, 2 * Math.PI, 24), 'h-timber')
      L.profile.push(el(path(rect(x + t, top + 28, 120, 24), true)))
      L.fine.push(el(`M${x + t + 120} ${top + 28}a6 12 0 0 1 0 24`))
      items.push({ text: 'PARAPET', at: [x, top + 10] }, { text: 'VIGA (ROOF BEAM)', at: [x + t / 2 - 12, top + 40] }, { text: 'MUD PLASTER', at: [x - 5, 260] }, { text: 'ADOBE BRICKS', at: [x + 10, 330] }, { text: 'STONE FOOTING', at: [x - 14, ground - 25] })
      meta = { title: 'Adobe', subtitle: 'Sun-dried earth bricks in thick walls', sheetNo: 'WAL-01', scale: { unitPx: t / 2, unitName: '300 mm', count: 3 },
        description: 'Section through a thick wall of sun-dried mud bricks on a stone footing, plastered with mud on both faces, with round roof beams passing through near the top.' }
    } else {
      L.hatch.push(`<path d="${path(rect(x, top, t, ground - 50 - top), true)}" fill="url(#h-earth)" stroke="none"/>`)
      L.cut.push(el(path(rect(x, top, t, ground - 50 - top), true)))
      for (let y = ground - 50 - 22; y > top; y -= 22) L.fine.push(line([x, y], [x + t, y]))
      // formwork on the current lift, clamps
      L.fine.push(el(path(rect(x - 12, top - 44, 12, 60), true), 'stroke-dasharray="4 2"'), el(path(rect(x + t, top - 44, 12, 60), true), 'stroke-dasharray="4 2"'))
      L.fine.push(line([x - 20, top - 30], [x + t + 20, top - 30], 'stroke-dasharray="4 2"'))
      arrow(L, [x + t / 2, top - 70], [x + t / 2, top - 10])
      L.notes.push(text(x + t / 2 + 6, top - 60, 'TAMP', 'class="t-small t-accent"'))
      // roof overhang (hat)
      L.profile.push(el(path([[x - 70, top - 70], [x + t + 40, top - 110]])))
      items.push({ text: 'ROOF OVERHANG', at: [x - 40, top - 69] }, { text: 'FORMWORK', at: [x - 12, top - 20] }, { text: 'COMPACTED LIFTS', at: [x, 260] }, { text: 'STONE FOOTING', at: [x - 14, ground - 25] })
      meta = { title: 'Rammed Earth', subtitle: 'Damp soil compacted in layers inside formwork', sheetNo: 'WAL-02', scale: { unitPx: 22, unitName: '150 mm lifts', count: 4 },
        description: 'Section through a wall built by pounding damp earth in shallow layers between temporary boards, with the formwork and tamping shown at the top and a roof overhang to keep rain off.' }
    }
    B.add([x - 120, top - 120], [x + t + 120, ground + 20])
  } else if (kind === 'coping' || kind === 'parapet' || kind === 'plinth') {
    const t = 70
    const x = cx - t / 2
    if (kind === 'plinth') {
      const top = 180
      hatched(L, rect(x, top, t, ground - 60 - top), 'h-brick')
      const plinth: Pt[] = [[x - 18, ground - 60], [x - 18, ground - 120], [x - 6, ground - 132], [x, ground - 132], [x, ground - 60]]
      hatched(L, [...plinth, [x + t, ground - 60], [x + t, ground + 20], [x - 18, ground + 20]], 'h-stone')
      L.cut.push(line([x - 4, ground - 140], [x + t, ground - 140], 'stroke-width="3"'))
      hatched(L, rect(x - 80, ground, 60, 20), 'h-earth', 'profile')
      items.push({ text: 'WALL', at: [x, 260] }, { text: 'DAMP-PROOF COURSE', at: [x, ground - 140] }, { text: 'CHAMFERED SET-OFF', at: [x - 12, ground - 126] }, { text: 'PLINTH', at: [x - 18, ground - 90] }, { text: 'GROUND', at: [x - 80, ground + 10] })
      meta = { title: 'Plinth', subtitle: 'Projecting base where a wall meets the ground', sheetNo: 'WAL-03', scale: { unitPx: t / 2, unitName: '100 mm', count: 4 },
        description: 'Section through the foot of a wall where a thicker band of stone projects at the base, its top cut at an angle to shed water, with a damp-proof layer above.' }
      B.add([x - 90, top], [x + t + 60, ground + 20])
    } else if (kind === 'coping') {
      const top = 220
      hatched(L, rect(x, top, t, ground - top), 'h-brick')
      const cope: Pt[] = [[x - 16, top], [x - 16, top - 22], [cx, top - 40], [x + t + 16, top - 22], [x + t + 16, top]]
      hatched(L, cope, 'h-stone')
      L.cut.push(line([x, top + 2], [x + t, top + 2], 'stroke-width="3"'))
      for (const dx of [x - 8, x + t + 8]) L.profile.push(circle([dx, top - 3], 3))
      arrow(L, [cx + 6, top - 60], [x + t + 22, top - 16])
      L.notes.push(text(x + t + 26, top - 18, 'SHEDS WATER', 'class="t-small t-accent"'))
      L.notes.push(text(x + t + 26, top + 8, 'DRIP GROOVE', 'class="t-small"'))
      items.push({ text: 'COPING STONE', at: [x - 16, top - 12] }, { text: 'WEATHERED (SLOPED) TOP', at: [cx - 20, top - 30] }, { text: 'DAMP-PROOF COURSE', at: [x, top + 2] }, { text: 'WALL', at: [x, 360] })
      meta = { title: 'Coping', subtitle: 'Protective cap on top of a wall', sheetNo: 'WAL-04', scale: { unitPx: t / 2, unitName: '100 mm', count: 4 },
        description: 'Section through the top of a free-standing wall capped by a wider stone with a sloped top, overhanging on both sides with grooves underneath so rain drips clear of the wall.' }
      B.add([x - 60, top - 70], [x + t + 120, ground])
    } else {
      const roof = 300
      hatched(L, rect(x, 160, t, ground - 160), 'h-brick')
      hatched(L, rect(x + t, roof, 220, 26), 'h-concrete')
      L.cut.push(el(path([[x + t + 220, roof - 4], [x + t, roof - 4], [x + t, roof - 70], [x + t - 6, roof - 70]]), 'stroke-width="2.6"'))
      const cope: Pt[] = [[x - 12, 160], [x - 12, 146], [x + t + 12, 136], [x + t + 12, 160]]
      hatched(L, cope, 'h-stone')
      L.fine.push(line([x + t + 4, roof - 80], [x + t + 4, roof - 4]))
      L.notes.push(text(x + t + 120, roof - 10, 'ROOF', 'class="t-sub"'))
      L.dims.push(vDim(x - 30, roof, 146, 'PARAPET HT'))
      items.push({ text: 'COPING', at: [x - 12, 152] }, { text: 'PARAPET WALL', at: [x, 230] }, { text: 'MEMBRANE UPSTAND', at: [x + t, roof - 50] }, { text: 'ROOF SLAB', at: [x + t + 40, roof + 13] }, { text: 'EXTERNAL WALL', at: [x, 420] })
      meta = { title: 'Parapet', subtitle: 'Low wall rising above a roof edge', sheetNo: 'WAL-05', scale: { unitPx: t / 2, unitName: '100 mm', count: 4 },
        description: 'Section through the edge of a flat roof where the outside wall continues above the roof as a low protective wall, with the waterproof membrane turned up against it and a coping on top.' }
      B.add([x - 60, 136], [x + t + 230, ground])
    }
    L.profile.push(line([cx - 160, ground], [cx + 200, ground]))
  } else {
    // curtain wall: vertical section through two floors
    const x = 360
    const fl = [180, 400]
    for (const y of fl) {
      hatched(L, rect(160, y, x - 190, 24), 'h-concrete')
      // anchor bracket and firestop at slab edge
      L.profile.push(el(path([[x - 30, y + 4], [x - 6, y + 4], [x - 6, y + 20]])))
      L.fine.push(el(path(rect(x - 30, y, 24, 24), true), 'stroke-dasharray="2 2"'))
    }
    // mullion line, transoms, glazing units, spandrel
    L.profile.push(line([x, 120], [x, 520]), line([x + 26, 120], [x + 26, 520]))
    for (const y of [176, 250, 396, 470]) L.profile.push(el(path(rect(x - 4, y, 34, 10), true)))
    for (const [y0, y1] of [[186, 250], [260, 396], [406, 470], [480, 520]] as Array<[number, number]>) {
      const glazed = !(y0 === 186 || y0 === 406)
      if (glazed) {
        L.fine.push(line([x + 8, y0 + 2], [x + 8, y1 - 2]), line([x + 18, y0 + 2], [x + 18, y1 - 2]))
      } else {
        hatched(L, rect(x + 6, y0 + 2, 14, y1 - y0 - 4), 'h-concrete', 'fine')
      }
    }
    L.notes.push(text(x + 40, 330, 'OUTSIDE', 'class="t-sub"'), text(220, 330, 'INSIDE', 'class="t-sub"'))
    items.push({ text: 'FLOOR SLAB', at: [160, 192] }, { text: 'ANCHOR BRACKET', at: [x - 30, 184] }, { text: 'FIRESTOP', at: [x - 30, 196] }, { text: 'SPANDREL PANEL', at: [x + 6, 218] }, { text: 'TRANSOM', at: [x - 4, 255] }, { text: 'INSULATED GLASS UNIT', at: [x + 8, 330] })
    meta = { title: 'Curtain Wall', subtitle: 'Non-load-bearing glass skin hung off the floors', sheetNo: 'WAL-06', scale: { unitPx: 55, unitName: 'metres (indicative)', count: 3 },
      description: 'Vertical section through a glass building skin of aluminium framing and double-glazed panels, hung from the edge of each floor slab on brackets, with opaque panels hiding the floor zones.' }
    B.add([160, 120], [x + 120, 520])
  }
  callouts(L, items, cx - 200)
  return finish({ id: kind, view: 'SECTION', source: meta.source ?? ORIGINAL, ...meta }, L, B)
}

// ---------------------------------------------------------------------------
// Interior wall elevation (dado, chair rail, baseboard, crown molding, wainscot)
// ---------------------------------------------------------------------------
type WallPart = 'dado' | 'chair-rail' | 'baseboard' | 'crown-molding' | 'wainscot'

function wallElevation(part: WallPart): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 170
  const x1 = 490
  const floor = 500
  const ceil = 100
  const skirt = 30
  const rail = 330
  const pic = 150
  const cornice = 28
  // ceiling and floor lines (cut)
  hatched(L, rect(x0 - 10, ceil - 14, x1 - x0 + 20, 14), 'h-concrete')
  hatched(L, rect(x0 - 10, floor, x1 - x0 + 20, 14), 'h-timber')
  const zones: Record<WallPart, Pt[]> = {
    'crown-molding': rect(x0, ceil, x1 - x0, cornice),
    'chair-rail': rect(x0, rail - 6, x1 - x0, 12),
    baseboard: rect(x0, floor - skirt, x1 - x0, skirt),
    dado: rect(x0, rail + 6, x1 - x0, floor - skirt - rail - 6),
    wainscot: rect(x0, rail - 6, x1 - x0, floor - rail + 6),
  }
  // cornice, picture rail, dado rail, skirting
  L.profile.push(el(path(zones['crown-molding'], true)), line([x0, ceil + 10], [x1, ceil + 10]), line([x0, ceil + 18], [x1, ceil + 18]))
  L.fine.push(line([x0, pic], [x1, pic]), line([x0, pic + 4], [x1, pic + 4]))
  L.profile.push(el(path(zones['chair-rail'], true)), line([x0, rail], [x1, rail]))
  L.profile.push(el(path(zones.baseboard, true)), line([x0, floor - skirt + 6], [x1, floor - skirt + 6]))
  if (part === 'wainscot') {
    // raised timber panels between stiles and rails
    const pw = 60
    for (let x = x0 + 12; x + pw <= x1; x += pw + 12) {
      L.profile.push(el(path(rect(x, rail + 18, pw, floor - skirt - rail - 30), true)))
      L.fine.push(el(path(rect(x + 8, rail + 26, pw - 16, floor - skirt - rail - 46), true)))
      L.shading.push(el(`M${x} ${rail + 18}l8 8M${x + pw} ${rail + 18}l-8 8M${x + pw} ${floor - skirt - 12}l-8 -8M${x} ${floor - skirt - 12}l8 -8`))
    }
  }
  const z = zones[part]
  highlight(L, z, part === 'wainscot' || part === 'dado' ? 'h-timber' : 'h-stone')
  B.add([x0 - 10, ceil - 14], [x1 + 10, floor + 14])
  L.dims.push(vDim(x1 + 22, floor, rail, 'RAIL HT ≈ 900'), vDim(x1 + 22, ceil, floor, 'CEILING HT'))
  const labels: { text: string; at: Pt }[] = [
    { text: 'CROWN MOLDING (CORNICE)', at: [x0, ceil + 14] },
    { text: 'PICTURE RAIL', at: [x0, pic + 2] },
    { text: 'FIELD', at: [x0, 240] },
    { text: 'CHAIR (DADO) RAIL', at: [x0, rail] },
    { text: part === 'wainscot' ? 'WAINSCOT PANELLING' : 'DADO', at: [x0, (rail + floor - skirt) / 2] },
    { text: 'BASEBOARD (SKIRTING)', at: [x0, floor - skirt / 2] },
  ]
  callouts(L, labels, x0 - 10)
  const titles: Record<WallPart, [string, string, string, string]> = {
    dado: ['Dado', 'Lower zone of a wall, below the dado rail', 'INT-01', 'Elevation of a room wall divided like a column into base, middle and top, with the lower zone between the skirting and the rail highlighted.'],
    'chair-rail': ['Chair Rail', 'Moulding at chair-back height', 'INT-02', 'Elevation of a room wall with the horizontal moulding at about waist height, which protects the wall from chair backs, highlighted.'],
    baseboard: ['Baseboard', 'Board covering the joint of wall and floor', 'INT-03', 'Elevation of a room wall with the moulded board running along the bottom where the wall meets the floor highlighted.'],
    'crown-molding': ['Crown Molding', 'Moulding where wall meets ceiling', 'INT-04', 'Elevation of a room wall with the moulding that covers the junction of wall and ceiling highlighted.'],
    wainscot: ['Wainscot', 'Panelled timber lining the lower wall', 'WAL-07', 'Elevation of a room wall with timber panelling of raised panels between rails and stiles covering the lower part of the wall, highlighted.'],
  }
  const [title, subtitle, sheetNo, description] = titles[part]
  return finish({
    id: part, title, subtitle, view: 'INTERIOR ELEVATION', sheetNo, source: ORIGINAL,
    scale: { unitPx: 37, unitName: '300 mm (indicative)', count: 4 }, description,
  }, L, B)
}

// ---------------------------------------------------------------------------
// Log wall, niche, alcove
// ---------------------------------------------------------------------------
function logCabin(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 160
  const corner = 440
  const base = 480
  const d = 30
  for (let k = 0; k < 10; k++) {
    const y = base - (k + 1) * d
    // long wall logs in elevation
    L.profile.push(el(path(rect(x0, y, corner - x0, d - 2), true)))
    L.shading.push(line([x0 + 4, y + d * 0.35], [corner - 4, y + d * 0.35], 'stroke-dasharray="20 6"'))
    // chinking gap
    L.fine.push(line([x0, y - 1], [corner, y - 1]))
    // crossing log ends at the corner (alternate courses), with saddle notch
    if (k % 2 === 0) {
      L.profile.push(circle([corner + d / 2 + 4, y + d / 2], d / 2))
      L.fine.push(circle([corner + d / 2 + 4, y + d / 2], d / 4), circle([corner + d / 2 + 4, y + d / 2], d / 8))
    } else {
      L.profile.push(el(path(rect(corner, y, d + 30, d - 2), true)))
    }
  }
  hatched(L, rect(x0 - 10, base, corner - x0 + d + 60, 24), 'h-stone')
  // window opening
  L.profile.push(el(path(rect(280, base - 7 * d, 90, 3 * d), true)))
  L.fine.push(line([325, base - 7 * d], [325, base - 4 * d]))
  B.add([x0 - 10, base - 10 * d], [corner + d + 60, base + 24])
  L.dims.push(vDim(corner + d + 76, base, base - d, 'LOG Ø'))
  callouts(L, [
    { text: 'LOG', at: [x0, base - 2.5 * d] },
    { text: 'CHINKING', at: [x0, base - 4 * d - 1] },
    { text: 'WINDOW', at: [280, base - 5.5 * d] },
    { text: 'STONE SILL', at: [x0 - 10, base + 12] },
  ], x0 - 10)
  L.notes.push(text(corner + d + 4, base - 10 * d - 10, 'SADDLE-NOTCHED CORNER', 'text-anchor="middle" class="t-small"'))
  return finish({
    id: 'log-cabin', title: 'Log Cabin', subtitle: 'Horizontal logs interlocking at notched corners', view: 'ELEVATION', sheetNo: 'WAL-08',
    source: ORIGINAL, scale: { unitPx: d, unitName: 'log diameters', count: 4 },
    description: 'Elevation of a wall of stacked round logs with filled gaps between them, the logs of the two walls crossing alternately at the corner where they are notched over each other.',
  }, L, B)
}

function niche(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const w = 120
  const sill = 430
  const spring = 220
  const outer: Pt[] = [[cx - w / 2 - 20, sill + 30], [cx - w / 2 - 20, spring], ...ring([cx, spring], w / 2 + 20, Math.PI, 2 * Math.PI, 30), [cx + w / 2 + 20, sill + 30]]
  L.profile.push(el(path(outer)))
  const inner: Pt[] = [[cx - w / 2, sill], [cx - w / 2, spring], ...ring([cx, spring], w / 2, Math.PI, 2 * Math.PI, 30), [cx + w / 2, sill], [cx - w / 2, sill]]
  L.profile.push(el(path(inner)))
  // shell hood: radiating flutes in the semi-dome
  for (let k = 1; k < 10; k++) {
    const a = Math.PI + (k * Math.PI) / 10
    L.fine.push(line([cx, spring + 10], [cx + (w / 2) * Math.cos(a), spring + (w / 2) * Math.sin(a)]))
  }
  // shading inside the recess (depth)
  L.shading.push(el(path(rect(cx - w / 2 + 6, spring + 4, 10, sill - spring - 8), true)))
  // sill and bracket
  L.profile.push(el(path(rect(cx - w / 2 - 30, sill, w + 60, 14), true)), el(`M${cx - 20} ${sill + 14}q20 30 40 0`))
  // vase on the sill
  L.fine.push(el(`M${cx - 14} ${sill}q-14 -40 0 -70h28q14 30 0 70z`))
  // wall ashlar
  const wall: Pt[] = [[cx - 200, 120], [cx + 200, 120], [cx + 200, 520], [cx - 200, 520]]
  const defs = courses(L, 'ni-wall', wall, 0, 24)
  masked(L, outer, 'shading') // hide coursing inside the niche, below its own linework
  L.profile.push(el(path(outer)))
  B.add([cx - 200, 120], [cx + 200, 520])
  L.dims.push(hDim(sill + 50, cx - w / 2, cx + w / 2, 'WIDTH'))
  callouts(L, [
    { text: 'SHELL HOOD', at: [cx - w / 4, spring - w / 3] },
    { text: 'ARCHED SURROUND', at: [cx - w / 2 - 20, spring + 60] },
    { text: 'RECESS', at: [cx - w / 2 + 6, spring + 120] },
    { text: 'SILL', at: [cx - w / 2 - 30, sill + 7] },
  ], cx - 200)
  return finish({
    id: 'niche', title: 'Niche', subtitle: 'Shallow arched recess for a statue or vase', view: 'ELEVATION', sheetNo: 'WAL-09',
    source: ORIGINAL, scale: { unitPx: w / 4, unitName: 'quarters of width', count: 4 },
    description: 'Elevation of a round-headed recess set into a wall, its half-dome hood carved like a scallop shell, with a projecting sill holding a vase.',
  }, L, B, defs)
}

function alcove(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 165
  const y0 = 130
  const W = 340
  const D = 260
  const t = 18
  const aw = 150
  const ad = 70
  const ax = x0 + (W - aw) / 2
  // room walls (cut), with the alcove recessed into the top wall
  hatched(L, rect(x0 - t, y0 - t, ax - x0 + t, t))
  hatched(L, rect(ax + aw, y0 - t, x0 + W - ax - aw + t, t))
  hatched(L, rect(ax - t, y0 - ad - t, aw + 2 * t, t))
  hatched(L, rect(ax - t, y0 - ad, t, ad - t))
  hatched(L, rect(ax + aw, y0 - ad, t, ad - t))
  hatched(L, rect(x0 - t, y0, t, D))
  hatched(L, rect(x0 + W, y0, t, D))
  hatched(L, rect(x0 - t, y0 + D, W + 2 * t, t))
  // arch over the alcove opening (above the cut): dashed
  L.fine.push(line([ax, y0], [ax + aw, y0], 'stroke-dasharray="6 4"'))
  // built-in bed / seat in the alcove
  L.profile.push(el(path(rect(ax + 8, y0 - ad + 8, aw - 16, ad - 8), true)))
  L.fine.push(el(path(rect(ax + 14, y0 - ad + 12, 40, ad - 20), true)))
  // door
  L.profile.push(el(`M${x0 + 40} ${y0 + D}v-60a60 60 0 0 1 60 60`))
  B.add([x0 - t, y0 - t - ad], [x0 + W + t, y0 + D + t])
  L.dims.push(hDim(y0 - t - ad - 20, ax, ax + aw, 'ALCOVE'), vDim(x0 + W + t + 18, y0 - ad, y0, 'DEPTH'))
  callouts(L, [
    { text: 'ALCOVE', at: [ax + 20, y0 - ad + 30] },
    { text: 'ARCH ABOVE (DASHED)', at: [ax, y0] },
    { text: 'MAIN ROOM', at: [x0 + 60, y0 + 120] },
    { text: 'WALL (CUT)', at: [x0 - t, y0 + 200] },
  ], x0 - t)
  return finish({
    id: 'alcove', title: 'Alcove', subtitle: 'Recess opening off a room', view: 'PLAN', sheetNo: 'WAL-10',
    source: ORIGINAL, scale: { unitPx: aw / 5, unitName: 'fifths of alcove', count: 5 },
    description: 'Plan of a room with a recess set into one wall under an arch, large enough to hold a built-in bed or seat.',
  }, L, B)
}

export const INTERIOR_SHEETS: Array<() => SheetSpec> = [
  tray, coved, dropped, exposedBeams, tented,
  rcpConvention, coffered, ceilingRose, muqarnasCeiling,
  () => wallSection('adobe'), () => wallSection('rammed-earth'), () => wallSection('plinth'), () => wallSection('coping'),
  () => wallSection('parapet'), () => wallSection('curtain-wall'),
  () => wallElevation('dado'), () => wallElevation('chair-rail'), () => wallElevation('baseboard'),
  () => wallElevation('crown-molding'), () => wallElevation('wainscot'),
  logCabin, niche, alcove,
]
