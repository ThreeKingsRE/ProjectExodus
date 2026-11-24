import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { CLIENT_RE } from '@/lib/meetings/legistar'
import { checkPublicUrl } from '@/lib/meetings/safe-fetch'
import { detectLegistar, refreshSource, resolveCalendarUrl } from '@/lib/meetings/server'

export const maxDuration = 60

// POST /api/meetings/sources { slug, kind: 'LEGISTAR' | 'ICS', ref }
// Connect a place to an official calendar. It is checked first, then imported, then kept fresh automatically.
export async function POST(request: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in to connect a calendar.' }, { status: 401 })
  const rl = await rateLimit(request, { id: `meetings-source-${session.user.id}`, limit: 15, windowSeconds: 3600 })
  if (!rl.success) return rateLimitResponse(rl.reset)
  const b = await request.json().catch(() => ({}))
  const j = typeof b.slug === 'string' ? await prisma.jurisdiction.findUnique({ where: { slug: b.slug }, select: { id: true } }) : null
  if (!j) return NextResponse.json({ success: false, error: 'Place not found.' }, { status: 404 })
  let kind: 'LEGISTAR' | 'LEGISTAR_HTML' | 'ICS' = b.kind === 'ICS' ? 'ICS' : 'LEGISTAR'
  if ((await prisma.meetingSource.count({ where: { jurisdictionId: j.id } })) >= 6) return NextResponse.json({ success: false, error: 'This place already has 6 calendars connected.' }, { status: 400 })
  let ref = typeof b.ref === 'string' ? b.ref.trim() : ''
  try {
    if (kind === 'LEGISTAR') {
      ref = ref.toLowerCase().replace(/^https?:\/\//, '').replace(/\.legistar\.com.*$/, '')
      if (!CLIENT_RE.test(ref)) throw new Error('Use the part before .legistar.com, like “seattle”.')
      kind = await detectLegistar(ref)
    } else {
      const ok = checkPublicUrl(ref)
      if (!ok.ok) throw new Error(ok.error)
      ref = await resolveCalendarUrl(ref)
    }
  } catch (e) {
    return NextResponse.json({ success: false, error: e instanceof Error ? e.message : 'That source didn’t check out.' }, { status: 400 })
  }
  const src = await prisma.meetingSource.upsert({
    where: { jurisdictionId_kind_ref: { jurisdictionId: j.id, kind, ref } },
    create: { jurisdictionId: j.id, kind, ref, addedById: session.user.id, label: typeof b.label === 'string' ? b.label.slice(0, 80) : null }, update: { enabled: true },
  })
  const result = await refreshSource(src.id)
  if (result.error) return NextResponse.json({ success: false, error: result.error }, { status: 400 })
  return NextResponse.json({ success: true, data: { count: result.count } }, { status: 201 })
}
