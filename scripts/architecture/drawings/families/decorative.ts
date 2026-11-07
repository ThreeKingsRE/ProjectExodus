/**
 * Ornament.
 *
 * Ornament is read face-on, so most sheets are ELEVATIONS. Exceptions where
 * another view says more: the cornice as a true SECTION (its meaning is the
 * profile), the gargoyle in SECTION (it is a drain), the boss as a REFLECTED
 * PLAN with a section, and the Ionic volute as a CONSTRUCTION drawing.
 */
import { type Pt, type SheetSpec, type LayerName, f, path, el, vDim, hDim, text } from '../sheet'
import { newLayers, finish, hatched, circle, line, rect, callouts, arrow, Bounds, ORIGINAL, type Layers } from '../kit'

const PAPER = 'style="fill: var(--_paper)"'
const meta = (id: string, title: string, subtitle: string, view: string, sheetNo: string, description: string, unitPx: number, unitName: string, source = ORIGINAL) =>
  ({ id, title, subtitle, view, sheetNo, description, source, scale: { unitPx, unitName, count: 4 } })

/** Push a path four (or two) times, mirrored about (cx, cy). */
function mirrored(L: Layers, layer: LayerName, d: string, cx: number, cy: number, quads: Array<[number, number]> = [[1, 1], [-1, 1], [1, -1], [-1, -1]], attrs = '') {
  for (const [sx, sy] of quads) L[layer].push(`<g transform="translate(${f(cx)} ${f(cy)}) scale(${sx} ${sy})">${el(d, attrs)}</g>`)
}
/** Same shape rotated n times about c (d drawn around the origin). */
function rotated(L: Layers, layer: LayerName, d: string, c: Pt, n: number, offset = 0, attrs = '') {
  for (let i = 0; i < n; i++) L[layer].push(`<g transform="translate(${f(c[0])} ${f(c[1])}) rotate(${f(offset + (i * 360) / n)})">${el(d, attrs)}</g>`)
}
/** A ribbon/branch: thick ink stroke with a paper core, so crossings read as over/under. */
function tube(L: Layers, d: string, w: number, layer: LayerName = 'profile') {
  L[layer].push(el(d, `style="stroke-width: ${w}; stroke-linecap: round"`), el(d, `style="stroke: var(--_paper); stroke-width: ${f(w - 3)}; stroke-linecap: round"`))
}

// ---------------------------------------------------------------------------
// Mouldings (section / band elevations)
// ---------------------------------------------------------------------------
function cornice(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const w = 260 // wall face (frieze plane)
  // profile from frieze up to the top wash, projecting to the right
  const p: Pt[] = [[w, 560], [w, 500], [w + 6, 500], [w + 6, 492]]
  // cavetto (concave) bed moulding
  for (let i = 1; i <= 6; i++) { const a = (i / 6) * (Math.PI / 2); p.push([w + 6 + 18 * (1 - Math.cos(a)), 492 - 22 * Math.sin(a)]) }
  // ovolo (convex) carrying egg-and-dart
  for (let i = 1; i <= 6; i++) { const a = (i / 6) * (Math.PI / 2); p.push([w + 24 + 18 * Math.sin(a), 470 - 20 * (1 - Math.cos(a))]) }
  p.push([w + 42, 444], [w + 62, 444], [w + 62, 408], [w + 66, 408], [w + 66, 402])
  // small ovolo then modillion band soffit
  for (let i = 1; i <= 4; i++) { const a = (i / 4) * (Math.PI / 2); p.push([w + 66 + 10 * Math.sin(a), 402 - 10 * (1 - Math.cos(a))]) }
  p.push([w + 80, 392], [w + 80, 362])
  // corona soffit with drip groove, corona face
  p.push([w + 176, 362], [w + 176, 368], [w + 182, 368], [w + 182, 362], [w + 196, 362], [w + 196, 312], [w + 202, 312], [w + 202, 306])
  // cymatium: cyma recta (concave below, convex above)
  for (let i = 1; i <= 8; i++) {
    const t = i / 8
    p.push([w + 202 + 44 * (t < 0.5 ? 1 - Math.cos(t * Math.PI) : 1 + Math.sin((t - 0.5) * Math.PI)) / 2, 306 - 50 * t])
  }
  p.push([w + 246, 250], [w + 246, 242], [w + 60, 230], [w - 30, 230], [w - 30, 560])
  hatched(L, p, 'h-stone')
  // modillion (scroll bracket) seen beyond under the corona
  L.fine.push(el(`M${w + 80} 392H${w + 100}C${w + 104} 380 ${w + 130} 374 ${w + 168} 372M${w + 100} 392c-12 -2 -10 -16 0 -14c8 2 6 10 0 10M${w + 168} 372c6 -2 8 -8 2 -10`))
  // eggs and darts on the ovolo seen beyond
  for (const y of [452, 464]) L.fine.push(el(`M${w + 30} ${y}q6 -6 10 0`))
  // dentil beyond and its neighbour gap
  L.fine.push(line([w + 62, 426], [w + 50, 426]))
  // water dripping off the drip edge
  L.center.push(el(`M${w + 240} 240Q${w + 250} 250 ${w + 246} 300M${w + 179} 368q2 30 0 70`))
  arrow(L, [w + 179, 380], [w + 179, 440])
  L.notes.push(text(w + 186, 430, 'DRIP', 'class="t-small t-accent"'))
  B.add([w - 30, 230], [w + 246, 560])
  L.dims.push(hDim(590, w, w + 246, 'PROJECTION'))
  L.dims.push(vDim(w + 290, 500, 242, 'HEIGHT', w + 250))
  callouts(L, [
    { text: 'CYMATIUM (CYMA RECTA)', at: [w + 222, 290] },
    { text: 'CORONA', at: [w + 140, 337] },
    { text: 'DRIP GROOVE', at: [w + 179, 368] },
    { text: 'MODILLION (BEYOND)', at: [w + 120, 380] },
    { text: 'DENTIL BAND', at: [w + 62, 426] },
    { text: 'OVOLO (EGG-AND-DART)', at: [w + 40, 458] },
    { text: 'BED MOULD (CAVETTO)', at: [w + 12, 485] },
    { text: 'FRIEZE', at: [w, 530] },
  ], w - 30)
  return finish(meta('cornice', 'Cornice', 'Crowning projection of an entablature', 'SECTION', 'DEC-01',
    'Section through a classical cornice: bed mouldings and a dentil band step out from the frieze to carry the corona, a deep projecting slab whose drip throws rain clear, crowned by an S-curved cymatium.', 40, 'modules (indicative)'), L, B)
}

function dentil(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 210
  const x1 = 560
  const dw = 18
  const gap = 9
  const dTop = 330
  const dBot = 366
  // corona and cymatium above, bed mould and frieze below
  L.profile.push(el(path(rect(x0, 250, x1 - x0, 20), true)), el(path(rect(x0, 270, x1 - x0, 46), true)), el(path(rect(x0, 316, x1 - x0, 14), true)))
  L.fine.push(line([x0, 258], [x1, 258]), line([x0, 296], [x1, 296]))
  L.profile.push(line([x0, dTop], [x1, dTop]), line([x0, dBot], [x1, dBot]))
  for (let x = x0 + 6; x + dw < x1; x += dw + gap) {
    L.profile.push(el(path(rect(x, dTop, dw, dBot - dTop), true)))
    L.shading.push(el(path(rect(x + dw, dTop, gap, dBot - dTop), true), 'fill="url(#h-stone)"'))
  }
  L.profile.push(el(path(rect(x0, dBot, x1 - x0, 14), true)))
  let ov = ''
  for (let x = x0 + 4; x < x1 - 10; x += 16) ov += `M${x} ${dBot + 12}q8 -12 16 0`
  L.fine.push(el(ov))
  L.profile.push(el(path(rect(x0, dBot + 14, x1 - x0, 110), true)))
  L.profile.push(el(`M${x0} ${dBot + 140}H${x1}`))
  // profile (section) at the left end
  const sx = x0 - 50
  hatched(L, [[sx, 250], [sx + 34, 250], [sx + 34, 270], [sx + 30, 270], [sx + 30, 316], [sx + 22, 316], [sx + 22, dTop], [sx + 18, dTop], [sx + 18, dBot], [sx + 10, dBot], [sx + 10, dBot + 14], [sx, dBot + 14]], 'h-stone')
  L.notes.push(text(sx + 2, 240, 'SECTION', 'class="t-small"'))
  B.add([sx, 240], [x1, dBot + 140])
  L.dims.push(hDim(dTop - 10, x0 + 6 + 2 * (dw + gap), x0 + 6 + 2 * (dw + gap) + dw, 'DENTIL'))
  L.dims.push(hDim(dBot + 160, x0 + 6 + dw, x0 + 6 + dw + gap, 'GAP'))
  L.dims.push(vDim(x1 + 14, dBot, dTop, 'H', x1))
  callouts(L, [
    { text: 'CYMATIUM', at: [sx, 258] },
    { text: 'CORONA', at: [x0 + 120, 296] },
    { text: 'DENTIL', at: [x0 + 6 + 4 * (dw + gap), 350] },
    { text: 'INTERDENTIL (GAP)', at: [x0 + 6 + 5 * (dw + gap) + dw + 4, 340] },
    { text: 'OVOLO', at: [x0 + 4, dBot + 8] },
    { text: 'FRIEZE', at: [x0, dBot + 70] },
  ], sx)
  return finish(meta('dentil', 'Dentil', 'Row of small tooth-like blocks under a cornice', 'ELEVATION', 'DEC-02',
    'Elevation of a dentil course: a row of small rectangular blocks, separated by gaps about half their width, set beneath the corona of a classical cornice, with the profile shown in section at the left.', 40, 'modules (indicative)'), L, B)
}

function eggDart(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 220
  const x1 = 560
  const top = 300
  const bot = 380
  const pitch = 40
  L.profile.push(el(path(rect(x0, top - 14, x1 - x0, 14), true)), line([x0, top], [x1, top]), line([x0, bot], [x1, bot]))
  for (let x = x0 + 4; x + pitch <= x1; x += pitch) {
    const cx = x + pitch / 2
    // shell (cup) open at the top, egg inside, dart between eggs
    L.profile.push(el(`M${f(cx - 16)} ${top}V${top + 26}Q${f(cx - 16)} ${bot - 4} ${f(cx)} ${bot - 4}Q${f(cx + 16)} ${bot - 4} ${f(cx + 16)} ${top + 26}V${top}`))
    L.profile.push(`<ellipse cx="${f(cx)}" cy="${top + 36}" rx="11" ry="30"/>`)
    L.fine.push(el(`M${f(x + pitch)} ${top + 2}V${top + 30}l-5 12l5 22l5 -22l-5 -12`))
  }
  // bead-and-reel below
  L.profile.push(line([x0, bot + 16], [x1, bot + 16]))
  for (let x = x0 + 6; x < x1 - 10; x += 24) L.fine.push(`<ellipse cx="${x + 7}" cy="${bot + 8}" rx="7" ry="6"/>`, `<ellipse cx="${x + 18}" cy="${bot + 8}" rx="2.5" ry="6"/>`)
  // profile at the left end: quarter-round ovolo
  const sx = x0 - 46
  const prof: Pt[] = [[sx, top - 14], [sx + 34, top - 14], [sx + 34, top]]
  for (let i = 1; i <= 8; i++) { const a = (i / 8) * (Math.PI / 2); prof.push([sx + 34 - 30 * (1 - Math.cos(a)), top + 76 * Math.sin(a)]) }
  prof.push([sx + 4, bot + 16], [sx, bot + 16])
  hatched(L, prof, 'h-stone')
  L.notes.push(text(sx, top - 24, 'PROFILE', 'class="t-small"'))
  B.add([sx, top - 24], [x1, bot + 16])
  L.dims.push(hDim(bot + 44, x0 + 4, x0 + 4 + pitch, 'ONE REPEAT'))
  callouts(L, [
    { text: 'FILLET', at: [x0 + 30, top - 7] },
    { text: 'EGG', at: [x0 + 4 + pitch * 1.5 - 4, top + 36] },
    { text: 'SHELL (CUP)', at: [x0 + 4 + pitch * 2.5 - 15, top + 30] },
    { text: 'DART', at: [x0 + 4 + pitch * 3, top + 56] },
    { text: 'OVOLO PROFILE', at: [sx + 22, top + 40] },
    { text: 'BEAD-AND-REEL', at: [x0 + 10, bot + 8] },
  ], sx)
  return finish(meta('egg-and-dart', 'Egg-and-Dart', 'Carved ovolo band of eggs and arrowheads', 'ELEVATION', 'DEC-03',
    'Elevation of an egg-and-dart band: egg shapes set in open cups alternate with pointed darts along a quarter-round ovolo moulding, here above a bead-and-reel astragal, with the profile shown at the left.', 40, 'modules (indicative)'), L, B)
}

function guilloche(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 210
  const x1 = 560
  const cy = 360
  const A = 30
  const period = 70
  L.profile.push(el(path(rect(x0, cy - 50, x1 - x0, 100), true)), line([x0, cy - 44], [x1, cy - 44]), line([x0, cy + 44], [x1, cy + 44]))
  // two strands, drawn as ribbons half-period by half-period so crossings alternate over/under
  const strand = (phase: number, a: number, b: number) => {
    let d = ''
    for (let x = a; x <= b + 0.1; x += 2) d += `${x === a ? 'M' : 'L'}${f(x)} ${f(cy + A * Math.sin(((x - x0) / period) * 2 * Math.PI + phase))}`
    return d
  }
  const half = period / 2
  for (let k = 0; k * half < x1 - x0; k++) {
    const a = x0 + k * half
    const b = Math.min(x1, a + half)
    const first = k % 2 === 0 ? 0 : Math.PI
    // segment of each strand centred on a crossing: draw under first, then over
    tube(L, strand(first + Math.PI, a, b), 11)
    tube(L, strand(first, a, b), 11)
  }
  for (let x = x0 + period / 4; x < x1; x += period / 2) L.fine.push(circle([x, cy], 5), circle([x, cy], 1.5))
  B.add([x0, cy - 50], [x1, cy + 50])
  L.dims.push(hDim(cy + 74, x0 + period / 4, x0 + period / 4 + period, 'ONE REPEAT'))
  callouts(L, [
    { text: 'FILLET BORDER', at: [x0, cy - 47] },
    { text: 'INTERLACED RIBBON', at: [x0 + period / 2, cy - A + 4] },
    { text: 'OVER-UNDER CROSSING', at: [x0 + half * 2 - 4, cy] },
    { text: 'ROSETTE (EYE)', at: [x0 + period / 4 - 5, cy] },
  ], x0)
  return finish(meta('guilloche', 'Guilloche', 'Band of interlaced ribbons', 'ELEVATION', 'DEC-04',
    'Elevation of a guilloche band: two ribbons weave over and under each other in a continuous wave, enclosing a row of circular eyes, each filled with a small rosette.', 35, 'units (indicative)'), L, B)
}

function zigzag(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const spring = 360
  const floor = 580
  const rIn = 70
  // two chevron orders around a round-headed (Norman) doorway
  const orders = [[rIn, rIn + 28], [rIn + 34, rIn + 62]]
  for (const [r0, r1] of orders) {
    L.profile.push(el(`M${cx - r0} ${spring}A${r0} ${r0} 0 0 1 ${cx + r0} ${spring}`), el(`M${cx - r1} ${spring}A${r1} ${r1} 0 0 1 ${cx + r1} ${spring}`))
    const n = 18
    const pts: Pt[] = []
    for (let i = 0; i <= n * 2; i++) {
      const a = Math.PI + (i / (n * 2)) * Math.PI
      const r = i % 2 ? r1 - 3 : r0 + 3
      pts.push([cx + r * Math.cos(a), spring + r * Math.sin(a)])
    }
    L.fine.push(el(path(pts)))
    // jamb continues the chevron vertically
    for (const s of [-1, 1]) {
      const xa = cx + s * r0
      const xb = cx + s * r1
      L.profile.push(line([xa, spring], [xa, floor]), line([xb, spring], [xb, floor]))
      const jp: Pt[] = []
      for (let y = spring, i = 0; y <= floor - 40; y += 14, i++) jp.push([i % 2 ? xb - s * 3 : xa + s * 3, y])
      L.fine.push(el(path(jp)))
    }
  }
  // impost blocks and cushion capitals on nook shafts
  for (const s of [-1, 1]) {
    L.profile.push(el(path(rect(s < 0 ? cx - rIn - 70 : cx + rIn, spring - 10, 70, 10), true)))
    const shx = cx + s * (rIn + 31)
    L.profile.push(el(`M${shx - 12} ${spring + 26}h24v-12q0 -4 -4 -4h-16q-4 0 -4 4Z`))
    L.fine.push(el(`M${shx - 12} ${spring + 20}q12 14 24 0`))
  }
  // tympanum with a simple cross
  L.fine.push(line([cx - rIn, spring], [cx + rIn, spring]), el(`M${cx} ${spring - 54}v40M${cx - 14} ${spring - 40}h28`))
  L.profile.push(line([cx - 190, floor], [cx + 190, floor]))
  B.add([cx - 190, spring - rIn - 62], [cx + 190, floor])
  L.dims.push(hDim(floor + 22, cx - rIn, cx + rIn, 'OPENING'))
  callouts(L, [
    { text: 'OUTER CHEVRON ORDER', at: [cx - 80, spring - rIn - 50] },
    { text: 'INNER CHEVRON ORDER', at: [cx - 60, spring - rIn - 6] },
    { text: 'TYMPANUM', at: [cx - 30, spring - 20] },
    { text: 'IMPOST', at: [cx - rIn - 70, spring - 5] },
    { text: 'CUSHION CAPITAL', at: [cx - rIn - 43, spring + 20] },
    { text: 'ZIGZAG JAMB', at: [cx - rIn - 14, 480] },
  ], cx - 190)
  return finish(meta('zigzag-motif', 'Zigzag Motif', 'Chevron ornament on arches and bands', 'ELEVATION', 'DEC-05',
    'Elevation of a round-headed doorway framed by two orders of chevron moulding, the zigzag carried around the arch and down the jambs, with cushion capitals at the springing.', 30, 'metres (indicative)'), L, B)
}

// ---------------------------------------------------------------------------
// Carved and modelled ornament
// ---------------------------------------------------------------------------
function acanthus(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const base = 570
  const tip = 170
  const H = base - tip
  const wOf = (t: number) => 135 * Math.pow(Math.sin(Math.PI * Math.min(1, t * 1.05)), 0.75)
  const yOf = (t: number) => base - t * H
  // one side of the outline: 5 lobes, each with 3 serrated fingers
  const side: Pt[] = [[cx + 18, base]]
  const lobes = 5
  for (let k = 0; k < lobes; k++) {
    const t0 = 0.06 + (k / lobes) * 0.86
    const t1 = 0.06 + ((k + 1) / lobes) * 0.86
    side.push([cx + wOf(t0) * 0.42, yOf(t0)])
    for (let j = 0; j < 3; j++) {
      const t = t0 + ((j + 0.75) / 3) * (t1 - t0)
      side.push([cx + wOf(t) * 0.82, yOf(t) + 4], [cx + wOf(t), yOf(t) - 6])
    }
  }
  side.push([cx + 16, tip + 16])
  const toD = (pts: Pt[], s: number) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${f(cx + s * (x - cx))} ${f(y)}`).join('')
  L.profile.push(el(toD(side, 1)), el(toD(side, -1)))
  // tip curling forward
  L.profile.push(el(`M${cx + 16} ${tip + 16}C${cx + 14} ${tip - 6} ${cx - 30} ${tip - 10} ${cx - 34} ${tip + 12}C${cx - 36} ${tip + 30} ${cx - 10} ${tip + 32} ${cx - 8} ${tip + 16}C${cx - 6} ${tip + 6} ${cx - 22} ${tip + 4} ${cx - 22} ${tip + 14}`), el(`M${cx - 16} ${tip + 16}L${cx - 22} ${tip + 26}`))
  // midrib and veins to each finger
  L.profile.push(el(`M${cx - 6} ${base}Q${cx - 4} ${(base + tip) / 2} ${cx - 2} ${tip + 26}M${cx + 6} ${base}Q${cx + 4} ${(base + tip) / 2} ${cx + 2} ${tip + 26}`))
  for (let k = 0; k < lobes; k++) {
    const t0 = 0.06 + (k / lobes) * 0.86
    const t1 = 0.06 + ((k + 1) / lobes) * 0.86
    for (let j = 0; j < 3; j++) {
      const t = t0 + ((j + 0.75) / 3) * (t1 - t0)
      for (const s of [-1, 1]) L.fine.push(el(`M${f(cx + s * 6)} ${f(yOf(t0) + 10)}Q${f(cx + s * wOf(t) * 0.5)} ${f(yOf(t) + 10)} ${f(cx + s * wOf(t) * 0.92)} ${f(yOf(t) - 3)}`))
    }
    // eyes between lobes
    for (const s of [-1, 1]) L.fine.push(el(`M${f(cx + s * wOf(t0) * 0.42)} ${f(yOf(t0))}q${s * 8} -10 ${s * 2} -16q${s * -6} 6 ${s * -2} 16Z`))
  }
  L.profile.push(line([cx - 150, base], [cx + 150, base]))
  B.add([cx - 150, tip - 10], [cx + 150, base])
  L.dims.push(vDim(cx + 170, base, tip, 'LEAF', cx + 30))
  callouts(L, [
    { text: 'TIP CURLING FORWARD', at: [cx - 34, tip + 12] },
    { text: 'LOBE', at: [cx - wOf(0.62) * 0.9, yOf(0.62)] },
    { text: 'SERRATED FINGERS', at: [cx - wOf(0.44), yOf(0.44) - 6] },
    { text: 'EYE (SHADOW HOLE)', at: [cx - wOf(0.234) * 0.42 - 4, yOf(0.234) - 8] },
    { text: 'VEIN', at: [cx - 60, yOf(0.3)] },
    { text: 'MIDRIB', at: [cx - 6, 470] },
  ], cx - 150)
  return finish(meta('acanthus', 'Acanthus', 'Stylised leaf of the Corinthian order', 'ELEVATION', 'DEC-06',
    'Elevation of a single stylised acanthus leaf as carved on a Corinthian capital: a central midrib, deeply cut lobes each ending in serrated fingers, shadow-holes between the lobes, and a tip curling forward.', 40, 'units (indicative)'), L, B)
}

function rosette(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [380, 360]
  // square coffer frame with stepped mouldings
  for (const [h, layer] of [[170, 'profile'], [156, 'fine'], [144, 'profile'], [132, 'fine']] as const) L[layer].push(el(path(rect(c[0] - h, c[1] - h, 2 * h, 2 * h), true)))
  // outer petals (16), inner petals (8), button
  rotated(L, 'profile', 'M0 -40C22 -60 18 -100 0 -118C-18 -100 -22 -60 0 -40Z', c, 16)
  rotated(L, 'fine', 'M0 -48Q6 -80 0 -108', c, 16)
  rotated(L, 'profile', 'M0 -16C20 -26 26 -56 0 -72C-26 -56 -20 -26 0 -16Z', c, 8, 22.5, PAPER)
  rotated(L, 'fine', 'M0 -24Q4 -46 0 -62', c, 8, 22.5)
  L.profile.push(circle(c, 18, PAPER), circle(c, 10))
  for (let i = 0; i < 6; i++) { const a = (i / 6) * 2 * Math.PI; L.fine.push(circle([c[0] + 5 * Math.cos(a), c[1] + 5 * Math.sin(a)], 1.5)) }
  B.add([c[0] - 170, c[1] - 170], [c[0] + 170, c[1] + 170])
  L.dims.push(hDim(c[1] + 196, c[0] - 118, c[0] + 118, 'ROSETTE'))
  callouts(L, [
    { text: 'COFFER FRAME', at: [c[0] - 170, c[1] - 100] },
    { text: 'OUTER PETAL', at: [c[0] - 70, c[1] - 70] },
    { text: 'INNER PETAL', at: [c[0] - 34, c[1] - 30] },
    { text: 'CENTRAL BUTTON', at: [c[0] - 18, c[1]] },
    { text: 'PETAL RIB', at: [c[0] - 100, c[1] + 30] },
  ], c[0] - 170)
  return finish(meta('rosette', 'Rosette', 'Circular flower ornament', 'ELEVATION', 'DEC-07',
    'Elevation of a rosette set in a square coffer: two rings of radiating petals, sixteen outer and eight inner, around a raised central button.', 40, 'units (indicative)'), L, B)
}

function boss(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [380, 280]
  const h = 150
  // reflected plan: bay outline (wall ribs), diagonal ribs, web courses, carved boss
  L.profile.push(el(path(rect(c[0] - h, c[1] - h, 2 * h, 2 * h), true)))
  hatched(L, `${path(rect(c[0] - h - 16, c[1] - h - 16, 2 * h + 32, 2 * h + 32), true)}${path(rect(c[0] - h, c[1] - h, 2 * h, 2 * h).reverse(), true)}`)
  for (const [sx, sy] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
    const corner: Pt = [c[0] + sx * h, c[1] + sy * h]
    const nx = -sy / Math.SQRT2
    const ny = sx / Math.SQRT2
    for (const o of [-6, 6]) L.profile.push(line([corner[0] + nx * o, corner[1] + ny * o], [c[0] + nx * o + sx * 30, c[1] + ny * o + sy * 30]))
    // web courses parallel to the ridges
  }
  for (let k = 1; k < 7; k++) {
    const d = (k / 7) * h
    for (const [sx, sy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const a: Pt = sx ? [c[0] + sx * d, c[1] - d] : [c[0] - d, c[1] + sy * d]
      const b: Pt = sx ? [c[0] + sx * d, c[1] + d] : [c[0] + d, c[1] + sy * d]
      L.shading.push(line(a, b))
    }
  }
  L.center.push(line([c[0] - h, c[1]], [c[0] + h, c[1]]), line([c[0], c[1] - h], [c[0], c[1] + h]))
  // boss: foliate disc
  L.profile.push(circle(c, 32, PAPER))
  rotated(L, 'fine', 'M0 -6C10 -12 12 -24 0 -30C-12 -24 -10 -12 0 -6Z', c, 8)
  L.fine.push(circle(c, 6))
  // section below: two ribs meeting at the boss, which hangs below them
  const sy = 560
  const r = 120
  L.profile.push(el(`M${c[0] - r} ${sy + 40}A${r} ${r} 0 0 1 ${c[0] - 20} ${sy - 76}`), el(`M${c[0] + r} ${sy + 40}A${r} ${r} 0 0 0 ${c[0] + 20} ${sy - 76}`))
  L.profile.push(el(`M${c[0] - r + 14} ${sy + 40}A${r - 14} ${r - 14} 0 0 1 ${c[0] - 20} ${sy - 62}`), el(`M${c[0] + r - 14} ${sy + 40}A${r - 14} ${r - 14} 0 0 0 ${c[0] + 20} ${sy - 62}`))
  hatched(L, [[c[0] - 22, sy - 82], [c[0] + 22, sy - 82], [c[0] + 26, sy - 60], [c[0] + 14, sy - 44], [c[0] - 14, sy - 44], [c[0] - 26, sy - 60]])
  L.notes.push(text(c[0] + 50, sy - 90, 'SECTION', 'class="t-small"'))
  B.add([c[0] - h - 16, c[1] - h - 16], [c[0] + h + 16, sy + 40])
  callouts(L, [
    { text: 'WALL RIB', at: [c[0] - h, c[1] - 60] },
    { text: 'DIAGONAL RIB', at: [c[0] - 90, c[1] - 90] },
    { text: 'WEB COURSES', at: [c[0] - 100, c[1] + 40] },
    { text: 'BOSS (CARVED KEYSTONE)', at: [c[0] - 32, c[1]] },
    { text: 'RIB (SECTION)', at: [c[0] - 100, sy - 20] },
    { text: 'BOSS LOCKS THE RIBS', at: [c[0] - 26, sy - 60] },
  ], c[0] - h - 16)
  return finish(meta('boss', 'Boss', 'Carved keystone where vault ribs meet', 'REFLECTED PLAN · SECTION', 'DEC-08',
    'Reflected ceiling plan of a rib-vaulted bay with the carved foliate boss at the crossing of the diagonal ribs, and a section below showing the boss as the keystone that locks the ribs together.', 30, 'metres (indicative)'), L, B)
}

function finial(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const base = 590
  const bodyTop = 450
  const spireTop = 210
  const hw = 46
  // pinnacle body with blind tracery and gablets
  L.profile.push(el(path(rect(cx - hw, bodyTop, 2 * hw, base - bodyTop), true)))
  for (const s of [-1, 1]) {
    L.fine.push(el(`M${cx + s * 6} ${base - 10}V${bodyTop + 50}Q${cx + s * 6} ${bodyTop + 20} ${cx + s * 22} ${bodyTop + 14}Q${cx + s * 38} ${bodyTop + 20} ${cx + s * 38} ${bodyTop + 50}V${base - 10}`))
    L.fine.push(circle([cx + s * 22, bodyTop + 34], 6))
  }
  L.profile.push(el(path([[cx - hw - 4, bodyTop], [cx, bodyTop - 40], [cx + hw + 4, bodyTop]])))
  // spirelet with crockets up both edges
  const hb = hw - 6
  L.profile.push(el(path([[cx - hb, bodyTop], [cx - 8, spireTop], [cx + 8, spireTop], [cx + hb, bodyTop]], true)))
  L.fine.push(line([cx, bodyTop - 40], [cx, spireTop]))
  for (let k = 1; k < 7; k++) {
    const t = k / 7
    const y = bodyTop - t * (bodyTop - spireTop)
    const x = hb - t * (hb - 8)
    for (const s of [-1, 1]) L.profile.push(el(`M${f(cx + s * x)} ${f(y)}c${s * 8} -2 ${s * 16} -10 ${s * 14} -18c${s * -2} -6 ${s * -10} -4 ${s * -8} 2c${s * 2} 4 ${s * 6} 2 ${s * 6} -1`))
  }
  // necking band and fleuron
  L.profile.push(el(path(rect(cx - 12, spireTop - 8, 24, 8), true)))
  const fy = spireTop - 8
  L.profile.push(el(`M${cx} ${fy}C${cx - 6} ${fy - 20} ${cx - 34} ${fy - 14} ${cx - 34} ${fy - 30}C${cx - 34} ${fy - 42} ${cx - 18} ${fy - 40} ${cx - 16} ${fy - 30}`), el(`M${cx} ${fy}C${cx + 6} ${fy - 20} ${cx + 34} ${fy - 14} ${cx + 34} ${fy - 30}C${cx + 34} ${fy - 42} ${cx + 18} ${fy - 40} ${cx + 16} ${fy - 30}`))
  L.profile.push(el(`M${cx - 8} ${fy - 6}C${cx - 14} ${fy - 30} ${cx - 8} ${fy - 50} ${cx} ${fy - 62}C${cx + 8} ${fy - 50} ${cx + 14} ${fy - 30} ${cx + 8} ${fy - 6}Z`, PAPER))
  L.fine.push(line([cx, fy - 8], [cx, fy - 54]))
  L.profile.push(line([cx - 150, base], [cx + 150, base]))
  B.add([cx - 150, fy - 62], [cx + 150, base])
  L.dims.push(vDim(cx + 120, bodyTop, fy - 62, 'SPIRELET + FINIAL', cx + 40))
  callouts(L, [
    { text: 'FLEURON (FINIAL)', at: [cx - 34, fy - 30] },
    { text: 'NECKING BAND', at: [cx - 12, spireTop - 4] },
    { text: 'CROCKET', at: [cx - 30, 330] },
    { text: 'SPIRELET', at: [cx - 22, 400] },
    { text: 'GABLET', at: [cx - hw, bodyTop - 4] },
    { text: 'BLIND TRACERY', at: [cx - 38, 520] },
    { text: 'PINNACLE BODY', at: [cx - hw, 570] },
  ], cx - 150)
  return finish(meta('finial', 'Finial', 'Ornament crowning a pinnacle or gable', 'ELEVATION', 'DEC-09',
    'Elevation of a Gothic pinnacle: a body with blind tracery and gablets carries a slender spirelet whose edges are studded with curling leaf crockets, ending in a necking band and a cross-shaped fleuron.', 30, 'units (indicative)'), L, B)
}

function gargoyle(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const wf = 360 // outer wall face
  // wall and parapet (cut)
  hatched(L, [[300, 620], [wf, 620], [wf, 352], [wf + 6, 352], [wf + 6, 214], [wf - 22, 214], [wf - 22, 300], [300, 300]])
  // roof with lead covering sloping to the parapet gutter
  hatched(L, [[160, 196], [300, 290], [300, 300], [160, 210]], 'h-timber')
  L.cut.push(el(`M150 188L300 288L300 300H${wf - 22}`), el(`M300 288V300`))
  L.center.push(el(`M${wf - 20} 297H310`))
  // gargoyle body: a block running through the parapet base, carved as a beast
  const body = `M${wf - 22} 300H${wf + 6}L${wf + 40} 294C${wf + 70} 280 ${wf + 90} 276 ${wf + 120} 282L${wf + 134} 270L${wf + 140} 284C${wf + 160} 288 ${wf + 172} 300 ${wf + 176} 314L${wf + 158} 318L${wf + 176} 330C${wf + 160} 344 ${wf + 120} 346 ${wf + 90} 346C${wf + 60} 348 ${wf + 30} 352 ${wf + 6} 352H${wf - 22}Z`
  L.profile.push(el(body, PAPER))
  L.hatch.push(`<path d="${body}" fill="url(#h-stone)" stroke="none"/>`)
  L.fine.push(circle([wf + 144, 298], 4), el(`M${wf + 60} 330q10 -10 20 0q10 -10 20 0`), el(`M${wf + 100} 300q-6 -16 6 -24`))
  // throat channel (hidden) from gutter to mouth
  L.center.push(el(`M${wf - 22} 312H${wf + 100}Q${wf + 140} 314 ${wf + 166} 322`))
  // water thrown clear of the wall
  L.center.push(el(`M${wf + 170} 322Q${wf + 196} 330 ${wf + 206} 420T${wf + 210} 600`))
  arrow(L, [wf + 207, 520], [wf + 209, 590])
  L.notes.push(text(wf + 40, 470, 'WATER THROWN', 'class="t-small t-accent"'), text(wf + 40, 480, 'CLEAR OF WALL', 'class="t-small t-accent"'))
  B.add([150, 188], [wf + 210, 620])
  L.dims.push(hDim(640, wf, wf + 176, 'PROJECTION'))
  callouts(L, [
    { text: 'LEAD ROOF', at: [210, 228] },
    { text: 'PARAPET', at: [wf - 22, 240] },
    { text: 'PARAPET GUTTER', at: [wf - 40, 297] },
    { text: 'THROAT (CHANNEL)', at: [wf + 40, 312] },
    { text: 'CARVED BEAST', at: [wf + 60, 290] },
    { text: 'WALL', at: [300, 480] },
  ], 150)
  return finish(meta('gargoyle', 'Gargoyle', 'Carved water spout projecting from a roof', 'SECTION', 'DEC-10',
    'Section through a parapet gutter and gargoyle: rain runs off the roof into the gutter behind the parapet, then along a channel cut through a carved stone beast that projects far enough to throw the water clear of the wall.', 30, 'metres (indicative)'), L, B)
}

function muqarnas(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const spring = 520
  const W = 300
  // frame
  L.profile.push(el(path(rect(cx - W / 2 - 20, 140, W + 40, spring - 140 + 40), true)), line([cx - W / 2, spring], [cx + W / 2, spring]))
  L.profile.push(line([cx - W / 2, spring], [cx - W / 2, 220]), line([cx + W / 2, spring], [cx + W / 2, 220]))
  // tiers of cells: each a small pointed niche, the lower part toned (concave, in shadow)
  const tiers = [9, 8, 7, 6, 5, 4, 3]
  const th = 44
  const cell = (x: number, y: number, w: number) => {
    const d = `M${f(x)} ${f(y)}V${f(y - th * 0.45)}Q${f(x)} ${f(y - th * 0.85)} ${f(x + w / 2)} ${f(y - th)}Q${f(x + w)} ${f(y - th * 0.85)} ${f(x + w)} ${f(y - th * 0.45)}V${f(y)}`
    L.profile.push(el(d + 'Z', PAPER))
    L.profile.push(`<path d="${d}Z" fill="url(#mq-tone)" stroke="none"/>`)
    L.profile.push(el(d))
    L.fine.push(line([x + w / 2, y], [x + w / 2, y - th * 0.4]))
  }
  tiers.forEach((n, i) => {
    const w = W / tiers[0]
    const rowW = n * w
    const y = spring - i * th * 0.78
    for (let k = 0; k < n; k++) cell(cx - rowW / 2 + k * w, y, w)
    // pendants hang where tiers step in
    if (i > 0) for (let k = 0; k <= n; k++) L.fine.push(el(`M${f(cx - rowW / 2 + k * w)} ${f(y)}l-3 8l3 4l3 -4Z`))
  })
  // crown: half-dome cell at the top
  const yc = spring - tiers.length * th * 0.78
  L.profile.push(el(`M${cx - 30} ${f(yc)}Q${cx - 30} ${f(yc - 50)} ${cx} ${f(yc - 56)}Q${cx + 30} ${f(yc - 50)} ${cx + 30} ${f(yc)}`))
  rotated(L, 'fine', 'M0 0L0 -40', [cx, yc], 7, -67.5)
  L.notes.push(text(cx, spring + 22, 'SPRINGING LINE', 'class="t-small" text-anchor="middle"'))
  const defs = `<pattern id="mq-tone" width="2.6" height="2.6" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="2.6" y2="0" class="ink l-hair"/></pattern>`
  B.add([cx - W / 2 - 20, 140], [cx + W / 2 + 20, spring + 40])
  L.dims.push(hDim(spring + 60, cx - W / 2, cx + W / 2, 'NICHE'))
  callouts(L, [
    { text: 'CROWN CELL', at: [cx - 26, yc - 30] },
    { text: 'TIER', at: [cx - 70, spring - 3 * th * 0.78 - 20] },
    { text: 'PENDANT', at: [cx - 100, spring - th * 0.78] },
    { text: 'CELL (IN SHADOW)', at: [cx - W / 2 + 10, spring - 10] },
    { text: 'FRAME', at: [cx - W / 2 - 20, 300] },
  ], cx - W / 2 - 20)
  return finish(meta('muqarnas', 'Muqarnas', 'Honeycomb vaulting of tiered niches', 'ELEVATION', 'DEC-11',
    'Elevation of a muqarnas hood: rows of small pointed niche-cells, each tier corbelled out over the one below with pendants at the steps, rising to a single crown cell, so a square frame is roofed by a cascade of tiny vaults.', 30, 'units (indicative)'), L, B, defs)
}

function volute(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const eye: Pt = [360, 400]
  const e = 16
  // twelve-centre spiral: quarter arcs whose centres step inward
  const R0 = 140
  const steps = Array.from({ length: 12 }, (_, k) => (130 / 6.5) * (1 - k / 12))
  const centres: Pt[] = []
  let c: Pt = [0, 0]
  let R = R0
  let th = -Math.PI / 2
  const arcs: Array<{ c: Pt; R: number; a0: number }> = []
  for (let k = 0; k < 12; k++) {
    arcs.push({ c, R, a0: th })
    centres.push(c)
    const u: Pt = [Math.cos(th + Math.PI / 2), Math.sin(th + Math.PI / 2)]
    const s = k < 11 ? steps[k + 1] : 0
    c = [c[0] + u[0] * s, c[1] + u[1] * s]
    R -= s
    th += Math.PI / 2
  }
  // translate so the last centre sits at the eye
  const last = centres[centres.length - 1]
  const T = (p: Pt): Pt => [p[0] - last[0] + eye[0], p[1] - last[1] + eye[1]]
  const spiral = (inset: number) => {
    let d = ''
    for (const [i, a] of arcs.entries()) {
      const r = a.R - inset
      if (r <= e) break
      const p0 = T([a.c[0] + r * Math.cos(a.a0), a.c[1] + r * Math.sin(a.a0)])
      const p1 = T([a.c[0] + r * Math.cos(a.a0 + Math.PI / 2), a.c[1] + r * Math.sin(a.a0 + Math.PI / 2)])
      d += `${i ? '' : `M${f(p0[0])} ${f(p0[1])}`}A${f(r)} ${f(r)} 0 0 1 ${f(p1[0])} ${f(p1[1])}`
    }
    return d
  }
  L.profile.push(el(spiral(0)))
  L.fine.push(el(spiral(14)))
  L.profile.push(circle(eye, e))
  const top = T([0, -R0])
  // canalis running to the other volute, abacus above
  L.profile.push(line(top, [570, top[1]]), line([T([0, -R0 + 14])[0], top[1] + 14], [570, top[1] + 14]))
  L.profile.push(el(path(rect(top[0] - 40, top[1] - 22, 610 - top[0], 22), true)))
  // construction: cathetus, horizontal through the eye, centres
  L.center.push(line([eye[0], top[1] - 30], [eye[0], eye[1] + 150]), line([eye[0] - 150, eye[1]], [eye[0] + 150, eye[1]]))
  centres.forEach((p, i) => {
    const q = T(p)
    L.fine.push(circle(q, 1.4, 'class="solid"'))
    if (i < 4 || i === 11) L.notes.push(text(q[0] + (i % 2 ? 3 : -9), q[1] + (i < 2 ? -3 : 9), String(i + 1), 'class="t-small"'))
  })
  L.fine.push(el(path([T(centres[0]), T(centres[1]), T(centres[2]), T(centres[3]), T(centres[4])])))
  B.add([eye[0] - 150, top[1] - 30], [570, eye[1] + 150])
  L.dims.push(vDim(540, top[1], eye[1], 'TO EYE', 520))
  callouts(L, [
    { text: 'ABACUS', at: [top[0] - 40, top[1] - 11] },
    { text: 'CANALIS', at: [top[0] + 60, top[1] + 7] },
    { text: 'CATHETUS', at: [eye[0], top[1] + 40] },
    { text: 'OUTER SPIRAL', at: [eye[0] - 118, eye[1] + 20] },
    { text: 'FILLET (INNER SPIRAL)', at: [eye[0] - 102, eye[1] - 10] },
    { text: 'CENTRES 1–12', at: T(centres[0]) },
    { text: 'EYE', at: [eye[0] - e, eye[1] + 6] },
  ], eye[0] - 150)
  return finish(meta('volute', 'Volute', 'Spiral scroll of the Ionic capital', 'CONSTRUCTION', 'DEC-12',
    'Geometric construction of an Ionic volute: twelve quarter-circle arcs, each struck from a centre a little closer to the eye than the last, wind a continuous spiral from the abacus down into the eye; a second spiral inside forms the fillet.', 40, 'units (indicative)',
    'Construction after Vignola, Regola delli cinque ordini d\'architettura (1562), twelve-centre method (public domain). Redrawn by Project Exodus.'), L, B)
}

function cartouche(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [380, 370]
  // oval field with inscription lines
  L.profile.push(`<ellipse cx="${c[0]}" cy="${c[1]}" rx="86" ry="112"/>`, `<ellipse cx="${c[0]}" cy="${c[1]}" rx="76" ry="102"/>`)
  for (const dy of [-30, -10, 10, 30]) L.fine.push(line([c[0] - 50 + Math.abs(dy) * 0.4, c[1] + dy], [c[0] + 50 - Math.abs(dy) * 0.4, c[1] + dy]))
  // scrolled (strapwork) frame: mirrored quarter with curled edge
  const q = 'M0 -124C40 -124 92 -110 110 -70C118 -50 104 -36 92 -44C80 -52 92 -66 100 -60M110 -70C130 -40 132 -10 120 0'
  mirrored(L, 'profile', q, c[0], c[1])
  const q2 = 'M0 -136C48 -136 106 -118 124 -74M124 -74C146 -36 146 -8 132 0'
  mirrored(L, 'fine', q2, c[0], c[1])
  // shell crest
  const sy = c[1] - 136
  L.profile.push(el(`M${c[0] - 46} ${sy}Q${c[0] - 40} ${sy - 56} ${c[0]} ${sy - 62}Q${c[0] + 40} ${sy - 56} ${c[0] + 46} ${sy}Z`, PAPER))
  for (let k = -3; k <= 3; k++) L.fine.push(line([c[0] + k * 4, sy - 4], [c[0] + k * 12, sy - 54 + Math.abs(k) * 4]))
  // pendant drop below
  const py = c[1] + 136
  L.profile.push(el(`M${c[0] - 20} ${py}Q${c[0]} ${py + 50} ${c[0]} ${py + 70}Q${c[0]} ${py + 50} ${c[0] + 20} ${py}`), circle([c[0], py + 76], 6))
  // side garlands
  for (const s of [-1, 1]) L.fine.push(el(`M${c[0] + s * 120} ${c[1] - 40}q${s * 40} 40 ${s * 20} 110q${s * -6} 14 ${s * -20} 6`))
  B.add([c[0] - 160, sy - 62], [c[0] + 160, py + 82])
  L.dims.push(vDim(c[0] + 190, c[1] + 112, c[1] - 112, 'FIELD', c[0] + 90))
  callouts(L, [
    { text: 'SHELL CREST', at: [c[0] - 30, sy - 30] },
    { text: 'SCROLLED FRAME', at: [c[0] - 100, c[1] - 76] },
    { text: 'CURLED EDGE', at: [c[0] - 96, c[1] - 56] },
    { text: 'OVAL FIELD (INSCRIPTION)', at: [c[0] - 46, c[1] - 10] },
    { text: 'GARLAND', at: [c[0] - 140, c[1] + 20] },
    { text: 'PENDANT DROP', at: [c[0] - 6, py + 76] },
  ], c[0] - 160)
  return finish(meta('cartouche', 'Cartouche', 'Ornamental frame for an inscription or arms', 'ELEVATION', 'DEC-13',
    'Elevation of a Baroque cartouche: an oval field for an inscription or coat of arms, surrounded by a frame whose edges curl and scroll like parchment, topped by a shell and hung with garlands and a pendant drop.', 40, 'units (indicative)'), L, B)
}

function arabesque(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [380, 360]
  const h = 160
  L.profile.push(el(path(rect(c[0] - h, c[1] - h, 2 * h, 2 * h), true)), el(path(rect(c[0] - h + 10, c[1] - h + 10, 2 * h - 20, 2 * h - 20), true)))
  // one quadrant of scrolling stems, spirals and split leaves, mirrored four ways
  const stem = 'M0 0C40 0 60 40 40 70C25 95 60 124 92 102C122 82 112 50 86 56C70 60 72 78 86 76'
  const branch = 'M40 70C60 58 92 28 122 40C142 48 138 74 120 70C110 68 112 56 120 58'
  const leaf = 'M92 102Q112 122 138 128Q118 112 116 96M92 102Q104 126 106 146Q92 128 92 102'
  const bud = 'M122 40Q130 20 146 14Q136 30 140 44M60 40Q70 16 90 10Q80 26 84 36'
  for (const d of [stem, branch]) mirrored(L, 'profile', d, c[0], c[1])
  for (const d of [leaf, bud]) mirrored(L, 'fine', d, c[0], c[1])
  L.profile.push(circle(c, 22, PAPER))
  rotated(L, 'fine', 'M0 -6L5 -20L0 -22L-5 -20Z', c, 8)
  L.center.push(line([c[0] - h, c[1]], [c[0] + h, c[1]]), line([c[0], c[1] - h], [c[0], c[1] + h]))
  B.add([c[0] - h, c[1] - h], [c[0] + h, c[1] + h])
  L.dims.push(hDim(c[1] + h + 26, c[0] - h, c[0] + h, 'ONE TILE / REPEAT'))
  L.notes.push(text(c[0] + h, c[1] + h + 54, 'REPEATS EDGE TO EDGE WITHOUT END', 'class="t-small t-accent" text-anchor="end"'))
  callouts(L, [
    { text: 'BORDER', at: [c[0] - h, c[1] - 120] },
    { text: 'SPIRAL TERMINAL', at: [c[0] - 80, c[1] - 66] },
    { text: 'SCROLLING STEM', at: [c[0] - 40, c[1] - 70] },
    { text: 'SPLIT LEAF (RUMI)', at: [c[0] - 120, c[1] - 120] },
    { text: 'CENTRE MEDALLION', at: [c[0] - 22, c[1]] },
    { text: 'MIRROR AXIS', at: [c[0] - h + 20, c[1]] },
  ], c[0] - h)
  return finish(meta('arabesque', 'Arabesque', 'Endless scrolling vegetal ornament', 'ELEVATION', 'DEC-14',
    'Elevation of an arabesque panel: stems scroll out from a central medallion, branching and ending in spirals and split leaves; the quarter-design is mirrored on both axes so the panel can repeat edge to edge without end.', 40, 'units (indicative)'), L, B)
}

function iznik(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const t = 140
  const x0 = 240
  const y0 = 150
  const c: Pt = [x0 + t, y0 + t]
  // four tiles; each carries a quarter of the medallion, so they meet to form one
  L.profile.push(el(path(rect(x0 - 24, y0 - 24, 2 * t + 48, 2 * t + 48), true)), el(path(rect(x0, y0, 2 * t, 2 * t), true)))
  L.fine.push(line([c[0], y0], [c[0], y0 + 2 * t]), line([x0, c[1]], [x0 + 2 * t, c[1]]))
  // per-tile quarter motif drawn about the shared corner
  const saz = 'M8 8C40 20 90 30 128 96C100 70 60 52 14 40'
  const tulip = 'M30 60C34 90 40 110 60 126M60 126C50 120 46 106 50 96C56 104 60 110 60 126C62 108 66 100 72 94C76 108 72 120 60 126'
  const carn = 'M90 30C100 40 104 52 106 64M106 64C96 64 90 58 92 50M106 64C116 62 120 54 118 46M106 64C108 54 106 46 102 40'
  const rose = 'M120 120m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0M120 112v16M112 120h16'
  for (const d of [saz]) mirrored(L, 'profile', d, c[0], c[1])
  for (const d of [tulip, carn, rose]) mirrored(L, 'fine', d, c[0], c[1])
  L.profile.push(circle(c, 18, PAPER), circle(c, 8))
  // border tiles: cloud bands (chi) and dots
  let border = ''
  for (let x = x0; x < x0 + 2 * t; x += 28) border += `M${x + 2} ${y0 - 12}q6 -8 12 0q6 8 12 0M${x + 2} ${y0 + 2 * t + 12}q6 -8 12 0q6 8 12 0`
  for (let y = y0; y < y0 + 2 * t; y += 28) border += `M${x0 - 12} ${y + 2}q-8 6 0 12q8 6 0 12M${x0 + 2 * t + 12} ${y + 2}q-8 6 0 12q8 6 0 12`
  L.fine.push(el(border))
  B.add([x0 - 24, y0 - 24], [x0 + 2 * t + 24, y0 + 2 * t + 24])
  L.dims.push(hDim(y0 + 2 * t + 50, x0, x0 + t, 'ONE TILE'))
  L.notes.push(text(x0 + 2 * t + 24, y0 + 2 * t + 78, 'FOUR TILES COMPLETE ONE MEDALLION', 'class="t-small t-accent" text-anchor="end"'))
  callouts(L, [
    { text: 'BORDER TILE (CLOUD BAND)', at: [x0 - 12, y0 + 30] },
    { text: 'SAZ LEAF', at: [x0 + 30, y0 + 70] },
    { text: 'CARNATION', at: [x0 + 46, y0 + 100] },
    { text: 'TULIP', at: [x0 + 82, y0 + 150] },
    { text: 'TILE JOINT', at: [x0, c[1]] },
    { text: 'ROSETTE', at: [x0 + 2 * t - 130, y0 + 2 * t - 20] },
  ], x0 - 24)
  return finish(meta('iznik-tiles', 'Iznik Tiles', 'Ottoman glazed tiles with floral designs', 'ELEVATION', 'DEC-15',
    'Elevation of a four-tile Iznik panel: serrated saz leaves, tulips and carnations are drawn so that each tile carries a quarter of a medallion that completes where four tiles meet, framed by border tiles with cloud bands.', 35, 'units (indicative)',
    'After 16th-century Iznik tile panels, e.g. the Rüstem Pasha Mosque, Istanbul. Generic; not a copy of a specific panel. Original drawing by Project Exodus.'), L, B)
}

function grotesque(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const top = 120
  const bot = 600
  const hw = 80
  L.profile.push(el(path(rect(cx - hw, top, 2 * hw, bot - top), true)), el(path(rect(cx - hw + 10, top + 10, 2 * hw - 20, bot - top - 20), true)))
  // candelabrum axis: vase, knops, dishes
  L.profile.push(el(`M${cx - 30} ${bot - 20}h60l-8 -10q14 -30 -6 -56h-32q-20 26 -6 56Z`, PAPER))
  L.fine.push(el(`M${cx - 30} ${bot - 66}q30 -14 60 0`))
  L.profile.push(line([cx, bot - 76], [cx, top + 60]))
  for (const y of [470, 380, 290, 210]) L.profile.push(`<ellipse cx="${cx}" cy="${y}" rx="${y === 380 ? 26 : 12}" ry="${y === 380 ? 6 : 8}"/>`)
  // mask at mid height
  L.profile.push(circle([cx, 330], 22, PAPER))
  L.fine.push(circle([cx - 8, 326], 3), circle([cx + 8, 326], 3), el(`M${cx - 8} 340q8 6 16 0M${cx} 328v6`), el(`M${cx - 22} 330q-14 -14 -8 -30M${cx + 22} 330q14 -14 8 -30`))
  // mirrored scrolls and hybrid creatures (sphinx-like: head, wing, scroll body)
  const scrollLow = `M0 -60C30 -50 60 -60 60 -90C60 -110 40 -112 36 -98C34 -88 46 -86 48 -94`
  const creature = `M0 -170C20 -170 34 -180 44 -196M44 -196m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0M40 -188C56 -176 66 -150 58 -130C54 -120 44 -122 44 -132M30 -178C46 -200 66 -206 70 -226`
  const swag = `M0 -300Q34 -270 66 -300M66 -300v16`
  for (const d of [scrollLow, creature, swag]) mirrored(L, 'profile', d, cx, bot - 20, [[1, 1], [-1, 1]])
  // bird at the top
  L.fine.push(el(`M${cx} ${top + 56}c-10 -10 -30 -12 -40 -4c14 0 24 6 30 12M${cx} ${top + 56}c10 -10 30 -12 40 -4c-14 0 -24 6 -30 12`), circle([cx, top + 44], 5))
  B.add([cx - hw, top], [cx + hw, bot])
  L.dims.push(hDim(bot + 22, cx - hw, cx + hw, 'PILASTER'))
  callouts(L, [
    { text: 'BIRD', at: [cx - 40, top + 52] },
    { text: 'HYBRID CREATURE', at: [cx - 44, bot - 20 - 196] },
    { text: 'MASK', at: [cx - 22, 330] },
    { text: 'CANDELABRUM AXIS', at: [cx - 2, 420] },
    { text: 'SCROLL', at: [cx - 60, bot - 110] },
    { text: 'VASE', at: [cx - 26, bot - 40] },
    { text: 'PILASTER FRAME', at: [cx - hw, 250] },
  ], cx - hw)
  return finish(meta('grotesque', 'Grotesque', 'Fanciful ornament of hybrid creatures and scrolls', 'ELEVATION', 'DEC-16',
    'Elevation of a carved pilaster panel of Renaissance grotesque ornament: a candelabrum rising from a vase, flanked symmetrically by scrolls, hybrid winged creatures and swags, with a mask at its centre and a bird at the top.', 30, 'units (indicative)',
    'After Renaissance grotesque pilasters derived from the painted rooms of the Domus Aurea, Rome. Generic; not a copy. Original drawing by Project Exodus.'), L, B)
}

function plateresque(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const sill = 520
  const head = 330
  const ow = 110
  // window opening with moulded surround
  L.profile.push(el(path(rect(cx - ow / 2, head, ow, sill - head), true)))
  L.fine.push(el(path(rect(cx - ow / 2 - 8, head - 8, ow + 16, sill - head + 8), true)))
  // candelabra (baluster) columns either side, on pedestals
  for (const s of [-1, 1]) {
    const x = cx + s * (ow / 2 + 34)
    L.profile.push(el(path(rect(x - 16, sill, 32, 50), true)))
    L.fine.push(el(path(rect(x - 10, sill + 8, 20, 34), true)))
    L.profile.push(el(`M${x - 8} ${sill}q-10 -30 -2 -50q-8 -20 0 -40q-10 -24 -2 -50q-4 -14 2 -32h20q6 18 2 32q8 26 -2 50q8 20 0 40q8 20 -2 50Z`, PAPER))
    for (const y of [sill - 50, sill - 90, sill - 140]) L.fine.push(line([x - 10, y], [x + 10, y]))
    L.profile.push(el(path(rect(x - 12, head - 14, 24, 10), true)))
  }
  // entablature with a frieze of scrolls
  const ex0 = cx - ow / 2 - 60
  const ex1 = cx + ow / 2 + 60
  L.profile.push(el(path(rect(ex0, head - 54, ex1 - ex0, 40), true)), el(path(rect(ex0 - 6, head - 64, ex1 - ex0 + 12, 10), true)))
  let fr = ''
  for (let x = ex0 + 10; x < ex1 - 20; x += 30) fr += `M${x} ${head - 34}c6 -12 18 -12 20 -2c2 8 -8 10 -10 4`
  L.fine.push(el(fr))
  // medallion with a bust, flanked by scrolls; cresting candelabra
  const my = head - 120
  L.profile.push(circle([cx, my], 40, PAPER), circle([cx, my], 32))
  L.fine.push(el(`M${cx - 10} ${my + 26}q-4 -18 4 -24q-10 -6 -6 -18q8 -12 18 -2q4 6 0 12l6 6q-4 4 -6 4q6 8 4 22`))
  for (const s of [-1, 1]) L.profile.push(el(`M${cx + s * 40} ${my + 10}c${s * 30} 0 ${s * 60} 20 ${s * 80} 46c${s * -16} -8 ${s * -26} 0 ${s * -20} 10`))
  for (const s of [-1, 0, 1]) {
    const x = cx + s * 110
    const yb = s === 0 ? my - 40 : head - 64
    L.profile.push(el(`M${x - 6} ${yb}q-6 -16 6 -26q12 10 6 26Z`), line([x, yb - 26], [x, yb - 44]))
  }
  // heraldic shield below the sill
  L.profile.push(el(`M${cx - 26} ${sill + 14}h52v26q0 24 -26 34q-26 -10 -26 -34Z`))
  L.fine.push(line([cx, sill + 14], [cx, sill + 74]), line([cx - 26, sill + 40], [cx + 26, sill + 40]))
  B.add([ex0 - 6, my - 84], [ex1 + 6, sill + 74])
  callouts(L, [
    { text: 'CRESTING FINIAL', at: [cx - 116, head - 90] },
    { text: 'MEDALLION WITH BUST', at: [cx - 40, my] },
    { text: 'SCROLL', at: [cx - 100, my + 46] },
    { text: 'CORNICE', at: [ex0 - 6, head - 59] },
    { text: 'FRIEZE', at: [ex0, head - 34] },
    { text: 'BALUSTER COLUMN', at: [cx - ow / 2 - 44, 430] },
    { text: 'WINDOW', at: [cx - ow / 2, 470] },
    { text: 'HERALDIC SHIELD', at: [cx - 26, sill + 40] },
  ], ex0 - 6)
  return finish(meta('plateresque-ornament', 'Plateresque Ornament', 'Silversmith-fine Spanish Renaissance relief', 'ELEVATION', 'DEC-17',
    'Elevation of a Plateresque window surround: baluster-shaped candelabra columns on pedestals, a frieze of scrolls, a crowning medallion with a bust between scrolls and cresting finials, and a coat of arms below the sill, all in shallow, densely worked relief.', 30, 'units (indicative)',
    'After Spanish Plateresque façades such as the University of Salamanca (c. 1529). Generic; not a survey. Original drawing by Project Exodus.'), L, B)
}

function wildMen(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 370
  const foot = 540
  // corbel / pedestal
  L.profile.push(el(`M${cx - 70} ${foot}h140v14h-12q-10 30 -58 40q-48 -10 -58 -40h-12Z`))
  L.fine.push(el(`M${cx - 40} ${foot + 24}q40 30 80 0`))
  // figure: legs, torso, arms, head with beard; covered in hair tufts
  const body = `M${cx - 30} ${foot}L${cx - 26} ${foot - 110}L${cx - 36} ${foot - 230}Q${cx} ${foot - 250} ${cx + 36} ${foot - 230}L${cx + 26} ${foot - 110}L${cx + 30} ${foot}H${cx + 6}L${cx} ${foot - 100}L${cx - 6} ${foot}Z`
  L.profile.push(el(body, PAPER))
  let tufts = ''
  for (let y = foot - 20; y > foot - 230; y -= 14) for (let x = cx - 28; x <= cx + 28; x += 12) if (Math.abs(x - cx) > 4 || y < foot - 110) tufts += `M${x - 3} ${y}l3 -6l3 6`
  L.fine.push(el(tufts))
  L.profile.push(circle([cx, foot - 262], 20, PAPER))
  L.fine.push(el(`M${cx - 16} ${foot - 254}q16 40 32 0`), circle([cx - 7, foot - 266], 2), circle([cx + 7, foot - 266], 2), el(`M${cx - 20} ${foot - 270}q20 -26 40 0`))
  // club over the right shoulder, raised
  L.profile.push(el(`M${cx + 30} ${foot - 200}L${cx + 60} ${foot - 230}`), el(`M${cx + 52} ${foot - 226}L${cx + 96} ${foot - 330}q10 -6 14 6L${cx + 66} ${foot - 220}Z`, PAPER))
  for (const [dx, dy] of [[78, -280], [88, -306], [70, -256]]) L.fine.push(el(`M${cx + dx} ${foot + dy}l6 -2`))
  // left arm holding a heraldic shield
  L.profile.push(el(`M${cx - 30} ${foot - 210}L${cx - 64} ${foot - 160}`))
  L.profile.push(el(`M${cx - 130} ${foot - 210}h80v50q0 40 -40 56q-40 -16 -40 -56Z`, PAPER))
  L.fine.push(el(`M${cx - 90} ${foot - 200}v80M${cx - 120} ${foot - 176}h60`))
  B.add([cx - 130, foot - 336], [cx + 110, foot + 54])
  L.dims.push(vDim(cx + 140, foot, foot - 282, 'FIGURE', cx + 40))
  callouts(L, [
    { text: 'RAISED CLUB', at: [cx + 80, foot - 300] },
    { text: 'BEARDED HEAD', at: [cx - 20, foot - 262] },
    { text: 'HERALDIC SHIELD', at: [cx - 130, foot - 186] },
    { text: 'SHAGGY HAIR (TUFTS)', at: [cx - 28, foot - 120] },
    { text: 'CORBEL', at: [cx - 70, foot + 7] },
  ], cx - 130)
  return finish(meta('wild-men-savage-men', 'Wild Men (Savage Men)', 'Hairy club-bearing figures guarding arms', 'ELEVATION', 'DEC-18',
    'Elevation of a carved wild man, a heraldic guardian of late-Gothic Spanish and German façades: a figure covered in shaggy tufts of hair, standing on a corbel, brandishing a club and holding a coat of arms.', 30, 'units (indicative)',
    'After the wild-men supporters on the façade of the Colegio de San Gregorio, Valladolid (c. 1496). Simplified; not a copy. Original drawing by Project Exodus.'), L, B)
}

function astwerk(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const floor = 580
  const ow = 140
  // door opening
  L.fine.push(el(path(rect(cx - ow / 2, 400, ow, floor - 400), true)))
  // trunks (jambs), branches arching and crossing at the apex, lopped stubs
  const xl = cx - ow / 2 - 14
  const xr = cx + ow / 2 + 14
  tube(L, `M${xl} ${floor}V400`, 16)
  tube(L, `M${xr} ${floor}V400`, 16)
  tube(L, `M${xl} 400C${xl} 300 ${cx + 40} 260 ${cx + 110} 200`, 12)
  tube(L, `M${xr} 400C${xr} 300 ${cx - 40} 260 ${cx - 110} 200`, 12)
  tube(L, `M${xl} 400C${xl} 340 ${cx - 60} 300 ${cx - 20} 286`, 10)
  tube(L, `M${xr} 400C${xr} 340 ${cx + 60} 300 ${cx + 20} 286`, 10)
  tube(L, `M${xl} 420C${xl - 30} 380 ${xl - 50} 340 ${xl - 44} 300`, 9)
  tube(L, `M${xr} 420C${xr + 30} 380 ${xr + 50} 340 ${xr + 44} 300`, 9)
  // lopped stubs (cut branch ends)
  for (const [x, y, s] of [[cx + 110, 200, 1], [cx - 110, 200, -1], [cx - 20, 286, 1], [cx + 20, 286, -1], [xl - 44, 300, -1], [xr + 44, 300, 1]] as const) L.profile.push(`<ellipse cx="${x}" cy="${y}" rx="${s ? 5 : 5}" ry="4" style="fill: var(--_paper)"/>`)
  for (const [x, y, s] of [[xl, 470, -1], [xr, 500, 1], [xl, 520, -1]] as const) {
    tube(L, `M${x} ${y}l${s * 18} -12`, 7)
    L.profile.push(`<ellipse cx="${x + s * 18}" cy="${y - 12}" rx="3.5" ry="3" style="fill: var(--_paper)"/>`)
  }
  // bark texture
  let bark = ''
  for (let y = floor - 10; y > 410; y -= 16) bark += `M${xl - 3} ${y}q3 -4 6 0M${xr - 3} ${y - 8}q3 -4 6 0`
  L.fine.push(el(bark))
  L.profile.push(line([cx - 190, floor], [cx + 190, floor]))
  B.add([cx - 190, 190], [cx + 190, floor])
  L.dims.push(hDim(floor + 22, cx - ow / 2, cx + ow / 2, 'DOOR'))
  callouts(L, [
    { text: 'LOPPED STUB', at: [cx - 115, 200] },
    { text: 'CROSSING BRANCHES', at: [cx - 20, 250] },
    { text: 'INTERLACE (OVER/UNDER)', at: [cx - 40, 286] },
    { text: 'OUTWARD BRANCH', at: [xl - 46, 340] },
    { text: 'TRUNK (JAMB)', at: [xl - 8, 450] },
    { text: 'BARK TEXTURE', at: [xl - 3, 520] },
  ], cx - 190)
  return finish(meta('astwerk-branches-work', 'Astwerk (Branch-work)', 'Late-Gothic tracery carved as tree branches', 'ELEVATION', 'DEC-19',
    'Elevation of a doorway framed in late-Gothic branch-work: the jambs are tree trunks with bark, whose branches arch over the opening and interlace at the top, ending in lopped stubs instead of conventional tracery.', 30, 'units (indicative)'), L, B)
}

// ---------------------------------------------------------------------------
// Modern and Art Nouveau ornament
// ---------------------------------------------------------------------------
function sunburst(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const spring = 300
  const R = 130
  const floor = 590
  // door frame and fanlight
  L.profile.push(el(`M${cx - R - 14} ${floor}V${spring}A${R + 14} ${R + 14} 0 0 1 ${cx + R + 14} ${spring}V${floor}`))
  L.profile.push(el(`M${cx - R} ${spring}A${R} ${R} 0 0 1 ${cx + R} ${spring}Z`))
  // sun disc and alternating stepped rays
  L.profile.push(el(`M${cx - 30} ${spring}A30 30 0 0 1 ${cx + 30} ${spring}`))
  const n = 15
  for (let i = 0; i <= n; i++) {
    const a = Math.PI + (i / n) * Math.PI
    const long = i % 2 === 0
    const r1 = long ? R - 4 : R - 34
    const hw = long ? 0.05 : 0.035
    L.fine.push(el(path([[cx + 34 * Math.cos(a - hw), spring + 34 * Math.sin(a - hw)], [cx + r1 * Math.cos(a), spring + r1 * Math.sin(a)], [cx + 34 * Math.cos(a + hw), spring + 34 * Math.sin(a + hw)]])))
  }
  for (const r of [54, 74]) L.fine.push(el(`M${cx - r} ${spring}A${r} ${r} 0 0 1 ${cx + r} ${spring}`, 'stroke-dasharray="2 3"'))
  // transom bar, door leaves with chevrons
  L.profile.push(el(path(rect(cx - R, spring, 2 * R, 10), true)))
  for (const s of [-1, 1]) {
    const x0 = s < 0 ? cx - R : cx
    L.profile.push(el(path(rect(x0 + 4, spring + 14, R - 8, floor - spring - 14), true)))
    let ch = ''
    for (let y = spring + 60; y < floor - 40; y += 30) ch += `M${x0 + 20} ${y}l${(R - 40) / 2} -16l${(R - 40) / 2} 16`
    L.fine.push(el(ch))
  }
  L.profile.push(line([cx - R - 60, floor], [cx + R + 60, floor]))
  B.add([cx - R - 60, spring - R - 14], [cx + R + 60, floor])
  L.dims.push(hDim(floor + 22, cx - R, cx + R, 'OPENING'))
  callouts(L, [
    { text: 'LONG RAY', at: [cx - 60, spring - 100] },
    { text: 'SHORT RAY', at: [cx - 80, spring - 40] },
    { text: 'SUN DISC', at: [cx - 30, spring - 8] },
    { text: 'FANLIGHT FRAME', at: [cx - R - 14, spring - 40] },
    { text: 'TRANSOM BAR', at: [cx - R, spring + 5] },
    { text: 'CHEVRON DOOR LEAF', at: [cx - R + 20, 440] },
  ], cx - R - 60)
  return finish(meta('sunburst-pattern', 'Sunburst Pattern', 'Rays radiating from a half sun', 'ELEVATION', 'DEC-20',
    'Elevation of an Art Deco doorway whose fanlight is a sunburst: long and short rays alternate around a half-disc sun, above door leaves patterned with stacked chevrons.', 30, 'units (indicative)'), L, B)
}

function floralIron(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 210
  const x1 = 550
  const top = 260
  const bot = 500
  // posts, top rail (handrail), bottom rail
  L.profile.push(el(path(rect(x0 - 8, top - 10, x1 - x0 + 16, 10), true)), line([x0, bot], [x1, bot]), line([x0, bot + 6], [x1, bot + 6]))
  const mid = (x0 + x1) / 2
  for (const x of [x0, mid, x1]) L.profile.push(el(path(rect(x - 5, top, 10, bot - top + 6), true)))
  // each panel: two stems rising from a central root, whiplash curves, flowers and leaves (mirrored)
  const panel = 'M0 0C0 -40 -10 -80 -40 -110C-60 -130 -70 -160 -50 -180M0 0C6 -60 30 -100 60 -140C70 -152 66 -170 52 -170M-40 -110C-60 -100 -74 -80 -72 -60'
  const flowers = 'M-50 -180c-12 -8 -12 -24 0 -30c12 6 12 22 0 30M-50 -180c-16 2 -24 -8 -22 -18M-50 -180c16 2 24 -8 22 -18M52 -170c-6 -14 4 -26 14 -22c4 10 -4 22 -14 22M-72 -60c-10 -10 -4 -26 8 -24c4 10 -2 20 -8 24'
  const leaves = 'M-20 -60q-24 -6 -30 -26q22 4 30 26M30 -90q20 -16 40 -10q-14 18 -40 10'
  for (const pcx of [(x0 + mid) / 2, (mid + x1) / 2]) {
    for (const [d, layer] of [[panel, 'profile'], [flowers, 'profile'], [leaves, 'fine']] as const) mirrored(L, layer, d, pcx, bot, [[1, 1], [-1, 1]])
    L.fine.push(el(path(rect(pcx - 6, bot - 14, 12, 8), true)))
  }
  B.add([x0 - 8, top - 10], [x1 + 8, bot + 6])
  L.dims.push(hDim(bot + 30, x0, mid, 'PANEL'))
  L.dims.push(vDim(x1 + 22, bot + 6, top - 10, 'RAIL HEIGHT', x1 + 8))
  callouts(L, [
    { text: 'HANDRAIL', at: [x0 - 8, top - 5] },
    { text: 'FLOWER HEAD', at: [(x0 + mid) / 2 - 56, bot - 196] },
    { text: 'WHIPLASH STEM', at: [(x0 + mid) / 2 - 42, bot - 110] },
    { text: 'FORGED LEAF', at: [(x0 + mid) / 2 - 40, bot - 76] },
    { text: 'COLLAR (JOINT)', at: [(x0 + mid) / 2 - 6, bot - 10] },
    { text: 'POST', at: [x0 - 5, 400] },
    { text: 'BOTTOM RAIL', at: [x0, bot + 3] },
  ], x0 - 8)
  return finish(meta('floral-ironwork', 'Floral Ironwork', 'Wrought-iron railing of stems and flowers', 'ELEVATION', 'DEC-21',
    'Elevation of an Art Nouveau balcony railing: within a frame of posts and rails, forged stems rise from collared roots in whiplash curves, branching into leaves and flower heads, each panel mirrored about its centre.', 30, 'units (indicative)'), L, B)
}

function organic(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [380, 350]
  const h = 160
  L.profile.push(el(path(rect(c[0] - h, c[1] - h, 2 * h, 2 * h), true)))
  // geometric seed: square, rotated square and circle, as construction lines
  L.center.push(el(path(rect(c[0] - 60, c[1] - 60, 120, 120), true)), el(path([[c[0], c[1] - 85], [c[0] + 85, c[1]], [c[0], c[1] + 85], [c[0] - 85, c[1]]], true)))
  L.center.push(line([c[0] - h, c[1] - h], [c[0] + h, c[1] + h]), line([c[0] - h, c[1] + h], [c[0] + h, c[1] - h]))
  // foliage grows out along the diagonals from the seed, mirrored four ways
  const grow = 'M20 20C40 30 60 40 70 70C78 92 98 104 120 100C138 96 144 116 128 126C116 132 108 120 116 112M70 70C58 92 64 116 86 132C96 140 92 154 80 150M20 20C34 10 48 -2 74 6C92 12 108 2 112 -12'
  const leaflets = 'M98 104q4 -20 22 -24q-2 18 -22 24M64 116q-18 -6 -20 -24q18 2 20 24M90 8q8 -18 26 -18q-8 16 -26 18M40 34q-6 -18 4 -30q8 14 -4 30'
  mirrored(L, 'profile', grow, c[0], c[1])
  mirrored(L, 'fine', leaflets, c[0], c[1])
  mirrored(L, 'profile', grow, c[0], c[1], undefined, 'transform="rotate(90)"')
  L.profile.push(circle(c, 24, PAPER), circle(c, 12))
  rotated(L, 'fine', 'M0 -12L0 -24', c, 12)
  B.add([c[0] - h, c[1] - h], [c[0] + h, c[1] + h])
  L.dims.push(hDim(c[1] + h + 26, c[0] - h, c[0] + h, 'PANEL'))
  callouts(L, [
    { text: 'FRAME', at: [c[0] - h, c[1] - 130] },
    { text: 'ROTATED SQUARE (SEED)', at: [c[0] - 85, c[1]] },
    { text: 'SQUARE (SEED)', at: [c[0] - 60, c[1] - 40] },
    { text: 'DIAGONAL AXIS', at: [c[0] - 140, c[1] - 140] },
    { text: 'FOLIAGE GROWING OUT', at: [c[0] - 110, c[1] + 100] },
    { text: 'GERM (CENTRE)', at: [c[0] - 24, c[1] + 6] },
  ], c[0] - h)
  return finish(meta('organic-ornament', 'Organic Ornament', 'Foliage growing out of a geometric seed', 'ELEVATION', 'DEC-22',
    'Elevation of an ornamental panel built the way Louis Sullivan taught: a simple geometric seed of squares and axes at the centre, from which plant-like growth spreads outward along the diagonals until it fills the frame.', 40, 'units (indicative)',
    'After Louis Sullivan, A System of Architectural Ornament (1924). Original drawing by Project Exodus.'), L, B)
}

function whiplash(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  // the lash: a long sweep that tightens into a recurve
  const p0: Pt = [220, 560]
  const c1: Pt = [260, 300]
  const c2: Pt = [560, 420]
  const p1: Pt = [470, 220]
  const d = `M${p0[0]} ${p0[1]}C${c1[0]} ${c1[1]} ${c2[0]} ${c2[1]} ${p1[0]} ${p1[1]}C${p1[0] - 30} ${p1[1] - 40} ${p1[0] - 90} ${p1[1] - 20} ${p1[0] - 70} ${p1[1] + 20}C${p1[0] - 60} ${p1[1] + 40} ${p1[0] - 30} ${p1[1] + 30} ${p1[0] - 40} ${p1[1] + 10}`
  L.cut.push(el(d))
  // branching tendrils following the same rhythm
  const at = (t: number): Pt => {
    const u = 1 - t
    const k = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t]
    return [k[0] * p0[0] + k[1] * c1[0] + k[2] * c2[0] + k[3] * p1[0], k[0] * p0[1] + k[1] * c1[1] + k[2] * c2[1] + k[3] * p1[1]]
  }
  const [a, b, c] = [at(0.15), at(0.3), at(0.55)]
  L.profile.push(el(`M${f(b[0])} ${f(b[1])}C330 380 380 380 400 350C412 332 400 316 386 324`), el(`M${f(a[0])} ${f(a[1])}C290 450 316 440 326 418`), el(`M${f(c[0])} ${f(c[1])}C460 340 500 320 520 290C530 270 516 258 504 266`))
  // construction: control points and tangent lines
  L.center.push(line(p0, c1), line(c2, p1))
  for (const p of [c1, c2]) L.fine.push(circle(p, 4))
  L.fine.push(circle(p0, 3, 'class="solid"'), circle(p1, 3, 'class="solid"'))
  // application inset: an iron bracket under a beam using the same line
  const bx = 230
  const by = 150
  L.profile.push(el(path(rect(bx, by, 120, 12), true)), el(path(rect(bx, by + 12, 10, 100), true)))
  L.profile.push(el(`M${bx + 10} ${by + 108}C${bx + 20} ${by + 50} ${bx + 90} ${by + 70} ${bx + 110} ${by + 12}M${bx + 110} ${by + 12}c-8 10 -24 8 -20 -2`))
  L.notes.push(text(bx, by - 8, 'IN USE: IRON BRACKET', 'class="t-small"'))
  B.add([200, by - 18], [560, 570])
  callouts(L, [
    { text: 'TIGHT RECURVE (THE LASH)', at: [p1[0] - 70, p1[1] + 20] },
    { text: 'CONTROL POINT', at: [c1[0], c1[1]] },
    { text: 'LONG SWEEP', at: at(0.22) },
    { text: 'BRANCHING TENDRIL', at: [326, 418] },
    { text: 'START (ROOT)', at: [p0[0], p0[1]] },
  ], 200)
  return finish(meta('whiplash-curve', 'Whiplash Curve', 'Art Nouveau line that sweeps and snaps back', 'ELEVATION', 'DEC-23',
    'The whiplash curve drawn with its construction: a long, slowly bending sweep that suddenly tightens into a recurve like the crack of a whip, here as a Bézier curve with its control points, with branching tendrils and an iron bracket that uses the same line.', 40, 'units (indicative)',
    'After Victor Horta, Hôtel Tassel, Brussels (1893), and Hermann Obrist\'s "Whiplash" embroidery (c. 1895). Original drawing by Project Exodus.'), L, B)
}

export const DECORATIVE_SHEETS: Array<() => SheetSpec> = [
  cornice, dentil, eggDart, guilloche, zigzag, acanthus, rosette, boss, finial, gargoyle, muqarnas, volute,
  cartouche, arabesque, iznik, grotesque, plateresque, wildMen, astwerk, sunburst, floralIron, organic, whiplash,
]
