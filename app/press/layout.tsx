import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Press',
  description: 'News and press resources for Project Exodus.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
