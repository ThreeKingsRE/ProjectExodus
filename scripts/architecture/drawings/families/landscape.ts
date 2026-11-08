/**
 * Gardens and urban elements.
 *
 * Layouts (allée, canal, nymphaeum, plaza, courtyard sequences) in PLAN;
 * level changes and build-ups (ha-ha, terraces, cascades, grottoes, roof
 * gardens, market halls, excavation trenches) in SECTION; pavilions, gates,
 * bridges and monuments in ELEVATION.
 */
import { type Pt, type SheetSpec, f, path, el, vDim, hDim, text } from '../sheet'
import { newLayers, finish, hatched, masked, circle, line, rect, ring, callouts, arrow, courses, Bounds, ORIGINAL, type Layers } from '../kit'

const ACCENT = 'style="stroke: var(--_accent)"'
const meta = (id: string, title: string, subtitle: string, view: string, sheetNo: string, description: string, unitPx: number, unitName: string, source = ORIGINAL) =>
  ({ id, title, subtitle, view, sheetNo, description, source, scale: { unitPx, unitName, count: 4 } })

/** Tree in plan: crown circle with a scalloped edge and trunk dot. */
function treePlan(L: Layers, c: Pt, r: number) {
  const pts: Pt[] = []
  for (let i = 0; i <= 24; i++) {
    const a = (i / 24) * 2 * Math.PI
    const rr = r * (i % 2 ? 0.86 : 1)
    pts.push([c[0] + rr * Math.cos(a), c[1] + rr * Math.sin(a)])
  }
  L.profile.push(el(path(pts, true)))
  L.fine.push(circle(c, 2, 'class="solid"'))
}

/** Tree in elevation: trunk and cloud-like crown. */
function treeElev(L: Layers, x: number, ground: number, h: number) {
  L.fine.push(line([x, ground], [x, ground - h * 0.45]))
  const c: Pt = [x, ground - h * 0.68]
  const r = h * 0.28
  let d = ''
  for (let i = 0; i < 9; i++) {
    const a0 = (i / 9) * 2 * Math.PI
    const a1 = ((i + 1) / 9) * 2 * Math.PI
    const p0: Pt = [c[0] + r * Math.cos(a0), c[1] + r * Math.sin(a0)]
    const p1: Pt = [c[0] + r * Math.cos(a1), c[1] + r * Math.sin(a1)]
    const pm: Pt = [c[0] + r * 1.35 * Math.cos((a0 + a1) / 2), c[1] + r * 1.35 * Math.sin((a0 + a1) / 2)]
    d += `${i ? '' : `M${f(p0[0])} ${f(p0[1])}`}Q${f(pm[0])} ${f(pm[1])} ${f(p1[0])} ${f(p1[1])}`
  }
  L.fine.push(el(d + 'Z'))
}

function water(L: Layers, poly: Pt[], id: string): string {
  const defs = courses(L, id, poly, 0, 7, 'shading')
  L.profile.push(el(path(poly, true)))
  return defs
}

// ---------------------------------------------------------------------------
// Gardens
// ---------------------------------------------------------------------------
function allee(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 370
  const top = 70
  const bot = 560
  const half = 60
  L.fine.push(el(path(rect(cx - 40, top, 80, bot - top), true)))
  for (let y = top + 20; y < bot; y += 44) {
    treePlan(L, [cx - half - 20, y], 22)
    treePlan(L, [cx + half + 20, y], 22)
  }
  L.center.push(line([cx, top - 10], [cx, bot + 10]))
  arrow(L, [cx, bot - 40], [cx, top + 30])
  L.notes.push(text(cx + 8, top + 50, 'VISTA', 'class="t-small t-accent"'))
  B.add([cx - half - 50, top - 10], [cx + half + 50, bot + 10])
  L.dims.push(hDim(bot + 30, cx - half - 20, cx + half + 20, 'ROW SPACING'))
  callouts(L, [
    { text: 'TREE CROWN', at: [cx - half - 42, top + 196] },
    { text: 'GRAVEL WALK', at: [cx - 40, top + 300] },
    { text: 'AXIS', at: [cx, top + 400] },
  ], cx - half - 60)
  return finish(meta('allee', 'Allée', 'Walk lined by regularly spaced trees', 'PLAN', 'GDN-01',
    'Plan of a straight garden walk flanked on both sides by evenly spaced trees whose crowns frame a long view along its axis.', 44, 'tree spacings'), L, B)
}

function canal(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 370
  const top = 80
  const bot = 540
  const w = 70
  const poly: Pt[] = [[cx - w / 2, top + 60], [cx - w / 2, bot - 60], [cx - 70, bot - 60], [cx - 70, bot], [cx + 70, bot], [cx + 70, bot - 60], [cx + w / 2, bot - 60], [cx + w / 2, top + 60], ...ring([cx, top + 60], 60, 0, -Math.PI, 30).map(([x, y]) => [x, y] as Pt)]
  const defs = water(L, poly, 'cn-water')
  L.fine.push(el(path(poly.map(([x, y]) => [x + (x < cx ? -8 : 8), y + (y > cx ? 8 : 0)] as Pt), true)))
  for (const s of [-1, 1]) for (let y = top + 120; y < bot - 60; y += 60) treePlan(L, [cx + s * 110, y], 18)
  L.center.push(line([cx, top - 10], [cx, bot + 20]))
  B.add([cx - 140, top - 10], [cx + 140, bot + 20])
  L.dims.push(hDim(top + 200, cx - w / 2, cx + w / 2, 'W'))
  callouts(L, [
    { text: 'BASIN', at: [cx - 60, top + 60] },
    { text: 'STONE COPING', at: [cx - w / 2 - 8, top + 300] },
    { text: 'WATER', at: [cx - w / 2 + 10, top + 250] },
    { text: 'CROSS BASIN', at: [cx - 70, bot - 30] },
  ], cx - 150)
  return finish(meta('canal', 'Canal', 'Long formal sheet of water on an axis', 'PLAN', 'GDN-02',
    'Plan of a long, straight, stone-edged channel of still water running down a garden axis between rows of trees, widening into basins at its ends.', 35, 'metres (indicative)'), L, B, defs)
}

function terrace(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 140
  const ground = 500
  const wallW = 24
  const rise = 90
  const walls = [250, 370, 490] // left face of each retaining wall
  const levelAt = (i: number) => ground - rise * i // level 0 = lower garden
  // one continuous stepped ground profile, earth behind it
  const prof: Pt[] = [[x0, ground]]
  walls.forEach((wx, i) => prof.push([wx, levelAt(i)], [wx, levelAt(i + 1)]))
  prof.push([576, levelAt(3)])
  L.hatch.push(`<path d="${path([...prof, [576, ground + 20], [x0, ground + 20]], true)}" fill="url(#h-earth)" stroke="none"/>`)
  walls.forEach((wx, i) => {
    hatched(L, rect(wx, levelAt(i + 1), wallW, rise + 20), 'h-stone')
    // balustrade on the wall head
    const top = levelAt(i + 1)
    L.profile.push(line([wx, top - 26], [wx + wallW, top - 26]))
    for (let b = wx + 3; b < wx + wallW; b += 6) L.fine.push(line([b, top - 26], [b, top]))
    // flight of steps beyond, rising against the wall face
    const pts: Pt[] = [[wx - 60, levelAt(i)]]
    for (let k = 0; k < 6; k++) pts.push([wx - 60 + k * 10, levelAt(i) - (k + 1) * 15], [wx - 50 + k * 10, levelAt(i) - (k + 1) * 15])
    L.fine.push(el(path(pts), 'stroke-dasharray="3 2"'))
  })
  L.cut.push(el(path(prof)))
  treeElev(L, x0 + 40, ground, 80)
  B.add([x0, levelAt(3) - 30], [576, ground + 20])
  L.dims.push(hDim(ground + 40, walls[0] + wallW, walls[1], 'TERRACE'))
  callouts(L, [
    { text: 'UPPER TERRACE', at: [540, levelAt(3)] },
    { text: 'BALUSTRADE', at: [walls[2] + 6, levelAt(3) - 26] },
    { text: 'RETAINING WALL', at: [walls[0] + 6, levelAt(1) + 50] },
    { text: 'STEPS (BEYOND)', at: [walls[1] - 30, levelAt(1) - 45] },
    { text: 'LOWER GARDEN', at: [x0 + 70, ground] },
  ], x0 - 20)
  return finish(meta('terrace', 'Terrace', 'Level platforms cut into a slope', 'SECTION', 'GDN-03',
    'Section through a hillside garden shaped into a series of level platforms held up by stone retaining walls, each edged with a balustrade and linked by flights of steps.', 30, 'metres (indicative)'), L, B)
}

function haHa(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const y = 330
  const wallX = 300
  // lawn level on the house side, vertical retaining wall, ditch, slope up to pasture
  const ground: Pt[] = [[150, y], [wallX, y], [wallX, y + 90], [wallX + 40, y + 90], [wallX + 170, y], [570, y]]
  L.hatch.push(`<path d="${path([...ground, [570, 520], [150, 520]], true)}" fill="url(#h-earth)" stroke="none"/>`)
  L.cut.push(el(path(ground)))
  hatched(L, rect(wallX - 26, y, 26, 100), 'h-stone')
  // view line passes over the ditch unobstructed
  L.profile.push(circle([180, y - 54], 5), line([180, y - 49], [180, y]))
  L.center.push(line([180, y - 54], [565, y - 30]))
  L.notes.push(text(350, y - 50, 'UNBROKEN VIEW', 'class="t-small t-accent"'))
  // grazing animal kept out
  L.fine.push(el(`M${wallX + 196} ${y - 22}h40l6 -10h10v10h-6v22M${wallX + 202} ${y - 22}v22M${wallX + 232} ${y - 22}v22`))
  B.add([150, y - 60], [570, 520])
  L.dims.push(vDim(wallX - 70, y, y + 90, 'DROP'))
  callouts(L, [
    { text: 'LAWN (HOUSE SIDE)', at: [160, y] },
    { text: 'RETAINING WALL', at: [wallX - 26, y + 50] },
    { text: 'DITCH', at: [wallX + 20, y + 90] },
  ], 150)
  L.notes.push(text(wallX + 170, y + 40, 'PASTURE', 'class="t-sub"'))
  return finish(meta('ha-ha', 'Ha-Ha', 'Sunken wall keeping livestock out without blocking the view', 'SECTION', 'GDN-04',
    'Section through the edge of a lawn where a hidden ditch with a vertical wall on the garden side keeps grazing animals out while leaving the view across the landscape unbroken.', 30, 'metres (indicative)'), L, B)
}

function cascade(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 170
  const top = 160
  const steps = 6
  const g = 50
  const r = 40
  const pts: Pt[] = [[x0 - 40, top]]
  for (let k = 0; k < steps; k++) pts.push([x0 + k * g, top + k * r], [x0 + k * g, top + (k + 1) * r])
  pts.push([x0 + steps * g + 80, top + steps * r])
  L.hatch.push(`<path d="${path([...pts, [x0 + steps * g + 80, top + steps * r + 60], [x0 - 40, top + steps * r + 60]], true)}" fill="url(#h-stone)" stroke="none"/>`)
  L.cut.push(el(path(pts)))
  // water: thin sheet over each step edge
  const w: string[] = []
  for (let k = 0; k < steps; k++) {
    const x = x0 + k * g
    const y = top + k * r
    w.push(`M${x - g + 6} ${y - 4}H${x}Q${x + 10} ${y + r * 0.4} ${x + 6} ${y + r - 4}`)
  }
  L.cut.push(`<path d="${w.join('')}" ${ACCENT} stroke-width="1.4"/>`)
  L.notes.push(text(x0 + steps * g + 30, top + steps * r - 8, 'POOL', 'class="t-small"'))
  arrow(L, [x0 + 20, top - 30], [x0 + 140, top + 60])
  B.add([x0 - 40, top - 40], [x0 + steps * g + 80, top + steps * r + 60])
  L.dims.push(vDim(x0 + steps * g + 100, top + steps * r, top + (steps - 1) * r, 'STEP'))
  callouts(L, [
    { text: 'WATER FALLING OVER LIPS', at: [x0 + 6, top + 20] },
    { text: 'STONE STEP', at: [x0 + 2 * g - 20, top + 2.5 * r] },
    { text: 'BASIN AT FOOT', at: [x0 + steps * g + 10, top + steps * r] },
  ], x0 - 40)
  return finish(meta('cascade', 'Cascade', 'Water stepping down a flight of stone ledges', 'SECTION', 'GDN-05',
    'Section through a garden water staircase: a series of stone steps over which water spills in thin sheets from ledge to ledge into a pool at the bottom.', 40, 'metres (indicative)'), L, B)
}

function fountain(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const ground = 500
  // lower basin, pedestal, two tiered bowls, finial jet
  L.profile.push(el(path([[cx - 200, ground], [cx - 200, ground - 40], [cx + 200, ground - 40], [cx + 200, ground]], true)))
  L.fine.push(line([cx - 190, ground - 30], [cx + 190, ground - 30]))
  const bowl = (y: number, r: number) => L.profile.push(el(`M${cx - r} ${y}Q${cx - r * 0.6} ${y + r * 0.45} ${cx} ${y + r * 0.45}Q${cx + r * 0.6} ${y + r * 0.45} ${cx + r} ${y}Z`))
  L.profile.push(el(path(rect(cx - 16, ground - 200, 32, 160), true)))
  bowl(ground - 200, 130)
  L.profile.push(el(path(rect(cx - 10, ground - 320, 20, 120), true)))
  bowl(ground - 320, 70)
  // water: jet and falling sheets
  const wtr = `M${cx} ${ground - 330}Q${cx} ${ground - 400} ${cx - 20} ${ground - 380}M${cx} ${ground - 330}Q${cx} ${ground - 400} ${cx + 20} ${ground - 380}M${cx - 70} ${ground - 320}Q${cx - 85} ${ground - 260} ${cx - 90} ${ground - 205}M${cx + 70} ${ground - 320}Q${cx + 85} ${ground - 260} ${cx + 90} ${ground - 205}M${cx - 130} ${ground - 200}Q${cx - 150} ${ground - 120} ${cx - 160} ${ground - 40}M${cx + 130} ${ground - 200}Q${cx + 150} ${ground - 120} ${cx + 160} ${ground - 40}`
  L.cut.push(`<path d="${wtr}" ${ACCENT} stroke-dasharray="4 3"/>`)
  L.profile.push(line([cx - 230, ground], [cx + 230, ground]))
  B.add([cx - 230, ground - 400], [cx + 230, ground])
  L.dims.push(hDim(ground + 22, cx - 200, cx + 200, 'BASIN'))
  callouts(L, [
    { text: 'JET', at: [cx - 4, ground - 370] },
    { text: 'UPPER BOWL', at: [cx - 70, ground - 318] },
    { text: 'LOWER BOWL', at: [cx - 130, ground - 198] },
    { text: 'PEDESTAL', at: [cx - 16, ground - 120] },
    { text: 'BASIN', at: [cx - 200, ground - 20] },
  ], cx - 230)
  return finish(meta('fountain', 'Fountain', 'Tiered basins with water spilling from bowl to bowl', 'ELEVATION', 'GDN-06',
    'Elevation of a garden fountain: a jet rising from a small upper bowl, water overflowing into a wider bowl below and then into a broad basin at ground level.', 50, 'metres (indicative)'), L, B)
}

function pergolaOrArbor(kind: 'pergola' | 'arbor'): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const ground = 480
  if (kind === 'pergola') {
    const posts = [190, 280, 370, 460, 550]
    for (const x of posts) L.profile.push(el(path(rect(x - 8, 260, 16, ground - 260), true)))
    L.profile.push(el(path(rect(170, 248, 400, 14), true)))
    for (let x = 175; x < 570; x += 24) L.profile.push(el(path(rect(x, 236, 8, 12), true)))
    // climbing plants
    for (const x of [190, 370, 550]) L.fine.push(el(`M${x} ${ground}c-14 -40 14 -80 0 -120s14 -60 -6 -100`), el(`M${x - 30} 262q30 30 60 0`))
    L.profile.push(line([150, ground], [580, ground]))
    B.add([150, 236], [580, ground])
    L.dims.push(hDim(ground + 22, 190, 280, 'BAY'))
    callouts(L, [
      { text: 'CROSS RAFTERS', at: [180, 242] },
      { text: 'BEAM', at: [170, 255] },
      { text: 'POST', at: [182, 380] },
      { text: 'CLIMBER', at: [190, 430] },
    ], 150)
    return finish(meta('pergola', 'Pergola', 'Open framework of posts and rafters for climbers', 'ELEVATION', 'GDN-07',
      'Elevation of a garden walkway covered by an open framework: a row of posts carrying beams and closely spaced cross rafters, with climbing plants growing up and over it.', 45, 'metres (indicative)'), L, B)
  }
  // arbor: arched trellis with a bench
  const w = 160
  for (const s of [-1, 1]) L.profile.push(el(path(rect(cx + s * w / 2 - 6, 250, 12, ground - 250), true)))
  L.profile.push(el(path(ring([cx, 250], w / 2 + 6, Math.PI, 2 * Math.PI, 30))), el(path(ring([cx, 250], w / 2 - 6, Math.PI, 2 * Math.PI, 30))))
  const lat: string[] = []
  for (let k = -6; k < 10; k++) lat.push(`M${cx - w / 2 + k * 18} 250l40 40M${cx - w / 2 + k * 18 + 40} 250l-40 40`)
  for (const s of [-1, 1]) L.fine.push(`<g clip-path="url(#arb-${s < 0 ? 'l' : 'r'})"><path d="${lat.join('')}"/></g>`)
  L.profile.push(el(path(rect(cx - 60, ground - 50, 120, 10), true)), line([cx - 50, ground - 40], [cx - 50, ground]), line([cx + 50, ground - 40], [cx + 50, ground]))
  L.fine.push(el(`M${cx - w / 2} 250q20 -40 60 -60M${cx + w / 2} 250q-20 -40 -60 -60`))
  L.profile.push(line([cx - 200, ground], [cx + 200, ground]))
  B.add([cx - 200, 160], [cx + 200, ground])
  L.dims.push(hDim(ground + 22, cx - w / 2, cx + w / 2, 'OPENING'))
  callouts(L, [
    { text: 'ARCHED TOP', at: [cx - w / 2, 230] },
    { text: 'TRELLIS POST', at: [cx - w / 2 - 6, 360] },
    { text: 'BENCH', at: [cx - 60, ground - 45] },
  ], cx - 200)
  const defs = [-1, 1].map((s) => `<clipPath id="arb-${s < 0 ? 'l' : 'r'}"><rect x="${cx + s * w / 2 - 6}" y="250" width="12" height="${ground - 250}"/></clipPath>`).join('')
  return finish(meta('arbor', 'Arbor', 'Arched trellis shelter with a seat', 'ELEVATION', 'GDN-08',
    'Elevation of a small garden shelter made of an arched lattice frame over a bench, meant to be covered with climbing plants.', 40, 'metres (indicative)'), L, B, defs)
}

function pavilion(kind: 'gazebo' | 'belvedere' | 'folly'): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const ground = 500
  if (kind === 'folly') {
    // sham ruined tower: broken top, arrow slits, ivy
    const w = 120
    const top = 160
    const broken: Pt[] = [[cx - w / 2, ground], [cx - w / 2, top + 40], [cx - 30, top + 20], [cx - 10, top + 50], [cx + 10, top], [cx + 30, top + 30], [cx + w / 2, top + 10], [cx + w / 2, ground]]
    const defs = courses(L, 'fl-wall', broken, 0, 14)
    L.profile.push(el(path(broken, true)))
    L.fine.push(el(path(rect(cx - 6, top + 100, 12, 40), true)), el(path(rect(cx - 20, ground - 90, 40, 90), true)))
    L.fine.push(el(`M${cx - w / 2} ${ground - 40}c20 -40 -10 -80 20 -130c10 -20 30 -10 20 10`))
    for (let k = 0; k < 4; k++) L.fine.push(el(path(rect(cx + 70 + k * 18, ground - 10 - (k % 2) * 8, 16, 10 + (k % 2) * 8), true)))
    L.profile.push(line([cx - 200, ground], [cx + 200, ground]))
    B.add([cx - 200, top], [cx + 200, ground])
    callouts(L, [
      { text: 'DELIBERATELY BROKEN TOP', at: [cx - 30, top + 20] },
      { text: 'ARROW SLIT (SHAM)', at: [cx - 6, top + 120] },
      { text: 'IVY', at: [cx - w / 2 + 10, ground - 120] },
      { text: '"FALLEN" STONES', at: [cx + 70, ground - 6] },
    ], cx - 200)
    return finish(meta('folly', 'Folly', 'Ornamental building built to look like a ruin', 'ELEVATION', 'GDN-09',
      'Elevation of a garden ornament built as a ruined tower: a deliberately jagged top, decorative arrow slits, creeping ivy and scattered stones, serving no practical purpose.', 40, 'metres (indicative)'), L, B, defs)
  }
  const raised = kind === 'belvedere' ? 120 : 30
  const floorY = ground - raised
  const w = 200
  let pdefs = ''
  if (kind === 'belvedere') {
    const base = rect(cx - w / 2 - 20, floorY, w + 40, raised)
    pdefs = courses(L, 'bv-base', base, 0, 14)
    L.profile.push(el(path(base, true)))
    for (let k = 0; k < 8; k++) L.fine.push(line([cx + w / 2 + 20 + k * 12, ground - k * 15], [cx + w / 2 + 32 + k * 12, ground - k * 15]))
    L.center.push(line([cx, floorY - 80], [cx + 200, floorY - 130]), line([cx, floorY - 80], [cx - 200, floorY - 140]))
    L.notes.push(text(cx + 120, floorY - 132, 'VIEWS', 'class="t-small t-accent"'))
  } else {
    L.profile.push(el(path(rect(cx - w / 2 - 10, floorY, w + 20, raised), true)))
    for (let k = 0; k < 2; k++) L.fine.push(line([cx - 30, ground - k * 15], [cx + 30, ground - k * 15]))
  }
  const posts = kind === 'gazebo' ? [-w / 2, -w / 6, w / 6, w / 2] : [-w / 2, 0, w / 2]
  const capY = floorY - 160
  for (const px of posts) L.profile.push(el(path(rect(cx + px - 6, capY, 12, floorY - capY), true)))
  // balustrade/rail between posts
  L.profile.push(line([cx - w / 2, floorY - 40], [cx + w / 2, floorY - 40]))
  for (let x = cx - w / 2 + 8; x < cx + w / 2; x += 10) L.fine.push(line([x, floorY - 40], [x, floorY]))
  L.profile.push(el(path(rect(cx - w / 2 - 14, capY - 14, w + 28, 14), true)))
  if (kind === 'gazebo') {
    L.profile.push(el(`M${cx - w / 2 - 20} ${capY - 14}Q${cx - 40} ${capY - 70} ${cx} ${capY - 120}Q${cx + 40} ${capY - 70} ${cx + w / 2 + 20} ${capY - 14}`), circle([cx, capY - 128], 6))
  } else {
    L.profile.push(el(path([[cx - w / 2 - 20, capY - 14], [cx, capY - 70], [cx + w / 2 + 20, capY - 14]], true)))
  }
  L.profile.push(line([cx - 240, ground], [cx + 240, ground]))
  B.add([cx - 240, capY - 140], [cx + 240, ground])
  L.dims.push(hDim(ground + 22, cx - w / 2, cx + w / 2, 'WIDTH'))
  const items = kind === 'gazebo'
    ? [{ text: 'OGEE ROOF', at: [cx - 40, capY - 70] as Pt }, { text: 'POST', at: [cx - w / 2 - 6, capY + 60] as Pt }, { text: 'RAILING', at: [cx - w / 2, floorY - 40] as Pt }, { text: 'PLINTH', at: [cx - w / 2 - 10, floorY + 15] as Pt }]
    : [{ text: 'ROOF', at: [cx - w / 2, capY - 20] as Pt }, { text: 'OPEN LOGGIA', at: [cx - w / 2 - 6, capY + 60] as Pt }, { text: 'RAILING', at: [cx - w / 2, floorY - 40] as Pt }, { text: 'RAISED BASE', at: [cx - w / 2 - 20, floorY + 60] as Pt }]
  callouts(L, items, cx - 240)
  return kind === 'gazebo'
    ? finish(meta('gazebo', 'Gazebo', 'Open-sided garden pavilion', 'ELEVATION', 'GDN-10',
        'Elevation of a small open-sided pavilion on a low plinth, its slender posts and railing carrying a curved roof topped by a finial.', 40, 'metres (indicative)'), L, B)
    : finish(meta('belvedere', 'Belvedere', 'Raised open pavilion built for the view', 'ELEVATION', 'GDN-11',
        'Elevation of an open pavilion set high on a solid base reached by steps, placed so that people can look out over the surrounding landscape.', 40, 'metres (indicative)'), L, B, pdefs)
}

function grotto(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const ground = 470
  // rough cave outline (rockwork) in section, pool, shell-encrusted walls
  const cave: Pt[] = []
  for (let i = 0; i <= 40; i++) {
    const a = Math.PI + (i / 40) * Math.PI
    const r = 170 + 14 * Math.sin(i * 1.7) + 8 * Math.cos(i * 3.1)
    cave.push([cx + r * Math.cos(a), ground + r * 0.8 * Math.sin(a)])
  }
  const mound: Pt[] = cave.map(([x, y]) => [cx + (x - cx) * 1.28, ground + (y - ground) * 1.3] as Pt)
  L.hatch.push(`<path d="${path([...mound, ...[...cave].reverse()], true)}" fill="url(#h-earth)" stroke="none"/>`)
  L.cut.push(el(path(cave)), el(path(mound)))
  L.profile.push(el(`M${cx - 120} ${ground}q120 30 240 0`))
  const shells: string[] = []
  for (let k = 3; k < 38; k += 3) {
    const [x, y] = cave[k]
    shells.push(`M${f(x)} ${f(y + 8)}q5 -8 10 0`)
  }
  L.fine.push(el(shells.join('')))
  // dripping water and a reclining figure niche
  L.cut.push(`<path d="M${cx - 30} ${ground - 120}v40M${cx + 20} ${ground - 130}v50" ${ACCENT} stroke-dasharray="3 4"/>`)
  L.fine.push(el(`M${cx + 60} ${ground - 40}q20 -30 50 -20q10 10 0 20z`))
  L.profile.push(line([cx - 260, ground], [cx + 260, ground]))
  B.add([cx - 260, ground - 230], [cx + 260, ground + 20])
  callouts(L, [
    { text: 'EARTH MOUND', at: mound[8] },
    { text: 'ROCKWORK', at: cave[10] },
    { text: 'SHELL DECORATION', at: cave[6] },
    { text: 'POOL', at: [cx - 60, ground + 12] },
  ], cx - 260)
  return finish(meta('grotto', 'Grotto', 'Artificial cave of rockwork and shells', 'SECTION', 'GDN-12',
    'Section through a man-made cave set into a mound in a garden: rough rock walls studded with shells, dripping water and a pool, with a sculpture resting inside.', 40, 'metres (indicative)'), L, B)
}

function nymphaeum(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [370, 200]
  const R = 170
  const t = 30
  // semicircular exedra wall (cut) with niches, basin in front
  hatched(L, [...ring(c, R + t, 0, Math.PI, 40), ...ring(c, R, Math.PI, 0, 40)])
  for (let k = 1; k < 6; k++) {
    const a = (k * Math.PI) / 6
    const p: Pt = [c[0] + R * Math.cos(a), c[1] + R * Math.sin(a)]
    masked(L, ring(p, 14, a - Math.PI / 2, a + Math.PI / 2, 12), 'cut')
    L.profile.push(el(path(ring(p, 14, a - Math.PI / 2, a + Math.PI / 2, 12))))
    L.fine.push(circle([c[0] + (R - 8) * Math.cos(a), c[1] + (R - 8) * Math.sin(a)], 5))
  }
  const basin: Pt[] = [...ring(c, R - 40, 0, Math.PI, 30)]
  const defs = water(L, [...basin, [c[0] - R + 40, c[1]], [c[0] + R - 40, c[1]]], 'ny-water')
  L.center.push(line([c[0], c[1] - 20], [c[0], c[1] + R + t + 40]))
  B.add([c[0] - R - t, c[1] - 20], [c[0] + R + t, c[1] + R + t])
  L.dims.push(hDim(c[1] - 14, c[0] - R, c[0] + R, 'EXEDRA'))
  callouts(L, [
    { text: 'EXEDRA WALL (CUT)', at: [c[0] - (R + t / 2) * 0.87, c[1] + (R + t / 2) * 0.5] },
    { text: 'NICHE WITH STATUE', at: [c[0] + R * Math.cos((5 * Math.PI) / 6), c[1] + R * Math.sin((5 * Math.PI) / 6)] },
    { text: 'BASIN', at: [c[0] - 60, c[1] + 60] },
  ], c[0] - R - t - 10)
  return finish(meta('nymphaeum', 'Nymphaeum', 'Monumental fountain-shrine with niches', 'PLAN', 'GDN-13',
    'Plan of a curved fountain monument: a semicircular wall lined with niches holding statues and water spouts, embracing a basin in front.', R / 5, 'fifths of radius'), L, B, defs)
}

function gardenWall(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 160
  const x1 = 570
  const ground = 470
  const top = 230
  const wall: Pt[] = [[x0, ground], [x0, top], [x1, top], [x1, ground]]
  const defs = courses(L, 'gw', wall, 0, 12)
  L.profile.push(el(path(wall, true)))
  L.profile.push(el(path(rect(x0 - 8, top - 16, x1 - x0 + 16, 16), true)))
  for (const x of [x0 + 130, x0 + 260]) L.profile.push(el(path(rect(x - 14, top, 28, ground - top), true)))
  // espalier fruit tree trained flat against the wall
  for (const ex of [x0 + 65, x0 + 195, x0 + 335]) {
    L.fine.push(line([ex, ground], [ex, top + 40], 'stroke-width="1.4"'))
    for (let y = ground - 50; y > top + 40; y -= 45) L.fine.push(line([ex - 50, y], [ex + 50, y], 'stroke-width="1.2"'))
  }
  L.profile.push(line([x0 - 20, ground], [x1 + 10, ground]))
  B.add([x0 - 20, top - 16], [x1 + 10, ground])
  L.dims.push(vDim(x1 + 14, ground, top - 16, 'HT'))
  callouts(L, [
    { text: 'COPING', at: [x0 - 8, top - 8] },
    { text: 'PIER', at: [x0 + 116, top + 60] },
    { text: 'ESPALIER TREE', at: [x0 + 15, top + 110] },
    { text: 'BRICK WALL', at: [x0, ground - 30] },
  ], x0 - 20)
  return finish(meta('garden-wall', 'Garden Wall', 'Enclosing brick wall that warms fruit trained against it', 'ELEVATION', 'GDN-14',
    'Elevation of a tall brick wall around a garden, stiffened by piers and capped with a coping, with fruit trees trained flat against it in horizontal tiers.', 40, 'metres (indicative)'), L, B, defs)
}

function roofGarden(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 170
  const x1 = 540
  let y = 420
  const layers: Array<[string, number, string]> = [
    ['STRUCTURAL SLAB', 30, 'h-concrete'],
    ['INSULATION', 26, 'insul'],
    ['WATERPROOF MEMBRANE', 4, ''],
    ['ROOT BARRIER', 4, ''],
    ['DRAINAGE LAYER', 18, 'drain'],
    ['FILTER FABRIC', 3, ''],
    ['GROWING MEDIUM', 56, 'h-earth'],
  ]
  const items: { text: string; at: Pt }[] = []
  for (const [name, h, pat] of layers) {
    y -= h
    if (pat) L.hatch.push(`<rect x="${x0}" y="${y}" width="${x1 - x0}" height="${h}" fill="url(#${pat})" stroke="none"/>`)
    L.cut.push(el(path(rect(x0, y, x1 - x0, h), true), h < 6 ? 'stroke-width="2.2"' : ''))
    items.push({ text: name, at: [x0, y + h / 2] })
  }
  // planting
  for (let x = x0 + 20; x < x1; x += 34) L.fine.push(el(`M${x} ${y}c-6 -20 -2 -40 -10 -50M${x} ${y}c4 -18 10 -30 18 -36M${x} ${y}v-28`))
  treeElev(L, x1 - 60, y, 130)
  // parapet edge
  hatched(L, rect(x1, y - 30, 20, 420 - y + 30))
  arrow(L, [x0 + 100, y + 30], [x0 + 100, 400])
  L.notes.push(text(x0 + 106, 380, 'WATER DRAINS DOWN AND ACROSS', 'class="t-small t-accent"'))
  B.add([x0, y - 130], [x1 + 20, 420])
  callouts(L, [...items].reverse(), x0)
  return finish(meta('roof-garden', 'Roof Garden', 'Planted roof over a waterproofed slab', 'SECTION', 'GDN-15',
    'Section through a planted roof showing its layers from the concrete slab up: insulation, waterproofing, a root barrier, a drainage layer, filter fabric and the soil the plants grow in.', 30, '100 mm (indicative)'), L, B,
    '<pattern id="insul" width="12" height="12" patternUnits="userSpaceOnUse"><path d="M0 6q3 -6 6 0t6 0" class="ink l-hair"/></pattern><pattern id="drain" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M0 14V4h4v6h6V0" class="ink l-hair"/></pattern>')
}

// ---------------------------------------------------------------------------
// Urban
// ---------------------------------------------------------------------------
function arcadeRow(kind: 'arcade' | 'colonnade'): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 160
  const n = 5
  const bay = 82
  const ground = 470
  const spring = 340
  if (kind === 'arcade') {
    for (let i = 0; i <= n; i++) L.profile.push(el(path(rect(x0 + i * bay - 9, spring, 18, ground - spring), true)))
    for (let i = 0; i < n; i++) {
      const c: Pt = [x0 + i * bay + bay / 2, spring]
      L.profile.push(el(path(ring(c, bay / 2 - 9, Math.PI, 2 * Math.PI, 20))), el(path(ring(c, bay / 2 + 4, Math.PI, 2 * Math.PI, 20))))
    }
    L.profile.push(el(path(rect(x0 - 20, 230, n * bay + 40, 40), true)))
    L.fine.push(el(path(rect(x0 - 20, 270, n * bay + 40, 30), true)))
  } else {
    for (let i = 0; i <= n; i++) {
      const x = x0 + i * bay
      L.profile.push(el(path(rect(x - 9, 280, 18, ground - 296), true)), el(path(rect(x - 13, ground - 16, 26, 16), true)), el(path(rect(x - 14, 268, 28, 12), true)))
    }
    L.profile.push(el(path(rect(x0 - 24, 230, n * bay + 48, 38), true)))
    L.fine.push(line([x0 - 24, 245], [x0 + n * bay + 24, 245]))
  }
  L.profile.push(line([x0 - 40, ground], [x0 + n * bay + 40, ground]))
  B.add([x0 - 40, 230], [x0 + n * bay + 40, ground])
  L.dims.push(hDim(ground + 22, x0, x0 + bay, 'BAY'))
  callouts(L, kind === 'arcade'
    ? [{ text: 'WALL ABOVE', at: [x0 - 20, 250] }, { text: 'ARCH', at: [x0 + bay / 2 - 30, spring - 30] }, { text: 'PIER', at: [x0 - 9, 420] }]
    : [{ text: 'ENTABLATURE', at: [x0 - 24, 249] }, { text: 'CAPITAL', at: [x0 - 14, 274] }, { text: 'COLUMN', at: [x0 - 9, 380] }, { text: 'BASE', at: [x0 - 13, ground - 8] }], x0 - 40)
  return kind === 'arcade'
    ? finish(meta('arcade', 'Arcade', 'Row of arches carried on piers', 'ELEVATION', 'URB-01',
        'Elevation of a covered walkway fronted by a continuous series of round arches springing from square piers, carrying a wall above.', bay / 4, 'quarters of bay'), L, B)
    : finish(meta('colonnade', 'Colonnade', 'Row of columns carrying a straight entablature', 'ELEVATION', 'URB-02',
        'Elevation of a long row of evenly spaced columns, each with a base and capital, carrying a continuous horizontal beam.', bay / 4, 'quarters of bay'), L, B)
}

function aqueduct(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 150
  const ground = 500
  const tiers: Array<[number, number, number]> = [[6, 70, 120], [6, 70, 80], [12, 35, 50]] // [arches, span, height]
  let y = ground
  tiers.forEach(([n, span, h]) => {
    const yTop = y - h
    const w = n * span
    const wall: Pt[] = [[x0, y], [x0, yTop], [x0 + w, yTop], [x0 + w, y]]
    const openings: string[] = []
    for (let i = 0; i < n; i++) {
      const cx = x0 + i * span + span / 2
      const r = span / 2 - 7
      openings.push(path([[cx - r, y], [cx - r, yTop + r + 10], ...ring([cx, yTop + r + 10], r, Math.PI, 2 * Math.PI, 14), [cx + r, y]]))
    }
    L.profile.push(el(path(wall, true)), el(openings.join(' ')))
    y = yTop
  })
  // water channel (specus) on top, with gradient
  hatched(L, rect(x0, y - 18, 420, 18), 'h-stone')
  L.cut.push(`<path d="M${x0 + 4} ${y - 8}L${x0 + 416} ${y - 5}" ${ACCENT} stroke-width="2"/>`)
  arrow(L, [x0 + 300, y - 30], [x0 + 400, y - 28])
  L.notes.push(text(x0 + 300, y - 36, 'GENTLE FALL', 'class="t-small t-accent"'))
  L.profile.push(el(`M${x0 - 20} ${ground}q200 40 460 0`))
  B.add([x0 - 20, y - 40], [x0 + 440, ground + 20])
  L.dims.push(vDim(x0 + 436, ground, y, 'HEIGHT'))
  callouts(L, [
    { text: 'WATER CHANNEL (SPECUS)', at: [x0, y - 9] },
    { text: 'UPPER TIER', at: [x0, ground - 220] },
    { text: 'MIDDLE TIER', at: [x0, ground - 160] },
    { text: 'LOWER TIER', at: [x0, ground - 60] },
  ], x0 - 20)
  return finish(meta('aqueduct', 'Aqueduct', 'Arched bridge carrying a water channel', 'ELEVATION', 'URB-03',
    'Elevation of a three-tiered arched stone bridge carrying an enclosed water channel along its top at a very slight downhill slope across a valley.', 35, 'metres (indicative)'), L, B)
}

function bridge(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 160
  const water = 450
  const deck = 300
  const spans = [120, 160, 120]
  let x = x0
  const outline: Pt[] = [[x0 - 30, deck], [x0 + 400 + 30, deck]]
  L.profile.push(el(path(outline)))
  L.profile.push(line([x0 - 30, deck - 30], [x0 + 430, deck - 30]))
  for (let k = x0 - 26; k < x0 + 430; k += 12) L.fine.push(line([k, deck - 30], [k, deck]))
  spans.forEach((s, i) => {
    const c: Pt = [x + s / 2, water - 10]
    const r = s / 2
    L.profile.push(el(path(ring(c, r, Math.PI, 2 * Math.PI, 30))), el(path(ring(c, r + 14, Math.PI, 2 * Math.PI, 30))))
    if (i < spans.length - 1) {
      const px = x + s
      L.profile.push(el(path([[px - 10, water + 20], [px - 10, water - 10], [px + 10, water - 10], [px + 10, water + 20]])))
      L.profile.push(el(path([[px - 10, water], [px, water + 26], [px + 10, water]])))
    }
    x += s
  })
  for (const ax of [x0 - 30, x0 + 430]) L.profile.push(line([ax, deck], [ax, water + 20]))
  L.cut.push(`<path d="M${x0 - 40} ${water}${Array.from({ length: 30 }, () => 'q8 -6 16 0').join('')}" ${ACCENT}/>`)
  B.add([x0 - 40, deck - 30], [x0 + 440, water + 30])
  L.dims.push(hDim(deck - 50, x0 + 120, x0 + 280, 'MAIN SPAN'))
  callouts(L, [
    { text: 'PARAPET', at: [x0 - 26, deck - 15] },
    { text: 'ROADWAY', at: [x0, deck] },
    { text: 'ARCH RING', at: [x0 + 30, water - 50] },
    { text: 'PIER WITH CUTWATER', at: [x0 + 110, water + 10] },
    { text: 'WATER LEVEL', at: [x0 - 40, water] },
  ], x0 - 40)
  return finish(meta('bridge', 'Bridge', 'Masonry arches spanning a river', 'ELEVATION', 'URB-04',
    'Elevation of a three-arch stone bridge carrying a road over a river, its piers fitted with pointed cutwaters to part the current, edged by a parapet.', 40, 'metres (indicative)'), L, B)
}

function gate(kind: 'city-gate' | 'triumphal-arch' | 'imperial-gate-bab-i-humayun'): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const ground = 500
  if (kind === 'city-gate') {
    for (const s of [-1, 1]) {
      const tw = rect(cx + s * 120 - 50, 180, 100, ground - 180)
      L.profile.push(el(path(tw, true)))
      for (let k = 0; k < 4; k++) L.profile.push(el(path(rect(cx + s * 120 - 50 + k * 28, 164, 18, 16), true)))
      L.fine.push(el(path(rect(cx + s * 120 - 4, 260, 8, 30), true)))
    }
    L.profile.push(el(path([[cx - 70, ground], [cx - 70, 250], [cx + 70, 250], [cx + 70, ground]])))
    for (let k = 0; k < 4; k++) L.profile.push(el(path(rect(cx - 64 + k * 34, 236, 20, 14), true)))
    L.profile.push(el(path([[cx - 45, ground], [cx - 45, 360], ...ring([cx, 360], 45, Math.PI, 2 * Math.PI, 20), [cx + 45, ground]])))
    L.fine.push(el(path(rect(cx - 40, 380, 80, ground - 380), true)))
    const defs = courses(L, 'cg', [[cx - 170, 180], [cx + 170, 180], [cx + 170, ground], [cx - 170, ground]], 0, 16)
    masked(L, [[cx - 45, ground], [cx - 45, 360], ...ring([cx, 360], 45, Math.PI, 2 * Math.PI, 20), [cx + 45, ground]], 'shading')
    L.profile.push(line([cx - 220, ground], [cx + 220, ground]))
    B.add([cx - 220, 164], [cx + 220, ground])
    L.dims.push(hDim(ground + 22, cx - 45, cx + 45, 'GATEWAY'))
    callouts(L, [
      { text: 'TOWER', at: [cx - 170, 300] },
      { text: 'CRENELLATIONS', at: [cx - 170, 172] },
      { text: 'GATEHOUSE', at: [cx - 70, 280] },
      { text: 'ARCHED GATEWAY', at: [cx - 45, 400] },
    ], cx - 220)
    return finish(meta('city-gate', 'City Gate', 'Fortified entrance through a town wall', 'ELEVATION', 'URB-05',
      'Elevation of a fortified entrance to a walled town: an arched gateway in a battlemented gatehouse flanked by two tall towers with arrow slits.', 40, 'metres (indicative)'), L, B, defs)
  }
  if (kind === 'triumphal-arch') {
    const w = 300
    const top = 170
    L.profile.push(el(path(rect(cx - w / 2, top + 60, w, ground - top - 60), true)))
    L.profile.push(el(path(rect(cx - w / 2 - 10, top, w + 20, 60), true)))
    L.notes.push(text(cx, top + 36, 'IMP · CAESARI · DIVI · F', 'text-anchor="middle" class="t-small"'))
    L.profile.push(el(path([[cx - 45, ground], [cx - 45, 330], ...ring([cx, 330], 45, Math.PI, 2 * Math.PI, 20), [cx + 45, ground]])))
    for (const s of [-1, 1]) {
      L.profile.push(el(path([[cx + s * 105 - 22, ground], [cx + s * 105 - 22, 400], ...ring([cx + s * 105, 400], 22, Math.PI, 2 * Math.PI, 12), [cx + s * 105 + 22, ground]])))
      L.fine.push(el(path(rect(cx + s * 105 - 26, 300, 52, 60), true)))
    }
    for (const x of [cx - w / 2 + 14, cx - 64, cx + 64, cx + w / 2 - 14]) {
      L.profile.push(el(path(rect(x - 8, top + 96, 16, ground - top - 96), true)), el(path(rect(x - 12, top + 84, 24, 12), true)))
    }
    L.profile.push(el(path(rect(cx - w / 2, top + 60, w, 24), true)))
    L.profile.push(line([cx - 220, ground], [cx + 220, ground]))
    B.add([cx - 220, top], [cx + 220, ground])
    L.dims.push(hDim(ground + 22, cx - 45, cx + 45, 'CENTRAL ARCH'))
    callouts(L, [
      { text: 'ATTIC WITH INSCRIPTION', at: [cx - w / 2 - 10, top + 30] },
      { text: 'ENTABLATURE', at: [cx - w / 2, top + 72] },
      { text: 'RELIEF PANEL', at: [cx - 105 - 26, 330] },
      { text: 'ENGAGED COLUMN', at: [cx - w / 2 + 6, 400] },
      { text: 'SIDE ARCH', at: [cx - 127, 440] },
    ], cx - 220)
    return finish(meta('triumphal-arch', 'Triumphal Arch', 'Monumental gateway celebrating a victory', 'ELEVATION', 'URB-06',
      'Elevation of a free-standing monumental gateway with a tall central arch and two lower side arches, framed by columns and crowned by a high attic carrying an inscription.', 40, 'metres (indicative)',
      'Three-bay Roman type (cf. the Arch of Constantine, Rome, 315 CE). Generic original drawing by Project Exodus; inscription illustrative, not a survey.'), L, B)
  }
  // Bab-ı Hümayun: tall marble gate with pointed arch, flanking niches, inscription band
  const w = 260
  const top = 140
  L.profile.push(el(path(rect(cx - w / 2, top, w, ground - top), true)))
  const defs = courses(L, 'bh', rect(cx - w / 2, top, w, ground - top), 0, 18)
  const arch: Pt[] = [[cx - 55, ground], [cx - 55, 310], ...ring([cx + 55, 310], 110, Math.PI, Math.PI + Math.PI / 3, 16), ...ring([cx - 55, 310], 110, -Math.PI / 3, 0, 16), [cx + 55, ground]]
  masked(L, arch, 'shading')
  L.profile.push(el(path(arch)))
  L.profile.push(el(path(rect(cx - 90, 180, 180, 30), true)))
  L.notes.push(text(cx, 200, 'INSCRIPTION BAND', 'text-anchor="middle" class="t-small"'))
  for (const s of [-1, 1]) {
    const nx = cx + s * 95
    L.profile.push(el(path([[nx - 18, 450], [nx - 18, 340], ...ring([nx + 18, 340], 36, Math.PI, Math.PI + Math.PI / 3, 8), ...ring([nx - 18, 340], 36, -Math.PI / 3, 0, 8), [nx + 18, 450]], true)))
  }
  L.profile.push(el(path(rect(cx - w / 2 - 10, top - 14, w + 20, 14), true)))
  L.profile.push(line([cx - 220, ground], [cx + 220, ground]))
  B.add([cx - 220, top - 14], [cx + 220, ground])
  L.dims.push(hDim(ground + 22, cx - 55, cx + 55, 'GATEWAY'))
  callouts(L, [
    { text: 'CORNICE', at: [cx - w / 2 - 10, top - 7] },
    { text: 'INSCRIPTION BAND', at: [cx - 90, 195] },
    { text: 'POINTED ARCH', at: [cx - 50, 260] },
    { text: 'NICHE', at: [cx - 113, 400] },
    { text: 'MARBLE FACADE', at: [cx - w / 2, 460] },
  ], cx - 220)
  return finish(meta('imperial-gate-bab-i-humayun', 'Imperial Gate (Bab-ı Hümayun)', 'Monumental Ottoman palace gateway', 'ELEVATION', 'URB-07',
    'Elevation of a tall marble palace gateway with a deep pointed arch, a band of calligraphic inscription above it, and a pointed niche on each side.', 40, 'metres (indicative)',
    'After the Bab-ı Hümayun, outer gate of Topkapı Palace, Istanbul (1478). Simplified; not a survey. Original drawing by Project Exodus.'), L, B, defs)
}

function clockTower(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const ground = 520
  const w = 90
  const top = 170
  const shaft = rect(cx - w / 2, top, w, ground - top)
  const defs = courses(L, 'ct', shaft, 0, 14)
  L.profile.push(el(path(shaft, true)))
  masked(L, ring([cx, top + 60], 34, 0, 2 * Math.PI, 40), 'shading')
  L.profile.push(circle([cx, top + 60], 34), circle([cx, top + 60], 30))
  for (let k = 0; k < 12; k++) {
    const a = (k * Math.PI) / 6
    L.fine.push(line([cx + 25 * Math.cos(a), top + 60 + 25 * Math.sin(a)], [cx + 30 * Math.cos(a), top + 60 + 30 * Math.sin(a)]))
  }
  L.profile.push(line([cx, top + 60], [cx + 14, top + 46], 'stroke-width="2"'), line([cx, top + 60], [cx, top + 36], 'stroke-width="1.4"'))
  // belfry with louvred openings, spire
  L.profile.push(el(path(rect(cx - w / 2 - 6, top - 70, w + 12, 70), true)))
  for (const ox of [-30, 6]) {
    L.profile.push(el(`M${cx + ox} ${top - 10}v-36a12 12 0 0 1 24 0v36`))
    for (let y = top - 42; y < top - 12; y += 6) L.fine.push(line([cx + ox + 2, y], [cx + ox + 22, y + 3]))
  }
  L.profile.push(el(path([[cx - w / 2 - 10, top - 70], [cx, top - 200], [cx + w / 2 + 10, top - 70]], true)))
  L.profile.push(el(path(rect(cx - 16, ground - 70, 32, 70), true)))
  L.profile.push(line([cx - 200, ground], [cx + 200, ground]))
  B.add([cx - 200, top - 200], [cx + 200, ground])
  L.dims.push(hDim(ground + 22, cx - w / 2, cx + w / 2, 'SHAFT'))
  callouts(L, [
    { text: 'SPIRE', at: [cx - 30, top - 140] },
    { text: 'BELFRY', at: [cx - w / 2 - 6, top - 40] },
    { text: 'CLOCK FACE', at: [cx - 34, top + 60] },
    { text: 'SHAFT', at: [cx - w / 2, top + 200] },
    { text: 'DOOR', at: [cx - 16, ground - 35] },
  ], cx - 200)
  return finish(meta('clock-tower', 'Clock Tower', 'Tower carrying a public clock and bells', 'ELEVATION', 'URB-08',
    'Elevation of a tall masonry tower with a large clock face near its top, a belfry with louvred openings above, and a pointed spire.', 40, 'metres (indicative)'), L, B, defs)
}

function obelisk(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const ground = 520
  const H = 400
  const b0 = 44
  const b1 = 30
  const top = ground - 60 - H
  L.profile.push(el(path([[cx - b0, ground - 60], [cx - b1, top + 26], [cx, top], [cx + b1, top + 26], [cx + b0, ground - 60]], true)))
  L.fine.push(line([cx - b1, top + 26], [cx + b1, top + 26]))
  // hieroglyph columns (schematic)
  for (const dx of [-12, 0, 12]) for (let y = top + 50; y < ground - 80; y += 14) L.shading.push(el(path(rect(cx + dx - 3, y, 6, 8), true)))
  L.profile.push(el(path(rect(cx - 70, ground - 60, 140, 40), true)), el(path(rect(cx - 90, ground - 20, 180, 20), true)))
  L.profile.push(line([cx - 200, ground], [cx + 200, ground]))
  B.add([cx - 200, top], [cx + 200, ground])
  L.dims.push(vDim(cx + 120, ground - 60, top, 'SHAFT ≈ 10 × BASE'), hDim(ground + 22, cx - b0, cx + b0, 'BASE'))
  callouts(L, [
    { text: 'PYRAMIDION', at: [cx - b1 / 2, top + 14] },
    { text: 'MONOLITHIC SHAFT', at: [cx - b0 * 0.9, ground - 200] },
    { text: 'INSCRIPTIONS', at: [cx - 15, top + 120] },
    { text: 'PEDESTAL', at: [cx - 70, ground - 40] },
  ], cx - 200)
  return finish(meta('obelisk', 'Obelisk', 'Tall tapering stone shaft with a pyramidal tip', 'ELEVATION', 'URB-09',
    'Elevation of a single tall stone shaft, square in section and gently tapering, carved with inscriptions and ending in a small pyramid, set on a pedestal.', 40, 'metres (indicative)',
    'Ancient Egyptian type; proportions typical (height about ten times the base width). Generic original drawing by Project Exodus.'), L, B)
}

function plaza(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 170
  const y0 = 80
  const W = 380
  const D = 380
  // surrounding building blocks (cut), streets entering at corners and mid-sides
  const blocks: Array<[number, number, number, number]> = [
    [x0 - 30, y0 - 30, 160, 30], [x0 + 160, y0 - 30, W - 160 + 30, 30],
    [x0 - 30, y0 + D, W + 60, 30],
    [x0 - 30, y0, 30, 160], [x0 - 30, y0 + 220, 30, D - 220],
    [x0 + W, y0, 30, D],
  ]
  for (const [x, y, w, h] of blocks) hatched(L, rect(x, y, w, h))
  // arcade along one side (columns)
  for (let y = y0 + 20; y < y0 + D; y += 30) L.profile.push(circle([x0 + W - 18, y], 4))
  // paving pattern radiating from a central fountain
  const c: Pt = [x0 + W / 2, y0 + D / 2]
  const rays = Array.from({ length: 16 }, (_, k) => {
    const a = (k * Math.PI) / 8
    return line([c[0] + 40 * Math.cos(a), c[1] + 40 * Math.sin(a)], [c[0] + 400 * Math.cos(a), c[1] + 400 * Math.sin(a)])
  })
  L.shading.push(`<g clip-path="url(#plaza-open)">${rays.join('')}</g>`)
  L.shading.push(`<g>${[90, 140].map((r) => circle(c, r)).join('')}</g>`)
  masked(L, ring(c, 36, 0, 2 * Math.PI, 40), 'fine')
  L.profile.push(circle(c, 36), circle(c, 12))
  for (const [tx, ty] of [[x0 + 30, y0 + 30], [x0 + W - 60, y0 + 30], [x0 + 30, y0 + D - 30]] as Pt[]) treePlan(L, [tx, ty], 16)
  B.add([x0 - 30, y0 - 30], [x0 + W + 30, y0 + D + 30])
  L.dims.push(hDim(y0 + D + 50, x0, x0 + W, 'OPEN SQUARE'))
  callouts(L, [
    { text: 'BUILDING FRONTAGE (CUT)', at: [x0 - 30, y0 + 80] },
    { text: 'STREET ENTRY', at: [x0 - 30, y0 + 190] },
    { text: 'RADIATING PAVING', at: [c[0] - 100, c[1] - 40] },
    { text: 'FOUNTAIN', at: [c[0] - 36, c[1]] },
    { text: 'ARCADE', at: [x0 + W - 22, y0 + D - 40] },
  ], x0 - 30)
  return finish(meta('plaza', 'Plaza', 'Open public square framed by buildings', 'PLAN', 'URB-10',
    'Plan of a public square enclosed by building frontages with streets entering at its edges, an arcade along one side, and paving radiating from a central fountain.', W / 10, 'tenths of width'), L, B,
    `<clipPath id="plaza-open"><rect x="${x0}" y="${y0}" width="${W - 30}" height="${D}"/></clipPath>`)
}

function courtyards(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 180
  const y0 = 60
  const W = 330
  // three courtyards in sequence, each smaller and more private, linked by gates
  const courts: Array<[number, number, string]> = [[200, 0, 'OUTER COURT (PUBLIC)'], [150, 30, 'MIDDLE COURT'], [110, 60, 'INNER COURT (PRIVATE)']]
  let y = y0 + 480
  courts.forEach(([h, inset]) => {
    const x = x0 + inset
    const w = W - 2 * inset
    hatched(L, rect(x - 14, y - h, 14, h))
    hatched(L, rect(x + w, y - h, 14, h))
    hatched(L, rect(x - 14, y - h - 14, w / 2 - 16 + 14, 14))
    hatched(L, rect(x + w / 2 + 16, y - h - 14, w / 2 - 16 + 14, 14))
    L.profile.push(el(path(rect(x + w / 2 - 16, y - h - 14, 32, 14), true)))
    for (let k = x + 12; k < x + w - 6; k += 24) L.fine.push(circle([k, y - h + 12], 3))
    y -= h + 14
  })
  hatched(L, rect(x0 - 14, y0 + 480, W / 2 - 16 + 14, 14))
  hatched(L, rect(x0 + W / 2 + 16, y0 + 480, W / 2 - 16 + 14, 14))
  // processional axis
  L.center.push(line([x0 + W / 2, y0 + 520], [x0 + W / 2, y + 4]))
  arrow(L, [x0 + W / 2, y0 + 520], [x0 + W / 2, y0 + 470])
  L.notes.push(text(x0 + W / 2 + 6, y0 + 516, 'ENTRANCE', 'class="t-small t-accent"'))
  B.add([x0 - 14, y], [x0 + W + 14, y0 + 520])
  let ly = y0 + 480
  const items = courts.map(([h, inset, name]) => {
    const it = { text: name, at: [x0 + inset + 20, ly - h / 2] as Pt }
    ly -= h + 14
    return it
  })
  callouts(L, [{ text: 'GATE', at: [x0 + W / 2 - 16, y0 + 487] }, ...items], x0 - 14)
  return finish(meta('layered-courtyard-system', 'Layered Courtyard System', 'Sequence of courts growing more private inward', 'PLAN', 'URB-11',
    'Plan of a palace laid out as a chain of walled courtyards along one axis, each entered through a gate from the last and each smaller and more private than the one before.', 40, 'metres (indicative)'), L, B)
}

function marketHall(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const ground = 490
  const w = 360
  // iron columns, trussed arched roof with clerestory lantern, glazing
  for (const x of [cx - w / 2, cx - w / 6, cx + w / 6, cx + w / 2]) hatched(L, rect(x - 5, 260, 10, ground - 260), 'h-concrete')
  L.profile.push(el(path(ring([cx, 300], w / 2, Math.PI, 2 * Math.PI, 40))), el(path(ring([cx, 300], w / 2 - 18, Math.PI, 2 * Math.PI, 40))))
  for (let k = 1; k < 16; k++) {
    const a = Math.PI + (k * Math.PI) / 16
    const p0: Pt = [cx + (w / 2 - 18) * Math.cos(a), 300 + (w / 2 - 18) * Math.sin(a)]
    const p1: Pt = [cx + (w / 2) * Math.cos(a + (k % 2 ? 0.1 : -0.1)), 300 + (w / 2) * Math.sin(a + (k % 2 ? 0.1 : -0.1))]
    L.fine.push(line(p0, p1))
  }
  L.profile.push(el(path(rect(cx - 40, 300 - w / 2 - 40, 80, 40), true)))
  for (let x = cx - 34; x < cx + 34; x += 12) L.fine.push(line([x, 300 - w / 2 - 36], [x, 300 - w / 2 - 4]))
  arrow(L, [cx - 70, 300 - w / 2 - 60], [cx - 30, 300 - w / 2 - 20])
  L.notes.push(text(cx - 140, 300 - w / 2 - 66, 'LIGHT + AIR', 'class="t-small t-accent"'))
  // market stalls
  for (const sx of [cx - 140, cx - 40, cx + 60]) L.fine.push(el(path(rect(sx, ground - 40, 80, 40), true)), el(`M${sx - 6} ${ground - 40}l46 -16l46 16`))
  L.profile.push(line([cx - w / 2 - 30, ground], [cx + w / 2 + 30, ground]))
  B.add([cx - w / 2 - 30, 300 - w / 2 - 70], [cx + w / 2 + 30, ground])
  L.dims.push(hDim(ground + 22, cx - w / 2, cx + w / 2, 'CLEAR SPAN'))
  callouts(L, [
    { text: 'VENTILATING LANTERN', at: [cx - 40, 300 - w / 2 - 20] },
    { text: 'ARCHED IRON TRUSS', at: [cx - (w / 2 - 9) * 0.71, 300 - (w / 2 - 9) * 0.71] },
    { text: 'CAST-IRON COLUMN', at: [cx - w / 2 - 5, 380] },
    { text: 'MARKET STALLS', at: [cx - 140, ground - 20] },
  ], cx - w / 2 - 30)
  return finish(meta('market-hall', 'Market Hall', 'Wide iron-and-glass hall for trading', 'SECTION', 'URB-12',
    'Cross-section through a covered market of the iron age of building: slender cast-iron columns and arched trusses spanning a wide open floor of stalls, with a raised lantern along the ridge for light and air.', 40, 'metres (indicative)'), L, B)
}

function metroEntrance(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const ground = 440
  // stair going down below ground (cut), cast-iron balustrade, sign arch with lamps
  const st: Pt[] = [[cx - 120, ground]]
  for (let k = 0; k < 8; k++) st.push([cx - 120 + k * 26, ground + k * 16], [cx - 120 + k * 26, ground + (k + 1) * 16])
  st.push([cx + 140, ground + 8 * 16])
  hatched(L, [...st, [cx + 140, ground + 160], [cx - 120, ground + 160]], 'h-earth', 'cut')
  L.profile.push(line([cx - 220, ground], [cx - 120, ground]), line([cx + 100, ground], [cx + 220, ground]))
  // balustrade with organic curves
  L.profile.push(line([cx - 120, ground - 50], [cx + 100, ground - 50]))
  for (let x = cx - 110; x < cx + 100; x += 30) L.fine.push(el(`M${x} ${ground}c-10 -20 20 -30 0 -50M${x + 15} ${ground - 50}c10 20 -20 30 0 50`))
  // stems rising into the sign arch, with bud-like lamps
  for (const s of [-1, 1]) {
    const x = cx - 10 + s * 110
    L.profile.push(el(`M${x} ${ground}C${x} ${ground - 120} ${x - s * 10} ${ground - 200} ${x - s * 40} ${ground - 240}`, 'stroke-width="2.2"'))
    L.profile.push(el(`M${x - s * 40} ${ground - 240}q${-s * 10} -20 0 -34q${s * 10} 14 0 34`))
  }
  L.profile.push(el(`M${cx - 120} ${ground - 200}Q${cx - 10} ${ground - 250} ${cx + 100} ${ground - 200}`), el(`M${cx - 110} ${ground - 186}Q${cx - 10} ${ground - 232} ${cx + 90} ${ground - 186}`))
  L.notes.push(text(cx - 10, ground - 200, 'MÉTRO', 'text-anchor="middle" class="t-sub"'))
  B.add([cx - 220, ground - 280], [cx + 220, ground + 160])
  callouts(L, [
    { text: 'LAMP', at: [cx - 120 - 40 + 30, ground - 254] },
    { text: 'SIGN ARCH', at: [cx - 120, ground - 200] },
    { text: 'CAST-IRON STEM', at: [cx - 120, ground - 120] },
    { text: 'BALUSTRADE', at: [cx - 120, ground - 50] },
    { text: 'STAIR DOWN', at: [cx - 94, ground + 24] },
  ], cx - 220)
  return finish(meta('metro-entrance', 'Metro Entrance', 'Street entrance to an underground railway', 'ELEVATION', 'URB-13',
    'Elevation of an entrance to an underground station: a stair going down through the pavement, edged by a flowing cast-iron balustrade, with plant-like stems rising to a curved sign and lamps shaped like buds.', 40, 'metres (indicative)',
    'In the manner of Hector Guimard’s Art Nouveau Paris Métro entrances (c. 1900). Generic; not a copy of a specific entrance. Original drawing by Project Exodus.'), L, B)
}

function excavationTrench(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 170
  const x1 = 550
  const top = 160
  // stratigraphy: numbered contexts, cut features, finds; trench edges stepped for safety
  const strata: Array<[number, string, string]> = [[30, '1 TOPSOIL', 'h-earth'], [50, '2 MEDIEVAL FILL', 'h-concrete'], [40, '3 ROMAN FLOOR', 'h-brick'], [60, '4 PREHISTORIC LAYER', 'h-earth'], [60, '5 NATURAL SUBSOIL', '']]
  let y = top
  const items: { text: string; at: Pt }[] = []
  for (const [h, name, pat] of strata) {
    const wav = (yy: number) => `M${x0} ${yy}C${x0 + 100} ${yy - 6} ${x0 + 260} ${yy + 6} ${x1} ${yy}`
    if (pat) L.hatch.push(`<path d="${wav(y)}L${x1} ${y + h}L${x0} ${y + h}Z" fill="url(#${pat})" stroke="none" opacity="0.7"/>`)
    L.cut.push(el(wav(y)))
    items.push({ text: name, at: [x0, y + h / 2] })
    y += h
  }
  // a pit cut through layers 2-3
  L.cut.push(el(`M${x0 + 220} ${top + 30}q30 120 90 0`, 'stroke-dasharray="6 3"'))
  L.notes.push(text(x0 + 265, top + 100, '[6] PIT', 'text-anchor="middle" class="t-small"'))
  for (const [fx, fy] of [[x0 + 120, top + 100], [x0 + 330, top + 160], [x0 + 80, top + 200]] as Pt[]) L.profile.push(el(`M${fx - 4} ${fy}l4 -6l4 6z`))
  L.profile.push(el(path(rect(x0, top - 20, x1 - x0, y - top + 20), true)))
  // datum and scale pole
  L.center.push(line([x0 - 20, top - 30], [x1 + 10, top - 30]))
  L.notes.push(text(x1 + 4, top - 36, 'DATUM 24.50 m', 'text-anchor="end" class="t-small t-accent"'))
  for (let k = 0; k < 4; k++) L.profile.push(el(path(rect(x1 - 14, top + k * 30, 8, 30), true)), ...(k % 2 ? [] : [`<rect x="${x1 - 14}" y="${top + k * 30}" width="8" height="30" class="solid"/>`]))
  B.add([x0 - 20, top - 40], [x1 + 10, y])
  L.notes.push(text(x0 + 100, y + 20, '▲ FINDS', 'class="t-small"'))
  callouts(L, items, x0 - 20)
  return finish(meta('excavation-trench', 'Excavation Trench', 'Archaeological section through numbered layers', 'SECTION', 'URB-14',
    'Section drawing of the side of an archaeological trench: layers of soil numbered from the topsoil down to natural ground, a pit cut through some of them, finds marked, with a datum line and a measuring pole.', 30, '0.25 m (scale pole)',
    'Recording conventions of single-context archaeological section drawing (layer numbering, datum, scale). Illustrative, not a real site. Original drawing by Project Exodus.'), L, B)
}

export const LANDSCAPE_SHEETS: Array<() => SheetSpec> = [
  allee, canal, terrace, haHa, cascade, fountain, () => pergolaOrArbor('pergola'), () => pergolaOrArbor('arbor'),
  () => pavilion('folly'), () => pavilion('belvedere'), grotto, nymphaeum, gardenWall, roofGarden,
  () => arcadeRow('arcade'), () => arcadeRow('colonnade'), aqueduct, bridge,
  () => gate('city-gate'), () => gate('triumphal-arch'), () => gate('imperial-gate-bab-i-humayun'),
  clockTower, obelisk, plaza, courtyards, marketHall, metroEntrance, excavationTrench,
]
