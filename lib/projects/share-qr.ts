import qrcode from 'qrcode-generator'

export function initiativeShareUrl(slug: string) {
  return `https://www.projxodus.com/community/projects/${encodeURIComponent(slug)}`
}

/** Generated locally: scanning goes straight to the public initiative, with no QR redirect service. */
export function initiativeQrSvg(slug: string) {
  const qr = qrcode(0, 'M')
  qr.addData(initiativeShareUrl(slug), 'Byte')
  qr.make()
  return qr.createSvgTag({ cellSize: 8, margin: 32 })
}
