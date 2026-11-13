import { moduleAssessments } from '@/data/exodology-curriculum'
import { additionalAssessments, type SimpleAssessment } from '@/data/exodology-assessments'

// The assessment page expects options as objects with ids and an isCorrect
// flag. Assessment data is authored in a simpler format (string options plus
// the index of the correct one), and the original two are keyed
// "<module>-assessment" while the path page links by module id. This adapter
// handles both so every module's assessment can be found and rendered.

export interface PageAssessment {
  id: string
  title: string
  description: string
  passingScore: number
  questions: {
    id: string
    question: string
    options: { id: string; text: string; isCorrect: boolean }[]
    explanation: string
  }[]
}

const DEFAULT_PASSING_SCORE = 70

function normalize(moduleId: string, raw: SimpleAssessment): PageAssessment {
  return {
    id: `${moduleId}-assessment`,
    title: raw.title,
    description: raw.description,
    passingScore: raw.passingScore ?? DEFAULT_PASSING_SCORE,
    questions: raw.questions.map((q, qi) => ({
      id: `${moduleId}-q${qi + 1}`,
      question: q.question,
      options: q.options.map((text, oi) => ({ id: `${moduleId}-q${qi + 1}-o${oi + 1}`, text, isCorrect: oi === q.correctAnswer })),
      explanation: q.explanation,
    })),
  }
}

// Original entries can also be open-ended scenario assessments (a rubric, no
// multiple-choice questions), which this page cannot run; those fall through
// to the multiple-choice assessment in additionalAssessments.
function isMultipleChoice(raw: unknown): raw is SimpleAssessment {
  const q = (raw as { questions?: unknown })?.questions
  return Array.isArray(q) && q.length > 0
}

export function getModuleAssessment(moduleId: string): PageAssessment | undefined {
  const originals = moduleAssessments as unknown as Record<string, unknown>
  const original = originals[`${moduleId}-assessment`] ?? originals[moduleId]
  const raw = isMultipleChoice(original) ? original : additionalAssessments[moduleId]
  return raw ? normalize(moduleId, raw) : undefined
}
