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
  return Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM)
}

export async function sendEmail(msg: OutgoingEmail): Promise<SendResult> {
  const key = process.env.RESEND_API_KEY
  const from = process.env.EMAIL_FROM
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
  return (process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXTAUTH_URL || process.env.AUTH_URL || 'http://localhost:3000').replace(/\/$/, '')
}
