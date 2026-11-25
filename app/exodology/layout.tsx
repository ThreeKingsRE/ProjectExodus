import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Exodology',
  description: 'Exodology is the study and practice of designing ethical exits from systems that no longer serve people or the planet. Free learning paths, lessons and certifications on Projxodus.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
