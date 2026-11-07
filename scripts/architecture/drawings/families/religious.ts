/**
 * Religious architecture.
 *
 * Towers, gateways, furnishings and shrines in ELEVATION (their silhouette is
 * the point); the nave and the rock-cut church in SECTION; the apse,
 * baptistery and qibla wall in PLAN (their meaning is orientation and
 * geometry); the transept in ISOMETRIC, since the crossing is inherently 3D.
 */
import { type Pt, type SheetSpec, f, path, el, vDim, hDim, text } from '../sheet'
import { newLayers, finish, hatched, circle, line, rect, ring, callouts, arrow, courses, Bounds, ORIGINAL, axo, face, addAxo, AXO_DEFS, type Layers, type P3 } from '../kit'

const ACCENT = 'style="stroke: var(--_accent)"'
const THIN = 'class="l-fine"'
const PAPER = 'style="fill: var(--_paper)"'
const meta = (id: string, title: string, subtitle: string, view: string, sheetNo: string, description: string, unitPx: number, unitName: string, source = ORIGINAL) =>
  ({ id, title, subtitle, view, sheetNo, description, source, scale: { unitPx, unitName, count: 4 } })

/** Pointed (two-centred) arch outline from springing y, closed at `bottom`. */
function pointed(x: number, spring: number, w: number, bottom: number, rise = w * 0.8) {
  return `M${f(x)} ${f(bottom)}V${f(spring)}Q${f(x)} ${f(spring - rise * 0.8)} ${f(x + w / 2)} ${f(spring - rise)}Q${f(x + w)} ${f(spring - rise * 0.8)} ${f(x + w)} ${f(spring)}V${f(bottom)}`
}
/** Round arch outline. */
function roundArch(x: number, spring: number, w: number, bottom: number) {
  return `M${f(x)} ${f(bottom)}V${f(spring)}A${f(w / 2)} ${f(w / 2)} 0 0 1 ${f(x + w)} ${f(spring)}V${f(bottom)}`
}
/** Bell in elevation, mouth at y. */
function bell(L: Layers, cx: number, y: number, w: number) {
  const h = w * 1.05
  L.profile.push(el(`M${f(cx - w / 2)} ${f(y)}C${f(cx - w * 0.36)} ${f(y - h * 0.25)} ${f(cx - w * 0.32)} ${f(y - h * 0.6)} ${f(cx - w * 0.3)} ${f(y - h * 0.82)}Q${f(cx)} ${f(y - h * 1.08)} ${f(cx + w * 0.3)} ${f(y - h * 0.82)}C${f(cx + w * 0.32)} ${f(y - h * 0.6)} ${f(cx + w * 0.36)} ${f(y - h * 0.25)} ${f(cx + w / 2)} ${f(y)}Z`))
  L.fine.push(line([cx - w * 0.44, y - 4], [cx + w * 0.44, y - 4]), line([cx, y - h * 0.95], [cx, y - h * 1.2]))
}
/** Alem / finial: stacked balls and crescent on a rod. */
function alem(L: Layers, x: number, y: number, s = 1) {
  L.profile.push(line([x, y], [x, y - 34 * s]), circle([x, y - 10 * s], 4 * s), circle([x, y - 20 * s], 3 * s))
  L.fine.push(el(`M${f(x - 5 * s)} ${f(y - 30 * s)}a5.5 5.5 0 1 0 ${f(10 * s)} 0a4 4 0 1 1 ${f(-10 * s)} 0Z`))
}

// ---------------------------------------------------------------------------
// Furnishings
// ---------------------------------------------------------------------------
function altar(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const floor = 560
  // predella: three steps
  for (let k = 0; k < 3; k++) L.profile.push(el(path(rect(cx - 170 + k * 20, floor - 15 * (k + 1), 340 - k * 40, 15), true)))
  const top = floor - 45
  // frontal (stipes), mensa, gradine
  L.profile.push(el(path(rect(cx - 110, top - 95, 220, 95), true)))
  L.fine.push(el(path(rect(cx - 98, top - 82, 196, 72), true)), el(path(rect(cx - 92, top - 76, 184, 60), true)))
  L.fine.push(el(`M${cx} ${top - 70}V${top - 22}M${cx - 16} ${top - 56}H${cx + 16}`))
  for (const x of [cx - 60, cx + 60]) L.fine.push(el(`M${x - 14} ${top - 46}q14 -16 28 0q-14 16 -28 0Z`))
  L.profile.push(el(path(rect(cx - 120, top - 107, 240, 12), true)))
  for (const x of [cx - 100, cx - 50, cx, cx + 50, cx + 100]) L.fine.push(el(`M${x} ${top - 104}v6M${x - 3} ${top - 101}h6`))
  const mensa = top - 107
  L.profile.push(el(path(rect(cx - 100, mensa - 14, 200, 14), true)))
  const grad = mensa - 14
  // tabernacle
  L.profile.push(el(`M${cx - 24} ${grad}V${grad - 48}H${cx + 24}V${grad}Z`), el(`M${cx - 28} ${grad - 48}H${cx + 28}M${cx - 20} ${grad - 48}Q${cx} ${grad - 76} ${cx + 20} ${grad - 48}`))
  L.fine.push(el(roundArch(cx - 12, grad - 30, 24, grad - 4) + 'Z'), circle([cx, grad - 79], 2.5))
  // crucifix
  const cTop = grad - 200
  L.profile.push(el(path(rect(cx - 3, cTop, 6, 118), true)), el(path(rect(cx - 30, cTop + 26, 60, 6), true)))
  L.fine.push(el(`M${cx} ${cTop + 30}l-2 22l2 32l2 -32Z`), circle([cx, cTop + 24], 4))
  // candlesticks: three each side
  for (const s of [-1, 1]) {
    for (let k = 0; k < 3; k++) {
      const x = cx + s * (48 + k * 22)
      const h = 70 - k * 12
      L.profile.push(el(`M${x - 8} ${grad}h16l-5 -6h-6Z`), line([x, grad - 6], [x, grad - h]))
      L.fine.push(el(`M${x - 6} ${grad - h}h12`), el(path(rect(x - 2.5, grad - h - 30, 5, 30), true)), el(`M${x} ${grad - h - 30}q-3 -6 0 -10q3 4 0 10Z`))
    }
  }
  B.add([cx - 170, cTop], [cx + 170, floor])
  L.dims.push(hDim(floor + 24, cx - 120, cx + 120, 'MENSA'))
  callouts(L, [
    { text: 'CRUCIFIX', at: [cx - 30, cTop + 29] },
    { text: 'CANDLESTICK', at: [cx - 92, grad - 55] },
    { text: 'TABERNACLE', at: [cx - 24, grad - 24] },
    { text: 'GRADINE', at: [cx - 100, grad + 7] },
    { text: 'MENSA (ALTAR SLAB)', at: [cx - 120, mensa + 6] },
    { text: 'FRONTAL', at: [cx - 98, top - 46] },
    { text: 'PREDELLA (STEPS)', at: [cx - 170, floor - 8] },
  ], cx - 170)
  return finish(meta('altar', 'Altar', 'Table for the central rite of a church', 'ELEVATION', 'REL-01',
    'Elevation of a church altar raised on three steps: a carved frontal beneath the stone mensa, a gradine shelf carrying candlesticks, a central tabernacle and a crucifix above.', 30, 'metres (indicative)'), L, B)
}

function minbar(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const floor = 590
  const x0 = 240
  const n = 10
  const run = 18
  const rise = 20
  const xTop = x0 + 40 + n * run
  const yTop = floor - n * rise
  // side panel: triangle under the stair, filled with a lattice of crossing lines
  const tri: Pt[] = [[x0 + 40, floor], [xTop, floor], [xTop, yTop]]
  const d1 = courses(L, 'mb-a', tri, Math.PI / 3, 12, 'fine')
  const d2 = courses(L, 'mb-b', tri, -Math.PI / 3, 12, 'fine')
  L.profile.push(el(path(tri, true)))
  // stair nosings and handrail parallel to the stair
  const steps: Pt[] = [[x0 + 40, floor]]
  for (let k = 0; k < n; k++) steps.push([x0 + 40 + k * run, floor - (k + 1) * rise], [x0 + 40 + (k + 1) * run, floor - (k + 1) * rise])
  L.profile.push(el(path(steps)))
  L.profile.push(line([x0 + 40, floor - 60], [xTop, yTop - 60]))
  for (let k = 0; k <= n; k += 2) L.fine.push(line([x0 + 40 + k * run, floor - k * rise - 2], [x0 + 40 + k * run, floor - k * rise - 60]))
  // gateway at the foot with a crested top
  L.profile.push(el(path(rect(x0, floor - 230, 40, 230), true)))
  L.fine.push(el(pointed(x0 + 8, floor - 140, 24, floor) ))
  L.profile.push(el(`M${x0 - 6} ${floor - 230}h52`))
  for (let k = 0; k < 4; k++) L.fine.push(el(`M${x0 - 4 + k * 13} ${floor - 230}l6 -12l6 12`))
  // kiosk: body, preacher's seat, columns and conical canopy
  const kx = xTop
  const kw = 70
  L.profile.push(el(path(rect(kx, yTop, kw, floor - yTop), true)))
  L.fine.push(el(pointed(kx + 22, floor - 60, 26, floor)))
  L.fine.push(el(path(rect(kx + 8, yTop - 26, kw - 16, 26), true)))
  const capY = yTop - 140
  for (const x of [kx + 4, kx + kw - 10]) L.profile.push(el(path(rect(x, capY, 6, yTop - capY), true)))
  L.fine.push(el(`M${kx + 10} ${capY + 30}Q${kx + kw / 2} ${capY + 6} ${kx + kw - 10} ${capY + 30}`))
  L.profile.push(el(path(rect(kx - 4, capY - 8, kw + 8, 8), true)))
  L.profile.push(el(`M${kx - 2} ${capY - 8}Q${kx + 8} ${capY - 50} ${kx + kw / 2} ${capY - 96}Q${kx + kw - 8} ${capY - 50} ${kx + kw + 2} ${capY - 8}`))
  alem(L, kx + kw / 2, capY - 96)
  L.profile.push(line([x0 - 30, floor], [kx + kw + 30, floor]))
  B.add([x0 - 30, capY - 132], [kx + kw + 30, floor])
  L.dims.push(hDim(floor + 22, x0 + 40, xTop, 'FLIGHT'))
  callouts(L, [
    { text: 'ALEM (FINIAL)', at: [kx + kw / 2, capY - 120] },
    { text: 'CONICAL CANOPY', at: [kx + 6, capY - 40] },
    { text: 'KIOSK COLUMN', at: [kx + 4, capY + 70] },
    { text: "PREACHER'S SEAT", at: [kx + 8, yTop - 14] },
    { text: 'HANDRAIL', at: [x0 + 40 + 4 * run, floor - 4 * rise - 60] },
    { text: 'GATEWAY', at: [x0, floor - 200] },
    { text: 'GEOMETRIC LATTICE', at: [x0 + 40 + 6 * run, floor - 40] },
    { text: 'STEPS', at: [x0 + 40 + 2 * run, floor - 3 * rise] },
  ], x0 - 30)
  return finish(meta('minbar', 'Minbar', 'Stepped pulpit of a mosque', 'ELEVATION', 'REL-02',
    'Side elevation of a mosque pulpit: a gateway at the foot opens onto a straight flight of steps between triangular side panels of geometric lattice, rising to a seat sheltered by a small kiosk with a conical canopy.', 30, 'metres (indicative)'), L, B, d1 + d2)
}

function roodScreen(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 220
  const x1 = 540
  const floor = 580
  const loftTop = 340
  const loftBot = 390
  const dado = 520
  const bays = 8
  const bw = (x1 - x0) / bays
  // loft (gallery) with panelled parapet and coving below
  L.profile.push(el(path(rect(x0 - 10, loftTop, x1 - x0 + 20, loftBot - loftTop - 16), true)))
  for (let i = 0; i < 10; i++) {
    const px = x0 - 4 + i * ((x1 - x0 + 8) / 10)
    L.fine.push(el(path(rect(px + 3, loftTop + 6, (x1 - x0 + 8) / 10 - 6, 22), true)))
  }
  L.profile.push(el(`M${x0 - 10} ${loftBot - 16}Q${x0} ${loftBot} ${x0 + 16} ${loftBot}H${x1 - 16}Q${x1} ${loftBot} ${x1 + 10} ${loftBot - 16}`))
  for (let x = x0 + 20; x < x1 - 10; x += 20) L.fine.push(el(`M${x} ${loftBot}q0 -10 6 -16`))
  // mullions, tracery heads, dado panels; central two bays open as the doorway
  for (let i = 0; i <= bays; i++) L.profile.push(el(path(rect(x0 + i * bw - 3, loftBot, 6, floor - loftBot), true)))
  for (let i = 0; i < bays; i++) {
    const bx = x0 + i * bw + 3
    const w = bw - 6
    const door = i === 3 || i === 4
    if (door) continue
    L.fine.push(el(pointed(bx + 2, loftBot + 44, w - 4, loftBot + 46, 30)))
    L.fine.push(el(`M${f(bx + w / 2)} ${loftBot + 16}V${loftBot + 46}`), circle([bx + w / 2 - 6, loftBot + 30], 4), circle([bx + w / 2 + 6, loftBot + 30], 4))
    L.profile.push(line([bx, dado], [bx + w, dado]))
    L.fine.push(el(path(rect(bx + 4, dado + 6, w - 8, floor - dado - 14), true)))
    // painted saint (simple silhouette)
    const fx = bx + w / 2
    L.fine.push(circle([fx, dado + 16], 4), el(`M${f(fx - 7)} ${floor - 12}L${f(fx - 4)} ${dado + 22}H${f(fx + 4)}L${f(fx + 7)} ${floor - 12}Z`))
  }
  // doorway arch spanning bays 3–4
  L.profile.push(el(pointed(x0 + 3 * bw + 3, loftBot + 60, 2 * bw - 6, floor, 50)))
  // rood above the loft, with Mary and John
  const cx = (x0 + x1) / 2
  L.profile.push(el(path(rect(cx - 4, loftTop - 190, 8, 190), true)), el(path(rect(cx - 44, loftTop - 160, 88, 8), true)))
  L.fine.push(el(`M${cx} ${loftTop - 150}l-3 30l3 40l3 -40Z`), circle([cx, loftTop - 166], 6))
  for (const s of [-1, 1]) {
    const fx = cx + s * 80
    L.profile.push(el(`M${fx - 12} ${loftTop}L${fx - 8} ${loftTop - 70}Q${fx} ${loftTop - 80} ${fx + 8} ${loftTop - 70}L${fx + 12} ${loftTop}Z`), circle([fx, loftTop - 86], 7))
  }
  L.profile.push(line([x0 - 30, floor], [x1 + 30, floor]))
  B.add([x0 - 30, loftTop - 190], [x1 + 30, floor])
  L.dims.push(hDim(floor + 22, x0, x1, 'SCREEN'))
  callouts(L, [
    { text: 'ROOD (CRUCIFIX)', at: [cx - 44, loftTop - 156] },
    { text: 'MARY AND JOHN', at: [cx - 92, loftTop - 40] },
    { text: 'ROOD LOFT', at: [x0 - 10, loftTop + 16] },
    { text: 'COVING', at: [x0 - 6, loftBot - 10] },
    { text: 'TRACERY HEAD', at: [x0 + 6, loftBot + 26] },
    { text: 'MULLION', at: [x0 + bw - 3, 470] },
    { text: 'PAINTED DADO PANEL', at: [x0 + 10, 550] },
  ], x0 - 30)
  L.notes.push(text(cx, floor - 60, 'CHANCEL DOOR', 'class="t-small" text-anchor="middle"'))
  return finish(meta('rood-screen', 'Rood Screen', 'Screen dividing nave from chancel', 'ELEVATION', 'REL-03',
    'Elevation of a late-medieval church screen: open traceried bays above painted dado panels, a central doorway to the chancel, a loft carried on a coved underside, and the rood with flanking figures above.', 30, 'metres (indicative)'), L, B)
}

function mihrab(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 260
  const x1 = 500
  const top = 150
  const floor = 560
  const cx = (x0 + x1) / 2
  // frame (alfiz) with an inscription band
  L.profile.push(el(path(rect(x0, top, x1 - x0, floor - top), true)), el(path(rect(x0 + 22, top + 22, x1 - x0 - 44, floor - top - 22), true)))
  let ins = ''
  for (let x = x0 + 30; x < x1 - 30; x += 14) ins += `M${x} ${top + 15}v-7q4 -2 6 2v5m2 0q2 -8 6 -6`
  for (let y = top + 40; y < floor - 10; y += 16) ins += `M${x0 + 8} ${y}h6v-6M${x1 - 14} ${y}h6v-6`
  L.fine.push(el(ins))
  // niche: pointed arch on colonnettes, conch hood of radiating flutes
  const nx = cx - 60
  const spring = 300
  L.profile.push(el(pointed(nx, spring, 120, floor - 20, 100)))
  L.fine.push(el(pointed(nx + 12, spring + 4, 96, floor - 20, 80)))
  for (let k = 1; k < 8; k++) {
    const a = Math.PI + (k / 8) * Math.PI
    L.fine.push(line([cx, spring + 4], [cx + 46 * Math.cos(a), spring + 4 + 70 * Math.sin(a)]))
  }
  L.fine.push(el(path(ring([cx, spring + 4], 14, Math.PI, 2 * Math.PI, 10))))
  for (const x of [nx - 8, nx + 120]) {
    L.profile.push(el(path(rect(x, spring, 8, floor - 20 - spring), true)))
    L.fine.push(el(path(rect(x - 3, spring - 8, 14, 8), true)), el(path(rect(x - 3, floor - 28, 14, 8), true)))
  }
  // spandrel arabesques
  for (const s of [-1, 1]) {
    const sx = cx + s * 78
    L.fine.push(el(`M${sx} ${top + 60}c${s * -14} 10 ${s * -14} 30 0 34c${s * 12} 4 ${s * 12} -14 0 -12`), circle([sx, top + 90], 3))
  }
  // hanging lamp
  L.fine.push(line([cx, spring - 60], [cx, spring + 70]), el(`M${cx - 12} ${spring + 70}h24l-6 22h-12Z`), el(`M${cx - 8} ${spring + 92}q8 14 16 0`))
  // step / plinth
  L.profile.push(el(path(rect(x0 - 10, floor - 20, x1 - x0 + 20, 20), true)))
  B.add([x0 - 10, top], [x1 + 10, floor])
  L.dims.push(hDim(floor + 22, nx, nx + 120, 'NICHE'))
  callouts(L, [
    { text: 'INSCRIPTION BAND', at: [x0 + 30, top + 11] },
    { text: 'SPANDREL ORNAMENT', at: [cx - 92, top + 76] },
    { text: 'CONCH HOOD', at: [cx - 30, spring - 30] },
    { text: 'POINTED ARCH', at: [nx, spring + 10] },
    { text: 'COLONNETTE', at: [nx - 8, 420] },
    { text: 'HANGING LAMP', at: [cx - 12, spring + 80] },
    { text: 'FRAME (ALFIZ)', at: [x0, 480] },
  ], x0 - 10)
  L.notes.push(text(cx, floor - 34, 'NICHE FACES MECCA', 'class="t-small t-accent" text-anchor="middle"'))
  return finish(meta('mihrab', 'Mihrab', 'Niche marking the direction of prayer', 'ELEVATION', 'REL-04',
    'Elevation of a mihrab set in the qibla wall: a pointed niche with a fluted conch hood on slender colonnettes, enclosed by a rectangular frame bearing an inscription band, with a lamp hanging in the niche.', 30, 'metres (indicative)'), L, B)
}

// ---------------------------------------------------------------------------
// Towers and gateways
// ---------------------------------------------------------------------------
function bellTower(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 400
  const ground = 590
  const w = 96
  const x0 = cx - w / 2
  const belfryBot = 240
  const belfryTop = 140
  // shaft with string courses; openings grow larger upward
  L.profile.push(el(path(rect(x0, belfryTop, w, ground - belfryTop), true)))
  for (const y of [belfryBot, 330, 420, 500]) L.profile.push(el(path(rect(x0 - 4, y - 6, w + 8, 6), true)))
  for (const [y, n, ww, hh] of [[400, 1, 8, 30], [314, 1, 14, 46], [480, 1, 6, 20]] as const) {
    for (let k = 0; k < n; k++) L.fine.push(el(roundArch(cx - ww / 2, y - hh + ww / 2, ww, y) + 'Z'))
  }
  // belfry: two-light (bifora) openings with bells
  const ow = 32
  for (const s of [-1, 1]) {
    const ox = cx + s * 22 - ow / 2
    L.profile.push(el(roundArch(ox, belfryTop + 40, ow, belfryBot - 10) + 'Z'))
  }
  L.fine.push(el(path(rect(cx - 2, belfryTop + 40, 4, belfryBot - 10 - belfryTop - 40), true)))
  bell(L, cx - 22, belfryBot - 30, 24)
  bell(L, cx + 22, belfryBot - 36, 20)
  L.fine.push(line([cx - 38, belfryTop + 40], [cx + 38, belfryTop + 40]))
  // cornice and pyramidal roof with cross
  L.profile.push(el(path(rect(x0 - 8, belfryTop - 10, w + 16, 10), true)))
  L.profile.push(el(path([[x0 - 6, belfryTop - 10], [cx, belfryTop - 90], [x0 + w + 6, belfryTop - 10]], true)))
  L.profile.push(el(`M${cx} ${belfryTop - 90}v-26M${cx - 8} ${belfryTop - 108}h16`))
  // door
  L.profile.push(el(roundArch(cx - 16, ground - 44, 32, ground)))
  L.profile.push(line([cx - 120, ground], [cx + 120, ground]))
  B.add([cx - 120, belfryTop - 116], [cx + 120, ground])
  L.dims.push(vDim(cx + w / 2 + 40, ground, belfryTop - 90, 'HEIGHT', cx + w / 2 + 10))
  callouts(L, [
    { text: 'PYRAMIDAL ROOF', at: [cx - 30, belfryTop - 50] },
    { text: 'CORNICE', at: [x0 - 8, belfryTop - 5] },
    { text: 'BELFRY (TWO-LIGHT OPENING)', at: [cx - 38, belfryTop + 60] },
    { text: 'BELL', at: [cx - 34, belfryBot - 40] },
    { text: 'STRING COURSE', at: [x0 - 4, 327] },
    { text: 'WINDOW (GROWING UPWARD)', at: [cx - 7, 290] },
    { text: 'SHAFT', at: [x0, 450] },
    { text: 'DOOR', at: [cx - 16, ground - 20] },
  ], cx - 120)
  return finish(meta('bell-tower', 'Bell Tower', 'Tower housing the bells of a church', 'ELEVATION', 'REL-05',
    'Elevation of a free-standing campanile: a square shaft divided by string courses, its windows growing larger towards the top, a belfry stage with two-light openings showing the bells, and a pyramidal roof with a cross.', 30, 'metres (indicative)'), L, B)
}

function minaret(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 390
  const ground = 600
  // square base, transition, polygonal shaft
  L.profile.push(el(path(rect(cx - 44, ground - 90, 88, 90), true)))
  L.fine.push(el(pointed(cx - 14, ground - 36, 28, ground)))
  L.profile.push(el(path([[cx - 44, ground - 90], [cx - 30, ground - 120], [cx + 30, ground - 120], [cx + 44, ground - 90]], true)))
  L.fine.push(el(`M${cx - 30} ${ground - 120}L${cx - 36} ${ground - 90}M${cx + 30} ${ground - 120}L${cx + 36} ${ground - 90}`))
  const balconies = [380, 250]
  const sw = [60, 54, 48]
  let y = ground - 120
  for (let i = 0; i <= balconies.length; i++) {
    const yTop = i < balconies.length ? balconies[i] : 160
    const w = sw[i]
    L.profile.push(el(path(rect(cx - w / 2, yTop, w, y - yTop), true)))
    for (const fx of [-w / 6, w / 6]) L.fine.push(line([cx + fx, yTop], [cx + fx, y]))
    if (i < balconies.length) {
      // şerefe: muqarnas corbel, floor and railing
      const bw = w + 36
      L.profile.push(el(path([[cx - w / 2, yTop], [cx - bw / 2, yTop - 22], [cx + bw / 2, yTop - 22], [cx + w / 2, yTop]], true)))
      for (let k = 0; k < 3; k++) {
        const yy = yTop - 6 - k * 6
        const ww = w / 2 + (k + 1) * 6
        let d = ''
        for (let x = cx - ww; x < cx + ww - 4; x += 8) d += `M${f(x)} ${yy}q4 -5 8 0`
        L.fine.push(el(d))
      }
      L.profile.push(el(path(rect(cx - bw / 2 - 2, yTop - 26, bw + 4, 4), true)), el(path(rect(cx - bw / 2, yTop - 52, bw, 26), true)))
      let rail = ''
      for (let x = cx - bw / 2 + 6; x < cx + bw / 2; x += 8) rail += `M${f(x)} ${yTop - 48}v18`
      L.fine.push(el(rail))
      L.profile.push(el(path(rect(cx - bw / 2 - 2, yTop - 56, bw + 4, 4), true)))
    }
    y = (i < balconies.length ? balconies[i] : 160) - (i < balconies.length ? 56 : 0)
  }
  // conical lead cap and alem
  L.profile.push(el(path(rect(cx - 28, 152, 56, 8), true)))
  L.profile.push(el(path([[cx - 26, 152], [cx, 56], [cx + 26, 152]], true)))
  alem(L, cx, 56)
  L.profile.push(line([cx - 120, ground], [cx + 120, ground]))
  B.add([cx - 120, 22], [cx + 120, ground])
  L.dims.push(vDim(cx + 110, ground, 56, 'HEIGHT', cx + 50))
  callouts(L, [
    { text: 'ALEM (FINIAL)', at: [cx, 40] },
    { text: 'CONICAL LEAD CAP', at: [cx - 14, 110] },
    { text: 'UPPER ŞEREFE', at: [cx - 46, 222] },
    { text: 'MUQARNAS CORBEL', at: [cx - 36, balconies[0] - 12] },
    { text: 'BALCONY RAILING', at: [cx - 48, balconies[0] - 40] },
    { text: 'POLYGONAL SHAFT', at: [cx - 30, 450] },
    { text: 'TRANSITION', at: [cx - 37, ground - 105] },
    { text: 'SQUARE BASE', at: [cx - 44, ground - 60] },
  ], cx - 120)
  return finish(meta('minaret', 'Minaret', 'Tower from which the call to prayer is made', 'ELEVATION', 'REL-06',
    'Elevation of a slender Ottoman minaret: a square base and transition zone, a polygonal shaft with two balconies carried on muqarnas corbelling, and a tall conical lead cap crowned by a finial.', 30, 'metres (indicative)'), L, B)
}

function gopuram(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 390
  const ground = 590
  const baseTop = 470
  const W = 300
  // stone base with pilasters and the gateway
  L.profile.push(el(path(rect(cx - W / 2, baseTop, W, ground - baseTop), true)))
  for (let x = cx - W / 2 + 20; x < cx + W / 2; x += 26) if (Math.abs(x - cx) > 40) L.fine.push(line([x, baseTop + 8], [x, ground - 6]))
  L.profile.push(el(path(rect(cx - 30, baseTop + 16, 60, ground - baseTop - 16), true)))
  L.fine.push(el(path(rect(cx - 36, baseTop + 10, 72, 6), true)))
  // diminishing tiers
  const tiers = 6
  const th = 46
  let hw = W / 2 - 10
  let y = baseTop
  for (let i = 0; i < tiers; i++) {
    const nw = hw - 16
    const yt = y - th
    // cornice (kapota) band
    L.profile.push(el(path(rect(cx - hw - 6, y - 8, 2 * hw + 12, 8), true)))
    L.profile.push(el(path([[cx - hw, y - 8], [cx - nw, yt], [cx + nw, yt], [cx + hw, y - 8]], true)))
    // niches with figures and small pavilions
    const n = 7 - Math.floor(i / 2)
    for (let k = 0; k < n; k++) {
      const t = (k + 0.5) / n
      const nx = cx - (hw + nw) / 2 + t * (hw + nw) - 6
      L.fine.push(el(`M${f(nx)} ${f(y - 12)}V${f(yt + 16)}Q${f(nx + 6)} ${f(yt + 8)} ${f(nx + 12)} ${f(yt + 16)}V${f(y - 12)}`))
      if (k % 2 === 0) L.fine.push(circle([nx + 6, yt + 22], 2.2), line([nx + 6, yt + 25], [nx + 6, y - 14]))
    }
    hw = nw
    y = yt
  }
  // shala: barrel-vaulted crowning roof with horned ends and kalasha finials
  const rw = hw + 6
  L.profile.push(el(`M${f(cx - rw)} ${y}V${y - 26}Q${f(cx - rw)} ${y - 48} ${f(cx - rw + 22)} ${y - 48}H${f(cx + rw - 22)}Q${f(cx + rw)} ${y - 48} ${f(cx + rw)} ${y - 26}V${y}Z`))
  for (const s of [-1, 1]) L.fine.push(el(`M${f(cx + s * rw)} ${y - 26}q${s * 14} -6 ${s * 10} -24`))
  L.fine.push(el(`M${f(cx - 16)} ${y}V${y - 22}Q${cx} ${y - 38} ${f(cx + 16)} ${y - 22}V${y}`))
  const nk = 7
  for (let k = 0; k < nk; k++) {
    const kx = cx - rw + 22 + (k * (2 * rw - 44)) / (nk - 1)
    L.profile.push(el(`M${f(kx - 4)} ${y - 48}q-2 -8 4 -12q6 4 4 12Z`), line([kx, y - 60], [kx, y - 70]))
  }
  L.profile.push(line([cx - W / 2 - 20, ground], [cx + W / 2 + 20, ground]))
  B.add([cx - W / 2 - 20, y - 70], [cx + W / 2 + 20, ground])
  L.dims.push(hDim(ground + 22, cx - W / 2, cx + W / 2, 'BASE'))
  callouts(L, [
    { text: 'KALASHA FINIALS', at: [cx - rw + 22, y - 58] },
    { text: 'SHALA (BARREL ROOF)', at: [cx - rw, y - 30] },
    { text: 'DIMINISHING TIERS', at: [cx - 80, 300] },
    { text: 'CORNICE (KAPOTA)', at: [cx - W / 2 + 4, baseTop - 4] },
    { text: 'SCULPTED NICHE', at: [cx - 110, 440] },
    { text: 'STONE BASE', at: [cx - W / 2, 520] },
    { text: 'GATEWAY', at: [cx - 30, 560] },
  ], cx - W / 2 - 20)
  return finish(meta('gopuram', 'Gopuram', 'Towering gateway of a South Indian temple', 'ELEVATION', 'REL-07',
    'Elevation of a Dravidian temple gateway: a stone base pierced by the entrance carries a pyramidal tower of diminishing tiers crowded with sculpted niches, capped by a barrel-vaulted roof lined with pot finials.', 30, 'metres (indicative)',
    'After South Indian (Dravidian) temple gateways such as those of the Meenakshi Temple, Madurai. Generic; not a survey. Original drawing by Project Exodus.'), L, B)
}

function shikhara(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 390
  const ground = 590
  const plinth = 560
  const wallTop = 460
  const hw = 80
  const top = 190
  const thw = 32
  // plinth (jagati) and sanctum walls with projections
  L.profile.push(el(path(rect(cx - 160, plinth, 320, ground - plinth), true)), line([cx - 160, plinth + 10], [cx + 160, plinth + 10]))
  L.profile.push(el(path(rect(cx - hw - 14, wallTop, 2 * hw + 28, plinth - wallTop), true)))
  for (const s of [-1, 1]) for (const o of [hw - 10, hw - 34]) L.fine.push(line([cx + s * o, wallTop], [cx + s * o, plinth]))
  L.profile.push(el(path(rect(cx - 18, plinth - 70, 36, 70), true)))
  L.fine.push(el(path(rect(cx - 26, plinth - 78, 52, 8), true)))
  // curvilinear tower: convex outline and inner projection (ratha) lines
  const side = (o: number, t: number) => `M${f(cx - o)} ${wallTop}Q${f(cx - o - 6)} ${f((wallTop + top) / 2)} ${f(cx - t)} ${top}`
  const sideR = (o: number, t: number) => `M${f(cx + o)} ${wallTop}Q${f(cx + o + 6)} ${f((wallTop + top) / 2)} ${f(cx + t)} ${top}`
  L.profile.push(el(`${side(hw + 6, thw)}H${f(cx + thw)}`), el(sideR(hw + 6, thw)))
  for (const [o, t] of [[hw - 22, thw - 10], [22, 10]]) L.fine.push(el(side(o, t)), el(sideR(o, t)))
  // bhumi-amalakas: storey markers on the corners
  const n = 6
  for (let k = 1; k < n; k++) {
    const yy = wallTop - (k * (wallTop - top)) / n
    const t = (wallTop - yy) / (wallTop - top)
    const o = (1 - t) * (1 - t) * (hw + 6) + 2 * (1 - t) * t * (hw + 12) + t * t * thw
    L.fine.push(line([cx - o, yy], [cx + o, yy]))
    for (const s of [-1, 1]) L.fine.push(`<ellipse cx="${f(cx + s * (o - 7))}" cy="${f(yy)}" rx="7" ry="3"/>`)
  }
  // neck, amalaka, kalasha and flag
  L.profile.push(el(path(rect(cx - 22, top - 8, 44, 8), true)))
  L.profile.push(`<ellipse cx="${cx}" cy="${top - 22}" rx="40" ry="14"/>`)
  let ribs = ''
  for (let k = -4; k <= 4; k++) ribs += `M${f(cx + k * 9)} ${top - 35}Q${f(cx + k * 10.5)} ${top - 22} ${f(cx + k * 9)} ${top - 9}`
  L.fine.push(el(ribs))
  L.profile.push(el(`M${cx - 10} ${top - 36}q-12 -12 0 -26h20q12 14 0 26Z`), line([cx, top - 62], [cx, top - 110]))
  L.fine.push(el(`M${cx} ${top - 110}l28 6l-28 8`))
  L.profile.push(line([cx - 180, ground], [cx + 180, ground]))
  B.add([cx - 180, top - 110], [cx + 180, ground])
  L.dims.push(vDim(cx + 140, plinth, top - 22, 'TOWER', cx + 60))
  callouts(L, [
    { text: 'KALASHA (FINIAL)', at: [cx - 10, top - 48] },
    { text: 'AMALAKA', at: [cx - 40, top - 22] },
    { text: 'CURVED TOWER', at: [cx - hw - 4, 330] },
    { text: 'BHUMI-AMALAKA', at: [cx - 60, 372] },
    { text: 'RATHA (PROJECTION)', at: [cx - hw + 22, 420] },
    { text: 'SANCTUM WALL', at: [cx - hw - 14, 500] },
    { text: 'DOORWAY', at: [cx - 18, 530] },
    { text: 'PLINTH (JAGATI)', at: [cx - 160, 575] },
  ], cx - 180)
  return finish(meta('shikhara', 'Shikhara', 'Curved tower over a Hindu sanctum', 'ELEVATION', 'REL-08',
    'Elevation of a North Indian (Nagara) temple tower: a curvilinear spire rising over the sanctum, its faces stepped in vertical projections and banded with miniature ribbed discs, crowned by a large amalaka and a pot finial.', 30, 'metres (indicative)',
    'After North Indian (Nagara) temple towers such as those at Khajuraho. Generic; not a survey. Original drawing by Project Exodus.'), L, B)
}

function pagoda(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 390
  const base = 560
  // stone platform
  L.profile.push(el(path(rect(cx - 110, base, 220, 26), true)), line([cx - 110, base + 8], [cx + 110, base + 8]))
  // central pillar (hidden), dashed
  L.center.push(line([cx, base], [cx, 200]))
  const widths = [124, 110, 98, 86, 74]
  let y = base
  for (const bw of widths) {
    // body with bays
    L.profile.push(el(path(rect(cx - bw / 2, y - 40, bw, 40), true)))
    for (const o of [-bw / 6, bw / 6]) L.fine.push(line([cx + o, y - 40], [cx + o, y]))
    L.fine.push(el(path(rect(cx - bw / 6 + 3, y - 34, bw / 3 - 6, 34), true)))
    // bracket band
    L.profile.push(el(path(rect(cx - bw / 2 - 8, y - 48, bw + 16, 8), true)))
    let br = ''
    for (let x = cx - bw / 2 - 4; x < cx + bw / 2 + 6; x += 8) br += `M${f(x)} ${y - 40}v-8`
    L.fine.push(el(br))
    // upturned eaves
    const rw = bw + 110
    const yb = y - 48
    const yt = yb - 22
    const tip = yb - 10
    L.profile.push(el(`M${f(cx - rw / 2)} ${tip}Q${f(cx - bw / 2 - 20)} ${yb + 2} ${f(cx - bw / 2 - 6)} ${yb}H${f(cx + bw / 2 + 6)}Q${f(cx + bw / 2 + 20)} ${yb + 2} ${f(cx + rw / 2)} ${tip}L${f(cx + bw / 2 - 4)} ${yt}H${f(cx - bw / 2 + 4)}Z`))
    L.fine.push(el(`M${f(cx - rw / 2 + 8)} ${tip + 2}Q${f(cx - bw / 2 - 16)} ${yb - 4} ${f(cx - bw / 2 + 2)} ${yt + 4}M${f(cx + rw / 2 - 8)} ${tip + 2}Q${f(cx + bw / 2 + 16)} ${yb - 4} ${f(cx + bw / 2 - 2)} ${yt + 4}`))
    y = yt
  }
  // sōrin finial: base, nine rings, water flame, jewel
  L.profile.push(el(path(rect(cx - 16, y - 16, 32, 16), true)), line([cx, y - 16], [cx, y - 130]))
  for (let k = 0; k < 9; k++) L.profile.push(line([cx - 10 + k * 0.4, y - 24 - k * 9], [cx + 10 - k * 0.4, y - 24 - k * 9]))
  L.fine.push(el(`M${cx - 12} ${y - 108}q6 -14 12 -10q6 -4 12 10q-12 -4 -24 0Z`))
  L.profile.push(circle([cx, y - 124], 6))
  L.profile.push(line([cx - 150, base + 26], [cx + 150, base + 26]))
  B.add([cx - 150, y - 132], [cx + 150, base + 26])
  L.dims.push(vDim(cx + 140, base, y, 'FIVE STOREYS', cx + 60))
  callouts(L, [
    { text: 'HŌJU (JEWEL)', at: [cx - 6, y - 124] },
    { text: 'SŌRIN (NINE RINGS)', at: [cx - 10, y - 60] },
    { text: 'UPTURNED EAVES', at: [cx - 120, 296] },
    { text: 'BRACKET SETS', at: [cx - 51, 420] },
    { text: 'CENTRAL PILLAR (HIDDEN)', at: [cx - 2, 460] },
    { text: 'STOREY', at: [cx - 62, 540] },
    { text: 'STONE PLATFORM', at: [cx - 110, base + 13] },
  ], cx - 150)
  return finish(meta('pagoda', 'Pagoda', 'Tiered tower of a Buddhist temple', 'ELEVATION', 'REL-09',
    'Elevation of a five-storey Japanese pagoda: diminishing storeys each sheltered by deep upturned eaves on bracket sets, a central pillar running up through the core, and a bronze spire of nine rings topped by a jewel.', 30, 'metres (indicative)',
    'After Japanese five-storey pagodas such as those at Hōryū-ji and Daigo-ji. Generic; not a survey. Original drawing by Project Exodus.'), L, B)
}

function stupa(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 390
  const ground = 580
  // drum (medhi) with berm railing
  L.profile.push(el(path(rect(cx - 160, ground - 60, 320, 60), true)))
  let rail = ''
  for (let x = cx - 154; x < cx + 160; x += 12) rail += `M${x} ${ground - 60}v-12`
  L.fine.push(el(rail), line([cx - 158, ground - 66], [cx + 158, ground - 66]), line([cx - 158, ground - 72], [cx + 158, ground - 72]))
  // anda (dome)
  const domeBase = ground - 72
  L.profile.push(el(`M${cx - 140} ${domeBase}C${cx - 140} ${domeBase - 110} ${cx - 70} ${domeBase - 150} ${cx} ${domeBase - 150}C${cx + 70} ${domeBase - 150} ${cx + 140} ${domeBase - 110} ${cx + 140} ${domeBase}`))
  // harmika and chattras
  const hy = domeBase - 150
  L.profile.push(el(path(rect(cx - 22, hy - 26, 44, 26), true)))
  let hr = ''
  for (let x = cx - 18; x <= cx + 18; x += 6) hr += `M${x} ${hy - 22}v18`
  L.fine.push(el(hr))
  L.profile.push(line([cx, hy - 26], [cx, hy - 100]))
  for (const [yy, w] of [[hy - 46, 52], [hy - 70, 40], [hy - 92, 28]] as const) L.profile.push(el(`M${cx - w / 2} ${yy}Q${cx} ${yy - 10} ${cx + w / 2} ${yy}Z`))
  // ground railing (vedika) and torana gateway, in front
  L.profile.push(el(path(rect(cx - 200, ground - 36, 400, 36), true)))
  let ved = ''
  for (let x = cx - 194; x < cx + 200; x += 16) ved += `M${x} ${ground - 36}v36`
  for (const yy of [ground - 26, ground - 16, ground - 6]) ved += `M${cx - 200} ${yy}H${cx + 200}`
  L.fine.push(el(ved))
  const tx = [cx - 30, cx + 30]
  for (const x of tx) L.profile.push(el(path(rect(x - 5, ground - 150, 10, 150), true), PAPER))
  for (const [k, yy] of [ground - 150, ground - 130, ground - 110].entries()) {
    L.profile.push(el(`M${cx - 66} ${yy + 4}Q${cx} ${yy - 4} ${cx + 66} ${yy + 4}V${yy + 10}Q${cx} ${yy + 2} ${cx - 66} ${yy + 10}Z`, PAPER))
    for (const s of [-1, 1]) L.fine.push(circle([cx + s * 70, yy + 7], 4 - k * 0.5))
  }
  L.fine.push(el(`M${cx - 6} ${ground - 156}h12l-6 -14Z`))
  L.profile.push(line([cx - 220, ground], [cx + 220, ground]))
  B.add([cx - 220, hy - 100], [cx + 220, ground])
  L.dims.push(hDim(ground + 22, cx - 140, cx + 140, 'DOME'))
  callouts(L, [
    { text: 'CHATTRA (UMBRELLAS)', at: [cx - 26, hy - 46] },
    { text: 'HARMIKA', at: [cx - 22, hy - 13] },
    { text: 'ANDA (DOME)', at: [cx - 110, domeBase - 80] },
    { text: 'BERM RAILING', at: [cx - 158, ground - 69] },
    { text: 'MEDHI (DRUM)', at: [cx - 160, ground - 48] },
    { text: 'TORANA (GATEWAY)', at: [cx - 66, ground - 140] },
    { text: 'VEDIKA (RAILING)', at: [cx - 200, ground - 18] },
  ], cx - 200)
  return finish(meta('stupa', 'Stupa', 'Hemispherical Buddhist reliquary mound', 'ELEVATION', 'REL-10',
    'Elevation of a great stupa: a solid hemispherical dome on a drum terrace with a railing, crowned by a square enclosure and a mast of three umbrellas, ringed at ground level by a stone railing entered through carved gateways.', 30, 'metres (indicative)',
    'After the Great Stupa at Sanchi, India (3rd c. BCE – 1st c. CE). Simplified; not a survey. Original drawing by Project Exodus.'), L, B)
}

function torii(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const ground = 570
  const span = 160
  // pillars (hashira), slightly battered, with black base sleeves (kamaki)
  for (const s of [-1, 1]) {
    const x = cx + s * span / 2
    L.profile.push(el(path([[x - 12, ground], [x + 12, ground], [x + 9, 262], [x - 9, 262]], true)))
    L.profile.push(`<path d="${path(rect(x - 13, ground - 22, 26, 22), true)}" class="solid"/>`)
    L.fine.push(el(path(rect(x - 11, 262, 22, 8), true)))
  }
  // nuki (tie beam) passing through the pillars
  L.profile.push(el(path(rect(cx - span / 2 - 60, 330, span + 120, 16), true)))
  // gakuzuka strut and tablet (gaku)
  L.profile.push(el(path(rect(cx - 8, 262, 16, 68), true)))
  L.profile.push(el(path(rect(cx - 20, 272, 40, 50), true)))
  L.fine.push(el(path(rect(cx - 15, 277, 30, 40), true)), el(`M${cx - 6} 285h12M${cx} 285v24M${cx - 7} 297h14M${cx - 6} 309l6 -6l6 6`))
  // shimaki and kasagi (upturned top lintel)
  L.profile.push(el(path(rect(cx - span / 2 - 52, 250, span + 104, 12), true)))
  const x0 = cx - span / 2 - 78
  const x1 = cx + span / 2 + 78
  L.profile.push(el(`M${x0} 226Q${x0 + 60} 252 ${cx} 250Q${x1 - 60} 252 ${x1} 226L${x1 + 4} 216Q${x1 - 60} 240 ${cx} 236Q${x0 + 60} 240 ${x0 - 4} 216Z`))
  L.profile.push(line([cx - 190, ground], [cx + 190, ground]))
  B.add([x0 - 4, 216], [x1 + 4, ground])
  L.dims.push(hDim(ground + 22, cx - span / 2, cx + span / 2, 'PILLAR SPACING'))
  L.center.push(line([cx, 360], [cx, ground]))
  L.notes.push(text(cx + 6, 480, 'THRESHOLD TO SACRED GROUND', 'class="t-small t-accent"'))
  callouts(L, [
    { text: 'KASAGI (TOP LINTEL)', at: [x0 + 10, 230] },
    { text: 'SHIMAKI', at: [cx - span / 2 - 52, 256] },
    { text: 'GAKU (TABLET)', at: [cx - 20, 300] },
    { text: 'NUKI (TIE BEAM)', at: [cx - span / 2 - 60, 338] },
    { text: 'HASHIRA (PILLAR)', at: [cx - span / 2 - 10, 440] },
    { text: 'KAMAKI (BASE SLEEVE)', at: [cx - span / 2 - 13, ground - 11] },
  ], x0 - 4)
  return finish(meta('torii-gate', 'Torii Gate', 'Gateway marking the entrance to a Shinto shrine', 'ELEVATION', 'REL-11',
    'Elevation of a myōjin-style torii: two slightly inclined pillars on black base sleeves, a tie beam passing through them, and a doubled top lintel whose upper member sweeps upward at the ends, with a name tablet at the centre.', 30, 'metres (indicative)'), L, B)
}

// ---------------------------------------------------------------------------
// Spaces in section and plan
// ---------------------------------------------------------------------------
function nave(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const floor = 560
  const nh = 70 // half nave width
  const aw = 70
  const t = 14
  const aisleTop = 420
  const naveTop = 270
  // outer aisle walls (cut) with windows
  for (const s of [-1, 1]) {
    const xo = s < 0 ? cx - nh - aw - t : cx + nh + aw
    hatched(L, rect(xo, aisleTop, t, 50))
    hatched(L, rect(xo, aisleTop + 90, t, floor - aisleTop - 90))
    L.cut.push(line([xo + t / 2, aisleTop + 50], [xo + t / 2, aisleTop + 90], THIN))
    // nave wall on arcade piers, clerestory window opening
    const xn = s < 0 ? cx - nh - t : cx + nh
    hatched(L, rect(xn, naveTop, t, 36))
    hatched(L, rect(xn, naveTop + 76, t, floor - naveTop - 76))
    L.cut.push(line([xn + t / 2, naveTop + 36], [xn + t / 2, naveTop + 76], THIN))
    // arcade arch beyond, in the nave wall's plane: shown as fine arches in the aisle
    // lean-to aisle roof
    const xi = s < 0 ? xn : xn + t
    const xe = s < 0 ? xo : xo + t
    L.profile.push(el(path([[xe - s * 8, aisleTop + 4], [xi, aisleTop - 36]])))
    L.fine.push(el(path([[xe, aisleTop], [xi, aisleTop - 32]])))
  }
  // nave roof truss
  const eaveL: Pt = [cx - nh - t - 10, naveTop + 4]
  const eaveR: Pt = [cx + nh + t + 10, naveTop + 4]
  const ridge: Pt = [cx, naveTop - 90]
  L.profile.push(el(path([eaveL, ridge, eaveR])))
  L.fine.push(line([cx - nh - t, naveTop], [cx + nh + t, naveTop]), line(ridge, [cx, naveTop]), line([cx - 40, naveTop], [cx - 20, naveTop - 64]), line([cx + 40, naveTop], [cx + 20, naveTop - 64]))
  // arcade beyond: arches between piers along the aisle
  for (const s of [-1, 1]) {
    const xa = s < 0 ? cx - nh - t - 1 : cx + nh + t + 1
    L.fine.push(el(`M${xa} ${floor}V${floor - 80}`), el(`M${xa + (s < 0 ? -50 : 50)} ${floor}V${floor - 80}`))
  }
  // daylight through clerestory and aisle windows
  arrow(L, [cx - nh - 40, naveTop + 20], [cx - 20, floor - 40])
  arrow(L, [cx + nh + aw + 40, aisleTop + 50], [cx + nh + 20, floor - 20])
  L.profile.push(line([cx - nh - aw - t - 30, floor], [cx + nh + aw + t + 30, floor]))
  for (const [x, s] of [[cx, 'NAVE'], [cx - nh - aw / 2 - 4, 'AISLE'], [cx + nh + aw / 2 + 4, 'AISLE']] as const) L.notes.push(text(x, floor - 8, s, 'class="t-sub" text-anchor="middle"'))
  B.add([cx - nh - aw - t - 30, ridge[1]], [cx + nh + aw + t + 30, floor])
  L.dims.push(hDim(floor + 24, cx - nh, cx + nh, 'NAVE SPAN'))
  callouts(L, [
    { text: 'NAVE ROOF TRUSS', at: [cx - 30, naveTop - 50] },
    { text: 'CLERESTORY WINDOW', at: [cx - nh - t / 2, naveTop + 56] },
    { text: 'AISLE ROOF', at: [cx - nh - aw / 2, aisleTop - 18] },
    { text: 'AISLE WINDOW', at: [cx - nh - aw - t / 2, aisleTop + 70] },
    { text: 'NAVE WALL ON PIERS', at: [cx - nh - t, 470] },
    { text: 'OUTER WALL', at: [cx - nh - aw - t, 530] },
  ], cx - nh - aw - t - 30)
  return finish(meta('nave', 'Nave', 'Central body of a basilican church', 'SECTION', 'REL-12',
    'Cross-section through a basilican church: a tall central nave lit by clerestory windows above lower side aisles under lean-to roofs, the nave walls carried on arcades of piers and the whole covered by a timber truss roof.', 30, 'metres (indicative)'), L, B)
}

function monolithic(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const g = 220
  const x0 = 200
  const x1 = 570
  const bot = 600
  const tL = 230
  const tR = 540
  const tBot = 540
  const cL = 300
  const cR = 470
  // bedrock with the trench excavated (hole), then the church block left standing
  const rock = `${path([[x0, g], [x1, g], [x1, bot], [x0, bot]], true)}${path([[tL, g], [tL, tBot], [tR, tBot], [tR, g]], true)}`
  L.hatch.push(`<path d="${rock}" fill="url(#h-stone)" fill-rule="evenodd" stroke="none"/>`)
  L.cut.push(el(path([[x0, g], [tL, g], [tL, tBot], [tR, tBot], [tR, g], [x1, g]])))
  // the church: one block with hollowed interior (evenodd)
  const block = `${path(rect(cL, g + 8, cR - cL, tBot - g - 8), true)}${path([[cL + 18, tBot - 18], [cL + 18, g + 120], [cR - 18, g + 120], [cR - 18, tBot - 18]], true)}`
  L.hatch.push(`<path d="${block}" fill="url(#h-stone)" fill-rule="evenodd" stroke="none"/>`)
  L.cut.push(el(path(rect(cL, g + 8, cR - cL, tBot - g - 8), true)), el(path(rect(cL + 18, g + 120, cR - cL - 36, tBot - 18 - g - 120), true)))
  // interior: carved arches and pillars beyond
  const ix0 = cL + 18
  const iw = cR - cL - 36
  for (let k = 0; k < 3; k++) {
    const ax = ix0 + 8 + k * ((iw - 16) / 3)
    L.fine.push(el(roundArch(ax + 6, g + 180, (iw - 16) / 3 - 12, tBot - 18)))
  }
  // windows cut through the walls, cross relief on roof
  for (const yy of [g + 40, g + 70]) L.cut.push(`<path d="${path(rect(cL - 1, yy, 20, 14), true)}" style="fill: var(--_paper); stroke: none"/>`, line([cL, yy], [cL + 18, yy], THIN), line([cL, yy + 14], [cL + 18, yy + 14], THIN), `<path d="${path(rect(cR - 19, yy, 20, 14), true)}" style="fill: var(--_paper); stroke: none"/>`, line([cR - 18, yy], [cR, yy], THIN), line([cR - 18, yy + 14], [cR, yy + 14], THIN))
  L.profile.push(el(`M${(cL + cR) / 2 - 30} ${g + 8}v-4h60v4M${(cL + cR) / 2 - 6} ${g + 4}v-4h12v4`))
  // access passage cut down to the trench floor, and a figure for scale
  L.fine.push(el(`M${x0 + 4} ${g + 20}L${tL} ${tBot - 40}`), el(`M${x0 + 4} ${g + 44}L${tL} ${tBot - 10}`))
  L.fine.push(circle([tR - 22, tBot - 50], 5), el(`M${tR - 22} ${tBot - 45}v24M${tR - 28} ${tBot}l6 -21l6 21M${tR - 30} ${tBot - 32}l8 -6l8 6`))
  L.center.push(line([x0 - 10, g], [x1 + 4, g]))
  B.add([x0, g - 10], [x1, bot])
  L.dims.push(vDim(tR + 14, tBot, g, 'DEPTH', tR))
  callouts(L, [
    { text: 'GROUND LEVEL', at: [x0 + 10, g] },
    { text: 'ROOF FLUSH WITH GROUND', at: [(cL + cR) / 2 - 30, g + 4] },
    { text: 'CHURCH: ONE BLOCK OF ROCK', at: [cL, g + 80] },
    { text: 'INTERIOR HOLLOWED OUT', at: [ix0 + 20, g + 200] },
    { text: 'ACCESS PASSAGE', at: [x0 + 40, g + 70] },
    { text: 'TRENCH', at: [tL + 30, tBot - 10] },
    { text: 'UNCUT BEDROCK', at: [x0 + 20, 570] },
  ], x0)
  return finish(meta('monolithic-church', 'Monolithic Church', 'Church carved down into living rock', 'SECTION', 'REL-13',
    'Section through a church carved downward from a single mass of rock: a deep trench was cut to free the block, whose roof stays level with the surrounding ground, and the interior was then hollowed out with arches and pillars left in the stone.', 30, 'metres (indicative)',
    'After Bete Giyorgis (Church of St George), Lalibela, Ethiopia (early 13th c.). Simplified; not a survey. Original drawing by Project Exodus.'), L, B)
}

function apse(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [380, 260]
  const ri = 100
  const ro = 124
  const nx0 = 240
  const nx1 = 520
  const bot = 610
  const wall = 24
  const outer = ring(c, ro, Math.PI, 2 * Math.PI, 40)
  const inner = ring(c, ri, 2 * Math.PI, Math.PI, 40)
  const poly: Pt[] = [[nx0 - wall, bot], [nx0 - wall, c[1]], ...outer, [nx1 + wall, c[1]], [nx1 + wall, bot], [nx1, bot], [nx1, c[1] + wall], [c[0] + ri, c[1] + wall], ...inner.map(([x, y]) => [x, y] as Pt), [c[0] - ri, c[1] + wall], [nx0, c[1] + wall], [nx0, bot]]
  hatched(L, poly)
  // windows through the apse wall
  for (const a of [-Math.PI * 0.75, -Math.PI / 2, -Math.PI * 0.25]) {
    const u: Pt = [Math.cos(a), Math.sin(a)]
    const v: Pt = [-u[1], u[0]]
    const q = (r: number, s: number): Pt => [c[0] + u[0] * r + v[0] * s, c[1] + u[1] * r + v[1] * s]
    L.cut.push(`<path d="${path([q(ri - 1, -9), q(ro + 1, -9), q(ro + 1, 9), q(ri - 1, 9)], true)}" style="fill: var(--_paper); stroke: none"/>`)
    L.cut.push(line(q(ri, -9), q(ro, -9)), line(q(ri, 9), q(ro, 9)), line(q(ri + 8, -9), q(ri + 8, 9), THIN), line(q(ri + 16, -9), q(ri + 16, 9), THIN))
  }
  // synthronon bench, altar, chancel step, half-dome ribs (dashed)
  L.fine.push(el(path(ring(c, ri - 14, Math.PI * 1.05, Math.PI * 1.95, 30))))
  L.profile.push(el(path(rect(c[0] - 30, c[1] + 40, 60, 26), true)))
  L.profile.push(line([nx0, c[1] + 90], [nx1, c[1] + 90]))
  for (const a of [-Math.PI * 0.85, -Math.PI * 0.65, -Math.PI * 0.35, -Math.PI * 0.15]) L.fine.push(line([c[0] + 30 * Math.cos(a), c[1] + 30 * Math.sin(a)], [c[0] + ri * Math.cos(a), c[1] + ri * Math.sin(a)], 'stroke-dasharray="4 3"'))
  L.fine.push(el(path(ring(c, 30, Math.PI, 2 * Math.PI, 12)), 'stroke-dasharray="4 3"'))
  // nave arcade columns
  for (let y = c[1] + 130; y < bot; y += 50) for (const x of [nx0 + 50, nx1 - 50]) L.profile.push(circle([x, y], 7))
  L.center.push(line([c[0], c[1] - ro - 20], [c[0], bot]))
  B.add([nx0 - wall, c[1] - ro], [nx1 + wall, bot])
  L.dims.push(hDim(c[1] - ro - 30, c[0] - ri, c[0] + ri, 'APSE'))
  callouts(L, [
    { text: 'APSE WALL (CUT)', at: [c[0] - 110, c[1] - 50] },
    { text: 'WINDOW', at: [c[0] - 80, c[1] - 78] },
    { text: 'HALF-DOME ABOVE', at: [c[0] - 50, c[1] - 40] },
    { text: 'CLERGY BENCH', at: [c[0] - 84, c[1] - 6] },
    { text: 'ALTAR', at: [c[0] - 30, c[1] + 53] },
    { text: 'CHANCEL STEP', at: [nx0, c[1] + 90] },
    { text: 'NAVE ARCADE', at: [nx0 + 43, c[1] + 180] },
    { text: 'NAVE WALL', at: [nx0 - wall, 520] },
  ], nx0 - wall)
  return finish(meta('apse', 'Apse', 'Semicircular end of a church', 'PLAN', 'REL-14',
    'Plan of the semicircular east end of a basilica: the curved apse wall pierced by windows and covered by a half-dome, a clergy bench following the curve, and the altar standing at the chord before the chancel step.', 30, 'metres (indicative)'), L, B)
}

function baptistery(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [380, 320]
  const oct = (r: number, rev = false) => {
    const pts: Pt[] = Array.from({ length: 8 }, (_, i) => {
      const a = Math.PI / 8 + (i * Math.PI) / 4
      return [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)] as Pt
    })
    return rev ? pts.reverse() : pts
  }
  const ri = 150
  const ro = 176
  hatched(L, `${path(oct(ro), true)}${path(oct(ri, true), true)}`)
  // door in the bottom side
  L.cut.push(`<path d="${path(rect(c[0] - 26, c[1] + ri * Math.cos(Math.PI / 8) - 2, 52, ro - ri + 8), true)}" style="fill: var(--_paper); stroke: none"/>`)
  const yi = c[1] + ri * Math.cos(Math.PI / 8)
  const yo = c[1] + ro * Math.cos(Math.PI / 8)
  L.cut.push(line([c[0] - 26, yi], [c[0] - 26, yo]), line([c[0] + 26, yi], [c[0] + 26, yo]))
  L.fine.push(el(`M${c[0] - 26} ${yi}A52 52 0 0 1 ${c[0] + 26} ${yi - 52}`), line([c[0] + 26, yi], [c[0] + 26, yi - 52]))
  // niches in the diagonal sides
  for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) continue
    const a = (i * Math.PI) / 4 + Math.PI / 8 - Math.PI / 8
    const m: Pt = [c[0] + ri * Math.cos(Math.PI / 8) * Math.cos(a), c[1] + ri * Math.cos(Math.PI / 8) * Math.sin(a)]
    L.cut.push(`<path d="${path(ring(m, 22, a - Math.PI / 2, a + Math.PI / 2, 12), true)}" style="fill: var(--_paper); stroke: none"/>`)
    L.cut.push(el(path(ring(m, 22, a - Math.PI / 2, a + Math.PI / 2, 12))))
  }
  // ring of columns and the dome above (dashed)
  for (let i = 0; i < 8; i++) {
    const a = Math.PI / 8 + (i * Math.PI) / 4
    L.profile.push(circle([c[0] + 90 * Math.cos(a), c[1] + 90 * Math.sin(a)], 7))
  }
  L.fine.push(circle(c, 90, 'stroke-dasharray="5 3"'))
  // octagonal font with steps down
  for (const r of [56, 46, 36]) L.profile.push(el(path(oct(r), true)))
  const d = courses(L, 'bp-water', oct(30), 0, 5, 'shading')
  L.fine.push(el(path(oct(30), true)))
  L.center.push(line([c[0] - ro - 20, c[1]], [c[0] + ro + 20, c[1]]), line([c[0], c[1] - ro - 20], [c[0], c[1] + ro + 20]))
  B.add([c[0] - ro - 20, c[1] - ro - 20], [c[0] + ro + 20, c[1] + ro + 20])
  L.dims.push(hDim(c[1] + ro + 40, c[0] - ri * Math.cos(Math.PI / 8), c[0] + ri * Math.cos(Math.PI / 8), 'ACROSS FLATS'))
  callouts(L, [
    { text: 'OCTAGONAL WALL', at: [c[0] - ri - 10, c[1] - 60] },
    { text: 'NICHE', at: [c[0] - 118, c[1] - 118] },
    { text: 'DOME ABOVE', at: [c[0] - 64, c[1] - 64] },
    { text: 'COLUMN RING', at: [c[0] - 83, c[1] + 34] },
    { text: 'STEPS DOWN', at: [c[0] - 46, c[1] + 10] },
    { text: 'FONT', at: [c[0] - 30, c[1] - 6] },
    { text: 'DOOR', at: [c[0] - 26, yo - 4] },
  ], c[0] - ro - 20)
  return finish(meta('baptistery', 'Baptistery', 'Building set apart for baptism', 'PLAN', 'REL-15',
    'Plan of an octagonal baptistery: thick eight-sided walls with niches in the diagonal faces, a ring of columns carrying the dome, and a sunken octagonal font reached by steps at the centre.', 30, 'metres (indicative)'), L, B, d)
}

function qiblaWall(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 220
  const x1 = 540
  const top = 170
  const bot = 540
  const t = 16
  const cx = (x0 + x1) / 2
  // qibla wall with the mihrab niche projecting outward
  const outer = ring([cx, top - 24], 34, Math.PI, 2 * Math.PI, 16)
  const niche = ring([cx, top], 20, 2 * Math.PI, Math.PI, 12)
  hatched(L, [[x0 - t, top], [x0 - t, top - 24], [cx - 34, top - 24], ...outer, [x1 + t, top - 24], [x1 + t, top], [cx + 20, top], ...niche, [cx - 20, top]])
  // side and entrance walls
  hatched(L, rect(x0 - t, top, t, bot - top + t))
  hatched(L, rect(x1, top, t, bot - top + t))
  hatched(L, rect(x0, bot, cx - 30 - x0, t))
  hatched(L, rect(cx + 30, bot, x1 - cx - 30, t))
  // minbar to the right of the mihrab, perpendicular to the wall
  L.profile.push(el(path(rect(cx + 40, top + 2, 16, 84), true)))
  let st = ''
  for (let y = top + 30; y < top + 86; y += 8) st += `M${cx + 40} ${y}h16`
  L.fine.push(el(st))
  // prayer rows parallel to the qibla wall
  for (let y = top + 110; y < bot - 20; y += 30) L.fine.push(line([x0 + 10, y], [x1 - 10, y], 'stroke-dasharray="6 3"'))
  // column grid
  for (const x of [x0 + 64, x0 + 128, x1 - 128, x1 - 64]) for (const y of [top + 100, top + 190, top + 280]) L.profile.push(circle([x, y], 7))
  // direction of prayer
  arrow(L, [cx, bot - 20], [cx, top - 78])
  L.notes.push(text(cx + 8, top - 66, 'QIBLA: TOWARDS MECCA', 'class="t-small t-accent"'))
  B.add([x0 - t, top - 60], [x1 + t, bot + t])
  L.dims.push(hDim(bot + 40, x0, x1, 'PRAYER HALL'))
  callouts(L, [
    { text: 'MIHRAB (NICHE)', at: [cx - 20, top - 12] },
    { text: 'QIBLA WALL', at: [x0 - t, top - 12] },
    { text: 'MINBAR (PULPIT)', at: [cx + 40, top + 60] },
    { text: 'PRAYER ROWS', at: [x0 + 10, top + 140] },
    { text: 'COLUMN', at: [x0 + 57, top + 190] },
    { text: 'ENTRANCE', at: [cx - 30, bot + 8] },
  ], x0 - t)
  return finish(meta('qibla-wall', 'Qibla Wall', 'Wall of a mosque facing Mecca', 'PLAN', 'REL-16',
    'Plan of a mosque prayer hall: the qibla wall facing Mecca with the mihrab niche at its centre and the minbar beside it; the rows of worshippers run parallel to it, so the whole hall is oriented by this one wall.', 30, 'metres (indicative)'), L, B)
}

// ---------------------------------------------------------------------------
// Transept: isometric massing with a key plan
// ---------------------------------------------------------------------------
function transept(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const s = 0.8
  const P0 = axo([296, 560], 'isometric')
  const P = Object.assign((p: P3) => P0([p[0] * s, p[1] * s, p[2] * s]), { kind: P0.kind })
  const H = 70
  const R = 40
  const X1 = 380 // east end of nave
  const tr = { x0: 220, x1: 280 }
  const mid = 250
  const S = -76 // south arm end
  const N = 156 // north arm end
  const thin = (a: P3, b: P3) => L.profile.push(line(P(a), P(b), THIN))
  // north arm (far): west wall and west roof slope (to the valley)
  face(L, P, [[tr.x0, 80, 0], [tr.x0, N, 0], [tr.x0, N, H], [tr.x0, 80, H]], 'dark')
  face(L, P, [[tr.x0, N, H], [mid, N, H + R], [mid, 40, H + R], [tr.x0, 80, H]], 'light')
  // nave: west gable end, south wall, south roof slope
  face(L, P, [[0, 0, 0], [0, 80, 0], [0, 80, H], [0, 40, H + R], [0, 0, H]], 'dark')
  face(L, P, [[0, 0, 0], [X1, 0, 0], [X1, 0, H], [0, 0, H]], 'mid')
  face(L, P, [[0, 0, H], [X1, 0, H], [X1, 40, H + R], [0, 40, H + R]], 'light')
  for (let x = 24; x < X1; x += 36) if (x < tr.x0 - 16 || x > tr.x1 + 6) {
    thin([x, 0, 18], [x, 0, 50])
    thin([x + 10, 0, 18], [x + 10, 0, 50])
  }
  L.profile.push(circle(P([0, 40, H - 4]), 8))
  thin([0, 30, 0], [0, 30, 36])
  thin([0, 50, 0], [0, 50, 36])
  // crossing tower: faces cut by the nave roof below
  const tx0 = mid - 24
  const tx1 = mid + 24
  const ty0 = 16
  const ty1 = 64
  const tH = 160
  face(L, P, [[tx0, ty0, H + ty0], [tx0, 40, H + R], [tx0, ty1, H + (80 - ty1)], [tx0, ty1, tH], [tx0, ty0, tH]], 'dark')
  face(L, P, [[tx0, ty0, H + ty0], [tx1, ty0, H + ty0], [tx1, ty0, tH], [tx0, ty0, tH]], 'mid')
  face(L, P, [[tx0, ty0, tH], [tx1, ty0, tH], [mid, 40, tH + 44]], 'light')
  face(L, P, [[tx0, ty0, tH], [mid, 40, tH + 44], [tx0, ty1, tH]], 'mid')
  for (const yy of [28, 44]) thin([tx0, yy, tH - 34], [tx0, yy, tH - 12])
  for (const xx of [mid - 8, mid + 8]) thin([xx, ty0, tH - 34], [xx, ty0, tH - 12])
  // south arm (near): west wall, gable end, west roof slope to the valley
  face(L, P, [[tr.x0, S, 0], [tr.x0, 0, 0], [tr.x0, 0, H], [tr.x0, S, H]], 'dark')
  face(L, P, [[tr.x0, S, 0], [tr.x1, S, 0], [tr.x1, S, H], [mid, S, H + R], [tr.x0, S, H]], 'mid')
  face(L, P, [[tr.x0, S, H], [mid, S, H + R], [mid, 40, H + R], [tr.x0, 0, H]], 'light')
  L.profile.push(circle(P([mid, S, H - 6]), 9), circle(P([mid, S, H - 6]), 5))
  thin([mid - 12, S, 0], [mid - 12, S, 36])
  thin([mid + 12, S, 0], [mid + 12, S, 36])
  // ground
  L.fine.push(line(P([-30, 0, 0]), P([X1 + 30, 0, 0])), line(P([0, -40, 0]), P([0, 120, 0])))
  addAxo(B, P, [0, 80, H], [X1 + 30, 0, 0], [tr.x0, N, 0], [tr.x0, S, 0], [mid, 40, tH + 44], [0, -40, 0])
  // key plan: Latin cross with the transept arms accented
  const k = 0.42
  const kx = 420
  const ky = 70
  const kp = (x: number, y: number): Pt => [kx + x * k, ky + y * k]
  L.fine.push(el(path([kp(0, 120), kp(160, 120), kp(160, 0), kp(220, 0), kp(220, 120), kp(300, 120), kp(300, 200), kp(220, 200), kp(220, 320), kp(160, 320), kp(160, 200), kp(0, 200)], true)))
  L.cut.push(el(path([kp(160, 0), kp(220, 0), kp(220, 120), kp(160, 120)], true), ACCENT), el(path([kp(160, 200), kp(220, 200), kp(220, 320), kp(160, 320)], true), ACCENT))
  L.fine.push(el(path([kp(160, 120), kp(220, 120), kp(220, 200), kp(160, 200)], true), 'stroke-dasharray="3 2"'))
  L.notes.push(text(kx, ky - 10, 'KEY PLAN', 'class="t-small"'), text(kp(222, 60)[0] + 4, kp(222, 60)[1], 'TRANSEPT', 'class="t-small t-accent"'), text(kp(222, 160)[0] + 4, kp(222, 160)[1] + 3, 'CROSSING', 'class="t-small"'))
  B.add(kp(0, 0), kp(300, 320))
  callouts(L, [
    { text: 'CROSSING TOWER', at: P([tx0, 40, tH - 20]) },
    { text: 'TRANSEPT ARM (NORTH)', at: P([tr.x0, 120, H / 2]) },
    { text: 'NAVE ROOF', at: P([70, 20, H + 20]) },
    { text: 'WEST FRONT', at: P([0, 60, 50]) },
    { text: 'NAVE', at: P([120, 0, 30]) },
    { text: 'TRANSEPT ARM (SOUTH)', at: P([tr.x0, -40, 40]) },
    { text: 'ROSE WINDOW', at: P([mid - 9, S, H - 6]) },
  ], P([0, 120, 0])[0])
  return finish(meta('transept', 'Transept', 'Cross arms of a cruciform church', 'ISOMETRIC', 'REL-17',
    'Isometric of a cruciform church: the transept arms cross the long nave at right angles, meeting it at a crossing marked by a tower; the key plan shows the Latin-cross layout this produces.', 26, 'metres (indicative)'), L, B, AXO_DEFS)
}

export const RELIGIOUS_SHEETS: Array<() => SheetSpec> = [
  altar, minbar, roodScreen, mihrab, bellTower, minaret, gopuram, shikhara, pagoda, stupa, torii, nave, monolithic, apse, baptistery, qiblaWall, transept,
]
