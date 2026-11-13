'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/Button'
import {
  Clock, BookOpen,
  ArrowLeft, GraduationCap,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'
import type { CoreTopic, TopicDefinition } from '@/types/modules'
import { LearningLevel, LEARNING_LEVELS, LEARNING_LEVEL_ORDER } from '@/types/learning'
import { TopicBookBrowser } from '@/components/learning/TopicBookBrowser'
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

// Hero emoji mapping
const heroEmojis: Record<CoreTopic, string> = {
  'renewable-energy': '⚡',
  'water-systems': '💧',
  'regenerative-agriculture': '🌱',
  'zero-waste': '♻️',
  'green-building': '🏠',
  'food-sovereignty': '🥬'
}

interface TopicPageClientProps {
  topic: TopicDefinition
  initialLevel: LearningLevel
}

export default function TopicPageClient({ topic, initialLevel }: TopicPageClientProps) {
  const slug = topic.id
  const [selectedLevel, setSelectedLevel] = useState<LearningLevel>(initialLevel)

  // Digital Scroll state
  const [isScrollOpen, setIsScrollOpen] = useState(false)
  const [isScrollUnlocked, setIsScrollUnlocked] = useState(false)
  // undefined = resume where the reader left off; a number = open at that chapter
  const [initialChapter, setInitialChapter] = useState<number | undefined>(undefined)
  const [volumeIndex, setVolumeIndex] = useState(0)
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
    if (moduleIndex === undefined) {
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

  const heroEmoji = heroEmojis[topic.id]
  const totalModules = topic.modules.length
  const completedCount = completedModules.length
  const progressPercent = Math.round((completedCount / totalModules) * 100)
  const isGraduated = progressPercent === 100

  // Calculate total duration for selected level
  const totalDuration = topic.modules.reduce((acc, m) => acc + m.duration[selectedLevel], 0)
  const totalHours = Math.round(totalDuration / 60)

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Simple Header */}
      <section className="py-12 bg-[var(--muted)] border-b border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link href="/learn" className="inline-flex items-center gap-2 text-theme-muted hover:text-theme-primary mb-6 font-bold">
              <ArrowLeft className="w-5 h-5" />
              Back to Learn
            </Link>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="text-5xl">{heroEmoji}</div>
                <div>
                  <h1 className="text-3xl font-black text-[var(--foreground)]">{topic.title}</h1>
                  <p className="text-theme-muted font-medium">{topic.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 text-sm text-theme-muted">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {totalModules} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    ~{totalHours}h
                  </span>
                </div>
                {progressPercent > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-[var(--border)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--primary)] rounded-full"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-theme-primary">{progressPercent}%</span>
                    {isGraduated && (
                      <span className="text-green-600 text-xs font-black">COMPLETE</span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Prominent Digital Scroll Button - Centered */}
            <div className="mt-8 flex justify-center">
              <Button
                onClick={() => handleOpenDigitalScroll()}
                className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white font-black shadow-2xl shadow-amber-500/30 text-lg px-8 py-6 rounded-2xl border-2 border-amber-400/50 transition-all duration-300 hover:scale-105 hover:shadow-amber-500/50"
                size="lg"
              >
                <Sparkles className="w-6 h-6 mr-3" />
                {isScrollUnlocked ? 'Open Digital Scroll' : 'Begin Your Journey'}
                <BookOpen className="w-6 h-6 ml-3" />
              </Button>
            </div>
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
              setVolumeIndex(v)
            }}
            onLevelChange={setContentLevel}
            isLoadingContent={isLoadingVolume}
            onClose={handleCloseDigitalScroll}
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
          {/* Level Selector */}
          <div className="mb-8">
            <div className="bg-[color-mix(in_srgb,var(--primary)_10%,var(--background))] rounded-2xl p-6 border-2 border-theme-primary">
              <div className="flex items-center justify-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-theme-primary" />
                <span className="font-black text-theme-primary">SELECT YOUR LEVEL</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {LEARNING_LEVEL_ORDER.map((level) => {
                  const meta = LEARNING_LEVELS[level]
                  const isSelected = level === selectedLevel
                  return (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-3 py-2 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                        isSelected
                          ? 'bg-[var(--primary)] text-[var(--primary-foreground)] shadow-lg scale-105'
                          : 'bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--primary)]/20 border border-[var(--border)]'
                      }`}
                    >
                      <span>{meta.icon}</span>
                      <span>{meta.shortLabel}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Book Browser - Shows lessons as book covers, opens Digital Scroll on click */}
          <TopicBookBrowser
            topicSlug={slug}
            topic={topic}
            selectedLevel={selectedLevel}
            completedModules={completedModules}
            onOpenDigitalScroll={handleOpenDigitalScroll}
          />
        </div>
      </div>
    </div>
  )
}
