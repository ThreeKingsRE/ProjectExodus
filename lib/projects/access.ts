// Who can do what in an initiative.
//
// - Followers (role VIEWER): anyone can follow. They see the public page, the
//   public discussion, and whatever the team shares with followers.
// - Collaborators (CONTRIBUTOR, MODERATOR, ADMIN, OWNER, or the creator): only
//   added by invitation or an approved request. They see every team tab.
// - Managers (creator, OWNER, ADMIN): invite people and approve requests.

import type { MemberRole } from './files'

export interface Access {
  userId: string | null
  role: MemberRole | null
  isCreator: boolean
}

const COLLABORATOR_ROLES: MemberRole[] = ['CONTRIBUTOR', 'MODERATOR', 'ADMIN', 'OWNER']

export const isCollaborator = (a: Access) => a.isCreator || (a.role !== null && COLLABORATOR_ROLES.includes(a.role))
export const isFollower = (a: Access) => !isCollaborator(a) && a.role === 'VIEWER'
export const isMemberOrFollower = (a: Access) => isCollaborator(a) || isFollower(a)
export const isManagerAccess = (a: Access) => a.isCreator || a.role === 'OWNER' || a.role === 'ADMIN'
export const isModerator = (a: Access) => isManagerAccess(a) || a.role === 'MODERATOR'

export type DiscussionVisibility = 'PUBLIC' | 'TEAM'

/** Followers read and post in the public discussion; the team discussion is collaborators only. */
export function canSeeDiscussion(visibility: string, a: Access) {
  return visibility === 'PUBLIC' ? isMemberOrFollower(a) : isCollaborator(a)
}

export const INVITABLE_ROLES = ['CONTRIBUTOR', 'MODERATOR', 'ADMIN'] as const
export type InvitableRole = (typeof INVITABLE_ROLES)[number]

/** Managers invite collaborators and moderators; only the owner can invite admins. */
export function canInviteAs(role: string, a: Access): role is InvitableRole {
  if (!(INVITABLE_ROLES as readonly string[]).includes(role)) return false
  if (!isManagerAccess(a)) return false
  if (role === 'ADMIN') return a.isCreator || a.role === 'OWNER'
  return true
}

const RANK: Record<MemberRole, number> = { VIEWER: 0, CONTRIBUTOR: 1, MODERATOR: 2, ADMIN: 3, OWNER: 4 }

/** Accepting an invite never lowers an existing role. */
export function roleAfterAccepting(current: MemberRole | null, invited: MemberRole): MemberRole {
  if (!current) return invited
  return RANK[current] >= RANK[invited] ? current : invited
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export function normalizeEmail(raw: unknown): string | null {
  if (typeof raw !== 'string') return null
  const email = raw.trim().toLowerCase()
  return email.length <= 254 && EMAIL.test(email) ? email : null
}
