'use client'

import PusherClient from 'pusher-js'

/**
 * Browser-side Pusher (real-time messages, notifications, live canvases).
 * Kept apart from lib/pusher.ts so the server SDK never ships to browsers.
 * Returns null when Pusher isn't configured, so nothing connects in vain.
 */
let instance: PusherClient | null = null

export const getPusherClient = () => {
  if (typeof window === 'undefined') return null
  const key = process.env.NEXT_PUBLIC_PUSHER_KEY
  const cluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER
  if (!key || !cluster) return null
  if (!instance) {
    instance = new PusherClient(key, {
      cluster,
      // Auth endpoint for private channels - CRITICAL for security
      authEndpoint: '/api/pusher/auth',
    })
  }
  return instance
}
