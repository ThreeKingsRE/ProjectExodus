'use client'

// ============================================
// SCROLL OPEN ANIMATION
// Flow: Descend → Cover opens → Instructions → Title → Complete
// ============================================

import { motion, AnimatePresence } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils/cn'
import { SCROLL_DIMENSIONS, getDeviceType } from './scrollConstants'

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
}

type AnimationPhase = 'descend' | 'opening' | 'instructions' | 'title' | 'complete'

// ============================================
// MAIN COMPONENT
// ============================================

export function ScrollOpenAnimation({
  topicSlug,
  topicTitle,
  topicDescription,
  onAnimationComplete,
  reducedMotion = false,
  className,
}: ScrollOpenAnimationProps) {
  const [phase, setPhase] = useState<AnimationPhase>('descend')
  const [coverOpen, setCoverOpen] = useState(false)
  const completedRef = useRef(false)
  const [dimensions, setDimensions] = useState(SCROLL_DIMENSIONS.desktop)


  // Get responsive dimensions
  useEffect(() => {
    function updateDimensions() {
      const device = getDeviceType()
      setDimensions(SCROLL_DIMENSIONS[device])
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Handle final completion
  const handleComplete = useCallback(() => {
    if (!completedRef.current) {
      completedRef.current = true
      setPhase('complete')
      onAnimationComplete()
    }
  }, [onAnimationComplete])

  // Handle proceed from instructions to title
  const handleProceedToTitle = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (phase === 'instructions') {
      setPhase('title')
    }
  }

  // Handle proceed from title to complete
  const handleContinue = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (phase === 'title') {
      handleComplete()
    }
  }

  // Reduced motion - skip immediately
  useEffect(() => {
    if (reducedMotion) {
      handleComplete()
    }
  }, [reducedMotion, handleComplete])

  // Animation timeline: descend → opening → instructions (wait for click)
  useEffect(() => {
    if (reducedMotion || completedRef.current) return

    // Timeline (shortened for snappier entry):
    // 0ms: Book starts descending (800ms duration)
    // 600ms: Cover starts opening
    // 1500ms: Cover open, show instructions

    const openCoverTimer = setTimeout(() => {
      setCoverOpen(true)
      setPhase('opening')
    }, 600)

    const showInstructionsTimer = setTimeout(() => {
      setPhase('instructions')
    }, 1500)

    return () => {
      clearTimeout(openCoverTimer)
      clearTimeout(showInstructionsTimer)
    }
  }, [reducedMotion])

  // Keyboard controls - skip entire animation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        handleComplete()
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        if (phase === 'instructions') {
          setPhase('title')
        } else if (phase === 'title') {
          handleComplete()
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [phase, handleComplete])

  if (reducedMotion || phase === 'complete') {
    return null
  }

  return (
    <div
      className={cn(
        // digital-scroll: share the drafting tokens with the book
        'digital-scroll fixed inset-0 z-[100] flex items-center justify-center',
        'bg-[#141a24]/80 backdrop-blur-sm',
        className
      )}
      data-topic={topicSlug}
    >
      {/* Skip button - always visible */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          handleComplete()
        }}
        className="ds-label absolute top-6 right-6 z-20 px-3 py-1.5 text-[10px] border border-white/30 text-white/85 hover:bg-white/10 transition-colors"
        aria-label="Skip animation"
      >
        Skip <span className="opacity-60 ml-1">ESC</span>
      </button>

      {/* Phase text - key forces re-animation on phase change */}
      <AnimatePresence mode="wait">
        <motion.div
          key={phase}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 text-white/70 text-lg tracking-widest uppercase font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {phase === 'descend' && 'The book descends...'}
          {phase === 'opening' && 'The revelation begins...'}
          {phase === 'instructions' && 'Learn the sacred ways...'}
          {phase === 'title' && 'Your journey awaits...'}
        </motion.div>
      </AnimatePresence>

      {/* Book Container - matches main book dimensions */}
      <div
        style={{
          width: dimensions.width,
          maxWidth: dimensions.maxWidth,
          height: dimensions.height,
          maxHeight: dimensions.maxHeight,
          perspective: '2500px',
        }}
      >
        {/* Animated Book */}
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
          initial={{ y: '-80%', rotateX: 15, scale: 0.85, opacity: 0 }}
          animate={{
            y: 0,
            rotateX: 0,
            scale: 1,
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Book body wrapper for 3D */}
          <div
            className="relative w-full h-full rounded-lg overflow-hidden"
            style={{
              transformStyle: 'preserve-3d',
              boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.5), 0 30px 60px -30px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Back cover / Revealed page content */}
            <div
              className="ds-sheet absolute inset-0 rounded-sm"
              style={{
                // Both intro pages are drafting paper, so the book opens onto the same sheet style
                background: 'var(--ds-paper)',
              }}
            >
              {/* INSTRUCTIONS PAGE - Dark background with keyboard hints */}
              <AnimatePresence>
                {phase === 'instructions' && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-center max-w-lg space-y-8">
                      {/* Title */}
                      <div>
                        <p className="ds-label text-[var(--ds-accent)] text-xs mb-2">
                          Navigation Guide
                        </p>
                        <div className="w-32 h-px mx-auto bg-[var(--ds-ink)]" />
                      </div>

                      {/* Keyboard shortcuts */}
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[var(--ds-ink)]">
                        {/* Spacebar */}
                        <div className="flex items-center gap-3 justify-end">
                          <span className="ds-label text-[10px] text-[var(--ds-ink-soft)]">Flip page</span>
                          <kbd className="px-4 py-2 bg-[var(--ds-paper)] rounded-sm text-sm font-mono border border-[var(--ds-ink)]/40 border-b-2 min-w-[70px] text-center">
                            Space
                          </kbd>
                        </div>

                        {/* Escape */}
                        <div className="flex items-center gap-3">
                          <kbd className="px-4 py-2 bg-[var(--ds-paper)] rounded-sm text-sm font-mono border border-[var(--ds-ink)]/40 border-b-2 min-w-[70px] text-center">
                            Esc
                          </kbd>
                          <span className="ds-label text-[10px] text-[var(--ds-ink-soft)]">Close book</span>
                        </div>

                        {/* Left/Right arrows */}
                        <div className="flex items-center gap-3 justify-end">
                          <span className="ds-label text-[10px] text-[var(--ds-ink-soft)]">Previous / Next</span>
                          <div className="flex gap-1">
                            <kbd className="px-3 py-2 bg-[var(--ds-paper)] rounded-sm text-sm font-mono border border-[var(--ds-ink)]/40 border-b-2">
                              ←
                            </kbd>
                            <kbd className="px-3 py-2 bg-[var(--ds-paper)] rounded-sm text-sm font-mono border border-[var(--ds-ink)]/40 border-b-2">
                              →
                            </kbd>
                          </div>
                        </div>

                        {/* Up/Down arrows */}
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1">
                            <kbd className="px-3 py-2 bg-[var(--ds-paper)] rounded-sm text-sm font-mono border border-[var(--ds-ink)]/40 border-b-2">
                              ↑
                            </kbd>
                            <kbd className="px-3 py-2 bg-[var(--ds-paper)] rounded-sm text-sm font-mono border border-[var(--ds-ink)]/40 border-b-2">
                              ↓
                            </kbd>
                          </div>
                          <span className="ds-label text-[10px] text-[var(--ds-ink-soft)]">Scroll content</span>
                        </div>

                        {/* Number keys - full width */}
                        <div className="col-span-2 flex items-center justify-center gap-4 pt-4 mt-2 border-t border-[var(--ds-rule)]">
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                              <kbd key={n} className="w-8 h-8 bg-[var(--ds-paper)] rounded text-xs font-mono border border-[var(--ds-ink)]/40 border-b-2 flex items-center justify-center">
                                {n}
                              </kbd>
                            ))}
                          </div>
                          <span className="ds-label text-[10px] text-[var(--ds-ink-soft)]">Jump to chapter</span>
                        </div>
                      </div>

                      {/* Click to proceed */}
                      <button
                        onClick={handleProceedToTitle}
                        className="ds-label mt-8 px-6 py-2.5 text-[11px] border border-[var(--ds-ink)] bg-[var(--ds-ink)] text-[var(--ds-paper)] hover:bg-transparent hover:text-[var(--ds-ink)] transition-colors"
                      >
                        Click to Proceed
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* TITLE PAGE - Light paper background */}
              <AnimatePresence>
                {phase === 'title' && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-center max-w-lg">
                      {/* Icon */}
                      <div className="ds-label text-[10px] text-[var(--ds-accent)] mb-4">Project Exodus · Learning Academy</div>

                      {/* Decorative line */}
                      <div className="w-40 h-px mx-auto bg-[var(--ds-ink)] mb-6" />

                      {/* Title */}
                      <h2 className="text-4xl font-serif font-semibold text-[var(--ds-ink)] mb-4">
                        {topicTitle}
                      </h2>

                      {/* Description/Overview */}
                      {topicDescription && (
                        <p className="text-[var(--ds-ink-soft)] font-serif italic leading-relaxed mb-6 max-w-md mx-auto">
                          {topicDescription}
                        </p>
                      )}

                      {/* Decorative line */}
                      <div className="w-40 h-px mx-auto bg-[var(--ds-rule)] mb-8" />

                      {/* Click to continue */}
                      <button
                        onClick={handleContinue}
                        className="ds-label px-6 py-2.5 text-[11px] border border-[var(--ds-ink)] bg-[var(--ds-ink)] text-[var(--ds-paper)] hover:bg-transparent hover:text-[var(--ds-ink)] transition-colors"
                      >
                        Begin Reading
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Front cover - flips open */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'left center',
                backfaceVisibility: 'hidden',
              }}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: coverOpen ? -160 : 0 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {/* Cover front face: ink-blue cloth binding with a paper-coloured
                  hairline frame and title block, like a bound drawing set */}
              <div
                className="absolute inset-0 rounded-sm flex flex-col items-center justify-center p-8"
                style={{
                  background: 'linear-gradient(160deg, #26334a 0%, #1f2a37 55%, #18212d 100%)',
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="absolute inset-5 border pointer-events-none" style={{ borderColor: 'rgba(244, 239, 227, 0.35)' }} />
                <div className="absolute inset-7 border pointer-events-none" style={{ borderColor: 'rgba(244, 239, 227, 0.15)' }} />

                <div className="ds-label text-[10px]" style={{ color: 'rgba(244, 239, 227, 0.6)' }}>
                  Project Exodus · Learning Academy
                </div>
                <div className="w-24 h-px my-6" style={{ background: 'rgba(244, 239, 227, 0.5)' }} />
                <div className="ds-label text-xs" style={{ color: '#e8956b' }}>
                  The book of
                </div>
                <h1 className="text-4xl font-serif font-semibold mt-2 text-center px-8" style={{ color: '#f4efe3' }}>
                  {topicTitle.charAt(0) + topicTitle.slice(1).toLowerCase()}
                </h1>
                <div className="w-24 h-px mt-6" style={{ background: 'rgba(244, 239, 227, 0.5)' }} />
                <p className="mt-6 text-sm font-serif italic" style={{ color: 'rgba(244, 239, 227, 0.6)' }}>
                  A journey of discovery
                </p>
              </div>

              {/* Cover back face (inside front cover) - dark */}
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: '#2a2420',
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden',
                }}
              />
            </motion.div>

            {/* Book spine effect on left side */}
            <div
              className="absolute top-0 left-0 bottom-0 w-4 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, rgba(0,0,0,0.3), transparent)',
              }}
            />
          </div>

          {/* Book shadow */}
          <motion.div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-8 rounded-[50%]"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              filter: 'blur(12px)',
            }}
            initial={{ opacity: 0.3, scaleX: 0.5 }}
            animate={{ opacity: 0.6, scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </div>

    </div>
  )
}

export default ScrollOpenAnimation
