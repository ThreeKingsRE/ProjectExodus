'use client'

import Link from 'next/link'
import { Pencil } from 'lucide-react'
import type { loadPortfolio } from '@/lib/career/server'
import { PortfolioGrid } from '@/components/career/PortfolioGrid'
import { ProfileHeader, Tabs } from '@/components/career/ProfileHeader'

type Data = NonNullable<Awaited<ReturnType<typeof loadPortfolio>>>

export default function PortfolioView({ data, tab }: { data: Data; tab: 'work' | 'tagged' }) {
  const base = `/career/${data.profile.handle}`
  return (
    <>
      <ProfileHeader person={data.person} profile={data.profile} counts={data.counts}
        actions={data.isOwner && <Link href="/my/career" className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-[var(--primary)] px-3 text-xs font-bold text-[var(--primary-foreground)]"><Pencil className="h-3.5 w-3.5" aria-hidden /> Manage</Link>} />
      <Tabs tab={tab} counts={data.counts} hrefs={{ work: base, tagged: `${base}?tab=tagged` }} />
      {tab === 'work'
        ? <PortfolioGrid posts={data.work} empty={<p className="py-12 text-center text-sm text-[var(--muted-foreground)]">No work posted yet.</p>} />
        : <PortfolioGrid posts={data.tagged} showAuthor empty={<p className="py-12 text-center text-sm text-[var(--muted-foreground)]">Not tagged in any work yet.</p>} />}
    </>
  )
}
