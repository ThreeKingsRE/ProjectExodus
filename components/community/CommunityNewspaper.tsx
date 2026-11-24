'use client'

// Current Events: a clean, mobile-first page. What's happening now, the
// highlights, and the newest work from My Career. Signed-out visitors see the
// same page as a look-only preview.

import Link from 'next/link'
import { ArrowRight, BookOpen, ExternalLink, Hash, Newspaper, Rocket, Users } from 'lucide-react'
import { SustainableTechBillboard } from '@/components/community/SustainableTechBillboard'
import { CareerFeed } from '@/components/community/CareerFeed'
import { LiveStrip } from '@/components/community/LiveStrip'
import type { WorkPost } from '@/components/career/WorkCard'
import type { NewsItem } from '@/lib/news/feeds'

interface CommunityNewspaperProps {
  /** Signed-out preview: everything shows, nothing can be clicked */
  guest?: boolean
  /** Newest My Career posts */
  careerPosts?: WorkPost[]
  /** Latest headlines from climate newsrooms (refreshed hourly); empty = use the built-in list */
  news?: NewsItem[]
  user?: unknown
  suggestedUsers?: unknown[]
  activeProjects?: unknown[]
  recentDiscussions?: unknown[]
  recentActivity?: unknown[]
  communityStats: {
    totalMembers: number
    activeProjects: number
    knowledgeArticles: number
    totalArticles: number
    totalProjects: number
  }
}

const IN_THE_NEWS = [
  { year: '2025', title: 'Climeworks Mammoth goes live', detail: 'Iceland · 36K tons CO₂ a year' },
  { year: '2024', title: 'Solar Foods Factory 01 opens', detail: 'Vantaa, Finland · protein from air' },
  { year: '2024', title: 'EU hemp building code updated', detail: 'Hempcrete approved in 12 nations' },
  { year: '2023', title: '$1.4T into climate tech', detail: 'Record global investment' },
  { year: '2023', title: 'Seabin passes 860 units', detail: '3,250+ tons of marine litter removed' },
]
function newsAgo(iso: string) {
  const h = (Date.now() - new Date(iso).getTime()) / 3600000
  if (h < 1) return 'just now'
  if (h < 24) return `${Math.floor(h)}h ago`
  if (h < 24 * 7) return `${Math.floor(h / 24)}d ago`
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

const TRENDING = ['direct-air-capture', 'hempcrete', 'regenerative-agriculture', 'circular-economy', 'ocean-cleanup']

function Section({ title, action, children }: { title: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="space-y-2.5">
      <div className="flex items-end justify-between gap-2">
        <h2 style={{ fontSize: 'clamp(1rem, 3.6vw, 1.2rem)', lineHeight: 1.2 }} className="font-black text-[var(--foreground)]">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  )
}

export function CommunityNewspaper({ guest = false, careerPosts = [], news = [], communityStats }: CommunityNewspaperProps) {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
  const stats = [
    { icon: Users, n: communityStats.totalMembers, label: 'members' },
    { icon: Rocket, n: communityStats.activeProjects, label: 'initiatives' },
    { icon: BookOpen, n: communityStats.knowledgeArticles, label: 'articles' },
  ]
  const more = (href: string, label: string) => (
    <Link href={href} className="no-min-size inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary)]">{label} <ArrowRight className="h-3.5 w-3.5" aria-hidden /></Link>
  )

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {guest && (
        <div className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--card)]/95 backdrop-blur">
          <div className="mx-auto flex items-center gap-2 px-3 py-2" style={{ maxWidth: '48rem' }}>
            <p className="min-w-0 flex-1 text-[11px] leading-snug text-[var(--muted-foreground)] sm:text-sm">
              <span className="font-bold text-[var(--foreground)]">You’re viewing a preview.</span> Sign in to read, post and join in.
            </p>
            <Link href="/auth/signin?callbackUrl=/community" className="no-min-size inline-flex h-8 shrink-0 items-center rounded-full border border-[var(--border)] px-3 text-xs font-semibold">Sign in</Link>
            <Link href="/auth/signup" style={{ color: 'var(--primary-foreground)' }} className="no-min-size inline-flex h-8 shrink-0 items-center rounded-full bg-[var(--primary)] px-3 text-xs font-bold">Join</Link>
          </div>
        </div>
      )}

      {/* Look-only for guests: inert blocks taps, focus and links */}
      <div className="mx-auto space-y-6 px-3 py-4 sm:space-y-8 sm:px-6 sm:py-8" style={{ maxWidth: '48rem' }} inert={guest || undefined}>
        <header>
          <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-xs">
            <Newspaper className="h-3.5 w-3.5" aria-hidden /> {today}
          </p>
          <h1 style={{ fontSize: 'clamp(1.5rem, 6vw, 2.25rem)', lineHeight: 1.1 }} className="mt-1 font-black">Current Events</h1>
          <p className="mt-1 text-xs text-[var(--muted-foreground)] sm:text-sm">What the community is doing right now, the news worth knowing, and work people are proud of.</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {stats.map(({ icon: Icon, n, label }) => (
              <li key={label} className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] px-2.5 py-1 text-xs">
                <Icon className="h-3.5 w-3.5 text-[var(--primary)]" aria-hidden /><strong>{n.toLocaleString()}</strong> <span className="text-[var(--muted-foreground)]">{label}</span>
              </li>
            ))}
          </ul>
        </header>

        <Section title="Live now" action={more('/community/discussions', 'Discussions')}>
          <LiveStrip />
        </Section>

        <Section title="Highlights">
          <SustainableTechBillboard bare />
        </Section>

        <Section title="From My Career" action={more('/my/career', 'Post your work')}>
          <CareerFeed posts={careerPosts} bare />
        </Section>

        <div className="grid gap-3 sm:grid-cols-2">
          <Section title="In the news">
            <ol className="divide-y divide-[var(--border)] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
              {news.length > 0
                ? news.map((n) => (
                  <li key={n.url}>
                    <a href={n.url} target="_blank" rel="noopener noreferrer" className="no-min-size block px-3 py-2.5 hover:bg-[var(--muted)]">
                      <span className="line-clamp-2 text-sm font-semibold leading-snug">{n.title}</span>
                      <span className="mt-0.5 flex items-center gap-1 text-[11px] text-[var(--muted-foreground)]">
                        {n.source}{n.publishedAt && <> · {newsAgo(n.publishedAt)}</>} <ExternalLink className="h-3 w-3" aria-hidden />
                      </span>
                    </a>
                  </li>
                ))
                : IN_THE_NEWS.map((n) => (
                  <li key={n.title} className="flex items-center gap-3 px-3 py-2.5">
                    <span className="shrink-0 rounded-md bg-[var(--muted)] px-1.5 py-0.5 text-[10px] font-bold tabular-nums">{n.year}</span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold">{n.title}</span>
                      <span className="block truncate text-[11px] text-[var(--muted-foreground)]">{n.detail}</span>
                    </span>
                  </li>
                ))}
            </ol>
          </Section>
          <Section title="Trending topics">
            <div className="flex flex-wrap gap-1.5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3">
              {TRENDING.map((t) => (
                <Link key={t} href={`/community/discussions`} className="no-min-size inline-flex items-center gap-0.5 rounded-full border border-[var(--border)] px-2.5 py-1 text-xs font-semibold hover:border-[var(--primary)]">
                  <Hash className="h-3 w-3 text-[var(--primary)]" aria-hidden />{t}
                </Link>
              ))}
              <p className="mt-1 w-full text-[11px] text-[var(--muted-foreground)]">Tag your posts with #topics so others can find them.</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
