import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { parseNewMeeting } from '@/lib/meetings/input'
import { expandRepeat, MAX_REPEATS, type Repeat } from '@/lib/meetings/recurrence'
import { MEETING_SELECT, shapeMeeting } from '@/lib/meetings/server'

// POST /api/meetings { slug, title, startsAt, ... } - a member adds a meeting to a place
export async function POST(request: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in to add a meeting.' }, { status: 401 })
  const rl = await rateLimit(request, { id: `meetings-add-${session.user.id}`, limit: 30, windowSeconds: 3600 })
  if (!rl.success) return rateLimitResponse(rl.reset)
  const b = await request.json().catch(() => ({}))
  const j = typeof b.slug === 'string' ? await prisma.jurisdiction.findUnique({ where: { slug: b.slug }, select: { id: true } }) : null
  if (!j) return NextResponse.json({ success: false, error: 'Place not found.' }, { status: 404 })
  const parsed = parseNewMeeting(b)
  if (!parsed.ok) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 })
  // A posted schedule ("every 2nd Wednesday at 6 PM"): create the next several meetings at once
  const rep = b.repeat as { kind?: string; count?: number } | undefined
  const kind = rep && ['WEEKLY', 'BIWEEKLY', 'MONTHLY_NTH'].includes(String(rep.kind)) ? (rep.kind as Repeat) : null
  if (kind) {
    const count = Math.min(MAX_REPEATS, Math.max(2, Math.floor(Number(rep?.count) || 0)))
    const len = parsed.data.endsAt ? +parsed.data.endsAt - +parsed.data.startsAt : null
    const dates = expandRepeat(parsed.data.startsAt, parsed.data.timezone, kind, count)
    await prisma.meeting.createMany({ data: dates.map((d) => ({ ...parsed.data, startsAt: d, endsAt: len ? new Date(+d + len) : null, jurisdictionId: j.id, addedById: session.user.id })) })
    return NextResponse.json({ success: true, data: { count: dates.length } }, { status: 201 })
  }
  const m = await prisma.meeting.create({ data: { ...parsed.data, jurisdictionId: j.id, addedById: session.user.id }, select: MEETING_SELECT })
  return NextResponse.json({ success: true, data: shapeMeeting(m, true) }, { status: 201 })
}
