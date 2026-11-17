import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { buildIcs, type FeedEvent } from '@/lib/calendar/ics'
import { KIND_LABEL, STATUS_LABEL, type TimelineKind, type TimelineStatus } from '@/lib/projects/timeline'

// Subscribable calendar feed for an initiative's timeline. Public route: the
// long random token in the URL is the credential, and owners can reset it.

const DAY = 86400000

export async function GET(request: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  try {
    const { token } = await params
    const clean = token.replace(/\.ics$/, '')
    if (!/^[a-f0-9]{48}$/.test(clean)) return new NextResponse('Not found', { status: 404 })

    const project = await prisma.project.findFirst({
      where: { layoutConfig: { path: ['calendarFeedToken'], equals: clean } },
      select: { id: true, name: true, slug: true },
    })
    if (!project) return new NextResponse('Not found', { status: 404 })

    const since = new Date(Date.now() - 180 * DAY)
    const [items, members] = await Promise.all([
      prisma.projectTimelineItem.findMany({
        where: { projectId: project.id, OR: [{ startAt: { gte: since } }, { endAt: { gte: since } }] },
        orderBy: { startAt: 'asc' },
        take: 3000,
      }),
      prisma.projectMember.findMany({ where: { projectId: project.id }, select: { userId: true, user: { select: { name: true } } } }),
    ])
    const names = new Map(members.map((m: any) => [m.userId, m.user?.name || 'Member']))
    const origin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || request.nextUrl.origin

    const events: FeedEvent[] = items.flatMap((i: any) => {
      const start: Date | null = i.startAt ?? i.endAt
      if (!start) return []
      const who = (i.assigneeIds as string[]).map(id => names.get(id)).filter(Boolean).join(', ')
      const details = [
        `${KIND_LABEL[i.kind as TimelineKind]} · ${STATUS_LABEL[i.status as TimelineStatus]}`,
        who ? `Who: ${who}` : '',
        i.description ?? '',
      ].filter(Boolean).join('\n')
      return [{
        uid: `${i.id}@projxodus.com`,
        title: `${i.kind === 'MILESTONE' ? '◆ ' : i.status === 'DONE' ? '✓ ' : ''}${i.title}`,
        description: details,
        location: i.location ?? undefined,
        start,
        end: i.startAt ? i.endAt : null,
        allDay: i.allDay,
        updatedAt: i.updatedAt,
        url: `${origin}/community/projects/${project.slug}?tab=timeline`,
      }]
    })

    return new NextResponse(buildIcs(`${project.name} · Project Exodus`, events), {
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': `inline; filename="${project.slug}.ics"`,
        'Cache-Control': 'private, max-age=900',
      },
    })
  } catch (error) {
    console.error('Error building calendar feed:', error)
    return new NextResponse('Calendar unavailable', { status: 500 })
  }
}
