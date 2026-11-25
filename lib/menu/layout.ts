// The phone menu ("hamburger") and how each member can arrange it: which sections
// come first, which items sit in which section, and which items are hidden.
// Pure (no React, no database) so the Header, the editor and the tests share it.

export interface MenuItemDef {
  id: string; label: string; href: string
  /** Name of the icon (the Header maps names to icons) */
  icon: string
  /** Where the item is highlighted: exact path, or any path starting with one of `prefixes` */
  exact?: string; prefixes?: string[]; notPrefixes?: string[]
  /** open: anyone · locked: visitors see it with a "Sign in" lock · members: only signed-in people */
  access: 'open' | 'locked' | 'members'
  /** Section it belongs to unless the member moves it */
  home: string
  /** Decoration beside the label */
  extra?: 'trades'
}

export interface MenuSectionDef { id: string; name: string; /** Heading shown in the menu, if any */ title?: string }

export const MENU_SECTIONS: MenuSectionDef[] = [
  { id: 'main', name: 'Main' },
  { id: 'career', name: 'My Career' },
  { id: 'meetings', name: 'Meetings' },
  { id: 'community', name: 'Community', title: 'Community' },
  { id: 'learn', name: 'Learn', title: 'Learn' },
  { id: 'account', name: 'Account', title: 'Account' },
  { id: 'about', name: 'About', title: 'About' },
  { id: 'policies', name: 'Policies', title: 'Policies' },
]

export const MENU_ITEMS: MenuItemDef[] = [
  { id: 'home', label: 'Home', href: '/', icon: 'Home', exact: '/', access: 'open', home: 'main' },
  { id: 'products', label: 'Products', href: '/products', icon: 'ShoppingBag', prefixes: ['/products'], access: 'open', home: 'main' },
  { id: 'articles', label: 'Articles', href: '/articles', icon: 'Newspaper', prefixes: ['/articles'], access: 'open', home: 'main' },
  { id: 'career', label: 'My Career', href: '/my/career', icon: 'Hammer', prefixes: ['/my/career', '/career'], access: 'locked', home: 'career', extra: 'trades' },
  { id: 'meetings', label: 'Meetings', href: '/meetings', icon: 'CalendarDays', prefixes: ['/meetings'], access: 'open', home: 'meetings' },
  { id: 'current-events', label: 'Current Events', href: '/community', icon: 'CalendarDays', exact: '/community', access: 'open', home: 'community' },
  { id: 'discussions', label: 'Discussions', href: '/community/discussions', icon: 'MessagesSquare', prefixes: ['/community/discussions'], access: 'open', home: 'community' },
  { id: 'initiatives', label: 'Initiatives', href: '/community/projects', icon: 'Rocket', prefixes: ['/community/projects'], access: 'open', home: 'community' },
  { id: 'fish-tank', label: 'Fish Tank', href: '/fishbowl', icon: 'Fish', prefixes: ['/fishbowl'], access: 'open', home: 'community' },
  { id: 'sustainability', label: 'Sustainability', href: '/learn', icon: 'Sprout', prefixes: ['/learn'], access: 'open', home: 'learn' },
  { id: 'exodology', label: 'Exodology', href: '/exodology', icon: 'GraduationCap', prefixes: ['/exodology'], access: 'locked', home: 'learn' },
  { id: 'architecture', label: 'Architecture', href: '/architecture', icon: 'Landmark', prefixes: ['/architecture'], notPrefixes: ['/architecture/structural'], access: 'locked', home: 'learn' },
  { id: 'structural', label: 'Structural Engineering', href: '/architecture/structural', icon: 'Ruler', prefixes: ['/architecture/structural'], access: 'locked', home: 'learn' },
  { id: 'messages', label: 'Messages', href: '/messages', icon: 'MessageCircle', prefixes: ['/messages'], access: 'members', home: 'account' },
  { id: 'notifications', label: 'Notifications', href: '/notifications', icon: 'Bell', prefixes: ['/notifications'], access: 'members', home: 'account' },
  { id: 'volition', label: 'My Volition', href: '/my/volition', icon: 'Compass', prefixes: ['/my/volition'], access: 'members', home: 'account' },
  { id: 'explore', label: 'Search & Explore', href: '/explore', icon: 'Search', prefixes: ['/explore'], access: 'members', home: 'account' },
  { id: 'settings', label: 'Settings', href: '/settings', icon: 'Settings', prefixes: ['/settings'], access: 'members', home: 'account' },
  { id: 'about-us', label: 'About Us', href: '/about', icon: 'Info', prefixes: ['/about'], access: 'open', home: 'about' },
  { id: 'careers', label: 'Careers', href: '/careers', icon: 'Briefcase', prefixes: ['/careers'], access: 'open', home: 'about' },
  { id: 'press', label: 'Press', href: '/press', icon: 'Megaphone', prefixes: ['/press'], access: 'open', home: 'about' },
  { id: 'contact', label: 'Contact Us', href: '/contact', icon: 'Mail', prefixes: ['/contact'], access: 'open', home: 'about' },
  { id: 'support', label: 'Help Center', href: '/support', icon: 'LifeBuoy', prefixes: ['/support'], access: 'open', home: 'about' },
  { id: 'faq', label: 'FAQ', href: '/faq', icon: 'CircleHelp', prefixes: ['/faq'], access: 'open', home: 'about' },
  { id: 'shipping', label: 'Shipping Info', href: '/shipping', icon: 'Truck', prefixes: ['/shipping'], access: 'open', home: 'policies' },
  { id: 'returns', label: 'Returns', href: '/returns', icon: 'Undo2', prefixes: ['/returns'], access: 'open', home: 'policies' },
  { id: 'privacy', label: 'Privacy Policy', href: '/privacy', icon: 'ShieldCheck', prefixes: ['/privacy'], access: 'open', home: 'policies' },
  { id: 'terms', label: 'Terms of Service', href: '/terms', icon: 'FileText', prefixes: ['/terms'], access: 'open', home: 'policies' },
  { id: 'cookies', label: 'Cookie Policy', href: '/cookies', icon: 'Cookie', prefixes: ['/cookies'], access: 'open', home: 'policies' },
  { id: 'accessibility', label: 'Accessibility', href: '/accessibility', icon: 'Accessibility', prefixes: ['/accessibility'], access: 'open', home: 'policies' },
]

export const itemById = new Map(MENU_ITEMS.map((i) => [i.id, i]))
const SECTION_IDS = new Set(MENU_SECTIONS.map((s) => s.id))

/** What gets saved for a member */
export interface MenuLayout { sections: string[]; items: Record<string, string[]>; hidden: string[] }

export function defaultLayout(): MenuLayout {
  return {
    sections: MENU_SECTIONS.map((s) => s.id),
    items: Object.fromEntries(MENU_SECTIONS.map((s) => [s.id, MENU_ITEMS.filter((i) => i.home === s.id).map((i) => i.id)])),
    hidden: [],
  }
}

/** Make any saved value safe and complete: unknown ids dropped, nothing listed twice, and anything
 *  new we have added since (or that was never placed) lands back in its own section. */
export function normalizeLayout(raw: unknown): MenuLayout {
  const r = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>
  const arr = (v: unknown): string[] => (Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : [])
  const sections = [...new Set(arr(r.sections).filter((s) => SECTION_IDS.has(s)))]
  for (const s of MENU_SECTIONS) if (!sections.includes(s.id)) sections.push(s.id)
  const placed = new Set<string>()
  const hidden = [...new Set(arr(r.hidden).filter((i) => itemById.has(i)))]
  hidden.forEach((h) => placed.add(h))
  const savedItems = (r.items && typeof r.items === 'object' ? r.items : {}) as Record<string, unknown>
  const items: Record<string, string[]> = {}
  for (const s of sections) {
    items[s] = arr(savedItems[s]).filter((i) => itemById.has(i) && !placed.has(i) && (placed.add(i), true))
  }
  for (const i of MENU_ITEMS) if (!placed.has(i.id)) { items[i.home].push(i.id); placed.add(i.id) }
  return { sections, items, hidden }
}

export interface ResolvedSection { id: string; name: string; title?: string; items: MenuItemDef[] }

/** The sections to draw, in the member's order. Visitors never see members-only items; empty sections are dropped
 *  unless `all` (the editor shows every section so items can be moved into it). */
export function resolveMenu(layout: MenuLayout, signedIn: boolean, all = false): ResolvedSection[] {
  const defs = new Map(MENU_SECTIONS.map((s) => [s.id, s]))
  return layout.sections.map((id) => {
    const d = defs.get(id)!
    const items = (layout.items[id] ?? []).map((i) => itemById.get(i)!).filter((i) => all || signedIn || i.access !== 'members')
    return { id, name: d.name, title: d.title, items }
  }).filter((s) => all || s.items.length > 0)
}

export function isItemActive(i: MenuItemDef, pathname: string): boolean {
  if (i.exact !== undefined && pathname === i.exact) return true
  if (i.notPrefixes?.some((p) => pathname.startsWith(p))) return false
  return !!i.prefixes?.some((p) => pathname.startsWith(p))
}

// ── Editing (every move returns a new layout) ──────────────────────────────

const clone = (l: MenuLayout): MenuLayout => ({ sections: [...l.sections], items: Object.fromEntries(Object.entries(l.items).map(([k, v]) => [k, [...v]])), hidden: [...l.hidden] })

export function moveSection(l: MenuLayout, id: string, dir: -1 | 1): MenuLayout {
  const n = clone(l), i = n.sections.indexOf(id), j = i + dir
  if (i < 0 || j < 0 || j >= n.sections.length) return n
  ;[n.sections[i], n.sections[j]] = [n.sections[j], n.sections[i]]
  return n
}

/** Move an item up or down; at the edge of its section it hops into the neighbouring section. */
export function moveItem(l: MenuLayout, id: string, dir: -1 | 1): MenuLayout {
  const n = clone(l)
  const si = n.sections.findIndex((s) => n.items[s].includes(id))
  if (si < 0) return n
  const list = n.items[si >= 0 ? n.sections[si] : '']
  const i = list.indexOf(id), j = i + dir
  if (j >= 0 && j < list.length) { [list[i], list[j]] = [list[j], list[i]]; return n }
  const to = si + dir
  if (to < 0 || to >= n.sections.length) return n
  list.splice(i, 1)
  const dest = n.items[n.sections[to]]
  if (dir === -1) dest.push(id); else dest.unshift(id)
  return n
}

export function moveItemToSection(l: MenuLayout, id: string, sectionId: string): MenuLayout {
  if (!SECTION_IDS.has(sectionId)) return clone(l)
  const n = clone(l)
  for (const s of n.sections) n.items[s] = n.items[s].filter((x) => x !== id)
  n.hidden = n.hidden.filter((x) => x !== id)
  n.items[sectionId].push(id)
  return n
}

export function hideItem(l: MenuLayout, id: string): MenuLayout {
  const n = clone(l)
  for (const s of n.sections) n.items[s] = n.items[s].filter((x) => x !== id)
  if (!n.hidden.includes(id)) n.hidden.push(id)
  return n
}

/** Bring a hidden item back (to its own section, or the one given) */
export function showItem(l: MenuLayout, id: string, sectionId?: string): MenuLayout {
  const d = itemById.get(id)
  if (!d) return clone(l)
  const n = clone(l)
  n.hidden = n.hidden.filter((x) => x !== id)
  const to = sectionId && SECTION_IDS.has(sectionId) ? sectionId : d.home
  if (!n.items[to].includes(id)) n.items[to].push(id)
  return n
}

export const isDefault = (l: MenuLayout) => JSON.stringify(normalizeLayout(l)) === JSON.stringify(defaultLayout())
