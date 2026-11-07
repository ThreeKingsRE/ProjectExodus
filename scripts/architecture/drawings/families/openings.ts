/**
 * Windows and doors.
 *
 * Mostly ELEVATION; clerestory and oriel in SECTION (their point is where they
 * sit); deep window recess, pocket and revolving doors in PLAN. Parts of a
 * window or door (mullion, transom, tympanum, architrave) share a drawing with
 * the subject highlighted.
 */
import { type Pt, type SheetSpec, f, path, el, vDim, hDim, text } from '../sheet'
import { newLayers, finish, hatched, masked, circle, line, rect, ring, callouts, arrow, courses, Bounds, ORIGINAL, type Layers } from '../kit'

const ACCENT = 'style="stroke: var(--_accent)"'

function hl(L: Layers, poly: Pt[], pattern = 'h-stone') {
  L.hatch.push(`<path d="${path(poly, true)}" fill="url(#${pattern})" stroke="none"/>`)
  L.cut.push(`<path d="${path(poly, true)}" ${ACCENT}/>`)
}

/** Ashlar wall behind an opening; returns the clip def. */
function wallBehind(L: Layers, id: string, x0: number, y0: number, x1: number, y1: number, hole: Pt[]) {
  const defs = courses(L, `w-${id}`, [[x0, y0], [x1, y0], [x1, y1], [x0, y1]], 0, 18)
  masked(L, hole, 'shading')
  L.fine.push(el(path([[x0, y0], [x1, y0], [x1, y1], [x0, y1]], true), 'stroke-dasharray="2 4"'))
  return defs
}

/** Glazing grid inside a rectangle. */
function glazing(L: Layers, x: number, y: number, w: number, h: number, cols: number, rows: number, layer: 'fine' | 'profile' = 'fine') {
  const d: string[] = []
  for (let i = 1; i < cols; i++) d.push(`M${f(x + (w * i) / cols)} ${f(y)}V${f(y + h)}`)
  for (let j = 1; j < rows; j++) d.push(`M${f(x)} ${f(y + (h * j) / rows)}H${f(x + w)}`)
  if (d.length) L[layer].push(el(d.join('')))
}

const meta = (id: string, title: string, subtitle: string, view: string, sheetNo: string, description: string, unitPx: number, unitName: string, source = ORIGINAL) =>
  ({ id, title, subtitle, view, sheetNo, description, source, scale: { unitPx, unitName, count: 4 } })

// ---------------------------------------------------------------------------
function sash(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const w = 150
  const h = 300
  const top = 120
  const x = cx - w / 2
  const hole = rect(x - 10, top - 10, w + 20, h + 30)
  const defs = wallBehind(L, 'sash', cx - 210, top - 60, cx + 210, top + h + 80, hole)
  L.profile.push(el(path(rect(x - 10, top - 10, w + 20, h + 20), true)), el(path(rect(x, top, w, h), true)))
  // upper sash (outer track) and lower sash (inner), meeting rail
  const mid = top + h / 2
  L.profile.push(el(path(rect(x + 6, top + 6, w - 12, h / 2 - 2), true)), el(path(rect(x + 6, mid - 4, w - 12, h / 2 - 2), true)))
  hl(L, rect(x + 6, mid - 6, w - 12, 10), 'h-timber')
  glazing(L, x + 12, top + 12, w - 24, h / 2 - 14, 3, 2)
  glazing(L, x + 12, mid + 8, w - 24, h / 2 - 20, 3, 2)
  L.profile.push(el(path(rect(x - 20, top + h + 10, w + 40, 12), true))) // sill
  arrow(L, [cx + w / 2 + 30, mid + 40], [cx + w / 2 + 30, mid - 10])
  arrow(L, [cx + w / 2 + 44, mid - 40], [cx + w / 2 + 44, mid + 10])
  L.notes.push(text(cx + w / 2 + 52, mid + 4, 'SLIDE', 'class="t-small t-accent"'))
  B.add([cx - 210, top - 60], [cx + 210, top + h + 80])
  L.dims.push(hDim(top + h + 50, x, x + w, 'WIDTH'))
  callouts(L, [
    { text: 'UPPER SASH', at: [x + 6, top + 40] },
    { text: 'GLAZING BAR', at: [x + 12 + (w - 24) / 3, top + 60] },
    { text: 'MEETING RAIL', at: [x + 6, mid] },
    { text: 'LOWER SASH', at: [x + 6, mid + 80] },
    { text: 'SILL', at: [x - 20, top + h + 16] },
  ], cx - 210)
  return finish(meta('sash-window', 'Sash Window', 'Two sashes sliding vertically past each other', 'ELEVATION', 'WIN-01',
    'Elevation of a tall window of two glazed frames, each divided into six panes, that slide up and down past each other in the frame.', w / 4, 'quarters of width'), L, B, defs)
}

function casement(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const w = 200
  const h = 240
  const top = 140
  const x = cx - w / 2
  const defs = wallBehind(L, 'cas', cx - 210, top - 60, cx + 210, top + h + 80, rect(x - 10, top - 10, w + 20, h + 30))
  L.profile.push(el(path(rect(x - 10, top - 10, w + 20, h + 20), true)))
  for (const s of [0, 1]) {
    const lx = x + s * (w / 2)
    L.profile.push(el(path(rect(lx + 4, top + 4, w / 2 - 8, h - 8), true)))
    glazing(L, lx + 10, top + 10, w / 2 - 20, h - 20, 2, 3)
    // opening convention: dashed lines meet at the hinge side
    const hingeX = s === 0 ? lx + 4 : lx + w / 2 - 4
    const freeX = s === 0 ? lx + w / 2 - 4 : lx + 4
    L.center.push(el(`M${f(freeX)} ${top + 4}L${f(hingeX)} ${top + h / 2}L${f(freeX)} ${top + h - 4}`))
    L.profile.push(el(path(rect(hingeX - 2, top + 30, 4, 14), true)), el(path(rect(hingeX - 2, top + h - 44, 4, 14), true)))
  }
  L.profile.push(el(path(rect(x - 20, top + h + 10, w + 40, 12), true)))
  B.add([cx - 210, top - 60], [cx + 210, top + h + 80])
  L.dims.push(hDim(top + h + 50, x, x + w, 'WIDTH'))
  L.notes.push(text(cx, top + h + 74, 'DASHED LINES POINT TO THE HINGES', 'text-anchor="middle" class="t-small t-accent"'))
  callouts(L, [
    { text: 'FRAME', at: [x - 10, top + 20] },
    { text: 'HINGE', at: [x + 2, top + 37] },
    { text: 'CASEMENT (LEAF)', at: [x + 4, top + h / 2 + 40] },
    { text: 'SWING INDICATION', at: [x + w / 4, top + h / 4] },
  ], cx - 210)
  return finish(meta('casement-window', 'Casement Window', 'Side-hinged leaves opening like doors', 'ELEVATION', 'WIN-02',
    'Elevation of a window with two glazed leaves hinged at their outer edges, with the drafting convention of dashed lines pointing to the hinge side.', w / 4, 'quarters of width'), L, B, defs)
}

function shutters(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const w = 120
  const h = 220
  const top = 150
  const x = cx - w / 2
  const defs = wallBehind(L, 'sh', cx - 220, top - 60, cx + 220, top + h + 80, rect(x - 8 - w / 2, top - 10, 2 * w + 16, h + 30))
  L.profile.push(el(path(rect(x, top, w, h), true)))
  glazing(L, x + 6, top + 6, w - 12, h - 12, 2, 4)
  for (const s of [-1, 1]) {
    const sx = s < 0 ? x - w / 2 - 6 : x + w + 6
    hl(L, rect(sx, top, w / 2, h), 'h-timber')
    for (let y = top + 10; y < top + h - 6; y += 7) L.fine.push(line([sx + 6, y], [sx + w / 2 - 6, y + 3]))
    L.profile.push(el(path(rect(sx + 4, top + h / 2 - 3, w / 2 - 8, 6), true)))
  }
  L.profile.push(el(path(rect(x - w / 2 - 10, top + h + 2, 2 * w + 20, 10), true)))
  B.add([cx - 220, top - 60], [cx + 220, top + h + 80])
  L.dims.push(hDim(top + h + 40, x - w / 2 - 6, x - 6, 'LEAF'))
  callouts(L, [
    { text: 'LOUVRED SHUTTER', at: [x - w / 2 - 6, top + 40] },
    { text: 'MID RAIL', at: [x - w / 2 - 2, top + h / 2] },
    { text: 'WINDOW', at: [x + 6, top + h - 40] },
  ], cx - 220)
  return finish(meta('window-shutter', 'Window Shutter', 'Hinged louvred leaves folded beside a window', 'ELEVATION', 'WIN-03',
    'Elevation of a window flanked by a pair of hinged louvred panels, opened back against the wall on either side.', w / 4, 'quarters of window'), L, B, defs)
}

function palladian(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const cw = 110
  const sw = 50
  const base = 470
  const imp = 320
  const outer: Pt[] = [[cx - cw / 2 - sw - 20, base], [cx - cw / 2 - sw - 20, imp - 16], [cx - cw / 2 - 6, imp - 16], [cx - cw / 2 - 6, imp], ...ring([cx, imp], cw / 2 + 6, Math.PI, 2 * Math.PI, 30), [cx + cw / 2 + 6, imp - 16], [cx + cw / 2 + sw + 20, imp - 16], [cx + cw / 2 + sw + 20, base]]
  const defs = wallBehind(L, 'pal', cx - 200, imp - 140, cx + 200, base + 40, outer)
  // central arched light
  L.profile.push(el(path([[cx - cw / 2, base], [cx - cw / 2, imp], ...ring([cx, imp], cw / 2, Math.PI, 2 * Math.PI, 30), [cx + cw / 2, base]])))
  L.profile.push(el(path(ring([cx, imp], cw / 2 + 14, Math.PI, 2 * Math.PI, 30))))
  L.profile.push(el(path(rect(cx - 9, imp - cw / 2 - 18, 18, 22), true)))
  glazing(L, cx - cw / 2 + 6, imp, cw - 12, base - imp - 6, 3, 5)
  // side lights under a small entablature, divided by columns
  for (const s of [-1, 1]) {
    const x0 = s < 0 ? cx - cw / 2 - sw - 14 : cx + cw / 2 + 14
    L.profile.push(el(path(rect(x0, imp - 2, sw, base - imp + 2), true)))
    glazing(L, x0 + 5, imp + 4, sw - 10, base - imp - 10, 2, 5)
    L.profile.push(el(path(rect(x0 - 8, imp - 16, sw + 16, 14), true)))
    for (const colX of [x0 - 6, x0 + sw + 6]) {
      L.profile.push(el(path(rect(colX - 5, imp, 10, base - imp), true)))
      L.fine.push(el(path(rect(colX - 7, imp, 14, 6), true)), el(path(rect(colX - 7, base - 6, 14, 6), true)))
    }
  }
  L.profile.push(el(path(rect(cx - cw / 2 - sw - 30, base, cw + 2 * sw + 60, 12), true)))
  B.add([cx - 200, imp - 140], [cx + 200, base + 40])
  L.dims.push(hDim(base + 32, cx - cw / 2, cx + cw / 2, 'CENTRAL LIGHT'))
  callouts(L, [
    { text: 'KEYSTONE', at: [cx - 9, imp - cw / 2 - 8] },
    { text: 'ARCHIVOLT', at: [cx - (cw / 2 + 14) * 0.7, imp - (cw / 2 + 14) * 0.7] },
    { text: 'ENTABLATURE', at: [cx - cw / 2 - sw - 22, imp - 9] },
    { text: 'SIDE LIGHT', at: [cx - cw / 2 - sw - 14, imp + 60] },
    { text: 'COLUMN', at: [cx - cw / 2 - sw - 25, imp + 110] },
  ], cx - 220)
  return finish(meta('palladian-window', 'Palladian Window', 'Arched centre light flanked by two flat-topped lights', 'ELEVATION', 'WIN-04',
    'Elevation of a three-part window: a tall round-arched opening in the centre, flanked by two narrower square-headed openings beneath a small entablature carried on columns.', 20, 'unit (indicative)',
    'Serliana form published by Sebastiano Serlio (1537) and popularised by Andrea Palladio. Original drawing by Project Exodus.'), L, B, defs)
}

function lunette(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const r = 130
  const sy = 360
  const half = ring([cx, sy], r, Math.PI, 2 * Math.PI, 40)
  const defs = wallBehind(L, 'lun', cx - 210, sy - r - 60, cx + 210, sy + 120, [...ring([cx, sy], r + 16, Math.PI, 2 * Math.PI, 40), [cx + r + 16, sy + 4], [cx - r - 16, sy + 4]])
  L.profile.push(el(path([...half, [cx - r, sy]], true)), el(path(ring([cx, sy], r + 14, Math.PI, 2 * Math.PI, 40))))
  // radiating glazing bars from a small hub (fanlight)
  L.profile.push(el(path(ring([cx, sy], 26, Math.PI, 2 * Math.PI, 20))))
  for (let k = 1; k < 8; k++) {
    const a = Math.PI + (k * Math.PI) / 8
    L.fine.push(line([cx + 26 * Math.cos(a), sy + 26 * Math.sin(a)], [cx + r * Math.cos(a), sy + r * Math.sin(a)]))
  }
  L.fine.push(el(path(ring([cx, sy], r * 0.62, Math.PI, 2 * Math.PI, 30))))
  // door below (indicative)
  L.fine.push(el(path(rect(cx - r, sy + 8, 2 * r, 112), true), 'stroke-dasharray="6 4"'))
  L.notes.push(text(cx, sy + 70, 'DOOR BELOW', 'text-anchor="middle" class="t-small"'))
  B.add([cx - 210, sy - r - 60], [cx + 210, sy + 120])
  L.dims.push(hDim(sy - r - 34, cx - r, cx + r, 'SPAN'))
  callouts(L, [
    { text: 'ARCHED SURROUND', at: [cx - (r + 14) * 0.9, sy - (r + 14) * 0.44] },
    { text: 'RADIATING BARS', at: [cx - r * 0.5, sy - r * 0.5] },
    { text: 'HUB', at: [cx - 26, sy - 4] },
  ], cx - 210)
  return finish(meta('lunette', 'Lunette', 'Half-moon window or panel', 'ELEVATION', 'WIN-05',
    'Elevation of a semicircular window over a doorway, its glass divided by bars radiating like a fan from a small half-round hub.', r / 4, 'quarters of radius'), L, B, defs)
}

function roseWindow(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [370, 290]
  const R = 170
  const defs = wallBehind(L, 'rose', c[0] - 200, c[1] - 200, c[0] + 200, c[1] + 200, ring(c, R + 12, 0, 2 * Math.PI, 72))
  L.profile.push(circle(c, R + 12), circle(c, R), circle(c, 50), circle(c, 22))
  const n = 12
  for (let k = 0; k < n; k++) {
    const a = (k * 2 * Math.PI) / n
    // radiating spoke (colonnette)
    L.profile.push(line([c[0] + 50 * Math.cos(a), c[1] + 50 * Math.sin(a)], [c[0] + R * 0.72 * Math.cos(a), c[1] + R * 0.72 * Math.sin(a)]))
    // trefoil-headed light between spokes, and a circular foil at the rim
    const am = a + Math.PI / n
    const p = (r: number, da = 0): Pt => [c[0] + r * Math.cos(am + da), c[1] + r * Math.sin(am + da)]
    L.fine.push(el(`M${f(p(56, -0.18)[0])} ${f(p(56, -0.18)[1])}L${f(p(R * 0.62, -0.17)[0])} ${f(p(R * 0.62, -0.17)[1])}Q${f(p(R * 0.74)[0])} ${f(p(R * 0.74)[1])} ${f(p(R * 0.62, 0.17)[0])} ${f(p(R * 0.62, 0.17)[1])}L${f(p(56, 0.18)[0])} ${f(p(56, 0.18)[1])}`))
    L.profile.push(circle(p(R * 0.87), R * 0.11))
    for (let q = 0; q < 4; q++) L.fine.push(circle([p(R * 0.87)[0] + R * 0.045 * Math.cos((q * Math.PI) / 2), p(R * 0.87)[1] + R * 0.045 * Math.sin((q * Math.PI) / 2)], R * 0.045))
  }
  for (let q = 0; q < 6; q++) L.fine.push(circle([c[0] + 11 * Math.cos((q * Math.PI) / 3), c[1] + 11 * Math.sin((q * Math.PI) / 3)], 9))
  B.add([c[0] - 200, c[1] - 200], [c[0] + 200, c[1] + 200])
  L.dims.push(hDim(c[1] + R + 34, c[0] - R, c[0] + R, 'DIAMETER'))
  callouts(L, [
    { text: 'OUTER RING', at: [c[0] - R - 12, c[1] + 20] },
    { text: 'QUATREFOIL ROUNDEL', at: [c[0] - R * 0.87 * Math.cos(0.26) - R * 0.11, c[1] - R * 0.87 * Math.sin(0.26)] },
    { text: 'LANCET LIGHT', at: [c[0] - R * 0.45, c[1] - 40] },
    { text: 'SPOKE', at: [c[0] - R * 0.5, c[1] + 4] },
    { text: 'HUB', at: [c[0] - 50, c[1] + 10] },
  ], c[0] - 200)
  return finish(meta('rose-window', 'Rose Window', 'Great circular window with radiating tracery', 'ELEVATION', 'WIN-06',
    'Elevation of a large round Gothic window whose stone tracery radiates from a central hub like the spokes of a wheel, with pointed lights between the spokes and four-lobed roundels around the rim.', R / 5, 'fifths of radius'), L, B, defs)
}

function tracery(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const w = 180
  const sill = 500
  const spring = 280
  // equilateral pointed head
  const head = (x0: number, x1: number, y: number): Pt[] => {
    const s = x1 - x0
    const left = ring([x1, y], s, Math.PI, Math.PI + Math.PI / 3, 20)
    const right = ring([x0, y], s, -Math.PI / 3, 0, 20)
    return [...left, ...right]
  }
  const outer: Pt[] = [[cx - w / 2, sill], [cx - w / 2, spring], ...head(cx - w / 2, cx + w / 2, spring), [cx + w / 2, sill]]
  const defs = wallBehind(L, 'tr', cx - 200, spring - w - 40, cx + 200, sill + 30, [...outer.map(([x, y]) => [x + (x < cx ? -12 : 12), y] as Pt)])
  L.profile.push(el(path(outer)))
  L.profile.push(el(path(outer.map(([x, y]) => [x + (x < cx ? -12 : 12), y - (y < spring ? 10 : 0)] as Pt))))
  // two lancets
  const lw = (w - 20) / 2
  for (const s of [0, 1]) {
    const x0 = cx - w / 2 + 6 + s * (lw + 8)
    L.profile.push(el(path([[x0, sill], [x0, spring + 10], ...head(x0, x0 + lw, spring + 10), [x0 + lw, sill]])))
    L.fine.push(line([x0, sill - 90], [x0 + lw, sill - 90]))
  }
  hl(L, rect(cx - 4, spring + 10, 8, sill - spring - 10))
  // circle with quatrefoil in the head
  const oc: Pt = [cx, spring - w * 0.36]
  L.profile.push(circle(oc, w * 0.2))
  for (let q = 0; q < 4; q++) L.fine.push(circle([oc[0] + w * 0.08 * Math.cos((q * Math.PI) / 2 + Math.PI / 4), oc[1] + w * 0.08 * Math.sin((q * Math.PI) / 2 + Math.PI / 4)], w * 0.08))
  L.profile.push(el(path(rect(cx - w / 2 - 20, sill, w + 40, 12), true)))
  B.add([cx - 200, spring - w - 40], [cx + 200, sill + 30])
  L.dims.push(hDim(sill + 30, cx - w / 2, cx + w / 2, 'OPENING'))
  callouts(L, [
    { text: 'QUATREFOIL IN OCULUS', at: [oc[0] - w * 0.2, oc[1]] },
    { text: 'BAR TRACERY', at: [cx - w / 2 + 20, spring - 20] },
    { text: 'LANCET', at: [cx - w / 2 + 6, spring + 80] },
    { text: 'CENTRAL MULLION', at: [cx - 4, spring + 150] },
    { text: 'TRANSOM BAR', at: [cx - w / 2 + 6, sill - 90] },
  ], cx - 200)
  return finish(meta('tracery', 'Tracery', 'Stone ribs dividing the head of a Gothic window', 'ELEVATION', 'WIN-07',
    'Elevation of a pointed Gothic window divided by a central stone bar into two pointed lights, with a circle holding a four-lobed shape in the head above them.', w / 4, 'quarters of opening'), L, B, defs)
}

function crossWindow(part: 'mullion' | 'transom'): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const w = 180
  const h = 260
  const top = 140
  const x = cx - w / 2
  const tr = top + h * 0.32
  const defs = wallBehind(L, `x-${part}`, cx - 210, top - 60, cx + 210, top + h + 80, rect(x - 14, top - 14, w + 28, h + 28))
  L.profile.push(el(path(rect(x - 14, top - 14, w + 28, h + 28), true)), el(path(rect(x, top, w, h), true)))
  const mullion = rect(cx - 7, top, 14, h)
  const transom = rect(x, tr - 7, w, 14)
  if (part === 'mullion') hl(L, mullion)
  else L.profile.push(el(path(mullion, true)))
  if (part === 'transom') hl(L, transom)
  else L.profile.push(el(path(transom, true)))
  // leaded lights in each quarter
  for (const [qx, qy, qw, qh] of [[x + 4, top + 4, w / 2 - 15, tr - top - 15], [cx + 11, top + 4, w / 2 - 15, tr - top - 15], [x + 4, tr + 11, w / 2 - 15, top + h - tr - 15], [cx + 11, tr + 11, w / 2 - 15, top + h - tr - 15]]) {
    const d: string[] = []
    for (let k = -10; k < 20; k++) d.push(`M${f(qx + k * 14)} ${f(qy)}l${f(qh)} ${f(qh)}`, `M${f(qx + k * 14 + qh)} ${f(qy)}l${f(-qh)} ${f(qh)}`)
    L.shading.push(`<g clip-path="url(#q-${part}-${qx}-${qy})"><path d="${d.join('')}"/></g>`)
    L.fine.push(el(path(rect(qx, qy, qw, qh), true)))
  }
  const clips = [[x + 4, top + 4, w / 2 - 15, tr - top - 15], [cx + 11, top + 4, w / 2 - 15, tr - top - 15], [x + 4, tr + 11, w / 2 - 15, top + h - tr - 15], [cx + 11, tr + 11, w / 2 - 15, top + h - tr - 15]]
    .map(([qx, qy, qw, qh]) => `<clipPath id="q-${part}-${qx}-${qy}"><rect x="${qx}" y="${qy}" width="${qw}" height="${qh}"/></clipPath>`).join('')
  L.profile.push(el(path(rect(x - 24, top + h + 14, w + 48, 12), true)))
  B.add([cx - 210, top - 60], [cx + 210, top + h + 80])
  L.dims.push(hDim(top + h + 50, x, x + w, 'OPENING'))
  callouts(L, [
    { text: 'STONE SURROUND', at: [x - 14, top + 30] },
    { text: 'TRANSOM', at: [x, tr] },
    { text: 'LEADED LIGHT', at: [x + 20, tr + 60] },
    { text: 'MULLION', at: [cx - 7, top + h - 40] },
    { text: 'SILL', at: [x - 24, top + h + 20] },
  ], cx - 210)
  return part === 'mullion'
    ? finish(meta('mullion', 'Mullion', 'Vertical bar dividing a window', 'ELEVATION', 'WIN-08',
        'Elevation of a stone cross-window with the upright bar dividing the opening into two highlighted.', w / 4, 'quarters of opening'), L, B, defs + clips)
    : finish(meta('transom', 'Transom', 'Horizontal bar dividing a window', 'ELEVATION', 'WIN-09',
        'Elevation of a stone cross-window with the horizontal bar dividing the opening into upper and lower lights highlighted.', w / 4, 'quarters of opening'), L, B, defs + clips)
}

function stainedGlass(kind: 'stained-glass' | 'stained-glass-nouveau'): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const w = 160
  const top = 100
  const bot = 500
  const spring = top + w / 2
  const outline: Pt[] = kind === 'stained-glass'
    ? [[cx - w / 2, bot], [cx - w / 2, spring], ...ring([cx + w / 2, spring], w, Math.PI, Math.PI + Math.PI / 3, 16), ...ring([cx - w / 2, spring], w, -Math.PI / 3, 0, 16), [cx + w / 2, bot]]
    : [[cx - w / 2, bot], [cx - w / 2, top + 20], [cx - w / 2 + 20, top], [cx + w / 2 - 20, top], [cx + w / 2, top + 20], [cx + w / 2, bot]]
  const clipId = `sg-${kind}`
  const defs = `<clipPath id="${clipId}"><path d="${path(outline, true)}"/></clipPath>`
  L.profile.push(el(path(outline, true)))
  L.profile.push(el(path(outline.map(([x, y]) => [x + (x < cx ? -12 : 12), y - (y < bot ? 10 : 0)] as Pt))))
  const lead: string[] = []
  if (kind === 'stained-glass') {
    // irregular pieces held in lead cames, with iron saddle bars across
    let seed = 5
    const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280)
    for (let y = top + 20; y < bot; y += 34) {
      const pts: Pt[] = []
      for (let x = cx - w / 2; x <= cx + w / 2 + 1; x += 20) pts.push([x, y + (rnd() - 0.5) * 16])
      lead.push(path(pts))
    }
    for (let x = cx - w / 2 + 22; x < cx + w / 2; x += 26) {
      const pts: Pt[] = []
      for (let y = top; y <= bot; y += 24) pts.push([x + (rnd() - 0.5) * 14, y])
      lead.push(path(pts))
    }
    // a figure medallion
    lead.push(path(ring([cx, 300], 48, 0, 2 * Math.PI, 40), true), path(ring([cx, 280], 14, 0, 2 * Math.PI, 20), true), `M${cx - 18} 340Q${cx} 300 ${cx + 18} 340`)
    for (let y = top + 80; y < bot; y += 80) L.profile.push(line([cx - w / 2 - 12, y], [cx + w / 2 + 12, y], 'stroke-width="2.4"'))
  } else {
    // Art Nouveau: whiplash stems rising to stylised tulips, organic lead lines
    for (const s of [-1, 1]) {
      lead.push(`M${cx + s * 10} ${bot}C${cx + s * 60} 420 ${cx - s * 50} 320 ${cx + s * 30} 230`)
      lead.push(`M${cx + s * 30} 230c${s * -20} -20 ${s * -20} -50 0 -64c${s * 20} 14 ${s * 20} 44 0 64z`)
      lead.push(`M${cx + s * 22} 340q${s * 40} -10 ${s * 50} -40q${s * -40} 0 ${s * -50} 40z`)
    }
    lead.push(`M${cx - w / 2} 200Q${cx} 140 ${cx + w / 2} 200`, `M${cx - w / 2} 440Q${cx} 400 ${cx + w / 2} 450`)
    lead.push(path(ring([cx, 150], 26, 0, 2 * Math.PI, 30), true))
    for (let k = 0; k < 12; k++) {
      const a = (k * Math.PI) / 6
      lead.push(`M${f(cx + 26 * Math.cos(a))} ${f(150 + 26 * Math.sin(a))}L${f(cx + 46 * Math.cos(a))} ${f(150 + 46 * Math.sin(a))}`)
    }
  }
  L.profile.push(`<g clip-path="url(#${clipId})"><path d="${lead.join(' ')}" stroke-width="1.6"/></g>`)
  // colour key by hatch in a few pieces
  L.hatch.push(`<g clip-path="url(#${clipId})"><rect x="${cx - w / 2}" y="${top}" width="${w}" height="${bot - top}" fill="url(#h-concrete)" opacity="0.5" stroke="none"/></g>`)
  B.add([cx - w / 2 - 20, top - 10], [cx + w / 2 + 20, bot])
  L.dims.push(hDim(bot + 24, cx - w / 2, cx + w / 2, 'LIGHT'))
  const items = kind === 'stained-glass'
    ? [{ text: 'LEAD CAME', at: [cx - w / 2 + 22, 160] as Pt }, { text: 'SADDLE BAR', at: [cx - w / 2 - 12, top + 160] as Pt }, { text: 'FIGURE MEDALLION', at: [cx - 48, 300] as Pt }, { text: 'COLOURED GLASS', at: [cx - w / 2 + 10, 450] as Pt }]
    : [{ text: 'WHIPLASH STEM', at: [cx - 30, 380] as Pt }, { text: 'TULIP BLOOM', at: [cx - 30, 210] as Pt }, { text: 'SUN MOTIF', at: [cx - 26, 150] as Pt }, { text: 'ORGANIC LEADING', at: [cx - w / 2, 440] as Pt }]
  callouts(L, items, cx - w / 2 - 30)
  return kind === 'stained-glass'
    ? finish(meta('stained-glass', 'Stained Glass', 'Coloured glass pieces set in lead', 'ELEVATION', 'WIN-10',
        'Elevation of a tall pointed window filled with small irregular pieces of coloured glass held in strips of lead, braced by iron bars, with a round picture panel at its centre.', w / 4, 'quarters of light'), L, B, defs)
    : finish(meta('stained-glass-nouveau', 'Art Nouveau Stained Glass', 'Whiplash curves and stylised flowers in lead', 'ELEVATION', 'WIN-11',
        'Elevation of a window in the Art Nouveau style: the lead lines follow sinuous whiplash stems that rise to stylised tulips beneath a radiating sun.', w / 4, 'quarters of light'), L, B, defs)
}

function ribbon(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 170
  const x1 = 560
  const pil = 460
  // pilotis, two floors of continuous horizontal windows, roof garden parapet
  for (const x of [x0 + 30, x0 + 160, x0 + 290]) L.profile.push(el(path(rect(x - 6, pil, 12, 60), true)))
  const floors = [pil, 340, 220, 140]
  L.profile.push(el(path(rect(x0, floors[3], x1 - x0, pil - floors[3]), true)))
  for (const yb of [pil - 40, 300]) {
    L.profile.push(el(path(rect(x0, yb - 50, x1 - x0, 50), true)))
    hl(L, rect(x0 + 2, yb - 48, x1 - x0 - 4, 46), 'h-concrete')
    for (let x = x0 + 40; x < x1; x += 40) L.fine.push(line([x, yb - 50], [x, yb]))
  }
  L.profile.push(el(path(rect(x0 + 40, floors[3] - 40, 120, 40), true)))
  L.profile.push(line([x0 - 20, pil + 60], [x1 + 10, pil + 60]))
  B.add([x0 - 20, floors[3] - 40], [x1 + 10, pil + 60])
  L.dims.push(hDim(pil + 84, x0, x1, 'CONTINUOUS ACROSS THE FACADE'))
  callouts(L, [
    { text: 'ROOF TERRACE', at: [x0 + 40, floors[3] - 20] },
    { text: 'RIBBON WINDOW', at: [x0, 275] },
    { text: 'PLAIN WALL BAND', at: [x0, 340] },
    { text: 'PILOTIS', at: [x0 + 24, pil + 30] },
  ], x0 - 20)
  return finish(meta('ribbon-window', 'Ribbon Window', 'Long horizontal band of windows', 'ELEVATION', 'WIN-12',
    'Elevation of a modernist house raised on slender columns, its walls cut by long uninterrupted horizontal strips of windows.', 40, 'window modules',
    'Fenêtre en longueur, one of Le Corbusier’s Five Points of a New Architecture (1926/27). Generic original drawing by Project Exodus.'), L, B)
}

function clerestory(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const ground = 500
  const naveW = 150
  const aisleW = 90
  const naveTop = 160
  const aisleTop = 330
  for (const s of [-1, 1]) {
    const nx = cx + s * naveW / 2
    hatched(L, rect(nx - 8, naveTop, 16, ground - naveTop))
    // clerestory window cut in the upper wall
    masked(L, rect(nx - 8, naveTop + 40, 16, 80), 'cut')
    L.profile.push(line([nx - 8, naveTop + 40], [nx + 8, naveTop + 40]), line([nx - 8, naveTop + 120], [nx + 8, naveTop + 120]), line([nx, naveTop + 40], [nx, naveTop + 120]))
    const ox = cx + s * (naveW / 2 + aisleW)
    hatched(L, rect(ox - 8, aisleTop, 16, ground - aisleTop))
    L.profile.push(el(path([[nx + s * 8, aisleTop - 20], [ox + s * 14, aisleTop + 8]])))
    arrow(L, [nx + s * 70, naveTop + 20], [nx - s * 30, naveTop + 140])
  }
  L.profile.push(el(path([[cx - naveW / 2 - 14, naveTop + 6], [cx, naveTop - 50], [cx + naveW / 2 + 14, naveTop + 6]])))
  L.profile.push(line([cx - naveW / 2 - aisleW - 40, ground], [cx + naveW / 2 + aisleW + 40, ground]))
  L.notes.push(text(cx, 420, 'NAVE', 'text-anchor="middle" class="t-sub"'), text(cx - naveW / 2 - aisleW / 2, 450, 'AISLE', 'text-anchor="middle" class="t-sub"'))
  L.notes.push(text(cx + naveW / 2 + 60, naveTop + 10, 'DAYLIGHT', 'class="t-small t-accent"'))
  B.add([cx - naveW / 2 - aisleW - 40, naveTop - 50], [cx + naveW / 2 + aisleW + 40, ground])
  callouts(L, [
    { text: 'NAVE ROOF', at: [cx - 40, naveTop - 30] },
    { text: 'CLERESTORY WINDOW', at: [cx - naveW / 2 - 8, naveTop + 80] },
    { text: 'AISLE ROOF', at: [cx - naveW / 2 - 40, aisleTop - 4] },
    { text: 'ARCADE WALL', at: [cx - naveW / 2 - 8, 420] },
  ], cx - naveW / 2 - aisleW - 40)
  return finish(meta('clerestory', 'Clerestory', 'High windows above adjoining roofs', 'SECTION', 'WIN-13',
    'Cross-section of a basilica: the central nave rises above the lower side aisles, and windows in the upper walls let daylight down into the middle of the building.', 30, 'metres (indicative)'), L, B)
}

function dormer(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const eave = 420
  const ridge = 160
  // main roof slope in elevation, with tiles
  const roof: Pt[] = [[cx - 220, eave], [cx - 220, ridge], [cx + 220, ridge], [cx + 220, eave]]
  const defs = courses(L, 'dm-roof', roof, 0, 10)
  L.profile.push(el(path(roof, true)))
  // gabled dormer
  const dw = 120
  const dTop = 230
  const body: Pt[] = [[cx - dw / 2, eave - 30], [cx - dw / 2, dTop + 40], [cx, dTop - 10], [cx + dw / 2, dTop + 40], [cx + dw / 2, eave - 30]]
  masked(L, [...body, [cx + dw / 2 + 20, eave - 20], [cx - dw / 2 - 20, eave - 20]], 'shading')
  L.profile.push(el(path(body)), el(path([[cx - dw / 2 - 12, dTop + 48], [cx, dTop - 22], [cx + dw / 2 + 12, dTop + 48]])))
  L.profile.push(el(path(rect(cx - 34, dTop + 50, 68, eave - dTop - 90), true)))
  glazing(L, cx - 30, dTop + 54, 60, eave - dTop - 98, 2, 3)
  L.profile.push(el(path([[cx - dw / 2 - 20, eave - 20], [cx + dw / 2 + 20, eave - 20]])))
  L.profile.push(line([cx - 240, eave], [cx + 240, eave]))
  L.notes.push(text(cx + 160, eave + 18, 'EAVES', 'class="t-small"'))
  B.add([cx - 240, ridge], [cx + 240, eave + 20])
  L.dims.push(hDim(eave + 40, cx - dw / 2, cx + dw / 2, 'DORMER WIDTH'))
  callouts(L, [
    { text: 'RIDGE', at: [cx - 220, ridge] },
    { text: 'DORMER GABLE', at: [cx - dw / 4, dTop + 15] },
    { text: 'DORMER WINDOW', at: [cx - 34, dTop + 100] },
    { text: 'CHEEK', at: [cx - dw / 2, eave - 60] },
    { text: 'MAIN ROOF', at: [cx - 200, 300] },
  ], cx - 240)
  return finish(meta('dormer', 'Dormer', 'Window set upright in a sloping roof', 'ELEVATION', 'WIN-14',
    'Elevation of a pitched roof with a small gabled structure projecting from the slope to hold an upright window, lighting the room in the roof.', dw / 4, 'quarters of dormer'), L, B, defs)
}

function oriel(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const wx = 380
  const ground = 500
  const floor1 = 330
  const floor2 = 150
  hatched(L, rect(wx, 100, 30, ground - 100))
  hatched(L, rect(wx + 30, floor1, 150, 16), 'h-concrete')
  hatched(L, rect(wx + 30, floor2, 150, 16), 'h-concrete')
  // oriel: projects from the upper storey on stepped corbels, glazed
  const proj = 90
  const corbel: Pt[] = [[wx, floor1 + 80], [wx - 30, floor1 + 50], [wx - 60, floor1 + 30], [wx - proj, floor1 + 16], [wx - proj, floor1], [wx, floor1]]
  hatched(L, corbel)
  L.cut.push(el(path(rect(wx - proj, floor2 + 6, 10, floor1 - floor2 - 6), true)))
  L.profile.push(el(path(rect(wx - proj + 2, floor2 + 30, 6, floor1 - floor2 - 60), true)))
  hatched(L, [[wx - proj - 10, floor2 + 6], [wx + 30, floor2 - 30], [wx + 30, floor2 - 18], [wx - proj - 10, floor2 + 16]], 'h-timber')
  L.notes.push(text(wx + 90, floor1 - 60, 'ROOM', 'text-anchor="middle" class="t-sub"'))
  arrow(L, [wx - proj - 70, floor1 - 90], [wx - proj - 10, floor1 - 90])
  L.notes.push(text(wx - proj - 70, floor1 - 98, 'VIEW', 'class="t-small t-accent"'))
  L.profile.push(line([wx - 200, ground], [wx + 180, ground]))
  L.notes.push(text(wx - 120, ground - 10, 'STREET', 'class="t-small"'))
  B.add([wx - 200, 100], [wx + 180, ground])
  L.dims.push(hDim(floor1 + 110, wx - proj, wx, 'PROJECTION'))
  callouts(L, [
    { text: 'ORIEL ROOF', at: [wx - proj - 10, floor2 + 10] },
    { text: 'GLAZED BAY', at: [wx - proj, (floor1 + floor2) / 2] },
    { text: 'CORBELLING', at: [wx - 45, floor1 + 38] },
    { text: 'WALL (SECTION)', at: [wx, 420] },
  ], wx - 200)
  return finish(meta('oriel-window', 'Oriel Window', 'Bay window projecting from an upper storey', 'SECTION', 'WIN-15',
    'Section through a wall where a glazed bay juts out from an upper floor, carried on stepped stone brackets, without reaching down to the ground.', 30, 'feet (indicative)'), L, B)
}

function deepRecess(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const y0 = 230
  const t = 140 // thick wall
  const ow = 70
  const iw = 170
  const cx = 360
  hatched(L, [[160, y0], [cx - ow / 2, y0], [cx - iw / 2, y0 + t], [160, y0 + t]])
  hatched(L, [[cx + ow / 2, y0], [560, y0], [560, y0 + t], [cx + iw / 2, y0 + t]])
  // window frame near the outer face, seat in the embrasure
  L.profile.push(el(path(rect(cx - ow / 2, y0 + 10, ow, 8), true)))
  L.fine.push(line([cx - ow / 2, y0 + 14], [cx + ow / 2, y0 + 14]))
  L.profile.push(el(path([[cx - iw / 2 + 20, y0 + t], [cx - iw / 2 + 30, y0 + 60], [cx + iw / 2 - 30, y0 + 60], [cx + iw / 2 - 20, y0 + t]])))
  L.notes.push(text(cx, y0 + 100, 'WINDOW SEAT', 'text-anchor="middle" class="t-small"'))
  L.notes.push(text(cx, y0 - 20, 'OUTSIDE', 'text-anchor="middle" class="t-sub"'), text(cx, y0 + t + 50, 'INSIDE', 'text-anchor="middle" class="t-sub"'))
  arrow(L, [cx, y0 - 50], [cx - 60, y0 + t + 30])
  arrow(L, [cx, y0 - 50], [cx + 60, y0 + t + 30])
  B.add([160, y0 - 50], [560, y0 + t + 60])
  L.dims.push(vDim(566, y0, y0 + t, 'T'), hDim(y0 + t + 80, cx - iw / 2, cx + iw / 2, 'SPLAYED'))
  callouts(L, [
    { text: 'WINDOW', at: [cx - ow / 2, y0 + 14] },
    { text: 'SPLAYED REVEAL', at: [cx - (ow + iw) / 4, y0 + t / 2] },
    { text: 'THICK WALL (CUT)', at: [160, y0 + t / 2] },
  ], 160)
  return finish(meta('deep-window-recess', 'Deep Window Recess', 'Splayed embrasure through a thick wall', 'PLAN', 'WIN-16',
    'Plan through a very thick wall where a small window near the outer face opens into a wide recess whose sides flare inward to spread the light, with a seat built into it.', 35, 'feet (indicative)'), L, B)
}

// ---------------------------------------------------------------------------
// Doors
// ---------------------------------------------------------------------------
function doorElevation(kind: 'paneled-door' | 'dutch-door' | 'architrave' | 'pediment-door' | 'door-transom' | 'lintel'): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const w = 130
  const h = 280
  const floor = 500
  const top = floor - h
  const x = cx - w / 2
  const hasTransom = kind === 'door-transom'
  const opTop = hasTransom ? top - 70 : top
  const defs = wallBehind(L, kind, cx - 210, opTop - 120, cx + 210, floor, rect(x - 30, opTop - 60, w + 60, floor - opTop + 60))
  // leaf
  if (kind === 'dutch-door') {
    L.profile.push(el(path(rect(x, top, w, h / 2 - 2), true)), el(path(rect(x, top + h / 2 + 2, w, h / 2 - 2), true)))
    L.profile.push(el(path(rect(x - 4, top + h / 2 - 2, w + 8, 8), true)))
    L.center.push(el(`M${x + w} ${top}L${x} ${top + h / 4}L${x + w} ${top + h / 2}`))
    L.notes.push(text(cx + w / 2 + 10, top + h / 4, 'TOP LEAF OPENS ALONE', 'class="t-small t-accent"'))
  } else if (kind !== 'lintel') {
    L.profile.push(el(path(rect(x, top, w, h), true)))
    // six panels: stiles, rails, raised panels
    const pw = (w - 30) / 2
    const rows = [[top + 12, 60], [top + 86, 90], [top + 190, 76]] as Array<[number, number]>
    for (const [py, ph] of rows) for (const px of [x + 10, x + 20 + pw]) {
      L.profile.push(el(path(rect(px, py, pw, ph), true)))
      L.fine.push(el(path(rect(px + 6, py + 6, pw - 12, ph - 12), true)))
    }
  }
  L.profile.push(circle([x + w - 16, top + h / 2 + 6], 4))
  // surrounds per kind
  if (kind === 'architrave' || kind === 'paneled-door' || kind === 'dutch-door' || kind === 'door-transom') {
    const arch = [[x - 22, floor], [x - 22, opTop - 22], [x + w + 22, opTop - 22], [x + w + 22, floor], [x + w, floor], [x + w, opTop], [x, opTop], [x, floor]] as Pt[]
    if (kind === 'architrave') hl(L, arch)
    else L.profile.push(el(path(arch, true)))
    L.fine.push(el(path([[x - 14, floor], [x - 14, opTop - 14], [x + w + 14, opTop - 14], [x + w + 14, floor]])))
  }
  if (hasTransom) {
    const tl = rect(x, opTop, w, 62)
    hl(L, tl, 'h-concrete')
    glazing(L, x + 6, opTop + 6, w - 12, 50, 4, 1, 'profile')
    L.profile.push(el(path(rect(x - 4, top - 8, w + 8, 8), true)))
  }
  if (kind === 'pediment-door') {
    for (const px of [x - 30, x + w + 8]) {
      L.profile.push(el(path(rect(px, top, 22, h), true)))
      L.fine.push(el(path(rect(px - 3, floor - 14, 28, 14), true)), el(path(rect(px - 3, top, 28, 12), true)))
    }
    L.profile.push(el(path(rect(x - 38, top - 30, w + 76, 30), true)))
    L.fine.push(line([x - 38, top - 18], [x + w + 38, top - 18]))
    L.profile.push(el(path([[x - 46, top - 30], [cx, top - 100], [x + w + 46, top - 30]], true)))
    L.fine.push(el(path([[x - 30, top - 36], [cx, top - 88], [x + w + 30, top - 36]], true)))
  }
  if (kind === 'lintel') {
    // plain opening in coursed masonry with a stone lintel over
    L.fine.push(el(path(rect(x, top, w, h), true), 'stroke-dasharray="6 4"'))
    L.notes.push(text(cx, top + h / 2, 'OPENING', 'text-anchor="middle" class="t-sub"'))
    hl(L, rect(x - 40, top - 40, w + 80, 40))
    for (let k = 0; k < 5; k++) arrow(L, [x - 30 + k * ((w + 60) / 4), top - 90], [x - 30 + k * ((w + 60) / 4), top - 44])
    L.notes.push(text(cx, top - 96, 'LOAD FROM WALL ABOVE', 'text-anchor="middle" class="t-small t-accent"'))
    for (const s of [-1, 1]) arrow(L, [cx + s * (w / 2 + 20), top + 4], [cx + s * (w / 2 + 20), top + 60])
    L.dims.push(hDim(top - 56, x - 40, x, 'BEARING'))
  }
  L.profile.push(line([cx - 220, floor], [cx + 220, floor]))
  B.add([cx - 210, opTop - 120], [cx + 210, floor])
  L.dims.push(hDim(floor + 22, x, x + w, 'LEAF WIDTH'))
  const parts: Record<typeof kind, { text: string; at: Pt }[]> = {
    'paneled-door': [{ text: 'TOP RAIL', at: [x, top + 6] }, { text: 'RAISED PANEL', at: [x + 16, top + 120] }, { text: 'STILE', at: [x + 4, top + 200] }, { text: 'LOCK RAIL', at: [x, top + 181] }, { text: 'ARCHITRAVE', at: [x - 22, top + 40] }],
    'dutch-door': [{ text: 'UPPER LEAF', at: [x, top + 60] }, { text: 'SHELF / LEDGE', at: [x - 4, top + h / 2 + 2] }, { text: 'LOWER LEAF', at: [x, top + h * 0.75] }],
    architrave: [{ text: 'ARCHITRAVE (SURROUND)', at: [x - 22, top + 60] }, { text: 'HEAD', at: [x - 10, opTop - 18] }, { text: 'DOOR LEAF', at: [x + 10, top + 140] }],
    'pediment-door': [{ text: 'PEDIMENT', at: [cx - 60, top - 60] }, { text: 'ENTABLATURE', at: [x - 38, top - 15] }, { text: 'PILASTER', at: [x - 30, top + 120] }, { text: 'DOOR LEAF', at: [x + 10, top + 200] }],
    'door-transom': [{ text: 'TRANSOM LIGHT', at: [x, opTop + 30] }, { text: 'TRANSOM BAR', at: [x - 4, top - 4] }, { text: 'DOOR LEAF', at: [x + 10, top + 140] }],
    lintel: [{ text: 'LINTEL', at: [x - 40, top - 20] }, { text: 'JAMB', at: [x, top + 120] }, { text: 'MASONRY WALL', at: [cx - 200, top + 60] }],
  }
  callouts(L, parts[kind], cx - 210)
  const titles: Record<typeof kind, [string, string, string, string]> = {
    'paneled-door': ['Paneled Door', 'Frame of stiles and rails holding panels', 'DOR-01', 'Elevation of a six-panel timber door: a frame of upright stiles and cross rails with raised panels set between them, in a moulded surround.'],
    'dutch-door': ['Dutch Door', 'Door split horizontally into two leaves', 'DOR-02', 'Elevation of a door divided across the middle so the top half can open while the bottom stays shut, with a ledge on the lower leaf.'],
    architrave: ['Architrave', 'Moulded frame around a door opening', 'DOR-03', 'Elevation of a doorway with the moulded frame running up both sides and across the head highlighted.'],
    'pediment-door': ['Pediment Door', 'Doorway crowned by a triangular pediment', 'DOR-04', 'Elevation of a classical doorway framed by flat pilasters carrying an entablature and a triangular gable-shaped pediment.'],
    'door-transom': ['Door Transom', 'Glazed light above a door', 'DOR-05', 'Elevation of a doorway with the glazed panel above the door, separated from it by a horizontal bar, highlighted.'],
    lintel: ['Lintel', 'Beam spanning the top of an opening', 'DOR-06', 'Elevation of an opening in a masonry wall with the horizontal stone beam over it highlighted, carrying the weight of the wall above onto the sides of the opening.'],
  }
  const [title, subtitle, sheetNo, description] = titles[kind]
  return finish(meta(kind, title, subtitle, 'ELEVATION', sheetNo, description, w / 4, 'quarters of leaf'), L, B, defs)
}

function portal(kind: 'portal' | 'door-tympanum'): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 360
  const w = 120
  const floor = 510
  const lintelY = 330
  const R0 = w / 2
  const orders = 4
  const outerR = R0 + orders * 18
  const defs = wallBehind(L, kind, cx - 200, lintelY - outerR - 60, cx + 200, floor, [[cx - outerR, floor], [cx - outerR, lintelY], ...ring([cx, lintelY], outerR, Math.PI, 2 * Math.PI, 40), [cx + outerR, floor]])
  // recessed orders: jamb shafts and archivolts
  for (let k = orders; k >= 0; k--) {
    const r = R0 + k * 18
    L.profile.push(el(path([[cx - r, floor], [cx - r, lintelY], ...ring([cx, lintelY], r, Math.PI, 2 * Math.PI, 40), [cx + r, floor]])))
    if (k > 0) {
      for (const s of [-1, 1]) L.fine.push(line([cx + s * (r - 9), floor], [cx + s * (r - 9), lintelY]))
      // zig-zag ornament on alternate archivolts
      if (k % 2 === 0) {
        const z: Pt[] = []
        for (let i = 0; i <= 24; i++) {
          const a = Math.PI + (i * Math.PI) / 24
          const rr = r - (i % 2 ? 4 : 13)
          z.push([cx + rr * Math.cos(a), lintelY + rr * Math.sin(a)])
        }
        L.fine.push(el(path(z)))
      }
    }
  }
  // tympanum over the lintel, doors below, trumeau
  const tym = [...ring([cx, lintelY], R0, Math.PI, 2 * Math.PI, 30)]
  if (kind === 'door-tympanum') hl(L, tym)
  else L.hatch.push(`<path d="${path(tym, true)}" fill="url(#h-stone)" stroke="none"/>`)
  L.profile.push(el(path(rect(cx - R0, lintelY, w, 14), true)))
  L.profile.push(el(path(rect(cx - 6, lintelY + 14, 12, floor - lintelY - 14), true)))
  for (const s of [-1, 1]) L.fine.push(el(path(rect(cx + (s < 0 ? -R0 + 4 : 10), lintelY + 18, R0 - 14, floor - lintelY - 18), true)))
  L.fine.push(circle([cx, lintelY - R0 * 0.5], R0 * 0.3))
  L.profile.push(line([cx - 210, floor], [cx + 210, floor]))
  B.add([cx - 200, lintelY - outerR - 60], [cx + 200, floor])
  L.dims.push(hDim(floor + 22, cx - R0, cx + R0, 'DOORWAY'))
  callouts(L, [
    { text: 'ARCHIVOLTS (ORDERS)', at: [cx - (R0 + 54) * 0.7, lintelY - (R0 + 54) * 0.7] },
    { text: 'TYMPANUM', at: [cx - R0 * 0.6, lintelY - R0 * 0.4] },
    { text: 'LINTEL', at: [cx - R0, lintelY + 7] },
    { text: 'JAMB SHAFTS', at: [cx - R0 - 27, floor - 80] },
    { text: 'TRUMEAU', at: [cx - 6, floor - 60] },
  ], cx - 200)
  return kind === 'portal'
    ? finish(meta('portal', 'Portal', 'Grand recessed entrance of stepped arches', 'ELEVATION', 'DOR-07',
        'Elevation of a monumental church entrance: a series of arches stepping inward over column shafts frame a pair of doors under a carved semicircular panel.', 18, 'orders', ORIGINAL), L, B, defs)
    : finish(meta('door-tympanum', 'Tympanum (Door)', 'Panel filling an arch over a doorway', 'ELEVATION', 'DOR-08',
        'Elevation of an arched entrance with the semicircular panel between the lintel over the doors and the arch above highlighted.', 18, 'orders', ORIGINAL), L, B, defs)
}

function pocketDoor(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const y = 300
  const t = 26
  const op = 140
  const x0 = 160
  const ox = 370
  // stud wall with a cavity the leaf slides into
  hatched(L, rect(x0, y, ox - op - x0 - 20, t), 'h-timber')
  L.profile.push(el(path(rect(ox - op - 20, y, op + 20, t), true)))
  hatched(L, rect(ox - op - 20, y, op + 20, 5), 'h-timber', null)
  hatched(L, rect(ox - op - 20, y + t - 5, op + 20, 5), 'h-timber', null)
  hatched(L, rect(ox + op, y, 560 - ox - op, t), 'h-timber')
  // leaf partly open, sliding into the pocket
  hl(L, rect(ox - op * 0.7, y + t / 2 - 4, op, 8), 'h-timber')
  arrow(L, [ox + 20, y - 30], [ox - 80, y - 30])
  L.notes.push(text(ox - 30, y - 38, 'SLIDES INTO WALL', 'text-anchor="middle" class="t-small t-accent"'))
  B.add([x0, y - 50], [560, y + t + 60])
  L.dims.push(hDim(y + t + 30, ox, ox + op, 'CLEAR OPENING'), hDim(y + t + 56, ox - op - 20, ox, 'POCKET'))
  callouts(L, [
    { text: 'WALL (CUT)', at: [x0, y + t / 2] },
    { text: 'POCKET (CAVITY)', at: [ox - op - 20, y + 2] },
    { text: 'SLIDING LEAF', at: [ox - op * 0.7, y + t / 2] },
  ], x0)
  return finish(meta('pocket-door', 'Pocket Door', 'Leaf that slides into a cavity in the wall', 'PLAN', 'DOR-09',
    'Plan through a wall where the door, instead of swinging, slides sideways into a hollow inside the wall itself, leaving the opening clear.', op / 4, 'quarters of opening'), L, B)
}

function revolvingDoor(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [370, 300]
  const R = 110
  // drum: curved glazed enclosure on two sides, open on the entry/exit sides
  for (const [a0, a1] of [[-Math.PI * 0.25, Math.PI * 0.25], [Math.PI * 0.75, Math.PI * 1.25]]) {
    L.cut.push(el(path(ring(c, R, a0, a1, 24))), el(path(ring(c, R + 8, a0, a1, 24))))
  }
  hatched(L, rect(c[0] - 200, c[1] - R - 20, 200 - R - 10, 20))
  hatched(L, rect(c[0] + R + 10, c[1] - R - 20, 200 - R - 10, 20))
  // four wings at 45°
  for (let k = 0; k < 4; k++) {
    const a = Math.PI / 4 + (k * Math.PI) / 2
    hl(L, [[c[0] + 4 * Math.cos(a + Math.PI / 2), c[1] + 4 * Math.sin(a + Math.PI / 2)], [c[0] + (R - 4) * Math.cos(a) + 4 * Math.cos(a + Math.PI / 2), c[1] + (R - 4) * Math.sin(a) + 4 * Math.sin(a + Math.PI / 2)], [c[0] + (R - 4) * Math.cos(a) - 4 * Math.cos(a + Math.PI / 2), c[1] + (R - 4) * Math.sin(a) - 4 * Math.sin(a + Math.PI / 2)], [c[0] - 4 * Math.cos(a + Math.PI / 2), c[1] - 4 * Math.sin(a + Math.PI / 2)]], 'h-concrete')
  }
  L.profile.push(circle(c, 8))
  const rot = ring(c, R * 0.6, -Math.PI * 0.85, -Math.PI * 0.35, 20)
  L.center.push(el(path(rot)))
  arrow(L, rot[rot.length - 2], rot[rot.length - 1])
  L.notes.push(text(c[0], c[1] + R + 50, 'INSIDE', 'text-anchor="middle" class="t-sub"'), text(c[0], c[1] - R - 34, 'OUTSIDE', 'text-anchor="middle" class="t-sub"'))
  B.add([c[0] - 200, c[1] - R - 40], [c[0] + 200, c[1] + R + 60])
  L.dims.push(hDim(c[1] + R + 24, c[0] - R, c[0] + R, 'DRUM DIAMETER'))
  callouts(L, [
    { text: 'FACADE WALL (CUT)', at: [c[0] - 200, c[1] - R - 10] },
    { text: 'GLAZED DRUM', at: [c[0] - R - 4, c[1] + 20] },
    { text: 'WING', at: [c[0] - R * 0.5, c[1] - R * 0.5] },
    { text: 'CENTRE POST', at: [c[0] - 8, c[1]] },
  ], c[0] - 200)
  return finish(meta('revolving-door', 'Revolving Door', 'Four wings turning inside a drum', 'PLAN', 'DOR-10',
    'Plan of an entrance where four glass wings radiate from a central post and turn inside a curved glass enclosure, so the opening is never left open to the outside.', R / 4, 'quarters of radius'), L, B)
}

function knocker(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [360, 250]
  // part of the door leaf with panels
  L.fine.push(el(path(rect(220, 80, 280, 440), true)), el(path(rect(240, 100, 240, 120), true)), el(path(rect(240, 380, 240, 120), true)))
  // back plate, pivot boss, ring, strike plate
  L.profile.push(el(`M${c[0] - 40} ${c[1] - 30}Q${c[0]} ${c[1] - 80} ${c[0] + 40} ${c[1] - 30}L${c[0] + 34} ${c[1] + 20}Q${c[0]} ${c[1] + 40} ${c[0] - 34} ${c[1] + 20}Z`))
  L.fine.push(el(`M${c[0] - 30} ${c[1] - 24}Q${c[0]} ${c[1] - 64} ${c[0] + 30} ${c[1] - 24}`))
  L.profile.push(circle([c[0], c[1] - 6], 10))
  hl(L, [...ring([c[0], c[1] + 70], 62, 0, 2 * Math.PI, 48), ...ring([c[0], c[1] + 70], 50, 2 * Math.PI, 0, 48)])
  L.profile.push(el(path(rect(c[0] - 18, c[1] + 128, 36, 18), true)), circle([c[0], c[1] + 137], 4))
  B.add([220, 80], [500, 520])
  L.dims.push(hDim(c[1] + 160, c[0] - 62, c[0] + 62, 'RING Ø'))
  callouts(L, [
    { text: 'BACK PLATE', at: [c[0] - 40, c[1] - 30] },
    { text: 'PIVOT', at: [c[0] - 10, c[1] - 6] },
    { text: 'KNOCKER RING', at: [c[0] - 62, c[1] + 70] },
    { text: 'STRIKE PLATE', at: [c[0] - 18, c[1] + 137] },
    { text: 'DOOR PANEL', at: [240, 160] },
  ], 220)
  return finish(meta('door-knocker', 'Door Knocker', 'Hinged ring struck against a plate', 'ELEVATION', 'DOR-11',
    'Elevation of a metal ring hung from a decorative plate on a door, swinging on a pivot so it can be struck against a small plate below.', 31, 'ring quarters'), L, B)
}

export const OPENING_SHEETS: Array<() => SheetSpec> = [
  sash, casement, shutters, palladian, lunette, roseWindow, tracery,
  () => crossWindow('mullion'), () => crossWindow('transom'),
  () => stainedGlass('stained-glass'), () => stainedGlass('stained-glass-nouveau'),
  ribbon, clerestory, dormer, oriel, deepRecess,
  () => doorElevation('paneled-door'), () => doorElevation('dutch-door'), () => doorElevation('architrave'),
  () => doorElevation('pediment-door'), () => doorElevation('door-transom'), () => doorElevation('lintel'),
  () => portal('portal'), () => portal('door-tympanum'),
  pocketDoor, revolvingDoor, knocker,
]
