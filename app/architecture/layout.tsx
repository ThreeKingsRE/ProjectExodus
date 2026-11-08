import type { Metadata } from 'next'
import { generateMetadata as pageMetadata } from '@/lib/metadata'

export const metadata: Metadata = pageMetadata({
  title: 'Architecture',
  description: 'Learn architecture through 239 technical drawings: columns, arches, vaults, façades and more, with games, quizzes and comparisons.',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
