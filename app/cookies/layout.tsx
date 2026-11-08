import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Policy',
  description: 'How Project Exodus uses cookies.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
