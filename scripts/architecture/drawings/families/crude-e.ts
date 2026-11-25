/**
 * The last group of thin or sparse drawings redone as close-ups in context: loggia, porte-cochère, pocket door,
 * deep window recess, pilaster, balustrade, accessibility ramp, cascade, colonnade, arcade. Millimetres, y up
 * (plans: x across, y up the page).
 */
import { type SheetSpec, f, el, path, text, hDim, vDim } from '../sheet'
import { pen, arcXY, build, type Pair, type XY } from './pairs-a'
import type { Layers } from '../kit'

const quad = (a: XY, c: XY, b: XY, n = 8): XY[] => Array.from({ length: n }, (_, i) => {
  const t = (i + 1) / n
  return [(1 - t) ** 2 * a[0] + 2 * (1 - t) * t * c[0] + t * t * b[0], (1 - t) ** 2 * a[1] + 2 * (1 - t) * t * c[1] + t * t * b[1]] as XY
})
const ACC = 'style="stroke: var(--_accent)"'

// ---------------------------------------------------------------------------
// Loggia: a palazzo front 18 m wide, ground floor of rusticated wall, a roofed gallery open to the air above it
// ---------------------------------------------------------------------------
function drawLoggia(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  const W = 9000
  const floor2 = 4800
  const top = 10400
  T.profile.push(d.poly([[-W, 0], [W, 0], [W, top], [-W, top]], true))
  // ground floor: rusticated courses, doors and windows
  for (let v = 400; v < floor2; v += 400) T.shading.push(d.poly([[-W, v], [W, v]]))
  for (let x = -W; x < W; x += 1100) for (let v = 0; v < floor2; v += 800) T.shading.push(d.poly([[x + ((v / 800) % 2) * 550, v], [x + ((v / 800) % 2) * 550, v + 400]]))
  for (const x of [-6300, -2100, 2100, 6300]) {
    T.profile.push(d.poly([[x - 700, 600], [x - 700, 3000], ...arcXY(x, 3000, 700, Math.PI, 0, 10).slice(1), [x + 700, 600]], true))
    T.fine.push(d.poly([[x - 560, 700], [x - 560, 3000], ...arcXY(x, 3000, 560, Math.PI, 0, 10).slice(1), [x + 560, 700]]))
  }
  T.profile.push(d.poly([[-W, floor2], [W, floor2], [W, floor2 + 300], [-W, floor2 + 300]], true))
  // the loggia: five arches on slender columns, open to a recess with a back wall and doors; balustrade across the openings
  const bay = 3000
  const bays = 5
  const x0 = -(bay * bays) / 2
  T.profile.push(d.poly([[x0, floor2 + 300], [-x0, floor2 + 300], [-x0, top - 900], [x0, top - 900]], true))
  d.hatch([[x0, floor2 + 300], [-x0, floor2 + 300], [-x0, top - 900], [x0, top - 900]], 'h-earth')
  for (let k = 0; k < bays; k++) {
    const cx = x0 + bay * (k + 0.5)
    const spring = floor2 + 300 + 2700
    const r = bay / 2 - 260
    // back wall door seen through the opening
    T.profile.push(d.poly([[cx - 450, floor2 + 300], [cx - 450, floor2 + 2300], [cx + 450, floor2 + 2300], [cx + 450, floor2 + 300]], true))
    // opening: arch on columns, a masonry spandrel above
    T.hatch.push(`<path d="${d.poly([[cx - r, floor2 + 300], [cx - r, spring], ...arcXY(cx, spring, r, Math.PI, 0, 14).slice(1), [cx + r, floor2 + 300]], true).replace(/^<path d="|"\/>$/g, '')}" style="fill: var(--_paper)"/>`)
    T.profile.push(d.poly([[cx - r, floor2 + 300], [cx - r, spring], ...arcXY(cx, spring, r, Math.PI, 0, 14).slice(1), [cx + r, floor2 + 300]]))
    T.fine.push(d.poly(arcXY(cx, spring, r + 130, Math.PI, 0, 14)))
    // balustrade across the opening
    T.profile.push(d.poly([[cx - r, floor2 + 300 + 900], [cx + r, floor2 + 300 + 900]]), d.poly([[cx - r, floor2 + 300 + 820], [cx + r, floor2 + 300 + 820]]))
    for (let b = 0; b < 8; b++) T.fine.push(d.poly([[cx - r + 140 + b * ((2 * r - 280) / 7), floor2 + 300 + 100], [cx - r + 140 + b * ((2 * r - 280) / 7), floor2 + 300 + 800]]))
  }
  for (let k = 0; k <= bays; k++) {
    const cx = x0 + bay * k
    T.profile.push(d.poly([[cx - 190, floor2 + 300], [cx - 190, top - 1700], [cx + 190, top - 1700], [cx + 190, floor2 + 300]], true), d.poly([[cx - 300, top - 1700], [cx + 300, top - 1700], [cx + 300, top - 1500], [cx - 300, top - 1500]], true))
  }
  // cornice and roof edge
  T.profile.push(d.poly([[-W - 300, top - 900], [W + 300, top - 900], [W + 300, top], [-W - 300, top]], true))
  T.fine.push(d.poly([[-W - 300, top - 600], [W + 300, top - 600]]), d.poly([[-W - 300, top - 300], [W + 300, top - 300]]))
}

const loggia: Pair = {
  id: 'loggia', title: 'Loggia', subtitle: 'Roofed gallery open to the air on one side', sheetNo: 'FAC-15', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
  description: 'Elevation of an Italian palazzo front: a rusticated ground floor and, above it, a roofed gallery of five arches on columns open to the air, through which the back wall and doors show behind a balustrade, with a round close-up of one bay.',
  draw: drawLoggia, whole: { scale: 0.0162, ox: 300, oy: 285, w: [-9300, 9300], h: [0, 10400], caption: 'WHOLE PALAZZO FRONT · ELEVATION' }, at: [-3000 + 0, 4800 + 300 + 1900], r: 2000, note: 'BAYS 3 m WIDE · BALUSTRADE 900 mm HIGH · A ROOF OVER AN OPEN ROOM',
  items: (at) => ({ items: [{ text: 'ARCH ON SLENDER COLUMNS', at: at(-3000, 4800 + 300 + 2700 + 1100) }, { text: 'OPEN TO THE AIR', at: at(-3000, 4800 + 300 + 1900) }, { text: 'BACK WALL AND DOOR', at: at(-3000 - 150, 4800 + 300 + 1100) }, { text: 'BALUSTRADE', at: at(-3000 - 1000, 4800 + 300 + 500) }, { text: 'COLUMN', at: at(-4500, 4800 + 300 + 2000) }], dims: [] }),
  scaleUnit: { mm: 5000, name: '5 m', count: 2 },
}

// ---------------------------------------------------------------------------
// Porte-cochère: a canopy projecting from an entrance, tall enough for a car to drive under (side view)
// ---------------------------------------------------------------------------
function drawPorteCochere(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  T.profile.push(d.poly([[-3000, 0], [10500, 0]]))
  // the building: a wall in section with the entrance door; its roof above
  const wall: XY[] = [[-2600, 0], [0, 0], [0, 7600], [-2600, 7600]]
  d.hatch(wall)
  T.cut.push(d.poly(wall, true))
  T.profile.push(d.poly([[0, 1700], [0, 0]]))
  // the canopy: a deep slab with a fascia, a thin roof edge and a gutter, carried on two columns at the outer end
  const slab: XY[] = [[0, 4100], [7200, 4100], [7200, 4750], [7000, 4750], [7000, 4950], [0, 4950]]
  d.hatch(slab, 'h-concrete')
  T.cut.push(d.poly(slab, true))
  T.profile.push(d.poly([[7200, 4100], [7200, 4750]]))
  T.fine.push(d.poly([[0, 4750], [6900, 4750]]), d.poly([[7000, 4950], [7000, 5150], [7300, 5150], [7300, 4750]]))
  // columns (one shown in elevation) with a base and a capital
  for (const x of [6500]) {
    T.profile.push(d.poly([[x - 220, 0], [x - 220, 4100], [x + 220, 4100], [x + 220, 0]], true), d.poly([[x - 340, 0], [x - 340, 220], [x + 340, 220], [x + 340, 0]], true), d.poly([[x - 340, 3800], [x - 340, 4100], [x + 340, 4100], [x + 340, 3800]], true))
    for (let k = -1; k <= 1; k++) T.shading.push(d.poly([[x + k * 110, 300], [x + k * 110, 3760]]))
  }
  // a car driving under: body, cabin, wheels
  const car: XY[] = [[700, 420], [700, 760], [1100, 980], [1900, 1060], [2500, 1580], [4100, 1600], [4750, 1050], [5700, 960], [6000, 720], [6000, 420]]
  T.profile.push(d.poly(car, true))
  for (const wx of [1800, 4900]) T.profile.push(d.circ(wx, 380, 380), d.circ(wx, 380, 210))
  T.fine.push(d.poly([[2700, 1560], [2900, 1000], [3500, 1000], [3500, 1560]]), d.poly([[3650, 1560], [3650, 1000], [4150, 1000], [4600, 1540]]))
  // a person getting out, for scale
  T.profile.push(d.circ(8700, 1700, 110), d.poly([[8700, 1590], [8700, 900], [8570, 450], [8570, 0]]), d.poly([[8700, 900], [8830, 450], [8830, 0]]), d.poly([[8570, 1400], [8700, 1500], [8830, 1400]]))
  // paving and a kerb
  for (let x = -1000; x < 10500; x += 900) T.shading.push(d.poly([[x, 0], [x - 120, -140]]))
  T.center.push(d.poly([[3500, 4100], [3500, 4950]]).replace('/>', ' stroke-dasharray="4 3"/>'))
}

const porteCochere: Pair = {
  id: 'porte-cochere', title: 'Porte-Cochère', subtitle: 'Covered drive-through at an entrance', sheetNo: 'FAC-16', view: 'SECTION · CLOSE-UP IN CONTEXT',
  description: 'Section through a covered carriage entrance: a deep canopy slab projecting 7.2 m from the building wall over the drive, carried on a column at its outer end, with a car driving under it and a person for scale, and a round close-up of the canopy edge, fascia and column head.',
  draw: drawPorteCochere, whole: { scale: 0.0235, ox: 300, oy: 292, w: [-2600, 10500], h: [-200, 7600], caption: 'WHOLE ENTRANCE · SECTION' }, at: [6900, 4500], r: 1900, note: 'CANOPY PROJECTS 7.2 m · CLEAR HEIGHT 4.1 m FOR VEHICLES',
  items: (at) => ({ items: [{ text: 'CANOPY SLAB', at: at(5800, 4500) }, { text: 'FASCIA AND GUTTER', at: at(7250, 4900) }, { text: 'COLUMN CAPITAL', at: at(6300, 3950) }, { text: 'COLUMN', at: at(6290, 2800) }, { text: 'CLEAR HEIGHT 4.1 m', at: at(5200, 2400) }], dims: [] }),
  scaleUnit: { mm: 2000, name: '2 m', count: 3 },
}

// ---------------------------------------------------------------------------
// Pocket door: a plan of the wall between two rooms, the leaf sliding into a cavity inside the wall
// ---------------------------------------------------------------------------
function drawPocket(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  // two rooms either side of a partition wall
  T.profile.push(d.poly([[-3400, -2600], [3400, -2600], [3400, 2600], [-3400, 2600]], true))
  // the wall (hatched) with the opening in the middle and a deeper cavity beside it
  const left: XY[] = [[-3400, -75], [-450, -75], [-450, 75], [-3400, 75]]
  const right: XY[] = [[450, -75], [450, -100], [1700, -100], [1700, -100], [3400, -100], [3400, 100], [450, 100], [450, 75]]
  d.hatch(left)
  T.cut.push(d.poly(left, true))
  // pocket: the wall thickens round the cavity (studs either side of the leaf)
  const pocket: XY[] = [[450, -150], [2100, -150], [2100, 150], [450, 150]]
  const walls: XY[] = [[450, -150], [3400, -150], [3400, 150], [450, 150]]
  d.hatch([[450, -150], [3400, -150], [3400, -45], [450, -45]])
  d.hatch([[450, 45], [3400, 45], [3400, 150], [450, 150]])
  T.cut.push(d.poly([[450, -150], [3400, -150], [3400, -45], [450, -45]], true), d.poly([[450, 45], [3400, 45], [3400, 150], [450, 150]], true))
  void right
  void pocket
  void walls
  // the leaf: slid fully into the pocket (solid), and its closed position (dashed)
  T.profile.push(d.poly([[550, -22], [1450, -22], [1450, 22], [550, 22]], true))
  d.mark([[1550, -22], [2450, -22], [2450, 22], [1550, 22]], 'h-timber')
  T.fine.push(d.poly([[-450, -22], [450, -22], [450, 22], [-450, 22]], true).replace('/>', ' stroke-dasharray="6 4"/>'))
  // door frame jambs
  T.profile.push(d.poly([[-450, -110], [-450, 110], [-330, 110], [-330, -110]], true), d.poly([[450, -150], [450, 150]]))
  T.fine.push(d.poly([[-330, 0], [450, 0]]).replace('/>', ' stroke-dasharray="3 3"/>'))
  // room labels as furniture: a bed and a table, to show two rooms
  T.fine.push(d.poly([[-2800, -2000], [-1400, -2000], [-1400, -1000], [-2800, -1000]], true), d.poly([[1800, 1100], [2900, 1100], [2900, 2100], [1800, 2100]], true))
}

const pocket: Pair = {
  id: 'pocket-door', title: 'Pocket Door', subtitle: 'Leaf that slides into a cavity in the wall', sheetNo: 'DOR-09', view: 'PLAN · CLOSE-UP IN CONTEXT',
  description: 'Plan of a wall between two rooms with a door that slides sideways into a hollow cavity inside the wall, shown both closed (dashed) and fully open in its pocket, with a round close-up of the doorway and the pocket.',
  draw: drawPocket, whole: { scale: 0.036, ox: 300, oy: 168, w: [-3400, 3400], h: [-2600, 2600], caption: 'TWO ROOMS · PLAN' }, at: [1200, 0], r: 1250, note: 'DOOR 900 WIDE · POCKET AS LONG AS THE DOOR PLUS A HAND',
  items: (at) => ({ items: [{ text: 'DOOR LEAF IN THE POCKET', at: at(2000, 0) }, { text: 'DOOR WHEN CLOSED (DASHED)', at: at(0, 0) }, { text: 'WALL CAVITY (POCKET)', at: at(1000, 100) }, { text: 'DOORWAY (900 WIDE)', at: at(-300, -150) }, { text: 'STUD WALL', at: at(1600, -100) }], dims: [] }),
  scaleUnit: { mm: 1000, name: '1 m', count: 3 },
}

// ---------------------------------------------------------------------------
// Deep window recess: plan through a 900 mm castle wall with a splayed reveal and a window seat
// ---------------------------------------------------------------------------
function drawRecess(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  // the room (below), the thick wall with a splayed opening, and the outside above
  const wallL: XY[] = [[-4200, 0], [-1300, 0], [-420, 900], [-420, 1100], [-4200, 1100]]
  const wallR: XY[] = [[4200, 0], [1300, 0], [420, 900], [420, 1100], [4200, 1100]]
  for (const w of [wallL, wallR]) {
    d.hatch(w)
    T.cut.push(d.poly(w, true))
  }
  // the window in the outer face: frame and glass (a double line), a seat built into the recess
  T.profile.push(d.poly([[-420, 880], [420, 880], [420, 940], [-420, 940]], true))
  T.fine.push(d.poly([[-420, 910], [420, 910]]), d.poly([[0, 880], [0, 940]]))
  T.profile.push(d.poly([[-1250, 40], [1250, 40], [1250, 420], [-1250, 420]]).replace('/>', ' stroke-dasharray="6 4"/>'))
  // light spreading from the window into the room
  for (const a of [-0.9, -0.5, -0.15, 0.15, 0.5, 0.9]) T.center.push(d.poly([[a * 300, 940 + 80], [a * 300 + a * 1100, -1400]]).replace('/>', ' stroke-dasharray="10 5"/>'))
  T.profile.push(d.poly([[-4200, -1800], [4200, -1800]]), d.poly([[-4200, -1800], [-4200, 0]]), d.poly([[4200, -1800], [4200, 0]]))
  T.fine.push(d.poly([[-4200, 1100], [4200, 1100]]).replace('/>', ' stroke-dasharray="3 3"/>'))
  // a straight (unsplayed) opening for comparison, dashed
  T.fine.push(d.poly([[-420, 0], [-420, 900]]).replace('/>', ' stroke-dasharray="4 4"/>'), d.poly([[420, 0], [420, 900]]).replace('/>', ' stroke-dasharray="4 4"/>'))
}

const recess: Pair = {
  id: 'deep-window-recess', title: 'Deep Window Recess', subtitle: 'Splayed embrasure through a thick wall', sheetNo: 'WIN-16', view: 'PLAN · CLOSE-UP IN CONTEXT',
  description: 'Plan through a thick masonry wall with a window set in its outer face and the opening splayed wider toward the room, with a built-in seat, so that daylight fans out into the room, with a round close-up of the splayed reveal.',
  draw: drawRecess, whole: { scale: 0.0325, ox: 300, oy: 150, w: [-4200, 4200], h: [-1800, 1100], caption: 'ROOM AND WALL · PLAN' }, at: [-850, 500], r: 1300, note: 'WALL 1.1 m THICK · OPENING 840 WIDE OUTSIDE, 2.6 m WIDE INSIDE',
  items: (at) => ({ items: [{ text: 'SPLAYED REVEAL', at: at(-880, 450) }, { text: 'THICK WALL (CUT)', at: at(-1900, 700) }, { text: 'WINDOW (OUTER FACE)', at: at(-300, 910) }, { text: 'WINDOW SEAT', at: at(-1000, 230) }, { text: 'STRAIGHT OPENING (DASHED)', at: at(-420, 400) }], dims: [] }),
  scaleUnit: { mm: 1000, name: '1 m', count: 3 },
}

// ---------------------------------------------------------------------------
// Pilaster: a wall front with three pilasters; the plan close-up shows the flat column set into the wall
// ---------------------------------------------------------------------------
function drawPilasterWall(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  T.profile.push(d.poly([[-4200, 0], [4200, 0], [4200, 5600], [-4200, 5600]], true))
  for (let v = 300; v < 5600; v += 300) T.shading.push(d.poly([[-4200, v], [4200, v]]))
  for (const px of [-3000, 0, 3000]) {
    const w = 700
    T.profile.push(d.poly([[px - w * 0.7, 0], [px - w * 0.7, 300], [px - w * 0.5, 300], [px - w * 0.5, 4600], [px - w * 0.62, 4600], [px - w * 0.62, 5000], [px + w * 0.62, 5000], [px + w * 0.62, 4600], [px + w * 0.5, 4600], [px + w * 0.5, 300], [px + w * 0.7, 300], [px + w * 0.7, 0]], true))
    for (let k = -2; k <= 2; k++) T.fine.push(d.poly([[px + k * w * 0.2, 420], [px + k * w * 0.2, 4560]]))
    T.profile.push(d.poly([[px - w * 0.8, 5000], [px + w * 0.8, 5000], [px + w * 0.8, 5200], [px - w * 0.8, 5200]], true))
  }
  T.profile.push(d.poly([[-4400, 5200], [4400, 5200], [4400, 5600], [-4400, 5600]], true))
  // a window between the pilasters for scale
  for (const wx of [-1500, 1500]) T.profile.push(d.poly([[wx - 500, 1200], [wx + 500, 1200], [wx + 500, 3600], [wx - 500, 3600]], true), d.poly([[wx - 600, 3600], [wx + 600, 3600], [wx + 600, 3750], [wx - 600, 3750]], true))
}
const PIL_BOX: [number, number, number, number] = [-700, -500, 700, 900]
function pilasterDetail(T: Layers, win: { cx: number; cy: number; r: number }) {
  const ds = (win.r * 1.6) / 1600
  const X = (u: number) => win.cx + u * ds
  const Y = (v: number) => win.cy - v * ds
  const wall = path([[X(-700), Y(-500)], [X(700), Y(-500)], [X(700), Y(0)], [X(-700), Y(0)]] as unknown as [number, number][], true)
  T.hatch.push(`<path d="${wall}" fill="url(#h-stone)" stroke="none"/>`)
  T.cut.push(el(wall))
  // the pilaster: 700 wide, projecting 175, with three shallow flutes
  const pil: XY[] = [[-350, 0], [-350, 175], [350, 175], [350, 0]]
  T.hatch.push(`<path d="${path(pil.map(([u, v]) => [X(u), Y(v)] as [number, number]), true)}" fill="url(#h-stone)" stroke="none"/>`)
  T.cut.push(`<path d="${path(pil.map(([u, v]) => [X(u), Y(v)] as [number, number]), true)}" ${ACC}/>`)
  for (const u of [-210, -70, 70, 210]) T.fine.push(el(`M${f(X(u))} ${f(Y(175))}V${f(Y(120))}`))
  // a full round column of the same width, drawn dashed, to compare
  T.fine.push(`<circle cx="${f(X(0))}" cy="${f(Y(400))}" r="${f(350 * ds)}" stroke-dasharray="5 4"/>`)
  void PIL_BOX
}
const pilaster: Pair = {
  id: 'pilaster', title: 'Pilaster', subtitle: 'Flat column projecting slightly from a wall', sheetNo: 'COL-06', view: 'ELEVATION · PLAN CLOSE-UP IN CONTEXT',
  description: 'Elevation of a wall with three flat columns (pilasters) set into it, each with a base, shaft and capital, and a round plan section through one pilaster showing how little it projects compared with a full round column drawn dashed.',
  draw: drawPilasterWall, whole: { scale: 0.0345, ox: 300, oy: 262, w: [-4400, 4400], h: [0, 5600], caption: 'WHOLE WALL · ELEVATION' }, at: [0, 2300], r: 1400, note: 'PILASTER 700 WIDE · PROJECTS ONLY 175 mm',
  detail: pilasterDetail,
  items: () => ({ items: [], dims: [] }),
  customItems: (win) => {
    const ds = (win.r * 1.6) / 1600
    const X = (u: number) => win.cx + u * ds
    const Y = (v: number) => win.cy - v * ds
    return { items: [{ text: 'PILASTER (PLAN)', at: [X(-350), Y(100)] }, { text: 'WALL', at: [X(-600), Y(-250)] }, { text: 'FLUTES', at: [X(-210), Y(150)] }, { text: 'FULL COLUMN (DASHED)', at: [X(-300), Y(560)] }], dims: [hDim(Y(330) - 200 * ds, X(-350), X(350), '700'), vDim(X(480), Y(0), Y(175), '175', X(400)), text(X(-640), Y(800), 'ROOM', 'class="t-small"')] }
  },
  scaleUnit: { mm: 1000, name: '1 m', count: 3 },
}

// ---------------------------------------------------------------------------
// Balustrade: three bays between pedestals on a terrace edge, with the vase-shaped baluster profile
// ---------------------------------------------------------------------------
function baluster(T: Layers, d: ReturnType<typeof pen>, cx: number, y0: number) {
  // vase profile, 650 mm tall, half-width in the list, mirrored
  const half: XY[] = [[110, 0], [110, 40], [75, 70], [60, 110], [80, 150], [125, 210], [135, 270], [110, 340], [70, 400], [48, 440], [56, 480], [92, 510], [92, 550], [70, 580], [70, 650]]
  const pts: XY[] = [...half.map(([x, y]) => [cx + x, y0 + y] as XY), ...[...half].reverse().map(([x, y]) => [cx - x, y0 + y] as XY)]
  T.profile.push(d.poly(pts, true))
  T.fine.push(d.poly([[cx - 60, y0 + 250], [cx + 60, y0 + 250]]), d.poly([[cx - 40, y0 + 520], [cx + 40, y0 + 520]]))
}
function drawBalustrade(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  T.profile.push(d.poly([[-5200, 0], [5200, 0]]))
  // terrace edge below, in section
  d.hatch([[-5200, -900], [5200, -900], [5200, 0], [-5200, 0]], 'h-stone')
  T.cut.push(d.poly([[-5200, -900], [5200, -900], [5200, 0], [-5200, 0]], true))
  // pedestals at the ends and every 2.4 m, rail on top, plinth below
  const xs = [-3600, -1200, 1200, 3600]
  for (const px of xs) {
    T.profile.push(d.poly([[px - 260, 0], [px - 260, 160], [px - 220, 160], [px - 220, 780], [px - 280, 780], [px - 280, 1000], [px + 280, 1000], [px + 280, 780], [px + 220, 780], [px + 220, 160], [px + 260, 160], [px + 260, 0]], true))
    T.fine.push(d.poly([[px - 220, 400], [px + 220, 400]]))
  }
  for (let i = 0; i < 3; i++) {
    const x0 = xs[i] + 260
    const x1 = xs[i + 1] - 260
    T.profile.push(d.poly([[x0, 130], [x1, 130], [x1, 190], [x0, 190]], true), d.poly([[x0, 760], [x1, 760], [x1, 880], [x0, 880]], true))
    const n = 11
    for (let k = 0; k < n; k++) baluster(T, d, x0 + ((k + 0.5) * (x1 - x0)) / n, 190)
  }
}
const balustrade: Pair = {
  id: 'balustrade', title: 'Balustrade', subtitle: 'Railing of balusters between pedestals', sheetNo: 'FAC-01', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
  description: 'Elevation of a terrace balustrade: three bays of vase-shaped balusters between a base rail and a top rail, divided by pedestals, with a round close-up of two balusters showing their profile, the spacing and the rails.',
  draw: drawBalustrade, whole: { scale: 0.0535, ox: 300, oy: 178, w: [-5200, 5200], h: [-900, 1000], caption: 'THREE BAYS · ELEVATION' }, at: [-2000, 520], r: 520, note: 'HEIGHT 1000 mm · BALUSTERS ABOUT 200 mm APART (CLEAR GAP UNDER 100 mm)',
  items: (at) => ({ items: [{ text: 'TOP RAIL (HANDRAIL)', at: at(-2000, 820) }, { text: 'BALUSTER (VASE PROFILE)', at: at(-2090, 560) }, { text: 'BASE RAIL', at: at(-2000, 160) }, { text: 'PEDESTAL', at: at(-1460, 600) }, { text: 'TERRACE EDGE', at: at(-2000, -400) }], dims: [] }),
  scaleUnit: { mm: 1000, name: '1 m', count: 3 },
}

// ---------------------------------------------------------------------------
// Accessibility ramp: 1:12 slope, 760 mm rise per run, landings, handrails at 865 to 965 mm
// ---------------------------------------------------------------------------
function drawRamp(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  T.profile.push(d.poly([[-1800, 0], [12900, 0]]))
  const rise = 760
  const run = rise * 12
  // ramp slab (section) between two landings; the upper landing meets the door sill
  const slab: XY[] = [[0, 0], [run, rise], [run + 1525, rise], [run + 1525, rise - 150], [run, rise - 150], [0, 0]]
  d.hatch([[0, 0], [run, rise], [run + 1525, rise], [run + 1525, 0]], 'h-concrete')
  T.cut.push(d.poly([[0, 0], [run, rise], [run + 1525, rise], [run + 1525, 0]], true))
  void slab
  // handrails at 920 above the surface, with 305 mm extensions at the ends; edge kerb 50 high
  const rail = 920
  T.profile.push(d.poly([[-305, rail], [0, rail], [run, rise + rail], [run + 1525 + 305, rise + rail]]))
  T.fine.push(d.poly([[-305, rail - 90], [0, rail - 90], [run, rise + rail - 90], [run + 1525 + 305, rise + rail - 90]]))
  for (let x = 0; x <= run; x += 1500) {
    T.profile.push(d.poly([[x, (x / run) * rise], [x, (x / run) * rise + rail]]))
  }
  T.profile.push(d.poly([[run + 1525 + 200, rise], [run + 1525 + 200, rise + rail]]))
  // the building wall and door at the top, and a person using a wheelchair for scale
  d.hatch([[run + 1525, 0], [run + 1525 + 300, 0], [run + 1525 + 300, 2800], [run + 1525, 2800]])
  T.cut.push(d.poly([[run + 1525, 0], [run + 1525 + 300, 0], [run + 1525 + 300, 2800], [run + 1525, 2800]], true))
  T.profile.push(d.circ(3600, 760 * 0.4 + 1330, 105), d.poly([[3600, 760 * 0.4 + 1230], [3600, 760 * 0.4 + 760], [3900, 760 * 0.4 + 640]]), d.circ(3650, 760 * 0.4 + 330, 330))
}
const ramp: Pair = {
  id: 'accessibility-ramp', title: 'Accessibility Ramp', subtitle: 'Wheelchair-accessible ramp to code limits', sheetNo: 'STR-12', view: 'SECTION · CLOSE-UP IN CONTEXT',
  description: 'Section through a wheelchair ramp rising 760 mm at a slope of 1 in 12 to a landing at a doorway, with handrails extended 305 mm past each end, and a round close-up of the top landing and handrail end.',
  draw: drawRamp, whole: { scale: 0.0315, ox: 125, oy: 270, w: [-1800, 11700], h: [0, 3400], caption: 'WHOLE RAMP · SECTION' }, at: [run0() + 700, 760 + 450], r: 1300, note: 'SLOPE 1:12 · RISE 760 mm · LANDING 1525 mm · HANDRAIL 865–965 mm',
  items: (at) => ({ items: [{ text: 'TOP LANDING (1525 LONG)', at: at(run0() + 760, 760 - 40) }, { text: 'HANDRAIL AT 920', at: at(run0() + 300, 760 + 920) }, { text: 'HANDRAIL EXTENSION (305)', at: at(run0() + 1525 + 150, 760 + 920) }, { text: 'END OF THE SLOPE', at: at(run0(), 700) }, { text: 'DOOR WALL', at: at(run0() + 1525 + 150, 1300) }], dims: [] }),
  scaleUnit: { mm: 2000, name: '2 m', count: 3 },
}
function run0() { return 760 * 12 }

// ---------------------------------------------------------------------------
// Cascade: water stepping down a flight of stone ledges, a basin at the foot (section)
// ---------------------------------------------------------------------------
function drawCascade(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  const steps = 7
  const rise = 600
  const tread = 1100
  const H = steps * rise
  T.profile.push(d.poly([[-2000, 0], [steps * tread + 3600, 0]]))
  // the stone body of the cascade, in section, stepping down to the right
  const body: XY[] = [[-2000, 0], [-2000, H]]
  for (let i = 0; i < steps; i++) body.push([i * tread, H - i * rise], [(i + 1) * tread, H - i * rise])
  body.push([steps * tread, 0])
  d.hatch(body, 'h-earth')
  T.cut.push(d.poly(body))
  // stone coping on each lip, and water falling over it as a thin curved sheet
  for (let i = 0; i < steps; i++) {
    const x = (i + 1) * tread
    const y = H - i * rise
    T.profile.push(d.poly([[x - 220, y], [x - 220, y + 90], [x + 40, y + 90], [x + 40, y - 40], [x, y - 40]], true))
    const sheet = quad([x + 40, y + 20], [x + 260, y + 20], [x + 300, y - rise + 120], 8)
    T.center.push(d.poly([[x - tread + 80, y + 130], [x - 40, y + 130], ...quad([x - 40, y + 130], [x + 200, y + 150], [x + 280, y - rise + 140], 8)]))
    T.fine.push(d.poly(sheet))
    // ripples where each sheet lands on the next ledge
    T.fine.push(d.poly(quad([x + 300, y - rise + 160], [x + 420, y - rise + 80], [x + 560, y - rise + 170], 4)), d.poly(quad([x + 560, y - rise + 170], [x + 650, y - rise + 100], [x + 780, y - rise + 180], 4)))
  }
  // the basin at the foot, with water
  const bx = steps * tread
  T.center.push(d.poly([[bx - 20, 260], [bx + 3600, 260]]))
  for (const [dy, w] of [[200, 1400], [140, 900], [80, 500]] as const) T.fine.push(d.poly(quad([bx + 300, dy], [bx + 300 + w / 2, dy + 70], [bx + 300 + w, dy], 6)))
  T.profile.push(d.poly([[bx + 3600, 0], [bx + 3600, 400], [bx + 3700, 400], [bx + 3700, 0]], true))
}
const cascade: Pair = {
  id: 'cascade', title: 'Cascade', subtitle: 'Water stepping down a flight of stone ledges', sheetNo: 'GDN-05', view: 'SECTION · CLOSE-UP IN CONTEXT',
  description: 'Section through a garden cascade: seven stone ledges stepping down 600 mm each, water spilling over each coped lip in a thin curved sheet and rippling where it lands, and a basin at the foot, with a round close-up of one step.',
  draw: drawCascade, whole: { scale: 0.0245, ox: 150, oy: 270, w: [-2000, 11300], h: [0, 4300], caption: 'WHOLE CASCADE · SECTION' }, at: [3 * 1100 + 300, 4200 - 3 * 600 - 100], r: 1000, note: 'EACH STEP 600 mm HIGH × 1100 mm DEEP · WATER SHEET ABOUT 20 mm THICK',
  items: (at) => ({ items: [{ text: 'COPING STONE ON THE LIP', at: at(3 * 1100 - 100, 4200 - 3 * 600 + 40) }, { text: 'WATER SHEET FALLING', at: at(3 * 1100 + 200, 4200 - 3 * 600 - 250) }, { text: 'RIPPLES', at: at(3 * 1100 + 500, 4200 - 4 * 600 + 130) }, { text: 'STONE BODY OF THE STEP', at: at(3 * 1100 - 600, 4200 - 3 * 600 - 400) }], dims: [] }),
  scaleUnit: { mm: 2000, name: '2 m', count: 3 },
}

// ---------------------------------------------------------------------------
// Colonnade and arcade: a row of seven columns carrying a straight beam, and a row of arches on piers (elevations)
// ---------------------------------------------------------------------------
function drawColonnade(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  const bay = 3600
  const n = 7
  const x0 = -(bay * (n - 1)) / 2
  T.profile.push(d.poly([[x0 - 1500, 0], [-x0 + 1500, 0]]))
  d.hatch([[x0 - 1500, -300], [-x0 + 1500, -300], [-x0 + 1500, 0], [x0 - 1500, 0]], 'h-stone')
  for (let k = 0; k < n; k++) {
    const x = x0 + k * bay
    T.profile.push(d.poly([[x - 420, 0], [x - 420, 220], [x - 330, 220], [x - 330, 6300], [x - 420, 6300], [x - 420, 6600], [x + 420, 6600], [x + 420, 6300], [x + 330, 6300], [x + 330, 220], [x + 420, 220], [x + 420, 0]], true))
    for (let j = -2; j <= 2; j++) T.fine.push(d.poly([[x + j * 120, 360], [x + j * 120, 6200]]))
  }
  T.profile.push(d.poly([[x0 - 600, 6600], [-x0 + 600, 6600], [-x0 + 600, 7500], [x0 - 600, 7500]], true), d.poly([[x0 - 800, 7500], [-x0 + 800, 7500], [-x0 + 800, 8500], [x0 - 800, 8500]], true))
  for (let x = x0 - 500; x < -x0 + 500; x += 360) T.fine.push(d.poly([[x, 8100], [x, 8450]]), d.poly([[x, 7550], [x, 7950]]))
  T.fine.push(d.poly([[x0 - 600, 7050], [-x0 + 600, 7050]]), d.poly([[x0 - 800, 8100], [-x0 + 800, 8100]]))
}
const colonnade: Pair = {
  id: 'colonnade', title: 'Colonnade', subtitle: 'Row of columns carrying a straight entablature', sheetNo: 'URB-02', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
  description: 'Elevation of a colonnade: seven evenly spaced columns on a stone base carrying one continuous straight beam, frieze and cornice, with a round close-up of one column head and the beam above it.',
  draw: drawColonnade, whole: { scale: 0.0135, ox: 300, oy: 240, w: [-12400, 12400], h: [-300, 8500], caption: 'WHOLE COLONNADE · ELEVATION' }, at: [-3600, 6900], r: 1700, note: 'COLUMNS 3.6 m APART · 6.6 m TALL · BEAM CONTINUES OVER ALL',
  items: (at) => ({ items: [{ text: 'CORNICE', at: at(-4300, 8100) }, { text: 'FRIEZE', at: at(-4300, 7300) }, { text: 'ARCHITRAVE (BEAM)', at: at(-4300, 6850) }, { text: 'CAPITAL', at: at(-3980, 6450) }, { text: 'COLUMN', at: at(-3930, 5600) }], dims: [] }),
  scaleUnit: { mm: 5000, name: '5 m', count: 2 },
}

function drawArcade(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  const bay = 3600
  const n = 6
  const x0 = -(bay * n) / 2
  T.profile.push(d.poly([[x0 - 900, 0], [-x0 + 900, 0]]))
  const spring = 4200
  const r = bay / 2 - 450
  T.profile.push(d.poly([[x0, 0], [x0, 8200], [-x0, 8200], [-x0, 0]], true))
  d.hatch([[x0, 0], [x0, 8200], [-x0, 8200], [-x0, 0]], 'h-stone')
  for (let k = 0; k < n; k++) {
    const cx = x0 + bay * (k + 0.5)
    const open: XY[] = [[cx - r, 0], [cx - r, spring], ...arcXY(cx, spring, r, Math.PI, 0, 16).slice(1), [cx + r, 0]]
    T.profile.push(`<path d="${d.poly(open, true).replace(/^<path d="|"\/>$/g, '')}" style="fill: var(--_paper)"/>`, d.poly(open, true))
    T.fine.push(d.poly(arcXY(cx, spring, r + 250, Math.PI, 0, 16)))
    T.profile.push(d.poly([[cx - r - 60, spring - 220], [cx - r - 60, spring], [cx - r + 60, spring], [cx - r + 60, spring - 220]], true).replace('/>', '/>'))
    for (let j = 0; j <= 16; j += 1) {
      if (j % 2) continue
      const a = Math.PI - (j / 16) * Math.PI
      T.fine.push(d.poly([[cx + r * Math.cos(a), spring + r * Math.sin(a)], [cx + (r + 250) * Math.cos(a), spring + (r + 250) * Math.sin(a)]]))
    }
  }
  T.profile.push(d.poly([[x0 - 300, 8200], [-x0 + 300, 8200], [-x0 + 300, 8700], [x0 - 300, 8700]], true))
  T.fine.push(d.poly([[x0 - 300, 8450], [-x0 + 300, 8450]]))
}
const arcade: Pair = {
  id: 'arcade', title: 'Arcade', subtitle: 'Row of arches carried on piers', sheetNo: 'URB-01', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
  description: 'Elevation of an arcade: six round arches in a continuous wall, each carried on stout piers with an impost block at the springing, and a cornice running along the top, with a round close-up of one arch springing from its pier.',
  draw: drawArcade, whole: { scale: 0.0155, ox: 300, oy: 235, w: [-11000, 11000], h: [0, 8700], caption: 'WHOLE ARCADE · ELEVATION' }, at: [-7200, 4300], r: 1900, note: 'BAYS 3.6 m WIDE · ARCHES SPRING AT 4.2 m',
  items: (at) => ({ items: [{ text: 'ARCH RING (VOUSSOIRS)', at: at(-7200 + 1000, 4200 + 1500) }, { text: 'IMPOST BLOCK', at: at(-7200 - 450, 4100) }, { text: 'PIER', at: at(-7200, 2600) }, { text: 'OPENING', at: at(-5400, 3000) }], dims: [] }),
  scaleUnit: { mm: 5000, name: '5 m', count: 2 },
}

export const CRUDE_E_SHEETS: Array<() => SheetSpec> = [loggia, porteCochere, pocket, recess, pilaster, balustrade, ramp, cascade, colonnade, arcade].map((c) => () => build(c))
void f
void el
