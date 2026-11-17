import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { getAccess } from '@/lib/projects/access-server'
import { isManagerAccess, roleAfterAccepting } from '@/lib/projects/access'
import type { MemberRole } from '@/lib/projects/files'

// POST - { action: 'approve' | 'decline' } by owners/admins, or { action: 'cancel' } by the requester
export async function POST(request: NextRequest, { params }: { params: Promise<{ projectId: string; requestId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
    const { projectId, requestId } = await params
    const body = await request.json().catch(() => null)
    const action = body?.action

    const joinRequest = await prisma.projectJoinRequest.findFirst({ where: { id: requestId, projectId } })
    if (!joinRequest || joinRequest.status !== 'PENDING') {
      return NextResponse.json({ success: false, error: 'This request is no longer open.' }, { status: 404 })
    }

    if (action === 'cancel') {
      if (joinRequest.userId !== session.user.id) return NextResponse.json({ success: false, error: 'Only the person who asked can cancel.' }, { status: 403 })
      await prisma.projectJoinRequest.update({ where: { id: requestId }, data: { status: 'CANCELLED', decidedAt: new Date() } })
      return NextResponse.json({ success: true })
    }

    if (action !== 'approve' && action !== 'decline') return NextResponse.json({ success: false, error: 'Invalid action.' }, { status: 400 })
    const access = await getAccess(projectId, session.user.id)
    if (!access || !isManagerAccess(access)) {
      return NextResponse.json({ success: false, error: 'Only the owner and admins can answer requests.' }, { status: 403 })
    }

    if (action === 'decline') {
      await prisma.projectJoinRequest.update({ where: { id: requestId }, data: { status: 'DECLINED', decidedById: session.user.id, decidedAt: new Date() } })
      return NextResponse.json({ success: true })
    }

    const key = { projectId_userId: { projectId, userId: joinRequest.userId } }
    await prisma.$transaction(async (tx: any) => {
      const current = await tx.projectMember.findUnique({ where: key, select: { role: true } })
      const role = roleAfterAccepting((current?.role as MemberRole | undefined) ?? null, 'CONTRIBUTOR')
      await tx.projectMember.upsert({
        where: key,
        create: { projectId, userId: joinRequest.userId, role, notifyUpdates: true, joinedAt: new Date() },
        update: { role },
      })
      await tx.projectJoinRequest.update({ where: { id: requestId }, data: { status: 'APPROVED', decidedById: session.user!.id!, decidedAt: new Date() } })
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error answering join request:', error)
    return NextResponse.json({ success: false, error: 'Failed to update the request.' }, { status: 500 })
  }
}
