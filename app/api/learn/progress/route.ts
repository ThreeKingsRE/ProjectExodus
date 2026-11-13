import { NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { TOPICS, getTopic, CoreTopic } from '@/data/modules'
import { LEARNING_LEVELS, LearningLevel } from '@/types/learning'
import { moduleProgressKeys } from '@/lib/learning/topicVolumes'

// Progress for the static course modules (Digital Scroll, module viewer).
//
// POST actions:
//   practice_complete  – finished a practice activity (unlocks the quiz)
//   submit_quiz        – quiz attempt; passing marks the module complete
//   start / complete_lesson – accepted for older callers; only touches the record
//
// Modules are identified by { topicId, moduleKey }. Older callers send only
// `moduleId` (a module id or slug); that is resolved to the first matching module.
//
// Note: quiz scores are graded in the browser. That is fine for learning
// progress, but anything that grants credit must be graded server-side.

const bodySchema = z.object({
  action: z.enum(['start', 'complete_lesson', 'practice_complete', 'submit_quiz']),
  topicId: z.string().max(100).optional(),
  moduleKey: z.string().max(200).optional(),
  moduleId: z.string().max(200).optional(),
  level: z.string().max(40).optional(),
  score: z.number().int().min(0).max(100).optional(),
})

function resolveModule(
  topicId: string | undefined,
  moduleKey: string | undefined,
  moduleId: string | undefined
): { topicId: CoreTopic; moduleKey: string } | null {
  if (topicId && moduleKey) {
    const topic = getTopic(topicId as CoreTopic)
    if (!topic) return null
    return moduleProgressKeys(topic.modules).includes(moduleKey)
      ? { topicId: topic.id, moduleKey }
      : null
  }
  if (moduleId) {
    for (const topic of TOPICS) {
      const index = topic.modules.findIndex((m) => m.id === moduleId || m.slug === moduleId)
      if (index !== -1) {
        return { topicId: topic.id, moduleKey: moduleProgressKeys(topic.modules)[index] }
      }
    }
  }
  return null
}

function parseLevel(level: string | undefined): LearningLevel {
  const upper = level?.toUpperCase()
  return upper && upper in LEARNING_LEVELS ? (upper as LearningLevel) : 'HIGH_SCHOOL'
}

export async function POST(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
    }
    const userId = session.user.id

    const parsed = bodySchema.safeParse(await request.json().catch(() => null))
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })
    }
    const { action, score } = parsed.data
    const target = resolveModule(parsed.data.topicId, parsed.data.moduleKey, parsed.data.moduleId)
    if (!target) {
      return NextResponse.json({ success: false, error: 'Unknown module' }, { status: 404 })
    }
    const level = parseLevel(parsed.data.level)
    const where = { userId_topicId_moduleKey: { userId, ...target } }

    if (action === 'submit_quiz') {
      if (score === undefined) {
        return NextResponse.json({ success: false, error: 'Score required' }, { status: 400 })
      }
      const topic = getTopic(target.topicId)!
      const index = moduleProgressKeys(topic.modules).indexOf(target.moduleKey)
      const passingScore = topic.modules[index]?.quiz.passingScore ?? 80
      const passed = score >= passingScore

      const existing = await prisma.topicModuleProgress.findUnique({ where })
      const progress = await prisma.topicModuleProgress.upsert({
        where,
        create: {
          userId,
          ...target,
          level,
          practiceCompleted: true,
          quizAttempts: 1,
          lastQuizScore: score,
          bestQuizScore: score,
          quizPassed: passed,
          completedAt: passed ? new Date() : null,
        },
        update: {
          level,
          quizAttempts: { increment: 1 },
          lastQuizScore: score,
          bestQuizScore: Math.max(score, existing?.bestQuizScore ?? 0),
          // Passing is permanent; a later lower score doesn't un-complete a module
          quizPassed: existing?.quizPassed || passed,
          completedAt: existing?.completedAt ?? (passed ? new Date() : null),
        },
      })
      return NextResponse.json({
        success: true,
        data: { ...target, score, passed, passingScore, quizPassed: progress.quizPassed },
      })
    }

    const progress = await prisma.topicModuleProgress.upsert({
      where,
      create: { userId, ...target, level, practiceCompleted: action === 'practice_complete' },
      update: action === 'practice_complete' ? { level, practiceCompleted: true } : { level },
    })
    return NextResponse.json({
      success: true,
      data: { ...target, practiceCompleted: progress.practiceCompleted, quizPassed: progress.quizPassed },
    })
  } catch (error) {
    console.error('Error updating progress:', error)
    return NextResponse.json({ success: false, error: 'Failed to update progress' }, { status: 500 })
  }
}

// GET /api/learn/progress?topic=renewable-energy
// Without ?topic, returns progress across all topics.
export async function GET(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
    }

    const topicId = new URL(request.url).searchParams.get('topic')
    type ProgressRecord = {
      topicId: string
      moduleKey: string
      practiceCompleted: boolean
      quizPassed: boolean
      bestQuizScore: number | null
      quizAttempts: number
      completedAt: Date | null
    }
    const records: ProgressRecord[] = await prisma.topicModuleProgress.findMany({
      where: { userId: session.user.id, ...(topicId ? { topicId } : {}) },
      select: {
        topicId: true,
        moduleKey: true,
        practiceCompleted: true,
        quizPassed: true,
        bestQuizScore: true,
        quizAttempts: true,
        completedAt: true,
      },
    })

    return NextResponse.json({
      success: true,
      data: {
        modules: records,
        completed: records.filter((r) => r.quizPassed),
        inProgress: records.filter((r) => !r.quizPassed),
      },
    })
  } catch (error) {
    console.error('Error fetching progress:', error)
    return NextResponse.json({ success: false, error: 'Failed to fetch progress' }, { status: 500 })
  }
}
