/**
 * Rooms: fireplaces, wall finishes, built-ins, screens and modern spatial ideas.
 *
 * Wall finishes, built-ins and screens in ELEVATION; the fireplace and domed
 * chamber in SECTION (the flue and dome only make sense cut); the inglenook in
 * PLAN; and the spatial ideas that are really about three dimensions (the free
 * plan, the sculptural stair) in ISOMETRIC.
 */
import { type Pt, type SheetSpec, f, path, el, vDim, hDim, text } from '../sheet'
import { newLayers, finish, hatched, circle, line, rect, ring, callouts, arrow, Bounds, ORIGINAL, axo, face, box, addAxo, axoWall, AXO_DEFS, type Layers, type P3 } from '../kit'

const ACCENT = 'style="stroke: var(--_accent)"'
const meta = (id: string, title: string, subtitle: string, view: string, sheetNo: string, description: string, unitPx: number, unitName: string, source = ORIGINAL) =>
  ({ id, title, subtitle, view, sheetNo, description, source, scale: { unitPx, unitName, count: 4 } })

/** Simple standing figure for scale (about 1.75 m tall at `h`). */
function figure(L: Layers, x: number, floor: number, h = 70) {
  const head = h * 0.13
  L.fine.push(
    circle([x, floor - h + head], head),
    el(`M${f(x)} ${f(floor - h + head * 2)}L${f(x)} ${f(floor - h * 0.45)}M${f(x - h * 0.12)} ${f(floor)}L${f(x)} ${f(floor - h * 0.45)}L${f(x + h * 0.12)} ${f(floor)}M${f(x - h * 0.16)} ${f(floor - h * 0.55)}L${f(x)} ${f(floor - h * 0.75)}L${f(x + h * 0.16)} ${f(floor - h * 0.55)}`),
  )
}

/** Rectangle with an inset moulding line (panel). */
function panel(L: Layers, x: number, y: number, w: number, h: number, inset = 6, layer: 'profile' | 'fine' = 'fine') {
  L[layer].push(el(path(rect(x, y, w, h), true)), el(path(rect(x + inset, y + inset, w - inset * 2, h - inset * 2), true)))
}

// ---------------------------------------------------------------------------
// Wall finishes and built-ins (elevation)
// ---------------------------------------------------------------------------
function boiserie(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 200
  const x1 = 560
  const floor = 560
  const ceil = 150
  const rail = 440
  // cornice and skirting
  L.profile.push(el(path(rect(x0, ceil, x1 - x0, 22), true)), line([x0, ceil + 10], [x1, ceil + 10]))
  L.profile.push(el(path(rect(x0, floor - 16, x1 - x0, 16), true)))
  L.profile.push(el(path(rect(x0, rail - 6, x1 - x0, 10), true)))
  L.profile.push(line([x0, floor], [x1, floor]))
  const bays = 3
  const bw = (x1 - x0) / bays
  const stile = 16
  for (let i = 0; i < bays; i++) {
    const bx = x0 + i * bw + stile / 2
    const w = bw - stile
    // tall upper panel with a shaped (chapeau) head and a carved shell
    const top = ceil + 46
    const bot = rail - 22
    const head = (inset: number) => {
      const l = bx + inset
      const r = bx + w - inset
      const t = top + inset
      return `M${f(l)} ${f(bot - inset)}L${f(l)} ${f(t + 26)}Q${f(l)} ${f(t + 12)} ${f(l + 16)} ${f(t + 12)}Q${f((l + r) / 2)} ${f(t + 12)} ${f((l + r) / 2)} ${f(t - 4)}Q${f((l + r) / 2)} ${f(t + 12)} ${f(r - 16)} ${f(t + 12)}Q${f(r)} ${f(t + 12)} ${f(r)} ${f(t + 26)}L${f(r)} ${f(bot - inset)}Z`
    }
    L.profile.push(el(head(0)))
    L.fine.push(el(head(7)))
    // rocaille shell at the head
    const sc: Pt = [bx + w / 2, top + 30]
    L.fine.push(el(path(ring(sc, 12, Math.PI, 2 * Math.PI, 12))))
    for (let k = 0; k < 5; k++) {
      const a = Math.PI + ((k + 0.5) / 5) * Math.PI
      L.fine.push(line(sc, [sc[0] + 12 * Math.cos(a), sc[1] + 12 * Math.sin(a)]))
    }
    // garland drop
    L.fine.push(el(`M${f(sc[0] - 24)} ${f(top + 60)}q24 22 48 0`))
    // dado panel below the rail
    panel(L, bx, rail + 14, w, floor - 16 - rail - 26, 7)
  }
  B.add([x0, ceil], [x1, floor])
  L.dims.push(vDim(x1 - 20, rail + 4, floor, 'DADO'))
  callouts(L, [
    { text: 'CORNICE', at: [x0, ceil + 10] },
    { text: 'CARVED SHELL', at: [x0 + bw / 2 - 10, ceil + 74] },
    { text: 'SHAPED PANEL HEAD', at: [x0 + stile, ceil + 70] },
    { text: 'RAISED MOULDING', at: [x0 + stile + 7, 330] },
    { text: 'DADO RAIL', at: [x0, rail] },
    { text: 'DADO PANEL', at: [x0 + stile + 7, 500] },
    { text: 'SKIRTING', at: [x0, floor - 8] },
  ], x0)
  return finish(meta('boiserie', 'Boiserie', 'Carved and moulded wood panelling', 'ELEVATION', 'RM-01',
    'Elevation of a wall lined in carved timber panelling: tall panels with shaped heads and shell carvings above a dado rail, lower dado panels, a cornice at the ceiling and a skirting at the floor.', 30, 'metres (indicative)'), L, B)
}

function bookcase(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 210
  const x1 = 550
  const floor = 570
  const top = 150
  const base = 480
  // carcass, cornice, plinth
  L.profile.push(el(path(rect(x0 - 8, top, x1 - x0 + 16, 18), true)), el(path(rect(x0, top + 18, x1 - x0, floor - top - 18), true)))
  L.profile.push(el(path(rect(x0, floor - 14, x1 - x0, 14), true)))
  const bays = 3
  const bw = (x1 - x0) / bays
  for (let i = 1; i < bays; i++) L.profile.push(el(path(rect(x0 + i * bw - 5, top + 18, 10, floor - top - 32), true)))
  // base cupboards: two doors per bay
  L.profile.push(el(path(rect(x0, base - 8, x1 - x0, 8), true)))
  for (let i = 0; i < bays; i++) {
    const bx = x0 + i * bw + 8
    const w = (bw - 16) / 2
    for (let k = 0; k < 2; k++) {
      panel(L, bx + k * w + 1, base + 6, w - 2, floor - 14 - base - 12, 6)
      L.fine.push(circle([bx + k * w + (k ? 8 : w - 8), base + 40], 2))
    }
  }
  // shelves and books (deterministic pseudo-random widths and heights)
  let seed = 7
  const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280)
  const shelfYs = [top + 18, 238, 318, 398, base - 8]
  for (let s = 1; s < shelfYs.length; s++) {
    const y = shelfYs[s]
    const ceilY = shelfYs[s - 1] + (s === 1 ? 0 : 6)
    if (s < shelfYs.length - 1) for (let i = 0; i < bays; i++) L.profile.push(line([x0 + i * bw + (i ? 5 : 0), y], [x0 + (i + 1) * bw - (i < bays - 1 ? 5 : 0), y]), line([x0 + i * bw + (i ? 5 : 0), y + 6], [x0 + (i + 1) * bw - (i < bays - 1 ? 5 : 0), y + 6]))
    for (let i = 0; i < bays; i++) {
      let x = x0 + i * bw + (i ? 8 : 4)
      const end = x0 + (i + 1) * bw - (i < bays - 1 ? 8 : 4)
      const room = y - ceilY - 6
      let leaned = false
      while (x < end - 8) {
        const w = 5 + Math.floor(rnd() * 6)
        const h = room * (0.62 + rnd() * 0.32)
        if (!leaned && rnd() > 0.93 && x + h * 0.5 < end) {
          L.fine.push(el(path([[x, y], [x + w, y], [x + w + h * 0.45, y - h * 0.89], [x + h * 0.45, y - h * 0.89]], true)))
          x += w + h * 0.45 + 2
          leaned = true
          continue
        }
        if (x + w > end) break
        L.fine.push(el(path(rect(x, y - h, w, h), true)))
        if (w > 8) L.fine.push(line([x + 1.5, y - h + 6], [x + w - 1.5, y - h + 6]))
        x += w
        if (rnd() > 0.88) x += 10 // gap / bookend
      }
    }
  }
  B.add([x0 - 8, top], [x1 + 8, floor])
  L.dims.push(hDim(floor + 22, x0, x0 + bw, 'BAY'))
  callouts(L, [
    { text: 'CORNICE', at: [x0 - 8, top + 9] },
    { text: 'BOOKS', at: [x0 + 6, 210] },
    { text: 'SHELF', at: [x0, 318] },
    { text: 'UPRIGHT', at: [x0 + bw - 5, 360] },
    { text: 'WORKTOP', at: [x0, base - 4] },
    { text: 'CUPBOARD DOOR', at: [x0 + 14, 525] },
    { text: 'PLINTH', at: [x0, floor - 7] },
  ], x0 - 8)
  return finish(meta('built-in-bookcase', 'Built-in Bookcase', 'Shelving built into the wall', 'ELEVATION', 'RM-02',
    'Elevation of a fitted bookcase spanning a wall: three bays of shelving divided by uprights over a run of cupboards, finished with a cornice at the top and a plinth at the floor.', 30, 'metres (indicative)'), L, B)
}

function mantelpiece(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const floor = 560
  const openW = 160
  const openT = 420
  const jw = 40
  const xl = cx - openW / 2 - jw
  const xr = cx + openW / 2 + jw
  // firebox (brick back) inside the opening
  L.hatch.push(`<path d="${path(rect(cx - openW / 2, openT, openW, floor - openT), true)}" fill="url(#h-brick)" stroke="none"/>`)
  L.fine.push(el(path([[cx - openW / 2, floor], [cx - openW / 2 + 22, floor - 18], [cx + openW / 2 - 22, floor - 18], [cx + openW / 2, floor]])))
  L.fine.push(line([cx - openW / 2 + 22, floor - 18], [cx - openW / 2 + 22, openT]), line([cx + openW / 2 - 22, floor - 18], [cx + openW / 2 - 22, openT]))
  // jambs as pilasters with scroll consoles
  for (const x of [xl, cx + openW / 2]) {
    L.profile.push(el(path(rect(x, openT - 20, jw, floor - openT + 20), true)))
    panel(L, x + 6, openT + 34, jw - 12, floor - openT - 50, 4)
    // console scroll
    const sx = x + jw / 2
    L.fine.push(el(`M${f(sx - 10)} ${f(openT - 4)}C${f(sx - 10)} ${f(openT + 14)} ${f(sx + 10)} ${f(openT + 14)} ${f(sx + 10)} ${f(openT + 28)}`), circle([sx - 6, openT + 2], 4), circle([sx + 7, openT + 27], 3))
    L.profile.push(el(path(rect(x - 4, floor - 12, jw + 8, 12), true)))
  }
  // frieze with central tablet, shelf
  L.profile.push(el(path(rect(xl, openT - 50, xr - xl, 30), true)))
  panel(L, cx - 34, openT - 46, 68, 22, 3)
  L.fine.push(el(`M${f(cx - 22)} ${f(openT - 35)}q11 -8 22 0q11 8 22 0`))
  L.profile.push(el(path(rect(xl - 12, openT - 64, xr - xl + 24, 14), true)), line([xl - 6, openT - 50], [xr + 6, openT - 50]))
  // overmantel mirror
  const my0 = 190
  L.profile.push(el(path(rect(xl + 14, my0, xr - xl - 28, openT - 64 - my0 - 6), true)))
  L.fine.push(el(path(rect(xl + 24, my0 + 10, xr - xl - 48, openT - 64 - my0 - 26), true)))
  for (let k = 0; k < 3; k++) L.fine.push(line([xl + 60 + k * 14, my0 + 40 + k * 6], [xl + 90 + k * 14, my0 + 20 + k * 6]))
  L.fine.push(el(`M${f(cx - 26)} ${f(my0)}q26 -24 52 0`))
  // hearth slab
  hatched(L, rect(xl - 20, floor, xr - xl + 40, 10), 'h-stone')
  L.profile.push(line([xl - 60, floor], [xr + 60, floor]))
  B.add([xl - 20, my0 - 24], [xr + 20, floor + 10])
  L.dims.push(hDim(floor + 30, xl - 12, xr + 12, 'SHELF'))
  callouts(L, [
    { text: 'OVERMANTEL MIRROR', at: [xl + 14, 240] },
    { text: 'MANTEL SHELF', at: [xl - 12, openT - 57] },
    { text: 'FRIEZE', at: [xl, openT - 35] },
    { text: 'CENTRAL TABLET', at: [cx - 34, openT - 28] },
    { text: 'CONSOLE', at: [xl + 14, openT + 2] },
    { text: 'JAMB (PILASTER)', at: [xl, 490] },
    { text: 'FIREBOX', at: [cx - openW / 2 + 4, 530] },
    { text: 'HEARTH', at: [xl - 20, floor + 5] },
  ], xl - 20)
  return finish(meta('mantelpiece', 'Mantelpiece', 'Ornamental frame and shelf around a fireplace', 'ELEVATION', 'RM-03',
    'Elevation of a classical chimneypiece: pilaster jambs with scroll consoles either side of the fire opening, a frieze with a central tablet, a projecting shelf, and an overmantel mirror above.', 30, 'metres (indicative)'), L, B)
}

function shoji(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 200
  const x1 = 560
  const top = 180
  const bot = 530
  // kamoi (upper track) and shikii (lower track)
  hatched(L, rect(x0 - 10, top - 16, x1 - x0 + 20, 16), 'h-timber', 'profile')
  hatched(L, rect(x0 - 10, bot, x1 - x0 + 20, 10), 'h-timber', 'profile')
  const n = 4
  const pw = (x1 - x0) / n
  for (let i = 0; i < n; i++) {
    const px = x0 + i * pw
    const fr = 9
    L.profile.push(el(path(rect(px, top, pw, bot - top), true)), el(path(rect(px + fr, top + fr, pw - fr * 2, bot - top - fr * 2 - 46), true)))
    // koshi-ita kickboard
    hatched(L, rect(px + fr, bot - fr - 40, pw - fr * 2, 40), 'h-timber', 'fine')
    // kumiko lattice: tall rectangles
    const lx0 = px + fr
    const lx1 = px + pw - fr
    const ly0 = top + fr
    const ly1 = bot - fr - 46
    const cols = 3
    const rows = 7
    let d = ''
    for (let c = 1; c < cols; c++) d += `M${f(lx0 + (c * (lx1 - lx0)) / cols)} ${f(ly0)}V${f(ly1)}`
    for (let r = 1; r < rows; r++) d += `M${f(lx0)} ${f(ly0 + (r * (ly1 - ly0)) / rows)}H${f(lx1)}`
    L.fine.push(el(d))
    // hikite finger pull
    L.fine.push(el(path(rect(i % 2 ? px + fr + 3 : px + pw - fr - 9, (top + bot) / 2 + 30, 6, 16), true)))
  }
  B.add([x0 - 10, top - 16], [x1 + 10, bot + 10])
  L.dims.push(hDim(bot + 30, x0, x0 + pw, 'PANEL'))
  callouts(L, [
    { text: 'KAMOI (UPPER TRACK)', at: [x0 - 10, top - 8] },
    { text: 'FRAME', at: [x0, 260] },
    { text: 'KUMIKO LATTICE', at: [x0 + 9 + (pw - 18) / 3, 300] },
    { text: 'WASHI PAPER', at: [x0 + 20, 360] },
    { text: 'HIKITE (PULL)', at: [x0 + pw - 9, (top + bot) / 2 + 38] },
    { text: 'KOSHI-ITA', at: [x0 + 9, bot - 29] },
    { text: 'SHIKII (LOWER TRACK)', at: [x0 - 10, bot + 5] },
  ], x0 - 10)
  return finish(meta('shoji-screen', 'Shoji Screen', 'Sliding paper-and-lattice partition', 'ELEVATION', 'RM-04',
    'Elevation of four sliding shoji panels running between an upper and a lower timber track, each a light frame with a kumiko lattice backed by translucent washi paper over a solid kickboard.', 30, 'metres (indicative)'), L, B)
}

// ---------------------------------------------------------------------------
// Fireplaces
// ---------------------------------------------------------------------------
function fireplace(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const floor = 560
  // front: chimney breast, lintel and smoke-chamber front
  hatched(L, [[310, 440], [362, 440], [362, 412], [382, 300], [382, 110], [310, 110]], 'h-brick')
  // back: firebox back, smoke shelf, smoke-chamber back and flue
  hatched(L, [[422, floor], [500, floor], [500, 110], [412, 110], [412, 300], [430, 408], [394, 408], [422, 492]], 'h-brick')
  // hearth (stone) and floor
  hatched(L, rect(230, floor, 270, 12), 'h-stone')
  L.profile.push(line([190, floor], [230, floor]))
  // mantel shelf
  hatched(L, rect(284, 392, 26, 12), 'h-timber')
  // damper (accent) at the throat
  L.cut.push(line([363, 414], [388, 404], ACCENT))
  L.fine.push(circle([363, 414], 2))
  // fire and smoke path
  L.fine.push(el('M372 558q-6 -22 8 -34q-2 14 8 18q2 -16 12 -24q4 22 -4 40Z'))
  arrow(L, [392, 520], [380, 430], 'center')
  arrow(L, [378, 400], [396, 300], 'center')
  arrow(L, [397, 290], [397, 150], 'center')
  L.notes.push(text(404, 210, 'SMOKE', 'class="t-small t-accent"'))
  B.add([190, 110], [500, floor + 12])
  L.dims.push(vDim(272, 440, floor, 'OPENING', 310))
  callouts(L, [
    { text: 'FLUE', at: [384, 180] },
    { text: 'CHIMNEY BREAST', at: [310, 250] },
    { text: 'SMOKE CHAMBER', at: [390, 340] },
    { text: 'MANTEL SHELF', at: [284, 398] },
    { text: 'DAMPER', at: [372, 410] },
    { text: 'SMOKE SHELF', at: [400, 408] },
    { text: 'LINTEL', at: [312, 432] },
    { text: 'FIREBOX', at: [400, 470] },
    { text: 'HEARTH', at: [236, floor + 6] },
  ], 230)
  return finish(meta('fireplace', 'Fireplace', 'Open hearth with a flue to carry smoke away', 'SECTION', 'RM-05',
    'Section through a masonry fireplace: the firebox with its sloping back, the throat and damper, the smoke shelf and smoke chamber above, and the flue rising inside the chimney breast.', 30, 'metres (indicative)'), L, B)
}

function inglenook(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 220
  const x1 = 520
  const back = 150
  const front = 380
  const t = 22
  // U-shaped recess walls and the chimney stack behind
  hatched(L, [[x0 - t, front], [x0 - t, back - 50], [x1 + t, back - 50], [x1 + t, front], [x1, front], [x1, back], [430, back], [430, back + 26], [310, back + 26], [310, back], [x0, back], [x0, front]], 'h-brick')
  // flue in the stack
  L.profile.push(el(path(rect(340, back - 40, 60, 30), true)))
  L.fine.push(line([340, back - 40], [400, back - 10]), line([400, back - 40], [340, back - 10]))
  // room walls continuing either side
  L.cut.push(line([x0 - t, front], [x0 - 60, front]), line([x1 + t, front], [x1 + 60, front]))
  // settles (benches) against the side walls
  for (const [x, w] of [[x0, 40], [x1 - 40, 40]] as const) {
    L.profile.push(el(path(rect(x, back + 46, w, front - back - 70), true)))
    L.fine.push(line([x + (x === x0 ? w - 8 : 8), back + 46], [x + (x === x0 ? w - 8 : 8), front - 24]))
  }
  // hearth stone and fire basket
  L.fine.push(el(path(rect(300, back + 26, 140, 70), true)))
  L.fine.push(el(path(rect(340, back + 34, 60, 22), true)))
  // window in the side wall
  L.cut.push(`<path d="${path(rect(x0 - t, 220, t, 50), true)}" style="fill: var(--_paper)"/>`)
  L.fine.push(line([x0 - t, 220], [x0 - t, 270]), line([x0 - t / 2, 220], [x0 - t / 2, 270]), line([x0, 220], [x0, 270]))
  // bressummer (beam above, dashed) across the opening
  L.center.push(line([x0 - t, front - 4], [x1 + t, front - 4]))
  B.add([x0 - 60, back - 50], [x1 + 60, front + 10])
  L.dims.push(hDim(front + 34, x0, x1, 'RECESS'))
  L.notes.push(text((x0 + x1) / 2, front + 70, 'ROOM', 'class="t-sub" text-anchor="middle"'))
  callouts(L, [
    { text: 'CHIMNEY STACK', at: [x0 - t, back - 30] },
    { text: 'FLUE', at: [340, back - 25] },
    { text: 'FIRE BASKET', at: [340, back + 45] },
    { text: 'HEARTH STONE', at: [300, back + 80] },
    { text: 'SMALL WINDOW', at: [x0 - t, 245] },
    { text: 'SETTLE (BENCH)', at: [x0 + 10, 300] },
    { text: 'BRESSUMMER ABOVE', at: [x0 + 50, front - 4] },
  ], x0 - 60)
  return finish(meta('inglenook', 'Inglenook', 'Seating recess built around a wide hearth', 'PLAN', 'RM-06',
    'Plan of a deep fireplace recess opening off a room, with fixed benches along each side wall facing the hearth, a small window for light, and a heavy beam spanning the opening overhead.', 30, 'metres (indicative)'), L, B)
}

// ---------------------------------------------------------------------------
// Chambers and modern spatial ideas
// ---------------------------------------------------------------------------
function kubbealti(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const floor = 560
  const half = 150
  const wallT = 30
  const spring = 330
  // walls (cut)
  hatched(L, rect(cx - half - wallT, spring, wallT, floor - spring))
  hatched(L, rect(cx + half, spring, wallT, floor - spring))
  // pendentive zone and dome shell (cut)
  const R = half
  const Ri = R + 14
  const dc: Pt = [cx, spring - 30]
  const outer = ring(dc, Ri, Math.PI, 2 * Math.PI, 36)
  const inner = ring(dc, R, 2 * Math.PI, Math.PI, 36)
  hatched(L, [[cx - half - wallT, spring], ...outer.map(([x, y]) => [x, y] as Pt), [cx + half + wallT, spring], [cx + half, spring], [cx + half, spring - 30], ...inner, [cx - half, spring - 30], [cx - half, spring]])
  // lead covering and alem finial
  L.profile.push(el(path(ring(dc, Ri + 5, Math.PI * 1.06, Math.PI * 1.94, 30))))
  L.profile.push(line([cx, dc[1] - Ri - 5], [cx, dc[1] - Ri - 40]), circle([cx, dc[1] - Ri - 22], 5), circle([cx, dc[1] - Ri - 34], 3))
  L.fine.push(el(`M${f(cx - 5)} ${f(dc[1] - Ri - 42)}q5 -10 10 0q-5 -2 -5 -8q0 6 -5 8Z`))
  // pendentive (beyond): the curved triangle springing from the corner
  L.fine.push(el(`M${f(cx - half)} ${f(spring)}Q${f(cx - half + 8)} ${f(spring - 26)} ${f(cx - half + 44)} ${f(spring - 30)}`), el(`M${f(cx + half)} ${f(spring)}Q${f(cx + half - 8)} ${f(spring - 26)} ${f(cx + half - 44)} ${f(spring - 30)}`))
  // back wall beyond: pointed windows, tile dado, grilled window
  const pointed = (x: number, y: number, w: number, h: number) =>
    el(`M${f(x)} ${f(y + h)}V${f(y + w * 0.7)}Q${f(x)} ${f(y + 6)} ${f(x + w / 2)} ${f(y)}Q${f(x + w)} ${f(y + 6)} ${f(x + w)} ${f(y + w * 0.7)}V${f(y + h)}Z`)
  for (const wx of [cx - 110, cx + 70]) L.fine.push(pointed(wx, 360, 40, 80))
  L.fine.push(line([cx - half, 470], [cx + half, 470]))
  for (let x = cx - half + 20; x < cx + half; x += 20) L.shading.push(line([x, 470], [x, 520]))
  // kafes: grilled window from which the sultan could listen unseen
  const gx = cx - 20
  L.profile.push(el(path(rect(gx, 380, 40, 50), true)))
  let g = ''
  for (let k = 1; k < 6; k++) g += `M${f(gx + k * 6.7)} 380V430M${gx} ${f(380 + k * 8.3)}H${gx + 40}`
  L.fine.push(el(g))
  // divan bench with cushions
  L.profile.push(el(path(rect(cx - half, 522, 2 * half, 38), true)))
  for (let x = cx - half + 6; x < cx + half - 30; x += 46) L.fine.push(el(`M${f(x)} 522q4 -16 18 -18h10q14 2 14 18`))
  L.profile.push(line([cx - half - wallT - 20, floor], [cx + half + wallT + 20, floor]))
  B.add([cx - half - wallT - 20, dc[1] - Ri - 48], [cx + half + wallT + 20, floor])
  L.dims.push(hDim(floor + 24, cx - half, cx + half, 'CHAMBER'))
  callouts(L, [
    { text: 'ALEM (FINIAL)', at: [cx, dc[1] - Ri - 30] },
    { text: 'LEAD-COVERED DOME', at: [cx - 110, dc[1] - 112] },
    { text: 'PENDENTIVE', at: [cx - half + 10, spring - 20] },
    { text: 'POINTED WINDOW', at: [cx - 110, 400] },
    { text: 'GRILLED WINDOW (KAFES)', at: [gx, 405] },
    { text: 'TILE DADO', at: [cx - half, 495] },
    { text: 'DIVAN BENCH', at: [cx - half, 540] },
    { text: 'WALL (CUT)', at: [cx - half - wallT, 440] },
  ], cx - half - wallT - 20)
  return finish(meta('kubbealti-domed-chamber', 'Kubbealtı / Domed Chamber', 'Domed council hall of an Ottoman palace', 'SECTION', 'RM-07',
    'Section through a square domed council chamber: thick walls carrying a lead-covered dome on pendentives, a continuous divan bench around the walls, tiled lower walls, and a grilled window high in the wall from which the ruler could follow proceedings unseen.', 30, 'metres (indicative)',
    'After the Kubbealtı (Imperial Council Hall), Topkapı Palace, Istanbul (16th c.). Simplified; not a survey. Original drawing by Project Exodus.'), L, B)
}

function doubleHeight(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 210
  const x1 = 560
  const g = 560
  const mid = 400
  const roof = 240
  const slab = 16
  const gal = 330 // gallery edge
  // back wall (cut) and slabs (cut)
  hatched(L, rect(x0 - 20, roof - slab, 20, g - roof + slab + 16), 'h-concrete')
  hatched(L, rect(x0 - 20, roof - slab, x1 - x0 + 40, slab), 'h-concrete')
  hatched(L, rect(x0, mid, gal - x0, slab), 'h-concrete')
  hatched(L, rect(x0 - 20, g, x1 - x0 + 40, 16), 'h-concrete')
  // gallery balustrade (glass, with a handrail)
  L.profile.push(line([gal, mid], [gal, mid - 40]), line([gal - 4, mid - 40], [gal + 4, mid - 40]))
  L.fine.push(line([gal - 2, mid], [gal - 2, mid - 40]))
  // full-height glazing on the open side
  L.profile.push(line([x1, roof], [x1, g]), line([x1 + 6, roof], [x1 + 6, g]))
  for (const y of [roof + 80, mid, mid + 80]) L.fine.push(line([x1, y], [x1 + 6, y]))
  // people for scale
  figure(L, 290, mid, 64)
  figure(L, 420, g, 64)
  figure(L, 470, g, 60)
  // daylight from the tall glazing, and the visual link between floors
  arrow(L, [x1 + 4, roof + 40], [430, 420])
  L.center.push(el(`M290 ${mid - 56}Q370 ${mid - 30} 420 ${g - 54}`, 'stroke-dasharray="2 3"'))
  L.notes.push(text(372, mid - 30, 'SIGHT LINE', 'class="t-small t-accent"'))
  B.add([x0 - 20, roof - slab], [x1 + 6, g + 16])
  L.dims.push(vDim(500, g, roof, 'TWO STOREYS'))
  L.dims.push(vDim(x0 + 26, mid, roof, 'ONE STOREY'))
  callouts(L, [
    { text: 'ROOF SLAB', at: [x0 - 20, roof - 8] },
    { text: 'GALLERY', at: [x0 + 50, mid + 8] },
    { text: 'BALUSTRADE', at: [gal, mid - 20] },
    { text: 'DOUBLE-HEIGHT VOID', at: [gal + 30, 300] },
    { text: 'GROUND FLOOR', at: [x0, g + 8] },
  ], x0 - 20)
  return finish(meta('double-height-space', 'Double-Height Space', 'A room rising through two storeys', 'SECTION', 'RM-08',
    'Section through a room that rises through two storeys: a gallery on the upper floor overlooks the tall void, which is lit by full-height glazing, linking the two levels visually.', 30, 'metres (indicative)'), L, B)
}

function freePlan(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const P = axo([340, 560], 'isometric')
  const W = 260
  const D = 170
  const colH = 100
  const slab = 12
  const c = 9
  const grid: Array<[number, number]> = []
  for (const x of [30, 130, 230]) for (const y of [30, 140]) grid.push([x, y])
  const far = (a: [number, number], b: [number, number]) => b[0] + b[1] - (a[0] + a[1])
  // ground line
  L.fine.push(line(P([-40, 0, 0]), P([W + 40, 0, 0])), line(P([0, -30, 0]), P([0, D + 40, 0])))
  // pilotis, far first
  for (const [x, y] of [...grid].sort(far)) box(L, P, [x - c / 2, y - c / 2, 0], c, c, colH, { top: 'light', front: 'light', side: 'mid' })
  // floor slab
  box(L, P, [0, 0, colH], W, D, slab, { top: 'light', front: 'mid', side: 'dark' })
  const z = colH + slab
  // partitions and columns on the slab, far to near
  type Item = { key: number; draw: () => void }
  const items: Item[] = []
  for (const [x, y] of grid) {
    items.push({
      key: x + y,
      draw: () => {
        box(L, P, [x - c / 2, y - c / 2, z], c, c, 78, { top: 'dark', front: 'light', side: 'mid' })
      },
    })
  }
  // free curved partition (bathroom-like drum) and a straight screen, off the grid
  const drum: Array<[number, number]> = []
  for (let i = 0; i <= 14; i++) {
    const a = Math.PI * 0.15 + (i / 14) * Math.PI * 1.25
    drum.push([185 + 34 * Math.cos(a), 75 + 34 * Math.sin(a)])
  }
  items.push({ key: 185 + 75, draw: () => axoWall(L, P, drum, z, 56) })
  items.push({ key: 70 + 95, draw: () => box(L, P, [60, 80, z], 4, 90, 56, { top: 'dark', front: 'mid', side: 'light' }) })
  const sCurve: Array<[number, number]> = []
  for (let i = 0; i <= 12; i++) sCurve.push([90 + (i / 12) * 110, 150 - 18 * Math.sin((i / 12) * Math.PI * 1.5)])
  items.push({ key: 145 + 150, draw: () => axoWall(L, P, sCurve, z, 56) })
  for (const it of items.sort((a, b) => b.key - a.key)) it.draw()
  addAxo(B, P, [0, D, 0], [W, 0, 0], [0, 0, 0], [0, D, z + 78], [W, D, z + 78], [-40, 0, 0], [W + 40, 0, 0])
  callouts(L, [
    { text: 'COLUMN (CONTINUES UP)', at: P([30, 140, z + 70]) },
    { text: 'CURVED PARTITION', at: P([90, 150, z + 40]) },
    { text: 'STRAIGHT SCREEN', at: P([60, 120, z + 30]) },
    { text: 'FLOOR SLAB', at: P([0, 60, colH + 6]) },
    { text: 'PILOTIS', at: P([30, 140, 50]) },
  ], P([0, D, 0])[0])
  L.notes.push(text(P([W, 0, 0])[0] - 10, P([W, 0, 0])[1] + 30, 'WALLS IGNORE THE COLUMN GRID', 'class="t-small t-accent" text-anchor="end"'))
  return finish(meta('free-plan', 'Free Plan', 'Partitions freed from the structural grid', 'ISOMETRIC', 'RM-09',
    'Isometric of a floor slab carried on a regular grid of slender columns, with curved and straight partitions placed freely on it without regard to where the columns stand, because no wall carries load.', 26, 'metres (indicative)',
    'After Le Corbusier\'s Dom-ino frame (1914) and "Five Points" (1926). Original drawing by Project Exodus.'), L, B, AXO_DEFS)
}

function sculpturalStair(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const P = axo([280, 590], 'isometric')
  const n = 10
  const g = 26
  const r = 22
  const d = 90
  const t = 10
  const run = n * g
  const landing = 60
  const top = n * r
  // board-marked concrete wall behind the stair (far plane y = d)
  face(L, P, [[-20, d, 0], [run + landing + 10, d, 0], [run + landing + 10, d, top + 90], [-20, d, top + 90]], 'light', 'fine')
  let boards = ''
  for (let zz = 12; zz < top + 90; zz += 12) {
    const a = P([-20, d, zz])
    const b = P([run + landing + 10, d, zz])
    boards += `M${f(a[0])} ${f(a[1])}L${f(b[0])} ${f(b[1])}`
  }
  L.fine.push(el(boards))
  // landing slab cantilevered from the wall
  box(L, P, [run, 0, top - t], landing, d, t, { top: 'light', front: 'mid', side: 'mid' })
  // folded plate: treads and risers, top step first (farthest)
  for (let k = n - 1; k >= 0; k--) {
    face(L, P, [[k * g, 0, (k + 1) * r], [(k + 1) * g, 0, (k + 1) * r], [(k + 1) * g, d, (k + 1) * r], [k * g, d, (k + 1) * r]], 'light')
    face(L, P, [[k * g, 0, k * r], [k * g, d, k * r], [k * g, d, (k + 1) * r], [k * g, 0, (k + 1) * r]], 'dark')
  }
  // near edge: the zig-zag profile of the folded slab, with constant thickness
  const topProf: P3[] = [[0, 0, 0]]
  for (let k = 0; k < n; k++) topProf.push([k * g, 0, (k + 1) * r], [(k + 1) * g, 0, (k + 1) * r])
  const botProf: P3[] = topProf.map(([x, , z], i) => [Math.min(run, x + t), 0, i === 0 ? 0 : z - t])
  face(L, P, [...topProf, ...botProf.reverse()], 'mid', 'cut')
  // no handrail: a single steel flat bar on the open side
  L.cut.push(el(path(Array.from({ length: n }, (_, k) => P([k * g + g / 2, 2, (k + 1) * r + 70]))), 'class="l-fine"'))
  for (const k of [1, 5, 9]) L.cut.push(line(P([k * g + g / 2, 2, (k + 1) * r]), P([k * g + g / 2, 2, (k + 1) * r + 70]), 'class="l-fine"'))
  // floor line
  L.fine.push(line(P([-40, 0, 0]), P([run + landing + 30, 0, 0])))
  addAxo(B, P, [-20, d, top + 90], [run + landing + 30, 0, 0], [-40, 0, 0], [run + landing + 10, d, top + 90], [-20, d, 0])
  callouts(L, [
    { text: 'BOARD-MARKED WALL', at: P([0, d, top + 60]) },
    { text: 'CANTILEVERED LANDING', at: P([run + 10, 0, top - 5]) },
    { text: 'STEEL BALUSTER', at: P([5 * g + g / 2, 2, 6 * r + 40]) },
    { text: 'TREAD', at: P([3 * g + 4, 30, 4 * r]) },
    { text: 'RISER', at: P([2 * g, 40, 2 * r + 10]) },
    { text: 'FOLDED CONCRETE PLATE', at: P([g * 1.5, 0, r - 4]) },
  ], P([-20, d, 0])[0])
  return finish(meta('sculptural-staircase', 'Sculptural Staircase', 'Stair treated as a piece of sculpture', 'ISOMETRIC', 'RM-10',
    'Isometric of a stair made as a single folded concrete plate, its treads and risers forming one zig-zag slab of constant thickness, rising past a board-marked concrete wall to a cantilevered landing.', 22, 'metres (indicative)'), L, B, AXO_DEFS)
}

export const ROOM_SHEETS: Array<() => SheetSpec> = [
  boiserie, bookcase, mantelpiece, shoji, fireplace, inglenook, kubbealti, doubleHeight, freePlan, sculpturalStair,
]

