'use client'

// ============================================
// SCROLL OPEN ANIMATION
// Flow: Descend → Cover opens → Reading level → Instructions → Title → Complete
// ============================================

import { motion, AnimatePresence } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils/cn'
import { SCROLL_DIMENSIONS, CORE_TOPIC_ICONS, getDeviceType } from './scrollConstants'
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
}

type AnimationPhase = 'descend' | 'opening' | 'level' | 'instructions' | 'title' | 'complete'

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
  level,
  onLevelChosen,
}: ScrollOpenAnimationProps) {
  // With reduced motion there's no animation, but the reader still picks a level
  const [phase, setPhase] = useState<AnimationPhase>(reducedMotion ? 'level' : 'descend')
  const [choice, setChoice] = useState<LearningLevel>(level)
  const chosenRef = useRef(false)
  const confirmLevel = useCallback((next: LearningLevel) => {
    if (chosenRef.current) return
    chosenRef.current = true
    onLevelChosen(next)
  }, [onLevelChosen])
  const [coverOpen, setCoverOpen] = useState(false)
  const completedRef = useRef(false)
  const [dimensions, setDimensions] = useState(SCROLL_DIMENSIONS.desktop)

  const topicIcon = CORE_TOPIC_ICONS[topicSlug] || '📖'

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
      confirmLevel(choice)
      completedRef.current = true
      setPhase('complete')
      onAnimationComplete()
    }
  }, [onAnimationComplete, confirmLevel, choice])

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

  // Confirm the level, then show the navigation guide (or finish, with reduced motion)
  const proceedFromLevel = useCallback(() => {
    confirmLevel(choice)
    if (reducedMotion) handleComplete()
    else setPhase('instructions')
  }, [choice, confirmLevel, reducedMotion, handleComplete])

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
      setPhase('level')
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
      } else if (phase === 'level' && /^[1-9]$/.test(e.key) && LEARNING_LEVEL_ORDER[Number(e.key) - 1]) {
        e.preventDefault()
        setChoice(LEARNING_LEVEL_ORDER[Number(e.key) - 1])
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        if (phase === 'level') {
          proceedFromLevel()
        } else if (phase === 'instructions') {
          setPhase('title')
        } else if (phase === 'title') {
          handleComplete()
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [phase, handleComplete, proceedFromLevel])

  if (phase === 'complete') {
    return null
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center',
        'bg-black/80 backdrop-blur-md',
        className
      )}
    >
      {/* Skip button - always visible */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          handleComplete()
        }}
        className="absolute top-6 right-6 z-20 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all text-sm font-medium"
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
          {phase === 'level' && 'Choose your edition...'}
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
              className="absolute inset-0 rounded-lg"
              style={{
                background: phase === 'title'
                  ? 'linear-gradient(135deg, #f5f0e8 0%, #e8e0d4 100%)'
                  : 'linear-gradient(135deg, #1a1612 0%, #2a2420 50%, #1a1612 100%)',
                transition: 'background 0.8s ease',
              }}
            >
              {/* READING LEVEL PAGE - same look as the navigation guide */}
              <AnimatePresence>
                {phase === 'level' && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center overflow-y-auto p-5 sm:p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
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
                )}
              </AnimatePresence>

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
                        <p className="text-amber-500/80 text-sm uppercase tracking-[0.3em] font-serif mb-2">
                          Navigation Guide
                        </p>
                        <div className="w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />
                      </div>

                      {/* Keyboard shortcuts */}
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-amber-100/80">
                        {/* Spacebar */}
                        <div className="flex items-center gap-3 justify-end">
                          <span className="text-sm text-amber-100/60">Flip page</span>
                          <kbd className="px-4 py-2 bg-amber-900/30 rounded-lg text-sm font-mono border border-amber-700/30 min-w-[70px] text-center">
                            Space
                          </kbd>
                        </div>

                        {/* Escape */}
                        <div className="flex items-center gap-3">
                          <kbd className="px-4 py-2 bg-amber-900/30 rounded-lg text-sm font-mono border border-amber-700/30 min-w-[70px] text-center">
                            Esc
                          </kbd>
                          <span className="text-sm text-amber-100/60">Close book</span>
                        </div>

                        {/* Left/Right arrows */}
                        <div className="flex items-center gap-3 justify-end">
                          <span className="text-sm text-amber-100/60">Previous / Next</span>
                          <div className="flex gap-1">
                            <kbd className="px-3 py-2 bg-amber-900/30 rounded-lg text-sm font-mono border border-amber-700/30">
                              ←
                            </kbd>
                            <kbd className="px-3 py-2 bg-amber-900/30 rounded-lg text-sm font-mono border border-amber-700/30">
                              →
                            </kbd>
                          </div>
                        </div>

                        {/* Up/Down arrows */}
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1">
                            <kbd className="px-3 py-2 bg-amber-900/30 rounded-lg text-sm font-mono border border-amber-700/30">
                              ↑
                            </kbd>
                            <kbd className="px-3 py-2 bg-amber-900/30 rounded-lg text-sm font-mono border border-amber-700/30">
                              ↓
                            </kbd>
                          </div>
                          <span className="text-sm text-amber-100/60">Scroll content</span>
                        </div>

                        {/* Number keys - full width */}
                        <div className="col-span-2 flex items-center justify-center gap-4 pt-4 mt-2 border-t border-amber-700/20">
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                              <kbd key={n} className="w-8 h-8 bg-amber-900/30 rounded text-xs font-mono border border-amber-700/30 flex items-center justify-center">
                                {n}
                              </kbd>
                            ))}
                          </div>
                          <span className="text-sm text-amber-100/60">Jump to chapter</span>
                        </div>
                      </div>

                      {/* Click to proceed */}
                      <button
                        onClick={handleProceedToTitle}
                        className="mt-8 px-8 py-3 rounded-lg bg-amber-700/30 hover:bg-amber-700/50 border border-amber-600/40 text-amber-100 font-serif transition-all"
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
                      <div className="text-7xl mb-6">{topicIcon}</div>

                      {/* Decorative line */}
                      <div className="w-40 h-0.5 mx-auto bg-gradient-to-r from-transparent via-amber-700 to-transparent mb-6" />

                      {/* Title */}
                      <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
                        {topicTitle}
                      </h2>

                      {/* Description/Overview */}
                      {topicDescription && (
                        <p className="text-gray-600 font-serif leading-relaxed mb-6 max-w-md mx-auto">
                          {topicDescription}
                        </p>
                      )}

                      {/* Decorative line */}
                      <div className="w-40 h-0.5 mx-auto bg-gradient-to-r from-transparent via-amber-700 to-transparent mb-8" />

                      {/* Click to continue */}
                      <button
                        onClick={handleContinue}
                        className="px-8 py-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-serif transition-all shadow-lg"
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
              {/* Cover front face */}
              <div
                className="absolute inset-0 rounded-lg flex flex-col items-center justify-center p-8"
                style={{
                  background: 'linear-gradient(135deg, #1a1612 0%, #2a2420 30%, #1a1612 50%, #0f0d0a 100%)',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Gold border */}
                <div
                  className="absolute inset-6 border-2 rounded pointer-events-none"
                  style={{ borderColor: 'rgba(212, 175, 55, 0.4)' }}
                />

                {/* Decorative corners */}
                <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }} />
                <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }} />
                <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }} />
                <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2" style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }} />

                {/* Content */}
                <span className="text-7xl mb-6">{topicIcon}</span>

                <div className="w-40 h-0.5 mb-6" style={{
                  background: 'linear-gradient(to right, transparent, rgba(212, 175, 55, 0.6), transparent)'
                }} />

                <div className="text-xl font-serif tracking-wide" style={{ color: '#d4af37' }}>
                  THE SACRED BOOK OF
                </div>

                <h1 className="text-4xl font-serif font-black mt-2 text-center px-8" style={{ color: '#f4e5c2' }}>
                  {topicTitle.toUpperCase()}
                </h1>

                <div className="w-40 h-0.5 mt-6" style={{
                  background: 'linear-gradient(to right, transparent, rgba(212, 175, 55, 0.6), transparent)'
                }} />

                {/* Subtitle */}
                <p className="mt-6 text-sm font-serif italic" style={{ color: 'rgba(244, 229, 194, 0.6)' }}>
                  A Journey of Discovery
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
