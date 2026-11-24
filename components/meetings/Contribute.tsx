'use client'

// The call to help: every connected calendar helps everyone near that place.

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { HeartHandshake } from 'lucide-react'
import { tzFor } from '@/lib/meetings/directory'
import { PlaceSearch, type Place } from './PlaceSearch'
import { AddMeeting, ConnectSource } from './PlaceTools'

export function ContributeCard({ signedIn }: { signedIn: boolean }) {
  const [stats, setStats] = useState<{ places: number; connected: number; upcoming: number } | null>(null)
  const [open, setOpen] = useState(false)
  const [place, setPlace] = useState<Place | null>(null)
  const [done, setDone] = useState(false)
  useEffect(() => { fetch('/api/meetings/stats').then((r) => r.json()).then((j) => { if (j.success) setStats(j.data) }).catch(() => {}) }, [done])

  return (
    <section aria-label="Help build the hub" className="rounded-3xl border-2 border-[var(--primary)]/50 bg-gradient-to-br from-[var(--primary)]/15 to-[var(--primary)]/5 p-4">
      <div className="flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[var(--primary)] text-[var(--primary-foreground)]"><HeartHandshake className="h-6 w-6" aria-hidden /></span>
        <div className="min-w-0">
          <h2 style={{ fontSize: '1.05rem', lineHeight: 1.25 }} className="font-black">Help build this. Add your town.</h2>
          <p className="mt-0.5 text-sm text-[var(--muted-foreground)]">Know where your town, county or school board posts its meetings? Paste its calendar link (any calendar works) or add its schedule. It updates by itself and helps everyone nearby.</p>
          {stats && <p className="mt-1.5 text-xs font-semibold"><span className="text-[var(--primary)]">{stats.connected.toLocaleString()}</span> of {stats.places.toLocaleString()} places connected · {stats.upcoming.toLocaleString()} upcoming meetings</p>}
        </div>
      </div>

      {!open ? (
        <button type="button" onClick={() => setOpen(true)} style={{ color: 'var(--primary-foreground)' }} className="no-min-size mt-3 inline-flex h-11 w-full items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold">Add a calendar or meetings</button>
      ) : !signedIn ? (
        <p className="mt-3 rounded-xl bg-[var(--card)] p-3 text-sm"><Link href="/auth/signin?callbackUrl=/meetings" className="font-bold text-[var(--primary)] underline">Sign in</Link> to add a calendar. It takes a minute.</p>
      ) : (
        <div className="mt-3 space-y-3">
          <PlaceSearch onPick={(p) => { setPlace(p); setDone(false) }} placeholder="Find the town, county or school district" autoFocus />
          {place && (
            <div className="space-y-2 rounded-2xl bg-[var(--card)] p-3">
              <p className="text-sm font-bold">{place.label} <span className="font-normal text-[var(--muted-foreground)]">· {place.subtitle}</span></p>
              <ConnectSource slug={place.slug} onConnected={() => setDone(true)} />
              <AddMeeting slug={place.slug} tz={tzFor(place.state)} onAdded={() => setDone(true)} />
              <Link href={`/meetings/${place.slug}`} className="text-xs font-semibold text-[var(--primary)] underline">Open {place.label}</Link>
            </div>
          )}
          {done && <p role="status" className="rounded-xl bg-emerald-500/15 p-2.5 text-sm font-semibold text-emerald-700 dark:text-emerald-300">Thank you! That helps everyone in {place?.label}.</p>}
        </div>
      )}
    </section>
  )
}
