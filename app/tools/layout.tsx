import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Tools',
  description: 'Free calculators for your carbon footprint, water use and more.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
