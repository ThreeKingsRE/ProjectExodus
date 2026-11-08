import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { passwordSchema, RESET_PREFIX, hashToken } from '@/lib/auth/password'

const schema = z.object({ token: z.string().min(20).max(200), password: passwordSchema })

export async function POST(request: NextRequest) {
  const limited = await rateLimit(request, { id: 'password-reset', limit: 10, windowSeconds: 3600 })
  if (!limited.success) return rateLimitResponse(limited.reset)

  const parsed = schema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) {
    return NextResponse.json({ success: false, error: parsed.error.issues[0]?.message ?? 'Invalid request' }, { status: 400 })
  }
  const { token, password } = parsed.data

  try {
    const record = await prisma.verificationToken.findUnique({ where: { token: hashToken(token) } })
    if (!record || !record.identifier.startsWith(RESET_PREFIX) || record.expires < new Date()) {
      return NextResponse.json({ success: false, error: 'This reset link is invalid or has expired. Please request a new one.' }, { status: 400 })
    }
    const email = record.identifier.slice(RESET_PREFIX.length)
    await prisma.$transaction([
      // Proving access to the inbox also verifies the address
      prisma.user.update({ where: { email }, data: { password: await bcrypt.hash(password, 12), emailVerified: new Date() } }),
      prisma.verificationToken.deleteMany({ where: { identifier: record.identifier } }),
    ])
    return NextResponse.json({ success: true, message: 'Password updated. You can sign in now.' })
  } catch (error) {
    console.error('Reset password error:', error)
    return NextResponse.json({ success: false, error: 'Could not reset the password. Please try again.' }, { status: 500 })
  }
}
