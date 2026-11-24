'use client'

// "From My Career" on Current Events: the newest work people are proud of.

import Link from 'next/link'
import { Hammer } from 'lucide-react'
import { PortfolioGrid } from '@/components/career/PortfolioGrid'
import { TradeIconStrip } from '@/components/career/TradeIcons'
import type { WorkPost } from '@/components/career/WorkCard'

export function CareerFeed({ posts, bare = false }: { posts: WorkPost[]; /** No section title (the page supplies one) */ bare?: boolean }) {
  return (
    <section className={bare ? '' : 'my-5 sm:my-12'} aria-labelledby={bare ? undefined : 'career-feed-title'}>
      <div className={bare ? 'hidden' : 'mb-3 flex items-center justify-center gap-3 sm:mb-6'}>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border)]/50 to-transparent" />
        <h2 id="career-feed-title" style={{ fontSize: '0.65rem', lineHeight: 1.3 }} className="flex items-center gap-2 font-bold uppercase tracking-[0.25em] text-theme-muted">
          <Hammer className="h-3 w-3" aria-hidden /> From My Career <Hammer className="h-3 w-3" aria-hidden />
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--border)]/50 to-transparent" />
      </div>
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
        <TradeIconStrip size={18} gap={16} className="border-b border-[var(--border)] py-2 text-[var(--primary)] opacity-60" />
        <div className="p-1 sm:p-3">
          <PortfolioGrid
            posts={posts}
            showAuthor
            empty={<p className="px-4 py-8 text-center text-sm text-[var(--muted-foreground)]">No work posted yet. Clean mower lines, a straight brick course, a smooth pour: be the first.</p>}
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border)] px-3 py-2.5 text-xs sm:px-4">
          <span className="text-[var(--muted-foreground)]">Real work people are proud of.</span>
          <Link href="/my/career" className="no-min-size inline-flex h-8 items-center gap-1.5 rounded-full bg-[var(--primary)] px-3 font-bold" style={{ color: 'var(--primary-foreground)' }}>
            <Hammer className="h-3.5 w-3.5" aria-hidden /> Post your work
          </Link>
        </div>
      </div>
    </section>
  )
}
