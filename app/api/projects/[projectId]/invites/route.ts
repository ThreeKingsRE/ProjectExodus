import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { getAccess } from '@/lib/projects/access-server'
import { canInviteAs, isCollaborator, isManagerAccess } from '@/lib/projects/access'
import { createInvite, findMyInvite, InviteError } from '@/lib/projects/invites-server'

// GET - For owners/admins: pending invites and requests to collaborate.
// For everyone: their own pending invite and request, if any.
export async function GET(_request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
    const { projectId } = await params
    const access = await getAccess(projectId, session.user.id)
    if (!access) return NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 })

    const [mine, myRequest] = await Promise.all([
      isCollaborator(access) ? null : findMyInvite(projectId, session.user.id),
      prisma.projectJoinRequest.findFirst({
        where: { projectId, userId: session.user.id },
        orderBy: { createdAt: 'desc' },
        select: { id: true, status: true, createdAt: true },
      }),
    ])

    const manage = isManagerAccess(access)
    const [invites, requests] = manage
      ? await Promise.all([
          prisma.projectInvite.findMany({
            where: { projectId, status: 'PENDING' },
            select: { id: true, email: true, role: true, createdAt: true, invitedUser: { select: { id: true, name: true, image: true } }, invitedBy: { select: { name: true } } },
            orderBy: { createdAt: 'desc' },
          }),
          prisma.projectJoinRequest.findMany({
            where: { projectId, status: 'PENDING' },
            select: { id: true, message: true, createdAt: true, user: { select: { id: true, name: true, image: true, bio: true } } },
            orderBy: { createdAt: 'asc' },
          }),
        ])
      : [undefined, undefined]

    return NextResponse.json({
      success: true,
      data: {
        canManage: manage,
        canInviteAdmins: canInviteAs('ADMIN', access),
        isCollaborator: isCollaborator(access),
        mine,
        myRequest,
        invites,
        requests,
      },
    })
  } catch (error) {
    console.error('Error loading invites:', error)
    return NextResponse.json({ success: false, error: 'Failed to load invitations.' }, { status: 500 })
  }
}

// POST - Owners/admins invite someone by account or email
export async function POST(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
    const { projectId } = await params
    const access = await getAccess(projectId, session.user.id)
    if (!access) return NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 })

    const body = await request.json().catch(() => null)
    const role = typeof body?.role === 'string' ? body.role : 'CONTRIBUTOR'
    if (!canInviteAs(role, access)) {
      return NextResponse.json(
        { success: false, error: isManagerAccess(access) ? 'Only the owner can invite admins.' : 'Only the owner and admins can invite collaborators.' },
        { status: 403 },
      )
    }

    const { invite, emailed, invitedName } = await createInvite({
      projectId,
      invitedById: session.user.id,
      userId: typeof body?.userId === 'string' ? body.userId : null,
      email: typeof body?.email === 'string' ? body.email : null,
      role,
      message: body?.message,
    })
    return NextResponse.json({ success: true, data: { id: invite.id, emailed, invitedName } }, { status: 201 })
  } catch (error) {
    if (error instanceof InviteError) return NextResponse.json({ success: false, error: error.message }, { status: error.status })
    console.error('Error creating invite:', error)
    return NextResponse.json({ success: false, error: 'Failed to send the invitation.' }, { status: 500 })
  }
}
