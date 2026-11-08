import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { passwordSchema } from '@/lib/auth/password'
import { buildVerifyEmail } from '@/lib/email/verify'
import { sendEmail, siteUrl } from '@/lib/email/send'
import { z } from 'zod'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'

// List of known disposable/temporary email domains to block bots
const DISPOSABLE_EMAIL_DOMAINS = [
  'tempmail.com', 'throwaway.email', 'guerrillamail.com', 'mailinator.com',
  '10minutemail.com', 'temp-mail.org', 'fakeinbox.com', 'yopmail.com',
  'getnada.com', 'dispostable.com', 'trashmail.com', 'maildrop.cc',
  'guerrillamail.info', 'sharklasers.com', 'grr.la', 'guerrillamail.net'
]

// Simple bot-resistant email validation
const isNotDisposableEmail = (email: string): boolean => {
  const domain = email.split('@')[1]?.toLowerCase()
  if (!domain) return false
  // Only block known disposable email services
  return !DISPOSABLE_EMAIL_DOMAINS.some(d => domain.includes(d))
}

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100).trim(),
  email: z.string()
    .email('Invalid email address')
    .toLowerCase()
    .trim()
    .refine(isNotDisposableEmail, 'Disposable email addresses are not allowed'),
  password: passwordSchema,
})

export async function POST(req: NextRequest) {
  try {
    // Rate limiting: 5 registration attempts per hour
    const rateLimitResult = await rateLimit(req, {
      id: 'register',
      limit: 5,
      windowSeconds: 3600,
    })

    if (!rateLimitResult.success) {
      return rateLimitResponse(rateLimitResult.reset)
    }

    const body = await req.json()

    // Validate and sanitize input
    const validatedData = registerSchema.parse(body)

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 12)

    // Create user
    const user = await prisma.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        password: hashedPassword,
        role: 'USER', // Default role
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      }
    })

    // Send the verification email; failure to send never blocks sign-up
    let verificationSent = false
    try {
      const token = crypto.randomUUID()
      await prisma.verificationToken.create({ data: { identifier: user.email!, token, expires: new Date(Date.now() + 24 * 60 * 60 * 1000) } })
      verificationSent = (await sendEmail({ to: user.email!, ...buildVerifyEmail(`${siteUrl()}/auth/verify?token=${token}`) })).sent
    } catch (err) {
      console.error('Verification email error:', err)
    }

    return NextResponse.json(
      {
        success: true,
        verificationSent,
        message: 'User created successfully',
        user
      },
      { status: 201 }
    )

  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstIssue = error.issues[0]
      return NextResponse.json(
        {
          error: firstIssue?.message || 'Validation failed',
          field: firstIssue?.path?.[0] || null,
          details: error.issues
        },
        { status: 400 }
      )
    }

    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
