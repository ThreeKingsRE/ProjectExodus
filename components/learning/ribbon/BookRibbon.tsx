'use client'

// The reader's ribbon inside the open book. Like a real sewn-in bookmark it comes
// out of the top of the spine and lies in the binding, so it never covers text:
// - two-page spread: down the center fold, with the tail hanging below the book
// - single page (phones, full-width lesson pages): down the bound left edge, in the
//   page's left margin, ending above the footer
// Tap it to see where it's saved; a long hover or long press reveals the pencil.

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { RibbonStyle } from '@/lib/learning/ribbon'
import { ReadingRibbon } from './ReadingRibbon'

/** Left margin a single page keeps clear for the ribbon (px). PageContainer pads to match. */
export const RIBBON_MARGIN_PX = 24

export function BookRibbon({ ribbon, pageNumber, chapterNumber, onEdit, layout }: {
  ribbon: RibbonStyle
  pageNumber: number
  chapterNumber: number | null
  onEdit?: () => void
  /** 'spread' = two pages with a center spine; 'single' = one page bound on its left edge */
  layout: 'spread' | 'single'
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close the card on an outside tap or Esc
  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { e.stopPropagation(); setOpen(false) } }
    document.addEventListener('pointerdown', onDown)
    window.addEventListener('keydown', onKey, true)
    return () => { document.removeEventListener('pointerdown', onDown); window.removeEventListener('keydown', onKey, true) }
  }, [open])

  const where = chapterNumber ? `Chapter ${chapterNumber} · p. ${pageNumber}` : `p. ${pageNumber}`
  const spread = layout === 'spread'
  // Spread: centered on the spine, from just above the head to a tail below the foot.
  // Single: in the left margin, from just above the head to above the page footer.
  const position = spread
    ? { left: '50%', marginLeft: -7, width: 14, top: -12, bottom: -48 }
    : { left: 6, width: 12, top: -12, bottom: 64 }

  return (
    <div ref={ref} className="pointer-events-none absolute z-40" style={position} data-ribbon-layout={layout}>
      <motion.div
        className="pointer-events-auto h-full w-full"
        initial={{ scaleY: 0.2, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 160, damping: 20 }}
        style={{ transformOrigin: 'top center' }}
      >
        <ReadingRibbon
          ribbon={ribbon}
          className="drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]"
          style={{ width: '100%', height: '100%' }}
          label={`Your ribbon, at ${where}`}
          onClick={() => setOpen((v) => !v)}
          editable={!!onEdit}
          onEdit={() => { setOpen(false); onEdit?.() }}
        />
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            role="status"
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            style={{ width: '15rem', maxWidth: 'calc(100vw - 4rem)' }}
            className="pointer-events-auto absolute left-[calc(100%+10px)] top-16 rounded-xl border border-[var(--border)] bg-[var(--card)] p-3 text-left text-xs text-[var(--foreground)] shadow-xl"
          >
            <p className="font-serif text-sm font-semibold">Your ribbon · {where}</p>
            <p className="mt-1 leading-relaxed text-[var(--muted-foreground)]">It moves with you as you read and is saved to your account, so you can pick up right here on any device.</p>
            {onEdit && (
              <button type="button" onClick={() => { setOpen(false); onEdit() }} className="mt-2 font-semibold text-[var(--primary)] underline-offset-4 hover:underline">
                Customize ribbon
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
