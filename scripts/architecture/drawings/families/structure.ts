/**
 * Structural systems and vernacular structures.
 *
 * Bracing, trusses, diagrids, exposed frames and stepped forms in ELEVATION;
 * footings, cantilevers, mass timber, cable roofs, trulli, windcatchers, yurts
 * and dome chains in SECTION; space frames and served/servant plans in PLAN.
 * Load paths and forces are drawn in the accent colour.
 */
import { type Pt, type SheetSpec, f, path, el, vDim, hDim, text } from '../sheet'
import { newLayers, finish, hatched, masked, circle, line, rect, ring, callouts, arrow, courses, Bounds, ORIGINAL, type Layers } from '../kit'

const ACCENT = 'style="stroke: var(--_accent)"'
const red = (L: Layers, d: string, w = 2.4) => L.cut.push(`<path d="${d}" ${ACCENT} stroke-width="${w}"/>`)

const meta = (id: string, title: string, subtitle: string, view: string, sheetNo: string, description: string, unitPx: number, unitName: string, source = ORIGINAL) =>
  ({ id, title, subtitle, view, sheetNo, description, source, scale: { unitPx, unitName, count: 4 } })

/** Pin support (triangle) and roller (triangle on circles). */
function support(L: Layers, at: Pt, roller = false) {
  L.profile.push(el(path([at, [at[0] - 10, at[1] + 16], [at[0] + 10, at[1] + 16]], true)))
  if (roller) L.profile.push(circle([at[0] - 5, at[1] + 20], 4), circle([at[0] + 5, at[1] + 20], 4))
  L.fine.push(el(`M${at[0] - 16} ${at[1] + (roller ? 24 : 16)}h32`))
  for (let k = -14; k < 16; k += 6) L.fine.push(line([at[0] + k, at[1] + (roller ? 24 : 16)], [at[0] + k - 5, at[1] + (roller ? 30 : 22)]))
}

// ---------------------------------------------------------------------------
function bracedFrame(kind: 'x-bracing' | 'chevron-bracing' | 'diagonal-bracing'): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 200
  const bay = 120
  const storey = 100
  const n = 3
  const ground = 480
  for (let i = 0; i <= 2; i++) L.profile.push(el(path(rect(x0 + i * bay - 4, ground - n * storey, 8, n * storey), true)))
  for (let j = 1; j <= n; j++) L.profile.push(el(path(rect(x0, ground - j * storey - 4, 2 * bay, 8), true)))
  // bracing in the right-hand bay, every storey
  for (let j = 0; j < n; j++) {
    const xl = x0 + bay
    const xr = x0 + 2 * bay
    const yb = ground - j * storey
    const yt = yb - storey
    if (kind === 'x-bracing') red(L, `M${xl} ${yb}L${xr} ${yt}M${xr} ${yb}L${xl} ${yt}`)
    else if (kind === 'chevron-bracing') red(L, `M${xl} ${yb}L${(xl + xr) / 2} ${yt}L${xr} ${yb}`)
    else red(L, `M${xl} ${yb}L${xr} ${yt}`)
    L.fine.push(circle([xl, yb], 3), circle([xr, yt], 3))
  }
  hatched(L, rect(x0 - 40, ground, 2 * bay + 80, 18), 'h-concrete', 'profile')
  // wind load and racking
  for (let j = 1; j <= n; j++) arrow(L, [x0 - 90, ground - j * storey], [x0 - 10, ground - j * storey])
  L.notes.push(text(x0 - 90, ground - n * storey - 10, 'WIND / SEISMIC', 'class="t-small t-accent"'))
  // unbraced bay deforms (dashed sway) for contrast
  L.center.push(el(`M${x0} ${ground}L${x0 + 22} ${ground - n * storey}M${x0 + bay} ${ground}L${x0 + bay + 22} ${ground - n * storey}`))
  B.add([x0 - 100, ground - n * storey - 20], [x0 + 2 * bay + 40, ground + 18])
  L.dims.push(hDim(ground + 40, x0 + bay, x0 + 2 * bay, 'BRACED BAY'), vDim(x0 + 2 * bay + 30, ground, ground - storey, 'STOREY'))
  const brace = kind === 'x-bracing' ? 'CROSS BRACES' : kind === 'chevron-bracing' ? 'CHEVRON BRACES' : 'DIAGONAL BRACE'
  callouts(L, [
    { text: 'BEAM', at: [x0 + 20, ground - 2 * storey] },
    { text: brace, at: [x0 + bay + 30, ground - storey * 1.6] },
    { text: 'COLUMN', at: [x0 - 4, ground - 50] },
    { text: 'SWAY WITHOUT BRACING', at: [x0 + 11, ground - n * storey / 2] },
  ], x0 - 100)
  const t: Record<typeof kind, [string, string, string, string]> = {
    'x-bracing': ['X-Bracing', 'Crossed diagonals stiffening a frame bay', 'STC-01', 'Elevation of a three-storey steel frame with pairs of crossing diagonal members in one bay, resisting sideways wind and earthquake forces that would otherwise make the frame sway.'],
    'chevron-bracing': ['Chevron Bracing', 'Inverted-V braces meeting at mid-beam', 'STC-02', 'Elevation of a steel frame with braces rising from each column base to meet at the middle of the beam above, forming an inverted V that resists sideways forces while leaving room for openings.'],
    'diagonal-bracing': ['Diagonal Bracing', 'Single diagonal per bay', 'STC-03', 'Elevation of a steel frame with a single diagonal member across each storey of one bay, turning the rectangle into rigid triangles.'],
  }
  const [title, subtitle, sheetNo, description] = t[kind]
  return finish(meta(kind, title, subtitle, 'ELEVATION', sheetNo, description, bay / 4, 'quarters of bay'), L, B)
}

function prattTruss(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 140
  const span = 390
  const h = 90
  const n = 6
  const yb = 380
  const yt = yb - h
  const p = span / n
  const chord = (y: number, sym: string) => {
    L.profile.push(el(path(rect(x0, y - 4, span, 8), true)))
    for (let i = 0; i < n; i++) L.notes.push(text(x0 + (i + 0.5) * p, y + (sym === 'T' ? 18 : -10), sym, 'text-anchor="middle" class="t-small t-accent"'))
  }
  chord(yt, 'C')
  chord(yb, 'T')
  for (let i = 0; i <= n; i++) {
    L.profile.push(line([x0 + i * p, yb], [x0 + i * p, yt]))
    if (i > 0 && i < n) L.notes.push(text(x0 + i * p + 4, (yb + yt) / 2, 'C', 'class="t-small t-accent"'))
  }
  // diagonals slope down toward the centre: in tension under gravity
  for (let i = 0; i < n; i++) {
    const toCentre = i < n / 2
    const a: Pt = toCentre ? [x0 + i * p, yt] : [x0 + (i + 1) * p, yt]
    const b: Pt = toCentre ? [x0 + (i + 1) * p, yb] : [x0 + i * p, yb]
    red(L, `M${f(a[0])} ${f(a[1])}L${f(b[0])} ${f(b[1])}`, 1.8)
  }
  for (let i = 0; i <= n; i++) L.profile.push(circle([x0 + i * p, yb], 3), circle([x0 + i * p, yt], 3))
  for (let i = 1; i < n; i++) arrow(L, [x0 + i * p, yt - 60], [x0 + i * p, yt - 8])
  support(L, [x0, yb + 4])
  support(L, [x0 + span, yb + 4], true)
  B.add([x0 - 20, yt - 70], [x0 + span + 20, yb + 34])
  L.dims.push(hDim(yb + 54, x0, x0 + span, 'SPAN'), vDim(x0 + span + 24, yb, yt, 'D'))
  L.notes.push(text(x0 + span, yt - 70, 'C = COMPRESSION · T = TENSION', 'text-anchor="end" class="t-small t-accent"'))
  callouts(L, [
    { text: 'TOP CHORD', at: [x0, yt] },
    { text: 'VERTICAL (STRUT)', at: [x0 + p, yt + 30] },
    { text: 'DIAGONAL (TIE)', at: [x0 + p * 0.5, (yb + yt) / 2] },
    { text: 'BOTTOM CHORD', at: [x0, yb] },
    { text: 'PIN SUPPORT', at: [x0 - 10, yb + 16] },
  ], x0 - 20)
  return finish(meta('pratt-truss', 'Pratt Truss', 'Verticals in compression, diagonals in tension', 'ELEVATION', 'STC-04',
    'Elevation of a bridge-style truss: a top and bottom chord joined by vertical struts and by diagonals that slope down toward the middle, so under load the diagonals pull and the verticals push.', p, 'panels',
    'Truss form patented by Thomas and Caleb Pratt (1844). Force pattern for gravity load on a simply supported span. Original drawing by Project Exodus.'), L, B)
}

function deadLoad(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 220
  const w = 260
  const ground = 440
  const floors = [160, 260, 360]
  for (const y of floors) hatched(L, rect(x0 - 10, y - 12, w + 20, 12), 'h-concrete')
  hatched(L, rect(x0 - 10, 150, w + 20, 10), 'h-concrete')
  for (const x of [x0, x0 + w]) hatched(L, rect(x - 8, 150, 16, ground - 150))
  for (const x of [x0, x0 + w]) hatched(L, rect(x - 40, ground, 80, 34), 'h-concrete')
  hatched(L, rect(x0 - 120, ground + 34, w + 240, 20), 'h-earth', null)
  // self-weight: distributed arrows on every slab, collecting into columns, footings, soil
  for (const y of [...floors, 160]) for (let x = x0 + 20; x < x0 + w; x += 26) arrow(L, [x, y - 34], [x, y - 14])
  red(L, `M${x0 + 30} 200Q${x0 + 10} 240 ${x0} 280M${x0 + w - 30} 200Q${x0 + w - 10} 240 ${x0 + w} 280`, 1.4)
  for (const x of [x0, x0 + w]) arrow(L, [x, ground - 40], [x, ground + 40])
  for (const x of [x0 - 30, x0, x0 + 30, x0 + w - 30, x0 + w, x0 + w + 30]) arrow(L, [x, ground + 74], [x, ground + 38])
  L.notes.push(text(x0 - 60, ground + 86, 'SOIL REACTION', 'class="t-small t-accent"'))
  L.notes.push(text(x0 + w / 2, 128, 'SELF-WEIGHT OF EVERY PERMANENT PART', 'text-anchor="middle" class="t-small t-accent"'))
  B.add([x0 - 120, 120], [x0 + w + 120, ground + 74])
  callouts(L, [
    { text: 'ROOF SLAB', at: [x0 - 10, 155] },
    { text: 'FLOOR SLAB', at: [x0 - 10, 254] },
    { text: 'COLUMN', at: [x0 - 8, 320] },
    { text: 'FOOTING', at: [x0 - 40, ground + 17] },
  ], x0 - 120)
  return finish(meta('dead-load', 'Dead Load', 'The permanent weight of the structure itself', 'SECTION', 'STC-05',
    'Section through a small three-level building showing its own weight bearing down on every slab, gathering into the columns, down through the footings, and pushed back up by the ground.', 26, 'arrow spacing (indicative)'), L, B)
}

function spreadFooting(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const ground = 260
  const top = 360
  const Bw = 260
  const D = 70
  hatched(L, rect(cx - 220, ground, 440, 220), 'h-earth', null)
  masked(L, rect(cx - Bw / 2, top, Bw, D), 'hatch')
  masked(L, rect(cx - 30, 140, 60, top - 140), 'hatch')
  hatched(L, rect(cx - Bw / 2, top, Bw, D), 'h-concrete')
  hatched(L, rect(cx - 30, ground - 120, 60, top - ground + 120), 'h-concrete')
  hatched(L, rect(cx - 60, top - 10, 120, 10), 'h-concrete', 'fine')
  // rebar mat (dots + bar) near the bottom, starter bars into the column
  L.profile.push(line([cx - Bw / 2 + 10, top + D - 10], [cx + Bw / 2 - 10, top + D - 10], 'stroke-width="2"'))
  for (let x = cx - Bw / 2 + 18; x < cx + Bw / 2 - 10; x += 16) L.profile.push(circle([x, top + D - 16], 2.4, 'class="solid"'))
  L.profile.push(el(`M${cx - 18} ${ground - 110}V${top + D - 12}h-30M${cx + 18} ${ground - 110}V${top + D - 12}h30`, 'stroke-width="1.6"'))
  // column load and soil pressure
  arrow(L, [cx, 90], [cx, 136])
  L.notes.push(text(cx + 8, 100, 'COLUMN LOAD', 'class="t-small t-accent"'))
  for (let x = cx - Bw / 2 + 10; x <= cx + Bw / 2 - 10; x += 30) arrow(L, [x, top + D + 46], [x, top + D + 4])
  L.notes.push(text(cx + Bw / 2 + 6, top + D + 40, 'BEARING PRESSURE', 'class="t-small t-accent"'))
  L.profile.push(line([cx - 220, ground], [cx + 220, ground]))
  B.add([cx - 220, 90], [cx + 220, ground + 220])
  L.dims.push(hDim(top + D + 70, cx - Bw / 2, cx + Bw / 2, 'B (WIDTH)'), vDim(cx - Bw / 2 - 20, top, top + D, 'D'))
  callouts(L, [
    { text: 'COLUMN', at: [cx - 30, ground - 60] },
    { text: 'GROUND LEVEL', at: [cx - 220, ground] },
    { text: 'STARTER BARS', at: [cx - 18, top - 30] },
    { text: 'FOOTING PAD', at: [cx - Bw / 2, top + 20] },
    { text: 'BOTTOM REINFORCEMENT', at: [cx - Bw / 2 + 10, top + D - 10] },
  ], cx - 220)
  return finish(meta('spread-footing', 'Spread Footing', 'Wide pad spreading a column load into the soil', 'SECTION', 'STC-06',
    'Section through a reinforced concrete column standing on a wide, shallow concrete pad buried in the ground, which spreads the column’s load over enough soil to carry it.', 30, '0.25 m (indicative)'), L, B)
}

function tensionCable(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const ground = 470
  const mastX = 230
  const mastTop = 110
  hatched(L, rect(mastX - 8, mastTop, 16, ground - mastTop))
  // roof deck hung from stays
  const deckY = 300
  hatched(L, rect(mastX + 8, deckY, 330, 12), 'h-concrete')
  for (const k of [0.25, 0.5, 0.75, 1]) {
    const x = mastX + 8 + 330 * k
    red(L, `M${mastX} ${mastTop + 10}L${f(x)} ${deckY}`, 1.4)
    L.profile.push(circle([x, deckY], 3, 'class="solid"'))
  }
  // backstay to ground anchor
  red(L, `M${mastX} ${mastTop + 10}L${mastX - 150} ${ground}`, 2)
  hatched(L, rect(mastX - 180, ground - 4, 60, 30), 'h-concrete')
  arrow(L, [mastX - 130, ground - 40], [mastX - 110, ground - 100])
  L.notes.push(text(mastX - 104, ground - 100, 'TENSION', 'class="t-small t-accent"'))
  arrow(L, [mastX, mastTop - 40], [mastX, mastTop - 4])
  L.notes.push(text(mastX + 8, mastTop - 30, 'MAST IN COMPRESSION', 'class="t-small t-accent"'))
  for (const x of [mastX + 338]) hatched(L, rect(x - 6, deckY + 12, 12, ground - deckY - 12))
  L.profile.push(line([mastX - 200, ground], [mastX + 360, ground]))
  B.add([mastX - 200, mastTop - 40], [mastX + 360, ground + 26])
  L.dims.push(hDim(deckY - 30, mastX + 8, mastX + 338, 'SPAN HUNG FROM STAYS'))
  callouts(L, [
    { text: 'MAST', at: [mastX - 8, mastTop + 60] },
    { text: 'BACKSTAY', at: [mastX - 80, 300] },
    { text: 'GROUND ANCHOR', at: [mastX - 180, ground + 10] },
    { text: 'STAY CABLES', at: [mastX + 90, 210] },
    { text: 'ROOF DECK', at: [mastX + 60, deckY + 6] },
  ], mastX - 200)
  return finish(meta('tension-cable', 'Tension Cable', 'Roof hung from a mast by steel stays', 'SECTION', 'STC-08',
    'Section through a long roof suspended from a tall mast by straight steel cables, balanced by a cable anchored into the ground behind, so the cables work in tension and the mast in compression.', 40, 'metres (indicative)'), L, B)
}

function diagrid(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 240
  const w = 220
  const ground = 500
  const H = 400
  const mods = 4
  const mh = H / mods
  L.profile.push(el(path(rect(x0, ground - H, w, H), true)))
  for (let k = 1; k < mods * 4; k++) L.fine.push(line([x0, ground - (k * H) / (mods * 4)], [x0 + w, ground - (k * H) / (mods * 4)]))
  const d: string[] = []
  const cols = 4
  const cw = w / cols
  for (let j = 0; j < mods; j++) {
    const yb = ground - j * mh
    const yt = yb - mh
    for (let i = 0; i < cols; i++) {
      const xl = x0 + i * cw
      d.push(`M${f(xl)} ${f(yb)}L${f(xl + cw / 2)} ${f(yt)}L${f(xl + cw)} ${f(yb)}`)
      if (j < mods) d.push(`M${f(xl + cw / 2)} ${f(yt)}L${f(xl + cw)} ${f(yt)}`)
    }
    for (let i = 0; i < cols; i++) d.push(`M${f(x0 + i * cw + cw / 2)} ${f(yt)}L${f(x0 + (i + 1) * cw)} ${f(yb)}`)
  }
  // node-to-node diamonds
  const dg: string[] = []
  for (let j = 0; j < mods; j++) for (let i = 0; i <= cols; i++) {
    const x = x0 + i * cw
    const yb = ground - j * mh
    if (i < cols) dg.push(`M${f(x)} ${f(yb)}L${f(x + cw / 2)} ${f(yb - mh)}`)
    if (i > 0) dg.push(`M${f(x)} ${f(yb)}L${f(x - cw / 2)} ${f(yb - mh)}`)
  }
  red(L, dg.join(''), 2)
  B.add([x0 - 20, ground - H - 10], [x0 + w + 40, ground + 10])
  L.profile.push(line([x0 - 60, ground], [x0 + w + 60, ground]))
  L.dims.push(vDim(x0 + w + 24, ground, ground - mh, 'MODULE'))
  callouts(L, [
    { text: 'DIAGONAL MEMBER', at: [x0 + cw * 0.25, ground - mh * 2.5] },
    { text: 'NODE', at: [x0, ground - mh * 2] },
    { text: 'FLOOR EDGE', at: [x0, ground - mh * 3.25] },
  ], x0 - 20)
  return finish(meta('diagrid-structure', 'Diagrid', 'Tower framed by a lattice of diagonals', 'ELEVATION', 'STC-09',
    'Elevation of a tower whose outer structure is a lattice of crossing diagonal members forming triangles, carrying both the weight and sideways wind loads without vertical columns at the edge.', mh / 4, 'quarters of module'), L, B)
}

function massTimber(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 170
  const x1 = 530
  const y = 260
  const lay = 14
  // CLT panel: 5 layers alternating grain direction
  for (let k = 0; k < 5; k++) {
    const yy = y + k * lay
    const along = k % 2 === 0
    L.hatch.push(`<rect x="${x0}" y="${yy}" width="${x1 - x0}" height="${lay}" fill="url(#${along ? 'h-timber' : 'endgrain'})" stroke="none"/>`)
    L.cut.push(el(path(rect(x0, yy, x1 - x0, lay), true)))
  }
  // topping and acoustic layer
  hatched(L, rect(x0, y - 30, x1 - x0, 22), 'h-concrete')
  L.fine.push(el(path(rect(x0, y - 8, x1 - x0, 8), true)))
  // glulam beam below with laminations
  const bx = 300
  hatched(L, rect(bx, y + 5 * lay, 70, 140), 'h-timber')
  for (let k = 1; k < 10; k++) L.fine.push(line([bx, y + 5 * lay + k * 14], [bx + 70, y + 5 * lay + k * 14]))
  L.profile.push(el(path(rect(bx + 20, y + 5 * lay + 140, 30, 40), true)))
  L.notes.push(text(bx + 35, y + 5 * lay + 196, 'GLULAM COLUMN', 'text-anchor="middle" class="t-small"'))
  // screws
  for (const sx of [bx + 18, bx + 52]) L.profile.push(line([sx, y - 4], [sx, y + 5 * lay + 30], 'stroke-width="1.4"'))
  B.add([x0, y - 30], [x1, y + 5 * lay + 200])
  L.dims.push(vDim(x1 + 10, y, y + 5 * lay, '5-PLY'))
  callouts(L, [
    { text: 'CONCRETE TOPPING', at: [x0, y - 19] },
    { text: 'ACOUSTIC LAYER', at: [x0, y - 4] },
    { text: 'CLT LAYER (GRAIN ALONG)', at: [x0, y + lay / 2] },
    { text: 'CLT LAYER (GRAIN ACROSS)', at: [x0, y + lay * 1.5] },
    { text: 'GLULAM BEAM', at: [bx, y + 5 * lay + 70] },
    { text: 'SELF-TAPPING SCREWS', at: [bx + 18, y + 5 * lay + 20] },
  ], x0)
  return finish(meta('mass-timber', 'Mass Timber', 'Cross-laminated panels on glue-laminated beams', 'SECTION', 'STC-10',
    'Section through a timber floor: a thick panel of five glued layers of boards, each laid crosswise to the last, resting on a deep beam built up from glued laminations, finished with a concrete topping.', lay, 'layer thickness (≈ 40 mm)'), L, B,
    '<pattern id="endgrain" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="4" cy="4" r="2.2" class="ink l-hair"/></pattern>')
}

function exposedStructure(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 180
  const bay = 90
  const n = 4
  const st = 90
  const floors = 4
  const ground = 500
  // glass envelope set back behind the external frame
  L.fine.push(el(path(rect(x0 + 10, ground - floors * st, n * bay - 20, floors * st), true)))
  for (let i = 1; i < n * 3; i++) L.shading.push(line([x0 + 10 + (i * (n * bay - 20)) / (n * 3), ground - floors * st], [x0 + 10 + (i * (n * bay - 20)) / (n * 3), ground]))
  // external steel frame: columns, floor beams, cross bracing in each bay
  for (let i = 0; i <= n; i++) L.cut.push(el(path(rect(x0 + i * bay - 4, ground - floors * st - 10, 8, floors * st + 10), true)))
  for (let j = 1; j <= floors; j++) L.profile.push(el(path(rect(x0 - 10, ground - j * st - 3, n * bay + 20, 6), true)))
  const xb: string[] = []
  for (let i = 0; i < n; i++) for (let j = 0; j < floors; j++) {
    const xl = x0 + i * bay
    const yb = ground - j * st
    xb.push(`M${xl} ${yb}L${xl + bay} ${yb - st}M${xl + bay} ${yb}L${xl} ${yb - st}`)
  }
  red(L, xb.join(''), 1)
  for (let i = 0; i <= n; i++) for (let j = 0; j <= floors; j++) L.profile.push(circle([x0 + i * bay, ground - j * st], 3.5))
  L.profile.push(line([x0 - 40, ground], [x0 + n * bay + 40, ground]))
  B.add([x0 - 40, ground - floors * st - 12], [x0 + n * bay + 40, ground])
  L.dims.push(hDim(ground + 24, x0, x0 + bay, 'BAY'))
  callouts(L, [
    { text: 'STEEL COLUMN', at: [x0 - 4, ground - 2.5 * st] },
    { text: 'CROSS BRACING (TIE RODS)', at: [x0 + bay * 0.25, ground - st * 1.25] },
    { text: 'PIN JOINT', at: [x0 + bay - 3.5, ground - 2 * st] },
    { text: 'GLASS ENVELOPE BEHIND', at: [x0 + 10, ground - 3.6 * st] },
  ], x0 - 40)
  return finish(meta('exposed-structure', 'Exposed Structure', 'Frame and bracing worn outside the skin', 'ELEVATION', 'STC-11',
    'Elevation of a High-Tech building whose steel columns, beams and cross-bracing rods stand outside the glass walls, so the structure itself is the facade.', bay / 4, 'quarters of bay'), L, B)
}

function gerberette(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const colX = 300
  const y = 220
  hatched(L, rect(colX - 14, 100, 28, 400), 'h-stone')
  // the gerberette: a cast-steel rocker sleeved over the column, pinned through it
  const g: Pt[] = [[colX - 120, y + 6], [colX + 16, y - 20], [colX + 100, y - 18], [colX + 100, y + 10], [colX + 16, y + 30], [colX - 120, y + 20]]
  L.hatch.push(`<path d="${path(g, true)}" fill="url(#h-concrete)" stroke="none"/>`)
  red(L, path(g, true), 2.6)
  L.profile.push(circle([colX, y], 7), circle([colX, y], 3, 'class="solid"'))
  // inner end carries the main truss; outer end tied down by a vertical rod
  hatched(L, rect(colX + 100, y - 40, 180, 16), 'h-stone')
  hatched(L, rect(colX + 100, y + 30, 180, 16), 'h-stone')
  for (let x = colX + 100; x < colX + 280; x += 30) L.profile.push(line([x, y - 24], [x + 30, y + 30]))
  L.profile.push(circle([colX + 100, y - 4], 5))
  L.cut.push(line([colX - 116, y + 14], [colX - 116, 500], 'stroke-width="2.4"'))
  arrow(L, [colX - 140, y + 60], [colX - 140, y + 120])
  arrow(L, [colX + 190, y - 70], [colX + 190, y - 44])
  L.notes.push(text(colX - 136, y + 100, 'TIE PULLS DOWN', 'class="t-small t-accent"'), text(colX + 196, y - 72, 'FLOOR LOAD', 'class="t-small t-accent"'))
  B.add([colX - 160, 100], [colX + 290, 500])
  callouts(L, [
    { text: 'GERBERETTE (CAST STEEL)', at: [colX - 60, y + 6] },
    { text: 'PIN THROUGH COLUMN', at: [colX - 7, y] },
    { text: 'TIE ROD', at: [colX - 116, 380] },
    { text: 'COLUMN', at: [colX - 14, 440] },
  ], colX - 160)
  L.notes.push(text(colX + 190, y + 70, 'MAIN TRUSS', 'text-anchor="middle" class="t-sub"'))
  return finish(meta('gerberette', 'Gerberette', 'Cast-steel rocker bracket balancing truss and tie', 'ELEVATION', 'STC-12',
    'Elevation of a column with a cast-steel arm pinned through it like a seesaw: the inner end carries the main floor truss and the outer end is held down by a vertical tie, so the column takes almost no bending.', 30, 'metres (indicative)',
    'After the gerberettes of the Centre Pompidou, Paris (1977; Piano & Rogers, engineer Peter Rice, Arup), named for Heinrich Gerber. Simplified; not a survey.'), L, B)
}

function massiveCantilever(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const wallX = 260
  const y = 230
  const depth = 70
  hatched(L, rect(wallX - 50, y, 50, 270), 'h-concrete')
  // cantilever block: back-span inside, long projection outside
  hatched(L, rect(wallX - 160, y - depth, 160 + 260, depth), 'h-concrete')
  L.profile.push(line([wallX - 150, y - depth + 10], [wallX + 250, y - depth + 10], 'stroke-width="2"'))
  for (let x = wallX - 140; x < wallX + 250; x += 20) L.profile.push(circle([x, y - depth + 10], 2, 'class="solid"'))
  // moment diagram (hogging over the support)
  L.center.push(el(`M${wallX - 160} ${y + 30}Q${wallX - 40} ${y + 30} ${wallX - 25} ${y + 110}Q${wallX + 60} ${y + 40} ${wallX + 260} ${y + 30}`))
  L.notes.push(text(wallX + 60, y + 70, 'BENDING MOMENT (MAX AT SUPPORT)', 'class="t-small t-accent"'))
  arrow(L, [wallX + 240, y - depth - 50], [wallX + 240, y - depth - 6])
  arrow(L, [wallX - 140, y + 30], [wallX - 140, y - 4])
  L.notes.push(text(wallX - 134, y + 20, 'HOLD-DOWN', 'class="t-small t-accent"'))
  L.profile.push(line([wallX - 200, 500], [wallX + 300, 500]))
  B.add([wallX - 200, y - depth - 50], [wallX + 300, 500])
  L.dims.push(hDim(y - depth - 20, wallX, wallX + 260, 'PROJECTION'), hDim(y - depth - 20, wallX - 160, wallX, 'BACK-SPAN'))
  callouts(L, [
    { text: 'TENSION STEEL (TOP)', at: [wallX - 150, y - depth + 10] },
    { text: 'CANTILEVERED SLAB', at: [wallX - 120, y - depth / 2] },
    { text: 'SUPPORTING WALL', at: [wallX - 50, y + 140] },
  ], wallX - 200)
  return finish(meta('massive-cantilever', 'Massive Cantilever', 'Heavy concrete projecting far past its support', 'SECTION', 'STC-13',
    'Section through a deep concrete mass that projects far beyond the wall carrying it, balanced by a length held down inside, with its steel reinforcement along the top where it is pulled in tension.', 40, 'metres (indicative)'), L, B)
}

function setbackTower(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const street = 520
  const tiers: Array<[number, number]> = [[300, 110], [240, 100], [180, 90], [120, 80], [80, 60]]
  let y = street
  for (const [w, h] of tiers) {
    L.profile.push(el(path(rect(cx - w / 2, y - h, w, h), true)))
    for (let k = 1; k < Math.round(w / 20); k++) L.fine.push(line([cx - w / 2 + k * 20, y - h + 6], [cx - w / 2 + k * 20, y - 6]))
    y -= h
  }
  // sky exposure plane from the opposite side of the street
  const opp = cx - 150 - 80
  L.center.push(line([opp, street], [cx - 20, street - 470]))
  L.notes.push(text(opp + 10, street - 120, 'SKY EXPOSURE PLANE', 'class="t-small t-accent"'))
  L.profile.push(line([opp - 20, street], [cx + 180, street]))
  L.fine.push(line([opp, street], [opp, street - 30]))
  L.notes.push(text(opp + 4, street + 16, 'STREET', 'class="t-small"'))
  B.add([opp - 20, y], [cx + 180, street + 20])
  callouts(L, [
    { text: 'SETBACK', at: [cx - 120, street - 110] },
    { text: 'TOWER', at: [cx - 40, y + 30] },
    { text: 'BASE', at: [cx - 150, street - 50] },
  ], opp - 20)
  return finish(meta('setback-tower', 'Setback Tower', 'Skyscraper stepping back to let light reach the street', 'ELEVATION', 'STC-14',
    'Elevation of a tall building that steps inward in stages as it rises, keeping inside an imaginary sloping plane drawn from the far side of the street so daylight reaches the pavement.', 40, 'storeys (indicative)',
    'Setback rules of the New York 1916 Zoning Resolution. Generic original drawing by Project Exodus; not a specific building.'), L, B)
}

function servedServant(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 220
  const y0 = 160
  const s = 220
  // open "served" floor plate with a few columns
  L.profile.push(el(path(rect(x0, y0, s, s), true)))
  for (const [cx, cy] of [[x0 + s / 3, y0 + s / 3], [x0 + 2 * s / 3, y0 + s / 3], [x0 + s / 3, y0 + 2 * s / 3], [x0 + 2 * s / 3, y0 + 2 * s / 3]] as Pt[]) hatched(L, rect(cx - 6, cy - 6, 12, 12))
  L.notes.push(text(x0 + s / 2, y0 + s / 2 + 4, 'SERVED SPACE', 'text-anchor="middle" class="t-sub"'))
  // "servant" towers attached outside: stairs, lifts, ducts
  const towers: Array<[number, number, string]> = [[x0 - 60, y0 + 40, 'STAIR'], [x0 + s, y0 + 40, 'DUCTS'], [x0 + s / 2 - 30, y0 - 60, 'LIFT'], [x0 + s / 2 - 30, y0 + s, 'STAIR']]
  for (const [tx, ty, label] of towers) {
    hatched(L, rect(tx, ty, 60, 60), 'h-concrete')
    masked(L, rect(tx + 10, ty + 10, 40, 40), 'cut')
    L.profile.push(el(path(rect(tx + 10, ty + 10, 40, 40), true)))
    if (label === 'STAIR') for (let k = 1; k < 6; k++) L.fine.push(line([tx + 10, ty + 10 + k * 6.6], [tx + 50, ty + 10 + k * 6.6]))
    if (label === 'LIFT') L.fine.push(line([tx + 10, ty + 10], [tx + 50, ty + 50]), line([tx + 50, ty + 10], [tx + 10, ty + 50]))
    if (label === 'DUCTS') L.fine.push(circle([tx + 22, ty + 30], 8), circle([tx + 40, ty + 30], 8))
  }
  B.add([x0 - 60, y0 - 60], [x0 + s + 60, y0 + s + 60])
  callouts(L, [
    { text: 'SERVANT TOWER (STAIR)', at: [x0 - 60, y0 + 70] },
    { text: 'SERVANT TOWER (LIFT)', at: [x0 + s / 2 - 30, y0 - 30] },
    { text: 'OPEN FLOOR PLATE', at: [x0, y0 + s - 30] },
    { text: 'COLUMN', at: [x0 + s / 3 - 6, y0 + 2 * s / 3] },
  ], x0 - 60)
  return finish(meta('exposed-service-tower', 'Exposed Service Tower', 'Stairs, lifts and ducts pulled outside the main space', 'PLAN', 'STC-15',
    'Plan of a building where the open working floor is kept clear and the stairs, lifts and service ducts are placed in separate solid towers attached to its outside edges.', 22, 'metres (indicative)',
    'Served and servant spaces, an idea articulated by Louis Kahn (e.g. Richards Medical Research Laboratories, 1957–65). Generic original drawing by Project Exodus.'), L, B)
}

function piloti(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 170
  const w = 340
  const ground = 480
  const lift = 120
  L.profile.push(el(path(rect(x0, ground - lift - 150, w, 150), true)))
  for (const yb of [ground - lift - 30, ground - lift - 100]) {
    L.profile.push(el(path(rect(x0, yb - 30, w, 30), true)))
    for (let x = x0 + 40; x < x0 + w; x += 40) L.fine.push(line([x, yb - 30], [x, yb]))
  }
  for (const x of [x0 + 40, x0 + 140, x0 + 240, x0 + 340]) {
    hatched(L, rect(x - 6, ground - lift, 12, lift), 'h-concrete')
  }
  // ground flows beneath: path, garden, car
  L.fine.push(el(`M${x0 - 40} ${ground - 8}C${x0 + 100} ${ground - 20} ${x0 + 260} ${ground} ${x0 + w + 40} ${ground - 12}`, 'stroke-dasharray="4 4"'))
  arrow(L, [x0 + 60, ground - 40], [x0 + 300, ground - 40])
  L.notes.push(text(x0 + 180, ground - 50, 'GROUND LEFT FREE', 'text-anchor="middle" class="t-small t-accent"'))
  L.profile.push(line([x0 - 40, ground], [x0 + w + 40, ground]))
  B.add([x0 - 40, ground - lift - 150], [x0 + w + 40, ground])
  L.dims.push(vDim(x0 + w + 20, ground, ground - lift, 'CLEAR'))
  callouts(L, [
    { text: 'RAISED VOLUME', at: [x0, ground - lift - 120] },
    { text: 'RIBBON WINDOW', at: [x0, ground - lift - 45] },
    { text: 'PILOTI', at: [x0 + 34, ground - 60] },
  ], x0 - 40)
  return finish(meta('piloti', 'Piloti', 'Slender columns lifting a building off the ground', 'ELEVATION', 'STC-16',
    'Elevation of a building raised a full storey above the ground on thin concrete columns, leaving the ground beneath open for paths, gardens and movement.', 40, 'metres (indicative)',
    'One of Le Corbusier’s Five Points of a New Architecture (1926/27). Generic original drawing by Project Exodus.'), L, B)
}

function stiltHouse(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 200
  const w = 240
  const ground = 480
  const flood = 410
  const floor = 330
  // stilts into the ground, raised floor, timber walls, steep thatched roof
  for (const x of [x0 + 10, x0 + 90, x0 + 170, x0 + 250]) hatched(L, rect(x - 6, floor, 12, ground - floor + 30), 'h-timber')
  hatched(L, rect(x0, floor - 12, w + 20, 12), 'h-timber')
  L.profile.push(el(path(rect(x0 + 10, floor - 110, w, 98), true)))
  for (let x = x0 + 20; x < x0 + w; x += 12) L.shading.push(line([x, floor - 108], [x, floor - 14]))
  L.profile.push(el(path([[x0 - 20, floor - 100], [x0 + w / 2 + 10, floor - 220], [x0 + w + 40, floor - 100]], true)))
  const defs = courses(L, 'st-roof', [[x0 - 20, floor - 100], [x0 + w / 2 + 10, floor - 220], [x0 + w + 40, floor - 100]], -0.4, 7)
  // ladder
  L.profile.push(line([x0 - 30, ground], [x0, floor]), line([x0 - 18, ground], [x0 + 12, floor]))
  for (let k = 1; k < 7; k++) L.fine.push(line([x0 - 30 + k * 4.3, ground - k * 21], [x0 - 18 + k * 4.3, ground - k * 21]))
  // flood level
  L.center.push(line([x0 - 80, flood], [x0 + w + 80, flood]))
  for (let x = x0 - 70; x < x0 + w + 70; x += 30) L.center.push(el(`M${x} ${flood + 8}q7 -6 14 0`))
  L.notes.push(text(x0 + w + 40, flood + 22, 'FLOOD LEVEL', 'text-anchor="end" class="t-small t-accent"'))
  L.profile.push(line([x0 - 80, ground], [x0 + w + 80, ground]))
  B.add([x0 - 80, floor - 220], [x0 + w + 80, ground + 30])
  L.dims.push(vDim(x0 + w + 60, ground, floor, 'RAISED'))
  callouts(L, [
    { text: 'ROOF', at: [x0 + 40, floor - 130] },
    { text: 'LIVING FLOOR', at: [x0, floor - 6] },
    { text: 'STILTS', at: [x0 + 84, ground - 30] },
    { text: 'LADDER', at: [x0 - 24, ground - 60] },
  ], x0 - 80)
  return finish(meta('stilt-house', 'Stilt House', 'Dwelling raised on posts above flood and damp', 'ELEVATION', 'STC-17',
    'Elevation of a timber house standing on tall posts, its floor lifted clear of floodwater and damp ground, reached by a ladder and covered by a steep thatched roof.', 40, 'metres (indicative)'), L, B, defs)
}

function trullo(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const ground = 500
  const wallTop = 360
  const r = 110
  const t = 50
  // thick circular dry-stone wall (section both sides)
  hatched(L, rect(cx - r - t, wallTop, t, ground - wallTop), 'h-stone')
  hatched(L, rect(cx + r, wallTop, t, ground - wallTop), 'h-stone')
  // corbelled cone: each course steps inward a little (false dome)
  const courses_ = 14
  for (let k = 0; k < courses_; k++) {
    const h = 16
    const y = wallTop - (k + 1) * h
    const inner = r * (1 - (k + 1) / (courses_ + 1))
    const outer = (r + t) * (1 - (k + 0.4) / (courses_ + 2))
    for (const s of [-1, 1]) hatched(L, rect(s < 0 ? cx - outer : cx + inner, y, outer - inner, h), 'h-stone')
  }
  const apex = wallTop - (courses_ + 1) * 16
  L.profile.push(el(path(rect(cx - 10, apex - 10, 20, 20), true)), circle([cx, apex - 22], 12))
  L.notes.push(text(cx + 20, apex - 20, 'PINNACLE', 'class="t-small"'))
  L.center.push(line([cx, apex - 40], [cx, ground + 10]))
  L.profile.push(line([cx - 220, ground], [cx + 220, ground]))
  B.add([cx - r - t - 40, apex - 40], [cx + r + t + 40, ground])
  L.dims.push(hDim(ground + 22, cx - r, cx + r, 'INTERIOR Ø'))
  callouts(L, [
    { text: 'PINNACLE', at: [cx - 10, apex - 6] },
    { text: 'CORBELLED COURSES', at: [cx - r * 0.6 - 30, wallTop - 100] },
    { text: 'DRY-STONE WALL', at: [cx - r - t, wallTop + 70] },
  ], cx - r - t - 40)
  return finish(meta('trullo', 'Trullo', 'Dry-stone hut roofed with a corbelled cone', 'SECTION', 'STC-18',
    'Section through a round stone hut whose roof is a cone of flat stones, each ring laid slightly inside the one below without mortar until they meet at a capstone.', 40, 'metres (indicative)',
    'Form of the trulli of Alberobello, Apulia (UNESCO World Heritage). Generic original drawing by Project Exodus; not a survey.'), L, B)
}

function windcatcher(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const tx = 310
  const tw = 60
  const ground = 500
  const roof = 330
  const topY = 110
  hatched(L, rect(tx - 10, topY, 10, ground - topY))
  hatched(L, rect(tx + tw, topY, 10, roof - topY))
  hatched(L, rect(tx + tw, roof, 150, 14), 'h-earth')
  hatched(L, rect(tx + tw + 150, roof, 12, ground - roof))
  L.profile.push(el(path(rect(tx - 14, topY - 20, tw + 28, 20), true)))
  L.fine.push(line([tx + tw / 2, topY], [tx + tw / 2, roof], 'stroke-dasharray="3 3"'))
  // openings at the top on the windward side; cool air down, warm air out
  L.profile.push(el(`M${tx - 10} ${topY + 10}h-6v60h6`))
  arrow(L, [tx - 80, topY + 40], [tx + 10, topY + 40])
  L.cut.push(el(`M${tx + 15} ${topY + 50}V${roof + 40}Q${tx + 15} ${ground - 70} ${tx + tw + 80} ${ground - 70}`, ACCENT))
  arrow(L, [tx + tw + 60, ground - 70], [tx + tw + 120, ground - 70])
  L.cut.push(el(`M${tx + tw + 150} ${ground - 120}Q${tx + 45} ${roof + 30} ${tx + 45} ${topY + 40}`, `${ACCENT} stroke-dasharray="6 4"`))
  arrow(L, [tx + 45, topY + 70], [tx + 45, topY + 20])
  L.notes.push(text(tx - 80, topY + 32, 'WIND', 'class="t-small t-accent"'), text(tx + tw + 80, ground - 80, 'COOL AIR', 'class="t-small t-accent"'), text(tx + 52, topY + 90, 'WARM AIR OUT', 'class="t-small t-accent"'))
  // pool to cool the incoming air
  L.profile.push(el(`M${tx + 20} ${ground}q30 -14 60 0`))
  L.notes.push(text(tx + 50, ground + 14, 'POOL', 'text-anchor="middle" class="t-small"'))
  L.profile.push(line([tx - 120, ground], [tx + tw + 180, ground]))
  B.add([tx - 120, topY - 20], [tx + tw + 180, ground + 16])
  callouts(L, [
    { text: 'TOWER CAP', at: [tx - 14, topY - 10] },
    { text: 'WINDWARD OPENING', at: [tx - 16, topY + 40] },
    { text: 'SHAFT DIVIDER', at: [tx + tw / 2, topY + 160] },
    { text: 'ROOM', at: [tx + tw + 100, roof + 60] },
  ], tx - 120)
  return finish(meta('windcatcher', 'Windcatcher', 'Tower that draws breezes down into a building', 'SECTION', 'STC-19',
    'Section through a tall tower on a roof: wind entering openings at the top is driven down a shaft, cooled over water, and flows through the room while warm air rises out the other side.', 40, 'metres (indicative)',
    'Badgir form of the Iranian plateau (e.g. Yazd). Generic original drawing by Project Exodus; not a survey.'), L, B)
}

function steppedPlatform(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const ground = 470
  const steps: Array<[number, number]> = [[400, 30], [340, 30], [280, 30]]
  let y = ground
  steps.forEach(([w, h]) => {
    hatched(L, rect(cx - w / 2, y - h, w, h), 'h-stone', 'profile')
    y -= h
  })
  // building on top (indicative)
  L.fine.push(el(path(rect(cx - 110, y - 160, 220, 160), true)), el(`M${cx - 20} ${y}v-70a20 20 0 0 1 40 0v70`))
  for (const x of [cx - 90, cx + 60]) L.fine.push(el(path(rect(x, y - 120, 30, 40), true)))
  L.profile.push(line([cx - 240, ground], [cx + 240, ground]))
  B.add([cx - 240, y - 160], [cx + 240, ground])
  L.dims.push(vDim(cx + 220, ground, ground - 90, '3 STEPS'))
  callouts(L, [
    { text: 'BUILDING ON PODIUM', at: [cx - 110, y - 80] },
    { text: 'UPPER STEP', at: [cx - 140, y + 15] },
    { text: 'MIDDLE STEP', at: [cx - 170, y + 45] },
    { text: 'LOWER STEP', at: [cx - 200, ground - 15] },
  ], cx - 240)
  return finish(meta('triple-stepped-platform', 'Triple-Stepped Platform', 'Three-tiered stone podium raising a building', 'ELEVATION', 'STC-21',
    'Elevation of a building set on a stone base of three broad steps, lifting it above the surrounding ground for drainage and ceremony.', 30, 'step heights (indicative)',
    'Stepped podium in the Aksumite and Ethiopian church tradition. Generic original drawing by Project Exodus; not a survey.'), L, B)
}

function chainHoops(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const base = 470
  const R = 150
  // Double-shell pointed dome ("quinto acuto"): each side is an arc struck
  // from a centre on the opposite side of the axis, radius 4/5 of the span.
  const off = 0.6 * R // centre offset from the axis
  const side = (rr: number, sgn: number): Pt[] => {
    const sweep = Math.acos(off / rr) // from the springing up to the apex
    return sgn < 0
      ? ring([cx + off, base], rr, Math.PI, Math.PI + sweep, 40)
      : ring([cx - off, base], rr, 2 * Math.PI, 2 * Math.PI - sweep, 40)
  }
  const shells: Array<[number, number]> = [[1.6, 1.68], [1.78, 1.86]] // inner and outer shell, as multiples of R
  for (const sgn of [-1, 1]) for (const [a, b] of shells) hatched(L, [...side(R * a, sgn), ...[...side(R * b, sgn)].reverse()], 'h-brick')
  // chain rings: where each hoop cuts the section (both shells' cavity), joined across
  for (const k of [0.12, 0.35, 0.58, 0.8]) {
    const pl = side(R * 1.73, -1)[Math.round(k * 40)]
    const pr = side(R * 1.73, 1)[Math.round(k * 40)]
    L.cut.push(circle(pl, 5, `${ACCENT} stroke-width="2.2"`), circle(pr, 5, `${ACCENT} stroke-width="2.2"`))
    L.center.push(line(pl, pr, 'stroke-dasharray="3 5"'))
  }
  arrow(L, [cx - 50, base - 150], [cx - 130, base - 150])
  arrow(L, [cx + 50, base - 150], [cx + 130, base - 150])
  L.notes.push(text(cx, base - 160, 'OUTWARD SPREAD', 'text-anchor="middle" class="t-small t-accent"'))
  L.notes.push(text(cx, base - 120, 'RESISTED BY HOOPS IN TENSION', 'text-anchor="middle" class="t-small t-accent"'))
  hatched(L, rect(cx - 1.3 * R, base, 2.6 * R, 20), 'h-stone')
  B.add([cx - 1.3 * R, base - 1.86 * R], [cx + 1.3 * R, base + 20])
  callouts(L, [
    { text: 'OUTER SHELL', at: side(R * 1.86, -1)[28] },
    { text: 'INNER SHELL', at: side(R * 1.6, -1)[18] },
    { text: 'STONE-AND-CHAIN HOOP', at: side(R * 1.73, -1)[Math.round(0.35 * 40)] },
    { text: 'DRUM', at: [cx - 1.3 * R, base + 10] },
  ], cx - 1.3 * R - 10)
  return finish(meta('stone-and-chain-hoops', 'Stone-and-Chain Hoops', 'Rings in a dome resisting its outward spread', 'SECTION', 'STC-22',
    'Section through a tall double-shelled pointed dome, with horizontal rings of linked stone beams and iron cramps built into it at several levels, holding it together against the tendency to spread outward.', 40, 'metres (indicative)',
    'Principle as used in Brunelleschi’s dome of Santa Maria del Fiore, Florence (1420–36). Simplified; not a survey. Original drawing by Project Exodus.'), L, B)
}

export const STRUCTURE_SHEETS: Array<() => SheetSpec> = [
  () => bracedFrame('x-bracing'), () => bracedFrame('chevron-bracing'), () => bracedFrame('diagonal-bracing'),
  prattTruss, deadLoad, spreadFooting, tensionCable, diagrid, massTimber, exposedStructure,
  gerberette, massiveCantilever, setbackTower, servedServant, piloti, stiltHouse, trullo, windcatcher,
  steppedPlatform, chainHoops,
]
