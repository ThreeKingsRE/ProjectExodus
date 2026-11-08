import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Learn',
  description: 'Free learning modules on renewable energy, water systems, food, building and more.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
