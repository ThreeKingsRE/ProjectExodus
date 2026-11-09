'use client'

import { useSkyTheme } from '@/components/theme/SkyThemeProvider'

/**
 * ProgressiveSkyline - An animated journey through civilization's evolution
 *
 * Visual narrative: Rural → Suburbs → Industrial City (with pollution) → Sustainable Green City → Back to Rural
 * The cycle repeats infinitely, showing that sustainability means returning to harmony with nature.
 *
 * The artwork (~15,000 shapes) lives in ./skyline/SkylineArt.tsx and is pre-rendered
 * to static files by `npm run skyline` (day, dusk and night variants). Shown as an
 * image it is downloaded once (~85 KB compressed), cached, and reused for both
 * copies of the loop, instead of being sent to every visitor as ~3 MB of HTML and
 * JavaScript. Its small animations (vehicles, smoke, chickens) run inside the image.
 */
export function ProgressiveSkyline() {
  const { currentPhase } = useSkyTheme()
  const variant = ['night', 'midnight'].includes(currentPhase)
    ? 'night'
    : ['dusk', 'evening'].includes(currentPhase)
      ? 'dusk'
      : 'day'
  const src = `/decorative/skyline-${variant}.svg`

  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes skylineScroll {
          0% { transform: translateX(-2400px); }
          100% { transform: translateX(-7400px); }
        }
        .skyline-container {
          animation: skylineScroll 420s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .skyline-container { animation: none; transform: translateX(-2400px); }
        }
      `}</style>

      {/* Background atmosphere layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-100" />

      <div className="skyline-container flex">
        {/* Same image twice for a seamless loop; the browser fetches it once */}
        {[0, 1].map((i) => (
          // eslint-disable-next-line @next/next/no-img-element -- static decorative SVG; next/image would rasterise it
          <img
            key={i}
            src={src}
            alt=""
            width={5000}
            height={250}
            decoding="async"
            fetchPriority="low"
            className="flex-shrink-0"
            style={{ width: 5000, height: 250, maxWidth: 'none' }}
          />
        ))}
      </div>
    </div>
  )
}
