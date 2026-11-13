/**
 * Digital Scroll volumes and lightweight topic summaries.
 *
 * Same idea as data/architecture/summary.ts: the full topic data is large
 * (renewable-energy alone is ~1.3 MB of lesson HTML across six levels), so
 * pages only ship a content-free summary. The Digital Scroll fetches one
 * volume (up to 7 chapters) at one learning level when a reader opens it,
 * from /api/learn/topics/[slug]/volume.
 *
 * Server and client safe: pure functions, no data imports.
 */
import type { Module, TopicDefinition } from '@/types/modules'
import type { LearningLevel } from '@/types/learning'

/** Chapters per volume: one per Guardian ribbon and per number key 1–7. */
export const VOLUME_SIZE = 7

export function getVolumeCount(moduleCount: number): number {
  return Math.max(1, Math.ceil(moduleCount / VOLUME_SIZE))
}

/** Where a module (by its index in topic.modules) lives in the scroll. */
export function locateModule(moduleIndex: number): { volume: number; chapter: number } {
  return {
    volume: Math.floor(moduleIndex / VOLUME_SIZE),
    chapter: moduleIndex % VOLUME_SIZE,
  }
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
export function volumeLabel(volume: number): string {
  return `Volume ${ROMAN[volume] ?? volume + 1}`
}

/**
 * Stable per-module key for progress records.
 *
 * Some topics contain different modules that share a slug (e.g. two distinct
 * "energy-storage" modules). The first keeps the plain slug; later ones get
 * `~2`, `~3`, … in order of appearance so their progress never collides.
 */
export function moduleProgressKeys(modules: Pick<Module, 'slug'>[]): string[] {
  const seen = new Map<string, number>()
  return modules.map((m) => {
    const n = (seen.get(m.slug) ?? 0) + 1
    seen.set(m.slug, n)
    return n === 1 ? m.slug : `${m.slug}~${n}`
  })
}

/**
 * Topic with all lesson HTML, quizzes, activities and accreditation removed.
 * Keeps everything the topic page and lesson browser display (titles,
 * descriptions, durations, lesson counts).
 */
export function toTopicSummary(topic: TopicDefinition): TopicDefinition {
  return {
    id: topic.id,
    title: topic.title,
    description: topic.description,
    icon: topic.icon,
    color: topic.color,
    modules: topic.modules.map((m) => ({
      ...m,
      accreditation: undefined,
      activities: [],
      externalResources: [],
      quiz: { id: m.quiz.id, passingScore: m.quiz.passingScore, questions: [] },
      lessons: m.lessons.map((l) => ({
        id: l.id,
        title: l.title,
        order: l.order,
        duration: l.duration,
        content: {} as Record<LearningLevel, string>,
      })),
    })),
  }
}

/** Keep only one level's entry of a per-level record. */
function pickLevel<T>(record: Record<LearningLevel, T>, level: LearningLevel): Record<LearningLevel, T> {
  const value = record[level] ?? record.HIGH_SCHOOL
  return { [level]: value } as Record<LearningLevel, T>
}

/**
 * One volume of a topic at one learning level: full lesson content and quiz
 * questions for that level only. Accreditation is never included.
 */
export function getTopicVolume(topic: TopicDefinition, volume: number, level: LearningLevel) {
  const keys = moduleProgressKeys(topic.modules)
  const start = volume * VOLUME_SIZE
  const modules: Module[] = topic.modules.slice(start, start + VOLUME_SIZE).map((m) => ({
    ...m,
    accreditation: undefined,
    lessons: m.lessons.map((l) => ({ ...l, content: pickLevel(l.content, level) })),
    quiz: {
      ...m.quiz,
      questions: m.quiz.questions.map((q) => ({
        ...q,
        question: pickLevel(q.question, level),
        options: pickLevel(q.options, level),
        explanation: pickLevel(q.explanation, level),
      })),
    },
  }))
  return {
    topicId: topic.id,
    volume,
    volumeCount: getVolumeCount(topic.modules.length),
    level,
    modules,
    progressKeys: keys.slice(start, start + VOLUME_SIZE),
  }
}

export type TopicVolume = ReturnType<typeof getTopicVolume>
