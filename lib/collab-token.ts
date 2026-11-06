/**
 * Signed, short-lived tokens for PartyKit collaboration rooms.
 *
 * The Next.js app issues a token (after checking document permissions) and the
 * PartyKit server verifies it before accepting a WebSocket. Both sides share
 * PARTYKIT_SECRET. Uses only WebCrypto so it runs in Node and in PartyKit's
 * Cloudflare Workers runtime; keep this file free of Node-only imports.
 *
 * Format: base64url(JSON claims) + "." + base64url(HMAC-SHA256(payload))
 */

export interface CollabTokenClaims {
  /** User id */
  sub: string
  /** Display name for presence/cursors */
  name: string
  /** Room the token is valid for, e.g. "document:abc123" */
  room: string
  /** Whether the user may write to the Y.js document */
  canEdit: boolean
  /** Expiry, seconds since epoch */
  exp: number
}

export const COLLAB_TOKEN_TTL_SECONDS = 5 * 60

const encoder = new TextEncoder()

function base64UrlEncode(bytes: Uint8Array): string {
  let binary = ''
  for (const b of bytes) binary += String.fromCharCode(b)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function base64UrlDecode(input: string): Uint8Array<ArrayBuffer> {
  const base64 = input.replace(/-/g, '+').replace(/_/g, '/')
  const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4)
  const binary = atob(padded)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  )
}

export async function signCollabToken(
  claims: Omit<CollabTokenClaims, 'exp'>,
  secret: string,
  ttlSeconds = COLLAB_TOKEN_TTL_SECONDS
): Promise<string> {
  const full: CollabTokenClaims = {
    ...claims,
    exp: Math.floor(Date.now() / 1000) + ttlSeconds,
  }
  const payload = base64UrlEncode(encoder.encode(JSON.stringify(full)))
  const key = await hmacKey(secret)
  const sig = new Uint8Array(await crypto.subtle.sign('HMAC', key, encoder.encode(payload)))
  return `${payload}.${base64UrlEncode(sig)}`
}

/**
 * Verify a token's signature, expiry and room. Returns the claims, or null if
 * the token is invalid for any reason.
 */
export async function verifyCollabToken(
  token: string,
  secret: string,
  expectedRoom: string
): Promise<CollabTokenClaims | null> {
  const [payload, sig, extra] = token.split('.')
  if (!payload || !sig || extra !== undefined) return null

  try {
    const key = await hmacKey(secret)
    // crypto.subtle.verify is constant-time
    const valid = await crypto.subtle.verify(
      'HMAC',
      key,
      base64UrlDecode(sig),
      encoder.encode(payload)
    )
    if (!valid) return null

    const claims = JSON.parse(new TextDecoder().decode(base64UrlDecode(payload))) as CollabTokenClaims
    if (typeof claims.sub !== 'string' || typeof claims.exp !== 'number') return null
    if (claims.exp < Math.floor(Date.now() / 1000)) return null
    if (claims.room !== expectedRoom) return null

    return claims
  } catch {
    return null
  }
}
