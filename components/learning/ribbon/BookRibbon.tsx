'use client'

// The reader's ribbon inside the open book: sewn in at the top edge and hanging
// down over the page. It moves as they read. Tap it to see where it's saved;
// a long hover or long press reveals the pencil to customize it.

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { RibbonStyle } from '@/lib/learning/ribbon'
import { ReadingRibbon } from './ReadingRibbon'

export function BookRibbon({ ribbon, pageNumber, chapterNumber, onEdit }: {
  ribbon: RibbonStyle
  pageNumber: number
  chapterNumber: number | null
  onEdit?: () => void
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
  return (
    <div ref={ref} className="pointer-events-none absolute left-[14%] top-0 z-40 lg:left-[calc(50%+10px)]">
      <motion.div
        className="pointer-events-auto"
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 16 }}
        style={{ transformOrigin: 'top center' }}
        whileHover={{ rotate: -2 }}
      >
        <ReadingRibbon
          ribbon={ribbon}
          className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.35)]"
          style={{ width: 'clamp(24px, 2.4vw, 32px)', height: 'clamp(118px, 15vw, 170px)' }}
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
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            style={{ width: '15rem', maxWidth: 'calc(100vw - 4rem)' }}
            className="pointer-events-auto absolute left-0 top-[calc(clamp(118px,15vw,170px)+8px)] rounded-xl border border-[var(--border)] bg-[var(--card)] p-3 text-left text-xs text-[var(--foreground)] shadow-xl"
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
