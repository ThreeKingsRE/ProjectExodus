// Validation for initiative updates (posts made on an initiative's behalf).

export const UPDATE_AUDIENCES = ['PUBLIC', 'FOLLOWERS_ONLY', 'PRIVATE'] as const
export type UpdateAudience = (typeof UPDATE_AUDIENCES)[number]

export const AUDIENCE_LABEL: Record<UpdateAudience, string> = {
  PUBLIC: 'Everyone (also in the community feed)',
  FOLLOWERS_ONLY: 'Followers and team',
  PRIVATE: 'Team only',
}

const IMAGE_HOSTS = ['res.cloudinary.com', 'utfs.io']
export const MAX_UPDATE_IMAGES = 6

/** Images must be uploaded through the site (Cloudinary or UploadThing). */
export function isAllowedImageUrl(raw: unknown): raw is string {
  if (typeof raw !== 'string' || raw.length > 2000) return false
  try {
    const url = new URL(raw)
    return url.protocol === 'https:' && IMAGE_HOSTS.some(h => url.hostname === h || url.hostname.endsWith(`.${h}`))
  } catch {
    return false
  }
}

export interface UpdateInput {
  title: string | null
  content: string
  visibility: UpdateAudience
  images: string[]
  hashtags: string[]
}

type Result<T> = { ok: true; data: T } | { ok: false; error: string }

export function parseUpdateInput(body: unknown, partial: boolean): Result<Partial<UpdateInput>> {
  if (!body || typeof body !== 'object') return { ok: false, error: 'Invalid request.' }
  const b = body as Record<string, unknown>
  const data: Partial<UpdateInput> = {}
  if (b.title !== undefined) {
    const t = typeof b.title === 'string' ? b.title.trim() : ''
    if (t.length > 160) return { ok: false, error: 'Keep the headline under 160 characters.' }
    data.title = t || null
  }
  if (b.content !== undefined || !partial) {
    const c = typeof b.content === 'string' ? b.content.trim() : ''
    if (!c) return { ok: false, error: 'Write something for your update.' }
    if (c.length > 10000) return { ok: false, error: 'Updates can be up to 10,000 characters.' }
    data.content = c
    data.hashtags = [...new Set((c.match(/#[\w-]+/g) || []).map(t => t.slice(1).toLowerCase()))].slice(0, 30)
  }
  if (b.visibility !== undefined || !partial) {
    const v = b.visibility ?? 'PUBLIC'
    if (!(UPDATE_AUDIENCES as readonly string[]).includes(v as string)) return { ok: false, error: 'Choose who can see this update.' }
    data.visibility = v as UpdateAudience
  }
  if (b.images !== undefined) {
    if (!Array.isArray(b.images) || b.images.length > MAX_UPDATE_IMAGES) return { ok: false, error: `Add up to ${MAX_UPDATE_IMAGES} photos.` }
    if (!b.images.every(isAllowedImageUrl)) return { ok: false, error: 'Photos must be uploaded through the site.' }
    data.images = b.images as string[]
  }
  return { ok: true, data }
}
