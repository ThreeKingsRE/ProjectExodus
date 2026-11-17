import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'
import { resolveChapterCohort } from '@/lib/learning/scrollCohort'

// Chapter discussions in the Digital Scroll.
//
//   GET    ?topic=&module=&level=          newest 100 posts for the viewer's cohort
//   POST   { topic, module, level, body, language }
//   DELETE ?id=<postId>                    remove one of your own posts
//
// A cohort is learners enrolled in the same chapter, at the same learning
// level, in the same age band (see lib/learning/scrollCohort.ts). Posts are
// plain text. `language` is the author's browser language, kept so posts can
// be translated for readers in other countries.

const MAX_LENGTH = 1000
const MIN_SECONDS_BETWEEN_POSTS = 20

const author = { select: { id: true, name: true, image: true } }

export async function GET(request: Request) {
  try {
    const p = new URL(request.url).searchParams
    const cohort = await resolveChapterCohort({ topic: p.get('topic'), module: p.get('module'), level: p.get('level') })
    if (cohort instanceof NextResponse) return cohort
    const posts = await prisma.scrollDiscussionPost.findMany({
      where: { topicId: cohort.topicId, moduleKey: cohort.moduleKey, level: cohort.level, ageBand: cohort.ageBand },
      orderBy: { createdAt: 'desc' },
      take: 100,
      select: { id: true, body: true, language: true, createdAt: true, user: author },
    })
    return NextResponse.json({ success: true, data: posts.reverse(), viewerId: cohort.userId })
  } catch (error) {
    console.error('Error loading chapter discussion:', error)
    return NextResponse.json({ success: false, error: 'Failed to load the discussion' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const input = await request.json().catch(() => ({}))
    const cohort = await resolveChapterCohort(input)
    if (cohort instanceof NextResponse) return cohort

    const body = typeof input.body === 'string' ? input.body.trim() : ''
    if (!body) return NextResponse.json({ success: false, error: 'Write something first' }, { status: 400 })
    if (body.length > MAX_LENGTH) return NextResponse.json({ success: false, error: `Keep posts under ${MAX_LENGTH} characters` }, { status: 400 })
    const language = typeof input.language === 'string' && /^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})*$/.test(input.language) ? input.language.slice(0, 16) : null

    const last = await prisma.scrollDiscussionPost.findFirst({
      where: { userId: cohort.userId },
      orderBy: { createdAt: 'desc' },
      select: { createdAt: true },
    })
    if (last && Date.now() - last.createdAt.getTime() < MIN_SECONDS_BETWEEN_POSTS * 1000) {
      return NextResponse.json({ success: false, error: 'You just posted. Wait a few seconds before posting again.' }, { status: 429 })
    }

    const post = await prisma.scrollDiscussionPost.create({
      data: { userId: cohort.userId, topicId: cohort.topicId, moduleKey: cohort.moduleKey, level: cohort.level, ageBand: cohort.ageBand, language, body },
      select: { id: true, body: true, language: true, createdAt: true, user: author },
    })
    return NextResponse.json({ success: true, data: post })
  } catch (error) {
    console.error('Error posting to chapter discussion:', error)
    return NextResponse.json({ success: false, error: 'Failed to post' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { auth } = await import('@/auth')
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, code: 'SIGN_IN' }, { status: 401 })
    const id = new URL(request.url).searchParams.get('id') ?? ''
    const { count } = await prisma.scrollDiscussionPost.deleteMany({ where: { id, userId: session.user.id } })
    if (!count) return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting discussion post:', error)
    return NextResponse.json({ success: false, error: 'Failed to delete' }, { status: 500 })
  }
}
