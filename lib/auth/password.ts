import { createHash, randomBytes } from 'crypto'
import { z } from 'zod'

/** Password rules shared by sign-up and password reset. */
export const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters')
  .max(100)
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character')

/** Reset tokens live in VerificationToken under this identifier prefix, stored hashed. */
export const RESET_PREFIX = 'reset:'
export const newResetToken = () => randomBytes(32).toString('base64url')
export const hashToken = (token: string) => createHash('sha256').update(token).digest('hex')
