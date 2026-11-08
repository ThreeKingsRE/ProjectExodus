import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service',
  description: 'The terms that apply when you use Project Exodus.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
