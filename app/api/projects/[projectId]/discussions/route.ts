import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { requireFollowerOrTeam } from '@/lib/projects/guard'
import { isCollaborator } from '@/lib/projects/access'

// GET - Get project discussions
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> }
) {
  try {
    const { projectId } = await params
    const gate = await requireFollowerOrTeam(projectId)
    if (gate.error) return gate.error
    const team = isCollaborator(gate.access)
    const { searchParams } = new URL(request.url)
    const page = Math.max(1, parseInt(searchParams.get('page') || '1') || 1)
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') || '20') || 20))
    const search = searchParams.get('search')
    const requested = searchParams.get('visibility')
    const skip = (page - 1) * limit

    // Followers only ever see the public discussion
    const whereClause: any = { projectId }
    if (!team) whereClause.visibility = 'PUBLIC'
    else if (requested === 'PUBLIC' || requested === 'TEAM') whereClause.visibility = requested

    if (search) {
      whereClause.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
      ]
    }


    const [discussions, total] = await Promise.all([
      prisma.projectDiscussion.findMany({
        where: whereClause,
        include: {
          author: {
            select: {
              id: true,
              name: true,
              
              image: true,
            },
          },
          _count: {
            select: {
              replies: true,
            },
          },
        },
        orderBy: [
          { isPinned: 'desc' },
          { createdAt: 'desc' },
        ],
        skip,
        take: limit,
      }),
      prisma.projectDiscussion.count({ where: whereClause }),
    ])

    return NextResponse.json({
      success: true,
      data: {
        discussions,
        canSeeTeam: team,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      },
    })
  } catch (error) {
    console.error('Error fetching discussions:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch discussions' },
      { status: 500 }
    )
  }
}

// POST - Create discussion (Contributors only)
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { projectId } = await params
    const gate = await requireFollowerOrTeam(projectId)
    if (gate.error) return gate.error
    const body = await request.json()
    const { title, content } = body
    const team = isCollaborator(gate.access)
    // Followers post in the public discussion; collaborators choose.
    const visibility = !team ? 'PUBLIC' : body.visibility === 'PUBLIC' ? 'PUBLIC' : 'TEAM'

    if (typeof title !== 'string' || !title.trim() || title.length > 200) {
      return NextResponse.json(
        { success: false, error: 'Title is required (up to 200 characters)' },
        { status: 400 }
      )
    }
    if (typeof content !== 'string' || !content.trim() || content.length > 20000) {
      return NextResponse.json(
        { success: false, error: 'Write something to start the discussion' },
        { status: 400 }
      )
    }

    const membership = await prisma.projectMember.findUnique({
      where: { projectId_userId: { projectId, userId: session.user.id } },
    })

    const discussion = await prisma.projectDiscussion.create({
      data: {
        projectId,
        authorId: session.user.id,
        title: title.trim(),
        content: content.trim(),
        visibility,
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

    // Award contribution points to the team
    if (membership && team) {
      await prisma.projectContribution.create({
        data: {
          projectId,
          userId: session.user.id,
          type: 'DISCUSSION',
          description: `Started discussion: ${title.substring(0, 50)}`,
          points: 5,
          referenceId: discussion.id,
        },
      })

      await prisma.projectMember.update({
        where: { id: membership.id },
        data: {
          contributionScore: { increment: 5 },
        },
      })
    }

    return NextResponse.json({
      success: true,
      data: discussion,
    })
  } catch (error) {
    console.error('Error creating discussion:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create discussion' },
      { status: 500 }
    )
  }
}
