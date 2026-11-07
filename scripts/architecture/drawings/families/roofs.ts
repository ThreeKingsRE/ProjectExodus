/**
 * Roofs, buttresses, fortification and the remaining column sheets.
 *
 * Views: hip roof as a ROOF PLAN; mansard, thatch, buttress, flying buttress
 * and machicolation in SECTION; gable, cupola, lantern, stepped crown,
 * battlements and portcullis in ELEVATION; pilaster as a PLAN SECTION through
 * the wall; entasis as an exaggerated ELEVATION diagram.
 */
import { type Pt, type SheetSpec, f, path, el, vDim, hDim, text } from '../sheet'
import { newLayers, finish, hatched, masked, circle, line, rect, ring, callouts, arrow, courses, Bounds, ORIGINAL, type Layers } from '../kit'

const ACCENT = 'style="stroke: var(--_accent)"'

/** Angle marker: small arc from the horizontal to a slope, with label. */
function angleMark(L: Layers, at: Pt, toward: Pt, label: string, r = 30) {
  const a = Math.atan2(toward[1] - at[1], toward[0] - at[0])
  const dir = Math.sign(toward[0] - at[0]) || 1
  const a0 = dir > 0 ? 0 : Math.PI
  L.dims.push(el(path(ring(at, r, a0, a, 16))))
  L.dims.push(line(at, [at[0] + dir * (r + 14), at[1]]))
  L.dims.push(`<text x="${f(at[0] + dir * (r + 4))}" y="${f(at[1] - 6)}"${dir < 0 ? ' text-anchor="end"' : ''}>${label}</text>`)
}

// ---------------------------------------------------------------------------
function gable(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 340
  const ground = 470
  const W = 300
  const wallH = 170
  const pitch = 45 * (Math.PI / 180)
  const eaves = ground - wallH
  const ridge = eaves - (W / 2 + 18) * Math.tan(pitch)
  // gable wall with windows; roof edge (barge boards) projecting
  const wall: Pt[] = [[cx - W / 2, ground], [cx - W / 2, eaves], [cx, eaves - (W / 2) * Math.tan(pitch)], [cx + W / 2, eaves], [cx + W / 2, ground]]
  L.profile.push(el(path(wall, true)))
  const barge = (o: number): Pt[] => [[cx - W / 2 - 18, eaves + 18 * Math.tan(pitch) - o], [cx, ridge - o], [cx + W / 2 + 18, eaves + 18 * Math.tan(pitch) - o]]
  L.profile.push(el(path(barge(0))), el(path(barge(12))))
  L.fine.push(line(barge(0)[0], barge(12)[0]), line(barge(0)[2], barge(12)[2]))
  // brick coursing in the gable triangle
  const tri: Pt[] = [[cx - W / 2, eaves], [cx, eaves - (W / 2) * Math.tan(pitch)], [cx + W / 2, eaves]]
  const defs = courses(L, 'gb-tri', tri, 0, 8)
  // windows and door
  L.profile.push(el(path(rect(cx - 25, eaves - 70, 50, 50), true)), line([cx, eaves - 70], [cx, eaves - 20]))
  L.profile.push(el(path(rect(cx - 110, ground - 130, 50, 70), true)), el(path(rect(cx + 60, ground - 130, 50, 70), true)))
  L.profile.push(el(path(rect(cx - 20, ground - 110, 40, 110), true)))
  L.profile.push(line([cx - W / 2 - 40, ground], [cx + W / 2 + 40, ground]))
  L.center.push(line([cx, ridge - 30], [cx, ground + 10]))
  B.add([cx - W / 2 - 40, ridge - 20], [cx + W / 2 + 40, ground])
  angleMark(L, [cx + W / 2, eaves], [cx, eaves - (W / 2) * Math.tan(pitch)], '45°', 34)
  L.dims.push(hDim(ground + 22, cx - W / 2, cx + W / 2, 'SPAN'), vDim(cx + W / 2 + 56, eaves, ridge, 'RISE'))
  callouts(L, [
    { text: 'RIDGE', at: [cx - 4, ridge] },
    { text: 'BARGEBOARD', at: [barge(6)[0][0] + 50, barge(6)[0][1] - 50 * Math.tan(pitch)] },
    { text: 'GABLE', at: [cx - 60, eaves - 40] },
    { text: 'EAVES', at: [cx - W / 2 - 18, eaves + 18] },
    { text: 'WALL', at: [cx - W / 2, ground - 60] },
  ], cx - W / 2 - 40)
  return finish({
    id: 'gable', title: 'Gable', subtitle: 'Triangular wall end of a pitched roof', view: 'ELEVATION', sheetNo: 'ROF-01',
    source: ORIGINAL, scale: { unitPx: W / 10, unitName: 'tenths of span', count: 5 },
    description: 'Elevation of a house end where the wall rises into a triangle under the two slopes of the roof, edged by projecting bargeboards.',
  }, L, B, defs)
}

function hipRoof(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 190
  const y0 = 110
  const W = 360
  const D = 220
  const o = 18 // eaves overhang
  // walls below, dashed
  L.fine.push(el(path(rect(x0 + o, y0 + o, W - 2 * o, D - 2 * o), true), 'stroke-dasharray="6 4"'))
  L.profile.push(el(path(rect(x0, y0, W, D), true)))
  // equal pitch on all sides: hips at 45° in plan meeting a ridge
  const h = D / 2
  const r0: Pt = [x0 + h, y0 + h]
  const r1: Pt = [x0 + W - h, y0 + h]
  L.profile.push(line([x0, y0], r0), line([x0, y0 + D], r0), line([x0 + W, y0], r1), line([x0 + W, y0 + D], r1), line(r0, r1))
  // tile courses on each slope, parallel to the eaves
  const defs = [
    courses(L, 'hr-n', [[x0, y0], [x0 + W, y0], r1, r0], 0, 9),
    courses(L, 'hr-s', [[x0, y0 + D], [x0 + W, y0 + D], r1, r0], 0, 9),
    courses(L, 'hr-w', [[x0, y0], [x0, y0 + D], r0], Math.PI / 2, 9),
    courses(L, 'hr-e', [[x0 + W, y0], [x0 + W, y0 + D], r1], Math.PI / 2, 9),
  ].join('\n    ')
  // fall arrows
  arrow(L, [x0 + W / 2, y0 + h - 12], [x0 + W / 2, y0 + 20])
  arrow(L, [x0 + W / 2, y0 + h + 12], [x0 + W / 2, y0 + D - 20])
  arrow(L, [x0 + h - 30, y0 + h], [x0 + 22, y0 + h])
  arrow(L, [x0 + W - h + 30, y0 + h], [x0 + W - 22, y0 + h])
  L.notes.push(text(x0 + W / 2 + 6, y0 + 40, 'FALL', 'class="t-small t-accent"'))
  B.add([x0 - 6, y0 - 6], [x0 + W + 6, y0 + D + 6])
  L.dims.push(hDim(y0 + D + 24, x0, x0 + W, 'LENGTH'), vDim(x0 + W + 24, y0, y0 + D, 'WIDTH'))
  callouts(L, [
    { text: 'RIDGE', at: [x0 + W / 2 - 30, y0 + h] },
    { text: 'HIP', at: [x0 + h * 0.5, y0 + h * 0.5] },
    { text: 'HIPPED END', at: [x0 + 10, y0 + h + 30] },
    { text: 'EAVES', at: [x0, y0 + D - 30] },
    { text: 'WALL BELOW', at: [x0 + o, y0 + D - o - 20] },
  ], x0)
  return finish({
    id: 'hip-roof', title: 'Hip Roof', subtitle: 'Slopes on all four sides meeting at hips and a ridge', view: 'ROOF PLAN', sheetNo: 'ROF-02',
    source: ORIGINAL, scale: { unitPx: D / 10, unitName: 'tenths of width', count: 5 },
    description: 'Roof plan of a rectangular roof that slopes down on all four sides, the diagonal hips meeting a short central ridge, with arrows showing the direction of fall.',
  }, L, B, defs)
}

function mansard(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 340
  const floor = 450
  const W = 320
  const t = 10
  const lowerH = 120
  const lowerIn = 32 // steep lower slope (~75°)
  const upperRise = 40
  const A: Pt = [cx - W / 2, floor - 40] // top of wall / eaves
  const Bp: Pt = [cx - W / 2 + lowerIn, A[1] - lowerH] // break
  const C: Pt = [cx, Bp[1] - upperRise] // ridge
  const sym = (p: Pt): Pt => [2 * cx - p[0], p[1]]
  // roof as a cut band (section)
  const outer: Pt[] = [A, Bp, C, sym(Bp), sym(A)]
  const inner: Pt[] = outer.map(([x, y]) => [x + (x < cx ? t : x > cx ? -t : 0), y + t] as Pt)
  hatched(L, [...outer, ...[...inner].reverse()], 'h-timber')
  // walls and floor (section)
  hatched(L, rect(cx - W / 2, A[1], 22, floor - A[1]))
  hatched(L, rect(cx + W / 2 - 22, A[1], 22, floor - A[1]))
  hatched(L, rect(cx - W / 2 + 22, floor - 14, W - 44, 14), 'h-concrete')
  // dormer in the lower slope
  const dx = Bp[0] - 4
  L.profile.push(el(path([[dx - 40, A[1] - 30], [dx - 40, A[1] - 80], [dx + 10, A[1] - 80], [dx + 10, A[1] - 30]])))
  L.fine.push(el(path(rect(dx - 36, A[1] - 74, 8, 40), true)))
  // attic room: usable height
  L.center.push(line([cx - W / 2 + lowerIn + 10, floor - 14], [cx - W / 2 + lowerIn + 10, Bp[1] + 12]))
  L.notes.push(text(cx, floor - 70, 'HABITABLE ATTIC', 'text-anchor="middle" class="t-sub"'))
  L.center.push(line([cx, C[1] - 20], [cx, floor + 10]))
  B.add([cx - W / 2 - 50, C[1] - 20], [cx + W / 2 + 50, floor])
  angleMark(L, sym(A), sym(Bp), '≈75°', 26)
  angleMark(L, sym(Bp), C, '≈30°', 30)
  L.dims.push(hDim(floor + 22, cx - W / 2, cx + W / 2, 'SPAN'))
  callouts(L, [
    { text: 'RIDGE', at: [C[0] - 4, C[1]] },
    { text: 'UPPER SLOPE (SHALLOW)', at: [(Bp[0] + C[0]) / 2, (Bp[1] + C[1]) / 2] },
    { text: 'BREAK (CURB)', at: Bp },
    { text: 'DORMER', at: [dx - 40, A[1] - 60] },
    { text: 'LOWER SLOPE (STEEP)', at: [(A[0] + Bp[0]) / 2, (A[1] + Bp[1]) / 2 + 30] },
    { text: 'WALL (SECTION)', at: [cx - W / 2, floor - 30] },
  ], cx - W / 2 - 50)
  return finish({
    id: 'mansard', title: 'Mansard Roof', subtitle: 'Double-pitched roof: steep below, shallow above', view: 'SECTION', sheetNo: 'ROF-03',
    source: 'Form named after François Mansart (1598–1666). Original drawing by Project Exodus.',
    scale: { unitPx: W / 10, unitName: 'tenths of span', count: 5 },
    description: 'Cross-section of a roof with two slopes on each side: a nearly vertical lower slope pierced by a dormer window, then a low-pitched upper slope, creating a full-height room in the roof.',
  }, L, B)
}

function thatch(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 200
  const ground = 470
  const wallTop = 330
  const pitch = 50 * (Math.PI / 180)
  const len = 260
  const thick = 34
  const eave: Pt = [x0 - 30, wallTop + 26]
  const top: Pt = [eave[0] + len * Math.cos(pitch), eave[1] - len * Math.sin(pitch)]
  const n: Pt = [-Math.sin(pitch), -Math.cos(pitch)] // outward normal (up-left)
  const off = (p: Pt, d: number): Pt => [p[0] + n[0] * d, p[1] + n[1] * d]
  // wall (section)
  hatched(L, rect(x0, wallTop, 34, ground - wallTop), 'h-earth')
  // rafter, battens, thatch coat (section)
  const raft: Pt[] = [eave, top, off(top, -10), off(eave, -10)]
  hatched(L, raft, 'h-timber')
  const thatchPoly: Pt[] = [eave, top, off(top, thick), off(eave, thick + 6)]
  L.hatch.push(`<path d="${path(thatchPoly, true)}" fill="url(#h-thatch)" stroke="none"/>`)
  L.cut.push(el(path(thatchPoly, true)))
  for (let k = 1; k < 9; k++) {
    const p: Pt = [eave[0] + (top[0] - eave[0]) * (k / 9), eave[1] + (top[1] - eave[1]) * (k / 9)]
    L.fine.push(circle(off(p, 2), 2.4))
  }
  // ridge roll
  L.profile.push(circle(off(top, thick / 2 + 4), thick / 2 + 4))
  L.profile.push(line([x0 - 80, ground], [x0 + 300, ground]))
  // drip: water shed clear of the wall
  arrow(L, off([eave[0] + 20, eave[1] - 20], thick + 10), [eave[0] - 6, ground - 40])
  L.notes.push(text(eave[0] - 10, ground - 30, 'DRIP CLEAR OF WALL', 'text-anchor="end" class="t-small t-accent"'))
  B.add([x0 - 80, top[1] - thick - 20], [x0 + 300, ground])
  angleMark(L, [top[0] + 40, eave[1]], [top[0] + 40 - len * Math.cos(pitch) * 0.6, eave[1] - len * Math.sin(pitch) * 0.6], '≈50°', 30)
  L.dims.push(el(`M${f(off(top, 0)[0] + 20)} ${f(off(top, 0)[1] + 20)}L${f(off(top, thick)[0] + 20)} ${f(off(top, thick)[1] + 20)}`))
  L.notes.push(text(off(top, thick)[0] + 26, off(top, thick)[1] + 26, '≈300 MM COAT', 'class="t-small"'))
  callouts(L, [
    { text: 'RIDGE ROLL', at: off(top, thick / 2 + 4) },
    { text: 'THATCH COAT (REED)', at: off([eave[0] + 120, eave[1] - 140], thick * 0.5) },
    { text: 'BATTENS', at: [eave[0] + 72, eave[1] - 86] },
    { text: 'RAFTER', at: off([eave[0] + 40, eave[1] - 48], -6) },
    { text: 'WALL (SECTION)', at: [x0, ground - 60] },
  ], x0 - 80)
  return finish({
    id: 'thatch-roof', title: 'Thatch Roof', subtitle: 'Thick coat of reed or straw on a steep pitch', view: 'SECTION', sheetNo: 'ROF-04',
    source: ORIGINAL, scale: { unitPx: 34, unitName: '300 mm', count: 4 },
    description: 'Section through the eaves of a steep roof covered with a thick layer of reed laid on battens and rafters, finished with a rolled ridge, its deep overhang throwing rain clear of the wall.',
  }, L, B, '<pattern id="h-thatch" width="7" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(-40)"><path d="M1 0V12M4 2V12" class="ink l-hair"/></pattern>')
}

function cupolaOrLantern(kind: 'cupola' | 'lantern'): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 330
  const base = 420
  const w = 120
  const h = 130
  const L0 = base - h
  // supporting roof (cupola) or dome crown (lantern)
  let defs = ''
  if (kind === 'cupola') {
    L.profile.push(el(path([[cx - 230, base + 100], [cx, base - 10], [cx + 230, base + 100]])))
    defs = courses(L, 'cp-roof', [[cx - 230, base + 100], [cx, base - 10], [cx + 230, base + 100]], 0, 8)
  } else {
    L.profile.push(el(path(ring([cx, base + 330], 360, Math.PI * 1.32, Math.PI * 1.68, 40))))
    L.fine.push(...[0.36, 0.43, 0.5, 0.57, 0.64].map((u) => line([cx + 360 * Math.cos(Math.PI * (1 + u)), base + 330 + 360 * Math.sin(Math.PI * (1 + u))], [cx + 340 * Math.cos(Math.PI * (1 + u)), base + 330 + 340 * Math.sin(Math.PI * (1 + u))])))
  }
  // base drum / plinth
  L.profile.push(el(path(rect(cx - w / 2 - 10, base - 18, w + 20, 18), true)))
  // body with arched openings (louvres or glazing) between pilasters
  L.profile.push(el(path(rect(cx - w / 2, L0, w, h - 18), true)))
  for (const ox of [-w / 2 + 14, -12, w / 2 - 38]) {
    const ow = 24
    L.profile.push(el(`M${f(cx + ox)} ${f(base - 30)}V${f(L0 + 34)}A${ow / 2} ${ow / 2} 0 0 1 ${f(cx + ox + ow)} ${f(L0 + 34)}V${f(base - 30)}`))
    if (kind === 'cupola') for (let y = L0 + 40; y < base - 34; y += 7) L.fine.push(line([cx + ox + 2, y], [cx + ox + ow - 2, y + 3]))
    else L.fine.push(line([cx + ox + ow / 2, L0 + 24], [cx + ox + ow / 2, base - 30]), line([cx + ox, L0 + 70], [cx + ox + ow, L0 + 70]))
  }
  // cornice, small dome, finial / weathervane
  L.profile.push(el(path(rect(cx - w / 2 - 8, L0 - 12, w + 16, 12), true)))
  const dome = ring([cx, L0 - 12], w / 2 + 4, Math.PI, 2 * Math.PI, 30)
  L.profile.push(el(path(dome)))
  L.fine.push(el(path(ring([cx, L0 - 12], w / 2 - 14, Math.PI, 2 * Math.PI, 30))))
  const tip = L0 - 12 - (w / 2 + 4)
  if (kind === 'cupola') {
    L.profile.push(line([cx, tip], [cx, tip - 60]), el(`M${cx} ${tip - 52}l26 6l-26 6`), line([cx - 14, tip - 30], [cx + 14, tip - 30]))
    L.notes.push(text(cx - 16, tip - 26, 'N', 'class="t-small" text-anchor="end"'))
  } else {
    L.profile.push(line([cx, tip], [cx, tip - 26]), circle([cx, tip - 32], 6))
  }
  L.center.push(line([cx, tip - 70], [cx, base + 20]))
  B.add([cx - 230, tip - 70], [cx + 230, base + 100])
  L.dims.push(hDim(base + 20 + (kind === 'cupola' ? 100 : 0), cx - w / 2, cx + w / 2, 'WIDTH'))
  callouts(L, [
    { text: kind === 'cupola' ? 'WEATHERVANE' : 'FINIAL', at: [cx - 2, tip - (kind === 'cupola' ? 50 : 32)] },
    { text: kind === 'cupola' ? 'CUPOLA DOME' : 'LANTERN DOME', at: [cx - w / 2 + 6, L0 - 30] },
    { text: 'CORNICE', at: [cx - w / 2 - 8, L0 - 6] },
    { text: kind === 'cupola' ? 'LOUVRED OPENING' : 'GLAZED OPENING', at: [cx - w / 2 + 14, L0 + 60] },
    { text: 'BASE', at: [cx - w / 2 - 10, base - 9] },
    { text: kind === 'cupola' ? 'MAIN ROOF' : 'CROWN OF MAIN DOME', at: kind === 'cupola' ? [cx - 160, base + 64] : [cx - 150, base + 20] },
  ], cx - 230)
  return finish({
    id: kind, title: kind === 'cupola' ? 'Cupola' : 'Lantern',
    subtitle: kind === 'cupola' ? 'Small domed structure crowning a roof' : 'Glazed turret crowning a dome',
    view: 'ELEVATION', sheetNo: kind === 'cupola' ? 'ROF-05' : 'ROF-06',
    source: ORIGINAL, scale: { unitPx: w / 5, unitName: 'fifths of width', count: 5 },
    description: kind === 'cupola'
      ? 'Elevation of a small open turret with louvred arched openings and a little dome, sitting on the ridge of a pitched roof and topped by a weathervane.'
      : 'Elevation of a small glazed turret with arched windows and a little dome, sitting on the crown of a larger dome to let light down into the space below.',
  }, L, B, defs)
}

function buttress(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const wx = 300
  const ground = 480
  const top = 120
  const wallT = 46
  // wall (section) and stepped buttress (section through its centre line)
  hatched(L, rect(wx, top, wallT, ground - top))
  // stages from the ground up: [projection from the wall, stage height]
  const steps: Array<[number, number]> = [[130, 170], [90, 110], [50, 70]]
  const poly: Pt[] = [[wx + wallT, ground]]
  let y = ground
  steps.forEach(([proj, ht], i) => {
    const yTop = y - ht
    const nextProj = steps[i + 1]?.[0] ?? 0
    poly.push([wx + wallT + proj, y], [wx + wallT + proj, yTop + 16], [wx + wallT + nextProj, yTop]) // sloped weathering
    y = yTop
  })
  poly.push([wx + wallT, y])
  hatched(L, poly)
  // vault thrust and its path to the ground
  arrow(L, [wx - 120, top + 70], [wx - 4, top + 70])
  L.notes.push(text(wx - 120, top + 62, 'THRUST FROM VAULT', 'class="t-small t-accent"'))
  L.center.push(el(`M${wx} ${top + 70}Q${wx + 80} ${top + 160} ${wx + wallT + 100} ${ground}`, 'stroke-dasharray="6 3"'))
  L.notes.push(text(wx + wallT + 104, ground - 8, 'LINE OF THRUST', 'class="t-small t-accent"'))
  L.profile.push(line([wx - 160, ground], [wx + 260, ground]))
  hatched(L, rect(wx - 20, ground, 220, 30), 'h-earth', 'profile')
  B.add([wx - 160, top], [wx + 260, ground + 30])
  L.dims.push(hDim(ground + 48, wx + wallT, wx + wallT + steps[0][0], 'PROJECTION'))
  callouts(L, [
    { text: 'WALL (SECTION)', at: [wx, top + 160] },
    { text: 'SET-OFF (WEATHERING)', at: [(poly[2][0] + poly[3][0]) / 2, (poly[2][1] + poly[3][1]) / 2] },
    { text: 'BUTTRESS', at: [wx + wallT + 30, ground - 100] },
    { text: 'FOUNDATION', at: [wx - 20, ground + 15] },
  ], wx - 160)
  return finish({
    id: 'buttress', title: 'Buttress', subtitle: 'Masonry mass resisting the outward push on a wall', view: 'SECTION', sheetNo: 'ROF-07',
    source: ORIGINAL, scale: { unitPx: 46, unitName: 'wall thicknesses', count: 3 },
    description: 'Section through a wall and the stepped masonry pier built against it, each stage set back with a sloping top, with the outward thrust of a vault carried down through it into the ground.',
  }, L, B)
}

function flyingButtress(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const ground = 500
  const naveX = 170 // nave centreline (left edge of drawing)
  const clerest = 300 // clerestory wall inner face x
  const wallT = 26
  const vaultSpring = 230
  const pierX = 470
  const pierW = 56
  // nave vault (half) springing from the clerestory wall
  // quarter barrel: inner arc crown -> springing, then outer arc back (one consistent winding)
  hatched(L, [...ring([naveX, vaultSpring], clerest - naveX, -Math.PI / 2, 0, 30), ...ring([naveX, vaultSpring], clerest - naveX + 12, 0, -Math.PI / 2, 30)])
  // clerestory wall with window, aisle roof and aisle vault below
  hatched(L, rect(clerest, 110, wallT, ground - 110))
  L.fine.push(el(path(rect(clerest + 4, 130, wallT - 8, 70), true)))
  hatched(L, rect(pierX, 150, pierW, ground - 150))
  // pinnacle on the pier
  L.profile.push(el(path([[pierX, 150], [pierX + pierW / 2, 70], [pierX + pierW, 150]])))
  L.fine.push(line([pierX + 10, 150], [pierX + pierW / 2, 96]), line([pierX + pierW - 10, 150], [pierX + pierW / 2, 96]))
  // aisle vault and lean-to roof
  L.profile.push(el(path(ring([(clerest + wallT + pierX) / 2, 380], (pierX - clerest - wallT) / 2, Math.PI, 2 * Math.PI, 30))))
  L.profile.push(line([clerest + wallT, 300], [pierX, 330]))
  // flying buttresses: two arched struts from the pier to the clerestory
  const fly = (y1: number, y2: number) => {
    const a: Pt = [clerest + wallT, y1]
    const b: Pt = [pierX, y2]
    const mid: Pt = [(a[0] + b[0]) / 2, Math.max(y1, y2) + 34]
    const top = `M${f(a[0])} ${f(a[1] - 14)}L${f(b[0])} ${f(b[1] - 14)}`
    const under = `M${f(a[0])} ${f(a[1] + 6)}Q${f(mid[0])} ${f(mid[1])} ${f(b[0])} ${f(b[1] + 14)}`
    L.cut.push(el(top), el(under))
    L.hatch.push(`<path d="M${f(a[0])} ${f(a[1] - 14)}L${f(b[0])} ${f(b[1] - 14)}L${f(b[0])} ${f(b[1] + 14)}Q${f(mid[0])} ${f(mid[1])} ${f(a[0])} ${f(a[1] + 6)}Z" fill="url(#h-stone)" stroke="none"/>`)
  }
  fly(180, 200)
  fly(250, 275)
  // thrust path
  arrow(L, [clerest - 40, vaultSpring + 10], [clerest + wallT + 60, 262])
  L.center.push(el(`M${clerest + wallT + 60} 262Q${pierX - 10} 300 ${pierX + pierW / 2} ${ground}`, 'stroke-dasharray="6 3"'))
  L.notes.push(text(pierX - 6, ground - 10, 'THRUST TO GROUND', 'text-anchor="end" class="t-small t-accent"'))
  L.profile.push(line([naveX - 10, ground], [pierX + pierW + 60, ground]))
  L.center.push(line([naveX, 90], [naveX, ground + 10]))
  L.notes.push(text(naveX + 4, ground - 8, 'NAVE ℄', 'class="t-small t-accent"'))
  B.add([naveX - 10, 70], [pierX + pierW + 60, ground])
  callouts(L, [
    { text: 'PINNACLE', at: [pierX + 10, 120] },
    { text: 'FLYING BUTTRESS', at: [(clerest + pierX) / 2, 200] },
    { text: 'CLERESTORY WINDOW', at: [clerest + 4, 160] },
    { text: 'NAVE VAULT', at: [naveX + 60, vaultSpring - 112] },
    { text: 'BUTTRESS PIER', at: [pierX, 400] },
    { text: 'AISLE VAULT', at: [(clerest + pierX) / 2 - 40, 360] },
  ], naveX - 10)
  return finish({
    id: 'flying-buttress', title: 'Flying Buttress', subtitle: 'Arched struts carrying vault thrust over an aisle', view: 'SECTION', sheetNo: 'ROF-08',
    source: ORIGINAL, scale: { unitPx: 50, unitName: 'bays (indicative)', count: 3 },
    description: 'Half cross-section of a Gothic church: the outward push of the high nave vault is carried by arched stone struts leaping over the side aisle to tall outer piers topped with pinnacles.',
  }, L, B)
}

function steppedCrown(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 330
  const base = 520
  // tower shaft with successive setbacks
  const tiers: Array<[number, number]> = [[240, 150], [190, 70], [150, 60], [110, 50], [70, 44], [36, 36]]
  let y = base
  tiers.forEach(([w, h], i) => {
    L.profile.push(el(path(rect(cx - w / 2, y - h, w, h), true)))
    // window rhythm: vertical piers
    const n = Math.max(2, Math.round(w / 22))
    for (let k = 1; k < n; k++) L.fine.push(line([cx - w / 2 + (k * w) / n, y - h + 8], [cx - w / 2 + (k * w) / n, y - 6]))
    if (i > 0) L.profile.push(el(`M${f(cx - w / 2)} ${f(y)}l-4 0M${f(cx + w / 2)} ${f(y)}l4 0`))
    y -= h
  })
  // spire
  L.profile.push(el(path([[cx - 10, y], [cx, y - 90], [cx + 10, y]])))
  L.center.push(line([cx, y - 100], [cx, base + 10]))
  L.fine.push(el(`M${cx - 120} ${base}V${base + 30}M${cx + 120} ${base}V${base + 30}`))
  L.notes.push(text(cx, base + 28, 'TOWER CONTINUES', 'text-anchor="middle" class="t-small"'))
  // setback zoning envelope (dashed)
  L.center.push(el(path([[cx - 150, base], [cx - 40, base - 380], [cx + 40, base - 380], [cx + 150, base]]), 'stroke-dasharray="8 4"'))
  L.notes.push(text(cx + 100, base - 220, 'ZONING ENVELOPE', 'class="t-small t-accent"'))
  B.add([cx - 150, y - 100], [cx + 150, base + 30])
  L.dims.push(hDim(base + 46, cx - 120, cx + 120, 'SHAFT'))
  callouts(L, [
    { text: 'SPIRE', at: [cx - 4, y - 50] },
    { text: 'SETBACK', at: [cx - 55, base - 150 - 70 - 60 - 50] },
    { text: 'TIER', at: [cx - 75, base - 150 - 70 - 30] },
    { text: 'PIERS', at: [cx - 120 + 24, base - 70] },
  ], cx - 150)
  return finish({
    id: 'stepped-crown', title: 'Stepped Crown', subtitle: 'Skyscraper top rising in setbacks', view: 'ELEVATION', sheetNo: 'ROF-09',
    source: 'Setback form as encouraged by the New York 1916 Zoning Resolution. Original, generic drawing by Project Exodus; not a specific building.',
    scale: { unitPx: 48, unitName: 'bays', count: 3 },
    description: 'Elevation of the top of a tall tower that steps back in a series of narrowing tiers to a slender spire, staying inside a sloping envelope like those required by early skyscraper zoning.',
  }, L, B)
}

// ---------------------------------------------------------------------------
// Fortification
// ---------------------------------------------------------------------------
function battlements(id: 'battlement' | 'merlon' | 'crenel'): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 170
  const x1 = 560
  const wallTop = 260
  const base = 500
  const mw = 48 // merlon width
  const cw = 30 // crenel width
  const mh = 60
  // wall face with ashlar courses
  const face: Pt[] = [[x0, base], [x0, wallTop], [x1, wallTop], [x1, base]]
  L.profile.push(el(path(face)))
  const defs = courses(L, 'bt-face', face, 0, 16)
  // merlons and crenels
  const merlons: Pt[][] = []
  for (let x = x0; x + mw <= x1; x += mw + cw) merlons.push(rect(x, wallTop - mh, mw, mh))
  merlons.forEach((m, i) => {
    const hi = id === 'merlon' && i === 2
    if (hi) {
      L.hatch.push(`<path d="${path(m, true)}" fill="url(#h-stone)" stroke="none"/>`)
      L.cut.push(`<path d="${path(m, true)}" ${ACCENT}/>`)
    } else masked(L, m)
    L.profile.push(el(path(m, true)))
    // arrow loop in each merlon
    const [mx, my] = m[0]
    L.fine.push(line([mx + mw / 2, my + 12], [mx + mw / 2, my + mh - 10]), line([mx + mw / 2 - 5, my + mh / 2], [mx + mw / 2 + 5, my + mh / 2]))
    L.profile.push(el(path([[mx - 2, my], [mx + mw + 2, my]])))
  })
  if (id === 'crenel') {
    const cx0 = x0 + 2 * (mw + cw) + mw
    L.cut.push(`<path d="M${cx0} ${wallTop - mh}V${wallTop}H${cx0 + cw}V${wallTop - mh}" ${ACCENT} stroke-width="2.6"/>`)
  }
  // wall walk behind, parapet thickness shown dashed
  L.fine.push(line([x0, wallTop + 14], [x1, wallTop + 14], 'stroke-dasharray="6 4"'))
  L.notes.push(text(x1 - 4, wallTop + 26, 'WALL WALK BEHIND', 'text-anchor="end" class="t-small"'))
  L.profile.push(line([x0 - 20, base], [x1 + 10, base]))
  B.add([x0 - 20, wallTop - mh - 10], [x1 + 10, base])
  L.dims.push(hDim(wallTop - mh - 24, x0 + mw + cw, x0 + 2 * mw + cw, 'MERLON'), hDim(wallTop - mh - 24, x0 + 2 * mw + cw, x0 + 2 * (mw + cw), 'CRENEL'))
  L.dims.push(vDim(x1 + 14, wallTop, wallTop - mh, 'HT'))
  callouts(L, [
    { text: 'MERLON', at: [x0, wallTop - mh / 2 - 10] },
    { text: 'CRENEL (EMBRASURE)', at: [x0 + mw + cw / 2, wallTop - 10] },
    { text: 'ARROW LOOP', at: [x0 + mw / 2 - 5, wallTop - mh / 2] },
    { text: 'PARAPET', at: [x0, wallTop + 6] },
    { text: 'CURTAIN WALL', at: [x0, base - 80] },
  ], x0 - 20)
  const titles = {
    battlement: ['Battlement', 'Crenellated parapet of alternating solids and gaps', 'FRT-01', 'Elevation of the top of a defensive wall: a parapet of alternating raised blocks with arrow slits and open gaps between them, with the wall walk behind.'],
    merlon: ['Merlon', 'The raised solid of a battlement', 'FRT-02', 'Elevation of a battlemented wall top with one of the raised solid blocks, pierced by an arrow slit, highlighted.'],
    crenel: ['Crenel', 'The open gap of a battlement', 'FRT-03', 'Elevation of a battlemented wall top with one of the open gaps between the raised blocks highlighted.'],
  } as const
  const [title, subtitle, sheetNo, description] = titles[id]
  return finish({
    id, title, subtitle, view: 'ELEVATION', sheetNo, source: ORIGINAL,
    scale: { unitPx: (mw + cw) / 2, unitName: 'half bays', count: 4 }, description,
  }, L, B, defs)
}

function machicolation(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const wx = 320
  const wallT = 70
  const top = 160
  const base = 500
  // wall (section) and projecting parapet on corbels
  hatched(L, rect(wx, top + 40, wallT, base - top - 40))
  const proj = 54
  const corbel: Pt[] = [[wx, top + 110], [wx - proj, top + 70], [wx - proj, top + 40], [wx, top + 40]]
  hatched(L, corbel)
  hatched(L, rect(wx - proj, top - 40, 20, 80)) // parapet
  hatched(L, rect(wx, top + 30, wallT + 60, 12), 'h-timber') // wall-walk floor
  // the opening between parapet and wall face
  arrow(L, [wx - proj / 2 + 10, top + 20], [wx - proj / 2 + 10, base - 30])
  L.notes.push(text(wx - proj / 2 + 16, base - 60, 'DROPPED PROJECTILES', 'class="t-small t-accent"'))
  // defender
  L.fine.push(circle([wx + 30, top - 10], 10), line([wx + 30, top], [wx + 30, top + 30]))
  L.profile.push(line([wx - 200, base], [wx + 200, base]))
  hatched(L, rect(wx - 200, base, 400, 20), 'h-earth', 'profile')
  B.add([wx - 200, top - 40], [wx + 200, base + 20])
  L.dims.push(hDim(top - 60, wx - proj, wx, 'OVERHANG'))
  callouts(L, [
    { text: 'PARAPET', at: [wx - proj, top - 10] },
    { text: 'MACHICOLATION (OPENING)', at: [wx - proj / 2, top + 50] },
    { text: 'CORBEL', at: [wx - proj, top + 60] },
    { text: 'WALL (SECTION)', at: [wx, top + 200] },
    { text: 'FOOT OF WALL', at: [wx - 160, base] },
  ], wx - 200)
  return finish({
    id: 'machicolation', title: 'Machicolation', subtitle: 'Floor openings in a projecting parapet', view: 'SECTION', sheetNo: 'FRT-04',
    source: ORIGINAL, scale: { unitPx: 35, unitName: '0.5 m (indicative)', count: 4 },
    description: 'Section through the top of a castle wall where the parapet projects out on stone brackets, leaving openings in the floor through which defenders could drop missiles on attackers at the foot of the wall.',
  }, L, B)
}

function portcullis(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 330
  const base = 500
  const w = 160
  const springY = 300
  // gate-tower wall with arched opening
  const wall: Pt[] = [[cx - 200, base], [cx - 200, 140], [cx + 200, 140], [cx + 200, base]]
  L.profile.push(el(path(wall)))
  const opening: Pt[] = [[cx - w / 2, base], [cx - w / 2, springY], ...ring([cx, springY], w / 2, Math.PI, 2 * Math.PI, 30), [cx + w / 2, base]]
  L.profile.push(el(path(opening)))
  const defs = courses(L, 'pc-wall', wall, 0, 18)
  masked(L, [...opening.slice(0, -1), [cx + w / 2, base]], 'fine')
  // portcullis grille, partly lowered: oak and iron lattice with spikes
  const gTop = 170
  const gBot = 440
  const bars: string[] = []
  for (let x = cx - w / 2 + 12; x <= cx + w / 2 - 12; x += 20) bars.push(`M${x} ${gTop}V${gBot}l-3 -2 3 12 3 -12 -3 2`)
  for (let y = gTop + 10; y < gBot; y += 26) bars.push(`M${cx - w / 2 + 6} ${y}H${cx + w / 2 - 6}`)
  L.profile.push(`<g clip-path="url(#pc-clip)"><path d="${bars.join('')}" stroke-width="2.2"/></g>`)
  // grooves (slots) in the jambs and the chamber above
  L.fine.push(line([cx - w / 2 + 4, 160], [cx - w / 2 + 4, base], 'stroke-dasharray="6 3"'), line([cx + w / 2 - 4, 160], [cx + w / 2 - 4, base], 'stroke-dasharray="6 3"'))
  L.notes.push(text(cx, 156, 'RAISED INTO CHAMBER ABOVE', 'text-anchor="middle" class="t-small"'))
  arrow(L, [cx + w / 2 + 30, 250], [cx + w / 2 + 30, 180])
  arrow(L, [cx + w / 2 + 30, 300], [cx + w / 2 + 30, 370])
  L.profile.push(line([cx - 230, base], [cx + 230, base]))
  B.add([cx - 230, 140], [cx + 230, base])
  L.dims.push(hDim(base + 22, cx - w / 2, cx + w / 2, 'GATEWAY'))
  callouts(L, [
    { text: 'GATE TOWER', at: [cx - 200, 200] },
    { text: 'GROOVE IN JAMB', at: [cx - w / 2 + 4, 360] },
    { text: 'LATTICE GRILLE', at: [cx - w / 2 + 12, 270] },
    { text: 'IRON-SHOD SPIKES', at: [cx - w / 2 + 12, gBot + 8] },
  ], cx - 230)
  return finish({
    id: 'portcullis', title: 'Portcullis', subtitle: 'Vertical sliding grille closing a gateway', view: 'ELEVATION', sheetNo: 'FRT-05',
    source: ORIGINAL, scale: { unitPx: w / 4, unitName: 'quarters of gateway', count: 4 },
    description: 'Elevation of an arched castle gateway with a heavy lattice grate partly lowered in grooves cut into the sides of the opening, its spiked foot ready to drop.',
  }, L, B, `${defs}\n    <clipPath id="pc-clip"><path d="${path(opening, true)}"/></clipPath>`)
}

// ---------------------------------------------------------------------------
// Columns: pilaster (plan section) and entasis (diagram)
// ---------------------------------------------------------------------------
function pilaster(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const y0 = 300
  const wallT = 70
  const x0 = 150
  const x1 = 560
  // wall in plan section with two pilasters projecting
  const proj = 18
  const pw = 70
  const pts: Pt[] = [[x0, y0], [x0, y0 + wallT]]
  for (const px of [250, 430]) pts.push([px - pw / 2, y0 + wallT], [px - pw / 2, y0 + wallT + proj], [px + pw / 2, y0 + wallT + proj], [px + pw / 2, y0 + wallT])
  pts.push([x1, y0 + wallT], [x1, y0])
  hatched(L, pts)
  // the pilaster above the cut: base mouldings seen beyond (dashed outline of base)
  for (const px of [250, 430]) L.fine.push(el(path(rect(px - pw / 2 - 10, y0 + wallT, pw + 20, proj + 10), true), 'stroke-dasharray="4 3"'))
  // compare: free-standing column of the same width
  L.profile.push(circle([340, y0 + wallT + 110], pw / 2))
  hatched(L, ring([340, y0 + wallT + 110], pw / 2, 0, 2 * Math.PI, 40))
  L.notes.push(text(340, y0 + wallT + 170, 'FREE-STANDING COLUMN FOR COMPARISON', 'text-anchor="middle" class="t-small"'))
  B.add([x0, y0 - 10], [x1, y0 + wallT + 180])
  L.dims.push(hDim(y0 - 24, 250 - pw / 2, 250 + pw / 2, 'WIDTH = D'))
  L.notes.push(text(430 + pw / 2 + 8, y0 + wallT + proj + 4, 'PROJECTION ≈ D/4', 'class="t-small"'))
  callouts(L, [
    { text: 'WALL (SECTION)', at: [x0, y0 + wallT / 2] },
    { text: 'PILASTER', at: [250 - pw / 2, y0 + wallT + proj / 2] },
    { text: 'BASE BEYOND', at: [250 - pw / 2 - 10, y0 + wallT + proj + 6] },
    { text: 'COLUMN', at: [340 - pw / 2, y0 + wallT + 110] },
  ], x0)
  return finish({
    id: 'pilaster', title: 'Pilaster', subtitle: 'A flattened column projecting slightly from a wall', view: 'PLAN SECTION', sheetNo: 'COL-06',
    source: ORIGINAL, scale: { unitPx: pw / 4, unitName: 'quarters of D', count: 4 },
    description: 'Plan section through a wall with two shallow rectangular projections that act as flattened columns, compared with a free-standing round column of the same width.',
  }, L, B)
}

function entasis(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 330
  const base = 520
  const H = 400
  const r0 = 60
  const r1 = 46
  const bulge = 10 // exaggerated
  const prof = (t: number) => r0 + (r1 - r0) * t + bulge * Math.sin(Math.PI * t * 0.85)
  const right: Pt[] = []
  for (let i = 0; i <= 40; i++) {
    const t = i / 40
    right.push([cx + prof(t), base - t * H])
  }
  const left = right.map(([x, y]) => [2 * cx - x, y] as Pt).reverse()
  L.profile.push(el(path([...right, ...left], true)))
  // straight taper for comparison
  L.center.push(line([cx + r0, base], [cx + r1, base - H]), line([cx - r0, base], [cx - r1, base - H]))
  // capital and base blocks
  L.profile.push(el(path(rect(cx - r0 - 14, base, 2 * r0 + 28, 18), true)), el(path(rect(cx - r1 - 18, base - H - 22, 2 * r1 + 36, 22), true)))
  L.center.push(line([cx, base - H - 40], [cx, base + 30]))
  // gap marker at the maximum swelling
  const tMax = 0.42
  const yMax = base - tMax * H
  L.dims.push(el(`M${f(cx + r0 + (r1 - r0) * tMax)} ${f(yMax)}H${f(cx + prof(tMax))}`))
  L.notes.push(text(cx + prof(tMax) + 8, yMax + 3, 'SWELLING (EXAGGERATED ×5)', 'class="t-small t-accent"'))
  B.add([cx - r0 - 20, base - H - 40], [cx + r0 + 20, base + 30])
  L.dims.push(hDim(base + 40, cx - r0, cx + r0, 'LOWER D'), hDim(base - H - 44, cx - r1, cx + r1, 'UPPER D'))
  callouts(L, [
    { text: 'CAPITAL', at: [cx - r1 - 18, base - H - 11] },
    { text: 'STRAIGHT TAPER', at: [cx - r1 - (r0 - r1) * 0.3, base - H * 0.7] },
    { text: 'ENTASIS CURVE', at: [cx - prof(0.42), yMax] },
    { text: 'BASE', at: [cx - r0 - 14, base + 9] },
  ], cx - r0 - 40)
  return finish({
    id: 'entasis', title: 'Entasis', subtitle: 'The slight swelling of a column shaft', view: 'ELEVATION', sheetNo: 'COL-07',
    source: 'Entasis as described by Vitruvius, De architectura, Book III. Curve exaggerated for clarity. Original drawing by Project Exodus.',
    scale: { unitPx: r0 / 2, unitName: 'quarters of D', count: 4 },
    description: 'Elevation of a column shaft whose outline bows gently outward instead of tapering in a straight line, shown against a straight taper with the curve exaggerated so it can be seen.',
  }, L, B)
}

export const ROOF_SHEETS: Array<() => SheetSpec> = [
  gable, hipRoof, mansard, thatch,
  () => cupolaOrLantern('cupola'), () => cupolaOrLantern('lantern'),
  buttress, flyingButtress, steppedCrown,
  () => battlements('battlement'), () => battlements('merlon'), () => battlements('crenel'),
  machicolation, portcullis,
  pilaster, entasis,
]
