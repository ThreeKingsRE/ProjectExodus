'use client'

// ============================================
// DIGITAL SCROLL NOTES
// Notes live on this device, per account (see lib/learning/scrollStorage.ts).
// A note leaves the device only when:
//   - the learner turns on "Sync notes to my account" (all notes), or
//   - the learner shares that note with peers via its eye icon.
// ============================================

import { useState, useEffect, useCallback, useRef } from 'react'
import type { LearningLevel } from '@/types/learning'
import { readScoped, writeScoped, MAX_NOTE_LENGTH, type StorageScope } from '@/lib/learning/scrollStorage'

export type NoteVisibility = 'PRIVATE' | 'PEERS'
export type AgeBand = 'TEEN' | 'ADULT'

interface NoteMeta {
  updatedAt: number
  visibility: NoteVisibility
  moduleKey: string | null
}

interface LearnerSettings {
  ageBand: AgeBand | null
  syncScrollNotes: boolean
}

interface ServerNote {
  noteKey: string
  moduleKey: string | null
  content: string
  visibility: NoteVisibility
  updatedAt: string
}

const SAVE_DELAY_MS = 800

export function useScrollNotes({
  topicId,
  scope,
  isSignedIn,
  level,
}: {
  topicId: string
  scope: StorageScope
  isSignedIn: boolean
  level: LearningLevel
}) {
  const notesKey = `book-notes-${topicId}`
  const metaKey = `book-notes-meta-${topicId}`

  const [notes, setNotes] = useState<Record<string, string>>({})
  const [meta, setMeta] = useState<Record<string, NoteMeta>>({})
  const [settings, setSettings] = useState<LearnerSettings | null>(null)
  const [syncError, setSyncError] = useState<string | null>(null)

  // Latest values for callbacks and timers
  const notesRef = useRef(notes)
  const metaRef = useRef(meta)
  const levelRef = useRef(level)
  const settingsRef = useRef(settings)
  settingsRef.current = settings
  notesRef.current = notes
  metaRef.current = meta
  levelRef.current = level
  const timers = useRef<Record<string, ReturnType<typeof setTimeout>>>({})

  const persistLocal = useCallback(
    (nextNotes: Record<string, string>, nextMeta: Record<string, NoteMeta>) => {
      if (!scope) return
      writeScoped(scope, notesKey, JSON.stringify(nextNotes))
      writeScoped(scope, metaKey, JSON.stringify(nextMeta))
    },
    [scope, notesKey, metaKey]
  )

  // ---- Load this account's notes from the device
  useEffect(() => {
    if (!scope) return
    try {
      setNotes(JSON.parse(readScoped(scope, notesKey) ?? '{}'))
      setMeta(JSON.parse(readScoped(scope, metaKey) ?? '{}'))
    } catch {
      setNotes({})
      setMeta({})
    }
  }, [scope, notesKey, metaKey])

  // ---- Learner settings (signed-in only)
  useEffect(() => {
    if (!isSignedIn) {
      setSettings(null)
      return
    }
    fetch('/api/learn/learner-profile')
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => { if (json?.success) setSettings(json.data) })
      .catch(() => { /* offline: notes keep working locally */ })
  }, [isSignedIn])

  const putNote = useCallback(
    async (noteKey: string) => {
      const m = metaRef.current[noteKey]
      const res = await fetch('/api/learn/scroll-notes', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicId,
          noteKey,
          moduleKey: m?.moduleKey ?? null,
          level: levelRef.current,
          content: (notesRef.current[noteKey] ?? '').slice(0, MAX_NOTE_LENGTH),
          visibility: m?.visibility ?? 'PRIVATE',
        }),
      }).catch(() => null)
      setSyncError(res && !res.ok ? 'Some notes could not be saved to your account' : null)
    },
    [topicId]
  )

  // ---- When syncing (or with shared notes), merge the account's copies in
  const sync = settings?.syncScrollNotes ?? false
  useEffect(() => {
    if (!scope || !isSignedIn || settings === null) return
    let cancelled = false
    fetch(`/api/learn/scroll-notes?topic=${encodeURIComponent(topicId)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (cancelled || !json?.success) return
        const server: ServerNote[] = json.data
        const nextNotes = { ...notesRef.current }
        const nextMeta = { ...metaRef.current }
        const serverKeys = new Set<string>()
        for (const n of server) {
          serverKeys.add(n.noteKey)
          const serverTime = new Date(n.updatedAt).getTime()
          const local = nextMeta[n.noteKey]
          if (!local || serverTime > local.updatedAt) {
            nextNotes[n.noteKey] = n.content
            nextMeta[n.noteKey] = { updatedAt: serverTime, visibility: n.visibility, moduleKey: n.moduleKey }
          }
        }
        setNotes(nextNotes)
        setMeta(nextMeta)
        persistLocal(nextNotes, nextMeta)
        // Upload local notes the account doesn't have yet (or has older copies of)
        if (sync) {
          for (const key of Object.keys(nextNotes)) {
            const local = nextMeta[key]
            const onServer = server.find((n) => n.noteKey === key)
            if (nextNotes[key]?.trim() && (!onServer || (local && local.updatedAt > new Date(onServer.updatedAt).getTime()))) {
              putNote(key)
            }
          }
        }
      })
      .catch(() => { /* offline */ })
    return () => { cancelled = true }
  }, [scope, isSignedIn, settings, sync, topicId, persistLocal, putNote])

  // ---- Editing
  const saveNote = useCallback(
    (noteKey: string, content: string, moduleKey: string | null = null) => {
      const value = content.slice(0, MAX_NOTE_LENGTH)
      const prevMeta = metaRef.current[noteKey]
      const nextMeta = {
        ...metaRef.current,
        [noteKey]: { updatedAt: Date.now(), visibility: prevMeta?.visibility ?? 'PRIVATE', moduleKey },
      }
      const nextNotes = { ...notesRef.current, [noteKey]: value }
      notesRef.current = nextNotes
      metaRef.current = nextMeta
      setNotes(nextNotes)
      setMeta(nextMeta)
      persistLocal(nextNotes, nextMeta)

      const leavesDevice = isSignedIn && (sync || nextMeta[noteKey].visibility === 'PEERS')
      if (leavesDevice) {
        clearTimeout(timers.current[noteKey])
        timers.current[noteKey] = setTimeout(() => {
          delete timers.current[noteKey]
          putNote(noteKey)
        }, SAVE_DELAY_MS)
      }
    },
    [isSignedIn, sync, persistLocal, putNote]
  )

  /**
   * Share a note with peers or make it private again.
   * Returns 'NEED_SIGN_IN' or 'NEED_AGE_BAND' when sharing isn't possible yet.
   */
  const setVisibility = useCallback(
    (noteKey: string, visibility: NoteVisibility, moduleKey: string | null = null) => {
      if (visibility === 'PEERS') {
        if (!isSignedIn) return 'NEED_SIGN_IN' as const
        // Ref, not state: right after choosing an age group the pending share runs
        // before React re-renders with the new settings
        if (!settingsRef.current?.ageBand) return 'NEED_AGE_BAND' as const
      }
      const nextMeta = {
        ...metaRef.current,
        [noteKey]: { updatedAt: Date.now(), visibility, moduleKey },
      }
      metaRef.current = nextMeta
      setMeta(nextMeta)
      persistLocal(notesRef.current, nextMeta)
      // Making a note private removes the shared copy (or keeps a private synced copy)
      if (isSignedIn) putNote(noteKey)
      return 'OK' as const
    },
    [isSignedIn, persistLocal, putNote]
  )

  const updateSettings = useCallback(async (update: Partial<LearnerSettings>) => {
    const res = await fetch('/api/learn/learner-profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(update),
    }).catch(() => null)
    const json = res ? await res.json().catch(() => null) : null
    if (json?.success) {
      settingsRef.current = json.data
      setSettings(json.data)
      return { ok: true as const }
    }
    return { ok: false as const, error: json?.error ?? 'Could not save your settings' }
  }, [])

  // Flush pending saves when leaving
  useEffect(() => {
    const pending = timers.current
    return () => {
      for (const key of Object.keys(pending)) {
        clearTimeout(pending[key])
        putNote(key)
      }
    }
  }, [putNote])

  return {
    notes,
    visibilityOf: (noteKey: string): NoteVisibility => meta[noteKey]?.visibility ?? 'PRIVATE',
    saveNote,
    setVisibility,
    settings,
    updateSettings,
    syncError,
  }
}
