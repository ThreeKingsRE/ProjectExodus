// New Exodology lessons written to complete the Applied and Strategic paths.
// One file per lesson (data/exodology-new-lessons/<lesson id>.ts), in the same
// shape as the lessons in data/exodology-curriculum.ts. See
// lib/exodology/mergedOutline.ts for where each lesson sits.

export interface ExodologyReference {
  author: string
  title: string
  year: number
  publisher: string
  relevance: string
  /** Verified link to a page describing the work (Wikipedia, Open Library, Internet Archive or a DOI) */
  url: string
}

export interface NewExodologyLesson {
  id: string
  title: string
  duration: string
  type: 'instruction' | 'interactive' | 'reflection'
  content: {
    introduction: string
    /** instruction lessons */
    sections?: { title: string; content: string }[]
    keyTakeaways?: string[]
    /** interactive lessons (guided exercises) */
    gameType?: 'guided-exercise'
    steps?: { instruction: string; prompt: string; example?: string; guidance?: string; tip?: string }[]
    completionRequirement?: string
    /** optional self-assessment rubric (capstones) */
    rubric?: { criterion: string; developing: string; proficient: string; exemplary: string }[]
    synthesis?: string
    /** reflection lessons */
    prompts?: { question: string; guidance: string }[]
    closingNote?: string
    references?: ExodologyReference[]
  }
  learningObjectives: string[]
  keyTerms: { term: string; definition: string }[]
}
