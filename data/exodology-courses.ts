// Exodology course catalog: one course per path, plus the research capstone
// that the Master Exodologist credential builds toward. Codes, levels,
// prerequisites and measurable learning outcomes live here so every page
// (landing, path pages, certifications) shows the same facts.
//
// Study time is not typed here. lib/exodology/courses.ts adds it up from the
// lessons and module assessments learners can actually open, so it stays
// true as lessons are added.

export type CourseStatus = 'open' | 'outline'

export interface ExodologyCourse {
  code: string
  title: string
  /** Path id for open courses (foundations, applied, strategic); null for EXO 401 */
  pathId: string | null
  pillar: string
  level: string
  status: CourseStatus
  prerequisite: string
  credential: string
  /** Measurable outcomes: what a learner can do after the course */
  outcomes: string[]
  /** EXO 401 only: planned modules while the course is an outline */
  plannedModules?: { title: string; summary: string }[]
  /** EXO 401 only: planned study time, since its lessons are not written yet */
  plannedHours?: number
}

/** Shown wherever study time or credentials are described. */
export const CREDIT_NOTE =
  'Projxodus courses are non-credit. Study times are estimates, and the certificates show completion on Projxodus; they are not college credit or a professional license.'

export const exodologyCourses: ExodologyCourse[] = [
  {
    code: 'EXO 101',
    title: 'Foundations of Exodology',
    pathId: 'foundations',
    pillar: 'Literacy',
    level: 'Beginner',
    status: 'open',
    prerequisite: 'None',
    credential: 'Exodological Literacy',
    outcomes: [
      'Define Exodology and distinguish it from reform, collapse studies, sustainability and migration studies',
      'Analyze a system’s dependencies, failure modes and lock-in using the ideas of structural dependence and exit friction',
      'Explain the economic, social, cultural and environmental drivers of exit, using historical cases such as the Great Migration and past energy transitions',
      'Judge whether exit, reform or staying to fight is the right response for a given food, water or energy system, and justify the choice',
      'Apply ethical frameworks to an exit decision, including duties to the people who stay',
      'Recognize the psychological, social and economic barriers to exit, and the signs of premature or harmful exit'
    ]
  },
  {
    code: 'EXO 201',
    title: 'Applied Exodology',
    pathId: 'applied',
    pillar: 'Application',
    level: 'Intermediate',
    status: 'open',
    prerequisite: 'EXO 101 (Exodological Literacy)',
    credential: 'Exodological Application',
    outcomes: [
      'Build a dependency map for a household or community and decide which dependencies to address first',
      'Design decentralized food, water and energy alternatives at household and community scale',
      'Plan partial and hybrid exits that manage two systems at once without creating new fragility',
      'Anticipate how alternative systems fail and write a dignified re-entry plan',
      'Measure autonomy and resilience with simple, honest metrics tracked over time',
      'Prepare a phased community exit plan built with residents and stakeholders'
    ]
  },
  {
    code: 'EXO 301',
    title: 'Strategic Exodology',
    pathId: 'strategic',
    pillar: 'Stewardship',
    level: 'Advanced',
    status: 'open',
    prerequisite: 'EXO 201 (Exodological Application)',
    credential: 'Exodological Stewardship',
    outcomes: [
      'Assess how exit dynamics change at regional and national scale',
      'Analyze policy and governance landscapes and design policy that keeps exit possible and fair',
      'Evaluate who bears the costs of a transition and design protections for the people most exposed',
      'Identify the risks and sources of backlash in a large transition and plan mitigation and communication',
      'Design institutions and stewardship arrangements that keep exit possible across generations',
      'Produce a scoped strategic exit plan for a real system'
    ]
  },
  {
    code: 'EXO 401',
    title: 'Exodology Research and Capstone',
    pathId: null,
    pillar: 'All three pillars',
    level: 'Master',
    status: 'outline',
    prerequisite: 'EXO 101, EXO 201 and EXO 301 certificates',
    credential: 'Master Exodologist',
    plannedHours: 40,
    outcomes: [
      'Frame a researchable question about exit and choose a suitable method (case study, comparison, interviews or document analysis)',
      'Plan and carry out research ethically, including informed consent and protecting participants',
      'Situate findings in existing scholarship, including sustainability transitions research and Hirschman’s work on exit and voice',
      'Write an Exodology case study that follows the Exodology style guide',
      'Present and defend a capstone before reviewers and respond to their critique'
    ],
    plannedModules: [
      { title: 'Research Questions in Exodology', summary: 'What makes an exit question researchable, and how Exodology research differs from advocacy.' },
      { title: 'Case Study and Comparative Methods', summary: 'Selecting cases, comparing them fairly and drawing limited, honest conclusions.' },
      { title: 'Interviews, Surveys and Research Ethics', summary: 'Gathering evidence from people who have left, or are leaving, a system, and protecting them while doing it.' },
      { title: 'Working with Sources', summary: 'Finding, reading and citing scholarship, and telling evidence apart from claims.' },
      { title: 'Writing an Exodology Case Study', summary: 'Structure, analysis and style, following the Exodology style guide.' },
      { title: 'Capstone Proposal', summary: 'Scope, method, sources and success criteria for an original capstone.' },
      { title: 'Capstone Research and Writing', summary: 'Guided work sessions with checkpoints.' },
      { title: 'Review and Defense', summary: 'Presenting the capstone to reviewers, answering critique and revising.' }
    ]
  }
]

export function getCourseByPath(pathId: string): ExodologyCourse | undefined {
  return exodologyCourses.find((c) => c.pathId === pathId)
}
