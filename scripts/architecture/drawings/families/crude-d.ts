/**
 * Redrawn: cartouche (Baroque scroll frame), transept (church plan), ridgepole (roof frame section).
 * Each shows the whole with a round close-up. Millimetres, y up.
 */
import { type SheetSpec, f, el } from '../sheet'
import { pen, arcXY, build, type Pair, type XY } from './pairs-a'
import { acanthus } from './orders-detail'
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
const ell = (cx: number, cy: number, rx: number, ry: number, n = 32): XY[] => arcXY(cx, cy, 1, 0, 2 * Math.PI, n).map(([x, y]) => [cx + (x - cx) * rx, cy + (y - cy) * ry] as XY)

// ---------------------------------------------------------------------------
// Cartouche: an oval field in a scrolled frame, with volutes, leaves, a shell crest and a hanging drop
// ---------------------------------------------------------------------------
function spiralXY(cx: number, cy: number, R: number, a0: number, turns: number, dir: 1 | -1): XY[] {
  const n = 40
  return Array.from({ length: n + 1 }, (_, i) => {
    const t = i / n
    const a = a0 + dir * t * turns * 2 * Math.PI
    const r = R * Math.pow(0.12, t)
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as XY
  })
}

function drawCartouche(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  // the oval field, a bead moulding and an inner rim
  T.profile.push(d.poly(ell(0, 0, 400, 520), true), d.poly(ell(0, 0, 350, 470), true))
  T.fine.push(d.poly(ell(0, 0, 440, 560), true))
  for (let i = 0; i < 36; i++) {
    const a = (i / 36) * 2 * Math.PI
    T.fine.push(d.circ(395 * Math.cos(a) * 1.075, 515 * Math.sin(a) * 1.075, 26))
  }
  for (const dy of [-170, -90, -10, 70, 150]) T.fine.push(d.poly([[-230 + Math.abs(dy) * 0.35, dy], [230 - Math.abs(dy) * 0.35, dy]]))
  // the frame: a band with gadroon ticks around the field
  const outer = ell(0, 0, 560, 710)
  T.profile.push(d.poly(outer, true))
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * 2 * Math.PI
    T.shading.push(d.poly([[470 * Math.cos(a), 600 * Math.sin(a)], [545 * Math.cos(a), 695 * Math.sin(a)]]))
  }
  // four volutes (scrolled ends) at the corners, bigger above, smaller below, each with a leaf growing out of it
  for (const sx of [-1, 1] as const) {
    for (const [vy, R, dir] of [[480, 210, -1], [-470, 150, 1]] as const) {
      const cx = sx * 740
      const sp = spiralXY(cx, vy, R, sx < 0 ? 0 : Math.PI, 2.25, (sx * dir) as 1 | -1)
      T.profile.push(d.poly(sp))
      T.fine.push(d.poly(spiralXY(cx, vy, R * 0.82, sx < 0 ? 0 : Math.PI, 2.25, (sx * dir) as 1 | -1)))
      // a stem from the band into the scroll
      T.profile.push(d.poly(smooth([[sx * 520, vy * 0.7], [sx * 620, vy * 0.95], [cx - sx * R * 0.5, vy + (vy > 0 ? R : -R)]], 6)))
    }
  }
  // leaves on the sides, using the shared acanthus drawing, pointing outward-up
  const g = { X: (r: number) => ox + r * s, Y: (h: number) => oy - h * s, M: s }
  for (const sx of [-1, 1] as const) {
    const l = acanthus(g, sx * 800, -120, 260, 150, 'ct-all', true, 4)
    T.profile.push(l.outline, l.detail)
  }
  // shell crest: a fan of ribs on the top
  const shell: XY[] = [[-330, 700], ...arcXY(0, 700, 330, Math.PI, 0, 22).map(([x, y]) => [x, 700 + (y - 700) * 0.95] as XY), [330, 700]]
  T.profile.push(`<path d="${d.poly(shell, true).replace(/^<path d="|"\/>$/g, '')}" style="fill: var(--_paper)"/>`, d.poly(shell, true))
  for (let k = 0; k <= 10; k++) {
    const a = Math.PI - (k / 10) * Math.PI
    T.profile.push(d.poly([[0, 705], [300 * Math.cos(a), 700 + 300 * 0.95 * Math.sin(a)]]).replace('/>', ' style="stroke-width: 0.8"/>'))
  }
  for (let k = 0; k < 10; k++) {
    const a0 = Math.PI - (k / 10) * Math.PI
    const a1 = Math.PI - ((k + 1) / 10) * Math.PI
    T.profile.push(d.poly(arcXY(0, 0, 1, a0, a1, 3).map(([x, y]) => [330 * x, 700 + 0.95 * 330 * y] as XY)).replace('/>', ' style="stroke-width: 0.8"/>'))
  }
  // hanging drop: husks in a chain and a tassel
  let y = -740
  for (const rx of [90, 70, 52, 36]) {
    T.profile.push(d.poly(ell(0, y - rx * 1.1, rx, rx * 1.25, 18), true))
    y -= rx * 2.5
  }
  T.profile.push(d.poly([[-30, y - 60], [0, y - 260], [30, y - 60]], true))
  // swags of leaves between the lower volutes and the drop
  for (const sx of [-1, 1] as const) {
    T.fine.push(d.poly(quad([sx * 520, -560], [sx * 330, -940], [sx * 80, -760], 12)))
    for (let k = 0; k < 6; k++) {
      const t = (k + 0.5) / 6
      const p = quad([sx * 520, -560], [sx * 330, -940], [sx * 80, -760], 12)[Math.floor(t * 11)]
      T.fine.push(d.circ(p[0], p[1] - 40, 38))
    }
  }
  void lerp
}

const cartouche: Pair = {
  id: 'cartouche', title: 'Cartouche', subtitle: 'Ornamental frame for an inscription or arms', sheetNo: 'DEC-13', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
  description: 'Elevation of a Baroque cartouche: an oval field for an inscription or coat of arms within a beaded rim and a band of fluting, with scrolls (volutes) at the corners, leaves, a shell crest, swags and a hanging drop, with a round close-up of one upper scroll and its leaf.',
  draw: drawCartouche, whole: { scale: 0.134, ox: 300, oy: 175, w: [-1000, 1000], h: [-1700, 1100], caption: 'WHOLE CARTOUCHE · ELEVATION' }, at: [-720, 400], r: 520, note: 'FIELD 800 × 1040 mm · SCROLLS AT FOUR CORNERS',
  defs: '<clipPath id="ct-all"><rect x="0" y="0" width="760" height="760"/></clipPath>',
  items: (at) => ({ items: [{ text: 'VOLUTE (SCROLLED END)', at: at(-730, 560) }, { text: 'LEAF', at: at(-800, 130) }, { text: 'FRAME BAND WITH FLUTING', at: at(-500, 330) }, { text: 'BEAD MOULDING', at: at(-420, 200) }, { text: 'OVAL FIELD', at: at(-300, 330) }], dims: [] }),
  scaleUnit: { mm: 500, name: '500 mm', count: 3 },
}

// ---------------------------------------------------------------------------
// Transept: plan of a cruciform church, the cross arms marked
// ---------------------------------------------------------------------------
function drawChurchPlan(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  const wall = (a: XY, b: XY, t = 800) => {
    const dx = b[0] - a[0]
    const dy = b[1] - a[1]
    const L = Math.hypot(dx, dy)
    const nx = (-dy / L) * (t / 2)
    const ny = (dx / L) * (t / 2)
    const poly: XY[] = [[a[0] + nx, a[1] + ny], [b[0] + nx, b[1] + ny], [b[0] - nx, b[1] - ny], [a[0] - nx, a[1] - ny]]
    d.hatch(poly)
    T.cut.push(d.poly(poly, true))
  }
  // transept arms first, marked
  for (const sg of [-1, 1] as const) {
    const arm: XY[] = [[sg * 3500, -3500], [sg * 17500, -3500], [sg * 17500, 3500], [sg * 3500, 3500]]
    d.mark(arm, 'h-concrete')
  }
  // nave, aisles, crossing, choir and apse walls
  wall([-8000, -26000], [8000, -26000])
  for (const sg of [-1, 1] as const) {
    wall([sg * 8000, -26000], [sg * 8000, -3500])
    wall([sg * 8000, -3500], [sg * 17500, -3500])
    wall([sg * 17500, -3500], [sg * 17500, 3500])
    wall([sg * 17500, 3500], [sg * 4400, 3500])
    wall([sg * 4400, 3500], [sg * 4400, 14000])
  }
  const apse = arcXY(0, 14000, 4400, 0, Math.PI, 24)
  for (let i = 0; i < apse.length - 1; i++) wall(apse[i], apse[i + 1])
  // arcade piers either side of the nave and the four crossing piers
  for (const sg of [-1, 1] as const) {
    for (let y = -6500; y > -25000; y -= 3500) {
      const p: XY[] = [[sg * 3500 - 500, y - 500], [sg * 3500 + 500, y - 500], [sg * 3500 + 500, y + 500], [sg * 3500 - 500, y + 500]]
      d.hatch(p)
      T.cut.push(d.poly(p, true))
    }
    for (const yy of [-3500, 3500]) {
      const p: XY[] = [[sg * 3500 - 900, yy - 900], [sg * 3500 + 900, yy - 900], [sg * 3500 + 900, yy + 900], [sg * 3500 - 900, yy + 900]]
      d.hatch(p)
      T.cut.push(d.poly(p, true))
    }
    // rose windows at the end walls of the transept arms, doors in the nave front, altar steps
    T.profile.push(d.circ(sg * 17500, 0, 700), d.circ(sg * 17500, 0, 420))
  }
  T.profile.push(d.poly([[-1000, -26000], [1000, -26000], [1000, -26900], [-1000, -26900]], true))
  T.fine.push(d.poly([[-3500, 3500], [3500, 3500]]).replace('/>', ' stroke-dasharray="6 4"/>'), d.poly([[-3500, -3500], [3500, -3500]]).replace('/>', ' stroke-dasharray="6 4"/>'))
  T.fine.push(d.poly([[-1800, 9000], [1800, 9000], [1800, 10000], [-1800, 10000]], true))
  T.center.push(d.poly([[0, -27500], [0, 19000]]), d.poly([[-18500, 0], [18500, 0]]))
}

const transept: Pair = {
  id: 'transept', title: 'Transept', subtitle: 'Cross arms of a cruciform church', sheetNo: 'REL-17', view: 'PLAN · CLOSE-UP IN CONTEXT',
  description: 'Plan of a cruciform church with the two arms of the cross (the transept) marked, crossing the nave at right angles in front of the choir and apse, and a round close-up of the crossing where the arms meet the nave and choir.',
  draw: drawChurchPlan, whole: { scale: 0.0062, ox: 300, oy: 150, w: [-18500, 18500], h: [-27000, 18400], caption: 'WHOLE CHURCH · PLAN' }, at: [6500, 0], r: 8500, note: 'TRANSEPT ARMS 14 m LONG · 7 m WIDE · CROSSING 7 m SQUARE',
  items: (at) => ({ items: [{ text: 'TRANSEPT ARM (SOUTH)', at: at(11000, 0) }, { text: 'CROSSING', at: at(0, 0) }, { text: 'ROSE WINDOW', at: at(17500, 0) }, { text: 'CROSSING PIER', at: at(3500, 3500) }, { text: 'NAVE', at: at(0, -6500) }, { text: 'CHOIR', at: at(0, 7000) }], dims: [] }),
  scaleUnit: { mm: 5000, name: '5 m', count: 3 },
}

// ---------------------------------------------------------------------------
// Ridgepole: a timber roof frame in section, with the ridge joint enlarged
// ---------------------------------------------------------------------------
const PITCH = Math.tan((40 * Math.PI) / 180)
const PLATE_Y = 2600
function drawFrame(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  T.profile.push(d.poly([[-4600, 0], [4600, 0]]))
  for (const sg of [-1, 1] as const) {
    const w: XY[] = [[sg * 3600, 0], [sg * 3200, 0], [sg * 3200, PLATE_Y], [sg * 3600, PLATE_Y]]
    d.hatch(w)
    T.cut.push(d.poly(w, true))
    T.profile.push(d.poly([[sg * 3700, PLATE_Y], [sg * 3100, PLATE_Y], [sg * 3100, PLATE_Y + 150], [sg * 3700, PLATE_Y + 150]], true))
  }
  const apex = PLATE_Y + 150 + 3500 * PITCH
  // each rafter: a sawn timber 120 x 200 along the slope, with a birdsmouth at the wall plate, meeting at the ridge
  for (const sg of [-1, 1] as const) {
    const a: XY = [sg * 4000, PLATE_Y + 150 - 500 * PITCH]
    const b: XY = [sg * 60, apex - 60]
    const nx = -Math.sin((40 * Math.PI) / 180) * sg
    const ny = Math.cos((40 * Math.PI) / 180)
    const t = 170
    const poly: XY[] = [a, b, [b[0] + nx * t * sg * -1 * -1, b[1] + ny * t], [a[0] + nx * t * sg * -1 * -1, a[1] + ny * t]]
    T.profile.push(d.poly([a, b, [b[0] - sg * nx * 0 + 0, b[1] + t], [a[0], a[1] + t]], true))
    void poly
    T.fine.push(d.poly([[sg * 3600, PLATE_Y + 150], [sg * 3600, PLATE_Y + 150 + 80]]))
  }
  // the ridgepole sits in the notch where the rafters meet; a collar tie spans the rafters about two-thirds up
  T.profile.push(d.circ(0, apex + 90, 130), d.circ(0, apex + 90, 96))
  const ct = PLATE_Y + 150 + 2300 * PITCH
  T.profile.push(d.poly([[-2300, ct], [2300, ct], [2300, ct + 120], [-2300, ct + 120]], true))
  T.profile.push(d.poly([[-3700, PLATE_Y + 150], [3700, PLATE_Y + 150]]))
  T.fine.push(d.poly([[-1200, PLATE_Y + 150], [-1200, ct]]), d.poly([[1200, PLATE_Y + 150], [1200, ct]]))
  T.center.push(d.poly([[0, -300], [0, apex + 700]]))
}

const frame: Pair = {
  id: 'ridgepole', title: 'Ridgepole', subtitle: 'Horizontal beam along the peak of a roof', sheetNo: 'RF-18', view: 'SECTION · CLOSE-UP IN CONTEXT',
  description: 'Section through a timber cottage roof: pairs of rafters leaning together at 40 degrees from the wall plates, a collar tie across them, and a round ridgepole laid in the notch where they meet at the peak, with a round close-up of that ridge joint.',
  draw: drawFrame, whole: { scale: 0.034, ox: 300, oy: 262, w: [-4600, 4600], h: [0, 6700], caption: 'WHOLE ROOF FRAME · SECTION' }, at: [0, PLATE_Y + 150 + 3500 * PITCH], r: 600, note: 'RIDGEPOLE ABOUT 220 mm ACROSS · PITCH 40°',
  items: (at) => ({ items: [{ text: 'RIDGEPOLE (ROUND LOG)', at: at(-130, PLATE_Y + 150 + 3500 * PITCH + 90) }, { text: 'RAFTER (LEFT)', at: at(-350, PLATE_Y + 150 + 3500 * PITCH - 330) }, { text: 'RAFTER (RIGHT)', at: at(350, PLATE_Y + 150 + 3500 * PITCH - 350) }, { text: 'NOTCH HOLDING THE POLE', at: at(-60, PLATE_Y + 150 + 3500 * PITCH - 60) }], dims: [] }),
  scaleUnit: { mm: 2000, name: '2 m', count: 3 },
}

export const CRUDE_D_SHEETS: Array<() => SheetSpec> = [cartouche, transept, frame].map((c) => () => build(c))
void f
void el
