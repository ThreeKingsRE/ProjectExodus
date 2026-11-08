import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How Project Exodus collects, uses and protects your data.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
