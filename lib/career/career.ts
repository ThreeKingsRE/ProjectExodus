// My Career: shared rules for work posts and vouches. No Node imports, so client
// components and tests can use it; hashing and tokens live in ./server.ts.

export const VISIBILITIES = ['PUBLIC', 'MEMBERS', 'PRIVATE'] as const
export type Visibility = (typeof VISIBILITIES)[number]
export const MAX_PHOTOS = 8
export const VOUCH_DAYS = 30

export interface CareerPhoto { url: string; takenAt?: string | null; label?: 'before' | 'after' | null }

export interface PostInput {
  title: string | null
  story: string | null
  trades: string[]
  role: string | null
  startedOn: string | null
  endedOn: string | null
  place: string | null
  materials: string | null
  photos: CareerPhoto[]
  visibility: Visibility
}

const clip = (v: unknown, n: number) => (typeof v === 'string' && v.trim() ? v.trim().slice(0, n) : null)

/** Rough street-address detector: "12 Oak St", "450 N Main Avenue", "Apt 3". Places stay city/region-level. */
export function looksLikeStreetAddress(place: string): boolean {
  return /\b\d{1,6}\s+([NSEW]\.?\s+)?[A-Za-z0-9.' -]{2,}\s(st|street|ave|avenue|rd|road|blvd|boulevard|ln|lane|dr|drive|ct|court|way|pl|place|ter|terrace|pkwy|parkway|hwy|highway|cir|circle)\b/i.test(place)
    || /\b(apt|apartment|unit|suite|ste)\.?\s*#?\s*\w+/i.test(place)
}

function isoDate(v: unknown): string | null {
  if (typeof v !== 'string' || !/^\d{4}-\d{2}(-\d{2})?$/.test(v)) return null
  const d = new Date(v.length === 7 ? `${v}-01` : v)
  return isNaN(+d) ? null : d.toISOString().slice(0, 10)
}

/** Validate a post from the client. A quick post needs only one photo or a title. */
export function parsePostInput(body: unknown): { ok: true; data: PostInput } | { ok: false; error: string } {
  const b = (body ?? {}) as Record<string, unknown>
  const photos: CareerPhoto[] = Array.isArray(b.photos)
    ? b.photos.slice(0, MAX_PHOTOS).flatMap((p) => {
      const ph = p as Record<string, unknown>
      const url = typeof ph?.url === 'string' ? ph.url : ''
      // Only images we uploaded (Cloudinary over https)
      if (!/^https:\/\/res\.cloudinary\.com\/[\w-]+\/image\/upload\//.test(url)) return []
      return [{
        url,
        takenAt: typeof ph.takenAt === 'string' && !isNaN(+new Date(ph.takenAt)) ? new Date(ph.takenAt).toISOString() : null,
        label: ph.label === 'before' || ph.label === 'after' ? ph.label : null,
      }]
    })
    : []
  const place = clip(b.place, 80)
  if (place && looksLikeStreetAddress(place)) return { ok: false, error: 'Use a city or region (like "Rochester, NY"), not a street address.' }
  const trades = Array.isArray(b.trades) ? [...new Set(b.trades.map((t) => clip(t, 40)?.toLowerCase()).filter(Boolean) as string[])].slice(0, 8) : []
  const visibility = VISIBILITIES.includes(b.visibility as Visibility) ? (b.visibility as Visibility) : 'PUBLIC'
  const data: PostInput = {
    title: clip(b.title, 120), story: clip(b.story, 4000), trades, role: clip(b.role, 80),
    startedOn: isoDate(b.startedOn), endedOn: isoDate(b.endedOn), place, materials: clip(b.materials, 1000), photos, visibility,
  }
  if (!data.title && !data.photos.length) return { ok: false, error: 'Add at least one photo or a title.' }
  if (data.startedOn && data.endedOn && data.endedOn < data.startedOn) return { ok: false, error: 'The end date is before the start date.' }
  return { ok: true, data }
}

export const HANDLE_RE = /^[a-z0-9](?:[a-z0-9-]{1,28}[a-z0-9])$/

export interface VouchLike { status: string; signedHash: string | null; signerName: string; signerRole: string | null; signerCompany: string | null; anonymousAs: string | null; comment: string | null; verifiedAt: Date | string | null }

/** A seal shows only for an email-confirmed vouch of the post as it is now. */
export function isSealed(v: VouchLike, postHash: string): boolean {
  return v.status === 'VERIFIED' && v.signedHash === postHash
}

/** What the public sees for a sealed vouch. */
export function sealView(v: VouchLike) {
  const who = v.anonymousAs || v.signerName
  const what = v.anonymousAs ? null : [v.signerRole, v.signerCompany].filter(Boolean).join(', ') || null
  return { who, what, comment: v.comment, date: v.verifiedAt ? new Date(v.verifiedAt).toISOString() : null }
}

export const isEmail = (e: unknown): e is string => typeof e === 'string' && e.length <= 200 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e)

/** "2026-03-01" -> "Mar 2026" */
export function monthYear(iso: string | null | undefined): string | null {
  if (!iso) return null
  const d = new Date(iso.length === 10 ? `${iso}T12:00:00Z` : iso)
  return isNaN(+d) ? null : d.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })
}

export function dateRange(a: string | null, b: string | null): string | null {
  const s = monthYear(a), e = monthYear(b)
  if (s && e) return s === e ? s : `${s} – ${e}`
  return s || e
}
