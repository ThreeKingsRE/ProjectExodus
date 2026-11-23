import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'

// DELETE /api/career/posts/[id]/vouches/[vouchId] - cancel a request or remove a vouch from my post
export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string; vouchId: string }> }) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const { id, vouchId } = await params
  const res = await prisma.careerVouch.deleteMany({ where: { id: vouchId, postId: id, post: { userId: session.user.id } } })
  if (!res.count) return NextResponse.json({ success: false, error: 'Not found.' }, { status: 404 })
  return NextResponse.json({ success: true })
}
