import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { findVisiblePost } from '@/lib/social/postAccess-server'
import { buildIcs } from '@/lib/calendar/ics'
import { siteUrl } from '@/lib/email/send'

// GET /api/social/post/[id]/ics: "Add to my calendar" for a meeting. Members only, since
// the file carries the join link.
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const session = await auth()
  if (!session?.user?.id) return new Response('Sign in to add this meeting to your calendar.', { status: 401 })
  if (!(await findVisiblePost(id, session.user.id))) return new Response('Not found', { status: 404 })
  const p = await prisma.socialPost.findUnique({
    where: { id },
    select: { id: true, title: true, content: true, meetingAt: true, meetingEndsAt: true, meetingJoinUrl: true, agendaUrl: true, place: true, updatedAt: true },
  })
  if (!p?.meetingAt) return new Response('This discussion has no meeting.', { status: 404 })
  const title = (p.title || p.content).replace(/\s+/g, ' ').slice(0, 100)
  const url = `${siteUrl()}/community/discussions?post=${p.id}`
  const ics = buildIcs('Project Exodus meeting', [{
    uid: `discussion-${p.id}@projxodus.com`, title,
    description: [p.meetingJoinUrl && `Join: ${p.meetingJoinUrl}`, p.agendaUrl && `Agenda: ${p.agendaUrl}`, `Discussion: ${url}`].filter(Boolean).join('\n'),
    location: p.meetingJoinUrl ? 'Online' : p.place ?? undefined,
    start: p.meetingAt, end: p.meetingEndsAt, allDay: false, updatedAt: p.updatedAt, url,
  }])
  return new Response(ics, {
    headers: { 'Content-Type': 'text/calendar; charset=utf-8', 'Content-Disposition': 'attachment; filename="meeting.ics"', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
  })
}
