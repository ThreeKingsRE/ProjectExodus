import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { getAccess } from '@/lib/projects/access-server'
import { isCollaborator, isManagerAccess, isMemberOrFollower } from '@/lib/projects/access'
import { parseUpdateInput } from '@/lib/social/updates'
import { updateInclude } from '@/lib/social/updates-server'

// An initiative's updates feed, newsletter style. Public updates also appear in
// the community feed and Current Events; followers-only and team-only updates
// stay with the initiative.

const PAGE = 10

// GET ?cursor=<postId>
export async function GET(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
    const { projectId } = await params
    const access = await getAccess(projectId, session.user.id)
    if (!access) return NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 })
    const member = isMemberOrFollower(access)
    if (access.visibility !== 'PUBLIC' && !member) return NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 })

    const team = isCollaborator(access)
    const audiences = team ? ['PUBLIC', 'FOLLOWERS_ONLY', 'PRIVATE'] : member ? ['PUBLIC', 'FOLLOWERS_ONLY'] : ['PUBLIC']
    const cursor = request.nextUrl.searchParams.get('cursor')

    const posts = await prisma.socialPost.findMany({
      where: { projectId, visibility: { in: audiences } },
      include: updateInclude(session.user.id),
      orderBy: [{ isPinned: 'desc' }, { createdAt: 'desc' }],
      take: PAGE + 1,
      ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
    })
    const hasMore = posts.length > PAGE
    const page = posts.slice(0, PAGE).map((p: any) => ({
      ...p,
      isLiked: p.likes.length > 0,
      canEdit: p.userId === session.user!.id,
      canModerate: isManagerAccess(access),
    }))

    return NextResponse.json({
      success: true,
      data: {
        posts: page,
        nextCursor: hasMore ? page[page.length - 1].id : null,
        canPost: team,
        canModerate: isManagerAccess(access),
      },
    })
  } catch (error) {
    console.error('Error loading updates:', error)
    return NextResponse.json({ success: false, error: 'Failed to load updates.' }, { status: 500 })
  }
}

// POST - Collaborators post an update
export async function POST(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
    const { projectId } = await params
    const access = await getAccess(projectId, session.user.id)
    if (!access) return NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 })
    if (!isCollaborator(access)) return NextResponse.json({ success: false, error: 'Only the initiative’s team can post updates.' }, { status: 403 })

    const parsed = parseUpdateInput(await request.json().catch(() => null), false)
    if (!parsed.ok) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 })
    const input = parsed.data

    const post = await prisma.socialPost.create({
      data: {
        projectId,
        userId: session.user.id,
        title: input.title ?? null,
        content: input.content!,
        visibility: input.visibility!,
        hashtags: input.hashtags ?? [],
        mentions: [],
        media: input.images?.length
          ? { create: input.images.map((url, order) => ({ type: 'IMAGE', url, order })) }
          : undefined,
      },
      include: updateInclude(session.user.id),
    })
    return NextResponse.json({ success: true, data: { ...post, isLiked: false, canEdit: true, canModerate: isManagerAccess(access) } }, { status: 201 })
  } catch (error) {
    console.error('Error posting update:', error)
    return NextResponse.json({ success: false, error: 'Failed to post the update.' }, { status: 500 })
  }
}
