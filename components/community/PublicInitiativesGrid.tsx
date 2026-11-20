import Link from 'next/link'
import { ArrowRight, Users } from 'lucide-react'
import { prisma } from '@/lib/db'
import { publicProjectFields } from '@/lib/projects/public-view'

/** Public initiatives anyone can browse without an account. */
export async function PublicInitiativesGrid() {
  const rows = await prisma.project.findMany({
    where: { visibility: 'PUBLIC' },
    orderBy: { updatedAt: 'desc' },
    take: 60,
    select: {
      id: true, name: true, slug: true, description: true, goal: true,
      status: true, coverImage: true, visibility: true, layoutConfig: true,
      creator: { select: { id: true, name: true } },
      _count: { select: { members: true } },
    },
  }).catch(() => [])
  // publicProjectFields drops owner-hidden initiatives and never exposes private fields
  type PublicFields = NonNullable<ReturnType<typeof publicProjectFields>>
  const projects: PublicFields[] = (rows as Parameters<typeof publicProjectFields>[0][]).map(publicProjectFields).filter((p): p is PublicFields => p !== null)

  return (
    <section aria-labelledby="public-initiatives" className="mx-auto max-w-6xl scroll-mt-20 px-4 pt-6 sm:px-6 sm:pt-12">
      <div className="mb-3 sm:mb-5 flex items-end justify-between gap-2">
        <h2 id="public-initiatives" style={{ fontSize: 'clamp(1.35rem, 4vw, 1.9rem)', lineHeight: 1.2 }} className="font-black">Initiatives</h2>
        <p className="text-right text-[10px] sm:text-sm text-[var(--muted-foreground)]">Open to everyone · no account needed to read</p>
      </div>
      {projects.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-[var(--border)] p-8 text-center text-[var(--muted-foreground)]">No public initiatives yet.</p>
      ) : (
        <ul className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3">
          {projects.map((p: PublicFields) => (
            <li key={p.id} className="min-w-0">
              <Link href={`/community/projects/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-shadow hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--primary)]">
                {p.coverImage
                  // eslint-disable-next-line @next/next/no-img-element
                  ? <img src={p.coverImage} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" />
                  : <div aria-hidden className="aspect-[16/9] w-full bg-gradient-to-br from-[color-mix(in_srgb,var(--primary)_25%,var(--card))] to-[color-mix(in_srgb,var(--accent)_20%,var(--card))]" />}
                <div className="flex flex-1 flex-col gap-1 sm:gap-2 p-2.5 sm:p-4">
                  <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--primary)]">{p.status.toLowerCase().replaceAll('_', ' ')}</span>
                  <h3 style={{ fontSize: 'clamp(0.85rem, 2.6vw, 1.1rem)', lineHeight: 1.3 }} className="font-bold text-[var(--foreground)] group-hover:text-[var(--primary)]">{p.name}</h3>
                  <p className="line-clamp-3 text-[11px] leading-snug sm:text-sm sm:leading-normal text-[var(--muted-foreground)]">{p.tagline || p.description}</p>
                  <div className="mt-auto flex items-center justify-between gap-1 pt-1 sm:pt-2 text-[10px] sm:text-xs text-[var(--muted-foreground)]">
                    <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" />{p.participants} {p.participants === 1 ? 'participant' : 'participants'}</span>
                    <span className="inline-flex items-center gap-1 font-bold text-[var(--primary)]">Read <ArrowRight className="h-3.5 w-3.5" /></span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
