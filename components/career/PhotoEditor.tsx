'use client'

// Before a photo uploads: drag boxes over faces, house numbers or plates to pixelate
// them, and tag it Before or After. The saved copy is re-drawn, so GPS and all other
// hidden photo data are removed.

import { useEffect, useMemo, useRef, useState } from 'react'
import { Loader2, Undo2, X } from 'lucide-react'
import { cleanPhoto, loadImage, readTakenAt, uploadCareerPhoto, type BlurRect } from '@/lib/career/photo'
import type { CareerPhoto } from '@/lib/career/career'

export function PhotoEditor({ file, onDone, onCancel }: { file: File; onDone: (p: CareerPhoto) => void; onCancel: () => void }) {
  const [img, setImg] = useState<HTMLImageElement | null>(null)
  const [rects, setRects] = useState<BlurRect[]>([])
  const [draft, setDraft] = useState<BlurRect | null>(null)
  const [label, setLabel] = useState<'before' | 'after' | null>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const box = useRef<HTMLDivElement>(null)
  const start = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    let live = true
    loadImage(file).then((i) => { if (live) setImg(i) }).catch(() => setError('This photo couldn’t be opened. Try a JPEG or PNG.'))
    return () => { live = false }
  }, [file])

  // Live preview with the mosaic applied (small, so it's quick)
  const preview = useMemo(() => (img ? cleanPhoto(img, rects) : null), [img, rects])

  const at = (e: React.PointerEvent) => {
    const r = box.current!.getBoundingClientRect()
    return { x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)), y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)) }
  }
  const down = (e: React.PointerEvent) => { (e.target as HTMLElement).setPointerCapture(e.pointerId); start.current = at(e) }
  const move = (e: React.PointerEvent) => {
    if (!start.current) return
    const p = at(e), s = start.current
    setDraft({ x: Math.min(s.x, p.x), y: Math.min(s.y, p.y), w: Math.abs(p.x - s.x), h: Math.abs(p.y - s.y) })
  }
  const up = () => {
    if (draft && draft.w > 0.02 && draft.h > 0.02) setRects((r) => [...r, draft])
    start.current = null; setDraft(null)
  }

  const save = async () => {
    if (!img) return
    setBusy(true); setError(null)
    try {
      const [takenAt, url] = await Promise.all([readTakenAt(file), uploadCareerPhoto(cleanPhoto(img, rects))])
      onDone({ url, takenAt, label })
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Upload failed')
      setBusy(false)
    }
  }

  return (
    <div role="dialog" aria-modal="true" aria-label="Prepare photo" className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-4">
      <div className="max-h-[100dvh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-[var(--card)] p-3 text-[var(--foreground)] sm:rounded-2xl sm:p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-bold">Prepare photo</p>
          <button type="button" onClick={onCancel} aria-label="Cancel" className="rounded-full p-1.5 hover:bg-[var(--muted)]"><X className="h-4 w-4" /></button>
        </div>
        <p className="mb-2 text-xs text-[var(--muted-foreground)]">Drag a box over faces, house numbers or license plates to blur them. Location data is removed automatically.</p>
        <div
          ref={box}
          onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up}
          className="relative mx-auto touch-none select-none overflow-hidden rounded-lg bg-[var(--muted)]"
          style={{ cursor: 'crosshair' }}
        >
          {preview
            // eslint-disable-next-line @next/next/no-img-element
            ? <img src={preview} alt="Photo being prepared" draggable={false} className="block max-h-[55dvh] w-full object-contain" />
            : <div className="grid h-48 place-items-center">{error ? null : <Loader2 className="h-5 w-5 animate-spin" aria-label="Loading" />}</div>}
          {[...rects, ...(draft ? [draft] : [])].map((r, i) => (
            <div key={i} className="pointer-events-none absolute border-2 border-dashed border-amber-400" style={{ left: `${r.x * 100}%`, top: `${r.y * 100}%`, width: `${r.w * 100}%`, height: `${r.h * 100}%` }} />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-semibold">Tag:</span>
          {([null, 'before', 'after'] as const).map((l) => (
            <button key={l ?? 'none'} type="button" aria-pressed={label === l} onClick={() => setLabel(l)}
              className={`rounded-full border px-3 py-1 font-semibold capitalize ${label === l ? 'border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]' : 'border-[var(--border)]'}`}>
              {l ?? 'None'}
            </button>
          ))}
          {rects.length > 0 && (
            <button type="button" onClick={() => setRects((r) => r.slice(0, -1))} className="ml-auto inline-flex items-center gap-1 rounded-full border border-[var(--border)] px-3 py-1 font-semibold">
              <Undo2 className="h-3.5 w-3.5" aria-hidden /> Undo blur
            </button>
          )}
        </div>
        {error && <p role="alert" className="mt-2 text-xs text-red-600">{error}</p>}
        <div className="mt-3 flex justify-end gap-2">
          <button type="button" onClick={onCancel} className="min-h-10 rounded-full px-4 text-sm font-semibold hover:bg-[var(--muted)]">Cancel</button>
          <button type="button" onClick={save} disabled={!img || busy} className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[var(--primary)] px-5 text-sm font-bold text-[var(--primary-foreground)] disabled:opacity-60">
            {busy && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />} {busy ? 'Uploading…' : 'Use photo'}
          </button>
        </div>
      </div>
    </div>
  )
}
