// Server-only helpers for My Career (hashing, tokens, DB shapes, emails).
import { createHash, randomBytes } from 'crypto'
import qrcode from 'qrcode-generator'
import { prisma } from '@/lib/db/prisma'
import { HANDLE_RE, isSealed, sealView, type CareerPhoto, type PostInput } from './career'

/**
 * Fingerprint of what a vouch vouches for. Changing photos, title, role, dates or place
 * changes it and removes the seal; caption, tags, materials and visibility can change freely.
 */
export function contentHash(p: Pick<PostInput, 'title' | 'role' | 'startedOn' | 'endedOn' | 'place' | 'photos'>): string {
  const canon = JSON.stringify([
    (p.title ?? '').trim().toLowerCase(), (p.role ?? '').trim().toLowerCase(),
    p.startedOn ?? '', p.endedOn ?? '', (p.place ?? '').trim().toLowerCase(),
    p.photos.map((ph) => ph.url),
  ])
  return createHash('sha256').update(canon).digest('hex')
}

export const hashToken = (token: string) => createHash('sha256').update(token).digest('hex')
export function newToken(): { token: string; hash: string } {
  const token = randomBytes(24).toString('base64url')
  return { token, hash: hashToken(token) }
}

/** "Jane Q. Doe" -> "jane-q-doe" */
export function handleFrom(name: string | null | undefined): string {
  const base = (name ?? '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 30).replace(/-+$/, '')
  return HANDLE_RE.test(base) ? base : `maker-${randomBytes(3).toString('hex')}`
}

/** The user's career profile, created on first use with a free handle based on their name. */
export async function getOrCreateProfile(userId: string, name: string | null | undefined) {
  const existing = await prisma.careerProfile.findUnique({ where: { userId } })
  if (existing) return existing
  const base = handleFrom(name)
  for (let i = 0; i < 6; i++) {
    const handle = i === 0 ? base : `${base.slice(0, 24)}-${randomBytes(2).toString('hex')}`
    try {
      return await prisma.careerProfile.create({ data: { userId, handle } })
    } catch (e: unknown) {
      if ((e as { code?: string })?.code !== 'P2002') throw e
      const again = await prisma.careerProfile.findUnique({ where: { userId } })
      if (again) return again
    }
  }
  throw new Error('Could not pick a handle')
}

const day = (d: Date | null) => (d ? d.toISOString().slice(0, 10) : null)

interface PostRow {
  id: string; title: string | null; story: string | null; trades: string[]; role: string | null
  startedOn: Date | null; endedOn: Date | null; place: string | null; materials: string | null
  photos: unknown; visibility: string; contentHash: string; createdAt: Date; updatedAt: Date; pinned?: boolean
  vouches?: VouchRow[]
  people?: { user: PersonRow }[]
  user?: PersonRow
}
interface PersonRow { id: string; name: string | null; image: string | null; careerProfile: { handle: string } | null }
const person = (u: PersonRow) => ({ id: u.id, name: u.name || 'Member', image: u.image, handle: u.careerProfile?.handle ?? null })

const PERSON_SELECT = { id: true, name: true, image: true, careerProfile: { select: { handle: true } } }
interface VouchRow {
  id: string; signerName: string; signerRole: string | null; signerCompany: string | null; anonymousAs: string | null
  comment: string | null; status: string; signedHash: string | null; verifiedAt: Date | null; expiresAt: Date; createdAt: Date
}

/** Public shape: only sealed vouches, and no signer emails. */
export function publicPost(p: PostRow) {
  const seals = (p.vouches ?? []).filter((v) => isSealed(v, p.contentHash)).map(sealView)
  return {
    id: p.id, title: p.title, story: p.story, trades: p.trades, role: p.role,
    startedOn: day(p.startedOn), endedOn: day(p.endedOn), place: p.place, materials: p.materials,
    photos: (Array.isArray(p.photos) ? p.photos : []) as CareerPhoto[], visibility: p.visibility,
    createdAt: p.createdAt.toISOString(), seals, pinned: !!p.pinned,
    people: (p.people ?? []).map((t) => person(t.user)),
    author: p.user ? person(p.user) : null,
  }
}

export type PublicPost = ReturnType<typeof publicPost>

/** Owner shape: everything, with each vouch's state spelled out. */
export function ownerPost(p: PostRow) {
  return {
    ...publicPost(p),
    vouches: (p.vouches ?? []).map((v) => ({
      id: v.id, signerName: v.signerName, signerRole: v.signerRole, signerCompany: v.signerCompany, anonymousAs: v.anonymousAs,
      comment: v.comment, verifiedAt: v.verifiedAt?.toISOString() ?? null, createdAt: v.createdAt.toISOString(),
      state: v.status === 'VERIFIED' ? (v.signedHash === p.contentHash ? 'sealed' : 'edited')
        : v.status === 'DECLINED' ? 'declined'
          : v.expiresAt < new Date() ? 'expired'
            : v.status === 'SIGNED' ? 'awaiting-email' : 'requested',
    })),
  }
}

export const VOUCH_SELECT = {
  id: true, signerName: true, signerRole: true, signerCompany: true, anonymousAs: true, comment: true,
  status: true, signedHash: true, verifiedAt: true, expiresAt: true, createdAt: true,
}

/** Everything a post card needs. Pass publicVouches for pages anyone can see. */
export const postInclude = (publicVouches = false) => ({
  vouches: { ...(publicVouches ? { where: { status: 'VERIFIED' } } : {}), select: VOUCH_SELECT, orderBy: { createdAt: 'desc' as const } },
  people: { select: { user: { select: PERSON_SELECT } }, orderBy: { createdAt: 'asc' as const } },
  user: { select: PERSON_SELECT },
})

/**
 * Replace a post's tagged crewmates. Only real members, never the poster. Newly tagged
 * people get a notification linking to the post's portfolio.
 */
export async function setPeople(postId: string, owner: { id: string; name: string | null }, ids: string[], link: string) {
  const valid: { id: string }[] = ids.length
    ? await prisma.user.findMany({ where: { id: { in: ids.filter((i) => i !== owner.id) } }, select: { id: true } })
    : []
  const keep = valid.map((u) => u.id)
  const existing: { userId: string }[] = await prisma.careerPostTag.findMany({ where: { postId }, select: { userId: true } })
  const had = new Set(existing.map((t) => t.userId))
  await prisma.careerPostTag.deleteMany({ where: { postId, userId: { notIn: keep } } })
  const added = keep.filter((id) => !had.has(id))
  if (!added.length) return
  await prisma.careerPostTag.createMany({ data: added.map((userId) => ({ postId, userId })), skipDuplicates: true })
  // Loaded lazily: it pulls in Pusher, which only runs inside Next
  const { createNotification } = await import('@/lib/notifications')
  await Promise.all(added.map((userId) => createNotification({
    userId, type: 'SYSTEM', title: 'You were tagged in a work post',
    message: `${owner.name || 'A crewmate'} tagged you in their My Career portfolio.`, link,
  }).catch(() => null)))
}

export function toDbPost(d: PostInput) {
  return {
    title: d.title, story: d.story, trades: d.trades, role: d.role,
    startedOn: d.startedOn ? new Date(d.startedOn) : null, endedOn: d.endedOn ? new Date(d.endedOn) : null,
    place: d.place, materials: d.materials, photos: d.photos as unknown as object, visibility: d.visibility,
    pinned: d.pinned, contentHash: contentHash(d),
  }
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))

function button(url: string, label: string) {
  return `<a href="${esc(url)}" style="display:inline-block;padding:10px 16px;background:#2f6b3c;color:#fff;text-decoration:none;border-radius:6px;">${esc(label)}</a>`
}

export function vouchRequestEmail(o: { ownerName: string; signerName: string; work: string; url: string }) {
  const subject = `${o.ownerName} asked you to vouch for their work`
  const text = [
    `Hi ${o.signerName},`, '',
    `${o.ownerName} is building a work portfolio on Project Exodus and asked you to vouch for this job: "${o.work}".`,
    'If you saw or supervised this work, you can confirm it here (no account needed):', o.url, '',
    'If you do not know this person or this work, ignore this email. The link expires in 30 days.',
  ].join('\n')
  const html = `<div style="font-family:Arial,sans-serif;line-height:1.5;max-width:520px">
    <h2>Vouch for ${esc(o.ownerName)}'s work?</h2>
    <p>Hi ${esc(o.signerName)}, ${esc(o.ownerName)} asked you to vouch for this job: <strong>${esc(o.work)}</strong>.</p>
    <p>If you saw or supervised this work, you can confirm it. No account needed.</p>
    <p>${button(o.url, 'Review the work')}</p>
    <p style="font-size:12px;color:#555">If you don't know this person or this work, ignore this email. The link expires in 30 days.</p></div>`
  return { subject, text, html }
}

export function vouchConfirmEmail(o: { ownerName: string; work: string; confirmUrl: string; declineUrl: string }) {
  const subject = 'Confirm your vouch on Project Exodus'
  const text = [
    `You vouched for ${o.ownerName}'s work: "${o.work}".`, '',
    `Confirm it's you: ${o.confirmUrl}`, '',
    `If you didn't do this: ${o.declineUrl}`,
  ].join('\n')
  const html = `<div style="font-family:Arial,sans-serif;line-height:1.5;max-width:520px">
    <h2>Confirm your vouch</h2>
    <p>You vouched for ${esc(o.ownerName)}'s work: <strong>${esc(o.work)}</strong>. Confirm this email is yours so the seal appears on their portfolio.</p>
    <p>${button(o.confirmUrl, 'Confirm my vouch')}</p>
    <p style="font-size:12px;color:#555">Didn't do this? <a href="${esc(o.declineUrl)}">Tell us it wasn't you</a> and the vouch is removed.</p></div>`
  return { subject, text, html }
}

export const workLabel = (p: { title: string | null; place: string | null }) => p.title || (p.place ? `Work in ${p.place}` : 'A work post')

export function careerShareUrl(handle: string) {
  return `https://www.projxodus.com/career/${encodeURIComponent(handle)}`
}

/** Generated locally: scanning goes straight to the portfolio, with no QR redirect service. */
export function careerQrSvg(handle: string) {
  const qr = qrcode(0, 'M')
  qr.addData(careerShareUrl(handle), 'Byte')
  qr.make()
  return qr.createSvgTag({ cellSize: 8, margin: 32 })
}

type Viewer = string | null | undefined
const visibleTo = (viewerId: Viewer) => ({ in: viewerId ? ['PUBLIC', 'MEMBERS'] : ['PUBLIC'] })

/** A portfolio as one viewer may see it: the owner sees everything. */
export async function loadPortfolio(handle: string, viewerId: Viewer) {
  const profile = await prisma.careerProfile.findUnique({
    where: { handle: handle.toLowerCase() },
    select: { handle: true, headline: true, trades: true, serviceArea: true, userId: true, user: { select: PERSON_SELECT } },
  })
  if (!profile) return null
  const isOwner = viewerId === profile.userId
  const [posts, tagged] = await Promise.all([
    prisma.careerPost.findMany({
      where: { userId: profile.userId, ...(isOwner ? {} : { visibility: visibleTo(viewerId) }) },
      orderBy: [{ pinned: 'desc' }, { createdAt: 'desc' }], take: 200, include: postInclude(true),
    }),
    prisma.careerPost.findMany({
      where: { people: { some: { userId: profile.userId } }, visibility: visibleTo(viewerId) },
      orderBy: { createdAt: 'desc' }, take: 200, include: postInclude(true),
    }),
  ])
  const work: PublicPost[] = posts.map(publicPost)
  const taggedPosts: PublicPost[] = tagged.map(publicPost)
  return {
    isOwner,
    person: person(profile.user),
    profile: { handle: profile.handle as string, headline: profile.headline as string | null, trades: profile.trades as string[], serviceArea: profile.serviceArea as string | null },
    work,
    tagged: taggedPosts,
    counts: { posts: work.length, tagged: taggedPosts.length, vouched: work.filter((p) => p.seals.length > 0).length },
  }
}

/** Everyone's visible work with one #tag, newest first. */
export async function loadTag(tag: string, viewerId: Viewer) {
  const rows = await prisma.careerPost.findMany({
    where: { trades: { has: tag }, visibility: visibleTo(viewerId) },
    orderBy: { createdAt: 'desc' }, take: 120, include: postInclude(true),
  })
  const out: PublicPost[] = rows.map(publicPost)
  return out
}
