import { NextRequest, NextResponse } from 'next/server'
import { randomBytes } from 'crypto'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { getFileViewer } from '@/lib/projects/files-server'
import { canViewTimeline, isManager } from '@/lib/projects/timeline'

function siteOrigin(request: NextRequest) {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || request.nextUrl.origin
}

async function setup(projectId: string) {
  const session = await auth()
  if (!session?.user?.id) return { error: NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 }) }
  const viewer = await getFileViewer(projectId, session.user.id)
  if (!viewer || !canViewTimeline(viewer)) return { error: NextResponse.json({ success: false, error: 'Not available.' }, { status: 403 }) }
  const project = await prisma.project.findUnique({ where: { id: projectId }, select: { layoutConfig: true } })
  return { viewer, layout: ((project?.layoutConfig as Record<string, unknown>) || {}) }
}

async function saveToken(projectId: string, layout: Record<string, unknown>) {
  const token = randomBytes(24).toString('hex')
  await prisma.project.update({ where: { id: projectId }, data: { layoutConfig: { ...layout, calendarFeedToken: token } } })
  return token
}

function links(origin: string, token: string) {
  const https = `${origin}/api/calendar/${token}`
  return {
    url: https,
    webcal: https.replace(/^https?:\/\//, 'webcal://'),
    google: `https://calendar.google.com/calendar/render?cid=${encodeURIComponent(https.replace(/^https?:\/\//, 'webcal://'))}`,
  }
}

// GET - The private subscribe link for this initiative's calendar (created on first use)
export async function GET(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const { projectId } = await params
    const { layout, error } = await setup(projectId)
    if (error) return error
    const token = typeof layout!.calendarFeedToken === 'string' ? layout!.calendarFeedToken : await saveToken(projectId, layout!)
    return NextResponse.json({ success: true, data: links(siteOrigin(request), token) }, { headers: { 'Cache-Control': 'no-store' } })
  } catch (err) {
    console.error('Error getting calendar link:', err)
    return NextResponse.json({ success: false, error: 'Failed to get the calendar link.' }, { status: 500 })
  }
}

// POST - Reset the link (owner/admins), e.g. after someone leaves the team
export async function POST(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const { projectId } = await params
    const { viewer, layout, error } = await setup(projectId)
    if (error) return error
    if (!isManager(viewer!)) return NextResponse.json({ success: false, error: 'Only the owner and admins can reset the link.' }, { status: 403 })
    const token = await saveToken(projectId, layout!)
    return NextResponse.json({ success: true, data: links(siteOrigin(request), token) })
  } catch (err) {
    console.error('Error resetting calendar link:', err)
    return NextResponse.json({ success: false, error: 'Failed to reset the link.' }, { status: 500 })
  }
}
