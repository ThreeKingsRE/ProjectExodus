// Exodology Research Papers and Working Documents
// Academic papers, theses, and working documents

export interface ResearchPaper {
  id: string
  title: string
  authors: string[]
  type: 'working-paper' | 'thesis' | 'policy-brief' | 'technical-report' | 'methodology'
  status: 'draft' | 'peer-review' | 'published' | 'archived'
  year: number
  abstract: string
  keywords: string[]
  relatedPaths?: string[]
  downloads?: number
  featured?: boolean
}

export const researchPapers: ResearchPaper[] = []

// Paper types for filtering
export const paperTypes = {
  'working-paper': { name: 'Working Papers', description: 'In-progress research for discussion' },
  'thesis': { name: 'Theses', description: 'Doctoral and masters theses' },
  'policy-brief': { name: 'Policy Briefs', description: 'Actionable recommendations for policymakers' },
  'technical-report': { name: 'Technical Reports', description: 'Detailed methodological and technical guidance' },
  'methodology': { name: 'Methodology', description: 'Standards and methods for research' }
}

// Paper status descriptions
export const paperStatuses = {
  'draft': { name: 'Draft', description: 'Early-stage work, subject to significant revision' },
  'peer-review': { name: 'Under Review', description: 'Currently in peer review process' },
  'published': { name: 'Published', description: 'Final version, peer-reviewed where applicable' },
  'archived': { name: 'Archived', description: 'Superseded by newer versions' }
}
