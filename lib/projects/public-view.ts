import { normalizeSurveyUrl } from './linked-text'

/**
 * Public initiatives can be read by anyone, account or not, unless the owner
 * hides the overview. Private and draft initiatives (stored as UNLISTED) never are.
 */
export function projectPublication(visibility: unknown, hideFromPublic: unknown) {
  const publication = typeof visibility === 'string' ? visibility : 'PUBLIC'
  return {
    visibility: publication === 'PUBLIC' ? 'PUBLIC' as const : 'UNLISTED' as const,
    publication,
    hideFromPublic: publication !== 'PUBLIC' || hideFromPublic === true,
  }
}

export function isPublicProject(project: { visibility: string; layoutConfig: unknown }) {
  const layout = project.layoutConfig as Record<string, unknown> | null
  return project.visibility === 'PUBLIC' && layout?.hideFromPublic !== true
}

export function publicProjectFields(project: {
  id: string; name: string; slug: string; description: string; goal: string | null;
  status: string; coverImage: string | null; visibility: string; layoutConfig: unknown;
  creator: { id: string; name: string | null }; _count: { members: number };
}) {
  if (!isPublicProject(project)) return null
  const layout = (project.layoutConfig ?? {}) as Record<string, unknown>
  const text = (key: string, max: number) => typeof layout[key] === 'string' ? (layout[key] as string).slice(0, max) : ''
  // Never serialize the full JSON config, membership list, research, or messages.
  return {
    id: project.id, name: project.name, slug: project.slug,
    description: project.description, goal: project.goal, status: project.status,
    coverImage: project.coverImage, tagline: text('tagline', 200),
    mission: text('mission', 1000), story: text('publicStory', 16000),
    surveyUrl: normalizeSurveyUrl(layout.surveyUrl) || null,
    organizer: { id: project.creator.id, name: project.creator.name || 'Initiative organizer' },
    participants: project._count.members,
  }
}

export interface PublicUpdate { id: string; title: string | null; excerpt: string; createdAt: string; author: string | null; image: string | null; likes: number; comments: number }
export type PublicProject = NonNullable<ReturnType<typeof publicProjectFields>> & { ventureType?: string | null; updates?: PublicUpdate[] }
