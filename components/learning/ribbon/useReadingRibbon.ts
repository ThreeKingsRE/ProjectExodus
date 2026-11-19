'use client'

// The reader's ribbon design and where it sits in each book, loaded once per
// page and shared by every component that shows a ribbon. Signed-out readers
// get the default red ribbon and no saved spots.

import { useEffect, useSyncExternalStore } from 'react'
import { useSession } from 'next-auth/react'
import { DEFAULT_RIBBON, type RibbonStyle } from '@/lib/learning/ribbon'

export interface RibbonSpot { volume: number; page: number }
interface RibbonState { style: RibbonStyle; bookmarks: Record<string, RibbonSpot>; loaded: boolean }

let state: RibbonState = { style: DEFAULT_RIBBON, bookmarks: {}, loaded: false }
let loading: Promise<void> | null = null
const listeners = new Set<() => void>()
const emit = () => listeners.forEach((l) => l())
const set = (next: Partial<RibbonState>) => { state = { ...state, ...next }; emit() }

function load() {
  if (loading) return loading
  loading = fetch('/api/learn/ribbon', { cache: 'no-store' })
    .then((r) => (r.ok ? r.json() : null))
    .then((json) => { if (json?.success) set({ style: json.data.style, bookmarks: json.data.bookmarks ?? {}, loaded: true }) })
    .catch(() => { /* offline: keep defaults */ })
  return loading
}

const saveTimers: Record<string, ReturnType<typeof setTimeout>> = {}

/** Move the ribbon in a book (saved after a short pause, so page flips don't each send a request). */
export function moveRibbon(topicId: string, spot: RibbonSpot) {
  const current = state.bookmarks[topicId]
  if (current && current.volume === spot.volume && current.page === spot.page) return
  set({ bookmarks: { ...state.bookmarks, [topicId]: spot } })
  clearTimeout(saveTimers[topicId])
  saveTimers[topicId] = setTimeout(() => {
    fetch('/api/learn/ribbon', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topicId, ...spot }) }).catch(() => {})
  }, 1200)
}

/** Save a new ribbon design. Resolves false if the server refused it. */
export async function saveRibbonStyle(style: RibbonStyle): Promise<boolean> {
  const previous = state.style
  set({ style })
  const res = await fetch('/api/learn/ribbon', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ style }) }).catch(() => null)
  const ok = !!res?.ok
  if (!ok) set({ style: previous })
  return ok
}

export function useReadingRibbon() {
  const { status } = useSession()
  const signedIn = status === 'authenticated'
  useEffect(() => { if (signedIn) load() }, [signedIn])
  const snapshot = useSyncExternalStore(
    (l) => { listeners.add(l); return () => { listeners.delete(l) } },
    () => state,
    () => state,
  )
  return { ...snapshot, signedIn }
}
