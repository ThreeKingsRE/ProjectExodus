import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { placeBrief } from '@/lib/meetings/server'

// GET /api/meetings/me -> the places on my calendar and my holiday setting
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: true, data: { signedIn: false, places: [], showHolidays: true } })
  const [follows, u] = await Promise.all([
    prisma.meetingCalendarFollow.findMany({ where: { userId: session.user.id }, include: { jurisdiction: true }, orderBy: { createdAt: 'asc' }, take: 60 }),
    prisma.user.findUnique({ where: { id: session.user.id }, select: { meetingsShowHolidays: true } }),
  ])
  return NextResponse.json({ success: true, data: { signedIn: true, places: follows.map((f: { jurisdiction: never }) => placeBrief(f.jurisdiction)), showHolidays: u?.meetingsShowHolidays ?? true } })
}

// PUT /api/meetings/me { showHolidays }
export async function PUT(request: Request) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const b = await request.json().catch(() => ({}))
  if (typeof b.showHolidays !== 'boolean') return NextResponse.json({ success: false, error: 'Nothing to change.' }, { status: 400 })
  await prisma.user.update({ where: { id: session.user.id }, data: { meetingsShowHolidays: b.showHolidays } })
  return NextResponse.json({ success: true })
}
