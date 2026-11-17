import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { auth } from '@/auth'
import { participate, ParticipationError } from '@/lib/projects/participation'

// POST /api/projects/join - explicit follow or collaboration
export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin')
  if (origin && origin !== new URL(request.url).origin) return NextResponse.json({ success: false, error: 'Invalid request origin.' }, { status: 403 })
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Please sign in.' }, { status: 401 })
  try {
    const body = await request.json()
    const intent = body.intent || 'follow'
    if (typeof body.projectId !== 'string' || !body.projectId || !['follow', 'collaborate'].includes(intent)) return NextResponse.json({ success: false, error: 'A valid initiative and participation choice are required.' }, { status: 400 })
    const result = await participate(prisma, session.user.id, body.projectId, intent, body.message)
    return NextResponse.json({ success: true, data: result.member, requested: result.requested, approvalRequired: result.approvalRequired })
  } catch (error) {
    if (error instanceof ParticipationError) return NextResponse.json({ success: false, error: error.message }, { status: error.status })
    if (error instanceof SyntaxError) return NextResponse.json({ success: false, error: 'Invalid JSON.' }, { status: 400 })
    console.error('Initiative participation failed:', error)
    return NextResponse.json({ success: false, error: 'Could not save participation. Please try again.' }, { status: 500 })
  }
}

// DELETE /api/projects/join - Leave a project
export async function DELETE(request: NextRequest) {
  try {
    // Check authentication
    const session = await auth()
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const projectId = searchParams.get('projectId')

    if (!projectId) {
      return NextResponse.json(
        { success: false, error: 'Missing required parameter: projectId' },
        { status: 400 }
      )
    }

    // Check if user is the project creator (owner)
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      select: { creatorId: true },
    })

    if (!project) {
      return NextResponse.json(
        { success: false, error: 'Project not found' },
        { status: 404 }
      )
    }

    // Don't allow creator (owner) to leave
    if (project.creatorId === session.user.id) {
      return NextResponse.json(
        { success: false, error: 'Project creators cannot leave. Transfer ownership or delete the project.' },
        { status: 400 }
      )
    }

    // Check if member exists
    const member = await prisma.projectMember.findUnique({
      where: {
        projectId_userId: {
          projectId,
          userId: session.user.id,
        },
      },
    })

    if (!member) {
      return NextResponse.json(
        { success: false, error: 'You are not a member of this project' },
        { status: 400 }
      )
    }

    // Remove membership
    await prisma.projectMember.delete({
      where: {
        projectId_userId: {
          projectId,
          userId: session.user.id,
        },
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Successfully left the project',
    })
  } catch (error) {
    console.error('Error leaving project:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to leave project' },
      { status: 500 }
    )
  }
}
