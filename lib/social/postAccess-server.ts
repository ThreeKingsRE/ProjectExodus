import { prisma } from '@/lib/db'
import { getAccess } from '@/lib/projects/access-server'
import { canSeePost } from './postAccess'

/** Load a post's audience info and check whether this user may see it. Returns null if missing or hidden. */
export async function findVisiblePost(postId: string, userId: string | null) {
  const post = await prisma.socialPost.findUnique({
    where: { id: postId },
    select: { id: true, userId: true, visibility: true, projectId: true, project: { select: { visibility: true } } },
  })
  if (!post) return null
  const [follow, projectAccess] = await Promise.all([
    userId && post.visibility === 'FOLLOWERS_ONLY' && !post.projectId
      ? prisma.userFollow.findFirst({ where: { followerId: userId, followingId: post.userId }, select: { id: true } })
      : null,
    post.projectId && userId ? getAccess(post.projectId, userId) : null,
  ])
  const visible = canSeePost(
    { userId: post.userId, visibility: post.visibility, projectId: post.projectId, projectVisibility: post.project?.visibility ?? null },
    { userId, followsAuthor: !!follow, projectAccess },
  )
  return visible ? post : null
}
