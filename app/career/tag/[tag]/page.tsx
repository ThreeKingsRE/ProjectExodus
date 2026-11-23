import type { Metadata } from 'next'
import Link from 'next/link'
import { auth } from '@/auth'
import { normalizeTag } from '@/lib/career/career'
import { loadTag } from '@/lib/career/server'
import TagGrid from './TagGrid'

type Props = { params: Promise<{ tag: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = normalizeTag(decodeURIComponent((await params).tag))
  return { title: `#${tag} · My Career`, description: `Real-world #${tag} work people are proud of, on Project Exodus.` }
}

export default async function TagPage({ params }: Props) {
  const tag = normalizeTag(decodeURIComponent((await params).tag))
  const session = await auth()
  const posts = tag ? await loadTag(tag, session?.user?.id) : []
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-3xl space-y-4 px-3 py-4 sm:px-6 sm:py-8">
        <header>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-xs">My Career</p>
          <h1 style={{ fontSize: 'clamp(1.35rem, 4vw, 1.9rem)', lineHeight: 1.2 }} className="font-black">#{tag}</h1>
          <p className="text-xs text-[var(--muted-foreground)] sm:text-sm">{posts.length} {posts.length === 1 ? 'post' : 'posts'} of work people are proud of.</p>
        </header>
        <TagGrid posts={posts} />
        <p className="text-center text-xs text-[var(--muted-foreground)]"><Link href="/my/career" className="font-semibold text-[var(--primary)] underline">Post your own work</Link></p>
      </div>
    </div>
  )
}
