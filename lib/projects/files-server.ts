import { prisma } from '@/lib/db'
import type { MemberRole, Viewer } from './files'

/** Resolve the signed-in user's standing in an initiative. Returns null if the project does not exist. */
export async function getFileViewer(projectId: string, userId: string): Promise<Viewer | null> {
  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: { creatorId: true, members: { where: { userId }, select: { role: true }, take: 1 } },
  })
  if (!project) return null
  return {
    userId,
    role: (project.members[0]?.role as MemberRole | undefined) ?? null,
    isCreator: project.creatorId === userId,
  }
}

/** Keep only editor IDs that belong to members of this initiative. */
export async function filterMemberIds(projectId: string, ids: string[]): Promise<string[]> {
  if (ids.length === 0) return []
  const members = await prisma.projectMember.findMany({
    where: { projectId, userId: { in: ids } },
    select: { userId: true },
  })
  return members.map((m: { userId: string }) => m.userId)
}

export const fileCreatorSelect = { select: { id: true, name: true, image: true } } as const
