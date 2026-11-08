import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Articles',
  description: 'Guides and stories on sustainable living, renewable energy, water, food and building from the Project Exodus community.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
