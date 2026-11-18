import { prisma } from '@/lib/db/prisma'

/**
 * Who may read and post comments on a document. Mirrors the document view
 * rule: the creator, a document collaborator, the initiative team (followers
 * are not team), or anyone signed in when the document is shared publicly
 * (public and published). Posting also needs comment rights: the creator, the
 * team, a collaborator with comment-level permission, or allowComments on a
 * document the person can read.
 */
export async function documentCommentAccess(documentId: string, userId: string) {
  const doc = await prisma.document.findUnique({
    where: { id: documentId },
    select: {
      creatorId: true,
      isPublic: true,
      status: true,
      allowComments: true,
      collaborators: { where: { userId }, select: { permission: true }, take: 1 },
      project: { select: { creatorId: true, members: { where: { userId }, select: { role: true }, take: 1 } } },
    },
  })
  if (!doc) return null
  const isCreator = doc.creatorId === userId
  const collaborator = doc.collaborators[0]
  const role = doc.project?.members[0]?.role
  const isTeam = doc.project?.creatorId === userId || (!!role && role !== 'VIEWER')
  const isShared = doc.isPublic && doc.status === 'PUBLISHED'
  const canRead = isCreator || !!collaborator || isTeam || isShared
  const canComment = canRead && (
    isCreator || isTeam ||
    (!!collaborator && ['COMMENT', 'SUGGEST', 'EDIT', 'ADMIN'].includes(collaborator.permission)) ||
    doc.allowComments
  )
  return { canRead, canComment, isTeam }
}
