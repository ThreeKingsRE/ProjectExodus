/**
 * Redrawn buildings and garden pieces: grotto, folly, fortified tower (keep), heraldic altarpiece façade.
 * Each shows the whole with a round close-up of the detail. Millimetres, y up.
 */
import { type Pt, type SheetSpec, f, el } from '../sheet'
import { pen, arcXY, build, type Pair, type XY } from './pairs-a'
import type { Layers } from '../kit'

/** Small deterministic random numbers, so drawings are stable between builds. */
function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
const inside = (pt: XY, poly: XY[]) => {
  let c = false
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i]
    const [xj, yj] = poly[j]
    if (yi > pt[1] !== yj > pt[1] && pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi) c = !c
  }
  return c
}
const quad = (a: XY, c: XY, b: XY, n = 6): XY[] => Array.from({ length: n }, (_, i) => {
  const t = (i + 1) / n
  return [(1 - t) ** 2 * a[0] + 2 * (1 - t) * t * c[0] + t * t * b[0], (1 - t) ** 2 * a[1] + 2 * (1 - t) * t * c[1] + t * t * b[1]] as XY
})

// ---------------------------------------------------------------------------
// Grotto: a mound of rough rockwork with a cave mouth, shells and a pool
// ---------------------------------------------------------------------------
const MOUND: XY[] = [[-4200, 0], [-4100, 700], [-3700, 1400], [-3300, 1800], [-3000, 2500], [-2400, 3000], [-1900, 3600], [-1300, 3900], [-600, 4250], [100, 4100], [800, 4300], [1500, 3900], [2200, 3500], [2800, 2900], [3300, 2300], [3700, 1500], [4100, 800], [4200, 0]]
const CAVE_W = 1500
const CAVE_H = 2300

function caveArch(): XY[] {
  return [[-CAVE_W, 0], [-CAVE_W, CAVE_H - 700], ...arcXY(0, CAVE_H - 700, CAVE_W, Math.PI, 0, 18).slice(1), [CAVE_W, 0]]
}

function drawGrotto(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  const rand = rng(11)
  const cave = caveArch()
  // rockwork: rows of rough blocks, clipped to the mound and cut away at the cave
  for (let row = 0, y = 0; y < 4300; row++) {
    const h = 230 + rand() * 120
    for (let x = -4300 + rand() * 120; x < 4300; ) {
      const w = 260 + rand() * 360
      const c: XY = [x + w / 2, y + h / 2]
      if (inside(c, MOUND) && !inside(c, cave) && !inside([c[0], c[1] - 150], cave)) {
        const j = () => (rand() - 0.5) * 70
        const blk: XY[] = [[x + j(), y + j()], [x + w + j(), y + j()], [x + w + j(), y + h + j()], [x + j(), y + h + j()]]
        T.profile.push(d.poly(blk, true))
        if (rand() < 0.35) T.shading.push(d.poly([[x + w * 0.2, y + h * 0.3], [x + w * 0.7, y + h * 0.4]]))
      }
      x += w + 20
    }
    y += h + 10
  }
  T.profile.push(d.poly(MOUND))
  // cave mouth: dark inside, a rough arch, icicle-like drips hanging from the roof
  d.hatch(cave, 'h-earth')
  T.cut.push(d.poly(cave))
  const arch = cave.slice(2, -1)
  for (let i = 1; i < arch.length - 1; i += 1) T.fine.push(d.poly([arch[i], [arch[i][0] * 0.97, arch[i][1] - 150 - (i % 3) * 90]]))
  // shell-work on the face round the opening: fans of scallop shells
  const shells = 11
  for (let i = 0; i < shells; i++) {
    const a = Math.PI - 0.06 - (i * (Math.PI - 0.12)) / (shells - 1)
    const cx = (CAVE_W + 300) * Math.cos(a)
    const cy = CAVE_H - 700 + (CAVE_W + 300) * Math.sin(a) * 0.95
    const rot = a - Math.PI / 2
    const r = 170
    const fan = arcXY(0, 0, r, Math.PI * 1.15, Math.PI * 1.85, 10).map(([x, y]) => [cx + x * Math.cos(rot) - y * Math.sin(rot) * -1, cy + x * Math.sin(rot) * -1 + y * Math.cos(rot)] as XY)
    T.profile.push(d.poly([[cx, cy], ...fan, [cx, cy]], true))
    for (let k = 1; k < 5; k++) {
      const aa = Math.PI * 1.15 + (k / 5) * Math.PI * 0.7
      const px = cx + r * Math.cos(aa) * Math.cos(rot) + r * Math.sin(aa) * Math.sin(rot)
      const py = cy - r * Math.cos(aa) * Math.sin(rot) + r * Math.sin(aa) * Math.cos(rot)
      T.fine.push(d.poly([[cx, cy], [px, py]]))
    }
  }
  // pool in front, with ripples
  T.profile.push(d.poly([[-4800, 0], [4800, 0]]))
  for (const [yy, wd] of [[-180, 3800], [-340, 3000], [-480, 2200]] as const) T.fine.push(d.poly(quad([-wd, yy], [0, yy - 60], [wd, yy], 14)))
  T.shading.push(d.poly([[-3800, -90], [3800, -90]]))
}

const grotto: Pair = {
  id: 'grotto', title: 'Grotto', subtitle: 'Artificial cave of rockwork and shells', sheetNo: 'GDN-12', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
  description: 'Elevation of a garden grotto: a mound of rough rockwork with an arched cave mouth hung with drips, a ring of scallop shells round the opening and a pool in front, with a round close-up of the shells and rough blocks beside the opening.',
  draw: drawGrotto, whole: { scale: 0.0345, ox: 300, oy: 190, w: [-4800, 4800], h: [-600, 4300], caption: 'WHOLE GROTTO · ELEVATION' }, at: [-1300, 2500], r: 1250, note: 'CAVE MOUTH 3 m WIDE · SHELLS EACH ABOUT 350 mm',
  items: (at) => ({ items: [{ text: 'SCALLOP SHELLS', at: at(-1500, 2450) }, { text: 'ROUGH ROCKWORK', at: at(-2300, 3000) }, { text: 'CAVE MOUTH', at: at(-1450, 1200) }, { text: 'DRIPS (STALACTITES)', at: at(-900, 2150) }], dims: [] }),
  scaleUnit: { mm: 2000, name: '2 m', count: 3 },
}

// ---------------------------------------------------------------------------
// Folly: a sham ruined tower, 3 m wide and about 8 m tall, with an ivy-covered wall and fallen stones
// ---------------------------------------------------------------------------
function drawFolly(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  const rand = rng(5)
  // ground, and a man 1.8 m tall for scale
  T.profile.push(d.poly([[-3800, 0], [3800, 0]]))
  // the tower: jagged broken crown, ashlar courses
  const tower: XY[] = [[-1500, 0], [-1500, 6800], [-1250, 7100], [-1200, 7600], [-800, 7500], [-650, 8100], [-300, 7900], [-50, 8350], [300, 7700], [650, 7300], [800, 6900], [1100, 6700], [1500, 6000], [1500, 0]]
  T.profile.push(d.poly(tower, true))
  for (let y = 300; y < 7000; y += 300) {
    T.shading.push(d.poly([[-1500, y], [1500, y]]))
    for (let x = -1500 + ((y / 300) % 2) * 300; x < 1500; x += 600) T.shading.push(d.poly([[x, y], [x, y + 300]]))
  }
  // a pointed window with its tracery gone, a narrow arrow slit, a blocked doorway low down
  const win: XY[] = [[-450, 3900], [-450, 5100], ...arcXY(0, 5100, 450, Math.PI, 0, 10).slice(1).map(([x, y]) => [x, 5100 + (y - 5100) * 1.5] as XY), [450, 3900]]
  d.hatch(win, 'h-earth')
  T.profile.push(d.poly(win, true), d.poly([[-390, 3960], [-390, 5090]]), d.poly([[390, 3960], [390, 5090]]))
  T.fine.push(d.poly([[-30, 5200], [30, 5200], [30, 6200], [-30, 6200]], true), d.poly([[-380, 3900], [380, 3900]]))
  T.profile.push(d.poly([[-380, 0], [-380, 1500], ...arcXY(0, 1500, 380, Math.PI, 0, 10).slice(1), [380, 0]], true))
  for (let i = 0; i < 9; i++) T.shading.push(d.poly([[-380 + i * 95, 20], [-380 + i * 95, 1300]]))
  // ivy over the left side: clusters of leaves
  for (let i = 0; i < 46; i++) {
    const y = 300 + i * 125
    const x = -1500 + 40 + Math.sin(i * 1.3) * 120 + rand() * 90
    for (let k = 0; k < 2; k++) T.fine.push(d.circ(x + k * 100 * (rand() - 0.2), y + rand() * 60, 48 + rand() * 30))
  }
  T.fine.push(d.poly([[-1450, 0], [-1380, 2000], [-1500, 4200], [-1330, 6400]]))
  // fallen stones at the foot, a broken column drum, a tuft of grass
  for (let i = 0; i < 9; i++) {
    const x = -2400 + i * 520 + rand() * 120
    const w = 200 + rand() * 260
    const h = 120 + rand() * 160
    if (Math.abs(x) < 1600 && x > -1600) continue
    T.profile.push(d.poly([[x, 0], [x + w, 0], [x + w * 0.9, h], [x + w * 0.1, h * 0.8]], true))
  }
  T.profile.push(d.poly([[1800, 0], [2400, 0], [2400, 450], [1800, 450]], true), d.poly(quad([1800, 450], [2100, 520], [2400, 450], 6)))
  // a person and a tree for scale
  T.profile.push(d.circ(-2700, 1700, 110), d.poly([[-2700, 1590], [-2700, 900], [-2850, 450], [-2850, 0]]), d.poly([[-2700, 900], [-2550, 450], [-2550, 0]]), d.poly([[-2850, 1400], [-2700, 1500], [-2550, 1400]]))
  T.profile.push(d.poly([[3000, 0], [3030, 2200]]), d.poly([[3180, 0], [3150, 2200]]))
  for (const [cx, cy, r] of [[3100, 3300, 650], [2700, 2800, 480], [3500, 2800, 480], [3100, 4000, 420]] as const) T.fine.push(d.circ(cx, cy, r))
}

const folly: Pair = {
  id: 'folly', title: 'Folly', subtitle: 'Ornamental building built to look like a ruin', sheetNo: 'GDN-09', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
  description: 'Elevation of a garden folly built as a ruined tower: ashlar courses, a jagged broken crown, a pointed window with its tracery gone, ivy on one side and fallen stones at the foot, beside a person and a tree for scale, with a round close-up of the broken top.',
  draw: drawFolly, whole: { scale: 0.034, ox: 280, oy: 296, w: [-3800, 3800], h: [0, 8500], caption: 'WHOLE FOLLY · ELEVATION' }, at: [-200, 7000], r: 1900, note: 'TOWER 3 m WIDE · ABOUT 8 m TALL · A PERSON SHOWN FOR SCALE',
  items: (at) => ({ items: [{ text: 'DELIBERATELY BROKEN TOP', at: at(-50, 8300) }, { text: 'POINTED WINDOW, NO TRACERY', at: at(-300, 5300) }, { text: 'ASHLAR COURSES', at: at(-1300, 6300) }, { text: 'ARROW SLIT (SHAM)', at: at(0, 6000) }, { text: 'IVY', at: at(-1470, 5600) }], dims: [] }),
  scaleUnit: { mm: 2000, name: '2 m', count: 3 },
}

// ---------------------------------------------------------------------------
// Tower (fortified keep): a section through a stone keep 12 m wide and 21 m tall
// ---------------------------------------------------------------------------
const KW = 6000 // half-width
const KT = 2400 // wall thickness
const FLOORS = [4500, 10000, 15000]
const TOP = 19500

function drawKeep(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  // battered (splayed) base and walls in section
  for (const sg of [-1, 1] as const) {
    const wall: XY[] = [[sg * (KW + 700), 0], [sg * (KW + 700), 500], [sg * KW, 2800], [sg * KW, TOP], [sg * (KW - KT), TOP], [sg * (KW - KT), 0]]
    d.hatch(wall)
    T.cut.push(d.poly(wall, true))
    // arrow slits: narrow openings splayed wider inside, one per level
    for (const y of [2300, 7200, 12400, 17200]) {
      const slit: XY[] = [[sg * KW, y - 90], [sg * KW, y + 90], [sg * (KW - KT), y + 520], [sg * (KW - KT), y - 520]]
      T.hatch.push(`<path d="${d.poly(slit, true).replace(/^<path d="|"\/>$/g, '')}" style="fill: var(--_paper)"/>`)
      T.profile.push(d.poly(slit, true))
    }
  }
  // undercroft barrel vault, floors, roof deck
  const vault: XY[] = [...arcXY(0, 3300, KW - KT, Math.PI, 0, 28), ...arcXY(0, 3300, KW - KT - 650, 0, Math.PI, 28)]
  d.hatch(vault)
  T.cut.push(d.poly(vault, true))
  for (const fy of FLOORS.slice(1)) {
    d.hatch([[-(KW - KT), fy - 380], [KW - KT, fy - 380], [KW - KT, fy], [-(KW - KT), fy]], 'h-timber')
    T.cut.push(d.poly([[-(KW - KT), fy - 380], [KW - KT, fy - 380], [KW - KT, fy], [-(KW - KT), fy]], true))
    for (let x = -(KW - KT) + 600; x < KW - KT; x += 600) T.fine.push(d.poly([[x, fy - 380], [x, fy - 120]]))
  }
  d.hatch([[-(KW - KT) + 0, 0], [KW - KT, 0], [KW - KT, -400], [-(KW - KT), -400]], 'h-earth')
  T.profile.push(d.poly([[-KW - 1500, 0], [KW + 3800, 0]]))
  d.hatch([[-(KW - KT), TOP - 300], [KW - KT, TOP - 300], [KW - KT, TOP], [-(KW - KT), TOP]], 'h-timber')
  T.cut.push(d.poly([[-(KW - KT), TOP - 300], [KW - KT, TOP - 300], [KW - KT, TOP], [-(KW - KT), TOP]], true))
  // battlements on the wall heads
  for (const sg of [-1, 1] as const) {
    for (let i = 0; i < 2; i++) {
      const x0 = sg < 0 ? -KW + i * 1500 : KW - KT + i * 1500
      const b: XY[] = [[x0, TOP], [x0 + 800, TOP], [x0 + 800, TOP + 1100], [x0, TOP + 1100]]
      if (x0 + 800 <= (sg < 0 ? -KW + KT : KW) + 10) { d.hatch(b); T.cut.push(d.poly(b, true)) }
    }
  }
  // raised entrance on the right at first-floor level, with a removable timber stair
  const ey = FLOORS[0]
  T.hatch.push(`<path d="${d.poly([[KW - KT, ey + 200], [KW, ey + 200], [KW, ey + 2500], [KW - KT, ey + 2500]], true).replace(/^<path d="|"\/>$/g, '')}" style="fill: var(--_paper)"/>`)
  T.profile.push(d.poly([[KW - KT, ey + 200], [KW, ey + 200], [KW, ey + 2300], ...arcXY(KW - KT / 2, ey + 2300, KT / 2, 0, Math.PI, 10).slice(1).map(([x, y]) => [x, y] as XY), [KW - KT, ey + 200]]))
  const steps = 11
  for (let i = 0; i < steps; i++) T.profile.push(d.poly([[KW + 300 + i * 220, (i * (ey + 200)) / steps], [KW + 300 + (i + 1) * 220, (i * (ey + 200)) / steps], [KW + 300 + (i + 1) * 220, ((i + 1) * (ey + 200)) / steps]]))
  T.profile.push(d.poly([[KW + 300, 0], [KW + 300 + steps * 220, ey + 200]]), d.poly([[KW + 300, 900], [KW + 300 + steps * 220, ey + 1100]]))
  T.fine.push(d.poly([[KW + 300 + steps * 220, ey + 200], [KW, ey + 200]]))
  // a fireplace and garderobe shown as hidden cavities, a ladder between floors
  T.fine.push(d.poly([[-(KW - KT) + 0, 12200], [-(KW - KT) + 900, 12200], [-(KW - KT) + 900, 14300], [-(KW - KT), 14300]]).replace('/>', ' stroke-dasharray="6 4"/>'))
  T.center.push(d.poly([[0, -600], [0, TOP + 1400]]))
}

const keep: Pair = {
  id: 'tower', title: 'Tower', subtitle: 'Tall fortified keep', sheetNo: 'FRT-01', view: 'SECTION · CLOSE-UP IN CONTEXT',
  description: 'Section through a stone keep: walls 2.4 m thick with a battered base, arrow slits splayed wider inside, a vaulted undercroft, three timber floors, battlements on the roof, and a raised entrance reached by a removable timber stair, with a round close-up of that entrance.',
  draw: drawKeep, whole: { scale: 0.0148, ox: 250, oy: 330, w: [-7000, 11000], h: [-400, 20700], caption: 'WHOLE KEEP · SECTION' }, at: [KW + 600, 4300], r: 3600, note: 'WALLS 2.4 m THICK · ENTRANCE RAISED 4.5 m ABOVE THE GROUND',
  items: (at) => ({ items: [{ text: 'RAISED ENTRANCE (1st FLOOR)', at: at(KW - KT / 2, 6300) }, { text: 'TIMBER STAIR (REMOVABLE)', at: at(KW + 1500, 3100) }, { text: 'WALL 2.4 m THICK', at: at(KW - 1200, 8700) }, { text: 'BATTERED (SPLAYED) BASE', at: at(KW + 300, 900) }, { text: 'ARROW SLIT (SPLAYED)', at: at(KW - 800, 7200) }], dims: [] }),
  scaleUnit: { mm: 5000, name: '5 m', count: 2 },
}

// ---------------------------------------------------------------------------
// Heraldic altarpiece façade: a portal under an ogee arch, tiers of canopied niches, and a great coat of arms held by an eagle
// ---------------------------------------------------------------------------
function drawAltarpiece(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  const W = 5000
  const H = 11000
  T.profile.push(d.poly([[-W, 0], [W, 0], [W, H], [-W, H]], true))
  for (let y = 400; y < H; y += 400) T.shading.push(d.poly([[-W, y], [W, y]]))
  // buttress-pinnacles at the sides
  for (const sg of [-1, 1] as const) {
    T.profile.push(d.poly([[sg * W - sg * 700, 0], [sg * W - sg * 700, H - 800], [sg * W, H - 800]], false))
    T.profile.push(d.poly([[sg * (W - 700), H - 800], [sg * (W - 350), H + 1500], [sg * W, H - 800]], true))
    for (let k = 0; k < 6; k++) T.fine.push(d.circ(sg * (W - 350), H - 600 + k * 260, 55), d.poly([[sg * (W - 350), H - 800 + k * 260], [sg * (W - 350 + (k % 2 ? 90 : -90)), H - 640 + k * 260]]))
  }
  // portal: an arch with a stepped, scalloped soffit and a pointed head
  const portal: XY[] = [[-1000, 0], [-1000, 2700], ...quad([-1000, 2700], [-1000, 3900], [0, 4300], 10), ...quad([0, 4300], [1000, 3900], [1000, 2700], 10), [1000, 0]]
  d.hatch(portal, 'h-earth')
  T.profile.push(d.poly(portal))
  for (let k = 1; k <= 3; k++) T.fine.push(d.poly([[-1000 - k * 150, 0], [-1000 - k * 150, 2700 + k * 80], ...quad([-1000 - k * 150, 2700 + k * 80], [-1000 - k * 150, 3900 + k * 220], [0, 4300 + k * 330], 10), ...quad([0, 4300 + k * 330], [1000 + k * 150, 3900 + k * 220], [1000 + k * 150, 2700 + k * 80], 10), [1000 + k * 150, 0]]))
  for (let i = 0; i < 12; i++) T.shading.push(d.poly(quad([-1000 + i * 170, 2900 + Math.abs(i - 6) * -20 + 140], [-900 + i * 170, 3050], [-830 + i * 170, 2900], 3)))
  // tiers of canopied niches with statues, left and right of the portal and above it
  for (const sg of [-1, 1] as const) {
    for (let tier = 0; tier < 3; tier++) {
      for (let col = 0; col < 2; col++) {
        const cx = sg * (2300 + col * 1250)
        const cy = 1000 + tier * 2500
        T.profile.push(d.poly([[cx - 380, cy], [cx - 380, cy + 1400], ...arcXY(cx, cy + 1400, 380, Math.PI, 0, 10).slice(1), [cx + 380, cy]], true))
        T.fine.push(d.poly([[cx - 520, cy + 1700], [cx, cy + 2050], [cx + 520, cy + 1700]]), d.poly([[cx - 430, cy + 1480], [cx - 430, cy + 1700]]), d.poly([[cx + 430, cy + 1480], [cx + 430, cy + 1700]]))
        T.fine.push(d.circ(cx, cy + 1150, 70), d.poly([[cx, cy + 1080], [cx, cy + 420]]), d.poly([[cx - 140, cy + 900], [cx + 140, cy + 900]]), d.poly([[cx - 160, cy + 420], [cx + 160, cy + 420]]))
      }
    }
  }
  // the coat of arms in a stepped frame above the portal, held on the breast of a spread eagle
  const cy = 6700
  T.profile.push(d.poly([[-1500, cy - 1500], [1500, cy - 1500], [1500, cy + 1900], [-1500, cy + 1900]], true))
  T.fine.push(d.poly([[-1350, cy - 1350], [1350, cy - 1350], [1350, cy + 1750], [-1350, cy + 1750]], true))
  // eagle: wings with rows of feathers, a head in profile, a halo and a crown
  for (const sg of [-1, 1] as const) {
    for (let row = 0; row < 3; row++) {
      for (let k = 0; k < 5 - row; k++) {
        const x = sg * (550 + k * 160 + row * 40)
        const y = cy + 600 + row * 230 - k * 20
        T.fine.push(d.poly(quad([x - 90, y], [x, y - 150], [x + 90, y], 4)))
      }
    }
    T.profile.push(d.poly([[sg * 450, cy + 750], [sg * 1250, cy + 1150], [sg * 1330, cy + 700], [sg * 1250, cy + 300], [sg * 850, cy + 60]]))
  }
  T.profile.push(d.circ(0, cy + 1300, 150), d.poly(quad([60, cy + 1320], [260, cy + 1320], [190, cy + 1200], 4)), d.circ(0, cy + 1330, 300, 'style="stroke-dasharray: 3 3"'))
  T.fine.push(d.poly([[-120, cy + 1480], [-90, cy + 1600], [-30, cy + 1520], [0, cy + 1640], [30, cy + 1520], [90, cy + 1600], [120, cy + 1480]], true))
  // the shield, quartered: castles and pales
  const shield: XY[] = [[-620, cy + 560], [620, cy + 560], [620, cy - 100], ...quad([620, cy - 100], [600, cy - 650], [0, cy - 800], 6), ...quad([0, cy - 800], [-600, cy - 650], [-620, cy - 100], 6), [-620, cy + 560]]
  d.hatch(shield, 'h-concrete')
  T.profile.push(d.poly(shield, true))
  T.fine.push(d.poly([[0, cy + 560], [0, cy - 800]]), d.poly([[-620, cy + 130], [620, cy + 130]]))
  for (const [qx, qy] of [[-320, cy + 340], [320, cy - 220]] as const) T.fine.push(d.poly([[qx - 130, qy - 120], [qx - 130, qy + 40], [qx - 90, qy + 40], [qx - 90, qy + 80], [qx - 50, qy + 80], [qx - 50, qy + 40], [qx + 50, qy + 40], [qx + 50, qy + 80], [qx + 90, qy + 80], [qx + 90, qy + 40], [qx + 130, qy + 40], [qx + 130, qy - 120]], true), d.poly([[qx - 30, qy - 120], [qx - 30, qy - 20], [qx + 30, qy - 20], [qx + 30, qy - 120]], true))
  for (const qx of [320, -320]) for (let i = -2; i <= 2; i += 1) T.shading.push(d.poly([[qx + i * 90, qy0(qx, cy)], [qx + i * 90, qy0(qx, cy) - 480]]))
  // claws and the crest above
  T.fine.push(d.poly([[-250, cy - 850], [-200, cy - 1000], [-130, cy - 850]]), d.poly([[250, cy - 850], [200, cy - 1000], [130, cy - 850]]))
  // cresting along the top of the façade
  for (let x = -W + 300; x < W - 300; x += 360) T.profile.push(d.poly([[x, H], [x + 180, H + 300], [x + 360, H]]))
}
const qy0 = (qx: number, cy: number) => (qx < 0 ? cy - 220 : cy + 280)

const altarpiece: Pair = {
  id: 'heraldic-altarpiece-facade', title: 'Heraldic Altarpiece Façade', subtitle: 'Entrance front composed like a carved altarpiece', sheetNo: 'FAC-12', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
  description: 'Elevation of a late Gothic Spanish entrance front: a portal under a pointed arch, tiers of canopied niches with statues, buttress-pinnacles at the sides and cresting along the top, and a great quartered coat of arms held on the breast of a spread eagle, with a round close-up of the eagle and shield.',
  draw: drawAltarpiece, whole: { scale: 0.0165, ox: 300, oy: 258, w: [-5000, 5000], h: [0, 12500], caption: 'WHOLE FAÇADE · ELEVATION' }, at: [0, 6800], r: 1750, note: 'SHIELD ABOUT 1.2 m WIDE · EAGLE SPAN 2.7 m',
  items: (at) => ({ items: [{ text: 'COAT OF ARMS (QUARTERED)', at: at(0, 6900) }, { text: 'EAGLE WITH SPREAD WINGS', at: at(-900, 7400) }, { text: 'FEATHERS', at: at(-800, 7200) }, { text: 'CASTLE (ARMS)', at: at(-320, 7050) }, { text: 'FRAME', at: at(-1350, 6900) }], dims: [] }),
  scaleUnit: { mm: 2000, name: '2 m', count: 3 },
}

export const CRUDE_B_SHEETS: Array<() => SheetSpec> = [grotto, folly, keep, altarpiece].map((c) => () => build(c))
void f
void el
