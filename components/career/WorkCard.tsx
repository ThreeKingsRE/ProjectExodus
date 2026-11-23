'use client'

// One work post as the public (and the owner) sees it: photos, details and any
// "Vouched by" seals. Photos open full size on tap.

import { useState } from 'react'
import { BadgeCheck, Calendar, Hammer, MapPin, X } from 'lucide-react'
import { dateRange, monthYear, type CareerPhoto } from '@/lib/career/career'

export interface Seal { who: string; what: string | null; comment: string | null; date: string | null }
export interface WorkPost {
  id: string; title: string | null; story: string | null; trades: string[]; role: string | null
  startedOn: string | null; endedOn: string | null; place: string | null; materials: string | null
  photos: CareerPhoto[]; visibility: string; createdAt: string; seals: Seal[]
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

export function WorkCard({ post, footer }: { post: WorkPost; footer?: React.ReactNode }) {
  const [zoom, setZoom] = useState<CareerPhoto | null>(null)
  const when = dateRange(post.startedOn, post.endedOn) || monthYear(post.photos.find((p) => p.takenAt)?.takenAt ?? null)
  const photos = post.photos
  return (
    <article className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]">
      {photos.length > 0 && (
        <div className={`grid gap-0.5 ${photos.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
          {photos.slice(0, 4).map((ph, i) => (
            <button key={ph.url} type="button" onClick={() => setZoom(ph)} className="relative block aspect-[4/3] overflow-hidden bg-[var(--muted)]" aria-label={`View photo ${i + 1}${ph.label ? ` (${ph.label})` : ''}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ph.url} alt="" loading="lazy" className="h-full w-full object-cover" />
              {ph.label && <span className="absolute left-1.5 top-1.5 rounded-full bg-black/65 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">{ph.label}</span>}
              {i === 3 && photos.length > 4 && <span className="absolute inset-0 grid place-items-center bg-black/50 text-lg font-bold text-white">+{photos.length - 4}</span>}
            </button>
          ))}
        </div>
      )}
      <div className="space-y-2 p-3 sm:p-4">
        {post.title && <h3 style={{ fontSize: 'clamp(1rem, 3.2vw, 1.15rem)', lineHeight: 1.3 }} className="font-bold">{post.title}</h3>}
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--muted-foreground)]">
          {post.role && <span className="inline-flex items-center gap-1"><Hammer className="h-3.5 w-3.5" aria-hidden />{post.role}</span>}
          {when && <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" aria-hidden />{when}</span>}
          {post.place && <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" aria-hidden />{post.place}</span>}
        </div>
        {post.trades.length > 0 && (
          <ul className="flex flex-wrap gap-1">
            {post.trades.map((t) => <li key={t} className="rounded-full bg-[var(--muted)] px-2 py-0.5 text-[11px] font-semibold capitalize">{t}</li>)}
          </ul>
        )}
        {post.story && <p className="whitespace-pre-line text-sm leading-relaxed">{post.story}</p>}
        {post.materials && <p className="text-xs text-[var(--muted-foreground)]"><span className="font-semibold text-[var(--foreground)]">Materials:</span> {post.materials}</p>}
        {post.seals.length > 0 && <div className="space-y-1.5 pt-1">{post.seals.map((s, i) => <VouchSeal key={i} seal={s} />)}</div>}
        {footer}
      </div>

      {zoom && (
        <div role="dialog" aria-modal="true" aria-label="Photo" className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-3" onClick={() => setZoom(null)}>
          <button type="button" aria-label="Close" className="absolute right-3 top-3 rounded-full bg-white/15 p-2 text-white"><X className="h-5 w-5" /></button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={zoom.url} alt="" className="max-h-[88vh] max-w-full rounded-lg object-contain" />
          {zoom.takenAt && <p className="absolute bottom-4 text-xs text-white/80">Taken {new Date(zoom.takenAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</p>}
        </div>
      )}
    </article>
  )
}
