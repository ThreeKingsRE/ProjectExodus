import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { getFileViewer, filterMemberIds } from '@/lib/projects/files-server'
import { canEditItem, canReassignOrDelete, parseTimelineInput } from '@/lib/projects/timeline'
import { itemForViewer, itemInclude } from '@/lib/projects/timeline-server'

type Params = { params: Promise<{ projectId: string; itemId: string }> }

async function load(projectId: string, itemId: string) {
  const session = await auth()
  if (!session?.user?.id) return { error: NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 }) }
  const viewer = await getFileViewer(projectId, session.user.id)
  if (!viewer) return { error: NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 }) }
  const item = await prisma.projectTimelineItem.findFirst({ where: { id: itemId, projectId } })
  if (!item) return { error: NextResponse.json({ success: false, error: 'Item not found.' }, { status: 404 }) }
  return { viewer, item }
}

// PATCH - Update an item (creator, assignees, owner, admins)
export async function PATCH(request: NextRequest, { params }: Params) {
  try {
    const { projectId, itemId } = await params
    const { viewer, item, error } = await load(projectId, itemId)
    if (error) return error
    if (!canEditItem(item, viewer!)) {
      return NextResponse.json({ success: false, error: 'Only the person who added this, its assignees, or an admin can change it.' }, { status: 403 })
    }

    const body = await request.json().catch(() => null)
    const parsed = parseTimelineInput(body, true, item)
    if (!parsed.ok) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 })
    const data: Record<string, unknown> = { ...parsed.data }

    if (data.assigneeIds !== undefined) {
      if (!canReassignOrDelete(item, viewer!)) {
        return NextResponse.json({ success: false, error: 'Only the person who added this or an admin can change who’s assigned.' }, { status: 403 })
      }
      data.assigneeIds = await filterMemberIds(projectId, data.assigneeIds as string[])
    }
    if (data.milestoneId !== undefined && data.milestoneId !== null) {
      const kind = (data.kind as string) ?? item.kind
      const m = kind === 'MILESTONE' || data.milestoneId === itemId
        ? null
        : await prisma.projectTimelineItem.findFirst({ where: { id: data.milestoneId as string, projectId, kind: 'MILESTONE' }, select: { id: true } })
      data.milestoneId = m?.id ?? null
    }
    if (data.kind === 'MILESTONE') data.milestoneId = null

    const updated = await prisma.projectTimelineItem.update({ where: { id: itemId }, data, include: itemInclude })
    return NextResponse.json({ success: true, data: itemForViewer(updated, viewer!) })
  } catch (err) {
    console.error('Error updating timeline item:', err)
    return NextResponse.json({ success: false, error: 'Failed to update.' }, { status: 500 })
  }
}

// DELETE - Remove an item (creator, owner, admins). Tasks linked to a deleted milestone are unlinked.
export async function DELETE(_request: NextRequest, { params }: Params) {
  try {
    const { projectId, itemId } = await params
    const { viewer, item, error } = await load(projectId, itemId)
    if (error) return error
    if (!canReassignOrDelete(item, viewer!)) {
      return NextResponse.json({ success: false, error: 'Only the person who added this or an admin can delete it.' }, { status: 403 })
    }
    await prisma.$transaction([
      prisma.projectTimelineItem.updateMany({ where: { projectId, milestoneId: itemId }, data: { milestoneId: null } }),
      prisma.projectTimelineItem.delete({ where: { id: itemId } }),
    ])
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error deleting timeline item:', err)
    return NextResponse.json({ success: false, error: 'Failed to delete.' }, { status: 500 })
  }
}
