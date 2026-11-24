import { NextRequest, NextResponse, after } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { ensureDirectory, ensureFederal, listMeetings, placeBrief, refreshSource, staleSourceIds } from '@/lib/meetings/server'

export const maxDuration = 60

// GET /api/meetings/events?from=ISO&to=ISO[&places=slug,slug]
// Public. Without `places`: a signed-in member's followed places, or the federal default for visitors.
export async function GET(request: NextRequest) {
  const rl = await rateLimit(request, { id: 'meetings-events', limit: 120, windowSeconds: 60 })
  if (!rl.success) return rateLimitResponse(rl.reset)
  const sp = request.nextUrl.searchParams
  const from = new Date(sp.get('from') ?? ''), to = new Date(sp.get('to') ?? '')
  if (isNaN(+from) || isNaN(+to) || +to <= +from || +to - +from > 400 * 86400000) {
    return NextResponse.json({ success: false, error: 'Give a valid date range (up to a year).' }, { status: 400 })
  }
  const session = await auth()
  const me = session?.user?.id ?? null
  await ensureDirectory(); await ensureFederal()

  const slugs = (sp.get('places') ?? '').split(',').map((s) => s.trim()).filter(Boolean).slice(0, 60)
  let places: { id: string; slug: string; kind: string; name: string; govType: string | null; fullName: string; countyName: string | null; stateName: string | null; state: string | null }[]
  if (slugs.length) places = await prisma.jurisdiction.findMany({ where: { slug: { in: slugs } } })
  else if (me) places = (await prisma.meetingCalendarFollow.findMany({ where: { userId: me }, select: { jurisdiction: true }, take: 60 })).map((f: { jurisdiction: typeof places[number] }) => f.jurisdiction)
  else places = await prisma.jurisdiction.findMany({ where: { kind: 'FEDERAL' } })

  const ids = places.map((p) => p.id)
  const meetings = await listMeetings(ids, from, to, !!me)
  // Keep official calendars fresh: refresh stale ones after the response is sent
  after(async () => { for (const id of await staleSourceIds(ids, 2 * 3600000, 5)) await refreshSource(id) })
  return NextResponse.json({ success: true, data: { meetings, places: places.map((p) => placeBrief(p as never)), isDefault: !slugs.length && !me } })
}
