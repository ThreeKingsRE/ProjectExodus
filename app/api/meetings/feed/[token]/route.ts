import { NextRequest } from 'next/server'
import { prisma } from '@/lib/db'
import { rateLimit } from '@/lib/rate-limit'
import { siteUrl } from '@/lib/email/send'
import { buildMeetingFeed, listMeetings } from '@/lib/meetings/server'

export const maxDuration = 30

// GET /api/meetings/feed/<secret>.ics - a member's calendar, to subscribe to from a phone.
// The secret is the only credential: anyone with the link sees that member's meetings.
export async function GET(request: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const rl = await rateLimit(request, { id: 'meetings-feed', limit: 60, windowSeconds: 3600 })
  if (!rl.success) return new Response('Too many requests', { status: 429 })
  const token = (await params).token.replace(/\.ics$/i, '')
  const feed = /^[A-Za-z0-9_-]{20,80}$/.test(token) ? await prisma.meetingFeed.findUnique({ where: { token }, select: { userId: true, user: { select: { meetingRemindToday: true, meetingRemindDay: true, meetingRemindWeek: true } } } }) : null
  if (!feed) return new Response('This calendar link isn’t valid any more. Get a new one on the Meetings page.', { status: 404 })
  const follows: { jurisdictionId: string }[] = await prisma.meetingCalendarFollow.findMany({ where: { userId: feed.userId }, select: { jurisdictionId: true }, take: 60 })
  const meetings = await listMeetings(follows.map((f) => f.jurisdictionId), new Date(Date.now() - 14 * 86400000), new Date(Date.now() + 180 * 86400000), true)
  const ics = buildMeetingFeed('Project Exodus meetings', meetings, { week: feed.user.meetingRemindWeek, day: feed.user.meetingRemindDay, today: feed.user.meetingRemindToday }, siteUrl())
  return new Response(ics, { headers: { 'Content-Type': 'text/calendar; charset=utf-8', 'Cache-Control': 'private, max-age=600', 'X-Content-Type-Options': 'nosniff' } })
}
