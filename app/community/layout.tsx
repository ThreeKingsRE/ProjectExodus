import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Community',
  description: 'Forums, projects and people working on sustainability together.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
