'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Copy, Download, Share2, X } from 'lucide-react'

export function InitiativeShare({ slug, name, block = false }: { slug: string; name: string; block?: boolean }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')
  const [imageReady, setImageReady] = useState(false)
  const [saving, setSaving] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const url = `https://www.projxodus.com/community/projects/${encodeURIComponent(slug)}`
  const imageUrl = `/api/initiatives/${encodeURIComponent(slug)}/qr`

  useEffect(() => {
    if (open) dialog.current?.showModal()
    else dialog.current?.close()
  }, [open])

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setError('')
    } catch {
      setError('Select and copy the link below.')
    }
  }

  async function downloadQr() {
    setSaving(true)
    setError('')
    try {
      const image = new Image()
      image.src = imageUrl
      await image.decode()
      const canvas = document.createElement('canvas')
      canvas.width = canvas.height = 1200
      const context = canvas.getContext('2d')
      if (!context) throw new Error('Canvas unavailable')
      context.fillStyle = '#ffffff'
      context.fillRect(0, 0, 1200, 1200)
      context.imageSmoothingEnabled = false
      context.drawImage(image, 0, 0, 1200, 1200)
      const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(value => value ? resolve(value) : reject(new Error('Image unavailable')), 'image/png'))
      const blobUrl = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = `${slug}-qr.png`
      link.click()
      setTimeout(() => URL.revokeObjectURL(blobUrl), 1000)
    } catch {
      setError('Could not download the PNG. Use the SVG download below.')
    } finally {
      setSaving(false)
    }
  }

  return <>
    <button type="button" onClick={() => { setCopied(false); setError(''); setOpen(true) }} className={`inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] px-5 py-3 font-bold ${block ? 'w-full' : ''}`}><Share2 size={17} /> Share / QR code</button>
    <dialog ref={dialog} onCancel={() => setOpen(false)} onClose={() => setOpen(false)} aria-labelledby="initiative-share-title" className="m-auto w-[calc(100%_-_2rem)] max-w-md rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-[var(--foreground)] shadow-2xl backdrop:bg-black/60">
      <div className="flex items-start justify-between gap-4"><div><h2 id="initiative-share-title" className="text-xl font-black">Share {name}</h2><p className="mt-2 text-sm leading-6">Scan to view the public initiative. No sign-in needed to read it.</p></div><button type="button" aria-label="Close sharing" onClick={() => setOpen(false)} className="rounded-lg p-2"><X size={20} /></button></div>
      {open && <img src={imageUrl} alt={`QR code linking to ${name}`} width={320} height={320} onLoad={() => setImageReady(true)} onError={() => { setImageReady(false); setError('The QR code could not load. You can still copy the link.') }} className="mx-auto my-5 aspect-square w-full max-w-[320px] bg-white" />}
      <label htmlFor="initiative-share-url" className="text-sm font-bold">Public link</label>
      <input id="initiative-share-url" readOnly value={url} onFocus={event => event.target.select()} className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] p-3 text-sm" />
      <div className="mt-4 flex flex-wrap gap-3"><button type="button" onClick={copyLink} className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-2 font-bold">{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? 'Link copied' : 'Copy link'}</button><button type="button" onClick={downloadQr} disabled={!imageReady || saving} className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-2 font-bold disabled:opacity-50"><Download size={16} />{saving ? 'Saving…' : 'Download PNG'}</button><a href={imageUrl} download={`${slug}-qr.svg`} className="inline-flex items-center gap-2 px-3 py-2 text-sm underline">Download SVG</a></div>
      <p aria-live="polite" className="mt-3 text-sm">{error || (copied ? 'Ready to paste into a message or interview notes.' : 'Save the QR image for flyers, interviews, or presentations.')}</p>
    </dialog>
  </>
}
