'use client'

// The reader's bookmark ribbon, drawn from their design: colour with a satin
// sheen and stitched edges, an optional pattern, a small decal and initials
// near the tail, and the tail shape they chose. A long hover (or a long press
// on touch screens) reveals a small pencil that opens the customizer.

import { useRef, useState, type CSSProperties } from 'react'
import { Pencil } from 'lucide-react'
import { TAIL_CLIP, type RibbonDecal, type RibbonStyle } from '@/lib/learning/ribbon'

const PATTERN_BG: Record<RibbonStyle['pattern'], string | undefined> = {
  none: undefined,
  stripes: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.26) 0 3px, transparent 3px 8px)',
  dots: 'radial-gradient(circle, rgba(255,255,255,0.42) 0 1.3px, transparent 1.6px) 0 0 / 7px 7px',
  chevrons: 'linear-gradient(135deg, rgba(255,255,255,0.28) 25%, transparent 25%) -4px 0 / 8px 8px, linear-gradient(225deg, rgba(255,255,255,0.28) 25%, transparent 25%) -4px 0 / 8px 8px',
  gradient: 'linear-gradient(180deg, rgba(255,255,255,0.32), transparent 45%, rgba(0,0,0,0.3))',
}

/** Small foil charms, drawn in a 24×24 box */
export function DecalIcon({ decal, className, style }: { decal: RibbonDecal; className?: string; style?: CSSProperties }) {
  if (decal === 'none') return null
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden>
      {decal === 'leaf' && <><path {...common} d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z" /><path {...common} d="M5 19l8-8" /></>}
      {decal === 'fish' && <><path {...common} d="M3 12c3-4 7-5 11-5 3 0 5 2 6 5-1 3-3 5-6 5-4 0-8-1-11-5z" /><path {...common} d="M3 12l-1-3M3 12l-1 3" /><circle cx="16" cy="11" r="1" fill="currentColor" /></>}
      {decal === 'sun' && <><circle {...common} cx="12" cy="12" r="4" /><path {...common} d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" /></>}
      {decal === 'drop' && <path {...common} d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z" />}
      {decal === 'star' && <path {...common} d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z" />}
    </svg>
  )
}

/** Just the drawing, sized by its parent (width ~ height / 6 looks right). */
export function RibbonArt({ style: ribbon }: { style: RibbonStyle }) {
  const pattern = PATTERN_BG[ribbon.pattern]
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ clipPath: TAIL_CLIP[ribbon.tail], backgroundColor: ribbon.color, containerType: 'size' }}
    >
      {pattern && <div className="absolute inset-0" style={{ background: pattern }} />}
      {/* Satin: darker edges, a soft highlight down the middle */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.28), rgba(255,255,255,0.2) 42%, rgba(255,255,255,0.05) 58%, rgba(0,0,0,0.25))' }} />
      {/* Stitching */}
      <div className="absolute bottom-0 top-0 border-x border-dashed border-white/35" style={{ left: '14%', right: '14%' }} />
      <div className="absolute inset-x-0 bottom-[16%] flex flex-col items-center gap-[3cqw] text-white/90">
        {ribbon.decal !== 'none' && <DecalIcon decal={ribbon.decal} style={{ width: '64cqw', height: '64cqw' }} />}
        {ribbon.initials && (
          <span className="font-serif font-bold leading-none" style={{ fontSize: '42cqw', writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '-0.05em' }}>
            {ribbon.initials}
          </span>
        )}
      </div>
    </div>
  )
}

interface ReadingRibbonProps {
  ribbon: RibbonStyle
  className?: string
  style?: CSSProperties
  /** Show the hidden pencil after a long hover / long press */
  editable?: boolean
  onEdit?: () => void
  onClick?: () => void
  label?: string
}

/** The ribbon as an object on the page: drawn, with an optional hidden edit pencil. */
export function ReadingRibbon({ ribbon, className = '', style, editable = false, onEdit, onClick, label }: ReadingRibbonProps) {
  const [showEdit, setShowEdit] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const longPressed = useRef(false)

  const arm = (ms: number) => {
    if (!editable) return
    if (hideTimer.current) clearTimeout(hideTimer.current)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => { setShowEdit(true); longPressed.current = true }, ms)
  }
  const disarm = (hideAfter: number) => {
    if (timer.current) clearTimeout(timer.current)
    if (hideTimer.current) clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setShowEdit(false), hideAfter)
  }

  const interactive = !!onClick || editable
  return (
    <div
      className={`relative ${className}`}
      style={style}
      onPointerEnter={(e) => { if (e.pointerType === 'mouse') arm(650) }}
      onPointerLeave={(e) => { if (e.pointerType === 'mouse') disarm(1400) }}
      onPointerDown={(e) => { longPressed.current = false; if (e.pointerType !== 'mouse') arm(500) }}
      onPointerUp={(e) => { if (e.pointerType !== 'mouse') { if (timer.current) clearTimeout(timer.current); if (showEdit || longPressed.current) disarm(4000) } }}
      onContextMenu={(e) => { if (editable) e.preventDefault() }}
    >
      {interactive ? (
        <button
          type="button"
          aria-label={label ?? 'Your ribbon'}
          className="no-min-size absolute inset-0 block focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          onClick={(e) => {
            e.stopPropagation()
            if (longPressed.current) { longPressed.current = false; return } // a long press only shows the pencil
            onClick?.()
          }}
        >
          <RibbonArt style={ribbon} />
        </button>
      ) : (
        <div aria-hidden className="absolute inset-0"><RibbonArt style={ribbon} /></div>
      )}
      {editable && (
        <button
          type="button"
          aria-label="Customize your ribbon"
          onClick={(e) => { e.stopPropagation(); setShowEdit(false); onEdit?.() }}
          onFocus={() => setShowEdit(true)}
          onBlur={() => disarm(300)}
          className={`no-min-size absolute left-1/2 top-[12%] z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-white/70 bg-black/55 text-white shadow-lg backdrop-blur transition-all duration-200 ${showEdit ? 'scale-100 opacity-100' : 'pointer-events-none scale-75 opacity-0 focus:pointer-events-auto focus:scale-100 focus:opacity-100'}`}
        >
          <Pencil className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  )
}
