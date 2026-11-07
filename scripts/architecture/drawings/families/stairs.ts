/**
 * Stairs and ramps.
 *
 * Stair parts share one longitudinal SECTION through a straight flight, with
 * the subject part highlighted. Whole stairs are drawn in the view that shows
 * them best: PLAN for grand, spiral and ramp layouts; SECTION for cantilevered
 * stairs and accessible ramps; ELEVATION for a perron.
 */
import { type Pt, type SheetSpec, f, path, el, vDim, hDim, text } from '../sheet'
import { newLayers, finish, hatched, circle, line, rect, ring, callouts, arrow, Bounds, ORIGINAL, type Layers } from '../kit'

const BLONDEL =
  'Riser and going set by Blondel’s rule (2 risers + 1 going ≈ 630 mm), after François Blondel, Cours d’architecture (1675–83). Original drawing by Project Exodus.'
const ADA =
  'Ramp limits from the 2010 ADA Standards for Accessible Design, §405 (max slope 1:12, max rise 760 mm per run, landings ≥ 1525 mm, handrails 865–965 mm). Original drawing by Project Exodus.'

const ACCENT = 'style="stroke: var(--_accent)"'

// ---------------------------------------------------------------------------
// Straight flight in section, with one part highlighted
// ---------------------------------------------------------------------------
type Part = 'tread' | 'riser' | 'stringer' | 'landing' | 'newel-post' | 'baluster' | 'handrail'

interface PartSpec {
  id: Part
  title: string
  subtitle: string
  sheetNo: string
  description: string
}

const PARTS: PartSpec[] = [
  { id: 'tread', title: 'Tread', subtitle: 'The horizontal surface you step on', sheetNo: 'STR-01',
    description: 'Section through a straight timber stair with the horizontal stepping boards highlighted, showing their nosings projecting over the risers below.' },
  { id: 'riser', title: 'Riser', subtitle: 'The vertical face between treads', sheetNo: 'STR-02',
    description: 'Section through a straight timber stair with the vertical boards between the steps highlighted.' },
  { id: 'stringer', title: 'Stringer', subtitle: 'The inclined board carrying the treads', sheetNo: 'STR-03',
    description: 'Section through a straight stair with the sloping side board that supports the ends of the steps highlighted.' },
  { id: 'landing', title: 'Landing', subtitle: 'Level platform at the head of a flight', sheetNo: 'STR-04',
    description: 'Section through a straight stair with the level platform at the top of the flight highlighted.' },
  { id: 'newel-post', title: 'Newel Post', subtitle: 'Post at the start and turns of a stair', sheetNo: 'STR-05',
    description: 'Section through a straight stair with the stout posts at the foot and at the landing highlighted, carrying the handrail.' },
  { id: 'baluster', title: 'Baluster', subtitle: 'Spindles between handrail and treads', sheetNo: 'STR-06',
    description: 'Section through a straight stair with the row of slender upright spindles between the steps and the handrail highlighted.' },
  { id: 'handrail', title: 'Handrail', subtitle: 'The rail you hold, set above the pitch line', sheetNo: 'STR-07',
    description: 'Section through a straight stair with the sloping rail for the hand highlighted, set at a constant height above the line of the step edges.' },
]

function flight(part: PartSpec): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const s = 0.112 // px per mm
  const R = 175
  const G = 280
  const N = 8
  const nose = 25
  const treadT = 32
  const riserT = 20
  const x0 = 175
  const y0 = 470 // lower floor level
  const X = (mm: number) => x0 + mm * s
  const Y = (mm: number) => y0 - mm * s
  const H = N * R
  const runEnd = (N - 1) * G
  const landingL = 1000
  const hi = (p: Part) => part.id === p

  const put = (p: Part, poly: Pt[], pattern: string) => {
    if (hi(p)) {
      L.hatch.push(`<path d="${path(poly, true)}" fill="url(#h-stone)" stroke="none"/>`)
      L.cut.push(`<path d="${path(poly, true)}" ${ACCENT}/>`)
    } else {
      L.hatch.push(`<path d="${path(poly, true)}" fill="url(#${pattern})" stroke="none"/>`)
      L.profile.push(el(path(poly, true)))
    }
  }

  // floors (concrete, section)
  hatched(L, rect(X(-600), Y(0), (600 + 200) * s, 150 * s), 'h-concrete')
  hatched(L, rect(X(runEnd + landingL), Y(H), 400 * s, 200 * s), 'h-concrete') // upper floor
  // landing (timber deck on joist, section)
  put('landing', rect(X(runEnd), Y(H), landingL * s, treadT * s), 'h-timber')
  L.fine.push(el(path(rect(X(runEnd + 80), Y(H) + treadT * s, (landingL - 160) * s, 160 * s), true)))

  // stringer seen beyond: inclined band below the nosing line
  const strTop = (x: number) => Y((x / G) * R + 60)
  const strBot = (x: number) => Y((x / G) * R - 230)
  const strPoly: Pt[] = [[X(-G * 0.2), strTop(-G * 0.2)], [X(runEnd), strTop(runEnd)], [X(runEnd), strBot(runEnd)], [X(G * 0.9), strBot(G * 0.9)], [X(G * 0.9), Y(0)], [X(-G * 0.2), Y(0)]]
  if (hi('stringer')) {
    L.hatch.push(`<path d="${path(strPoly, true)}" fill="url(#h-timber)" stroke="none"/>`)
    L.cut.push(`<path d="${path(strPoly, true)}" ${ACCENT}/>`)
  } else {
    L.fine.push(el(path(strPoly, true), 'stroke-dasharray="5 3"'))
  }

  // treads and risers (cut)
  for (let i = 0; i < N; i++) {
    const xr = i * G // riser face position (going from the foot)
    const top = (i + 1) * R
    put('riser', rect(X(xr - riserT), Y(top - treadT), riserT * s, (R - treadT) * s), 'h-timber')
    if (i < N - 1) put('tread', rect(X(xr - riserT - nose), Y(top), (G + nose + riserT) * s, treadT * s), 'h-timber')
  }

  // pitch line through the nosings, handrail parallel 900 above
  const pitch = (x: number) => (x / G) * R + R
  L.center.push(line([X(-nose - 200), Y(pitch(-nose - 200))], [X(runEnd + 200), Y(pitch(runEnd + 200))]))
  const rail = 900
  const railPts: Pt[] = [[X(-nose), Y(pitch(-nose) + rail)], [X(runEnd - nose), Y(pitch(runEnd - nose) + rail)], [X(runEnd + landingL), Y(H + rail + R)]]
  L[hi('handrail') ? 'cut' : 'profile'].push(`<path d="${path(railPts)}"${hi('handrail') ? ' ' + ACCENT : ''} stroke-width="${hi('handrail') ? 3.2 : 2.2}"/>`)

  // balusters: two per tread, from tread top to the rail
  const bal: string[] = []
  for (let i = 0; i < N - 1; i++) {
    for (const k of [0.25, 0.75]) {
      const xm = i * G + k * G - riserT
      const yb = (i + 1) * R
      bal.push(`M${f(X(xm))} ${f(Y(yb))}V${f(Y(pitch(xm) + rail - 30))}`)
    }
  }
  for (let xm = runEnd + 140; xm < runEnd + landingL; xm += 140) bal.push(`M${f(X(xm))} ${f(Y(H))}V${f(Y(H + rail + R - 30))}`)
  L[hi('baluster') ? 'cut' : 'fine'].push(`<path d="${bal.join('')}"${hi('baluster') ? ' ' + ACCENT + ' stroke-width="1.6"' : ''}/>`)

  // newel posts: at the foot and at the landing
  const newel = (xm: number, base: number, top: number) => {
    const w = 90
    const poly = rect(X(xm - w / 2), Y(top), w * s, (top - base) * s)
    if (hi('newel-post')) {
      L.hatch.push(`<path d="${path(poly, true)}" fill="url(#h-timber)" stroke="none"/>`)
      L.cut.push(`<path d="${path(poly, true)}" ${ACCENT}/>`)
    } else L.profile.push(el(path(poly, true)))
    L[hi('newel-post') ? 'cut' : 'profile'].push(el(`M${f(X(xm - w / 2 - 12))} ${f(Y(top))}h${f((w + 24) * s)}v${f(-4)}h${f(-(w + 24) * s)}Z`, hi('newel-post') ? ACCENT : ''))
  }
  newel(-nose - 40, 0, R + rail + 200)
  newel(runEnd - nose + 40, H, H + rail + R + 160)

  B.add([X(-600), Y(H + rail + R + 260)], [X(runEnd + landingL + 400), Y(0) + 150 * s])
  L.dims.push(
    vDim(X(runEnd + landingL + 400) + 12, Y(H - R), Y(H), `R ${R}`),
    hDim(Y(0) + 150 * s + 20, X(2 * G - riserT), X(3 * G - riserT), `G ${G}`),
    vDim(X(runEnd + landingL + 400) + 12, Y(0), Y(H - R), `${N - 1}×${R}`),
  )
  L.notes.push(text(X(G * 3), Y(pitch(G * 3)) + 16, 'PITCH LINE', 'class="t-small t-accent"'))
  L.notes.push(text(X(runEnd + landingL + 400), Y(0) + 150 * s + 48, 'DIMENSIONS IN MM', 'class="t-small" text-anchor="end"'))

  const items: { text: string; at: Pt }[] = [
    { text: 'HANDRAIL', at: [X(G * 1.5), Y(pitch(G * 1.5 - nose) + rail)] },
    { text: 'NEWEL POST', at: [X(-nose - 40 - 45), Y(R + rail)] },
    { text: 'BALUSTER', at: [X(1.25 * G - riserT), Y(pitch(1.25 * G) + rail * 0.5)] },
    { text: 'TREAD', at: [X(G * 0.5), Y(2 * R - treadT / 2)] },
    { text: 'RISER', at: [X(-riserT), Y(R * 0.5)] },
    { text: 'STRINGER', at: [X(G * 1.6), strBot(G * 1.6)] },
    { text: 'FLOOR', at: [X(-600), Y(0) + 75 * s] },
  ]
  callouts(L, items, X(-600))
  L.notes.push(text(X(runEnd + 80), Y(H + 330), 'LANDING', 'class="t-sub"'))

  return finish({
    id: part.id, title: part.title, subtitle: part.subtitle, view: 'SECTION', sheetNo: part.sheetNo,
    source: BLONDEL, scale: { unitPx: 500 * s, unitName: '500 mm', count: 3 }, description: part.description,
  }, L, B)
}

// ---------------------------------------------------------------------------
// Plans: spiral, grand (imperial), helical ramp, switchback ramp
// ---------------------------------------------------------------------------
/** "UP" arrow along a polyline (stair direction convention). */
function upArrow(L: Layers, pts: Pt[]) {
  L.profile.push(el(path(pts)))
  L.profile.push(circle(pts[0], 3, 'class="solid"'))
  arrow(L, pts[pts.length - 2], pts[pts.length - 1], 'profile')
}

function spiralStair(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [340, 300]
  const R = 175
  const r = 22
  const steps = 14
  hatched(L, ring(c, r, 0, 2 * Math.PI, 40)) // central newel (section)
  L.profile.push(el(path(ring(c, R), true)), el(path(ring(c, R + 5), true)))
  const a0 = -Math.PI / 2
  for (let i = 0; i <= steps; i++) {
    const a = a0 + (i * (Math.PI * 2 * 0.86)) / steps
    L.profile.push(line([c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)], [c[0] + R * Math.cos(a), c[1] + R * Math.sin(a)]))
  }
  // the plan is cut at about head height: steps above the cut are dashed
  const cut = a0 + Math.PI * 2 * 0.6
  L.fine.push(line([c[0] + r * Math.cos(cut), c[1] + r * Math.sin(cut)], [c[0] + (R + 30) * Math.cos(cut), c[1] + (R + 30) * Math.sin(cut)], 'stroke-width="1.4"'))
  L.notes.push(text(c[0] + (R + 36) * Math.cos(cut), c[1] + (R + 36) * Math.sin(cut), 'CUT', 'class="t-small"'))
  // walking line and UP arrow
  const walk = ring(c, (r + R) * 0.55, a0 + 0.1, cut - 0.15, 40)
  upArrow(L, walk)
  L.notes.push(text(walk[0][0] + 8, walk[0][1] - 6, 'UP', 'class="t-sub"'))
  // balustrade posts on the outer edge
  for (let i = 0; i < 28; i++) L.fine.push(circle([c[0] + (R + 2.5) * Math.cos((i * Math.PI) / 14), c[1] + (R + 2.5) * Math.sin((i * Math.PI) / 14)], 1.4))
  // landing (top) as the last segment
  const landing: Pt[] = [c, ...ring(c, R, a0 + Math.PI * 2 * 0.86, a0 + Math.PI * 2, 12)]
  L.fine.push(el(path(landing, true)))
  B.add([c[0] - R - 40, c[1] - R - 40], [c[0] + R + 40, c[1] + R + 40])
  L.dims.push(hDim(c[1] + R + 30, c[0] - R, c[0] + R, 'DIAMETER'))
  callouts(L, [
    { text: 'BALUSTRADE', at: [c[0] - R - 5, c[1] - 30] },
    { text: 'WINDER TREAD', at: [c[0] - R * 0.7, c[1] + R * 0.35] },
    { text: 'CENTRAL NEWEL', at: [c[0] - r, c[1]] },
    { text: 'WALKING LINE', at: [walk[12][0], walk[12][1]] },
    { text: 'TOP LANDING', at: [c[0] - R * 0.3, c[1] - R * 0.6] },
  ], c[0] - R - 10)
  return finish({
    id: 'spiral-stair', title: 'Spiral Stair', subtitle: 'Wedge-shaped treads winding round a central newel', view: 'PLAN', sheetNo: 'STR-08',
    source: ORIGINAL, scale: { unitPx: R / 5, unitName: 'tenths of diameter', count: 5 },
    description: 'Plan of a circular stair whose wedge-shaped steps radiate from a central post, rising almost a full turn to a landing, with the direction of travel marked.',
  }, L, B)
}

function grandStair(): SheetSpec {
  // Imperial stair: one wide central flight up to a half landing, then two
  // returning side flights to the upper floor.
  const L = newLayers()
  const B = new Bounds()
  const x0 = 200
  const y0 = 70
  const W = 340
  const D = 330
  const g = 22 // going in px
  const mid = 120 // central flight width
  const side = 80 // side flight width
  hatched(L, rect(x0 - 16, y0 - 16, W + 32, 16)) // back wall (section)
  hatched(L, rect(x0 - 16, y0, 16, D))
  hatched(L, rect(x0 + W, y0, 16, D))
  const cx = x0 + W / 2
  // half landing across the back
  const landD = 90
  L.profile.push(el(path(rect(x0, y0, W, landD), true)))
  // central flight: rising from the front toward the landing
  for (let k = 0; k <= 9; k++) L.profile.push(line([cx - mid / 2, y0 + landD + k * g], [cx + mid / 2, y0 + landD + k * g]))
  L.profile.push(line([cx - mid / 2, y0 + landD], [cx - mid / 2, y0 + landD + 9 * g]), line([cx + mid / 2, y0 + landD], [cx + mid / 2, y0 + landD + 9 * g]))
  // side flights: rising from the landing back toward the front (upper floor)
  for (const sgn of [-1, 1]) {
    const xs0 = sgn < 0 ? x0 : x0 + W - side
    for (let k = 0; k <= 9; k++) L.profile.push(line([xs0, y0 + landD + k * g], [xs0 + side, y0 + landD + k * g]))
    L.profile.push(line([xs0 + (sgn < 0 ? side : 0), y0 + landD], [xs0 + (sgn < 0 ? side : 0), y0 + D]))
    upArrow(L, [[xs0 + side / 2, y0 + landD + 10], [xs0 + side / 2, y0 + landD + 9 * g - 6]])
  }
  // central UP arrow: from the front edge to the landing
  upArrow(L, [[cx, y0 + landD + 9 * g - 4], [cx, y0 + landD + 18], [cx, y0 + landD / 2]])
  L.notes.push(text(cx + 8, y0 + landD + 9 * g - 8, 'UP', 'class="t-sub"'))
  // upper floor gallery at the front (dashed: above the cut)
  L.fine.push(el(path(rect(x0, y0 + landD + 9 * g, W, D - landD - 9 * g), true), 'stroke-dasharray="6 4"'))
  // balustrade lines
  L.fine.push(line([cx - mid / 2 - 6, y0 + landD], [cx - mid / 2 - 6, y0 + landD + 9 * g]), line([cx + mid / 2 + 6, y0 + landD], [cx + mid / 2 + 6, y0 + landD + 9 * g]))
  B.add([x0 - 16, y0 - 16], [x0 + W + 16, y0 + D + 10])
  L.dims.push(hDim(y0 + D + 24, cx - mid / 2, cx + mid / 2, 'CENTRAL FLIGHT'), hDim(y0 + D + 24, x0, x0 + side, 'RETURN'))
  callouts(L, [
    { text: 'HALF LANDING', at: [x0 + 40, y0 + landD / 2] },
    { text: 'RETURN FLIGHT', at: [x0 + side / 2, y0 + landD + 3 * g] },
    { text: 'CENTRAL FLIGHT', at: [cx - mid / 2, y0 + landD + 5 * g] },
    { text: 'BALUSTRADE', at: [cx - mid / 2 - 6, y0 + landD + 7 * g] },
    { text: 'UPPER GALLERY', at: [x0, y0 + D - 10] },
  ], x0 - 16)
  return finish({
    id: 'grand-staircase', title: 'Grand Staircase', subtitle: 'Imperial plan: one flight dividing into two', view: 'PLAN', sheetNo: 'STR-09',
    source: ORIGINAL, scale: { unitPx: g * 2, unitName: 'two goings', count: 4 },
    description: 'Plan of a ceremonial stair: a single wide central flight rises to a half landing, then splits into two flights that turn back and rise on either side to an upper gallery.',
  }, L, B)
}

function helicalRamp(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [340, 300]
  const R = 185
  const r = 70
  L.profile.push(el(path(ring(c, R), true)), el(path(ring(c, r), true)))
  hatched(L, [...ring(c, R + 12, 0, 2 * Math.PI, 72), ...ring(c, R, 2 * Math.PI, 0, 72)])
  // ramp surface: spiral walking line rising over one turn, with slope ticks
  const spiral: Pt[] = []
  for (let i = 0; i <= 80; i++) {
    const a = -Math.PI / 2 + (i / 80) * Math.PI * 1.85
    const rr = (r + R) / 2 // walking line at mid-width
    spiral.push([c[0] + rr * Math.cos(a), c[1] + rr * Math.sin(a)])
  }
  upArrow(L, spiral)
  for (let i = 0; i < 24; i++) {
    const a = (i * Math.PI) / 12
    L.fine.push(line([c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)], [c[0] + R * Math.cos(a), c[1] + R * Math.sin(a)], 'stroke-dasharray="2 5"'))
  }
  // central light well
  L.notes.push(text(c[0], c[1] + 4, 'LIGHT WELL', 'text-anchor="middle" class="t-small"'))
  L.notes.push(text(spiral[0][0] + 8, spiral[0][1] + 14, 'UP', 'class="t-sub"'))
  B.add([c[0] - R - 30, c[1] - R - 30], [c[0] + R + 30, c[1] + R + 30])
  L.dims.push(hDim(c[1] + R + 34, c[0] - R, c[0] - r, 'RAMP WIDTH'))
  callouts(L, [
    { text: 'OUTER WALL (SECTION)', at: [c[0] - R - 12, c[1] - 40] },
    { text: 'RAMP SURFACE', at: [c[0] - R * 0.75, c[1] + R * 0.4] },
    { text: 'DIRECTION OF RISE', at: [spiral[50][0], spiral[50][1]] },
    { text: 'INNER PARAPET', at: [c[0] - r, c[1] + 12] },
  ], c[0] - R - 12)
  return finish({
    id: 'helical-ramp', title: 'Helical Ramp', subtitle: 'Continuous ramp winding round a central void', view: 'PLAN', sheetNo: 'STR-10',
    source: ORIGINAL, scale: { unitPx: R / 5, unitName: 'fifths of radius', count: 5 },
    description: 'Plan of a ramp that spirals upward around an open central light well inside a circular wall, with the direction of rise marked.',
  }, L, B)
}

function switchbackRamp(id: 'ramp-circulation'): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 180
  const y0 = 110
  const run = 260
  const w = 70
  // two runs with a turning landing
  hatched(L, rect(x0 - 16, y0 - 16, run + 110 + 32, 16))
  hatched(L, rect(x0 - 16, y0 + 2 * w + 20, run + 110 + 32, 16))
  hatched(L, rect(x0 + run + 110, y0, 16, 2 * w + 20))
  L.profile.push(el(path(rect(x0, y0, run, w), true)), el(path(rect(x0, y0 + w + 20, run, w), true)))
  hatched(L, rect(x0, y0 + w, run, 20), 'h-concrete', 'profile') // central wall
  L.profile.push(el(path(rect(x0 + run, y0, 110, 2 * w + 20), true)))
  upArrow(L, [[x0 + 10, y0 + w + 20 + w / 2], [x0 + run + 55, y0 + w + 20 + w / 2], [x0 + run + 55, y0 + w / 2], [x0 + 20, y0 + w / 2]])
  L.notes.push(text(x0 + 14, y0 + 2 * w + 20 - 8, 'UP 1:12', 'class="t-sub"'))
  // slope hatch lines along each run (closer = steeper convention not used; just direction)
  for (let k = 1; k < 12; k++) {
    L.shading.push(line([x0 + (k * run) / 12, y0 + 4], [x0 + (k * run) / 12, y0 + w - 4]), line([x0 + (k * run) / 12, y0 + w + 24], [x0 + (k * run) / 12, y0 + 2 * w + 16]))
  }
  B.add([x0 - 16, y0 - 16], [x0 + run + 126, y0 + 2 * w + 36])
  L.dims.push(hDim(y0 + 2 * w + 60, x0, x0 + run, 'RUN'), hDim(y0 + 2 * w + 60, x0 + run, x0 + run + 110, 'LANDING'))
  callouts(L, [
    { text: 'UPPER RUN', at: [x0, y0 + w / 2] },
    { text: 'DIVIDING WALL', at: [x0, y0 + w + 10] },
    { text: 'LOWER RUN', at: [x0, y0 + w + 20 + w / 2] },
    { text: 'TURNING LANDING', at: [x0 + run + 30, y0 + 2 * w + 10] },
  ], x0 - 16)
  return finish({
    id, title: 'Ramp Circulation', subtitle: 'Switchback ramp with a turning landing', view: 'PLAN', sheetNo: 'STR-11',
    source: ADA, scale: { unitPx: run / 9, unitName: 'metres (9 m run)', count: 4 },
    description: 'Plan of a ramp that doubles back on itself: one sloping run, a level turning landing, then a second run alongside the first, separated by a low wall.',
  }, L, B)
}

function accessibilityRamp(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const s = 0.034 // px per mm (true scale: a 1:12 ramp is long and low)
  const x0 = 180
  const y0 = 330
  const X = (mm: number) => x0 + mm * s
  const Y = (mm: number) => y0 - mm * s
  const rise = 760
  const run = rise * 12 // 1:12
  const land = 1525
  // ground (section), ramp slab, top landing
  hatched(L, rect(X(-1200), Y(0), (run + land + 1200 + 600) * s, 10), 'h-earth', 'profile')
  const slab: Pt[] = [[X(0), Y(0)], [X(run), Y(rise)], [X(run + land), Y(rise)], [X(run + land), Y(0)]]
  hatched(L, slab, 'h-concrete')
  // handrails both heights: 865–965 mm above the surface; draw 900
  const hr = 900
  L.profile.push(el(path([[X(-300), Y(hr)], [X(0), Y(hr)], [X(run), Y(rise + hr)], [X(run + land), Y(rise + hr)]]), 'stroke-width="2.2"'))
  for (const xm of [0, run / 2, run, run + land]) L.fine.push(line([X(xm), Y((Math.min(xm, run) / run) * rise)], [X(xm), Y((Math.min(xm, run) / run) * rise + hr)]))
  // bottom landing clear space
  L.fine.push(el(path(rect(X(-land), Y(0) - 3, land * s, 3), true), 'stroke-dasharray="4 3"'))
  B.add([X(-1200), Y(rise + hr + 300)], [X(run + land + 600), Y(0) + 12])
  L.dims.push(
    hDim(Y(0) + 32, X(0), X(run), `RUN ${run}`),
    hDim(Y(0) + 32, X(run), X(run + land), `LANDING ${land}`),
    hDim(Y(0) + 32, X(-land), X(0), `${land}`),
    vDim(X(run + land) + 14, Y(0), Y(rise), `≤${rise}`),
    vDim(X(-300) - 16, Y(0), Y(hr), '865–965'),
  )
  L.notes.push(text(X(run * 0.45), Y(rise * 0.45) - 10, 'SLOPE 1:12 MAX', 'class="t-sub t-accent"'))
  L.notes.push(text(X(run + land + 600), Y(0) + 62, 'DIMENSIONS IN MM', 'text-anchor="end" class="t-small"'))
  callouts(L, [
    { text: 'HANDRAIL', at: [X(run * 0.2), Y(rise * 0.2 + hr)] },
    { text: 'RAMP RUN', at: [X(run * 0.3), Y(rise * 0.3) + 2] },
    { text: 'TOP LANDING', at: [X(run + 200), Y(rise) + 6] },
    { text: 'GROUND', at: [X(-1200), Y(0) + 5] },
  ], X(-1200))
  return finish({
    id: 'accessibility-ramp', title: 'Accessibility Ramp', subtitle: 'Wheelchair-accessible ramp to code limits', view: 'SECTION', sheetNo: 'STR-12',
    source: ADA, scale: { unitPx: 1000 * s, unitName: 'metres', count: 5 },
    description: 'Section through a gently sloping ramp at no more than 1 in 12, rising at most 760 mm before a level landing, with handrails at a constant height above the surface.',
  }, L, B)
}

function cantileveredStair(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const s = 0.16
  const x0 = 250
  const y0 = 500
  const X = (mm: number) => x0 + mm * s
  const Y = (mm: number) => y0 - mm * s
  const R = 175
  const N = 9
  const wallT = 300
  // cross-section across the flight: the wall is cut, each tread is a slab
  // built into the wall and projecting with no support at its free end
  const wallX = 0
  hatched(L, rect(X(wallX - wallT), Y(N * R + 400), wallT * s, (N * R + 400) * s), 'h-brick')
  hatched(L, rect(X(wallX - wallT - 200), Y(0), (wallT + 1600) * s, 120 * s), 'h-concrete')
  const width = 1000
  const embed = 220
  for (let i = 0; i < N; i++) {
    const y = (i + 1) * R
    const poly = rect(X(-embed), Y(y), (width + embed) * s, 60 * s)
    hatched(L, poly, 'h-stone')
  }
  // free edge: nothing below
  L.fine.push(line([X(width), Y(R)], [X(width), Y(N * R)], 'stroke-dasharray="2 4"'))
  // load arrow and moment
  arrow(L, [X(width - 60), Y(5 * R + 260)], [X(width - 60), Y(5 * R + 70)])
  L.notes.push(text(X(width - 40), Y(5 * R + 200), 'LOAD', 'class="t-small t-accent"'))
  L.center.push(el(`M${f(X(-embed / 2) - 16)} ${f(Y(5 * R) - 20)}A 24 24 0 0 1 ${f(X(-embed / 2) + 18)} ${f(Y(5 * R) - 18)}`))
  L.notes.push(text(X(-wallT - 200), Y(0) + 120 * s + 50, '↻ MOMENT RESISTED WHERE THE TREAD IS BUILT INTO THE WALL', 'class="t-small t-accent"'))
  B.add([X(-wallT - 200), Y(N * R + 400)], [X(width + 400), Y(0) + 120 * s])
  L.dims.push(hDim(Y(0) + 120 * s + 22, X(0), X(width), `PROJECTION ${width}`), hDim(Y(0) + 120 * s + 22, X(-embed), X(0), `${embed}`))
  callouts(L, [
    { text: 'WALL (SECTION)', at: [X(-wallT), Y(N * R)] },
    { text: 'EMBEDDED END', at: [X(-embed), Y(7 * R)] },
    { text: 'CANTILEVERED TREAD', at: [X(300), Y(6 * R)] },
    { text: 'FREE EDGE', at: [X(width), Y(3 * R)] },
  ], X(-wallT - 200))
  return finish({
    id: 'cantilevered-stair', title: 'Cantilevered Stair', subtitle: 'Treads projecting from a wall with no visible support', view: 'SECTION', sheetNo: 'STR-13',
    source: ORIGINAL, scale: { unitPx: 500 * s, unitName: '500 mm', count: 2 },
    description: 'Section across a stair whose stone steps are built into a wall at one end and project freely at the other, with the load on the free end resisted where the step is held in the wall.',
  }, L, B)
}

function perron(): SheetSpec {
  // Exterior double-flight stair to a raised entrance platform, in elevation
  const L = newLayers()
  const B = new Bounds()
  const cx = 310
  const g = 16
  const r = 11
  const n = 9
  const base = 470
  const platW = 120
  const top = base - n * r
  // facade behind with entrance door
  L.fine.push(el(path(rect(cx - 200, base - 300, 400, 300), true)))
  L.profile.push(el(`M${cx - 30} ${top}V${top - 110}A30 30 0 0 1 ${cx + 30} ${top - 110}V${top}`))
  // platform
  L.profile.push(el(path(rect(cx - platW / 2, top, platW, n * r), true)))
  hatched(L, rect(cx - platW / 2 + 12, top + 14, platW - 24, n * r - 14), 'h-stone', 'fine')
  // two flights rising toward the centre from either side
  for (const sgn of [-1, 1]) {
    const edge = cx + sgn * platW / 2
    const pts: Pt[] = [[edge, top]]
    for (let k = 0; k < n; k++) {
      const x = edge + sgn * (k + 1) * g
      pts.push([x - sgn * g, top + k * r], [x - sgn * g, top + (k + 1) * r], [x, top + (k + 1) * r])
    }
    pts.push([edge + sgn * n * g, base], [edge, base])
    L.profile.push(el(path(pts)))
    // balustrade along the flight
    const railY = (x: number) => top - 36 + ((Math.abs(x - edge)) / g) * r
    L.profile.push(line([edge, railY(edge)], [edge + sgn * n * g, railY(edge + sgn * n * g)]))
    for (let k = 0; k <= n; k += 1) {
      const x = edge + sgn * k * g
      L.fine.push(el(`M${f(x)} ${f(railY(x) + 3)}c${f(sgn * 2)} 8 ${f(sgn * -2)} 18 0 ${f(top + k * r - railY(x) - 3)}`))
    }
  }
  // platform balustrade and terminal piers
  L.profile.push(line([cx - platW / 2, top - 36], [cx + platW / 2, top - 36]))
  for (const sgn of [-1, 1]) L.profile.push(el(path(rect(cx + sgn * (platW / 2 + n * g) - 7, base - 46, 14, 46), true)))
  L.profile.push(line([cx - 215, base], [cx + 215, base]))
  B.add([cx - 215, base - 300], [cx + 215, base])
  L.dims.push(hDim(base + 22, cx - platW / 2, cx + platW / 2, 'PLATFORM'), vDim(cx + 226, base, top, `${n} R`))
  callouts(L, [
    { text: 'ENTRANCE', at: [cx - 30, top - 60] },
    { text: 'BALUSTRADE', at: [cx - platW / 2 - 3 * g, top - 36 + 3 * r] },
    { text: 'PLATFORM', at: [cx - platW / 2 + 12, top + 40] },
    { text: 'FLIGHT', at: [cx - platW / 2 - 5 * g, top + 4 * r] },
    { text: 'TERMINAL PIER', at: [cx - platW / 2 - n * g - 7, base - 20] },
  ], cx - 215)
  return finish({
    id: 'perron', title: 'Perron', subtitle: 'External stair rising to a raised entrance', view: 'ELEVATION', sheetNo: 'STR-14',
    source: ORIGINAL, scale: { unitPx: g * 2, unitName: 'two goings', count: 4 },
    description: 'Elevation of an outdoor stair with two symmetrical flights climbing toward each other to a platform before a raised front door, edged with balustrades.',
  }, L, B)
}

export const STAIR_SHEETS: Array<() => SheetSpec> = [
  ...PARTS.map((p) => () => flight(p)),
  spiralStair,
  grandStair,
  helicalRamp,
  () => switchbackRamp('ramp-circulation'),
  accessibilityRamp,
  cantileveredStair,
  perron,
]
