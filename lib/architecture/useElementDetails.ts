'use client'

import { useEffect, useState } from 'react'
import type { ElementDetail } from '@/data/architecture/summary'
import type { LearningLevel } from '@/data/architecture/types'

/**
 * Client access to full element content (description/history/examples) at a
 * learning level. Results are cached for the session, and concurrent requests
 * for the same element share one fetch.
 */
const cache = new Map<string, ElementDetail>()
const inflight = new Map<string, Promise<void>>()
const key = (id: string, level: LearningLevel) => `${level}:${id}`

export async function fetchElementDetails(ids: string[], level: LearningLevel): Promise<Record<string, ElementDetail>> {
  const missing = ids.filter((id) => !cache.has(key(id, level)) && !inflight.has(key(id, level)))

  // API caps a request at 30 ids
  for (let i = 0; i < missing.length; i += 30) {
    const batch = missing.slice(i, i + 30)
    const request = fetch(`/api/architecture/elements?ids=${encodeURIComponent(batch.join(','))}&level=${level}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Element request failed (${res.status})`)
        return res.json() as Promise<{ elements: ElementDetail[] }>
      })
      .then(({ elements }) => {
        for (const e of elements) cache.set(key(e.id, level), e)
      })
      .finally(() => batch.forEach((id) => inflight.delete(key(id, level))))
    batch.forEach((id) => inflight.set(key(id, level), request))
  }

  await Promise.all(ids.map((id) => inflight.get(key(id, level))).filter(Boolean))

  const result: Record<string, ElementDetail> = {}
  for (const id of ids) {
    const hit = cache.get(key(id, level))
    if (hit) result[id] = hit
  }
  return result
}

export function getCachedElementDetail(id: string, level: LearningLevel): ElementDetail | undefined {
  return cache.get(key(id, level))
}

/** Load details for the given ids; returns what's available so far. */
export function useElementDetails(ids: string[], level: LearningLevel) {
  const idsKey = ids.join(',')
  const [details, setDetails] = useState<Record<string, ElementDetail>>({})
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!idsKey) return
    let cancelled = false
    fetchElementDetails(idsKey.split(','), level)
      .then((d) => {
        if (!cancelled) setDetails(d)
      })
      .catch((e: Error) => {
        if (!cancelled) setError(e)
      })
    return () => {
      cancelled = true
    }
  }, [idsKey, level])

  const ready = ids.every((id) => details[id])
  return { details, ready, error }
}
