'use client'

// ============================================
// BOOK PAGE
// The sacred container for knowledge
import { sanitizeHtml } from '@/lib/utils/sanitize'
// Each page: paper texture, content area, watermark
// ============================================

import { motion } from 'framer-motion'
import { forwardRef, ReactNode, useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import {
  GUARDIAN_RIBBONS,
  RIBBON_ORDER,
  A11Y_CONFIG,
  getDeviceType,
} from './scrollConstants'

// ============================================
// TYPES
// ============================================

interface ScrollPageProps {
  children: ReactNode
  pageNumber: number
  totalPages: number
  chapterIndex: number
  /** Chapter number shown in the footer (defaults to chapterIndex + 1; differs in later volumes) */
  chapterNumber?: number
  side: 'left' | 'right'
  /** Kept for compatibility; the sheet frame replaced the watermark */
  showWatermark?: boolean
  allowScroll?: boolean // For lesson content, quizzes/games - other pages should fit
  onPrevPage?: () => void
  onNextPage?: () => void
  isFirstPage?: boolean
  isLastPage?: boolean
  className?: string
}

interface PageContentProps {
  title?: string
  subtitle?: string
  content?: string | ReactNode
  references?: Reference[]
  citations?: Citation[]
  quotes?: Quote[]
  illustrations?: Illustration[]
  className?: string
}

interface Reference {
  id: string
  number: number
  text: string
  url?: string
}

interface Citation {
  id: string
  author: string
  year: number
  title: string
  source: string
  url?: string
}

interface Quote {
  id: string
  text: string
  author: string
  source?: string
}

interface Illustration {
  id: string
  type: 'diagram' | 'chart' | 'image' | 'carved' | 'etched'
  component?: ReactNode
  src?: string
  alt: string
  caption?: string
}

// ============================================
// BOOK PAGE COMPONENT
// ============================================

export const ScrollPage = forwardRef<HTMLDivElement, ScrollPageProps>(
  function ScrollPage(
    { children, pageNumber, totalPages, chapterIndex, chapterNumber, side, allowScroll = false, onPrevPage, onNextPage, isFirstPage = false, isLastPage = false, className },
    ref
  ) {
    const [deviceType, setDeviceType] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    // Reset scroll position to top when page changes
    useEffect(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0
      }
    }, [pageNumber])

    useEffect(() => {
      function updateDevice() {
        setDeviceType(getDeviceType())
      }
      updateDevice()
      window.addEventListener('resize', updateDevice)
      return () => window.removeEventListener('resize', updateDevice)
    }, [])

    const isDesktop = deviceType === 'desktop'
    const isMobile = deviceType !== 'desktop'
    const ribbon = RIBBON_ORDER[chapterIndex] ? GUARDIAN_RIBBONS[RIBBON_ORDER[chapterIndex]] : null

    return (
      <div
        ref={ref}
        className={cn(
          'ds-sheet relative w-full h-full',
          'flex flex-col',
          'text-[var(--book-text,var(--foreground))]',
          className
        )}
        role="article"
        aria-label={A11Y_CONFIG.ariaLabels.pageNumber(pageNumber, totalPages)}
      >
        {/* Main content area */}
        <div
          ref={scrollContainerRef}
          className={cn(
            'flex-1 min-h-0 pt-2 pb-1 overflow-x-hidden',
            allowScroll ? 'overflow-y-auto' : 'overflow-y-hidden',
            side === 'left' && allowScroll && 'pr-1'
          )}
        >
          {children}
        </div>

        {/* Footer: page number in corner + turn arrows */}
        <div
          className={cn(
            'shrink-0 py-1 border-t border-[var(--ds-rule,var(--border))]',
            'flex items-center',
            'text-[10px] text-[var(--muted-foreground)]'
          )}
        >
          {/* Desktop left page: ← pageNum ... chapter */}
          {isDesktop && side === 'left' && (
            <>
              <div className="flex items-center gap-1.5">
                {onPrevPage && (
                  <button
                    onClick={onPrevPage}
                    disabled={isFirstPage}
                    className="p-0.5 rounded hover:bg-[var(--muted)]/50 disabled:opacity-20 transition-colors"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                )}
                <span className="ds-label text-[9px] tabular-nums">P. {String(pageNumber).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}</span>
              </div>
              <div className="flex-1" />
              {ribbon && (
                <ChapterMark color={ribbon.colors.from} number={chapterNumber ?? chapterIndex + 1} />
              )}
            </>
          )}

          {/* Desktop right page: chapter ... pageNum → */}
          {isDesktop && side === 'right' && (
            <>
              {ribbon && (
                <ChapterMark color={ribbon.colors.from} number={chapterNumber ?? chapterIndex + 1} />
              )}
              <div className="flex-1" />
              <div className="flex items-center gap-1.5">
                <span className="ds-label text-[9px] tabular-nums">P. {String(pageNumber).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}</span>
                {onNextPage && (
                  <button
                    onClick={onNextPage}
                    disabled={isLastPage}
                    className="p-0.5 rounded hover:bg-[var(--muted)]/50 disabled:opacity-20 transition-colors"
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </>
          )}

          {/* Mobile/tablet: ← pageNum ... chapter ... → */}
          {isMobile && (
            <>
              <div className="flex items-center gap-1.5">
                {onPrevPage && (
                  <button
                    onClick={onPrevPage}
                    disabled={isFirstPage}
                    className="p-1 rounded hover:bg-[var(--muted)]/50 disabled:opacity-20 transition-colors"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                )}
                <span className="ds-label text-[9px] tabular-nums">P. {String(pageNumber).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}</span>
              </div>
              <div className="flex-1 flex justify-center">
                {ribbon && (
                  <ChapterMark color={ribbon.colors.from} number={chapterNumber ?? chapterIndex + 1} />
                )}
              </div>
              {onNextPage && (
                <button
                  onClick={onNextPage}
                  disabled={isLastPage}
                  className="p-1 rounded hover:bg-[var(--muted)]/50 disabled:opacity-20 transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </>
          )}
        </div>

        {/* Sheet frame: hairline border with corner ticks, as on the technical sheets */}
        <SheetFrame />

        {/* Page fold shadow */}
        {isDesktop && (
          <div
            className={cn(
              'absolute inset-y-0 w-8 pointer-events-none',
              side === 'left' ? 'right-0' : 'left-0'
            )}
            style={{
              background:
                side === 'left'
                  ? 'linear-gradient(to right, transparent, rgba(0,0,0,0.03))'
                  : 'linear-gradient(to left, transparent, rgba(0,0,0,0.05))',
            }}
          />
        )}
      </div>
    )
  }
)

// Chapter mark for the footer title block: a flat colour swatch + mono label
function ChapterMark({ color, number }: { color: string; number: number }) {
  return (
    <span className="flex items-center gap-1.5 opacity-80">
      <span className="h-2 w-2" style={{ background: color }} aria-hidden />
      <span className="ds-label text-[9px]">Ch. {String(number).padStart(2, '0')}</span>
    </span>
  )
}

// Hairline sheet border with short registration ticks at each corner
function SheetFrame() {
  const tick = 'absolute h-2.5 w-2.5 border-[var(--ds-ink,#1f2a37)]'
  return (
    <div aria-hidden className="pointer-events-none absolute inset-[5px]">
      <div className="absolute inset-0 border border-[var(--ds-hair,rgba(0,0,0,0.12))]" />
      <span className={`${tick} -left-px -top-px border-l border-t opacity-50`} />
      <span className={`${tick} -right-px -top-px border-r border-t opacity-50`} />
      <span className={`${tick} -left-px -bottom-px border-l border-b opacity-50`} />
      <span className={`${tick} -right-px -bottom-px border-r border-b opacity-50`} />
    </div>
  )
}

// ============================================
// PAGE CONTENT RENDERER
// Handles structured content with references, citations, quotes
// ============================================

export function PageContent({
  title,
  subtitle,
  content,
  references,
  citations,
  quotes,
  illustrations,
  className,
}: PageContentProps) {
  return (
    <div className={cn('space-y-6', className)}>
      {/* Title */}
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[var(--foreground)] leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-[var(--muted-foreground)] mt-1 italic">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Featured Quote (if any) */}
      {quotes && quotes.length > 0 && (
        <QuoteBlock quote={quotes[0]} featured />
      )}

      {/* Main Content */}
      {content && (
        <div className="prose prose-sm dark:prose-invert max-w-none">
          {typeof content === 'string' ? (
            <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(content as string) }} />
          ) : (
            content
          )}
        </div>
      )}

      {/* Illustrations */}
      {illustrations && illustrations.length > 0 && (
        <div className="space-y-4">
          {illustrations.map((illustration) => (
            <IllustrationBlock key={illustration.id} illustration={illustration} />
          ))}
        </div>
      )}

      {/* Additional Quotes */}
      {quotes && quotes.length > 1 && (
        <div className="space-y-3 mt-6">
          {quotes.slice(1).map((quote) => (
            <QuoteBlock key={quote.id} quote={quote} />
          ))}
        </div>
      )}

      {/* In-text Citations Section */}
      {citations && citations.length > 0 && (
        <div className="mt-8 pt-4 border-t border-[var(--border)]/30">
          <h4 className="text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-wider mb-2">
            Citations
          </h4>
          <div className="space-y-2">
            {citations.map((citation) => (
              <CitationBlock key={citation.id} citation={citation} />
            ))}
          </div>
        </div>
      )}

      {/* References Section */}
      {references && references.length > 0 && (
        <div className="mt-6 pt-4 border-t border-[var(--border)]/30">
          <h4 className="text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-wider mb-2">
            References
          </h4>
          <div className="space-y-1">
            {references.map((ref) => (
              <ReferenceBlock key={ref.id} reference={ref} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================
// QUOTE BLOCK
// ============================================

interface QuoteBlockProps {
  quote: Quote
  featured?: boolean
}

function QuoteBlock({ quote, featured }: QuoteBlockProps) {
  return (
    <blockquote
      className={cn(
        'relative pl-4 border-l-2 border-[var(--primary)]/40',
        featured && 'py-4 bg-[var(--muted)]/30 rounded-r-lg pr-4'
      )}
    >
      <p
        className={cn(
          'italic text-[var(--foreground)]',
          featured ? 'text-lg leading-relaxed' : 'text-sm'
        )}
      >
        "{quote.text}"
      </p>
      <footer className="mt-2 text-xs text-[var(--muted-foreground)]">
        — <span className="font-medium">{quote.author}</span>
        {quote.source && <span>, {quote.source}</span>}
      </footer>
    </blockquote>
  )
}

// ============================================
// CITATION BLOCK
// ============================================

interface CitationBlockProps {
  citation: Citation
}

function CitationBlock({ citation }: CitationBlockProps) {
  return (
    <div className="text-xs text-[var(--muted-foreground)] leading-relaxed">
      <span className="font-medium">{citation.author}</span>
      <span className="mx-1">({citation.year}).</span>
      <span className="italic">{citation.title}.</span>
      <span className="ml-1">{citation.source}.</span>
      {citation.url && (
        <a
          href={citation.url}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 text-[var(--primary)] hover:underline"
        >
          [Link]
        </a>
      )}
    </div>
  )
}

// ============================================
// REFERENCE BLOCK
// ============================================

interface ReferenceBlockProps {
  reference: Reference
}

function ReferenceBlock({ reference }: ReferenceBlockProps) {
  return (
    <div className="text-xs text-[var(--muted-foreground)] flex gap-2">
      <span className="font-mono text-[var(--primary)]">[{reference.number}]</span>
      <span>
        {reference.text}
        {reference.url && (
          <a
            href={reference.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-[var(--primary)] hover:underline"
          >
            ↗
          </a>
        )}
      </span>
    </div>
  )
}

// ============================================
// ILLUSTRATION BLOCK
// Carved, Etched, Sculpted visual style
// ============================================

interface IllustrationBlockProps {
  illustration: Illustration
}

function IllustrationBlock({ illustration }: IllustrationBlockProps) {
  const isCarved = illustration.type === 'carved' || illustration.type === 'etched'

  return (
    <figure
      className={cn(
        'relative my-6',
        isCarved && 'p-4 bg-[var(--muted)]/20 rounded-lg border border-[var(--border)]/30'
      )}
    >
      {/* Illustration content */}
      {illustration.component ? (
        <div
          className={cn(
            'w-full flex justify-center',
            isCarved && 'filter sepia-[0.1] contrast-[1.05]'
          )}
        >
          {illustration.component}
        </div>
      ) : illustration.src ? (
        <img
          src={illustration.src}
          alt={illustration.alt}
          className={cn(
            'w-full h-auto rounded',
            isCarved && 'filter sepia-[0.15] contrast-[1.1]'
          )}
        />
      ) : null}

      {/* Caption */}
      {illustration.caption && (
        <figcaption className="mt-3 text-xs text-center text-[var(--muted-foreground)] italic">
          {illustration.caption}
        </figcaption>
      )}

      {/* Carved/Etched effect overlay */}
      {isCarved && (
        <div
          className="absolute inset-0 pointer-events-none rounded-lg"
          style={{
            background: `
              linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 50%, rgba(0,0,0,0.02) 100%)
            `,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.05)',
          }}
        />
      )}
    </figure>
  )
}

// ============================================
// VERSE HEADER
// For starting a new verse (lesson) within a chapter
// Enhanced with sacred scroll animations
// ============================================

interface VerseHeaderProps {
  verseNumber: number
  verseName: string
  chapterIndex: number
  animated?: boolean
}

export function VerseHeader({ verseNumber, verseName, chapterIndex, animated = true }: VerseHeaderProps) {
  const ribbon = RIBBON_ORDER[chapterIndex] ? GUARDIAN_RIBBONS[RIBBON_ORDER[chapterIndex]] : null
  const color = ribbon?.colors.from || 'var(--primary)'

  if (!animated) {
    return (
      <div className="text-center py-8 space-y-3">
        <div
          className="w-24 h-0.5 mx-auto"
          style={{
            background: `linear-gradient(to right, transparent, ${color}, transparent)`,
          }}
        />
        <div className="text-sm text-[var(--muted-foreground)] tracking-widest uppercase">
          Verse {verseNumber}
        </div>
        <h3 className="text-xl font-serif font-bold text-[var(--foreground)]">
          {verseName}
        </h3>
        <div
          className="w-24 h-0.5 mx-auto"
          style={{
            background: `linear-gradient(to right, transparent, ${color}, transparent)`,
          }}
        />
      </div>
    )
  }

  return (
    <motion.div
      className="text-center py-8 space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top decorative SVG flourish */}
      <motion.svg
        className="w-48 h-8 mx-auto"
        viewBox="0 0 192 32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {/* Left line */}
        <motion.path
          d="M8 16 L56 16"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          opacity={0.4}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        {/* Left decorative curl */}
        <motion.path
          d="M56 16 Q64 8 72 16 Q64 24 56 16"
          fill="none"
          stroke={color}
          strokeWidth="1"
          opacity={0.5}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        />
        {/* Center ornament */}
        <motion.circle
          cx="96" cy="16" r="6"
          fill={`${color}20`}
          stroke={color}
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5, type: 'spring' }}
        />
        <motion.circle
          cx="96" cy="16" r="3"
          fill={color}
          opacity={0.6}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6, type: 'spring' }}
        />
        {/* Right decorative curl */}
        <motion.path
          d="M136 16 Q128 8 120 16 Q128 24 136 16"
          fill="none"
          stroke={color}
          strokeWidth="1"
          opacity={0.5}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        />
        {/* Right line */}
        <motion.path
          d="M136 16 L184 16"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          opacity={0.4}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.svg>

      {/* Verse number with decorative frame */}
      <motion.div
        className="inline-flex items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-lg opacity-40" style={{ color }}>❧</span>
        <span
          className="text-sm tracking-[0.3em] uppercase font-medium"
          style={{ color }}
        >
          Verse {verseNumber}
        </span>
        <span className="text-lg opacity-40 rotate-180" style={{ color }}>❧</span>
      </motion.div>

      {/* Verse name with reveal animation */}
      <motion.h3
        className="text-xl sm:text-2xl font-serif font-bold text-[var(--foreground)]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {verseName}
      </motion.h3>

      {/* Bottom decorative element */}
      <motion.div
        className="flex items-center justify-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="w-8 h-px"
          style={{ background: `linear-gradient(to right, transparent, ${color})` }}
          initial={{ scaleX: 0, originX: 1 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        />
        <motion.div
          className="w-2 h-2 rounded-full"
          style={{ background: color, opacity: 0.5 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.65, type: 'spring' }}
        />
        <motion.div
          className="w-8 h-px"
          style={{ background: `linear-gradient(to left, transparent, ${color})` }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

// ============================================
// CHAPTER DIVIDER PAGE
// Enhanced with sacred manuscript styling
// ============================================

interface ChapterDividerProps {
  chapterIndex: number
  /** Chapter number shown to the reader (global across volumes) */
  chapterNumber?: number
  chapterTitle: string
  versesCount: number
  guardianQuote?: string
  animated?: boolean
}

/**
 * Chapter opener drawn as a technical plate: the chapter's emblem inside a
 * ruled circle with dash-dot centre lines and compass ticks, mono labels,
 * ink title. Lines draw on once, like a pen plotter.
 */
export function ChapterDivider({
  chapterIndex,
  chapterNumber,
  chapterTitle,
  versesCount,
  guardianQuote,
  animated = true,
}: ChapterDividerProps) {
  const ribbon = RIBBON_ORDER[chapterIndex] ? GUARDIAN_RIBBONS[RIBBON_ORDER[chapterIndex]] : null
  const Icon = ribbon?.icon
  const color = ribbon?.colors.from || 'var(--ds-accent, #9a3412)'
  const number = String(chapterNumber ?? chapterIndex + 1).padStart(2, '0')
  const draw = (delay: number) =>
    animated
      ? { initial: { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 }, transition: { duration: 0.9, delay, ease: 'easeInOut' as const } }
      : {}
  const fade = (delay: number) =>
    animated ? { initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay } } : {}

  // 24 compass ticks, longer every 90°
  const ticks = Array.from({ length: 24 }, (_, k) => {
    const a = (k * 15 * Math.PI) / 180
    const long = k % 6 === 0
    const r1 = 58
    const r2 = long ? 66 : 62
    return { x1: 80 + r1 * Math.cos(a), y1: 80 + r1 * Math.sin(a), x2: 80 + r2 * Math.cos(a), y2: 80 + r2 * Math.sin(a), long }
  })

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly text-center relative px-6 py-6 overflow-hidden">
      <motion.div className="ds-label text-[10px] text-[var(--ds-ink-soft)]" {...fade(0.1)}>
        Sheet CH-{number}
      </motion.div>

      {/* Emblem plate */}
      <div className="relative shrink-0" style={{ width: 160, height: 160 }}>
        <svg viewBox="0 0 160 160" className="absolute inset-0 h-full w-full" fill="none" strokeLinecap="round" aria-hidden>
          {/* centre lines, dash-dot in the accent like the sheets */}
          <motion.path d="M80 4 L80 156" stroke="var(--ds-accent, #9a3412)" strokeWidth={0.5} strokeDasharray="10 3 2 3" {...draw(0.1)} />
          <motion.path d="M4 80 L156 80" stroke="var(--ds-accent, #9a3412)" strokeWidth={0.5} strokeDasharray="10 3 2 3" {...draw(0.1)} />
          {/* outer profile + inner hairline */}
          <motion.circle cx={80} cy={80} r={56} stroke="var(--ds-ink, #1f2a37)" strokeWidth={1.5} {...draw(0.25)} />
          <motion.circle cx={80} cy={80} r={42} stroke="var(--ds-ink, #1f2a37)" strokeWidth={0.5} opacity={0.6} {...draw(0.4)} />
          {/* compass ticks */}
          {ticks.map((t, k) => (
            <motion.line key={k} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="var(--ds-ink, #1f2a37)" strokeWidth={t.long ? 1 : 0.5} opacity={t.long ? 0.8 : 0.45} {...draw(0.5 + k * 0.01)} />
          ))}
          {/* chapter colour as a single fine arc segment */}
          <motion.path d="M 80 24 A 56 56 0 0 1 136 80" stroke={color} strokeWidth={2.5} {...draw(0.7)} />
        </svg>
        {Icon && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={animated ? { opacity: 0 } : undefined}
            animate={animated ? { opacity: 1 } : undefined}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Icon className="h-9 w-9 text-[var(--ds-ink,#1f2a37)]" strokeWidth={1.25} />
          </motion.div>
        )}
      </div>

      {/* Chapter number and title */}
      <motion.div className="shrink-0 space-y-2" {...fade(0.5)}>
        <div className="ds-label text-[11px] text-[var(--ds-ink-soft)]">Chapter {number}</div>
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[var(--ds-ink,#1f2a37)] leading-tight">
          {chapterTitle}
        </h2>
        <div className="mx-auto h-[2px] w-10" style={{ background: color }} aria-hidden />
        {ribbon && (
          <div className="ds-label text-[10px] text-[var(--ds-ink-soft)]">
            The way of <span style={{ color }}>{ribbon.value}</span>
          </div>
        )}
      </motion.div>

      {/* Quote */}
      {guardianQuote && (
        <motion.blockquote
          className="shrink-0 max-w-xs border-t border-[var(--ds-hair)] pt-3 text-sm italic font-serif leading-relaxed text-[var(--ds-ink-soft)]"
          {...fade(0.7)}
        >
          &ldquo;{guardianQuote}&rdquo;
        </motion.blockquote>
      )}

      {/* Lesson count */}
      <motion.div className="ds-label shrink-0 border border-[var(--ds-rule)] px-3 py-1 text-[10px] text-[var(--ds-ink)]" {...fade(0.85)}>
        {versesCount} {versesCount === 1 ? 'lesson' : 'lessons'} in this chapter
      </motion.div>
    </div>
  )
}

export default ScrollPage
