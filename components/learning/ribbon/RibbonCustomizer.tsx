'use client'

// A small overlay for designing the reader's ribbon, with a live preview.

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import {
  DEFAULT_RIBBON, RIBBON_COLORS, RIBBON_DECALS, RIBBON_PATTERNS, RIBBON_TAILS, TAIL_CLIP,
  type RibbonStyle,
} from '@/lib/learning/ribbon'
import { DecalIcon, RibbonArt } from './ReadingRibbon'
import { saveRibbonStyle } from './useReadingRibbon'

const PATTERN_LABEL: Record<RibbonStyle['pattern'], string> = { none: 'Plain', stripes: 'Stripes', dots: 'Dots', chevrons: 'Chevrons', gradient: 'Gradient' }
const DECAL_LABEL: Record<RibbonStyle['decal'], string> = { none: 'None', leaf: 'Leaf', fish: 'Fish', sun: 'Sun', drop: 'Drop', star: 'Star' }
const TAIL_LABEL: Record<RibbonStyle['tail'], string> = { swallowtail: 'Swallowtail', straight: 'Straight', pointed: 'Pointed' }

function Chip({ on, onClick, children, label }: { on: boolean; onClick: () => void; children: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={on}
      aria-label={label}
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-colors ${on ? 'border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] text-[var(--foreground)]' : 'border-[var(--border)] text-[var(--muted-foreground)] hover:bg-[var(--muted)]'}`}
    >
      {children}
    </button>
  )
}

export function RibbonCustomizer({ initial, onClose }: { initial: RibbonStyle; onClose: () => void }) {
  const [draft, setDraft] = useState<RibbonStyle>(initial)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const update = (patch: Partial<RibbonStyle>) => setDraft((d) => ({ ...d, ...patch }))

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { e.stopPropagation(); onClose() } }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [onClose])

  const save = async () => {
    setSaving(true); setError('')
    const ok = await saveRibbonStyle(draft)
    setSaving(false)
    if (ok) onClose()
    else setError('Couldn’t save your ribbon. Please try again.')
  }

  return (
    <div className="fixed inset-0 z-[150] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Customize your ribbon"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '28rem' }}
        className="max-h-[92dvh] w-full overflow-y-auto overscroll-contain rounded-t-2xl border border-[var(--border)] bg-[var(--card)] p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-[var(--foreground)] shadow-2xl sm:max-w-md sm:rounded-2xl"
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="font-serif text-lg font-semibold">Your ribbon</p>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-lg p-1.5 text-[var(--muted-foreground)] hover:bg-[var(--muted)]"><X className="h-5 w-5" /></button>
        </div>

        <div className="flex gap-5">
          {/* Preview: the ribbon hanging from a book's edge */}
          <div className="relative h-44 w-16 shrink-0">
            <div className="absolute inset-x-0 top-0 h-3 rounded-sm bg-[#efe6d2] shadow-inner" />
            <div className="absolute left-1/2 top-1 h-[10.5rem] w-7 -translate-x-1/2 drop-shadow-md">
              <RibbonArt style={draft} />
            </div>
          </div>

          <div className="min-w-0 flex-1 space-y-4">
            <fieldset>
              <legend className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">Colour</legend>
              <div role="radiogroup" aria-label="Colour" className="flex flex-wrap gap-2">
                {RIBBON_COLORS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    role="radio"
                    aria-checked={draft.color === c.hex}
                    aria-label={c.label}
                    title={c.label}
                    onClick={() => update({ color: c.hex })}
                    className={`no-min-size h-7 w-7 rounded-full border-2 transition-transform ${draft.color === c.hex ? 'scale-110 border-[var(--foreground)]' : 'border-white/60'}`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
                <label className="relative flex h-7 w-7 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-[var(--border)]" title="Any colour">
                  <span className="sr-only">Any colour</span>
                  <span aria-hidden className="text-xs font-bold text-[var(--muted-foreground)]">+</span>
                  <input type="color" value={draft.color} onChange={(e) => update({ color: e.target.value })} className="absolute inset-0 cursor-pointer opacity-0" />
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">Pattern</legend>
              <div role="radiogroup" aria-label="Pattern" className="flex flex-wrap gap-1.5">
                {RIBBON_PATTERNS.map((p) => <Chip key={p} label={PATTERN_LABEL[p]} on={draft.pattern === p} onClick={() => update({ pattern: p })}>{PATTERN_LABEL[p]}</Chip>)}
              </div>
            </fieldset>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          <fieldset>
            <legend className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">Charm</legend>
            <div role="radiogroup" aria-label="Charm" className="flex flex-wrap gap-1.5">
              {RIBBON_DECALS.map((d) => (
                <Chip key={d} label={DECAL_LABEL[d]} on={draft.decal === d} onClick={() => update({ decal: d })}>
                  {d !== 'none' && <DecalIcon decal={d} className="h-4 w-4" />}{DECAL_LABEL[d]}
                </Chip>
              ))}
            </div>
          </fieldset>

          <div className="flex flex-wrap items-end gap-4">
            <label className="block">
              <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">Initials</span>
              <input
                value={draft.initials}
                onChange={(e) => update({ initials: e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 3) })}
                maxLength={3}
                placeholder="ABC"
                aria-label="Initials, up to 3 letters"
                className="w-24 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-base font-semibold uppercase tracking-widest"
              />
            </label>
            <fieldset className="min-w-0">
              <legend className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">Tail</legend>
              <div role="radiogroup" aria-label="Tail" className="flex flex-wrap gap-1.5">
                {RIBBON_TAILS.map((t) => (
                  <Chip key={t} label={TAIL_LABEL[t]} on={draft.tail === t} onClick={() => update({ tail: t })}>
                    <span aria-hidden className="inline-block h-4 w-2.5" style={{ backgroundColor: draft.color, clipPath: TAIL_CLIP[t] }} />{TAIL_LABEL[t]}
                  </Chip>
                ))}
              </div>
            </fieldset>
          </div>
        </div>

        {error && <p role="alert" className="mt-4 text-sm font-semibold text-red-600">{error}</p>}

        <div className="mt-5 flex items-center justify-between gap-2">
          <button type="button" onClick={() => setDraft(DEFAULT_RIBBON)} className="text-sm font-semibold text-[var(--muted-foreground)] underline-offset-4 hover:underline">Reset to classic red</button>
          <div className="flex gap-2">
            <button type="button" onClick={onClose} className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-semibold">Cancel</button>
            <button type="button" onClick={save} disabled={saving} style={{ color: 'var(--primary-foreground)' }} className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-semibold disabled:opacity-60">{saving ? 'Saving…' : 'Save ribbon'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
