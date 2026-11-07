/**
 * Façade elements, plus the caryatid.
 *
 * Classical and Gothic façade parts in ELEVATION; envelope systems whose
 * meaning is their build-up (double skin, ETFE, green wall, curtain wall,
 * brise-soleil, Juliet balcony, bush-hammered ribs, glass lift) in SECTION;
 * the Propylaea and the curved façade in PLAN; and the elements that only make
 * sense with depth (loggia, porte-cochère) in OBLIQUE, quoins in ISOMETRIC.
 */
import { type Pt, type SheetSpec, f, path, el, vDim, hDim, text } from '../sheet'
import { newLayers, finish, hatched, circle, line, rect, callouts, arrow, Bounds, ORIGINAL, axo, face, box, addAxo, AXO_DEFS, type Layers, type P3 } from '../kit'

const PAPER = 'style="fill: var(--_paper)"'
const THIN = 'class="l-fine"'
const DASH = 'stroke-dasharray="4 3"'
const meta = (id: string, title: string, subtitle: string, view: string, sheetNo: string, description: string, unitPx: number, unitName: string, source = ORIGINAL) =>
  ({ id, title, subtitle, view, sheetNo, description, source, scale: { unitPx, unitName, count: 4 } })

function figure(L: Layers, x: number, floor: number, h = 60) {
  const hd = h * 0.13
  L.fine.push(circle([x, floor - h + hd], hd), el(`M${f(x)} ${f(floor - h + hd * 2)}V${f(floor - h * 0.45)}M${f(x - h * 0.12)} ${f(floor)}L${f(x)} ${f(floor - h * 0.45)}L${f(x + h * 0.12)} ${f(floor)}M${f(x - h * 0.16)} ${f(floor - h * 0.55)}L${f(x)} ${f(floor - h * 0.75)}L${f(x + h * 0.16)} ${f(floor - h * 0.55)}`))
}
function pointedArch(x: number, spring: number, w: number, bottom: number, rise = w * 0.8) {
  return `M${f(x)} ${f(bottom)}V${f(spring)}Q${f(x)} ${f(spring - rise * 0.8)} ${f(x + w / 2)} ${f(spring - rise)}Q${f(x + w)} ${f(spring - rise * 0.8)} ${f(x + w)} ${f(spring)}V${f(bottom)}`
}
/** Simple classical column in elevation: base, tapering shaft, capital block. */
function column(L: Layers, x: number, base: number, top: number, d: number, kind: 'ionic' | 'doric' = 'ionic') {
  const t = d * 0.84
  L.profile.push(el(path(rect(x - d / 2 - 3, base - 8, d + 6, 8), true)))
  L.profile.push(el(path([[x - d / 2, base - 8], [x - t / 2, top + 14], [x + t / 2, top + 14], [x + d / 2, base - 8]], true)))
  for (const o of [-0.2, 0, 0.2]) L.fine.push(line([x + o * d, base - 10], [x + o * t, top + 16]))
  if (kind === 'ionic') {
    L.profile.push(el(path(rect(x - d / 2 - 4, top, d + 8, 6), true)))
    L.profile.push(el(`M${f(x - d / 2 - 2)} ${top + 6}h${f(d + 4)}v8h-${f(d + 4)}Z`))
    L.fine.push(circle([x - d / 2 - 1, top + 13], 4), circle([x + d / 2 + 1, top + 13], 4))
  } else {
    L.profile.push(el(path(rect(x - d / 2 - 4, top, d + 8, 7), true)), el(`M${f(x - d / 2 - 3)} ${top + 7}Q${f(x - t / 2)} ${top + 14} ${f(x - t / 2)} ${top + 14}H${f(x + t / 2)}Q${f(x + t / 2)} ${top + 14} ${f(x + d / 2 + 3)} ${top + 7}`))
  }
}

// ---------------------------------------------------------------------------
// Classical façade parts
// ---------------------------------------------------------------------------
function balustrade(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 210
  const x1 = 560
  const yb = 490
  const yt = 410
  const hwOf = (t: number) => {
    if (t < 0.06) return 9
    if (t < 0.1) return 6
    if (t < 0.72) return 3.5 + 6.5 * Math.sin((Math.PI * (t - 0.1)) / 0.62) ** 1.2 * (t < 0.41 ? 1 : 1 - (t - 0.41) * 0.6)
    if (t < 0.8) return t < 0.76 ? 5 : 4
    if (t < 0.9) return 4 + (t - 0.8) * 40
    return 8
  }
  const baluster = (x: number) => {
    const n = 24
    const left: Pt[] = []
    const right: Pt[] = []
    for (let i = 0; i <= n; i++) {
      const t = i / n
      const y = yb - t * (yb - yt)
      left.push([x - hwOf(t), y])
      right.push([x + hwOf(t), y])
    }
    L.profile.push(el(path([...left, ...right.reverse()], true)))
  }
  // plinth, bottom rail, top rail with moulding
  L.profile.push(el(path(rect(x0 - 6, yb + 10, x1 - x0 + 12, 20), true)), el(path(rect(x0, yb, x1 - x0, 10), true)))
  L.profile.push(el(path(rect(x0 - 4, yt - 16, x1 - x0 + 8, 16), true)), line([x0 - 4, yt - 10], [x1 + 4, yt - 10]))
  // pedestals (dies) at ends and middle, balusters between
  const peds = [x0, (x0 + x1) / 2 - 20, x1 - 40]
  for (const px of peds) {
    L.profile.push(el(path(rect(px, yt - 16, 40, yb + 10 - yt + 16), true)))
    L.fine.push(el(path(rect(px + 6, yt + 4, 28, yb - yt - 4), true)))
  }
  for (const [a, b] of [[peds[0] + 40, peds[1]], [peds[1] + 40, peds[2]]]) {
    const n = Math.floor((b - a) / 28)
    const s = (b - a) / n
    for (let k = 0; k < n; k++) baluster(a + s * (k + 0.5))
  }
  B.add([x0 - 6, yt - 16], [x1 + 6, yb + 30])
  const s0 = peds[0] + 40
  const sp = (peds[1] - s0) / Math.floor((peds[1] - s0) / 28)
  L.dims.push(hDim(yb + 50, s0 + sp / 2, s0 + sp * 1.5, 'SPACING'))
  L.dims.push(vDim(x1 + 18, yb + 30, yt - 16, 'HEIGHT', x1 + 6))
  callouts(L, [
    { text: 'HANDRAIL (TOP RAIL)', at: [x0 - 4, yt - 8] },
    { text: 'PEDESTAL (DIE)', at: [x0 + 6, 450] },
    { text: 'BALUSTER: CAP', at: [s0 + sp * 2.5 - 8, yt + 4] },
    { text: 'NECK', at: [s0 + sp * 2.5 - 4, yb - 0.7 * (yb - yt)] },
    { text: 'BELLY', at: [s0 + sp * 3.5 - 10, yb - 0.3 * (yb - yt)] },
    { text: 'BOTTOM RAIL', at: [x0 + 50, yb + 5] },
    { text: 'PLINTH', at: [x0 - 6, yb + 20] },
  ], x0 - 6)
  return finish(meta('balustrade', 'Balustrade', 'Railing of balusters between pedestals', 'ELEVATION', 'FAC-01',
    'Elevation of a classical balustrade: vase-shaped balusters stand in runs between solid pedestals on a continuous plinth and bottom rail, capped by a moulded handrail.', 30, 'units (indicative)'), L, B)
}

function pediment(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const x0 = 210
  const x1 = 550
  const ent = 420
  const apex = 300
  // entablature: architrave, frieze, horizontal cornice
  L.profile.push(el(path(rect(x0 + 10, ent + 54, x1 - x0 - 20, 26), true)), el(path(rect(x0 + 10, ent + 20, x1 - x0 - 20, 34), true)), el(path(rect(x0, ent, x1 - x0, 20), true)))
  L.fine.push(line([x0 + 10, ent + 66], [x1 - 10, ent + 66]))
  // raking cornices and tympanum
  L.profile.push(el(path([[x0 - 6, ent], [cx, apex - 12], [x1 + 6, ent]])), el(path([[x0 + 14, ent], [cx, apex + 6], [x1 - 14, ent]])))
  L.fine.push(el(path([[x0 + 26, ent - 2], [cx, apex + 14], [x1 - 26, ent - 2]], true)))
  // acroteria at apex and corners
  L.profile.push(el(`M${cx - 14} ${apex - 10}q-4 -30 14 -42q18 12 14 42Z`, PAPER))
  for (let k = -2; k <= 2; k++) L.fine.push(line([cx, apex - 12], [cx + k * 7, apex - 44 + Math.abs(k) * 6]))
  for (const x of [x0 - 6, x1 + 6]) L.profile.push(el(path(rect(x - 10, ent - 22, 20, 22), true)))
  // column heads below (broken off)
  for (const x of [x0 + 40, cx - 60, cx + 60, x1 - 40]) {
    L.profile.push(el(path(rect(x - 18, ent + 80, 36, 8), true)), line([x - 14, ent + 88], [x - 14, ent + 130]), line([x + 14, ent + 88], [x + 14, ent + 130]))
  }
  // variants: segmental and broken
  const vy = 620
  L.profile.push(el(`M240 ${vy}h100M236 ${vy - 6}h108M236 ${vy - 6}A90 90 0 0 1 344 ${vy - 6}`))
  L.profile.push(el(`M420 ${vy}h100M416 ${vy - 6}h108M416 ${vy - 6}L452 ${vy - 30}M524 ${vy - 6}L488 ${vy - 30}`), el(`M462 ${vy - 6}q-6 -24 8 -30q14 6 8 30Z`))
  L.notes.push(text(290, vy + 14, 'SEGMENTAL', 'class="t-small" text-anchor="middle"'), text(470, vy + 14, 'BROKEN', 'class="t-small" text-anchor="middle"'))
  B.add([x0 - 16, apex - 52], [x1 + 16, vy + 14])
  L.dims.push(vDim(x1 + 30, ent, apex - 12, 'RISE', cx + 20))
  callouts(L, [
    { text: 'ACROTERION', at: [cx - 14, apex - 30] },
    { text: 'RAKING CORNICE', at: [cx - 80, apex + 30] },
    { text: 'TYMPANUM', at: [cx - 40, ent - 40] },
    { text: 'HORIZONTAL CORNICE', at: [x0, ent + 10] },
    { text: 'FRIEZE', at: [x0 + 10, ent + 37] },
    { text: 'ARCHITRAVE', at: [x0 + 10, ent + 70] },
    { text: 'COLUMN', at: [x0 + 26, ent + 120] },
  ], x0 - 16)
  return finish(meta('pediment', 'Pediment', 'Triangular gable crowning a classical front', 'ELEVATION', 'FAC-02',
    'Elevation of a classical pediment: raking cornices rise from the horizontal cornice of the entablature to enclose the triangular tympanum, with acroteria at the apex and corners; segmental and broken variants are shown below.', 30, 'units (indicative)'), L, B)
}

function portico(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const x0 = 220
  const x1 = 540
  const base = 540
  const top = 320
  // steps and stylobate
  for (let k = 0; k < 3; k++) L.profile.push(el(path(rect(x0 - 24 + k * 8, base + 24 - k * 12, x1 - x0 + 48 - k * 16, 12), true)))
  // wall and door beyond
  L.fine.push(el(path(rect(x0 + 6, top + 20, x1 - x0 - 12, base - top - 20), true)), el(path(rect(cx - 24, base - 120, 48, 120), true)), el(path(rect(cx - 30, base - 128, 60, 8), true)))
  // six Ionic columns
  const n = 6
  for (let k = 0; k < n; k++) column(L, x0 + 16 + (k * (x1 - x0 - 32)) / (n - 1), base, top, 26)
  // entablature and pediment
  L.profile.push(el(path(rect(x0 - 4, top - 24, x1 - x0 + 8, 24), true)), el(path(rect(x0 - 10, top - 44, x1 - x0 + 20, 20), true)))
  L.fine.push(line([x0 - 4, top - 12], [x1 + 4, top - 12]))
  const apex = top - 120
  L.profile.push(el(path([[x0 - 14, top - 44], [cx, apex], [x1 + 14, top - 44]], true)))
  L.fine.push(el(path([[x0 + 16, top - 48], [cx, apex + 16], [x1 - 16, top - 48]], true)))
  // key plan
  const kx = 450
  const ky = 70
  L.fine.push(el(path(rect(kx, ky, 90, 70), true)), el(path(rect(kx + 6, ky + 30, 78, 40), true)))
  for (let k = 0; k < 6; k++) L.profile.push(circle([kx + 6 + k * 15.6, ky + 8], 3))
  L.notes.push(text(kx, ky - 8, 'KEY PLAN', 'class="t-small"'), text(kx + 45, ky + 54, 'CELLA', 'class="t-small" text-anchor="middle"'))
  B.add([x0 - 24, apex], [x1 + 24, base + 36])
  L.dims.push(hDim(base + 56, x0 + 16, x1 - 16, 'SIX COLUMNS (HEXASTYLE)'))
  callouts(L, [
    { text: 'PEDIMENT', at: [cx - 60, apex + 50] },
    { text: 'ENTABLATURE', at: [x0 - 10, top - 30] },
    { text: 'IONIC CAPITAL', at: [x0 + 4, top + 10] },
    { text: 'COLUMN', at: [x0 + 6, 420] },
    { text: 'DOOR (BEYOND)', at: [cx - 24, base - 60] },
    { text: 'STEPS', at: [x0 - 24, base + 30] },
  ], x0 - 24)
  return finish(meta('portico', 'Portico', 'Columned porch with a pediment', 'ELEVATION', 'FAC-03',
    'Elevation of a hexastyle portico: six Ionic columns on a stepped base carry an entablature and pediment in front of the entrance wall; the key plan shows the porch standing before the main room.', 30, 'metres (indicative)'), L, B)
}

function propylaea(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const xa = 290
  const xb = 470
  const cx = (xa + xb) / 2
  // central building side walls
  hatched(L, rect(xa, 220, 12, 260))
  hatched(L, rect(xb - 12, 220, 12, 260))
  // cross wall with five doorways (widths diminishing outward)
  const doors = [[cx - 14, 28], [cx - 48, 20], [cx + 28, 20], [cx - 74, 14], [cx + 60, 14]] as const
  const edges = [xa + 12, ...doors.flatMap(([x, w]) => [x, x + w]).sort((a, b) => a - b), xb - 12]
  for (let i = 0; i < edges.length; i += 2) hatched(L, rect(edges[i], 300, edges[i + 1] - edges[i], 14))
  // porticoes (Doric) west and east, inner Ionic columns
  const six = (y: number) => [xa + 14, xa + 44, cx - 22, cx + 22, xb - 44, xb - 14].forEach((x) => L.profile.push(circle([x, y], 7)))
  six(480)
  six(228)
  for (const x of [cx - 34, cx + 34]) for (const y of [340, 380, 420]) L.profile.push(circle([x, y], 5))
  // wings: north-west (Pinakotheke) and south-west
  hatched(L, `${path(rect(170, 410, 104, 110), true)}${path(rect(180, 420, 84, 90).reverse(), true)}`)
  for (const y of [430, 465, 500]) L.profile.push(circle([284, y], 6))
  hatched(L, `${path(rect(496, 440, 64, 80), true)}${path(rect(506, 450, 44, 60).reverse(), true)}`)
  for (const y of [455, 490]) L.profile.push(circle([486, y], 6))
  // central ramp for processions, steps either side
  L.fine.push(line([cx - 18, 640], [cx - 18, 488]), line([cx + 18, 640], [cx + 18, 488]))
  for (let y = 500; y < 640; y += 10) L.fine.push(line([xa, y], [cx - 18, y]), line([cx + 18, y], [xb, y]))
  arrow(L, [cx, 620], [cx, 180])
  L.notes.push(text(cx + 8, 186, 'TO THE ACROPOLIS', 'class="t-small t-accent"'))
  B.add([170, 180], [560, 640])
  callouts(L, [
    { text: 'EAST PORTICO', at: [xa + 14, 228] },
    { text: 'FIVE DOORWAYS', at: [cx - 74, 307] },
    { text: 'IONIC COLUMNS', at: [cx - 34, 380] },
    { text: 'PINAKOTHEKE (NW WING)', at: [180, 470] },
    { text: 'WEST PORTICO (DORIC)', at: [xa + 44, 480] },
    { text: 'CENTRAL RAMP', at: [cx - 18, 560] },
    { text: 'STEPS', at: [xa + 10, 600] },
  ], 170)
  return finish(meta('propylaea', 'Propylaea', 'Monumental gateway to a sacred precinct', 'PLAN', 'FAC-04',
    'Plan of the Athenian Propylaea: a central gate-hall between Doric porticoes, its inner passage lined with Ionic columns, a cross wall pierced by five doorways of diminishing width, flanking wings, and a ramp for processions rising through the middle.', 30, 'metres (indicative)',
    'After the Propylaea, Acropolis of Athens (437–432 BCE, Mnesicles). Simplified plan; not a survey. Original drawing by Project Exodus.'), L, B)
}

function caryatid(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const podium = 560
  const head = 230
  // entablature: architrave with rosettes, dentils above
  L.profile.push(el(path(rect(cx - 120, 150, 240, 34), true)), el(path(rect(cx - 126, 128, 252, 12), true)))
  for (let x = cx - 116; x < cx + 116; x += 14) L.fine.push(el(path(rect(x, 140, 8, 10), true)))
  for (const x of [cx - 80, cx, cx + 80]) L.fine.push(circle([x, 167], 7), circle([x, 167], 2.5))
  // capital: abacus and echinus (cushion) on the head
  L.profile.push(el(path(rect(cx - 30, 184, 60, 10), true)), el(`M${cx - 26} 194Q${cx - 30} 210 ${cx - 18} 214H${cx + 18}Q${cx + 30} 210 ${cx + 26} 194Z`))
  let eggs = ''
  for (let x = cx - 20; x < cx + 20; x += 8) eggs += `M${x} 198q4 10 8 0`
  L.fine.push(el(eggs))
  // head with braids
  L.profile.push(el(`M${cx - 18} 214Q${cx - 24} ${head + 26} ${cx - 12} ${head + 36}Q${cx} ${head + 44} ${cx + 12} ${head + 36}Q${cx + 24} ${head + 26} ${cx + 18} 214`))
  L.fine.push(el(`M${cx - 16} 222q-6 30 -4 60M${cx + 16} 222q6 30 4 60M${cx - 10} 222q-2 14 2 22M${cx + 10} 222q2 14 -2 22`))
  // body in peplos: overfold at the waist, straight folds over the weight leg, knee forward on the relaxed leg
  const sh = head + 50
  L.profile.push(el(`M${cx - 14} ${head + 40}L${cx - 44} ${sh}Q${cx - 56} ${sh + 40} ${cx - 50} ${sh + 120}L${cx - 54} ${podium - 10}H${cx + 54}L${cx + 54} ${sh + 120}Q${cx + 58} ${sh + 40} ${cx + 44} ${sh}L${cx + 14} ${head + 40}Z`, PAPER))
  L.profile.push(el(`M${cx - 52} ${sh + 110}Q${cx} ${sh + 124} ${cx + 54} ${sh + 110}`))
  let folds = ''
  for (let x = cx - 44; x <= cx - 4; x += 8) folds += `M${x} ${sh + 120}L${x - 2} ${podium - 12}`
  for (let x = cx - 40; x <= cx + 40; x += 10) folds += `M${x} ${sh + 20}Q${x + 2} ${sh + 70} ${x} ${sh + 108}`
  folds += `M${cx + 8} ${sh + 140}Q${cx + 30} ${sh + 200} ${cx + 20} ${podium - 12}M${cx + 26} ${sh + 140}Q${cx + 44} ${sh + 200} ${cx + 40} ${podium - 12}`
  L.fine.push(el(folds))
  L.profile.push(el(`M${cx + 6} ${sh + 210}q14 -8 30 0`))
  L.fine.push(el(`M${cx - 44} ${sh + 4}q-10 30 -6 70M${cx + 44} ${sh + 4}q10 30 6 70`))
  // podium
  L.profile.push(el(path(rect(cx - 90, podium - 10, 180, 10), true)), el(path(rect(cx - 96, podium, 192, 60), true)))
  L.fine.push(line([cx - 96, podium + 10], [cx + 96, podium + 10]))
  B.add([cx - 126, 128], [cx + 126, podium + 60])
  L.dims.push(vDim(cx + 150, podium - 10, 184, 'FIGURE + CAPITAL', cx + 60))
  callouts(L, [
    { text: 'ARCHITRAVE (ROSETTES)', at: [cx - 120, 167] },
    { text: 'ABACUS', at: [cx - 30, 189] },
    { text: 'ECHINUS', at: [cx - 26, 204] },
    { text: 'HEAD WITH BRAIDS', at: [cx - 18, 240] },
    { text: 'OVERFOLD', at: [cx - 52, sh + 110] },
    { text: 'WEIGHT LEG (STRAIGHT FOLDS)', at: [cx - 40, 470] },
    { text: 'RELAXED KNEE', at: [cx + 6, sh + 210] },
    { text: 'PODIUM', at: [cx - 96, podium + 30] },
  ], cx - 126)
  return finish(meta('caryatid', 'Caryatid', 'Draped female figure serving as a column', 'ELEVATION', 'FAC-05',
    'Elevation of a caryatid: a standing woman in a peplos carries the entablature on a cushion capital set on her head; the folds fall straight over her weight-bearing leg while the other knee presses forward through the drapery.', 30, 'units (indicative)',
    'After the caryatids of the Erechtheion south porch, Athens (c. 421–406 BCE), as recorded in Stuart & Revett, The Antiquities of Athens, vol. 2 (1787; public domain). Simplified; not a tracing.'), L, B)
}

function tympanum(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const lintel = 420
  const R = 110
  const floor = 590
  // archivolts
  for (const r of [R + 14, R + 34, R + 54]) L.profile.push(el(`M${cx - r} ${lintel}A${r} ${r} 0 0 1 ${cx + r} ${lintel}`))
  for (let k = 0; k < 13; k++) {
    const a = Math.PI + ((k + 0.5) / 13) * Math.PI
    L.fine.push(circle([cx + (R + 24) * Math.cos(a), lintel + (R + 24) * Math.sin(a)], 4), el(`M${f(cx + (R + 44) * Math.cos(a))} ${f(lintel + (R + 44) * Math.sin(a))}m-3 4l3 -8l3 8`))
  }
  // tympanum field, mandorla with seated figure, four evangelist roundels
  L.profile.push(el(`M${cx - R} ${lintel}A${R} ${R} 0 0 1 ${cx + R} ${lintel}Z`))
  L.profile.push(el(`M${cx} ${lintel - 96}Q${cx + 40} ${lintel - 48} ${cx} ${lintel}Q${cx - 40} ${lintel - 48} ${cx} ${lintel - 96}Z`))
  L.fine.push(circle([cx, lintel - 72], 7), el(`M${cx - 8} ${lintel - 64}L${cx - 14} ${lintel - 26}H${cx + 14}L${cx + 8} ${lintel - 64}ZM${cx - 14} ${lintel - 26}l-4 20M${cx + 14} ${lintel - 26}l4 20M${cx - 6} ${lintel - 56}l-10 6M${cx + 6} ${lintel - 56}l10 -8`))
  for (const [dx, dy] of [[-62, -70], [62, -70], [-74, -26], [74, -26]]) L.fine.push(circle([cx + dx, lintel + dy], 13), circle([cx + dx, lintel + dy], 5))
  // lintel with small figures, trumeau, door leaves, jamb columns
  L.profile.push(el(path(rect(cx - R - 4, lintel, 2 * R + 8, 26), true)))
  let figs = ''
  for (let x = cx - R + 10; x < cx + R; x += 18) figs += `M${x} ${lintel + 22}v-10m-3 -4a3 3 0 1 0 6 0a3 3 0 1 0 -6 0`
  L.fine.push(el(figs))
  L.profile.push(el(path(rect(cx - 9, lintel + 26, 18, floor - lintel - 26), true)))
  L.fine.push(el(path(rect(cx - R + 6, lintel + 26, R - 15, floor - lintel - 26), true)), el(path(rect(cx + 9, lintel + 26, R - 15, floor - lintel - 26), true)))
  for (const s of [-1, 1]) for (const o of [R + 14, R + 34]) {
    const x = cx + s * (o + 10)
    L.profile.push(el(path(rect(x - 6, lintel + 6, 12, floor - lintel - 6), true)), el(path(rect(x - 9, lintel - 2, 18, 8), true)))
  }
  L.profile.push(line([cx - 200, floor], [cx + 200, floor]))
  B.add([cx - 200, lintel - R - 54], [cx + 200, floor])
  L.dims.push(hDim(floor + 22, cx - R, cx + R, 'TYMPANUM'))
  callouts(L, [
    { text: 'ARCHIVOLTS', at: [cx - R - 50, lintel - 70] },
    { text: 'MANDORLA', at: [cx - 18, lintel - 70] },
    { text: 'EVANGELIST ROUNDEL', at: [cx - 75, lintel - 70] },
    { text: 'TYMPANUM', at: [cx - 98, lintel - 20] },
    { text: 'LINTEL', at: [cx - R - 4, lintel + 13] },
    { text: 'JAMB COLUMN', at: [cx - R - 30, 520] },
    { text: 'TRUMEAU', at: [cx - 9, 540] },
  ], cx - 200)
  return finish(meta('tympanum', 'Tympanum', 'Carved field above a doorway lintel', 'ELEVATION', 'FAC-06',
    'Elevation of a Romanesque portal: the semicircular tympanum above the lintel holds a Christ in Majesty in a mandorla with the four evangelist symbols, framed by carved archivolts and divided below by a central trumeau.', 30, 'metres (indicative)',
    'After French Romanesque portals such as Moissac (c. 1130). Generic; not a copy. Original drawing by Project Exodus.'), L, B)
}

function spandrel(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 200
  const span = 120
  const spring = 440
  const r = span / 2 - 8
  const top = 330
  const floor = 580
  const n = 3
  // string course / entablature over the arcade
  L.profile.push(el(path(rect(x0 - 10, top - 26, n * span + 20, 26), true)), line([x0 - 10, top - 12], [x0 + n * span + 10, top - 12]))
  const cxs = Array.from({ length: n }, (_, i) => x0 + span / 2 + i * span)
  // spandrels between and beside arches, hatched to show the area
  for (let i = 0; i <= n; i++) {
    const xl = i === 0 ? x0 : cxs[i - 1]
    const xr = i === n ? x0 + n * span : cxs[i]
    let d = `M${f(xl)} ${top}H${f(xr)}`
    d += i === n ? `V${spring}` : `V${spring - r}A${r} ${r} 0 0 0 ${f(xr - r)} ${spring}`
    d += i === 0 ? `H${f(xl)}Z` : `H${f(xl + r)}A${r} ${r} 0 0 0 ${f(xl)} ${spring - r}Z`
    L.hatch.push(`<path d="${d}" fill="url(#h-stone)" stroke="none" opacity="0.5"/>`)
    // roundel (patera) with foliage
    if (i > 0 && i < n) {
      const c: Pt = [(xl + xr) / 2, top + 40]
      L.profile.push(circle(c, 18, PAPER), circle(c, 12))
      for (let k = 0; k < 8; k++) { const a = (k / 8) * 2 * Math.PI; L.fine.push(line([c[0] + 3 * Math.cos(a), c[1] + 3 * Math.sin(a)], [c[0] + 11 * Math.cos(a), c[1] + 11 * Math.sin(a)])) }
      L.fine.push(el(`M${f(c[0] - 18)} ${f(c[1] + 10)}q-14 20 -20 40M${f(c[0] + 18)} ${f(c[1] + 10)}q14 20 20 40`))
    }
  }
  // arches on columns
  for (const c of cxs) L.profile.push(el(`M${c - r} ${spring}A${r} ${r} 0 0 1 ${c + r} ${spring}`), el(`M${c - r - 8} ${spring}A${r + 8} ${r + 8} 0 0 1 ${c + r + 8} ${spring}`))
  for (let i = 0; i <= n; i++) {
    const x = x0 + i * span
    L.profile.push(el(path(rect(x - 8, spring, 16, floor - spring), true)), el(path(rect(x - 12, spring - 8, 24, 8), true)))
  }
  L.profile.push(line([x0 - 20, floor], [x0 + n * span + 20, floor]))
  B.add([x0 - 20, top - 26], [x0 + n * span + 20, floor])
  L.dims.push(hDim(floor + 22, x0, x0 + span, 'BAY'))
  callouts(L, [
    { text: 'STRING COURSE', at: [x0 - 10, top - 18] },
    { text: 'SPANDREL', at: [x0 + 10, top + 30] },
    { text: 'ROUNDEL (PATERA)', at: [cxs[0] + span / 2 - 18, top + 40] },
    { text: 'FOLIAGE TRAIL', at: [cxs[0] + span / 2 - 28, top + 62] },
    { text: 'ARCH', at: [cxs[0] - 40, spring - 30] },
    { text: 'COLUMN', at: [x0 + span - 8, 520] },
  ], x0 - 20)
  return finish(meta('decorative-spandrel', 'Decorative Spandrel', 'Ornamented triangle between arches', 'ELEVATION', 'FAC-07',
    'Elevation of an arcade with its spandrels, the roughly triangular wall areas between the curves of neighbouring arches and the course above, here carved with roundels and trailing foliage.', 30, 'metres (indicative)'), L, B)
}

function stringCourse(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 220
  const x1 = 520
  const levels = [580, 430, 290, 170]
  // wall with windows on three floors
  L.profile.push(el(path(rect(x0, levels[3], x1 - x0, levels[0] - levels[3]), true)))
  for (let f2 = 0; f2 < 3; f2++) {
    const yb = levels[f2] - 30
    const yt = levels[f2 + 1] + 24
    for (let k = 0; k < 3; k++) {
      const wx = x0 + 40 + k * 90
      L.fine.push(el(path(rect(wx, yt, 46, yb - yt), true)), line([wx + 23, yt], [wx + 23, yb]), line([wx, (yt + yb) / 2], [wx + 46, (yt + yb) / 2]))
      L.profile.push(el(path(rect(wx - 4, yb, 54, 6), true)))
    }
  }
  // string courses and cornice in elevation, and in section at the right end
  for (const y of [levels[1], levels[2]]) L.profile.push(el(path(rect(x0 - 6, y - 12, x1 - x0 + 6, 12), true)), line([x0 - 6, y - 4], [x1, y - 4]))
  L.profile.push(el(path(rect(x0 - 12, levels[3] - 20, x1 - x0 + 12, 20), true)))
  const wall = (y0: number, y1: number) => hatched(L, rect(x1, y0, 22, y1 - y0))
  wall(levels[3], levels[0])
  for (const y of [levels[1], levels[2]]) hatched(L, [[x1 + 22, y - 12], [x1 + 40, y - 12], [x1 + 40, y - 6], [x1 + 30, y - 2], [x1 + 30, y], [x1 + 22, y]])
  hatched(L, [[x1 + 22, levels[3] - 20], [x1 + 50, levels[3] - 20], [x1 + 50, levels[3] - 8], [x1 + 22, levels[3]]])
  for (const y of [levels[1], levels[2]]) L.center.push(el(`M${x1 + 34} ${y - 2}q2 14 0 30`))
  L.profile.push(line([x0 - 20, levels[0]], [x1 + 50, levels[0]]))
  B.add([x0 - 20, levels[3] - 20], [x1 + 50, levels[0]])
  L.dims.push(vDim(x1 + 64, levels[1], levels[2], 'STOREY', x1 + 40))
  callouts(L, [
    { text: 'CORNICE', at: [x0 - 12, levels[3] - 10] },
    { text: 'STRING COURSE', at: [x0 - 6, levels[2] - 6] },
    { text: 'WINDOW', at: [x0 + 40, 360] },
    { text: 'SILL', at: [x0 + 36, levels[1] - 27] },
    { text: 'STRING COURSE', at: [x0 - 6, levels[1] - 6] },
    { text: 'WALL', at: [x0, 520] },
  ], x0 - 20)
  L.notes.push(text(x1 + 4, levels[0] + 16, 'SECTION AT END', 'class="t-small"'), text(x1 + 44, levels[1] + 30, 'DRIP', 'class="t-small t-accent"'))
  return finish(meta('string-course', 'String Course', 'Horizontal band marking the floors on a façade', 'ELEVATION', 'FAC-08',
    'Elevation of a three-storey façade divided by projecting string courses at each floor, with the wall cut in section at the right to show how each course projects and throws water clear with a drip.', 30, 'metres (indicative)'), L, B)
}

function rustication(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 210
  const x1 = 520
  const bands = [
    { name: 'BANDED', y: 170, kind: 'banded' },
    { name: 'CHAMFERED (V-JOINT)', y: 270, kind: 'chamfer' },
    { name: 'VERMICULATED', y: 370, kind: 'verm' },
    { name: 'DIAMOND-POINT', y: 470, kind: 'diamond' },
  ] as const
  const h = 100
  const ch = 50
  let seed = 3
  const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280)
  for (const b of bands) {
    for (let row = 0; row < 2; row++) {
      const y = b.y + row * ch
      L.profile.push(line([x0, y], [x1, y]))
      if (b.kind === 'banded') { L.fine.push(line([x0, y + 4], [x1, y + 4])); continue }
      const off = row % 2 ? 40 : 0
      for (let x = x0 - off; x < x1; x += 80) {
        const a = Math.max(x0, x)
        const c = Math.min(x1, x + 80)
        if (x > x0) L.profile.push(line([x, y], [x, y + ch]))
        if (b.kind === 'chamfer') L.fine.push(el(path(rect(a + (x > x0 ? 5 : 0), y + 5, c - a - (x > x0 ? 5 : 0) - (c < x1 ? 5 : 0), ch - 10), true)))
        if (b.kind === 'verm') {
          let d = ''
          for (let k = 0; k < 7; k++) {
            let px = a + 6 + rnd() * (c - a - 20)
            let py = y + 6 + rnd() * (ch - 12)
            d += `M${f(px)} ${f(py)}`
            for (let s = 0; s < 4; s++) { px = Math.min(c - 4, Math.max(a + 4, px + (rnd() - 0.5) * 16)); py = Math.min(y + ch - 4, Math.max(y + 4, py + (rnd() - 0.5) * 12)); d += `L${f(px)} ${f(py)}` }
          }
          L.fine.push(el(d))
        }
        if (b.kind === 'diamond') {
          const mx = (a + c) / 2
          L.fine.push(el(`M${f(a)} ${y}L${f(mx - 10)} ${y + ch / 2}L${f(a)} ${y + ch}M${f(c)} ${y}L${f(mx + 10)} ${y + ch / 2}L${f(c)} ${y + ch}M${f(mx - 10)} ${y + ch / 2}H${f(mx + 10)}`))
        }
      }
    }
    // joint profile (section) at the right
    const sx = x1
    const prof: Pt[] = [[sx, b.y]]
    for (let row = 0; row < 2; row++) {
      const y = b.y + row * ch
      if (b.kind === 'chamfer' || b.kind === 'diamond') prof.push([sx + 12, y + (row ? 0 : 0)], [sx + 18, y + (b.kind === 'diamond' ? ch / 2 : 6)], [sx + 18, y + ch - (b.kind === 'diamond' ? ch / 2 : 6)], [sx + 12, y + ch])
      else prof.push([sx + 12, y], [sx + 18, y + 6], [sx + 18, y + ch - 6], [sx + 18, y + ch])
    }
    prof.push([sx, b.y + h])
    hatched(L, prof)
  }
  L.profile.push(line([x0, 570], [x1, 570]))
  B.add([x0, 170], [x1 + 18, 570])
  L.notes.push(text(x1 + 22, 166, 'JOINT', 'class="t-small"'), text(x1 + 22, 176, 'SECTION', 'class="t-small"'))
  callouts(L, bands.map((b) => ({ text: b.name, at: [x0, b.y + ch] as Pt })), x0)
  L.dims.push(hDim(590, x0, x0 + 80, 'BLOCK'))
  return finish(meta('rustication', 'Rustication', 'Masonry with emphasised joints and textured faces', 'ELEVATION', 'FAC-09',
    'Elevation of four common kinds of rustication: banded (horizontal channels only), chamfered with V-joints, vermiculated with worm-track tooling, and diamond-point faces, with the joint profile of each cut in section at the right.', 30, 'units (indicative)'), L, B)
}

function quoins(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const P = axo([350, 600], 'isometric')
  const W = 200
  const D = 160
  const H = 300
  // wall faces (brick), plinth and cornice
  face(L, P, [[0, 0, 0], [0, D, 0], [0, D, H], [0, 0, H]], 'dark')
  face(L, P, [[0, 0, 0], [W, 0, 0], [W, 0, H], [0, 0, H]], 'mid')
  let courses = ''
  for (let z = 12; z < H; z += 12) {
    const a = P([0, D, z]); const b = P([0, 0, z]); const c = P([W, 0, z])
    courses += `M${f(a[0])} ${f(a[1])}L${f(b[0])} ${f(b[1])}L${f(c[0])} ${f(c[1])}`
  }
  L.profile.push(el(courses, THIN))
  box(L, P, [-6, -6, 0], W + 6, D + 6, 20, { top: 'light', front: 'mid', side: 'dark' })
  // quoins: alternating long and short faces up the corner
  const qh = 30
  for (let k = 0; k * qh < H - 40; k++) {
    const z = 22 + k * qh
    const long = k % 2 === 0
    const lx = long ? 64 : 34
    const ly = long ? 34 : 64
    face(L, P, [[0, 0, z], [lx, 0, z], [lx, 0, z + qh - 3], [0, 0, z + qh - 3]], 'light')
    face(L, P, [[0, 0, z], [0, ly, z], [0, ly, z + qh - 3], [0, 0, z + qh - 3]], 'light')
  }
  box(L, P, [-10, -10, H], W + 10, D + 10, 16, { top: 'light', front: 'mid', side: 'dark' })
  addAxo(B, P, [0, D, H + 16], [W, 0, H + 16], [-10, -10, 0], [0, D, 0], [W, 0, 0])
  callouts(L, [
    { text: 'CORNICE', at: P([0, D / 2, H + 8]) },
    { text: 'QUOIN: LONG FACE', at: P([0, 20, 22 + 2 * qh + 14]) },
    { text: 'QUOIN: SHORT FACE', at: P([0, 20, 22 + 3 * qh + 14]) },
    { text: 'BRICK WALL', at: P([0, 120, 160]) },
    { text: 'ALTERNATING BOND', at: P([0, 4, 22 + 6 * qh]) },
    { text: 'PLINTH', at: P([0, D / 2, 10]) },
  ], P([0, D, 0])[0])
  return finish(meta('quoins', 'Quoins', 'Dressed stones at the corner of a building', 'ISOMETRIC', 'FAC-10',
    'Isometric of a building corner: large dressed stones are laid up the corner in alternating long and short faces, so that each course bonds into both walls and visibly strengthens the angle against the brickwork.', 26, 'units (indicative)'), L, B, AXO_DEFS)
}

function juliet(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const wx = 330
  const t = 40
  const floor = 520
  const head = 300
  // wall (cut) above and below the opening; floor slab inside
  hatched(L, rect(wx, 150, t, head - 150))
  hatched(L, rect(wx, floor, t, 120))
  hatched(L, rect(200, floor, wx - 200, 22), 'h-concrete')
  // lintel and threshold
  L.profile.push(el(path(rect(wx, head - 4, t, 4), true)), el(path(rect(wx - 6, floor - 6, t + 12, 6), true)))
  // French door (glazed leaf in the opening, opens inward)
  L.cut.push(line([wx + 14, head], [wx + 14, floor - 6], THIN), line([wx + 22, head], [wx + 22, floor - 6], THIN))
  L.profile.push(el(path(rect(wx + 10, head, 16, 12), true)), el(path(rect(wx + 10, floor - 30, 16, 24), true)))
  for (const y of [head + 70, head + 140]) L.fine.push(line([wx + 10, y], [wx + 26, y]))
  L.fine.push(el(`M${wx + 10} ${floor - 30}A120 120 0 0 0 ${wx - 100} ${floor - 90}`, DASH))
  // railing fixed across the outside of the opening, no platform
  const rx = wx + t + 8
  L.cut.push(line([rx, floor - 110], [rx, floor + 6]))
  L.profile.push(el(path(rect(rx - 3, floor - 116, 10, 6), true)))
  for (const y of [floor - 80, floor - 10]) L.profile.push(el(path([[wx + t, y], [rx, y]]), 'style="stroke-width: 3"'))
  // person at the opening
  figure(L, wx - 110, floor, 70)
  L.center.push(el(`M${rx + 20} ${floor + 10}V${floor + 110}`), el(`M${rx + 14} ${floor + 100}l6 10l6 -10`))
  L.notes.push(text(rx + 28, floor + 60, 'NO PLATFORM:', 'class="t-small t-accent"'), text(rx + 28, floor + 70, 'JUST A GUARD', 'class="t-small t-accent"'))
  B.add([200, 150], [rx + 30, 640])
  L.dims.push(vDim(rx + 34, floor, floor - 116, 'GUARD HEIGHT', rx + 6))
  callouts(L, [
    { text: 'WALL', at: [wx, 220] },
    { text: 'LINTEL', at: [wx, head - 2] },
    { text: 'FRENCH DOOR (OPENS IN)', at: [wx + 14, head + 40] },
    { text: 'DOOR SWING', at: [wx - 47, floor - 80] },
    { text: 'TOP RAIL', at: [rx - 3, floor - 113] },
    { text: 'FIXING BRACKET', at: [wx + t, floor - 80] },
    { text: 'THRESHOLD', at: [wx - 6, floor - 3] },
    { text: 'FLOOR SLAB', at: [220, floor + 11] },
  ], 200)
  return finish(meta('juliet-balcony', 'Juliet Balcony', 'Railing across a full-height window, without a platform', 'SECTION', 'FAC-11',
    'Section through a French door with a Juliet balcony: the doors open inward and a railing is fixed across the outside of the opening at guard height, so the window can stand open safely although there is no platform to step onto.', 30, 'metres (indicative)'), L, B)
}

// ---------------------------------------------------------------------------
// Gothic and carved fronts
// ---------------------------------------------------------------------------
function heraldicFacade(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const x0 = 250
  const x1 = 510
  const floor = 590
  const top = 140
  // flanking buttress-pinnacles
  for (const x of [x0 - 30, x1]) {
    L.profile.push(el(path(rect(x, top + 30, 30, floor - top - 30), true)), el(path([[x - 2, top + 30], [x + 15, top - 30], [x + 32, top + 30]], true)))
    for (let y = top - 10; y < top + 30; y += 12) L.fine.push(el(`M${x + 15 - (y - top + 30) * 0.28} ${y}l-6 -4M${x + 15 + (y - top + 30) * 0.28} ${y}l6 -4`))
  }
  // frame and cresting
  L.profile.push(el(path(rect(x0, top + 20, x1 - x0, floor - top - 20), true)))
  let crest = ''
  for (let x = x0; x < x1; x += 20) crest += `M${x} ${top + 20}q10 -26 20 0`
  L.profile.push(el(crest))
  // tiers like a retable: canopied niches with statues
  const niche = (x: number, y: number, w: number, h: number) => {
    L.fine.push(el(pointedArch(x, y + 24, w, y + h, 22)), el(`M${f(x - 2)} ${f(y + 6)}l${f(w / 2 + 2)} -16l${f(w / 2 + 2)} 16`))
    const fx = x + w / 2
    L.fine.push(circle([fx, y + 34], 4), el(`M${f(fx - 6)} ${f(y + h - 4)}L${f(fx - 4)} ${y + 40}H${f(fx + 4)}L${f(fx + 6)} ${f(y + h - 4)}Z`))
  }
  for (let k = 0; k < 5; k++) niche(x0 + 12 + k * 50, top + 40, 36, 80)
  for (const x of [x0 + 12, x1 - 48]) { niche(x, top + 140, 36, 80); niche(x, top + 240, 36, 80) }
  // royal arms with eagle supporter and crown
  L.profile.push(el(`M${cx - 70} ${top + 210}Q${cx - 120} ${top + 160} ${cx - 90} ${top + 140}Q${cx - 60} ${top + 170} ${cx - 50} ${top + 190}`), el(`M${cx + 70} ${top + 210}Q${cx + 120} ${top + 160} ${cx + 90} ${top + 140}Q${cx + 60} ${top + 170} ${cx + 50} ${top + 190}`))
  L.profile.push(circle([cx, top + 150], 12, PAPER))
  L.profile.push(el(`M${cx - 50} ${top + 180}h100v70q0 40 -50 56q-50 -16 -50 -56Z`, PAPER))
  L.fine.push(line([cx, top + 180], [cx, top + 306]), line([cx - 50, top + 230], [cx + 50, top + 230]))
  L.profile.push(el(`M${cx - 24} ${top + 176}l4 -16l8 8l8 -12l8 12l8 -8l4 16Z`))
  // portal at the base
  L.profile.push(el(pointedArch(cx - 40, floor - 80, 80, floor, 60)))
  L.fine.push(el(pointedArch(cx - 50, floor - 80, 100, floor, 74)))
  L.profile.push(line([x0 - 60, floor], [x1 + 60, floor]))
  B.add([x0 - 60, top - 30], [x1 + 60, floor])
  L.dims.push(hDim(floor + 22, x0, x1, 'FRONTISPIECE'))
  callouts(L, [
    { text: 'BUTTRESS-PINNACLE', at: [x0 - 15, top] },
    { text: 'CRESTING', at: [x0 + 10, top + 12] },
    { text: 'CANOPIED NICHE', at: [x0 + 12, top + 70] },
    { text: 'EAGLE SUPPORTER', at: [cx - 98, top + 160] },
    { text: 'ROYAL ARMS', at: [cx - 50, top + 240] },
    { text: 'STATUE', at: [x0 + 24, top + 300] },
    { text: 'PORTAL', at: [cx - 40, floor - 40] },
  ], x0 - 60)
  return finish(meta('heraldic-altarpiece-facade', 'Heraldic Altarpiece Façade', 'Entrance front composed like a carved altarpiece', 'ELEVATION', 'FAC-12',
    'Elevation of a late-Gothic Spanish frontispiece over a portal, laid out like an altarpiece in tiers of canopied niches with statues around a huge royal coat of arms held by an eagle, between pinnacled buttresses under a cresting.', 30, 'metres (indicative)',
    'After Spanish retable-façades such as San Pablo and San Gregorio, Valladolid (late 15th c.). Generic; not a survey. Original drawing by Project Exodus.'), L, B)
}

function isabelline(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const floor = 590
  const spring = 420
  const ow = 120
  // alfiz frame and cresting
  L.profile.push(el(path(rect(cx - 130, 200, 260, floor - 200), true)), el(path(rect(cx - 118, 212, 236, floor - 212), true)))
  let crest = ''
  for (let x = cx - 130; x < cx + 130; x += 16) crest += `M${x} 200l8 -16l8 16`
  L.profile.push(el(crest))
  // ogee (conopial) arch with ball ornaments along the moulding
  const ogee = (w: number, rise: number) => `M${cx - w / 2} ${floor}V${spring}C${cx - w / 2} ${spring - rise * 0.6} ${cx - 10} ${spring - rise * 0.5} ${cx} ${spring - rise}C${cx + 10} ${spring - rise * 0.5} ${cx + w / 2} ${spring - rise * 0.6} ${cx + w / 2} ${spring}V${floor}`
  L.profile.push(el(ogee(ow, 90)), el(ogee(ow + 26, 110)))
  for (let k = 0; k < 14; k++) {
    const t = k / 13
    const y = floor - t * (floor - spring)
    L.fine.push(circle([cx - ow / 2 - 7, y], 4), circle([cx + ow / 2 + 7, y], 4))
  }
  for (let k = 1; k < 8; k++) {
    const t = k / 8
    const x = cx - (ow / 2 + 7) * (1 - t)
    const y = spring - 100 * Math.pow(t, 1.6)
    L.fine.push(circle([x, y], 4), circle([2 * cx - x, y], 4))
  }
  L.fine.push(el(`M${cx} ${spring - 110}v-24m-8 8h16`))
  // flanking pinnacles
  for (const s of [-1, 1]) {
    const x = cx + s * (ow / 2 + 34)
    L.profile.push(el(path(rect(x - 6, 280, 12, floor - 280), true)), el(path([[x - 9, 280], [x, 236], [x + 9, 280]], true)))
  }
  // yoke-and-arrows emblems and a shield over the arch
  for (const s of [-1, 1]) {
    const ex = cx + s * 80
    L.fine.push(el(`M${ex - 16} 250q16 -12 32 0M${ex - 16} 256q16 -12 32 0`), el(`M${ex} 236v44M${ex - 10} 238l20 40M${ex + 10} 238l-20 40`))
  }
  L.profile.push(el(`M${cx - 22} 228h44v26q0 22 -22 30q-22 -8 -22 -30Z`, PAPER))
  L.profile.push(line([cx - 190, floor], [cx + 190, floor]))
  B.add([cx - 190, 184], [cx + 190, floor])
  L.dims.push(hDim(floor + 22, cx - ow / 2, cx + ow / 2, 'DOOR'))
  callouts(L, [
    { text: 'CRESTING', at: [cx - 130, 196] },
    { text: 'YOKE-AND-ARROWS EMBLEM', at: [cx - 96, 252] },
    { text: 'PINNACLE', at: [cx - ow / 2 - 34, 300] },
    { text: 'OGEE (CONOPIAL) ARCH', at: [cx - 30, spring - 70] },
    { text: 'BALL ORNAMENT', at: [cx - ow / 2 - 11, 480] },
    { text: 'ALFIZ FRAME', at: [cx - 130, 540] },
  ], cx - 190)
  return finish(meta('isabelline-facade', 'Isabelline Façade', 'Spanish late-Gothic portal under the Catholic Monarchs', 'ELEVATION', 'FAC-13',
    'Elevation of an Isabelline Gothic portal: an ogee arch whose mouldings are studded with stone balls, flanked by slender pinnacles and the yoke-and-arrows emblems of the Catholic Monarchs, within a rectangular frame topped by cresting.', 30, 'metres (indicative)',
    'After Isabelline Gothic portals such as San Juan de los Reyes, Toledo (1477–1504). Generic; not a survey. Original drawing by Project Exodus.'), L, B)
}

function rockCut(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const cx = 380
  const floor = 600
  const x0 = 240
  const x1 = 520
  // cliff of living rock around the carved front (evenodd hole)
  const outline: Pt[] = [[x0 - 4, floor], [x0 - 4, 200], [cx - 50, 200], [cx - 50, 110], [cx + 50, 110], [cx + 50, 200], [x1 + 4, 200], [x1 + 4, floor]]
  const cliff = `M190 ${floor}V170Q230 120 270 96Q330 70 400 76Q470 70 530 110Q570 140 570 ${floor}Z${path(outline, true)}`
  L.hatch.push(`<path d="${cliff}" fill="url(#h-stone)" fill-rule="evenodd" stroke="none"/>`)
  L.fine.push(el(`M190 170Q230 120 270 96Q330 70 400 76Q470 70 530 110Q570 140 570 ${floor}`))
  // lower storey: six columns, pediment
  const lt = 400
  for (let k = 0; k < 6; k++) column(L, x0 + 20 + k * ((x1 - x0 - 40) / 5), floor, lt, 20, 'doric')
  L.profile.push(el(path(rect(x0, lt - 24, x1 - x0, 24), true)))
  L.profile.push(el(path([[x0 + 40, lt - 24], [cx, lt - 70], [x1 - 40, lt - 24]], true)))
  L.profile.push(`<path d="${path(rect(cx - 20, floor - 120, 40, 120), true)}" class="solid"/>`)
  // upper storey: tholos between broken half-pediments, urn on top
  const ut = 230
  const ub = lt - 70
  for (const s of [-1, 1]) {
    const px = s < 0 ? x0 : x1
    for (const k of [0, 1]) L.profile.push(el(path(rect(px + s * -(10 + k * 34) - 6, ut + 14, 12, ub - ut - 14), true)))
    L.profile.push(el(path([[px, ut + 14], [px - s * 30, ut - 10], [px - s * 74, ut - 10], [px - s * 74, ut + 14]], true)))
  }
  L.profile.push(el(path(rect(cx - 46, ut, 92, ub - ut), true)))
  for (const x of [cx - 34, cx, cx + 34]) L.fine.push(line([x, ut + 10], [x, ub]))
  L.profile.push(el(`M${cx - 50} ${ut}Q${cx} ${ut - 60} ${cx + 50} ${ut}Z`))
  L.profile.push(el(`M${cx - 10} ${ut - 30}q-8 -20 0 -30h20q8 10 0 30Z`))
  L.profile.push(line([170, floor], [580, floor]))
  B.add([190, 70], [570, floor])
  L.dims.push(hDim(floor + 22, x0, x1, 'CARVED FRONT'))
  callouts(L, [
    { text: 'URN', at: [cx - 10, ut - 45] },
    { text: 'THOLOS', at: [cx - 46, ut + 30] },
    { text: 'BROKEN PEDIMENT', at: [x0 + 20, ut] },
    { text: 'LIVING ROCK (CLIFF)', at: [210, 300] },
    { text: 'PEDIMENT', at: [cx - 60, lt - 40] },
    { text: 'PORTICO COLUMNS', at: [x0 + 10, 500] },
    { text: 'DOORWAY', at: [cx - 20, floor - 60] },
  ], 190)
  return finish(meta('rock-cut-facade', 'Rock-Cut Façade', 'Architectural front carved from a cliff face', 'ELEVATION', 'FAC-14',
    'Elevation of a two-storey temple front carved directly out of a cliff: a columned portico with a pediment below, and above it a round tholos between broken half-pediments, all cut from the living rock that still surrounds it.', 30, 'metres (indicative)',
    'After Al-Khazneh (the Treasury), Petra, Jordan (1st c. CE). Simplified; not a survey. Original drawing by Project Exodus.'), L, B)
}

// ---------------------------------------------------------------------------
// Spaces in depth (oblique)
// ---------------------------------------------------------------------------
function loggia(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const s = 0.95
  const P0 = axo([200, 610], 'oblique', 0.5)
  const P = Object.assign((p: P3) => P0([p[0] * s, p[1] * s, p[2] * s]), { kind: P0.kind })
  const W = 340
  const D = 120
  const H = 300
  const lx0 = 30
  const lx1 = 310
  const lz0 = 160
  const lz1 = 270
  const ld = 50 // loggia depth
  // recess interior first: back wall, floor, left side wall (faces +x, visible)
  face(L, P, [[lx0, ld, lz0], [lx1, ld, lz0], [lx1, ld, lz1], [lx0, ld, lz1]], 'mid')
  face(L, P, [[lx0, 0, lz0], [lx1, 0, lz0], [lx1, ld, lz0], [lx0, ld, lz0]], 'light')
  face(L, P, [[lx0, 0, lz0], [lx0, ld, lz0], [lx0, ld, lz1], [lx0, 0, lz1]], 'dark')
  // doors in the back wall
  for (let k = 0; k < 3; k++) {
    const x = lx0 + 50 + k * 90
    L.profile.push(el(path([P([x, ld, lz0]), P([x, ld, lz0 + 60]), P([x + 30, ld, lz0 + 60]), P([x + 30, ld, lz0])])))
  }
  // side and top of the block
  face(L, P, [[W, 0, 0], [W, D, 0], [W, D, H], [W, 0, H]], 'dark')
  face(L, P, [[0, 0, H], [W, 0, H], [W, D, H], [0, D, H]], 'light')
  // front face with arched openings (evenodd holes)
  const bays = 5
  const bw = (lx1 - lx0) / bays
  const pier = 10
  const r = (bw - pier) / 2
  const spring = lz1 - r - 6
  let holes = ''
  for (let k = 0; k < bays; k++) {
    const a = lx0 + k * bw + pier / 2
    const pts: P3[] = [[a, 0, lz0]]
    for (let i = 0; i <= 12; i++) { const t = Math.PI - (i / 12) * Math.PI; pts.push([a + r + r * Math.cos(t), 0, spring + r * Math.sin(t)]) }
    pts.push([a + 2 * r, 0, lz0])
    holes += path(pts.map(P), true)
  }
  const front = path([P([0, 0, 0]), P([W, 0, 0]), P([W, 0, H]), P([0, 0, H])], true) + holes
  L.profile.push(`<path d="${front}" fill-rule="evenodd" style="fill: var(--_paper)"/>`, `<path d="${front}" fill-rule="evenodd" fill="url(#h-tone)" stroke="none" opacity="0.6"/>`, el(front))
  // balustrade across the openings, cornice, ground-floor openings
  let bal = ''
  for (let x = lx0 + 4; x < lx1; x += 7) { const a = P([x, 0, lz0]); const b = P([x, 0, lz0 + 24]); bal += `M${f(a[0])} ${f(a[1])}L${f(b[0])} ${f(b[1])}` }
  L.profile.push(el(bal, THIN), el(path([P([lx0, 0, lz0 + 26]), P([lx1, 0, lz0 + 26])])))
  box(L, P, [-8, -8, H], W + 16, D + 16, 12, { top: 'light', front: 'mid', side: 'dark' })
  for (let k = 0; k < 4; k++) {
    const x = 40 + k * 76
    L.profile.push(el(path([P([x, 0, 0]), P([x, 0, k === 1 || k === 2 ? 90 : 70]), P([x + 36, 0, k === 1 || k === 2 ? 90 : 70]), P([x + 36, 0, 0])])))
  }
  L.fine.push(line(P([-30, 0, 0]), P([W + 30, 0, 0])))
  addAxo(B, P, [-8, -8, H + 12], [W + 8, D + 8, H + 12], [-30, 0, 0], [W + 30, 0, 0], [W, D, 0])
  callouts(L, [
    { text: 'CORNICE', at: P([20, 0, H + 6]) },
    { text: 'ARCADED LOGGIA', at: P([lx0 + bw / 2, 0, spring + r]) },
    { text: 'RECESS (OPEN TO AIR)', at: P([lx0 + 4, 20, lz1 - 20]) },
    { text: 'BACK WALL WITH DOORS', at: P([lx0 + 50, ld, lz0 + 40]) },
    { text: 'BALUSTRADE', at: P([lx0 + 4, 0, lz0 + 14]) },
    { text: 'GROUND FLOOR', at: P([40, 0, 40]) },
  ], P([0, 0, 0])[0])
  return finish(meta('loggia', 'Loggia', 'Roofed gallery open to the air on one side', 'OBLIQUE', 'FAC-15',
    'Oblique view of a palazzo whose upper floor is set back behind an open arcade: the loggia is a roofed room open to the outside, its back wall and floor visible through the arches above a balustrade.', 26, 'metres (indicative)'), L, B, AXO_DEFS)
}

function porteCochere(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const P = axo([210, 560], 'oblique', 0.5)
  const W = 320
  const D = 100
  const H = 170
  // building
  face(L, P, [[W, 0, 0], [W, D, 0], [W, D, H], [W, 0, H]], 'dark')
  face(L, P, [[0, 0, H], [W, 0, H], [W, D, H], [0, D, H]], 'light')
  face(L, P, [[0, 0, 0], [W, 0, 0], [W, 0, H], [0, 0, H]], 'mid')
  for (const x of [30, 250]) face(L, P, [[x, 0, 30], [x + 40, 0, 30], [x + 40, 0, 80], [x, 0, 80]], 'light')
  face(L, P, [[140, 0, 0], [180, 0, 0], [180, 0, 70], [140, 0, 70]], 'dark')
  // driveway
  L.fine.push(el(path([P([40, -150, 0]), P([280, -150, 0])])), el(path([P([40, -20, 0]), P([280, -20, 0])])))
  // car under the canopy (low box with a cabin)
  box(L, P, [115, -96, 6], 110, 46, 26, { top: 'light', front: 'mid', side: 'dark' })
  box(L, P, [145, -90, 32], 56, 36, 18, { top: 'light', front: 'light', side: 'mid' })
  for (const x of [135, 205]) L.profile.push(circle(P([x, -96, 8]), 9))
  // columns at the outer edge and the canopy roof
  for (const x of [90, 230]) box(L, P, [x, -130, 0], 10, 10, 104, { top: 'light', front: 'light', side: 'mid' })
  box(L, P, [80, -136, 104], 170, 136, 12, { top: 'light', front: 'mid', side: 'dark' })
  figure(L, P([170, -60, 0])[0], P([170, -60, 0])[1], 56)
  L.fine.push(line(P([-30, 0, 0]), P([W + 30, 0, 0])))
  addAxo(B, P, [-30, 0, 0], [W + 30, 0, 0], [W, D, H], [0, D, H], [80, -136, 0], [250, -150, 0])
  callouts(L, [
    { text: 'BUILDING', at: P([20, 0, 140]) },
    { text: 'CANOPY (ROOF OVER DRIVE)', at: P([82, -136, 110]) },
    { text: 'ENTRANCE DOOR', at: P([142, 0, 50]) },
    { text: 'COLUMN', at: P([90, -130, 60]) },
    { text: 'ALIGHTING UNDER COVER', at: P([164, -60, 30]) },
    { text: 'DRIVEWAY', at: P([60, -150, 0]) },
  ], P([0, 0, 0])[0] - 20)
  return finish(meta('porte-cochere', 'Porte-Cochère', 'Covered drive-through at an entrance', 'OBLIQUE', 'FAC-16',
    'Oblique view of a porte-cochère: a roof on columns projects from the main entrance over the driveway, so that a vehicle can draw up alongside the door and its passengers alight under cover.', 26, 'metres (indicative)'), L, B, AXO_DEFS)
}

// ---------------------------------------------------------------------------
// Modern envelopes
// ---------------------------------------------------------------------------
function curvedFacade(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const c: Pt = [380, 640]
  const ro = 360
  const ri = 200
  const a0 = -Math.PI / 2 - 0.44
  const a1 = -Math.PI / 2 + 0.44
  const at = (r: number, a: number): Pt => [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)]
  // floor plate between the curved façade and the inner wall
  const outer = Array.from({ length: 41 }, (_, i) => at(ro, a0 + (i / 40) * (a1 - a0)))
  const inner = Array.from({ length: 41 }, (_, i) => at(ri, a1 - (i / 40) * (a1 - a0)))
  L.profile.push(el(path([...outer, ...inner], true)))
  hatched(L, [...Array.from({ length: 21 }, (_, i) => at(ri, a0 + (i / 20) * (a1 - a0))), ...Array.from({ length: 21 }, (_, i) => at(ri - 14, a1 - (i / 20) * (a1 - a0)))])
  hatched(L, [at(ri - 14, a0), at(ro, a0), at(ro, a0 + 0.02), at(ri - 14, a0 + 0.02)])
  hatched(L, [at(ri - 14, a1 - 0.02), at(ro, a1 - 0.02), at(ro, a1), at(ri - 14, a1)])
  // glazing: double line and mullions on radial lines
  L.profile.push(el(path(Array.from({ length: 41 }, (_, i) => at(ro - 4, a0 + (i / 40) * (a1 - a0))))))
  for (let i = 0; i <= 22; i++) { const a = a0 + (i / 22) * (a1 - a0); L.fine.push(line(at(ro - 6, a), at(ro + 2, a))) }
  // radial structural grid and columns
  for (let i = 0; i <= 6; i++) {
    const a = a0 + 0.04 + (i / 6) * (a1 - a0 - 0.08)
    L.center.push(line(at(ri - 30, a), at(ro + 20, a)))
    for (const r of [ro - 40, ri + 50]) L.profile.push(el(path(rect(at(r, a)[0] - 5, at(r, a)[1] - 5, 10, 10), true)))
  }
  // core
  hatched(L, `${path(rect(c[0] - 40, c[1] - ri - 110, 80, 60), true)}${path(rect(c[0] - 30, c[1] - ri - 100, 60, 40).reverse(), true)}`)
  // centre of curvature and radius
  L.center.push(line(c, at(ri - 30, -Math.PI / 2 + 0.3)))
  L.dims.push(el(path([c, at(ro, -Math.PI / 2 + 0.3)])), text(at(ro * 0.72, -Math.PI / 2 + 0.3)[0] + 6, at(ro * 0.72, -Math.PI / 2 + 0.3)[1], 'R'))
  L.profile.push(circle(c, 3, 'class="solid"'))
  B.add(at(ro + 20, a0), at(ro + 20, a1), [c[0], c[1] - ro - 20], c)
  callouts(L, [
    { text: 'CURVED GLASS FAÇADE', at: at(ro, -Math.PI / 2 - 0.2) },
    { text: 'MULLIONS ON RADIAL LINES', at: at(ro, a0 + 0.06) },
    { text: 'COLUMN ON RADIAL GRID', at: [at(ro - 40, a0 + 0.04)[0] - 5, at(ro - 40, a0 + 0.04)[1]] },
    { text: 'FLOOR PLATE', at: at(ri + 90, -Math.PI / 2 - 0.25) },
    { text: 'CORE', at: [c[0] - 40, c[1] - ri - 80] },
    { text: 'INNER WALL', at: at(ri, a0 + 0.04) },
    { text: 'CENTRE OF CURVATURE', at: c },
  ], at(ro, a0)[0] - 10)
  return finish(meta('curved-facade', 'Curved Façade', 'Building front following an arc in plan', 'PLAN', 'FAC-17',
    'Plan of a floor whose façade follows an arc: the structural grid, the mullions and the inner wall are all set out on radial lines from a single centre of curvature, so every bay is the same angle and the glass reads as one continuous sweep.', 30, 'metres (indicative)'), L, B)
}

function betonBrut(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 200
  const x1 = 430
  const y0 = 150
  const y1 = 570
  L.profile.push(el(path(rect(x0, y0, x1 - x0, y1 - y0), true)))
  // board marks with varied widths, two lifts, panel joints, tie holes, a crisp window
  let seed = 11
  const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280)
  let boards = ''
  for (let y = y0 + 12; y < y1; y += 10 + Math.floor(rnd() * 6)) boards += `M${x0} ${y}H${x1}`
  L.shading.push(el(boards))
  L.profile.push(line([x0, 360], [x1, 360]))
  for (const x of [x0 + 115]) L.fine.push(line([x, y0], [x, y1]))
  for (let y = y0 + 30; y < y1; y += 60) for (let x = x0 + 25; x < x1; x += 60) L.fine.push(circle([x, y], 3), circle([x, y], 1))
  L.profile.push(el(path(rect(x0 + 60, 210, 110, 90), true)))
  // formwork section (during the pour)
  const sx = 480
  hatched(L, rect(sx, 200, 40, 340), 'h-concrete')
  for (const s of [-1, 1]) {
    const fx = s < 0 ? sx - 6 : sx + 40
    L.profile.push(el(path(rect(fx, 200, 6, 340), true)))
    for (let y = 210; y < 540; y += 40) L.fine.push(el(path(rect(s < 0 ? fx - 14 : fx + 6, y, 14, 30), true)))
    L.profile.push(el(path(rect(s < 0 ? fx - 22 : fx + 20, 250, 8, 240), true)))
  }
  for (const y of [300, 440]) {
    L.cut.push(line([sx - 30, y], [sx + 70, y], THIN))
    for (const x of [sx - 30, sx + 70]) L.profile.push(el(path(rect(x - 3, y - 5, 6, 10), true)))
    L.fine.push(el(`M${sx} ${y - 6}l8 6l-8 6ZM${sx + 40} ${y - 6}l-8 6l8 6Z`))
  }
  L.notes.push(text(sx - 30, 190, 'FORMWORK SECTION', 'class="t-small"'))
  B.add([x0, y0], [sx + 70, y1])
  L.dims.push(hDim(y1 + 22, x0 + 25, x0 + 85, 'TIE SPACING'))
  callouts(L, [
    { text: 'WINDOW (SHARP ARRIS)', at: [x0 + 60, 250] },
    { text: 'BOARD MARKS', at: [x0, 330] },
    { text: 'LIFT LINE (DAY JOINT)', at: [x0, 360] },
    { text: 'FORM-TIE HOLE', at: [x0 + 25, 390] },
    { text: 'PANEL JOINT', at: [x0 + 115, 480] },
  ], x0)
  L.notes.push(text(sx + 82, 300, 'TIE + CONE', 'class="t-small"'), text(sx + 82, 380, 'BOARDS', 'class="t-small"'), text(sx + 82, 480, 'WALER', 'class="t-small"'))
  return finish(meta('beton-brut', 'Béton Brut', 'Raw concrete left as it comes out of the formwork', 'ELEVATION · SECTION', 'FAC-18',
    'Elevation of a raw concrete wall showing the marks of its making: board grain from the timber forms, a day joint between lifts, plywood panel joints and a grid of form-tie holes; the section shows the boards, walers and ties that left them.', 30, 'metres (indicative)'), L, B)
}

function bushHammered(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 200
  const x1 = 540
  const strip = (y: number, rough: boolean) => {
    const pts: Pt[] = [[x0, y + 80]]
    for (let x = x0; x < x1; x += 40) {
      if (rough) pts.push([x, y + 30], [x + 10, y + 6], [x + 14, y + 10], [x + 18, y + 2], [x + 23, y + 8], [x + 27, y + 4], [x + 30, y + 30])
      else pts.push([x, y + 30], [x + 10, y], [x + 30, y], [x + 40 - 0.01, y + 30])
    }
    pts.push([x1, y + 30], [x1, y + 80])
    hatched(L, pts, 'h-concrete')
    if (rough) for (let x = x0 + 12; x < x1; x += 40) L.fine.push(circle([x + 4, y + 12], 2.5), circle([x + 14, y + 16], 2), circle([x + 9, y + 22], 1.8))
  }
  strip(220, false)
  strip(430, true)
  L.notes.push(text(x0, 205, 'AS CAST: SMOOTH RIBS', 'class="t-small"'), text(x0, 415, 'AFTER BUSH-HAMMERING', 'class="t-small"'))
  // timber form insert that made the ribs (dashed) and the hammer head
  L.fine.push(el(path([[x0 + 40, 220], [x0 + 50, 190], [x0 + 70, 190], [x0 + 80, 220]]), DASH))
  const hx = 380
  L.profile.push(el(path(rect(hx - 30, 330, 60, 30), true)), el(path(rect(hx - 6, 280, 12, 50), true)))
  let teeth = ''
  for (let x = hx - 28; x < hx + 28; x += 8) teeth += `M${x} 360l4 8l4 -8`
  L.profile.push(el(teeth))
  arrow(L, [hx, 372], [hx, 420])
  B.add([x0, 190], [x1, 510])
  L.dims.push(hDim(530, x0, x0 + 40, 'RIB PITCH'))
  callouts(L, [
    { text: 'FORM INSERT (TIMBER)', at: [x0 + 50, 196] },
    { text: 'RIB, AS CAST', at: [x0 + 50, 222] },
    { text: 'WALL', at: [x0 + 4, 280] },
    { text: 'BUSH HAMMER HEAD', at: [hx - 30, 345] },
    { text: 'FRACTURED RIB TIP', at: [x0 + 58, 436] },
    { text: 'EXPOSED AGGREGATE', at: [x0 + 92, 444] },
  ], x0)
  return finish(meta('bush-hammered-concrete', 'Bush-Hammered Concrete', 'Concrete ribs broken back to expose the stone', 'SECTION', 'FAC-19',
    'Section through a ribbed concrete wall before and after bush-hammering: ribs cast against timber inserts are struck with a toothed hammer that breaks their tips into a rough, shadowed texture exposing the aggregate.', 40, 'units (indicative)'), L, B)
}

function doubleSkin(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const xi = 360
  const xo = 430
  const floors = [200, 380, 560]
  for (const y of floors) hatched(L, rect(200, y, xi - 200, 20), 'h-concrete')
  for (let k = 0; k < 2; k++) {
    const yt = floors[k] + 20
    const yb = floors[k + 1]
    // inner skin: insulated glazing with an openable top-hung window
    L.cut.push(line([xi, yt], [xi, yb], THIN), line([xi + 6, yt], [xi + 6, yb], THIN))
    L.profile.push(el(path([[xi + 6, yt + 10], [xi + 26, yt + 60]])))
    // grille catwalk at slab level, blinds in the cavity
    L.fine.push(line([xi + 6, floors[k + 1] + 4], [xo, floors[k + 1] + 4], DASH))
    for (let y = yt + 30; y < yb - 20; y += 12) L.fine.push(line([xi + 30, y], [xi + 44, y + 6]))
    // air inlet low, outlet high
    arrow(L, [xo + 30, yb - 14], [xo + 2, yb - 14])
    arrow(L, [xi + 40, yb - 30], [xi + 40, yt + 30])
    arrow(L, [xo - 2, yt + 14], [xo + 30, yt + 14])
  }
  // outer skin: single glazing with louvres at each floor
  L.cut.push(line([xo, floors[0]], [xo, floors[2] + 20], THIN))
  for (const y of floors) for (let k = 0; k < 3; k++) L.fine.push(line([xo - 4, y + k * 6], [xo + 6, y + k * 6 + 4]))
  // sun
  arrow(L, [560, 260], [xo + 4, 300])
  L.notes.push(text(500, 250, 'SUN', 'class="t-small t-accent"'))
  B.add([200, floors[0]], [xo + 30, floors[2] + 20])
  L.dims.push(hDim(floors[2] + 46, xi, xo, 'CAVITY'))
  callouts(L, [
    { text: 'AIR OUTLET', at: [xo, floors[0] + 34] },
    { text: 'OPENABLE WINDOW', at: [xi + 16, floors[0] + 50] },
    { text: 'SOLAR BLINDS', at: [xi + 30, floors[0] + 90] },
    { text: 'INNER SKIN (DOUBLE GLAZED)', at: [xi, floors[0] + 130] },
    { text: 'OUTER SKIN (SINGLE GLASS)', at: [xo, floors[0] + 150] },
    { text: 'WARM AIR RISES', at: [xi + 40, floors[1] - 90] },
    { text: 'MAINTENANCE GRILLE', at: [xi + 20, floors[1] + 4] },
    { text: 'AIR INLET', at: [xo, floors[1] - 14] },
    { text: 'FLOOR SLAB', at: [210, floors[1] + 10] },
  ], 200)
  return finish(meta('double-skin-facade', 'Double-Skin Façade', 'Two layers of glass with a ventilated cavity', 'SECTION', 'FAC-20',
    'Section through a double-skin façade over two storeys: an outer single glass skin and an inner insulated skin enclose a ventilated cavity holding solar blinds and maintenance grilles; air enters low, warms, rises and leaves high at each floor.', 30, 'metres (indicative)'), L, B)
}

function etfe(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 230
  const x1 = 530
  const y = 360
  // three foils clamped at both ends: outer bulges up, inner down, middle between
  L.profile.push(el(`M${x0} ${y}Q${(x0 + x1) / 2} ${y - 150} ${x1} ${y}`), el(`M${x0} ${y}Q${(x0 + x1) / 2} ${y - 50} ${x1} ${y}`, DASH), el(`M${x0} ${y}Q${(x0 + x1) / 2} ${y + 110} ${x1} ${y}`))
  // aluminium clamp extrusions on steel rafters, gutter between cushions
  for (const x of [x0, x1]) {
    L.profile.push(el(path(rect(x - 14, y - 6, 28, 16), true)), el(path(rect(x - 6, y + 10, 12, 14), true)))
    hatched(L, rect(x - 10, y + 24, 20, 60), 'h-stone')
    L.fine.push(el(`M${x - 14} ${y - 6}q14 -10 28 0`))
  }
  // air supply from the inflation unit
  L.fine.push(el(`M${x1 + 6} ${y + 2}C${x1 + 30} ${y + 2} ${x1 + 20} ${y + 120} ${x1 - 40} ${y + 140}`), el(path(rect(x1 - 120, y + 126, 80, 34), true)))
  L.notes.push(text(x1 - 112, y + 147, 'INFLATION UNIT', 'class="t-small"'))
  arrow(L, [x1 + 12, y + 60], [x1 + 8, y + 10])
  L.notes.push(text((x0 + x1) / 2, y - 40, 'AIR ≈ 250 PA', 'class="t-small t-accent" text-anchor="middle"'))
  // rain and light
  for (const x of [300, 380, 460]) L.center.push(line([x - 10, y - 160], [x, y - 120]))
  B.add([x0 - 14, y - 160], [x1 + 30, y + 160])
  L.dims.push(hDim(y + 180, x0, x1, 'SPAN'))
  callouts(L, [
    { text: 'OUTER FOIL', at: [(x0 + x1) / 2 - 40, y - 72] },
    { text: 'MIDDLE FOIL (PRINTED)', at: [(x0 + x1) / 2 - 60, y - 22] },
    { text: 'AIR CHAMBERS', at: [(x0 + x1) / 2 - 20, y + 20] },
    { text: 'INNER FOIL', at: [(x0 + x1) / 2 - 40, y + 52] },
    { text: 'CLAMP EXTRUSION', at: [x0 - 14, y] },
    { text: 'STEEL RAFTER', at: [x0 - 10, y + 60] },
    { text: 'AIR SUPPLY HOSE', at: [x1 + 18, y + 60] },
  ], x0 - 14)
  return finish(meta('etfe-cushion', 'ETFE Cushion', 'Inflated pillow of thin plastic film', 'SECTION', 'FAC-21',
    'Section through an ETFE cushion: three layers of thin fluoropolymer film clamped in aluminium extrusions on steel rafters, kept inflated at low pressure by a small air supply so that the outer and inner layers bulge into a stiff, insulating pillow.', 30, 'metres (indicative)'), L, B)
}

function greenWall(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const wx = 200
  const top = 160
  const bot = 590
  hatched(L, rect(wx, top, 40, bot - top), 'h-concrete')
  L.cut.push(line([wx + 42, top], [wx + 42, bot], THIN))
  L.profile.push(el(path(rect(wx + 52, top, 6, bot - top), true)))
  // stacked planting modules with angled pockets, plants, drip line
  const mh = 70
  for (let k = 0; k < 6; k++) {
    const y = top + 10 + k * mh
    L.profile.push(el(path([[wx + 60, y], [wx + 112, y + 16], [wx + 112, y + mh - 6], [wx + 60, y + mh - 6]], true)))
    L.hatch.push(`<path d="${path([[wx + 64, y + 16], [wx + 108, y + 26], [wx + 108, y + mh - 10], [wx + 64, y + mh - 10]], true)}" fill="url(#h-earth)" stroke="none"/>`)
    L.fine.push(circle([wx + 70, y + 8], 3.5))
    L.fine.push(el(`M${wx + 108} ${y + 22}q30 -20 52 -6q-26 4 -52 6M${wx + 104} ${y + 26}q24 -30 26 -44q-14 20 -26 44M${wx + 108} ${y + 24}q40 4 60 24q-34 -8 -60 -24`))
  }
  hatched(L, [[wx + 58, bot - 8], [wx + 130, bot - 8], [wx + 130, bot], [wx + 58, bot]], 'h-stone')
  L.center.push(el(`M${wx + 70} ${top + 18}V${bot - 12}`, DASH))
  B.add([wx, top], [wx + 170, bot])
  L.dims.push(hDim(bot + 22, wx + 42, wx + 112, 'BUILD-UP'))
  callouts(L, [
    { text: 'STRUCTURAL WALL', at: [wx, 260] },
    { text: 'WATERPROOF MEMBRANE', at: [wx + 42, 300] },
    { text: 'SUPPORT RAIL', at: [wx + 52, 340] },
    { text: 'DRIP IRRIGATION', at: [wx + 70, top + 10 + 2 * mh + 8] },
    { text: 'GROWING MEDIUM', at: [wx + 80, top + 10 + 3 * mh + 40] },
    { text: 'PLANTING MODULE', at: [wx + 60, top + 10 + 4 * mh + 40] },
    { text: 'COLLECTION GUTTER', at: [wx + 58, bot - 4] },
  ], wx)
  L.notes.push(text(wx + 176, top + 40, 'PLANTS', 'class="t-small"'))
  return finish(meta('green-wall', 'Green Wall', 'Vertical garden on a building face', 'SECTION', 'FAC-22',
    'Section through a living wall: stacked planting modules hang on rails in front of a waterproof membrane and air gap, each pocket of growing medium fed by a drip irrigation line, with surplus water caught in a gutter at the foot.', 30, 'metres (indicative)'), L, B)
}

function parametric(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 210
  const y0 = 150
  const cols = 10
  const rows = 8
  const s = 34
  const attractor: Pt = [x0 + s * 7.6, y0 + s * 1.6]
  const radius = (p: Pt) => Math.max(2, Math.min(14, Math.hypot(p[0] - attractor[0], p[1] - attractor[1]) / 16))
  for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
    const c: Pt = [x0 + s * (i + 0.5), y0 + s * (j + 0.5)]
    L.fine.push(el(path(rect(c[0] - s / 2, c[1] - s / 2, s, s), true)))
    L.profile.push(circle(c, radius(c)))
  }
  L.profile.push(el(path(rect(x0, y0, cols * s, rows * s), true)))
  L.cut.push(circle(attractor, 4, 'style="stroke: var(--_accent)"'))
  for (const r of [40, 80, 120]) L.center.push(circle(attractor, r))
  // parameter graph
  const gx = x0
  const gy = y0 + rows * s + 40
  L.fine.push(line([gx, gy + 90], [gx + 200, gy + 90]), line([gx, gy + 90], [gx, gy]))
  L.profile.push(el(`M${gx} ${gy + 86}Q${gx + 90} ${gy + 84} ${gx + 120} ${gy + 30}T${gx + 200} ${gy + 6}`))
  L.notes.push(text(gx + 100, gy + 104, 'DISTANCE FROM ATTRACTOR', 'class="t-small" text-anchor="middle"'), text(gx + 6, gy - 4, 'APERTURE', 'class="t-small"'))
  B.add([x0, y0], [x0 + cols * s, gy + 104])
  L.dims.push(vDim(x0 + cols * s + 14, y0 + s, y0, 'PANEL', x0 + cols * s))
  callouts(L, [
    { text: 'PANEL GRID', at: [x0, y0 + 40] },
    { text: 'SMALL APERTURE (NEAR)', at: [attractor[0] - s, attractor[1]] },
    { text: 'ATTRACTOR (SUN)', at: [attractor[0] - 4, attractor[1] - 6] },
    { text: 'LARGE APERTURE (FAR)', at: [x0 + s * 0.5 - 14, y0 + s * 7.5] },
    { text: 'RULE: SIZE = f(DISTANCE)', at: [gx + 120, gy + 30] },
  ], x0)
  return finish(meta('parametric-facade', 'Parametric Façade', 'Panels varied by a rule rather than drawn one by one', 'ELEVATION', 'FAC-23',
    'Elevation of a screen of identical panels whose openings vary smoothly in size according to a rule, here distance from an attractor standing for the strongest sun; the graph below is the rule that generated them.', 34, 'panels'), L, B)
}

function ductwork(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const x0 = 210
  const x1 = 550
  const y0 = 150
  const y1 = 570
  const bays = 4
  const floors = 5
  const bw = (x1 - x0) / bays
  const fh = (y1 - y0) / floors
  // structural frame with cross-bracing in the end bay
  for (let i = 0; i <= bays; i++) L.profile.push(el(path(rect(x0 + i * bw - 4, y0, 8, y1 - y0), true)))
  for (let j = 0; j <= floors; j++) L.profile.push(line([x0, y0 + j * fh], [x1, y0 + j * fh]))
  for (let j = 0; j < floors; j++) L.fine.push(line([x1 - bw, y0 + j * fh], [x1, y0 + (j + 1) * fh]), line([x1, y0 + j * fh], [x1 - bw, y0 + (j + 1) * fh]))
  // large air ducts rising, elbowing into floors
  for (const x of [x0 + 30, x0 + 70, x0 + bw + 40]) {
    L.profile.push(el(`M${x - 12} ${y1}V${y0 + 20}Q${x - 12} ${y0 - 4} ${x + 12} ${y0 - 4}H${x + 26}M${x + 12} ${y1}V${y0 + 24}Q${x + 12} ${y0 + 20} ${x + 26} ${y0 + 20}`, PAPER))
    for (let y = y1 - 20; y > y0 + 30; y -= 28) L.fine.push(line([x - 12, y], [x + 12, y]))
  }
  // water pipes and cable trays
  for (const x of [x0 + 2 * bw + 20, x0 + 2 * bw + 34, x0 + 2 * bw + 48]) L.profile.push(line([x, y1], [x, y0 - 10]), line([x + 6, y1], [x + 6, y0 - 10]))
  L.profile.push(el(path(rect(x0 + 3 * bw - 40, y0, 16, y1 - y0), true)))
  for (let y = y0 + 10; y < y1; y += 14) L.fine.push(line([x0 + 3 * bw - 40, y], [x0 + 3 * bw - 24, y]))
  // rooftop air-handling units
  for (const x of [x0 + 20, x0 + bw + 20]) L.profile.push(el(path(rect(x, y0 - 50, 70, 40), true)))
  L.profile.push(line([x0 - 20, y1], [x1 + 20, y1]))
  B.add([x0 - 20, y0 - 50], [x1 + 20, y1])
  L.dims.push(hDim(y1 + 22, x0, x0 + bw, 'BAY'))
  callouts(L, [
    { text: 'AIR-HANDLING UNIT', at: [x0 + 20, y0 - 30] },
    { text: 'AIR DUCT', at: [x0 + 18, y0 + 120] },
    { text: 'WATER PIPES', at: [x0 + 2 * bw + 20, y0 + 200] },
    { text: 'CABLE RISER', at: [x0 + 3 * bw - 40, y0 + 260] },
    { text: 'STRUCTURAL FRAME', at: [x0 + bw - 4, y0 + 330] },
    { text: 'CROSS-BRACING', at: [x1 - bw / 2, y0 + fh * 3.5] },
  ], x0 - 20)
  return finish(meta('external-ductwork', 'External Ductwork', 'Building services worn on the outside', 'ELEVATION', 'FAC-24',
    'Elevation of a façade where the services are placed outside the structure: large air ducts, water pipes and cable risers run up the face of an exposed frame to rooftop air-handling units, freeing the floors inside.', 30, 'metres (indicative)',
    'After the east façade of the Centre Pompidou, Paris (Piano and Rogers, 1977). Simplified; not a survey. Original drawing by Project Exodus.'), L, B)
}

function glassElevator(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const floors = [210, 330, 450, 570]
  const sx0 = 320
  const sx1 = 450
  for (const y of floors) hatched(L, rect(200, y, sx0 - 200, 16), 'h-concrete')
  // glazed shaft
  L.cut.push(line([sx1, 140], [sx1, 600], THIN), line([sx1 + 4, 140], [sx1 + 4, 600], THIN))
  for (const y of floors) L.fine.push(line([sx1, y + 8], [sx1 + 4, y + 8]))
  // guide rail, car (glass) with a passenger, counterweight
  L.profile.push(line([sx0 + 8, 140], [sx0 + 8, 600]), line([sx1 - 10, 140], [sx1 - 10, 600]))
  const cy = 330
  L.profile.push(el(path(rect(sx0 + 14, cy - 100, 80, 100), true)))
  L.fine.push(line([sx0 + 18, cy - 100], [sx0 + 18, cy]), line([sx0 + 90, cy - 100], [sx0 + 90, cy]))
  figure(L, sx0 + 54, cy, 62)
  L.profile.push(el(path(rect(sx1 - 24, 430, 20, 70), true)))
  // machine and sheave at the top, ropes
  L.profile.push(el(path(rect(sx0 + 10, 120, 120, 20), true)), circle([sx0 + 70, 150], 14))
  L.fine.push(line([sx0 + 56, 150], [sx0 + 56, cy - 100]), line([sx0 + 84, 150], [sx1 - 14, 150]), line([sx1 - 14, 150], [sx1 - 14, 430]))
  // pit buffer and landing doors
  L.profile.push(el(path(rect(sx0 + 40, 600, 30, 16), true)), line([sx0 - 20, 616], [sx1 + 20, 616]))
  for (const y of floors) L.profile.push(line([sx0, y - 90], [sx0, y]))
  B.add([200, 120], [sx1 + 20, 616])
  L.dims.push(vDim(sx1 + 30, floors[2], floors[1], 'FLOOR', sx1 + 4))
  callouts(L, [
    { text: 'TRACTION MACHINE', at: [sx0 + 10, 130] },
    { text: 'SHEAVE', at: [sx0 + 56, 150] },
    { text: 'HOIST ROPES', at: [sx0 + 56, 200] },
    { text: 'GLASS CAR', at: [sx0 + 14, 280] },
    { text: 'GUIDE RAIL', at: [sx0 + 8, 380] },
    { text: 'LANDING DOOR', at: [sx0, 420] },
    { text: 'COUNTERWEIGHT', at: [sx1 - 24, 470] },
    { text: 'PIT BUFFER', at: [sx0 + 40, 608] },
  ], 200)
  L.notes.push(text(sx1 + 10, 160, 'GLAZED SHAFT', 'class="t-small"'))
  return finish(meta('glass-elevator', 'Glass Elevator', 'Lift whose car and shaft are transparent', 'SECTION', 'FAC-25',
    'Section through a glass lift on a building face: a glazed car runs on guide rails inside a glazed shaft, hung from hoist ropes over a sheave at the top and balanced by a counterweight, with buffers in the pit.', 30, 'metres (indicative)'), L, B)
}

function briseSoleil(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const wx = 320
  const top = 200
  const sill = 470
  hatched(L, rect(200, sill, wx - 200 + 20, 20), 'h-concrete')
  hatched(L, rect(200, top - 20, wx - 200 + 20, 20), 'h-concrete')
  L.cut.push(line([wx + 14, top], [wx + 14, sill], THIN), line([wx + 20, top], [wx + 20, sill], THIN))
  // fins on support arms
  const fins = [top + 10, top + 80, top + 150]
  for (const y of fins) hatched(L, [[wx + 50, y], [wx + 130, y + 8], [wx + 130, y + 14], [wx + 50, y + 6]], 'h-stone')
  L.profile.push(line([wx + 20, top + 10], [wx + 60, top + 10]), line([wx + 60, top], [wx + 60, sill - 80]))
  // summer sun (high) blocked, winter sun (low) admitted
  const ray = (from: Pt, to: Pt, label: string) => {
    L.center.push(line(from, to))
    L.notes.push(text(from[0] - 10, from[1] - 6, label, 'class="t-small t-accent" text-anchor="end"'))
  }
  ray([560, top - 10], [wx + 128, top + 90], 'SUMMER SUN 70°')
  ray([570, 330], [wx + 20, 420], 'WINTER SUN 25°')
  L.fine.push(el(`M${wx + 160} ${top + 90}A40 40 0 0 0 ${wx + 147} ${top + 52}`), el(`M${wx + 190} 400A40 40 0 0 0 ${wx + 186} 386`))
  L.notes.push(text(wx + 64, top + 130, 'SHADE', 'class="t-small"'))
  L.profile.push(line([wx + 20, sill], [wx + 20, sill]))
  B.add([200, top - 20], [570, sill + 20])
  L.dims.push(hDim(sill + 46, wx + 20, wx + 130, 'PROJECTION'))
  callouts(L, [
    { text: 'SLAB ABOVE', at: [210, top - 10] },
    { text: 'FIN (BLADE)', at: [wx + 70, top + 88] },
    { text: 'SUPPORT ARM', at: [wx + 60, top + 120] },
    { text: 'WINDOW', at: [wx + 14, 380] },
    { text: 'FLOOR SLAB', at: [210, sill + 10] },
  ], 200)
  return finish(meta('brise-soleil', 'Brise-Soleil', 'Fixed fins that shade a window from high sun', 'SECTION', 'FAC-26',
    'Section through a window shaded by a brise-soleil: horizontal fins projecting from the façade are spaced so that high summer sun is intercepted while low winter sun passes beneath them into the room.', 30, 'metres (indicative)'), L, B)
}

function curtainWall(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const slabTop = 400
  const mx = 400
  // floor slab, fire stop, anchor bracket
  hatched(L, rect(200, slabTop, mx - 10 - 200, 30), 'h-concrete')
  hatched(L, rect(mx - 10, slabTop, 40, 30), 'h-earth')
  L.profile.push(el(path([[mx - 50, slabTop], [mx - 50, slabTop - 10], [mx + 6, slabTop - 10]]), 'style="stroke-width: 3"'))
  L.fine.push(circle([mx - 40, slabTop - 5], 2.5))
  // mullion beyond (aluminium box), transoms and glass (cut)
  L.fine.push(el(path(rect(mx, 120, 26, 520), true)), line([mx + 13, 120], [mx + 13, 640], DASH))
  const gx = mx + 32
  for (const [y0, y1] of [[120, 376], [464, 640]]) L.cut.push(line([gx, y0], [gx, y1], THIN), line([gx + 12, y0], [gx + 12, y1], THIN))
  hatched(L, rect(gx, 384, 12, 72), 'h-earth')
  L.profile.push(el(path(rect(gx - 4, 384, 4, 72), true)))
  for (const y of [376, 456]) {
    L.profile.push(el(path(rect(mx, y, 32, 8), true)), el(path(rect(gx + 12, y - 4, 8, 16), true)), el(path(rect(gx + 20, y - 6, 6, 20), true)))
  }
  // ceiling below
  L.fine.push(line([200, slabTop + 70], [mx, slabTop + 70], DASH))
  B.add([200, 120], [gx + 30, 640])
  L.dims.push(vDim(gx + 50, 456, 384, 'SPANDREL', gx + 26))
  callouts(L, [
    { text: 'VISION GLASS (DOUBLE)', at: [gx, 250] },
    { text: 'MULLION (BEYOND)', at: [mx, 300] },
    { text: 'TRANSOM', at: [mx, 380] },
    { text: 'ANCHOR BRACKET', at: [mx - 50, slabTop - 10] },
    { text: 'FIRE STOP', at: [mx - 6, slabTop + 15] },
    { text: 'FLOOR SLAB', at: [220, slabTop + 15] },
    { text: 'SPANDREL (OPAQUE)', at: [gx, 430] },
    { text: 'PRESSURE PLATE + CAP', at: [gx + 20, 456] },
    { text: 'CEILING', at: [220, slabTop + 70] },
  ], 200)
  return finish(meta('curtain-wall-modern', 'Curtain Wall', 'Non-loadbearing glass skin hung from the floors', 'SECTION', 'FAC-27',
    'Section through a curtain wall at a floor edge: aluminium mullions and transoms hold double-glazed vision panels and an insulated opaque spandrel; the frame hangs from anchor brackets on the slab, with a fire stop sealing the gap between slab and wall.', 30, 'units (indicative)'), L, B)
}

export const FACADE_SHEETS: Array<() => SheetSpec> = [
  balustrade, pediment, portico, propylaea, caryatid, tympanum, spandrel, stringCourse, rustication, quoins, juliet,
  heraldicFacade, isabelline, rockCut, loggia, porteCochere, curvedFacade, betonBrut, bushHammered,
  doubleSkin, etfe, greenWall, parametric, ductwork, glassElevator, briseSoleil, curtainWall,
]

