import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'

// GET /api/career/people?q=ana - find members to tag on a work post (names only, no emails)
export async function GET(request: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const rl = await rateLimit(request, { id: `career-people-${session.user.id}`, limit: 120, windowSeconds: 600 })
  if (!rl.success) return rateLimitResponse(rl.reset)
  const q = (request.nextUrl.searchParams.get('q') ?? '').trim().replace(/^@/, '').slice(0, 40)
  if (q.length < 2) return NextResponse.json({ success: true, data: [] })
  const users = await prisma.user.findMany({
    where: {
      id: { not: session.user.id },
      OR: [{ name: { contains: q, mode: 'insensitive' } }, { careerProfile: { handle: { startsWith: q.toLowerCase() } } }],
    },
    select: { id: true, name: true, image: true, careerProfile: { select: { handle: true } } },
    take: 8,
  })
  return NextResponse.json({
    success: true,
    data: users.map((u: { id: string; name: string | null; image: string | null; careerProfile: { handle: string } | null }) => ({ id: u.id, name: u.name || 'Member', image: u.image, handle: u.careerProfile?.handle ?? null })),
  })
}
