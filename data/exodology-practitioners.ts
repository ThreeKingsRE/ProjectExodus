// Exodology Practitioner Directory
// Profiles of scholars and practitioners contributing to the field

export interface Practitioner {
  id: string
  name: string
  title: string
  affiliation: string
  location: string
  avatar?: string
  bio: string
  expertise: string[]
  contributions: {
    type: 'case-study' | 'research' | 'framework' | 'education' | 'practice'
    title: string
    description: string
  }[]
  certificationLevel: 'literacy' | 'application' | 'stewardship' | 'master' | 'founding'
  links?: {
    website?: string
    orcid?: string
    researchGate?: string
  }
  activeProjects?: string[]
  featured?: boolean
}

export const practitioners: Practitioner[] = []

// Expertise areas for filtering
export const expertiseAreas = {
  'social-ecological-systems': { name: 'Social-Ecological Systems', count: 0 },
  'political-economy': { name: 'Political Economy', count: 0 },
  'transition-management': { name: 'Transition Management', count: 0 },
  'energy-justice': { name: 'Energy Justice', count: 0 },
  'innovation-systems': { name: 'Innovation Systems', count: 0 },
  'community-organizing': { name: 'Community Organizing', count: 0 },
  'history': { name: 'Historical Studies', count: 0 },
  'policy-analysis': { name: 'Policy Analysis', count: 0 },
  'social-movements': { name: 'Social Movements', count: 0 },
  'urban-transitions': { name: 'Urban Transitions', count: 0 },
  'governance': { name: 'Governance', count: 0 }
}

// Calculate counts
practitioners.forEach(p => {
  p.expertise.forEach(exp => {
    if (expertiseAreas[exp as keyof typeof expertiseAreas]) {
      expertiseAreas[exp as keyof typeof expertiseAreas].count++
    }
  })
})
