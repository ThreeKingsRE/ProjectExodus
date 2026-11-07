# Architecture Drawings: Technical Redesign + Expansion Plan

Status: **redraw complete (239/239).** The data-load fix and every drawing are live; the legacy inline SVG registry is deleted. Next: the expansion (§3).

### Decisions (from Mr. Nobody)
- **Look:** paper (ink on vellum) only. No blueprint mode.
- **Views:** one view per element, chosen by type: columns in **half section / half elevation**, arches and openings in **elevation**, **plan** for elements that don't need a section (floors, gardens, urban layouts, ceilings as reflected plans), **section** where the build-up is the point (envelopes, roofs, fireplaces), and a **paraline view** (isometric or oblique) where the element only reads in 3D (free plan, sculptural stair, transept, quoins, loggia, porte-cochère).
- **Sources:** redrawing from public-domain survey drawings is fine, and **every drawing carries its source credit on the image itself**, on both the full sheet and the unlabeled plate. The build refuses to produce a drawing without one.
- **Order:** fix the data load first, then redraw.

### Progress
| Step | Status |
|---|---|
| Data load: summaries to the client, full text per element on demand | ✅ ~770 KB gz less JS per architecture page |
| Drawing system: sheet + plate rendering, manifest, CI checks (coverage, credit, size, fit) | ✅ |
| All 239 elements, in 12 families (orders, arches, vaults, floors, stairs, roofs, interiors, openings, structure, landscape, rooms, religious, decorative, façade) | ✅ avg 2.4 KB gz per file |
| Paraline views (`axo`, `face`, `box`, `axoWall` in `kit.ts`) | ✅ |
| Legacy inline SVG registry (`ArchitectureSVG`, ~900 KB of TSX) | ✅ deleted; only the comparison-page components remain |
| Expansion toward 450+ elements | next |

Generator code: `scripts/architecture/drawings/` (`npm run arch:drawings`). Output: `public/architecture/drawings/<id>.svg` (sheet) and `<id>.plate.svg` (unlabeled plate).

*The original brainstorm follows; where it differs from the decisions above, the decisions win.*

---

## 1. What's actually heavy today (measured)

Production build, `/architecture` routes:

| What ships to the browser | Where | Raw | Gzipped |
|---|---|---|---|
| Element text data: 239 elements × 6 learning levels, all at once | `/architecture`, `/architecture/explore`, `/architecture/dashboard` | 2.97 MB | **~830 KB** |
| Drawings: ~215 React SVG components (~4,600 `<path>`s) in one registry | `/architecture/explore` (plus game modes) | 494 KB | ~76 KB |
| Structural set | `/architecture/structural`, `/compare` | 115 KB | ~22 KB |

**Takeaways**

1. **The text data is the real problem: ~10× the drawings.** Every visitor downloads the full content of all 239 elements at every learning level before seeing anything. That fix is independent of the drawing style.
2. **SVG is the right format; inlining it into JavaScript is the problem.** Line drawings as SVG are tiny and sharp at every zoom (the pilot is 3.8 KB). As JSX they get parsed and executed as JS, can't be cached separately, and all ~215 load even to show one.
3. Raster formats (PNG/WebP/AVIF) would be *bigger* for line art at retina sizes, blurry when zoomed, and couldn't follow the day/night theme. They're only worth it for shaded or rendered illustrations.

So the plan is not "replace SVG". It's: **static, cacheable SVG drawing files loaded on demand, in a real technical-drawing style, with element data served per element from the server.**

---

## 2. The drawing system

### 2.1 Visual standard ("sheet" style)

Every element gets one or more **sheets** drawn to a consistent drafting standard, so the whole library reads like one professional set:

| Convention | Rule |
|---|---|
| Line weights | Cut 2.2 · Profile 1.6 · Visible 0.5 · Hatch/shading 0.35 · Centerline 0.5 chain (`14 3 2 3`) |
| Views | Elevation, plan, section, detail; classical elements as **half-section / half-elevation** |
| Material hatching | Standard patterns: stone (45°), brick (coursed), timber (grain), concrete (stipple), earth, glass |
| Dimensions | Architectural ticks and extension lines; classical orders in **modules** (M), others in metres |
| Annotation | Monospace caps, leader lines with dots, fanned where parts crowd |
| Title block | Name, subtitle/source, sheet no. (e.g. `COL-05`), scale bar |
| Drafting marks | ℄ centerlines, break lines for continuing members, north arrow on plans, section markers (A–A) |

**Theme-aware, for free.** Ink, paper and accent colours are CSS custom properties with defaults, so the same file renders as **ink on vellum by day and a blueprint by night**, plugged into the existing solar day/night engine. (Pilot preview shows both.)

**Layers you can switch on and off.** Hatch, shading, dimensions and labels are separate layers controlled by CSS variables (`--show-dims: none`, etc.). That enables learning modes without extra files:
- Flashcards: hide labels and ask the user to name the part.
- Quiz: hide dimensions and ask for the proportions.
- Explore: everything on; hovering a callout highlights the part.

### 2.2 How drawings get made

Three authoring routes, used by family:

1. **Generators (parametric), the backbone.** Most of architecture is proportional systems and families. One generator per family produces every member from parameters:
   - Orders (Tuscan → Composite, plus Egyptian/Persian capitals): module ratios.
   - Arches (round, pointed, ogee, horseshoe, Tudor, trefoil, segmental, lancet, …): one curve generator with parameters.
   - Vaults, domes, roofs, stairs, windows/doors (tracery, glazing bars), masonry bonds, floor patterns.

   The pilot is the first generator. Rough estimate: **60–70% of the 450+ target can come from ~20 generators.**
2. **Hand-authored SVG** for one-offs: muqarnas, caryatids, specific landmarks. Drawn to the same standard and checked by the same linter.
3. **Traced from public-domain sources** where accuracy matters. The Library of Congress HABS/HAER/HALS survey drawings and pre-1929 references (e.g. Banister Fletcher, 1896) are public domain. These are a source to *redraw from*, not to embed.

All routes output plain `.svg` files, run through SVGO, and a **lint step in CI** checks each file: viewBox, `<title>`/`<desc>`, only theme variables for colour, layer classes present, size budget (for example ≤ 12 KB gzipped per sheet).

### 2.3 Delivery

- Files at `public/architecture/drawings/{element-id}/{view}.svg`, built at build time from the generators and served immutable-cached from the CDN.
- Rendered with an external `<svg><use href="/architecture/drawings/…/elevation.svg#sheet"/></svg>`. CSS custom properties inherit into `<use>`, so theme and layer toggles still work with no JavaScript. Loaded lazily, so only what's on screen downloads.
- A tiny `ElementDrawing` component replaces `ArchitectureSVG`; the old registry stays as a fallback per element until that element is migrated.

### 2.4 Fix the data payload (biggest win)

- Make the architecture listing pages **server components**. Send only the fields a card needs (id, name, category, period, region): a few KB.
- Load an element's full learning text **per element and per level**, on demand: a server-rendered `/architecture/explore/[id]` page, or a small JSON route.
- Games get their element subset from the server when a round starts (10 elements, 1 level), not all 239 × 6.
- Expected: **~830 KB gz → ~20–40 KB gz** on first load of the architecture pages.

---

## 3. Expansion (239 → 450+)

The existing `ARCHITECTURE_EXPANSION_PLAN.md` was written at 74 elements; the library now has **239**. Its category targets still hold. Folding them into the new system:

| Phase | Scope | Output |
|---|---|---|
| **0. Standard + pilot** ✅ | Drawing standard, Tuscan generator | This doc + pilot sheet |
| **1. Plumbing** | `ElementDrawing` component, file layout, SVG lint in CI, server-side element data (§2.4) | ~800 KB gz saved; no visual change yet |
| **2. Generator families** | Orders (all 5 + variants), arches, vaults, domes, roofs, stairs, windows/doors, masonry bonds, floor patterns | ~120 existing elements migrated + ~80 new family members |
| **3. Hand-authored migration** | Remaining existing elements that don't fit a family | All 239 on the new system; old registry deleted |
| **4. Expansion by category** | Floor, wall, ceiling, garden, interior, urban, fortification, religious (Phase 1–2 of the old plan) | +~130 |
| **5. Traditions** | Vernacular, industrial, Art Nouveau/Deco, modernist, brutalist, high-tech, postmodern, parametric | +~120 |

Each element gains structured drawing metadata (`views`, `parts[]` with callout ids, `source`), so the games can target parts ("tap the echinus") instead of just whole elements.

---

## 4. Decisions needed

1. **Look:** theme-adaptive (vellum by day / blueprint by night, as in the pilot), always-blueprint, or always-vellum?
2. **Depth per element:** a single elevation sheet each, or full sets (plan + elevation + section + detail) for the important elements?
3. **Sourcing:** OK to redraw from public-domain survey drawings (HABS/HAER, Banister Fletcher) where accuracy matters?
4. **Order of work:** do Phase 1 (the ~800 KB payload fix) first, or go straight to redrawing?
