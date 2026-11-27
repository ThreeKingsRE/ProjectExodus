'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, ArrowRight, BookOpen, Clock, CheckCircle2,
  Lightbulb, ChevronRight, Play, Brain, Gamepad2, FileText,
  Quote, ExternalLink, RefreshCw, Check, X, Shuffle, Timer,
  Target, Lock, Loader2, Trophy, Keyboard, StickyNote, Save, Download, ClipboardCheck
} from 'lucide-react'
import Link from 'next/link'
import { notFound, useParams, useRouter } from 'next/navigation'
import { exodologyGlossary } from '@/data/exodology-curriculum'
import { getExodologyLesson, getPathLessonOrder } from '@/lib/exodology/lessons'

// ============================================================================
// PROGRESS HOOK
// ============================================================================

interface ProgressData {
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED'
  completionData?: {
    masteredCards?: number[]
    matchedPairs?: number[]
    selectedOptions?: string[]
    reflectionResponses?: Record<number, string>
    exerciseResponses?: Record<number, string>
  }
}

function useProgress(pathId: string, lessonId: string) {
  const [progress, setProgress] = useState<ProgressData | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  // Fetch progress on mount
  useEffect(() => {
    async function fetchProgress() {
      try {
        const res = await fetch(`/api/exodology/progress?pathId=${pathId}&lessonId=${lessonId}`)
        if (res.ok) {
          const data = await res.json()
          if (data.progress) {
            setProgress({
              status: data.progress.status,
              completionData: data.progress.completionData
            })
          }
        }
      } catch (error) {
        console.error('Error fetching progress:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProgress()
  }, [pathId, lessonId])

  // Save progress
  const saveProgress = useCallback(async (status: ProgressData['status'], completionData?: ProgressData['completionData']) => {
    setSaving(true)
    try {
      const res = await fetch('/api/exodology/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pathId,
          lessonId,
          status,
          completionData
        })
      })
      if (res.ok) {
        const data = await res.json()
        setProgress({
          status: data.progress.status,
          completionData: data.progress.completionData
        })
        return data
      }
    } catch (error) {
      console.error('Error saving progress:', error)
    } finally {
      setSaving(false)
    }
  }, [pathId, lessonId])

  // Mark as started
  const markStarted = useCallback(() => {
    if (!progress || progress.status === 'NOT_STARTED') {
      saveProgress('IN_PROGRESS')
    }
  }, [progress, saveProgress])

  // Mark as completed
  const markCompleted = useCallback((completionData?: ProgressData['completionData']) => {
    return saveProgress('COMPLETED', completionData)
  }, [saveProgress])

  // Update completion data without changing status
  const updateCompletionData = useCallback((completionData: ProgressData['completionData']) => {
    return saveProgress(progress?.status || 'IN_PROGRESS', completionData)
  }, [progress, saveProgress])

  return {
    progress,
    loading,
    saving,
    markStarted,
    markCompleted,
    updateCompletionData
  }
}

// ============================================================================
// NOTES HOOK
// ============================================================================

function useNotes(pathId: string, lessonId: string) {
  const [note, setNote] = useState<string>('')
  const [originalNote, setOriginalNote] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  // Fetch note on mount
  useEffect(() => {
    async function fetchNote() {
      try {
        const res = await fetch(`/api/exodology/notes?pathId=${pathId}&lessonId=${lessonId}`)
        if (res.ok) {
          const data = await res.json()
          if (data.note) {
            setNote(data.note.content)
            setOriginalNote(data.note.content)
          }
        }
      } catch (error) {
        console.error('Error fetching note:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchNote()
  }, [pathId, lessonId])

  // Save note
  const saveNote = useCallback(async () => {
    if (note === originalNote) return // No changes

    setSaving(true)
    try {
      const res = await fetch('/api/exodology/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pathId, lessonId, content: note })
      })
      if (res.ok) {
        setOriginalNote(note)
        setLastSaved(new Date())
      }
    } catch (error) {
      console.error('Error saving note:', error)
    } finally {
      setSaving(false)
    }
  }, [pathId, lessonId, note, originalNote])

  // Auto-save after 2 seconds of inactivity
  useEffect(() => {
    if (note === originalNote) return

    const timer = setTimeout(() => {
      saveNote()
    }, 2000)

    return () => clearTimeout(timer)
  }, [note, originalNote, saveNote])

  const hasChanges = note !== originalNote

  return {
    note,
    setNote,
    loading,
    saving,
    saveNote,
    hasChanges,
    lastSaved
  }
}

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

// The curriculum data uses flexible content structures
 
type LessonData = {
  id: string
  title: string
  duration: string
  type: 'instruction' | 'interactive' | 'reflection' | 'game' | 'assessment'
  content?: {
    introduction?: string
    sections?: Array<{ title: string; content: string }>
    keyTakeaways?: string[]
    references?: Array<{
      author: string
      title: string
      year: number
      publisher: string
      relevance: string
      url?: string
    }>
    // Game-specific fields
    gameType?: string
    cards?: Array<{ front: string; back: string; hint?: string }>
    pairs?: Array<{ scenario?: string; response?: string; term?: string; definition?: string; cause?: string; explanation?: string }>
    categories?: Array<{ name: string; description: string; examples?: string[] }>
    items?: Array<{ text: string; correctCategory: string; explanation?: string }>
    events?: Array<{ event: string; date: string; category: string }>
    instructions?: string
    completionRequirement?: string
    // Scenario-specific
    scenario?: string
    context?: string
    options?: Array<{ id: string; text: string; feedback: string; isOptimal: boolean }>
    // Guided exercise
    steps?: Array<{ instruction: string; example?: string; tip?: string; prompt?: string; guidance?: string; options?: string[] }>
    synthesis?: string
    // Self-assessment rubric for guided exercises (capstones)
    rubric?: Array<{ criterion: string; developing: string; proficient: string; exemplary: string }>
    // Reflection - prompts can be strings or objects with question/guidance
    reflectionPrompts?: Array<string | { question: string; guidance?: string }>
    prompts?: Array<string | { question: string; guidance?: string }>
    closingNote?: string
  }
  learningObjectives?: string[]
  keyTerms?: Array<{ term: string; definition: string }>
}

// ============================================================================
// PATH DATA
// ============================================================================

const pathMeta = {
  foundations: {
    title: 'Foundations of Exodology',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600',
    // Static class names: Tailwind only generates classes it can read in full
    accentText: 'text-amber-600',
    accentIcon: 'text-amber-500',
    accentSoft: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/40',
    accentDot: 'bg-amber-500',
  },
  applied: {
    title: 'Applied Exodology',
    color: 'teal',
    gradient: 'from-teal-500 to-cyan-600',
    accentText: 'text-teal-600',
    accentIcon: 'text-teal-500',
    accentSoft: 'bg-teal-500/10',
    accentBorder: 'border-teal-500/40',
    accentDot: 'bg-teal-500',
  },
  strategic: {
    title: 'Strategic Exodology',
    color: 'purple',
    gradient: 'from-purple-500 to-indigo-600',
    accentText: 'text-purple-600',
    accentIcon: 'text-purple-500',
    accentSoft: 'bg-purple-500/10',
    accentBorder: 'border-purple-500/40',
    accentDot: 'bg-purple-500',
  }
}

type PathAccent = (typeof pathMeta)[keyof typeof pathMeta]

// Reading progress through the current page, from 0 to 1
function useReadingProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return progress
}

// ============================================================================
// LESSON NAVIGATION HELPER
// ============================================================================

// Reading order follows the merged outline (lib/exodology/mergedOutline.ts),
// so previous/next match what the path page lists.
function getLessonNavigation(pathId: string, currentLessonId: string) {
  const order = getPathLessonOrder(pathId)
  const currentIndex = order.findIndex((l) => l.id === currentLessonId)
  const prevLesson = currentIndex > 0 ? order[currentIndex - 1] : null
  const nextLesson = currentIndex !== -1 && currentIndex < order.length - 1 ? order[currentIndex + 1] : null
  return { prevLesson, nextLesson, currentIndex, totalLessons: order.length }
}

// ============================================================================
// GLOSSARY TOOLTIP COMPONENT
// ============================================================================

// Build a map of glossary terms for quick lookup
const glossaryTermsMap = Object.entries(exodologyGlossary).reduce((acc, [key, value]) => {
  acc[value.term.toLowerCase()] = value
  return acc
}, {} as Record<string, { term: string; definition: string; level: string }>)

function GlossaryText({ text }: { text: string }) {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  // Find all glossary terms in the text
  const terms = Object.values(exodologyGlossary).map(g => g.term)
  const termPattern = new RegExp(`\\b(${terms.join('|')})\\b`, 'gi')

  const parts = text.split(termPattern)

  return (
    <span className="relative">
      {parts.map((part, i) => {
        const lowerPart = part.toLowerCase()
        const glossaryEntry = glossaryTermsMap[lowerPart]

        if (glossaryEntry) {
          return (
            <span
              key={i}
              className="relative inline-block"
              onMouseEnter={() => setActiveTooltip(lowerPart)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <span className="border-b-2 border-dotted border-[var(--primary)] cursor-help text-[var(--primary)] font-medium">
                {part}
              </span>
              {activeTooltip === lowerPart && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-xl max-w-xs text-left"
                >
                  <div className="text-sm font-bold text-[var(--foreground)] mb-1">
                    {glossaryEntry.term}
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)]">
                    {glossaryEntry.definition}
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                    <div className="border-4 border-transparent border-t-[var(--border)]" />
                  </div>
                </motion.div>
              )}
            </span>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </span>
  )
}

// ============================================================================
// LESSON COMPONENTS
// ============================================================================

// Turns **bold** into <strong> and links glossary terms in the rest
function RichText({ text }: { text: string }) {
  const segments = text.replace(/\*\*(.+?)\*\*/g, '<<BOLD>>$1<</BOLD>>').split(/<<BOLD>>|<<\/BOLD>>/)
  return (
    <>
      {segments.map((segment, si) =>
        si % 2 === 1 ? (
          <strong key={si} className="font-semibold text-[var(--foreground)]"><GlossaryText text={segment} /></strong>
        ) : (
          <GlossaryText key={si} text={segment} />
        )
      )}
    </>
  )
}

const READING_TEXT = 'font-body-serif text-[1.0625rem] sm:text-lg leading-8 text-[var(--foreground)]/90'

function InstructionContent({ content, accent }: { content: NonNullable<LessonData['content']>; accent: PathAccent }) {
  if (!content.sections) return null

  const introParagraphs = content.introduction ? content.introduction.split('\n\n') : []

  return (
    <div className="max-w-[46rem] space-y-12">
      {/* Introduction */}
      {introParagraphs.length > 0 && (
        <div className="space-y-5">
          {introParagraphs.map((paragraph, i) => (
            <p
              key={i}
              className={i === 0
                ? 'font-body-serif text-xl sm:text-[1.375rem] leading-9 text-[var(--foreground)]'
                : READING_TEXT}
            >
              <RichText text={paragraph} />
            </p>
          ))}
        </div>
      )}

      {/* Sections */}
      {content.sections.map((section, i) => (
        <motion.section
          key={i}
          id={`section-${i + 1}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * i }}
          className="scroll-mt-28 space-y-5"
        >
          <div className="flex items-baseline gap-3 border-t border-[var(--border)] pt-8">
            <span className={`font-mono text-sm font-bold ${accent.accentText}`}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <h2 className="text-2xl sm:text-[1.75rem] leading-tight font-bold tracking-tight text-[var(--foreground)]">
              {section.title}
            </h2>
          </div>
          <div className="space-y-5">
            {section.content.split('\n\n').map((paragraph, j) => {
              if (paragraph.startsWith('- ') || paragraph.includes('\n- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '))
                return (
                  <ul key={j} className="space-y-3">
                    {items.map((item, k) => (
                      <li key={k} className={`flex items-start gap-3 ${READING_TEXT}`}>
                        <span className={`mt-3 w-1.5 h-1.5 rounded-full flex-shrink-0 ${accent.accentDot}`} />
                        <span><RichText text={item.replace('- ', '')} /></span>
                      </li>
                    ))}
                  </ul>
                )
              }
              if (paragraph.match(/^\d+\./)) {
                const items = paragraph.split('\n').filter(line => line.match(/^\d+\./))
                return (
                  <ol key={j} className="space-y-3 list-none">
                    {items.map((item, k) => (
                      <li key={k} className={`flex items-start gap-3 ${READING_TEXT}`}>
                        <span className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full ${accent.accentSoft} ${accent.accentText} flex items-center justify-center font-sans text-xs font-bold`}>
                          {k + 1}
                        </span>
                        <span><RichText text={item.replace(/^\d+\.\s*/, '')} /></span>
                      </li>
                    ))}
                  </ol>
                )
              }
              return (
                <p key={j} className={READING_TEXT}>
                  <RichText text={paragraph} />
                </p>
              )
            })}
          </div>
        </motion.section>
      ))}

      {/* Key Takeaways */}
      {content.keyTakeaways && content.keyTakeaways.length > 0 && (
        <section className={`rounded-2xl border-l-4 ${accent.accentBorder} ${accent.accentSoft} p-6 sm:p-7`}>
          <h3 className="text-lg font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
            <Lightbulb className={`w-5 h-5 ${accent.accentIcon}`} />
            Key Takeaways
          </h3>
          <ul className="space-y-3">
            {content.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--foreground)]/90 leading-relaxed">
                <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${accent.accentIcon}`} />
                <span><RichText text={takeaway} /></span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* References */}
      {content.references && content.references.length > 0 && (
        <section className="pt-8 border-t border-[var(--border)]">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)] mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Further Reading
          </h3>
          <ol className="space-y-4">
            {content.references.map((ref, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-mono text-xs text-[var(--muted-foreground)] pt-1 w-5 flex-shrink-0">{i + 1}.</span>
                <div>
                  <p className="text-[var(--foreground)]">
                    {ref.author} ({ref.year}).{' '}
                    {ref.url ? (
                      <a href={ref.url} target="_blank" rel="noopener noreferrer" className="no-min-size underline decoration-dotted underline-offset-2 hover:text-[var(--primary)]">
                        <em>{ref.title}</em>
                        <ExternalLink className="inline w-3.5 h-3.5 ml-1 -mt-0.5" />
                      </a>
                    ) : (
                      <em>{ref.title}</em>
                    )}
                    . {ref.publisher}.
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)] mt-1 leading-relaxed">{ref.relevance}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  )
}

// "In this lesson" list for the sidebar, highlighting the section being read
function LessonContents({ sections, accent }: { sections: Array<{ title: string }>; accent: PathAccent }) {
  const [active, setActive] = useState(1)

  useEffect(() => {
    const elements = sections
      .map((_, i) => document.getElementById(`section-${i + 1}`))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          const top = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
          setActive(Number(top.target.id.replace('section-', '')))
        }
      },
      { rootMargin: '-15% 0px -65% 0px' }
    )
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  return (
    <ol className="space-y-1">
      {sections.map((section, i) => {
        const isActive = active === i + 1
        return (
          <li key={i}>
            <a
              href={`#section-${i + 1}`}
              className={`no-min-size flex gap-2.5 rounded-lg px-2.5 py-1.5 text-sm leading-snug transition-colors ${
                isActive
                  ? `${accent.accentSoft} text-[var(--foreground)] font-semibold`
                  : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]/40'
              }`}
            >
              <span className={`font-mono text-xs pt-0.5 ${isActive ? accent.accentText : ''}`}>{String(i + 1).padStart(2, '0')}</span>
              <span>{section.title}</span>
            </a>
          </li>
        )
      })}
    </ol>
  )
}

function FlashcardPlayer({ content }: { content: NonNullable<LessonData['content']> }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [mastered, setMastered] = useState<Set<number>>(new Set())
  const [showHint, setShowHint] = useState(false)

  const cards = content.cards || []
  const currentCard = cards[currentIndex]
  const progress = (mastered.size / cards.length) * 100

  if (!currentCard || cards.length === 0) return null

  const handleNext = () => {
    setIsFlipped(false)
    setShowHint(false)
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  const handlePrev = () => {
    setIsFlipped(false)
    setShowHint(false)
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  const handleMastered = () => {
    setMastered(prev => new Set([...prev, currentIndex]))
    handleNext()
  }

  const handleShuffle = () => {
    setIsFlipped(false)
    setShowHint(false)
    setCurrentIndex(Math.floor(Math.random() * cards.length))
  }

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-[var(--muted-foreground)]">Progress</span>
          <span className="font-bold text-[var(--foreground)]">{mastered.size} / {cards.length} mastered</span>
        </div>
        <div className="h-2 bg-[var(--muted)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative cursor-pointer perspective-1000"
      >
        <motion.div
          className="relative w-full min-h-[300px] rounded-2xl border-4 border-[var(--border)] preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 p-8 flex flex-col items-center justify-center bg-[var(--card)] rounded-2xl backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <span className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-4">Question</span>
            <p className="text-2xl font-bold text-center text-[var(--foreground)]">{currentCard.front}</p>
            <p className="text-sm text-[var(--muted-foreground)] mt-8">Click to reveal answer</p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 p-8 flex flex-col items-center justify-center bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 rounded-2xl backface-hidden"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <span className="text-xs uppercase tracking-wider text-[var(--muted-foreground)] mb-4">Answer</span>
            <p className="text-xl text-center text-[var(--foreground)]">{currentCard.back}</p>
          </div>
        </motion.div>
      </div>

      {/* Hint */}
      {currentCard.hint && (
        <AnimatePresence>
          {showHint ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30"
            >
              <p className="text-sm text-[var(--foreground)]">
                <strong>Hint:</strong> {currentCard.hint}
              </p>
            </motion.div>
          ) : (
            <button
              onClick={(e) => { e.stopPropagation(); setShowHint(true) }}
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              Need a hint?
            </button>
          )}
        </AnimatePresence>
      )}

      {/* Controls */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handlePrev}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleShuffle}>
            <Shuffle className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleNext}>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <span className="text-sm text-[var(--muted-foreground)]">
          {currentIndex + 1} of {cards.length}
        </span>

        <Button
          onClick={handleMastered}
          disabled={mastered.has(currentIndex)}
          className="bg-gradient-to-r from-green-500 to-emerald-500"
        >
          {mastered.has(currentIndex) ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Mastered
            </>
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Mark Mastered
            </>
          )}
        </Button>
      </div>

      {/* Completion */}
      {mastered.size === cards.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30 text-center"
        >
          <h3 className="text-2xl font-black text-[var(--foreground)] mb-2">All Cards Mastered!</h3>
          <p className="text-[var(--muted-foreground)]">You've completed all flashcards in this lesson.</p>
        </motion.div>
      )}
    </div>
  )
}

function MatchingPlayer({ content }: { content: NonNullable<LessonData['content']> }) {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [matched, setMatched] = useState<Set<number>>(new Set())
  const [shuffledAnswers, setShuffledAnswers] = useState<number[]>([])

  // Get pairs and determine structure (scenario/response or scenario/cause or term/definition)
  const pairs = content.pairs || []

  useEffect(() => {
    setShuffledAnswers([...pairs.keys()].sort(() => Math.random() - 0.5))
  }, [pairs])

  const getQuestion = (pair: typeof pairs[0]) => {
    return pair.scenario || pair.term || ''
  }

  const getAnswer = (pair: typeof pairs[0]) => {
    return pair.response || pair.cause || pair.definition || ''
  }

  const handleQuestionClick = (index: number) => {
    if (matched.has(index)) return
    setSelectedItem(index)
  }

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedItem === null) return
    if (selectedItem === answerIndex) {
      setMatched(prev => new Set([...prev, answerIndex]))
      setSelectedItem(null)
    } else {
      // Wrong match
      setSelectedItem(null)
    }
  }

  const progress = pairs.length > 0 ? (matched.size / pairs.length) * 100 : 0

  if (pairs.length === 0) return null

  return (
    <div className="space-y-6">
      {/* Introduction */}
      {content.introduction && (
        <div className="p-4 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20">
          <p className="text-[var(--muted-foreground)]">{content.introduction}</p>
        </div>
      )}

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-[var(--muted-foreground)]">Matches</span>
          <span className="font-bold text-[var(--foreground)]">{matched.size} / {pairs.length}</span>
        </div>
        <div className="h-2 bg-[var(--muted)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Game Board */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Questions */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Match These</h3>
          {pairs.map((pair, index) => (
            <button
              key={index}
              onClick={() => handleQuestionClick(index)}
              disabled={matched.has(index)}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                matched.has(index)
                  ? 'bg-green-500/20 border-green-500/50 opacity-60'
                  : selectedItem === index
                  ? 'bg-[var(--primary)]/20 border-[var(--primary)] scale-[1.02]'
                  : 'bg-[var(--card)] border-[var(--border)] hover:border-[var(--primary)]/50'
              }`}
            >
              <span className="font-bold text-[var(--foreground)]">{getQuestion(pair)}</span>
            </button>
          ))}
        </div>

        {/* Answers */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--muted-foreground)]">With These</h3>
          {shuffledAnswers.map((originalIndex) => (
            <button
              key={originalIndex}
              onClick={() => handleAnswerClick(originalIndex)}
              disabled={matched.has(originalIndex) || selectedItem === null}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                matched.has(originalIndex)
                  ? 'bg-green-500/20 border-green-500/50 opacity-60'
                  : selectedItem !== null && !matched.has(originalIndex)
                  ? 'bg-[var(--card)] border-[var(--border)] hover:border-purple-500/50 cursor-pointer'
                  : 'bg-[var(--muted)]/30 border-[var(--border)] cursor-not-allowed'
              }`}
            >
              <span className="text-sm text-[var(--muted-foreground)]">{getAnswer(pairs[originalIndex])}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Completion */}
      {matched.size === pairs.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border-2 border-purple-500/30 text-center"
        >
          <h3 className="text-2xl font-black text-[var(--foreground)] mb-2">All Matched!</h3>
          <p className="text-[var(--muted-foreground)]">Excellent work completing the matching exercise.</p>
        </motion.div>
      )}
    </div>
  )
}

function ScenarioPlayer({ content }: { content: NonNullable<LessonData['content']> }) {
  const [selected, setSelected] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const options = content.options || []

  const handleSelect = (optionId: string) => {
    setSelected(optionId)
    setShowFeedback(true)
  }

  const selectedOption = options.find(o => o.id === selected)

  if (!content.scenario || options.length === 0) return null

  return (
    <div className="space-y-6">
      {/* Scenario */}
      <Card className="border-2 border-[var(--border)]">
        <CardContent className="p-6">
          <h3 className="text-xl font-black text-[var(--foreground)] mb-4">Scenario</h3>
          <p className="text-lg text-[var(--foreground)] mb-4">{content.scenario}</p>
          {content.context && (
            <div className="p-4 rounded-xl bg-[var(--muted)]/30 border border-[var(--border)]">
              <p className="text-sm text-[var(--muted-foreground)]">{content.context}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Options */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--muted-foreground)]">
          What would you do?
        </h3>
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            disabled={showFeedback}
            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
              showFeedback && option.id === selected
                ? option.isOptimal
                  ? 'bg-green-500/20 border-green-500'
                  : 'bg-amber-500/20 border-amber-500'
                : showFeedback && option.isOptimal
                ? 'bg-green-500/10 border-green-500/50'
                : selected === option.id
                ? 'bg-[var(--primary)]/20 border-[var(--primary)]'
                : 'bg-[var(--card)] border-[var(--border)] hover:border-[var(--primary)]/50'
            }`}
          >
            <span className="font-medium text-[var(--foreground)]">{option.text}</span>
          </button>
        ))}
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {showFeedback && selectedOption && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-2xl ${
              selectedOption.isOptimal
                ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30'
                : 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-2 border-amber-500/30'
            }`}
          >
            <div className="flex items-start gap-3">
              {selectedOption.isOptimal ? (
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
              ) : (
                <Lightbulb className="w-6 h-6 text-amber-500 flex-shrink-0" />
              )}
              <div>
                <h4 className="font-bold text-[var(--foreground)] mb-2">
                  {selectedOption.isOptimal ? 'Excellent Choice!' : 'Consider This...'}
                </h4>
                <p className="text-[var(--muted-foreground)]">{selectedOption.feedback}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showFeedback && (
        <Button
          onClick={() => { setSelected(null); setShowFeedback(false) }}
          variant="outline"
          className="w-full"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      )}
    </div>
  )
}

// Prompt can be either a string or an object with question and optional guidance
type ReflectionPrompt = string | { question: string; guidance?: string }

function ReflectionContent({ prompts }: { prompts: ReflectionPrompt[] }) {
  const [responses, setResponses] = useState<Record<number, string>>({})
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    // In a real app, this would save to the backend
  }

  // Helper to extract question text from prompt (handles both string and object formats)
  const getQuestion = (prompt: ReflectionPrompt): string => {
    if (typeof prompt === 'string') return prompt
    return prompt.question
  }

  // Helper to extract guidance from prompt (only for object format)
  const getGuidance = (prompt: ReflectionPrompt): string | undefined => {
    if (typeof prompt === 'string') return undefined
    return prompt.guidance
  }

  return (
    <div className="space-y-8">
      <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-500/20">
        <h3 className="text-xl font-black text-[var(--foreground)] mb-2 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-500" />
          Personal Reflection
        </h3>
        <p className="text-[var(--muted-foreground)]">
          Take time to consider these prompts thoughtfully. Your responses are for your own learning and growth.
        </p>
      </div>

      {prompts.map((prompt, i) => {
        const question = getQuestion(prompt)
        const guidance = getGuidance(prompt)

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="space-y-3"
          >
            <label className="block text-lg font-bold text-[var(--foreground)]">
              {i + 1}. {question}
            </label>
            {guidance && (
              <p className="text-sm text-[var(--muted-foreground)] italic pl-4 border-l-2 border-amber-500/30">
                {guidance}
              </p>
            )}
            <textarea
              value={responses[i] || ''}
              onChange={(e) => setResponses(prev => ({ ...prev, [i]: e.target.value }))}
              placeholder="Write your reflection here..."
              rows={4}
              className="w-full p-4 rounded-xl border-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--primary)] focus:outline-none resize-none"
            />
          </motion.div>
        )
      })}

      <Button onClick={handleSave} className="w-full" disabled={saved}>
        {saved ? (
          <>
            <Check className="w-4 h-4 mr-2" />
            Reflection Saved
          </>
        ) : (
          <>
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Save Reflection
          </>
        )}
      </Button>
    </div>
  )
}

function GuidedExercisePlayer({ content, lessonId, title }: { content: NonNullable<LessonData['content']>; lessonId: string; title: string }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [responses, setResponses] = useState<Record<number, string>>({})
  const storageKey = `exodology-exercise-${lessonId}`

  // Keep answers in this browser so a long exercise survives a reload
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey)
      if (saved) setResponses(JSON.parse(saved))
    } catch { /* storage unavailable: answers stay in memory only */ }
  }, [storageKey])
  useEffect(() => {
    try {
      if (Object.keys(responses).length) window.localStorage.setItem(storageKey, JSON.stringify(responses))
    } catch { /* ignore */ }
  }, [responses, storageKey])

  const steps = content.steps || []

  const downloadAnswers = () => {
    const lines = [title, '', ...steps.flatMap((s, i) => [
      `Step ${i + 1}: ${s.instruction}`,
      ...(s.prompt ? [s.prompt] : []),
      '',
      responses[i] || '(no answer yet)',
      '',
    ])]
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${lessonId}-answers.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  if (steps.length === 0) return null

  return (
    <div className="space-y-6">
      {/* Introduction */}
      {content.introduction && (
        <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border-2 border-teal-500/20">
          <p className="text-[var(--muted-foreground)] leading-relaxed whitespace-pre-line">{content.introduction}</p>
        </div>
      )}

      {/* Progress */}
      <div className="flex gap-2">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors ${
              i <= currentStep ? 'bg-teal-500' : 'bg-[var(--muted)]'
            }`}
          />
        ))}
      </div>

      {/* Current Step */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">
            {currentStep + 1}
          </span>
          <h3 className="text-xl font-bold text-[var(--foreground)]">
            Step {currentStep + 1} of {steps.length}
          </h3>
        </div>

        <p className="text-lg text-[var(--foreground)]">{steps[currentStep].instruction}</p>

        {steps[currentStep].example && (
          <div className="p-4 rounded-xl bg-[var(--muted)]/30 border border-[var(--border)]">
            <p className="text-sm text-[var(--muted-foreground)]">
              <strong>Example:</strong> {steps[currentStep].example}
            </p>
          </div>
        )}

        {steps[currentStep].prompt && (
          <p className="text-[var(--muted-foreground)] italic">{steps[currentStep].prompt}</p>
        )}

        {steps[currentStep].guidance && (
          <p className="text-sm text-[var(--muted-foreground)] pl-4 border-l-2 border-teal-500/30 italic">
            {steps[currentStep].guidance}
          </p>
        )}

        {steps[currentStep].options && steps[currentStep].options.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-[var(--muted-foreground)]">Options:</p>
            <ul className="space-y-1 pl-4">
              {steps[currentStep].options.map((option, i) => (
                <li key={i} className="text-[var(--muted-foreground)] flex items-start gap-2">
                  <span className="text-teal-500">•</span>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}

        <textarea
          value={responses[currentStep] || ''}
          onChange={(e) => setResponses(prev => ({ ...prev, [currentStep]: e.target.value }))}
          placeholder="Your response..."
          rows={4}
          className="w-full p-4 rounded-xl border-2 border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-teal-500 focus:outline-none resize-none"
        />

        {steps[currentStep].tip && (
          <p className="text-sm text-[var(--muted-foreground)] flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span><strong>Tip:</strong> {steps[currentStep].tip}</span>
          </p>
        )}
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-between gap-4">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(prev => prev - 1)}
          disabled={currentStep === 0}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        {currentStep < steps.length - 1 ? (
          <Button
            onClick={() => setCurrentStep(prev => prev + 1)}
            disabled={!responses[currentStep]}
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            className="bg-gradient-to-r from-teal-500 to-cyan-500"
            disabled={!responses[currentStep]}
          >
            Complete Exercise
            <Check className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted-foreground)]">
        <span>Your answers are saved in this browser only.</span>
        <Button variant="outline" onClick={downloadAnswers} disabled={!Object.values(responses).some(Boolean)}>
          <Download className="w-4 h-4 mr-2" />
          Download your answers
        </Button>
      </div>

      {/* Self-assessment rubric */}
      {content.rubric && content.rubric.length > 0 && (
        <div className="p-6 rounded-2xl border-2 border-[var(--border)] bg-[var(--card)] space-y-4">
          <div className="flex items-center gap-3">
            <ClipboardCheck className="w-6 h-6 text-teal-500" />
            <h3 className="text-xl font-black text-[var(--foreground)]">Check your work</h3>
          </div>
          <p className="text-sm text-[var(--muted-foreground)]">
            Use this rubric to judge your own plan, or share it with a peer or mentor. Aim for Proficient on every row before you call the capstone done.
          </p>
          <div className="space-y-4">
            {content.rubric.map((row, i) => (
              <div key={i} className="rounded-xl border border-[var(--border)] p-4">
                <p className="font-bold text-[var(--foreground)] mb-2">{row.criterion}</p>
                <div className="grid sm:grid-cols-3 gap-3 text-sm">
                  <div><p className="font-semibold text-[var(--muted-foreground)]">Developing</p><p className="text-[var(--muted-foreground)]">{row.developing}</p></div>
                  <div><p className="font-semibold text-teal-600">Proficient</p><p className="text-[var(--foreground)]">{row.proficient}</p></div>
                  <div><p className="font-semibold text-[var(--muted-foreground)]">Exemplary</p><p className="text-[var(--muted-foreground)]">{row.exemplary}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Synthesis (shown at end) */}
      {currentStep === steps.length - 1 && Object.keys(responses).length === steps.length && content.synthesis && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border-2 border-teal-500/30"
        >
          <h3 className="text-xl font-black text-[var(--foreground)] mb-2">Synthesis</h3>
          <p className="text-[var(--muted-foreground)]">{content.synthesis}</p>
        </motion.div>
      )}

      {/* Further reading for guided exercises */}
      {content.references && content.references.length > 0 && (
        <div className="pt-6 border-t border-[var(--border)]">
          <h3 className="text-lg font-bold text-[var(--foreground)] mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[var(--muted-foreground)]" />
            Further Reading
          </h3>
          <div className="space-y-3">
            {content.references.map((ref, i) => (
              <div key={i} className="p-4 rounded-xl bg-[var(--muted)]/30 border border-[var(--border)]">
                <p className="font-medium text-[var(--foreground)]">
                  {ref.author} ({ref.year}).{' '}
                  {ref.url ? (
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2 hover:text-[var(--primary)]">
                      <em>{ref.title}</em>
                    </a>
                  ) : (
                    <em>{ref.title}</em>
                  )}
                  . {ref.publisher}.
                </p>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">{ref.relevance}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

const LESSON_TYPE_ICONS: Record<string, typeof BookOpen> = {
  instruction: BookOpen,
  interactive: Play,
  reflection: Lightbulb,
  game: Gamepad2,
  assessment: FileText,
}

// Module number from a lesson id such as "f-m3-l2"
function getModuleNumber(lessonId: string): number | null {
  const match = lessonId.match(/-m(\d+)-/)
  return match ? Number(match[1]) : null
}

const SIDEBAR_CARD = 'rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5'
const SIDEBAR_HEADING = 'text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)] mb-3 flex items-center gap-2'

export default function LessonPage() {
  const params = useParams()
  const router = useRouter()
  const { data: session } = useSession()

  const pathId = params.pathId as string
  const lessonId = params.lessonId as string

  // Get the correct lesson data based on path
   
  const lessonData = getExodologyLesson(pathId, lessonId) as LessonData | undefined

  const meta = pathMeta[pathId as keyof typeof pathMeta]

  // Progress tracking (must be before conditional returns)
  const { progress, loading: progressLoading, saving, markStarted, markCompleted, updateCompletionData } = useProgress(pathId, lessonId)

  // Notes (must be before conditional returns)
  const { note, setNote, loading: notesLoading, saving: notesSaving, saveNote, hasChanges: notesHasChanges, lastSaved } = useNotes(pathId, lessonId)

  // How far down the page the reader is
  const readingProgress = useReadingProgress()

  // Mark as started when user views the lesson
  useEffect(() => {
    if (session && !progressLoading) {
      markStarted()
    }
  }, [session, progressLoading, markStarted])

  // Get prev/next lesson navigation
  const { prevLesson, nextLesson, currentIndex, totalLessons } = getLessonNavigation(pathId, lessonId)

  // Keyboard navigation (hooks must run before conditional returns)
  useEffect(() => {
    if (!session || !lessonData) return
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input/textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      switch (e.key) {
        case 'ArrowLeft':
          if (prevLesson) {
            router.push(`/exodology/paths/${pathId}/lessons/${prevLesson.id}`)
          }
          break
        case 'ArrowRight':
          if (nextLesson) {
            router.push(`/exodology/paths/${pathId}/lessons/${nextLesson.id}`)
          }
          break
        case ' ': // Space key
          e.preventDefault()
          if (progress?.status !== 'COMPLETED' && !saving) {
            markCompleted()
          }
          break
        case 'Escape':
          router.push(`/exodology/paths/${pathId}`)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [session, lessonData, prevLesson, nextLesson, pathId, router, progress, saving, markCompleted])

  // State for showing keyboard shortcuts hint
  const [showKeyboardHint, setShowKeyboardHint] = useState(true)

  // Hide keyboard hint after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowKeyboardHint(false), 5000)
    return () => clearTimeout(timer)
  }, [])


  if (!lessonData || !meta) {
    notFound()
  }

  const moduleNumber = getModuleNumber(lessonData.id)

  const getLessonTypeLabel = (type: string) => {
    switch (type) {
      case 'instruction': return 'Reading'
      case 'interactive': return 'Interactive'
      case 'reflection': return 'Reflection'
      case 'game': return 'Practice'
      case 'assessment': return 'Assessment'
      default: return 'Lesson'
    }
  }

  const TypeIcon = LESSON_TYPE_ICONS[lessonData.type] ?? BookOpen

  // Shared lesson header: breadcrumb, lesson facts and title
  const lessonHeader = (locked: boolean) => (
    <header className={`relative overflow-hidden bg-gradient-to-br ${meta.gradient} text-white`}>
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute -top-24 -right-20 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 rounded-full bg-white/70 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto pt-6 pb-8 sm:pt-8 sm:pb-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-white/80 mb-6 sm:mb-8">
            <Link href="/exodology" className="no-min-size text-white/80 hover:text-white">Exodology</Link>
            <ChevronRight className="w-4 h-4 opacity-60" />
            <Link href={`/exodology/paths/${pathId}`} className="no-min-size text-white/80 hover:text-white">{meta.title}</Link>
            {moduleNumber && (
              <>
                <ChevronRight className="w-4 h-4 opacity-60" />
                <span className="text-white">Module {moduleNumber}</span>
              </>
            )}
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-4 text-sm font-semibold">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1">
              {locked ? <Lock className="w-4 h-4" /> : <TypeIcon className="w-4 h-4" />}
              {locked ? 'Sign in to open' : getLessonTypeLabel(lessonData.type)}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1">
              <Clock className="w-4 h-4" />
              {lessonData.duration}
            </span>
            {currentIndex !== -1 && (
              <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1">
                Lesson {currentIndex + 1} of {totalLessons}
              </span>
            )}
            {!locked && progress?.status === 'COMPLETED' && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white text-green-700 px-3 py-1">
                <CheckCircle2 className="w-4 h-4" />
                Completed
              </span>
            )}
          </div>

          <h1 className="max-w-4xl text-3xl sm:text-4xl lg:text-5xl leading-tight font-black tracking-tight text-white">
            {lessonData.title}
          </h1>

          {currentIndex !== -1 && (
            <div className="mt-8 max-w-md" aria-hidden="true">
              <div className="h-1.5 rounded-full bg-white/25 overflow-hidden">
                <div
                  className="h-full rounded-full bg-white"
                  style={{ width: `${((currentIndex + 1) / totalLessons) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )

  // Show sign-in prompt for unauthenticated users
  if (!session) {
    return (
      <div className="exo-classroom min-h-screen bg-[var(--background)]">
        {lessonHeader(true)}

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-sm overflow-hidden">
              <div className={`h-1.5 bg-gradient-to-r ${meta.gradient}`} />
              <div className="p-8 sm:p-12 text-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${meta.accentSoft} flex items-center justify-center`}
                >
                  <Lock className={`w-8 h-8 ${meta.accentIcon}`} />
                </motion.div>

                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--foreground)] mb-3">
                  Sign In to Access This Lesson
                </h2>
                <p className="text-lg text-[var(--muted-foreground)] mb-8 max-w-md mx-auto">
                  Create a free account to unlock all lessons, track your progress, and earn certifications in Exodology.
                </p>

                <div className="space-y-4">
                  <Link href="/auth/signin" className="block">
                    <Button className={`w-full font-bold text-lg py-6 bg-gradient-to-r ${meta.gradient}`}>
                      Sign In to Continue <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>

                  <p className="text-sm text-[var(--muted-foreground)]">
                    Don't have an account?{' '}
                    <Link href="/auth/register" className="text-[var(--primary)] font-bold hover:underline">
                      Register for free
                    </Link>
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-[var(--border)] text-left">
                  <h3 className={SIDEBAR_HEADING}>
                    <Target className="w-4 h-4" />
                    What you'll learn in this lesson
                  </h3>
                  {lessonData.learningObjectives && lessonData.learningObjectives.length > 0 ? (
                    <ul className="space-y-2.5">
                      {lessonData.learningObjectives.slice(0, 3).map((obj, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[var(--foreground)]/90">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${meta.accentIcon}`} />
                          {obj}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-[var(--muted-foreground)]">
                      Gain practical knowledge in {lessonData.title.toLowerCase()}.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  const sections = lessonData.content?.sections
  const showsContents = !!sections && sections.length > 1 &&
    (lessonData.type === 'instruction' || (lessonData.type === 'interactive' && !lessonData.content?.gameType))
  const isCompleted = progress?.status === 'COMPLETED'

  return (
    <div className="exo-classroom min-h-screen bg-[var(--background)]">
      {/* Reading progress */}
      <div className="fixed top-0 inset-x-0 z-[60] h-1 pointer-events-none" aria-hidden="true">
        <div
          className={`h-full bg-gradient-to-r ${meta.gradient} transition-[width] duration-150`}
          style={{ width: `${readingProgress * 100}%` }}
        />
      </div>

      {/* Keyboard Shortcuts Hint */}
      <AnimatePresence>
        {showKeyboardHint && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 left-4 z-50 hidden md:block bg-[var(--card)] border border-[var(--border)] rounded-xl shadow-lg p-3 max-w-xs"
          >
            <div className="flex items-center gap-2 mb-2">
              <Keyboard className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-sm font-bold text-[var(--foreground)]">Keyboard Shortcuts</span>
              <button
                onClick={() => setShowKeyboardHint(false)}
                aria-label="Close keyboard shortcuts"
                className="ml-auto text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="text-xs text-[var(--muted-foreground)] space-y-1">
              <div><kbd className="px-1.5 py-0.5 bg-[var(--muted)] rounded text-[10px] font-mono">←</kbd> Previous lesson</div>
              <div><kbd className="px-1.5 py-0.5 bg-[var(--muted)] rounded text-[10px] font-mono">→</kbd> Next lesson</div>
              <div><kbd className="px-1.5 py-0.5 bg-[var(--muted)] rounded text-[10px] font-mono">Space</kbd> Mark complete</div>
              <div><kbd className="px-1.5 py-0.5 bg-[var(--muted)] rounded text-[10px] font-mono">Esc</kbd> Back to path</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {lessonHeader(false)}

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto grid gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] xl:grid-cols-[minmax(0,1fr)_20rem]">
          {/* Lesson */}
          <div className="min-w-0">
            <article className="rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-sm p-5 sm:p-8 lg:p-12">
              {/* Instruction Content - has sections */}
              {lessonData.type === 'instruction' && lessonData.content?.sections && (
                <InstructionContent content={lessonData.content} accent={meta} />
              )}

              {/* Game Content - uses content.gameType */}
              {lessonData.type === 'game' && lessonData.content && (
                <>
                  {lessonData.content.gameType === 'flashcards' && (
                    <FlashcardPlayer content={lessonData.content} />
                  )}
                  {lessonData.content.gameType === 'matching' && (
                    <MatchingPlayer content={lessonData.content} />
                  )}
                  {lessonData.content.gameType === 'scenario-decision' && (
                    <ScenarioPlayer content={lessonData.content} />
                  )}
                  {lessonData.content.gameType === 'drag-drop-classification' && (
                    <MatchingPlayer content={lessonData.content} />
                  )}
                  {lessonData.content.gameType === 'timeline-ordering' && (
                    <MatchingPlayer content={lessonData.content} />
                  )}
                  {lessonData.content.gameType === 'guided-exercise' && (
                    <GuidedExercisePlayer content={lessonData.content} lessonId={lessonData.id} title={lessonData.title} />
                  )}
                </>
              )}

              {/* Interactive Content - can include games or guided exercises */}
              {lessonData.type === 'interactive' && lessonData.content && (
                <>
                  {lessonData.content.gameType === 'scenario-decision' && (
                    <ScenarioPlayer content={lessonData.content} />
                  )}
                  {lessonData.content.gameType === 'guided-exercise' && (
                    <GuidedExercisePlayer content={lessonData.content} lessonId={lessonData.id} title={lessonData.title} />
                  )}
                  {/* Interactive without gameType - show instruction content if has sections */}
                  {!lessonData.content.gameType && lessonData.content.sections && (
                    <InstructionContent content={lessonData.content} accent={meta} />
                  )}
                </>
              )}

              {/* Reflection Content */}
              {lessonData.type === 'reflection' && lessonData.content && (
                <ReflectionContent prompts={lessonData.content.reflectionPrompts || lessonData.content.prompts || []} />
              )}

              {/* Fallback for lessons without specific content */}
              {!lessonData.content && (
                <div className="text-center py-12">
                  <TypeIcon className={`w-16 h-16 mx-auto mb-4 ${meta.accentIcon}`} />
                  <h2 className="text-2xl font-black text-[var(--foreground)] mb-2">
                    {lessonData.title}
                  </h2>
                  <p className="text-[var(--muted-foreground)] max-w-md mx-auto">
                    This lesson content is being prepared. Check back soon for the full learning experience.
                  </p>
                </div>
              )}
            </article>

            {/* Finish this lesson */}
            <div className={`mt-6 rounded-3xl border p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 ${
              isCompleted ? 'border-green-500/40 bg-green-500/5' : 'border-[var(--border)] bg-[var(--card)]'
            }`}>
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  isCompleted ? 'bg-green-500 text-white' : `${meta.accentSoft} ${meta.accentIcon}`
                }`}>
                  {isCompleted ? <Trophy className="w-5 h-5" /> : <Check className="w-5 h-5" />}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-[var(--foreground)]">
                    {isCompleted ? 'Lesson complete' : 'Finished this lesson?'}
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {isCompleted
                      ? nextLesson ? `Up next: ${nextLesson.title}` : 'You have reached the end of this path.'
                      : 'Mark it complete to track your progress toward the certificate.'}
                  </p>
                </div>
              </div>
              {isCompleted ? (
                nextLesson && (
                  <Link href={`/exodology/paths/${pathId}/lessons/${nextLesson.id}`} className="no-min-size sm:flex-shrink-0">
                    <Button className={`w-full sm:w-auto bg-gradient-to-r ${meta.gradient}`}>
                      Next lesson <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )
              ) : (
                <Button
                  className={`w-full sm:w-auto sm:flex-shrink-0 bg-gradient-to-r ${meta.gradient}`}
                  onClick={() => markCompleted()}
                  disabled={saving}
                >
                  {saving ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Mark Complete
                    </>
                  )}
                </Button>
              )}
            </div>

            {/* Previous / next */}
            <nav aria-label="Lesson navigation" className="mt-4 grid grid-cols-2 gap-3">
              <Link
                href={prevLesson ? `/exodology/paths/${pathId}/lessons/${prevLesson.id}` : `/exodology/paths/${pathId}`}
                className="no-min-size group min-w-0 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 hover:border-[var(--primary)]/50 transition-colors"
              >
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                  {prevLesson ? 'Previous' : 'Back'}
                </span>
                <span className="mt-1 block text-sm font-semibold text-[var(--foreground)] line-clamp-2">
                  {prevLesson ? prevLesson.title : meta.title}
                </span>
              </Link>
              <Link
                href={nextLesson ? `/exodology/paths/${pathId}/lessons/${nextLesson.id}` : `/exodology/paths/${pathId}`}
                className="no-min-size group min-w-0 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 text-right hover:border-[var(--primary)]/50 transition-colors"
              >
                <span className="flex items-center justify-end gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                  {nextLesson ? 'Next' : 'Finish'}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
                <span className="mt-1 block text-sm font-semibold text-[var(--foreground)] line-clamp-2">
                  {nextLesson ? nextLesson.title : 'Back to the path'}
                </span>
              </Link>
            </nav>
          </div>

          {/* Sidebar */}
          <aside className="min-w-0 space-y-5 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pb-4">
            {/* In this lesson */}
            {showsContents && sections && (
              <div className={`${SIDEBAR_CARD} hidden lg:block`}>
                <h3 className={SIDEBAR_HEADING}>
                  <BookOpen className="w-4 h-4" />
                  In this lesson
                </h3>
                <LessonContents sections={sections} accent={meta} />
              </div>
            )}

            {/* Learning Objectives */}
            {lessonData.learningObjectives && lessonData.learningObjectives.length > 0 && (
              <div className={SIDEBAR_CARD}>
                <h3 className={SIDEBAR_HEADING}>
                  <Target className="w-4 h-4" />
                  Learning Objectives
                </h3>
                <ul className="space-y-2.5">
                  {lessonData.learningObjectives.map((obj, i) => (
                    <li key={i} className="text-sm leading-snug text-[var(--foreground)]/90 flex items-start gap-2">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${meta.accentIcon}`} />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Key Terms */}
            {lessonData.keyTerms && lessonData.keyTerms.length > 0 && (
              <div className={SIDEBAR_CARD}>
                <h3 className={SIDEBAR_HEADING}>
                  <Brain className="w-4 h-4" />
                  Key Terms
                </h3>
                <dl className="space-y-3">
                  {lessonData.keyTerms.map((term, i) => (
                    <div key={i}>
                      <dt className="font-semibold text-[var(--foreground)] text-sm">{term.term}</dt>
                      <dd className="text-sm leading-snug text-[var(--muted-foreground)]">{term.definition}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {/* Personal Notes */}
            <div className={SIDEBAR_CARD}>
              <div className="flex items-center justify-between mb-3">
                <h3 className={`${SIDEBAR_HEADING} !mb-0`}>
                  <StickyNote className="w-4 h-4" />
                  My Notes
                </h3>
                {notesSaving && (
                  <span className="text-xs text-[var(--muted-foreground)] flex items-center gap-1">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    Saving...
                  </span>
                )}
                {!notesSaving && lastSaved && (
                  <span className="text-xs text-green-600 flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Saved
                  </span>
                )}
              </div>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Jot down your thoughts, key insights, or questions..."
                rows={5}
                className="w-full p-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--primary)] focus:outline-none resize-y text-sm"
              />
              {notesHasChanges && !notesSaving && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={saveNote}
                  className="w-full mt-2"
                >
                  <Save className="w-3 h-3 mr-1" />
                  Save Notes
                </Button>
              )}
              <p className="text-xs text-[var(--muted-foreground)] mt-2">
                Notes save on their own after 2 seconds.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
