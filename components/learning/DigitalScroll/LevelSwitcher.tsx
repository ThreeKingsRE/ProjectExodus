'use client'

// Reading level switcher in the open book's top bar. Always visible and labelled,
// so a reader can change level at any time; the choice is remembered for this book.
// Accessible: a real button with aria-expanded, a radio group of levels, arrow keys
// move between levels, Enter/Space picks, Esc closes, 44px touch targets.

import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Check } from 'lucide-react'
import { LEARNING_LEVELS, LEARNING_LEVEL_ORDER } from '@/types/learning'
import type { LearningLevel } from '@/types/learning'
import { cn } from '@/lib/utils/cn'

export function LevelSwitcher({ level, onChange }: { level: LearningLevel; onChange: (level: LearningLevel) => void }) {
  const [open, setOpen] = useState(false)
  const wrap = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)
  const options = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    if (!open) return
    // Focus the current level when the menu opens
    options.current[LEARNING_LEVEL_ORDER.indexOf(level)]?.focus()
    const onDown = (e: PointerEvent) => { if (!wrap.current?.contains(e.target as Node)) setOpen(false) }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.stopPropagation(); setOpen(false); button.current?.focus() }
    }
    document.addEventListener('pointerdown', onDown)
    window.addEventListener('keydown', onKey, true)
    return () => { document.removeEventListener('pointerdown', onDown); window.removeEventListener('keydown', onKey, true) }
  }, [open, level])

  const moveFocus = (from: number, step: number) => {
    const n = LEARNING_LEVEL_ORDER.length
    options.current[(from + step + n) % n]?.focus()
  }

  return (
    <div ref={wrap} className="relative" data-no-flip>
      <button
        ref={button}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`Reading level: ${LEARNING_LEVELS[level].label}. Change level`}
        title="Change reading level"
        className="flex h-8 items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--card)]/90 px-2.5 text-xs font-semibold text-[var(--book-text,var(--foreground))] transition-all hover:bg-[var(--muted)] sm:h-10 sm:text-sm"
      >
        <GraduationCap className="h-4 w-4" aria-hidden />
        <span className="max-w-[7.5rem] truncate">{LEARNING_LEVELS[level].label}</span>
      </button>
      {open && (
        <div
          role="radiogroup"
          aria-label="Reading level"
          style={{ width: '16rem', maxWidth: 'calc(100vw - 2rem)' }}
          className="absolute left-0 top-[calc(100%+8px)] z-50 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2 text-[var(--foreground)] shadow-2xl"
        >
          <p className="px-2 pb-1.5 pt-1 text-xs text-[var(--muted-foreground)]">Every chapter is written for each level. Your choice is saved for this book.</p>
          {LEARNING_LEVEL_ORDER.map((id, i) => {
            const info = LEARNING_LEVELS[id]
            const selected = id === level
            return (
              <button
                key={id}
                ref={(el) => { options.current[i] = el }}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => { setOpen(false); if (!selected) onChange(id); button.current?.focus() }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); e.stopPropagation(); moveFocus(i, 1) }
                  else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); e.stopPropagation(); moveFocus(i, -1) }
                }}
                className={cn(
                  'flex min-h-11 w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors',
                  selected ? 'bg-[var(--primary)]/15 font-semibold' : 'hover:bg-[var(--muted)]'
                )}
              >
                <span className="flex-1">
                  {info.label}
                  <span className="block text-xs font-normal text-[var(--muted-foreground)]">{info.ageRange}</span>
                </span>
                {selected && <Check className="h-4 w-4 text-[var(--primary)]" aria-hidden />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
