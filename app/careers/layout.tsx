import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Careers',
  description: 'Work with Project Exodus on the tools and community for sustainable living.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
