import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { getFileViewer } from '@/lib/projects/files-server'
import { canAddItems } from '@/lib/projects/timeline'
import { expandEvents, parseIcs } from '@/lib/calendar/ics'

const MAX_BYTES = 2 * 1024 * 1024
const MAX_ITEMS = 500
const DAY = 86400000

// POST - Import an .ics file as editable timeline events.
// Repeating events become individual dates from 30 days ago to a year ahead.
export async function POST(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
    const { projectId } = await params
    const viewer = await getFileViewer(projectId, session.user.id)
    if (!viewer) return NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 })
    if (!canAddItems(viewer)) return NextResponse.json({ success: false, error: 'Contributors and up can import calendars.' }, { status: 403 })

    const form = await request.formData().catch(() => null)
    const file = form?.get('file')
    if (!file || typeof file === 'string') return NextResponse.json({ success: false, error: 'Choose an .ics file to import.' }, { status: 400 })
    if (file.size > MAX_BYTES) return NextResponse.json({ success: false, error: 'That file is too large (2 MB max).' }, { status: 400 })
    const text = await file.text()
    if (!text.includes('BEGIN:VCALENDAR')) return NextResponse.json({ success: false, error: 'That isn’t a calendar (.ics) file.' }, { status: 400 })

    const { events } = parseIcs(text)
    const now = Date.now()
    const occurrences = expandEvents(events, new Date(now - 30 * DAY), new Date(now + 366 * DAY), MAX_ITEMS + 1)
    const truncated = occurrences.length > MAX_ITEMS
    const toImport = occurrences.slice(0, MAX_ITEMS).map(o => ({ ...o, externalUid: `${o.uid}::${o.start}`.slice(0, 300) }))

    // Skip anything already imported into this initiative
    const existing = await prisma.projectTimelineItem.findMany({
      where: { projectId, externalUid: { in: toImport.map(o => o.externalUid) } },
      select: { externalUid: true },
    })
    const seen = new Set(existing.map((e: { externalUid: string | null }) => e.externalUid))
    const fresh = toImport.filter(o => !seen.has(o.externalUid))

    if (fresh.length) {
      await prisma.projectTimelineItem.createMany({
        data: fresh.map(o => ({
          projectId,
          kind: 'EVENT',
          title: o.title.slice(0, 200),
          description: o.description?.slice(0, 4000) ?? null,
          location: o.location?.slice(0, 300) ?? null,
          startAt: new Date(o.start),
          endAt: new Date(o.end),
          allDay: o.allDay,
          status: 'TODO',
          assigneeIds: [session.user!.id!],
          externalUid: o.externalUid,
          createdById: session.user!.id!,
        })),
      })
    }

    return NextResponse.json({
      success: true,
      data: { imported: fresh.length, skipped: toImport.length - fresh.length, truncated, totalEvents: events.length },
    })
  } catch (error) {
    console.error('Error importing calendar:', error)
    return NextResponse.json({ success: false, error: 'Failed to import that calendar.' }, { status: 500 })
  }
}
