import { getExodologyLesson, getPathLessonOrder } from './lessons'
import { getPathModuleIds, type CertPathId } from './requirements'

// Study time for a course, added up from what learners can open: every lesson's
// listed duration plus a short allowance for each module assessment.

const ASSESSMENT_MINUTES = 10

function minutes(duration: unknown): number {
  const m = typeof duration === 'string' ? duration.match(/(\d+)\s*min/) : null
  return m ? Number(m[1]) : 0
}

export function getPathStudyMinutes(pathId: CertPathId): number {
  const lessonMinutes = getPathLessonOrder(pathId).reduce(
    (sum, l) => sum + minutes(getExodologyLesson(pathId, l.id)?.duration),
    0
  )
  return lessonMinutes + getPathModuleIds(pathId).length * ASSESSMENT_MINUTES
}

/** Study time rounded to the nearest hour, e.g. "About 16 hours". */
export function getPathStudyHoursLabel(pathId: CertPathId): string {
  const hours = Math.max(1, Math.round(getPathStudyMinutes(pathId) / 60))
  return `About ${hours} hours`
}
