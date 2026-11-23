import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { HANDLE_RE } from '@/lib/career/career'
import { getOrCreateProfile } from '@/lib/career/server'

const clip = (v: unknown, n: number) => (typeof v === 'string' && v.trim() ? v.trim().slice(0, n) : null)
const RESERVED = new Set(['admin', 'api', 'new', 'edit', 'settings', 'projxodus', 'exodus', 'support', 'help'])

// GET /api/career/profile - my career profile (created on first visit)
export async function GET() {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const profile = await getOrCreateProfile(session.user.id, session.user.name)
  return NextResponse.json({ success: true, data: profile })
}

// PUT /api/career/profile - change handle, headline, trades, service area
export async function PUT(request: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const profile = await getOrCreateProfile(session.user.id, session.user.name)
  const b = await request.json().catch(() => ({}))
  const data: Record<string, unknown> = {}
  if ('handle' in b) {
    const handle = String(b.handle ?? '').trim().toLowerCase()
    if (!HANDLE_RE.test(handle) || RESERVED.has(handle)) {
      return NextResponse.json({ success: false, error: 'Use 3–30 lowercase letters, numbers or dashes.' }, { status: 400 })
    }
    data.handle = handle
  }
  if ('headline' in b) data.headline = clip(b.headline, 120)
  if ('serviceArea' in b) data.serviceArea = clip(b.serviceArea, 80)
  if ('trades' in b && Array.isArray(b.trades)) {
    data.trades = [...new Set(b.trades.map((t: unknown) => clip(t, 40)?.toLowerCase()).filter(Boolean))].slice(0, 8)
  }
  try {
    const updated = await prisma.careerProfile.update({ where: { id: profile.id }, data })
    return NextResponse.json({ success: true, data: updated })
  } catch (e: unknown) {
    if ((e as { code?: string })?.code === 'P2002') return NextResponse.json({ success: false, error: 'That link name is taken.' }, { status: 409 })
    throw e
  }
}
