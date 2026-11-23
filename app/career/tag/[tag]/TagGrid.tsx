'use client'

import { PortfolioGrid } from '@/components/career/PortfolioGrid'
import type { WorkPost } from '@/components/career/WorkCard'

export default function TagGrid({ posts }: { posts: WorkPost[] }) {
  return <PortfolioGrid posts={posts} showAuthor empty={<p className="py-12 text-center text-sm text-[var(--muted-foreground)]">No work with this tag yet.</p>} />
}
