import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { getTopic, CoreTopic } from '@/data/modules'
import { LEARNING_LEVELS, LearningLevel } from '@/types/learning'
import { moduleProgressKeys } from '@/lib/learning/topicVolumes'

// GET /api/learn/scroll-notes/peers?topic=<id>&module=<moduleKey>&level=<LEVEL>
//
// Notes other learners chose to share (eye icon), limited to learners who:
//   - are enrolled in the same module (have started it), or the same topic for
//     topic-wide notes when no module is given
//   - read at the same learning level
//   - are in the same age band (teens only ever see teens, adults only adults)
// The viewer must meet the same conditions. Only the note text and the
// author's display name/avatar are returned.
//
// Errors carry a `code` the Digital Scroll uses to explain what's needed:
//   SIGN_IN, AGE_BAND, NOT_ENROLLED

export async function GET(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ success: false, code: 'SIGN_IN' }, { status: 401 })
    }
    const userId = session.user.id

    const params = new URL(request.url).searchParams
    const topicId = params.get('topic') ?? ''
    const moduleKey = params.get('module')
    const levelParam = (params.get('level') ?? '').toUpperCase()

    const topic = getTopic(topicId as CoreTopic)
    if (!topic || (moduleKey && !moduleProgressKeys(topic.modules).includes(moduleKey))) {
      return NextResponse.json({ success: false, error: 'Unknown topic or module' }, { status: 404 })
    }
    if (!(levelParam in LEARNING_LEVELS)) {
      return NextResponse.json({ success: false, error: 'Invalid level' }, { status: 400 })
    }
    const level = levelParam as LearningLevel

    const profile = await prisma.learnerProfile.findUnique({ where: { userId } })
    if (!profile?.ageBand) {
      return NextResponse.json({ success: false, code: 'AGE_BAND' }, { status: 403 })
    }

    const enrollment = { topicId, ...(moduleKey ? { moduleKey } : {}) }
    const isEnrolled = await prisma.topicModuleProgress.findFirst({
      where: { userId, ...enrollment },
      select: { id: true },
    })
    if (!isEnrolled) {
      return NextResponse.json({ success: false, code: 'NOT_ENROLLED' }, { status: 403 })
    }

    const notes = await prisma.scrollNote.findMany({
      where: {
        topicId,
        moduleKey: moduleKey ?? null,
        level,
        visibility: 'PEERS',
        userId: { not: userId },
        user: {
          learnerProfile: { ageBand: profile.ageBand },
          topicModuleProgress: { some: enrollment },
        },
      },
      orderBy: { updatedAt: 'desc' },
      take: 50,
      select: {
        id: true,
        noteKey: true,
        content: true,
        updatedAt: true,
        user: { select: { id: true, name: true, image: true } },
      },
    })

    return NextResponse.json({ success: true, data: notes })
  } catch (error) {
    console.error('Error fetching peer notes:', error)
    return NextResponse.json({ success: false, error: 'Failed to load shared notes' }, { status: 500 })
  }
}
