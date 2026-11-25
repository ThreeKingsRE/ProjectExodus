/**
 * Battlement parts as close-ups in context: the curtain wall (9 m of wall, 7 m high) stays on the sheet
 * with a ring on the part, and a round window redraws the parapet larger with labels and dimensions.
 * Millimetres, x across from the middle of the wall, y up from the ground.
 */
import { type Pt, type SheetSpec, path, el, vDim, hDim, text } from '../sheet'
import { newLayers, finish, callouts, zoomInContext, Bounds, ORIGINAL, type Layers } from '../kit'

type Kind = 'battlement' | 'merlon' | 'crenel'
const WALL_L = 9000
const WALL_H = 7000
const MW = 1200 // merlon width
const CW = 600 // crenel width
const MH = 1200 // merlon height above the wall walk
const ACC = 'style="stroke: var(--_accent)"'
const PITCH = MW + CW

/** Merlon i spans [mx(i), mx(i)+MW]; chosen so a merlon sits left of the middle and a crenel right of it. */
const mx = (i: number) => -4500 + 300 + i * PITCH

function drawWall(T: Layers, kind: Kind, s: number, ox: number, oy: number) {
  const X = (u: number) => ox + u * s
  const Y = (v: number) => oy - v * s
  const P = (u: number, v: number): Pt => [X(u), Y(v)]
  const poly = (pts: Array<[number, number]>, close = false) => el(path(pts.map(([u, v]) => P(u, v)), close))
  const rc = (u: number, v: number, w: number, h: number) => poly([[u, v], [u + w, v], [u + w, v + h], [u, v + h]], true)
  const mark = (pts: Array<[number, number]>) => {
    T.hatch.push(`<path d="${path(pts.map(([u, v]) => P(u, v)), true)}" fill="url(#h-stone)" stroke="none"/>`)
    T.cut.push(`<path d="${path(pts.map(([u, v]) => P(u, v)), true)}" ${ACC}/>`)
  }
  const R = (u: number, v: number, w: number, h: number): Array<[number, number]> => [[u, v], [u + w, v], [u + w, v + h], [u, v + h]]
  const x0 = -WALL_L / 2

  // wall face with 450 mm stone courses, a battered base, and the ground
  T.profile.push(poly([[x0, 0], [x0 + WALL_L, 0]]), poly([[x0, 0], [x0, WALL_H]]), poly([[x0 + WALL_L, 0], [x0 + WALL_L, WALL_H]]))
  for (let v = 450; v < WALL_H; v += 450) T.shading.push(poly([[x0, v], [x0 + WALL_L, v]]))
  T.fine.push(poly([[x0, 900], [x0 + WALL_L, 900]]))
  // wall-walk line and the parapet band under the merlons
  T.profile.push(poly([[x0, WALL_H], [x0 + WALL_L, WALL_H]]))
  // merlons (solid) with an arrow loop in each, crenels (gaps) between
  const n = Math.floor((WALL_L - 600) / PITCH) + 1
  for (let i = 0; i < n; i++) {
    const m = R(mx(i), WALL_H, MW, MH)
    T.profile.push(poly(m, true))
    // arrow loop: a narrow vertical slit, splayed wider on the inside
    const cx = mx(i) + MW / 2
    T.fine.push(rc(cx - 40, WALL_H + 250, 80, 700))
    for (let v = WALL_H; v <= WALL_H + MH; v += 300) T.shading.push(poly([[mx(i), v], [mx(i) + MW, v]]))
    if ((kind === 'merlon' && i === 3) || (kind === 'battlement')) mark(m)
  }
  if (kind === 'crenel') mark(R(mx(3) + MW, WALL_H, CW, MH))
  if (kind === 'crenel') T.fine.push(rc(mx(3) + MW, WALL_H, CW, MH)) // outline the gap
  // joining wall-walk edge between merlons (the crenel sills)
  for (let i = 0; i < n - 1; i++) T.profile.push(poly([[mx(i) + MW, WALL_H], [mx(i) + PITCH, WALL_H]]))
}

interface BSpec { kind: Kind; id: string; title: string; subtitle: string; sheetNo: string; description: string; at: Pt; r: number; note: string }

const SPECS: BSpec[] = [
  { kind: 'battlement', id: 'battlement', title: 'Battlement', subtitle: 'Crenellated parapet of alternating solids and gaps', sheetNo: 'FRT-01', at: [mx(2) + 900, WALL_H + 500], r: 2500,
    description: 'Elevation of a curtain wall with its battlemented parapet marked, and a round close-up of the parapet showing the alternating merlons and crenels with an arrow loop in each merlon.',
    note: 'MERLON 1200 · CRENEL 600 · PARAPET 1200 HIGH' },
  { kind: 'merlon', id: 'merlon', title: 'Merlon', subtitle: 'The raised solid of a battlement', sheetNo: 'FRT-02', at: [mx(3) + MW / 2, WALL_H + 500], r: 1250,
    description: 'Elevation of a curtain wall with one merlon marked, and a round close-up of that block of masonry with its arrow loop and its width and height.',
    note: 'MERLON 1200 WIDE · 1200 HIGH · ARROW LOOP 80 WIDE' },
  { kind: 'crenel', id: 'crenel', title: 'Crenel', subtitle: 'The open gap between merlons', sheetNo: 'FRT-03', at: [mx(3) + MW + CW / 2, WALL_H + 400], r: 1250,
    description: 'Elevation of a curtain wall with one crenel marked, and a round close-up of the gap between two merlons through which defenders could shoot.',
    note: 'CRENEL 600 WIDE · SILL AT THE WALL-WALK LEVEL' },
]

function build(c: BSpec): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const sW = 0.0185
  const ox = 300
  const oy = 270
  const win = { cx: 300, cy: 478, r: 148 }
  const z = zoomInContext(L, {
    id: c.id,
    draw: (T, s, x, y) => drawWall(T, c.kind, s, x, y),
    whole: { scale: sW, ox, oy },
    focus: c.at,
    regionR: c.r,
    window: win,
  })
  const at = (u: number, v: number): Pt => [z.zoom.X(u), z.zoom.Y(v)]
  B.add([ox - (WALL_L / 2) * sW - 4, oy - (WALL_H + MH) * sW - 6], [ox + (WALL_L / 2) * sW + 4, oy + 8], [win.cx - win.r, win.cy - win.r], [win.cx + win.r, win.cy + win.r])
  L.notes.push(text(ox - (WALL_L / 2) * sW, oy + 20, 'CURTAIN WALL · ELEVATION', 'class="t-small"'), text(win.cx, win.cy + win.r + 16, `CLOSE-UP · ×${Math.round(z.zoom.scale / sW)} · ${c.note}`, 'text-anchor="middle" class="t-small"'))

  const m3 = mx(3)
  const items: Array<{ text: string; at: Pt }> = []
  if (c.kind === 'battlement') {
    items.push({ text: 'MERLON', at: at(mx(2) + MW / 2, WALL_H + 900) }, { text: 'CRENEL (GAP)', at: at(mx(2) + MW + CW / 2, WALL_H + 500) }, { text: 'ARROW LOOP', at: at(mx(2) + MW / 2, WALL_H + 600) }, { text: 'WALL WALK LEVEL', at: at(mx(2) - 300, WALL_H) })
    L.dims.push(hDim(z.zoom.Y(WALL_H - 600), z.zoom.X(mx(2)), z.zoom.X(mx(2) + MW), `${MW}`), hDim(z.zoom.Y(WALL_H - 600), z.zoom.X(mx(2) + MW), z.zoom.X(mx(2) + PITCH), `${CW}`))
  } else if (c.kind === 'merlon') {
    items.push({ text: 'MERLON', at: at(m3 + 120, WALL_H + 1000) }, { text: 'ARROW LOOP', at: at(m3 + MW / 2 - 40, WALL_H + 600) }, { text: 'CRENEL (NEXT TO IT)', at: at(m3 + MW + 200, WALL_H + 500) }, { text: 'WALL BELOW', at: at(m3 + 200, WALL_H - 400) })
    L.dims.push(hDim(z.zoom.Y(WALL_H + MH + 260), z.zoom.X(m3), z.zoom.X(m3 + MW), `${MW}`), vDim(z.zoom.X(m3 - 200), z.zoom.Y(WALL_H), z.zoom.Y(WALL_H + MH), `${MH}`, z.zoom.X(m3 - 100)))
  } else {
    const c0 = m3 + MW
    items.push({ text: 'CRENEL (GAP)', at: at(c0 + CW / 2, WALL_H + 700) }, { text: 'MERLON', at: at(m3 + 200, WALL_H + 800) }, { text: 'SILL (WALL-WALK LEVEL)', at: at(c0 + CW / 2, WALL_H) }, { text: 'NEXT MERLON', at: at(c0 + CW + 300, WALL_H + 800) })
    L.dims.push(hDim(z.zoom.Y(WALL_H + MH + 260), z.zoom.X(c0), z.zoom.X(c0 + CW), `${CW}`))
  }
  callouts(L, items.filter((it) => Math.hypot(it.at[0] - win.cx, it.at[1] - win.cy) < win.r - 4), win.cx - win.r - 6)
  return finish({
    id: c.id, title: c.title, subtitle: c.subtitle, view: 'ELEVATION · CLOSE-UP IN CONTEXT', sheetNo: c.sheetNo, source: ORIGINAL,
    scale: { unitPx: 5000 * sW, unitName: '5 m (whole wall)', count: 2 }, description: c.description,
  }, L, B, z.defs)
}

export const BATTLEMENT_SHEETS: Array<() => SheetSpec> = SPECS.map((c) => () => build(c))
