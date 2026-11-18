// Comments on initiative files and timeline items (Stage 3: public input).
// Whoever can see an item can comment on it: followers and the team for items
// shared with followers, collaborators for team-only items.

import { isCollaborator, isMemberOrFollower, isModerator, type Access } from './access'

export const COMMENT_TARGETS = ['FILE', 'TIMELINE_ITEM'] as const
export type CommentTarget = (typeof COMMENT_TARGETS)[number]
export const MAX_COMMENT_LENGTH = 2000
export const MIN_SECONDS_BETWEEN_COMMENTS = 5

/** Whether the item is visible to followers (shared) or only to the team. */
export interface TargetVisibility { sharedWithFollowers: boolean }

export function canSeeItem(target: TargetVisibility, a: Access): boolean {
  return target.sharedWithFollowers ? isMemberOrFollower(a) : isCollaborator(a)
}

/** Commenting has the same rule as seeing: input is open to everyone who can view. */
export const canCommentOnItem = canSeeItem

/** Authors delete their own comments; moderators, admins and owners can remove any. */
export function canDeleteComment(comment: { userId: string }, a: Access): boolean {
  return (!!a.userId && comment.userId === a.userId) || isModerator(a)
}

export function parseCommentBody(raw: unknown): { ok: true; body: string } | { ok: false; error: string } {
  const body = typeof raw === 'string' ? raw.trim() : ''
  if (!body) return { ok: false, error: 'Write a comment first.' }
  if (body.length > MAX_COMMENT_LENGTH) return { ok: false, error: `Keep comments under ${MAX_COMMENT_LENGTH} characters.` }
  return { ok: true, body }
}

export function isCommentTarget(v: unknown): v is CommentTarget {
  return typeof v === 'string' && (COMMENT_TARGETS as readonly string[]).includes(v)
}
