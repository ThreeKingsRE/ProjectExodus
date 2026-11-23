'use client'

import Link from 'next/link'
import { ArrowLeft, Printer } from 'lucide-react'

export default function PrintBar({ handle, show, hasPinned }: { handle: string; show: 'all' | 'pinned'; hasPinned: boolean }) {
  const opt = (on: boolean) => `rounded-full border px-3 py-1 text-xs font-semibold ${on ? 'border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]' : 'border-[var(--border)] bg-[var(--card)]'}`
  return (
    <div className="no-print mx-auto mb-3 flex max-w-[210mm] flex-wrap items-center gap-2 text-[var(--foreground)]">
      <Link href={`/career/${handle}`} className="inline-flex items-center gap-1 text-xs font-semibold"><ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Back</Link>
      {hasPinned && (
        <span className="flex gap-1">
          <Link href="?show=pinned" className={opt(show === 'pinned')}>Pinned work</Link>
          <Link href="?show=all" className={opt(show === 'all')}>All work</Link>
        </span>
      )}
      <button type="button" onClick={() => window.print()} className="ml-auto inline-flex min-h-10 items-center gap-2 rounded-full bg-[var(--primary)] px-5 text-sm font-bold text-[var(--primary-foreground)]">
        <Printer className="h-4 w-4" aria-hidden /> Print or save as PDF
      </button>
    </div>
  )
}
