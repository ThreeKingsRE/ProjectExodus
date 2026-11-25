// Site-wide switches for sections that are built but not open to the public yet.
// Pure constants (no React, no database) so pages, client components and the menu can share them.

/**
 * The product directory (/products, /products/[slug], /products/compare) and the
 * shipping page (/shipping) describe products and shipping that don't exist yet.
 * While this is false, those routes redirect to the home page and every link to
 * them is hidden. Set it to true to bring them all back; nothing else changes.
 */
export const SHOP_PAGES_LIVE = false

/** Menu item ids that belong to those pages (see lib/menu/layout.ts) */
export const SHOP_MENU_ITEM_IDS = new Set(['products', 'shipping'])

/** True when a site link should be shown. Hides links into /products and /shipping while they're off. */
export function isLinkLive(href: string): boolean {
  if (SHOP_PAGES_LIVE) return true
  return !/^\/(products|shipping)(?=$|[/?#])/.test(href)
}
