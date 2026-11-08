import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Resources',
  description: 'Tools, references and downloads for sustainable living.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
