'use client'

// One place's meetings: what's coming up, and what happened (with the minutes,
// agendas and recordings). Members can follow it, add a meeting, or connect the
// official calendar so it keeps itself current.

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Check, MapPin, Plus } from 'lucide-react'
import type { MeetingView, PlaceBrief } from '@/lib/meetings/server'
import { MeetingRow } from './MeetingRow'
import { AddMeeting, ConnectSource } from './PlaceTools'

interface Source { id: string; kind: string; host: string; lastFetchedAt: string | null; error: string | null }

function ago(iso: string | null) {
  if (!iso) return 'not yet'
  const m = (Date.now() - new Date(iso).getTime()) / 60000
  return m < 2 ? 'just now' : m < 60 ? `${Math.floor(m)} min ago` : m < 1440 ? `${Math.floor(m / 60)} h ago` : `${Math.floor(m / 1440)} d ago`
}

export default function PlaceView({ place, upcoming, past, sources, signedIn, following: initialFollowing, memberFed, children }: {
  place: PlaceBrief & { tz: string }; upcoming: MeetingView[]; past: MeetingView[]; sources: Source[]; signedIn: boolean; following: boolean; memberFed: string | null; children: PlaceBrief[]
}) {
  const router = useRouter()
  const [tab, setTab] = useState<'upcoming' | 'past'>(upcoming.length || !past.length ? 'upcoming' : 'past')
  const [following, setFollowing] = useState(initialFollowing)
  const [note, setNote] = useState<string | null>(null)
  const list = tab === 'upcoming' ? upcoming : past
  const refresh = () => router.refresh()

  const toggleFollow = async () => {
    if (!signedIn) { setNote('Sign in to add this place to your calendar.'); return }
    const res = await fetch('/api/meetings/follow', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug: place.slug, follow: !following }) })
    const j = await res.json(); if (j.success) setFollowing(j.following); else setNote(j.error)
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto space-y-4 px-3 py-4 sm:px-6 sm:py-8" style={{ maxWidth: '48rem' }}>
        <Link href="/meetings" className="text-xs font-semibold text-[var(--primary)]">← My calendar</Link>
        <header>
          <h1 style={{ fontSize: 'clamp(1.4rem, 5.5vw, 2.1rem)', lineHeight: 1.15 }} className="flex items-center gap-2 font-black"><MapPin className="h-6 w-6 shrink-0 text-[var(--primary)]" aria-hidden />{place.label}</h1>
          <p className="mt-0.5 text-sm text-[var(--muted-foreground)]">{place.subtitle}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" onClick={toggleFollow} aria-pressed={following} style={following ? undefined : { color: 'var(--primary-foreground)' }}
              className={`no-min-size inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-sm font-bold ${following ? 'bg-[var(--muted)] text-[var(--foreground)]' : 'bg-[var(--primary)]'}`}>
              {following ? <><Check className="h-4 w-4" aria-hidden />On my calendar</> : <><Plus className="h-4 w-4" aria-hidden />Add to my calendar</>}
            </button>
          </div>
          {note && <p role="status" className="mt-2 text-xs">{note} {!signedIn && <Link href={`/auth/signin?callbackUrl=/meetings/${place.slug}`} className="font-semibold text-[var(--primary)] underline">Sign in</Link>}</p>}
        </header>

        <div role="tablist" className="flex rounded-full border border-[var(--border)] bg-[var(--card)] p-1">
          {([['upcoming', `Upcoming · ${upcoming.length}`], ['past', `Past · ${past.length}`]] as const).map(([id, label]) => (
            <button key={id} type="button" role="tab" aria-selected={tab === id} onClick={() => setTab(id)}
              className={`no-min-size h-9 flex-1 rounded-full text-[13px] font-bold ${tab === id ? 'bg-[var(--primary)] text-[var(--primary-foreground)]' : 'text-[var(--muted-foreground)]'}`}>{label}</button>
          ))}
        </div>

        {sources.length === 0 && place.kind !== 'STATE' && place.kind !== 'FEDERAL' && (
          <div className="rounded-2xl border-2 border-[var(--primary)]/50 bg-[var(--primary)]/10 p-3 text-sm">
            <p className="font-bold">No calendar is connected for {place.label} yet. You can fix that.</p>
            <p className="mt-0.5 text-[var(--muted-foreground)]">{memberFed ? `${memberFed}, so its meetings come from members like you. ` : ''}Add the posted schedule (even once, like “2nd Wednesday at 6 PM”), or paste the town’s calendar link if it has one. It takes a minute and helps everyone here.</p>
          </div>
        )}

        {list.length > 0
          ? <ul className="space-y-2">{list.map((m) => <MeetingRow key={m.id} m={m} signedIn={signedIn} />)}</ul>
          : (
            <div className="rounded-2xl border border-dashed border-[var(--border)] p-6 text-center">
              <p className="font-semibold">{tab === 'upcoming' ? 'No upcoming meetings listed yet.' : 'No past meetings on record yet.'}</p>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">Know where {place.label} posts its meetings? Connect its calendar below, or add a meeting yourself. It helps everyone here.</p>
            </div>
          )}

        {signedIn
          ? <div className="space-y-2"><AddMeeting slug={place.slug} tz={place.tz} onAdded={refresh} /><ConnectSource slug={place.slug} onConnected={refresh} /></div>
          : <p className="text-xs text-[var(--muted-foreground)]"><Link href={`/auth/signin?callbackUrl=/meetings/${place.slug}`} className="font-semibold text-[var(--primary)] underline">Sign in</Link> to add meetings, connect the official calendar or leave notes.</p>}

        {sources.length > 0 && (
          <section aria-label="Sources" className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3 text-xs">
            <p className="font-bold">Official calendars</p>
            <ul className="mt-1.5 space-y-1">
              {sources.map((s) => <li key={s.id} className="flex flex-wrap gap-x-2 text-[var(--muted-foreground)]"><span className="font-semibold text-[var(--foreground)]">{s.host}</span> updated {ago(s.lastFetchedAt)}{s.error && <span className="text-red-500">· {s.error}</span>}</li>)}
            </ul>
          </section>
        )}

        {children.length > 0 && (
          <section aria-label="Places inside" className="space-y-2">
            <h2 style={{ fontSize: '1rem', lineHeight: 1.2 }} className="font-black">{place.kind === 'STATE' ? `Counties in ${place.label}` : 'Cities, towns and townships in this county'}</h2>
            <ul className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
              {children.map((c) => <li key={c.id}><Link href={`/meetings/${c.slug}`} className="no-min-size block truncate rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-[13px] font-semibold hover:border-[var(--primary)]">{c.label}</Link></li>)}
            </ul>
          </section>
        )}
      </div>
    </div>
  )
}
