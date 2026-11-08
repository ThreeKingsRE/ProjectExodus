import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Shipping',
  description: 'Shipping information for purchases through Project Exodus.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
