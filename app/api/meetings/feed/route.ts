import { NextResponse } from 'next/server'
import { randomBytes } from 'node:crypto'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { siteUrl } from '@/lib/email/send'

const links = (token: string) => {
  const https = `${siteUrl()}/api/meetings/feed/${token}.ics`
  const webcal = https.replace(/^https?:\/\//, 'webcal://')
  return { https, webcal, google: `https://calendar.google.com/calendar/r?cid=${encodeURIComponent(webcal)}` }
}

// GET /api/meetings/feed -> my phone-calendar links (created the first time)
// POST /api/meetings/feed { reset: true } -> a new secret link; the old one stops working
async function handle(reset: boolean) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const userId = session.user.id
  const token = randomBytes(24).toString('base64url')
  const feed = reset
    ? await prisma.meetingFeed.upsert({ where: { userId }, create: { userId, token }, update: { token } })
    : (await prisma.meetingFeed.findUnique({ where: { userId } })) ?? (await prisma.meetingFeed.create({ data: { userId, token } }))
  return NextResponse.json({ success: true, data: links(feed.token) })
}
export const GET = () => handle(false)
export async function POST(request: Request) { const b = await request.json().catch(() => ({})); return handle(b.reset === true) }
