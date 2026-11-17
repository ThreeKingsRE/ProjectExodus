import { foundationsLessons, appliedLessons, strategicLessons } from '@/data/exodology-curriculum'
import { NEW_EXODOLOGY_LESSONS } from '@/data/exodology-new-lessons'
import { EXPANDED_EXODOLOGY_LESSONS } from '@/data/exodology-expanded-lessons'
import { MERGED_MODULE_LESSONS, type MergedEntry } from './mergedOutline'

// Lesson lookup and order for the Exodology paths, following the merged
// outline (lib/exodology/mergedOutline.ts) for Applied and Strategic.

type AnyLesson = { id: string; title: string; duration: string; type: string; [k: string]: unknown }

const ORIGINAL: Record<string, AnyLesson> = {
  ...(foundationsLessons as unknown as Record<string, AnyLesson>),
  ...(appliedLessons as unknown as Record<string, AnyLesson>),
  ...(strategicLessons as unknown as Record<string, AnyLesson>),
  // Expanded versions keep the original text word for word and add depth
  ...(EXPANDED_EXODOLOGY_LESSONS as unknown as Record<string, AnyLesson>),
}

const PATH_PREFIX: Record<string, string> = { foundations: 'f-', applied: 'a-', strategic: 's-' }

/** Lesson content by id, from the original data or the new lessons. */
export function getExodologyLesson(pathId: string, lessonId: string): AnyLesson | undefined {
  const prefix = PATH_PREFIX[pathId]
  if (!prefix) return undefined
  const lesson = (NEW_EXODOLOGY_LESSONS as unknown as Record<string, AnyLesson>)[lessonId] ?? ORIGINAL[lessonId]
  // A lesson only opens under its own path (applied lessons under /applied, etc.)
  return lesson && lessonId.startsWith(prefix) ? lesson : undefined
}

export interface OutlineLesson {
  id: string
  title: string
  duration: string
  type: string
  description?: string
  /** false for interactive tools still in development */
  available: boolean
}

function entryToOutline(entry: MergedEntry): OutlineLesson | null {
  if (entry.kind === 'tool') {
    return { id: entry.id, title: entry.title, duration: 'Tool', type: 'tool', description: entry.description, available: false }
  }
  if (entry.kind === 'new') {
    const written = (NEW_EXODOLOGY_LESSONS as unknown as Record<string, AnyLesson>)[entry.id]
    return { id: entry.id, title: entry.title, duration: written?.duration ?? entry.duration, type: entry.type, description: entry.description, available: Boolean(written) }
  }
  const original = ORIGINAL[entry.id]
  if (!original) return null
  const description = typeof original.description === 'string' ? original.description : undefined
  return { id: entry.id, title: original.title, duration: original.duration, type: original.type, description, available: true }
}

/** The merged lesson list for a module, or null when the module keeps its original outline (Foundations). */
export function getMergedModuleLessons(moduleId: string): OutlineLesson[] | null {
  const entries = MERGED_MODULE_LESSONS[moduleId]
  if (!entries) return null
  return entries.map(entryToOutline).filter((x): x is OutlineLesson => x !== null)
}

/** All openable lesson ids for a path, in reading order (for previous/next navigation). */
export function getPathLessonOrder(pathId: string): { id: string; title: string }[] {
  const prefix = PATH_PREFIX[pathId]
  const moduleIdsInOrder = Object.keys(MERGED_MODULE_LESSONS).filter((m) => m.startsWith(prefix ?? '?'))
  if (pathId === 'foundations') {
    return Object.values(foundationsLessons as unknown as Record<string, AnyLesson>).map((l) => ({ id: l.id, title: l.title }))
  }
  return moduleIdsInOrder.flatMap((m) => (getMergedModuleLessons(m) ?? []).filter((l) => l.available).map((l) => ({ id: l.id, title: l.title })))
}
