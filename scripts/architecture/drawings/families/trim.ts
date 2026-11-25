/**
 * Interior trim (baseboard, chair rail, dado, wainscot, crown moulding): the whole wall stays on the sheet
 * with the piece marked, and a round window shows a SECTION through the wall at that piece, drawn large, so you
 * can see its profile and how it sits against the wall, the floor or the ceiling. Millimetres, x across, y up from the floor.
 */
import { type Pt, type SheetSpec, f, path, el, vDim, hDim, text } from '../sheet'
import { newLayers, finish, circle, line, rect, callouts, zoomInContext, Bounds, ORIGINAL, type Layers } from '../kit'

type Part = 'baseboard' | 'chair-rail' | 'dado' | 'wainscot' | 'crown-molding'
const ACC = 'style="stroke: var(--_accent)"'

const WALL_W = 3200
const WALL_H = 2700
const RAIL_H = 900
const BASE_H = 150
const CROWN_H = 140

function drawWall(T: Layers, part: Part, s: number, ox: number, oy: number) {
  const X = (u: number) => ox + u * s
  const Y = (v: number) => oy - v * s
  const P = (u: number, v: number): Pt => [X(u), Y(v)]
  const poly = (pts: Array<[number, number]>, close = false) => el(path(pts.map(([u, v]) => P(u, v)), close))
  const rc = (u: number, v: number, w: number, h: number) => poly([[u, v], [u + w, v], [u + w, v + h], [u, v + h]], true)
  const x0 = -WALL_W / 2
  const shade = (pts: Array<[number, number]>, pat: string) => T.hatch.push(`<path d="${path(pts.map(([u, v]) => P(u, v)), true)}" fill="url(#${pat})" stroke="none"/>`)
  const mark = (pts: Array<[number, number]>, pat: string) => {
    shade(pts, pat)
    T.cut.push(`<path d="${path(pts.map(([u, v]) => P(u, v)), true)}" ${ACC}/>`)
  }
  const R = (u: number, v: number, w: number, h: number): Array<[number, number]> => [[u, v], [u + w, v], [u + w, v + h], [u, v + h]]

  T.profile.push(rc(x0, 0, WALL_W, WALL_H))
  // a door gives the human scale
  T.profile.push(rc(600, 0, 900, 2100), rc(570, 0, 960, 2130))
  T.fine.push(rc(650, 60, 380, 920), rc(650, 1040, 380, 960), rc(1070, 60, 380, 920), rc(1070, 1040, 380, 960), circle(P(1420, 1000), 22 * s))

  const baseTop = BASE_H
  const cap = RAIL_H
  // lower zone: panelled (dado) or full panelling (wainscot)
  const lowerTop = part === 'wainscot' ? 1200 : cap
  const lowerPieces: Array<[number, number]>[] = []
  for (let x = x0 + 120; x + 380 <= WALL_W / 2 - 100; x += 440) {
    if (x + 380 > 560 && x < 1560) continue // the door
    lowerPieces.push(R(x, baseTop + 90, 380, lowerTop - baseTop - 180))
  }
  for (const pz of lowerPieces) {
    T.profile.push(poly(pz, true))
    const [[a, b], , [c, d]] = [pz[0], pz[1], pz[2]]
    T.fine.push(rc(a + 30, b + 30, c - a - 60, d - b - 60))
  }
  T.profile.push(poly([[x0, lowerTop], [WALL_W / 2, lowerTop]]))
  // chair rail, baseboard, crown
  const railBox = R(x0, cap - 40, WALL_W, 80)
  const baseBox = R(x0, 0, WALL_W, BASE_H)
  const crownBox = R(x0, WALL_H - CROWN_H, WALL_W, CROWN_H)
  T.profile.push(poly(railBox, true), poly(baseBox, true), poly(crownBox, true))
  T.fine.push(poly([[x0, WALL_H - 40], [WALL_W / 2, WALL_H - 40]]), poly([[x0, BASE_H - 30], [WALL_W / 2, BASE_H - 30]]))
  const wd: Array<[number, number]> = R(x0, BASE_H, WALL_W, lowerTop - BASE_H)
  if (part === 'baseboard') mark(baseBox, 'h-timber')
  if (part === 'chair-rail') mark(railBox, 'h-timber')
  if (part === 'crown-molding') mark(crownBox, 'h-stone')
  if (part === 'dado' || part === 'wainscot') mark(wd, 'h-timber')
  void line
}

interface Section { pts: Array<[number, number]>; pat: string; accent?: boolean }

/** A curve from a to b bulging (convex) or hollow (concave), sampled, millimetres. */
const bend = (a: [number, number], b: [number, number], conv: boolean, n = 8): Array<[number, number]> => {
  const out: Array<[number, number]> = []
  for (let i = 1; i <= n; i++) {
    const t = (i / n) * (Math.PI / 2)
    const dx = b[0] - a[0]
    const dy = b[1] - a[1]
    out.push(conv ? [a[0] + dx * Math.sin(t), a[1] + dy * (1 - Math.cos(t))] : [a[0] + dx * (1 - Math.cos(t)), a[1] + dy * Math.sin(t)])
  }
  return out
}

/** The section through the wall at each piece: x = projection from the wall face (right), y up. Also the extent shown. */
function sectionOf(part: Part): { map?: (v: number) => number; shapes: Section[]; box: [number, number, number, number]; labels: Array<{ text: string; p: [number, number] }>; dims: Array<{ kind: 'v' | 'h'; a: number; b: number; at: number; text: string }>; note: string; wallPat: string } {
  const timber = 'h-timber'
  switch (part) {
    case 'baseboard': {
      const base: Array<[number, number]> = [[0, 0], [22, 0], [22, 100], ...bend([22, 100], [8, 128], true), ...bend([8, 128], [0, 150], false, 4), [0, 150]]
      return {
        shapes: [
          { pts: base, pat: timber, accent: true },
          { pts: [[22, 0], [22, 14], ...bend([22, 14], [36, 0], false, 6).reverse().slice(0, 0), [36, 0]], pat: timber },
        ],
        box: [-60, -40, 120, 200], wallPat: 'h-stone',
        labels: [{ text: 'BASEBOARD (SKIRTING)', p: [22, 60] }, { text: 'MOULDED TOP EDGE', p: [14, 120] }, { text: 'SHOE MOULD', p: [30, 6] }, { text: 'WALL (PLASTER)', p: [-30, 100] }, { text: 'FLOOR', p: [60, -10] }],
        dims: [{ kind: 'v', a: 0, b: 150, at: 70, text: '150' }, { kind: 'h', a: 0, b: 22, at: -18, text: '22' }],
        note: 'SECTION THROUGH THE WALL · BASEBOARD 150 × 22',
      }
    }
    case 'chair-rail': {
      const r: Array<[number, number]> = [[0, 0], [14, 0], ...bend([14, 0], [30, 22], false, 6), [30, 40], ...bend([30, 40], [14, 75], true, 8), [0, 75]]
      return {
        shapes: [{ pts: r, pat: timber, accent: true }],
        box: [-60, -30, 130, 130], wallPat: 'h-stone',
        labels: [{ text: 'CHAIR RAIL', p: [22, 40] }, { text: 'ROUNDED TOP', p: [24, 62] }, { text: 'CAVETTO (HOLLOW)', p: [22, 14] }, { text: 'WALL', p: [-30, 40] }],
        dims: [{ kind: 'v', a: 0, b: 75, at: 52, text: '75' }, { kind: 'h', a: 0, b: 30, at: -14, text: '30' }],
        note: 'SECTION THROUGH THE WALL · RAIL 75 × 30 · ABOUT 900 FROM THE FLOOR',
      }
    }
    case 'crown-molding': {
      const c: Array<[number, number]> = [[0, -140], ...(Array.from({ length: 13 }, (_, i) => { const a = Math.PI - (i / 12) * (Math.PI / 2); return [140 + 140 * Math.cos(a), -140 + 140 * Math.sin(a)] as [number, number] })), [0, 0]]
      return {
        shapes: [{ pts: c, pat: 'h-stone', accent: true }],
        box: [-60, -190, 220, 230], wallPat: 'h-stone',
        labels: [{ text: 'CROWN MOULDING', p: [30, -60] }, { text: 'HOLLOW (COVE) PROFILE', p: [70, -100] }, { text: 'CEILING', p: [120, 20] }, { text: 'WALL', p: [-30, -120] }],
        dims: [{ kind: 'v', a: -140, b: 0, at: -12, text: '140' }, { kind: 'h', a: 0, b: 140, at: 18, text: '140' }],
        note: 'SECTION THROUGH THE WALL · SPRUNG AT 45° BETWEEN WALL AND CEILING',
      }
    }
    case 'dado':
    case 'wainscot': {
      const top = part === 'wainscot' ? 1200 : 900
      const rails: Section[] = [
        { pts: [[0, 0], [22, 0], [22, 100], ...bend([22, 100], [8, 128], true), [0, 150]], pat: timber }, // baseboard
        { pts: [[0, 150], [18, 150], [18, top - 110], [0, top - 110]], pat: timber, accent: true }, // panel backing and frame
        { pts: [[0, top - 70], [34, top - 70], [34, top - 30], ...bend([34, top - 30], [20, top], true, 6), [0, top]], pat: timber, accent: true }, // cap rail
      ]
      // the middle of the panelling is the same all the way up, so it is cut out with a break to keep the profiles large
      const lo = 400
      const hi = top - 250
      const gap = 60
      const map = (v: number) => (v <= lo ? v : v >= hi ? v - (hi - lo - gap) : lo + ((v - lo) / (hi - lo)) * gap)
      return {
        map,
        shapes: rails,
        box: [-230, -100, 560, map(top) + 180], wallPat: 'h-stone',
        labels: [{ text: part === 'wainscot' ? 'WAINSCOT PANELLING' : 'DADO PANEL', p: [18, top / 2] }, { text: part === 'wainscot' ? 'CAP RAIL' : 'DADO (CHAIR) RAIL', p: [30, top - 40] }, { text: 'BASEBOARD', p: [20, 70] }, { text: 'WALL ABOVE', p: [-60, top + 50] }],
        dims: [{ kind: 'v', a: 0, b: top, at: 80, text: `${top}` }],
        note: `SECTION THROUGH THE WALL · ${top} mm HIGH`,
      }
    }
  }
}

const TITLES: Record<Part, [string, string, string, string, [number, number], number]> = {
  dado: ['Dado', 'Lower zone of a wall, below the dado rail', 'INT-01', 'Interior elevation of a room wall with the panelled lower zone below the dado rail marked, and a round section through the wall showing the panel, cap rail and baseboard.', [-1100, 450], 460],
  'chair-rail': ['Chair Rail', 'Moulding at chair-back height', 'INT-02', 'Interior elevation of a room wall with the chair rail marked at about waist height, and a round section through the wall showing its profile.', [-1100, 900], 240],
  baseboard: ['Baseboard', 'Board covering the joint of wall and floor', 'INT-03', 'Interior elevation of a room wall with the baseboard marked at the floor, and a round section through the wall and floor showing its profile.', [-1100, 80], 230],
  'crown-molding': ['Crown Molding', 'Moulding where wall meets ceiling', 'INT-04', 'Interior elevation of a room wall with the crown moulding marked at the ceiling, and a round section showing the hollow moulding sprung between wall and ceiling.', [-1100, 2630], 260],
  wainscot: ['Wainscot', 'Panelled timber lining the lower wall', 'WAL-07', 'Interior elevation of a room wall with timber panelling to chest height marked, and a round section through the wall showing the panelling, cap rail and baseboard.', [-1100, 600], 700],
}

function build(part: Part): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const sW = 0.078
  const ox = 300
  const oy = 280
  const [title, subtitle, sheetNo, description, focus, regionR] = TITLES[part]
  const sec = sectionOf(part)
  const win = { cx: 300, cy: 478, r: 148 }
  // scale the section so its box fills the window
  const [bx0, by0, bx1, by1] = sec.box
  const ds = (win.r * 1.7) / Math.max(bx1 - bx0, by1 - by0)
  const cxm = (bx0 + bx1) / 2
  const cym = (by0 + by1) / 2
  const mapV = sec.map ?? ((v: number) => v)
  const Xd = (u: number) => win.cx + (u - cxm) * ds
  const Yd = (v: number) => win.cy - (mapV(v) - cym) * ds
  const z = zoomInContext(L, {
    id: part,
    draw: (T, s, x, y) => drawWall(T, part, s, x, y),
    whole: { scale: sW, ox, oy },
    focus,
    regionR,
    window: win,
    detail: (T) => {
      const poly = (pts: Array<[number, number]>) => path(pts.map(([u, v]) => [Xd(u), Yd(v)] as Pt), true)
      // wall (plaster, section) on the left of x = 0, floor or ceiling where the piece meets one
      const by1u = sec.map ? (part === 'wainscot' ? 1380 : 1080) : by1 // the top of the wall shown, in real height
      T.hatch.push(`<path d="${poly([[bx0, by0], [0, by0], [0, by1u], [bx0, by1u]])}" fill="url(#${sec.wallPat})" stroke="none"/>`)
      T.cut.push(el(`M${f(Xd(0))} ${f(Yd(by0))}V${f(Yd(by1u))}`), el(`M${f(Xd(bx0))} ${f(Yd(by0))}V${f(Yd(by1u))}`))
      if (part === 'baseboard' || part === 'dado' || part === 'wainscot') {
        T.hatch.push(`<path d="${poly([[0, -60], [bx1, -60], [bx1, 0], [0, 0]])}" fill="url(#h-timber)" stroke="none"/>`)
        T.cut.push(el(`M${f(Xd(0))} ${f(Yd(0))}H${f(Xd(bx1))}`))
      }
      if (part === 'crown-molding') {
        T.hatch.push(`<path d="${poly([[0, 0], [bx1, 0], [bx1, 60], [0, 60]])}" fill="url(#h-concrete)" stroke="none"/>`)
        T.cut.push(el(`M${f(Xd(0))} ${f(Yd(0))}H${f(Xd(bx1))}`))
      }
      if (sec.map) {
        for (const bv of [410, 452]) {
          let d = `M${f(Xd(-40))} ${f(Yd(bv))}`
          for (let k = 1; k <= 8; k++) d += `L${f(Xd(-40 + k * 11))} ${f(Yd(bv) + (k % 2 ? 4 : -4))}`
          T.fine.push(el(d))
        }
      }
      for (const sh of sec.shapes) {
        T.hatch.push(`<path d="${poly(sh.pts)}" fill="url(#${sh.pat})" stroke="none"/>`)
        T.cut.push(`<path d="${poly(sh.pts)}"${sh.accent ? ' ' + ACC : ''}/>`)
      }
    },
  })
  B.add([ox - (WALL_W / 2) * sW - 6, oy - WALL_H * sW - 6], [ox + (WALL_W / 2) * sW + 6, oy + 8], [win.cx - win.r, win.cy - win.r], [win.cx + win.r, win.cy + win.r])
  L.notes.push(text(ox - (WALL_W / 2) * sW, oy + 20, 'WHOLE WALL · ELEVATION', 'class="t-small"'), text(win.cx, win.cy + win.r + 16, sec.note, 'text-anchor="middle" class="t-small"'))
  const at = (p: [number, number]): Pt => [Xd(p[0]), Yd(p[1])]
  const items = sec.labels.map((l) => ({ text: l.text, at: at(l.p) })).filter((l) => Math.hypot(l.at[0] - win.cx, l.at[1] - win.cy) < win.r - 4)
  callouts(L, items, win.cx - win.r - 6)
  for (const d of sec.dims) {
    if (d.kind === 'v') L.dims.push(vDim(Xd(d.at), Yd(d.a), Yd(d.b), d.text, Xd(d.at) - 10))
    else L.dims.push(hDim(Yd(d.at), Xd(d.a), Xd(d.b), d.text))
  }
  void z
  return finish({
    id: part, title, subtitle, view: 'ELEVATION · SECTION CLOSE-UP IN CONTEXT', sheetNo, source: ORIGINAL,
    scale: { unitPx: 500 * sW, unitName: '500 mm (whole wall)', count: 3 }, description,
  }, L, B, z.defs)
}

export const TRIM_SHEETS: Array<() => SheetSpec> = (['dado', 'chair-rail', 'baseboard', 'crown-molding', 'wainscot'] as Part[]).map((p) => () => build(p))
void rect
