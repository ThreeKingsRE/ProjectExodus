'use client'

// The signed-in member's saved menu arrangement. Remembered on this device so the menu
// never flashes the standard order first, then refreshed from the server.

import { useCallback, useEffect, useState } from 'react'
import { defaultLayout, normalizeLayout, type MenuLayout } from './layout'

const KEY = (id: string) => `menu-layout:${id}`
const EVENT = 'exodus-menu-layout'

export function useMenuLayout(userId: string | null | undefined) {
  const [layout, setLayout] = useState<MenuLayout>(defaultLayout)
  const [custom, setCustom] = useState(false)

  useEffect(() => {
    if (!userId) { setLayout(defaultLayout()); setCustom(false); return }
    try { const c = localStorage.getItem(KEY(userId)); if (c) { setLayout(normalizeLayout(JSON.parse(c))); setCustom(true) } } catch { /* no storage */ }
    let live = true
    const load = () => fetch('/api/users/menu-layout').then((r) => r.json()).then((j) => {
      if (!live || !j.success) return
      setLayout(normalizeLayout(j.data.layout)); setCustom(!!j.data.custom)
      try { j.data.custom ? localStorage.setItem(KEY(userId), JSON.stringify(j.data.layout)) : localStorage.removeItem(KEY(userId)) } catch { /* no storage */ }
    }).catch(() => {})
    load()
    window.addEventListener(EVENT, load)
    return () => { live = false; window.removeEventListener(EVENT, load) }
  }, [userId])

  const save = useCallback(async (next: MenuLayout | null): Promise<boolean> => {
    if (!userId) return false
    try {
      const res = await fetch('/api/users/menu-layout', next ? { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ layout: next }) } : { method: 'DELETE' })
      const j = await res.json()
      if (!j.success) return false
      setLayout(normalizeLayout(j.data.layout)); setCustom(!!j.data.custom)
      try { next ? localStorage.setItem(KEY(userId), JSON.stringify(j.data.layout)) : localStorage.removeItem(KEY(userId)) } catch { /* no storage */ }
      window.dispatchEvent(new Event(EVENT))
      return true
    } catch { return false }
  }, [userId])

  return { layout, custom, save }
}
