import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'

// DELETE /api/career/tagged/[postId] - remove yourself from a post you were tagged in
export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ postId: string }> }) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const { postId } = await params
  await prisma.careerPostTag.deleteMany({ where: { postId, userId: session.user.id } })
  return NextResponse.json({ success: true })
}
