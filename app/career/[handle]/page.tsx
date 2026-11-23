import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BadgeCheck, MapPin } from 'lucide-react'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { publicPost, VOUCH_SELECT } from '@/lib/career/server'
import { WorkCard } from '@/components/career/WorkCard'

type Props = { params: Promise<{ handle: string }> }

async function load(handle: string) {
  return prisma.careerProfile.findUnique({
    where: { handle: handle.toLowerCase() },
    select: { handle: true, headline: true, trades: true, serviceArea: true, userId: true, user: { select: { name: true, image: true } } },
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await load((await params).handle)
  if (!p) return { title: 'Portfolio not found' }
  const name = p.user.name || 'A maker'
  return { title: `${name} · My Career`, description: p.headline || `${name}'s work portfolio on Project Exodus, with sign-offs from the people who saw the work.` }
}

export default async function CareerPortfolioPage({ params }: Props) {
  const profile = await load((await params).handle)
  if (!profile) notFound()
  const session = await auth()
  const isOwner = session?.user?.id === profile.userId
  const visibility = isOwner ? undefined : { in: session?.user?.id ? ['PUBLIC', 'MEMBERS'] : ['PUBLIC'] }
  const rows = await prisma.careerPost.findMany({
    where: { userId: profile.userId, ...(visibility ? { visibility } : {}) },
    orderBy: { createdAt: 'desc' },
    take: 100,
    include: { vouches: { where: { status: 'VERIFIED' }, select: VOUCH_SELECT, orderBy: { verifiedAt: 'asc' } } },
  })
  const posts = rows.map(publicPost)
  const sealed = posts.reduce((n: number, p: ReturnType<typeof publicPost>) => n + (p.seals.length > 0 ? 1 : 0), 0)
  const name = profile.user.name || 'Maker'

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-3xl space-y-4 px-3 py-4 sm:px-6 sm:py-8">
        <header className="flex items-center gap-3 sm:gap-4">
          {profile.user.image
            // eslint-disable-next-line @next/next/no-img-element
            ? <img src={profile.user.image} alt="" className="h-14 w-14 shrink-0 rounded-full object-cover sm:h-20 sm:w-20" />
            : <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[var(--primary)] text-xl font-black text-[var(--primary-foreground)] sm:h-20 sm:w-20">{name[0]}</div>}
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-xs">My Career</p>
            <h1 style={{ fontSize: 'clamp(1.3rem, 4.2vw, 2rem)', lineHeight: 1.15 }} className="font-black">{name}</h1>
            {profile.headline && <p className="text-xs sm:text-sm">{profile.headline}</p>}
            <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-[var(--muted-foreground)] sm:text-xs">
              {profile.serviceArea && <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" aria-hidden />{profile.serviceArea}</span>}
              <span>{posts.length} {posts.length === 1 ? 'job' : 'jobs'}</span>
              {sealed > 0 && <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400"><BadgeCheck className="h-3.5 w-3.5" aria-hidden />{sealed} vouched</span>}
            </div>
          </div>
        </header>
        {profile.trades.length > 0 && (
          <ul className="flex flex-wrap gap-1">{profile.trades.map((t: string) => <li key={t} className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[11px] font-semibold capitalize">{t}</li>)}</ul>
        )}
        {isOwner && <p className="rounded-lg bg-[var(--muted)] p-2 text-xs">You’re seeing every post, including private ones. <Link href="/my/career" className="font-semibold text-[var(--primary)] underline">Manage My Career</Link></p>}

        {posts.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-[var(--border)] p-8 text-center text-sm text-[var(--muted-foreground)]">No public work posted yet.</p>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {posts.map((p: ReturnType<typeof publicPost>) => <li key={p.id}><WorkCard post={p} /></li>)}
          </ul>
        )}
        <p className="pt-2 text-center text-[11px] text-[var(--muted-foreground)]">
          A “Vouched by” seal means the signer confirmed the work by email, and the post hasn’t changed since. <Link href="/my/career" className="underline">Start your own portfolio</Link>
        </p>
      </div>
    </div>
  )
}
