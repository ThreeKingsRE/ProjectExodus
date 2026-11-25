// Site-wide switches for sections that are built but not open to the public yet.
// Pure constants (no React, no database) so pages, client components and the menu can share them.

/**
 * The shop pages describe products, vendors, shipping and returns that don't exist yet:
 * /products (and /products/[slug], /products/compare), /shipping, /vendors (and
 * /vendors/[slug]), /marketplace and /returns. While this is false, those routes
 * redirect to the home page, every link to them is hidden, and Sage doesn't offer
 * products or talk about shopping. Set it to true to bring them all back.
 */
export const SHOP_PAGES_LIVE = false

/** Menu item ids that belong to those pages (see lib/menu/layout.ts) */
export const SHOP_MENU_ITEM_IDS = new Set(['products', 'shipping', 'returns'])

/** True when a site link should be shown. Hides links into the shop pages while they're off. */
export function isLinkLive(href: string): boolean {
  if (SHOP_PAGES_LIVE) return true
  return !/^\/(products|shipping|vendors|marketplace|returns)(?=$|[/?#])/.test(href)
}
