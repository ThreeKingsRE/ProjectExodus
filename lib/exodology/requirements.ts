import { getPathLessonOrder } from './lessons'
import { getModuleAssessment } from './assessments'
import { MERGED_MODULE_LESSONS } from './mergedOutline'

// What a learner must finish to earn a path's certification: every lesson
// that can be opened on the path, plus a passed assessment for every module.
// Derived from the same outline the path pages show, so the requirement can
// never drift from what learners actually see (it used to be a typed count).

export type CertPathId = 'foundations' | 'applied' | 'strategic'

const PREFIX: Record<CertPathId, string> = { foundations: 'f-', applied: 'a-', strategic: 's-' }

/** Module ids for a path, in order. */
export function getPathModuleIds(pathId: CertPathId): string[] {
  if (pathId === 'foundations') {
    const ids = getPathLessonOrder('foundations').map((l) => l.id.split('-').slice(0, 2).join('-'))
    return Array.from(new Set(ids))
  }
  return Object.keys(MERGED_MODULE_LESSONS).filter((m) => m.startsWith(PREFIX[pathId]))
}

/** Progress ids (lesson ids and "<module>-assessment" ids) a path's certification requires. */
export function getCertificationRequirementIds(pathId: CertPathId): string[] {
  const lessons = getPathLessonOrder(pathId).map((l) => l.id)
  const assessments = getPathModuleIds(pathId)
    .filter((m) => getModuleAssessment(m))
    .map((m) => `${m}-assessment`)
  return [...lessons, ...assessments]
}
