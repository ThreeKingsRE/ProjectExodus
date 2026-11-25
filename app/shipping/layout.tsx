import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { generateMetadata as pageMetadata } from '@/lib/metadata'
import { SHOP_PAGES_LIVE } from '@/lib/features'

export const metadata: Metadata = pageMetadata({
  title: 'Shipping',
  description: 'Shipping information for purchases through Project Exodus.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  // Shipping is switched off until products exist (lib/features.ts).
  if (!SHOP_PAGES_LIVE) redirect('/')
  return children
}
