/**
 * Door parts drawn as close-ups in context: the whole door (2.1 m leaf in a brick wall) stays on the
 * sheet, small, with a ring marking the part, and a round window redraws that part at several times the
 * size with its own labels and dimensions. Geometry is in millimetres, x across from the door centre, y up from the floor.
 */
import { type Pt, type SheetSpec, f, path, el, vDim, hDim, text } from '../sheet'
import { newLayers, finish, circle, line, rect, callouts, zoomInContext, Bounds, ORIGINAL, type Layers } from '../kit'

type Kind = 'door-knocker' | 'dutch-door' | 'architrave' | 'pediment-door' | 'door-transom' | 'lintel'

const OP = 900 // opening width
const HH = 2100 // opening height
const AR = 120 // architrave width
const ACC = 'style="stroke: var(--_accent)"'

function drawDoor(T: Layers, kind: Kind, s: number, ox: number, oy: number) {
  const X = (u: number) => ox + u * s
  const Y = (v: number) => oy - v * s
  const P = (u: number, v: number): Pt => [X(u), Y(v)]
  const poly = (pts: Array<[number, number]>, close = false) => el(path(pts.map(([u, v]) => P(u, v)), close))
  const rc = (u: number, v: number, w: number, h: number) => poly([[u, v], [u + w, v], [u + w, v + h], [u, v + h]], true)
  const hi = (k: Kind) => kind === k
  const trans = kind === 'door-transom' ? 450 : 0
  const head = HH + trans
  const WALL = 1200

  // wall: brick courses either side of and above the opening
  const course = 75
  for (let v = 0; v <= head + AR + 500; v += course) {
    const left = v < head + AR ? [-WALL, -OP / 2 - AR] : [-WALL, WALL]
    T.shading.push(poly([[left[0], v], [left[1], v]]))
    if (v < head + AR) T.shading.push(poly([[OP / 2 + AR, v], [WALL, v]]))
  }
  T.profile.push(poly([[-WALL, 0], [WALL, 0]]), poly([[-WALL, 0], [-WALL, head + AR + 500]]), poly([[WALL, 0], [WALL, head + AR + 500]]))
  T.profile.push(poly([[-WALL, head + AR + 500], [WALL, head + AR + 500]]))

  // surround (architrave) with mitred head
  const sur: Array<[number, number]> = [[-OP / 2 - AR, 0], [-OP / 2 - AR, head + AR], [OP / 2 + AR, head + AR], [OP / 2 + AR, 0], [OP / 2, 0], [OP / 2, head], [-OP / 2, head], [-OP / 2, 0]]
  if (hi('architrave')) {
    T.hatch.push(`<path d="${path(sur.map(([u, v]) => P(u, v)), true)}" fill="url(#h-stone)" stroke="none"/>`)
    T.cut.push(`<path d="${path(sur.map(([u, v]) => P(u, v)), true)}" ${ACC}/>`)
  } else T.profile.push(poly(sur, true))
  T.fine.push(poly([[-OP / 2 - 40, 0], [-OP / 2 - 40, head + 40], [OP / 2 + 40, head + 40], [OP / 2 + 40, 0]]))
  T.fine.push(poly([[-OP / 2 - AR, head + AR], [-OP / 2, head]]), poly([[OP / 2 + AR, head + AR], [OP / 2, head]])) // mitres
  // plinth blocks at the foot of the surround
  for (const side of [-1, 1]) T.profile.push(rc(side < 0 ? -OP / 2 - AR - 15 : OP / 2 - 15 + 15, 0, AR + 15, 150))

  // lintel kind: an open doorway with a stone lintel carrying the wall above
  if (kind === 'lintel') {
    const lt: Array<[number, number]> = [[-OP / 2 - 220, head], [OP / 2 + 220, head], [OP / 2 + 220, head + 230], [-OP / 2 - 220, head + 230]]
    T.hatch.push(`<path d="${path(lt.map(([u, v]) => P(u, v)), true)}" fill="url(#h-stone)" stroke="none"/>`)
    T.cut.push(`<path d="${path(lt.map(([u, v]) => P(u, v)), true)}" ${ACC}/>`)
    for (const side of [-1, 1]) T.fine.push(poly([[side * (OP / 2 + 20), head + 230], [side * (OP / 2 + 20), head + 230 + 380]]))
    return
  }

  // transom light (4 panes) above the leaf
  if (trans) {
    T.profile.push(rc(-OP / 2, HH, OP, trans))
    T.profile.push(rc(-OP / 2, HH, OP, 70)) // transom bar
    for (let i = 1; i < 4; i++) T.fine.push(poly([[-OP / 2 + (i * OP) / 4, HH + 70], [-OP / 2 + (i * OP) / 4, head]]))
    T.fine.push(poly([[-OP / 2 + 30, HH + 100], [OP / 2 - 30, HH + 100]]), poly([[-OP / 2 + 30, head - 30], [OP / 2 - 30, head - 30]]))
    if (hi('door-transom')) T.cut.push(rc(-OP / 2, HH, OP, trans).replace('/>', ` ${ACC}/>`))
  }

  // leaf with raised panels (two across, three down)
  const g = 12
  const lx = -OP / 2 + g
  const lw = OP - 2 * g
  const split = kind === 'dutch-door'
  if (split) {
    T.profile.push(rc(lx, 1030, lw, HH - 1030 - g), rc(lx, g, lw, 1000 - g))
    T.profile.push(rc(lx - 22, 1000, lw + 44, 35)) // shelf
    T.fine.push(poly([[lx - 22, 1000], [lx + lw + 22, 1000]]))
  } else T.profile.push(rc(lx, g, lw, HH - 2 * g))
  const colW = (lw - 3 * 110) / 2
  const rows: Array<[number, number]> = [[1690, 330], [1020, 560], [150, 760]]
  for (const [py, ph] of rows) {
    for (const px of [lx + 110, lx + 220 + colW]) {
      if (split && py < 1050 && py + ph > 1000) continue
      T.profile.push(rc(px, py, colW, ph))
      T.fine.push(rc(px + 22, py + 22, colW - 44, ph - 44))
    }
  }
  // hinges (left) and lockset (right)
  for (const hv of [250, 1050, 1800]) T.profile.push(rc(-OP / 2 - 4, hv, 22, 100))
  T.profile.push(circle(P(OP / 2 - 70, 1000), 28 * s), circle(P(OP / 2 - 70, 1000), 44 * s))
  T.fine.push(circle(P(OP / 2 - 70, 930), 6 * s))

  if (kind === 'door-knocker') {
    // back plate, pivot boss, ring, strike plate
    const cx = 0
    T.profile.push(`<path d="M${f(X(cx - 45))} ${f(Y(1480))}L${f(X(cx - 45))} ${f(Y(1600))}Q${f(X(cx - 45))} ${f(Y(1650))} ${f(X(cx))} ${f(Y(1668))}Q${f(X(cx + 45))} ${f(Y(1650))} ${f(X(cx + 45))} ${f(Y(1600))}L${f(X(cx + 45))} ${f(Y(1480))}Z"/>`)
    T.fine.push(`<path d="M${f(X(cx - 32))} ${f(Y(1490))}L${f(X(cx - 32))} ${f(Y(1596))}Q${f(X(cx))} ${f(Y(1640))} ${f(X(cx + 32))} ${f(Y(1596))}L${f(X(cx + 32))} ${f(Y(1490))}"/>`)
    T.profile.push(circle(P(cx, 1588), 14 * s))
    T.cut.push(circle(P(cx, 1521), 55 * s, ACC), circle(P(cx, 1521), 44 * s, ACC))
    T.profile.push(rc(cx - 28, 1418, 56, 28), circle(P(cx, 1432), 6 * s))
  }
  if (hi('dutch-door')) T.cut.push(rc(lx - 22, 1000, lw + 44, 35).replace('/>', ` ${ACC}/>`))

  if (hi('pediment-door')) {
    // pilasters either side, a flat entablature and a triangular pediment
    const px0 = OP / 2 + AR + 20
    for (const side of [-1, 1]) {
      const x0 = side < 0 ? -px0 - 130 : px0
      T.cut.push(rc(x0, 150, 130, head - 150))
      T.profile.push(rc(x0 - 14, 0, 158, 150), rc(x0 - 14, head, 158, 70))
    }
    const ex = px0 + 160
    T.cut.push(rc(-ex, head + 70, 2 * ex, 260))
    T.fine.push(poly([[-ex, head + 140], [ex, head + 140]]), poly([[-ex, head + 230], [ex, head + 230]]))
    T.cut.push(poly([[-ex - 60, head + 330], [0, head + 330 + 380], [ex + 60, head + 330]], true))
    T.fine.push(poly([[-ex + 80, head + 360], [0, head + 330 + 300], [ex - 80, head + 360]], true))
  }
}

interface DoorSpec {
  kind: Kind
  id: string
  title: string
  subtitle: string
  sheetNo: string
  description: string
  at: Pt
  r: number
  labels: Array<{ text: string; p: Pt }>
  dims?: (X: (u: number) => number, Y: (v: number) => number) => string[]
  note: string
}

const SPECS: DoorSpec[] = [
  { kind: 'door-knocker', id: 'door-knocker', title: 'Door Knocker', subtitle: 'Hinged ring struck against a plate', sheetNo: 'DOR-11', at: [0, 1540], r: 250,
    description: 'Elevation of a six-panel door with a small ring knocker at head height, and a round close-up of the back plate, pivot, ring and strike plate drawn large against the door.',
    labels: [{ text: 'BACK PLATE', p: [-45, 1600] }, { text: 'PIVOT', p: [-14, 1588] }, { text: 'KNOCKER RING', p: [-55, 1521] }, { text: 'STRIKE PLATE', p: [-28, 1432] }, { text: 'DOOR STILE', p: [-60, 1300] }],
    dims: (X, Y) => [hDim(Y(1390), X(-55), X(55), 'RING 110'), vDim(X(95), Y(1480), Y(1668), '188', X(48))],
    note: 'RING 110 mm · DOOR 2100 mm HIGH' },
  { kind: 'dutch-door', id: 'dutch-door', title: 'Dutch Door', subtitle: 'Door split horizontally into two leaves', sheetNo: 'DOR-02', at: [0, 1010], r: 420,
    description: 'Elevation of a door split into an upper and a lower leaf with a shelf where they meet, and a round close-up of the split, the shelf and the two leaves.',
    labels: [{ text: 'UPPER LEAF', p: [-250, 1300] }, { text: 'SHELF', p: [-300, 1018] }, { text: 'LOWER LEAF', p: [-250, 700] }, { text: 'LATCH', p: [OP / 2 - 70, 1000] }],
    dims: (X, Y) => [vDim(X(OP / 2 + 60), Y(0), Y(1000), '1000', X(OP / 2 + 20))],
    note: 'LEAVES SPLIT AT ABOUT 1000 mm · TOP LEAF OPENS ALONE' },
  { kind: 'architrave', id: 'architrave', title: 'Architrave', subtitle: 'Moulded frame around a door opening', sheetNo: 'DOR-03', at: [-OP / 2 - 40, HH + 40], r: 330,
    description: 'Elevation of a door with its moulded surround highlighted, and a round close-up of the mitred top corner of the surround where the head meets the side.',
    labels: [{ text: 'HEAD', p: [-200, HH + 60] }, { text: 'MITRE JOINT', p: [-OP / 2 - 60, HH + 60] }, { text: 'SIDE (JAMB) ARCHITRAVE', p: [-OP / 2 - 80, HH - 200] }, { text: 'DOOR LEAF', p: [-OP / 2 + 80, HH - 150] }],
    dims: (X, Y) => [hDim(Y(HH - 260), X(-OP / 2 - AR), X(-OP / 2), `${AR}`)],
    note: 'SURROUND 120 mm WIDE · MITRED AT THE HEAD' },
  { kind: 'pediment-door', id: 'pediment-door', title: 'Pediment Door', subtitle: 'Doorway crowned by a triangular pediment', sheetNo: 'DOR-04', at: [0, HH + 480], r: 860,
    description: 'Elevation of a doorway framed by two pilasters and crowned by an entablature and a triangular pediment, with a round close-up of the crown.',
    labels: [{ text: 'PEDIMENT', p: [-300, HH + 120 + 330 + 160] }, { text: 'ENTABLATURE', p: [-500, HH + 70 + 130] }, { text: 'PILASTER', p: [-OP / 2 - AR - 85, HH - 100] }, { text: 'DOOR LEAF', p: [0, HH - 200] }],
    note: 'PEDIMENT RISE 380 · ENTABLATURE 260' },
  { kind: 'door-transom', id: 'door-transom', title: 'Door Transom', subtitle: 'Glazed light above a door', sheetNo: 'DOR-05', at: [0, 2100 + 220], r: 520,
    description: 'Elevation of a door with a glazed transom light above it, and a round close-up of the transom bar and its four panes.',
    labels: [{ text: 'TRANSOM LIGHT', p: [-250, 2100 + 300] }, { text: 'TRANSOM BAR', p: [-200, 2100 + 35] }, { text: 'DOOR LEAF', p: [-250, 2100 - 200] }, { text: 'SURROUND', p: [-OP / 2 - 70, 2100 + 250] }],
    dims: (X, Y) => [vDim(X(OP / 2 + 90), Y(HH), Y(HH + 450), '450', X(OP / 2 + 30))],
    note: 'TRANSOM 450 HIGH · FOUR PANES' },
  { kind: 'lintel', id: 'lintel', title: 'Lintel', subtitle: 'Beam spanning the top of an opening', sheetNo: 'DOR-06', at: [-OP / 2 - 80, HH + 120], r: 420,
    description: 'Elevation of a plain doorway with a stone lintel spanning it, and a round close-up of one end of the lintel resting on the wall either side of the opening.',
    labels: [{ text: 'LINTEL', p: [0, HH + 120] }, { text: 'BEARING', p: [-OP / 2 - 150, HH + 120] }, { text: 'WALL ABOVE', p: [-OP / 2 - 90, HH + 400] }, { text: 'JAMB', p: [-OP / 2, HH - 250] }],
    dims: (X, Y) => [hDim(Y(HH - 120), X(-OP / 2 - 220), X(-OP / 2), '220')],
    note: 'LINTEL BEARS 220 mm EACH SIDE' },
]

function build(c: DoorSpec): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const sW = 0.092
  const ox = 130
  const oy = 300
  const win = { cx: 330, cy: 470, r: 150 }
  const z = zoomInContext(L, {
    id: c.id,
    draw: (T, s, x, y) => drawDoor(T, c.kind, s, x, y),
    whole: { scale: sW, ox, oy },
    focus: c.at,
    regionR: c.r,
    window: win,
  })
  const at = (p: Pt): Pt => [z.zoom.X(p[0]), z.zoom.Y(p[1])]
  B.add([ox - 1200 * sW, oy - 3500 * sW], [win.cx + win.r, win.cy + win.r])
  L.notes.push(text(ox - 1200 * sW, oy + 18, 'WHOLE DOOR · ELEVATION', 'class="t-small"'), text(win.cx, win.cy + win.r + 16, `CLOSE-UP · ×${Math.round(z.zoom.scale / sW)} · ${c.note}`, 'text-anchor="middle" class="t-small"'))
  const inside = c.labels.map((l) => ({ text: l.text, at: at(l.p) })).filter((l) => Math.hypot(l.at[0] - win.cx, l.at[1] - win.cy) < win.r - 4)
  callouts(L, inside, win.cx - win.r - 6)
  if (c.dims) L.dims.push(...c.dims(z.zoom.X, z.zoom.Y))
  return finish({
    id: c.id, title: c.title, subtitle: c.subtitle, view: 'ELEVATION · CLOSE-UP IN CONTEXT', sheetNo: c.sheetNo, source: ORIGINAL,
    scale: { unitPx: 500 * sW, unitName: '500 mm (whole door)', count: 3 }, description: c.description,
  }, L, B, z.defs)
}

export const DOOR_CONTEXT_SHEETS: Array<() => SheetSpec> = SPECS.map((c) => () => build(c))
void line
