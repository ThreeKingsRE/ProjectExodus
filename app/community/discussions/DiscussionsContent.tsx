'use client'

// Discussions, styled like a messages app: a clean list of conversations with
// floating glass bars (title on top; search and compose at the bottom). Tap a
// conversation to open it as a thread of chat bubbles and reply at the bottom.
// Posts you haven't opened yet get a blue dot.

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useSession } from 'next-auth/react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, Bell, BellRing, ChevronLeft, ChevronRight, Heart, ListFilter, Loader2, MapPin, MessageCircle, Mic, PenSquare, Search, Star, X } from 'lucide-react'
import { MeetingCard, MeetingChip } from '@/components/discussions/MeetingCard'
import { CATEGORIES, RULES, categoryLabel } from '@/lib/discussions/meetings'

interface Person { id: string; name: string | null; image: string | null }
interface Comment { id: string; content: string; createdAt: string; user: Person; children?: Comment[] }
interface Post {
  id: string; title?: string | null; content: string; createdAt: string; user: Person
  media?: { url: string; type?: string }[]; project?: { name: string; slug: string } | null
  likes?: unknown[]; _count?: { likes: number; comments: number }
  // Local + civic
  place?: string | null; category?: string | null
  meetingAt?: string | null; meetingEndsAt?: string | null; meetingTimezone?: string | null
  meetingJoinUrl?: string | null; agendaUrl?: string | null; calendarUrl?: string | null
  isFollowing?: boolean; isSaved?: boolean
}
interface Prefs { town: string | null; rulesAccepted: boolean }

const OPENED_KEY = 'discussions:opened'
const glass = 'border border-white/10 bg-[var(--card)]/70 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl'

function when(iso: string) {
  const d = new Date(iso), now = new Date()
  const days = Math.floor((+new Date(now.toDateString()) - +new Date(d.toDateString())) / 86400000)
  if (days === 0) return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
  if (days === 1) return 'Yesterday'
  if (days < 7) return d.toLocaleDateString([], { weekday: 'long' })
  return d.toLocaleDateString([], { month: 'numeric', day: 'numeric', year: '2-digit' })
}

function Avatar({ p, size = 44 }: { p: Person; size?: number }) {
  const letter = (p.name || '?').trim().charAt(0).toUpperCase()
  return p.image
    // eslint-disable-next-line @next/next/no-img-element
    ? <img src={p.image} alt="" className="shrink-0 rounded-full object-cover" style={{ width: size, height: size }} />
    : <span className="grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/60 font-bold text-[var(--primary-foreground)]" style={{ width: size, height: size, fontSize: size * 0.42 }}>{letter}</span>
}

const preview = (p: Post) => (p.title ? `${p.title} — ${p.content}` : p.content).replace(/\s+/g, ' ')

function readOpened(): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem(OPENED_KEY) || '[]')) } catch { return new Set() }
}

// ── Thread: the post and its replies as bubbles ─────────────────────────────

function Thread({ post, me, onClose, onChanged, onPatch }: { post: Post; me: string | undefined; onClose: () => void; onChanged: () => void; onPatch: (id: string, patch: Partial<Post>) => void }) {
  const [comments, setComments] = useState<Comment[] | null>(null)
  const [text, setText] = useState('')
  const [sending, setSending] = useState(false)
  const [liked, setLiked] = useState(!!post.likes?.length)
  const [likes, setLikes] = useState(post._count?.likes ?? 0)
  const [following, setFollowing] = useState(!!post.isFollowing)
  const [saved, setSaved] = useState(!!post.isSaved)
  const end = useRef<HTMLDivElement>(null)

  const load = useCallback(() => {
    fetch(`/api/social/comment?postId=${post.id}`).then((r) => r.json()).then((j) => {
      if (j.success) setComments([...j.data].reverse())
    }).catch(() => setComments([]))
  }, [post.id])
  useEffect(() => { load() }, [load])
  useEffect(() => { end.current?.scrollIntoView({ block: 'end' }) }, [comments])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [onClose])

  const send = async () => {
    if (!text.trim() || sending) return
    setSending(true)
    try {
      const res = await fetch('/api/social/comment', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ postId: post.id, content: text.trim() }) })
      if (res.ok) { setText(''); load(); onChanged() }
    } finally { setSending(false) }
  }
  const like = async () => {
    const res = await fetch('/api/social/like', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ postId: post.id }) })
    if (res.ok) { const j = await res.json(); setLiked(j.liked); setLikes((n) => n + (j.liked ? 1 : -1)) }
  }

  const toggleFollow = async () => {
    const res = await fetch('/api/social/follow', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ postId: post.id }) })
    if (res.ok) { const j = await res.json(); setFollowing(j.following); onPatch(post.id, { isFollowing: j.following }) }
  }
  const toggleSave = async () => {
    const res = await fetch('/api/social/save', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ postId: post.id }) })
    if (res.ok) { const j = await res.json(); setSaved(j.saved); onPatch(post.id, { isSaved: j.saved }) }
  }

  const bubble = (c: { id: string; content: string; createdAt: string; user: Person }, small = false) => {
    const mine = c.user.id === me
    return (
      <motion.div key={c.id} initial={{ opacity: 0, y: 8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} className={`flex items-end gap-2 ${mine ? 'flex-row-reverse' : ''} ${small ? 'pl-8' : ''}`}>
        {!mine && <Avatar p={c.user} size={small ? 22 : 28} />}
        <div className={`max-w-[78%] ${mine ? 'items-end' : 'items-start'} flex flex-col`}>
          {!mine && <span className="mb-0.5 px-3 text-[11px] text-[var(--muted-foreground)]">{c.user.name || 'Member'}</span>}
          <div className={`whitespace-pre-wrap break-words rounded-[20px] px-3.5 py-2 text-[15px] leading-snug shadow-[0_4px_14px_rgba(0,0,0,0.18)] ${mine ? 'rounded-br-md bg-[var(--primary)] text-[var(--primary-foreground)]' : 'rounded-bl-md bg-[var(--muted)] text-[var(--foreground)]'}`}>
            {c.content}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      role="dialog" aria-modal="true" aria-label={`Discussion with ${post.user.name || 'a member'}`}
      initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 320, damping: 34 }}
      className="fixed inset-0 z-[120] flex flex-col bg-[var(--background)] text-[var(--foreground)]"
    >
      {/* Floating header */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between p-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <button type="button" onClick={onClose} aria-label="Back to discussions" className={`no-min-size pointer-events-auto grid h-11 w-11 place-items-center rounded-full ${glass}`}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className={`pointer-events-auto flex flex-col items-center rounded-3xl px-4 py-1.5 ${glass}`}>
          <Avatar p={post.user} size={34} />
          <span className="mt-0.5 max-w-[50vw] truncate text-xs font-semibold">{post.user.name || 'Member'}</span>
        </div>
        <div className="pointer-events-auto flex gap-2">
          <button type="button" onClick={toggleFollow} aria-pressed={following} aria-label={following ? 'Following. Tap to stop notifications' : 'Follow this discussion'}
            className={`no-min-size grid h-11 w-11 place-items-center rounded-full ${glass} ${following ? 'text-[var(--primary)]' : ''}`}>
            {following ? <BellRing className="h-5 w-5" /> : <Bell className="h-5 w-5" />}
          </button>
          <button type="button" onClick={toggleSave} aria-pressed={saved} aria-label={saved ? 'Saved. Tap to unsave' : 'Save for later'}
            className={`no-min-size grid h-11 w-11 place-items-center rounded-full ${glass} ${saved ? 'text-amber-500' : ''}`}>
            <Star className={`h-5 w-5 ${saved ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-2.5 overflow-y-auto px-3 pb-28 pt-24">
        <p className="text-center text-[11px] text-[var(--muted-foreground)]">{new Date(post.createdAt).toLocaleString([], { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}</p>
        {post.meetingAt && <MeetingCard m={post} />}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex items-end gap-2 ${post.user.id === me ? 'flex-row-reverse' : ''}`}>
          {post.user.id !== me && <Avatar p={post.user} size={28} />}
          <div className="relative max-w-[85%]">
            <div className={`rounded-[22px] px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] ${post.user.id === me ? 'rounded-br-md bg-[var(--primary)] text-[var(--primary-foreground)]' : 'rounded-bl-md bg-[var(--muted)]'}`}>
              {post.project && <p className="mb-1 text-[11px] font-semibold opacity-75">From {post.project.name}</p>}
              {post.title && <p className="mb-1 text-[17px] font-bold leading-snug">{post.title}</p>}
              <p className="whitespace-pre-wrap break-words text-[15px] leading-snug">{post.content}</p>
              {post.media && post.media.length > 0 && (
                <div className="mt-2 grid gap-1" style={{ gridTemplateColumns: post.media.length > 1 ? '1fr 1fr' : '1fr' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {post.media.slice(0, 4).map((m) => <img key={m.url} src={m.url} alt="" className="aspect-square w-full rounded-xl object-cover" />)}
                </div>
              )}
            </div>
            {/* Tapback */}
            <button type="button" onClick={like} aria-pressed={liked} aria-label={liked ? 'Unlike' : 'Like'}
              className={`no-min-size absolute -top-3 ${post.user.id === me ? '-left-1' : '-right-1'} inline-flex h-7 min-w-7 items-center justify-center gap-0.5 rounded-full px-1.5 text-[11px] font-bold ${glass} ${liked ? 'text-rose-500' : 'text-[var(--muted-foreground)]'}`}>
              <Heart className={`h-3.5 w-3.5 ${liked ? 'fill-current' : ''}`} />{likes > 0 && likes}
            </button>
          </div>
        </motion.div>

        {comments === null
          ? <div className="flex justify-center py-6"><Loader2 className="h-5 w-5 animate-spin text-[var(--muted-foreground)]" aria-label="Loading replies" /></div>
          : comments.map((c) => (
            <div key={c.id} className="space-y-1.5">
              {bubble(c)}
              {c.children?.map((r) => bubble(r, true))}
            </div>
          ))}
        <div ref={end} />
      </div>

      {/* Floating reply bar */}
      <form onSubmit={(e) => { e.preventDefault(); send() }} className="absolute inset-x-0 bottom-0 flex items-end gap-2 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className={`flex min-h-11 flex-1 items-center rounded-3xl px-4 ${glass}`}>
          <textarea value={text} onChange={(e) => setText(e.target.value)} rows={1} maxLength={5000} placeholder="Reply" aria-label="Reply"
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
            className="max-h-32 w-full resize-none bg-transparent py-2.5 text-[15px] outline-none placeholder:text-[var(--muted-foreground)]" />
        </div>
        <button type="submit" disabled={!text.trim() || sending} aria-label="Send" style={{ color: 'var(--primary-foreground)' }}
          className="no-min-size grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--primary)] shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-opacity disabled:opacity-40">
          {sending ? <Loader2 className="h-5 w-5 animate-spin" /> : <ArrowUp className="h-5 w-5" strokeWidth={2.5} />}
        </button>
      </form>
    </motion.div>
  )
}

// ── Rules (shown once, before a member's first post) ─────────────────────────

function Rules({ onAgree, onCancel, busy }: { onAgree: () => void; onCancel: () => void; busy: boolean }) {
  return (
    <div className="space-y-3">
      <p className="text-base font-bold">Before your first post</p>
      <p className="text-sm text-[var(--muted-foreground)]">Discussions are for real conversation, including local issues and politics. Please agree to keep it civil:</p>
      <ul className="space-y-2">
        {RULES.map((r) => <li key={r} className="flex gap-2 text-sm"><span className="mt-0.5 text-[var(--primary)]">●</span>{r}</li>)}
      </ul>
      <div className="flex gap-2 pt-1">
        <button type="button" onClick={onCancel} className="no-min-size h-11 flex-1 rounded-full bg-[var(--muted)] text-sm font-semibold">Not now</button>
        <button type="button" onClick={onAgree} disabled={busy} style={{ color: 'var(--primary-foreground)' }} className="no-min-size inline-flex h-11 flex-[2] items-center justify-center gap-2 rounded-full bg-[var(--primary)] text-sm font-bold disabled:opacity-60">
          {busy && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />} I agree
        </button>
      </div>
    </div>
  )
}

// ── New discussion sheet ─────────────────────────────────────────────────────

const field = 'w-full rounded-xl bg-[var(--muted)] px-3 py-2.5 text-[15px] outline-none placeholder:text-[var(--muted-foreground)]'

function Compose({ prefs, onRulesAccepted, onClose, onPosted }: { prefs: Prefs; onRulesAccepted: () => void; onClose: () => void; onPosted: () => void }) {
  const [text, setText] = useState('')
  const [visibility, setVisibility] = useState<'PUBLIC' | 'FOLLOWERS_ONLY' | 'PRIVATE'>('PUBLIC')
  const [place, setPlace] = useState(prefs.town ?? '')
  const [category, setCategory] = useState('')
  const [meeting, setMeeting] = useState(false)
  const [startsAt, setStartsAt] = useState('')
  const [endsAt, setEndsAt] = useState('')
  const [joinUrl, setJoinUrl] = useState('')
  const [agendaUrl, setAgendaUrl] = useState('')
  const [calendarUrl, setCalendarUrl] = useState('')
  const [step, setStep] = useState<'write' | 'rules'>('write')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async () => {
    setBusy(true); setError(null)
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
      const iso = (v: string) => (v ? new Date(v).toISOString() : null)
      const res = await fetch('/api/social/post', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: text, visibility,
          hashtags: (text.match(/#\w+/g) || []).map((t) => t.slice(1)), mentions: [],
          place: place.trim() || null, category: category || null,
          ...(meeting ? { meetingAt: iso(startsAt), meetingEndsAt: iso(endsAt), meetingTimezone: tz, meetingJoinUrl: joinUrl.trim() || null, agendaUrl: agendaUrl.trim() || null, calendarUrl: calendarUrl.trim() || null } : {}),
        }),
      })
      const j = await res.json().catch(() => ({}))
      if (res.status === 403 && j.code === 'RULES') { setStep('rules'); setBusy(false); return }
      if (!res.ok) throw new Error(j.error || 'Couldn’t post. Try again.')
      onPosted(); onClose()
    } catch (e) { setError(e instanceof Error ? e.message : 'Couldn’t post.') }
    setBusy(false)
  }
  const post = () => { if (text.trim() && !(meeting && !startsAt)) { if (!prefs.rulesAccepted) setStep('rules'); else submit() } else if (meeting && !startsAt) setError('Pick the meeting date and time.') }
  const agree = async () => {
    setBusy(true)
    const res = await fetch('/api/social/prefs', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ acceptRules: true }) })
    if (res.ok) { onRulesAccepted(); setStep('write'); await submit() } else { setError('Couldn’t save that. Try again.'); setBusy(false) }
  }

  return (
    <motion.div className="fixed inset-0 z-[120] flex items-end justify-center bg-black/50 sm:items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div role="dialog" aria-modal="true" aria-label="New discussion" onClick={(e) => e.stopPropagation()}
        initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', stiffness: 320, damping: 32 }}
        className="max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-t-[28px] bg-[var(--card)] p-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-[var(--foreground)] shadow-2xl sm:rounded-[28px]">
        {step === 'rules' ? <Rules onAgree={agree} onCancel={() => setStep('write')} busy={busy} /> : (
          <>
            <div className="mb-3 flex items-center justify-between">
              <button type="button" onClick={onClose} className="no-min-size text-sm font-semibold text-[var(--primary)]">Cancel</button>
              <p className="text-sm font-bold">New Discussion</p>
              <button type="button" onClick={post} disabled={!text.trim() || busy} className="no-min-size text-sm font-bold text-[var(--primary)] disabled:opacity-40">{busy ? 'Posting…' : 'Post'}</button>
            </div>
            <textarea autoFocus value={text} onChange={(e) => setText(e.target.value)} rows={4} maxLength={5000}
              placeholder="Ask a question, share an idea, or start a conversation about a local meeting… add #topics"
              className="w-full resize-none rounded-2xl bg-[var(--muted)] p-3 text-[15px] outline-none placeholder:text-[var(--muted-foreground)]" />
            <div className="mt-2 grid grid-cols-2 gap-2">
              <input value={place} onChange={(e) => setPlace(e.target.value)} maxLength={80} placeholder="Town or region" aria-label="Town or region" className={field} />
              <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Category" className={field}>
                <option value="">Category</option>
                {CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
              </select>
            </div>
            <button type="button" onClick={() => setMeeting((v) => !v)} aria-pressed={meeting}
              className={`no-min-size mt-2 inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-bold ${meeting ? 'bg-[var(--primary)] text-[var(--primary-foreground)]' : 'bg-[var(--muted)]'}`}>
              {meeting ? '✓ ' : '+ '}This is about a meeting
            </button>
            {meeting && (
              <div className="mt-2 space-y-2 rounded-2xl bg-[var(--muted)]/50 p-3">
                <div className="grid grid-cols-2 gap-2">
                  <label className="text-[11px] font-semibold">Starts<input type="datetime-local" value={startsAt} onChange={(e) => setStartsAt(e.target.value)} className={`${field} mt-1`} /></label>
                  <label className="text-[11px] font-semibold">Ends (optional)<input type="datetime-local" value={endsAt} onChange={(e) => setEndsAt(e.target.value)} className={`${field} mt-1`} /></label>
                </div>
                <input value={joinUrl} onChange={(e) => setJoinUrl(e.target.value)} placeholder="Join link (Zoom, Google Meet, Teams…)" aria-label="Join link" inputMode="url" className={field} />
                <input value={agendaUrl} onChange={(e) => setAgendaUrl(e.target.value)} placeholder="Agenda link (optional)" aria-label="Agenda link" inputMode="url" className={field} />
                <input value={calendarUrl} onChange={(e) => setCalendarUrl(e.target.value)} placeholder="Town calendar link (optional)" aria-label="Calendar link" inputMode="url" className={field} />
                <p className="text-[11px] text-[var(--muted-foreground)]">Links can be any website (https). Join links show only to signed-in members.</p>
              </div>
            )}
            <div className="mt-3 flex items-center gap-2 text-xs">
              {(['PUBLIC', 'FOLLOWERS_ONLY', 'PRIVATE'] as const).map((v) => (
                <button key={v} type="button" onClick={() => setVisibility(v)} aria-pressed={visibility === v}
                  className={`no-min-size rounded-full px-3 py-1 font-semibold ${visibility === v ? 'bg-[var(--primary)] text-[var(--primary-foreground)]' : 'bg-[var(--muted)]'}`}>
                  {v === 'PUBLIC' ? 'Everyone' : v === 'FOLLOWERS_ONLY' ? 'Followers' : 'Only me'}
                </button>
              ))}
              <span className="ml-auto text-[var(--muted-foreground)]">{text.length}/5000</span>
            </div>
            {error && <p role="alert" className="mt-2 text-xs text-red-500">{error}</p>}
          </>
        )}
        {step === 'rules' && error && <p role="alert" className="mt-2 text-xs text-red-500">{error}</p>}
      </motion.div>
    </motion.div>
  )
}

// ── The list ─────────────────────────────────────────────────────────────────

type Tab = 'all' | 'following' | 'meetings' | 'saved'
const TABS: { id: Tab; label: string }[] = [{ id: 'all', label: 'All' }, { id: 'following', label: 'Following' }, { id: 'meetings', label: 'Meetings' }, { id: 'saved', label: 'Saved' }]
const EMPTY: Record<Tab, string> = {
  all: 'No discussions yet.',
  following: 'Follow a discussion (the bell inside it) and it shows up here, with a notification for every reply.',
  meetings: 'No upcoming meetings. Post one so neighbors can join and talk about it.',
  saved: 'Tap the star inside a discussion to save it here.',
}

export default function DiscussionsContent() {
  const { data: session } = useSession()
  const me = session?.user?.id
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [error, setError] = useState(false)
  const [trending, setTrending] = useState<{ hashtag: string; count: number }[]>([])
  const [tab, setTab] = useState<Tab>('all')
  const [past, setPast] = useState(false)
  const [topic, setTopic] = useState<string | null>(null)
  const [category, setCategory] = useState<string | null>(null)
  const [town, setTown] = useState<string | null>(null)
  const [townDraft, setTownDraft] = useState('')
  const [prefs, setPrefs] = useState<Prefs>({ town: null, rulesAccepted: true })
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [q, setQ] = useState('')
  const [open, setOpen] = useState<Post | null>(null)
  const [composing, setComposing] = useState(false)
  const [opened, setOpened] = useState<Set<string>>(new Set())
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  useEffect(() => { const t = setTimeout(() => setQ(query.trim()), 300); return () => clearTimeout(t) }, [query])

  const fetchPosts = useCallback(async (n: number) => {
    setLoading(true); setError(false)
    try {
      const params = new URLSearchParams({ page: String(n), limit: '20' })
      const t = tab === 'meetings' && past ? 'past' : tab
      if (t !== 'all') params.set('tab', t)
      if (town) params.set('town', town)
      if (category) params.set('category', category)
      if (q) params.set('q', q)
      const j = await (await fetch(`/api/social/feed?${params}`)).json()
      if (!j.success) throw new Error()
      setPosts((prev) => (n === 1 ? j.data.posts : [...prev, ...j.data.posts]))
      setHasMore(j.data.pagination.page < j.data.pagination.totalPages)
      setPage(n)
    } catch { setError(true) }
    setLoading(false)
  }, [tab, past, town, category, q])

  useEffect(() => { fetchPosts(1) }, [fetchPosts])

  useEffect(() => {
    setOpened(readOpened())
    fetch('/api/social/trending').then((r) => r.json()).then((d) => { if (d.success) setTrending(d.data.slice(0, 12)) }).catch(() => {})
    fetch('/api/social/prefs').then((r) => r.json()).then((j) => { if (j.success) { setPrefs(j.data); setTownDraft(j.data.town ?? '') } }).catch(() => {})
    // A notification or shared link opens its discussion directly
    const id = new URLSearchParams(window.location.search).get('post')
    if (id) fetch(`/api/social/post/${id}`).then((r) => r.json()).then((j) => { if (j.success) openPost(j.data) }).catch(() => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const openPost = (p: Post) => {
    setOpen(p)
    setOpened((s) => {
      const next = new Set(s); next.add(p.id)
      try { localStorage.setItem(OPENED_KEY, JSON.stringify([...next].slice(-500))) } catch { /* private mode */ }
      return next
    })
  }
  const patchPost = useCallback((id: string, patch: Partial<Post>) => setPosts((ps) => ps.map((p) => (p.id === id ? { ...p, ...patch } : p))), [])

  const saveTown = async () => {
    const res = await fetch('/api/social/prefs', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ town: townDraft }) })
    if (res.ok) { const j = await res.json(); setPrefs((p) => ({ ...p, town: j.data.town })); if (!j.data.town) setTown(null) }
  }

  // Topic (#tag) filtering stays on the loaded page; everything else is done by the server
  const shown = useMemo(() => (topic ? posts.filter((p) => new RegExp(`#${topic}\\b`, 'i').test(p.content)) : posts), [posts, topic])
  const isNew = (p: Post) => p.user.id !== me && !opened.has(p.id) && Date.now() - +new Date(p.createdAt) < 14 * 86400000
  const activeFilters = [topic, category, town].filter(Boolean).length

  return (
    <div className="relative min-h-[calc(100dvh-68px)] bg-[var(--background)] text-[var(--foreground)]">
      {/* Floating top bar */}
      <div className="pointer-events-none sticky top-0 z-20 flex items-center justify-between px-3 pt-3">
        <button type="button" onClick={() => setFiltersOpen((v) => !v)} aria-expanded={filtersOpen}
          className={`no-min-size pointer-events-auto inline-flex h-11 items-center gap-1.5 rounded-full px-4 text-[15px] font-semibold ${glass} ${activeFilters ? 'text-[var(--primary)]' : ''}`}>
          <ListFilter className="h-4 w-4" aria-hidden />Filter{activeFilters > 0 && <span className="grid h-5 min-w-5 place-items-center rounded-full bg-[var(--primary)] px-1 text-[11px] text-[var(--primary-foreground)]">{activeFilters}</span>}
        </button>
        <h1 style={{ fontSize: '1.05rem', lineHeight: 1.2 }} className={`pointer-events-auto rounded-full px-4 py-2.5 font-bold ${glass}`}>Discussions</h1>
        <button type="button" onClick={() => setComposing(true)} aria-label="New discussion"
          className={`no-min-size pointer-events-auto grid h-11 w-11 place-items-center rounded-full ${glass}`}>
          <PenSquare className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {filtersOpen && (
          <motion.div initial={{ opacity: 0, y: -8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8 }}
            className={`absolute left-3 right-3 top-[64px] z-30 max-h-[70dvh] space-y-3 overflow-y-auto rounded-3xl p-3 sm:right-auto sm:w-96 ${glass} bg-[var(--card)]/95`}>
            <div>
              <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Town</p>
              <div className="flex gap-1.5">
                <input value={townDraft} onChange={(e) => setTownDraft(e.target.value)} placeholder="Your town or region" aria-label="My town" className={`${field} h-9 flex-1 py-0`} />
                <button type="button" onClick={saveTown} className="no-min-size h-9 rounded-full bg-[var(--muted)] px-3 text-xs font-bold">Save</button>
              </div>
              {prefs.town && (
                <button type="button" onClick={() => setTown(town ? null : prefs.town)} aria-pressed={!!town}
                  className={`no-min-size mt-1.5 inline-flex h-8 items-center gap-1 rounded-full px-3 text-xs font-semibold ${town ? 'bg-[var(--primary)] text-[var(--primary-foreground)]' : 'bg-[var(--muted)]'}`}>
                  <MapPin className="h-3.5 w-3.5" aria-hidden />Only {prefs.town}
                </button>
              )}
            </div>
            <div>
              <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Category</p>
              <div className="flex flex-wrap gap-1.5">
                {CATEGORIES.map((c) => (
                  <button key={c.id} type="button" onClick={() => setCategory(category === c.id ? null : c.id)} aria-pressed={category === c.id}
                    className={`no-min-size rounded-full px-3 py-1 text-xs font-semibold ${category === c.id ? 'bg-[var(--primary)] text-[var(--primary-foreground)]' : 'bg-[var(--muted)]'}`}>{c.label}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Topics</p>
              <div className="flex flex-wrap gap-1.5">
                {trending.map((t) => {
                  const tag = t.hashtag.replace(/^#/, '').toLowerCase()
                  return (
                    <button key={tag} type="button" onClick={() => setTopic(topic === tag ? null : tag)} aria-pressed={topic === tag}
                      className={`no-min-size rounded-full px-3 py-1 text-xs font-semibold ${topic === tag ? 'bg-[var(--primary)] text-[var(--primary-foreground)]' : 'bg-[var(--muted)]'}`}>
                      #{tag} <span className="opacity-60">{t.count}</span>
                    </button>
                  )
                })}
                {trending.length === 0 && <p className="text-xs text-[var(--muted-foreground)]">Topics appear as people add #tags to posts.</p>}
              </div>
            </div>
            <div className="flex justify-between pt-1">
              <button type="button" onClick={() => { setTopic(null); setCategory(null); setTown(null) }} disabled={!activeFilters} className="no-min-size text-xs font-semibold text-[var(--primary)] disabled:opacity-40">Clear filters</button>
              <button type="button" onClick={() => setFiltersOpen(false)} className="no-min-size text-xs font-bold">Done</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conversation list */}
      <div className="mx-auto px-2 pb-32 pt-3 sm:px-4" style={{ maxWidth: '44rem' }}>
        <div role="tablist" aria-label="Discussions" className={`mb-2 flex rounded-full p-1 ${glass}`}>
          {TABS.map((t) => (
            <button key={t.id} type="button" role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)}
              className={`no-min-size h-9 flex-1 rounded-full text-[13px] font-bold transition-colors ${tab === t.id ? 'bg-[var(--primary)] text-[var(--primary-foreground)] shadow' : 'text-[var(--muted-foreground)]'}`}>{t.label}</button>
          ))}
        </div>
        {tab === 'meetings' && (
          <div className="mb-2 flex justify-center gap-1.5 text-xs">
            {([false, true] as const).map((v) => (
              <button key={String(v)} type="button" onClick={() => setPast(v)} aria-pressed={past === v}
                className={`no-min-size rounded-full px-3 py-1 font-semibold ${past === v ? 'bg-[var(--muted)] text-[var(--foreground)]' : 'text-[var(--muted-foreground)]'}`}>{v ? 'Past' : 'Upcoming'}</button>
            ))}
          </div>
        )}
        {activeFilters > 0 && (
          <div className="mb-2 flex flex-wrap gap-1.5 px-1">
            {town && <button type="button" onClick={() => setTown(null)} className="no-min-size inline-flex items-center gap-1 rounded-full bg-[var(--primary)]/15 px-2.5 py-1 text-xs font-semibold text-[var(--primary)]"><MapPin className="h-3 w-3" />{town}<X className="h-3 w-3" /></button>}
            {category && <button type="button" onClick={() => setCategory(null)} className="no-min-size inline-flex items-center gap-1 rounded-full bg-[var(--primary)]/15 px-2.5 py-1 text-xs font-semibold text-[var(--primary)]">{categoryLabel(category)}<X className="h-3 w-3" /></button>}
            {topic && <button type="button" onClick={() => setTopic(null)} className="no-min-size inline-flex items-center gap-1 rounded-full bg-[var(--primary)]/15 px-2.5 py-1 text-xs font-semibold text-[var(--primary)]">#{topic}<X className="h-3 w-3" /></button>}
          </div>
        )}

        {error && <p role="alert" className="m-3 rounded-2xl bg-red-500/10 p-3 text-sm">Couldn’t load discussions. <button type="button" onClick={() => fetchPosts(1)} className="font-semibold underline">Retry</button></p>}
        {loading && posts.length === 0 ? (
          <div className="flex justify-center py-20"><Loader2 className="h-6 w-6 animate-spin text-[var(--muted-foreground)]" aria-label="Loading" /></div>
        ) : shown.length === 0 && !error ? (
          <div className="px-6 py-16 text-center">
            <MessageCircle className="mx-auto h-10 w-10 text-[var(--muted-foreground)]" aria-hidden />
            <p className="mt-2 font-semibold">{q || activeFilters ? 'Nothing matches.' : EMPTY[tab]}</p>
            <button type="button" onClick={() => setComposing(true)} className="no-min-size mt-3 text-sm font-semibold text-[var(--primary)]">Start one</button>
          </div>
        ) : (
          <ul>
            {shown.map((p, i) => (
              <motion.li key={p.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(i, 12) * 0.03 }}>
                <button type="button" onClick={() => openPost(p)}
                  className="no-min-size group flex w-full items-center gap-3 rounded-2xl py-3 pl-1 pr-2 text-left transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--card)]/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] active:scale-[0.99]">
                  <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${isNew(p) ? 'bg-sky-500' : 'bg-transparent'}`} aria-label={isNew(p) ? 'New' : undefined} />
                  <Avatar p={p.user} size={50} />
                  <span className="min-w-0 flex-1 border-b border-[var(--border)]/60 pb-3 group-last:border-0">
                    <span className="flex items-baseline gap-2">
                      <span className="min-w-0 flex-1 truncate text-[16px] font-bold">{p.user.name || 'Member'}</span>
                      {p.isFollowing && <BellRing className="h-3.5 w-3.5 shrink-0 self-center text-[var(--primary)]" aria-label="Following" />}
                      <span className="shrink-0 text-[13px] text-[var(--muted-foreground)]">{when(p.createdAt)}</span>
                      <ChevronRight className="h-4 w-4 shrink-0 self-center text-[var(--muted-foreground)]" aria-hidden />
                    </span>
                    <span className="mt-0.5 line-clamp-2 text-[14.5px] leading-snug text-[var(--muted-foreground)]">{preview(p)}</span>
                    {(p.meetingAt || p.place || p.category || (p._count?.comments ?? 0) > 0 || p.project) && (
                      <span className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-[var(--muted-foreground)]">
                        <MeetingChip m={p} />
                        {p.category && <span className="rounded-full bg-[var(--muted)] px-2 py-0.5 font-semibold">{categoryLabel(p.category)}</span>}
                        {p.place && <span className="inline-flex items-center gap-0.5"><MapPin className="h-3 w-3" aria-hidden />{p.place}</span>}
                        {p.project && <span className="truncate">{p.project.name}</span>}
                        {(p._count?.comments ?? 0) > 0 && <span className="inline-flex items-center gap-0.5"><MessageCircle className="h-3 w-3" aria-hidden />{p._count?.comments}</span>}
                      </span>
                    )}
                  </span>
                </button>
              </motion.li>
            ))}
          </ul>
        )}
        {hasMore && (
          <div className="flex justify-center pt-3">
            <button type="button" onClick={() => fetchPosts(page + 1)} disabled={loading} className={`no-min-size inline-flex h-10 items-center gap-2 rounded-full px-5 text-sm font-semibold ${glass}`}>
              {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />} Load more
            </button>
          </div>
        )}
      </div>

      {/* Floating bottom bar: search */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 flex items-center gap-2 px-3 pb-[max(0.9rem,env(safe-area-inset-bottom))] pt-2">
        <div className="mx-auto flex w-full items-center gap-2 pr-[4.25rem]" style={{ maxWidth: '44rem' }}>
          <label className={`pointer-events-auto flex h-12 min-w-0 flex-1 items-center gap-2 rounded-full px-4 ${glass}`}>
            <Search className="h-5 w-5 shrink-0 text-[var(--muted-foreground)]" aria-hidden />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" aria-label="Search discussions"
              className="min-w-0 flex-1 bg-transparent text-[16px] outline-none placeholder:text-[var(--muted-foreground)]" />
            {query
              ? <button type="button" onClick={() => setQuery('')} aria-label="Clear search" className="no-min-size"><X className="h-4 w-4 text-[var(--muted-foreground)]" /></button>
              : <Mic className="h-5 w-5 shrink-0 text-[var(--muted-foreground)]" aria-hidden />}
          </label>
        </div>
      </div>

      {/* Rendered at the top of the page so they sit above the floating Sage button */}
      {mounted && createPortal(
        <>
          <AnimatePresence>
            {open && <Thread key={open.id} post={open} me={me} onClose={() => setOpen(null)} onChanged={() => fetchPosts(1)} onPatch={patchPost} />}
          </AnimatePresence>
          <AnimatePresence>
            {composing && <Compose prefs={prefs} onRulesAccepted={() => setPrefs((p) => ({ ...p, rulesAccepted: true }))} onClose={() => setComposing(false)} onPosted={() => { setTopic(null); setCategory(null); setQuery(''); fetchPosts(1) }} />}
          </AnimatePresence>
        </>,
        document.body
      )}
    </div>
  )
}
