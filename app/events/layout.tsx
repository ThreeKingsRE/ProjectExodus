import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Events',
  description: 'Workshops, meetups and online events on sustainable living.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
