import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { getAccess } from '@/lib/projects/access-server'
import {
  canCommentOnItem, canDeleteComment, canSeeItem, isCommentTarget, parseCommentBody,
  MIN_SECONDS_BETWEEN_COMMENTS, type CommentTarget,
} from '@/lib/projects/item-comments'

// Comments on an initiative's files and timeline items.
//   GET    ?type=FILE|TIMELINE_ITEM&id=<itemId>       the thread (oldest first)
//   GET    ?type=FILE|TIMELINE_ITEM&ids=a,b,c         comment counts for visible items
//   POST   { type, id, body }
//   DELETE ?commentId=<id>                           author or moderator

const author = { select: { id: true, name: true, image: true } }

/** Visibility of an item in this initiative, or null if it isn't one of its items. */
async function itemVisibility(projectId: string, type: CommentTarget, ids: string[]) {
  const map = new Map<string, { sharedWithFollowers: boolean }>()
  if (type === 'FILE') {
    const rows = await prisma.projectFile.findMany({ where: { projectId, id: { in: ids } }, select: { id: true, viewAccess: true } })
    rows.forEach((r: { id: string; viewAccess: string }) => map.set(r.id, { sharedWithFollowers: r.viewAccess === "MEMBERS" }))
  } else {
    const rows = await prisma.projectTimelineItem.findMany({ where: { projectId, id: { in: ids } }, select: { id: true, isPublic: true } })
    rows.forEach((r: { id: string; isPublic: boolean }) => map.set(r.id, { sharedWithFollowers: r.isPublic }))
  }
  return map
}

function sameOrigin(request: NextRequest) {
  const origin = request.headers.get('origin')
  return !origin || origin === new URL(request.url).origin
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Please sign in.' }, { status: 401 })
    const { projectId } = await params
    const access = await getAccess(projectId, session.user.id)
    if (!access) return NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 })

    const sp = new URL(request.url).searchParams
    const type = sp.get('type')
    if (!isCommentTarget(type)) return NextResponse.json({ success: false, error: 'Unknown item type.' }, { status: 400 })

    // Counts for a list of items: only the ones this person can see
    const idsParam = sp.get('ids')
    if (idsParam !== null) {
      const ids = idsParam.split(',').filter(Boolean).slice(0, 200)
      const vis = await itemVisibility(projectId, type, ids)
      const visible = ids.filter((id) => vis.has(id) && canSeeItem(vis.get(id)!, access))
      const grouped = visible.length
        ? await prisma.projectItemComment.groupBy({ by: ['targetId'], where: { projectId, targetType: type, targetId: { in: visible } }, _count: { _all: true } })
        : []
      const counts: Record<string, number> = Object.fromEntries(visible.map((id) => [id, 0]))
      grouped.forEach((g: { targetId: string; _count: { _all: number } }) => { counts[g.targetId] = g._count._all })
      return NextResponse.json({ success: true, data: counts })
    }

    const id = sp.get('id') ?? ''
    const vis = (await itemVisibility(projectId, type, [id])).get(id)
    if (!vis || !canSeeItem(vis, access)) return NextResponse.json({ success: false, error: 'Item not found.' }, { status: 404 })
    const comments = await prisma.projectItemComment.findMany({
      where: { projectId, targetType: type, targetId: id },
      orderBy: { createdAt: 'asc' },
      take: 200,
      select: { id: true, body: true, createdAt: true, user: author },
    })
    return NextResponse.json({
      success: true,
      data: comments.map((c: { id: string; body: string; createdAt: Date; user: { id: string; name: string | null; image: string | null } }) => ({ ...c, canDelete: canDeleteComment({ userId: c.user.id }, access) })),
      canComment: canCommentOnItem(vis, access),
    })
  } catch (error) {
    console.error('Error loading item comments:', error)
    return NextResponse.json({ success: false, error: 'Failed to load comments.' }, { status: 500 })
  }
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  if (!sameOrigin(request)) return NextResponse.json({ success: false, error: 'Invalid request origin.' }, { status: 403 })
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Please sign in.' }, { status: 401 })
    const { projectId } = await params
    const access = await getAccess(projectId, session.user.id)
    if (!access) return NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 })

    const input = await request.json().catch(() => ({}))
    if (!isCommentTarget(input.type) || typeof input.id !== 'string') return NextResponse.json({ success: false, error: 'Unknown item.' }, { status: 400 })
    const vis = (await itemVisibility(projectId, input.type, [input.id])).get(input.id)
    if (!vis || !canSeeItem(vis, access)) return NextResponse.json({ success: false, error: 'Item not found.' }, { status: 404 })
    if (!canCommentOnItem(vis, access)) return NextResponse.json({ success: false, error: 'You can’t comment on this item.' }, { status: 403 })
    const parsed = parseCommentBody(input.body)
    if (!parsed.ok) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 })

    const last = await prisma.projectItemComment.findFirst({ where: { userId: session.user.id }, orderBy: { createdAt: 'desc' }, select: { createdAt: true } })
    if (last && Date.now() - last.createdAt.getTime() < MIN_SECONDS_BETWEEN_COMMENTS * 1000) {
      return NextResponse.json({ success: false, error: 'You just commented. Wait a few seconds.' }, { status: 429 })
    }

    const comment = await prisma.projectItemComment.create({
      data: { projectId, targetType: input.type, targetId: input.id, userId: session.user.id, body: parsed.body },
      select: { id: true, body: true, createdAt: true, user: author },
    })
    return NextResponse.json({ success: true, data: { ...comment, canDelete: true } })
  } catch (error) {
    console.error('Error posting item comment:', error)
    return NextResponse.json({ success: false, error: 'Failed to post the comment.' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  if (!sameOrigin(request)) return NextResponse.json({ success: false, error: 'Invalid request origin.' }, { status: 403 })
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Please sign in.' }, { status: 401 })
    const { projectId } = await params
    const access = await getAccess(projectId, session.user.id)
    if (!access) return NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 })
    const commentId = new URL(request.url).searchParams.get('commentId') ?? ''
    const comment = await prisma.projectItemComment.findFirst({ where: { id: commentId, projectId }, select: { id: true, userId: true } })
    if (!comment) return NextResponse.json({ success: false, error: 'Comment not found.' }, { status: 404 })
    if (!canDeleteComment(comment, access)) return NextResponse.json({ success: false, error: 'You can’t delete this comment.' }, { status: 403 })
    await prisma.projectItemComment.delete({ where: { id: comment.id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting item comment:', error)
    return NextResponse.json({ success: false, error: 'Failed to delete the comment.' }, { status: 500 })
  }
}
