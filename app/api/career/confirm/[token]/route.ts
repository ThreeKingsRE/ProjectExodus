import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { hashToken } from '@/lib/career/server'

// POST /api/career/confirm/[token] - from the emailed link: confirm the vouch, or say "not me".
// A button press (not the GET) confirms, so email link scanners can't confirm on their own.
export async function POST(request: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const rl = await rateLimit(request, { id: 'career-vouch-confirm', limit: 30, windowSeconds: 3600 })
  if (!rl.success) return rateLimitResponse(rl.reset)
  const { token } = await params
  const vouch = await prisma.careerVouch.findUnique({ where: { confirmTokenHash: hashToken(token) }, select: { id: true, status: true, expiresAt: true } })
  if (!vouch) return NextResponse.json({ success: false, error: 'This link is not valid.' }, { status: 404 })
  const b = await request.json().catch(() => ({}))
  if (b.action === 'decline') {
    await prisma.careerVouch.update({ where: { id: vouch.id }, data: { status: 'DECLINED', confirmTokenHash: null } })
    return NextResponse.json({ success: true, data: { status: 'declined' } })
  }
  if (vouch.status === 'VERIFIED') return NextResponse.json({ success: true, data: { status: 'verified' } })
  if (vouch.status !== 'SIGNED' || vouch.expiresAt < new Date()) {
    return NextResponse.json({ success: false, error: 'This link has expired or the vouch was withdrawn.' }, { status: 410 })
  }
  await prisma.careerVouch.update({ where: { id: vouch.id }, data: { status: 'VERIFIED', verifiedAt: new Date() } })
  return NextResponse.json({ success: true, data: { status: 'verified' } })
}
