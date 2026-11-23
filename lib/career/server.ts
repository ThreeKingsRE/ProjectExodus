// Server-only helpers for My Career (hashing, tokens, DB shapes, emails).
import { createHash, randomBytes } from 'crypto'
import qrcode from 'qrcode-generator'
import { prisma } from '@/lib/db/prisma'
import { HANDLE_RE, isSealed, sealView, type CareerPhoto, type PostInput } from './career'

/**
 * Fingerprint of what a vouch vouches for. Changing photos, title, role, dates, place or
 * trades changes it and removes the seal; story, materials and visibility can change freely.
 */
export function contentHash(p: Pick<PostInput, 'title' | 'role' | 'startedOn' | 'endedOn' | 'place' | 'trades' | 'photos'>): string {
  const canon = JSON.stringify([
    (p.title ?? '').trim().toLowerCase(), (p.role ?? '').trim().toLowerCase(),
    p.startedOn ?? '', p.endedOn ?? '', (p.place ?? '').trim().toLowerCase(),
    [...p.trades].sort(), p.photos.map((ph) => ph.url),
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
  photos: unknown; visibility: string; contentHash: string; createdAt: Date; updatedAt: Date
  vouches?: VouchRow[]
}
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
    createdAt: p.createdAt.toISOString(), seals,
  }
}

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

export function toDbPost(d: PostInput) {
  return {
    title: d.title, story: d.story, trades: d.trades, role: d.role,
    startedOn: d.startedOn ? new Date(d.startedOn) : null, endedOn: d.endedOn ? new Date(d.endedOn) : null,
    place: d.place, materials: d.materials, photos: d.photos as unknown as object, visibility: d.visibility,
    contentHash: contentHash(d),
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
