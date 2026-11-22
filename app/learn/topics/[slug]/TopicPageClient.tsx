'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/Button'
import { ArrowLeft } from 'lucide-react'
import { ScrollHardcover, BOOK_THEMES } from '@/components/learning/ScrollHardcover'
import { DustMotes } from '@/components/learning/FloatingBook'
import { useReadingRibbon, moveRibbon } from '@/components/learning/ribbon/useReadingRibbon'
import { RibbonCustomizer } from '@/components/learning/ribbon/RibbonCustomizer'
import { OPENING_PAGES, PAGES_PER_CHAPTER, VOLUME_SIZE, volumePageOffset } from '@/lib/learning/topicVolumes'
import type { CoreTopic } from '@/types/modules'
import Link from 'next/link'
import type { TopicDefinition } from '@/types/modules'
import { LearningLevel, LEARNING_LEVELS } from '@/types/learning'
import { TopicBookBrowser } from '@/components/learning/TopicBookBrowser'
import { BookBlurb } from '@/components/learning/BookBlurb'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useSession } from 'next-auth/react'
import { readScoped, writeScoped, storageScopeFor } from '@/lib/learning/scrollStorage'
import { useDigitalScrollContext } from '@/components/learning/DigitalScroll/DigitalScrollContext'
import {
  getVolumeCount,
  locateModule,
  moduleProgressKeys,
  type TopicVolume,
} from '@/lib/learning/topicVolumes'

const READING_LEVEL_KEY = 'exodus_reading_level'

export interface ModuleProgressSummary {
  moduleKey: string
  practiceCompleted: boolean
  quizPassed: boolean
  bestQuizScore: number | null
}

// Dynamically import the DigitalScroll to reduce initial bundle size
const DigitalScroll = dynamic(
  () => import('@/components/learning/DigitalScroll/DigitalScroll').then(mod => mod.DigitalScroll),
  { ssr: false }
)

interface TopicPageClientProps {
  topic: TopicDefinition
  initialLevel: LearningLevel
  /** True when the link named a level; otherwise the reader's last level is used */
  hasLevelParam?: boolean
}

export default function TopicPageClient({ topic, initialLevel, hasLevelParam = false }: TopicPageClientProps) {
  const slug = topic.id
  const [selectedLevel, setSelectedLevel] = useState<LearningLevel>(initialLevel)
  // The reading level is asked the first time a book is opened and remembered for that
  // book; it can be changed any time from the book's top bar. The last level used
  // anywhere is the default suggestion for a book not opened yet.
  const bookLevelKey = `${READING_LEVEL_KEY}:${slug}`
  const [askLevel, setAskLevel] = useState(!hasLevelParam)
  const rememberLevel = (level: LearningLevel) => {
    try { localStorage.setItem(bookLevelKey, level); localStorage.setItem(READING_LEVEL_KEY, level) } catch { /* storage unavailable */ }
    setAskLevel(false)
  }
  useEffect(() => {
    if (hasLevelParam) return
    try {
      const forBook = localStorage.getItem(bookLevelKey) as LearningLevel | null
      const saved = forBook ?? (localStorage.getItem(READING_LEVEL_KEY) as LearningLevel | null)
      if (saved && LEARNING_LEVELS[saved]) { setSelectedLevel(saved); setContentLevel(saved) }
      setAskLevel(!(forBook && LEARNING_LEVELS[forBook]))
    } catch { /* storage unavailable */ }
  }, [hasLevelParam, bookLevelKey])

  // Digital Scroll state
  const [isScrollOpen, setIsScrollOpen] = useState(false)
  const [isScrollUnlocked, setIsScrollUnlocked] = useState(false)
  // undefined = resume where the reader left off; a number = open at that chapter
  const [initialChapter, setInitialChapter] = useState<number | undefined>(undefined)
  const [volumeIndex, setVolumeIndex] = useState(0)
  // The reader's ribbon: its design, and where it sits in this book
  const { style: ribbonStyle, bookmarks, signedIn } = useReadingRibbon()
  const ribbonSpot = bookmarks[topic.id] ?? null
  const [resumePage, setResumePage] = useState<number | undefined>(undefined)
  const [customizing, setCustomizing] = useState(false)
  const ribbonChapter = ribbonSpot && ribbonSpot.page >= OPENING_PAGES
    ? ribbonSpot.volume * VOLUME_SIZE + Math.floor((ribbonSpot.page - OPENING_PAGES) / PAGES_PER_CHAPTER) + 1
    : null
  const ribbonLabel = ribbonSpot && ribbonChapter ? `Chapter ${ribbonChapter} · p. ${volumePageOffset(ribbonSpot.volume) + ribbonSpot.page + 1}` : null
  const [contentLevel, setContentLevel] = useState<LearningLevel>(initialLevel)
  const [volumeData, setVolumeData] = useState<TopicVolume | null>(null)
  const [isLoadingVolume, setIsLoadingVolume] = useState(false)
  const [volumeError, setVolumeError] = useState<string | null>(null)
  const { setScrollOpen } = useDigitalScrollContext()

  const volumeCount = getVolumeCount(topic.modules.length)
  const lastVolumeKey = `exodus_scroll_volume_${slug}`
  const { data: session } = useSession()
  const storageScope = storageScopeFor(session?.user?.id)

  // Open the scroll at a module (index into topic.modules), or resume (no index)
  const handleOpenDigitalScroll = (moduleIndex?: number) => {
    setResumePage(undefined)
    if (moduleIndex === undefined && ribbonSpot) {
      // Open at the reader's ribbon
      setVolumeIndex(Math.min(Math.max(ribbonSpot.volume, 0), volumeCount - 1))
      setInitialChapter(undefined)
      setResumePage(ribbonSpot.page)
    } else if (moduleIndex === undefined) {
      let lastVolume = 0
      lastVolume = Number(readScoped(storageScope, lastVolumeKey) ?? 0) || 0
      setVolumeIndex(Math.min(Math.max(lastVolume, 0), volumeCount - 1))
      setInitialChapter(undefined)
    } else {
      const { volume, chapter } = locateModule(moduleIndex)
      setVolumeIndex(volume)
      setInitialChapter(chapter)
    }
    setContentLevel(selectedLevel)
    // Drop content from a previous session unless it's exactly what we're about to show
    const targetVolume = moduleIndex === undefined ? null : locateModule(moduleIndex).volume
    setVolumeData((prev) =>
      prev && prev.level === selectedLevel && (targetVolume === null || prev.volume === targetVolume) ? prev : null
    )
    setVolumeError(null)
    setIsScrollOpen(true)
    setScrollOpen(true)
  }

  const handleCloseDigitalScroll = () => {
    setIsScrollOpen(false)
    setIsScrollUnlocked(true)
    setInitialChapter(undefined)
    setScrollOpen(false)
    try {
      localStorage.setItem('exodus_book_experience_unlocked', 'true')
    } catch { /* storage unavailable */ }
  }

  // Check if scroll experience is unlocked
  useEffect(() => {
    try {
      setIsScrollUnlocked(localStorage.getItem('exodus_book_experience_unlocked') === 'true')
    } catch { /* storage unavailable */ }
  }, [])

  // Fetch the open volume's content at the reader's level (same pattern as
  // architecture elements: summaries up front, full content on demand)
  useEffect(() => {
    if (!isScrollOpen) return
    const controller = new AbortController()
    setIsLoadingVolume(true)
    fetch(`/api/learn/topics/${slug}/volume?v=${volumeIndex}&level=${contentLevel}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setVolumeData(json.data as TopicVolume)
          setVolumeError(null)
          writeScoped(storageScope, lastVolumeKey, String(volumeIndex))
        } else {
          setVolumeError(json.error || 'Could not load this volume')
        }
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setVolumeError('Could not load this volume')
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoadingVolume(false)
      })
    return () => controller.abort()
  }, [isScrollOpen, slug, volumeIndex, contentLevel, lastVolumeKey, storageScope])

  // The user's saved progress for this topic (signed-in users only)
  const [moduleProgress, setModuleProgress] = useState<ModuleProgressSummary[]>([])

  const refreshProgress = useCallback(async () => {
    try {
      const res = await fetch(`/api/learn/progress?topic=${slug}`)
      if (!res.ok) return // signed out: nothing saved
      const json = await res.json()
      if (json.success && Array.isArray(json.data?.modules)) {
        setModuleProgress(json.data.modules)
      }
    } catch (error) {
      console.error('Failed to fetch learning progress:', error)
    }
  }, [slug])

  useEffect(() => {
    refreshProgress()
  }, [refreshProgress])

  const progressKeys = moduleProgressKeys(topic.modules)
  const completedModules = moduleProgress
    .filter((p) => p.quizPassed && progressKeys.includes(p.moduleKey))
    .map((p) => p.moduleKey)

  // The chapter the reader is on: the first one whose quiz isn't passed yet
  const firstUnfinished = progressKeys.findIndex((k) => !completedModules.includes(k))
  const nextChapter = firstUnfinished === -1 ? topic.modules.length - 1 : firstUnfinished
  const totalModules = topic.modules.length
  const completedCount = completedModules.length
  const progressPercent = Math.round((completedCount / totalModules) * 100)

  // Calculate total duration for selected level
  const totalDuration = topic.modules.reduce((acc, m) => acc + m.duration[selectedLevel], 0)
  const totalHours = Math.round(totalDuration / 60)

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero: the Digital Scroll as a closed hardcover; click it to open */}
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--muted)] pb-14 pt-8">
        {/* A pool of light under the book, and specks drifting through it */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(60% 55% at 50% 58%, ${BOOK_THEMES[topic.id as CoreTopic]?.foil ?? '#d6c48f'}26, transparent 70%)` }} />
        <DustMotes color={BOOK_THEMES[topic.id as CoreTopic]?.foil ?? '#d6c48f'} />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Link href="/learn" className="mb-6 inline-flex items-center gap-2 font-bold text-theme-muted hover:text-theme-primary">
              <ArrowLeft className="h-5 w-5" />
              Back to Learn
            </Link>
            <h1 className="sr-only">{topic.title}</h1>
            <ScrollHardcover
              topicId={topic.id}
              title={topic.title}
              subtitle={topic.description}
              chapterTitles={topic.modules.map((m) => m.title)}
              currentChapter={progressPercent > 0 || moduleProgress.length > 0 ? nextChapter : null}
              levelLabel={LEARNING_LEVELS[selectedLevel].label}
              hours={totalHours}
              progressPercent={progressPercent}
              onOpen={() => handleOpenDigitalScroll()}
              ribbon={ribbonStyle}
              ribbonSpot={ribbonLabel}
              onEditRibbon={signedIn ? () => setCustomizing(true) : undefined}
            />
          </div>
        </div>
      </section>

      {/* Digital Scroll Modal */}
      <AnimatePresence>
        {isScrollOpen && volumeData && (
          <DigitalScroll
            topic={topic}
            modules={volumeData.modules}
            moduleKeys={volumeData.progressKeys}
            moduleProgress={moduleProgress}
            onProgressSaved={refreshProgress}
            initialLevel={contentLevel}
            initialChapter={initialChapter}
            volumeIndex={volumeData.volume}
            volumeCount={volumeCount}
            onVolumeChange={(v) => {
              setInitialChapter(undefined)
              setResumePage(undefined)
              setVolumeIndex(v)
            }}
            onLevelChange={(level) => { setContentLevel(level); setSelectedLevel(level); rememberLevel(level) }}
            askLevel={askLevel}
            isLoadingContent={isLoadingVolume}
            onClose={handleCloseDigitalScroll}
            resumePage={resumePage}
            onPageChange={(page) => {
              // The ribbon follows the reader once they're past the opening pages
              if (signedIn && page >= OPENING_PAGES) moveRibbon(topic.id, { volume: volumeData.volume, page })
            }}
            ribbon={ribbonStyle}
            onEditRibbon={signedIn ? () => setCustomizing(true) : undefined}
          />
        )}
      </AnimatePresence>

      {/* First load of a volume, or a load error */}
      {isScrollOpen && (!volumeData || volumeError) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="rounded-2xl bg-[var(--card)] px-8 py-6 text-center shadow-2xl">
            {volumeError ? (
              <>
                <p className="font-bold text-[var(--foreground)] mb-3">{volumeError}</p>
                <Button onClick={handleCloseDigitalScroll}>Close</Button>
              </>
            ) : (
              <p className="font-serif text-[var(--foreground)]">Unrolling the scroll…</p>
            )}
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Elementary content is open to read; accounts and networking for young
              learners will live on a separate kids' site */}
          {selectedLevel === 'ELEMENTARY' && (
            <div className="mb-8 rounded-2xl border-2 border-dashed border-theme-primary bg-[var(--card)] p-5 text-center">
              <p className="font-black text-theme-primary">🧒 A kids&apos; site is coming soon</p>
              <p className="mt-1 text-sm text-theme-muted">
                We&apos;re building a separate, safer Project Exodus just for young learners. Parents and teachers
                can read these Elementary lessons with kids today.
              </p>
            </div>
          )}

          {/* Inside-cover pitch, then the table of contents */}
          <BookBlurb topic={topic} level={selectedLevel} />

          <TopicBookBrowser
            topicSlug={slug}
            topic={topic}
            selectedLevel={selectedLevel}
            completedModules={completedModules}
            onOpenDigitalScroll={handleOpenDigitalScroll}
          />
        </div>
      </div>
      {customizing && <RibbonCustomizer initial={ribbonStyle} onClose={() => setCustomizing(false)} />}
    </div>
  )
}
