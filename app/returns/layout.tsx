import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { generateMetadata as pageMetadata } from '@/lib/metadata'
import { SHOP_PAGES_LIVE } from '@/lib/features'

export const metadata: Metadata = pageMetadata({
  title: 'Returns',
  description: 'Returns policy for purchases through Project Exodus.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  // Switched off until the shop exists (lib/features.ts).
  if (!SHOP_PAGES_LIVE) redirect('/')
  return children
}
