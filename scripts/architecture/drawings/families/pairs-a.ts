/**
 * Pairs that used to share one drawing, now each with its own close-up in context:
 * keystone / voussoir (on a round arch), cupola / lantern (on a roof and on a dome),
 * pendentive / squinch (on a domed bay). Millimetres, origin where noted, y up.
 */
import { type Pt, type SheetSpec, f, path, el, vDim, hDim, text } from '../sheet'
import { newLayers, finish, callouts, zoomInContext, Bounds, ORIGINAL, type Layers } from '../kit'

const ACC = 'style="stroke: var(--_accent)"'
export type XY = [number, number]

/** Common drawing helpers bound to one placement. */
export function pen(T: Layers, s: number, ox: number, oy: number) {
  const P = (u: number, v: number): Pt => [ox + u * s, oy - v * s]
  const pts = (a: XY[]) => a.map(([u, v]) => P(u, v))
  return {
    P,
    poly: (a: XY[], close = false) => el(path(pts(a), close)),
    hatch: (a: XY[], pat = 'h-stone') => T.hatch.push(`<path d="${path(pts(a), true)}" fill="url(#${pat})" stroke="none"/>`),
    mark: (a: XY[], pat = 'h-stone') => {
      T.hatch.push(`<path d="${path(pts(a), true)}" fill="url(#${pat})" stroke="none"/>`)
      T.cut.push(`<path d="${path(pts(a), true)}" ${ACC}/>`)
    },
    circ: (u: number, v: number, r: number, attrs = '') => `<circle cx="${f(ox + u * s)}" cy="${f(oy - v * s)}" r="${f(r * s)}"${attrs ? ' ' + attrs : ''}/>`,
  }
}
export const arcXY = (cx: number, cy: number, r: number, a0: number, a1: number, n = 6): XY[] =>
  Array.from({ length: n + 1 }, (_, i) => {
    const a = a0 + ((a1 - a0) * i) / n
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as XY
  })
const deg = Math.PI / 180

export interface Pair {
  id: string
  title: string
  subtitle: string
  sheetNo: string
  view: string
  description: string
  draw: (T: Layers, s: number, ox: number, oy: number) => void
  whole: { scale: number; ox: number; oy: number; w: [number, number]; h: [number, number]; caption: string }
  at: XY
  r: number
  note: string
  items: (at: (u: number, v: number) => Pt, z: { X: (u: number) => number; Y: (v: number) => number }) => { items: Array<{ text: string; at: Pt }>; dims: string[] }
  scaleUnit: { mm: number; name: string; count: number }
  /** Show a different view in the window (a section) instead of redrawing the whole larger */
  detail?: (T: Layers, win: { cx: number; cy: number; r: number }) => void
  /** Labels and dimensions positioned by the caller for a custom detail (page coordinates) */
  /** A smaller round window lower on the sheet, to leave more room for the whole */
  win?: { cx: number; cy: number; r: number }
  /** Extra <defs> content (clip paths and so on) */
  defs?: string
  customItems?: (win: { cx: number; cy: number; r: number }) => { items: Array<{ text: string; at: Pt }>; dims: string[] }
}

// ---------------------------------------------------------------------------
// Keystone and voussoir: a round arch, 3 m span, 450 mm ring, 13 voussoirs
// ---------------------------------------------------------------------------
const AR = 1500
const AT = 450
const AW = (180 - 14) / 12 // angle of an ordinary voussoir
const edgeAngles = [...Array.from({ length: 7 }, (_, i) => 180 - i * AW), ...Array.from({ length: 7 }, (_, i) => 83 - i * AW)]

function drawArch(kind: 'keystone' | 'voussoir') {
  return (T: Layers, s: number, ox: number, oy: number) => {
    const d = pen(T, s, ox, oy)
    const R2 = AR + AT
    const ring = (a: number, b: number, r0: number, r1: number): XY[] => [...arcXY(0, 0, r0, a * deg, b * deg, 3), ...arcXY(0, 0, r1, b * deg, a * deg, 3)]
    // piers, imposts, wall courses
    for (const sg of [-1, 1]) {
      const x0 = sg < 0 ? -R2 : AR
      T.profile.push(d.poly([[x0, -2200], [x0 + AT, -2200], [x0 + AT, -240], [x0, -240]], true))
      for (let v = -2200 + 300; v < -240; v += 300) T.shading.push(d.poly([[x0, v], [x0 + AT, v]]))
      T.profile.push(d.poly([[x0 - 90, -240], [x0 + AT + 90, -240], [x0 + AT + 90, 0], [x0 - 90, 0]], true))
    }
    // voussoirs
    for (let i = 0; i < 13; i++) {
      const a = edgeAngles[i]
      const b = edgeAngles[i + 1]
      const isKey = i === 6
      const outer = isKey ? R2 + 150 : R2
      const shape = ring(a, b, AR, outer)
      T.profile.push(d.poly(shape, true))
      const hot = (kind === 'keystone' && isKey) || (kind === 'voussoir' && i === 3)
      if (hot) {
        d.mark(shape)
        T.cut.push(d.poly(shape, true).replace('/>', ` ${ACC}/>`))
      } else d.hatch(shape, 'h-stone')
    }
    // centre of the arch
    T.center.push(d.poly([[-2200, 0], [2200, 0]]), d.poly([[0, -300], [0, AR + AT + 400]]))
  }
}

const ARCH_WHOLE = { scale: 0.05, ox: 300, oy: 220, w: [-1950, 1950] as [number, number], h: [-2200, 2100] as [number, number], caption: 'WHOLE ARCH · ELEVATION' }
const midRad = AR + AT / 2

const archPairs: Pair[] = [
  {
    id: 'keystone', title: 'Keystone', subtitle: 'The central voussoir that locks the arch', sheetNo: 'ARC-07', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
    description: 'Elevation of a semicircular stone arch with its crowning stone marked, and a round close-up of that keystone between the two voussoirs beside it, with its width and depth.',
    draw: drawArch('keystone'), whole: ARCH_WHOLE, at: [0, AR + AT + 40], r: 620, note: 'KEYSTONE ABOUT 370 WIDE · 600 DEEP',
    items: (at, z) => ({
      items: [{ text: 'KEYSTONE', at: at(0, AR + AT + 90) }, { text: 'NEXT VOUSSOIR', at: at(-420, AR + AT * 0.5) }, { text: 'EXTRADOS (OUTER CURVE)', at: at(-200, AR + AT) }, { text: 'INTRADOS (INNER CURVE)', at: at(-60, AR) }],
      dims: [hDim(z.Y(AR + AT + 330), z.X(-AR * Math.sin(7 * deg)), z.X(AR * Math.sin(7 * deg)), '370'), vDim(z.X(560), z.Y(AR), z.Y(AR + AT + 150), '600', z.X(300))],
    }),
    scaleUnit: { mm: 500, name: '500 mm (whole arch)', count: 3 },
  },
  {
    id: 'voussoir', title: 'Voussoir', subtitle: 'Wedge-shaped stone of an arch ring', sheetNo: 'ARC-08', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
    description: 'Elevation of a semicircular stone arch with one wedge-shaped stone of its ring marked, and a round close-up of that voussoir and its radial joints.',
    draw: drawArch('voussoir'), whole: ARCH_WHOLE, at: [midRad * Math.cos((180 - 3.5 * AW) * deg), midRad * Math.sin((180 - 3.5 * AW) * deg)], r: 520, note: 'JOINTS RADIATE FROM THE CENTRE · RING 450 DEEP',
    items: (at) => {
      const a = (180 - 3.5 * AW) * deg
      const p = (r: number, ang = a) => at(r * Math.cos(ang), r * Math.sin(ang))
      return {
        items: [{ text: 'VOUSSOIR', at: p(midRad) }, { text: 'RADIAL JOINT', at: p(midRad, (180 - 4 * AW) * deg) }, { text: 'INTRADOS', at: p(AR + 20) }, { text: 'EXTRADOS', at: p(AR + AT - 20) }],
        dims: [],
      }
    },
    scaleUnit: { mm: 500, name: '500 mm (whole arch)', count: 3 },
  },
]

// ---------------------------------------------------------------------------
// Cupola (on a roof ridge) and lantern (on a dome)
// ---------------------------------------------------------------------------
function drawCupolaRoof(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  // house: walls 4000, hipped roof to a ridge at 7000 (elevation, 12 m wide)
  T.profile.push(d.poly([[-6000, 0], [6000, 0], [6000, 4000], [-6000, 4000]], true))
  for (let v = 300; v < 4000; v += 300) T.shading.push(d.poly([[-6000, v], [6000, v]]))
  T.profile.push(d.poly([[-6600, 4000], [6600, 4000], [4200, 7000], [-4200, 7000]], true))
  for (let v = 4200; v < 7000; v += 250) T.shading.push(d.poly([[-6600 + (v - 4000) * 0.8, v], [6600 - (v - 4000) * 0.8, v]]))
  // cupola on the ridge: plinth, louvred body, cornice, ogee dome, finial and weathervane
  const w = 2400
  T.profile.push(d.poly([[-w / 2 - 150, 7000], [w / 2 + 150, 7000], [w / 2 + 150, 7350], [-w / 2 - 150, 7350]], true))
  T.profile.push(d.poly([[-w / 2, 7350], [w / 2, 7350], [w / 2, 8850], [-w / 2, 8850]], true))
  for (const cx of [-780, 0, 780]) {
    const o: XY[] = [[cx - 300, 7550], [cx - 300, 8350], ...arcXY(cx, 8350, 300, Math.PI, 0, 8), [cx + 300, 7550]]
    T.profile.push(d.poly(o, true))
    for (let v = 7620; v < 8500; v += 110) T.fine.push(d.poly([[cx - 300, v], [cx + 300, v + 40]]))
  }
  T.profile.push(d.poly([[-w / 2 - 200, 8850], [w / 2 + 200, 8850], [w / 2 + 200, 9020], [-w / 2 - 200, 9020]], true))
  const dome: XY[] = [[-w / 2 - 80, 9020], ...Array.from({ length: 13 }, (_, i) => {
    const t = i / 12
    return [(w / 2 + 80) * Math.cos(t * Math.PI) * (1 - 0.0), 9020 + 1100 * Math.sin(t * Math.PI) * (1 - 0.25 * Math.abs(Math.cos(t * Math.PI)))] as XY
  })]
  T.profile.push(d.poly(dome))
  for (const x of [-700, 0, 700]) T.fine.push(d.poly([[x, 9020], [x * 0.5, 9020 + 1000 * Math.sqrt(1 - (x / 1280) ** 2) * 0.95]]))
  T.profile.push(d.poly([[0, 10120], [0, 10600]]), d.poly([[-60, 10600], [60, 10600], [0, 10760]], true))
  T.profile.push(d.poly([[0, 10950], [0, 11800]]), d.poly([[0, 11500], [650, 11450], [450, 11380], [650, 11320], [0, 11270]], true))
  void d.circ
}

function drawDome(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  // building: walls 5000 high, a drum, a masonry dome, and a lantern on top
  T.profile.push(d.poly([[-7000, 0], [7000, 0], [7000, 5000], [-7000, 5000]], true))
  for (let v = 400; v < 5000; v += 400) T.shading.push(d.poly([[-7000, v], [7000, v]]))
  T.profile.push(d.poly([[-4800, 5000], [4800, 5000], [4800, 8000], [-4800, 8000]], true))
  for (let x = -4200; x <= 4200; x += 840) T.fine.push(d.poly([[x, 5300], [x, 7700]]))
  const domePts = arcXY(0, 8000, 4800, Math.PI, 0, 36).map(([x, y]) => [x, 8000 + (y - 8000) * 0.8] as XY)
  T.profile.push(d.poly([[-4800, 8000], ...domePts.slice(0, -1), [4800, 8000]]))
  // ribs of the dome
  for (const k of [-0.75, -0.45, -0.15, 0.15, 0.45, 0.75]) {
    const pts: XY[] = Array.from({ length: 14 }, (_, i) => {
      const t = i / 13
      const y = 8000 + 3840 * Math.sin(t * (Math.PI / 2) * 0.93)
      const half = 4800 * Math.sqrt(Math.max(0, 1 - ((y - 8000) / 3840) ** 2))
      return [k * half, y] as XY
    })
    T.shading.push(d.poly(pts))
  }
  // lantern: base ring, eight columns round glazed openings, entablature, small dome, ball and cross
  const top = 8000 + 3840
  T.profile.push(d.poly([[-1100, top - 60], [1100, top - 60], [1100, top + 140], [-1100, top + 140]], true))
  const colX = [-900, -300, 300, 900]
  T.profile.push(d.poly([[-950, top + 140], [950, top + 140], [950, top + 1640], [-950, top + 1640]], true))
  for (let i = 0; i < 3; i++) {
    const x0 = colX[i] + 60
    const x1 = colX[i + 1] - 60
    T.profile.push(d.poly([[x0, top + 340], [x0, top + 1180], [x1, top + 1180], [x1, top + 340]], true))
    T.fine.push(d.poly([[(x0 + x1) / 2, top + 340], [(x0 + x1) / 2, top + 1180]]), d.poly([[x0, top + 760], [x1, top + 760]]))
  }
  for (const x of colX) T.profile.push(d.poly([[x - 50, top + 140], [x + 50, top + 140], [x + 50, top + 1450], [x - 50, top + 1450]], true))
  T.profile.push(d.poly([[-1050, top + 1640], [1050, top + 1640], [1050, top + 1800], [-1050, top + 1800]], true))
  const cap = arcXY(0, top + 1800, 850, Math.PI, 0, 14).map(([x, y]) => [x, top + 1800 + (y - top - 1800) * 0.8] as XY)
  T.profile.push(d.poly([[-850, top + 1800], ...cap.slice(0, -1), [850, top + 1800]]))
  T.profile.push(d.circ(0, top + 2640 + 120, 120), d.poly([[0, top + 2760], [0, top + 3400]]), d.poly([[-170, top + 3200], [170, top + 3200]]))
}

const cupolaPair: Pair[] = [
  {
    id: 'cupola', title: 'Cupola', subtitle: 'Small domed structure crowning a roof', sheetNo: 'ROF-05', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
    description: 'Elevation of a house with a small louvred cupola on its roof ridge, and a round close-up of the cupola: plinth, louvred openings, cornice, small dome and weathervane, against the size of the house.',
    draw: drawCupolaRoof, whole: { scale: 0.0165, ox: 300, oy: 292, w: [-6600, 6600], h: [0, 11800], caption: 'WHOLE HOUSE · ELEVATION' }, at: [0, 9300], r: 2500, note: 'CUPOLA 2.4 m WIDE ON A 12 m HOUSE',
    items: (at, z) => ({
      items: [{ text: 'WEATHERVANE', at: at(450, 11400) }, { text: 'CUPOLA DOME', at: at(-900, 9650) }, { text: 'CORNICE', at: at(-1400, 8930) }, { text: 'LOUVRED OPENING', at: at(-780, 8100) }, { text: 'RIDGE OF MAIN ROOF', at: at(-1500, 7150) }],
      dims: [],
    }),
    scaleUnit: { mm: 5000, name: '5 m (whole house)', count: 2 },
  },
  {
    id: 'lantern', title: 'Lantern', subtitle: 'Glazed turret crowning a dome', sheetNo: 'ROF-06', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
    description: 'Elevation of a domed building with a glazed lantern at the crown of the dome, and a round close-up of the lantern: its columns, glazed openings, entablature, small dome and finial, shown against the great dome beneath.',
    draw: drawDome, whole: { scale: 0.0112, ox: 300, oy: 290, w: [-7000, 7000], h: [0, 15300], caption: 'WHOLE BUILDING · ELEVATION' }, at: [0, 8000 + 3840 + 1500], r: 2600, note: 'LANTERN 2.1 m WIDE ON A DOME 9.6 m ACROSS',
    items: (at, z) => ({
      items: [{ text: 'FINIAL (BALL AND CROSS)', at: at(0, 8000 + 3840 + 3200) }, { text: 'LANTERN DOME', at: at(-700, 8000 + 3840 + 2200) }, { text: 'GLAZED OPENING', at: at(-600, 8000 + 3840 + 760) }, { text: 'COLUMN', at: at(-900, 8000 + 3840 + 900) }, { text: 'CROWN OF MAIN DOME', at: at(-1000, 8000 + 3840 - 400) }],
      dims: [hDim(z.Y(8000 + 3840 + 2450), z.X(-950), z.X(950), '1900')],
    }),
    scaleUnit: { mm: 5000, name: '5 m (whole building)', count: 2 },
  },
]

// ---------------------------------------------------------------------------
// Pendentive and squinch: a section along the diagonal of a square domed bay (8 m between piers),
// the cut that shows the difference: a pendentive is part of one big sphere, a squinch is stepped corbelling.
// ---------------------------------------------------------------------------
const DIAG = 5657 // half the diagonal of an 8 m square
const RING_H = 4000 // height of the ring the dome rests on
const SHELL = 450

function drawBay(kind: 'pendentive' | 'squinch') {
  return (T: Layers, s: number, ox: number, oy: number) => {
    const d = pen(T, s, ox, oy)
    // corner piers (section) and the springing line
    for (const sg of [-1, 1]) {
      const x0 = sg < 0 ? -DIAG - 900 : DIAG
      const pier: XY[] = [[x0, -1500], [x0 + 900, -1500], [x0 + 900, 0], [x0, 0]]
      d.hatch(pier)
      T.cut.push(d.poly(pier, true))
    }
    T.center.push(d.poly([[-DIAG - 1200, 0], [DIAG + 1200, 0]]), d.poly([[0, -400], [0, DIAG + 500]]))
    // the ring the dome sits on
    T.fine.push(d.poly([[-DIAG, RING_H], [DIAG, RING_H]]).replace('/>', ' stroke-dasharray="6 4"/>'))
    if (kind === 'pendentive') {
      // one sphere from corner to crown: the pendentives are its lower part
      for (let i = 0; i < 30; i++) {
        const a0 = Math.PI - (i * Math.PI) / 30
        const a1 = Math.PI - ((i + 1) * Math.PI) / 30
        const seg: XY[] = [...arcXY(0, 0, DIAG, a0, a1, 2), ...arcXY(0, 0, DIAG - SHELL, a1, a0, 2)]
        d.hatch(seg)
        T.profile.push(d.poly(seg, true))
        // the part below the ring is the pendentive: mark it
        const midY = DIAG * Math.sin((a0 + a1) / 2)
        if (midY < RING_H) { d.mark(seg) }
      }
    } else {
      // squinch: a stair of corbelled courses climbing from the corner to the ring, then a hemispherical dome on the ring
      const n = 8
      const dx = (DIAG - 4000) / n
      for (const sg of [-1, 1]) {
        for (let k = 0; k < n; k++) {
          const xa = sg * (DIAG - k * dx)
          const xb = sg * (DIAG - k * dx - 760)
          const blk: XY[] = [[xa, (k * RING_H) / n], [xb, (k * RING_H) / n], [xb, ((k + 1) * RING_H) / n], [xa, ((k + 1) * RING_H) / n]]
          d.mark(blk)
          T.profile.push(d.poly(blk, true))
        }
      }
      for (let i = 0; i < 24; i++) {
        const a0 = Math.PI - (i * Math.PI) / 24
        const a1 = Math.PI - ((i + 1) * Math.PI) / 24
        const seg: XY[] = [...arcXY(0, RING_H, 4000, a0, a1, 2), ...arcXY(0, RING_H, 4000 - SHELL, a1, a0, 2)]
        d.hatch(seg)
        T.profile.push(d.poly(seg, true))
      }
    }
  }
}

const bayWhole = { scale: 0.0158, ox: 300, oy: 250, w: [-DIAG - 900, DIAG + 900] as [number, number], h: [-1500, DIAG] as [number, number], caption: 'WHOLE BAY · SECTION ALONG THE DIAGONAL' }
const bayPairs: Pair[] = [
  {
    id: 'pendentive', title: 'Pendentive', subtitle: 'Spherical triangle carrying a dome over a square', sheetNo: 'VLT-05', view: 'SECTION ALONG THE DIAGONAL · CLOSE-UP IN CONTEXT',
    description: 'Section along the diagonal of a square domed bay, with a round close-up of the pendentive: the curved masonry surface that rises from the corner and is part of the same sphere as the dome.',
    draw: drawBay('pendentive'), whole: bayWhole, at: [-5000, 1600], r: 2400, note: 'THE PENDENTIVE AND THE DOME ARE ONE SPHERE (R 5.66 m)',
    items: (at, z) => ({
      items: [{ text: 'PENDENTIVE (SPHERE SURFACE)', at: at(-4800, 2200) }, { text: 'CORNER PIER', at: at(-DIAG - 450, -700) }, { text: 'RING (DOME BASE)', at: at(-4300, RING_H) }, { text: 'DOME (SAME SPHERE)', at: at(-3600, 4500) }],
      dims: [],
    }),
    scaleUnit: { mm: 2000, name: '2 m (whole bay)', count: 3 },
  },
  {
    id: 'squinch', title: 'Squinch', subtitle: 'Small arch built across a corner to carry a dome', sheetNo: 'VLT-06', view: 'SECTION ALONG THE DIAGONAL · CLOSE-UP IN CONTEXT',
    description: 'Section along the diagonal of a square domed bay, with a round close-up of the squinch: stepped courses of masonry corbelled out from the corner up to the ring the dome rests on.',
    draw: drawBay('squinch'), whole: bayWhole, at: [-4900, 1800], r: 2400, note: 'EIGHT CORBELLED COURSES FROM CORNER TO RING',
    items: (at, z) => ({
      items: [{ text: 'SQUINCH (CORBELLED COURSES)', at: at(-5000, 2300) }, { text: 'CORNER PIER', at: at(-DIAG - 450, -700) }, { text: 'RING (DOME BASE)', at: at(-4200, RING_H) }, { text: 'DOME (ON THE RING)', at: at(-3300, 4700) }],
      dims: [vDim(z.X(-DIAG + 1500), z.Y(0), z.Y(RING_H), '4000', z.X(-DIAG + 1200))],
    }),
    scaleUnit: { mm: 2000, name: '2 m (whole bay)', count: 3 },
  },
]

export function build(c: Pair): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const { scale: sW, ox, oy } = c.whole
  const win = c.win ?? { cx: 300, cy: 484, r: 144 }
  const z = zoomInContext(L, { id: c.id, draw: c.draw, whole: { scale: sW, ox, oy }, focus: c.at, regionR: c.r, window: win, detail: c.detail })
  const at = (u: number, v: number): Pt => [z.zoom.X(u), z.zoom.Y(v)]
  B.add([ox + c.whole.w[0] * sW - 4, oy - c.whole.h[1] * sW - 6], [ox + c.whole.w[1] * sW + 4, oy - c.whole.h[0] * sW + 8], [win.cx - win.r, win.cy - win.r], [win.cx + win.r, win.cy + win.r])
  L.notes.push(text(ox + c.whole.w[0] * sW, Math.min(oy - c.whole.h[0] * sW + 20, win.cy - win.r - 8), c.whole.caption, 'class="t-small"'), text(win.cx, win.cy + win.r + 16, `CLOSE-UP · ×${Math.round(z.zoom.scale / sW)} · ${c.note}`, 'text-anchor="middle" class="t-small"'))
  const { items, dims } = c.customItems ? c.customItems(win) : c.items(at, z.zoom)
  callouts(L, items.filter((it) => Math.hypot(it.at[0] - win.cx, it.at[1] - win.cy) < win.r - 4), win.cx - win.r - 6)
  L.dims.push(...dims)
  return finish({ id: c.id, title: c.title, subtitle: c.subtitle, view: c.view, sheetNo: c.sheetNo, source: ORIGINAL, scale: { unitPx: c.scaleUnit.mm * sW, unitName: c.scaleUnit.name, count: c.scaleUnit.count }, description: c.description }, L, B, z.defs + (c.defs ?? ''))
}

export const PAIR_A_SHEETS: Array<() => SheetSpec> = [...archPairs, ...cupolaPair, ...bayPairs].map((c) => () => build(c))
