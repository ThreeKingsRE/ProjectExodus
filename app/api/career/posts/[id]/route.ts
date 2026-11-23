import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { MAX_PINNED, parsePostInput } from '@/lib/career/career'
import { getOrCreateProfile, ownerPost, postInclude, setPeople, toDbPost } from '@/lib/career/server'

type Ctx = { params: Promise<{ id: string }> }

async function own(id: string) {
  const session = await auth()
  if (!session?.user?.id) return { error: NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 }) }
  const post = await prisma.careerPost.findFirst({ where: { id, userId: session.user.id }, select: { id: true, pinned: true } })
  if (!post) return { error: NextResponse.json({ success: false, error: 'Post not found.' }, { status: 404 }) }
  return { post, user: { id: session.user.id, name: session.user.name ?? null } }
}

const tooManyPins = async (userId: string) =>
  (await prisma.careerPost.count({ where: { userId, pinned: true } })) >= MAX_PINNED

// PATCH /api/career/posts/[id]
//   { pinned: boolean } alone: pin or unpin
//   a full post: edit it. Changing vouched details changes the hash, so seals drop off.
export async function PATCH(request: NextRequest, { params }: Ctx) {
  const { id } = await params
  const o = await own(id)
  if (o.error) return o.error
  const body = await request.json().catch(() => null)
  const pinOnly = body && typeof body === 'object' && Object.keys(body).length === 1 && typeof body.pinned === 'boolean'
  const pinning = pinOnly ? body.pinned : parsePostInput(body).ok && body.pinned === true
  if (pinning && !o.post.pinned && (await tooManyPins(o.user.id))) {
    return NextResponse.json({ success: false, error: `You can pin up to ${MAX_PINNED} posts. Unpin one first.` }, { status: 400 })
  }
  if (pinOnly) {
    await prisma.careerPost.update({ where: { id }, data: { pinned: body.pinned } })
  } else {
    const parsed = parsePostInput(body)
    if (!parsed.ok) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 })
    await prisma.careerPost.update({ where: { id }, data: toDbPost(parsed.data) })
    const profile = await getOrCreateProfile(o.user.id, o.user.name)
    await setPeople(id, o.user, parsed.data.people, `/career/${profile.handle}`)
  }
  const post = await prisma.careerPost.findUnique({ where: { id }, include: postInclude() })
  return NextResponse.json({ success: true, data: ownerPost(post) })
}

// DELETE /api/career/posts/[id]
export async function DELETE(_request: NextRequest, { params }: Ctx) {
  const { id } = await params
  const o = await own(id)
  if (o.error) return o.error
  await prisma.careerPost.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
