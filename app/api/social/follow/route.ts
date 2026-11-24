import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { findVisiblePost } from '@/lib/social/postAccess-server'

// POST /api/social/follow { postId } toggles following a discussion (reply notifications + Following tab)
export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const { postId } = await request.json().catch(() => ({}))
  if (typeof postId !== 'string' || !(await findVisiblePost(postId, session.user.id))) {
    return NextResponse.json({ success: false, error: 'Discussion not found' }, { status: 404 })
  }
  const key = { postId_userId: { postId, userId: session.user.id } }
  const existing = await prisma.discussionFollow.findUnique({ where: key, select: { id: true } })
  if (existing) await prisma.discussionFollow.delete({ where: key })
  else await prisma.discussionFollow.create({ data: { postId, userId: session.user.id } })
  return NextResponse.json({ success: true, following: !existing })
}
