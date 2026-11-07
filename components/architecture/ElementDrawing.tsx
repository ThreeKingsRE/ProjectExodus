'use client'

import manifest from '@/data/architecture/drawings-manifest.json'

/**
 * Drawing for an architectural element.
 *
 * Elements redrawn in the technical-sheet system are static SVG files
 * (public/architecture/drawings), loaded lazily and cached by the browser:
 *  - variant "plate": drawing + source credit, no name or labels. Use in
 *    cards, thumbnails and games (it doesn't give the answer away).
 *  - variant "sheet": full sheet with title block, labels, dimensions and
 *    source. Use on detail views.
 *
 * Every element in the summaries has a drawing (the drawings build fails
 * otherwise); an unknown id renders an empty placeholder of the same size.
 */

type ManifestEntry = { view: string; sheetNo: string; source: string; aspect: number }
const DRAWINGS = manifest as Record<string, ManifestEntry>

export function hasTechnicalDrawing(elementId: string) {
  return elementId in DRAWINGS
}

export function getDrawingInfo(elementId: string): ManifestEntry | undefined {
  return DRAWINGS[elementId]
}

interface ElementDrawingProps {
  elementId: string
  category: string
  variant?: 'plate' | 'sheet'
  /** Accessible name. Leave generic in games so it doesn't reveal the answer. */
  alt?: string
  className?: string
  /** Height in px */
  size?: number
}

export function ElementDrawing({
  elementId,
  category,
  variant = 'plate',
  alt = 'Architectural drawing',
  className = '',
  size,
}: ElementDrawingProps) {
  if (DRAWINGS[elementId]) {
    const src = `/architecture/drawings/${elementId}${variant === 'plate' ? '.plate' : ''}.svg`
    return (
      // eslint-disable-next-line @next/next/no-img-element -- static SVG; next/image adds nothing here
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`object-contain ${variant === 'plate' ? 'rounded-sm' : ''} ${className}`}
        // Drawings are mostly taller than wide: size sets the height
        style={size ? { height: size, width: 'auto', maxWidth: '100%' } : undefined}
      />
    )
  }
  return <div aria-hidden className={`rounded-sm bg-[var(--muted)] ${className}`} style={size ? { height: size, width: size } : undefined} data-category={category} />
}
