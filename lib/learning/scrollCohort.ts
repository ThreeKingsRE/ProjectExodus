/**
 * Who a Digital Scroll learner can connect with: learners enrolled in the same
 * chapter (module), reading at the same learning level, in the same age band.
 * Used by shared notes and chapter discussions.
 */
import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { getTopic, CoreTopic } from '@/data/modules'
import { LEARNING_LEVELS, LearningLevel } from '@/types/learning'
import { moduleProgressKeys } from './topicVolumes'
import type { LearnerAgeBand } from '@prisma/client'

export interface ScrollCohort {
  userId: string
  topicId: string
  moduleKey: string
  level: LearningLevel
  ageBand: LearnerAgeBand
}

/**
 * Resolve and check the viewer's cohort for a chapter. Returns the cohort, or a
 * response to send back. Error `code`s match the Digital Scroll's prompts:
 * SIGN_IN, AGE_BAND, NOT_ENROLLED.
 */
export async function resolveChapterCohort(input: { topic?: string | null; module?: string | null; level?: string | null }): Promise<ScrollCohort | NextResponse> {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, code: 'SIGN_IN' }, { status: 401 })
  const userId = session.user.id

  const topicId = input.topic ?? ''
  const moduleKey = input.module ?? ''
  const level = (input.level ?? '').toUpperCase()
  const topic = getTopic(topicId as CoreTopic)
  if (!topic || !moduleProgressKeys(topic.modules).includes(moduleKey)) {
    return NextResponse.json({ success: false, error: 'Unknown topic or chapter' }, { status: 404 })
  }
  if (!(level in LEARNING_LEVELS)) return NextResponse.json({ success: false, error: 'Invalid level' }, { status: 400 })

  const profile = await prisma.learnerProfile.findUnique({ where: { userId }, select: { ageBand: true } })
  if (!profile?.ageBand) return NextResponse.json({ success: false, code: 'AGE_BAND' }, { status: 403 })

  const enrolled = await prisma.topicModuleProgress.findFirst({ where: { userId, topicId, moduleKey }, select: { id: true } })
  if (!enrolled) return NextResponse.json({ success: false, code: 'NOT_ENROLLED' }, { status: 403 })

  return { userId, topicId, moduleKey, level: level as LearningLevel, ageBand: profile.ageBand }
}
