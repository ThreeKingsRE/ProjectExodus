/**
 * Elements that only read properly in three dimensions, drawn as shaded
 * isometrics. Vaults are seen from below (worm's-eye, in the manner of
 * Choisy), since a vault is experienced from underneath; pavilions and tents
 * from above, the yurt as a cutaway so its frame shows inside the cover.
 */
import { type Pt, type SheetSpec, el, path, text } from '../sheet'
import {
  newLayers, finish, circle, line, callouts, Bounds, ORIGINAL, axo, AXO_DEFS, wormsEye, depthKey,
  polyItem, lineItem, surfaceItems, paint, type Item, type P3, type Tone,
} from '../kit'

const meta = (id: string, title: string, subtitle: string, view: string, sheetNo: string, description: string, unitPx: number, unitName: string, source = ORIGINAL) =>
  ({ id, title, subtitle, view, sheetNo, description, source, scale: { unitPx, unitName, count: 4 } })
const scaled = (P0: (p: P3) => Pt, s: number) => Object.assign((p: P3) => P0([p[0] * s, p[1] * s, p[2] * s]), { kind: 'isometric' as const })
const mid = (a: P3, b: P3): P3 => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2]

/** Upright prism on a plan polygon; only the faces a viewer above can see. */
function prismItems(P: (p: P3) => Pt, base: Array<[number, number]>, z0: number, h: number, key: (p: P3) => number, tones: { top?: Tone; side?: Tone } = {}): Item[] {
  const items: Item[] = []
  const n = base.length
  // polygon winding, so outward normals are known
  const area = base.reduce((s, [x, y], i) => s + x * base[(i + 1) % n][1] - base[(i + 1) % n][0] * y, 0)
  for (let i = 0; i < n; i++) {
    const [ax, ay] = base[i]
    const [bx, by] = base[(i + 1) % n]
    const nx = area > 0 ? by - ay : ay - by
    const ny = area > 0 ? ax - bx : bx - ax
    if (-nx - ny <= 0) continue // faces away from a viewer at (-x, -y)
    const q: P3[] = [[ax, ay, z0], [bx, by, z0], [bx, by, z0 + h], [ax, ay, z0 + h]]
    items.push(polyItem(P, q, key(mid(q[0], q[2])), tones.side ?? (Math.abs(nx) > Math.abs(ny) ? 'dark' : 'mid')))
  }
  const top: P3[] = base.map(([x, y]) => [x, y, z0 + h])
  const c = top.reduce<P3>((s, p) => [s[0] + p[0] / n, s[1] + p[1] / n, s[2] + p[2] / n], [0, 0, 0])
  items.push(polyItem(P, top, key(c) - 1e-3, tones.top ?? 'light'))
  return items
}

// ---------------------------------------------------------------------------
function groinVault(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const P = wormsEye([380, 330], 0.78)
  const key = depthKey('below')
  const R = 110
  const H0 = 120
  const t = 12
  const pw = 26
  const zIn = (x: number, y: number) => H0 + Math.sqrt(Math.max(0, R * R - Math.min(x * x, y * y)))
  const items: Item[] = []
  // intrados: the higher of two crossing barrels at every point, so the groins are valleys seen from below
  items.push(...surfaceItems(P, (u, v) => { const x = -R + 2 * R * u; const y = -R + 2 * R * v; return [x, y, zIn(x, y)] }, 12, 12, key))
  // groins (diagonal creases)
  for (const sgn of [1, -1]) for (let k = 0; k < 12; k++) {
    const a = -R + (2 * R * k) / 12
    const b = -R + (2 * R * (k + 1)) / 12
    const p: P3 = [a, sgn * a, zIn(a, a)]
    const q: P3 = [b, sgn * b, zIn(b, b)]
    items.push({ key: key(mid(p, q)) - 0.5, svg: [el(path([P(p), P(q)]), 'style="stroke-width: 2"')] })
  }
  // thickness of the wall arches on the two faces toward the viewer
  for (const side of ['x', 'y'] as const) for (let k = 0; k < 10; k++) {
    const a = -R + (2 * R * k) / 10
    const b = -R + (2 * R * (k + 1)) / 10
    const pt = (s: number, dz: number): P3 => (side === 'x' ? [-R, s, zIn(-R, s) + dz] : [s, -R, zIn(s, -R) + dz])
    const q = [pt(a, 0), pt(b, 0), pt(b, t), pt(a, t)]
    items.push(polyItem(P, q, key(mid(q[0], q[2])) - 0.2, 'mid', [0, 1, 2, 3]))
  }
  // piers, cut at the base
  for (const [cx, cy] of [[-R, -R], [R, -R], [-R, R], [R, R]]) {
    const x0 = cx - pw / 2
    const y0 = cy - pw / 2
    const fx: P3[] = [[x0, y0, 0], [x0, y0 + pw, 0], [x0, y0 + pw, H0], [x0, y0, H0]]
    const fy: P3[] = [[x0, y0, 0], [x0 + pw, y0, 0], [x0 + pw, y0, H0], [x0, y0, H0]]
    const fb: P3[] = [[x0, y0, 0], [x0 + pw, y0, 0], [x0 + pw, y0 + pw, 0], [x0, y0 + pw, 0]]
    const near = cx < 0 && cy < 0
    // the pier nearest the viewer is omitted (cut footprint + ghost) so the vault can be seen
    if (near) L.fine.push(el(path([P([x0, y0, H0]), P([x0, y0, 0])]), 'stroke-dasharray="4 3"'), el(path([P([x0 + pw, y0, H0]), P([x0 + pw, y0, 0])]), 'stroke-dasharray="4 3"'), el(path([P([x0, y0 + pw, H0]), P([x0, y0 + pw, 0])]), 'stroke-dasharray="4 3"'))
    else items.push(polyItem(P, fx, key(mid(fx[0], fx[2])), 'dark'), polyItem(P, fy, key(mid(fy[0], fy[2])), 'mid'))
    items.push(polyItem(P, fb, key(mid(fb[0], fb[2])) - 1, 'cut'))
  }
  paint(L, items)
  L.fine.push(el(path([P([-R, -R, 0]), P([R, -R, 0]), P([R, R, 0]), P([-R, R, 0])], true), 'stroke-dasharray="4 3"'))
  for (const p of [[-R - 13, -R - 13, 0], [R + 13, R + 13, 0], [R + 13, -R - 13, 0], [-R - 13, R + 13, 0], [0, 0, H0 + R + t], [-R, -R, H0 + R]] as P3[]) B.add(P(p))
  callouts(L, [
    { text: 'GROIN (CREASE)', at: P([R * 0.5, R * 0.5, zIn(R * 0.5, R * 0.5)]) },
    { text: 'WEB (CELL)', at: P([0, -R * 0.6, zIn(0, -R * 0.6)]) },
    { text: 'WALL ARCH', at: P([-R, -R * 0.4, zIn(-R, -R * 0.4) + t / 2]) },
    { text: 'PIER', at: P([-R - 13, R, H0 * 0.5]) },
    { text: 'NEAR PIER (OMITTED)', at: P([-R - 13, -R, H0 * 0.6]) },
    { text: 'PIER CUT AT FLOOR', at: P([-R, -R, 0]) },
    { text: 'PLAN OF BAY (DASHED)', at: P([0, -R, 0]) },
  ], B.get()[0])
  L.notes.push(text(560, 70, "WORM'S-EYE VIEW", 'class="t-small" text-anchor="end"'), text(560, 80, '(LOOKING UP)', 'class="t-small" text-anchor="end"'))
  return finish(meta('groin-vault', 'Groin Vault', 'Two barrel vaults intersecting at right angles', "ISOMETRIC · WORM'S-EYE", 'VLT-02',
    'Worm\'s-eye isometric of a groin-vaulted bay seen from below: two barrel vaults cross at right angles, their intersection forming the diagonal groins; the load gathers into the four corner piers, leaving all four sides open as arches.', 26, 'metres (indicative)',
    'Worm\'s-eye axonometric in the manner of Auguste Choisy, Histoire de l\'architecture (1899, public domain). Original construction by Project Exodus.'), L, B, AXO_DEFS)
}

// ---------------------------------------------------------------------------
function muqarnas(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  // section-oblique from below: the front cut plane in true shape, depth receding up-right so undersides show
  const s = 1.15
  const P = (p: P3): Pt => [380 + s * (p[0] + 0.4 * p[1]), 600 + s * (0.1 * p[1] - p[2])]
  const key = (p: P3) => -0.4 * p[0] + p[1] + 0.1 * p[2]
  const R = 120
  const z0 = 110
  const N = 5
  const h = 28
  const M = 8
  const ring = (k: number, th: number) => R * (0.94 - 0.16 * k) * (1 + (k < N ? 0.09 : 0) * Math.cos(M * th + (k % 2) * Math.PI))
  const zt = z0 + N * h
  const items: Item[] = []
  // back and left walls (inner faces) up to the crown
  items.push(polyItem(P, [[-R, R, 0], [R, R, 0], [R, R, zt + 16], [-R, R, zt + 16]], 1e6, 'mid'))
  items.push(polyItem(P, [[-R, 0, 0], [-R, R, 0], [-R, R, zt + 16], [-R, 0, zt + 16]], 9e5, 'dark'))
  // squinch shelves filling the back corners at the springing
  for (const sx of [-1, 1]) {
    const pts: P3[] = [[sx * R, R, z0]]
    for (let i = 0; i <= 8; i++) { const th = sx > 0 ? (i / 8) * (Math.PI / 2) : Math.PI - (i / 8) * (Math.PI / 2); pts.push([ring(0, th) * Math.cos(th), ring(0, th) * Math.sin(th), z0]) }
    pts.push([sx * R, 0, z0])
    items.push(polyItem(P, pts, 8e5, 'light'))
  }
  // the far half of the vault: tiers of concave cells, faceted at the star points
  for (let k = 0; k < N; k++) {
    items.push(...surfaceItems(P, (u, v) => {
      const th = Math.PI * u
      const phi = (v * Math.PI) / 2
      const r = ring(k + 1, th) + (ring(k, th) - ring(k + 1, th)) * Math.cos(phi)
      return [r * Math.cos(th), r * Math.sin(th), z0 + k * h + h * Math.sin(phi)]
    }, M, 2, key, { uLines: Array.from({ length: M }, (_, i) => i), tone: (q) => (q[0][2] - z0 - k * h > h * 0.45 ? 'dark' : 'light') }))
  }
  items.push(...surfaceItems(P, (u, v) => {
    const th = Math.PI * u
    const r = ring(N, th) * Math.cos((v * Math.PI) / 2)
    return [r * Math.cos(th), r * Math.sin(th), zt + 16 * Math.sin((v * Math.PI) / 2)]
  }, 6, 3, key, { tone: () => 'light' }))
  paint(L, items)
  // front cut: the true section profile through cells and walls
  const prof = (th: number) => {
    const pts: P3[] = []
    for (let k = 0; k < N; k++) for (let i = 0; i <= 4; i++) { const phi = (i / 4) * (Math.PI / 2); const r = ring(k + 1, th) + (ring(k, th) - ring(k + 1, th)) * Math.cos(phi); pts.push([r * Math.cos(th), 0, z0 + k * h + h * Math.sin(phi)]) }
    for (let i = 0; i <= 4; i++) { const v = i / 4; pts.push([ring(N, th) * Math.cos((v * Math.PI) / 2) * Math.cos(th), 0, zt + 16 * Math.sin((v * Math.PI) / 2)]) }
    return pts
  }
  const left = prof(Math.PI)
  const right = prof(0)
  const outline: P3[] = [[-R - 18, 0, 0], [-R - 18, 0, zt + 40], [R + 18, 0, zt + 40], [R + 18, 0, 0], [R, 0, 0], [R, 0, z0], ...right, ...[...left].reverse(), [-R, 0, z0], [-R, 0, 0]]
  L.hatch.push(`<path d="${path(outline.map(P), true)}" fill="url(#h-stone)" stroke="none"/>`)
  L.cut.push(el(path(outline.map(P), true)))
  L.profile.push(line(P([-R - 40, 0, 0]), P([R + 40, 0, 0])))
  for (const p of [[-R - 40, 0, 0], [R + 40, 0, 0], [-R - 18, 0, zt + 40], [R, R, zt + 16]] as P3[]) B.add(P(p))
  callouts(L, [
    { text: 'CROWN DOME', at: P([0, 6, zt + 8]) },
    { text: 'CELL (CONCAVE NICHE)', at: P([ring(3, 2.2) * Math.cos(2.2), ring(3, 2.2) * Math.sin(2.2), z0 + 3.6 * h]) },
    { text: 'TIER CORBELLED INWARD', at: P([ring(1, 2.4) * Math.cos(2.4), ring(1, 2.4) * Math.sin(2.4), z0 + 1.6 * h]) },
    { text: 'SECTION CUT (TRUE PROFILE)', at: P([-R - 8, 0, zt]) },
    { text: 'SQUINCH SHELF', at: P([-R * 0.9, R * 0.85, z0]) },
    { text: 'WALL', at: P([-R, R * 0.5, z0 * 0.5]) },
  ], B.get()[0])
  return finish(meta('muqarnas', 'Muqarnas', 'Honeycomb vaulting of tiered niches', 'SECTION · OBLIQUE FROM BELOW', 'DEC-11',
    'Section through a muqarnas vault with the far half seen from below: rings of small concave cells, each tier corbelled inward over the one beneath and staggered against it, step up from the square room to a small crowning dome; the cut at the front shows the true profile.', 26, 'metres (indicative)'), L, B, AXO_DEFS)
}

// ---------------------------------------------------------------------------
function gazebo(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const P = scaled(axo([370, 520], 'isometric'), 1.25)
  const key = depthKey('above')
  const oct = (r: number) => Array.from({ length: 8 }, (_, i) => { const a = Math.PI / 8 + (i * Math.PI) / 4; return [r * Math.cos(a), r * Math.sin(a)] as [number, number] })
  const hp = 14
  const hPost = 104
  const zE = hp + hPost
  const items: Item[] = []
  // platform and entrance steps (entrance faces the viewer, between vertices 4 and 5)
  paint(L, prismItems(P, oct(92), 0, hp, key))
  const ent = 5 * Math.PI / 4
  const ex = Math.cos(ent)
  const ey = Math.sin(ent)
  const along: [number, number] = [-ey, ex]
  const step = (d0: number, d1: number, z: number) => {
    const pts = [[d0, -26], [d1, -26], [d1, 26], [d0, 26]].map(([d, w]) => [ex * d + along[0] * w, ey * d + along[1] * w] as [number, number])
    paint(L, prismItems(P, pts, 0, z, key))
  }
  step(84, 108, 7)
  // posts and railings, far to near
  const posts = oct(80)
  for (const [x, y] of posts) items.push(...prismItems(P, [[x - 4, y - 4], [x + 4, y - 4], [x + 4, y + 4], [x - 4, y + 4]], hp, hPost, key))
  for (let i = 0; i < 8; i++) {
    if (i === 4) continue // entrance
    const [ax, ay] = posts[i]
    const [bx, by] = posts[(i + 1) % 8]
    for (const z of [hp + 6, hp + 40]) items.push(lineItem(P, [ax, ay, z], [bx, by, z], key([(ax + bx) / 2, (ay + by) / 2, z]) - 0.3, 'style="stroke-width: 1.4"'))
    for (let k = 1; k < 6; k++) {
      const x = ax + ((bx - ax) * k) / 6
      const y = ay + ((by - ay) * k) / 6
      items.push(lineItem(P, [x, y, hp + 6], [x, y, hp + 40], key([x, y, hp + 23]) - 0.2, 'class="l-fine"'))
    }
    // decorative bracket under the eave
    items.push(lineItem(P, [ax, ay, zE - 18], [(ax + bx) / 2, (ay + by) / 2, zE - 2], key([ax, ay, zE]) - 0.1, 'class="l-fine"'), lineItem(P, [bx, by, zE - 18], [(ax + bx) / 2, (ay + by) / 2, zE - 2], key([bx, by, zE]) - 0.1, 'class="l-fine"'))
  }
  paint(L, items)
  // bell-shaped roof with flared eaves
  const eave = oct(106)
  const Hr = 92
  const roof: Item[] = []
  for (let j = 0; j < 8; j++) {
    const [ax, ay] = eave[j]
    const [bx, by] = eave[(j + 1) % 8]
    roof.push(...surfaceItems(P, (u, v) => {
      const s = 1 - v
      const zz = zE + Hr * (v - 0.15 * Math.sin(2 * Math.PI * v))
      return [(ax + (bx - ax) * u) * s, (ay + (by - ay) * u) * s, zz]
    }, 1, 5, key))
  }
  paint(L, roof)
  const apex = P([0, 0, zE + Hr])
  L.profile.push(line(apex, [apex[0], apex[1] - 34]), circle([apex[0], apex[1] - 22], 5), circle([apex[0], apex[1] - 34], 3))
  for (const p of [[-92, 92, 0], [92, -92, 0], [-108, -108, 0], [92, 92, 0], [-106, 106, zE], [106, -106, zE]] as P3[]) B.add(P(p))
  B.add([apex[0], apex[1] - 40])
  callouts(L, [
    { text: 'FINIAL', at: [apex[0], apex[1] - 22] },
    { text: 'BELL-SHAPED ROOF', at: P([-60, -20, zE + 40]) },
    { text: 'FLARED EAVE', at: P([eave[3][0], eave[3][1], zE]) },
    { text: 'POST', at: P([posts[3][0] - 4, posts[3][1], hp + 70]) },
    { text: 'RAILING', at: P([(posts[3][0] + posts[4][0]) / 2, (posts[3][1] + posts[4][1]) / 2, hp + 40]) },
    { text: 'ENTRANCE STEP', at: P([ex * 100, ey * 100, 7]) },
    { text: 'OCTAGONAL PLATFORM', at: P([-92 * 0.7, 92 * 0.7, hp / 2]) },
  ], B.get()[0])
  return finish(meta('gazebo', 'Gazebo', 'Open-sided garden pavilion', 'ISOMETRIC', 'GDN-10',
    'Isometric of an octagonal garden pavilion: a raised platform with an entrance step, eight slender posts linked by low railings and brackets, and a bell-shaped roof with flared eaves rising to a finial.', 32, 'metres (indicative)'), L, B, AXO_DEFS)
}

// ---------------------------------------------------------------------------
function yurt(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const P = scaled(axo([380, 500], 'isometric'), 1.25)
  const key = depthKey('above')
  const R = 110
  const Hw = 64
  const Hc = 132
  const rc = 20
  const cyl = (r: number, th: number, z: number): P3 => [r * Math.cos(th), r * Math.sin(th), z]
  const far = (th: number) => Math.cos(th - Math.PI / 4) > 0
  // floor
  const floor = Array.from({ length: 32 }, (_, i) => cyl(R + 6, (i / 32) * 2 * Math.PI, 0))
  L.profile.push(el(path(floor.map(P), true), 'style="fill: var(--_paper)"'))
  for (let i = -4; i <= 4; i++) L.fine.push(line(P([i * 24, -Math.sqrt(R * R - (i * 24) ** 2), 0]), P([i * 24, Math.sqrt(R * R - (i * 24) ** 2), 0])))
  // felt cover on the far half (inner faces), the near half cut away
  const a0 = -Math.PI / 4
  const a1 = (3 * Math.PI) / 4
  const cover: Item[] = [
    ...surfaceItems(P, (u, v) => cyl(R, a0 + (a1 - a0) * u, Hw * v), 10, 1, key, { tone: () => 'mid' }),
    ...surfaceItems(P, (u, v) => { const r = R + (rc - R) * v; return cyl(r, a0 + (a1 - a0) * u, Hw + (Hc - Hw) * v) }, 10, 1, key, { tone: () => 'light' }),
  ]
  paint(L, cover)
  // lattice wall (khana): criss-cross laths, far half then near half
  const lath = (th0: number, dir: number) => Array.from({ length: 7 }, (_, k) => P(cyl(R, th0 + (dir * 0.32 * k) / 6, (Hw * k) / 6)))
  const farL: string[] = []
  const nearL: string[] = []
  for (let i = 0; i < 40; i++) {
    const th0 = (i / 40) * 2 * Math.PI
    for (const dir of [1, -1]) (far(th0 + dir * 0.16) ? farL : nearL).push(path(lath(th0, dir)))
  }
  L.fine.push(el(farL.join('')))
  // roof poles (uni) and the wall-top band
  const farP: string[] = []
  const nearP: string[] = []
  for (let i = 0; i < 28; i++) {
    const th = (i / 28) * 2 * Math.PI
    ;(far(th) ? farP : nearP).push(path([P(cyl(R, th, Hw)), P(cyl(rc, th, Hc))]))
  }
  L.profile.push(el(farP.join(''), 'class="l-fine"'))
  // door frame at the front
  const dth = (5 * Math.PI) / 4
  const dpts = [cyl(R, dth - 0.2, 0), cyl(R, dth - 0.2, Hw - 6), cyl(R, dth + 0.2, Hw - 6), cyl(R, dth + 0.2, 0)]
  L.profile.push(el(nearL.join(''), 'class="l-fine"'))
  L.profile.push(el(path(dpts.map(P)), 'style="stroke-width: 3"'))
  L.profile.push(el(path(Array.from({ length: 41 }, (_, i) => P(cyl(R, (i / 40) * 2 * Math.PI, Hw))), true)))
  L.profile.push(el(nearP.join('')))
  // crown ring (toono) with spokes
  const crown = Array.from({ length: 24 }, (_, i) => P(cyl(rc, (i / 24) * 2 * Math.PI, Hc)))
  L.profile.push(el(path(crown, true), 'style="fill: var(--_paper)"'), el(path(Array.from({ length: 24 }, (_, i) => P(cyl(rc - 5, (i / 24) * 2 * Math.PI, Hc))), true)))
  for (let i = 0; i < 4; i++) { const th = (i * Math.PI) / 4; L.fine.push(line(P(cyl(rc - 5, th, Hc)), P(cyl(rc - 5, th + Math.PI, Hc)))) }
  // cut edges of the felt
  L.cut.push(el(path([P(cyl(R, a0, 0)), P(cyl(R, a0, Hw)), P(cyl(rc, a0, Hc))])), el(path([P(cyl(R, a1, 0)), P(cyl(R, a1, Hw)), P(cyl(rc, a1, Hc))])))
  for (const p of [cyl(R + 6, Math.PI * 0.75, 0), cyl(R + 6, -Math.PI * 0.25, 0), cyl(R + 6, Math.PI * 1.25, 0), cyl(R, Math.PI / 4, Hw), [0, 0, Hc] as P3]) B.add(P(p))
  callouts(L, [
    { text: 'CROWN RING (TOONO)', at: P(cyl(rc, Math.PI, Hc)) },
    { text: 'ROOF POLES (UNI)', at: P(cyl(R * 0.6, Math.PI * 1.1, Hw + (Hc - Hw) * 0.45)) },
    { text: 'FELT COVER (CUT)', at: P(cyl(R, a1, Hw * 0.7)) },
    { text: 'LATTICE WALL (KHANA)', at: P(cyl(R, Math.PI * 0.95, Hw * 0.5)) },
    { text: 'TENSION BAND', at: P(cyl(R, Math.PI * 0.85, Hw)) },
    { text: 'DOOR FRAME', at: P(cyl(R, dth - 0.2, Hw * 0.5)) },
    { text: 'FLOOR', at: P(cyl(R * 0.7, Math.PI * 0.8, 0)) },
  ], B.get()[0])
  return finish(meta('yurt', 'Yurt', 'Portable lattice-walled tent with a crown ring', 'ISOMETRIC · CUTAWAY', 'STC-20',
    'Cutaway isometric of a yurt: a circular expanding-lattice wall held by a tension band, roof poles leaning in from its top to a central crown ring, a timber door frame, and a felt cover, shown here on the far half only so the frame can be seen.', 32, 'metres (indicative)'), L, B, AXO_DEFS)
}

// ---------------------------------------------------------------------------
function spaceFrame(): SheetSpec {
  const L = newLayers()
  const B = new Bounds()
  const P = scaled(axo([360, 560], 'isometric'), 0.82)
  const key = depthKey('above')
  const n = 5
  const a = 64
  const d = 46
  const Z = 210
  const top = (i: number, j: number): P3 => [i * a, j * a, Z]
  const bot = (i: number, j: number): P3 => [(i + 0.5) * a, (j + 0.5) * a, Z - d]
  const halo = 'style="stroke: var(--_paper); stroke-width: 4"'
  const strut = (p: P3, q: P3, cls: string, k = 0): Item => {
    const dd = path([P(p), P(q)])
    return { key: key(mid(p, q)) - k, svg: [el(dd, halo), el(dd, cls)] }
  }
  const items: Item[] = []
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    if (i < n - 1) items.push(strut(top(i, j), top(i + 1, j), 'style="stroke-width: 1.6"', 0.2))
    if (j < n - 1) items.push(strut(top(i, j), top(i, j + 1), 'style="stroke-width: 1.6"', 0.2))
  }
  for (let i = 0; i < n - 1; i++) for (let j = 0; j < n - 1; j++) {
    if (i < n - 2) items.push(strut(bot(i, j), bot(i + 1, j), 'class="l-fine"'))
    if (j < n - 2) items.push(strut(bot(i, j), bot(i, j + 1), 'class="l-fine"'))
    for (const [di, dj] of [[0, 0], [1, 0], [0, 1], [1, 1]]) items.push(strut(bot(i, j), top(i + di, j + dj), 'class="l-fine"'))
  }
  // columns under the four corner bottom nodes, with short branches
  for (const [i, j] of [[0, 0], [n - 2, 0], [0, n - 2], [n - 2, n - 2]]) {
    const b = bot(i, j)
    const foot: P3 = [b[0], b[1], 0]
    items.push({ key: key([b[0], b[1], Z / 3]), svg: [el(path([P(foot), P([b[0], b[1], b[2] - 4])]), 'style="stroke: var(--_paper); stroke-width: 9"'), el(path([P(foot), P([b[0], b[1], b[2] - 4])]), 'style="stroke-width: 5"')] })
  }
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) items.push({ key: key(top(i, j)) - 0.6, svg: [circle(P(top(i, j)), 2.6, 'class="solid"')] })
  for (let i = 0; i < n - 1; i++) for (let j = 0; j < n - 1; j++) items.push({ key: key(bot(i, j)) - 0.6, svg: [circle(P(bot(i, j)), 2, 'class="solid"')] })
  L.fine.push(el(path([P([0, 0, 0]), P([(n - 1) * a, 0, 0]), P([(n - 1) * a, (n - 1) * a, 0]), P([0, (n - 1) * a, 0])], true), 'stroke-dasharray="4 3"'))
  paint(L, items)
  // node detail (ball joint with threaded struts)
  const nd: Pt = [520, 110]
  L.profile.push(circle(nd, 16))
  for (let k = 0; k < 8; k++) { const t = (k * Math.PI) / 4; L.profile.push(line([nd[0] + 16 * Math.cos(t), nd[1] + 16 * Math.sin(t)], [nd[0] + 36 * Math.cos(t), nd[1] + 36 * Math.sin(t)])) }
  L.notes.push(text(nd[0], nd[1] + 52, 'NODE (DETAIL)', 'class="t-small" text-anchor="middle"'))
  for (const p of [[0, (n - 1) * a, Z], [(n - 1) * a, 0, Z], [0, 0, 0], [(n - 1) * a, (n - 1) * a, 0], [0, 0, Z]] as P3[]) B.add(P(p))
  B.add([nd[0] - 36, nd[1] - 36], [nd[0] + 36, nd[1] + 56])
  callouts(L, [
    { text: 'TOP CHORD GRID', at: P(mid(top(0, 2), top(0, 3))) },
    { text: 'NODE', at: P(top(0, 1)) },
    { text: 'DIAGONAL STRUT', at: P(mid(bot(0, 1), top(0, 1))) },
    { text: 'BOTTOM CHORD GRID (OFFSET)', at: P(mid(bot(0, 2), bot(1, 2))) },
    { text: 'COLUMN', at: P([bot(0, 0)[0], bot(0, 0)[1], Z / 3]) },
    { text: 'FOOTPRINT (DASHED)', at: P([0, (n - 1) * a * 0.5, 0]) },
  ], B.get()[0])
  return finish(meta('space-frame', 'Space Frame', 'Two layers of grid joined by diagonals', 'ISOMETRIC', 'STC-07',
    'Isometric of a double-layer space frame: a square top grid and a bottom grid offset by half a bay, tied together by diagonals into rows of half-octahedra, all meeting at ball joints, so a light roof can span widely on only four columns.', 26, 'metres (indicative)'), L, B)
}

export const SOLID_SHEETS: Array<() => SheetSpec> = [groinVault, muqarnas, gazebo, yurt, spaceFrame]

