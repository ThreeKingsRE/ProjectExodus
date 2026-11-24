import type { Metadata } from 'next'
import Link from 'next/link'
import { prisma } from '@/lib/db'
import { ensureDirectory, ensureFederal } from '@/lib/meetings/server'

export const metadata: Metadata = { title: 'Browse meetings by state' }
export const dynamic = 'force-dynamic'
export const maxDuration = 60

export default async function BrowsePage() {
  await ensureDirectory(); await ensureFederal()
  const states: { slug: string; name: string }[] = await prisma.jurisdiction.findMany({ where: { kind: 'STATE' }, select: { slug: true, name: true }, orderBy: { name: 'asc' } })
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto space-y-4 px-3 py-4 sm:px-6 sm:py-8" style={{ maxWidth: '48rem' }}>
        <Link href="/meetings" className="text-xs font-semibold text-[var(--primary)]">← Meetings</Link>
        <h1 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', lineHeight: 1.15 }} className="font-black">Browse by state</h1>
        <p className="text-sm text-[var(--muted-foreground)]">Pick a state, then a county, then a city, town or township.</p>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <li><Link href="/meetings/united-states" className="no-min-size block rounded-xl border border-[var(--border)] bg-[var(--card)] p-3 text-sm font-semibold hover:border-[var(--primary)]">United States (federal)</Link></li>
          {states.map((s) => <li key={s.slug}><Link href={`/meetings/${s.slug}`} className="no-min-size block rounded-xl border border-[var(--border)] bg-[var(--card)] p-3 text-sm font-semibold hover:border-[var(--primary)]">{s.name}</Link></li>)}
        </ul>
      </div>
    </div>
  )
}
