import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { ensureDirectory, ensureFederal, searchPlaces } from '@/lib/meetings/server'

export const maxDuration = 60

// GET /api/meetings/places?q=brighton ny  (public) - search every state, county, city, town and township
export async function GET(request: NextRequest) {
  const rl = await rateLimit(request, { id: 'meetings-places', limit: 120, windowSeconds: 60 })
  if (!rl.success) return rateLimitResponse(rl.reset)
  const q = (request.nextUrl.searchParams.get('q') ?? '').slice(0, 80)
  try {
    await ensureDirectory()
    await ensureFederal()
    return NextResponse.json({ success: true, data: q.trim().length >= 2 ? await searchPlaces(q) : [] })
  } catch (e) {
    console.error('Place search failed:', e)
    return NextResponse.json({ success: false, error: 'Search is unavailable right now.' }, { status: 500 })
  }
}
