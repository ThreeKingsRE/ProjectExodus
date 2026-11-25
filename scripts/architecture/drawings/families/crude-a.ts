/**
 * Redrawn figures and carvings: gargoyle, caryatid, wild men. Each shows the whole in its setting, with a round
 * close-up of the carved detail. Millimetres, y up.
 */
import { type Pt, type SheetSpec, f, el } from '../sheet'
import { pen, arcXY, build, type Pair, type XY } from './pairs-a'
import type { Layers } from '../kit'

const quad = (a: XY, c: XY, b: XY, n = 6): XY[] => Array.from({ length: n }, (_, i) => {
  const t = (i + 1) / n
  return [(1 - t) ** 2 * a[0] + 2 * (1 - t) * t * c[0] + t * t * b[0], (1 - t) ** 2 * a[1] + 2 * (1 - t) * t * c[1] + t * t * b[1]] as XY
})
/** Smooth outline through control points (Catmull-Rom-ish via quadratic midpoints). */
function smooth(pts: XY[], closed = false, n = 5): XY[] {
  const out: XY[] = [pts[0]]
  const mid = (a: XY, b: XY): XY => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
  for (let i = 1; i < pts.length - 1; i++) out.push(...quad(i === 1 ? pts[0] : mid(pts[i - 1], pts[i]), pts[i], mid(pts[i], pts[i + 1]), n))
  out.push(pts[pts.length - 1])
  if (closed) out.push(pts[0])
  return out
}
const mirror = (a: XY[]): XY[] => a.map(([x, y]) => [-x, y] as XY)

// ---------------------------------------------------------------------------
// Gargoyle: a parapet gutter, a stone beast projecting through the wall, water thrown clear
// ---------------------------------------------------------------------------
function drawGargoyle(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  // wall (section) and parapet, with the lead roof and gutter behind it
  const wall: XY[] = [[-900, 0], [0, 0], [0, 3180], [0, 3180], [0, 4300], [-900, 4300]]
  d.hatch(wall)
  T.cut.push(d.poly(wall, true))
  d.hatch([[-900, 4300], [-900, 4380], [60, 4380], [60, 4300]])
  T.cut.push(d.poly([[-960, 4300], [80, 4300], [80, 4400], [-960, 4400]], true)) // coping
  T.profile.push(d.poly([[-3400, 5500], [-1500, 3700], [-1500, 3560], [-900, 3560]]))
  T.cut.push(d.poly([[-3400, 5500], [-1500, 3700], [-1500, 3640], [-3400, 5440]], true))
  T.center.push(d.poly([[-1500, 3560], [-900, 3470], [0, 3440]]).replace('/>', ' stroke-dasharray="8 4"/>'))
  // the beast: a block set into the wall, projecting 1250 mm, carved as a snarling head
  const top: XY[] = [[-300, 3760], [0, 3760], [120, 3830], [250, 3770], [370, 3860], [500, 3790], [630, 3880], [740, 3950], [830, 3880], [960, 3800], [1120, 3780], [1260, 3770], [1290, 3720]]
  const upperLip: XY[] = [[1290, 3720], [1300, 3650], [1250, 3620]]
  // upper fangs along the lip, each a small triangle
  const fangs: XY[] = [[1250, 3620], [1228, 3530], [1196, 3615], [1150, 3600], [1126, 3520], [1100, 3590], [1020, 3575]]
  const mouthBack: XY[] = [[1020, 3575], [920, 3560], [820, 3540]]
  const lowerJaw: XY[] = [[820, 3540], [850, 3470], [960, 3440], [1110, 3430], [1190, 3410], [1240, 3380]]
  const chin: XY[] = [[1240, 3380], [1230, 3320], [1150, 3290], [1000, 3280]]
  const throat: XY[] = [[1000, 3280], [820, 3250], [620, 3200], [420, 3220], [200, 3260], [0, 3290], [-300, 3290]]
  const head: XY[] = [...top, ...upperLip, ...fangs, ...mouthBack, ...lowerJaw, ...chin, ...throat]
  T.hatch.push(`<path d="${d.poly(head, true).replace(/^<path d="|"\/>$/g, '')}" fill="url(#h-stone)" stroke="none"/>`)
  T.profile.push(`<path d="${d.poly(head, true).replace(/^<path d="|"\/>$/g, '')}" style="fill: var(--_paper)"/>`.replace('style="fill: var(--_paper)"', 'style="fill: var(--_paper)"'))
  T.profile.push(d.poly(head, true))
  // the part hidden in the wall
  T.fine.push(d.poly([[-300, 3290], [-300, 3760]]).replace('/>', ' stroke-dasharray="4 3"/>'))
  // eye, brow, ear, nostril, jaw line, mane scallops, lower teeth
  T.profile.push(d.circ(900, 3745, 52), d.circ(905, 3745, 20, 'class="solid"'))
  T.fine.push(d.poly(smooth([[760, 3800], [850, 3835], [960, 3815]])), d.poly(smooth([[600, 3880], [560, 4090], [700, 3990]])), d.circ(1215, 3700, 14), d.poly(smooth([[640, 3500], [760, 3470], [830, 3540]])))
  for (let i = 0; i < 5; i++) T.shading.push(d.poly(quad([120 + i * 120, 3770 + (i % 2 ? 30 : 0)], [170 + i * 120, 3700], [210 + i * 120, 3640 - (i % 2) * 20], 4)))
  for (const x of [980, 1060, 1140]) T.fine.push(d.poly([[x, 3440], [x + 22, 3500], [x + 44, 3436]]))
  // throat channel (hidden) and the water thrown clear of the wall
  T.center.push(d.poly([[-900, 3440], [200, 3420], [900, 3410], [1220, 3390]]).replace('/>', ' stroke-dasharray="8 4"/>'))
  T.center.push(d.poly(smooth([[1240, 3380], [1560, 3330], [1640, 2900], [1660, 1900]], false, 8)))
  T.fine.push(d.poly([[1580, 2300], [1660, 2000], [1740, 2300]]))
}

const gargoyle: Pair = {
  id: 'gargoyle', title: 'Gargoyle', subtitle: 'Carved water spout projecting from a roof', sheetNo: 'DEC-10', view: 'SECTION · CLOSE-UP IN CONTEXT',
  description: 'Section through a parapet gutter and gargoyle: rain runs off the lead roof into the gutter, through a channel inside a stone beast that projects far enough to throw the water clear of the wall, with a round close-up of the carved head.',
  draw: drawGargoyle, whole: { scale: 0.04, ox: 330, oy: 292, w: [-3400, 1800], h: [0, 5500], caption: 'WALL, GUTTER AND SPOUT · SECTION' }, at: [650, 3550], r: 820, note: 'HEAD PROJECTS 1250 mm · WATER FALLS CLEAR OF THE WALL',
  items: (at) => ({
    items: [{ text: 'EAR', at: at(640, 4000) }, { text: 'MANE', at: at(330, 3800) }, { text: 'EYE AND BROW', at: at(880, 3790) }, { text: 'SNARLING MOUTH, FANGS', at: at(1190, 3550) }, { text: 'THROAT (WATER CHANNEL)', at: at(500, 3415) }, { text: 'WALL (STONE)', at: at(-300, 3900) }],
    dims: [],
  }),
  scaleUnit: { mm: 1000, name: '1 m', count: 3 },
}

// ---------------------------------------------------------------------------
// Caryatid: a draped female figure serving as a column, on a podium, under a capital and entablature
// ---------------------------------------------------------------------------
function drawCaryatid(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  // podium and plinth
  T.profile.push(d.poly([[-520, -380], [520, -380], [520, -80], [-520, -80]], true), d.poly([[-420, -80], [420, -80], [420, 0], [-420, 0]], true))
  for (const v of [-300, -220]) T.fine.push(d.poly([[-520, v], [520, v]]))
  // robe silhouette (peplos): shoulders, arms, waist, long skirt; weight on the right leg
  const right: XY[] = [[70, 1990], [140, 1960], [250, 1900], [290, 1760], [300, 1600], [260, 1420], [200, 1330], [215, 1200], [235, 900], [250, 500], [270, 90], [290, 0]]
  const left: XY[] = [[-290, 0], [-300, 130], [-262, 500], [-230, 760], [-205, 1000], [-190, 1200], [-190, 1330], [-240, 1450], [-285, 1600], [-280, 1760], [-245, 1900], [-140, 1960], [-70, 1990]]
  const body: XY[] = [...smooth(right, false, 4), ...smooth(left, false, 4)]
  T.hatch.push(`<path d="${d.poly(body, true).replace(/^<path d="|"\/>$/g, '')}" fill="url(#h-stone)" stroke="none"/>`)
  T.profile.push(`<path d="${d.poly(body, true).replace(/^<path d="|"\/>$/g, '')}" style="fill: var(--_paper)"/>`)
  T.profile.push(d.poly(body, true))
  // neck and neckline, the folded top of the garment (apoptygma) and belt
  T.profile.push(d.poly(smooth([[-62, 2000], [-58, 2080], [-50, 2120]])), d.poly(smooth([[62, 2000], [58, 2080], [50, 2120]])))
  T.fine.push(d.poly(smooth([[-120, 1950], [0, 1860], [120, 1950]])), d.poly(smooth([[-250, 1650], [-60, 1580], [120, 1620], [260, 1560]], false, 6)), d.poly(smooth([[-200, 1440], [0, 1470], [200, 1440]])), d.poly(smooth([[-195, 1400], [0, 1430], [200, 1395]])))
  // breasts under the cloth and the arms: right arm bent at the hip, left hanging
  T.fine.push(d.poly(smooth([[-150, 1790], [-90, 1740], [-20, 1770]])), d.poly(smooth([[20, 1770], [90, 1740], [150, 1790]])))
  T.profile.push(d.poly(smooth([[-262, 1750], [-255, 1500], [-232, 1330], [-200, 1260]])), d.poly(smooth([[255, 1760], [262, 1500], [236, 1380], [190, 1300]])))
  // pleats: deep vertical folds on the weight-bearing leg, a bent knee and diagonal folds on the relaxed one
  for (let i = 0; i < 7; i++) {
    const x = 20 + i * 36
    T.shading.push(d.poly(smooth([[x - 4, 1280], [x + 6 + i * 2, 800], [x + 14 + i * 3, 30]], false, 6)))
  }
  for (let i = 0; i < 4; i++) T.fine.push(d.poly(smooth([[-190 + i * 30, 1230], [-150 + i * 20, 900 - i * 40], [-170 + i * 28, 640]], false, 5)))
  T.profile.push(d.poly(smooth([[-120, 1100], [-80, 760], [-180, 540]], false, 6)), d.poly(smooth([[-30, 1080], [-60, 800], [-110, 560]], false, 6)))
  T.fine.push(d.poly([[-300, 0], [-60, 20]]), d.poly([[60, 24], [290, 0]]), d.poly([[-120, 40], [-120, 14]]))
  // head: oval with the hair drawn back, a braid down the back, a diadem
  const head = arcXY(0, 2130, 100, 0, 2 * Math.PI, 28).map(([x, y]) => [x, 2130 + (y - 2130) * 1.2] as XY)
  T.profile.push(d.poly(head, true))
  T.fine.push(d.poly(smooth([[-98, 2160], [-60, 2280], [0, 2300], [60, 2280], [98, 2160]])), d.poly(smooth([[-96, 2120], [-120, 1990], [-140, 1850], [-120, 1720]], false, 6)))
  T.fine.push(d.poly(smooth([[-30, 2165], [-8, 2150], [-30, 2140]])), d.poly(smooth([[30, 2165], [8, 2150], [30, 2140]])), d.poly(smooth([[0, 2150], [12, 2090], [0, 2085]])), d.poly(smooth([[-30, 2050], [0, 2038], [30, 2050]])))
  for (let i = 0; i < 6; i++) T.shading.push(d.poly(smooth([[-86 + i * 34, 2250 - Math.abs(i - 2.5) * 12], [-70 + i * 30, 2190], [-80 + i * 32, 2150]], false, 3)))
  // capital: a basket (kalathos) with an echinus band and an abacus
  T.profile.push(d.poly([[-130, 2320], [130, 2320], [185, 2470], [-185, 2470]], true))
  for (let i = -3; i <= 3; i++) T.fine.push(d.poly([[i * 36, 2330], [i * 52, 2460]]))
  T.profile.push(d.poly([[-215, 2470], [215, 2470], [215, 2520], [-215, 2520]], true), d.poly([[-260, 2520], [260, 2520], [260, 2570], [-260, 2570]], true))
  // entablature above (broken at both ends)
  T.profile.push(d.poly([[-480, 2570], [480, 2570], [480, 2900], [-480, 2900]], true))
  for (const v of [2700, 2760]) T.fine.push(d.poly([[-480, v], [480, v]]))
  for (let x = -450; x < 460; x += 60) T.fine.push(d.poly([[x, 2810], [x, 2870], [x + 30, 2870], [x + 30, 2810]]))
  T.profile.push(d.poly([[-520, 2900], [520, 2900], [520, 3020], [-520, 3020]], true))
}

const caryatid: Pair = {
  id: 'caryatid', title: 'Caryatid', subtitle: 'Draped female figure serving as a column', sheetNo: 'FAC-05', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
  description: 'Elevation of a draped female figure standing in place of a column, carrying an entablature on a basket capital, with a round close-up of her head, hair and capital.',
  draw: drawCaryatid, whole: { scale: 0.066, ox: 300, oy: 296, w: [-520, 520], h: [-380, 3020], caption: 'WHOLE FIGURE · ELEVATION' }, at: [0, 2300], r: 430, note: 'FIGURE 2.3 m TALL · CAPITAL AND ENTABLATURE ABOVE',
  items: (at) => ({
    items: [{ text: 'ENTABLATURE', at: at(-300, 2720) }, { text: 'ABACUS', at: at(-250, 2545) }, { text: 'BASKET CAPITAL', at: at(-160, 2400) }, { text: 'HEAD WITH BRAIDS', at: at(-90, 2200) }, { text: 'NECK', at: at(-58, 2040) }, { text: 'FOLDED GARMENT', at: at(-250, 1700) }],
    dims: [],
  }),
  scaleUnit: { mm: 500, name: '500 mm', count: 3 },
}

// ---------------------------------------------------------------------------
// Wild men: hairy figures carved on a corbel, with a club and a heraldic shield
// ---------------------------------------------------------------------------
function drawWildMan(T: Layers, s: number, ox: number, oy: number) {
  const d = pen(T, s, ox, oy)
  // the corbel (a stepped bracket) he stands on, in a wall
  T.hatch.push(`<path d="${d.poly([[-900, -900], [-300, -900], [-300, -420], [-160, -300], [-160, 0], [-900, 0]], true).replace(/^<path d="|"\/>$/g, '')}" fill="url(#h-stone)" stroke="none"/>`)
  T.cut.push(d.poly([[-900, -900], [-300, -900], [-300, -420], [-160, -300], [-160, 0], [-900, 0]], true))
  T.profile.push(d.poly([[-160, -300], [560, -300], [560, 0], [-160, 0]], true), d.poly([[-120, -300], [-120, -420], [520, -420], [520, -300]], true))
  T.fine.push(d.poly([[-160, -150], [560, -150]]))
  // legs (hairy): tufted outlines with short zigzag fur
  const fur = (pts: XY[], amp: number): XY[] => {
    const out: XY[] = []
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, ay] = pts[i]
      const [bx, by] = pts[i + 1]
      const nx = -(by - ay)
      const ny = bx - ax
      const len = Math.hypot(nx, ny) || 1
      out.push([ax, ay], [(ax + bx) / 2 + (nx / len) * amp, (ay + by) / 2 + (ny / len) * amp])
    }
    out.push(pts[pts.length - 1])
    return out
  }
  const legR = fur([[90, 0], [100, 300], [120, 600], [160, 860]], 18)
  const legL = fur([[-20, 0], [-40, 300], [-70, 600], [-100, 860]], 18)
  T.profile.push(d.poly(legR), d.poly(legL), d.poly([[-20, 0], [90, 0]]))
  // torso with shaggy sides, shoulders, a belt of leaves
  const torsoR = fur([[160, 860], [210, 1060], [230, 1250], [215, 1400]], 22)
  const torsoL = fur([[-100, 860], [-170, 1060], [-215, 1250], [-205, 1400]], 22)
  T.profile.push(d.poly([...torsoL, ...torsoR]))
  T.fine.push(d.poly(smooth([[-130, 900], [30, 960], [180, 900]])), d.poly(smooth([[-140, 940], [30, 1000], [190, 940]])))
  for (let i = 0; i < 6; i++) T.fine.push(d.poly([[-120 + i * 52, 960], [-95 + i * 52, 1060], [-70 + i * 52, 960]]))
  // fur strokes on chest and thighs
  for (let i = 0; i < 9; i++) T.shading.push(d.poly([[-110 + (i % 3) * 90, 1120 + Math.floor(i / 3) * 90], [-95 + (i % 3) * 90, 1060 + Math.floor(i / 3) * 90]]))
  for (let i = 0; i < 8; i++) T.shading.push(d.poly([[-60 + (i % 2) * 140, 420 + i * 55], [-50 + (i % 2) * 140, 380 + i * 55]]))
  // head with a leafy wreath and a long forked beard
  const head = arcXY(10, 1560, 105, 0, 2 * Math.PI, 28).map(([x, y]) => [x, 1560 + (y - 1560) * 1.12] as XY)
  T.profile.push(d.poly(head, true))
  const beard = fur([[-90, 1500], [-110, 1380], [-70, 1240], [10, 1180], [90, 1240], [120, 1380], [110, 1500]], 16)
  T.profile.push(d.poly(beard))
  T.fine.push(d.poly(smooth([[-60, 1560], [-20, 1590], [10, 1560]])), d.poly(smooth([[50, 1560], [20, 1590], [-10, 1560]])), d.circ(-30, 1580, 12), d.circ(50, 1580, 12), d.poly(smooth([[10, 1560], [30, 1500], [10, 1490]])))
  for (let i = 0; i < 7; i++) T.fine.push(d.circ(-100 + i * 36, 1650 + (i % 2) * 28, 26))
  // club raised in the right hand: a knobbly tapered shaft
  T.profile.push(d.poly(fur([[230, 1330], [330, 1500], [420, 1640]], 14)), d.circ(430, 1660, 30))
  T.profile.push(d.poly([[410, 1680], [470, 2250], [640, 2250], [620, 1660]], true))
  for (let i = 0; i < 6; i++) T.fine.push(d.circ(520 + (i % 2) * 40, 1760 + i * 90, 18))
  T.fine.push(d.poly([[410, 1680], [620, 1660]]))
  // heraldic shield held on the left arm: a heater shape with a chevron
  const shield: XY[] = [[-540, 1380], [-140, 1380], [-140, 1060], ...quad([-140, 1060], [-160, 760], [-340, 680], 5), ...quad([-340, 680], [-520, 760], [-540, 1060], 5), [-540, 1380]]
  T.profile.push(d.poly(shield, true))
  T.fine.push(d.poly([[-500, 1340], [-180, 1340], [-180, 1080]]), d.poly([[-460, 1160], [-340, 1000], [-220, 1160]]), d.poly(smooth([[-460, 1220], [-340, 1060], [-220, 1220]])))
  T.profile.push(d.poly(fur([[-170, 1360], [-110, 1380], [-60, 1340]], 12)))
}

const wildMen: Pair = {
  id: 'wild-men-savage-men', title: 'Wild Men / Savage Men', subtitle: 'Hairy club-bearing figures guarding arms', sheetNo: 'DEC-18', view: 'ELEVATION · CLOSE-UP IN CONTEXT',
  description: 'Elevation of a carved hairy man with a leafy wreath and a long beard, a club on his shoulder and a heraldic shield, standing on a corbel, with a round close-up of his head and beard.',
  draw: drawWildMan, whole: { scale: 0.07, ox: 300, oy: 262, w: [-900, 650], h: [-900, 2250], caption: 'WHOLE FIGURE ON ITS CORBEL · ELEVATION' }, at: [0, 1500], r: 470, note: 'FIGURE ABOUT 1.7 m TALL · HAIRY SKIN SHOWN BY TUFTS',
  items: (at) => ({
    items: [{ text: 'LEAFY WREATH', at: at(-100, 1700) }, { text: 'FACE', at: at(-30, 1580) }, { text: 'LONG FORKED BEARD', at: at(-100, 1340) }, { text: 'SHAGGY FUR', at: at(-210, 1250) }, { text: 'CLUB', at: at(430, 1660) }],
    dims: [],
  }),
  scaleUnit: { mm: 500, name: '500 mm', count: 3 },
}

export const CRUDE_A_SHEETS: Array<() => SheetSpec> = [gargoyle, caryatid, wildMen].map((c) => () => build(c))
void f
void el
void mirror
