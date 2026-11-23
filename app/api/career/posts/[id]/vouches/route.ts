import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { isEmail, VOUCH_DAYS } from '@/lib/career/career'
import { newToken, vouchRequestEmail, workLabel } from '@/lib/career/server'
import { sendEmail, siteUrl } from '@/lib/email/send'

const clip = (v: unknown, n: number) => (typeof v === 'string' && v.trim() ? v.trim().slice(0, n) : null)

// POST /api/career/posts/[id]/vouches - ask a supervisor, employer or client to vouch.
// Emails them a link and returns it so the owner can also text it.
export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
  const rl = await rateLimit(request, { id: `career-vouch-ask-${session.user.id}`, limit: 30, windowSeconds: 86400 })
  if (!rl.success) return rateLimitResponse(rl.reset)

  const { id } = await params
  const post = await prisma.careerPost.findFirst({
    where: { id, userId: session.user.id },
    select: { id: true, title: true, place: true, user: { select: { name: true, email: true } } },
  })
  if (!post) return NextResponse.json({ success: false, error: 'Post not found.' }, { status: 404 })
  const open = await prisma.careerVouch.count({ where: { postId: id, status: { in: ['REQUESTED', 'SIGNED'] } } })
  if (open >= 10) return NextResponse.json({ success: false, error: 'This post already has 10 open requests.' }, { status: 400 })

  const b = await request.json().catch(() => ({}))
  const signerName = clip(b.signerName, 80)
  const signerRole = clip(b.signerRole, 80)
  const signerEmail = typeof b.signerEmail === 'string' ? b.signerEmail.trim().toLowerCase() : ''
  if (!signerName) return NextResponse.json({ success: false, error: 'Add their name.' }, { status: 400 })
  if (signerEmail && !isEmail(signerEmail)) return NextResponse.json({ success: false, error: 'That email doesn’t look right.' }, { status: 400 })
  if (signerEmail && signerEmail === post.user.email?.toLowerCase()) {
    return NextResponse.json({ success: false, error: 'You can’t vouch for your own work.' }, { status: 400 })
  }

  const { token, hash } = newToken()
  await prisma.careerVouch.create({
    data: {
      postId: id, signerName, signerRole, signerEmail: signerEmail || '', requestTokenHash: hash,
      expiresAt: new Date(Date.now() + VOUCH_DAYS * 86400_000),
    },
  })
  const url = `${siteUrl()}/vouch/${token}`
  let emailed = false
  if (signerEmail) {
    const mail = vouchRequestEmail({ ownerName: post.user.name || 'A Project Exodus member', signerName, work: workLabel(post), url })
    emailed = (await sendEmail({ to: signerEmail, ...mail })).sent
  }
  return NextResponse.json({ success: true, data: { url, emailed } }, { status: 201 })
}
