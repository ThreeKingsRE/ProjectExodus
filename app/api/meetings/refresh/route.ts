import { NextRequest, NextResponse } from 'next/server'
import { ensureDirectory, ensureFederal, ensureKnownSources, refreshSource, sendReminders, staleSourceIds } from '@/lib/meetings/server'

export const maxDuration = 300

// GET /api/meetings/refresh - the daily job (Vercel Cron sends `Authorization: Bearer $CRON_SECRET`).
// Loads the directory if empty, refreshes every calendar that hasn't updated in 6 hours, and sends the
// morning reminders members asked for.
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
  const reminders = await sendReminders()
  return NextResponse.json({ success: true, refreshed, failed, reminders })
}
