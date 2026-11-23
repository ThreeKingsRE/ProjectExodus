import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { parsePostInput } from '@/lib/career/career'
import { ownerPost, toDbPost, VOUCH_SELECT } from '@/lib/career/server'

// GET /api/career/posts - my work posts, newest first, with vouch states
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const posts = await prisma.careerPost.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
    include: { vouches: { select: VOUCH_SELECT, orderBy: { createdAt: 'desc' } } },
  })
  return NextResponse.json({ success: true, data: posts.map(ownerPost) })
}

// POST /api/career/posts - quick post or full project card
export async function POST(request: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const rl = await rateLimit(request, { id: `career-post-${session.user.id}`, limit: 60, windowSeconds: 3600 })
  if (!rl.success) return rateLimitResponse(rl.reset)
  const parsed = parsePostInput(await request.json().catch(() => null))
  if (!parsed.ok) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 })
  const post = await prisma.careerPost.create({
    data: { userId: session.user.id, ...toDbPost(parsed.data) },
    include: { vouches: { select: VOUCH_SELECT } },
  })
  return NextResponse.json({ success: true, data: ownerPost(post) }, { status: 201 })
}
