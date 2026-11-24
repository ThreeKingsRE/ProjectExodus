import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { looksLikeStreetAddress } from '@/lib/career/career'

// GET /api/social/prefs -> { town, rulesAccepted }
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const u = await prisma.user.findUnique({ where: { id: session.user.id }, select: { discussionTown: true, discussionRulesAcceptedAt: true } })
  return NextResponse.json({ success: true, data: { town: u?.discussionTown ?? null, rulesAccepted: !!u?.discussionRulesAcceptedAt } })
}

// PUT /api/social/prefs { town?: string | null, acceptRules?: true }
export async function PUT(request: Request) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const b = await request.json().catch(() => ({}))
  const data: Record<string, unknown> = {}
  if ('town' in b) {
    const town = typeof b.town === 'string' && b.town.trim() ? b.town.trim().slice(0, 80) : null
    if (town && looksLikeStreetAddress(town)) return NextResponse.json({ success: false, error: 'Use a town or region, not a street address.' }, { status: 400 })
    data.discussionTown = town
  }
  if (b.acceptRules === true) data.discussionRulesAcceptedAt = new Date()
  const u = await prisma.user.update({ where: { id: session.user.id }, data, select: { discussionTown: true, discussionRulesAcceptedAt: true } })
  return NextResponse.json({ success: true, data: { town: u.discussionTown, rulesAccepted: !!u.discussionRulesAcceptedAt } })
}
