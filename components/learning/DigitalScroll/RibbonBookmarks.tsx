'use client'

// ============================================
// RIBBON BOOKMARKS
// One sewn-in ribbon per chapter (Guardian colours) plus a Continue ribbon.
//
// Ribbons hang down from the top edge of the book, centred over the spine,
// like real bookmark ribbons. Each one shows the chapter number; the
// current chapter's ribbon hangs longest to mark the reader's place.
// Hovering or focusing a ribbon opens a small drafting card with the
// chapter's title, its status, and jump links to each part of the chapter.
// ============================================

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import {
  GUARDIAN_RIBBONS,
  RIBBON_ORDER,
  A11Y_CONFIG,
  getDeviceType,
  type GuardianRibbon,
} from './scrollConstants'

// ============================================
// TYPES
// ============================================

export type ChapterStatus = 'none' | 'started' | 'practiced' | 'passed'
export type ChapterSection = 'opener' | 'lesson' | 'review' | 'practice'

interface RibbonBookmarksProps {
  currentChapter: number
  completedChapters: number[]
  onChapterClick: (chapterIndex: number) => void
  onContinueClick: () => void
  continuePosition?: {
    chapter: number
    verse: number
    page: number
  }
  isExpanded?: boolean
  isFlipping?: boolean
  className?: string
  /** Added to ribbon numbers (Volume II starts at chapter 8) */
  chapterOffset?: number
  /** Chapters in this volume; the last volume can have fewer than 7 */
  chapterCount?: number
  /** Chapter titles, in order, for the hover card */
  chapterTitles?: string[]
  /** Progress per chapter, in order */
  chapterStatus?: ChapterStatus[]
  /** Jump to a part of a chapter */
  onSectionClick?: (chapterIndex: number, section: ChapterSection) => void
  /** Where Continue goes, e.g. "Ch. 08 · Lesson"; null when there's nothing to resume */
  continueLabel?: string | null
}

const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
// Swallowtail end, like a sewn-in bookmark ribbon
const RIBBON_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 50% 84%, 0 100%)'

const STATUS_TEXT: Record<ChapterStatus, string> = {
  none: 'Not started',
  started: 'In progress',
  practiced: 'Practice done · quiz unlocked',
  passed: 'Quiz passed · complete',
}

const SECTIONS: { id: ChapterSection; label: string }[] = [
  { id: 'opener', label: 'Opener' },
  { id: 'lesson', label: 'Lesson' },
  { id: 'review', label: 'Review' },
  { id: 'practice', label: 'Practice & quiz' },
]

// ============================================
// RIBBON ROW
// ============================================

export function RibbonBookmarks({
  currentChapter,
  completedChapters,
  onChapterClick,
  onContinueClick,
  isExpanded = false,
  isFlipping = false,
  className,
  chapterOffset = 0,
  chapterCount = RIBBON_ORDER.length,
  chapterTitles = [],
  chapterStatus = [],
  onSectionClick,
  continueLabel = null,
}: RibbonBookmarksProps) {
  const [deviceType, setDeviceType] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [openRibbon, setOpenRibbon] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function updateDevice() {
      setDeviceType(getDeviceType())
    }
    updateDevice()
    window.addEventListener('resize', updateDevice)
    return () => window.removeEventListener('resize', updateDevice)
  }, [])

  // Close the card while pages are turning
  useEffect(() => {
    if (isFlipping) setOpenRibbon(null)
  }, [isFlipping])

  const isDesktop = deviceType === 'desktop'

  // Small delay so the pointer can travel from ribbon to card without it closing
  const open = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenRibbon(id)
  }
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenRibbon(null), 160)
  }

  return (
    <div
      className={cn(
        'z-40',
        isDesktop
          ? 'absolute top-0 left-1/2 -translate-x-1/2 flex flex-row items-start gap-1.5'
          : 'flex flex-row items-start justify-center gap-1 px-2 bg-[var(--ds-paper-deep,var(--muted))] border-b border-[var(--ds-rule,var(--border))]',
        className
      )}
      role="navigation"
      aria-label="Chapter bookmarks"
      onKeyDown={(e) => {
        if (e.key === 'Escape' && openRibbon) {
          e.stopPropagation()
          setOpenRibbon(null)
        }
      }}
    >
      {RIBBON_ORDER.slice(0, chapterCount).map((ribbonKey, index) => {
        const ribbon = GUARDIAN_RIBBONS[ribbonKey]
        const status: ChapterStatus = completedChapters.includes(index)
          ? 'passed'
          : chapterStatus[index] ?? 'none'
        return (
          <Ribbon
            key={ribbon.id}
            ribbon={ribbon}
            chapterIndex={index}
            chapterNumber={chapterOffset + index + 1}
            title={chapterTitles[index]}
            status={status}
            isActive={currentChapter === index}
            isOpen={openRibbon === ribbon.id}
            isDesktop={isDesktop}
            isExpanded={isExpanded}
            onOpen={() => open(ribbon.id)}
            onClose={scheduleClose}
            onClick={() => {
              setOpenRibbon(null)
              onChapterClick(index)
            }}
            onSectionClick={
              onSectionClick
                ? (section) => {
                    setOpenRibbon(null)
                    onSectionClick(index, section)
                  }
                : undefined
            }
          />
        )
      })}

      <ContinueRibbon
        label={continueLabel}
        isDesktop={isDesktop}
        isExpanded={isExpanded}
        isOpen={openRibbon === 'continue'}
        onOpen={() => open('continue')}
        onClose={scheduleClose}
        onClick={() => {
          setOpenRibbon(null)
          onContinueClick()
        }}
      />
    </div>
  )
}

// ============================================
// SINGLE RIBBON
// ============================================

interface RibbonProps {
  ribbon: GuardianRibbon
  chapterIndex: number
  chapterNumber: number
  title?: string
  status: ChapterStatus
  isActive: boolean
  isOpen: boolean
  isDesktop: boolean
  isExpanded: boolean
  onOpen: () => void
  onClose: () => void
  onClick: () => void
  onSectionClick?: (section: ChapterSection) => void
}

function ribbonLength(isDesktop: boolean, isExpanded: boolean, isActive: boolean, isOpen: boolean) {
  if (!isDesktop) return isActive ? 40 : 32
  const rest = isExpanded ? 40 : 34
  if (isActive) return rest + 26 // the current chapter marks your place
  if (isOpen) return rest + 12
  return rest
}

function Ribbon({
  ribbon,
  chapterIndex,
  chapterNumber,
  title,
  status,
  isActive,
  isOpen,
  isDesktop,
  isExpanded,
  onOpen,
  onClose,
  onClick,
  onSectionClick,
}: RibbonProps) {
  const Icon = ribbon.icon
  const number = String(chapterNumber).padStart(2, '0')
  const cardId = `ribbon-card-${chapterIndex}`
  const height = ribbonLength(isDesktop, isExpanded, isActive, isOpen)

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) onClose()
      }}
    >
      <motion.button
        type="button"
        className={cn(
          'relative flex flex-col items-center justify-end pb-2.5',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-accent,#9a3412)] focus-visible:ring-offset-1'
        )}
        style={{
          width: isDesktop ? (isExpanded ? 26 : 24) : 26,
          background: ribbon.colors.gradient,
          clipPath: RIBBON_CLIP,
          filter: isActive ? 'drop-shadow(0 2px 2px rgba(0,0,0,0.28))' : 'drop-shadow(0 1px 1px rgba(0,0,0,0.18))',
        }}
        initial={false}
        animate={{ height }}
        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        whileTap={{ scale: 0.96 }}
        onClick={onClick}
        aria-label={`${A11Y_CONFIG.ariaLabels.ribbon(`Chapter ${number}`)}${title ? `: ${title}` : ''}. ${STATUS_TEXT[status]}`}
        aria-current={isActive ? 'page' : undefined}
        aria-expanded={onSectionClick ? isOpen : undefined}
        aria-controls={onSectionClick ? cardId : undefined}
      >
        {/* Stitching: a dashed hairline just inside each edge */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-[3px] right-[3px] border-x border-dashed border-white/35"
          style={{ clipPath: RIBBON_CLIP }}
        />
        {/* Icon shows once the ribbon is long enough to carry it */}
        {height >= 52 && <Icon className="w-3 h-3 text-white/90 mb-1" strokeWidth={1.5} aria-hidden />}
        <span className="text-[9px] leading-none text-white/95 tabular-nums" style={{ fontFamily: MONO }}>
          {number}
        </span>
        {/* Status mark on the ribbon: tick when passed, small dot when practice is done */}
        {status === 'passed' && (
          <span className="absolute top-1.5 left-1/2 -translate-x-1/2 flex h-3 w-3 items-center justify-center rounded-full bg-white/95" aria-hidden>
            <Check className="h-2 w-2" style={{ color: ribbon.colors.from }} strokeWidth={3} />
          </span>
        )}
        {status === 'practiced' && (
          <span className="absolute top-2 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-white/90" aria-hidden />
        )}
      </motion.button>

      {/* Drafting card: title, status, jump links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={cardId}
            className={cn(
              'absolute top-full mt-2 z-50 w-56 border border-[var(--ds-ink,#1f2a37)]/25 bg-[var(--ds-paper,#f4efe3)] text-left shadow-md',
              chapterIndex < 4 ? 'left-0' : 'right-0'
            )}
            // Inline: the global `div { max-width: 100% }` rule would squeeze the card to the ribbon's width
            style={{ marginTop: 6, width: 224, maxWidth: 'none' }}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            <div className="h-[2px] w-full" style={{ background: ribbon.colors.from }} />
            <div className="px-3 pt-2 pb-2">
              <div className="flex items-center gap-1.5">
                <Icon className="w-3.5 h-3.5" style={{ color: ribbon.colors.from }} strokeWidth={1.5} aria-hidden />
                <span className="text-[9px] uppercase tracking-[0.14em] text-[var(--ds-ink-soft,#4a5565)]" style={{ fontFamily: MONO }}>
                  Chapter {number} · {ribbon.value}
                </span>
              </div>
              {title && (
                <div className="mt-1 font-serif text-sm font-semibold leading-snug text-[var(--ds-ink,#1f2a37)]">{title}</div>
              )}
              <div
                className={cn('mt-1 text-[9px] uppercase tracking-[0.12em]', status === 'passed' ? 'text-[var(--ds-accent,#9a3412)]' : 'text-[var(--ds-ink-soft,#4a5565)]')}
                style={{ fontFamily: MONO }}
              >
                {STATUS_TEXT[status]}
              </div>
            </div>
            {onSectionClick && (
              <div className="grid grid-cols-2 border-t border-[var(--ds-ink,#1f2a37)]/15">
                {SECTIONS.map((section, k) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => onSectionClick(section.id)}
                    className={cn(
                      'px-3 py-1.5 text-left text-[10px] uppercase tracking-[0.1em] text-[var(--ds-ink,#1f2a37)] hover:bg-[var(--ds-paper-deep,#ece5d4)] focus:outline-none focus-visible:bg-[var(--ds-paper-deep,#ece5d4)]',
                      k % 2 === 1 && 'border-l border-[var(--ds-ink,#1f2a37)]/15',
                      k >= 2 && 'border-t border-[var(--ds-ink,#1f2a37)]/15'
                    )}
                    style={{ fontFamily: MONO }}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ============================================
// CONTINUE RIBBON
// ============================================

function ContinueRibbon({
  label,
  isDesktop,
  isExpanded,
  isOpen,
  onOpen,
  onClose,
  onClick,
}: {
  label: string | null
  isDesktop: boolean
  isExpanded: boolean
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onClick: () => void
}) {
  const disabled = !label
  const height = ribbonLength(isDesktop, isExpanded, false, isOpen && !disabled) + (isDesktop ? 6 : 0)
  return (
    <div className={cn('relative', isDesktop ? 'ml-3' : 'ml-2')} onMouseEnter={onOpen} onMouseLeave={onClose} onFocus={onOpen} onBlur={onClose}>
      <motion.button
        type="button"
        disabled={disabled}
        className={cn(
          'relative flex flex-col items-center justify-end pb-2.5',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-accent,#9a3412)] focus-visible:ring-offset-1',
          disabled && 'cursor-not-allowed'
        )}
        style={{
          width: isDesktop ? (isExpanded ? 26 : 24) : 26,
          background: 'linear-gradient(180deg, #34404f 0%, #1f2a37 100%)',
          clipPath: RIBBON_CLIP,
          filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.2))',
          opacity: disabled ? 0.45 : 1,
        }}
        initial={false}
        animate={{ height }}
        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        onClick={onClick}
        aria-label={label ? `${A11Y_CONFIG.ariaLabels.continueRibbon}: ${label}` : 'Nothing to continue yet'}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-[3px] right-[3px] border-x border-dashed border-white/30"
          style={{ clipPath: RIBBON_CLIP }}
        />
        {/* Yin-yang drawn in line: the continuity motif */}
        <svg viewBox="0 0 24 24" className="w-3 h-3 text-white/90" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2 A5 5 0 0 1 12 12 A5 5 0 0 0 12 22" />
          <circle cx="12" cy="7" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="12" cy="17" r="1.2" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full right-0 z-50 whitespace-nowrap border border-[var(--ds-ink,#1f2a37)]/25 bg-[var(--ds-paper,#f4efe3)] px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-[var(--ds-ink,#1f2a37)] shadow-md"
            style={{ fontFamily: MONO, marginTop: 6, maxWidth: 'none' }}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            {label ? (
              <>
                <div className="font-semibold">Continue reading</div>
                <div className="opacity-70">{label}</div>
              </>
            ) : (
              <div className="opacity-70">Start a lesson to save your place</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default RibbonBookmarks
