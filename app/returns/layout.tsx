import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Returns',
  description: 'Returns policy for purchases through Project Exodus.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
