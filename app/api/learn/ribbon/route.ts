import { NextResponse } from 'next/server'
import { z } from 'zod'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { getTopic, type CoreTopic } from '@/data/modules'
import { cleanRibbon, isValidRibbon } from '@/lib/learning/ribbon'
import { getVolumeCount, OPENING_PAGES, PAGES_PER_CHAPTER, VOLUME_SIZE } from '@/lib/learning/topicVolumes'

// The reader's bookmark ribbon: its design (one for every book) and where it
// sits in each book. GET returns both; PUT saves either the design or a spot.

const positionSchema = z.object({
  topicId: z.string().max(100),
  volume: z.number().int().min(0).max(50),
  page: z.number().int().min(0).max(500),
})

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in to use your ribbon.' }, { status: 401 })
  const [user, bookmarks] = await Promise.all([
    prisma.user.findUnique({ where: { id: session.user.id }, select: { readingRibbon: true } }),
    prisma.readingBookmark.findMany({ where: { userId: session.user.id }, select: { topicId: true, volume: true, page: true, updatedAt: true } }),
  ])
  return NextResponse.json({
    success: true,
    data: {
      style: cleanRibbon(user?.readingRibbon),
      bookmarks: Object.fromEntries(bookmarks.map((b: { topicId: string; volume: number; page: number; updatedAt: Date }) => [b.topicId, { volume: b.volume, page: b.page, updatedAt: b.updatedAt.toISOString() }])),
    },
  }, { headers: { 'Cache-Control': 'no-store' } })
}

export async function PUT(request: Request) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in to use your ribbon.' }, { status: 401 })
  const body = await request.json().catch(() => null)
  if (!body || typeof body !== 'object') return NextResponse.json({ success: false, error: 'Invalid request.' }, { status: 400 })

  // Save the design
  if ('style' in body) {
    if (!isValidRibbon(body.style)) return NextResponse.json({ success: false, error: 'That ribbon design is not valid.' }, { status: 400 })
    const style = cleanRibbon(body.style)
    await prisma.user.update({ where: { id: session.user.id }, data: { readingRibbon: style } })
    return NextResponse.json({ success: true, data: { style } })
  }

  // Save where the ribbon sits in a book
  const parsed = positionSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ success: false, error: 'Invalid ribbon position.' }, { status: 400 })
  const { topicId, volume, page } = parsed.data
  const topic = getTopic(topicId as CoreTopic)
  if (!topic) return NextResponse.json({ success: false, error: 'Unknown book.' }, { status: 400 })
  const volumes = getVolumeCount(topic.modules.length)
  const chaptersInVolume = Math.min(VOLUME_SIZE, topic.modules.length - volume * VOLUME_SIZE)
  const pagesInVolume = OPENING_PAGES + chaptersInVolume * PAGES_PER_CHAPTER
  if (volume >= volumes || page >= pagesInVolume) return NextResponse.json({ success: false, error: 'That page is not in this book.' }, { status: 400 })

  const saved = await prisma.readingBookmark.upsert({
    where: { userId_topicId: { userId: session.user.id, topicId } },
    create: { userId: session.user.id, topicId, volume, page },
    update: { volume, page },
    select: { topicId: true, volume: true, page: true },
  })
  return NextResponse.json({ success: true, data: saved })
}
