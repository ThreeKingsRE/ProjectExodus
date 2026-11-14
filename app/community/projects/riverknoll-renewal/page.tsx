import type { Metadata } from 'next'
import RiverknollInitiative from '@/components/projects/riverknoll/RiverknollInitiative'
import plan from '@/data/riverknoll-renewal.json'

export const metadata: Metadata = {
  title: 'Riverknoll Renewal | Project Exodus',
  description: plan.summary,
}

export default function RiverknollPage() {
  return <RiverknollInitiative />
}
