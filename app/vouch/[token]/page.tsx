import type { Metadata } from 'next'
import { prisma } from '@/lib/db/prisma'
import { hashToken, publicPost } from '@/lib/career/server'
import { WorkCard } from '@/components/career/WorkCard'
import VouchForm from './VouchForm'

export const metadata: Metadata = { title: 'Vouch for work', robots: { index: false, follow: false } }
export const dynamic = 'force-dynamic'

function Shell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"><div className="mx-auto max-w-lg space-y-4 px-3 py-6 sm:py-10">{children}</div></div>
}

export default async function VouchPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params
  const vouch = await prisma.careerVouch.findUnique({
    where: { requestTokenHash: hashToken(token) },
    select: { status: true, expiresAt: true, signerName: true, signerRole: true, post: { include: { user: { select: { name: true } } } } },
  })
  if (!vouch || vouch.expiresAt < new Date()) {
    return <Shell><h1 style={{ fontSize: '1.4rem' }} className="font-black">This link has expired</h1><p className="text-sm text-[var(--muted-foreground)]">Ask the person who sent it for a new one.</p></Shell>
  }
  const owner = vouch.post.user.name || 'This member'
  if (vouch.status === 'VERIFIED' || vouch.status === 'DECLINED') {
    return <Shell><h1 style={{ fontSize: '1.4rem' }} className="font-black">{vouch.status === 'VERIFIED' ? 'Already vouched. Thank you!' : 'This request was declined.'}</h1></Shell>
  }
  const post = publicPost({ ...vouch.post, vouches: [] })
  return (
    <Shell>
      <header>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-xs">Project Exodus · My Career</p>
        <h1 style={{ fontSize: 'clamp(1.3rem, 4.5vw, 1.7rem)', lineHeight: 1.2 }} className="mt-1 font-black">{owner} asked you to vouch for this work</h1>
        <p className="mt-1 text-xs text-[var(--muted-foreground)] sm:text-sm">If you saw, supervised or paid for this job, confirm it below. It takes a minute and you don’t need an account.</p>
      </header>
      <WorkCard post={post} />
      <VouchForm token={token} hash={vouch.post.contentHash} owner={owner} initialName={vouch.signerName} initialRole={vouch.signerRole ?? ''} />
    </Shell>
  )
}
