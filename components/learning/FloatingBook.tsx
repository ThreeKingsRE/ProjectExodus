'use client'

// A book that hovers in the air: it drifts up and down over a soft floor
// shadow, turns toward the pointer, and catches a glint of light as it turns.
// The book itself (a BookCover with depth) is passed in as children.

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

export interface FloatingBookProps {
  children: ReactNode
  /** Resting turn, in degrees (negative shows the page edges) */
  restY?: number
  restX?: number
  /** How far the book turns toward the pointer, in degrees */
  tiltRange?: number
  /** Seconds before this book starts drifting, so a shelf doesn't move in step */
  delay?: number
  /** Height of the drift, in px */
  lift?: number
  /** Soft light behind the book, in the cover's foil colour */
  glow?: string
  /** Hold still and face forward (the hero while its cover swings open) */
  opening?: boolean
  /** Lift and turn as if hovered (e.g. when a parent link has focus) */
  active?: boolean
  className?: string
  style?: CSSProperties
}

export function FloatingBook({
  children, restY = -12, restX = 4, tiltRange = 16, delay = 0, lift = 10, glow, opening = false, active = false, className = '', style,
}: FloatingBookProps) {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  // Pointer position over the book, -0.5..0.5 on each axis, and the turn it asks for
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const ryTarget = useMotionValue(restY)
  const rxTarget = useMotionValue(restX)
  const spring = { stiffness: 120, damping: 16, mass: 0.6 }
  const ry = useSpring(ryTarget, spring)
  const rx = useSpring(rxTarget, spring)
  const setPose = (x: number, y: number) => {
    px.set(x); py.set(y)
    ryTarget.set(opening ? 0 : restY + x * tiltRange * 2)
    rxTarget.set(opening ? 0 : restX - y * tiltRange * 1.2)
  }

  // A glint that slides across the cover opposite the light source
  const gx = useSpring(useTransform(px, (v) => 50 - v * 120), spring)
  const gy = useSpring(useTransform(py, (v) => 30 - v * 80), spring)
  const glare = useMotionTemplate`radial-gradient(70% 55% at ${gx}% ${gy}%, rgba(255,255,255,0.28), rgba(255,255,255,0.06) 45%, transparent 70%)`

  // Face forward while opening; return to the resting pose after
  useEffect(() => { setPose(px.get(), py.get()) }, [opening, restY, restX]) // eslint-disable-line react-hooks/exhaustive-deps

  const engaged = (hovered || active) && !opening
  const move = !reduceMotion

  const onPointerMove = (e: React.PointerEvent) => {
    if (!move || e.pointerType === 'touch' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    setPose(
      Math.max(-0.5, Math.min(0.5, (e.clientX - r.left) / r.width - 0.5)),
      Math.max(-0.5, Math.min(0.5, (e.clientY - r.top) / r.height - 0.5)),
    )
  }
  const reset = () => { setPose(0, 0); setHovered(false) }

  // Touch: a quick turn toward the finger, then settle back
  const onPointerDown = (e: React.PointerEvent) => {
    if (!move || e.pointerType !== 'touch' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    setPose(((e.clientX - r.left) / r.width - 0.5) * 0.8, ((e.clientY - r.top) / r.height - 0.5) * 0.8)
    setTimeout(() => setPose(0, 0), 450)
  }

  const duration = 6 + (delay % 3) * 0.6
  const drift = move && !opening

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ aspectRatio: '3 / 4', perspective: 1400, ...style }}
      onPointerEnter={(e) => { if (e.pointerType !== 'touch') setHovered(true) }}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      onPointerDown={onPointerDown}
    >
      {glow && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-[35%] rounded-full"
          style={{ background: `radial-gradient(closest-side, ${glow}55, ${glow}1f 45%, transparent 75%)` }}
          animate={move ? { opacity: engaged ? 1 : [0.65, 0.9, 0.65], scale: engaged ? 1.06 : [1, 1.04, 1] } : undefined}
          transition={engaged ? { duration: 0.6 } : { duration: duration * 1.3, repeat: Infinity, ease: 'easeInOut', delay }}
        />
      )}

      {/* Floor shadow: tightens and fades as the book rises */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[6%] right-[2%] rounded-[50%]"
        style={{ top: '103%', height: '9%', background: 'radial-gradient(closest-side, rgba(0,0,0,0.42), rgba(0,0,0,0.16) 55%, transparent)', filter: 'blur(2px)' }}
        animate={drift ? { scaleX: engaged ? 0.78 : [1, 0.86, 1], opacity: engaged ? 0.38 : [0.85, 0.55, 0.85] } : { scaleX: 1, opacity: 0.85 }}
        transition={engaged ? { duration: 0.5 } : { duration, repeat: Infinity, ease: 'easeInOut', delay }}
      />

      {/* Drift */}
      <motion.div
        className="absolute inset-0"
        style={{ transformStyle: 'preserve-3d' }}
        animate={drift ? { y: engaged ? -lift * 1.6 : [0, -lift, 0], rotateZ: engaged ? 0 : [-0.4, 0.5, -0.4] } : { y: opening ? -4 : 0, rotateZ: 0, scale: opening ? 1.04 : 1 }}
        transition={engaged || !drift ? { type: 'spring', stiffness: 160, damping: 18 } : { duration, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        {/* Turn */}
        <motion.div className="absolute inset-0" style={{ transformStyle: 'preserve-3d', rotateY: move ? ry : restY, rotateX: move ? rx : restX }}>
          {children}
          {move && !opening && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-r-md rounded-l-sm"
              style={{ background: glare, transform: 'translateZ(0.5px)', opacity: engaged ? 1 : 0.55 }}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}

/** Specks of light drifting up through the hero, in the cover's foil colour. */
export function DustMotes({ color, count = 16 }: { color: string; count?: number }) {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) return null
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }, (_, i) => {
        // Deterministic scatter so server and client agree
        const left = (i * 37 + 11) % 100
        const size = 2 + ((i * 7) % 4)
        const dur = 9 + ((i * 13) % 8)
        const delay = -((i * 5.3) % dur)
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`, bottom: '-4%', width: size, height: size,
              background: color, boxShadow: `0 0 ${size * 3}px ${color}`, opacity: 0,
              animation: `dust-rise ${dur}s linear ${delay}s infinite`,
              ['--drift' as string]: `${((i * 23) % 60) - 30}px`,
            }}
          />
        )
      })}
    </div>
  )
}
