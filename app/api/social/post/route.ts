import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { z } from 'zod'
import { incrementStockScore, STOCK_POINTS } from '@/lib/stockScore'
import { parseDiscussionExtras } from '@/lib/discussions/meetings'

// Schema for social post creation with proper validation
const mediaSchema = z.object({
  type: z.enum(['IMAGE', 'VIDEO', 'LINK']).optional(),
  url: z.string().url('Invalid media URL').max(2000, 'URL is too long'),
  caption: z.string().max(500, 'Caption is too long').optional()
})

const createPostSchema = z.object({
  content: z.string()
    .min(1, 'Content is required')
    .max(5000, 'Post content must be less than 5000 characters')
    .trim(),
  // Matches the PostVisibility enum (the old CONNECTIONS value made followers-only posts fail)
  visibility: z.enum(['PUBLIC', 'FOLLOWERS_ONLY', 'PRIVATE']).optional(),
  media: z.array(mediaSchema).max(10, 'Maximum 10 media items allowed').optional(),
  hashtags: z.array(z.string().max(50, 'Hashtag is too long')).max(30, 'Maximum 30 hashtags allowed').optional(),
  mentions: z.array(z.string().cuid('Invalid user ID')).max(50, 'Maximum 50 mentions allowed').optional(),
  // Discussions: a meeting card, a town and a category (checked by parseDiscussionExtras)
  place: z.string().max(80).nullish(),
  category: z.string().max(40).nullish(),
  meetingAt: z.string().max(40).nullish(),
  meetingEndsAt: z.string().max(40).nullish(),
  meetingTimezone: z.string().max(60).nullish(),
  meetingJoinUrl: z.string().max(1000).nullish(),
  agendaUrl: z.string().max(1000).nullish(),
  calendarUrl: z.string().max(1000).nullish(),
})

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 20 posts per minute
    const rateLimitResult = await rateLimit(request, {
      id: 'social-posts',
      limit: 20,
      windowSeconds: 60,
    })

    if (!rateLimitResult.success) {
      return rateLimitResponse(rateLimitResult.reset)
    }

    const session = await auth()

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()

    // Validate and sanitize input
    const validatedData = createPostSchema.parse(body)

    // Members agree to the posting rules once, before their first post
    const me = await prisma.user.findUnique({ where: { id: session.user.id }, select: { discussionRulesAcceptedAt: true } })
    if (!me?.discussionRulesAcceptedAt) {
      return NextResponse.json({ success: false, code: 'RULES', error: 'Please accept the posting rules first (open Discussions and tap New).' }, { status: 403 })
    }

    const extras = parseDiscussionExtras(validatedData as Record<string, unknown>)
    if (!extras.ok) {
      return NextResponse.json({ success: false, error: extras.error }, { status: 400 })
    }

    // Create the post
    const post = await prisma.socialPost.create({
      data: {
        ...extras.data,
        // Whoever starts a discussion follows it, so they hear about replies
        follows: { create: { userId: session.user.id } },
        content: validatedData.content,
        visibility: validatedData.visibility || 'PUBLIC',
        userId: session.user.id,
        hashtags: validatedData.hashtags || [],
        mentions: validatedData.mentions || [],
        media: validatedData.media && validatedData.media.length > 0 ? {
          create: validatedData.media.map((m, index) => ({
            type: m.type || 'IMAGE',
            url: m.url,
            caption: m.caption || null,
            order: index
          }))
        } : undefined
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
        media: {
          orderBy: { order: 'asc' }
        },
        _count: {
          select: {
            likes: true,
            comments: true
          }
        }
      }
    })

    // Award stock points for creating a social post
    incrementStockScore(session.user.id, STOCK_POINTS.SOCIAL_POST).catch(() => {})

    return NextResponse.json({
      success: true,
      data: post
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstIssue = error.issues[0]
      return NextResponse.json(
        {
          success: false,
          error: firstIssue?.message || 'Validation failed',
          field: firstIssue?.path?.[0] || null,
          details: error.issues
        },
        { status: 400 }
      )
    }

    console.error('Error creating post:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create post' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const postId = searchParams.get('id')

    if (!postId) {
      return NextResponse.json(
        { success: false, error: 'Post ID is required' },
        { status: 400 }
      )
    }

    // Check if user owns the post
    const post = await prisma.socialPost.findUnique({
      where: { id: postId },
      select: { userId: true }
    })

    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      )
    }

    if (post.userId !== session.user.id) {
      return NextResponse.json(
        { success: false, error: 'Forbidden' },
        { status: 403 }
      )
    }

    await prisma.socialPost.delete({
      where: { id: postId }
    })

    return NextResponse.json({
      success: true,
      message: 'Post deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete post' },
      { status: 500 }
    )
  }
}
