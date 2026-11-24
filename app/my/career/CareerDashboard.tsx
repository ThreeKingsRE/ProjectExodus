'use client'

// My Career: your own portfolio of real-world work you're proud of.

import { useEffect, useState } from 'react'
import { BadgeCheck, ChevronDown, Globe, Loader2, Lock, Pencil, Pin, PinOff, Send, Trash2, Users } from 'lucide-react'
import { PostComposer } from '@/components/career/PostComposer'
import { PortfolioGrid } from '@/components/career/PortfolioGrid'
import { ProfileHeader, Tabs, type CareerProfileView } from '@/components/career/ProfileHeader'
import type { Person, WorkPost } from '@/components/career/WorkCard'
import { TradeIconStrip } from '@/components/career/TradeIcons'

interface Vouch { id: string; signerName: string; signerRole: string | null; state: 'requested' | 'awaiting-email' | 'sealed' | 'edited' | 'declined' | 'expired' }
type OwnerPost = WorkPost & { vouches: Vouch[] }
type Profile = CareerProfileView & { person: Person }

const input = 'w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none focus:border-[var(--primary)]'
const btn = 'inline-flex min-h-9 items-center gap-1 rounded-full border border-[var(--border)] px-3 text-xs font-semibold hover:bg-[var(--muted)]'
const STATE: Record<Vouch['state'], string> = {
  requested: 'waiting for them', 'awaiting-email': 'signed, waiting for their email confirmation', sealed: 'vouched',
  edited: 'seal removed after an edit', declined: 'declined', expired: 'link expired',
}
const VIS = { PUBLIC: [Globe, 'Public'], MEMBERS: [Users, 'Members only'], PRIVATE: [Lock, 'Only me'] } as const

function Vouching({ post, onChange }: { post: OwnerPost; onChange: () => void }) {
  const [open, setOpen] = useState(post.vouches.length > 0)
  const [name, setName] = useState(''), [role, setRole] = useState(''), [email, setEmail] = useState('')
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState<{ url: string; emailed: boolean } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const ask = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true); setError(null)
    try {
      const res = await fetch(`/api/career/posts/${post.id}/vouches`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ signerName: name, signerRole: role, signerEmail: email }) })
      const j = await res.json()
      if (!j.success) throw new Error(j.error)
      setResult(j.data); setName(''); setRole(''); onChange()
    } catch (err) { setError(err instanceof Error && err.message ? err.message : 'Couldn’t create the request.') }
    setBusy(false)
  }
  const remove = async (id: string) => { await fetch(`/api/career/posts/${post.id}/vouches/${id}`, { method: 'DELETE' }); onChange() }
  return (
    <div className="rounded-xl bg-[var(--muted)] p-2.5 text-xs">
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="flex w-full items-center gap-1.5 font-semibold">
        <BadgeCheck className="h-4 w-4 text-emerald-600" aria-hidden /> Ask your boss or client to vouch <span className="font-normal text-[var(--muted-foreground)]">(optional)</span>
        <ChevronDown className={`ml-auto h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden />
      </button>
      {open && (
        <div className="mt-2 space-y-2">
          <p className="text-[var(--muted-foreground)]">If your supervisor or the client cares too, they can confirm this work. They don’t need an account. A “Vouched by” seal shows once they confirm by email.</p>
          {post.vouches.length > 0 && (
            <ul className="space-y-1">
              {post.vouches.map((v) => (
                <li key={v.id} className="flex items-center gap-2">
                  <span className="min-w-0 flex-1"><strong>{v.signerName}</strong>{v.signerRole ? `, ${v.signerRole}` : ''}: {STATE[v.state]}</span>
                  <button type="button" onClick={() => remove(v.id)} className="shrink-0 underline">Remove</button>
                </li>
              ))}
            </ul>
          )}
          {result ? (
            <div className="space-y-1.5">
              <p className="font-semibold">{result.emailed ? 'Emailed.' : 'Request ready.'} You can also text them this link:</p>
              <p className="break-all rounded bg-[var(--background)] p-2 font-mono text-[11px]">{result.url}</p>
              <div className="flex gap-2">
                <button type="button" className={btn} onClick={() => navigator.clipboard?.writeText(result.url)}>Copy link</button>
                <button type="button" className={btn} onClick={() => setResult(null)}>Done</button>
              </div>
            </div>
          ) : (
            <form onSubmit={ask} className="grid gap-1.5 sm:grid-cols-3">
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Their name" aria-label="Their name" className={input} />
              <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Foreman, homeowner…" aria-label="Their role" className={input} />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email (optional)" aria-label="Their email" className={input} />
              {error && <p role="alert" className="text-red-600 sm:col-span-3">{error}</p>}
              <button type="submit" disabled={busy} className="inline-flex min-h-9 items-center justify-center gap-1 rounded-full bg-[var(--primary)] px-3 font-bold text-[var(--primary-foreground)] disabled:opacity-60 sm:col-span-3 sm:justify-self-start">
                {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden /> : <Send className="h-3.5 w-3.5" aria-hidden />} Create request
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  )
}

function EditProfile({ profile, onSaved, onClose }: { profile: Profile; onSaved: (p: Profile) => void; onClose: () => void }) {
  const [handle, setHandle] = useState(profile.handle), [headline, setHeadline] = useState(profile.headline ?? '')
  const [trades, setTrades] = useState(profile.trades.join(', ')), [area, setArea] = useState(profile.serviceArea ?? '')
  const [error, setError] = useState<string | null>(null)
  const save = async (e: React.FormEvent) => {
    e.preventDefault(); setError(null)
    const res = await fetch('/api/career/profile', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ handle, headline, serviceArea: area, trades: trades.split(',').map((t) => t.trim().replace(/^#/, '')).filter(Boolean) }) })
    const j = await res.json()
    if (!j.success) { setError(j.error); return }
    onSaved({ ...profile, ...j.data, person: { ...profile.person, handle: j.data.handle } }); onClose()
  }
  return (
    <form onSubmit={save} className="grid gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3 text-xs sm:grid-cols-2 sm:p-4">
      <label className="font-semibold">Your link: projxodus.com/career/…<input value={handle} onChange={(e) => setHandle(e.target.value.toLowerCase())} className={`${input} mt-1`} /></label>
      <label className="font-semibold">Headline<input value={headline} onChange={(e) => setHeadline(e.target.value)} maxLength={120} placeholder="Landscaper · 8 years · Rochester" className={`${input} mt-1`} /></label>
      <label className="font-semibold">Your trades<input value={trades} onChange={(e) => setTrades(e.target.value)} placeholder="landscaping, hardscape" className={`${input} mt-1`} /></label>
      <label className="font-semibold">Area you work in<input value={area} onChange={(e) => setArea(e.target.value)} maxLength={80} placeholder="Greater Rochester, NY" className={`${input} mt-1`} /></label>
      {error && <p role="alert" className="text-red-600 sm:col-span-2">{error}</p>}
      <div className="flex gap-2 sm:col-span-2">
        <button type="submit" className="min-h-9 rounded-full bg-[var(--primary)] px-4 font-bold text-[var(--primary-foreground)]">Save</button>
        <button type="button" onClick={onClose} className="min-h-9 rounded-full px-3 font-semibold">Cancel</button>
      </div>
    </form>
  )
}

export default function CareerDashboard() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [posts, setPosts] = useState<OwnerPost[] | null>(null)
  const [tagged, setTagged] = useState<WorkPost[]>([])
  const [tab, setTab] = useState<'work' | 'tagged'>('work')
  const [editing, setEditing] = useState<OwnerPost | null>(null)
  const [editProfile, setEditProfile] = useState(false)
  const [note, setNote] = useState<string | null>(null)

  const loadPosts = () => fetch('/api/career/posts').then((r) => r.json()).then((j) => { if (j.success) setPosts(j.data) })
  useEffect(() => {
    fetch('/api/career/profile').then((r) => r.json()).then((j) => { if (j.success) setProfile(j.data) })
    fetch('/api/career/tagged').then((r) => r.json()).then((j) => { if (j.success) setTagged(j.data) })
    loadPosts()
  }, [])

  const pin = async (p: OwnerPost) => {
    setNote(null)
    const j = await (await fetch(`/api/career/posts/${p.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ pinned: !p.pinned }) })).json()
    if (!j.success) setNote(j.error); else loadPosts()
  }
  const remove = async (p: OwnerPost, close: () => void) => {
    if (!confirm('Delete this post?')) return
    await fetch(`/api/career/posts/${p.id}`, { method: 'DELETE' })
    close(); loadPosts()
  }
  const untag = async (p: WorkPost, close: () => void) => {
    await fetch(`/api/career/tagged/${p.id}`, { method: 'DELETE' })
    close(); setTagged((t) => t.filter((x) => x.id !== p.id))
  }

  const counts = { posts: posts?.length ?? 0, tagged: tagged.length, vouched: posts?.filter((p) => p.seals.length > 0).length ?? 0 }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <TradeIconStrip size={22} gap={18} speed={48} className="border-b border-[var(--border)] py-2.5 text-[var(--primary)] opacity-60 sm:py-3" />
      <div className="mx-auto max-w-3xl space-y-4 px-3 py-4 sm:px-6 sm:py-8">
        {profile
          ? <ProfileHeader person={profile.person} profile={profile} counts={counts}
              actions={<button type="button" onClick={() => setEditProfile((v) => !v)} className={btn}><Pencil className="h-3.5 w-3.5" aria-hidden /> Edit profile</button>} />
          : <div className="h-32 animate-pulse rounded-2xl bg-[var(--muted)]" />}
        {editProfile && profile && <EditProfile profile={profile} onSaved={setProfile} onClose={() => setEditProfile(false)} />}

        {editing
          ? <PostComposer key={editing.id} initial={editing} sealed={editing.seals.length > 0}
              onSaved={() => { setEditing(null); loadPosts() }} onCancel={() => setEditing(null)} />
          : <PostComposer onSaved={() => loadPosts()} />}
        {note && <p role="alert" className="text-xs text-red-600">{note}</p>}

        <Tabs tab={tab} counts={counts} onSelect={setTab} />
        {tab === 'work' ? (
          posts === null
            ? <div className="flex justify-center py-10"><Loader2 className="h-6 w-6 animate-spin text-[var(--primary)]" aria-label="Loading" /></div>
            : <PortfolioGrid posts={posts}
                empty={<p className="py-12 text-center text-sm text-[var(--muted-foreground)]">Clean mower lines, a straight brick course, a smooth pour… post the first thing you’re proud of.</p>}
                renderFooter={(p, close) => {
                  const [Icon, label] = VIS[p.visibility as keyof typeof VIS] ?? VIS.PUBLIC
                  return (
                    <div className="space-y-2 border-t border-[var(--border)] pt-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 text-xs text-[var(--muted-foreground)]"><Icon className="h-3.5 w-3.5" aria-hidden />{label}</span>
                        <div className="ml-auto flex flex-wrap gap-1.5">
                          <button type="button" onClick={() => { pin(p); close() }} className={btn}>{p.pinned ? <PinOff className="h-3.5 w-3.5" aria-hidden /> : <Pin className="h-3.5 w-3.5" aria-hidden />}{p.pinned ? 'Unpin' : 'Pin'}</button>
                          <button type="button" onClick={() => { setEditing(p); close(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className={btn}><Pencil className="h-3.5 w-3.5" aria-hidden /> Edit</button>
                          <button type="button" onClick={() => remove(p, close)} aria-label="Delete post" className={btn}><Trash2 className="h-3.5 w-3.5" aria-hidden /></button>
                        </div>
                      </div>
                      <Vouching post={p} onChange={loadPosts} />
                    </div>
                  )
                }} />
        ) : (
          <PortfolioGrid posts={tagged} showAuthor
            empty={<p className="py-12 text-center text-sm text-[var(--muted-foreground)]">When a crewmate tags you in their work, it shows here and on your portfolio.</p>}
            renderFooter={(p, close) => (
              <div className="border-t border-[var(--border)] pt-2 text-right">
                <button type="button" onClick={() => untag(p, close)} className={btn}>Remove me from this post</button>
              </div>
            )} />
        )}
      </div>
    </div>
  )
}
