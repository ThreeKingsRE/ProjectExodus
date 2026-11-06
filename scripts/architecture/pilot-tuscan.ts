/**
 * PILOT: technical-drawing sheet for the Tuscan order, generated from
 * proportions rather than hand-drawn. Proof of concept for the drawing system
 * in docs/architecture-drawings/PLAN.md.
 *
 * Run: npx tsx scripts/architecture/pilot-tuscan.ts
 * Out: public/architecture/drawings/tuscan-order/elevation.svg
 *
 * Proportions after Vignola (1562), module M = lower radius of the shaft.
 * Column 14 M (base 1, shaft 12, capital 1); entablature 3.5 M.
 * Values are simplified for illustration.
 *
 * Theming: colours come from CSS custom properties with fallbacks, so the
 * page decides ink/paper (e.g. vellum by day, blueprint by night). Layers
 * (hatch, shading, dims, labels) can be toggled the same way.
 */
import { mkdirSync, writeFileSync } from 'fs'
import { dirname } from 'path'

const M = 27 // px per module
const OUT = 'public/architecture/drawings/tuscan-order/elevation.svg'

const W = 600
const H = 700
const AXIS_X = 300 // column centreline
const GROUND_Y = 545 // y of ground line

const X = (m: number) => AXIS_X + m * M
const Y = (m: number) => GROUND_Y - m * M
const f = (n: number) => n.toFixed(2)

type Pt = [number, number] // [radius in M, height in M]

/** Sample an arc (in module space) from angle a0 to a1. */
function arc(cx: number, cy: number, rx: number, ry: number, a0: number, a1: number, steps = 12): Pt[] {
  const pts: Pt[] = []
  for (let i = 0; i <= steps; i++) {
    const a = a0 + ((a1 - a0) * i) / steps
    pts.push([cx + rx * Math.cos(a), cy + ry * Math.sin(a)])
  }
  return pts
}

/** Shaft radius with entasis: straight for the lower third, then curving in. */
const shaftR = (t: number) => (t < 1 / 3 ? 1 : 1 - 0.2 * Math.sin(((t - 1 / 3) / (2 / 3)) * (Math.PI / 2)))

// Right-hand half profile, bottom to top, in modules
const profile: Pt[] = [
  [0, 0],
  [1.375, 0], [1.375, 0.5], // plinth
  ...arc(1.175, 0.7, 0.2, 0.2, -Math.PI / 2, Math.PI / 2), // torus
  [1.1, 0.9], [1.1, 1.0], // fillet
  ...arc(1.1, 1.15, 0.1, 0.15, -Math.PI / 2, -Math.PI, 6).map(([x, y]): Pt => [x, y]), // apophyge (concave)
]
const SHAFT_BOTTOM = 1.15
const SHAFT_TOP = 12.8
for (let i = 0; i <= 30; i++) {
  const t = i / 30
  profile.push([shaftR(t), SHAFT_BOTTOM + (SHAFT_TOP - SHAFT_BOTTOM) * t])
}
profile.push(
  [0.88, 12.85],
  ...arc(0.88, 12.95, 0.1, 0.1, -Math.PI / 2, Math.PI / 2, 8), // astragal
  [0.82, 13.05], [0.82, 13.33], // necking
  [0.86, 13.33], [0.86, 13.4], // fillet
  ...arc(0.86, 13.67, 0.34, 0.27, -Math.PI / 2, 0, 10), // echinus (ovolo)
  [1.25, 13.67], [1.25, 14.0], // abacus
  [0, 14.0]
)

const toPath = (pts: Pt[], mirror = false) =>
  pts.map(([r, h], i) => `${i ? 'L' : 'M'}${f(X(mirror ? -r : r))} ${f(Y(h))}`).join(' ')

// Full outline: right side up, left side down
const outline = `${toPath(profile)} ${toPath([...profile].reverse(), true).replace(/^M/, 'L')} Z`

// Entablature bands (spanning, with break lines at each end)
const E_HALF = 3.0
const bands = [
  { name: 'Architrave', y0: 14.0, y1: 15.0 },
  { name: 'Frieze', y0: 15.0, y1: 16.17 },
  { name: 'Cornice', y0: 16.17, y1: 17.5 },
]

/** Zig-zag break line (drafting convention for "continues"). */
function breakLine(x: number, y0: number, y1: number) {
  const mid = (y0 + y1) / 2
  return `M${f(X(x))} ${f(Y(y0))} L${f(X(x))} ${f(Y(mid - 0.25))} L${f(X(x + 0.2))} ${f(Y(mid - 0.1))} L${f(X(x - 0.2))} ${f(Y(mid + 0.1))} L${f(X(x))} ${f(Y(mid + 0.25))} L${f(X(x))} ${f(Y(y1))}`
}

// Cylinder shading on the right (elevation) half: lines get denser at the edge
const shading: string[] = []
for (let k = 1; k <= 9; k++) {
  const frac = Math.sin((k / 10) * (Math.PI / 2)) // 0..1, denser toward 1
  const pts: Pt[] = []
  for (let i = 0; i <= 20; i++) {
    const t = i / 20
    pts.push([shaftR(t) * frac, SHAFT_BOTTOM + 0.15 + (SHAFT_TOP - SHAFT_BOTTOM - 0.3) * t])
  }
  if (frac > 0.5) shading.push(toPath(pts))
}

// Dimension chain on the right
const DIM_X = 4.0
function vDim(y0: number, y1: number, label: string, x = DIM_X) {
  const tick = (y: number) => `M${f(X(x) - 4)} ${f(Y(y) + 4)} L${f(X(x) + 4)} ${f(Y(y) - 4)}`
  const ext = (y: number) => `M${f(X(x) - 10)} ${f(Y(y))} L${f(X(x) + 6)} ${f(Y(y))}`
  const ty = (Y(y0) + Y(y1)) / 2
  return `<path d="M${f(X(x))} ${f(Y(y0))} L${f(X(x))} ${f(Y(y1))} ${tick(y0)} ${tick(y1)} ${ext(y0)} ${ext(y1)}"/>
    <text x="${f(X(x) + 8)}" y="${f(ty + 3)}">${label}</text>`
}

// Callout labels on the left. Capital mouldings are only a fraction of a
// module apart, so their labels are fanned out with a dog-leg leader:
// [text, label height, point height, point radius] in modules
const labels: Array<[string, number, number, number]> = [
  ['CORNICE', 16.8, 16.8, -E_HALF],
  ['FRIEZE', 15.6, 15.6, -E_HALF],
  ['ARCHITRAVE', 14.5, 14.5, -E_HALF],
  ['ABACUS', 13.6, 13.83, -1.25],
  ['ECHINUS', 12.9, 13.55, -1.05],
  ['NECKING', 12.2, 13.2, -0.82],
  ['ASTRAGAL', 11.5, 12.95, -0.98],
  ['SHAFT', 7.0, 7.0, -1.0],
  ['TORUS', 1.2, 0.7, -1.375],
  ['PLINTH', 0.25, 0.25, -1.375],
]
const LABEL_X = -7.6
const ELBOW_X = -2.4
const labelSvg = labels
  .map(([text, lh, ph, r]) => {
    const x0 = X(LABEL_X) + 70
    const leader =
      lh === ph
        ? `M${f(x0)} ${f(Y(lh))} L${f(X(r) - 3)} ${f(Y(ph))}`
        : `M${f(x0)} ${f(Y(lh))} L${f(X(ELBOW_X))} ${f(Y(lh))} L${f(X(r) - 3)} ${f(Y(ph))}`
    return `<path d="${leader}"/>
    <circle cx="${f(X(r) - 3)}" cy="${f(Y(ph))}" r="1.6"/>
    <text x="${f(X(LABEL_X))}" y="${f(Y(lh) + 3)}">${text}</text>`
  })
  .join('\n    ')

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="t d">
  <title id="t">Tuscan order: half section, half elevation</title>
  <desc id="d">Technical drawing of a Tuscan column with entablature, proportioned after Vignola. Left half shown in section, right half in elevation, with a dimension chain in modules.</desc>
  <style>
    svg { --_ink: var(--ink, #1f2a37); --_paper: var(--paper, #f4efe3); --_accent: var(--accent, #9a3412); }
    .paper { fill: var(--_paper); }
    .ink { stroke: var(--_ink); fill: none; stroke-linecap: round; stroke-linejoin: round; }
    .profile { stroke-width: 1.6; }
    .cut { stroke-width: 2.2; }
    .thin { stroke-width: 0.5; }
    .hair { stroke-width: 0.35; }
    .center { stroke-width: 0.5; stroke-dasharray: 14 3 2 3; }
    text { fill: var(--_ink); font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 9px; letter-spacing: 0.08em; stroke: none; }
    .title { font-size: 15px; font-weight: 700; letter-spacing: 0.14em; }
    .sub { font-size: 9px; opacity: 0.8; }
    .accent { stroke: var(--_accent); }
    .accent-text { fill: var(--_accent); }
    /* Layers: pages can hide them with e.g. style="--show-dims: none" */
    .layer-hatch { display: var(--show-hatch, inline); }
    .layer-shading { display: var(--show-shading, inline); }
    .layer-dims { display: var(--show-dims, inline); }
    .layer-labels { display: var(--show-labels, inline); }
  </style>
  <defs>
    <pattern id="hatch-stone" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="6" class="ink hair"/>
    </pattern>
    <clipPath id="clip-left"><rect x="0" y="0" width="${AXIS_X}" height="${H}"/></clipPath>
    <clipPath id="clip-right"><rect x="${AXIS_X}" y="0" width="${W - AXIS_X}" height="${H}"/></clipPath>
    <clipPath id="clip-column"><path d="${outline}"/></clipPath>
  </defs>

  <rect class="paper" width="${W}" height="${H}"/>
  <rect class="ink thin" x="12" y="12" width="${W - 24}" height="${H - 24}"/>

  <!-- Section half: solid cut hatch -->
  <g class="layer-hatch" clip-path="url(#clip-left)">
    <path d="${outline}" fill="url(#hatch-stone)" stroke="none"/>
  </g>

  <!-- Elevation half: cylinder shading -->
  <g class="ink hair layer-shading" clip-path="url(#clip-right)">
    ${shading.map((d) => `<path d="${d}"/>`).join('\n    ')}
  </g>

  <!-- Column outline: heavier on the cut (left) half -->
  <g class="ink">
    <path class="cut" d="${outline}" clip-path="url(#clip-left)"/>
    <path class="profile" d="${outline}" clip-path="url(#clip-right)"/>
  </g>

  <!-- Entablature -->
  <g class="ink profile">
    ${bands.map((b) => `<path d="M${f(X(-E_HALF))} ${f(Y(b.y1))} L${f(X(E_HALF))} ${f(Y(b.y1))}"/>`).join('\n    ')}
    <path d="M${f(X(-E_HALF))} ${f(Y(14))} L${f(X(E_HALF))} ${f(Y(14))}"/>
    <path class="thin" d="${breakLine(-E_HALF, 14, 17.5)} ${breakLine(E_HALF, 14, 17.5)}"/>
    <path class="thin" d="M${f(X(-E_HALF))} ${f(Y(16.6))} L${f(X(E_HALF))} ${f(Y(16.6))} M${f(X(-E_HALF))} ${f(Y(17.2))} L${f(X(E_HALF))} ${f(Y(17.2))}"/>
  </g>

  <!-- Ground line and centreline -->
  <path class="ink profile" d="M${f(X(-3.2))} ${f(Y(0))} L${f(X(3.2))} ${f(Y(0))}"/>
  <path class="ink center accent" d="M${AXIS_X} ${f(Y(-0.8))} L${AXIS_X} ${f(Y(18.2))}"/>
  <text class="accent-text" x="${AXIS_X + 4}" y="${f(Y(18.0))}">℄</text>

  <!-- Dimensions in modules (M = lower radius) -->
  <g class="ink thin layer-dims">
    ${vDim(0, 1, '1 M')}
    ${vDim(1, 13, '12 M')}
    ${vDim(13, 14, '1 M')}
    ${vDim(14, 17.5, '3½ M')}
    ${vDim(0, 14, '14 M = 7 D', DIM_X + 3.4)}
    <path d="M${f(X(-1))} ${f(Y(-0.55))} L${f(X(1))} ${f(Y(-0.55))} M${f(X(-1))} ${f(Y(-0.4))} L${f(X(-1))} ${f(Y(-0.7))} M${f(X(1))} ${f(Y(-0.4))} L${f(X(1))} ${f(Y(-0.7))}"/>
    <text x="${f(X(1.25))}" y="${f(Y(-0.55) + 3)}">D = 2 M</text>
  </g>

  <!-- Callouts -->
  <g class="ink hair layer-labels">
    ${labelSvg}
  </g>

  <!-- View labels -->
  <text x="${f(X(-0.5))}" y="${f(Y(-1.9))}" class="sub" text-anchor="end">HALF SECTION</text>
  <text x="${f(X(0.5))}" y="${f(Y(-1.9))}" class="sub">HALF ELEVATION</text>

  <!-- Title block -->
  <g>
    <path class="ink thin" d="M12 ${H - 86} L${W - 12} ${H - 86} M${W - 190} ${H - 86} L${W - 190} ${H - 12}"/>
    <text class="title" x="28" y="${H - 58}">TUSCAN ORDER</text>
    <text class="sub" x="28" y="${H - 40}">COLUMN AND ENTABLATURE · AFTER VIGNOLA, 1562</text>
    <text class="sub" x="28" y="${H - 24}">PROJECT EXODUS · ARCHITECTURE TRAINING GROUND</text>
    <text class="sub" x="${W - 176}" y="${H - 62}">SHEET  COL-05</text>
    <text class="sub" x="${W - 176}" y="${H - 48}">SCALE  IN MODULES</text>
    <!-- Scale bar: 0..4 M -->
    <g class="ink thin">
      ${[0, 1, 2, 3].map((i) => `<rect x="${W - 176 + i * M}" y="${H - 38}" width="${M}" height="5" ${i % 2 ? 'fill="none"' : 'style="fill: var(--_ink)"'}/>`).join('')}
    </g>
    ${[0, 2, 4].map((i) => `<text class="sub" x="${W - 178 + i * M}" y="${H - 20}">${i}</text>`).join('')}
  </g>
</svg>
`

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, svg)
console.log(`wrote ${OUT} (${svg.length} bytes)`)
