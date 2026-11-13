import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { TOPICS, CoreTopic } from '@/data/modules'
import { moduleProgressKeys } from '@/lib/learning/topicVolumes'

// Type for topic structure
type TopicModule = { slug: string }
type Topic = { id: CoreTopic; modules: TopicModule[] }

export interface TopicProgress {
  topicId: CoreTopic
  totalModules: number
  completedModules: number
  progressPercent: number
  isGraduated: boolean
}

export async function GET() {
  try {
    const session = await auth()

    // If not logged in, return empty progress
    if (!session?.user?.id) {
      const emptyProgress: TopicProgress[] = TOPICS.map((topic: Topic) => ({
        topicId: topic.id,
        totalModules: topic.modules.length,
        completedModules: 0,
        progressPercent: 0,
        isGraduated: false
      }))

      return NextResponse.json({
        success: true,
        data: emptyProgress
      })
    }

    const userId = session.user.id

    // A module counts as completed once its quiz has been passed (Digital Scroll or module viewer)
    const completed: { topicId: string; moduleKey: string }[] = await prisma.topicModuleProgress.findMany({
      where: { userId, quizPassed: true },
      select: { topicId: true, moduleKey: true },
    })
    const completedKeys = new Set(completed.map((p) => `${p.topicId}:${p.moduleKey}`))

    const topicProgress: TopicProgress[] = TOPICS.map((topic) => {
      const keys = moduleProgressKeys(topic.modules)
      const completedInTopic = keys.filter((key) => completedKeys.has(`${topic.id}:${key}`)).length
      const progressPercent = Math.round((completedInTopic / topic.modules.length) * 100)

      return {
        topicId: topic.id,
        totalModules: topic.modules.length,
        completedModules: completedInTopic,
        progressPercent,
        isGraduated: progressPercent === 100
      }
    })

    return NextResponse.json({
      success: true,
      data: topicProgress
    })
  } catch (error) {
    console.error('Error fetching topic progress:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch topic progress' },
      { status: 500 }
    )
  }
}
