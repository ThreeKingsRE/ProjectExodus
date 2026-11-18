import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { getAccess } from '@/lib/projects/access-server'
import { isManagerAccess, normalizeEmail, roleAfterAccepting } from '@/lib/projects/access'
import type { MemberRole } from '@/lib/projects/files'

// POST - { action: 'accept' | 'decline' } by the invited person, or { action: 'revoke' } by owners/admins
export async function POST(request: NextRequest, { params }: { params: Promise<{ projectId: string; inviteId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
    const { projectId, inviteId } = await params
    const body = await request.json().catch(() => null)
    const action = body?.action

    const invite = await prisma.projectInvite.findFirst({ where: { id: inviteId, projectId } })
    if (!invite || invite.status !== 'PENDING') {
      return NextResponse.json({ success: false, error: 'This invitation is no longer open.' }, { status: 404 })
    }

    if (action === 'revoke') {
      const access = await getAccess(projectId, session.user.id)
      if (!access || !isManagerAccess(access)) return NextResponse.json({ success: false, error: 'Only the owner and admins can cancel invitations.' }, { status: 403 })
      await prisma.projectInvite.update({ where: { id: inviteId }, data: { status: 'REVOKED', respondedAt: new Date() } })
      return NextResponse.json({ success: true })
    }

    if (action !== 'accept' && action !== 'decline') return NextResponse.json({ success: false, error: 'Invalid action.' }, { status: 400 })

    // Only the person invited can answer, matched by account or by email
    const me = await prisma.user.findUnique({ where: { id: session.user.id }, select: { email: true } })
    const isInvitee = invite.invitedUserId === session.user.id || (!!invite.email && invite.email === normalizeEmail(me?.email))
    if (!isInvitee) return NextResponse.json({ success: false, error: 'This invitation is for someone else.' }, { status: 403 })

    if (action === 'decline') {
      await prisma.projectInvite.update({ where: { id: inviteId }, data: { status: 'DECLINED', respondedAt: new Date(), invitedUserId: session.user.id } })
      return NextResponse.json({ success: true })
    }

    const key = { projectId_userId: { projectId, userId: session.user.id } }
    const member = await prisma.$transaction(async (tx: any) => {
      const current = await tx.projectMember.findUnique({ where: key, select: { role: true } })
      const role = roleAfterAccepting((current?.role as MemberRole | undefined) ?? null, invite.role as MemberRole)
      const saved = await tx.projectMember.upsert({
        where: key,
        create: { projectId, userId: session.user!.id!, role, notifyUpdates: true, joinedAt: new Date() },
        update: { role },
        select: { id: true, role: true },
      })
      await tx.projectInvite.update({ where: { id: inviteId }, data: { status: 'ACCEPTED', respondedAt: new Date(), invitedUserId: session.user!.id! } })
      // An open request to collaborate is settled by the invitation
      await tx.projectJoinRequest.updateMany({
        where: { projectId, userId: session.user!.id!, status: 'PENDING' },
        data: { status: 'APPROVED', decidedById: invite.invitedById, decidedAt: new Date() },
      })
      return saved
    })
    return NextResponse.json({ success: true, data: member })
  } catch (error) {
    console.error('Error answering invite:', error)
    return NextResponse.json({ success: false, error: 'Failed to update the invitation.' }, { status: 500 })
  }
}
