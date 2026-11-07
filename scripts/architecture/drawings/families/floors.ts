/**
 * Floors and paving, drawn in PLAN (the waffle slab as a reflected ceiling
 * plan). Each sheet shows a field of the pattern meeting two walls, which are
 * cut by the plan and drawn in section.
 */
import { type Pt, type SheetSpec, f, path, el, vDim, hDim, text } from '../sheet'
import { newLayers, finish, hatched, circle, line, rect, ring, callouts, Bounds, ORIGINAL, type Layers } from '../kit'

/** Deterministic PRNG so irregular patterns are identical on every build. */
function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Field of floor shown on each sheet
const FX = 200
const FY = 76
const FW = 350
const FH = 350
const WALL = 22

interface Field {
  L: Layers
  B: Bounds
  clipId: string
  defs: string[]
}

/** Floor field with walls (in section) along the top and left edges. */
function field(id: string): Field {
  const L = newLayers()
  const B = new Bounds()
  hatched(L, [[FX - WALL, FY - WALL], [FX + FW, FY - WALL], [FX + FW, FY], [FX, FY], [FX, FY + FH], [FX - WALL, FY + FH]])
  // open edges of the field: broken off
  L.fine.push(el(`M${f(FX + FW)} ${f(FY)}V${f(FY + FH)}H${f(FX)}`, 'stroke-dasharray="8 4"'))
  B.add([FX - WALL, FY - WALL], [FX + FW, FY + FH])
  const clipId = `fld-${id}`
  return { L, B, clipId, defs: [`<clipPath id="${clipId}"><rect x="${FX}" y="${FY}" width="${FW}" height="${FH}"/></clipPath>`] }
}

const meta = (id: string, title: string, subtitle: string, sheetNo: string, description: string, source = ORIGINAL, view = 'PLAN') => ({
  id, title, subtitle, view, sheetNo, source, description,
})

// ---------------------------------------------------------------------------
function parquet(): SheetSpec {
  const F = field('parquet')
  const { L } = F
  const u = 14 // block width (≈ 70 mm at 1:25 → shown schematically)
  const len = 5 * u
  const border = 2 * u
  // border (frieze) of long boards along the walls
  L.fine.push(el(`M${FX + border} ${FY + FH}V${FY + border}H${FX + FW}`))
  for (let k = 1; k < 2; k++) L.shading.push(el(`M${FX + k * u} ${FY + FH}V${FY + k * u}H${FX + FW}`))
  // herringbone field
  const parts: string[] = []
  for (let col = -2; col < FW / (len * Math.SQRT1_2) + 2; col++) {
    for (let row = -2; row < FH / (u * Math.SQRT2) + 4; row++) {
      const ox = FX + border + col * len * Math.SQRT2
      const oy = FY + border + row * u * Math.SQRT2
      // left-leaning block
      const a: Pt[] = [[0, 0], [len, 0], [len, u], [0, u]]
      const rot = (p: Pt, ang: number, dx: number, dy: number): Pt => [
        ox + dx + p[0] * Math.cos(ang) - p[1] * Math.sin(ang),
        oy + dy + p[0] * Math.sin(ang) + p[1] * Math.cos(ang),
      ]
      parts.push(path(a.map((p) => rot(p, Math.PI / 4, 0, 0)), true))
      parts.push(path(a.map((p) => rot(p, -Math.PI / 4, len * Math.SQRT1_2 + u * Math.SQRT1_2, len * Math.SQRT1_2 - u * Math.SQRT1_2 + u * Math.SQRT2)), true))
    }
  }
  F.defs.push(`<clipPath id="pq-in"><rect x="${FX + border}" y="${FY + border}" width="${FW - border}" height="${FH - border}"/></clipPath>`)
  L.fine.push(`<g clip-path="url(#pq-in)"><path d="${parts.join(' ')}"/></g>`)
  // wood grain hint
  const g = rng(7)
  const grain: string[] = []
  for (let i = 0; i < 140; i++) {
    const x = FX + border + g() * (FW - border)
    const y = FY + border + g() * (FH - border)
    const s = g() < 0.5 ? 1 : -1
    grain.push(`M${f(x)} ${f(y)}l${f(9)} ${f(9 * s)}`)
  }
  L.shading.push(`<g clip-path="url(#pq-in)"><path d="${grain.join('')}" stroke-dasharray="2 2"/></g>`)
  L.dims.push(hDim(FY + FH + 22, FX + border, FX + border + len * Math.SQRT1_2 * 2, '2 × BLOCK LENGTH'))
  callouts(L, [
    { text: 'WALL (SECTION)', at: [FX - WALL, FY + 40] },
    { text: 'BORDER (FRIEZE)', at: [FX + u, FY + 140] },
    { text: 'HERRINGBONE FIELD', at: [FX + 80, FY + 200] },
    { text: 'WOOD BLOCK', at: [FX + 60, FY + 300] },
  ], FX - WALL)
  return finish({
    ...meta('parquet', 'Parquet', 'Wood blocks laid in herringbone with a border', 'FLR-01',
      'Plan of a wood block floor laid in a herringbone pattern inside a border of long boards along the walls.'),
    scale: { unitPx: u, unitName: 'block widths', count: 5 },
  }, L, F.B, F.defs.join('\n    '))
}

function flagstone(): SheetSpec {
  const F = field('flagstone')
  const { L } = F
  const g = rng(11)
  const cols = 6
  const rows = 6
  const cw = FW / cols
  const ch = FH / rows
  // jittered grid: shared, displaced corners give irregular four- and five-sided stones
  const P: Pt[][] = []
  for (let i = 0; i <= cols; i++) {
    P.push([])
    for (let j = 0; j <= rows; j++) {
      const edgeX = i === 0 || i === cols
      const edgeY = j === 0 || j === rows
      P[i].push([FX + i * cw + (edgeX ? 0 : (g() - 0.5) * cw * 0.55), FY + j * ch + (edgeY ? 0 : (g() - 0.5) * ch * 0.55)])
    }
  }
  const stones: string[] = []
  const inset = 2.2
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const quad = [P[i][j], P[i + 1][j], P[i + 1][j + 1], P[i][j + 1]]
      // split some cells diagonally for variety
      const polys = g() < 0.3 ? [[quad[0], quad[1], quad[2]], [quad[0], quad[2], quad[3]]] : [quad]
      for (const poly of polys) {
        const cx = poly.reduce((s, p) => s + p[0], 0) / poly.length
        const cy = poly.reduce((s, p) => s + p[1], 0) / poly.length
        const shrunk = poly.map(([x, y]) => {
          const d = Math.hypot(x - cx, y - cy)
          return [x + ((cx - x) / d) * inset, y + ((cy - y) / d) * inset] as Pt
        })
        stones.push(path(shrunk, true))
      }
    }
  }
  L.profile.push(`<g clip-path="url(#${F.clipId})"><path d="${stones.join(' ')}" style="fill: var(--_paper)"/></g>`)
  // stone texture
  const tex: string[] = []
  for (let i = 0; i < 220; i++) tex.push(`M${f(FX + g() * FW)} ${f(FY + g() * FH)}h0.8`)
  L.shading.push(`<g clip-path="url(#${F.clipId})"><path d="${tex.join('')}"/></g>`)
  L.dims.push(hDim(FY + FH + 22, FX, FX + cw * 2, 'c. 1.2 M'))
  callouts(L, [
    { text: 'WALL (SECTION)', at: [FX - WALL, FY + 40] },
    { text: 'FLAGSTONE', at: [FX + cw * 0.5, FY + ch * 2.5] },
    { text: 'OPEN JOINT', at: [P[1][4][0] - 1, P[1][4][1]] },
  ], FX - WALL)
  return finish({
    ...meta('flagstone', 'Flagstone', 'Irregular split stone slabs, random layout', 'FLR-02',
      'Plan of a floor of irregular flat stone slabs of varied shape and size, laid with open joints between them.'),
    scale: { unitPx: cw / 3, unitName: '0.2 m', count: 5 },
  }, L, F.B, F.defs.join('\n    '))
}

function mosaic(): SheetSpec {
  const F = field('mosaic')
  const { L } = F
  const t = 5.2 // tessera
  const band = 34
  const parts: string[] = []
  // meander (Greek key) border
  const mx0 = FX + 8
  const my0 = FY + 8
  const key = 26
  const meanderUnit = (x: number, y: number, horiz: boolean) => {
    const k = key
    const pts: Pt[] = horiz
      ? [[x, y + k], [x, y], [x + k * 0.75, y], [x + k * 0.75, y + k * 0.75], [x + k * 0.25, y + k * 0.75], [x + k * 0.25, y + k * 0.25], [x + k * 0.5, y + k * 0.25], [x + k * 0.5, y + k], [x + k, y + k]]
      : [[x + k, y], [x, y], [x, y + k * 0.75], [x + k * 0.75, y + k * 0.75], [x + k * 0.75, y + k * 0.25], [x + k * 0.25, y + k * 0.25], [x + k * 0.25, y + k * 0.5], [x + k, y + k * 0.5], [x + k, y + k]]
    parts.push(path(pts))
  }
  for (let x = mx0; x < FX + FW - key; x += key) meanderUnit(x, my0, true)
  for (let y = my0 + key; y < FY + FH - key; y += key) meanderUnit(mx0, y, false)
  L.profile.push(`<g clip-path="url(#${F.clipId})"><path d="${parts.join(' ')}"/></g>`)
  L.fine.push(el(`M${FX + FW} ${FY + band + 6}H${FX + band + 6}V${FY + FH}`))
  // field: tessellatum grid as a repeating tile
  const cx = FX + band + 150
  const cy = FY + band + 150
  const R = 92
  const p = t + 1.4
  F.defs.push(`<pattern id="tess" width="${f(p)}" height="${f(p)}" patternUnits="userSpaceOnUse" x="${FX}" y="${FY}"><rect x="0.7" y="0.7" width="${t}" height="${t}" class="ink l-hair"/></pattern>`)
  F.defs.push(`<clipPath id="mos-in"><rect x="${FX + band + 6}" y="${FY + band + 6}" width="${FW - band - 6}" height="${FH - band - 6}"/></clipPath>`)
  L.shading.push(`<g clip-path="url(#mos-in)"><rect x="${FX}" y="${FY}" width="${FW}" height="${FH}" fill="url(#tess)" stroke="none"/></g>`)
  // medallion: paper disc over the grid, then tesserae in concentric rings
  // (each ring = two edge circles + a dashed thick circle whose tiny dashes
  // draw the joints between pieces)
  L.fine.push(`<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(R + 8)}" style="fill: var(--_paper); stroke: none"/>`)
  const rings: string[] = []
  for (let rr = R; rr > 10; rr -= p) {
    const n = Math.floor((2 * Math.PI * rr) / p)
    const gap = (2 * Math.PI * rr) / n
    rings.push(circle([cx, cy], rr + t / 2), `<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(rr)}" stroke-width="${f(t)}" stroke-dasharray="0.45 ${f(gap - 0.45)}"/>`)
  }
  L.fine.push(...rings)
  L.profile.push(circle([cx, cy], R + 5), circle([cx, cy], R * 0.55))
  L.dims.push(hDim(FY + FH + 22, cx - R - 5, cx + R + 5, 'MEDALLION Ø'))
  callouts(L, [
    { text: 'WALL (SECTION)', at: [FX - WALL, FY + 60] },
    { text: 'MEANDER BORDER', at: [mx0, FY + 140] },
    { text: 'TESSERAE (GRID)', at: [FX + band + 12, FY + FH - 40] },
    { text: 'MEDALLION', at: [cx - R - 5, cy] },
    { text: 'TESSERAE (RINGS)', at: [cx - R * 0.55, cy + 10] },
  ], FX - WALL)
  return finish({
    ...meta('mosaic-floor', 'Mosaic Floor', 'Tesserae in grid and in rings, meander border', 'FLR-03',
      'Plan of a mosaic floor made of small square stone pieces: a Greek key border, a background laid in a straight grid, and a central medallion with pieces following concentric rings.'),
    scale: { unitPx: (t + 1.4) * 2, unitName: '2 tesserae', count: 5 },
  }, L, F.B, F.defs.join('\n    '))
}

function opusSectile(): SheetSpec {
  const F = field('sectile')
  const { L } = F
  const cell = 116
  const patterns = ['h-stone', 'h-concrete']
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const x = FX + i * cell
      const y = FY + j * cell
      const c: Pt = [x + cell / 2, y + cell / 2]
      // marble frame square, inner rotated square, central roundel, corner triangles
      L.fine.push(`<g clip-path="url(#${F.clipId})">${el(path(rect(x + 6, y + 6, cell - 12, cell - 12), true))}</g>`)
      const diamond: Pt[] = [[c[0], y + 10], [x + cell - 10, c[1]], [c[0], y + cell - 10], [x + 10, c[1]]]
      const pat = patterns[(i + j) % 2]
      F.L.hatch.push(`<g clip-path="url(#${F.clipId})"><path d="${path(diamond, true)}" fill="url(#${pat})" stroke="none"/></g>`)
      L.profile.push(`<g clip-path="url(#${F.clipId})">${el(path(diamond, true))}</g>`)
      L.profile.push(`<g clip-path="url(#${F.clipId})">${circle(c, cell * 0.2)}</g>`)
      F.L.hatch.push(`<g clip-path="url(#${F.clipId})"><circle cx="${f(c[0])}" cy="${f(c[1])}" r="${f(cell * 0.2)}" fill="url(#h-brick)" stroke="none"/></g>`)
      // rings of small triangles around the roundel
      for (let k = 0; k < 8; k++) {
        const a0 = (k * Math.PI) / 4
        const a1 = a0 + Math.PI / 4
        const r0 = cell * 0.2
        const r1 = cell * 0.28
        L.fine.push(`<g clip-path="url(#${F.clipId})">${el(path([[c[0] + r0 * Math.cos(a0), c[1] + r0 * Math.sin(a0)], [c[0] + r1 * Math.cos((a0 + a1) / 2), c[1] + r1 * Math.sin((a0 + a1) / 2)], [c[0] + r0 * Math.cos(a1), c[1] + r0 * Math.sin(a1)]]))}</g>`)
      }
    }
  }
  const c0: Pt = [FX + cell / 2, FY + cell * 1.5]
  callouts(L, [
    { text: 'WALL (SECTION)', at: [FX - WALL, FY + 40] },
    { text: 'MARBLE FRAME', at: [FX + 6, FY + cell * 1.2] },
    { text: 'SERPENTINE LOZENGE', at: [c0[0] - cell / 2 + 10, c0[1]] },
    { text: 'PORPHYRY ROUNDEL', at: [c0[0] - cell * 0.2, c0[1] + 8] },
  ], FX - WALL)
  L.notes.push(text(FX + FW, FY + FH + 40, 'HATCH = DIFFERENT COLOURED STONES', 'text-anchor="end" class="t-small"'))
  L.dims.push(hDim(FY + FH + 22, FX, FX + cell, 'PANEL'))
  return finish({
    ...meta('opus-sectile', 'Opus Sectile', 'Cut coloured stone inlaid in geometric panels', 'FLR-04',
      'Plan of an inlaid stone floor: square panels each holding a lozenge and a round disc of contrasting stone, framed by bands of marble.'),
    scale: { unitPx: cell / 5, unitName: 'fifths of a panel', count: 5 },
  }, L, F.B, F.defs.join('\n    '))
}

/** Marble chips as a small repeating tile (keeps the file tiny). */
function terrazzoChips(F: Field, seed: number, density = 46) {
  const g = rng(seed)
  const T = 64
  const chips: string[] = []
  for (let i = 0; i < density; i++) {
    const x = g() * T
    const y = g() * T
    const r = 0.8 + g() * 3.2
    const n = 4 + Math.floor(g() * 3)
    const pts: Pt[] = Array.from({ length: n }, (_, k) => {
      const a = (2 * Math.PI * k) / n + g() * 0.6
      const rr = r * (0.7 + g() * 0.5)
      return [x + rr * Math.cos(a), y + rr * Math.sin(a)] as Pt
    })
    chips.push(path(pts, true))
  }
  const id = `chips-${seed}`
  F.defs.push(`<pattern id="${id}" width="${T}" height="${T}" patternUnits="userSpaceOnUse" patternTransform="rotate(17)"><path d="${chips.join('')}" class="ink l-hair"/></pattern>`)
  F.L.shading.push(`<rect x="${FX}" y="${FY}" width="${FW}" height="${FH}" fill="url(#${id})" stroke="none"/>`)
}

function terrazzo(): SheetSpec {
  const F = field('terrazzo')
  const { L } = F
  terrazzoChips(F, 21)
  const step = FW / 3
  for (let k = 1; k < 3; k++) {
    L.profile.push(line([FX + k * step, FY], [FX + k * step, FY + FH]), line([FX, FY + k * step], [FX + FW, FY + k * step]))
  }
  callouts(L, [
    { text: 'WALL (SECTION)', at: [FX - WALL, FY + 40] },
    { text: 'MARBLE CHIPS', at: [FX + 40, FY + 60] },
    { text: 'CEMENT MATRIX', at: [FX + 60, FY + 190] },
    { text: 'DIVIDER STRIP', at: [FX, FY + step] },
  ], FX - WALL)
  L.dims.push(hDim(FY + FH + 22, FX, FX + step, 'BAY BETWEEN STRIPS'))
  return finish({
    ...meta('terrazzo', 'Terrazzo', 'Marble chips in a polished cement matrix', 'FLR-05',
      'Plan of a terrazzo floor: small chips of marble scattered through a cement base, ground smooth, divided into bays by thin metal strips.'),
    scale: { unitPx: step / 5, unitName: 'fifths of a bay', count: 5 },
  }, L, F.B, F.defs.join('\n    '))
}

function terrazzoDeco(): SheetSpec {
  const F = field('terrazzo-deco')
  const { L } = F
  terrazzoChips(F, 33, 36)
  // sunburst fan from the wall corner, stepped bands, chevrons
  const o: Pt = [FX, FY]
  const strips: string[] = []
  for (const r of [110, 190, 270]) strips.push(path(ring(o, r, 0, Math.PI / 2, 40)))
  for (let k = 1; k < 9; k++) {
    const a = (k * Math.PI) / 18
    strips.push(`M${f(o[0] + 110 * Math.cos(a))} ${f(o[1] + 110 * Math.sin(a))}L${f(o[0] + 270 * Math.cos(a))} ${f(o[1] + 270 * Math.sin(a))}`)
  }
  // chevron band near the open edge
  const chev: Pt[] = []
  for (let x = FX; x <= FX + FW; x += 25) chev.push([x, FY + FH - 30 + (((x - FX) / 25) % 2 ? -12 : 12)])
  strips.push(path(chev), path(chev.map(([x, y]) => [x, y - 18] as Pt)))
  L.profile.push(`<g clip-path="url(#${F.clipId})"><path d="${strips.join(' ')}"/></g>`)
  F.L.hatch.push(`<g clip-path="url(#${F.clipId})"><path d="${path([o, ...ring(o, 110, 0, Math.PI / 2, 30)], true)}" fill="url(#h-stone)" stroke="none"/></g>`)
  callouts(L, [
    { text: 'WALL (SECTION)', at: [FX - WALL, FY + 40] },
    { text: 'SUNBURST (DARK AGGREGATE)', at: [FX + 30, FY + 60] },
    { text: 'BRASS DIVIDER STRIPS', at: [FX + 190 * Math.cos(0.9), FY + 190 * Math.sin(0.9)] },
    { text: 'CHEVRON BAND', at: [FX + 25, FY + FH - 42] },
  ], FX - WALL)
  L.dims.push(hDim(FY + FH + 22, FX, FX + 270, 'OUTER RADIUS'))
  return finish({
    ...meta('terrazzo-art-deco', 'Art Deco Terrazzo', 'Sunburst and chevrons set out in brass strips', 'FLR-06',
      'Plan of a 1920s–30s style terrazzo floor: a sunburst fanning out from a corner and a band of chevrons, outlined in brass strips, with chips of marble in the cement.'),
    scale: { unitPx: 54, unitName: 'fifths of outer radius', count: 5 },
  }, L, F.B, F.defs.join('\n    '))
}

function tatami(): SheetSpec {
  // 4.5-mat room: four full mats pinwheeled around a central half mat.
  // Chūkyōma mat 910 × 1820 mm.
  const L = newLayers()
  const B = new Bounds()
  const u = 72 // px per 910 mm
  const room = 3 * u // 2730 mm square
  const x0 = 220
  const y0 = 110
  // walls (section) all round, with tokonoma alcove and opening
  hatched(L, rect(x0 - WALL, y0 - WALL, room + 2 * WALL, WALL))
  hatched(L, rect(x0 - WALL, y0 + room, room + 2 * WALL, WALL))
  hatched(L, rect(x0 - WALL, y0, WALL, room))
  hatched(L, rect(x0 + room, y0, WALL, room * 0.35))
  // sliding fusuma opening on the right wall
  L.fine.push(line([x0 + room, y0 + room * 0.35], [x0 + room, y0 + room]), line([x0 + room + WALL, y0 + room * 0.35], [x0 + room + WALL, y0 + room]))
  L.fine.push(line([x0 + room + 6, y0 + room * 0.4], [x0 + room + 6, y0 + room * 0.7]), line([x0 + room + 14, y0 + room * 0.65], [x0 + room + 14, y0 + room * 0.95]))
  // tokonoma alcove beyond the top wall
  hatched(L, rect(x0 + u * 0.5, y0 - WALL - u * 0.7, 6, u * 0.7))
  hatched(L, rect(x0 + u * 2.3, y0 - WALL - u * 0.7, 6, u * 0.7))
  hatched(L, rect(x0 + u * 0.5, y0 - WALL - u * 0.7 - 6, u * 1.8 + 6, 6))
  L.profile.push(line([x0 + u * 0.5, y0 - WALL], [x0 + u * 2.3 + 6, y0 - WALL]))
  // mats: [x, y, w, h] in units of 910 mm
  const mats: Array<[number, number, number, number]> = [
    [0, 0, 2, 1], [2, 0, 1, 2], [1, 2, 2, 1], [0, 1, 1, 2], [1, 1, 1, 1],
  ]
  mats.forEach(([mx, my, mw, mh], i) => {
    const x = x0 + mx * u
    const y = y0 + my * u
    const w = mw * u
    const h = mh * u
    L.profile.push(el(path(rect(x + 1, y + 1, w - 2, h - 2), true)))
    // heri: cloth edging along the long sides
    const half = i === 4
    if (!half) {
      if (w > h) L.fine.push(line([x + 1, y + 5], [x + w - 1, y + 5]), line([x + 1, y + h - 5], [x + w - 1, y + h - 5]))
      else L.fine.push(line([x + 5, y + 1], [x + 5, y + h - 1]), line([x + w - 5, y + 1], [x + w - 5, y + h - 1]))
    }
    // weave: fine lines across the short direction
    const lines: string[] = []
    if (w > h || half) for (let xx = x + 4; xx < x + w - 2; xx += 3.2) lines.push(`M${f(xx)} ${f(y + 6)}V${f(y + h - 6)}`)
    else for (let yy = y + 4; yy < y + h - 2; yy += 3.2) lines.push(`M${f(x + 6)} ${f(yy)}H${f(x + w - 6)}`)
    L.shading.push(el(lines.join('')))
  })
  B.add([x0 - WALL, y0 - WALL - u * 0.7 - 6], [x0 + room + WALL, y0 + room + WALL])
  L.dims.push(hDim(y0 + room + WALL + 22, x0, x0 + 2 * u, '1820'), hDim(y0 + room + WALL + 22, x0 + 2 * u, x0 + 3 * u, '910'))
  L.dims.push(vDim(x0 + room + WALL + 26, y0, y0 + room, '2730', x0 + room + WALL + 4))
  L.notes.push(text(x0 + room + WALL + 14, y0 + room + WALL + 54, 'DIMENSIONS IN MM', 'class="t-small" text-anchor="end"'))
  callouts(L, [
    { text: 'TOKONOMA (ALCOVE)', at: [x0 + u * 0.5, y0 - WALL - u * 0.35] },
    { text: 'TATAMI MAT', at: [x0 + u * 0.4, y0 + u * 0.5] },
    { text: 'HERI (CLOTH EDGE)', at: [x0 + 5, y0 + u * 1.7] },
    { text: 'HALF MAT', at: [x0 + u * 1.2, y0 + u * 1.5] },
    { text: 'WALL (SECTION)', at: [x0 - WALL, y0 + u * 2.6] },
  ], x0 - WALL)
  return finish({
    ...meta('tatami', 'Tatami', 'Four-and-a-half-mat room · mats never meet four at a corner', 'FLR-07',
      'Plan of a small Japanese room floored with straw mats: four full mats arranged in a pinwheel around a central half mat, with cloth edging on the long sides and an alcove in one wall.',
      'Mat size per the Chūkyōma standard (910 × 1820 mm); traditional 4.5-mat layout. Original drawing by Project Exodus.'),
    scale: { unitPx: u / 2, unitName: '455 mm', count: 4 },
  }, L, B)
}

function herringboneBrick(): SheetSpec {
  const F = field('herringbone-brick')
  const { L } = F
  const bw = 11 // brick width (102.5 mm)
  const bl = 2 * bw + 0.5 // brick length (215 mm): two widths plus a joint
  // soldier-course edging along the walls
  const edging: string[] = []
  for (let x = FX; x < FX + FW; x += bw) edging.push(`M${f(x)} ${FY}V${FY + bl}`)
  for (let y = FY + bl; y < FY + FH; y += bw) edging.push(`M${FX} ${f(y)}H${FX + bl}`)
  L.fine.push(el(edging.join('')), el(`M${FX + FW} ${FY + bl}H${FX + bl}V${FY + FH}`))
  // Herringbone: built as the 90° pattern, then the whole field rotated 45°.
  // With w = brick width and L = 2w, each zig-zag chain k has a horizontal
  // brick [k, k+2]×[k, k+1] and a vertical brick [k+2, k+3]×[k-1, k+1]
  // (in units of w); chains repeat every (2, -2).
  const parts: string[] = []
  const cx = FX + FW / 2
  const cy = FY + FH / 2
  const reach = (FW + FH) / bw
  for (let c = -Math.ceil(reach / 2); c <= Math.ceil(reach / 2); c++) {
    for (let k = -Math.ceil(reach); k <= Math.ceil(reach); k++) {
      const ox = cx + (k + 2 * c) * bw
      const oy = cy + (k - 2 * c) * bw
      if (Math.abs(ox - cx) > FW || Math.abs(oy - cy) > FH) continue
      parts.push(`M${f(ox)} ${f(oy)}h${f(2 * bw)}v${f(bw)}h${f(-2 * bw)}Z`)
      parts.push(`M${f(ox + 2 * bw)} ${f(oy - bw)}h${f(bw)}v${f(2 * bw)}h${f(-bw)}Z`)
    }
  }
  F.defs.push(`<clipPath id="hb-in"><rect x="${FX + bl}" y="${FY + bl}" width="${FW - bl}" height="${FH - bl}"/></clipPath>`)
  L.fine.push(`<g clip-path="url(#hb-in)"><path d="${parts.join('')}" transform="rotate(45 ${f(cx)} ${f(cy)})"/></g>`)
  L.dims.push(hDim(FY + FH + 22, FX, FX + bl, '215'), hDim(FY + FH + 22, FX + bl + 30, FX + bl + 30 + bw, '102.5'))
  L.notes.push(text(FX + FW, FY + FH + 54, 'BRICK 215 × 102.5 MM', 'text-anchor="end" class="t-small"'))
  callouts(L, [
    { text: 'WALL (SECTION)', at: [FX - WALL, FY + 60] },
    { text: 'SOLDIER COURSE EDGING', at: [FX, FY + 160] },
    { text: '45° HERRINGBONE', at: [FX + bl + 60, FY + 240] },
  ], FX - WALL)
  return finish({
    ...meta('herringbone-brick-pattern', 'Herringbone Brick Paving', 'Bricks at 45° in a zig-zag, edged by a soldier course', 'FLR-08',
      'Plan of brick paving laid in a 45-degree herringbone, each brick at right angles to its neighbour, framed by a row of bricks set end-on along the walls.',
      'Standard UK brick 215 × 102.5 mm; 45° herringbone bond. Original drawing by Project Exodus.'),
    scale: { unitPx: bw, unitName: '102.5 mm', count: 5 },
  }, L, F.B, F.defs.join('\n    '))
}

function waffleSlab(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 180
  const y0 = 70
  const pitch = 42 // pan + rib
  const rib = 9
  const n = 9
  const size = n * pitch
  L.fine.push(el(path(rect(x0, y0, size, size), true), 'stroke-dasharray="8 4"'))
  // column with solid head at the centre (and partial ones at corners)
  const cols: Pt[] = [[x0, y0], [x0 + size, y0], [x0, y0 + size], [x0 + size, y0 + size], [x0 + size / 2, y0 + size / 2]]
  const isSolid = (i: number, j: number) =>
    cols.some(([cx, cy]) => Math.abs(x0 + (i + 0.5) * pitch - cx) < pitch * 1.6 && Math.abs(y0 + (j + 0.5) * pitch - cy) < pitch * 1.6)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isSolid(i, j)) continue
      const x = x0 + i * pitch + rib / 2
      const y = y0 + j * pitch + rib / 2
      const w = pitch - rib
      // coffer (pan) with tapered sides: outer edge and smaller inner (top of void)
      L.profile.push(el(path(rect(x, y, w, w), true)))
      L.fine.push(el(path(rect(x + 5, y + 5, w - 10, w - 10), true)))
      L.shading.push(el(`M${f(x)} ${f(y)}L${f(x + 5)} ${f(y + 5)}M${f(x + w)} ${f(y)}L${f(x + w - 5)} ${f(y + 5)}M${f(x + w)} ${f(y + w)}L${f(x + w - 5)} ${f(y + w - 5)}M${f(x)} ${f(y + w)}L${f(x + 5)} ${f(y + w - 5)}`))
    }
  }
  for (const [cx, cy] of cols) {
    const cs = 26
    hatched(L, rect(cx - cs / 2, cy - cs / 2, cs, cs))
  }
  L.center.push(line([x0 - 20, y0 + size / 2], [x0 + size + 20, y0 + size / 2]), line([x0 + size / 2, y0 - 20], [x0 + size / 2, y0 + size + 20]))
  B.add([x0 - 20, y0 - 20], [x0 + size + 20, y0 + size + 20])
  L.dims.push(hDim(y0 + size + 30, x0 + 6 * pitch, x0 + 7 * pitch, 'PITCH'), hDim(y0 + size + 30, x0, x0 + size / 2, 'COLUMN GRID'))
  const c: Pt = [x0 + size / 2, y0 + size / 2]
  callouts(L, [
    { text: 'COFFER (VOID)', at: [x0 + 1.5 * pitch, y0 + 3.5 * pitch] },
    { text: 'RIB', at: [x0 + 1 * pitch, y0 + 4.2 * pitch] },
    { text: 'SOLID HEAD', at: [c[0] - pitch * 1.4, c[1] - pitch * 0.9] },
    { text: 'COLUMN (SECTION)', at: [c[0] - 13, c[1]] },
  ], x0)
  return finish({
    ...meta('waffle-slab', 'Waffle Slab', 'Two-way ribbed concrete slab · solid heads over columns', 'FLR-09',
      'Plan looking up at a concrete floor slab with a grid of square recesses between crossing ribs, left solid around the columns where loads concentrate.',
      ORIGINAL, 'REFLECTED CEILING PLAN'),
    scale: { unitPx: pitch, unitName: 'pitches', count: 3 },
  }, L, B)
}

export const FLOOR_SHEETS: Array<() => SheetSpec> = [parquet, flagstone, mosaic, opusSectile, terrazzo, terrazzoDeco, tatami, herringboneBrick, waffleSlab]
