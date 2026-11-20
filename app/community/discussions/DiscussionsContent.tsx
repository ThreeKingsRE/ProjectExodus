'use client'

// Discussions for signed-in members: a simple, readable feed. Start a
// conversation at the top, filter by a trending topic, read and reply below.

import { useCallback, useEffect, useMemo, useState } from 'react'
import { Hash, Loader2, MessageSquare, TrendingUp, X } from 'lucide-react'
import { CreatePost } from '@/components/social/CreatePost'
import { FeedPost } from '@/components/social/FeedPost'

interface TrendingHashtag { hashtag: string; count: number }

export default function DiscussionsContent() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [trending, setTrending] = useState<TrendingHashtag[]>([])
  const [topic, setTopic] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const fetchPosts = useCallback(async (pageNum: number) => {
    setLoading(true); setError(null)
    try {
      const res = await fetch(`/api/social/feed?page=${pageNum}&limit=20`)
      const data = await res.json()
      if (!data.success) throw new Error()
      setPosts(prev => (pageNum === 1 ? data.data.posts : [...prev, ...data.data.posts]))
      setHasMore(data.data.pagination.page < data.data.pagination.totalPages)
      setPage(pageNum)
    } catch {
      setError('Couldn’t load discussions. Try again in a moment.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPosts(1)
    fetch('/api/social/trending').then(r => r.json()).then(d => { if (d.success) setTrending(d.data.slice(0, 10)) }).catch(() => {})
  }, [fetchPosts])

  const tag = (t: string) => t.replace(/^#/, '').toLowerCase()
  const shown = useMemo(
    () => (topic ? posts.filter(p => new RegExp(`#${topic}\\b`, 'i').test(p.content ?? '')) : posts),
    [posts, topic]
  )

  const topics = trending.length > 0 && (
    <div className="flex flex-wrap gap-1.5">
      {trending.map(t => {
        const active = topic === tag(t.hashtag)
        return (
          <button
            key={t.hashtag}
            type="button"
            onClick={() => setTopic(active ? null : tag(t.hashtag))}
            aria-pressed={active}
            className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${active ? 'border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]' : 'border-[var(--border)] bg-[var(--card)] hover:border-[var(--primary)]'}`}
          >
            <Hash className="h-3 w-3" aria-hidden />{tag(t.hashtag)}
            <span className="opacity-60">{t.count}</span>
          </button>
        )
      })}
    </div>
  )

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto grid max-w-5xl gap-4 px-3 py-4 sm:gap-6 sm:px-6 sm:py-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <main className="min-w-0 space-y-3 sm:space-y-4">
          <header>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-xs">The community</p>
            <h1 style={{ fontSize: 'clamp(1.35rem, 4vw, 1.9rem)', lineHeight: 1.2 }} className="mt-1 flex items-center gap-2 font-black">
              <MessageSquare className="h-5 w-5 text-[var(--primary)] sm:h-7 sm:w-7" aria-hidden /> Discussions
            </h1>
            <p className="mt-1 text-xs text-[var(--muted-foreground)] sm:text-sm">Ask a question, share an idea or research, and reply to others. Add #topics so people can find your post.</p>
          </header>

          <CreatePost onPostCreated={() => { setTopic(null); fetchPosts(1) }} />

          {/* Topics on phones (in the sidebar on desktop) */}
          {topics && <div className="lg:hidden">{topics}</div>}

          {topic && (
            <div className="flex items-center justify-between rounded-lg bg-[var(--muted)] px-3 py-2 text-xs sm:text-sm">
              <span>Showing posts tagged <strong>#{topic}</strong></span>
              <button type="button" onClick={() => setTopic(null)} className="inline-flex items-center gap-1 font-semibold text-[var(--primary)]"><X className="h-3.5 w-3.5" aria-hidden /> Clear</button>
            </div>
          )}

          {error && <p role="alert" className="rounded-lg border border-red-500/30 bg-red-500/5 p-3 text-sm">{error} <button type="button" onClick={() => fetchPosts(1)} className="font-semibold underline">Retry</button></p>}

          {loading && posts.length === 0 ? (
            <div className="flex justify-center py-16"><Loader2 className="h-6 w-6 animate-spin text-[var(--primary)]" aria-label="Loading" /></div>
          ) : shown.length === 0 && !error ? (
            <div className="rounded-2xl border border-dashed border-[var(--border)] p-8 text-center">
              <p className="font-bold">{topic ? `No loaded posts tagged #${topic}.` : 'No discussions yet.'}</p>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">{topic ? 'Clear the filter or load more posts.' : 'Start the first conversation above.'}</p>
            </div>
          ) : (
            <ul className="space-y-3 sm:space-y-4">
              {shown.map(post => <li key={post.id}><FeedPost post={post} /></li>)}
            </ul>
          )}

          {hasMore && (
            <div className="flex justify-center pt-2">
              <button type="button" onClick={() => fetchPosts(page + 1)} disabled={loading} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 text-sm font-semibold hover:border-[var(--primary)] disabled:opacity-60">
                {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />} Load more
              </button>
            </div>
          )}
        </main>

        {/* Desktop sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
              <h2 style={{ fontSize: '0.95rem', lineHeight: 1.3 }} className="mb-3 flex items-center gap-2 font-black"><TrendingUp className="h-4 w-4 text-[var(--primary)]" aria-hidden /> Trending topics</h2>
              {topics || <p className="text-xs text-[var(--muted-foreground)]">Topics appear here as people tag posts.</p>}
            </section>
            <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 text-xs leading-relaxed text-[var(--muted-foreground)]">
              <h2 style={{ fontSize: '0.95rem', lineHeight: 1.3 }} className="mb-2 font-black text-[var(--foreground)]">Good discussions</h2>
              <ul className="list-disc space-y-1 pl-4">
                <li>Be kind and specific.</li>
                <li>Share sources for facts.</li>
                <li>Use #topics so others can find your post.</li>
              </ul>
            </section>
          </div>
        </aside>
      </div>
    </div>
  )
}
