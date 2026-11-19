// Tappable links in initiative text (description, story) without rendering HTML.
// Recognizes [label](https://...) and bare https:// addresses. Trailing
// punctuation after a bare address (". , ; : ! ? )") stays text, so
// "survey: https://forms.gle/abc." links to https://forms.gle/abc.

export type TextPart = { text: string } | { href: string; label: string }

const TOKEN = /(\[[^\]]+\]\(https:\/\/[^\s)]+\)|https:\/\/[^\s<>"]+)/g

export function splitLinks(value: string): TextPart[] {
  const parts: TextPart[] = []
  for (const piece of value.split(TOKEN)) {
    if (!piece) continue
    const named = piece.match(/^\[([^\]]+)\]\((https:\/\/[^\s)]+)\)$/)
    if (named) { parts.push({ href: named[2], label: named[1] }); continue }
    if (/^https:\/\//.test(piece)) {
      const trail = piece.match(/[.,;:!?)\]]+$/)?.[0] ?? ''
      const href = trail ? piece.slice(0, -trail.length) : piece
      if (href.length > 'https://'.length) parts.push({ href, label: href })
      else parts.push({ text: href })
      if (trail) parts.push({ text: trail })
      continue
    }
    parts.push({ text: piece })
  }
  return parts
}

/** An owner-set survey link: https only, a real URL, at most 500 characters. '' clears it. */
export function normalizeSurveyUrl(raw: unknown): string | null {
  if (typeof raw !== 'string') return null
  const value = raw.trim()
  if (!value) return ''
  if (value.length > 500 || !value.startsWith('https://')) return null
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && url.hostname.includes('.') ? url.toString() : null
  } catch {
    return null
  }
}
