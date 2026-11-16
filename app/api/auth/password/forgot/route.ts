import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { RESET_PREFIX, newResetToken, hashToken } from '@/lib/auth/password'
import { buildResetEmail } from '@/lib/email/reset'
import { emailConfigured, sendEmail, siteUrl } from '@/lib/email/send'

// Always answers the same way, so it can't be used to find out who has an account.
const OK = { success: true, message: 'If this email has an account with a password, we will email a reset link. Check your spam folder, or use your original sign-in provider.' }
const emailSchema = z.string().trim().toLowerCase().email().max(254)

export async function POST(request: NextRequest) {
  const limited = await rateLimit(request, { id: 'password-forgot', limit: 5, windowSeconds: 3600 })
  if (!limited.success) return rateLimitResponse(limited.reset)

  const body = await request.json().catch(() => null)
  const parsed = emailSchema.safeParse(body?.email)
  if (!parsed.success) return NextResponse.json({ success: false, error: 'Enter a valid email address' }, { status: 400 })
  const email = parsed.data

  // Check before looking up the account, so service availability reveals no account data.
  if (process.env.NODE_ENV !== 'development' && !emailConfigured()) {
    console.error('[password-reset] Email is not configured: set RESEND_API_KEY and EMAIL_FROM')
    return NextResponse.json({ success: false, error: 'Password reset email is temporarily unavailable. Please try again later.' }, { status: 503 })
  }

  try {
    const user = await prisma.user.findUnique({ where: { email }, select: { id: true, password: true } })
    // Accounts that only sign in with Google/GitHub have no password to reset
    if (!user?.password) return NextResponse.json(OK)

    const identifier = `${RESET_PREFIX}${email}`
    const token = newResetToken()
    // Keep previous links valid if this request cannot be delivered.
    await prisma.verificationToken.create({ data: { identifier, token: hashToken(token), expires: new Date(Date.now() + 60 * 60 * 1000) } })

    const resetUrl = `${siteUrl()}/auth/reset-password?token=${encodeURIComponent(token)}`
    const result = await sendEmail({ to: email, ...buildResetEmail(resetUrl) })
    if (!result.sent && process.env.NODE_ENV !== 'development') {
      await prisma.verificationToken.deleteMany({ where: { token: hashToken(token) } })
      // Keep the public response identical for unknown accounts and provider failures.
      console.error('[password-reset] Delivery failed:', result.reason)
    }
    return NextResponse.json({
      ...OK,
      // Local development without an email provider: hand back the link so the flow can be tested
      ...(process.env.NODE_ENV === 'development' && !result.sent ? { devResetUrl: resetUrl } : {}),
    })
  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json({ success: false, error: 'Password reset is temporarily unavailable. Please try again later.' }, { status: 503 })
  }
}
