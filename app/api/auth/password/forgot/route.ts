import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { RESET_PREFIX, newResetToken, hashToken } from '@/lib/auth/password'
import { buildResetEmail } from '@/lib/email/reset'
import { sendEmail, siteUrl } from '@/lib/email/send'

// Always answers the same way, so it can't be used to find out who has an account.
const OK = { success: true, message: 'If an account exists for that email, a reset link is on its way.' }

export async function POST(request: NextRequest) {
  const limited = await rateLimit(request, { id: 'password-forgot', limit: 5, windowSeconds: 3600 })
  if (!limited.success) return rateLimitResponse(limited.reset)

  const body = await request.json().catch(() => null)
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
  if (!email) return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 })

  try {
    const user = await prisma.user.findUnique({ where: { email }, select: { id: true, password: true } })
    // Accounts that only sign in with Google/GitHub have no password to reset
    if (!user?.password) return NextResponse.json(OK)

    const identifier = `${RESET_PREFIX}${email}`
    const token = newResetToken()
    await prisma.verificationToken.deleteMany({ where: { identifier } })
    await prisma.verificationToken.create({ data: { identifier, token: hashToken(token), expires: new Date(Date.now() + 60 * 60 * 1000) } })

    const resetUrl = `${siteUrl()}/auth/reset-password?token=${encodeURIComponent(token)}`
    const result = await sendEmail({ to: email, ...buildResetEmail(resetUrl) })
    return NextResponse.json({
      ...OK,
      // Local development without an email provider: hand back the link so the flow can be tested
      ...(process.env.NODE_ENV !== 'production' && !result.sent ? { devResetUrl: resetUrl } : {}),
    })
  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json(OK)
  }
}
