import Link from 'next/link'
import ProjectPage from '../../[slug]/page'

export default function RiverknollCommunity() {
  return <>
    <div className="border-b border-[var(--border)] bg-[var(--card)] px-6 py-3 text-sm">
      <Link href="/community/projects/riverknoll-renewal" className="font-bold text-[var(--primary)]">← Riverknoll Renewal · current proposal, assumptions, and materials</Link>
    </div>
    <ProjectPage params={Promise.resolve({ slug: 'riverknoll-renewal' })} />
  </>
}
