import { NextResponse } from 'next/server'
import { coverageStats } from '@/lib/meetings/server'

// GET /api/meetings/stats - how much of the country has a connected calendar
export async function GET() {
  return NextResponse.json({ success: true, data: await coverageStats() }, { headers: { 'Cache-Control': 'public, max-age=300' } })
}
