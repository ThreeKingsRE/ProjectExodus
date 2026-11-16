/**
 * Send a transactional email through Resend's HTTP API (no SDK needed).
 *
 * Needs RESEND_API_KEY and EMAIL_FROM (e.g. "Project Exodus <hello@yourdomain.com>",
 * on a domain verified in Resend). Without them nothing is sent: the call
 * logs and reports `sent: false`, so sign-up and other flows keep working.
 */
export type OutgoingEmail = { to: string; subject: string; html: string; text: string }
export type SendResult = { sent: true; id: string } | { sent: false; reason: 'not-configured' | 'failed'; detail?: string }

export function emailConfigured() {
  return Boolean(process.env.RESEND_API_KEY?.trim() && process.env.EMAIL_FROM?.trim())
}

export async function sendEmail(msg: OutgoingEmail): Promise<SendResult> {
  const key = process.env.RESEND_API_KEY?.trim()
  const from = process.env.EMAIL_FROM?.trim()
  if (!key || !from) {
    console.warn(`[email] not configured (RESEND_API_KEY / EMAIL_FROM); skipped "${msg.subject}"`)
    return { sent: false, reason: 'not-configured' }
  }
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [msg.to], subject: msg.subject, html: msg.html, text: msg.text }),
      signal: AbortSignal.timeout(8000),
    })
    const data = (await res.json().catch(() => ({}))) as { id?: string; message?: string }
    if (!res.ok || !data.id) {
      console.error('[email] Resend rejected the message:', res.status, data.message)
      return { sent: false, reason: 'failed', detail: data.message }
    }
    return { sent: true, id: data.id }
  } catch (err) {
    console.error('[email] send failed:', err)
    return { sent: false, reason: 'failed' }
  }
}

/** Public base URL for links in emails. Never derived from the request's Host header. */
export function siteUrl() {
  for (const candidate of [process.env.NEXT_PUBLIC_SITE_URL, process.env.NEXTAUTH_URL, process.env.AUTH_URL]) {
    if (!candidate?.trim()) continue
    try {
      const url = new URL(candidate.trim())
      if (url.username || url.password || !['http:', 'https:'].includes(url.protocol)) continue
      const local = ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname) || url.hostname.endsWith('.localhost')
      if (process.env.NODE_ENV === 'production' && (url.protocol !== 'https:' || local)) continue
      return url.origin
    } catch {
      // Ignore malformed deployment settings rather than email a broken link.
    }
  }
  return process.env.NODE_ENV === 'production' ? 'https://www.projxodus.com' : 'http://localhost:3000'
}
