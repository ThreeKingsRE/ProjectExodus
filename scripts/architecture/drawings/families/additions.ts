/**
 * Elements added to the library after the main redraw: the keep tower
 * (SECTION), the ambulatory (PLAN), rafters (SECTION), the ridgepole and floor
 * joists (ISOMETRIC framing), and masonry types (ELEVATION).
 */
import { type Pt, type SheetSpec, f, path, el, vDim, hDim, text } from '../sheet'
import { newLayers, finish, hatched, circle, line, rect, ring, callouts, arrow, Bounds, ORIGINAL, axo, box, face, addAxo, AXO_DEFS, depthKey, paint, type Item, type P3 } from '../kit'

const meta = (id: string, title: string, subtitle: string, view: string, sheetNo: string, description: string, unitPx: number, unitName: string, source = ORIGINAL) =>
  ({ id, title, subtitle, view, sheetNo, description, source, scale: { unitPx, unitName, count: 4 } })
const THIN = 'class="l-fine"'

function tower(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 390
  const ground = 590
  const top = 170
  const wb = 46 // wall thickness at the base
  const wt = 30 // at the top
  const half = 110
  // battered walls (thicker at the foot), cut
  for (const s of [-1, 1]) {
    const o = cx + s * half
    hatched(L, [[o, ground], [o + s * wb, ground], [o + s * wt, top], [o, top]].map(([x, y]) => [x, y] as Pt))
  }
  // floors on timber beams, ladders between them
  const floors = [500, 390, 280]
  for (const y of floors) {
    hatched(L, rect(cx - half, y, 2 * half, 10), 'h-timber')
    for (let x = cx - half + 20; x < cx + half; x += 40) L.fine.push(circle([x, y + 15], 4))
  }
  L.fine.push(el(`M${cx + 60} ${floors[0]}l-24 -${floors[0] - floors[1] - 10}M${cx + 76} ${floors[0]}l-24 -${floors[0] - floors[1] - 10}`), el(`M${cx - 60} ${floors[1]}l24 -${floors[1] - floors[2] - 10}M${cx - 76} ${floors[1]}l24 -${floors[1] - floors[2] - 10}`))
  // roof/wall walk and battlements
  hatched(L, rect(cx - half, top, 2 * half, 12), 'h-timber')
  for (const s of [-1, 1]) {
    const o = cx + s * (half + wt / 2)
    L.profile.push(el(path(rect(o - 8, top - 26, 16, 26), true)))
    L.profile.push(el(path(rect(cx + s * half - (s > 0 ? 0 : wt), top - 8, wt, 8), true)))
  }
  // arrow slits through the walls
  for (const y of [440, 330, 230]) for (const s of [-1, 1]) {
    const x0 = cx + s * half
    L.cut.push(`<path d="${path(rect(Math.min(x0, x0 + s * 40), y, 40, 6), true)}" style="fill: var(--_paper); stroke: none"/>`)
  }
  // raised entrance on the first floor with a removable timber stair outside
  L.cut.push(`<path d="${path(rect(cx - half - wb, floors[1] - 60, wb, 60), true)}" style="fill: var(--_paper); stroke: none"/>`)
  L.profile.push(el(`M${cx - half - wb} ${floors[1] - 60}h${wb}`), el(`M${cx - half - wb} ${floors[1]}h${wb}`))
  const st: Pt[] = [[cx - half - wb - 110, ground]]
  for (let k = 0; k < 6; k++) st.push([cx - half - wb - 110 + k * 18, ground - (k + 1) * 30], [cx - half - wb - 92 + k * 18, ground - (k + 1) * 30])
  L.fine.push(el(path(st)), line([cx - half - wb - 110, ground], [cx - half - wb, ground - 200]))
  L.profile.push(line([cx - 240, ground], [cx + 180, ground]))
  B.add([cx - 240, top - 26], [cx + half + wb, ground])
  L.dims.push(vDim(cx + half + wb + 24, ground, top, 'HEIGHT', cx + half + wb))
  callouts(L, [
    { text: 'BATTLEMENTS', at: [cx - half - wt / 2 - 8, top - 18] },
    { text: 'ROOF / WALL WALK', at: [cx - 60, top + 6] },
    { text: 'ARROW SLIT', at: [cx - half - 20, 233] },
    { text: 'UPPER CHAMBER', at: [cx - 30, 340] },
    { text: 'RAISED ENTRANCE', at: [cx - half - wb, floors[1] - 30] },
    { text: 'TIMBER STAIR (REMOVABLE)', at: [cx - half - wb - 60, ground - 90] },
    { text: 'STORE (NO DOOR)', at: [cx - 40, 550] },
    { text: 'BATTERED BASE', at: [cx - half - wb + 4, ground - 10] },
  ], cx - 240)
  return finish(meta('tower', 'Tower', 'Tall fortified keep', 'SECTION', 'FRT-01',
    'Section through a medieval keep: battered walls thickest at the foot, timber floors stacked above a doorless store, an entrance raised to the first floor and reached by a removable stair, arrow slits, and battlements around the wall walk.', 30, 'metres (indicative)'), L, B)
}

function ambulatory(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [380, 300]
  const rIn = 80
  const rOut = 160
  const w = 20
  // outer wall with radiating chapels
  const outer = ring(c, rOut + w, Math.PI, 2 * Math.PI, 48)
  const inner = ring(c, rOut, 2 * Math.PI, Math.PI, 48)
  hatched(L, [[c[0] - rOut - w, c[1] + 300], ...outer, [c[0] + rOut + w, c[1] + 300], [c[0] + rOut, c[1] + 300], ...inner, [c[0] - rOut, c[1] + 300]])
  for (let k = 0; k < 5; k++) {
    const a = Math.PI + ((k + 0.5) / 5) * Math.PI
    const m: Pt = [c[0] + (rOut + w + 26) * Math.cos(a), c[1] + (rOut + w + 26) * Math.sin(a)]
    hatched(L, [...ring(m, 40, a - Math.PI / 2, a + Math.PI / 2, 14), ...ring(m, 28, a + Math.PI / 2, a - Math.PI / 2, 14)])
    L.cut.push(`<path d="${path(ring(m, 28, a + Math.PI / 2, a + Math.PI * 1.5, 14), true)}" style="fill: var(--_paper); stroke: none"/>`)
    L.profile.push(el(path(rect(m[0] - 7, m[1] - 5, 14, 10), true)))
  }
  // apse arcade (columns on the inner semicircle) and straight choir arcades
  for (let k = 0; k <= 6; k++) { const a = Math.PI + (k / 6) * Math.PI; L.profile.push(circle([c[0] + rIn * Math.cos(a), c[1] + rIn * Math.sin(a)], 8)) }
  for (let y = c[1] + 50; y < c[1] + 300; y += 50) for (const s of [-1, 1]) L.profile.push(circle([c[0] + s * rIn, y], 8))
  // altar and the walking route around it
  L.profile.push(el(path(rect(c[0] - 24, c[1] + 10, 48, 22), true)))
  const route = ring(c, (rIn + rOut) / 2, Math.PI * 1.02, Math.PI * 1.98, 30)
  L.center.push(el(path([[c[0] - (rIn + rOut) / 2, c[1] + 240], ...route, [c[0] + (rIn + rOut) / 2, c[1] + 240]])))
  arrow(L, [c[0] + (rIn + rOut) / 2, c[1] + 120], [c[0] + (rIn + rOut) / 2, c[1] + 240])
  B.add([c[0] - rOut - w - 70, c[1] - rOut - w - 70], [c[0] + rOut + w + 70, c[1] + 300])
  L.dims.push(hDim(c[1] + 330, c[0] - rOut, c[0] - rIn, 'AMBULATORY'))
  callouts(L, [
    { text: 'RADIATING CHAPEL', at: [c[0] - 150, c[1] - 160] },
    { text: 'OUTER WALL', at: [c[0] - rOut - 10, c[1] - 40] },
    { text: 'AMBULATORY', at: [c[0] - 120, c[1] + 20] },
    { text: 'APSE ARCADE', at: [c[0] - rIn - 4, c[1]] },
    { text: 'ALTAR', at: [c[0] - 24, c[1] + 21] },
    { text: 'CHOIR AISLE', at: [c[0] - 120, c[1] + 200] },
  ], c[0] - rOut - w - 70)
  L.notes.push(text(c[0] + 126, c[1] + 180, 'PROCESSION', 'class="t-small t-accent"'))
  return finish(meta('ambulatory', 'Ambulatory', 'Walkway curving around the apse', 'PLAN', 'REL-18',
    'Plan of the east end of a pilgrimage church: the side aisles continue as a curved walkway around the back of the apse, behind its arcade of columns, giving access to a ring of radiating chapels without disturbing the altar.', 30, 'metres (indicative)'), L, B)
}

function rafter(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const plate = 450
  const halfSpan = 170
  const pitch = (40 * Math.PI) / 180
  const rise = halfSpan * Math.tan(pitch)
  const ridgeY = plate - rise
  const d = 14 // rafter depth
  // walls and wall plates (cut)
  for (const s of [-1, 1]) {
    hatched(L, rect(cx + s * halfSpan - (s > 0 ? 0 : 30), plate + 12, 30, 140), 'h-brick')
    hatched(L, rect(cx + s * halfSpan - (s > 0 ? 0 : 30), plate, 30, 12), 'h-timber')
  }
  // rafters with overhang, birdsmouth notch at the plate, meeting at a ridge board
  const over = 50
  for (const s of [-1, 1]) {
    const foot: Pt = [cx + s * (halfSpan + over), plate + over * Math.tan(pitch)]
    const head: Pt = [cx + s * 6, ridgeY]
    const dv = d / Math.cos(pitch)
    hatched(L, [foot, head, [head[0], head[1] - dv], [foot[0], foot[1] - dv]], 'h-timber')
  }
  hatched(L, rect(cx - 6, ridgeY - 30, 12, 34), 'h-timber')
  // battens and tiles on top
  for (const s of [-1, 1]) {
    for (let t = 0.08; t < 1; t += 0.12) {
      const x = cx + s * (halfSpan + over) * (1 - t)
      const y = plate + over * Math.tan(pitch) - t * (plate + over * Math.tan(pitch) - ridgeY) - d / Math.cos(pitch) - 4
      L.profile.push(el(path(rect(x - 3, y - 4, 6, 4), true)))
    }
    L.fine.push(line([cx + s * (halfSpan + over + 6), plate + over * Math.tan(pitch) - d - 10], [cx + s * 10, ridgeY - d - 18]))
  }
  // ceiling joist tying the feet together
  hatched(L, rect(cx - halfSpan - 30, plate - 12, 2 * halfSpan + 60, 10), 'h-timber')
  L.fine.push(el(`M${cx - 70} ${plate - 12}A80 80 0 0 0 ${cx - 70 + 60} ${plate - 12}`, 'stroke-dasharray="3 3"'))
  // pitch angle
  L.fine.push(el(`M${cx + halfSpan + over - 60} ${plate + over * Math.tan(pitch)}A60 60 0 0 0 ${f(cx + halfSpan + over - 60 * Math.cos(pitch))} ${f(plate + over * Math.tan(pitch) - 60 * Math.sin(pitch))}`))
  L.notes.push(text(cx + halfSpan + over - 96, plate + over * Math.tan(pitch) - 10, '40°', 'class="t-small"'))
  B.add([cx - halfSpan - over - 10, ridgeY - 34], [cx + halfSpan + over + 10, plate + 152])
  L.dims.push(hDim(plate + 176, cx - halfSpan, cx + halfSpan, 'SPAN'))
  L.dims.push(vDim(cx + halfSpan + over + 30, plate, ridgeY, 'RISE', cx + 12))
  callouts(L, [
    { text: 'RIDGE BOARD', at: [cx - 6, ridgeY - 14] },
    { text: 'COMMON RAFTER', at: [cx - halfSpan * 0.5, plate - rise * 0.5] },
    { text: 'BATTENS + TILES', at: [cx - halfSpan * 0.7, plate - rise * 0.3 - 26] },
    { text: 'CEILING JOIST (TIE)', at: [cx - 120, plate - 7] },
    { text: 'BIRDSMOUTH ON WALL PLATE', at: [cx - halfSpan - 15, plate] },
    { text: 'EAVES OVERHANG', at: [cx - halfSpan - over + 10, plate + over * Math.tan(pitch) - 6] },
    { text: 'WALL', at: [cx - halfSpan - 30, plate + 90] },
  ], cx - halfSpan - over - 10)
  return finish(meta('rafter', 'Rafter', 'Sloping beam that carries the roof', 'SECTION', 'RF-17',
    'Section through a pitched roof: pairs of common rafters rise from notched seats on the wall plates to a ridge board, overhang the walls at the eaves, carry battens and tiles, and are tied at their feet by a ceiling joist so they cannot spread the walls.', 30, 'metres (indicative)'), L, B)
}

/** Timber member as a line with a paper halo, painted far-to-near. */
function member(P: (p: P3) => Pt, a: P3, b: P3, w: number, key: (p: P3) => number): Item {
  const d = path([P(a), P(b)])
  const m: P3 = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2]
  return { key: key(m), svg: [el(d, `style="stroke: var(--_paper); stroke-width: ${w + 4}; stroke-linecap: butt"`), el(d, `style="stroke-width: ${w}; stroke-linecap: butt"`), el(d, `style="stroke: var(--_paper); stroke-width: ${Math.max(0.5, w - 3)}; stroke-linecap: butt"`)] }
}

function ridgepole(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const P = axo([300, 560], 'isometric')
  const key = depthKey('above')
  const len = 260
  const half = 90
  const wallH = 120
  const rise = 80
  const items: Item[] = []
  // wall plates along both eaves, posts at the gables carrying the ridge
  for (const y of [-half, half]) items.push(member(P, [0, y, wallH], [len, y, wallH], 8, key))
  for (const x of [0, len]) {
    items.push(member(P, [x, 0, 0], [x, 0, wallH + rise], 8, key))
    items.push(member(P, [x, -half, wallH], [x, half, wallH], 6, key))
  }
  // the ridgepole and pairs of rafters hanging on it
  items.push(member(P, [-20, 0, wallH + rise], [len + 20, 0, wallH + rise], 10, key))
  for (let x = 20; x <= len - 20; x += 40) for (const y of [-half - 16, half + 16]) items.push(member(P, [x, y, wallH - (16 * rise) / half], [x, 0, wallH + rise], 5, key))
  // a collar tie on two pairs
  for (const x of [100, 180]) items.push(member(P, [x, -half / 2, wallH + rise / 2], [x, half / 2, wallH + rise / 2], 3, key))
  paint(L, items)
  L.fine.push(el(path([P([0, -half, 0]), P([len, -half, 0]), P([len, half, 0]), P([0, half, 0])], true), 'stroke-dasharray="4 3"'))
  addAxo(B, P, [-20, half + 16, wallH + rise], [len + 20, -half - 16, wallH + rise], [0, half, 0], [len, -half, 0], [0, -half, 0], [len + 20, 0, wallH + rise])
  callouts(L, [
    { text: 'RIDGEPOLE', at: P([20, 0, wallH + rise]) },
    { text: 'RAFTER PAIR', at: P([60, -half * 0.6, wallH + rise * 0.4]) },
    { text: 'COLLAR TIE', at: P([100, -half / 4, wallH + rise / 2]) },
    { text: 'GABLE POST', at: P([0, 0, wallH * 0.6]) },
    { text: 'WALL PLATE', at: P([30, -half, wallH]) },
    { text: 'FOOTPRINT (DASHED)', at: P([0, half / 2, 0]) },
  ], B.get()[0])
  return finish(meta('ridgepole', 'Ridgepole', 'Horizontal beam along the peak of a roof', 'ISOMETRIC', 'RF-18',
    'Isometric of a roof frame: the ridgepole runs along the peak, carried by posts at each gable, and the rafters hang in pairs between it and the wall plates, with collar ties stiffening some pairs.', 26, 'metres (indicative)'), L, B)
}

function joist(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const P = axo([270, 520], 'isometric')
  const W = 300
  const D = 200
  const jh = 24
  const jw = 6
  const beamH = 20
  // supporting beams (or wall plates) at both ends
  box(L, P, [0, D - 16, 0], W, 16, beamH, { top: 'light', front: 'mid', side: 'dark' })
  // joists spanning between, far to near, with bridging at mid-span
  const xs: number[] = []
  for (let x = 10; x < W; x += 40) xs.push(x)
  for (const x of [...xs].reverse()) box(L, P, [x, 0, beamH], jw, D, jh, { top: 'light', front: 'mid', side: 'dark' })
  for (let i = 0; i < xs.length - 1; i++) {
    const a = xs[i] + jw
    const b = xs[i + 1]
    L.profile.push(line(P([a, D / 2, beamH]), P([b, D / 2, beamH + jh]), THIN), line(P([a, D / 2, beamH + jh]), P([b, D / 2, beamH]), THIN))
  }
  box(L, P, [0, 0, 0], W, 16, beamH, { top: 'light', front: 'mid', side: 'dark' })
  // subfloor boards laid on the far half (cutaway)
  for (let k = 0; k < 6; k++) {
    const y = D - 16 - k * 16
    face(L, P, [[0, y, beamH + jh], [W, y, beamH + jh], [W, y + 15, beamH + jh], [0, y + 15, beamH + jh]], 'light')
  }
  addAxo(B, P, [0, D, beamH + jh], [W, 0, 0], [0, 0, 0], [W, D, beamH + jh], [0, D, 0])
  L.dims.push(el(path([P([xs[1], -20, beamH + jh]), P([xs[2], -20, beamH + jh])]), 'class="l-fine"'))
  callouts(L, [
    { text: 'SUBFLOOR (CUTAWAY)', at: P([40, D - 40, beamH + jh]) },
    { text: 'JOIST', at: P([xs[0], 40, beamH + jh / 2]) },
    { text: 'BRIDGING (STRUTS)', at: P([xs[1] + 20, D / 2, beamH + jh / 2]) },
    { text: 'BEAM / WALL PLATE', at: P([0, 8, beamH / 2]) },
    { text: 'JOIST SPACING', at: P([(xs[1] + xs[2]) / 2, -20, beamH + jh]) },
  ], B.get()[0])
  return finish(meta('joist', 'Joist', 'Parallel beams that carry a floor or ceiling', 'ISOMETRIC', 'STC-23',
    'Isometric of floor framing: closely spaced joists span between two supporting beams, braced against twisting by criss-cross bridging at mid-span, with subfloor boards (shown only on the far half) nailed across their tops.', 26, 'units (indicative)'), L, B, AXO_DEFS)
}

function masonry(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 200
  const top = 200
  const bot = 520
  const pw = 120
  // three panels side by side: ashlar, rubble, brick
  for (let k = 0; k < 3; k++) L.profile.push(el(path(rect(x0 + k * pw, top, pw, bot - top), true)))
  // ashlar: regular courses of squared stone
  for (let y = top; y < bot; y += 40) {
    L.fine.push(line([x0, y], [x0 + pw, y]))
    for (let x = x0 + ((y - top) / 40) % 2 * 30; x < x0 + pw; x += 60) if (x > x0) L.fine.push(line([x, y], [x, y + 40]))
  }
  // rubble: irregular stones (deterministic)
  let seed = 5
  const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280)
  for (let y = top + 4; y < bot - 20; y += 30) {
    let x = x0 + pw + 4
    while (x < x0 + 2 * pw - 14) {
      const w = 18 + rnd() * 22
      const h = 18 + rnd() * 10
      const ww = Math.min(w, x0 + 2 * pw - 4 - x)
      L.fine.push(el(`M${f(x)} ${f(y + h * 0.3)}L${f(x + ww * 0.3)} ${f(y)}L${f(x + ww * 0.9)} ${f(y + 2)}L${f(x + ww)} ${f(y + h * 0.7)}L${f(x + ww * 0.6)} ${f(y + h)}L${f(x + 3)} ${f(y + h * 0.9)}Z`))
      x += ww + 4
    }
  }
  // brick in Flemish bond: headers and stretchers alternating in each course
  const bx = x0 + 2 * pw
  for (let y = top, row = 0; y < bot; y += 12, row++) {
    L.fine.push(line([bx, y], [bx + pw, y]))
    // Flemish bond: header, stretcher, header... each header centred on the stretcher below
    let x = row % 2 ? bx - 6 : bx
    let header = row % 2 === 0
    while (x < bx + pw) {
      const w = header ? 12 : 24
      const a = Math.max(bx, x)
      const b = Math.min(bx + pw, x + w)
      if (x > bx) L.fine.push(line([x, y], [x, y + 12]))
      if (header && b - a > 2) L.shading.push(el(path(rect(a + 1, y + 1, b - a - 2, 10), true)))
      x += w
      header = !header
    }
  }
  for (const [k, name] of ['ASHLAR', 'RUBBLE', 'BRICK'].entries()) L.notes.push(text(x0 + k * pw + pw / 2, top - 12, name, 'class="t-sub" text-anchor="middle"'))
  B.add([x0, top - 24], [x0 + 3 * pw, bot])
  L.dims.push(hDim(bot + 22, x0, x0 + pw, 'PANEL'))
  callouts(L, [
    { text: 'DRESSED STONE BLOCK', at: [x0 + 10, top + 20] },
    { text: 'MORTAR JOINT', at: [x0 + 40, top + 80] },
    { text: 'IRREGULAR STONE', at: [x0 + pw + 20, 330] },
    { text: 'HEADER (END OUT)', at: [bx + 3, 420] },
    { text: 'STRETCHER (SIDE OUT)', at: [bx + 30, 450] },
  ], x0)
  return finish(meta('masonry', 'Masonry', 'Walls built of stone or brick units laid in mortar', 'ELEVATION', 'WAL-11',
    'Elevation comparing three kinds of masonry: ashlar of squared, dressed stone in regular courses; rubble of rough, irregular stones; and brick in Flemish bond, with headers (ends) and stretchers (sides) alternating in each course.', 30, 'units (indicative)'), L, B)
}

export const ADDITION_SHEETS: Array<() => SheetSpec> = [tower, ambulatory, rafter, ridgepole, joist, masonry]
