// ============================================
// BOOK STATE MANAGEMENT HOOK
// Tracks reading position, progress, and unlock state
// ============================================

import { useState, useEffect, useCallback, useRef } from 'react'
import { STORAGE_KEYS } from './scrollConstants'
import { readScoped, writeScoped, type StorageScope } from '@/lib/learning/scrollStorage'

// ============================================
// TYPES
// ============================================

export interface ReadingPosition {
  chapter: number      // Learning Module index (0-6)
  verse: number        // Lesson index within chapter
  page: number         // Page index within lesson
  lastRead: string     // ISO timestamp
}

export interface TopicProgress {
  completedVerses: string[]     // e.g., ["1.1", "1.2", "2.1"]
  completedChapters: number[]   // e.g., [0, 1]
  overallProgress: number       // Percentage 0-100
}

export interface ScrollUnlockState {
  isUnlocked: boolean
  unlockedAt: string | null
  unlockedFromTopic: string | null
}

export interface ScrollPreferences {
  soundEnabled: boolean
  reducedMotion: boolean
  autoAdvance: boolean
}

export interface ScrollState {
  // Unlock state (permanent once unlocked)
  unlockState: ScrollUnlockState

  // Reading positions (per topic)
  readingPositions: Record<string, ReadingPosition>

  // Progress tracking (per topic)
  topicProgress: Record<string, TopicProgress>

  // User preferences
  preferences: ScrollPreferences

  // Current session state
  currentTopic: string | null
  currentPosition: ReadingPosition | null
  isScrollOpen: boolean
  isAnimating: boolean
}

// ============================================
// INITIAL STATE
// ============================================

function createDefaultPosition(): ReadingPosition {
  return {
    chapter: 0,
    verse: 0,
    page: 0,
    lastRead: new Date().toISOString(),
  }
}

const DEFAULT_PREFERENCES: ScrollPreferences = {
  soundEnabled: false,
  reducedMotion: false,
  autoAdvance: false,
}

const INITIAL_STATE: ScrollState = {
  unlockState: {
    isUnlocked: false,
    unlockedAt: null,
    unlockedFromTopic: null,
  },
  readingPositions: {},
  topicProgress: {},
  preferences: DEFAULT_PREFERENCES,
  currentTopic: null,
  currentPosition: null,
  isScrollOpen: false,
  isAnimating: false,
}

// ============================================
// STORAGE HELPERS
// ============================================

// Storage is scoped per signed-in account (see lib/learning/scrollStorage.ts).
// A null scope means the session is still loading: nothing is read or written.

function getFromStorage<T>(scope: StorageScope, key: string, defaultValue: T): T {
  if (typeof window === 'undefined' || !scope) return defaultValue
  try {
    const stored = readScoped(scope, key)
    return stored ? JSON.parse(stored) : defaultValue
  } catch {
    return defaultValue
  }
}

function setToStorage<T>(scope: StorageScope, key: string, value: T): void {
  if (typeof window === 'undefined' || !scope) return
  writeScoped(scope, key, JSON.stringify(value))
}

// ============================================
// THE HOOK
// ============================================

export function useScrollState(scope: StorageScope) {
  const [state, setState] = useState<ScrollState>(INITIAL_STATE)
  const [isHydrated, setIsHydrated] = useState(false)
  // Read inside stable callbacks so they never need to be recreated
  const scopeRef = useRef(scope)
  scopeRef.current = scope

  // ============================================
  // HYDRATION - Load from storage on mount
  // ============================================

  useEffect(() => {
    if (!scope) return // wait until we know who is signed in
    const unlockState: ScrollUnlockState = {
      isUnlocked: getFromStorage(scope, STORAGE_KEYS.bookUnlocked, false),
      unlockedAt: getFromStorage(scope, STORAGE_KEYS.unlockedAt, null),
      unlockedFromTopic: getFromStorage(scope, STORAGE_KEYS.unlockedFromTopic, null),
    }

    const readingPositions = getFromStorage<Record<string, ReadingPosition>>(
      scope,
      STORAGE_KEYS.readingPositions,
      {}
    )

    const topicProgress = getFromStorage<Record<string, TopicProgress>>(
      scope,
      'exodus_book_topic_progress',
      {}
    )

    const preferences = getFromStorage<ScrollPreferences>(
      scope,
      STORAGE_KEYS.preferences,
      DEFAULT_PREFERENCES
    )

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    setState(prev => ({
      ...prev,
      unlockState,
      readingPositions,
      topicProgress,
      preferences: {
        ...preferences,
        reducedMotion: prefersReducedMotion || preferences.reducedMotion,
      },
    }))

    setIsHydrated(true)
  }, [scope])

  // ============================================
  // UNLOCK THE BOOK EXPERIENCE
  // Once unlocked, stays unlocked forever
  // ============================================

  const unlockScroll = useCallback((fromTopic: string) => {
    const now = new Date().toISOString()

    setToStorage(scopeRef.current, STORAGE_KEYS.bookUnlocked, true)
    setToStorage(scopeRef.current, STORAGE_KEYS.unlockedAt, now)
    setToStorage(scopeRef.current, STORAGE_KEYS.unlockedFromTopic, fromTopic)

    setState(prev => ({
      ...prev,
      unlockState: {
        isUnlocked: true,
        unlockedAt: now,
        unlockedFromTopic: fromTopic,
      },
    }))

    return true
  }, [])

  // ============================================
  // OPEN THE BOOK
  // ============================================

  const openScroll = useCallback((topic: string) => {
    setState(prev => {
      const position = prev.readingPositions[topic] || createDefaultPosition()
      return {
        ...prev,
        currentTopic: topic,
        currentPosition: position,
        isScrollOpen: true,
        isAnimating: true,
      }
    })
  }, [])

  // ============================================
  // CLOSE THE BOOK
  // ============================================

  const closeScroll = useCallback(() => {
    setState(prev => {
      // Save current position before closing — use prev to avoid stale closures
      if (prev.currentTopic && prev.currentPosition) {
        const updatedPositions = {
          ...prev.readingPositions,
          [prev.currentTopic]: {
            ...prev.currentPosition,
            lastRead: new Date().toISOString(),
          },
        }
        setToStorage(scopeRef.current, STORAGE_KEYS.readingPositions, updatedPositions)
      }

      return {
        ...prev,
        isScrollOpen: false,
        isAnimating: true,
      }
    })
  }, [])

  // ============================================
  // NAVIGATION
  // ============================================

  const goToPosition = useCallback((position: Partial<ReadingPosition>) => {
    setState(prev => {
      if (!prev.currentTopic) return prev

      const chapter = position.chapter ?? prev.currentPosition?.chapter ?? 0
      const verse = position.verse ?? prev.currentPosition?.verse ?? 0
      const page = position.page ?? prev.currentPosition?.page ?? 0
      // Same position as before: return the same state object so nothing re-renders
      if (
        prev.currentPosition &&
        prev.currentPosition.chapter === chapter &&
        prev.currentPosition.verse === verse &&
        prev.currentPosition.page === page &&
        prev.readingPositions[prev.currentTopic]
      ) {
        return prev
      }

      const newPosition: ReadingPosition = {
        chapter: position.chapter ?? prev.currentPosition?.chapter ?? 0,
        verse: position.verse ?? prev.currentPosition?.verse ?? 0,
        page: position.page ?? prev.currentPosition?.page ?? 0,
        lastRead: new Date().toISOString(),
      }

      // Persist to storage
      const updatedPositions = {
        ...prev.readingPositions,
        [prev.currentTopic]: newPosition,
      }
      setToStorage(scopeRef.current, STORAGE_KEYS.readingPositions, updatedPositions)

      return {
        ...prev,
        currentPosition: newPosition,
        readingPositions: updatedPositions,
      }
    })
  }, [])

  const nextPage = useCallback(() => {
    setState(prev => {
      if (!prev.currentTopic) return prev
      const currentPage = prev.currentPosition?.page ?? 0
      const newPosition: ReadingPosition = {
        chapter: prev.currentPosition?.chapter ?? 0,
        verse: prev.currentPosition?.verse ?? 0,
        page: currentPage + 1,
        lastRead: new Date().toISOString(),
      }
      const updatedPositions = { ...prev.readingPositions, [prev.currentTopic]: newPosition }
      setToStorage(scopeRef.current, STORAGE_KEYS.readingPositions, updatedPositions)
      return { ...prev, currentPosition: newPosition, readingPositions: updatedPositions }
    })
  }, [])

  const prevPage = useCallback(() => {
    setState(prev => {
      if (!prev.currentTopic) return prev
      const currentPage = prev.currentPosition?.page ?? 0
      if (currentPage <= 0) return prev
      const newPosition: ReadingPosition = {
        chapter: prev.currentPosition?.chapter ?? 0,
        verse: prev.currentPosition?.verse ?? 0,
        page: currentPage - 1,
        lastRead: new Date().toISOString(),
      }
      const updatedPositions = { ...prev.readingPositions, [prev.currentTopic]: newPosition }
      setToStorage(scopeRef.current, STORAGE_KEYS.readingPositions, updatedPositions)
      return { ...prev, currentPosition: newPosition, readingPositions: updatedPositions }
    })
  }, [])

  const goToChapter = useCallback((chapterIndex: number) => {
    goToPosition({
      chapter: chapterIndex,
      verse: 0,
      page: 0,
    })
  }, [goToPosition])

  const goToVerse = useCallback((verseIndex: number) => {
    goToPosition({
      verse: verseIndex,
      page: 0,
    })
  }, [goToPosition])

  // ============================================
  // CONTINUE READING (Yin-Yang Ribbon)
  // ============================================

  const getContinuePosition = useCallback((topic: string): ReadingPosition => {
    return state.readingPositions[topic] || createDefaultPosition()
  }, [state.readingPositions])

  const continueReading = useCallback(() => {
    if (!state.currentTopic) return
    const position = getContinuePosition(state.currentTopic)
    goToPosition(position)
  }, [state.currentTopic, getContinuePosition, goToPosition])

  // ============================================
  // PROGRESS TRACKING
  // ============================================

  const markVerseComplete = useCallback((verse: string) => {
    setState(prev => {
      if (!prev.currentTopic) return prev

      const currentProgress = prev.topicProgress[prev.currentTopic] || {
        completedVerses: [],
        completedChapters: [],
        overallProgress: 0,
      }

      if (currentProgress.completedVerses.includes(verse)) {
        return prev // Already completed
      }

      const updatedVerses = [...currentProgress.completedVerses, verse]
      const newTopicProgress = {
        ...prev.topicProgress,
        [prev.currentTopic]: {
          ...currentProgress,
          completedVerses: updatedVerses,
        },
      }

      // Persist to localStorage
      setToStorage(scopeRef.current, 'exodus_book_topic_progress', newTopicProgress)

      return { ...prev, topicProgress: newTopicProgress }
    })
  }, [])

  const markChapterComplete = useCallback((chapterIndex: number) => {
    setState(prev => {
      if (!prev.currentTopic) return prev

      const currentProgress = prev.topicProgress[prev.currentTopic] || {
        completedVerses: [],
        completedChapters: [],
        overallProgress: 0,
      }

      if (currentProgress.completedChapters.includes(chapterIndex)) {
        return prev // Already completed
      }

      const updatedChapters = [...currentProgress.completedChapters, chapterIndex]
      const newTopicProgress = {
        ...prev.topicProgress,
        [prev.currentTopic]: {
          ...currentProgress,
          completedChapters: updatedChapters,
        },
      }

      // Persist to localStorage
      setToStorage(scopeRef.current, 'exodus_book_topic_progress', newTopicProgress)

      return { ...prev, topicProgress: newTopicProgress }
    })
  }, [])

  // ============================================
  // ANIMATION STATE
  // ============================================

  const setAnimating = useCallback((isAnimating: boolean) => {
    setState(prev => ({ ...prev, isAnimating }))
  }, [])

  // ============================================
  // PREFERENCES
  // ============================================

  const updatePreferences = useCallback((updates: Partial<ScrollPreferences>) => {
    setState(prev => {
      const newPreferences = { ...prev.preferences, ...updates }
      setToStorage(scopeRef.current, STORAGE_KEYS.preferences, newPreferences)
      return { ...prev, preferences: newPreferences }
    })
  }, [])

  // ============================================
  // RETURN
  // ============================================

  return {
    // State
    ...state,
    isHydrated,

    // Unlock
    unlockScroll,

    // Book open/close
    openScroll,
    closeScroll,

    // Navigation
    goToPosition,
    nextPage,
    prevPage,
    goToChapter,
    goToVerse,

    // Continue reading
    getContinuePosition,
    continueReading,

    // Progress
    markVerseComplete,
    markChapterComplete,

    // Animation
    setAnimating,

    // Preferences
    updatePreferences,
  }
}

export type UseScrollStateReturn = ReturnType<typeof useScrollState>
