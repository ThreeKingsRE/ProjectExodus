import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { auth } from '@/auth'
import { loadPortfolio } from '@/lib/career/server'
import PortfolioView from './PortfolioView'

type Props = { params: Promise<{ handle: string }>; searchParams: Promise<{ tab?: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await loadPortfolio((await params).handle, null)
  if (!p) return { title: 'Portfolio not found' }
  const cover = p.work.find((w) => w.photos[0])?.photos[0]?.url
  return {
    title: `${p.person.name} · My Career`,
    description: p.profile.headline || `${p.person.name}'s work portfolio on Project Exodus.`,
    openGraph: cover ? { images: [cover] } : undefined,
  }
}

export default async function CareerPortfolioPage({ params, searchParams }: Props) {
  const { handle } = await params
  const tab = (await searchParams).tab === 'tagged' ? 'tagged' : 'work'
  const session = await auth()
  const data = await loadPortfolio(handle, session?.user?.id)
  if (!data) notFound()
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-3xl space-y-4 px-3 py-4 sm:px-6 sm:py-8">
        <PortfolioView data={data} tab={tab} />
        {!data.isOwner && <p className="pt-2 text-center text-xs text-[var(--muted-foreground)]">Proud of your work too? <Link href="/my/career" className="font-semibold text-[var(--primary)] underline">Start your own portfolio</Link></p>}
      </div>
    </div>
  )
}
