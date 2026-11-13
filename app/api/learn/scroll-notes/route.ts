import { NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { getTopic, CoreTopic } from '@/data/modules'
import { LEARNING_LEVELS, LearningLevel } from '@/types/learning'
import { moduleProgressKeys } from '@/lib/learning/topicVolumes'
import { MAX_NOTE_LENGTH } from '@/lib/learning/scrollStorage'

// The signed-in user's own Digital Scroll notes that live on the server.
//
// Notes are device-local by default. A note is stored here only when:
//   - the user turned on "sync notes to my account" (any visibility), or
//   - the user shared it with peers (eye icon → PEERS)
// The server enforces this: a PRIVATE note from a user without sync is deleted
// rather than stored.

const putSchema = z.object({
  topicId: z.string().max(100),
  noteKey: z.string().max(200).regex(/^[a-z0-9~_-]+$/i),
  moduleKey: z.string().max(200).nullable().optional(),
  level: z.string().max(40),
  content: z.string().max(MAX_NOTE_LENGTH),
  visibility: z.enum(['PRIVATE', 'PEERS']),
})

export async function GET(request: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }
  const topicId = new URL(request.url).searchParams.get('topic')
  if (!topicId) {
    return NextResponse.json({ success: false, error: 'topic is required' }, { status: 400 })
  }
  const notes = await prisma.scrollNote.findMany({
    where: { userId: session.user.id, topicId },
    select: { noteKey: true, moduleKey: true, level: true, content: true, visibility: true, updatedAt: true },
  })
  return NextResponse.json({ success: true, data: notes })
}

export async function PUT(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
    }
    const userId = session.user.id
    const parsed = putSchema.safeParse(await request.json().catch(() => null))
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: 'Invalid note' }, { status: 400 })
    }
    const { topicId, noteKey, content, visibility } = parsed.data
    const moduleKey = parsed.data.moduleKey ?? null
    const levelParam = parsed.data.level.toUpperCase()
    if (!(levelParam in LEARNING_LEVELS)) {
      return NextResponse.json({ success: false, error: 'Invalid level' }, { status: 400 })
    }
    const level = levelParam as LearningLevel

    const topic = getTopic(topicId as CoreTopic)
    if (!topic || (moduleKey && !moduleProgressKeys(topic.modules).includes(moduleKey))) {
      return NextResponse.json({ success: false, error: 'Unknown topic or module' }, { status: 404 })
    }

    const profile = await prisma.learnerProfile.findUnique({ where: { userId } })
    if (visibility === 'PEERS' && !profile?.ageBand) {
      return NextResponse.json(
        { success: false, error: 'Choose your age group before sharing notes' },
        { status: 403 }
      )
    }

    const where = { userId_topicId_noteKey: { userId, topicId, noteKey } }
    const keepOnServer = content.trim().length > 0 && (visibility === 'PEERS' || profile?.syncScrollNotes)
    if (!keepOnServer) {
      await prisma.scrollNote.deleteMany({ where: { userId, topicId, noteKey } })
      return NextResponse.json({ success: true, data: { stored: false } })
    }

    const note = await prisma.scrollNote.upsert({
      where,
      create: { userId, topicId, noteKey, moduleKey, level, content, visibility },
      update: { moduleKey, level, content, visibility },
      select: { noteKey: true, visibility: true, updatedAt: true },
    })
    return NextResponse.json({ success: true, data: { stored: true, ...note } })
  } catch (error) {
    console.error('Error saving scroll note:', error)
    return NextResponse.json({ success: false, error: 'Failed to save note' }, { status: 500 })
  }
}
