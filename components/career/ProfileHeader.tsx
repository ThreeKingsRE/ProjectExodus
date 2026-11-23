'use client'

// Portfolio header: who they are, what they do, counts, and the ways to share it
// with an employer: link, QR, printable portfolio.

import { useState } from 'react'
import { BadgeCheck, Check, Link2, MapPin, Printer, QrCode, X } from 'lucide-react'
import { Avatar, type Person } from './WorkCard'

export interface CareerProfileView { handle: string; headline: string | null; trades: string[]; serviceArea: string | null }

const pill = 'inline-flex min-h-9 items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 text-xs font-semibold hover:bg-[var(--muted)]'

export function ShareButtons({ handle }: { handle: string }) {
  const [copied, setCopied] = useState(false)
  const [qr, setQr] = useState(false)
  const url = `https://www.projxodus.com/career/${handle}`
  return (
    <>
      <button type="button" className={pill} onClick={() => navigator.clipboard?.writeText(url).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500) })}>
        {copied ? <Check className="h-3.5 w-3.5" aria-hidden /> : <Link2 className="h-3.5 w-3.5" aria-hidden />} {copied ? 'Copied' : 'Copy link'}
      </button>
      <button type="button" className={pill} onClick={() => setQr(true)}><QrCode className="h-3.5 w-3.5" aria-hidden /> QR</button>
      <a className={pill} href={`/career/${handle}/print`}><Printer className="h-3.5 w-3.5" aria-hidden /> Print</a>
      {qr && (
        <div role="dialog" aria-modal="true" aria-label="QR code" className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4" onClick={() => setQr(false)}>
          <div className="w-full max-w-xs rounded-2xl bg-white p-4 text-center text-black" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setQr(false)} aria-label="Close" className="float-right rounded-full p-1 hover:bg-black/10"><X className="h-4 w-4" /></button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/api/career/qr/${handle}`} alt="QR code to this portfolio" className="mx-auto w-full" />
            <p className="text-sm font-bold">projxodus.com/career/{handle}</p>
            <p className="mt-1 text-xs text-black/60">Put it on your resume, business card or truck.</p>
            <a href={`/api/career/qr/${handle}`} download="my-career-qr.svg" className="mt-3 inline-flex min-h-10 items-center rounded-full bg-black px-5 text-sm font-bold text-white">Download</a>
          </div>
        </div>
      )}
    </>
  )
}

export function ProfileHeader({ person, profile, counts, actions }: {
  person: Person
  profile: CareerProfileView
  counts: { posts: number; tagged: number; vouched: number }
  actions?: React.ReactNode
}) {
  return (
    <header className="space-y-3">
      <div className="flex items-center gap-4 sm:gap-6">
        <Avatar p={person} size={72} />
        <div className="min-w-0 flex-1">
          <h1 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.75rem)', lineHeight: 1.15 }} className="truncate font-black">{person.name}</h1>
          <p className="text-xs text-[var(--muted-foreground)]">@{profile.handle}</p>
          <dl className="mt-1.5 flex gap-4 text-xs sm:text-sm">
            <div><dt className="sr-only">Posts</dt><dd><strong>{counts.posts}</strong> posts</dd></div>
            <div><dt className="sr-only">Tagged in</dt><dd><strong>{counts.tagged}</strong> tagged</dd></div>
            {counts.vouched > 0 && <div><dt className="sr-only">Vouched</dt><dd className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400"><BadgeCheck className="h-3.5 w-3.5" aria-hidden /><strong>{counts.vouched}</strong> vouched</dd></div>}
          </dl>
        </div>
      </div>
      {(profile.headline || profile.serviceArea || profile.trades.length > 0) && (
        <div className="space-y-1 text-sm">
          {profile.headline && <p className="font-semibold">{profile.headline}</p>}
          {profile.serviceArea && <p className="inline-flex items-center gap-1 text-xs text-[var(--muted-foreground)]"><MapPin className="h-3.5 w-3.5" aria-hidden />{profile.serviceArea}</p>}
          {profile.trades.length > 0 && <p className="text-xs">{profile.trades.map((t) => `#${t}`).join('  ')}</p>}
        </div>
      )}
      <div className="flex flex-wrap gap-1.5">{actions}<ShareButtons handle={profile.handle} /></div>
    </header>
  )
}

export function Tabs({ tab, counts, hrefs, onSelect }: {
  tab: 'work' | 'tagged'
  counts: { posts: number; tagged: number }
  /** Links (server pages) or a handler (client pages) */
  hrefs?: { work: string; tagged: string }
  onSelect?: (t: 'work' | 'tagged') => void
}) {
  const cls = (on: boolean) => `flex-1 border-t-2 py-2.5 text-center text-xs font-bold uppercase tracking-wider ${on ? 'border-[var(--foreground)]' : 'border-transparent text-[var(--muted-foreground)]'}`
  const item = (id: 'work' | 'tagged', label: string) => hrefs
    ? <a href={hrefs[id]} aria-current={tab === id ? 'page' : undefined} className={cls(tab === id)}>{label}</a>
    : <button type="button" onClick={() => onSelect?.(id)} aria-pressed={tab === id} className={cls(tab === id)}>{label}</button>
  return (
    <nav className="flex border-t border-[var(--border)]" aria-label="Portfolio sections">
      {item('work', `Work · ${counts.posts}`)}
      {item('tagged', `Tagged · ${counts.tagged}`)}
    </nav>
  )
}
