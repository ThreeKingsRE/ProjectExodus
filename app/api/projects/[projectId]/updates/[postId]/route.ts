import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { getAccess } from '@/lib/projects/access-server'
import { isCollaborator, isManagerAccess } from '@/lib/projects/access'
import { parseUpdateInput } from '@/lib/social/updates'

type Params = { params: Promise<{ projectId: string; postId: string }> }

async function load(projectId: string, postId: string) {
  const session = await auth()
  if (!session?.user?.id) return { error: NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 }) }
  const [access, post] = await Promise.all([
    getAccess(projectId, session.user.id),
    prisma.socialPost.findFirst({ where: { id: postId, projectId }, select: { id: true, userId: true } }),
  ])
  if (!access || !post) return { error: NextResponse.json({ success: false, error: 'Update not found.' }, { status: 404 }) }
  return { access, post, userId: session.user.id }
}

// PATCH - The author edits their update (while still on the team); owners/admins pin or unpin
export async function PATCH(request: NextRequest, { params }: Params) {
  try {
    const { projectId, postId } = await params
    const { access, post, userId, error } = await load(projectId, postId)
    if (error) return error
    const body = await request.json().catch(() => null)
    const data: Record<string, unknown> = {}

    if (typeof body?.isPinned === 'boolean') {
      if (!isManagerAccess(access!)) return NextResponse.json({ success: false, error: 'Only the owner and admins can pin updates.' }, { status: 403 })
      data.isPinned = body.isPinned
    }
    const wantsEdit = ['title', 'content', 'visibility'].some(k => body?.[k] !== undefined)
    if (wantsEdit) {
      if (post!.userId !== userId || !isCollaborator(access!)) {
        return NextResponse.json({ success: false, error: 'Only the person who posted this can edit it.' }, { status: 403 })
      }
      const parsed = parseUpdateInput(body, true)
      if (!parsed.ok) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 })
      const { images: _images, ...rest } = parsed.data
      Object.assign(data, rest)
    }
    if (!Object.keys(data).length) return NextResponse.json({ success: false, error: 'Nothing to change.' }, { status: 400 })

    await prisma.socialPost.update({ where: { id: postId }, data })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error updating initiative update:', err)
    return NextResponse.json({ success: false, error: 'Failed to save.' }, { status: 500 })
  }
}

// DELETE - The author, or the owner/admins
export async function DELETE(_request: NextRequest, { params }: Params) {
  try {
    const { projectId, postId } = await params
    const { access, post, userId, error } = await load(projectId, postId)
    if (error) return error
    if (post!.userId !== userId && !isManagerAccess(access!)) {
      return NextResponse.json({ success: false, error: 'Only the author or an admin can delete this update.' }, { status: 403 })
    }
    await prisma.socialPost.delete({ where: { id: postId } })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error deleting initiative update:', err)
    return NextResponse.json({ success: false, error: 'Failed to delete.' }, { status: 500 })
  }
}
