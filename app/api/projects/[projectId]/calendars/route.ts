import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { getFileViewer } from '@/lib/projects/files-server'
import { canAddItems, canViewTimeline, isManager, normalizeFeedUrl } from '@/lib/projects/timeline'
import { parseIcs } from '@/lib/calendar/ics'
import { eventsWorthStoring, fetchIcs } from '@/lib/calendar/feeds-server'

const MAX_FEEDS = 20
const COLOR = /^#[0-9a-fA-F]{6}$/

// GET - Linked calendars. The private link is only returned to the person who added it.
export async function GET(_request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
    const { projectId } = await params
    const viewer = await getFileViewer(projectId, session.user.id)
    if (!viewer || !canViewTimeline(viewer)) return NextResponse.json({ success: false, error: 'Not available.' }, { status: 403 })

    const feeds = await prisma.projectCalendarFeed.findMany({
      where: { projectId },
      select: { id: true, name: true, color: true, url: true, ownerId: true, fetchedAt: true, lastError: true, owner: { select: { name: true } } },
      orderBy: { createdAt: 'asc' },
    })
    return NextResponse.json({
      success: true,
      data: feeds.map((f: any) => ({
        id: f.id,
        name: f.name,
        color: f.color,
        ownerName: f.owner?.name || 'Member',
        isMine: f.ownerId === session.user!.id,
        canRemove: f.ownerId === session.user!.id || isManager(viewer),
        url: f.ownerId === session.user!.id ? f.url : undefined,
        fetchedAt: f.fetchedAt,
        lastError: f.lastError,
      })),
    })
  } catch (error) {
    console.error('Error listing calendars:', error)
    return NextResponse.json({ success: false, error: 'Failed to load calendars.' }, { status: 500 })
  }
}

// POST - Link a Google / Outlook / Apple calendar by its private iCal address
export async function POST(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
    const { projectId } = await params
    const viewer = await getFileViewer(projectId, session.user.id)
    if (!viewer) return NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 })
    if (!canAddItems(viewer)) return NextResponse.json({ success: false, error: 'Contributors and up can link calendars.' }, { status: 403 })

    const body = await request.json().catch(() => null)
    const checked = normalizeFeedUrl(body?.url)
    if (!checked.ok) return NextResponse.json({ success: false, error: checked.error }, { status: 400 })
    const color = typeof body?.color === 'string' && COLOR.test(body.color) ? body.color : '#6366f1'

    const count = await prisma.projectCalendarFeed.count({ where: { projectId } })
    if (count >= MAX_FEEDS) return NextResponse.json({ success: false, error: `An initiative can link up to ${MAX_FEEDS} calendars.` }, { status: 400 })

    // Fetch once now so a wrong link fails immediately
    let parsed
    try {
      parsed = parseIcs(await fetchIcs(checked.url))
    } catch (err) {
      return NextResponse.json({ success: false, error: err instanceof Error ? err.message : 'Could not read that calendar.' }, { status: 400 })
    }
    const name = (typeof body?.name === 'string' && body.name.trim()) || parsed.calendarName || 'Linked calendar'

    const feed = await prisma.projectCalendarFeed.create({
      data: {
        projectId,
        ownerId: session.user.id,
        name: name.slice(0, 80),
        url: checked.url,
        color,
        cachedEvents: JSON.parse(JSON.stringify(eventsWorthStoring(parsed.events))),
        fetchedAt: new Date(),
      },
      select: { id: true, name: true, color: true },
    })
    return NextResponse.json({ success: true, data: { ...feed, eventCount: parsed.events.length } }, { status: 201 })
  } catch (error) {
    console.error('Error linking calendar:', error)
    return NextResponse.json({ success: false, error: 'Failed to link the calendar.' }, { status: 500 })
  }
}
