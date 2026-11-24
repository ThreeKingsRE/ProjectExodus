import type { Metadata } from 'next'
import MeetingsHome from '@/components/meetings/MeetingsHome'

export const metadata: Metadata = {
  title: 'Meetings',
  description: 'Government meetings in one place: schedules, how to join, and the agendas, minutes and recordings after. Search any state, county, city or town.',
}

export default function MeetingsPage() {
  return <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"><MeetingsHome /></div>
}
