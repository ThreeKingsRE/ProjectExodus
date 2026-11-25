/**
 * Ceilings in one-point perspective: a view down a room, so the ceiling reads the way you see it,
 * and a close-up window that redraws the same view larger around the ceiling feature, with its
 * place in the room kept on the sheet. Units are millimetres; the room is 4.2 m wide, 6.6 m deep and
 * 2.7 m high, the eye 1.5 m above the floor, and a 2.1 m door on the far wall gives the scale.
 */
import { type Pt, type SheetSpec, f, path, el, text } from '../sheet'
import { newLayers, finish, circle, callouts, zoomInContext, Bounds, ORIGINAL, type Layers } from '../kit'

const W = 4200
const D = 6600
const HC = 2700
const EYE = 1500
const FOC = 3800

type Kind = 'tray' | 'coved' | 'dropped' | 'beams' | 'tented' | 'coffered' | 'rose'

/** Screen units (mm at the near plane) of a room point: x across, y into the room, z up. */
const scr = (x: number, y: number, z: number): Pt => {
  const k = FOC / (FOC + y)
  return [x * k, (z - EYE) * k]
}

/** Draw the room and the ceiling `kind` into `T`, at `s` px per screen unit with the vanishing point at (ox, oy). */
function drawRoom(T: Layers, kind: Kind, s: number, ox: number, oy: number) {
  const P = (x: number, y: number, z: number): Pt => {
    const [u, v] = scr(x, y, z)
    return [ox + u * s, oy - v * s]
  }
  const poly = (pts: Pt[], close = false) => el(path(pts, close))
  const line3 = (a: [number, number, number], b: [number, number, number]) => poly([P(...a), P(...b)])
  const hw = W / 2

  // walls, floor and ceiling edges
  for (const x of [-hw, hw]) {
    T.profile.push(line3([x, 0, 0], [x, D, 0]), line3([x, 0, HC], [x, D, HC]))
  }
  T.profile.push(poly([P(-hw, D, 0), P(hw, D, 0), P(hw, D, HC), P(-hw, D, HC)], true))
  // floorboards run toward the far wall
  for (let i = 1; i < 8; i++) T.fine.push(line3([-hw + (i * W) / 8, 0, 0], [-hw + (i * W) / 8, D, 0]))
  for (let y = 600; y < D; y += 600) T.shading.push(line3([-hw, y, 0], [hw, y, 0]))
  // skirting on the far and side walls
  T.fine.push(poly([P(-hw, D, 120), P(hw, D, 120)]), line3([-hw, 0, 120], [-hw, D, 120]), line3([hw, 0, 120], [hw, D, 120]))
  // a door on the far wall (2.1 m): the human scale of the room
  T.profile.push(poly([P(500, D, 0), P(500, D, 2100), P(1500, D, 2100), P(1500, D, 0)]))
  T.fine.push(poly([P(560, D, 0), P(560, D, 2040), P(1440, D, 2040), P(1440, D, 0)]), circle(P(1380, D, 1000), 1.6))

  const rectAt = (x0: number, x1: number, y0: number, y1: number, z: number, close = true) => poly([P(x0, y0, z), P(x1, y0, z), P(x1, y1, z), P(x0, y1, z)], close)

  switch (kind) {
    case 'tray': {
      const band = 700
      const up = 300
      const x = hw - band
      T.profile.push(rectAt(-x, x, band, D - band, HC)) // the opening in the lower ceiling
      // the raised panel and the step faces you can see (far and both sides)
      T.profile.push(poly([P(-x, band, HC + up), P(-x, D - band, HC + up), P(x, D - band, HC + up), P(x, band, HC + up)]))
      for (const [px, py] of [[-x, D - band], [x, D - band]] as const) T.profile.push(line3([px, py, HC], [px, py, HC + up]))
      T.fine.push(line3([-x, band, HC], [-x, band, HC + up]), line3([x, band, HC], [x, band, HC + up]))
      // crown moulding along the step and a cove-light line on the raised panel
      T.fine.push(rectAt(-x + 120, x - 120, band + 120, D - band - 120, HC + up))
      break
    }
    case 'coved': {
      const r = 350
      // quarter-round: each point (inset t, drop d) on the arc joins the wall to the ceiling
      const arcPts: Array<[number, number]> = Array.from({ length: 9 }, (_, i) => {
        const a = (i / 8) * (Math.PI / 2)
        return [r * (1 - Math.cos(a)), r * (1 - Math.sin(a))]
      })
      const ring = (tInset: number, dz: number) => poly([P(-hw + tInset, 0, HC - dz), P(-hw + tInset, D, HC - dz), P(hw - tInset, D, HC - dz), P(hw - tInset, 0, HC - dz)])
      T.profile.push(ring(0, r), ring(r, 0))
      for (const [t, d] of arcPts.slice(1, -1)) T.fine.push(ring(t, d))
      // the curve in profile on the far wall
      T.profile.push(poly(arcPts.map(([t, d]) => P(-hw + t, D, HC - r + (r - d) * 0 + (d === r ? 0 : 0)))), poly([P(-hw, D, HC - r), P(-hw + r, D, HC)]))
      break
    }
    case 'dropped': {
      const z = HC - 380
      const tile = 600
      // suspended grid, 600 mm tiles
      for (let x = -hw; x <= hw + 1; x += tile) T.profile.push(line3([x, 0, z], [x, D, z]))
      for (let y = 0; y <= D; y += tile) T.profile.push(line3([-hw, y, z], [hw, y, z]))
      // light panels (600 x 1200) set into the grid
      for (const [cx, cy] of [[-1500, 1800], [-1500, 4200], [900, 1800], [900, 4200]] as const) {
        T.fine.push(rectAt(cx, cx + 1200, cy, cy + 600, z - 8))
        T.fine.push(poly([P(cx + 100, cy + 100, z - 8), P(cx + 1100, cy + 100, z - 8)]), poly([P(cx + 100, cy + 500, z - 8), P(cx + 1100, cy + 500, z - 8)]))
      }
      // one tile lifted out: the slab and ducts above show through
      const hx = -300
      const hy = 3000
      T.cut.push(rectAt(hx, hx + tile, hy, hy + tile, z, true))
      T.fine.push(line3([hx, hy + tile, z], [hx, hy + tile, HC]), line3([hx + tile, hy + tile, z], [hx + tile, hy + tile, HC]))
      T.shading.push(rectAt(hx, hx + tile, hy, hy + tile, HC))
      // hangers up to the slab
      for (const [px, py] of [[-1800, 1200], [1800, 1200], [-1800, 3600], [1800, 3600], [-1800, 6000], [1800, 6000]] as const) T.fine.push(line3([px, py, z], [px, py, HC]))
      T.profile.push(rectAt(-hw, hw, 0, D, HC, true))
      break
    }
    case 'beams': {
      const depth = 280
      const bw = 200
      for (let y = 900; y < D; y += 1200) {
        // underside (seen from below) and the face toward you
        T.profile.push(poly([P(-hw, y, HC - depth), P(hw, y, HC - depth), P(hw, y, HC), P(-hw, y, HC)], true))
        T.fine.push(poly([P(-hw, y, HC - depth), P(-hw, y + bw, HC - depth), P(hw, y + bw, HC - depth), P(hw, y, HC - depth)]))
        T.shading.push(line3([-hw, y, HC - depth * 0.5], [hw, y, HC - depth * 0.5]))
      }
      break
    }
    case 'tented': {
      const eave = HC - 350
      const apex = HC + 900
      const cy = D / 2
      const ex = hw - 300
      // perimeter of the tent and the ridges up to the centre
      T.profile.push(rectAt(-ex, ex, 600, D - 600, eave))
      for (const [px, py] of [[-ex, 600], [ex, 600], [ex, D - 600], [-ex, D - 600]] as const) T.profile.push(line3([px, py, eave], [0, cy, apex]))
      // gathers in the cloth
      for (const t of [0.33, 0.66]) {
        for (const [px, py] of [[-ex, 600], [ex, 600], [ex, D - 600], [-ex, D - 600]] as const) T.shading.push(line3([px * t, cy + (py - cy) * t, eave + (apex - eave) * (1 - t) * 0.0 + (apex - eave) * t], [px * (t + 0.2), cy + (py - cy) * (t + 0.2), eave + (apex - eave) * (t + 0.2)]))
      }
      // scalloped valance
      const n = 9
      for (let i = 0; i < n; i++) {
        const x0 = -ex + (i * 2 * ex) / n
        const x1 = -ex + ((i + 1) * 2 * ex) / n
        T.fine.push(poly([P(x0, D - 600, eave), P((x0 + x1) / 2, D - 600, eave - 110), P(x1, D - 600, eave)]))
      }
      T.profile.push(circle(P(0, cy, apex), 4))
      break
    }
    case 'coffered': {
      const cols = 3
      const rows = 5
      const m = 300 // margin
      const cw = (W - 2 * m) / cols
      const cd = (D - 2 * m) / rows
      const rib = 200
      const sink = 220
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x0 = -hw + m + i * cw
          const y0 = m + j * cd
          const a = [x0 + rib / 2, y0 + rib / 2]
          const b = [x0 + cw - rib / 2, y0 + cd - rib / 2]
          T.profile.push(rectAt(a[0], b[0], a[1], b[1], HC))
          T.fine.push(rectAt(a[0] + 90, b[0] - 90, a[1] + 90, b[1] - 90, HC + sink))
          for (const [px, py, qx, qy] of [[a[0], b[1], a[0] + 90, b[1] - 90], [b[0], b[1], b[0] - 90, b[1] - 90], [a[0], a[1], a[0] + 90, a[1] + 90], [b[0], a[1], b[0] - 90, a[1] + 90]] as const) {
            T.fine.push(line3([px, py, HC], [qx, qy, HC + sink]))
          }
          T.fine.push(circle(P((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, HC + sink), 1.2))
        }
      }
      break
    }
    case 'rose': {
      const cy = D / 2 - 500
      const rr = 380
      const circ = (r: number, z = HC) => Array.from({ length: 41 }, (_, i) => P(r * Math.cos((i / 40) * 2 * Math.PI), cy + r * Math.sin((i / 40) * 2 * Math.PI), z))
      T.profile.push(poly(circ(rr)), poly(circ(rr * 0.78)), poly(circ(rr * 0.18)))
      // petals
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * 2 * Math.PI
        const a2 = ((i + 0.5) / 16) * 2 * Math.PI
        T.fine.push(poly([P(rr * 0.2 * Math.cos(a), cy + rr * 0.2 * Math.sin(a), HC), P(rr * 0.5 * Math.cos(a2), cy + rr * 0.5 * Math.sin(a2), HC), P(rr * 0.75 * Math.cos(a), cy + rr * 0.75 * Math.sin(a), HC)]))
      }
      // pendant light: cord, then a cone shade, hung 700 below the ceiling
      const dropZ = HC - 700
      T.profile.push(line3([0, cy, HC], [0, cy, dropZ + 200]))
      const shade = (r: number, z: number) => Array.from({ length: 25 }, (_, i) => P(r * Math.cos((i / 24) * 2 * Math.PI), cy + r * Math.sin((i / 24) * 2 * Math.PI), z))
      T.profile.push(poly(shade(60, dropZ + 200)), poly(shade(230, dropZ)))
      T.profile.push(line3([60, cy, dropZ + 200], [230, cy, dropZ]), line3([-60, cy, dropZ + 200], [-230, cy, dropZ]))
      break
    }
  }
}

interface CeilSpec {
  kind: Kind
  id: string
  title: string
  subtitle: string
  sheetNo: string
  description: string
  /** Where the close-up is centred (room point) and its radius in screen units */
  at: [number, number, number]
  r: number
  labels: Array<{ text: string; p: [number, number, number] }>
  note: string
}

const SPECS: CeilSpec[] = [
  { kind: 'tray', id: 'tray-ceiling', title: 'Tray Ceiling', subtitle: 'Central panel raised above a lower perimeter band', sheetNo: 'CLG-01', at: [-1300, D - 700, HC + 150], r: 520,
    description: 'One-point perspective down a room with a tray ceiling: a lower band around the edge and a raised central panel, with a close-up of the step between them.',
    labels: [{ text: 'RAISED PANEL', p: [0, D - 700, HC + 300] }, { text: 'STEP (300)', p: [-1400, D - 700, HC + 150] }, { text: 'LOWER BAND', p: [-1750, D - 350, HC] }, { text: 'DOOR (2100)', p: [1000, D, 1050] }],
    note: 'LOWER BAND 700 WIDE · STEP 300' },
  { kind: 'coved', id: 'coved-ceiling', title: 'Coved Ceiling', subtitle: 'Concave curve joining wall to ceiling', sheetNo: 'CLG-02', at: [-hw0(), D, HC - 200], r: 600,
    description: 'One-point perspective down a room whose ceiling curves into the walls, with a close-up of the curved cove where the far wall meets the ceiling.',
    labels: [{ text: 'COVE', p: [-hw0() + 120, D, HC - 120] }, { text: 'CEILING', p: [-900, D, HC] }, { text: 'WALL', p: [-hw0(), D, HC - 700] }, { text: 'DOOR (2100)', p: [1000, D, 1050] }],
    note: 'COVE RADIUS 350' },
  { kind: 'dropped', id: 'dropped-ceiling', title: 'Dropped Ceiling', subtitle: 'Suspended grid hiding services below the slab', sheetNo: 'CLG-03', at: [0, 3300, HC - 380], r: 560,
    description: 'One-point perspective down a room with a suspended tile ceiling, one tile lifted out to show the slab above, hangers and light panels.',
    labels: [{ text: 'TILE (600 x 600)', p: [-900, 3000, HC - 380] }, { text: 'TILE LIFTED OUT', p: [0, 3300, HC - 380] }, { text: 'LIGHT PANEL', p: [900, 4200, HC - 388] }, { text: 'HANGER', p: [-1800, 3600, HC - 200] }],
    note: 'GRID 600 · VOID ABOVE ABOUT 380' },
  { kind: 'beams', id: 'exposed-beams', title: 'Exposed Beams', subtitle: 'Structural timbers left visible below the floor above', sheetNo: 'CLG-04', at: [-700, 3300, HC - 140], r: 800,
    description: 'One-point perspective down a room with exposed ceiling beams: each timber shows its underside and the face toward you, with floorboards of the room above running across them.',
    labels: [{ text: 'BEAM (200 x 280)', p: [-900, 2100, HC - 140] }, { text: 'SPACING 1200', p: [900, 3300, HC - 140] }, { text: 'DOOR (2100)', p: [1000, D, 1050] }],
    note: 'BEAMS AT 1200 CENTRES' },
  { kind: 'tented', id: 'tented-ceiling', title: 'Tented Ceiling', subtitle: 'Ceiling shaped like a canopy of fabric', sheetNo: 'CLG-05', at: [0, D / 2, HC + 450], r: 1000,
    description: 'One-point perspective down a room with a tented ceiling: fabric rising from the edges to a central point, with a scalloped valance at the eaves.',
    labels: [{ text: 'RIDGE TO CENTRE', p: [1200, 4500, HC + 100] }, { text: 'CENTRE POINT', p: [0, D / 2, HC + 900] }, { text: 'VALANCE', p: [-600, D - 600, HC - 450] }, { text: 'DOOR (2100)', p: [1000, D, 1050] }],
    note: 'CENTRE RISES 900 ABOVE THE CEILING LINE' },
  { kind: 'coffered', id: 'coffered-ceiling', title: 'Coffered Ceiling', subtitle: 'Grid of sunken panels between crossing beams', sheetNo: 'CLG-07', at: [-300, 4300, HC + 100], r: 760,
    description: 'One-point perspective down a room with a coffered ceiling: rows of sunken square panels between crossing ribs, each with a rosette, receding toward the far wall.',
    labels: [{ text: 'COFFER (SUNKEN PANEL)', p: [-1100, 3300, HC + 110] }, { text: 'RIB', p: [-700, 2100, HC] }, { text: 'ROSETTE', p: [0, 3300, HC + 220] }, { text: 'DOOR (2100)', p: [1000, D, 1050] }],
    note: 'PANELS 1200 x 1200 · SUNK 220' },
  { kind: 'rose', id: 'ceiling-rose', title: 'Ceiling Rose', subtitle: 'Moulded medallion around a light fitting', sheetNo: 'CLG-08', at: [0, D / 2 - 500, HC - 330], r: 460,
    description: 'One-point perspective down a room with a plaster ceiling rose over a pendant light, so the medallion and fitting can be judged against the room and a 2.1 m door.',
    labels: [{ text: 'ROSE (760 DIAMETER)', p: [-300, D / 2 - 500, HC] }, { text: 'PENDANT SHADE', p: [-200, D / 2 - 500, HC - 650] }, { text: 'CORD', p: [0, D / 2 - 500, HC - 350] }, { text: 'DOOR (2100)', p: [1000, D, 1050] }],
    note: 'ROSE 760 · LIGHT HUNG 700 BELOW' },
]
function hw0() { return W / 2 }

function build(c: CeilSpec): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const sW = 0.1
  const ox = 300
  const oy = 214
  const win = { cx: 300, cy: 512, r: 124 }
  const focus = scr(...c.at)
  const z = zoomInContext(L, {
    id: c.id,
    draw: (T, s, x, y) => drawRoom(T, c.kind, s, x, y),
    whole: { scale: sW, ox, oy },
    focus,
    regionR: c.r,
    window: win,
  })
  const [wx, wy] = [(u: number) => z.zoom.X(u), (v: number) => z.zoom.Y(v)]
  const at = (p: [number, number, number]): Pt => {
    const [u, v] = scr(...p)
    return [wx(u), wy(v)]
  }
  B.add([ox - (W / 2) * sW - 4, oy - (HC - EYE) * sW - 6], [ox + (W / 2) * sW + 4, oy + EYE * sW + 4], [win.cx - win.r, win.cy - win.r], [win.cx + win.r, win.cy + win.r])
  L.notes.push(
    text(ox - (W / 2) * sW, oy + EYE * sW + 18, 'VIEW DOWN THE ROOM · ONE-POINT PERSPECTIVE', 'class="t-small"'),
    text(win.cx, win.cy + win.r + 16, `CLOSE-UP · ×${Math.round(z.zoom.scale / sW)} · ${c.note}`, 'text-anchor="middle" class="t-small"'),
  )
  const inside = c.labels.map((l) => ({ text: l.text, at: at(l.p) })).filter((l) => Math.hypot(l.at[0] - win.cx, l.at[1] - win.cy) < win.r - 4)
  callouts(L, inside, win.cx - win.r - 6)
  return finish({
    id: c.id, title: c.title, subtitle: c.subtitle, view: 'ONE-POINT PERSPECTIVE · CLOSE-UP IN CONTEXT', sheetNo: c.sheetNo, source: ORIGINAL,
    scale: { unitPx: 1000 * sW, unitName: 'metres (at the near wall)', count: 3 }, description: c.description,
  }, L, B, z.defs)
}

export const CEILING_SHEETS: Array<() => SheetSpec> = SPECS.map((c) => () => build(c))
void f
