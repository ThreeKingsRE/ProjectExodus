import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'About',
  description: 'Who we are and why Project Exodus exists: making sustainable living practical, affordable and shared.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
