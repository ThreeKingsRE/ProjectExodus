'use client'

// The Digital Scroll as a closed hardcover book: the topic page's hero.
// Clothbound cover in the topic's colour, designs debossed into the board,
// gold-foil title, and a square window cut near the top that shows the
// chapter the reader is on (or turns through the chapters when they haven't
// started). Clicking the cover opens the scroll.

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { CoreTopic } from '@/types/modules'

interface CoverTheme {
  cloth: string
  clothDark: string
  foil: string
}

const THEMES: Record<CoreTopic, CoverTheme> = {
  'renewable-energy': { cloth: '#5b3a14', clothDark: '#3f280d', foil: '#e2bf6e' },
  'water-systems': { cloth: '#163a57', clothDark: '#0e283d', foil: '#d9c08a' },
  'regenerative-agriculture': { cloth: '#2c4524', clothDark: '#1d3017', foil: '#dcc283' },
  'zero-waste': { cloth: '#1f4440', clothDark: '#142f2c', foil: '#d6c48f' },
  'green-building': { cloth: '#3a4535', clothDark: '#283024', foil: '#dcc68e' },
  'food-sovereignty': { cloth: '#5a2324', clothDark: '#3e1718', foil: '#e0bf7c' },
}

// Line-art emblems (viewBox 0 0 100 100), drawn as strokes so they can be debossed
const EMBLEMS: Record<CoreTopic, string[]> = {
  'water-systems': [
    'M50 14 C50 14 26 44 26 60 a24 24 0 0 0 48 0 C74 44 50 14 50 14 Z',
    'M38 62 a12 12 0 0 0 12 12',
    'M14 88 q9 -6 18 0 t18 0 t18 0 t18 0',
  ],
  'renewable-energy': [
    'M50 34 a16 16 0 1 0 0.01 0 Z',
    'M50 8 V20 M50 80 V92 M8 50 H20 M80 50 H92 M20 20 l9 9 M71 71 l9 9 M80 20 l-9 9 M29 71 l-9 9',
    'M54 38 L44 52 H52 L46 64',
  ],
  'regenerative-agriculture': [
    'M50 90 V46',
    'M50 60 C34 60 22 48 20 30 C38 30 50 40 50 60 Z',
    'M50 50 C64 50 76 40 80 22 C62 22 50 32 50 50 Z',
    'M24 90 H76',
  ],
  'zero-waste': [
    'M50 14 L64 36 H54 M50 14 L36 36 H46',
    'M84 72 L60 74 L66 66 M84 72 L74 50 L70 58',
    'M16 72 L28 50 L32 58 M16 72 H40 L34 80',
    'M41 31 a30 30 0 0 1 18 0 M74 58 a30 30 0 0 1 -9 16 M35 74 a30 30 0 0 1 -9 -16',
  ],
  'green-building': [
    'M16 50 L50 20 L84 50',
    'M24 44 V86 H76 V44',
    'M42 86 V64 H58 V86',
    'M58 40 C58 30 66 24 76 24 C76 34 70 40 58 40 Z',
  ],
  'food-sovereignty': [
    'M50 92 V18',
    'M50 30 C42 28 38 22 38 14 C46 16 50 22 50 30 Z M50 30 C58 28 62 22 62 14 C54 16 50 22 50 30 Z',
    'M50 48 C40 46 34 38 34 28 C44 30 50 38 50 48 Z M50 48 C60 46 66 38 66 28 C56 30 50 38 50 48 Z',
    'M50 66 C40 64 32 56 32 44 C44 46 50 56 50 66 Z M50 66 C60 64 68 56 68 44 C56 46 50 56 50 66 Z',
  ],
}

// Corner flourish for the etched frame (top-left; mirrored for the others)
const CORNER = 'M6 30 V12 a6 6 0 0 1 6 -6 H30 M12 24 a12 12 0 0 1 12 -12 M18 18 m-2.5 0 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0'

/** Strokes debossed into the cover: shadow above, highlight below, groove on top. */
function Deboss({ id, paths, width = 1.6 }: { id: string; paths: string[]; width?: number }) {
  return (
    <>
      <defs>
        <g id={id} fill="none" strokeLinecap="round" strokeLinejoin="round">
          {paths.map((d, i) => <path key={i} d={d} />)}
        </g>
      </defs>
      <use href={`#${id}`} transform="translate(0 0.9)" stroke="rgba(255,255,255,0.16)" strokeWidth={width} />
      <use href={`#${id}`} transform="translate(0 -0.7)" stroke="rgba(0,0,0,0.55)" strokeWidth={width} />
      <use href={`#${id}`} stroke="rgba(0,0,0,0.28)" strokeWidth={width * 0.8} />
    </>
  )
}

export interface ScrollHardcoverProps {
  topicId: CoreTopic
  title: string
  subtitle: string
  chapterTitles: string[]
  /** Index of the chapter the reader is on, or null if they haven't started */
  currentChapter: number | null
  levelLabel: string
  hours: number
  progressPercent: number
  onOpen: () => void
}

export function ScrollHardcover({ topicId, title, subtitle, chapterTitles, currentChapter, levelLabel, hours, progressPercent, onOpen }: ScrollHardcoverProps) {
  const theme = THEMES[topicId]
  const reduceMotion = useReducedMotion()
  const [hover, setHover] = useState(false)

  // The window shows the current chapter; before starting, it turns through them
  const [tick, setTick] = useState(0)
  useEffect(() => {
    if (currentChapter !== null || reduceMotion || chapterTitles.length < 2) return
    const t = setInterval(() => setTick((i) => i + 1), 2800)
    return () => clearInterval(t)
  }, [currentChapter, chapterTitles.length, reduceMotion])
  const shown = currentChapter ?? tick % Math.max(1, chapterTitles.length)

  const action = currentChapter === null ? 'Open the book' : `Continue at Chapter ${currentChapter + 1}`

  return (
    <div className="flex flex-col items-center">
      <div style={{ perspective: 1600 }}>
        <motion.button
          type="button"
          onClick={onOpen}
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          onFocus={() => setHover(true)}
          onBlur={() => setHover(false)}
          aria-label={`${title} textbook. ${action}.`}
          className="relative block focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300/70 rounded-r-md"
          style={{ width: 'clamp(250px, 62vw, 360px)', aspectRatio: '3 / 4', transformStyle: 'preserve-3d' }}
          initial={false}
          animate={reduceMotion ? {} : { rotateY: hover ? -16 : -7, rotateX: hover ? 3 : 2, y: hover ? -6 : 0 }}
          transition={{ type: 'spring', stiffness: 140, damping: 18 }}
        >
          {/* Page block behind the board (visible edges right and bottom) */}
          <div
            aria-hidden
            className="absolute rounded-r-sm"
            style={{
              top: '2.2%', bottom: '-1.6%', left: '3%', right: '-2.6%',
              background: 'repeating-linear-gradient(90deg, #f8f4ea 0 2px, #e6dfcf 2px 3px)',
              boxShadow: '0 24px 40px -12px rgba(0,0,0,0.55), 0 8px 14px -6px rgba(0,0,0,0.35)',
            }}
          />

          {/* The board */}
          <div
            className="absolute inset-0 overflow-hidden rounded-r-md rounded-l-sm"
            style={{
              backgroundColor: theme.cloth,
              backgroundImage: `
                repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 3px),
                repeating-linear-gradient(90deg, rgba(0,0,0,0.05) 0 1px, transparent 1px 3px),
                radial-gradient(120% 90% at 30% 15%, rgba(255,255,255,0.10), transparent 55%),
                radial-gradient(90% 80% at 80% 100%, rgba(0,0,0,0.35), transparent 60%)`,
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06), inset -6px 0 14px rgba(0,0,0,0.25)',
            }}
          >
            {/* Spine hinge with raised bands */}
            <div
              aria-hidden
              className="absolute inset-y-0 left-0"
              style={{
                width: '9%',
                background: `linear-gradient(90deg, ${theme.clothDark}, ${theme.cloth} 70%, rgba(0,0,0,0.35))`,
                boxShadow: 'inset -2px 0 3px rgba(0,0,0,0.45)',
              }}
            >
              {[14, 34, 66, 86].map((t) => (
                <div key={t} className="absolute inset-x-0" style={{ top: `${t}%`, height: 5, background: 'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(0,0,0,0.4))' }} />
              ))}
            </div>

            {/* Etched frame, corners and emblem */}
            <svg aria-hidden className="absolute inset-0 h-full w-full" viewBox="0 0 300 400" preserveAspectRatio="none">
              <Deboss id={`frame-${topicId}`} paths={['M36 14 H288 V386 H36 Z', 'M43 21 H281 V379 H43 Z']} width={1.4} />
            </svg>
            <svg aria-hidden className="absolute inset-0 h-full w-full" viewBox="0 0 300 400">
              <g transform="translate(38 16)"><Deboss id={`corner-tl-${topicId}`} paths={[CORNER]} width={1.3} /></g>
              <g transform="translate(286 16) scale(-1 1)"><Deboss id={`corner-tr-${topicId}`} paths={[CORNER]} width={1.3} /></g>
              <g transform="translate(38 384) scale(1 -1)"><Deboss id={`corner-bl-${topicId}`} paths={[CORNER]} width={1.3} /></g>
              <g transform="translate(286 384) scale(-1 -1)"><Deboss id={`corner-br-${topicId}`} paths={[CORNER]} width={1.3} /></g>
              <g transform="translate(128 270) scale(0.7)">
                <Deboss id={`emblem-${topicId}`} paths={EMBLEMS[topicId]} width={2.2} />
              </g>
            </svg>

            {/* Square window cut into the board, showing the chapter page beneath */}
            <div
              className="absolute left-1/2 -translate-x-1/2 overflow-hidden"
              style={{
                top: '8.5%', width: '26%', aspectRatio: '1 / 1', marginLeft: '4.5%',
                background: '#f7f2e6',
                boxShadow: `inset 0 4px 7px rgba(0,0,0,0.55), inset 0 -1px 0 rgba(0,0,0,0.25), 0 0 0 1.5px ${theme.foil}66, 0 1px 0 rgba(255,255,255,0.15)`,
              }}
            >
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={shown}
                  className="absolute inset-0 flex flex-col items-center justify-center px-1.5 text-center"
                  initial={reduceMotion ? false : { y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={reduceMotion ? undefined : { y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-serif uppercase text-stone-500" style={{ fontSize: 'clamp(7px, 1.6vw, 9px)', letterSpacing: '0.18em' }}>Chapter</span>
                  <span className="font-serif font-bold leading-none text-stone-800" style={{ fontSize: 'clamp(22px, 6vw, 32px)' }}>{String(shown + 1).padStart(2, '0')}</span>
                  <span className="mt-1 line-clamp-2 font-serif leading-tight text-stone-600" style={{ fontSize: 'clamp(7px, 1.7vw, 9.5px)' }}>{chapterTitles[shown]}</span>
                </motion.div>
              </AnimatePresence>
              {/* Light catching the cut edge */}
              {!reduceMotion && (
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ background: 'linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.55) 50%, transparent 65%)' }}
                  animate={{ x: ['-120%', '120%'] }}
                  transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 3.6, ease: 'easeInOut' }}
                />
              )}
            </div>

            {/* Gold-foil title block */}
            <div className="absolute inset-x-0 text-center" style={{ top: '42%', paddingLeft: '13%', paddingRight: '5%' }}>
              <h2
                className="font-serif font-bold uppercase leading-[1.05]"
                style={{
                  fontSize: 'clamp(22px, 6.4vw, 34px)',
                  letterSpacing: '0.06em',
                  backgroundImage: `linear-gradient(100deg, ${theme.foil} 0%, #fff4cf 22%, ${theme.foil} 40%, #9c7a3c 70%, ${theme.foil} 100%)`,
                  backgroundSize: '220% 100%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0 1px 0 rgba(0,0,0,0.35)',
                  animation: reduceMotion ? undefined : 'ds-foil 7s ease-in-out infinite',
                }}
              >
                {title}
              </h2>
              <div className="mx-auto my-2 h-px w-1/3" style={{ background: `linear-gradient(90deg, transparent, ${theme.foil}, transparent)` }} />
              <p className="mx-auto font-serif italic leading-snug" style={{ color: `${theme.foil}cc`, fontSize: 'clamp(10px, 2.4vw, 12.5px)', maxWidth: '86%' }}>
                {subtitle}
              </p>
            </div>

            {/* Imprint along the foot */}
            <p
              className="absolute inset-x-0 text-center font-serif uppercase"
              style={{ bottom: '10.5%', paddingLeft: '9%', color: `${theme.foil}b3`, fontSize: 'clamp(7.5px, 1.8vw, 9.5px)', letterSpacing: '0.22em' }}
            >
              {chapterTitles.length} chapters · ~{hours} h · {levelLabel}
            </p>
            <p className="absolute inset-x-0 text-center font-serif" style={{ bottom: '7%', paddingLeft: '9%', color: `${theme.foil}80`, fontSize: 'clamp(7px, 1.6vw, 8.5px)', letterSpacing: '0.3em' }}>
              PROJECT EXODUS
            </p>
          </div>

          {/* Ribbon marker once the reader has made progress */}
          {progressPercent > 0 && (
            <div aria-hidden className="absolute" style={{ right: '16%', bottom: '-7%', width: '5.5%', height: '12%' }}>
              <div className="h-full w-full" style={{ background: `linear-gradient(90deg, #8a6a2a, ${theme.foil}, #8a6a2a)`, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 82%, 0 100%)' }} />
            </div>
          )}
        </motion.button>
      </div>

      {/* Caption under the book */}
      <div className="mt-8 text-center">
        <p className="font-serif text-lg font-semibold text-[var(--foreground)]">{action}</p>
        <p className="mt-0.5 text-sm text-[var(--muted-foreground)]">
          {progressPercent > 0 ? `${progressPercent}% complete · ` : ''}Click the cover to begin reading
        </p>
      </div>
    </div>
  )
}
