import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Videos',
  description: 'Video guides on sustainable living, building and energy.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
