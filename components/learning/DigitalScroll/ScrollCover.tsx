'use client'

// ============================================
// BOOK COVER
// The threshold, the invitation
// "And the book was opened..." - Revelation 20:12
// ============================================

import { motion, useAnimation } from 'framer-motion'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils/cn'
import { ANIMATION_TIMINGS, CORE_TOPIC_ICONS, A11Y_CONFIG } from './scrollConstants'

interface ScrollCoverProps {
  topicSlug: string
  topicTitle: string
  isOpen: boolean
  onOpenComplete?: () => void
  className?: string
}

export function ScrollCover({
  topicSlug,
  topicTitle,
  isOpen,
  onOpenComplete,
  className,
}: ScrollCoverProps) {
  const controls = useAnimation()
  const [coverState, setCoverState] = useState<'closed' | 'opening' | 'closing' | 'open'>('closed')

  const topicIcon = CORE_TOPIC_ICONS[topicSlug] || '📖'

  // ============================================
  // COVER ANIMATION SEQUENCE
  // ============================================

  useEffect(() => {
    if (isOpen && coverState === 'closed') {
      // Begin opening sequence
      setCoverState('opening')

      controls.start({
        rotateY: -180,
        transition: {
          duration: ANIMATION_TIMINGS.opening.duration / 1000,
          ease: [0.4, 0, 0.2, 1],
        },
      }).then(() => {
        setCoverState('open')
        onOpenComplete?.()
      })
    } else if (!isOpen && coverState === 'open') {
      // Close the book
      setCoverState('closing')

      controls.start({
        rotateY: 0,
        transition: {
          duration: ANIMATION_TIMINGS.opening.duration / 1000,
          ease: [0.4, 0, 0.2, 1],
        },
      }).then(() => {
        setCoverState('closed')
      })
    }
  }, [isOpen, coverState, controls, onOpenComplete])

  // ============================================
  // RENDER
  // ============================================

  return (
    <motion.div
      className={cn(
        'absolute inset-0 z-30',
        // 3D origin at left edge (like a real book cover)
        'origin-left',
        className
      )}
      style={{
        transformStyle: 'preserve-3d',
      }}
      initial={{ rotateY: 0 }}
      animate={controls}
      aria-label={A11Y_CONFIG.ariaLabels.cover}
    >
      {/* FRONT COVER */}
      <div
        className={cn(
          'absolute inset-0',
          'rounded-r-lg',
          'overflow-hidden',
        )}
        style={{
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Leather-like texture */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg,
                #1a1612 0%,
                #2a2420 30%,
                #1a1612 50%,
                #0f0d0a 100%
              )
            `,
          }}
        />

        {/* Embossed pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Gold border frame */}
        <div
          className="absolute inset-4 border-2 rounded-sm"
          style={{
            borderColor: 'rgba(212, 175, 55, 0.4)',
            boxShadow: 'inset 0 0 20px rgba(212, 175, 55, 0.1)',
          }}
        />

        {/* Decorative corners */}
        <CoverCorner position="top-left" />
        <CoverCorner position="top-right" />
        <CoverCorner position="bottom-left" />
        <CoverCorner position="bottom-right" />

        {/* Title Area */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
          {/* Topic Icon */}
          <motion.div
            className="text-6xl sm:text-7xl md:text-8xl mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {topicIcon}
          </motion.div>

          {/* Decorative line */}
          <div
            className="w-32 h-0.5 mb-6"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(212, 175, 55, 0.6), transparent)',
            }}
          />

          {/* Title */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wide"
            style={{
              color: '#d4af37',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            THE BOOK OF
          </motion.h1>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-wider mt-2"
            style={{
              color: '#f4e5c2',
              textShadow: '0 2px 8px rgba(0,0,0,0.6)',
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {topicTitle.toUpperCase()}
          </motion.h2>

          {/* Decorative line */}
          <div
            className="w-32 h-0.5 mt-6"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(212, 175, 55, 0.6), transparent)',
            }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-sm sm:text-base mt-8 italic"
            style={{
              color: 'rgba(244, 229, 194, 0.7)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            A Journey of Understanding
          </motion.p>

          {/* Project Exodus mark */}
          <motion.div
            className="absolute bottom-8 text-xs tracking-widest"
            style={{
              color: 'rgba(212, 175, 55, 0.5)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            PROJECT EXODUS
          </motion.div>
        </div>

        {/* Spine edge shadow */}
        <div
          className="absolute inset-y-0 left-0 w-4"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.4), transparent)',
          }}
        />

        {/* Edge highlight */}
        <div
          className="absolute inset-y-0 right-0 w-px"
          style={{
            background: 'rgba(255,255,255,0.1)',
          }}
        />
      </div>

      {/* BACK OF COVER (visible when opened) */}
      <div
        className="absolute inset-0 rounded-r-lg"
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: `
            linear-gradient(135deg,
              #2a2420 0%,
              #1a1612 100%
            )
          `,
        }}
      >
        {/* Marble paper pattern */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 30%),
              radial-gradient(circle at 80% 70%, rgba(14, 165, 233, 0.1) 0%, transparent 30%),
              radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)
            `,
          }}
        />
      </div>
    </motion.div>
  )
}

// ============================================
// DECORATIVE CORNER ORNAMENT
// ============================================

interface CoverCornerProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

function CoverCorner({ position }: CoverCornerProps) {
  const positionClasses = {
    'top-left': 'top-6 left-6',
    'top-right': 'top-6 right-6 rotate-90',
    'bottom-left': 'bottom-6 left-6 -rotate-90',
    'bottom-right': 'bottom-6 right-6 rotate-180',
  }

  return (
    <div
      className={cn(
        'absolute w-8 h-8',
        positionClasses[position]
      )}
      style={{
        color: 'rgba(212, 175, 55, 0.5)',
      }}
    >
      <svg viewBox="0 0 32 32" fill="currentColor">
        <path d="M0 0 L8 0 L8 2 L2 2 L2 8 L0 8 Z M0 0 L0 8 L2 8 L2 2 L8 2 L8 0 Z" />
        <circle cx="4" cy="4" r="1.5" />
      </svg>
    </div>
  )
}

// ============================================
// INSIDE COVER (Dedication Page)
// ============================================

interface InsideCoverProps {
  topicSlug: string
  topicTitle: string
  chapterCount: number
  verseCount: number
  pageCount: number
  selectedLevel?: string
  onLevelSelect?: (level: string) => void
  onStartReading?: () => void
  className?: string
}

export function InsideCover({
  topicSlug,
  topicTitle,
  chapterCount,
  verseCount,
  pageCount,
  selectedLevel,
  onLevelSelect,
  onStartReading,
  className,
}: InsideCoverProps) {
  const levels = [
    { id: 'ELEMENTARY', code: 'L1', label: 'Elementary' },
    { id: 'MIDDLE_SCHOOL', code: 'L2', label: 'Middle School' },
    { id: 'HIGH_SCHOOL', code: 'L3', label: 'High School' },
    { id: 'UNDERGRADUATE', code: 'L4', label: 'College' },
    { id: 'GRADUATE', code: 'L5', label: 'Graduate' },
    { id: 'PHD', code: 'L6', label: 'Expert' },
  ]
  const pad = (n: number) => String(n).padStart(2, '0')

  // Laid out like a drawing's title block: label, title, a ruled level table,
  // a ruled stats strip and one ink button
  return (
    <div
      className={cn(
        'ds-sheet relative w-full h-full flex flex-col items-center justify-center px-6 py-5',
        'text-center overflow-hidden text-[var(--ds-ink)]',
        className
      )}
      data-topic={topicSlug}
    >
      <div aria-hidden className="pointer-events-none absolute inset-[5px] border border-[var(--ds-hair)]" />

      <p className="ds-label text-[9px] text-[var(--ds-ink-soft)] mb-4 shrink-0">Project Exodus · Learning Academy</p>
      <p className="ds-label text-[10px] text-[var(--ds-accent)] mb-1 shrink-0">The book of</p>
      <h2 className="text-2xl sm:text-3xl font-serif font-semibold leading-tight mb-2 shrink-0">
        {topicTitle.charAt(0) + topicTitle.slice(1).toLowerCase()}
      </h2>
      <p className="text-xs italic font-serif text-[var(--ds-ink-soft)] mb-5 max-w-[240px] shrink-0">
        A sustainability journey for those who seek
      </p>

      {/* Level selection */}
      <div className="mb-5 w-full max-w-[320px] shrink-0" style={{ maxWidth: 320 }}>
        <p className="ds-label text-[9px] text-[var(--ds-ink-soft)] mb-2">Select your level</p>
        <div className="grid grid-cols-3 border-l border-t border-[var(--ds-rule)]" role="radiogroup" aria-label="Learning level">
          {levels.map((level) => {
            const selected = selectedLevel === level.id
            return (
              <button
                key={level.id}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => onLevelSelect?.(level.id)}
                className={cn(
                  'border-r border-b border-[var(--ds-rule)] px-2 py-2 text-left transition-colors',
                  selected ? 'bg-[var(--ds-ink)] text-[var(--ds-paper)]' : 'hover:bg-[var(--ds-paper-deep)]'
                )}
              >
                <span className={cn('ds-label block text-[9px]', selected ? 'opacity-80' : 'text-[var(--ds-accent)]')}>
                  {level.code}
                </span>
                <span className="block text-[11px] font-medium leading-tight">{level.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Stats strip */}
      <div className="mb-5 grid w-full max-w-[320px] grid-cols-3 border border-[var(--ds-rule)] shrink-0" style={{ maxWidth: 320 }}>
        {[
          ['Chapters', chapterCount],
          ['Lessons', verseCount],
          ['Pages', pageCount],
        ].map(([label, value], k) => (
          <div key={label as string} className={cn('px-2 py-1.5', k > 0 && 'border-l border-[var(--ds-rule)]')}>
            <div className="ds-label text-[8px] text-[var(--ds-ink-soft)]">{label}</div>
            <div className="font-mono text-sm tabular-nums">{pad(value as number)}</div>
          </div>
        ))}
      </div>

      <motion.button
        onClick={onStartReading}
        className="ds-label shrink-0 flex items-center gap-2 border border-[var(--ds-ink)] bg-[var(--ds-ink)] px-5 py-2 text-[10px] text-[var(--ds-paper)] hover:bg-transparent hover:text-[var(--ds-ink)] transition-colors"
        whileTap={{ scale: 0.98 }}
      >
        Begin reading <span aria-hidden>→</span>
      </motion.button>
    </div>
  )
}

export default ScrollCover
