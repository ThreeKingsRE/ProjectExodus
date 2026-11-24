import { NextRequest, NextResponse } from 'next/server'
import { ensureDirectory, ensureFederal, ensureKnownSources, refreshSource, staleSourceIds } from '@/lib/meetings/server'

export const maxDuration = 300

// Nightly calendar import. Vercel Cron sends `Authorization: Bearer $CRON_SECRET`.
// Reminder delivery runs independently at /api/meetings/reminders.
export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET
  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ success: false, error: 'Not allowed.' }, { status: 401 })
  }
  await ensureDirectory(); await ensureFederal(); await ensureKnownSources()
  let refreshed = 0, failed = 0
  for (const id of await staleSourceIds(null, 6 * 3600000, 150)) {
    const r = await refreshSource(id)
    if (r.error) failed++; else refreshed++
  }
  return NextResponse.json({ success: true, refreshed, failed })
}
