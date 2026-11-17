import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { getFileViewer } from '@/lib/projects/files-server'
import { isManager } from '@/lib/projects/timeline'

// DELETE - Unlink a calendar (the person who linked it, the owner, or admins)
export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ projectId: string; feedId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
    const { projectId, feedId } = await params
    const viewer = await getFileViewer(projectId, session.user.id)
    if (!viewer) return NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 })

    const feed = await prisma.projectCalendarFeed.findFirst({ where: { id: feedId, projectId }, select: { ownerId: true } })
    if (!feed) return NextResponse.json({ success: false, error: 'Calendar not found.' }, { status: 404 })
    if (feed.ownerId !== session.user.id && !isManager(viewer)) {
      return NextResponse.json({ success: false, error: 'Only the person who linked this calendar or an admin can remove it.' }, { status: 403 })
    }
    await prisma.projectCalendarFeed.delete({ where: { id: feedId } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error removing calendar:', error)
    return NextResponse.json({ success: false, error: 'Failed to remove the calendar.' }, { status: 500 })
  }
}
