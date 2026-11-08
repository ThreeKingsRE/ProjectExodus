import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Exodology',
  description: 'Guided learning paths and lessons for living more independently and sustainably.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
