import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'

// POST /api/meetings/follow { slug, follow: boolean } - add or remove a place on my calendar
export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in to build your own calendar.' }, { status: 401 })
  const b = await request.json().catch(() => ({}))
  const j = typeof b.slug === 'string' ? await prisma.jurisdiction.findUnique({ where: { slug: b.slug }, select: { id: true } }) : null
  if (!j) return NextResponse.json({ success: false, error: 'Place not found.' }, { status: 404 })
  const key = { userId_jurisdictionId: { userId: session.user.id, jurisdictionId: j.id } }
  if (b.follow === false) await prisma.meetingCalendarFollow.deleteMany({ where: { userId: session.user.id, jurisdictionId: j.id } })
  else {
    if ((await prisma.meetingCalendarFollow.count({ where: { userId: session.user.id } })) >= 60) return NextResponse.json({ success: false, error: 'Your calendar can hold up to 60 places.' }, { status: 400 })
    await prisma.meetingCalendarFollow.upsert({ where: key, create: { userId: session.user.id, jurisdictionId: j.id }, update: {} })
  }
  return NextResponse.json({ success: true, following: b.follow !== false })
}

// PATCH /api/meetings/follow { slug, remind: boolean } - turn reminders on or off for a place on my calendar
export async function PATCH(request: Request) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const b = await request.json().catch(() => ({}))
  const j = typeof b.slug === 'string' ? await prisma.jurisdiction.findUnique({ where: { slug: b.slug }, select: { id: true } }) : null
  if (!j || typeof b.remind !== 'boolean') return NextResponse.json({ success: false, error: 'Place not found.' }, { status: 404 })
  const r = await prisma.meetingCalendarFollow.updateMany({ where: { userId: session.user.id, jurisdictionId: j.id }, data: { remind: b.remind } })
  if (!r.count) return NextResponse.json({ success: false, error: 'Add this place to your calendar first.' }, { status: 400 })
  return NextResponse.json({ success: true, remind: b.remind })
}
