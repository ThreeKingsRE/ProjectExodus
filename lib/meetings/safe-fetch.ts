// Fetch a public calendar from ANY website without letting a link reach our own
// network: https only, no IP-address links, and every address the name resolves to
// must be a public one. The check happens inside the connection itself (custom DNS
// lookup), so a name can't switch to an internal address after it was checked.

import https from 'node:https'
import dns from 'node:dns'
import net from 'node:net'

export function isPublicIp(ip: string): boolean {
  if (net.isIPv6(ip)) {
    const v = ip.toLowerCase()
    const mapped = v.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/)
    if (mapped) return isPublicIp(mapped[1])
    return !(v === '::' || v === '::1' || /^f[cd]/.test(v) || /^fe[89ab]/.test(v) || v.startsWith('ff') || v.startsWith('2001:db8'))
  }
  const p = ip.split('.').map(Number)
  if (p.length !== 4 || p.some((n) => !Number.isInteger(n) || n < 0 || n > 255)) return false
  const [a, b] = p
  if (a === 0 || a === 10 || a === 127 || a >= 224) return false
  if (a === 169 && b === 254) return false
  if (a === 172 && b >= 16 && b <= 31) return false
  if (a === 192 && (b === 168 || (b === 0 && p[2] === 0))) return false
  if (a === 100 && b >= 64 && b <= 127) return false
  if (a === 198 && (b === 18 || b === 19)) return false
  return true
}

/** webcal://... is just https://... */
export function normalizeCalendarUrl(raw: string): string {
  return raw.trim().replace(/^webcal:\/\//i, 'https://').replace(/^webcals:\/\//i, 'https://')
}

export function checkPublicUrl(raw: string): { ok: true; url: URL } | { ok: false; error: string } {
  let u: URL
  try { u = new URL(normalizeCalendarUrl(raw)) } catch { return { ok: false, error: 'That doesn’t look like a link.' } }
  if (u.protocol !== 'https:') return { ok: false, error: 'Calendar links must be https:// (or webcal://).' }
  if (u.username || u.password) return { ok: false, error: 'Links with a login in them aren’t allowed.' }
  if (net.isIP(u.hostname.replace(/^\[|\]$/g, ''))) return { ok: false, error: 'Use the website’s address, not a number.' }
  if (u.port && u.port !== '443') return { ok: false, error: 'That link uses an unusual port.' }
  if (!u.hostname.includes('.') || u.hostname.endsWith('.local') || u.hostname.endsWith('.internal')) return { ok: false, error: 'That isn’t a public website.' }
  return { ok: true, url: u }
}

function getOnce(url: URL, maxBytes: number, accept: string): Promise<{ status: number; location?: string; body: string }> {
  return new Promise((resolve, reject) => {
    const req = https.request(url, {
      method: 'GET', timeout: 10000, headers: { Accept: accept, 'User-Agent': 'ProjectExodus-Meetings/1.0 (+https://www.projxodus.com)' },
      lookup: (host, opts, cb) => {
        dns.lookup(host, { all: true }, (err, addrs) => {
          if (err) return cb(err, '', 4)
          const ok = addrs.filter((a) => isPublicIp(a.address))
          if (!ok.length || ok.length !== addrs.length) return cb(new Error('That address isn’t allowed.'), '', 4)
          if ((opts as { all?: boolean }).all) return (cb as unknown as (e: null, a: dns.LookupAddress[]) => void)(null, ok)
          cb(null, ok[0].address, ok[0].family)
        })
      },
    }, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400) { res.resume(); return resolve({ status: res.statusCode, location: res.headers.location, body: '' }) }
      const chunks: Buffer[] = []; let size = 0
      res.on('data', (c: Buffer) => { size += c.length; if (size > maxBytes) { req.destroy(new Error('That file is too large.')); return } chunks.push(c) })
      res.on('end', () => resolve({ status: res.statusCode ?? 0, body: Buffer.concat(chunks).toString('utf8') }))
    })
    req.on('timeout', () => req.destroy(new Error('That site took too long to answer.')))
    req.on('error', reject)
    req.end()
  })
}

/** GET a public https page (up to 4 redirects, each one re-checked). */
export async function safeGetText(raw: string, opts: { maxBytes?: number; accept?: string } = {}): Promise<string> {
  let target = raw
  for (let hop = 0; hop < 5; hop++) {
    const c = checkPublicUrl(target)
    if (!c.ok) throw new Error(c.error)
    const r = await getOnce(c.url, opts.maxBytes ?? 5 * 1024 * 1024, opts.accept ?? 'text/calendar, text/plain;q=0.8, */*;q=0.1')
    if (r.status >= 300 && r.status < 400) {
      if (!r.location) throw new Error('The link redirected without a destination.')
      target = new URL(r.location, c.url).toString(); continue
    }
    if (r.status === 403 || r.status === 401) throw new Error('That website blocks automatic readers, so it can’t be connected. Try adding the meetings by hand.')
    if (r.status < 200 || r.status >= 300) throw new Error(`That site answered with an error (${r.status}).`)
    return r.body
  }
  throw new Error('The link redirected too many times.')
}
