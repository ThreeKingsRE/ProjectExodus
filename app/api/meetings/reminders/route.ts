import { NextRequest, NextResponse } from 'next/server'
import { sendReminders } from '@/lib/meetings/server'

export const maxDuration = 300

// Morning reminders for members who opted in, independent of calendar imports.
export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET
  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ success: false, error: 'Not allowed.' }, { status: 401 })
  }
  const reminders = await sendReminders()
  return NextResponse.json({ success: true, reminders })
}
