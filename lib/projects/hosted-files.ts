import 'server-only'
import { createHmac, timingSafeEqual } from 'crypto'
import type { FileForViewer } from './files'

// Initiative files hosted by the site (/projects/<slug>/<file>) are private: the
// /projects route serves them only to people the file is shared with. Previews in
// Microsoft's Office viewer are fetched by Microsoft's servers, which have no
// session, so the links we hand to a viewer who may see the file carry a short-lived
// signature instead.

const TTL_SECONDS = 60 * 60

function secret(): string {
  const s = process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET
  if (!s) throw new Error('AUTH_SECRET is not set')
  return s
}

const mac = (path: string, exp: number) => createHmac('sha256', secret()).update(`hosted-file:${path}:${exp}`).digest('base64url')

/** Add ?exp&sig to a site-hosted /projects/... link; other links are returned unchanged. */
export function signHostedUrl(url: string, now = Date.now()): string {
  let parsed: URL
  try { parsed = new URL(url, 'https://www.projxodus.com') } catch { return url }
  if (!/^(www\.)?projxodus\.com$/.test(parsed.hostname) || !parsed.pathname.startsWith('/projects/')) return url
  const exp = Math.floor(now / 1000) + TTL_SECONDS
  parsed.search = `?exp=${exp}&sig=${mac(parsed.pathname, exp)}`
  return parsed.toString()
}

export function verifyHostedSignature(path: string, exp: string | null, sig: string | null, now = Date.now()): boolean {
  if (!exp || !sig || !/^\d{9,11}$/.test(exp)) return false
  if (Number(exp) * 1000 < now) return false
  const expected = Buffer.from(mac(path, Number(exp)))
  const given = Buffer.from(sig)
  return expected.length === given.length && timingSafeEqual(expected, given)
}

/** Sign the hosted links in a file the viewer is already allowed to see. */
export function withSignedLinks<T extends FileForViewer | null>(file: T): T {
  if (!file || file.provider !== 'hosted') return file
  const sign = (u: string | null) => (u ? signHostedUrl(u) : u)
  let previewUrl = file.previewUrl
  if (previewUrl?.startsWith('https://view.officeapps.live.com/')) {
    const viewer = new URL(previewUrl)
    const src = viewer.searchParams.get('src')
    if (src) viewer.searchParams.set('src', signHostedUrl(src))
    previewUrl = viewer.toString()
  } else previewUrl = sign(previewUrl)
  return { ...file, previewUrl, openUrl: sign(file.openUrl) ?? file.openUrl }
}
