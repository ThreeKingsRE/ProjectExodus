import { prisma } from '@/lib/db'
import { canManageFiles, type MemberRole } from './files'
import { parseQuestions, type SurveyQuestion, type Respondent } from './surveys'

/** The signed-in user's standing in an initiative (null userId for guests). */
export async function getProjectStanding(projectId: string, userId: string | null) {
  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: {
      id: true,
      creatorId: true,
      members: userId ? { where: { userId }, select: { role: true }, take: 1 } : false,
    },
  })
  if (!project) return null
  const role = (userId ? (project.members?.[0]?.role as MemberRole | undefined) : undefined) ?? null
  const isCreator = !!userId && project.creatorId === userId
  const respondent: Respondent = {
    userId,
    isMember: isCreator || role !== null,
    canManage: !!userId && canManageFiles({ userId, role, isCreator }),
  }
  return respondent
}

/** Questions stored as JSON are re-validated on read so bad data never reaches the UI. */
export function storedQuestions(raw: unknown): SurveyQuestion[] {
  const parsed = parseQuestions(raw)
  return parsed.ok ? parsed.data : []
}

export const surveyListSelect = {
  id: true,
  title: true,
  description: true,
  status: true,
  audience: true,
  anonymous: true,
  shareResults: true,
  closesAt: true,
  questions: true,
  createdAt: true,
  updatedAt: true,
  _count: { select: { responses: true } },
} as const
