'use client'

// ============================================
// SCROLL OPEN ANIMATION
// Flow: the book on the page swings open, then the reader lands in the book.
// The first time a book is opened, a reading-level card shows over the page first.
// ============================================

import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils/cn'
import { LEARNING_LEVELS, LEARNING_LEVEL_ORDER, type LearningLevel } from '@/types/learning'

// ============================================
// TYPES
// ============================================

interface ScrollOpenAnimationProps {
  topicSlug: string
  topicTitle: string
  topicDescription?: string
  onAnimationComplete: () => void
  reducedMotion?: boolean
  className?: string
  /** The reading level to preselect (the reader's last choice) */
  level: LearningLevel
  /** Called once the reader confirms a level (also when they skip: the preselected one) */
  onLevelChosen: (level: LearningLevel) => void
  /** Ask for the level (first time this book is opened). Later opens skip the step;
   *  the level can be changed any time from the book's top bar. */
  askLevel?: boolean
}

type AnimationPhase = 'level' | 'complete'

// ============================================
// MAIN COMPONENT
// ============================================

export function ScrollOpenAnimation({
  onAnimationComplete,
  className,
  level,
  onLevelChosen,
  askLevel = true,
}: ScrollOpenAnimationProps) {
  // First time a book is opened the reader picks a level; otherwise the book opens straight away
  const [phase, setPhase] = useState<AnimationPhase>(askLevel ? 'level' : 'complete')
  const [choice, setChoice] = useState<LearningLevel>(level)
  const chosenRef = useRef(false)
  const confirmLevel = useCallback((next: LearningLevel) => {
    if (chosenRef.current) return
    chosenRef.current = true
    onLevelChosen(next)
  }, [onLevelChosen])
  const completedRef = useRef(false)

  const handleComplete = useCallback(() => {
    if (!completedRef.current) {
      confirmLevel(choice)
      completedRef.current = true
      setPhase('complete')
      onAnimationComplete()
    }
  }, [onAnimationComplete, confirmLevel, choice])

  const proceedFromLevel = useCallback(() => {
    confirmLevel(choice)
    handleComplete()
  }, [choice, confirmLevel, handleComplete])

  // No level step: hand over to the book as soon as this mounts
  const onCompleteRef = useRef(onAnimationComplete)
  useEffect(() => { onCompleteRef.current = onAnimationComplete }, [onAnimationComplete])
  useEffect(() => {
    if (askLevel || completedRef.current) return
    completedRef.current = true
    onCompleteRef.current()
  }, [askLevel])

  // Keyboard: Esc keeps the suggested level, 1-6 choose, Enter continues
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        handleComplete()
      } else if (phase === 'level' && /^[1-9]$/.test(e.key) && LEARNING_LEVEL_ORDER[Number(e.key) - 1]) {
        e.preventDefault()
        setChoice(LEARNING_LEVEL_ORDER[Number(e.key) - 1])
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        if (phase === 'level') proceedFromLevel()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [phase, handleComplete, proceedFromLevel])

  if (phase !== 'level') return null

  // First time this book is opened: a reading-level card over the dimmed page,
  // which fades straight into the book once a level is chosen
  return (
    <motion.div
      className={cn('fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm sm:p-8', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <motion.div
        className="w-full max-w-lg rounded-2xl border border-amber-700/30 bg-[#1f1a15] p-5 shadow-2xl sm:p-8"
        initial={{ opacity: 0, y: 14, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-full max-w-lg space-y-5 text-center sm:space-y-7">
                      <div>
                        <p className="mb-2 font-serif text-sm uppercase tracking-[0.3em] text-amber-500/80">Reading Level</p>
                        <div className="mx-auto h-0.5 w-32 bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />
                        <p className="mt-3 font-serif text-sm text-amber-100/60">Every chapter is written for each level. Choose the one that fits you.</p>
                      </div>

                      <div role="radiogroup" aria-label="Reading level" className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                        {LEARNING_LEVEL_ORDER.map((id, i) => {
                          const meta = LEARNING_LEVELS[id]
                          const on = id === choice
                          return (
                            <button
                              key={id}
                              type="button"
                              role="radio"
                              aria-checked={on}
                              onClick={(e) => { e.stopPropagation(); setChoice(id) }}
                              className={cn(
                                'relative flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left transition-all',
                                on
                                  ? 'border-amber-400/80 bg-amber-700/40 text-amber-50 shadow-[0_0_0_1px_rgba(251,191,36,0.35)]'
                                  : 'border-amber-700/30 bg-amber-900/30 text-amber-100/80 hover:bg-amber-900/50'
                              )}
                            >
                              <span className="text-lg leading-none" aria-hidden>{meta.icon}</span>
                              <span className="min-w-0">
                                <span className="block truncate font-serif text-sm">{meta.label}</span>
                                <span className="block text-[11px] text-amber-100/50">{meta.ageRange}</span>
                              </span>
                              <kbd className="absolute right-1.5 top-1.5 hidden rounded border border-amber-700/30 px-1 font-mono text-[10px] text-amber-100/40 sm:block">{i + 1}</kbd>
                            </button>
                          )
                        })}
                      </div>

                      <p className="hidden text-xs text-amber-100/40 sm:block">
                        Press <kbd className="rounded border border-amber-700/30 px-1.5 font-mono">1</kbd>–<kbd className="rounded border border-amber-700/30 px-1.5 font-mono">6</kbd> to choose, <kbd className="rounded border border-amber-700/30 px-1.5 font-mono">Enter</kbd> to continue
                      </p>

                      <button
                        onClick={(e) => { e.stopPropagation(); proceedFromLevel() }}
                        className="rounded-lg border border-amber-600/40 bg-amber-700/30 px-8 py-3 font-serif text-amber-100 transition-all hover:bg-amber-700/50"
                      >
                        Continue as {LEARNING_LEVELS[choice].label}
                      </button>
                    </div>
      </motion.div>
    </motion.div>
  )
}

export default ScrollOpenAnimation
