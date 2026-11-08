import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'FAQ',
  description: 'Answers to common questions about Project Exodus, products, learning and the community.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
