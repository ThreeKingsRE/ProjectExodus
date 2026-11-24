import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { parseLinks } from '@/lib/meetings/input'
import { MEETING_SELECT, shapeMeeting } from '@/lib/meetings/server'

// PATCH /api/meetings/[id] { agendaUrl?, minutesUrl?, recordingUrl?, joinUrl? }
// Any member can FILL IN a missing link (the minutes or recording after the meeting).
// Existing links are never overwritten, so official data can't be replaced.
export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in to add links.' }, { status: 401 })
  const rl = await rateLimit(request, { id: `meetings-links-${session.user.id}`, limit: 60, windowSeconds: 3600 })
  if (!rl.success) return rateLimitResponse(rl.reset)
  const { id } = await params
  const cur = await prisma.meeting.findUnique({ where: { id }, select: { agendaUrl: true, minutesUrl: true, recordingUrl: true, joinUrl: true } })
  if (!cur) return NextResponse.json({ success: false, error: 'Meeting not found.' }, { status: 404 })
  const parsed = parseLinks(await request.json().catch(() => ({})))
  if (!parsed.ok) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 })
  const data = Object.fromEntries(Object.entries(parsed.data).filter(([k]) => !(cur as Record<string, string | null>)[k]))
  if (!Object.keys(data).length) return NextResponse.json({ success: false, error: 'Nothing new to add. Existing links can’t be replaced.' }, { status: 409 })
  const m = await prisma.meeting.update({ where: { id }, data, select: MEETING_SELECT })
  return NextResponse.json({ success: true, data: shapeMeeting(m, true) })
}
