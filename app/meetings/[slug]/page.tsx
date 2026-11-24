import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { after } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { placeBrief, listMeetings, refreshSource, staleSourceIds, ensureDirectory, ensureKnownSources } from '@/lib/meetings/server'
import { MEMBER_FED } from '@/lib/meetings/known'
import { placeLabel, placeSubtitle, tzFor } from '@/lib/meetings/directory'
import PlaceView from '@/components/meetings/PlaceView'

type Props = { params: Promise<{ slug: string }> }
export const dynamic = 'force-dynamic'
export const maxDuration = 60

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const j = await prisma.jurisdiction.findUnique({ where: { slug: (await params).slug } })
  if (!j) return { title: 'Meetings' }
  return { title: `${placeLabel(j)} meetings`, description: `Meeting schedule, agendas, minutes and recordings for ${placeLabel(j)}${j.stateName && j.kind !== 'STATE' ? `, ${j.stateName}` : ''}.` }
}

export default async function PlacePage({ params }: Props) {
  const { slug } = await params
  await ensureDirectory(); await ensureKnownSources()
  const j = await prisma.jurisdiction.findUnique({ where: { slug } })
  if (!j) notFound()
  // A calendar connected for the first time is read now, so the first visitor sees real meetings
  for (const id of await staleSourceIds([j.id], 4e11, 3)) await refreshSource(id)
  const session = await auth()
  const me = session?.user?.id ?? null
  const now = Date.now()

  const [upcoming, past, sources, follow, children] = await Promise.all([
    listMeetings([j.id], new Date(now - 3 * 3600000), new Date(now + 400 * 86400000), !!me, { order: 'asc', take: 200 }),
    listMeetings([j.id], new Date(now - 3 * 365 * 86400000), new Date(now - 3 * 3600000), !!me, { order: 'desc', take: 200 }),
    prisma.meetingSource.findMany({ where: { jurisdictionId: j.id }, select: { id: true, kind: true, ref: true, lastFetchedAt: true, lastError: true }, orderBy: { createdAt: 'asc' } }),
    me ? prisma.meetingCalendarFollow.findUnique({ where: { userId_jurisdictionId: { userId: me, jurisdictionId: j.id } }, select: { id: true } }) : null,
    j.kind === 'STATE'
      ? prisma.jurisdiction.findMany({ where: { kind: 'COUNTY', state: j.state }, orderBy: { fullName: 'asc' }, take: 400 })
      : j.kind === 'COUNTY'
        ? prisma.jurisdiction.findMany({ where: { kind: { in: ['PLACE', 'TOWNSHIP'] }, countyKey: j.countyKey }, orderBy: { fullName: 'asc' }, take: 400 })
        : [],
  ])
  after(async () => { for (const id of await staleSourceIds([j.id], 2 * 3600000, 5)) await refreshSource(id) })

  return (
    <PlaceView
      place={{ ...placeBrief(j), tz: tzFor(j.state), label: placeLabel(j), subtitle: placeSubtitle(j) }}
      upcoming={upcoming} past={past}
      sources={sources.map((s: { id: string; kind: string; ref: string; lastFetchedAt: Date | null; lastError: string | null }) => ({
        id: s.id, kind: s.kind, host: s.kind === 'ICS' ? (() => { try { return new URL(s.ref).hostname } catch { return s.ref } })() : `${s.ref}.legistar.com`,
        lastFetchedAt: s.lastFetchedAt?.toISOString() ?? null, error: s.lastError,
      }))}
      signedIn={!!me} following={!!follow} memberFed={MEMBER_FED[j.key] ?? null}
      children={children.map((c: Parameters<typeof placeBrief>[0]) => placeBrief(c))}
    />
  )
}
