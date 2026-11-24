import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { autoConnect } from '@/lib/meetings/server'

export const maxDuration = 60

// POST /api/meetings/find { slug }
// Look for the place's official calendar by its name (no link needed). A match that checks out is
// connected right away; a likely-but-unconfirmed one is returned as a suggestion to approve.
export async function POST(request: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in to look for a calendar.' }, { status: 401 })
  const rl = await rateLimit(request, { id: `meetings-find-${session.user.id}`, limit: 20, windowSeconds: 3600 })
  if (!rl.success) return rateLimitResponse(rl.reset)
  const b = await request.json().catch(() => ({}))
  const j = typeof b.slug === 'string' ? await prisma.jurisdiction.findUnique({ where: { slug: b.slug }, select: { id: true } }) : null
  if (!j) return NextResponse.json({ success: false, error: 'Place not found.' }, { status: 404 })
  const r = await autoConnect(j.id, { force: true })
  return NextResponse.json({ success: true, data: r })
}
