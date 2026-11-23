import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { parsePostInput } from '@/lib/career/career'
import { ownerPost, toDbPost, VOUCH_SELECT } from '@/lib/career/server'

type Ctx = { params: Promise<{ id: string }> }

async function ownPost(id: string) {
  const session = await auth()
  if (!session?.user?.id) return { error: NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 }) }
  const post = await prisma.careerPost.findFirst({ where: { id, userId: session.user.id }, select: { id: true } })
  if (!post) return { error: NextResponse.json({ success: false, error: 'Post not found.' }, { status: 404 }) }
  return { post }
}

// PATCH /api/career/posts/[id] - edit. Changing vouched details changes the hash, so seals drop off.
export async function PATCH(request: NextRequest, { params }: Ctx) {
  const { id } = await params
  const own = await ownPost(id)
  if (own.error) return own.error
  const parsed = parsePostInput(await request.json().catch(() => null))
  if (!parsed.ok) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 })
  const post = await prisma.careerPost.update({
    where: { id }, data: toDbPost(parsed.data),
    include: { vouches: { select: VOUCH_SELECT, orderBy: { createdAt: 'desc' } } },
  })
  return NextResponse.json({ success: true, data: ownerPost(post) })
}

// DELETE /api/career/posts/[id]
export async function DELETE(_request: NextRequest, { params }: Ctx) {
  const { id } = await params
  const own = await ownPost(id)
  if (own.error) return own.error
  await prisma.careerPost.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
