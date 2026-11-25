import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { generateMetadata as pageMetadata } from '@/lib/metadata'
import { SHOP_PAGES_LIVE } from '@/lib/features'

export const metadata: Metadata = pageMetadata({
  title: 'Marketplace',
  description: 'A marketplace for sustainable goods from the Project Exodus community.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  // Switched off until the shop exists (lib/features.ts).
  if (!SHOP_PAGES_LIVE) redirect('/')
  return children
}
