import { NextRequest, NextResponse } from 'next/server'

interface RateLimitStore {
  [key: string]: {
    count: number
    resetTime: number
  }
}

const store: RateLimitStore = {}

// Clean up old entries every 10 minutes
setInterval(() => {
  const now = Date.now()
  Object.keys(store).forEach((key) => {
    if (store[key].resetTime < now) {
      delete store[key]
    }
  })
}, 10 * 60 * 1000).unref?.()

export interface RateLimitConfig {
  /**
   * Unique identifier for this rate limit (e.g., 'api', 'auth', 'upload')
   */
  id: string
  /**
   * Maximum number of requests allowed in the window
   */
  limit: number
  /**
   * Time window in seconds
   */
  windowSeconds: number
}

type RateLimitResult = { success: boolean; limit: number; remaining: number; reset: number }

/**
 * Fixed-window counter in Upstash Redis (REST API, no SDK needed), shared by
 * every serverless instance. Returns null when Upstash isn't configured or
 * can't be reached, so the caller falls back to the per-instance memory store.
 */
async function redisWindow(key: string, windowMs: number, limit: number): Promise<RateLimitResult | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  try {
    const res = await fetch(`${url.replace(/\/$/, '')}/pipeline`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify([
        ['INCR', `rl:${key}`],
        ['PEXPIRE', `rl:${key}`, String(windowMs), 'NX'],
        ['PTTL', `rl:${key}`],
      ]),
      cache: 'no-store',
      signal: AbortSignal.timeout(1500),
    })
    if (!res.ok) return null
    const [incr, , pttl] = (await res.json()) as Array<{ result?: number; error?: string }>
    if (typeof incr?.result !== 'number') return null
    const count = incr.result
    const ttl = typeof pttl?.result === 'number' && pttl.result > 0 ? pttl.result : windowMs
    return { success: count <= limit, limit, remaining: Math.max(0, limit - count), reset: Date.now() + ttl }
  } catch {
    return null
  }
}

/**
 * Rate limiter. Uses Upstash Redis when UPSTASH_REDIS_REST_URL and
 * UPSTASH_REDIS_REST_TOKEN are set (limits hold across serverless instances);
 * otherwise an in-memory store, which only limits per instance.
 */
export async function rateLimit(
  request: NextRequest,
  config: RateLimitConfig
): Promise<RateLimitResult> {
  // Get identifier (IP address or user ID)
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') || 'unknown'

  const key = `${config.id}:${ip}`
  const windowMs0 = config.windowSeconds * 1000
  const shared = await redisWindow(key, windowMs0, config.limit)
  if (shared) return shared

  const now = Date.now()
  const windowMs = config.windowSeconds * 1000

  if (!store[key] || store[key].resetTime < now) {
    // First request or window expired
    store[key] = {
      count: 1,
      resetTime: now + windowMs,
    }

    return {
      success: true,
      limit: config.limit,
      remaining: config.limit - 1,
      reset: store[key].resetTime,
    }
  }

  store[key].count++

  if (store[key].count > config.limit) {
    return {
      success: false,
      limit: config.limit,
      remaining: 0,
      reset: store[key].resetTime,
    }
  }

  return {
    success: true,
    limit: config.limit,
    remaining: config.limit - store[key].count,
    reset: store[key].resetTime,
  }
}

/**
 * Helper to create rate limit response
 */
export function rateLimitResponse(resetTime: number): NextResponse {
  const resetDate = new Date(resetTime)

  return NextResponse.json(
    {
      success: false,
      error: 'Too many requests. Please try again later.',
      retryAfter: Math.ceil((resetTime - Date.now()) / 1000),
    },
    {
      status: 429,
      headers: {
        'Retry-After': Math.ceil((resetTime - Date.now()) / 1000).toString(),
        'X-RateLimit-Reset': resetDate.toISOString(),
      },
    }
  )
}
