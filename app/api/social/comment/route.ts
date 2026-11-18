import { NextResponse } from 'next/server'
import { findVisiblePost } from '@/lib/social/postAccess-server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { postId, content, parentId } = body

    if (typeof postId !== 'string' || typeof content !== 'string' || content.trim().length === 0 || content.length > 5000) {
      return NextResponse.json(
        { success: false, error: 'Post ID and content are required' },
        { status: 400 }
      )
    }

    // Only people who can see a post can comment on it
    if (!(await findVisiblePost(postId, session.user.id))) {
      return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 })
    }
    if (parentId) {
      const parent = await prisma.socialComment.findUnique({ where: { id: String(parentId) }, select: { postId: true } })
      if (!parent || parent.postId !== postId) {
        return NextResponse.json({ success: false, error: 'Reply target not found' }, { status: 400 })
      }
    }

    const comment = await prisma.socialComment.create({
      data: {
        content: content.trim(),
        postId,
        userId: session.user.id,
        parentId: parentId || null
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
            headline: true
          }
        }
      }
    })

    return NextResponse.json({
      success: true,
      data: comment
    })
  } catch (error) {
    console.error('Error creating comment:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create comment' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const postId = searchParams.get('postId')

    if (!postId) {
      return NextResponse.json(
        { success: false, error: 'Post ID is required' },
        { status: 400 }
      )
    }

    const session = await auth()
    if (!(await findVisiblePost(postId, session?.user?.id ?? null))) {
      return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 })
    }

    const comments = await prisma.socialComment.findMany({
      where: {
        postId,
        parentId: null // Only get top-level comments
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
            headline: true
          }
        },
        children: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                image: true
              }
            }
          },
          orderBy: { createdAt: 'asc' }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({
      success: true,
      data: comments
    })
  } catch (error) {
    console.error('Error fetching comments:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch comments' },
      { status: 500 }
    )
  }
}
