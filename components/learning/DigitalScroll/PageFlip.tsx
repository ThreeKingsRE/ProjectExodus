'use client'

// ============================================
// PAGE FLIP ANIMATION
// Realistic 3D page turning with physics
// ============================================

import { motion, useAnimation } from 'framer-motion'
import { useState, useRef, useEffect, useCallback, ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'
import { ANIMATION_TIMINGS, PERSPECTIVE_CONFIG, A11Y_CONFIG, getDeviceType } from './scrollConstants'

// ============================================
// TYPES
// ============================================

interface PageFlipProps {
  leftPage: ReactNode
  rightPage: ReactNode
  nextLeftPage?: ReactNode
  nextRightPage?: ReactNode
  prevLeftPage?: ReactNode
  prevRightPage?: ReactNode
  currentSpread: number
  totalSpreads: number
  onFlipComplete?: (direction: 'next' | 'prev') => void
  onFlipStart?: (direction: 'next' | 'prev') => void
  isAnimating?: boolean
  singlePageMode?: boolean // Full-width single page (no split spread)
  className?: string
}

type FlipState = 'idle' | 'flipping-next' | 'flipping-prev'

// Share of the page width on each side that turns the page when tapped (phones/tablets)
const TAP_ZONE = 0.3
// On a full-width text box, only this outer strip on each side turns the page
const WIDE_FIELD_EDGE = 0.15
// Taps on these never turn the page
const INTERACTIVE_SELECTOR = 'button, a, input, textarea, select, label, summary, [role="button"], [role="link"], [role="checkbox"], [role="radio"], [role="tab"], [contenteditable="true"], [data-no-flip]'

// ============================================
// MAIN COMPONENT
// ============================================

export function PageFlip({
  leftPage,
  rightPage,
  nextLeftPage,
  nextRightPage,
  prevLeftPage,
  prevRightPage,
  currentSpread,
  totalSpreads,
  onFlipComplete,
  onFlipStart,
  isAnimating,
  singlePageMode = false,
  className,
}: PageFlipProps) {
  const [flipState, setFlipState] = useState<FlipState>('idle')
  const [deviceType, setDeviceType] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const containerRef = useRef<HTMLDivElement>(null)
  const flipControls = useAnimation()
  // Which way the last mobile turn went, for the slide-in direction
  const lastDirection = useRef<'next' | 'prev'>('next')
  const lastSpread = useRef(currentSpread)
  if (lastSpread.current !== currentSpread) {
    lastDirection.current = currentSpread < lastSpread.current ? 'prev' : 'next'
    lastSpread.current = currentSpread
  }

  useEffect(() => {
    function updateDevice() {
      setDeviceType(getDeviceType())
    }
    updateDevice()
    window.addEventListener('resize', updateDevice)
    return () => window.removeEventListener('resize', updateDevice)
  }, [])

  const isDesktop = deviceType === 'desktop'
  const canFlipNext = currentSpread < totalSpreads - 1
  const canFlipPrev = currentSpread > 0

  // ============================================
  // FLIP ANIMATION
  // ============================================

  const flipToNext = useCallback(async () => {
    if (!canFlipNext || flipState !== 'idle') return

    setFlipState('flipping-next')
    onFlipStart?.('next')

    await flipControls.start({
      rotateY: -180,
      transition: {
        duration: ANIMATION_TIMINGS.pageFlip.duration / 1000,
        ease: [0.4, 0, 0.2, 1],
      },
    })

    setFlipState('idle')
    flipControls.set({ rotateY: 0 })
    onFlipComplete?.('next')
  }, [canFlipNext, flipState, flipControls, onFlipStart, onFlipComplete])

  const flipToPrev = useCallback(async () => {
    if (!canFlipPrev || flipState !== 'idle') return

    setFlipState('flipping-prev')
    onFlipStart?.('prev')

    // For prev, we animate from -180 to 0
    flipControls.set({ rotateY: -180 })
    await flipControls.start({
      rotateY: 0,
      transition: {
        duration: ANIMATION_TIMINGS.pageFlip.duration / 1000,
        ease: [0.4, 0, 0.2, 1],
      },
    })

    setFlipState('idle')
    onFlipComplete?.('prev')
  }, [canFlipPrev, flipState, flipControls, onFlipStart, onFlipComplete])

  // ============================================
  // KEYBOARD NAVIGATION
  // Keyboard navigation is handled by parent (DigitalScroll)
  // to allow single-page navigation instead of spread-based
  // ============================================

  // ============================================
  // RENDER - DESKTOP SINGLE PAGE (Full-width content)
  // Used for lesson content pages
  // ============================================

  if (isDesktop && singlePageMode) {
    return (
      <div
        ref={containerRef}
        className={cn('relative w-full h-full', className)}
      >
        {/* Full-width single page */}
        <div className="absolute inset-0">
          {leftPage}
        </div>

        {/* Navigation Zones */}
        <button
          className="absolute left-0 top-0 w-16 h-full cursor-pointer opacity-[0.15] hover:opacity-100 transition-opacity duration-200 z-30 flex items-center justify-start pl-2"
          onClick={() => flipToPrev()}
          disabled={!canFlipPrev || flipState !== 'idle'}
          aria-label="Previous page"
        >
          <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>

        <button
          className="absolute right-0 top-0 w-16 h-full cursor-pointer opacity-[0.15] hover:opacity-100 transition-opacity duration-200 z-30 flex items-center justify-end pr-2"
          onClick={() => flipToNext()}
          disabled={!canFlipNext || flipState !== 'idle'}
          aria-label="Next page"
        >
          <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
    )
  }

  // ============================================
  // RENDER - DESKTOP (TWO-PAGE SPREAD)
  // ============================================

  if (isDesktop) {
    return (
      <div
        ref={containerRef}
        className={cn('relative w-full h-full', className)}
        style={{
          perspective: PERSPECTIVE_CONFIG.container,
          perspectiveOrigin: 'center center',
        }}
      >
        {/* Left Page (static verso) - hidden during flip-next since the flipping page back reveals new left */}
        <div
          className="absolute left-0 top-0 w-1/2 h-full"
          style={{
            // When flipping next, hide current left page so flipping page back (new left) can show cleanly
            visibility: flipState === 'flipping-next' ? 'hidden' : 'visible',
          }}
        >
          {flipState === 'flipping-prev' ? prevLeftPage : leftPage}
        </div>

        {/* New left page visible behind during flip-next (under the flipping page) */}
        {flipState === 'flipping-next' && (
          <div
            className="absolute left-0 top-0 w-1/2 h-full"
            style={{ zIndex: 5 }}
          >
            {nextLeftPage}
          </div>
        )}

        {/* Right Page (static recto - visible when not flipping) */}
        <div
          className="absolute right-0 top-0 w-1/2 h-full"
          style={{
            visibility: flipState === 'idle' ? 'visible' : 'hidden',
          }}
        >
          {rightPage}
        </div>

        {/* Previous right page visible behind during flip-prev */}
        {flipState === 'flipping-prev' && (
          <div
            className="absolute right-0 top-0 w-1/2 h-full"
            style={{ zIndex: 5 }}
          >
            {prevRightPage}
          </div>
        )}

        {/* Flipping Page Layer */}
        {flipState !== 'idle' && (
          <motion.div
            className="absolute right-0 top-0 w-1/2 h-full origin-left"
            style={{
              transformStyle: 'preserve-3d',
              zIndex: 20,
            }}
            animate={flipControls}
          >
            {/* Front of flipping page */}
            <div
              className="absolute inset-0"
              style={{
                backfaceVisibility: 'hidden',
              }}
            >
              {flipState === 'flipping-next' ? rightPage : prevRightPage}
            </div>

            {/* Back of flipping page */}
            <div
              className="absolute inset-0"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              {flipState === 'flipping-next' ? nextLeftPage : leftPage}
            </div>

            {/* Dynamic shadow on page during flip */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, rgba(0,0,0,0.15), transparent)',
                backfaceVisibility: 'hidden',
              }}
            />
          </motion.div>
        )}

        {/* Next right page (visible behind during flip next) */}
        {flipState === 'flipping-next' && (
          <div
            className="absolute right-0 top-0 w-1/2 h-full"
            style={{ zIndex: 5 }}
          >
            {nextRightPage}
          </div>
        )}

        {/* Navigation Zones (click to flip) */}
        <button
          className="absolute left-0 top-0 w-16 h-full cursor-pointer opacity-[0.15] hover:opacity-100 transition-opacity duration-200 z-30 flex items-center justify-start pl-2"
          onClick={() => flipToPrev()}
          disabled={!canFlipPrev || flipState !== 'idle'}
          aria-label="Previous page"
        >
          <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>

        <button
          className="absolute right-0 top-0 w-16 h-full cursor-pointer opacity-[0.15] hover:opacity-100 transition-opacity duration-200 z-30 flex items-center justify-end pr-2"
          onClick={() => flipToNext()}
          disabled={!canFlipNext || flipState !== 'idle'}
          aria-label="Next page"
        >
          <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
    )
  }

  // ============================================
  // RENDER - TABLET/MOBILE (SINGLE PAGE, TAP ZONES)
  // Tap the left edge of the page to go back, the right edge to go forward.
  // Taps on buttons, links, form fields or while selecting text are left alone,
  // so notes, quizzes and highlights keep working. No swipe: vertical scrolling
  // inside a long page never turns it by accident.
  // ============================================

  const handleTapZone = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const interactive = target.closest<HTMLElement>(INTERACTIVE_SELECTOR)
    if (interactive) {
      // A full-width notes box would otherwise swallow every edge tap; its outer
      // strip still turns the page (tapping further in edits the notes as usual).
      const isWideField = /^(TEXTAREA|INPUT)$/.test(interactive.tagName) && interactive.getBoundingClientRect().width > rect.width * 0.7
      if (!isWideField || (x > WIDE_FIELD_EDGE && x < 1 - WIDE_FIELD_EDGE)) return
      interactive.blur()
    }
    const selection = typeof window !== 'undefined' ? window.getSelection() : null
    if (selection && selection.toString().trim().length > 0) return
    if (x <= TAP_ZONE && canFlipPrev) onFlipComplete?.('prev')
    else if (x >= 1 - TAP_ZONE && canFlipNext) onFlipComplete?.('next')
  }

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full h-full', className)}
      onClick={handleTapZone}
      data-testid="mobile-page"
    >
      {/* Current page; a short slide shows which way the page turned */}
      <motion.div
        key={currentSpread}
        className="absolute inset-0"
        initial={{ opacity: 0.4, x: lastDirection.current === 'prev' ? -24 : 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        {rightPage}
      </motion.div>

      {/* Edge hints: faint arrows showing where to tap. They pass taps through to the page. */}
      {canFlipPrev && (
        <div aria-hidden className="pointer-events-none absolute left-9 top-1/2 -translate-y-1/2 flex h-24 w-6 items-center justify-center rounded-full bg-[var(--book-text,var(--foreground))]/5 text-[var(--book-text,var(--foreground))]/40">
          <span className="text-lg leading-none">‹</span>
        </div>
      )}
      {canFlipNext && (
        <div aria-hidden className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 flex h-24 w-6 items-center justify-center rounded-l-full bg-[var(--book-text,var(--foreground))]/5 text-[var(--book-text,var(--foreground))]/40">
          <span className="text-lg leading-none">›</span>
        </div>
      )}
    </div>
  )
}

// ============================================
// RAPID PAGE FLIP (For seeking to position)
// ============================================

interface RapidFlipProps {
  fromSpread: number
  toSpread: number
  onComplete: () => void
  className?: string
}

export function RapidPageFlip({ fromSpread, toSpread, onComplete, className }: RapidFlipProps) {
  const [currentSpread, setCurrentSpread] = useState(fromSpread)
  const direction = toSpread > fromSpread ? 1 : -1
  const totalFlips = Math.abs(toSpread - fromSpread)

  useEffect(() => {
    if (currentSpread === toSpread) {
      onComplete()
      return
    }

    // Accelerating flip speed
    const progress = Math.abs(currentSpread - fromSpread) / totalFlips
    const baseTime = ANIMATION_TIMINGS.seeking.basePageFlip
    const acceleratedTime = Math.max(
      ANIMATION_TIMINGS.seeking.minFlipTime,
      baseTime * Math.pow(ANIMATION_TIMINGS.seeking.acceleration, progress * 10)
    )

    const timer = setTimeout(() => {
      setCurrentSpread((prev) => prev + direction)
    }, acceleratedTime)

    return () => clearTimeout(timer)
  }, [currentSpread, toSpread, fromSpread, direction, totalFlips, onComplete])

  const progress = totalFlips > 0
    ? Math.abs(currentSpread - fromSpread) / totalFlips
    : 0

  return (
    <div className={cn('relative w-full h-full overflow-hidden flex items-center justify-center', className)}>
      {/* Calm progress visualization */}
      <div className="flex flex-col items-center gap-4">
        <div className="text-3xl opacity-60">📖</div>

        {/* Progress bar */}
        <div className="w-32 h-1 rounded-full bg-white/20 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-white/60"
            initial={{ width: '0%' }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.1, ease: 'linear' }}
          />
        </div>

        <p className="text-xs text-white/60">
          Turning to page {(toSpread + 1) * 2}
        </p>
      </div>
    </div>
  )
}

// ============================================
// PAGE TURN SOUND HOOK
// ============================================

export function usePageTurnSound(enabled: boolean) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (enabled && typeof window !== 'undefined') {
      audioRef.current = new Audio('/sounds/page-turn.mp3')
      audioRef.current.volume = 0.3
    }
    return () => {
      audioRef.current = null
    }
  }, [enabled])

  const playSound = useCallback(() => {
    if (enabled && audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {
        // Ignore autoplay errors
      })
    }
  }, [enabled])

  return playSound
}

export default PageFlip
