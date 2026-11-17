import type { Prisma } from '@prisma/client'

export class ParticipationError extends Error {
  constructor(message: string, public status: number) { super(message) }
}

type Database = { $transaction<T>(fn: (tx: Prisma.TransactionClient) => Promise<T>): Promise<T> }

export async function participate(db: Database, userId: string, projectId: string, intent: 'follow' | 'collaborate') {
  return db.$transaction(async tx => {
    const project = await tx.project.findUnique({
      where: { id: projectId },
      select: { id: true, visibility: true, layoutConfig: true, prerequisites: { select: { id: true } } },
    })
    if (!project) throw new ParticipationError('Initiative not found.', 404)
    const key = { projectId_userId: { projectId, userId } }
    const existing = await tx.projectMember.findUnique({ where: key })
    if (!existing && project.visibility !== 'PUBLIC') throw new ParticipationError('This initiative requires an invitation.', 403)
    const config = project.layoutConfig as { settings?: { requireApproval?: boolean } } | null
    const approvalRequired = config?.settings?.requireApproval === true || project.prerequisites.length > 0
    const canCollaborate = intent === 'collaborate' && !approvalRequired
    // An upsert prevents duplicate followers and never overwrites an existing role.
    await tx.projectMember.upsert({
      where: key,
      create: { projectId, userId, role: canCollaborate ? 'CONTRIBUTOR' : 'VIEWER', notifyUpdates: true },
      update: { notifyUpdates: true },
    })
    if (canCollaborate) {
      // Only promote a viewer; a repeat click cannot demote an owner or admin.
      await tx.projectMember.updateMany({ where: { projectId, userId, role: 'VIEWER' }, data: { role: 'CONTRIBUTOR' } })
    }
    const member = await tx.projectMember.findUniqueOrThrow({ where: key, select: { id: true, role: true, projectId: true, userId: true } })
    return { member, approvalRequired: intent === 'collaborate' && approvalRequired && member.role === 'VIEWER' }
  })
}
