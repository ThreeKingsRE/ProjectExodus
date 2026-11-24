import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { parseNote } from '@/lib/meetings/input'

// GET /api/meetings/[id]/notes - members' summaries of a meeting (public read)
export async function GET(_r: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const notes = await prisma.meetingNote.findMany({ where: { meetingId: id }, orderBy: { createdAt: 'asc' }, take: 100, select: { id: true, content: true, createdAt: true, user: { select: { id: true, name: true } } } })
  return NextResponse.json({ success: true, data: notes })
}

// POST /api/meetings/[id]/notes { content } - add a summary or key decisions
export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in to add a note.' }, { status: 401 })
  const rl = await rateLimit(request, { id: `meetings-note-${session.user.id}`, limit: 30, windowSeconds: 3600 })
  if (!rl.success) return rateLimitResponse(rl.reset)
  const { id } = await params
  const content = parseNote((await request.json().catch(() => ({}))).content)
  if (!content) return NextResponse.json({ success: false, error: 'Write something first.' }, { status: 400 })
  if (!(await prisma.meeting.findUnique({ where: { id }, select: { id: true } }))) return NextResponse.json({ success: false, error: 'Meeting not found.' }, { status: 404 })
  const n = await prisma.meetingNote.create({ data: { meetingId: id, userId: session.user.id, content }, select: { id: true, content: true, createdAt: true, user: { select: { id: true, name: true } } } })
  return NextResponse.json({ success: true, data: n }, { status: 201 })
}
