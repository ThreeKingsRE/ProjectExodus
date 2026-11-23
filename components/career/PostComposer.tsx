'use client'

// Post work like you'd post a photo: pictures, a caption with #tags, tag your crew.
// Extra details (title, role, dates, materials) are there for those who want them.

import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ImagePlus, Loader2, X } from 'lucide-react'
import { MAX_PHOTOS, type CareerPhoto, type Visibility } from '@/lib/career/career'
import { PhotoEditor } from './PhotoEditor'
import { Avatar, type Person, type WorkPost } from './WorkCard'

const VIS: { id: Visibility; label: string }[] = [
  { id: 'PUBLIC', label: 'Public' },
  { id: 'MEMBERS', label: 'Members only' },
  { id: 'PRIVATE', label: 'Only me' },
]
const input = 'w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none focus:border-[var(--primary)]'
const SUGGESTED = ['mowing', 'landscaping', 'hedges', 'brickwork', 'masonry', 'concrete', 'carpentry', 'framing', 'roofing', 'drywall', 'painting', 'tile', 'plumbing', 'electrical', 'welding', 'hvac', 'paving', 'fencing']

function TagPeople({ people, onChange }: { people: Person[]; onChange: (p: Person[]) => void }) {
  const [q, setQ] = useState('')
  const [found, setFound] = useState<Person[]>([])
  useEffect(() => {
    if (q.trim().length < 2) { setFound([]); return }
    const t = setTimeout(() => {
      fetch(`/api/career/people?q=${encodeURIComponent(q.trim())}`).then((r) => r.json()).then((j) => { if (j.success) setFound(j.data) }).catch(() => {})
    }, 250)
    return () => clearTimeout(t)
  }, [q])
  const results = found.filter((f) => !people.some((p) => p.id === f.id))
  return (
    <div className="space-y-1.5">
      {people.length > 0 && (
        <ul className="flex flex-wrap gap-1.5">
          {people.map((p) => (
            <li key={p.id} className="inline-flex items-center gap-1 rounded-full bg-[var(--muted)] py-0.5 pl-0.5 pr-1 text-xs font-semibold">
              <Avatar p={p} size={20} />{p.name}
              <button type="button" aria-label={`Untag ${p.name}`} onClick={() => onChange(people.filter((x) => x.id !== p.id))} className="rounded-full p-0.5 hover:bg-[var(--background)]"><X className="h-3 w-3" /></button>
            </li>
          ))}
        </ul>
      )}
      <div className="relative">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tag your crew (type a name)" aria-label="Tag people" className={input} />
        {results.length > 0 && (
          <ul className="absolute left-0 right-0 top-full z-20 mt-1 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-xl">
            {results.map((p) => (
              <li key={p.id}>
                <button type="button" onClick={() => { onChange([...people, p]); setQ(''); setFound([]) }} className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-[var(--muted)]">
                  <Avatar p={p} size={24} /> <span className="font-semibold">{p.name}</span>{p.handle && <span className="text-xs text-[var(--muted-foreground)]">@{p.handle}</span>}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export function PostComposer({ initial, sealed, onSaved, onCancel }: {
  initial?: WorkPost
  /** The post carries seals that a change of key details would remove */
  sealed?: boolean
  onSaved: (post: WorkPost & { vouches: unknown[] }) => void
  onCancel?: () => void
}) {
  const [photos, setPhotos] = useState<CareerPhoto[]>(initial?.photos ?? [])
  const [story, setStory] = useState(initial?.story ?? '')
  const [tags, setTags] = useState<string[]>(initial?.trades ?? [])
  const [people, setPeople] = useState<Person[]>(initial?.people ?? [])
  const [place, setPlace] = useState(initial?.place ?? '')
  const [visibility, setVisibility] = useState<Visibility>((initial?.visibility as Visibility) ?? 'PUBLIC')
  const [pinned, setPinned] = useState(initial?.pinned ?? false)
  const [more, setMore] = useState(!!(initial?.title || initial?.role || initial?.startedOn || initial?.materials))
  const [title, setTitle] = useState(initial?.title ?? '')
  const [role, setRole] = useState(initial?.role ?? '')
  const [startedOn, setStartedOn] = useState(initial?.startedOn?.slice(0, 7) ?? '')
  const [endedOn, setEndedOn] = useState(initial?.endedOn?.slice(0, 7) ?? '')
  const [materials, setMaterials] = useState(initial?.materials ?? '')
  const [queue, setQueue] = useState<File[]>([])
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const [expanded, setExpanded] = useState(!!initial)

  const toggleTag = (t: string) => setTags((x) => (x.includes(t) ? x.filter((y) => y !== t) : [...x, t]))
  const reset = () => {
    setPhotos([]); setStory(''); setTags([]); setPeople([]); setPlace(''); setVisibility('PUBLIC'); setPinned(false)
    setTitle(''); setRole(''); setStartedOn(''); setEndedOn(''); setMaterials(''); setMore(false); setExpanded(false)
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true); setError(null)
    try {
      const res = await fetch(initial ? `/api/career/posts/${initial.id}` : '/api/career/posts', {
        method: initial ? 'PATCH' : 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          photos, story, trades: tags, people: people.map((p) => p.id), place, visibility, pinned,
          title, role, materials, startedOn: startedOn || null, endedOn: endedOn || null,
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

  const addPhotos = () => { setExpanded(true); fileRef.current?.click() }

  return (
    <form onSubmit={submit} className="space-y-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3 text-[var(--foreground)] sm:p-4">
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
          <button type="button" onClick={addPhotos} className={`flex items-center justify-center gap-2 rounded-lg border-2 border-dashed border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--primary)] ${photos.length ? 'h-16 w-16 sm:h-20 sm:w-20' : 'h-20 w-full text-sm font-semibold'}`} aria-label="Add photos">
            <ImagePlus className="h-5 w-5" aria-hidden />{!photos.length && 'Add photos of work you’re proud of'}
          </button>
        )}
        <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" multiple hidden
          onChange={(e) => { setQueue(Array.from(e.target.files ?? []).slice(0, MAX_PHOTOS - photos.length)); e.target.value = '' }} />
      </div>

      <textarea value={story} onFocus={() => setExpanded(true)} onChange={(e) => setStory(e.target.value)} maxLength={4000} rows={expanded ? 3 : 1}
        placeholder="Write a caption… Clean lines on the Wilson job #mowing" aria-label="Caption" className={input} />

      {expanded && (
        <>
          <div>
            <p className="mb-1 text-xs font-semibold">Type of work</p>
            <div className="flex flex-wrap gap-1">
              {[...new Set([...tags, ...SUGGESTED])].map((t) => (
                <button key={t} type="button" aria-pressed={tags.includes(t)} onClick={() => toggleTag(t)}
                  className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${tags.includes(t) ? 'border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]' : 'border-[var(--border)]'}`}>#{t}</button>
              ))}
            </div>
            <p className="mt-1 text-[11px] text-[var(--muted-foreground)]">Or write your own #tags in the caption.</p>
          </div>

          <TagPeople people={people} onChange={setPeople} />

          <input value={place} onChange={(e) => setPlace(e.target.value)} maxLength={80} placeholder="City or region (never a street address)" aria-label="City or region" className={input} />

          <button type="button" onClick={() => setMore((v) => !v)} aria-expanded={more} className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary)]">
            <ChevronDown className={`h-4 w-4 transition-transform ${more ? 'rotate-180' : ''}`} aria-hidden /> {more ? 'Fewer details' : 'More details (title, your role, dates, materials)'}
          </button>
          {more && (
            <div className="grid gap-2 sm:grid-cols-2">
              <label className="text-xs font-semibold sm:col-span-2">Title<input value={title} onChange={(e) => setTitle(e.target.value)} maxLength={120} placeholder="Stone retaining wall" className={`${input} mt-1`} /></label>
              <label className="text-xs font-semibold sm:col-span-2">Your role<input value={role} onChange={(e) => setRole(e.target.value)} maxLength={80} placeholder="Crew lead" className={`${input} mt-1`} /></label>
              <label className="text-xs font-semibold">Started<input type="month" value={startedOn} onChange={(e) => setStartedOn(e.target.value)} className={`${input} mt-1`} /></label>
              <label className="text-xs font-semibold">Finished<input type="month" value={endedOn} onChange={(e) => setEndedOn(e.target.value)} className={`${input} mt-1`} /></label>
              <label className="text-xs font-semibold sm:col-span-2">Materials<input value={materials} onChange={(e) => setMaterials(e.target.value)} maxLength={1000} placeholder="Bluestone, polymeric sand" className={`${input} mt-1`} /></label>
            </div>
          )}

          {sealed && <p className="rounded-lg bg-amber-500/10 p-2 text-xs">This post is vouched. Changing the photos, title, role, dates or city removes the seal. The caption, tags and crew are safe to change.</p>}
          {error && <p role="alert" className="text-xs text-red-600">{error}</p>}

          <div className="flex flex-wrap items-center gap-2">
            <select value={visibility} onChange={(e) => setVisibility(e.target.value as Visibility)} aria-label="Who can see this" className="min-h-10 rounded-full border border-[var(--border)] bg-[var(--background)] px-3 text-xs font-semibold">
              {VIS.map((v) => <option key={v.id} value={v.id}>{v.label}</option>)}
            </select>
            <label className="inline-flex items-center gap-1.5 text-xs font-semibold"><input type="checkbox" checked={pinned} onChange={(e) => setPinned(e.target.checked)} className="h-4 w-4" /> Pin to top</label>
            <div className="ml-auto flex gap-2">
              {onCancel && <button type="button" onClick={onCancel} className="min-h-10 rounded-full px-4 text-sm font-semibold hover:bg-[var(--muted)]">Cancel</button>}
              <button type="submit" disabled={busy || (!story.trim() && !title.trim() && !photos.length)} className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[var(--primary)] px-5 text-sm font-bold text-[var(--primary-foreground)] disabled:opacity-50">
                {busy && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />} {initial ? 'Save' : 'Share'}
              </button>
            </div>
          </div>
        </>
      )}

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
