import { NextResponse } from 'next/server'
import { PUBLIC_POSTS_WHERE } from '@/lib/social/postAccess'
import { auth } from '@/auth'
import { shapeMeeting } from '@/lib/discussions/meetings'
import { prisma } from '@/lib/db'

export async function GET(request: Request) {
  try {
    const session = await auth()
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const skip = (page - 1) * limit
    // Discussions tabs and filters
    const tab = searchParams.get('tab') // following | saved | meetings | past
    const town = (searchParams.get('town') || '').trim().slice(0, 80)
    const category = (searchParams.get('category') || '').trim().slice(0, 40)
    const q = (searchParams.get('q') || '').trim().slice(0, 100)

    // Get posts from followed users + public posts
    // Public posts, and public updates from public initiatives
    let whereClause: any = { ...PUBLIC_POSTS_WHERE }

    if (session?.user?.id) {
      // Get user's following list
      const following = await prisma.userFollow.findMany({
        where: { followerId: session.user.id },
        select: { followingId: true }
      })

      const followingIds = following.map((f: any) => f.followingId)

      // Initiatives the user follows or works on
      const memberships = await prisma.projectMember.findMany({
        where: { userId: session.user.id },
        select: { projectId: true, role: true },
      })
      const followedProjectIds = memberships.map((m: any) => m.projectId)
      const teamProjectIds = memberships.filter((m: any) => m.role !== 'VIEWER').map((m: any) => m.projectId)

      // Include posts from followed users or public posts
      whereClause = {
        OR: [
          { ...PUBLIC_POSTS_WHERE },
          {
            AND: [
              { userId: { in: followingIds } },
              { visibility: 'FOLLOWERS_ONLY' },
              { projectId: null }
            ]
          },
          // Updates shared with an initiative's followers
          { projectId: { in: followedProjectIds }, visibility: { in: ['PUBLIC', 'FOLLOWERS_ONLY'] } },
          { projectId: { in: teamProjectIds } },
          { userId: session.user.id } // User's own posts
        ]
      }
    }

    // Narrow to what this tab / filter asks for (still inside what the viewer may see)
    const extra: any[] = []
    const me = session?.user?.id
    if (tab === 'following' && me) extra.push({ follows: { some: { userId: me } } })
    if (tab === 'saved' && me) extra.push({ saves: { some: { userId: me } } })
    if (tab === 'meetings') extra.push({ meetingAt: { gte: new Date(Date.now() - 2 * 3600000) } })
    if (tab === 'past') extra.push({ meetingAt: { lt: new Date(Date.now() - 2 * 3600000) } })
    if (town) extra.push({ place: { equals: town, mode: 'insensitive' } })
    if (category) extra.push({ category })
    if (q) extra.push({ OR: [{ content: { contains: q, mode: 'insensitive' } }, { title: { contains: q, mode: 'insensitive' } }, { user: { name: { contains: q, mode: 'insensitive' } } }] })
    if (extra.length) whereClause = { AND: [whereClause, ...extra] }
    const upcomingFirst = tab === 'meetings'

    const posts = await prisma.socialPost.findMany({
      where: whereClause,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
            headline: true,
            expertise: true
          }
        },
        media: {
          orderBy: { order: 'asc' }
        },
        project: { select: { id: true, name: true, slug: true } },
        comments: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                image: true
              }
            }
          },
          orderBy: { createdAt: 'desc' },
          take: 3
        },
        likes: session?.user?.id ? {
          where: { userId: session.user.id }
        } : false,
        follows: me ? { where: { userId: me }, select: { id: true } } : false,
        saves: me ? { where: { userId: me }, select: { id: true } } : false,
        _count: {
          select: {
            likes: true,
            comments: true,
            follows: true
          }
        }
      },
      orderBy: upcomingFirst ? { meetingAt: 'asc' } : tab === 'past' ? { meetingAt: 'desc' } : { createdAt: 'desc' },
      skip,
      take: limit
    })

    // Get total count for pagination
    const totalPosts = await prisma.socialPost.count({ where: whereClause })

    return NextResponse.json({
      success: true,
      data: {
        posts: posts.map((p: any) => ({
          ...shapeMeeting(p, !!me),
          isFollowing: !!p.follows?.length,
          isSaved: !!p.saves?.length,
          follows: undefined,
          saves: undefined,
        })),
        pagination: {
          page,
          limit,
          total: totalPosts,
          totalPages: Math.ceil(totalPosts / limit)
        }
      }
    })
  } catch (error) {
    console.error('Error fetching social feed:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch feed' },
      { status: 500 }
    )
  }
}
