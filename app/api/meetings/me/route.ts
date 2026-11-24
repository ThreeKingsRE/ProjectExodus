import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { placeBrief } from '@/lib/meetings/server'

const PREFS = { meetingsShowHolidays: true, meetingRemindToday: true, meetingRemindDay: true, meetingRemindWeek: true, meetingEmail: true } as const

// GET /api/meetings/me -> my places, reminder choices, holiday setting
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: true, data: { signedIn: false, places: [], showHolidays: true } })
  const [follows, u, feed] = await Promise.all([
    prisma.meetingCalendarFollow.findMany({ where: { userId: session.user.id }, include: { jurisdiction: true }, orderBy: { createdAt: 'asc' }, take: 60 }),
    prisma.user.findUnique({ where: { id: session.user.id }, select: PREFS }),
    prisma.meetingFeed.findUnique({ where: { userId: session.user.id }, select: { token: true } }),
  ])
  return NextResponse.json({
    success: true,
    data: {
      signedIn: true, showHolidays: u?.meetingsShowHolidays ?? true, hasFeed: !!feed,
      reminders: { today: u?.meetingRemindToday ?? true, day: u?.meetingRemindDay ?? true, week: u?.meetingRemindWeek ?? false, email: u?.meetingEmail ?? false },
      places: follows.map((f: { jurisdiction: never; remind: boolean }) => ({ ...placeBrief(f.jurisdiction), remind: f.remind })),
    },
  })
}

// PUT /api/meetings/me { showHolidays?, remindToday?, remindDay?, remindWeek?, email? }
export async function PUT(request: Request) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const b = await request.json().catch(() => ({}))
  const data: Record<string, boolean> = {}
  const map: Record<string, string> = { showHolidays: 'meetingsShowHolidays', remindToday: 'meetingRemindToday', remindDay: 'meetingRemindDay', remindWeek: 'meetingRemindWeek', email: 'meetingEmail' }
  for (const [k, col] of Object.entries(map)) if (typeof b[k] === 'boolean') data[col] = b[k]
  if (!Object.keys(data).length) return NextResponse.json({ success: false, error: 'Nothing to change.' }, { status: 400 })
  await prisma.user.update({ where: { id: session.user.id }, data })
  return NextResponse.json({ success: true })
}
