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
  // x, y: pointer position over the book, -0.5..0.5. A finger turns it much
  // further than a hovering mouse (up to ~40° each way), but never past the front.
  const setPose = (x: number, y: number, touch = false) => {
    px.set(x); py.set(y)
    const yaw = touch ? 80 : tiltRange * 2
    const pitch = touch ? 64 : tiltRange * 1.2
    ryTarget.set(opening ? 0 : restY + x * yaw)
    rxTarget.set(opening ? 0 : restX - y * pitch)
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
    if (onDragMove(e)) return
    if (!move || e.pointerType === 'touch' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    setPose(
      Math.max(-0.5, Math.min(0.5, (e.clientX - r.left) / r.width - 0.5)),
      Math.max(-0.5, Math.min(0.5, (e.clientY - r.top) / r.height - 0.5)),
    )
  }
  const reset = () => { if (!press.current) setPose(0, 0); setHovered(false) }

  // Touch (and a held mouse button): the book tilts toward the finger in both
  // axes and follows it; on release it springs back. Always shows the front.
  const press = useRef<{ id: number; x: number; y: number; moved: boolean } | null>(null)
  const suppressClick = useRef(false)
  const pointAt = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect()
    return [
      Math.max(-0.5, Math.min(0.5, (e.clientX - r.left) / r.width - 0.5)),
      Math.max(-0.5, Math.min(0.5, (e.clientY - r.top) / r.height - 0.5)),
    ] as const
  }

  const onPointerDown = (e: React.PointerEvent) => {
    if (!move || opening || !ref.current || (e.pointerType === 'mouse' && e.button !== 0)) return
    press.current = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: false }
    if (e.pointerType !== 'mouse') { const [x, y] = pointAt(e); setPose(x, y, true); setHovered(true) }
  }
  const onDragMove = (e: React.PointerEvent) => {
    const p = press.current
    if (!p || p.id !== e.pointerId || !ref.current) return false
    if (Math.hypot(e.clientX - p.x, e.clientY - p.y) > 8) p.moved = true
    const [x, y] = pointAt(e)
    setPose(x, y, e.pointerType !== 'mouse')
    return true
  }
  const onPointerUp = (e: React.PointerEvent) => {
    const p = press.current
    if (!p || p.id !== e.pointerId) return
    press.current = null
    // A tilt that moved isn't a tap: don't open the book
    if (p.moved) { suppressClick.current = true; setTimeout(() => { suppressClick.current = false }, 0) }
    if (e.pointerType !== 'mouse') { setPose(0, 0); setHovered(false) }
  }

  const duration = 6 + (delay % 3) * 0.6
  const drift = move && !opening

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ aspectRatio: '3 / 4', perspective: 1400, touchAction: 'pan-y', ...style }}
      onPointerEnter={(e) => { if (e.pointerType !== 'touch') setHovered(true) }}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onDragStart={(e) => e.preventDefault()}
      onClickCapture={(e) => { if (suppressClick.current) { e.preventDefault(); e.stopPropagation() } }}
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
              style={{ background: glare, transform: 'translateZ(0.5px)', backfaceVisibility: 'hidden', opacity: engaged ? 1 : 0.55 }}
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
