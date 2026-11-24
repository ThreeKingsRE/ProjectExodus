'use client'

// Instagram-style grid: square tiles, pinned work first. Tap a tile to open the post.

import { useEffect, useState } from 'react'
import { BadgeCheck, ChevronLeft, ChevronRight, Copy as Multi, Pin, X } from 'lucide-react'
import { WorkCard, type WorkPost } from './WorkCard'

export function PortfolioGrid<T extends WorkPost>({ posts, renderFooter, showAuthor = false, empty }: {
  posts: T[]
  renderFooter?: (post: T, close: () => void) => React.ReactNode
  showAuthor?: boolean
  empty?: React.ReactNode
}) {
  const [open, setOpen] = useState<number | null>(null)
  const post = open === null ? null : posts[open]

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((i) => (i === null ? i : Math.min(posts.length - 1, i + 1)))
      if (e.key === 'ArrowLeft') setOpen((i) => (i === null ? i : Math.max(0, i - 1)))
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [open, posts.length])

  if (posts.length === 0) return <>{empty}</>
  return (
    <>
      <ul className="grid grid-cols-3 gap-0.5 sm:gap-1.5">
        {posts.map((p, i) => {
          const cover = p.photos[0]
          return (
            <li key={p.id}>
              <button type="button" onClick={() => setOpen(i)} className="group relative block aspect-square w-full overflow-hidden bg-[var(--muted)] sm:rounded-lg" aria-label={p.title || p.story?.slice(0, 60) || 'Work post'}>
                {cover
                  // eslint-disable-next-line @next/next/no-img-element
                  ? <img src={cover.url} alt="" loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                  : <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--primary)]/15 to-[var(--primary)]/5 p-2 text-center sm:p-3">
                      <span className="line-clamp-4 text-[11px] font-semibold leading-snug text-[var(--foreground)] sm:text-sm">{p.title || p.story}</span>
                    </span>}
                {showAuthor && p.author && (
                  <span className="absolute inset-x-0 bottom-0 truncate bg-gradient-to-t from-black/70 to-transparent px-1.5 pb-1 pt-4 text-left text-[10px] font-semibold text-white sm:px-2 sm:text-xs">{p.author.name}</span>
                )}
                <span className="absolute right-1 top-1 flex gap-1 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {p.pinned && !showAuthor && <Pin className="h-3.5 w-3.5" aria-label="Pinned" />}
                  {p.seals.length > 0 && <BadgeCheck className="h-3.5 w-3.5" aria-label="Vouched" />}
                  {p.photos.length > 1 && <Multi className="h-3.5 w-3.5" aria-label="Several photos" />}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      {post && open !== null && (
        <div role="dialog" aria-modal="true" aria-label="Work post" className="fixed inset-0 z-[100] overflow-y-auto bg-black/85 p-2 sm:p-6" onClick={() => setOpen(null)}>
          <button type="button" onClick={() => setOpen(null)} aria-label="Close" className="fixed right-3 top-3 z-10 rounded-full bg-white/15 p-2 text-white"><X className="h-5 w-5" /></button>
          {open > 0 && <button type="button" onClick={(e) => { e.stopPropagation(); setOpen(open - 1) }} aria-label="Previous post" className="fixed left-1 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/15 p-2 text-white sm:block"><ChevronLeft className="h-5 w-5" /></button>}
          {open < posts.length - 1 && <button type="button" onClick={(e) => { e.stopPropagation(); setOpen(open + 1) }} aria-label="Next post" className="fixed right-1 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/15 p-2 text-white sm:block"><ChevronRight className="h-5 w-5" /></button>}
          <div className="mx-auto mt-10 max-w-xl sm:mt-4" onClick={(e) => e.stopPropagation()}>
            <WorkCard post={post} showAuthor={showAuthor} footer={renderFooter?.(post, () => setOpen(null))} />
          </div>
        </div>
      )}
    </>
  )
}
