import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Support',
  description: 'Help with your Project Exodus account, orders and learning.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
