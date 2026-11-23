import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/auth'
import CareerDashboard from './CareerDashboard'

export const metadata: Metadata = { title: 'My Career', robots: { index: false } }

export default async function MyCareerPage() {
  const session = await auth()
  if (!session?.user?.id) redirect('/auth/signin?callbackUrl=/my/career')
  return <CareerDashboard />
}
