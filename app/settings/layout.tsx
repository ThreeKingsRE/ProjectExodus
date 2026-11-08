import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Settings',
  noIndex: true,
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
