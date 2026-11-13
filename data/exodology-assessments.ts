// Module assessments for Exodology paths, keyed by module id (e.g. "f-m3").
// Same simple format as moduleAssessments in data/exodology-curriculum.ts;
// lib/exodology/assessments.ts converts both for the assessment page.
// Questions are written strictly from each module's own lesson text.

export interface SimpleAssessment {
  moduleId: string
  title: string
  description: string
  passingScore?: number
  questions: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }[]
}

export const additionalAssessments: Record<string, SimpleAssessment> = {}
