import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { isEmail } from '@/lib/career/career'
import { hashToken, newToken, vouchConfirmEmail, workLabel } from '@/lib/career/server'
import { sendEmail, siteUrl } from '@/lib/email/send'

const clip = (v: unknown, n: number) => (typeof v === 'string' && v.trim() ? v.trim().slice(0, n) : null)

// POST /api/career/vouch/[token] - the signer (no account) signs or declines.
// Signing emails a confirmation link; the seal appears only once they click it.
export async function POST(request: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const rl = await rateLimit(request, { id: 'career-vouch-sign', limit: 15, windowSeconds: 3600 })
  if (!rl.success) return rateLimitResponse(rl.reset)
  const { token } = await params
  const vouch = await prisma.careerVouch.findUnique({
    where: { requestTokenHash: hashToken(token) },
    include: { post: { select: { title: true, place: true, contentHash: true, user: { select: { name: true, email: true } } } } },
  })
  if (!vouch || vouch.expiresAt < new Date()) return NextResponse.json({ success: false, error: 'This link has expired or is not valid.' }, { status: 404 })
  if (vouch.status === 'VERIFIED' || vouch.status === 'DECLINED') {
    return NextResponse.json({ success: false, error: 'This request is already closed.' }, { status: 409 })
  }
  const b = await request.json().catch(() => ({}))

  if (b.action === 'decline') {
    await prisma.careerVouch.update({ where: { id: vouch.id }, data: { status: 'DECLINED', confirmTokenHash: null } })
    return NextResponse.json({ success: true, data: { status: 'declined' } })
  }

  const signerName = clip(b.signerName, 80)
  const email = typeof b.signerEmail === 'string' ? b.signerEmail.trim().toLowerCase() : ''
  if (!signerName) return NextResponse.json({ success: false, error: 'Add your name.' }, { status: 400 })
  if (!isEmail(email)) return NextResponse.json({ success: false, error: 'Add your email so we can confirm it’s you.' }, { status: 400 })
  if (email === vouch.post.user.email?.toLowerCase()) return NextResponse.json({ success: false, error: 'People can’t vouch for their own work.' }, { status: 400 })
  if (b.hash !== vouch.post.contentHash) {
    return NextResponse.json({ success: false, error: 'This post was just changed. Reload the page to see the latest version before you vouch.' }, { status: 409 })
  }

  const confirm = newToken()
  await prisma.careerVouch.update({
    where: { id: vouch.id },
    data: {
      status: 'SIGNED', signerName, signerEmail: email,
      signerRole: clip(b.signerRole, 80), signerCompany: clip(b.signerCompany, 80),
      anonymousAs: b.anonymous ? clip(b.anonymousAs, 80) || 'Verified client' : null,
      comment: clip(b.comment, 600), signedHash: vouch.post.contentHash, signedAt: new Date(),
      confirmTokenHash: confirm.hash,
      // Leave a week to click the email link
      expiresAt: new Date(Math.max(vouch.expiresAt.getTime(), Date.now() + 7 * 86400_000)),
    },
  })
  const base = `${siteUrl()}/vouch/confirm/${confirm.token}`
  const mail = vouchConfirmEmail({ ownerName: vouch.post.user.name || 'this member', work: workLabel(vouch.post), confirmUrl: base, declineUrl: `${base}?not-me=1` })
  const sent = await sendEmail({ to: email, ...mail })
  return NextResponse.json({ success: true, data: { status: 'awaiting-email', emailed: sent.sent } })
}
