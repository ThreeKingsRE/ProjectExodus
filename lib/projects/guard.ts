import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { getAccess } from './access-server'
import { isCollaborator, isMemberOrFollower, type Access } from './access'

type Gate = { access: Access & { visibility: string }; userId: string; error?: undefined } | { error: NextResponse }

async function gate(projectId: string, allow: (a: Access) => boolean, denied: string): Promise<Gate> {
  const session = await auth()
  if (!session?.user?.id) return { error: NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 }) }
  const access = await getAccess(projectId, session.user.id)
  if (!access) return { error: NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 }) }
  if (!allow(access)) return { error: NextResponse.json({ success: false, error: denied }, { status: 403 }) }
  return { access, userId: session.user.id }
}

/** Team-only areas: chat, research, learning, subgroups, Sage, documents, files, timeline. */
export function requireCollaborator(projectId: string) {
  return gate(projectId, isCollaborator, 'This part of the initiative is for its collaborators.')
}

/** Areas followers share with the team, such as the public discussion. */
export function requireFollowerOrTeam(projectId: string) {
  return gate(projectId, isMemberOrFollower, 'Follow this initiative to take part.')
}
