import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { auth } from '@/auth'
import { pusherServer } from '@/lib/pusher'

// Authors may correct their own messages while they remain project members.
export async function PATCH(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Please sign in.' }, { status: 401 })
    const { projectId } = await params
    const { messageId, content } = await request.json()
    if (typeof messageId !== 'string' || typeof content !== 'string' || !content.trim() || content.length > 10000) {
      return NextResponse.json({ success: false, error: 'Enter a message of 1 to 10,000 characters.' }, { status: 400 })
    }
    const [message, membership] = await Promise.all([
      prisma.projectMessage.findUnique({ where: { id: messageId } }),
      prisma.projectMember.findUnique({ where: { projectId_userId: { projectId, userId: session.user.id } } }),
    ])
    if (!message || message.projectId !== projectId) return NextResponse.json({ success: false, error: 'Message not found.' }, { status: 404 })
    if (!membership || message.userId !== session.user.id) return NextResponse.json({ success: false, error: 'You can only edit your own messages as a project member.' }, { status: 403 })
    const updated = await prisma.projectMessage.update({ where: { id: messageId }, data: { content: content.trim() } })
    return NextResponse.json({ success: true, data: updated })
  } catch (error) {
    console.error('Error updating project message:', error)
    return NextResponse.json({ success: false, error: 'Could not save your message.' }, { status: 500 })
  }
}

// GET /api/projects/[projectId]/messages - Get all messages for a project
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> }
) {
  try {
    const { projectId } = await params

    const messages = await prisma.projectMessage.findMany({
      where: { projectId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
      orderBy: { createdAt: 'asc' },
    })

    return NextResponse.json({
      success: true,
      data: messages,
    })
  } catch (error) {
    console.error('Error fetching project messages:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch messages' },
      { status: 500 }
    )
  }
}

// POST /api/projects/[projectId]/messages - Post a new message
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized - Please sign in to post messages' },
        { status: 401 }
      )
    }

    const { projectId } = await params
    const body = await request.json()
    const { content } = body

    if (!content || content.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Message content is required' },
        { status: 400 }
      )
    }

    // Check if user is a member of the project
    const membership = await prisma.projectMember.findUnique({
      where: {
        projectId_userId: {
          projectId,
          userId: session.user.id,
        },
      },
    })

    if (!membership) {
      return NextResponse.json(
        { success: false, error: 'You must be a project member to post messages' },
        { status: 403 }
      )
    }

    const message = await prisma.projectMessage.create({
      data: {
        content: content.trim(),
        projectId,
        userId: session.user.id,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    })

    // Broadcast real-time update via Pusher
    try {
      await pusherServer.trigger(`project-${projectId}`, 'message-created', {
        message,
      })
    } catch (pusherError) {
      console.error('Error broadcasting message via Pusher:', pusherError)
      // Don't fail the request if Pusher fails
    }

    return NextResponse.json({
      success: true,
      data: message,
    })
  } catch (error) {
    console.error('Error posting project message:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to post message' },
      { status: 500 }
    )
  }
}
