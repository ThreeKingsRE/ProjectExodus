import type { Prisma } from '@prisma/client'

export class ParticipationError extends Error {
  constructor(message: string, public status: number) { super(message) }
}

type Database = { $transaction<T>(fn: (tx: Prisma.TransactionClient) => Promise<T>): Promise<T> }

export async function participate(db: Database, userId: string, projectId: string, intent: 'follow' | 'collaborate', message?: string) {
  return db.$transaction(async tx => {
    const project = await tx.project.findUnique({
      where: { id: projectId },
      select: { id: true, visibility: true, creatorId: true },
    })
    if (!project) throw new ParticipationError('Initiative not found.', 404)
    const key = { projectId_userId: { projectId, userId } }
    const existing = await tx.projectMember.findUnique({ where: key })
    if (!existing && project.visibility !== 'PUBLIC') throw new ParticipationError('This initiative requires an invitation.', 403)
    // Anyone can follow. Collaborators are only added by an owner's invitation
    // or an approved request, so a click never grants collaborator access.
    // An upsert prevents duplicate followers and never overwrites an existing role.
    await tx.projectMember.upsert({
      where: key,
      create: { projectId, userId, role: 'VIEWER', notifyUpdates: true },
      update: { notifyUpdates: true },
    })
    const member = await tx.projectMember.findUniqueOrThrow({ where: key, select: { id: true, role: true, projectId: true, userId: true } })
    let requested = false
    if (intent === 'collaborate' && member.role === 'VIEWER' && project.creatorId !== userId) {
      const pending = await tx.projectJoinRequest.findFirst({ where: { projectId, userId, status: 'PENDING' }, select: { id: true } })
      if (!pending) {
        await tx.projectJoinRequest.create({
          data: { projectId, userId, message: typeof message === 'string' ? message.trim().slice(0, 1000) || null : null },
        })
      }
      requested = true
    }
    // approvalRequired is kept for older clients: a collaboration request now always needs approval.
    return { member, requested, approvalRequired: requested }
  })
}
