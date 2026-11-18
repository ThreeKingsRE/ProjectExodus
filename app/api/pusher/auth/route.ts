import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { pusherServer } from '@/lib/pusher'
import { prisma } from '@/lib/db'
import { getAccess } from '@/lib/projects/access-server'
import { isCollaborator, isMemberOrFollower } from '@/lib/projects/access'

/**
 * Pusher Private Channel Authentication
 *
 * This endpoint validates that users can only subscribe to their own private channels.
 * Without this, anyone could potentially listen to any user's messages.
 *
 * Channel formats:
 * - private-chat-{userId} - for receiving direct messages
 * - private-notifications-{userId} - for receiving real-time notifications
 * - private-admin - for admin-only real-time updates (requires admin role)
 */
export async function POST(request: NextRequest) {
  try {
    const session = await auth()

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized - Please sign in' },
        { status: 401 }
      )
    }

    const data = await request.formData()
    const socketId = data.get('socket_id') as string
    const channel = data.get('channel_name') as string

    if (!socketId || !channel) {
      return NextResponse.json(
        { error: 'Missing socket_id or channel_name' },
        { status: 400 }
      )
    }

    // User-specific private channels
    const allowedChannels = [
      `private-chat-${session.user.id}`,
      `private-notifications-${session.user.id}`,
    ]

    const publicChannel = /^private-project-public-([A-Za-z0-9_-]{1,64})$/.exec(channel)
    const teamChannel = publicChannel ? null : /^private-project-([A-Za-z0-9_-]{1,64})$/.exec(channel)
    if (publicChannel || teamChannel) {
      // Initiative discussion: the public channel is for followers and the team,
      // the team channel for collaborators only.
      const access = await getAccess((publicChannel ?? teamChannel)![1], session.user.id)
      const allowed = access && (publicChannel ? isMemberOrFollower(access) : isCollaborator(access))
      if (!allowed) {
        return NextResponse.json({ error: 'Forbidden - Cannot subscribe to this channel' }, { status: 403 })
      }
    } else if (channel === 'private-admin') {
      // Verify user is admin
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { role: true }
      })

      const adminRoles = ['ADMIN', 'SUPER_ADMIN', 'MODERATOR']
      if (!user || !adminRoles.includes(user.role)) {
        return NextResponse.json(
          { error: 'Forbidden - Admin access required' },
          { status: 403 }
        )
      }
      // Admin is allowed to subscribe to admin channel
    } else if (!allowedChannels.includes(channel)) {
      return NextResponse.json(
        { error: 'Forbidden - Cannot subscribe to this channel' },
        { status: 403 }
      )
    }

    // Generate auth signature for Pusher
    const authResponse = pusherServer.authorizeChannel(socketId, channel)

    return NextResponse.json(authResponse)
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
