'use client'

// Quick post (photos + a line) that opens into a full project card: trades, role,
// dates, city, materials and the story. Also used to edit a post.

import { useRef, useState } from 'react'
import { ChevronDown, ImagePlus, Loader2, X } from 'lucide-react'
import { MAX_PHOTOS, type CareerPhoto, type Visibility } from '@/lib/career/career'
import { PhotoEditor } from './PhotoEditor'
import type { WorkPost } from './WorkCard'

const VIS: { id: Visibility; label: string; hint: string }[] = [
  { id: 'PUBLIC', label: 'Public', hint: 'Anyone with your link' },
  { id: 'MEMBERS', label: 'Members', hint: 'Signed-in members only' },
  { id: 'PRIVATE', label: 'Only me', hint: 'Just for your records' },
]
const input = 'w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none focus:border-[var(--primary)]'

export function PostComposer({ initial, sealed, onSaved, onCancel }: {
  initial?: WorkPost
  /** The post carries seals that a change of key details would remove */
  sealed?: boolean
  onSaved: (post: WorkPost & { vouches: unknown[] }) => void
  onCancel?: () => void
}) {
  const [photos, setPhotos] = useState<CareerPhoto[]>(initial?.photos ?? [])
  const [title, setTitle] = useState(initial?.title ?? '')
  const [open, setOpen] = useState(!!initial)
  const [trades, setTrades] = useState((initial?.trades ?? []).join(', '))
  const [role, setRole] = useState(initial?.role ?? '')
  const [startedOn, setStartedOn] = useState(initial?.startedOn?.slice(0, 7) ?? '')
  const [endedOn, setEndedOn] = useState(initial?.endedOn?.slice(0, 7) ?? '')
  const [place, setPlace] = useState(initial?.place ?? '')
  const [materials, setMaterials] = useState(initial?.materials ?? '')
  const [story, setStory] = useState(initial?.story ?? '')
  const [visibility, setVisibility] = useState<Visibility>((initial?.visibility as Visibility) ?? 'PUBLIC')
  const [queue, setQueue] = useState<File[]>([])
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const reset = () => {
    setPhotos([]); setTitle(''); setTrades(''); setRole(''); setStartedOn(''); setEndedOn('')
    setPlace(''); setMaterials(''); setStory(''); setVisibility('PUBLIC'); setOpen(false)
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true); setError(null)
    try {
      const res = await fetch(initial ? `/api/career/posts/${initial.id}` : '/api/career/posts', {
        method: initial ? 'PATCH' : 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          photos, title, role, place, materials, story, visibility,
          trades: trades.split(',').map((t) => t.trim()).filter(Boolean),
          startedOn: startedOn || null, endedOn: endedOn || null,
        }),
      })
      const j = await res.json()
      if (!j.success) throw new Error(j.error || 'Couldn’t save.')
      onSaved(j.data)
      if (!initial) reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Couldn’t save.')
    }
    setBusy(false)
  }

  return (
    <form onSubmit={submit} className="space-y-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3 text-[var(--foreground)] sm:p-4">
      {!initial && <p className="text-sm font-bold">Post your work</p>}

      <div className="flex flex-wrap gap-2">
        {photos.map((ph, i) => (
          <div key={ph.url} className="relative h-16 w-16 overflow-hidden rounded-lg bg-[var(--muted)] sm:h-20 sm:w-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ph.url} alt={`Photo ${i + 1}`} className="h-full w-full object-cover" />
            {ph.label && <span className="absolute bottom-0.5 left-0.5 rounded bg-black/65 px-1 text-[9px] font-bold uppercase text-white">{ph.label}</span>}
            <button type="button" aria-label={`Remove photo ${i + 1}`} onClick={() => setPhotos((p) => p.filter((_, j) => j !== i))} className="absolute right-0.5 top-0.5 rounded-full bg-black/65 p-0.5 text-white"><X className="h-3 w-3" /></button>
          </div>
        ))}
        {photos.length < MAX_PHOTOS && (
          <button type="button" onClick={() => fileRef.current?.click()} className="grid h-16 w-16 place-items-center rounded-lg border-2 border-dashed border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--primary)] sm:h-20 sm:w-20" aria-label="Add photos">
            <ImagePlus className="h-5 w-5" aria-hidden />
          </button>
        )}
        <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" multiple hidden
          onChange={(e) => { setQueue(Array.from(e.target.files ?? []).slice(0, MAX_PHOTOS - photos.length)); e.target.value = '' }} />
      </div>

      <input value={title} onChange={(e) => setTitle(e.target.value)} maxLength={120} placeholder="What did you build, fix or make?" aria-label="Title" className={input} />

      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary)]">
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden /> {open ? 'Fewer details' : 'Add details (trade, role, dates, city, story)'}
      </button>

      {open && (
        <div className="grid gap-2 sm:grid-cols-2">
          <label className="text-xs font-semibold">Trades <span className="font-normal text-[var(--muted-foreground)]">(comma separated)</span>
            <input value={trades} onChange={(e) => setTrades(e.target.value)} placeholder="carpentry, framing" className={`${input} mt-1`} /></label>
          <label className="text-xs font-semibold">Your role
            <input value={role} onChange={(e) => setRole(e.target.value)} maxLength={80} placeholder="Lead carpenter" className={`${input} mt-1`} /></label>
          <label className="text-xs font-semibold">Started
            <input type="month" value={startedOn} onChange={(e) => setStartedOn(e.target.value)} className={`${input} mt-1`} /></label>
          <label className="text-xs font-semibold">Finished
            <input type="month" value={endedOn} onChange={(e) => setEndedOn(e.target.value)} className={`${input} mt-1`} /></label>
          <label className="text-xs font-semibold sm:col-span-2">City or region <span className="font-normal text-[var(--muted-foreground)]">(never a street address)</span>
            <input value={place} onChange={(e) => setPlace(e.target.value)} maxLength={80} placeholder="Rochester, NY" className={`${input} mt-1`} /></label>
          <label className="text-xs font-semibold sm:col-span-2">Materials
            <input value={materials} onChange={(e) => setMaterials(e.target.value)} maxLength={1000} placeholder="Cedar, galvanized hardware" className={`${input} mt-1`} /></label>
          <label className="text-xs font-semibold sm:col-span-2">The story
            <textarea value={story} onChange={(e) => setStory(e.target.value)} maxLength={4000} rows={4} placeholder="What was the problem, what did you do, what are you proud of?" className={`${input} mt-1`} /></label>
        </div>
      )}

      {sealed && <p className="rounded-lg bg-amber-500/10 p-2 text-xs">This post is vouched. Changing photos, title, role, dates, city or trades removes the seal; the story, materials and who can see it are safe to change.</p>}
      {error && <p role="alert" className="text-xs text-red-600">{error}</p>}

      <div className="flex flex-wrap items-center gap-2">
        <label className="sr-only" htmlFor={`vis-${initial?.id ?? 'new'}`}>Who can see this</label>
        <select id={`vis-${initial?.id ?? 'new'}`} value={visibility} onChange={(e) => setVisibility(e.target.value as Visibility)} className="min-h-10 rounded-full border border-[var(--border)] bg-[var(--background)] px-3 text-xs font-semibold">
          {VIS.map((v) => <option key={v.id} value={v.id}>{v.label} · {v.hint}</option>)}
        </select>
        <div className="ml-auto flex gap-2">
          {onCancel && <button type="button" onClick={onCancel} className="min-h-10 rounded-full px-4 text-sm font-semibold hover:bg-[var(--muted)]">Cancel</button>}
          <button type="submit" disabled={busy || (!title.trim() && !photos.length)} className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[var(--primary)] px-5 text-sm font-bold text-[var(--primary-foreground)] disabled:opacity-50">
            {busy && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />} {initial ? 'Save' : 'Post'}
          </button>
        </div>
      </div>

      {queue[0] && (
        <PhotoEditor
          key={`${queue[0].name}-${queue.length}`}
          file={queue[0]}
          onDone={(p) => { setPhotos((x) => [...x, p].slice(0, MAX_PHOTOS)); setQueue((q) => q.slice(1)) }}
          onCancel={() => setQueue((q) => q.slice(1))}
        />
      )}
    </form>
  )
}
