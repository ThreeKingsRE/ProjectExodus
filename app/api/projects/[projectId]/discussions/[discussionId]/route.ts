import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { requireFollowerOrTeam } from '@/lib/projects/guard'
import { canSeeDiscussion, isCollaborator, isModerator } from '@/lib/projects/access'

// GET - Get discussion with replies
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ projectId: string; discussionId: string }> }
) {
  try {
    const { projectId, discussionId } = await params
    const gate = await requireFollowerOrTeam(projectId)
    if (gate.error) return gate.error

    const discussion = await prisma.projectDiscussion.findUnique({
      where: { id: discussionId },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            
            image: true,
            bio: true,
          },
        },
        replies: {
          include: {
            author: {
              select: {
                id: true,
                name: true,
                
                image: true,
              },
            },
          },
          orderBy: { createdAt: 'asc' },
        },
        _count: {
          select: {
            replies: true,
          },
        },
      },
    })

    if (!discussion || discussion.projectId !== projectId || !canSeeDiscussion(discussion.visibility, gate.access)) {
      return NextResponse.json(
        { success: false, error: 'Discussion not found' },
        { status: 404 }
      )
    }

    // Increment view count
    await prisma.projectDiscussion.update({
      where: { id: discussionId },
      data: { viewCount: { increment: 1 } },
    })

    return NextResponse.json({
      success: true,
      data: discussion,
    })
  } catch (error) {
    console.error('Error fetching discussion:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch discussion' },
      { status: 500 }
    )
  }
}

// POST - Reply to discussion
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ projectId: string; discussionId: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { projectId, discussionId } = await params
    const gate = await requireFollowerOrTeam(projectId)
    if (gate.error) return gate.error
    const body = await request.json()
    const { content } = body

    if (typeof content !== 'string' || !content.trim() || content.length > 20000) {
      return NextResponse.json(
        { success: false, error: 'Content is required' },
        { status: 400 }
      )
    }

    // Verify discussion exists and this person can take part in it
    const discussion = await prisma.projectDiscussion.findUnique({
      where: { id: discussionId },
    })

    if (!discussion || discussion.projectId !== projectId || !canSeeDiscussion(discussion.visibility, gate.access)) {
      return NextResponse.json(
        { success: false, error: 'Discussion not found' },
        { status: 404 }
      )
    }

    // Check if locked
    if (discussion.isLocked) {
      return NextResponse.json(
        { success: false, error: 'This discussion is locked' },
        { status: 403 }
      )
    }

    const reply = await prisma.projectDiscussionReply.create({
      data: {
        discussionId,
        authorId: session.user.id,
        content: content.trim(),
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            
            image: true,
          },
        },
      },
    })

    // Award contribution points
    const membership = await prisma.projectMember.findUnique({
      where: {
        projectId_userId: {
          projectId,
          userId: session.user.id,
        },
      },
    })

    if (membership && isCollaborator(gate.access)) {
      await prisma.projectContribution.create({
        data: {
          projectId,
          userId: session.user.id,
          type: 'REPLY',
          description: 'Replied to discussion',
          points: 2,
          referenceId: reply.id,
        },
      })

      await prisma.projectMember.update({
        where: { id: membership.id },
        data: {
          contributionScore: { increment: 2 },
        },
      })
    }

    return NextResponse.json({
      success: true,
      data: reply,
    })
  } catch (error) {
    console.error('Error creating reply:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create reply' },
      { status: 500 }
    )
  }
}

// PUT - Update discussion (author/admin)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ projectId: string; discussionId: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { projectId, discussionId } = await params
    const body = await request.json()
    const { title, content, isPinned, isLocked } = body
    const gate = await requireFollowerOrTeam(projectId)
    if (gate.error) return gate.error

    const discussion = await prisma.projectDiscussion.findUnique({
      where: { id: discussionId },
    })

    if (!discussion || discussion.projectId !== projectId) {
      return NextResponse.json(
        { success: false, error: 'Discussion not found' },
        { status: 404 }
      )
    }

    const isAuthor = discussion.authorId === session.user.id

    // Check if admin
    const membership = await prisma.projectMember.findUnique({
      where: {
        projectId_userId: {
          projectId,
          userId: session.user.id,
        },
      },
    })

    const project = await prisma.project.findUnique({
      where: { id: projectId },
      select: { creatorId: true },
    })

    const isAdmin = project?.creatorId === session.user.id || isModerator(gate.access)

    if (!isAuthor && !isAdmin) {
      return NextResponse.json(
        { success: false, error: 'Only the author or admins can edit this' },
        { status: 403 }
      )
    }

    const updateData: any = {}

    // Author can edit content
    if (isAuthor || isAdmin) {
      if (title) updateData.title = title.trim()
      if (typeof content === 'string' && content.trim()) updateData.content = content.trim()
    }

    // Admin can pin/lock, and move a discussion between public and team
    if (isAdmin) {
      if (typeof isPinned === 'boolean') updateData.isPinned = isPinned
      if (typeof isLocked === 'boolean') updateData.isLocked = isLocked
      if (body.visibility === 'PUBLIC' || body.visibility === 'TEAM') updateData.visibility = body.visibility
    }

    const updatedDiscussion = await prisma.projectDiscussion.update({
      where: { id: discussionId },
      data: updateData,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            
            image: true,
          },
        },
      },
    })

    return NextResponse.json({
      success: true,
      data: updatedDiscussion,
    })
  } catch (error) {
    console.error('Error updating discussion:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update discussion' },
      { status: 500 }
    )
  }
}

// DELETE - Delete discussion
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ projectId: string; discussionId: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { projectId, discussionId } = await params
    const gate = await requireFollowerOrTeam(projectId)
    if (gate.error) return gate.error

    const discussion = await prisma.projectDiscussion.findUnique({
      where: { id: discussionId },
    })

    if (!discussion || discussion.projectId !== projectId) {
      return NextResponse.json(
        { success: false, error: 'Discussion not found' },
        { status: 404 }
      )
    }

    const isAuthor = discussion.authorId === session.user.id

    const membership = await prisma.projectMember.findUnique({
      where: {
        projectId_userId: {
          projectId,
          userId: session.user.id,
        },
      },
    })

    const project = await prisma.project.findUnique({
      where: { id: projectId },
      select: { creatorId: true },
    })

    const isAdmin = project?.creatorId === session.user.id || isModerator(gate.access)

    if (!isAuthor && !isAdmin) {
      return NextResponse.json(
        { success: false, error: 'Only the author or admins can delete this' },
        { status: 403 }
      )
    }

    // Delete replies first
    await prisma.$transaction([
      prisma.projectDiscussionReply.deleteMany({
        where: { discussionId },
      }),
      prisma.projectContribution.deleteMany({
        where: { referenceId: discussionId, type: 'DISCUSSION' },
      }),
      prisma.projectDiscussion.delete({
        where: { id: discussionId },
      }),
    ])

    return NextResponse.json({
      success: true,
      message: 'Discussion deleted',
    })
  } catch (error) {
    console.error('Error deleting discussion:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete discussion' },
      { status: 500 }
    )
  }
}
