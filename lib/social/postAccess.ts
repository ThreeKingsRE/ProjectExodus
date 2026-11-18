// Who can see a post. Personal posts follow the author's audience setting.
// Initiative updates (posts with a projectId) follow the initiative:
//   PUBLIC         -> everyone, if the initiative itself is public
//   FOLLOWERS_ONLY -> the initiative's followers and team
//   PRIVATE        -> the initiative's team only

import type { Access } from '../projects/access'

// Same rules as lib/projects/access (kept local so this file has no runtime imports)
const TEAM = ['CONTRIBUTOR', 'MODERATOR', 'ADMIN', 'OWNER']
const isCollaborator = (a: Access) => a.isCreator || (a.role !== null && TEAM.includes(a.role))
const isMemberOrFollower = (a: Access) => isCollaborator(a) || a.role === 'VIEWER'

export interface PostRef {
  userId: string
  visibility: string
  projectId: string | null
  projectVisibility?: string | null
}

export interface PostViewer {
  userId: string | null
  followsAuthor: boolean
  projectAccess: Access | null
}

export function canSeePost(post: PostRef, v: PostViewer): boolean {
  if (v.userId && post.userId === v.userId) return true
  if (post.projectId) {
    const pa = v.projectAccess
    if (post.visibility === 'PUBLIC') return post.projectVisibility === 'PUBLIC' || (!!pa && isMemberOrFollower(pa))
    if (post.visibility === 'FOLLOWERS_ONLY') return !!pa && isMemberOrFollower(pa)
    return !!pa && isCollaborator(pa)
  }
  if (post.visibility === 'PUBLIC') return true
  if (post.visibility === 'FOLLOWERS_ONLY') return v.followsAuthor
  return false
}

/** Prisma filter for posts anyone may see: public personal posts and public updates from public initiatives. */
export const PUBLIC_POSTS_WHERE = {
  visibility: 'PUBLIC',
  OR: [{ projectId: null }, { project: { visibility: 'PUBLIC' } }],
} as const

export const AUDIENCES = ['PUBLIC', 'FOLLOWERS_ONLY', 'PRIVATE'] as const
export type Audience = (typeof AUDIENCES)[number]
