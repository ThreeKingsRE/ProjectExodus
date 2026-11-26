/**
 * Figures and the grotto, redrawn with light shading (tone hatching on the side away from the light, which comes
 * from the upper left) so the forms read as solid. Gargoyle, caryatid, wild men and grotto. Millimetres, y up.
 */
import { type Pt, type SheetSpec, f, path, el } from '../sheet'
import { AXO_DEFS, type Layers } from '../kit'
import { pen, arcXY, build, type Pair, type XY } from './pairs-a'

const quad = (a: XY, c: XY, b: XY, n = 6): XY[] => Array.from({ length: n }, (_, i) => {
  const t = (i + 1) / n
  return [(1 - t) ** 2 * a[0] + 2 * (1 - t) * t * c[0] + t * t * b[0], (1 - t) ** 2 * a[1] + 2 * (1 - t) * t * c[1] + t * t * b[1]] as XY
})
function smooth(pts: XY[], n = 5): XY[] {
  const mid = (a: XY, b: XY): XY => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
  const out: XY[] = [pts[0]]
  for (let i = 1; i < pts.length - 1; i++) out.push(...quad(i === 1 ? pts[0] : mid(pts[i - 1], pts[i]), pts[i], mid(pts[i], pts[i + 1]), n))
  out.push(pts[pts.length - 1])
  return out
}
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
const strip = (a: XY[], dx: number, dy = 0): XY[] => [...a, ...[...a].reverse().map(([x, y]) => [x + dx, y + dy] as XY)]

type Pen = ReturnType<typeof pen>
/** Fine detail lines go in the profile layer, after the paper fills, so the shapes they sit on do not hide them. */
const fin = (T: Layers, ...items: string[]) => T.profile.push(...items.map((x) => (x.includes('style=') ? x : x.replace(/\/>$/, ' style="stroke-width: 0.7"/>'))))
/** A tone-hatched patch (light or dark) drawn on top of the paper fill, inside a shape's outline. */
function tone(T: Layers, d: Pen, pts: XY[], dark = false) {
  T.profile.push(`<path d="${path(pts.map(([u, v]) => d.P(u, v)), true)}" fill="url(#${dark ? 'h-tone-d' : 'h-tone'})" stroke="none"/>`)
}
/** Paper-filled shape (hides what is behind), then its outline. */
function solid(T: Layers, d: Pen, pts: XY[], outline = true) {
  const dd = path(pts.map(([u, v]) => d.P(u, v)), true)
  T.profile.push(`<path d="${dd}" style="fill: var(--_paper)"/>`)
  if (outline) T.profile.push(el(dd))
}

// ---------------------------------------------------------------------------
// Gargoyle
// ---------------------------------------------------------------------------
function drawGargoyle(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  const wall: XY[] = [[-900, 0], [0, 0], [0, 4300], [-900, 4300]]
  d.hatch(wall)
  T.cut.push(d.poly(wall, true))
  d.hatch([[-900, 4300], [-900, 4380], [60, 4380], [60, 4300]])
  T.cut.push(d.poly([[-960, 4300], [80, 4300], [80, 4400], [-960, 4400]], true))
  T.profile.push(d.poly([[-3400, 5500], [-1500, 3700], [-1500, 3560], [-900, 3560]]))
  T.cut.push(d.poly([[-3400, 5500], [-1500, 3700], [-1500, 3640], [-3400, 5440]], true))
  T.center.push(d.poly([[-1500, 3560], [-900, 3470], [0, 3440]]).replace('/>', ' stroke-dasharray="8 4"/>'))

  // the head: a smooth back (mane locks, brow, nose) with a toothed mouth and a heavy jaw
  const back = smooth([[-300, 3780], [0, 3800], [130, 3880], [260, 3830], [380, 3930], [520, 3870], [640, 3980], [760, 4010], [860, 3960], [930, 3860], [1030, 3800], [1160, 3770], [1260, 3735], [1310, 3665], [1280, 3615]], 4)
  const upperTeeth: XY[] = [[1280, 3615], [1262, 3515], [1228, 3600], [1180, 3595], [1160, 3510], [1126, 3585], [1060, 3570], [1040, 3500], [1004, 3560], [950, 3548], [880, 3530]]
  const lower = smooth([[880, 3530], [900, 3450], [1000, 3412], [1130, 3398], [1215, 3372], [1250, 3330], [1215, 3275], [1120, 3245], [960, 3248], [780, 3225], [560, 3185], [340, 3195], [120, 3245], [-300, 3270]], 4)
  const head: XY[] = [...back, ...upperTeeth.slice(1), ...lower.slice(1)]
  solid(T, d, head)
  // inside of the mouth: dark, with a tongue channel and lower teeth
  const mouth: XY[] = [[885, 3528], [1040, 3560], [1180, 3590], [1245, 3600], [1215, 3375], [1130, 3398], [1000, 3412], [905, 3455]]
  tone(T, d, mouth, true)
  T.profile.push(d.poly(smooth([[900, 3470], [1020, 3440], [1150, 3430], [1230, 3420]])))
  for (const x of [1010, 1085, 1160]) T.profile.push(d.poly([[x, 3404], [x + 24, 3470], [x + 48, 3400]]))
  // shading: under the jaw and neck, under the brow, behind the cheek, under the mane locks
  tone(T, d, strip(lower.slice(2, -1), 0, 110))
  tone(T, d, [[-300, 3270], [120, 3245], [340, 3195], [560, 3185], [780, 3225], [780, 3330], [560, 3290], [340, 3300], [120, 3345], [-300, 3370]])
  tone(T, d, [[820, 3780], [900, 3850], [990, 3815], [985, 3740], [905, 3715]], false)
  tone(T, d, [[560, 3700], [760, 3640], [830, 3540], [780, 3420], [700, 3500], [600, 3620]])
  for (let i = 0; i < 4; i++) tone(T, d, strip(quad([140 + i * 130, 3830 + (i % 2) * 40], [200 + i * 130, 3760], [270 + i * 130, 3770], 4), 0, -120).slice(0, 8))
  // eye (socket, ball, pupil), heavy brow, nostril, cheekbone, ear, mane curls, muscle of the neck
  T.profile.push(d.poly(smooth([[790, 3960], [900, 3900], [1010, 3850]])), d.poly(smooth([[800, 3905], [905, 3850], [1000, 3815]])))
  T.profile.push(d.circ(905, 3790, 46), d.circ(912, 3792, 19, 'class="solid"'))
  fin(T, d.poly(smooth([[850, 3790], [905, 3745], [965, 3790]])))
  T.profile.push(d.poly(smooth([[1220, 3702], [1250, 3730], [1282, 3700], [1252, 3680], [1220, 3702]]), true))
  fin(T, d.poly(smooth([[800, 3880], [740, 3700], [790, 3520]])), d.poly(smooth([[1000, 3690], [900, 3650], [830, 3600]])))
  const ear: XY[] = smooth([[640, 3990], [560, 4160], [690, 4130], [800, 4010]], 5)
  solid(T, d, ear)
  tone(T, d, [[650, 4010], [600, 4110], [690, 4090], [740, 4020]])
  for (let i = 0; i < 5; i++) {
    const x = 130 + i * 130
    T.profile.push(d.poly(smooth([[x - 30, 3830 + (i % 2) * 50], [x + 40, 3780], [x + 70, 3690], [x + 20, 3650]], 4)))
  }
  fin(T, d.poly(smooth([[60, 3560], [260, 3500], [540, 3460]])), d.poly(smooth([[60, 3460], [260, 3400], [520, 3370]])))
  // wall and the shadow the head throws on it
  tone(T, d, [[-340, 3270], [0, 3250], [0, 2880], [-340, 2900]])
  fin(T, d.poly([[-300, 3290], [-300, 3780]]).replace('/>', ' stroke-dasharray="4 3"/>'))
  // water channel and the water thrown clear
  T.center.push(d.poly([[-900, 3440], [200, 3420], [900, 3410], [1220, 3395]]).replace('/>', ' stroke-dasharray="8 4"/>'))
  T.center.push(d.poly(smooth([[1250, 3372], [1580, 3320], [1650, 2900], [1670, 1900]], 8)))
  fin(T, d.poly([[1590, 2300], [1670, 2000], [1750, 2300]]))
}

const gargoyle: Pair = {
  id: 'gargoyle', title: 'Gargoyle', subtitle: 'Carved water spout projecting from a roof', sheetNo: 'DEC-10', view: 'SECTION · CLOSE-UP IN CONTEXT',
  description: 'Section through a parapet gutter and gargoyle: rain runs off the lead roof into the gutter, through a channel inside a stone beast that projects far enough to throw the water clear of the wall, with a shaded round close-up of the carved head: mane, brow, eye, snarling mouth with fangs, and ear.',
  draw: drawGargoyle, whole: { scale: 0.04, ox: 330, oy: 292, w: [-3400, 1800], h: [0, 5500], caption: 'WALL, GUTTER AND SPOUT · SECTION' }, at: [680, 3650], r: 780, note: 'HEAD PROJECTS 1300 mm · LIGHT FROM THE UPPER LEFT',
  defs: AXO_DEFS,
  items: (at) => ({ items: [{ text: 'EAR', at: at(700, 4080) }, { text: 'MANE LOCKS', at: at(380, 3930) }, { text: 'BROW AND EYE', at: at(905, 3880) }, { text: 'SNARLING MOUTH, FANGS', at: at(1180, 3560) }, { text: 'JAW (IN SHADE)', at: at(700, 3250) }, { text: 'THROAT (WATER CHANNEL)', at: at(500, 3415) }], dims: [] }),
  scaleUnit: { mm: 1000, name: '1 m', count: 3 },
}

// ---------------------------------------------------------------------------
// Caryatid
// ---------------------------------------------------------------------------
function drawCaryatid(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  // podium and plinth with shaded right sides
  solid(T, d, [[-520, -320], [520, -320], [520, -80], [-520, -80]])
  solid(T, d, [[-420, -80], [420, -80], [420, 0], [-420, 0]])
  tone(T, d, [[330, -320], [520, -320], [520, -80], [330, -80]])
  for (const v of [-260, -190]) fin(T, d.poly([[-520, v], [520, v]]))
  // robe silhouette: weight on the right leg (viewer's right), left knee bent
  const right: XY[] = [[60, 1995], [150, 1965], [255, 1905], [292, 1770], [300, 1610], [266, 1430], [208, 1335], [220, 1200], [240, 900], [254, 500], [274, 90], [292, 0]]
  const left: XY[] = [[-292, 0], [-300, 130], [-268, 500], [-238, 760], [-208, 1000], [-192, 1200], [-192, 1335], [-242, 1450], [-288, 1610], [-284, 1770], [-248, 1905], [-146, 1965], [-60, 1995]]
  const body: XY[] = [...smooth(right, 4), ...smooth(left, 4)]
  solid(T, d, body)
  // neck, neckline and folded top (apoptygma), belt, breasts under the cloth
  solid(T, d, [[-62, 2000], [-58, 2090], [58, 2090], [62, 2000]], false)
  T.profile.push(d.poly(smooth([[-62, 2000], [-58, 2090]])), d.poly(smooth([[62, 2000], [58, 2090]])))
  fin(T, d.poly(smooth([[-124, 1952], [0, 1858], [124, 1952]])), d.poly(smooth([[-252, 1655], [-60, 1580], [120, 1620], [262, 1556]], 6)), d.poly(smooth([[-202, 1440], [0, 1472], [202, 1440]])), d.poly(smooth([[-196, 1398], [0, 1430], [202, 1395]])))
  fin(T, d.poly(smooth([[-152, 1792], [-92, 1740], [-20, 1772]])), d.poly(smooth([[20, 1772], [92, 1740], [152, 1792]])))
  // the arms: the left hangs, the right is bent to hold the folds at the hip
  T.profile.push(d.poly(smooth([[-264, 1750], [-257, 1500], [-234, 1330], [-200, 1260]])), d.poly(smooth([[258, 1760], [266, 1500], [238, 1380], [190, 1300]])))
  // pleats: deep vertical folds on the weight-bearing leg, diagonal folds over the bent knee
  const pleats: XY[][] = []
  for (let i = 0; i < 7; i++) {
    const x = 24 + i * 36
    pleats.push(smooth([[x - 4, 1280], [x + 6 + i * 2, 800], [x + 14 + i * 3, 30]], 6))
  }
  for (const p of pleats) T.profile.push(d.poly(p).replace('/>', ' style="stroke-width: 0.9"/>'))
  // shade the valley beside each deep fold (the side away from the light) in light tone
  for (const p of pleats) tone(T, d, strip(p, 14))
  for (let i = 0; i < 4; i++) fin(T, d.poly(smooth([[-192 + i * 30, 1230], [-152 + i * 20, 900 - i * 40], [-172 + i * 28, 640]], 5)))
  T.profile.push(d.poly(smooth([[-120, 1100], [-80, 760], [-182, 540]], 6)), d.poly(smooth([[-30, 1080], [-60, 800], [-112, 560]], 6)))
  fin(T, d.poly([[-292, 0], [-60, 20]]), d.poly([[60, 24], [292, 0]]))
  // whole-figure modelling: the right edge of the body, the underside of the arms, the hem, the neck below the chin
  tone(T, d, strip([[150, 1965], [255, 1905], [292, 1770], [300, 1610], [266, 1430], [208, 1335]], -70))
  tone(T, d, strip([[208, 1335], [220, 1200], [240, 900], [254, 500], [274, 90], [292, 0]], -90))
  tone(T, d, [[-292, 0], [-292, 70], [292, 70], [292, 0]], false)
  tone(T, d, strip([[-264, 1750], [-257, 1500], [-234, 1330], [-200, 1260]], 40))
  tone(T, d, [[-60, 2000], [-58, 2050], [58, 2050], [60, 2000], [30, 1960], [-30, 1960]], true)
  tone(T, d, strip(smooth([[-124, 1952], [0, 1858], [124, 1952]]), 0, -70).slice(0, 10))
  // head: oval face with brows, eyes, nose, lips; hair parted and drawn back in waves; braids falling behind the shoulders
  const head = arcXY(0, 2140, 100, 0, 2 * Math.PI, 28).map(([x, y]) => [x, 2140 + (y - 2140) * 1.2] as XY)
  solid(T, d, head)
  tone(T, d, [[100, 2140], [84, 2000], [40, 1990], [70, 2120], [88, 2260], [100, 2160]])
  fin(T, d.poly(smooth([[-62, 2190], [-34, 2205], [-10, 2190]])), d.poly(smooth([[10, 2190], [34, 2205], [62, 2190]])), d.poly(smooth([[-48, 2160], [-30, 2170], [-14, 2160], [-30, 2154], [-48, 2160]])), d.poly(smooth([[14, 2160], [30, 2170], [48, 2160], [30, 2154], [14, 2160]])))
  fin(T, d.poly(smooth([[0, 2170], [12, 2105], [-2, 2092]])), d.poly(smooth([[-30, 2056], [0, 2044], [30, 2056]])), d.poly(smooth([[-24, 2038], [0, 2030], [24, 2038]])))
  T.profile.push(d.poly(smooth([[-98, 2180], [-60, 2285], [0, 2300], [60, 2285], [98, 2180]])), d.poly(smooth([[0, 2300], [-6, 2250], [-8, 2200]])))
  for (let i = 0; i < 6; i++) fin(T, d.poly(smooth([[-86 + i * 34, 2262 - Math.abs(i - 2.5) * 12], [-72 + i * 30, 2210], [-86 + i * 34, 2160]], 3)))
  T.profile.push(d.poly(smooth([[-100, 2140], [-126, 2000], [-150, 1860], [-130, 1730]], 6)), d.poly(smooth([[100, 2140], [126, 2000], [150, 1860], [130, 1730]], 6)))
  // capital: basket (kalathos) with flutes, an echinus band and an abacus; shaded right sides and the shadow under the abacus
  solid(T, d, [[-130, 2330], [130, 2330], [188, 2470], [-188, 2470]])
  for (let i = -3; i <= 3; i++) fin(T, d.poly([[i * 36, 2338], [i * 52, 2462]]))
  tone(T, d, [[60, 2330], [130, 2330], [188, 2470], [100, 2470]])
  solid(T, d, [[-215, 2470], [215, 2470], [215, 2520], [-215, 2520]])
  solid(T, d, [[-262, 2520], [262, 2520], [262, 2572], [-262, 2572]])
  tone(T, d, [[-262, 2470], [262, 2470], [262, 2500], [-262, 2500]])
  tone(T, d, [[120, 2470], [215, 2470], [215, 2520], [120, 2520]])
  // entablature: architrave in two bands, a frieze, a cornice with dentils; shaded undersides
  solid(T, d, [[-480, 2572], [480, 2572], [480, 2900], [-480, 2900]])
  for (const v of [2700, 2760]) fin(T, d.poly([[-480, v], [480, v]]))
  for (let x = -450; x < 460; x += 60) fin(T, d.poly([[x, 2810], [x, 2870], [x + 30, 2870], [x + 30, 2810]]))
  solid(T, d, [[-522, 2900], [522, 2900], [522, 3020], [-522, 3020]])
  tone(T, d, [[-480, 2572], [480, 2572], [480, 2630], [-480, 2630]])
  tone(T, d, [[360, 2572], [480, 2572], [480, 2900], [360, 2900]])
  tone(T, d, [[-522, 2900], [522, 2900], [522, 2940], [-522, 2940]])
}

const caryatid: Pair = {
  id: 'caryatid', title: 'Caryatid', subtitle: 'Draped female figure serving as a column', sheetNo: 'FAC-05', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
  description: 'Elevation of a draped female figure standing in place of a column, weight on one leg, carrying an entablature on a basket capital, with light shading on the side away from the light, and a shaded round close-up of her head, braids and capital.',
  draw: drawCaryatid, whole: { scale: 0.079, ox: 300, oy: 312, w: [-520, 520], h: [-320, 3020], caption: 'WHOLE FIGURE · ELEVATION' }, at: [0, 2300], r: 440, note: 'FIGURE 2.3 m TALL · LIGHT FROM THE UPPER LEFT',
  defs: AXO_DEFS,
  items: (at) => ({ items: [{ text: 'ENTABLATURE', at: at(-330, 2750) }, { text: 'ABACUS', at: at(-250, 2545) }, { text: 'BASKET CAPITAL', at: at(-160, 2400) }, { text: 'HAIR AND BRAIDS', at: at(-100, 2230) }, { text: 'FACE', at: at(-34, 2160) }, { text: 'NECK (IN SHADE)', at: at(-58, 2030) }], dims: [] }),
  scaleUnit: { mm: 500, name: '500 mm', count: 3 },
}

// ---------------------------------------------------------------------------
// Wild man
// ---------------------------------------------------------------------------
function fur(pts: XY[], amp: number, n = 1): XY[] {
  const out: XY[] = []
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, ay] = pts[i]
    const [bx, by] = pts[i + 1]
    const nx = -(by - ay)
    const ny = bx - ax
    const len = Math.hypot(nx, ny) || 1
    for (let k = 0; k < n; k++) {
      const t0 = k / n
      const t1 = (k + 0.5) / n
      out.push([ax + (bx - ax) * t0, ay + (by - ay) * t0], [ax + (bx - ax) * t1 + (nx / len) * amp, ay + (by - ay) * t1 + (ny / len) * amp])
    }
  }
  out.push(pts[pts.length - 1])
  return out
}
function drawWildMan(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  // the corbel: stepped, with shaded undersides
  d.hatch([[-900, -900], [-300, -900], [-300, -420], [-160, -300], [-160, 0], [-900, 0]])
  T.cut.push(d.poly([[-900, -900], [-300, -900], [-300, -420], [-160, -300], [-160, 0], [-900, 0]], true))
  solid(T, d, [[-160, -300], [560, -300], [560, 0], [-160, 0]])
  solid(T, d, [[-120, -300], [-120, -420], [520, -420], [520, -300]])
  tone(T, d, [[-160, -300], [560, -300], [560, -240], [-160, -240]])
  tone(T, d, [[-120, -420], [520, -420], [520, -380], [-120, -380]], true)
  fin(T, d.poly([[-160, -150], [560, -150]]))
  // legs: shaggy outlines with a short fur edge, right leg in shade
  const legR = fur([[96, 0], [104, 300], [124, 600], [164, 860]], 18, 2)
  const legL = fur([[-22, 0], [-42, 300], [-72, 600], [-102, 860]], 18, 2)
  solid(T, d, [...legL, ...[...legR].reverse()])
  tone(T, d, strip([[96, 0], [104, 300], [124, 600], [164, 860]], -70))
  for (let i = 0; i < 9; i++) fin(T, d.poly([[-60 + (i % 2) * 140, 60 + i * 90], [-48 + (i % 2) * 140, 20 + i * 90]]))
  // torso: shaggy sides; belt of leaves; chest fur strokes
  const torsoR = fur([[164, 860], [212, 1060], [232, 1250], [216, 1400]], 22, 2)
  const torsoL = fur([[-102, 860], [-172, 1060], [-217, 1250], [-207, 1400]], 22, 2)
  solid(T, d, [...torsoL, ...[...torsoR].reverse()])
  tone(T, d, strip([[164, 860], [212, 1060], [232, 1250], [216, 1400]], -90))
  tone(T, d, strip([[-102, 860], [-172, 1060], [-217, 1250], [-207, 1400]], 28))
  fin(T, d.poly(smooth([[-132, 902], [30, 962], [182, 902]])), d.poly(smooth([[-142, 942], [30, 1002], [192, 942]])))
  for (let i = 0; i < 6; i++) T.profile.push(d.poly(smooth([[-122 + i * 52, 960], [-96 + i * 52, 1070], [-70 + i * 52, 960]], 3), true))
  for (let i = 0; i < 12; i++) fin(T, d.poly([[-120 + (i % 4) * 80, 1130 + Math.floor(i / 4) * 80], [-104 + (i % 4) * 80, 1068 + Math.floor(i / 4) * 80]]))
  // head: wreath, face with brows and nose, a long forked beard, shaded on the right
  const head = arcXY(10, 1560, 105, 0, 2 * Math.PI, 28).map(([x, y]) => [x, 1560 + (y - 1560) * 1.12] as XY)
  const beard = fur([[-94, 1500], [-114, 1380], [-74, 1240], [10, 1170], [96, 1240], [124, 1380], [114, 1500]], 18, 2)
  solid(T, d, beard)
  tone(T, d, strip([[96, 1240], [124, 1380], [114, 1500]], -60))
  solid(T, d, head)
  tone(T, d, [[115, 1560], [100, 1440], [60, 1440], [92, 1560], [100, 1660]])
  fin(T, d.poly(smooth([[-62, 1590], [-30, 1608], [-6, 1590]])), d.poly(smooth([[36, 1590], [60, 1608], [86, 1590]])), d.circ(-30, 1572, 13), d.circ(60, 1572, 13), d.poly(smooth([[12, 1590], [30, 1520], [10, 1508]])), d.poly(smooth([[-20, 1470], [10, 1456], [40, 1470]])))
  for (let i = 0; i < 8; i++) {
    const wx = -104 + i * 32
    solid(T, d, arcXY(wx, 1660 + (i % 2) * 26, 28, 0, 2 * Math.PI, 8).map(([x, y]) => [x, y] as XY))
    fin(T, d.poly([[wx - 14, 1650 + (i % 2) * 26], [wx + 14, 1670 + (i % 2) * 26]]))
  }
  // club raised in the right hand: tapered, studded, shaded on the right
  T.profile.push(d.poly(fur([[232, 1330], [332, 1500], [422, 1640]], 14, 2)), d.circ(432, 1660, 30))
  const club: XY[] = [[410, 1680], [466, 2260], [648, 2260], [624, 1660]]
  solid(T, d, club)
  tone(T, d, [[540, 1670], [624, 1660], [648, 2260], [570, 2260]])
  for (let i = 0; i < 6; i++) T.profile.push(d.circ(520 + (i % 2) * 44, 1770 + i * 90, 18))
  // heraldic shield on the left arm: shaded on the lower right half
  const shield: XY[] = [[-540, 1380], [-140, 1380], [-140, 1060], ...quad([-140, 1060], [-160, 760], [-340, 680], 5), ...quad([-340, 680], [-520, 760], [-540, 1060], 5), [-540, 1380]]
  solid(T, d, shield)
  tone(T, d, [[-340, 1380], [-140, 1380], [-140, 1060], ...quad([-140, 1060], [-160, 760], [-340, 680], 5)])
  fin(T, d.poly([[-500, 1340], [-180, 1340], [-180, 1080]]), d.poly(smooth([[-470, 1180], [-340, 1010], [-210, 1180]])), d.poly(smooth([[-470, 1240], [-340, 1070], [-210, 1240]])))
  T.profile.push(d.poly(fur([[-172, 1362], [-112, 1384], [-60, 1342]], 12)))
}

const wild: Pair = {
  id: 'wild-men-savage-men', title: 'Wild Men / Savage Men', subtitle: 'Hairy club-bearing figures guarding arms', sheetNo: 'DEC-18', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
  description: 'Elevation of a carved hairy man with a leafy wreath and a long forked beard, a studded club raised in one hand and a heraldic shield on the other arm, standing on a stepped corbel, with light shading on the side away from the light, and a shaded round close-up of his head and beard.',
  draw: drawWildMan, whole: { scale: 0.07, ox: 300, oy: 262, w: [-900, 650], h: [-900, 2250], caption: 'WHOLE FIGURE ON ITS CORBEL · ELEVATION' }, at: [0, 1500], r: 470, note: 'FIGURE ABOUT 1.7 m TALL · LIGHT FROM THE UPPER LEFT',
  defs: AXO_DEFS,
  items: (at) => ({ items: [{ text: 'LEAFY WREATH', at: at(-104, 1740) }, { text: 'FACE', at: at(-30, 1580) }, { text: 'LONG FORKED BEARD', at: at(-100, 1340) }, { text: 'SHAGGY FUR (TUFTS)', at: at(-212, 1250) }, { text: 'CLUB', at: at(432, 1700) }], dims: [] }),
  scaleUnit: { mm: 500, name: '500 mm', count: 3 },
}

// ---------------------------------------------------------------------------
// Grotto: boulders of rough rock, shaded; a deep cave mouth; shells; a pool
// ---------------------------------------------------------------------------
const MOUND: XY[] = [[-4300, 0], [-4200, 700], [-3800, 1500], [-3300, 1900], [-3000, 2600], [-2400, 3100], [-1900, 3700], [-1300, 4000], [-600, 4350], [100, 4200], [800, 4400], [1500, 4000], [2200, 3600], [2800, 3000], [3300, 2400], [3800, 1600], [4200, 800], [4300, 0]]
const CAVE_W = 1500
const CAVE_H = 2300
function caveShape(): XY[] {
  return [[-CAVE_W, 0], [-CAVE_W, CAVE_H - 700], ...arcXY(0, CAVE_H - 700, CAVE_W, Math.PI, 0, 18).slice(1), [CAVE_W, 0]]
}
function boulder(cx: number, cy: number, rx: number, ry: number, seed: number, n = 9): XY[] {
  const r = rng(seed)
  const p1 = r() * 6
  const p2 = r() * 6
  const v = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * 2 * Math.PI
    const k = 1 + 0.13 * Math.sin(3 * a + p1) + 0.07 * Math.sin(5 * a + p2) + (r() - 0.5) * 0.05
    return [cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k] as XY
  })
  // round the corners: a short curve through each vertex between the midpoints of its two edges
  const mid = (a: XY, b: XY): XY => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
  const out: XY[] = []
  for (let i = 0; i < n; i++) out.push(...quad(mid(v[(i + n - 1) % n], v[i]), v[i], mid(v[i], v[(i + 1) % n]), 2))
  return out
}
function drawGrotto(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  const rand = rng(23)
  const cave = caveShape()
  const stones: Array<{ pts: XY[]; cx: number; cy: number }> = []
  for (let y = 0, row = 0; y < 4500; row++) {
    const h = 620 + rand() * 260
    for (let x = -4500 + rand() * 200; x < 4500; ) {
      const w = 800 + rand() * 420
      const c: XY = [x + w / 2, y + h / 2]
      const near = inside([c[0], c[1] - 80], cave) || inside(c, cave)
      if (inside(c, MOUND) && !near) stones.push({ pts: boulder(c[0], c[1], w / 2, h / 2, Math.floor(rand() * 1e6), 8), cx: c[0], cy: c[1] })
      x += w - 40
    }
    y += h - 60
  }
  // draw from the top row down so the lower boulders sit in front
  for (const st of [...stones].sort((a, b) => b.cy - a.cy)) {
    solid(T, d, st.pts)
    // shade the lower-right crescent of each stone, and give the lower ones a darker band at their foot
    const lo = st.pts.filter((_, i) => i >= Math.floor(st.pts.length * 0.58) && i <= Math.floor(st.pts.length * 0.99))
    if (lo.length > 2) {
      const inner = [...lo].reverse().map(([x, y]) => [st.cx + (x - st.cx) * 0.5, st.cy + (y - st.cy) * 0.5] as XY)
      tone(T, d, [...lo, ...inner])
      tone(T, d, [...lo.slice(Math.floor(lo.length * 0.35)), ...[...lo.slice(Math.floor(lo.length * 0.35))].reverse().map(([x, y]) => [st.cx + (x - st.cx) * 0.8, st.cy + (y - st.cy) * 0.8] as XY)], true)
    }
  }
  // the cave mouth: ring of big rough voussoir stones, a deep interior (hatched darker toward the top), drips
  const ringStones = 9
  for (let i = 0; i < ringStones; i++) {
    const a = Math.PI - 0.1 - (i * (Math.PI - 0.2)) / (ringStones - 1)
    const cx = (CAVE_W + 260) * Math.cos(a)
    const cy = CAVE_H - 700 + (CAVE_W + 260) * Math.sin(a)
    const st = boulder(cx, cy, 360, 320, 100 + i, 8)
    solid(T, d, st)
    tone(T, d, strip(st.slice(5, 9), 0, 90))
  }
  for (const sg of [-1, 1] as const) {
    for (let k = 0; k < 3; k++) {
      const y = 350 + k * 620
      const st = boulder(sg * (CAVE_W + 270 + (k % 2) * 40), y, 340, 300, 300 + k + (sg > 0 ? 10 : 0), 8)
      solid(T, d, st)
      tone(T, d, strip(st.slice(5, 9), 0, 90))
    }
  }
  T.profile.push(`<path d="${path(cave.map(([u, v]) => d.P(u, v)), true)}" style="fill: var(--_paper)"/>`)
  tone(T, d, cave)
  tone(T, d, [[-CAVE_W, CAVE_H - 700], ...arcXY(0, CAVE_H - 700, CAVE_W, Math.PI, 0, 18).slice(1), [CAVE_W, CAVE_H - 700], [CAVE_W, 900], [-CAVE_W, 900]], true)
  tone(T, d, [[-CAVE_W, 900], [CAVE_W, 900], [CAVE_W, 0], [-CAVE_W, 0]], false)
  T.profile.push(d.poly(cave))
  const arch = cave.slice(2, -1)
  for (let i = 1; i < arch.length - 1; i++) {
    const [ax, ay] = arch[i]
    T.profile.push(d.poly([[ax - 40, ay], [ax, ay - 220 - (i % 3) * 110], [ax + 40, ay]], true))
  }
  // shell-work: scallop shells on the stones round the opening, each with ribs and a shaded half
  for (let i = 0; i < 7; i++) {
    const a = Math.PI - 0.3 - (i * (Math.PI - 0.6)) / 6
    const cx = (CAVE_W + 520) * Math.cos(a)
    const cy = CAVE_H - 700 + (CAVE_W + 520) * Math.sin(a)
    const rot = a - Math.PI / 2
    const r = 190
    const fan: XY[] = arcXY(0, 0, r, Math.PI * 1.1, Math.PI * 1.9, 7).map(([x, y]) => [cx + x * Math.cos(rot) - y * Math.sin(rot), cy + x * Math.sin(rot) + y * Math.cos(rot)] as XY)
    solid(T, d, [[cx, cy], ...fan])
    for (let k = 1; k < 5; k++) {
      const aa = Math.PI * 1.1 + (k / 5) * Math.PI * 0.8
      const px = cx + r * Math.cos(aa) * Math.cos(rot) - r * Math.sin(aa) * Math.sin(rot)
      const py = cy + r * Math.cos(aa) * Math.sin(rot) + r * Math.sin(aa) * Math.cos(rot)
      fin(T, d.poly([[cx, cy], [px, py]]))
    }
    tone(T, d, [[cx, cy], ...fan.slice(Math.floor(fan.length / 2))])
  }
  // pool in front with reflections and ripples
  T.profile.push(d.poly([[-4900, 0], [4900, 0]]))
  tone(T, d, [[-4400, 0], [4400, 0], [4000, -340], [-4000, -340]])
  for (const [yy, wd] of [[-170, 3900], [-300, 3100], [-430, 2300]] as const) fin(T, d.poly(quad([-wd, yy], [0, yy - 60], [wd, yy], 14)))
  for (let i = -3; i <= 3; i++) fin(T, d.poly([[i * 600 - 200, -90], [i * 600 + 200, -90]]))
}

const grotto: Pair = {
  id: 'grotto', title: 'Grotto', subtitle: 'Artificial cave of rockwork and shells', sheetNo: 'GDN-12', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
  description: 'Elevation of a garden grotto: a mound of rough boulders with a deep, dark cave mouth hung with drips, a ring of scallop shells set into the stones round the opening, and a pool in front, shaded on the side away from the light, with a shaded round close-up of the boulders and shells beside the opening.',
  draw: drawGrotto, whole: { scale: 0.0345, ox: 300, oy: 192, w: [-4900, 4900], h: [-600, 4500], caption: 'WHOLE GROTTO · ELEVATION' }, at: [-1650, 2500], r: 1200, note: 'CAVE MOUTH 3 m WIDE · SHELLS ABOUT 380 mm · LIGHT FROM THE UPPER LEFT',
  defs: AXO_DEFS,
  items: (at) => ({ items: [{ text: 'SCALLOP SHELLS', at: at(-1500, 2800) }, { text: 'ROUGH BOULDERS', at: at(-2300, 2300) }, { text: 'DEEP CAVE MOUTH (DARK)', at: at(-1200, 1500) }, { text: 'DRIPS (STALACTITES)', at: at(-900, 2150) }, { text: 'SHADED UNDERSIDES', at: at(-2200, 1700) }], dims: [] }),
  scaleUnit: { mm: 2000, name: '2 m', count: 3 },
}

export const FIGURE_SHEETS: Array<() => SheetSpec> = [gargoyle, caryatid, wild, grotto].map((c) => () => build(c))
void f
void ({} as Pt)
