import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { MAX_PINNED, parsePostInput } from '@/lib/career/career'
import { getOrCreateProfile, ownerPost, postInclude, setPeople, toDbPost } from '@/lib/career/server'

// GET /api/career/posts - my work posts (pinned first, then newest) with vouch states
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const posts = await prisma.careerPost.findMany({
    where: { userId: session.user.id },
    orderBy: [{ pinned: 'desc' }, { createdAt: 'desc' }],
    include: postInclude(),
  })
  return NextResponse.json({ success: true, data: posts.map(ownerPost) })
}

// POST /api/career/posts - photos and a caption, with optional details
export async function POST(request: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const rl = await rateLimit(request, { id: `career-post-${session.user.id}`, limit: 60, windowSeconds: 3600 })
  if (!rl.success) return rateLimitResponse(rl.reset)
  const parsed = parsePostInput(await request.json().catch(() => null))
  if (!parsed.ok) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 })
  if (parsed.data.pinned && (await prisma.careerPost.count({ where: { userId: session.user.id, pinned: true } })) >= MAX_PINNED) {
    return NextResponse.json({ success: false, error: `You can pin up to ${MAX_PINNED} posts. Unpin one first.` }, { status: 400 })
  }
  const profile = await getOrCreateProfile(session.user.id, session.user.name)
  const post = await prisma.careerPost.create({ data: { userId: session.user.id, ...toDbPost(parsed.data) } })
  await setPeople(post.id, { id: session.user.id, name: session.user.name ?? null }, parsed.data.people, `/career/${profile.handle}`)
  const full = await prisma.careerPost.findUnique({ where: { id: post.id }, include: postInclude() })
  return NextResponse.json({ success: true, data: ownerPost(full) }, { status: 201 })
}
