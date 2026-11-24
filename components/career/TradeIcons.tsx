'use client'

// Decorative trade icons for My Career: a slow drifting strip so people can spot
// the work they do. Purely visual (hidden from screen readers) and still for
// anyone who has reduced motion turned on.

import type { ComponentType, SVGProps } from 'react'
import { Zap, Anvil, Axe, BrickWall, Car, Drill, Fan, Fence, Flame, Flower2, HardHat, Hammer, PaintRoller, Pickaxe, Plug, Ruler, Scissors, Shovel, Tractor, TreePine, Truck, Wrench } from 'lucide-react'

type Icon = ComponentType<{ className?: string; strokeWidth?: number }>

const line = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

/** Push mower, drawn in the same line style as the other icons */
function Mower({ className, strokeWidth = 2 }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...line} strokeWidth={strokeWidth} aria-hidden>
      <path d="M3 3l6 9" /><path d="M2 4h2.5" />
      <path d="M8 12h11a2 2 0 0 1 2 2v2H6v-2a2 2 0 0 1 2-2z" />
      <circle cx="8.5" cy="18.5" r="2" /><circle cx="18" cy="18.5" r="2" />
    </svg>
  )
}

/** Mason's trowel */
function Trowel({ className, strokeWidth = 2 }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...line} strokeWidth={strokeWidth} aria-hidden>
      <path d="M3 21l7-7" /><path d="M8.5 12.5l3 3" />
      <path d="M11 13l8.5-8.5a1.5 1.5 0 0 1 2.1 0l.1.1a1.5 1.5 0 0 1 0 2.1L13.5 15z" />
    </svg>
  )
}

/** One per trade (names are for us; only the icons show), mixing outdoor, building and shop work */
export const TRADE_ICONS: { icon: Icon; trade: string }[] = [
  { icon: Wrench, trade: 'Plumbing' },
  { icon: Mower as Icon, trade: 'Lawn care' },
  { icon: Hammer, trade: 'Carpentry' },
  { icon: Trowel as Icon, trade: 'Masonry' },
  { icon: Zap, trade: 'Electrical' },
  { icon: Scissors, trade: 'Hedge trimming' },
  { icon: PaintRoller, trade: 'Painting' },
  { icon: BrickWall, trade: 'Brickwork' },
  { icon: Flame, trade: 'Welding' },
  { icon: Shovel, trade: 'Landscaping' },
  { icon: HardHat, trade: 'Construction' },
  { icon: Fan, trade: 'HVAC' },
  { icon: Drill, trade: 'Installation' },
  { icon: TreePine, trade: 'Tree work' },
  { icon: Car, trade: 'Auto repair' },
  { icon: Fence, trade: 'Fencing' },
  { icon: Ruler, trade: 'Finish work' },
  { icon: Truck, trade: 'Hauling' },
  { icon: Anvil, trade: 'Metalwork' },
  { icon: Pickaxe, trade: 'Excavation' },
  { icon: Plug, trade: 'Wiring' },
  { icon: Tractor, trade: 'Farming' },
  { icon: Axe, trade: 'Firewood' },
  { icon: Flower2, trade: 'Gardening' },
]

/**
 * A strip of every trade icon drifting slowly sideways, faded at both ends.
 * `size` is the icon size in px; `seconds` is one full loop.
 */
export function TradeIconStrip({ size = 16, gap = 10, seconds = 60, className = '' }: { size?: number; gap?: number; seconds?: number; className?: string }) {
  const set = (copy: number) => (
    <div key={copy} className="flex shrink-0" style={{ gap, paddingRight: gap }}>
      {TRADE_ICONS.map(({ icon: I, trade }) => <span key={trade} className="inline-flex"><I className="shrink-0" strokeWidth={1.75} {...{ style: { width: size, height: size } }} /></span>)}
    </div>
  )
  return (
    <div
      aria-hidden
      className={`trade-strip pointer-events-none min-w-0 overflow-hidden ${className}`}
      style={{ maskImage: 'linear-gradient(to right, transparent, #000 14%, #000 86%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, #000 14%, #000 86%, transparent)' }}
    >
      <div className="trade-strip-track flex w-max" style={{ animationDuration: `${seconds}s` }}>
        {set(0)}{set(1)}
      </div>
      <style>{`
        .trade-strip-track { animation: trade-strip-drift linear infinite }
        @keyframes trade-strip-drift { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @media (prefers-reduced-motion: reduce) { .trade-strip-track { animation: none } }
      `}</style>
    </div>
  )
}
