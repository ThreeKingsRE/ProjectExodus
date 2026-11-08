import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Marketplace',
  description: 'A marketplace for sustainable goods from the Project Exodus community.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
