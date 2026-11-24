'use client'

// Search every state, county, city, village, town and township.

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Loader2, MapPin, Search } from 'lucide-react'

export interface Place { id: string; slug: string; kind: string; label: string; subtitle: string; state: string | null }

export function PlaceSearch({ onPick, placeholder = 'Search a state, county, city or town', autoFocus = false }: { onPick?: (p: Place) => void; placeholder?: string; autoFocus?: boolean }) {
  const [q, setQ] = useState('')
  const [results, setResults] = useState<Place[] | null>(null)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (q.trim().length < 2) { setResults(null); return }
    setBusy(true)
    const t = setTimeout(() => {
      fetch(`/api/meetings/places?q=${encodeURIComponent(q.trim())}`).then((r) => r.json()).then((j) => setResults(j.success ? j.data : [])).catch(() => setResults([])).finally(() => setBusy(false))
    }, 250)
    return () => clearTimeout(t)
  }, [q])

  return (
    <div className="relative">
      <label className="flex h-12 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 shadow-sm focus-within:border-[var(--primary)]">
        <Search className="h-5 w-5 shrink-0 text-[var(--muted-foreground)]" aria-hidden />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={placeholder} aria-label="Search places" autoFocus={autoFocus} className="min-w-0 flex-1 bg-transparent text-[16px] outline-none placeholder:text-[var(--muted-foreground)]" />
        {busy && <Loader2 className="h-4 w-4 animate-spin text-[var(--muted-foreground)]" aria-label="Searching" />}
      </label>
      {results && (
        <ul className="absolute left-0 right-0 top-full z-30 mt-2 max-h-[60dvh] overflow-y-auto rounded-2xl border border-[var(--border)] bg-[var(--card)] p-1 shadow-xl">
          {results.length === 0 && <li className="p-3 text-sm text-[var(--muted-foreground)]">Nothing found. Try the town name and state, like “brighton ny”.</li>}
          {results.map((p) => (
            <li key={p.id}>
              {onPick
                ? <button type="button" onClick={() => { onPick(p); setQ(''); setResults(null) }} className="no-min-size flex w-full items-center gap-2.5 rounded-xl p-2.5 text-left hover:bg-[var(--muted)]"><Row p={p} /></button>
                : <Link href={`/meetings/${p.slug}`} className="no-min-size flex items-center gap-2.5 rounded-xl p-2.5 hover:bg-[var(--muted)]"><Row p={p} /></Link>}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Row({ p }: { p: Place }) {
  return (
    <>
      <MapPin className="h-4 w-4 shrink-0 text-[var(--primary)]" aria-hidden />
      <span className="min-w-0"><span className="block truncate text-sm font-semibold">{p.label}</span><span className="block truncate text-xs text-[var(--muted-foreground)]">{p.subtitle}</span></span>
    </>
  )
}
