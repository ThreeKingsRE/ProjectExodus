/**
 * Lightweight element summaries for client code.
 *
 * The full element records (data/architecture/elements) are ~3 MB because
 * they hold description + history at six learning levels. Client components
 * use these summaries (~20 KB gzipped) and fetch full content per element
 * from /api/architecture/elements when it is actually shown.
 *
 * element-summaries.json is generated from the full data by
 * `npm run arch:summaries`; CI checks it is up to date.
 */
import type { ArchitecturalElement, LearningLevel } from './types'
import summaries from './element-summaries.json'

export interface ElementSummary {
  id: string
  slug: string
  name: string
  alternativeNames: string[]
  category: string
  subcategory: string
  periods: string[]
  regions: string[]
  searchTags: string[]
  difficultyScore: number
  phonetic: string
  /** First sentence of the HIGH_SCHOOL description, for cards and teasers */
  teaser: string
}

/** Full content for one element at one learning level. */
export interface ElementDetail extends ElementSummary {
  level: LearningLevel
  description: string
  history: string
  characteristics: string[]
  famousExamples: ArchitecturalElement['famousExamples']
  confusionPairs: ArchitecturalElement['confusionPairs']
  etymology: ArchitecturalElement['etymology']
}

export const ELEMENT_SUMMARIES = summaries as ElementSummary[]

const byId = new Map(ELEMENT_SUMMARIES.map((e) => [e.id, e]))

export function getSummaryById(id: string): ElementSummary | undefined {
  return byId.get(id)
}

export function getSummariesByCategory(category: string): ElementSummary[] {
  return ELEMENT_SUMMARIES.filter((e) => e.category === category)
}

export function getSummariesByPeriod(period: string): ElementSummary[] {
  return ELEMENT_SUMMARIES.filter((e) => e.periods.includes(period))
}

export function getSummariesByRegion(region: string): ElementSummary[] {
  return ELEMENT_SUMMARIES.filter((e) => e.regions.includes(region))
}

export function searchSummaries(query: string): ElementSummary[] {
  const q = query.toLowerCase().trim()
  if (!q) return ELEMENT_SUMMARIES
  return ELEMENT_SUMMARIES.filter(
    (e) =>
      e.name.toLowerCase().includes(q) ||
      e.alternativeNames.some((n) => n.toLowerCase().includes(q)) ||
      e.searchTags.some((t) => t.toLowerCase().includes(q)) ||
      e.teaser.toLowerCase().includes(q)
  )
}

export function getRandomSummaries(count: number, exclude: string[] = [], pool = ELEMENT_SUMMARIES): ElementSummary[] {
  const available = pool.filter((e) => !exclude.includes(e.id))
  // Fisher-Yates: unbiased, unlike sort(() => Math.random() - 0.5)
  const shuffled = [...available]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.slice(0, count)
}

export const ELEMENT_COUNT = ELEMENT_SUMMARIES.length

export const SUMMARY_STATS = {
  total: ELEMENT_SUMMARIES.length,
  byCategory: ELEMENT_SUMMARIES.reduce<Record<string, number>>((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + 1
    return acc
  }, {}),
}
