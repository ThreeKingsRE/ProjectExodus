import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { getDocumentName } from '@/lib/collaboration'
import { signCollabToken, COLLAB_TOKEN_TTL_SECONDS } from '@/lib/collab-token'

/**
 * GET /api/documents/[documentId]/collab-token
 *
 * Issues a short-lived signed token that the PartyKit server requires before
 * it will open a real-time collaboration socket for this document. View
 * permission is required to connect; edit permission controls whether the
 * socket may write. Mirrors the checks in ../route.ts (GET and PATCH).
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ documentId: string }> }
) {
  const secret = process.env.PARTYKIT_SECRET
  if (!secret) {
    return NextResponse.json(
      { success: false, error: 'Real-time collaboration is not configured' },
      { status: 503 }
    )
  }

  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }
  const userId = session.user.id

  const { documentId } = await params

  const document = await prisma.document.findUnique({
    where: { id: documentId },
    select: {
      creatorId: true,
      isPublic: true,
      status: true,
      project: {
        select: {
          members: { where: { userId }, select: { role: true } },
        },
      },
      collaborators: {
        where: { userId },
        select: { permission: true },
      },
    },
  })

  if (!document) {
    return NextResponse.json({ success: false, error: 'Document not found' }, { status: 404 })
  }

  const isCreator = document.creatorId === userId
  const isMember = document.project.members.length > 0
  const collaborator = document.collaborators[0]

  const canEdit =
    isCreator ||
    isMember ||
    collaborator?.permission === 'EDIT' ||
    collaborator?.permission === 'ADMIN'

  const canView =
    canEdit ||
    !!collaborator ||
    (document.isPublic && document.status === 'PUBLISHED')

  if (!canView) {
    return NextResponse.json(
      { success: false, error: 'You do not have permission to view this document' },
      { status: 403 }
    )
  }

  const token = await signCollabToken(
    {
      sub: userId,
      name: session.user.name || 'Anonymous',
      room: getDocumentName('document', documentId),
      canEdit,
    },
    secret
  )

  return NextResponse.json(
    { success: true, token, canEdit, expiresIn: COLLAB_TOKEN_TTL_SECONDS },
    { headers: { 'Cache-Control': 'no-store' } }
  )
}
