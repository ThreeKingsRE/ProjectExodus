'use client'

// "Live now": the newest posts, articles, initiatives and members in one
// swipeable row of small cards.

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BookOpen, CalendarDays, MessageSquare, Rocket, UserPlus } from 'lucide-react'

interface HubItem { id: string; type: string; category: string; title: string; preview: string; userName: string; targetUrl: string; createdAt: string }

const KIND: Record<string, { label: string; color: string; icon: typeof MessageSquare }> = {
  discussions: { label: 'Discussion', color: '#f97316', icon: MessageSquare },
  articles: { label: 'Article', color: '#0ea5e9', icon: BookOpen },
  projects: { label: 'Initiative', color: '#10b981', icon: Rocket },
  events: { label: 'Event', color: '#8b5cf6', icon: CalendarDays },
  members: { label: 'New member', color: '#ec4899', icon: UserPlus },
}

function ago(iso: string) {
  const s = (Date.now() - new Date(iso).getTime()) / 1000
  if (s < 3600) return `${Math.max(1, Math.floor(s / 60))}m`
  if (s < 86400) return `${Math.floor(s / 3600)}h`
  if (s < 604800) return `${Math.floor(s / 86400)}d`
  return new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

export function LiveStrip() {
  const [items, setItems] = useState<HubItem[] | null>(null)
  useEffect(() => {
    fetch('/api/discussions/hub?limit=24')
      .then((r) => r.json())
      .then((j) => setItems(j.success ? [...j.data.items].sort((a: HubItem, b: HubItem) => +new Date(b.createdAt) - +new Date(a.createdAt)).slice(0, 16) : []))
      .catch(() => setItems([]))
  }, [])

  return (
    <div className="-mx-3 flex snap-x snap-mandatory gap-2 overflow-x-auto px-3 pb-1 sm:mx-0 sm:px-0 [scrollbar-width:none]">
      {items === null && [0, 1, 2].map((i) => <div key={i} className="h-28 w-56 shrink-0 animate-pulse rounded-xl bg-[var(--muted)]" />)}
      {items?.length === 0 && <p className="w-full rounded-xl border border-dashed border-[var(--border)] p-4 text-center text-xs text-[var(--muted-foreground)]">Quiet right now. New posts, articles and initiatives show up here.</p>}
      {items?.map((it) => {
        const k = KIND[it.category] ?? KIND.discussions
        const Icon = k.icon
        const href = it.targetUrl === '/social' ? '/community/discussions' : it.targetUrl
        return (
          <Link key={it.id} href={href} className="no-min-size flex w-56 shrink-0 snap-start flex-col rounded-xl border border-[var(--border)] bg-[var(--card)] p-3 transition-colors hover:border-[var(--primary)] sm:w-60">
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider" style={{ color: k.color }}>
              <Icon className="h-3.5 w-3.5" aria-hidden /> {k.label}
              <span className="ml-auto font-medium normal-case tracking-normal text-[var(--muted-foreground)]">{ago(it.createdAt)}</span>
            </span>
            <span className="mt-1.5 line-clamp-1 text-sm font-bold text-[var(--foreground)]">{it.title}</span>
            {it.preview && <span className="mt-0.5 line-clamp-2 text-xs leading-snug text-[var(--muted-foreground)]">{it.preview}</span>}
            <span className="mt-auto truncate pt-1.5 text-[11px] text-[var(--muted-foreground)]">{it.userName}</span>
          </Link>
        )
      })}
    </div>
  )
}
