'use client'

// One work post: swipeable photos, caption with #tags, tagged crewmates, optional
// details, and any "Vouched by" seals.

import Link from 'next/link'
import { BadgeCheck, Calendar, Hammer, MapPin, Pin } from 'lucide-react'
import { dateRange, monthYear, type CareerPhoto } from '@/lib/career/career'

export interface Seal { who: string; what: string | null; comment: string | null; date: string | null }
export interface Person { id: string; name: string; image: string | null; handle: string | null }
export interface WorkPost {
  id: string; title: string | null; story: string | null; trades: string[]; role: string | null
  startedOn: string | null; endedOn: string | null; place: string | null; materials: string | null
  photos: CareerPhoto[]; visibility: string; createdAt: string; seals: Seal[]
  pinned: boolean; people: Person[]; author: Person | null
}

export const personHref = (p: Person) => (p.handle ? `/career/${p.handle}` : `/profile/${p.id}`)

export function Avatar({ p, size = 32 }: { p: Person; size?: number }) {
  return p.image
    // eslint-disable-next-line @next/next/no-img-element
    ? <img src={p.image} alt="" width={size} height={size} className="shrink-0 rounded-full object-cover" style={{ width: size, height: size }} />
    : <span className="grid shrink-0 place-items-center rounded-full bg-[var(--primary)] font-bold text-[var(--primary-foreground)]" style={{ width: size, height: size, fontSize: size * 0.42 }}>{p.name[0]?.toUpperCase()}</span>
}

export function VouchSeal({ seal }: { seal: Seal }) {
  return (
    <div className="flex gap-2 rounded-xl border border-emerald-600/30 bg-emerald-600/10 p-2.5 text-xs sm:text-sm">
      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
      <div className="min-w-0">
        <p className="font-semibold">
          Vouched by {seal.who}{seal.what ? `, ${seal.what}` : ''}{seal.date ? <span className="font-normal text-[var(--muted-foreground)]"> · {monthYear(seal.date)}</span> : null}
        </p>
        {seal.comment && <p className="mt-0.5 text-[var(--muted-foreground)]">“{seal.comment}”</p>}
      </div>
    </div>
  )
}

/** Caption with #tags as links to everyone's work with that tag */
function Caption({ text }: { text: string }) {
  const parts = text.split(/(#[A-Za-z0-9][A-Za-z0-9-]{1,29})/g)
  return (
    <p className="whitespace-pre-line text-sm leading-relaxed">
      {parts.map((part, i) => part.startsWith('#')
        ? <Link key={i} href={`/career/tag/${part.slice(1).toLowerCase()}`} className="font-semibold text-[var(--primary)]">{part}</Link>
        : part)}
    </p>
  )
}

export function WorkCard({ post, footer, showAuthor = false }: { post: WorkPost; footer?: React.ReactNode; showAuthor?: boolean }) {
  const when = dateRange(post.startedOn, post.endedOn) || monthYear(post.photos.find((p) => p.takenAt)?.takenAt ?? null)
  const inCaption = new Set([...(post.story ?? '').matchAll(/#([A-Za-z0-9-]+)/g)].map((m) => m[1].toLowerCase()))
  const extraTags = post.trades.filter((t) => !inCaption.has(t))
  return (
    <article className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]">
      {showAuthor && post.author && (
        <Link href={personHref(post.author)} className="flex items-center gap-2 px-3 py-2 text-sm font-semibold">
          <Avatar p={post.author} size={28} /> {post.author.name}
        </Link>
      )}
      {post.photos.length > 0 && (
        <div className="relative">
          <div className="flex snap-x snap-mandatory overflow-x-auto bg-black [scrollbar-width:none]" aria-label={`${post.photos.length} photos`}>
            {post.photos.map((ph, i) => (
              <figure key={ph.url} className="relative grid min-h-[50vw] w-full shrink-0 snap-center place-items-center sm:min-h-[18rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ph.url} alt={`Photo ${i + 1} of ${post.photos.length}`} loading="lazy" className="mx-auto max-h-[70dvh] w-full object-contain" />
                {ph.label && <span className="absolute left-2 top-2 rounded-full bg-black/65 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">{ph.label}</span>}
                {post.photos.length > 1 && <span className="absolute right-2 top-2 rounded-full bg-black/65 px-2 py-0.5 text-[10px] font-bold text-white">{i + 1}/{post.photos.length}</span>}
              </figure>
            ))}
          </div>
        </div>
      )}
      <div className="space-y-2 p-3 sm:p-4">
        {post.pinned && <p className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--muted-foreground)]"><Pin className="h-3 w-3" aria-hidden /> Pinned</p>}
        {post.title && <h3 style={{ fontSize: 'clamp(1rem, 3.2vw, 1.15rem)', lineHeight: 1.3 }} className="font-bold">{post.title}</h3>}
        {post.story && <Caption text={post.story} />}
        {extraTags.length > 0 && (
          <p className="flex flex-wrap gap-x-2 text-sm">
            {extraTags.map((t) => <Link key={t} href={`/career/tag/${t}`} className="font-semibold text-[var(--primary)]">#{t}</Link>)}
          </p>
        )}
        {post.people.length > 0 && (
          <p className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-[var(--muted-foreground)]">With</span>
            {post.people.map((p) => (
              <Link key={p.id} href={personHref(p)} className="inline-flex items-center gap-1 rounded-full bg-[var(--muted)] py-0.5 pl-0.5 pr-2 font-semibold">
                <Avatar p={p} size={18} />{p.name}
              </Link>
            ))}
          </p>
        )}
        {(post.role || when || post.place) && (
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--muted-foreground)]">
            {post.role && <span className="inline-flex items-center gap-1"><Hammer className="h-3.5 w-3.5" aria-hidden />{post.role}</span>}
            {when && <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" aria-hidden />{when}</span>}
            {post.place && <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" aria-hidden />{post.place}</span>}
          </div>
        )}
        {post.materials && <p className="text-xs text-[var(--muted-foreground)]"><span className="font-semibold text-[var(--foreground)]">Materials:</span> {post.materials}</p>}
        {post.seals.length > 0 && <div className="space-y-1.5 pt-1">{post.seals.map((s, i) => <VouchSeal key={i} seal={s} />)}</div>}
        {footer}
      </div>
    </article>
  )
}
