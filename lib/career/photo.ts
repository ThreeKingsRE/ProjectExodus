// Client-side photo prep for My Career. Before anything leaves the phone:
// - read the date the photo was taken (EXIF DateTimeOriginal), so posts can show it
// - re-encode through a canvas, which drops ALL metadata, including GPS location
// - pixelate any areas the user marked (faces, house numbers, plates)
// Pixelation, not ctx.filter blur, because Safari doesn't support canvas filters.

export interface BlurRect { x: number; y: number; w: number; h: number } // fractions 0..1 of width/height

const MAX_SIDE = 2000

/** EXIF DateTimeOriginal as ISO, or null. Reads only the first 128 KB of a JPEG. */
export async function readTakenAt(file: File): Promise<string | null> {
  if (!/jpe?g/i.test(file.type)) return null
  try {
    const v = new DataView(await file.slice(0, 131072).arrayBuffer())
    if (v.getUint16(0) !== 0xffd8) return null
    let o = 2
    while (o + 4 < v.byteLength) {
      const marker = v.getUint16(o)
      const size = v.getUint16(o + 2)
      if (marker === 0xffe1 && v.getUint32(o + 4) === 0x45786966) return parseExif(v, o + 10)
      if ((marker & 0xff00) !== 0xff00) return null
      o += 2 + size
    }
  } catch { /* unreadable: no date */ }
  return null
}

function parseExif(v: DataView, tiff: number): string | null {
  const le = v.getUint16(tiff) === 0x4949
  const u16 = (p: number) => v.getUint16(p, le)
  const u32 = (p: number) => v.getUint32(p, le)
  const findTag = (ifd: number, tag: number) => {
    const n = u16(ifd)
    for (let i = 0; i < n; i++) {
      const e = ifd + 2 + i * 12
      if (u16(e) === tag) return e
    }
    return -1
  }
  const ifd0 = tiff + u32(tiff + 4)
  const ptr = findTag(ifd0, 0x8769)
  if (ptr < 0) return null
  const exif = tiff + u32(ptr + 8)
  const e = findTag(exif, 0x9003)
  if (e < 0) return null
  const start = tiff + u32(e + 8)
  let s = ''
  for (let i = 0; i < 19; i++) s += String.fromCharCode(v.getUint8(start + i))
  const m = /^(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})$/.exec(s)
  if (!m) return null
  const d = new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6])
  return isNaN(+d) || d.getFullYear() < 1990 ? null : d.toISOString()
}

export async function loadImage(file: File): Promise<HTMLImageElement> {
  const url = URL.createObjectURL(file)
  try {
    const img = new Image()
    img.decoding = 'async'
    img.src = url
    await img.decode()
    return img
  } finally {
    // The decoded image stays usable after the object URL is released
    setTimeout(() => URL.revokeObjectURL(url), 0)
  }
}

/**
 * Draw the photo (browsers apply the EXIF rotation when drawing), pixelate the marked
 * areas, and return a fresh JPEG data URL with no metadata.
 */
export function cleanPhoto(img: HTMLImageElement, rects: BlurRect[]): string {
  const scale = Math.min(1, MAX_SIDE / Math.max(img.naturalWidth, img.naturalHeight))
  const w = Math.round(img.naturalWidth * scale)
  const h = Math.round(img.naturalHeight * scale)
  const c = document.createElement('canvas')
  c.width = w; c.height = h
  const ctx = c.getContext('2d')!
  ctx.drawImage(img, 0, 0, w, h)
  for (const r of rects) {
    const x = Math.max(0, Math.round(r.x * w)), y = Math.max(0, Math.round(r.y * h))
    const rw = Math.min(w - x, Math.round(r.w * w)), rh = Math.min(h - y, Math.round(r.h * h))
    if (rw < 2 || rh < 2) continue
    // Shrink to tiny blocks then scale back up without smoothing: unrecoverable mosaic
    const block = Math.max(8, Math.round(Math.max(rw, rh) / 10))
    const sw = Math.max(1, Math.round(rw / block)), sh = Math.max(1, Math.round(rh / block))
    const t = document.createElement('canvas')
    t.width = sw; t.height = sh
    const tctx = t.getContext('2d')!
    tctx.drawImage(c, x, y, rw, rh, 0, 0, sw, sh)
    ctx.imageSmoothingEnabled = false
    ctx.drawImage(t, 0, 0, sw, sh, x, y, rw, rh)
    ctx.imageSmoothingEnabled = true
  }
  return c.toDataURL('image/jpeg', 0.86)
}

/** Upload a cleaned photo; returns its URL. */
export async function uploadCareerPhoto(dataUrl: string): Promise<string> {
  const res = await fetch('/api/upload', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image: dataUrl, folder: 'career' }),
  })
  const j = await res.json().catch(() => ({}))
  const url = j?.data?.url ?? j?.url
  if (!res.ok || !url) throw new Error(j?.error || 'Upload failed')
  return url as string
}
