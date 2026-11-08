import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Vendors',
  description: 'Brands and makers selling sustainable products on Project Exodus.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
