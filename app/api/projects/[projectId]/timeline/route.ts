import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { getFileViewer, filterMemberIds } from '@/lib/projects/files-server'
import { canAddItems, canViewTimeline, isManager, parseTimelineInput, rangeWhere } from '@/lib/projects/timeline'
import { isCollaborator } from '@/lib/projects/access'
import { itemForViewer, itemInclude } from '@/lib/projects/timeline-server'
import { expandEvents } from '@/lib/calendar/ics'
import { feedEvents } from '@/lib/calendar/feeds-server'

const DAY = 86400000
const MAX_SPAN = 3 * 366 * DAY

// GET - Items, linked-calendar events, and members for a date range
export async function GET(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
    const { projectId } = await params
    const viewer = await getFileViewer(projectId, session.user.id)
    if (!viewer) return NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 })
    if (!canViewTimeline(viewer)) return NextResponse.json({ success: false, error: 'Join this initiative to see its timeline.' }, { status: 403 })

    const sp = request.nextUrl.searchParams
    const now = Date.now()
    let from = new Date(sp.get('from') ?? now - 60 * DAY)
    let to = new Date(sp.get('to') ?? now + 365 * DAY)
    if (Number.isNaN(from.getTime())) from = new Date(now - 60 * DAY)
    if (Number.isNaN(to.getTime()) || to <= from) to = new Date(from.getTime() + 365 * DAY)
    if (to.getTime() - from.getTime() > MAX_SPAN) to = new Date(from.getTime() + MAX_SPAN)

    // Followers see only what the team shares with them, and no linked calendars
    const team = isCollaborator(viewer)
    const [items, members, feeds] = await Promise.all([
      prisma.projectTimelineItem.findMany({
        where: team ? rangeWhere(projectId, from, to) : { ...rangeWhere(projectId, from, to), isPublic: true },
        include: itemInclude,
        orderBy: [{ startAt: 'asc' }, { endAt: 'asc' }],
        take: 2000,
      }),
      prisma.projectMember.findMany({
        where: { projectId },
        select: { userId: true, role: true, user: { select: { id: true, name: true, image: true } } },
      }),
      prisma.projectCalendarFeed.findMany({
        where: team ? { projectId } : { id: '__none__' },
        select: { id: true, name: true, color: true, url: true, cachedEvents: true, fetchedAt: true, ownerId: true },
      }),
    ])

    // Milestones outside the range still need to be listed for linking tasks
    const milestones = await prisma.projectTimelineItem.findMany({
      where: team ? { projectId, kind: 'MILESTONE' } : { projectId, kind: 'MILESTONE', isPublic: true },
      select: { id: true, title: true, endAt: true, startAt: true, status: true },
      orderBy: { endAt: 'asc' },
      take: 200,
    })

    const external = []
    const feedStatus = []
    for (const feed of feeds) {
      const { events, error } = await feedEvents(feed)
      for (const occ of expandEvents(events, from, to, 1500)) {
        external.push({ ...occ, feedId: feed.id, color: feed.color })
      }
      feedStatus.push({ id: feed.id, name: feed.name, color: feed.color, error })
    }

    return NextResponse.json({
      success: true,
      data: {
        // Followers see shared items without the team's notes or assignments
        items: items.map((i: any) => (team ? itemForViewer(i, viewer) : { ...itemForViewer(i, viewer), description: null, location: null, assigneeIds: [], createdBy: { id: '', name: null } })),
        external,
        feeds: feedStatus,
        milestones,
        members: members.filter((m: any) => team || m.role !== 'VIEWER').map((m: any) => ({ id: m.userId, name: m.user?.name || 'Member', image: m.user?.image ?? null, role: m.role })),
        me: session.user.id,
        canAdd: canAddItems(viewer),
        canManage: isManager(viewer),
        isTeam: team,
        range: { from, to },
      },
    })
  } catch (error) {
    console.error('Error loading timeline:', error)
    return NextResponse.json({ success: false, error: 'Failed to load the timeline.' }, { status: 500 })
  }
}

// POST - Add a milestone, task, or event
export async function POST(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
    const { projectId } = await params
    const viewer = await getFileViewer(projectId, session.user.id)
    if (!viewer) return NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 })
    if (!canAddItems(viewer)) {
      return NextResponse.json({ success: false, error: 'Contributors and up can add to the timeline.' }, { status: 403 })
    }

    const parsed = parseTimelineInput(await request.json().catch(() => null), false)
    if (!parsed.ok) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 })
    const input = parsed.data

    const assigneeIds = await filterMemberIds(projectId, input.assigneeIds ?? [])
    let milestoneId: string | null = null
    if (input.milestoneId && input.kind !== 'MILESTONE') {
      const m = await prisma.projectTimelineItem.findFirst({ where: { id: input.milestoneId, projectId, kind: 'MILESTONE' }, select: { id: true } })
      milestoneId = m?.id ?? null
    }

    const created = await prisma.projectTimelineItem.create({
      data: {
        projectId,
        kind: input.kind!,
        title: input.title!,
        description: input.description ?? null,
        location: input.location ?? null,
        startAt: input.startAt ?? null,
        endAt: input.endAt ?? null,
        allDay: input.allDay ?? true,
        status: input.status ?? 'TODO',
        assigneeIds,
        milestoneId,
        color: input.color ?? null,
        isPublic: input.isPublic ?? false,
        createdById: session.user.id,
      },
      include: itemInclude,
    })
    return NextResponse.json({ success: true, data: itemForViewer(created, viewer) }, { status: 201 })
  } catch (error) {
    console.error('Error creating timeline item:', error)
    return NextResponse.json({ success: false, error: 'Failed to add to the timeline.' }, { status: 500 })
  }
}
