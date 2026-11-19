// The reader's bookmark ribbon: one design used in every Digital Scroll book.
// Shared by the API (validation) and the ribbon and customizer components.

export const RIBBON_COLORS = [
  { id: 'red', label: 'Classic red', hex: '#b3261e' },
  { id: 'burgundy', label: 'Burgundy', hex: '#7a1f2b' },
  { id: 'gold', label: 'Gold', hex: '#c8952c' },
  { id: 'forest', label: 'Forest', hex: '#2f6b3a' },
  { id: 'ocean', label: 'Ocean', hex: '#1f5f8b' },
  { id: 'violet', label: 'Violet', hex: '#5b3a8e' },
  { id: 'rose', label: 'Rose', hex: '#c2577a' },
  { id: 'ink', label: 'Ink', hex: '#2b2b33' },
] as const

export const RIBBON_PATTERNS = ['none', 'stripes', 'dots', 'chevrons', 'gradient'] as const
export const RIBBON_DECALS = ['none', 'leaf', 'fish', 'sun', 'drop', 'star'] as const
export const RIBBON_TAILS = ['swallowtail', 'straight', 'pointed'] as const

export type RibbonPattern = (typeof RIBBON_PATTERNS)[number]
export type RibbonDecal = (typeof RIBBON_DECALS)[number]
export type RibbonTail = (typeof RIBBON_TAILS)[number]

export interface RibbonStyle {
  /** Any #rrggbb colour (the swatches above are suggestions) */
  color: string
  pattern: RibbonPattern
  decal: RibbonDecal
  /** Up to 3 letters or digits, stitched near the tail */
  initials: string
  tail: RibbonTail
}

export const DEFAULT_RIBBON: RibbonStyle = {
  color: RIBBON_COLORS[0].hex,
  pattern: 'none',
  decal: 'none',
  initials: '',
  tail: 'swallowtail',
}

const HEX = /^#[0-9a-f]{6}$/i

/** Keep only valid fields; anything missing or invalid falls back to the default. */
export function cleanRibbon(input: unknown): RibbonStyle {
  const o = (input && typeof input === 'object' ? input : {}) as Record<string, unknown>
  const pick = <T extends string>(value: unknown, allowed: readonly T[], fallback: T): T =>
    typeof value === 'string' && (allowed as readonly string[]).includes(value) ? (value as T) : fallback
  return {
    color: typeof o.color === 'string' && HEX.test(o.color) ? o.color.toLowerCase() : DEFAULT_RIBBON.color,
    pattern: pick(o.pattern, RIBBON_PATTERNS, DEFAULT_RIBBON.pattern),
    decal: pick(o.decal, RIBBON_DECALS, DEFAULT_RIBBON.decal),
    initials: typeof o.initials === 'string' ? o.initials.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 3) : '',
    tail: pick(o.tail, RIBBON_TAILS, DEFAULT_RIBBON.tail),
  }
}

/** True when the input is a fully valid design (used to reject bad API writes). */
export function isValidRibbon(input: unknown): boolean {
  if (!input || typeof input !== 'object') return false
  const o = input as Record<string, unknown>
  const clean = cleanRibbon(input)
  return (
    o.color === clean.color || (typeof o.color === 'string' && o.color.toLowerCase() === clean.color)
  ) && o.pattern === clean.pattern && o.decal === clean.decal && o.tail === clean.tail
    && (o.initials === undefined || o.initials === '' || (typeof o.initials === 'string' && o.initials.toUpperCase() === clean.initials))
}

/** CSS clip-path for each tail shape (ribbon drawn top to bottom). */
export const TAIL_CLIP: Record<RibbonTail, string> = {
  swallowtail: 'polygon(0 0, 100% 0, 100% 100%, 50% 86%, 0 100%)',
  straight: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  pointed: 'polygon(0 0, 100% 0, 100% 88%, 50% 100%, 0 88%)',
}
