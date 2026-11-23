'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { useSkyTheme } from '@/components/theme/SkyThemeProvider'

// A worm's-eye view up through a canopy: four trees rise from the corners toward
// the sky in the middle. Each tree is grown recursively: every branch splits into
// two or three smaller ones at natural angles and tapers smoothly toward the tips,
// so it reads as a real tree silhouette rather than evenly thick lines.

type Seg = { d: string; w: number }

// Small deterministic random generator so the tree looks the same on every visit
function rng(seed: number) {
  let t = seed >>> 0
  return () => {
    t += 0x6d2b79f5
    let r = Math.imul(t ^ (t >>> 15), 1 | t)
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r)
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296
  }
}

/** One tapered branch as a filled outline: wide at the base, narrow at the tip, gently curved. */
function taperedBranch(x: number, y: number, angle: number, len: number, w0: number, w1: number, bend: number): { d: string; ex: number; ey: number } {
  const ex = x + Math.cos(angle) * len, ey = y + Math.sin(angle) * len
  // control point bowed sideways for a natural curve
  const mx = (x + ex) / 2 + Math.cos(angle + Math.PI / 2) * bend, my = (y + ey) / 2 + Math.sin(angle + Math.PI / 2) * bend
  const nx = Math.cos(angle + Math.PI / 2), ny = Math.sin(angle + Math.PI / 2)
  const f = (n: number) => n.toFixed(1)
  const d = `M${f(x + nx * w0 / 2)},${f(y + ny * w0 / 2)}`
    + `Q${f(mx + nx * (w0 + w1) / 4)},${f(my + ny * (w0 + w1) / 4)} ${f(ex + nx * w1 / 2)},${f(ey + ny * w1 / 2)}`
    + `L${f(ex - nx * w1 / 2)},${f(ey - ny * w1 / 2)}`
    + `Q${f(mx - nx * (w0 + w1) / 4)},${f(my - ny * (w0 + w1) / 4)} ${f(x - nx * w0 / 2)},${f(y - ny * w0 / 2)}Z`
  return { d, ex, ey }
}

function growTree(seed: number, x: number, y: number, angle: number, len: number, width: number): Seg[] {
  const rand = rng(seed)
  const out: Seg[] = []
  const grow = (x: number, y: number, a: number, len: number, w: number, depth: number) => {
    const tipW = Math.max(w * 0.74, 0.45)
    const b = taperedBranch(x, y, a, len, w, tipW, (rand() - 0.5) * len * 0.18)
    out.push({ d: b.d, w })
    if (depth === 0 || len < 9) return
    const children = depth > 4 ? 2 : rand() < 0.25 ? 3 : 2
    for (let i = 0; i < children; i++) {
      const spread = 0.32 + rand() * 0.28 // ~18-35 degrees
      const side = children === 3 ? i - 1 : i === 0 ? -1 : 1
      const childA = a + side * spread + (rand() - 0.5) * 0.12
      // the leading branch stays longer and thicker, like a real leader
      const leader = side === 0 || (children === 2 && i === 0 && rand() < 0.5)
      const childLen = len * (leader ? 0.8 : 0.66 + rand() * 0.1)
      const childW = tipW * (leader ? 0.95 : 0.78)
      grow(b.ex, b.ey, childA, childLen, childW, depth - 1)
    }
  }
  grow(x, y, angle, len, width, 7)
  return out
}

export function TreeBranches() {
  const pathname = usePathname()
  const isHeroPage = pathname === '/'
  const { currentPhase } = useSkyTheme()
  const isNightTime = ['dusk', 'evening', 'night', 'midnight'].includes(currentPhase)

  // Four trees rising from the corners toward the open sky in the middle
  const trees = useMemo(() => [
    growTree(11, -20, 1030, -0.95, 215, 40),
    growTree(23, 1020, 1030, -2.19, 205, 38),
    growTree(37, -30, -30, 0.78, 175, 30),
    growTree(41, 1030, -30, 2.36, 170, 28),
  ], [])

  if (isHeroPage) return null

  return (
    <>
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-10 opacity-[0.16] dark:opacity-[0.12]"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        shapeRendering="geometricPrecision"
        style={{
          filter: isNightTime ? 'brightness(0.08)' : 'brightness(1)',
          transition: 'filter 2s ease-in-out',
        }}
        aria-hidden
      >
        <g fill="currentColor" className="text-[var(--foreground)]">
          {trees.map((segs, t) => (
            <path key={t} d={segs.map((s) => s.d).join('')} />
          ))}
        </g>

        {/* BIRDS - Flying through the dense canopy */}
        <g opacity="0.48">
          {/* Bird 1 */}
          <g transform="translate(320, 420)">
            <ellipse cx="0" cy="0" rx="6" ry="3.7" fill="currentColor" className="text-[var(--foreground)]" />
            <circle cx="-1.5" cy="-0.5" r="1" fill="currentColor" className="text-[var(--foreground)]" />
            <path d="M -6,-0.5 Q -8,-2.5 -10,-1.5" stroke="currentColor" strokeWidth="0.9" fill="none" className="text-[var(--foreground)]" />
            <path d="M 6,-0.5 Q 8,-2.5 10,-1.5" stroke="currentColor" strokeWidth="0.9" fill="none" className="text-[var(--foreground)]" />
          </g>

          {/* Bird 2 */}
          <g transform="translate(680, 320)">
            <ellipse cx="0" cy="0" rx="5.5" ry="3.4" fill="currentColor" className="text-[var(--foreground)]" />
            <circle cx="-1.3" cy="-0.4" r="0.9" fill="currentColor" className="text-[var(--foreground)]" />
            <path d="M -5.5,-0.5 Q -7.5,-2.2 -9.5,-1.3" stroke="currentColor" strokeWidth="0.8" fill="none" className="text-[var(--foreground)]" />
            <path d="M 5.5,-0.5 Q 7.5,-2.2 9.5,-1.3" stroke="currentColor" strokeWidth="0.8" fill="none" className="text-[var(--foreground)]" />
          </g>

          {/* Bird 3 */}
          <g transform="translate(500, 550)">
            <ellipse cx="0" cy="0" rx="6.2" ry="3.8" fill="currentColor" className="text-[var(--foreground)]" />
            <circle cx="-1.6" cy="-0.5" r="1.1" fill="currentColor" className="text-[var(--foreground)]" />
            <path d="M -6.2,-0.6 Q -8.2,-2.8 -10.2,-1.6" stroke="currentColor" strokeWidth="1" fill="none" className="text-[var(--foreground)]" />
            <path d="M 6.2,-0.6 Q 8.2,-2.8 10.2,-1.6" stroke="currentColor" strokeWidth="1" fill="none" className="text-[var(--foreground)]" />
          </g>

          {/* Bird 4 */}
          <g transform="translate(250, 650)">
            <ellipse cx="0" cy="0" rx="5" ry="3.1" fill="currentColor" className="text-[var(--foreground)]" />
            <circle cx="-1.2" cy="-0.4" r="0.85" fill="currentColor" className="text-[var(--foreground)]" />
            <path d="M -5,-0.4 Q -7,-2 -9,-1.2" stroke="currentColor" strokeWidth="0.75" fill="none" className="text-[var(--foreground)]" />
            <path d="M 5,-0.4 Q 7,-2 9,-1.2" stroke="currentColor" strokeWidth="0.75" fill="none" className="text-[var(--foreground)]" />
          </g>

          {/* Bird 5 */}
          <g transform="translate(750, 600)">
            <ellipse cx="0" cy="0" rx="5.8" ry="3.6" fill="currentColor" className="text-[var(--foreground)]" />
            <circle cx="-1.4" cy="-0.5" r="0.95" fill="currentColor" className="text-[var(--foreground)]" />
            <path d="M -5.8,-0.5 Q -7.8,-2.5 -9.8,-1.4" stroke="currentColor" strokeWidth="0.85" fill="none" className="text-[var(--foreground)]" />
            <path d="M 5.8,-0.5 Q 7.8,-2.5 9.8,-1.4" stroke="currentColor" strokeWidth="0.85" fill="none" className="text-[var(--foreground)]" />
          </g>

          {/* Bird 6 - Additional */}
          <g transform="translate(450, 250)">
            <ellipse cx="0" cy="0" rx="5.3" ry="3.3" fill="currentColor" className="text-[var(--foreground)]" />
            <circle cx="-1.3" cy="-0.4" r="0.9" fill="currentColor" className="text-[var(--foreground)]" />
            <path d="M -5.3,-0.4 Q -7.3,-2.1 -9.3,-1.3" stroke="currentColor" strokeWidth="0.78" fill="none" className="text-[var(--foreground)]" />
            <path d="M 5.3,-0.4 Q 7.3,-2.1 9.3,-1.3" stroke="currentColor" strokeWidth="0.78" fill="none" className="text-[var(--foreground)]" />
          </g>

          {/* Bird 7 - Additional */}
          <g transform="translate(180, 380)">
            <ellipse cx="0" cy="0" rx="4.8" ry="3" fill="currentColor" className="text-[var(--foreground)]" />
            <circle cx="-1.2" cy="-0.4" r="0.8" fill="currentColor" className="text-[var(--foreground)]" />
            <path d="M -4.8,-0.4 Q -6.8,-1.9 -8.8,-1.2" stroke="currentColor" strokeWidth="0.7" fill="none" className="text-[var(--foreground)]" />
            <path d="M 4.8,-0.4 Q 6.8,-1.9 8.8,-1.2" stroke="currentColor" strokeWidth="0.7" fill="none" className="text-[var(--foreground)]" />
          </g>

          {/* Bird 8 - Additional */}
          <g transform="translate(820, 450)">
            <ellipse cx="0" cy="0" rx="5.5" ry="3.4" fill="currentColor" className="text-[var(--foreground)]" />
            <circle cx="-1.4" cy="-0.5" r="0.9" fill="currentColor" className="text-[var(--foreground)]" />
            <path d="M -5.5,-0.5 Q -7.5,-2.3 -9.5,-1.4" stroke="currentColor" strokeWidth="0.8" fill="none" className="text-[var(--foreground)]" />
            <path d="M 5.5,-0.5 Q 7.5,-2.3 9.5,-1.4" stroke="currentColor" strokeWidth="0.8" fill="none" className="text-[var(--foreground)]" />
          </g>
        </g>
      </svg>
    </>
  )
}
