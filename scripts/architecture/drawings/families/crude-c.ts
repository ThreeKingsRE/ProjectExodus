/**
 * Redrawn: rock-cut façade, Art Nouveau metro entrance, thatch roof, nave, flying buttress, stepped platform.
 * Each shows the whole with a round close-up. Millimetres, y up.
 */
import { type SheetSpec, f, el, text } from '../sheet'
import { pen, arcXY, build, type Pair, type XY } from './pairs-a'
import type { Layers } from '../kit'

const quad = (a: XY, c: XY, b: XY, n = 8): XY[] => Array.from({ length: n }, (_, i) => {
  const t = (i + 1) / n
  return [(1 - t) ** 2 * a[0] + 2 * (1 - t) * t * c[0] + t * t * b[0], (1 - t) ** 2 * a[1] + 2 * (1 - t) * t * c[1] + t * t * b[1]] as XY
})
function smooth(pts: XY[], n = 6): XY[] {
  const mid = (a: XY, b: XY): XY => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
  const out: XY[] = [pts[0]]
  for (let i = 1; i < pts.length - 1; i++) out.push(...quad(i === 1 ? pts[0] : mid(pts[i - 1], pts[i]), pts[i], mid(pts[i], pts[i + 1]), n))
  out.push(pts[pts.length - 1])
  return out
}
const lerp = (a: XY, b: XY, t: number): XY => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]
const paper = (d: ReturnType<typeof pen>, pts: XY[]) => `<path d="${d.poly(pts, true).replace(/^<path d="|"\/>$/g, '')}" style="fill: var(--_paper)"/>`

// ---------------------------------------------------------------------------
// Rock-cut façade: a two-storey front carved from a cliff, about 25 m wide and 34 m to the urn
// ---------------------------------------------------------------------------
function column(T: Layers, d: ReturnType<typeof pen>, x: number, y0: number, y1: number, w: number) {
  T.profile.push(d.poly([[x - w * 0.62, y0], [x + w * 0.62, y0], [x + w * 0.62, y0 + 300], [x - w * 0.5, y0 + 300], [x - w * 0.5, y0 + 500], [x + w * 0.5, y0 + 500], [x + w * 0.5, y1 - 1300], [x - w * 0.5, y1 - 1300], [x - w * 0.5, y0 + 500]], false))
  T.profile.push(d.poly([[x - w * 0.5, y0 + 500], [x - w * 0.5, y1 - 1300]]), d.poly([[x + w * 0.5, y0 + 500], [x + w * 0.5, y1 - 1300]]))
  for (let k = -2; k <= 2; k++) T.shading.push(d.poly([[x + k * w * 0.18, y0 + 600], [x + k * w * 0.18, y1 - 1400]]))
  // capital: a bell with leaves and corner scrolls, then the abacus
  T.profile.push(d.poly([[x - w * 0.5, y1 - 1300], [x - w * 0.62, y1 - 200], [x + w * 0.62, y1 - 200], [x + w * 0.5, y1 - 1300]], true))
  for (let k = -2; k <= 2; k++) T.fine.push(d.poly(quad([x + k * w * 0.2 - w * 0.07, y1 - 1280], [x + k * w * 0.2, y1 - 760], [x + k * w * 0.2 + w * 0.07, y1 - 1280], 4)))
  T.profile.push(d.poly([[x - w * 0.7, y1 - 200], [x + w * 0.7, y1 - 200], [x + w * 0.7, y1], [x - w * 0.7, y1]], true))
}

function drawTreasury(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  // cliff
  const cliff: XY[] = [[-18000, 0], [-18000, 36000], [-14000, 40000], [-8000, 38500], [0, 43000], [8000, 39500], [14000, 41500], [18000, 35000], [18000, 0]]
  d.hatch(cliff, 'h-earth')
  T.profile.push(d.poly(cliff))
  T.fine.push(d.poly([[-16500, 4000], [-15800, 12000], [-17200, 20000]]), d.poly([[16200, 3000], [16800, 14000], [15800, 24000]]))
  // the carved front: a flat field cut into the rock, paper-filled
  const field: XY[] = [[-12500, 0], [-12500, 29800], [-8200, 31000], [-3000, 34600], [0, 35400], [3000, 34600], [8200, 31000], [12500, 29800], [12500, 0]]
  T.profile.push(paper(d, field))
  T.profile.push(d.poly(field, true))
  // steps
  for (let k = 0; k < 4; k++) T.profile.push(d.poly([[-9800 - (3 - k) * 500, k * 300], [9800 + (3 - k) * 500, k * 300], [9800 + (3 - k) * 500, (k + 1) * 300], [-9800 - (3 - k) * 500, (k + 1) * 300]], true))
  // lower storey: six columns, entablature, doorway and niches
  const base = 1200
  const top = 13800
  const xs = [-9000, -5400, -1800, 1800, 5400, 9000]
  // doorway first (it sits behind the columns)
  const door: XY[] = [[-1500, base], [-1500, 7600], [1500, 7600], [1500, base]]
  d.hatch(door, 'h-earth')
  T.profile.push(d.poly(door, true), d.poly([[-1800, base], [-1800, 8100], [1800, 8100], [1800, base]]), d.poly([[-2000, 8100], [2000, 8100], [2000, 8600], [-2000, 8600]], true))
  for (const sg of [-1, 1]) {
    const nx = sg * 7200
    T.profile.push(d.poly([[nx - 750, base + 600], [nx - 750, 6600], ...arcXY(nx, 6600, 750, Math.PI, 0, 10).slice(1), [nx + 750, base + 600]], true))
    T.fine.push(d.circ(nx, 5600, 160), d.poly([[nx, 5440], [nx, 3100]]), d.poly([[nx - 330, 4600], [nx + 330, 4600]]), d.poly([[nx - 280, 3100], [nx + 280, 3100]]))
    const wx = sg * 3600
    T.fine.push(d.poly([[wx - 500, 4500], [wx + 500, 4500], [wx + 500, 7200], [wx - 500, 7200]], true))
  }
  for (const x of xs) column(T, d, x, base, top, 1400)
  // entablature: architrave, frieze with a row of rosettes, cornice
  T.profile.push(d.poly([[-11200, top], [11200, top], [11200, top + 1200], [-11200, top + 1200]], true), d.poly([[-11200, top + 1200], [11200, top + 1200], [11200, top + 2700], [-11200, top + 2700]], true), d.poly([[-11500, top + 2700], [11500, top + 2700], [11500, top + 3700], [-11500, top + 3700]], true))
  for (let x = -10500; x <= 10500; x += 700) T.fine.push(d.circ(x, top + 1950, 180))
  for (const sg of [-1, 1]) {
    // broken pediment: the raking cornice rises from the outer end and stops short of the middle
    const p0: XY = [sg * 11500, top + 3700]
    const p1: XY = [sg * 3400, top + 3700 + 4300]
    T.profile.push(d.poly([p0, p1, [p1[0], p1[1] - 900], [p0[0], p0[1] - 0]], true))
    T.fine.push(d.poly([lerp(p0, p1, 0.02) as XY, lerp([p0[0], p0[1] - 500], [p1[0], p1[1] - 500], 0.98) as XY]))
  }
  // upper storey: the tholos (a round pavilion) between two half-pediment wings
  const ub = top + 3700
  T.profile.push(d.poly([[-4400, ub], [4400, ub], [4400, ub + 900], [-4400, ub + 900]], true))
  const th = ub + 900
  for (const x of [-3000, -1000, 1000, 3000]) column(T, d, x, th, th + 6800, 1100)
  T.profile.push(d.poly([[-3900, th + 6800], [3900, th + 6800], [3900, th + 7600], [-3900, th + 7600]], true), d.poly([[-4200, th + 7600], [4200, th + 7600], [4200, th + 8300], [-4200, th + 8300]], true))
  const door2: XY[] = [[-900, th], [-900, th + 4600], [900, th + 4600], [900, th]]
  d.hatch(door2, 'h-earth')
  T.profile.push(d.poly(door2, true))
  // conical roof, a plinth, and the urn on top
  T.profile.push(d.poly([[-4200, th + 8300], [0, th + 14000], [4200, th + 8300]], true))
  for (let k = 1; k < 6; k++) T.shading.push(d.poly([[-4200 + k * 700, th + 8300], [0, th + 14000]]), d.poly([[4200 - k * 700, th + 8300], [0, th + 14000]]))
  T.profile.push(d.poly([[-500, th + 14000], [500, th + 14000], [500, th + 14500], [-500, th + 14500]], true))
  const urn: XY[] = [[-300, th + 14500], [-650, th + 15200], [-800, th + 16000], [-500, th + 16600], [-250, th + 16800], [-420, th + 17200], [420, th + 17200], [250, th + 16800], [500, th + 16600], [800, th + 16000], [650, th + 15200], [300, th + 14500]]
  T.profile.push(d.poly(urn, true))
  for (const sg of [-1, 1]) {
    // the half-pediment wings beside the tholos
    for (const x of [sg * 6200, sg * 8200]) column(T, d, x, ub, ub + 6000, 1000)
    T.profile.push(d.poly([[sg * 5400, ub + 6000], [sg * 9000, ub + 6000], [sg * 9000, ub + 6800], [sg * 5400, ub + 6800]], true))
    T.profile.push(d.poly([[sg * 9000, ub + 6800], [sg * 5400, ub + 8800], [sg * 5400, ub + 6800]], true))
  }
}

const treasury: Pair = {
  id: 'rock-cut-facade', title: 'Rock-Cut Façade', subtitle: 'Architectural front carved from a cliff face', sheetNo: 'FAC-14', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
  description: 'Elevation of a monumental front carved out of a rock cliff: a lower storey of six columns with a broken pediment and a central doorway, and an upper storey with a round pavilion (tholos) under a conical roof and urn between half-pediment wings, with a round close-up of the tholos.',
  draw: drawTreasury, whole: { scale: 0.0068, ox: 300, oy: 318, w: [-18000, 18000], h: [0, 43000], caption: 'WHOLE FRONT AND CLIFF · ELEVATION' }, at: [0, 27500], r: 7600, note: 'FRONT ABOUT 25 m WIDE · 37 m TO THE TOP OF THE URN',
  items: (at) => ({ items: [{ text: 'URN', at: at(0, 31700) }, { text: 'CONICAL ROOF', at: at(-1500, 27700) }, { text: 'THOLOS (ROUND PAVILION)', at: at(-3000, 23000) }, { text: 'HALF-PEDIMENT WING', at: at(-6200, 25000) }, { text: 'BROKEN PEDIMENT', at: at(-6500, 20800) }, { text: 'ROCK FACE', at: at(-9500, 33000) }], dims: [] }),
  scaleUnit: { mm: 5000, name: '5 m', count: 3 },
}

// ---------------------------------------------------------------------------
// Art Nouveau metro entrance: iron balustrade panels, two whiplash lamp stems and a lettered arch
// ---------------------------------------------------------------------------
function drawMetro(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  T.profile.push(d.poly([[-3600, 0], [3600, 0]]))
  // steps going down, shown dashed behind the balustrade
  for (let k = 0; k < 5; k++) T.fine.push(d.poly([[-2400 + k * 900, -k * 160], [-1500 + k * 900, -k * 160]]).replace('/>', ' stroke-dasharray="6 4"/>'))
  // posts with bud finials and the panels between them
  const posts = [-2700, -900, 900, 2700]
  for (const px of posts) {
    T.profile.push(d.poly([[px - 130, 0], [px + 130, 0], [px + 110, 1050], [px - 110, 1050]], true))
    T.profile.push(d.poly(smooth([[px - 130, 1050], [px - 190, 1250], [px, 1480], [px + 190, 1250], [px + 130, 1050]], 4), true))
  }
  for (let i = 0; i < 3; i++) {
    const x0 = posts[i] + 130
    const x1 = posts[i + 1] - 130
    const cx = (x0 + x1) / 2
    T.profile.push(d.poly([[x0, 1000], [x1, 1000], [x1, 1070], [x0, 1070]], true), d.poly([[x0, 120], [x1, 120], [x1, 190], [x0, 190]], true))
    // two mirrored whiplash stems rising to leaves, and a central lens-shaped bud
    for (const sg of [-1, 1]) {
      T.profile.push(d.poly(smooth([[cx, 190], [cx + sg * 360, 420], [cx + sg * 120, 700], [cx + sg * 420, 960]], 8)))
      T.fine.push(d.poly(smooth([[cx + sg * 250, 380], [cx + sg * 600, 600], [cx + sg * 660, 860]], 6)))
      for (const [lx, ly] of [[cx + sg * 560, 760], [cx + sg * 430, 960], [cx + sg * 300, 560]] as XY[]) T.fine.push(d.poly(quad([lx, ly], [lx + sg * 120, ly + 120], [lx + sg * 40, ly + 260], 5).concat(quad([lx + sg * 40, ly + 260], [lx - sg * 60, ly + 120], [lx, ly], 5))))
    }
    T.profile.push(d.poly(smooth([[cx, 190], [cx - 80, 540], [cx, 960], [cx + 80, 540], [cx, 190]], 4)))
  }
  // lamp stems: tall S-curves from the outer posts that lean in toward the sign, ending in a curl and a lamp
  for (const sg of [-1, 1]) {
    const px = sg * 2700
    const stem = smooth([[px, 1480], [px + sg * 90, 2300], [px - sg * 380, 3300], [px - sg * 1100, 4000], [px - sg * 1500, 4250]], 8)
    T.profile.push(d.poly(stem), d.poly(stem.map(([x, y]) => [x - sg * 60, y] as XY)))
    T.profile.push(d.poly(arcXY(px - sg * 1700, 4180, 190, 0, 2.5 * Math.PI, 16).map(([x, y], i) => [x - sg * (i * 4), y - i * 3] as XY)))
    T.profile.push(d.circ(px + sg * 120, 3140, 235), d.circ(px + sg * 120, 3140, 150))
    T.fine.push(d.poly([[px + sg * 120, 2905], [px + sg * 120, 2600]]), d.poly([[px + sg * 120, 3375], [px + sg * 120, 3500]]))
  }
  // sign: an arch plate between the stems with the lettering
  const sign: XY[] = [[-1700, 3050], ...arcXY(0, 3050, 1700, Math.PI, 0, 20).map(([x, y]) => [x, 3050 + (y - 3050) * 0.45] as XY).slice(1), [1700, 3050], [1700, 3550], ...arcXY(0, 3550, 1700, 0, Math.PI, 20).map(([x, y]) => [x, 3550 + (y - 3550) * 0.45] as XY).slice(1), [-1700, 3550]]
  T.profile.push(d.poly(sign, true))
  T.fine.push(d.poly([[-1550, 3150], [1550, 3150]]))
  T.notes.push(text(ox, oy - 3300 * s, 'METROPOLITAIN', 'text-anchor="middle" class="t-small"'))
}

const metro: Pair = {
  id: 'metro-entrance', title: 'Art Nouveau Metro Entrance', subtitle: 'Street entrance to an underground railway', sheetNo: 'URB-13', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
  description: 'Elevation of an Art Nouveau metro entrance: a cast-iron balustrade of whiplash curves and leaves between bud-topped posts, two tall lamp stems curving toward a lettered arch sign, and the stairs going down behind, with a round close-up of one lamp stem and its curl.',
  draw: drawMetro, whole: { scale: 0.0455, ox: 300, oy: 278, w: [-3600, 3600], h: [-800, 4600], caption: 'WHOLE ENTRANCE · ELEVATION' }, at: [-2300, 3900], r: 1250, note: 'LAMP STEM ABOUT 4 m HIGH · CAST IRON',
  items: (at) => ({ items: [{ text: 'LAMP', at: at(-2580, 3140) }, { text: 'WHIPLASH CURVE (STEM)', at: at(-2050, 3750) }, { text: 'CURL AT THE TIP', at: at(-1900, 4180) }, { text: 'SIGN ARCH', at: at(-1500, 3350) }], dims: [] }),
  scaleUnit: { mm: 1000, name: '1 m', count: 3 },
}

// ---------------------------------------------------------------------------
// Thatch roof: a house section 7 m wide, roof at 50°, thatch 350 mm thick on battens and rafters
// ---------------------------------------------------------------------------
const TAN50 = Math.tan((50 * Math.PI) / 180)
const WALL_Y = 2400
function drawThatch(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  T.profile.push(d.poly([[-4800, 0], [4800, 0]]))
  // walls (section) with a plate on top
  for (const sg of [-1, 1] as const) {
    const w: XY[] = [[sg * 3500, 0], [sg * 3050, 0], [sg * 3050, WALL_Y], [sg * 3500, WALL_Y]]
    d.hatch(w)
    T.cut.push(d.poly(w, true))
    T.profile.push(d.poly([[sg * 3550, WALL_Y], [sg * 3000, WALL_Y], [sg * 3000, WALL_Y + 160], [sg * 3550, WALL_Y + 160]], true))
  }
  const apex = WALL_Y + 160 + 3500 * TAN50
  // roof geometry per side: inner (rafter top) line and the outer thatch line, offset by the thatch thickness
  const nx = Math.sin((50 * Math.PI) / 180)
  const ny = Math.cos((50 * Math.PI) / 180)
  for (const sg of [-1, 1] as const) {
    const eave: XY = [sg * 4100, WALL_Y + 160 - 600 * TAN50]
    const ap: XY = [0, apex]
    const t = 380
    const eaveO: XY = [eave[0] + sg * t * nx, eave[1] + t * ny]
    const apO: XY = [0, apex + t / ny]
    const thatch: XY[] = [eave, ap, apO, eaveO]
    d.hatch(thatch, 'h-timber')
    T.profile.push(d.poly(thatch, true))
    // thatch: courses of reed bundles, short strokes laid along the slope
    for (let k = 1; k < 14; k++) {
      const a = lerp(eave, ap, k / 14)
      const b = lerp(eaveO, apO, k / 14)
      T.shading.push(d.poly([a, b]))
    }
    for (let k = 0; k < 7; k++) T.fine.push(d.poly([lerp(eave, eaveO, 0.15 + k * 0.12), lerp(ap, apO, 0.15 + k * 0.12)]))
    // rafters and battens
    const rafter: XY[] = [[sg * 3550, WALL_Y + 160 - 0], eave, ap]
    T.profile.push(d.poly([[sg * 3300, WALL_Y + 160], ap]), d.poly([eave, [sg * 3300, WALL_Y + 160]]))
    for (let k = 0; k < 14; k++) {
      const p = lerp(eave, ap, (k + 0.5) / 14)
      T.fine.push(d.poly([p, [p[0] + sg * 26 * nx, p[1] + 26 * ny]]))
    }
    void rafter
    // the eave: a bundle of reed ends cut square
    T.fine.push(d.poly([eave, eaveO]))
  }
  // ridge: a rolled cap of reed over the top, collar tie, king post-less collar frame
  const roll = arcXY(0, apex + 330, 430, Math.PI * 1.08, Math.PI * (-0.08), 18)
  T.profile.push(d.poly(roll, false), d.poly([[-380, apex + 200], [380, apex + 200]]))
  T.profile.push(d.poly([[-1900, WALL_Y + 160 + 1900 * TAN50], [1900, WALL_Y + 160 + 1900 * TAN50]]))
  T.profile.push(d.poly([[-3300, WALL_Y + 160], [3300, WALL_Y + 160]]))
  T.center.push(d.poly([[0, -300], [0, apex + 900]]))
}

const thatch: Pair = {
  id: 'thatch-roof', title: 'Thatch Roof', subtitle: 'Thick coat of reed or straw on a steep pitch', sheetNo: 'ROF-04', view: 'SECTION · CLOSE-UP IN CONTEXT',
  description: 'Section through a cottage with a thatched roof pitched at about 50 degrees: bundles of reed about 380 mm thick laid in courses over battens and rafters, a rolled reed ridge and overhanging eaves, with a round close-up of the eaves.',
  draw: drawThatch, whole: { scale: 0.034, ox: 300, oy: 268, w: [-4800, 4800], h: [0, 7400], caption: 'WHOLE COTTAGE · SECTION' }, at: [-3900, 2300], r: 1500, note: 'THATCH 380 mm THICK · PITCH 50° · EAVES OVERHANG 600 mm',
  items: (at) => ({ items: [{ text: 'THATCH (REED BUNDLES)', at: at(-4100, 2500) }, { text: 'COURSES LAID UP THE SLOPE', at: at(-3600, 2900) }, { text: 'RAFTER', at: at(-3400, 2750) }, { text: 'WALL PLATE', at: at(-3300, WALL_Y + 80) }, { text: 'WALL (COB OR STONE)', at: at(-3275, 1300) }], dims: [] }),
  scaleUnit: { mm: 2000, name: '2 m', count: 3 },
}

// ---------------------------------------------------------------------------
// Nave: a cross-section of a basilica, 8 m between arcades, with aisles, clerestory and an open timber roof
// ---------------------------------------------------------------------------
function drawNave(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  const floor = 0
  T.profile.push(d.poly([[-10600, floor], [10600, floor]]))
  d.hatch([[-10600, -400], [10600, -400], [10600, 0], [-10600, 0]], 'h-earth')
  for (const sg of [-1, 1] as const) {
    // arcade pier and wall up to the clerestory sill, then the sill and the wall head
    const pier: XY[] = [[sg * 3400, 0], [sg * 4600, 0], [sg * 4600, 9600], [sg * 3400, 9600]]
    d.hatch(pier)
    T.cut.push(d.poly(pier, true))
    // clerestory window opening through the upper wall (cut across its middle), wall head above
    const jambs: XY[] = [[sg * 3400, 9600], [sg * 4600, 9600], [sg * 4600, 12800], [sg * 3400, 12800]]
    T.profile.push(d.poly(jambs, true))
    d.hatch([[sg * 3400, 12400], [sg * 4600, 12400], [sg * 4600, 12800], [sg * 3400, 12800]])
    T.fine.push(d.poly([[sg * 3900, 9800], [sg * 3900, 12200]]).replace('/>', ' stroke-dasharray="4 3"/>'))
    // outer aisle wall with a window, and the aisle lean-to roof
    const wall: XY[] = [[sg * 8600, 0], [sg * 9800, 0], [sg * 9800, 7800], [sg * 8600, 7800]]
    d.hatch(wall)
    T.cut.push(d.poly(wall, true))
    T.fine.push(d.poly([[sg * 8600, 3400], [sg * 9800, 3400]]).replace('/>', ' stroke-dasharray="4 3"/>'), d.poly([[sg * 8600, 5400], [sg * 9800, 5400]]).replace('/>', ' stroke-dasharray="4 3"/>'))
    T.profile.push(d.poly([[sg * 9900, 7600], [sg * 3400, 10300]]), d.poly([[sg * 9900, 7360], [sg * 3400, 10060]]))
    for (let k = 1; k < 7; k++) T.fine.push(d.poly([[sg * (9900 - k * 930), 7600 + k * 386], [sg * (9900 - k * 930), 7360 + k * 386]]))
  }
  // columns inside: an aisle arch springing indicated, capitals
  for (const sg of [-1, 1] as const) {
    T.profile.push(d.poly([[sg * 3250, 6300], [sg * 4750, 6300], [sg * 4750, 6600], [sg * 3250, 6600]], true))
    T.fine.push(d.poly(arcXY(sg * 6000, 6600, 1400, Math.PI, 0, 14).map(([x, y]) => [x, y] as XY)))
  }
  // nave roof: tie beam, king post, struts, rafters, ridge, with the wall plates
  const apex = 12800 + 4600 * 1.1
  T.profile.push(d.poly([[-4600, 12800], [4600, 12800], [4600, 13000], [-4600, 13000]], true))
  T.profile.push(d.poly([[-4800, 13000], [0, apex]]), d.poly([[4800, 13000], [0, apex]]), d.poly([[-4800, 13000], [-4800, 13200], [0, apex + 200]]), d.poly([[4800, 13000], [4800, 13200], [0, apex + 200]]))
  T.profile.push(d.poly([[-120, 13000], [-120, apex - 60], [120, apex - 60], [120, 13000]], true))
  T.profile.push(d.poly([[-2000, 13000], [-120, 15900]]), d.poly([[2000, 13000], [120, 15900]]))
  T.fine.push(d.poly([[-3000, 14200], [3000, 14200]]))
  T.center.push(d.poly([[0, -400], [0, apex + 700]]))
  // paving
  for (let k = -5; k <= 5; k++) T.shading.push(d.poly([[k * 900, 0], [k * 900 + 200, -400]]))
}

const nave: Pair = {
  id: 'nave', title: 'Nave', subtitle: 'Central body of a basilican church', sheetNo: 'REL-12', view: 'SECTION · CLOSE-UP IN CONTEXT',
  description: 'Cross-section through a basilican church: a tall central nave between two arcades, a low aisle on each side under a sloping roof, high clerestory windows above the arcade, and an open timber roof, with a round close-up of the junction of arcade, clerestory and aisle roof.',
  draw: drawNave, whole: { scale: 0.0148, ox: 300, oy: 268, w: [-10600, 10600], h: [-400, 18300], caption: 'WHOLE CHURCH · CROSS-SECTION' }, at: [4400, 10000], r: 3400, note: 'NAVE 8 m BETWEEN ARCADES · CLERESTORY ABOVE THE AISLE ROOF',
  items: (at) => ({ items: [{ text: 'CLERESTORY WINDOW', at: at(3900, 11000) }, { text: 'ARCADE WALL (PIER)', at: at(4000, 7600) }, { text: 'AISLE ROOF (LEAN-TO)', at: at(6500, 8900) }, { text: 'AISLE', at: at(6000, 3000) }, { text: 'NAVE', at: at(2000, 9000) }], dims: [] }),
  scaleUnit: { mm: 5000, name: '5 m', count: 2 },
}

// ---------------------------------------------------------------------------
// Flying buttress: a Gothic section, nave wall and vault on the left, aisle, buttress pier and the arch leaping over
// ---------------------------------------------------------------------------
function drawFlying(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  T.profile.push(d.poly([[-6000, 0], [11800, 0]]))
  d.hatch([[-6000, -400], [11800, -400], [11800, 0], [-6000, 0]], 'h-earth')
  // nave wall (clerestory) and the vault shell springing from it
  const wallNave: XY[] = [[0, 0], [1100, 0], [1100, 18500], [0, 18500]]
  d.hatch(wallNave)
  T.cut.push(d.poly(wallNave, true))
  const vault = [...quad([0, 15000], [0, 17600], [-4500, 18200], 14), ...quad([-4500, 18200], [-4500, 18200], [-4500, 18200], 1)]
  T.cut.push(d.poly([[0, 15000], ...vault.slice(0, -1)]))
  T.fine.push(d.poly(quad([0, 14000], [-1800, 15800], [-4500, 17000], 10)))
  T.center.push(d.poly([[-4500, -400], [-4500, 19200]]))
  // aisle wall, aisle roof, and the buttress pier beyond it
  const aisleWall: XY[] = [[7000, 0], [8000, 0], [8000, 8600], [7000, 8600]]
  d.hatch(aisleWall)
  T.cut.push(d.poly(aisleWall, true))
  T.profile.push(d.poly([[1100, 10800], [8000, 8700]]), d.poly([[1100, 10520], [8000, 8420]]))
  const pier: XY[] = [[8000, 0], [9800, 0], [9800, 14200], [9400, 14200], [9400, 15200], [8000, 15200]]
  d.hatch(pier)
  T.cut.push(d.poly(pier, true))
  // pinnacle: a stack of weight on top of the pier, with a spire
  T.profile.push(d.poly([[8000, 15200], [9400, 15200], [9400, 17000], [8000, 17000]], true), d.poly([[7800, 17000], [9600, 17000], [8700, 19600]], true))
  T.fine.push(d.poly([[8700, 17000], [8700, 19600]]))
  // the flying arch: intrados and extrados, with a coping on top and tracery circles in the spandrel
  const intr = quad([8000, 13600], [3600, 13700], [1100, 15600], 14)
  const extr = quad([8000, 15000], [4600, 14900], [1100, 16300], 14)
  const arch: XY[] = [[8000, 13600], ...intr, ...[...extr].reverse(), [8000, 15000]]
  d.hatch(arch)
  T.cut.push(d.poly(arch, true))
  for (let k = 1; k <= 3; k++) {
    const t = k / 4
    const p = intr[Math.floor(t * (intr.length - 1))]
    const q = extr[Math.floor(t * (extr.length - 1))]
    T.fine.push(d.circ((p[0] + q[0]) / 2, (p[1] + q[1]) / 2, 170))
  }
  // thrust line: from the vault springing, along the arch, down the pier to the ground
  T.center.push(d.poly([[0, 15000], [1100, 15700], [3600, 14700], [6500, 14200], [8700, 13600], [8800, 8000], [8850, 0]]).replace('/>', ' stroke-dasharray="10 5"/>'))
}

const flying: Pair = {
  id: 'flying-buttress', title: 'Flying Buttress', subtitle: 'Arched struts carrying vault thrust over an aisle', sheetNo: 'ROF-08', view: 'SECTION · CLOSE-UP IN CONTEXT',
  description: 'Section through one bay of a Gothic church: the high nave wall and vault, the low aisle under its sloping roof, a buttress pier outside the aisle topped by a pinnacle, and a flying arch leaping from the pier to the nave wall at the springing of the vault, with the line of thrust dashed and a round close-up of the arch meeting the wall.',
  draw: drawFlying, whole: { scale: 0.0148, ox: 220, oy: 322, w: [-6000, 11800], h: [-400, 19800], caption: 'WHOLE BAY · SECTION' }, at: [2500, 15200], r: 3400, note: 'ARCH SPANS 7 m OVER THE AISLE · THRUST CARRIED TO THE PIER',
  items: (at) => ({ items: [{ text: 'FLYING ARCH', at: at(4600, 14900) }, { text: 'NAVE WALL', at: at(550, 16800) }, { text: 'VAULT SPRINGING', at: at(0, 15000) }, { text: 'LINE OF THRUST', at: at(3600, 14700) }, { text: 'AISLE ROOF', at: at(3000, 10100) }], dims: [] }),
  scaleUnit: { mm: 5000, name: '5 m', count: 2 },
}

// ---------------------------------------------------------------------------
// Triple-stepped platform: a three-tier stone podium carrying a building front
// ---------------------------------------------------------------------------
function drawPlatform(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  T.profile.push(d.poly([[-9500, 0], [9500, 0]]))
  const tiers: Array<[number, number, number]> = [[7800, 0, 700], [6600, 700, 1400], [5400, 1400, 2100]]
  tiers.forEach(([hw, y0, y1], i) => {
    const b: XY[] = [[-hw, y0], [hw, y0], [hw, y1], [-hw, y1]]
    T.profile.push(d.poly(b, true))
    d.hatch(b, 'h-stone')
    for (let x = -hw + 700; x < hw; x += 1400) T.shading.push(d.poly([[x, y0], [x, y1]]))
    T.fine.push(d.poly([[-hw - 60, y1], [hw + 60, y1]]), d.poly([[-hw - 60, y1], [-hw - 60, y1 - 90]]), d.poly([[hw + 60, y1], [hw + 60, y1 - 90]]))
    void i
  })
  // a central stair up the three tiers
  for (let k = 0; k < 3; k++) T.profile.push(d.poly([[-1400 + k * 0, k * 700], [1400, k * 700], [1400, (k + 1) * 700], [-1400, (k + 1) * 700]], true))
  // a plain temple front on top: steps are not repeated; columns and pediment
  const base = 2100
  for (const x of [-3600, -1800, 0, 1800, 3600]) T.profile.push(d.poly([[x - 280, base], [x - 280, base + 4600], [x + 280, base + 4600], [x + 280, base]], true))
  T.profile.push(d.poly([[-4300, base + 4600], [4300, base + 4600], [4300, base + 5300], [-4300, base + 5300]], true), d.poly([[-4500, base + 5300], [0, base + 6900], [4500, base + 5300]], true))
  // a person for scale
  T.profile.push(d.circ(-6300, 2100 + 1700, 105), d.poly([[-6300, 2100 + 1590], [-6300, 2100 + 900], [-6430, 2100 + 450], [-6430, 2100]]), d.poly([[-6300, 2100 + 900], [-6170, 2100 + 450], [-6170, 2100]]), d.poly([[-6430, 2100 + 1400], [-6300, 2100 + 1500], [-6170, 2100 + 1400]]))
  T.center.push(d.poly([[0, -300], [0, base + 7200]]))
}

const platform: Pair = {
  id: 'triple-stepped-platform', title: 'Triple-Stepped Platform', subtitle: 'Three-tiered stone podium raising a building', sheetNo: 'STC-21', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
  description: 'Elevation of a three-tiered stone platform carrying a columned building front: each tier is 700 mm high and set back 1200 mm from the one below, with a central stair and a person shown for scale, and a round close-up of the stepped edge.',
  draw: drawPlatform, whole: { scale: 0.0165, ox: 300, oy: 262, w: [-9500, 9500], h: [0, 9000], caption: 'WHOLE PLATFORM · ELEVATION' }, at: [-5400, 1300], r: 2100, note: 'EACH TIER 700 mm HIGH · SET BACK 1200 mm',
  items: (at) => ({ items: [{ text: 'UPPER TIER', at: at(-5000, 1750) }, { text: 'MIDDLE TIER', at: at(-6200, 1050) }, { text: 'LOWER TIER', at: at(-7000, 350) }, { text: 'STONE COURSES', at: at(-4500, 1000) }], dims: [] }),
  scaleUnit: { mm: 2000, name: '2 m', count: 3 },
}

export const CRUDE_C_SHEETS: Array<() => SheetSpec> = [treasury, metro, thatch, nave, flying, platform].map((c) => () => build(c))
void f
void el
