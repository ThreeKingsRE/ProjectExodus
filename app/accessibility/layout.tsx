import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Accessibility',
  description: 'How Project Exodus is built to be usable by everyone, and how to report an accessibility problem.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
