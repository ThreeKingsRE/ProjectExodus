import { prisma } from '@/lib/db'
import type { MemberRole } from './files'
import type { Access } from './access'

/** The user's access to an initiative, or null if the initiative doesn't exist. */
export async function getAccess(projectId: string, userId: string | null | undefined): Promise<(Access & { visibility: string }) | null> {
  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: {
      creatorId: true,
      visibility: true,
      members: userId ? { where: { userId }, select: { role: true }, take: 1 } : false,
    },
  })
  if (!project) return null
  return {
    userId: userId ?? null,
    role: (userId ? (project.members?.[0]?.role as MemberRole | undefined) : undefined) ?? null,
    isCreator: !!userId && project.creatorId === userId,
    visibility: project.visibility,
  }
}
