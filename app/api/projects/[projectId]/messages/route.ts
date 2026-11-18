import { NextRequest, NextResponse } from 'next/server'
import { requireFollowerOrTeam } from '@/lib/projects/guard'
import { isCollaborator } from '@/lib/projects/access'
import { prisma } from '@/lib/db'
import { pusherServer } from '@/lib/pusher'

// The Discussion tab has two channels:
// - PUBLIC: followers and the team talk together
// - TEAM: collaborators only
// Followers never receive, post to, or edit anything in the team channel.

type Channel = 'PUBLIC' | 'TEAM'

function pusherChannelFor(projectId: string, channel: Channel) {
  return channel === 'PUBLIC' ? `private-project-public-${projectId}` : `private-project-${projectId}`
}

function channelFrom(value: unknown): Channel | null {
  return value === 'PUBLIC' || value === 'TEAM' ? value : null
}

async function broadcast(projectId: string, channel: Channel, event: string, payload: unknown) {
  try {
    await pusherServer.trigger(pusherChannelFor(projectId, channel), event, payload)
  } catch (pusherError) {
    console.error('Error broadcasting message via Pusher:', pusherError)
  }
}

// Authors may correct their own messages while they can still see the channel.
export async function PATCH(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const { projectId } = await params
    const gate = await requireFollowerOrTeam(projectId)
    if (gate.error) return gate.error
    const { messageId, content } = await request.json()
    if (typeof messageId !== 'string' || typeof content !== 'string' || !content.trim() || content.length > 10000) {
      return NextResponse.json({ success: false, error: 'Enter a message of 1 to 10,000 characters.' }, { status: 400 })
    }
    const message = await prisma.projectMessage.findUnique({ where: { id: messageId } })
    if (!message || message.projectId !== projectId || (message.channel === 'TEAM' && !isCollaborator(gate.access))) {
      return NextResponse.json({ success: false, error: 'Message not found.' }, { status: 404 })
    }
    if (!gate.access.isCreator && message.userId !== gate.userId) {
      return NextResponse.json({ success: false, error: 'Only the initiative owner or the message author can edit this message.' }, { status: 403 })
    }
    const updated = await prisma.projectMessage.update({
      where: { id: messageId },
      data: { content: content.trim() },
      include: { user: { select: { id: true, name: true, image: true } } },
    })
    await broadcast(projectId, message.channel as Channel, 'message-updated', { message: updated })
    return NextResponse.json({ success: true, data: updated })
  } catch (error) {
    console.error('Error updating project message:', error)
    return NextResponse.json({ success: false, error: 'Could not save your message.' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const { projectId } = await params
    const gate = await requireFollowerOrTeam(projectId)
    if (gate.error) return gate.error
    const { messageId } = await request.json()
    if (typeof messageId !== 'string') return NextResponse.json({ success: false, error: 'Message ID is required.' }, { status: 400 })
    if (!gate.access.isCreator) return NextResponse.json({ success: false, error: 'Only the initiative owner can remove messages.' }, { status: 403 })
    const message = await prisma.projectMessage.findFirst({ where: { id: messageId, projectId }, select: { channel: true } })
    if (!message) return NextResponse.json({ success: false, error: 'Message not found.' }, { status: 404 })
    await prisma.projectMessage.deleteMany({ where: { id: messageId, projectId } })
    await broadcast(projectId, message.channel as Channel, 'message-deleted', { messageId })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error removing project message:', error)
    return NextResponse.json({ success: false, error: 'Could not remove the message.' }, { status: 500 })
  }
}

// GET /api/projects/[projectId]/messages?channel=PUBLIC|TEAM
export async function GET(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const { projectId } = await params
    const gate = await requireFollowerOrTeam(projectId)
    if (gate.error) return gate.error
    const team = isCollaborator(gate.access)
    const requested = channelFrom(request.nextUrl.searchParams.get('channel'))
    const channel: Channel = !team ? 'PUBLIC' : requested ?? 'TEAM'

    const messages = await prisma.projectMessage.findMany({
      where: { projectId, channel },
      include: { user: { select: { id: true, name: true, image: true } } },
      orderBy: { createdAt: 'desc' },
      take: 500,
    })

    return NextResponse.json({ success: true, data: messages.reverse(), channel, canSeeTeam: team })
  } catch (error) {
    console.error('Error fetching project messages:', error)
    return NextResponse.json({ success: false, error: 'Failed to fetch messages' }, { status: 500 })
  }
}

// POST /api/projects/[projectId]/messages - { content, channel }
export async function POST(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const { projectId } = await params
    const gate = await requireFollowerOrTeam(projectId)
    if (gate.error) return gate.error
    const body = await request.json()
    const { content } = body
    if (typeof content !== 'string' || !content.trim() || content.length > 10000) {
      return NextResponse.json({ success: false, error: 'Message content is required' }, { status: 400 })
    }
    const team = isCollaborator(gate.access)
    const requested = channelFrom(body.channel) ?? (team ? 'TEAM' : 'PUBLIC')
    if (requested === 'TEAM' && !team) {
      return NextResponse.json({ success: false, error: 'The team channel is for collaborators.' }, { status: 403 })
    }

    const message = await prisma.projectMessage.create({
      data: { content: content.trim(), projectId, userId: gate.userId, channel: requested },
      include: { user: { select: { id: true, name: true, image: true } } },
    })
    await broadcast(projectId, requested, 'message-created', { message })
    return NextResponse.json({ success: true, data: message })
  } catch (error) {
    console.error('Error posting project message:', error)
    return NextResponse.json({ success: false, error: 'Failed to post message' }, { status: 500 })
  }
}
