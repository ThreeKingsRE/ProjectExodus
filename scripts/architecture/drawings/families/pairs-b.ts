/**
 * More pairs that used to share one drawing, now each with its own close-up in context:
 * mullion / transom (a section through each bar), portal / tympanum (a plan through the stepped jambs, and the carved panel),
 * and the modern curtain wall (an elevation with a close-up of where the bars cross).
 */
import { type Pt, type SheetSpec, f, path, el, vDim, hDim, text } from '../sheet'
import { pen, arcXY, build, type Pair, type XY } from './pairs-a'
import type { Layers } from '../kit'

const ACC = 'style="stroke: var(--_accent)"'

// ---------------------------------------------------------------------------
// Mullion and transom, on a stone cross-window: opening 1200 x 1500, origin at the middle of the sill
// ---------------------------------------------------------------------------
const WO = 1200
const HO = 1500
const BAR = 120
const TR_Y = 1000 // underside of the transom

function drawWindow(hot: 'mullion' | 'transom') {
  return (T: Layers, s: number, ox: number, oy: number) => {
    const d = pen(T, s, ox, oy)
    // wall courses and the stone surround
    for (let v = -300; v < HO + 500; v += 150) {
      T.shading.push(d.poly([[-1700, v], [-WO / 2 - 220, v]]), d.poly([[WO / 2 + 220, v], [1700, v]]))
    }
    T.profile.push(d.poly([[-1700, -300], [1700, -300], [1700, HO + 500], [-1700, HO + 500]], true))
    T.profile.push(d.poly([[-WO / 2 - 180, 0], [-WO / 2 - 180, HO + 180], [WO / 2 + 180, HO + 180], [WO / 2 + 180, 0], [WO / 2, 0], [WO / 2, HO], [-WO / 2, HO], [-WO / 2, 0]], true))
    T.profile.push(d.poly([[-WO / 2 - 260, -120], [WO / 2 + 260, -120], [WO / 2 + 260, 0], [-WO / 2 - 260, 0]], true)) // sill
    // bars
    const mull: XY[] = [[-BAR / 2, 0], [BAR / 2, 0], [BAR / 2, HO], [-BAR / 2, HO]]
    const tran: XY[] = [[-WO / 2, TR_Y], [WO / 2, TR_Y], [WO / 2, TR_Y + BAR], [-WO / 2, TR_Y + BAR]]
    for (const [shape, name] of [[mull, 'mullion'], [tran, 'transom']] as const) {
      if (hot === name) d.mark(shape)
      else T.profile.push(d.poly(shape, true))
    }
    // the four leaded lights
    const lights: Array<[number, number, number, number]> = [[-WO / 2 + 20, TR_Y + BAR + 20, WO / 2 - BAR / 2 - 40, HO - TR_Y - BAR - 40], [BAR / 2 + 20, TR_Y + BAR + 20, WO / 2 - BAR / 2 - 40, HO - TR_Y - BAR - 40], [-WO / 2 + 20, 20, WO / 2 - BAR / 2 - 40, TR_Y - 40], [BAR / 2 + 20, 20, WO / 2 - BAR / 2 - 40, TR_Y - 40]]
    for (const [lx, ly, lw, lh] of lights) {
      T.fine.push(d.poly([[lx, ly], [lx + lw, ly], [lx + lw, ly + lh], [lx, ly + lh]], true))
      // diamond lead lines
      for (let k = 1; k * 120 < lw; k++) T.shading.push(d.poly([[lx + k * 120, ly], [lx + k * 120, ly + lh]]))
      for (let k = 1; k * 120 < lh; k++) T.shading.push(d.poly([[lx, ly + k * 120], [lx + lw, ly + k * 120]]))
    }
  }
}

/** Convert a section drawn in millimetres (u across, v up) into the close-up window, scaled to fit. */
function sectionWindow(box: [number, number, number, number], draw: (g: { X: (u: number) => number; Y: (v: number) => number; ds: number }, T: Layers) => void) {
  return (T: Layers, win: { cx: number; cy: number; r: number }) => {
    const [bx0, by0, bx1, by1] = box
    const ds = (win.r * 1.6) / Math.max(bx1 - bx0, by1 - by0)
    const g = { X: (u: number) => win.cx + (u - (bx0 + bx1) / 2) * ds, Y: (v: number) => win.cy - (v - (by0 + by1) / 2) * ds, ds }
    draw(g, T)
  }
}
const polyPath = (g: { X: (u: number) => number; Y: (v: number) => number }, pts: XY[]) => path(pts.map(([u, v]) => [g.X(u), g.Y(v)] as Pt), true)

// mullion: a plan section (outside at the top): chamfered stone bar with a rebate on each side holding the glass
const MULL_BOX: [number, number, number, number] = [-330, -160, 330, 160]
const mullionShape: XY[] = [[-60, -80], [-42, -80], [42, -80], [60, -62], [60, -12], [48, -12], [48, 12], [60, 12], [60, 62], [42, 80], [-42, 80], [-60, 62], [-60, 12], [-48, 12], [-48, -12], [-60, -12], [-60, -62]]
const mullionDetail = sectionWindow(MULL_BOX, (g, T) => {
  T.hatch.push(`<path d="${polyPath(g, mullionShape)}" fill="url(#h-stone)" stroke="none"/>`)
  T.cut.push(`<path d="${polyPath(g, mullionShape)}" ${ACC}/>`)
  // glass (6 mm) in the rebates, each side, with the lead came dots
  for (const sg of [-1, 1]) {
    for (const dv of [-3, 3]) T.profile.push(el(`M${f(g.X(sg * 48))} ${f(g.Y(dv))}H${f(g.X(sg * 320))}`))
    T.fine.push(`<circle cx="${f(g.X(sg * 200))}" cy="${f(g.Y(0))}" r="${f(5 * g.ds)}"/>`)
  }
})

// transom: a vertical section (outside to the right): weathered top, drip groove underneath, glass in rebates above and below
const TRAN_BOX: [number, number, number, number] = [-190, -280, 190, 280]
const transomShape: XY[] = [[-80, -60], [40, -60], [40, -40], [58, -40], [58, -60], [80, -60], [80, 42], [-80, 62], [-80, 12], [-68, 12], [-68, -12], [-80, -12]]
const transomDetail = sectionWindow(TRAN_BOX, (g, T) => {
  // the stone bar: weathered (sloping) top shed water outward, drip groove under the outer edge
  const shape: XY[] = [[-80, -60], [-6, -60], [-6, -44], [6, -44], [6, -60], [80, -60], [80, 42], [-80, 62]]
  T.hatch.push(`<path d="${polyPath(g, shape)}" fill="url(#h-stone)" stroke="none"/>`)
  T.cut.push(`<path d="${polyPath(g, shape)}" ${ACC}/>`)
  // glass above and below in their rebates (a pair of lines each)
  for (const du of [-3, 3]) {
    T.profile.push(el(`M${f(g.X(du))} ${f(g.Y(60))}V${f(g.Y(250))}`), el(`M${f(g.X(du))} ${f(g.Y(-44))}V${f(g.Y(-250))}`))
  }
  T.fine.push(el(`M${f(g.X(-30))} ${f(g.Y(250))}H${f(g.X(30))}`), el(`M${f(g.X(-30))} ${f(g.Y(-250))}H${f(g.X(30))}`))
  void transomShape
})

const WIN_WHOLE = { scale: 0.075, ox: 300, oy: 268, w: [-1700, 1700] as [number, number], h: [-300, HO + 500] as [number, number], caption: 'WHOLE WINDOW · ELEVATION' }

const windowPairs: Pair[] = [
  {
    id: 'mullion', title: 'Mullion', subtitle: 'Vertical bar dividing a window', sheetNo: 'WIN-08', view: 'ELEVATION · SECTION CLOSE-UP IN CONTEXT',
    description: 'Elevation of a stone cross-window with its upright bar marked, and a round plan section through that mullion showing its chamfered stone and the glass held in a groove on each side.',
    draw: drawWindow('mullion'), whole: WIN_WHOLE, at: [0, 500], r: 600, note: 'PLAN SECTION · BAR 120 WIDE × 160 DEEP',
    detail: mullionDetail,
    items: () => ({ items: [], dims: [] }),
    customItems: (win) => {
      const ds = (win.r * 1.6) / 660
      const X = (u: number) => win.cx + u * ds
      const Y = (v: number) => win.cy - v * ds
      return {
        items: [{ text: 'MULLION (STONE)', at: [X(-60), Y(30)] }, { text: 'CHAMFERED EDGE', at: [X(-52), Y(70)] }, { text: 'GLASS (6 mm)', at: [X(-200), Y(0)] }, { text: 'GROOVE FOR GLASS', at: [X(-50), Y(0)] }],
        dims: [hDim(Y(-105), X(-60), X(60), '120'), vDim(X(-190), Y(-80), Y(80), '160', X(-150)), text(win.cx, Y(135), 'OUTSIDE', 'text-anchor="middle" class="t-small"') as string, text(win.cx, Y(-140), 'INSIDE', 'text-anchor="middle" class="t-small"') as string],
      }
    },
    scaleUnit: { mm: 500, name: '500 mm (whole window)', count: 3 },
  },
  {
    id: 'transom', title: 'Transom', subtitle: 'Horizontal bar dividing a window', sheetNo: 'WIN-09', view: 'ELEVATION · SECTION CLOSE-UP IN CONTEXT',
    description: 'Elevation of a stone cross-window with its horizontal bar marked, and a round vertical section through that transom showing its sloping top that sheds rain, its drip groove underneath, and the glass above and below.',
    draw: drawWindow('transom'), whole: WIN_WHOLE, at: [0, TR_Y + 60], r: 600, note: 'VERTICAL SECTION · BAR 120 HIGH × 160 DEEP',
    detail: transomDetail,
    items: () => ({ items: [], dims: [] }),
    customItems: (win) => {
      const ds = (win.r * 1.6) / 560
      const X = (u: number) => win.cx + u * ds
      const Y = (v: number) => win.cy - v * ds
      return {
        items: [{ text: 'TRANSOM (STONE)', at: [X(-80), Y(0)] }, { text: 'SLOPING TOP SHEDS WATER', at: [X(-50), Y(56)] }, { text: 'DRIP GROOVE', at: [X(0), Y(-52)] }, { text: 'GLASS ABOVE', at: [X(-3), Y(160)] }, { text: 'GLASS BELOW', at: [X(-3), Y(-160)] }],
        dims: [vDim(X(110), Y(-60), Y(62), '120', X(80)), text(X(-170), Y(40), 'INSIDE', 'class="t-small"') as string, text(X(90), Y(130), 'OUTSIDE', 'class="t-small"') as string],
      }
    },
    scaleUnit: { mm: 500, name: '500 mm (whole window)', count: 3 },
  },
]

// ---------------------------------------------------------------------------
// Portal and tympanum, on a Romanesque doorway: doorway 2400 wide, four stepped orders, origin at the doorway centre on the floor
// ---------------------------------------------------------------------------
const PR = 1200 // doorway half-width = tympanum radius
const PL = 2600 // lintel level
const STEP = 220
const ORD = 4

function drawPortal(hot: 'portal' | 'tympanum') {
  return (T: Layers, s: number, ox: number, oy: number) => {
    const d = pen(T, s, ox, oy)
    const outer = PR + ORD * STEP
    // wall
    for (let v = 0; v < PL + outer + 600; v += 300) T.shading.push(d.poly([[-3600, v], [3600, v]]))
    T.profile.push(d.poly([[-3600, 0], [3600, 0], [3600, PL + outer + 600], [-3600, PL + outer + 600]], true))
    // stepped orders: arch outlines and jamb lines
    for (let k = ORD; k >= 0; k--) {
      const r = PR + k * STEP
      const arch = [[-r, 0], [-r, PL], ...arcXY(0, PL, r, Math.PI, 0, 36), [r, PL], [r, 0]] as XY[]
      if (hot === 'portal' && k > 0) T.cut.push(d.poly(arch).replace('/>', ` ${ACC}/>`))
      else T.profile.push(d.poly(arch))
      if (k > 0 && k % 2 === 0) T.fine.push(d.poly(arcXY(0, PL, r - 60, Math.PI, 0, 28).map(([x, y], i) => [x, y - (i % 2 ? 0 : 50)] as XY)))
      if (k > 0) for (const sg of [-1, 1]) T.fine.push(d.poly([[sg * (r - STEP / 2), 0], [sg * (r - STEP / 2), PL]]))
    }
    // tympanum, lintel, trumeau, doors
    const tym: XY[] = [[-PR, PL + 220], ...arcXY(0, PL + 220, PR, Math.PI, 0, 36).slice(1)]
    if (hot === 'tympanum') d.mark(tym)
    else d.hatch(tym)
    T.profile.push(d.poly([[-PR, PL], [PR, PL], [PR, PL + 220], [-PR, PL + 220]], true))
    T.profile.push(d.poly([[-80, 0], [80, 0], [80, PL], [-80, PL]], true))
    for (const sg of [-1, 1]) T.fine.push(d.poly([sg < 0 ? [-PR + 80, 80] : [100, 80], sg < 0 ? [-100, 80] : [PR - 80, 80], sg < 0 ? [-100, PL - 80] : [PR - 80, PL - 80], sg < 0 ? [-PR + 80, PL - 80] : [100, PL - 80]], true))
    // carved relief in the tympanum: mandorla with a figure, rays, symbols, and a row of small figures above the lintel
    const c = PL + 220
    const mand = Array.from({ length: 41 }, (_, i) => [380 * Math.cos((i / 40) * 2 * Math.PI), c + 620 + 600 * Math.sin((i / 40) * 2 * Math.PI)] as XY)
    T.profile.push(d.poly(mand, true))
    T.fine.push(d.poly(mand.map(([x, y]) => [x * 0.88, c + 620 + (y - c - 620) * 0.9 + 0] as XY), true))
    T.profile.push(d.circ(0, c + 1000, 110), d.poly([[0, c + 890], [0, c + 330]]), d.poly([[-330, c + 700], [0, c + 800], [330, c + 700]]))
    for (const sg of [-1, 1]) {
      T.fine.push(d.circ(sg * 780, c + 420, 120), d.circ(sg * 780, c + 820, 100))
      for (let a = 0; a < 6; a++) T.shading.push(d.poly([[sg * 420, c + 620 + a * 90 - 200], [sg * 700, c + 620 + a * 130 - 280]]))
    }
    for (let i = -5; i <= 5; i++) T.fine.push(d.circ(i * 190, c + 120, 38), d.poly([[i * 190, c + 82], [i * 190, c - 150]]))
  }
}

// portal: a plan section through the left jamb at door level (outside at the top)
const PORTAL_BOX: [number, number, number, number] = [-1400, 0, 700, 1300]
const portalDetail = sectionWindow(PORTAL_BOX, (g, T) => {
  const wall: XY[] = [[-2000, 0], [-600, 0], [-600, 520], [-760, 520], [-760, 740], [-920, 740], [-920, 960], [-1080, 960], [-1080, 1200], [-2000, 1200]]
  T.hatch.push(`<path d="${polyPath(g, wall)}" fill="url(#h-stone)" stroke="none"/>`)
  T.cut.push(`<path d="${polyPath(g, wall)}" ${ACC}/>`)
  // shafts (columns) in the corners of each step
  for (const [cx, cv] of [[-702, 578], [-862, 798], [-1022, 1018]] as XY[]) {
    T.profile.push(`<circle cx="${f(g.X(cx))}" cy="${f(g.Y(cv))}" r="${f(58 * g.ds)}"/>`)
    T.fine.push(`<circle cx="${f(g.X(cx))}" cy="${f(g.Y(cv))}" r="${f(36 * g.ds)}"/>`)
  }
  // door leaf in the doorway
  T.profile.push(el(`M${f(g.X(-600))} ${f(g.Y(300))}H${f(g.X(600))}`), el(`M${f(g.X(-600))} ${f(g.Y(340))}H${f(g.X(600))}`))
  T.center.push(el(`M${f(g.X(0))} ${f(g.Y(-60))}V${f(g.Y(1260))}`))
})

const portalPairs: Pair[] = [
  {
    id: 'portal', title: 'Portal', subtitle: 'Grand recessed entrance of stepped arches', sheetNo: 'DOR-07', view: 'ELEVATION · PLAN CLOSE-UP IN CONTEXT',
    description: 'Elevation of a monumental church entrance, its stepped arches marked, and a round plan section through one side of the doorway showing how the jambs step outward in orders, each with a column shaft set in the corner.',
    draw: drawPortal('portal'), whole: { scale: 0.027, ox: 300, oy: 262, w: [-3600, 3600], h: [0, PL + PR + ORD * STEP + 600], caption: 'WHOLE PORTAL · ELEVATION' }, at: [-PR - 300, 1200], r: 900, note: 'PLAN AT DOOR LEVEL · FOUR ORDERS STEP OUT OVER 900 mm',
    detail: portalDetail,
    items: () => ({ items: [], dims: [] }),
    customItems: (win) => {
      const ds = (win.r * 1.6) / 2100
      const X = (u: number) => win.cx + (u + 350) * ds
      const Y = (v: number) => win.cy - (v - 650) * ds
      return {
        items: [{ text: 'WALL (STONE)', at: [X(-1500), Y(500)] }, { text: 'STEPPED JAMB (ORDERS)', at: [X(-920), Y(850)] }, { text: 'JAMB SHAFT (COLUMN)', at: [X(-702), Y(578)] }, { text: 'DOORWAY (2400)', at: [X(-600), Y(200)] }],
        dims: [vDim(X(-300), Y(300), Y(1200), '900', X(-250)), text(X(-1300), Y(1250), 'OUTSIDE', 'class="t-small"') as string, text(X(-1300), Y(-60), 'INSIDE', 'class="t-small"') as string],
      }
    },
    scaleUnit: { mm: 1000, name: '1 m (whole portal)', count: 3 },
  },
  {
    id: 'door-tympanum', title: 'Tympanum (Door)', subtitle: 'Panel filling an arch over a doorway', sheetNo: 'DOR-08', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
    description: 'Elevation of an arched church doorway with its semicircular panel marked, and a round close-up of that tympanum showing its carved relief: a central figure in an almond shape, rays, symbols in the corners and a row of small figures above the lintel.',
    draw: drawPortal('tympanum'), whole: { scale: 0.027, ox: 300, oy: 262, w: [-3600, 3600], h: [0, PL + PR + ORD * STEP + 600], caption: 'WHOLE PORTAL · ELEVATION' }, at: [0, PL + 220 + 560], r: 1500, note: 'TYMPANUM 2400 ACROSS · SHALLOW RELIEF CARVING',
    items: (at) => ({
      items: [{ text: 'TYMPANUM (CARVED PANEL)', at: at(-700, PL + 220 + 1100) }, { text: 'FIGURE IN AN ALMOND SHAPE', at: at(-300, PL + 220 + 700) }, { text: 'SYMBOLS IN THE CORNERS', at: at(-780, PL + 220 + 420) }, { text: 'LINTEL', at: at(-1000, PL + 110) }, { text: 'ARCHIVOLT', at: at(-1250, PL + 220 + 900) }],
      dims: [],
    }),
    scaleUnit: { mm: 1000, name: '1 m (whole portal)', count: 3 },
  },
]

// ---------------------------------------------------------------------------
// Curtain wall (modern): three bays and three storeys in elevation, origin at the ground at the middle
// ---------------------------------------------------------------------------
const BAY = 1500
const FLOOR_H = 3600
const SPAN = 900 // spandrel panel height
function drawCurtain(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  const W = BAY * 3
  const x0 = -W / 2
  const Ht = FLOOR_H * 3
  T.profile.push(d.poly([[x0 - 150, 0], [x0 + W + 150, 0]]), d.poly([[x0, 0], [x0, Ht + 300], [x0 + W, Ht + 300], [x0 + W, 0]]))
  T.profile.push(d.poly([[x0 - 150, Ht], [x0 + W + 150, Ht], [x0 + W + 150, Ht + 300], [x0 - 150, Ht + 300]], true))
  for (let fl = 0; fl < 3; fl++) {
    const base = fl * FLOOR_H
    // slab edge band behind the spandrel
    const spTop = base + SPAN + 300
    d.hatch([[x0, base + 300], [x0 + W, base + 300], [x0 + W, spTop], [x0, spTop]], 'h-concrete')
    T.profile.push(d.poly([[x0, base + 300], [x0 + W, base + 300]]), d.poly([[x0, spTop], [x0 + W, spTop]]))
    // transom caps at the top and bottom of the vision glass
    for (const v of [spTop, base + FLOOR_H]) T.fine.push(d.poly([[x0, v + 30], [x0 + W, v + 30]]))
    // vision glass: a pair of diagonal reflection lines in each pane
    for (let b = 0; b < 3; b++) {
      const px = x0 + b * BAY
      T.shading.push(d.poly([[px + 300, spTop + 500], [px + 700, spTop + 1100]]), d.poly([[px + 500, spTop + 400], [px + 1000, spTop + 1250]]))
    }
  }
  // vertical mullions: pressure-plate cap with a gasket line either side
  for (let b = 0; b <= 3; b++) {
    const mx = x0 + b * BAY
    T.profile.push(d.poly([[mx - 30, 300], [mx + 30, 300], [mx + 30, Ht], [mx - 30, Ht]], true))
    T.fine.push(d.poly([[mx - 14, 300], [mx - 14, Ht]]), d.poly([[mx + 14, 300], [mx + 14, Ht]]))
  }
  void arcXY
}

const curtainPair: Pair = {
  id: 'curtain-wall-modern', title: 'Curtain Wall (Modern)', subtitle: 'Non-loadbearing glass skin hung from the floors', sheetNo: 'FAC-27', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
  description: 'Elevation of a three-storey glass building skin with its grid of vertical and horizontal bars, and a round close-up of one junction where a mullion meets the spandrel panel and the glass above it.',
  draw: drawCurtain, whole: { scale: 0.0145, ox: 300, oy: 296, w: [-BAY * 1.5 - 150, BAY * 1.5 + 150], h: [0, FLOOR_H * 3 + 300], caption: 'WHOLE FAÇADE · ELEVATION' }, at: [-BAY / 2, FLOOR_H + 420], r: 1100, note: 'BAYS 1500 WIDE · SPANDREL 900 HIGH · BARS 60 WIDE',
  items: (at, z) => ({
    items: [{ text: 'MULLION (VERTICAL BAR)', at: at(-BAY * 1.5 + BAY, FLOOR_H + 700) }, { text: 'PRESSURE-PLATE CAP', at: at(-BAY * 1.5 + BAY + 20, FLOOR_H + 1000) }, { text: 'VISION GLASS', at: at(-BAY * 1.0, FLOOR_H + 1200) }, { text: 'SPANDREL PANEL (OPAQUE)', at: at(-BAY * 1.0, FLOOR_H + 700) }, { text: 'SLAB EDGE BEHIND', at: at(-BAY * 1.0, FLOOR_H + 420) }],
    dims: [vDim(z.X(-BAY * 0.2), z.Y(FLOOR_H + 300), z.Y(FLOOR_H + SPAN + 300), '900', z.X(-BAY * 0.3))],
  }),
  scaleUnit: { mm: 2000, name: '2 m (whole façade)', count: 3 },
}

export const PAIR_B_SHEETS: Array<() => SheetSpec> = [...windowPairs, ...portalPairs, curtainPair].map((c) => () => build(c))
void ACC
