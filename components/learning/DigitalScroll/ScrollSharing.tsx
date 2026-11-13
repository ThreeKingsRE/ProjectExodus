'use client'

// ============================================
// DIGITAL SCROLL SHARING
// Eye toggle for note privacy, one-time age-group prompt, and the panel
// showing notes shared by learners in the same module, level and age group.
// ============================================

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, Users } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import FollowConnectButtons from '@/components/network/FollowConnectButtons'
import type { LearningLevel } from '@/types/learning'
import { LEARNING_LEVELS } from '@/types/learning'
import type { AgeBand, NoteVisibility } from './useScrollNotes'

// ---------- Eye toggle

export function NoteVisibilityToggle({
  visibility,
  onToggle,
  className,
}: {
  visibility: NoteVisibility
  onToggle: () => void
  className?: string
}) {
  const shared = visibility === 'PEERS'
  const label = shared
    ? 'Shared with learners in this module at your level and age group. Click to make private.'
    : 'Private: only you can see this. Click to share with learners in this module.'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      aria-pressed={shared}
      title={label}
      className={cn(
        'shrink-0 p-1 rounded-full transition-colors',
        shared
          ? 'text-[var(--primary)] bg-[var(--primary)]/10'
          : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]',
        className
      )}
    >
      {shared ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
    </button>
  )
}

// ---------- Age group prompt (asked once, before sharing or seeing peers)

export function AgeBandPrompt({
  onChoose,
  onClose,
  error,
}: {
  onChoose: (band: AgeBand) => void
  onClose: () => void
  error?: string | null
}) {
  const [underThirteen, setUnderThirteen] = useState(false)
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Choose your age group"
      onKeyDown={(e) => { if (e.key === 'Escape') { e.stopPropagation(); onClose() } }}
    >
      <div className="w-full max-w-sm rounded-2xl bg-[var(--card)] p-5 shadow-2xl" style={{ maxWidth: 384 }}>
        {underThirteen ? (
          <>
            <h3 className="text-base font-bold text-[var(--foreground)] mb-2">A kids&apos; site is coming soon</h3>
            <p className="text-sm text-[var(--muted-foreground)] mb-4">
              Project Exodus is for learners 13 and older. We&apos;re building a separate, safer site just for
              younger learners. Until then, you can keep reading and taking notes. Your notes stay private on
              this device.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-[var(--primary-foreground)]"
            >
              Keep reading
            </button>
          </>
        ) : (
          <>
            <h3 className="text-base font-bold text-[var(--foreground)] mb-1">Which age group are you in?</h3>
            <p className="text-xs text-[var(--muted-foreground)] mb-4">
              You&apos;ll only see and share notes with learners in your own age group. You can set this once.
            </p>
            <div className="grid gap-2">
              <button
                type="button"
                onClick={() => onChoose('TEEN')}
                className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-medium hover:bg-[var(--muted)]"
              >
                13 to 17
              </button>
              <button
                type="button"
                onClick={() => onChoose('ADULT')}
                className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-medium hover:bg-[var(--muted)]"
              >
                18 or older
              </button>
              <button
                type="button"
                onClick={() => setUnderThirteen(true)}
                className="rounded-lg px-4 py-2 text-xs text-[var(--muted-foreground)] hover:underline"
              >
                I&apos;m under 13
              </button>
            </div>
            {error && <p className="mt-3 text-xs text-red-600">{error}</p>}
            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full text-xs text-[var(--muted-foreground)] hover:underline"
            >
              Not now
            </button>
          </>
        )}
      </div>
    </div>
  )
}

// ---------- Learners in this chapter

interface PeerNote {
  id: string
  noteKey: string
  content: string
  updatedAt: string
  user: { id: string; name: string | null; image: string | null }
}

type PeersState =
  | { status: 'loading' }
  | { status: 'ready'; notes: PeerNote[] }
  | { status: 'blocked'; code: 'SIGN_IN' | 'AGE_BAND' | 'NOT_ENROLLED' }
  | { status: 'error' }

export function PeersPanel({
  topicId,
  moduleKey,
  level,
  chapterTitle,
  onNeedAgeBand,
  refreshKey = 0,
}: {
  topicId: string
  moduleKey: string | null
  level: LearningLevel
  chapterTitle: string
  onNeedAgeBand: () => void
  /** Change to reload (e.g. after the age group is set) */
  refreshKey?: number
}) {
  const [state, setState] = useState<PeersState>({ status: 'loading' })

  useEffect(() => {
    let cancelled = false
    setState({ status: 'loading' })
    const params = new URLSearchParams({ topic: topicId, level })
    if (moduleKey) params.set('module', moduleKey)
    fetch(`/api/learn/scroll-notes/peers?${params}`)
      .then(async (res) => {
        const json = await res.json().catch(() => null)
        if (cancelled) return
        if (json?.success) setState({ status: 'ready', notes: json.data })
        else if (json?.code) setState({ status: 'blocked', code: json.code })
        else setState({ status: 'error' })
      })
      .catch(() => { if (!cancelled) setState({ status: 'error' }) })
    return () => { cancelled = true }
  }, [topicId, moduleKey, level, refreshKey])

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        <p className="mb-3 text-[11px] text-[var(--muted-foreground)]">
          Notes shared by learners studying <span className="font-semibold">{chapterTitle}</span> at the{' '}
          {LEARNING_LEVELS[level]?.shortLabel ?? level} level in your age group. Share your own with the{' '}
          <Eye className="inline w-3 h-3" /> icon on any note.
        </p>

        {state.status === 'loading' && <p className="text-sm text-[var(--muted-foreground)]">Loading…</p>}

        {state.status === 'error' && (
          <p className="text-sm text-[var(--muted-foreground)]">Couldn&apos;t load shared notes. Try again later.</p>
        )}

        {state.status === 'blocked' && (
          <div className="py-6 text-center">
            <Users className="mx-auto mb-3 h-8 w-8 text-[var(--muted-foreground)]" />
            {state.code === 'SIGN_IN' && (
              <p className="text-sm text-[var(--muted-foreground)]">
                <Link href="/auth/signin" className="font-medium text-[var(--primary)] underline">Sign in</Link> to
                see notes from other learners and share your own.
              </p>
            )}
            {state.code === 'AGE_BAND' && (
              <>
                <p className="mb-3 text-sm text-[var(--muted-foreground)]">
                  Choose your age group to connect with learners like you.
                </p>
                <button
                  type="button"
                  onClick={onNeedAgeBand}
                  className="rounded-lg bg-[var(--primary)] px-4 py-2 text-xs font-medium text-[var(--primary-foreground)]"
                >
                  Choose age group
                </button>
              </>
            )}
            {state.code === 'NOT_ENROLLED' && (
              <p className="text-sm text-[var(--muted-foreground)]">
                Start this chapter&apos;s lesson to join its learners.
              </p>
            )}
          </div>
        )}

        {state.status === 'ready' && state.notes.length === 0 && (
          <p className="py-6 text-center text-sm text-[var(--muted-foreground)]">
            No one has shared notes here yet. Be the first: tap the eye on your notes.
          </p>
        )}

        {state.status === 'ready' && state.notes.length > 0 && (
          <ul className="space-y-3">
            {state.notes.map((note) => (
              <li key={note.id} className="rounded-lg border border-[var(--border)] p-3">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-2">
                    {note.user.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={note.user.image} alt="" className="h-6 w-6 rounded-full object-cover" />
                    ) : (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--muted)] text-[10px] font-bold">
                        {(note.user.name ?? '?').slice(0, 1).toUpperCase()}
                      </div>
                    )}
                    <span className="truncate text-xs font-semibold">{note.user.name ?? 'Learner'}</span>
                  </div>
                  <FollowConnectButtons userId={note.user.id} variant="compact" />
                </div>
                <p className="whitespace-pre-wrap text-xs leading-relaxed text-[var(--foreground)]">{note.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="border-t border-[var(--border)] p-3 text-center">
        <Link href="/community/forum" target="_blank" className="text-xs font-medium text-[var(--primary)] hover:underline">
          Open the Community Forum
        </Link>
      </div>
    </div>
  )
}
