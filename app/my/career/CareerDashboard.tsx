'use client'

// My Career: your portfolio of work, with sign-offs from the people who saw it.

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BadgeCheck, Check, Copy, Download, Eye, Globe, Loader2, Lock, Pencil, QrCode, Send, Trash2, Users } from 'lucide-react'
import { PostComposer } from '@/components/career/PostComposer'
import { WorkCard, type WorkPost } from '@/components/career/WorkCard'

interface Vouch { id: string; signerName: string; signerRole: string | null; state: 'requested' | 'awaiting-email' | 'sealed' | 'edited' | 'declined' | 'expired' }
type OwnerPost = WorkPost & { vouches: Vouch[] }
interface Profile { handle: string; headline: string | null; trades: string[]; serviceArea: string | null }

const input = 'w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm outline-none focus:border-[var(--primary)]'
const STATE: Record<Vouch['state'], string> = {
  requested: 'Waiting for them to review',
  'awaiting-email': 'Signed · waiting for them to confirm by email',
  sealed: 'Vouched',
  edited: 'Seal removed after you edited the post',
  declined: 'Declined',
  expired: 'Link expired',
}
const VIS_ICON = { PUBLIC: Globe, MEMBERS: Users, PRIVATE: Lock } as const
const VIS_LABEL = { PUBLIC: 'Public', MEMBERS: 'Members only', PRIVATE: 'Only me' } as const

function CopyButton({ text, label }: { text: string; label: string }) {
  const [done, setDone] = useState(false)
  return (
    <button type="button" onClick={() => { navigator.clipboard?.writeText(text).then(() => { setDone(true); setTimeout(() => setDone(false), 1500) }) }}
      className="inline-flex min-h-9 items-center gap-1 rounded-full border border-[var(--border)] px-3 text-xs font-semibold hover:bg-[var(--muted)]">
      {done ? <Check className="h-3.5 w-3.5" aria-hidden /> : <Copy className="h-3.5 w-3.5" aria-hidden />} {done ? 'Copied' : label}
    </button>
  )
}

function AskVouch({ postId, onAsked }: { postId: string; onAsked: () => void }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(''), [role, setRole] = useState(''), [email, setEmail] = useState('')
  const [busy, setBusy] = useState(false)
  const [result, setResult] = useState<{ url: string; emailed: boolean } | null>(null)
  const [error, setError] = useState<string | null>(null)
  if (!open) {
    return <button type="button" onClick={() => setOpen(true)} className="inline-flex min-h-9 items-center gap-1 rounded-full bg-[var(--primary)] px-3 text-xs font-bold text-[var(--primary-foreground)]"><BadgeCheck className="h-3.5 w-3.5" aria-hidden /> Ask for a vouch</button>
  }
  if (result) {
    return (
      <div className="space-y-2 rounded-xl bg-[var(--muted)] p-3 text-xs">
        <p className="font-semibold">{result.emailed ? `Sent to ${email}.` : 'Request ready.'} You can also text them this link:</p>
        <p className="break-all rounded bg-[var(--background)] p-2 font-mono text-[11px]">{result.url}</p>
        <div className="flex gap-2"><CopyButton text={result.url} label="Copy link" />
          <button type="button" onClick={() => { setOpen(false); setResult(null); setName(''); setRole(''); setEmail('') }} className="min-h-9 rounded-full px-3 font-semibold">Done</button></div>
      </div>
    )
  }
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true); setError(null)
    try {
      const res = await fetch(`/api/career/posts/${postId}/vouches`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ signerName: name, signerRole: role, signerEmail: email }) })
      const j = await res.json()
      if (!j.success) throw new Error(j.error)
      setResult(j.data); onAsked()
    } catch (err) { setError(err instanceof Error && err.message ? err.message : 'Couldn’t create the request.') }
    setBusy(false)
  }
  return (
    <form onSubmit={submit} className="space-y-2 rounded-xl bg-[var(--muted)] p-3 text-xs">
      <p className="text-[var(--muted-foreground)]">Ask a supervisor, employer or client who saw this work. They don’t need an account; they’ll confirm by email.</p>
      <div className="grid gap-2 sm:grid-cols-3">
        <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Their name" aria-label="Their name" className={input} />
        <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role (Site supervisor)" aria-label="Their role" className={input} />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email (optional)" aria-label="Their email" className={input} />
      </div>
      {error && <p role="alert" className="text-red-600">{error}</p>}
      <div className="flex gap-2">
        <button type="submit" disabled={busy} className="inline-flex min-h-9 items-center gap-1 rounded-full bg-[var(--primary)] px-3 font-bold text-[var(--primary-foreground)] disabled:opacity-60">
          {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden /> : <Send className="h-3.5 w-3.5" aria-hidden />} Create request
        </button>
        <button type="button" onClick={() => setOpen(false)} className="min-h-9 rounded-full px-3 font-semibold">Cancel</button>
      </div>
    </form>
  )
}

function ProfileCard({ profile, onSaved }: { profile: Profile; onSaved: (p: Profile) => void }) {
  const [editing, setEditing] = useState(false)
  const [handle, setHandle] = useState(profile.handle), [headline, setHeadline] = useState(profile.headline ?? '')
  const [trades, setTrades] = useState(profile.trades.join(', ')), [area, setArea] = useState(profile.serviceArea ?? '')
  const [error, setError] = useState<string | null>(null)
  const url = `https://www.projxodus.com/career/${profile.handle}`
  const save = async (e: React.FormEvent) => {
    e.preventDefault(); setError(null)
    const res = await fetch('/api/career/profile', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ handle, headline, serviceArea: area, trades: trades.split(',').map((t) => t.trim()).filter(Boolean) }) })
    const j = await res.json()
    if (!j.success) { setError(j.error); return }
    onSaved(j.data); setEditing(false)
  }
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3 sm:p-4">
      <div className="flex gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/api/career/qr/${profile.handle}`} alt="QR code for your portfolio" className="h-20 w-20 shrink-0 self-start rounded-lg bg-white sm:h-24 sm:w-24" />
        <div className="min-w-0 flex-1 space-y-1.5">
          <p className="text-xs font-semibold text-[var(--muted-foreground)]">Your portfolio link</p>
          <p className="break-all text-sm font-bold">projxodus.com/career/{profile.handle}</p>
          {profile.headline && <p className="text-xs">{profile.headline}</p>}
          <div className="flex flex-wrap gap-1.5">
            <CopyButton text={url} label="Copy link" />
            <Link href={`/career/${profile.handle}`} className="inline-flex min-h-9 items-center gap-1 rounded-full border border-[var(--border)] px-3 text-xs font-semibold hover:bg-[var(--muted)]"><Eye className="h-3.5 w-3.5" aria-hidden /> View</Link>
            <a href={`/api/career/qr/${profile.handle}`} download="my-career-qr.svg" className="inline-flex min-h-9 items-center gap-1 rounded-full border border-[var(--border)] px-3 text-xs font-semibold hover:bg-[var(--muted)]"><Download className="h-3.5 w-3.5" aria-hidden /> QR</a>
            <button type="button" onClick={() => setEditing((v) => !v)} className="inline-flex min-h-9 items-center gap-1 rounded-full border border-[var(--border)] px-3 text-xs font-semibold hover:bg-[var(--muted)]"><Pencil className="h-3.5 w-3.5" aria-hidden /> Edit</button>
          </div>
        </div>
      </div>
      {editing && (
        <form onSubmit={save} className="mt-3 grid gap-2 text-xs sm:grid-cols-2">
          <label className="font-semibold">Link name<input value={handle} onChange={(e) => setHandle(e.target.value.toLowerCase())} className={`${input} mt-1`} /></label>
          <label className="font-semibold">Headline<input value={headline} onChange={(e) => setHeadline(e.target.value)} maxLength={120} placeholder="Finish carpenter · 12 years" className={`${input} mt-1`} /></label>
          <label className="font-semibold">Trades<input value={trades} onChange={(e) => setTrades(e.target.value)} placeholder="carpentry, tile" className={`${input} mt-1`} /></label>
          <label className="font-semibold">Area you work in<input value={area} onChange={(e) => setArea(e.target.value)} maxLength={80} placeholder="Greater Rochester, NY" className={`${input} mt-1`} /></label>
          {error && <p role="alert" className="text-red-600 sm:col-span-2">{error}</p>}
          <div className="flex gap-2 sm:col-span-2"><button type="submit" className="min-h-9 rounded-full bg-[var(--primary)] px-4 font-bold text-[var(--primary-foreground)]">Save</button>
            <button type="button" onClick={() => setEditing(false)} className="min-h-9 rounded-full px-3 font-semibold">Cancel</button></div>
        </form>
      )}
    </section>
  )
}

export default function CareerDashboard() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [posts, setPosts] = useState<OwnerPost[] | null>(null)
  const [editing, setEditing] = useState<string | null>(null)

  const loadPosts = () => fetch('/api/career/posts').then((r) => r.json()).then((j) => { if (j.success) setPosts(j.data) })
  useEffect(() => {
    fetch('/api/career/profile').then((r) => r.json()).then((j) => { if (j.success) setProfile(j.data) })
    loadPosts()
  }, [])

  const remove = async (id: string) => {
    if (!confirm('Delete this post and its vouches?')) return
    await fetch(`/api/career/posts/${id}`, { method: 'DELETE' })
    setPosts((p) => p?.filter((x) => x.id !== id) ?? null)
  }
  const cancelVouch = async (postId: string, vouchId: string) => {
    await fetch(`/api/career/posts/${postId}/vouches/${vouchId}`, { method: 'DELETE' })
    loadPosts()
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-2xl space-y-3 px-3 py-4 sm:space-y-4 sm:px-6 sm:py-8">
        <header>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-xs">Project Exodus</p>
          <h1 style={{ fontSize: 'clamp(1.35rem, 4vw, 1.9rem)', lineHeight: 1.2 }} className="mt-1 font-black">My Career</h1>
          <p className="mt-1 text-xs text-[var(--muted-foreground)] sm:text-sm">Show the work you’re proud of, and have the people who saw it vouch for it.</p>
        </header>

        {profile ? <ProfileCard profile={profile} onSaved={setProfile} /> : <div className="h-28 animate-pulse rounded-2xl bg-[var(--muted)]" />}

        <PostComposer onSaved={(p) => setPosts((x) => [p as OwnerPost, ...(x ?? [])])} />

        {posts === null ? (
          <div className="flex justify-center py-10"><Loader2 className="h-6 w-6 animate-spin text-[var(--primary)]" aria-label="Loading" /></div>
        ) : posts.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-[var(--border)] p-6 text-center text-sm text-[var(--muted-foreground)]">Your first post can be one photo and a line. Add details any time.</p>
        ) : (
          <ul className="space-y-3 sm:space-y-4">
            {posts.map((post) => {
              const Icon = VIS_ICON[post.visibility as keyof typeof VIS_ICON] ?? Globe
              if (editing === post.id) {
                return <li key={post.id}><PostComposer initial={post} sealed={post.seals.length > 0}
                  onSaved={(p) => { setPosts((x) => x?.map((y) => (y.id === p.id ? (p as OwnerPost) : y)) ?? null); setEditing(null) }}
                  onCancel={() => setEditing(null)} /></li>
              }
              return (
                <li key={post.id}>
                  <WorkCard post={post} footer={
                    <div className="space-y-2 border-t border-[var(--border)] pt-2">
                      {post.vouches.filter((v) => v.state !== 'sealed').length > 0 && (
                        <ul className="space-y-1 text-xs">
                          {post.vouches.filter((v) => v.state !== 'sealed').map((v) => (
                            <li key={v.id} className="flex items-center gap-2">
                              <span className="min-w-0 flex-1"><strong>{v.signerName}</strong>{v.signerRole ? `, ${v.signerRole}` : ''} · <span className="text-[var(--muted-foreground)]">{STATE[v.state]}</span></span>
                              <button type="button" onClick={() => cancelVouch(post.id, v.id)} className="shrink-0 text-[var(--muted-foreground)] underline">Remove</button>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 text-xs text-[var(--muted-foreground)]"><Icon className="h-3.5 w-3.5" aria-hidden />{VIS_LABEL[post.visibility as keyof typeof VIS_LABEL]}</span>
                        <div className="ml-auto flex flex-wrap gap-1.5">
                          <button type="button" onClick={() => setEditing(post.id)} className="inline-flex min-h-9 items-center gap-1 rounded-full border border-[var(--border)] px-3 text-xs font-semibold hover:bg-[var(--muted)]"><Pencil className="h-3.5 w-3.5" aria-hidden /> Edit</button>
                          <button type="button" onClick={() => remove(post.id)} aria-label="Delete post" className="inline-flex min-h-9 items-center rounded-full border border-[var(--border)] px-2.5 text-xs hover:bg-[var(--muted)]"><Trash2 className="h-3.5 w-3.5" aria-hidden /></button>
                        </div>
                      </div>
                      <AskVouch postId={post.id} onAsked={loadPosts} />
                    </div>
                  } />
                </li>
              )
            })}
          </ul>
        )}
        <p className="flex items-center justify-center gap-1 pt-2 text-center text-[11px] text-[var(--muted-foreground)]"><QrCode className="h-3.5 w-3.5" aria-hidden /> Print your QR on a business card, truck or invoice so clients can see your work.</p>
      </div>
    </div>
  )
}
