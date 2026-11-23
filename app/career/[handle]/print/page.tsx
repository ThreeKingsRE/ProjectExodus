import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { auth } from '@/auth'
import { careerQrSvg, loadPortfolio } from '@/lib/career/server'
import { dateRange, monthYear } from '@/lib/career/career'
import PrintBar from './PrintBar'

export const metadata: Metadata = { title: 'Printable portfolio', robots: { index: false } }

type Props = { params: Promise<{ handle: string }>; searchParams: Promise<{ show?: string }> }

export default async function PrintPortfolio({ params, searchParams }: Props) {
  const { handle } = await params
  const session = await auth()
  const data = await loadPortfolio(handle, session?.user?.id)
  if (!data) notFound()
  const hasPinned = data.work.some((w) => w.pinned)
  const show = (await searchParams).show === 'all' || !hasPinned ? 'all' : 'pinned'
  const posts = (show === 'pinned' ? data.work.filter((w) => w.pinned) : data.work.filter((w) => w.visibility !== 'PRIVATE')).slice(0, 24)
  const qr = careerQrSvg(data.profile.handle)

  return (
    <div className="career-print-page min-h-screen bg-[var(--background)] px-3 py-4 sm:py-8">
      <style>{`
        @page { margin: 12mm }
        .career-print img { print-color-adjust: exact; -webkit-print-color-adjust: exact }
        @media print {
          html, body { background: #fff !important }
          .career-print-page { background: #fff !important; padding: 0 !important; min-height: 0 !important }
          .career-print { box-shadow: none !important; margin: 0 !important; max-width: none !important; padding: 0 !important }
          .no-print { display: none !important }
          .career-print article { break-inside: avoid }
        }
      `}</style>
      <PrintBar handle={data.profile.handle} show={show} hasPinned={hasPinned} />
      <div className="career-print mx-auto max-w-[210mm] bg-white p-6 text-black shadow-xl sm:p-10" style={{ colorScheme: 'light' }}>
        <div className="flex items-start gap-4 border-b border-black/15 pb-4">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/55">Work portfolio</p>
            <h1 style={{ fontSize: '1.7rem', lineHeight: 1.15, color: '#000' }} className="font-black">{data.person.name}</h1>
            {data.profile.headline && <p className="text-sm font-semibold">{data.profile.headline}</p>}
            <p className="mt-1 text-xs text-black/65">{[data.profile.serviceArea, data.profile.trades.map((t: string) => `#${t}`).join(' ')].filter(Boolean).join(' · ')}</p>
            <p className="mt-2 text-xs">See every photo: <strong>projxodus.com/career/{data.profile.handle}</strong></p>
          </div>
          <div className="h-24 w-24 shrink-0 [&>svg]:h-full [&>svg]:w-full" aria-label="QR code to the online portfolio" dangerouslySetInnerHTML={{ __html: qr }} />
        </div>

        {posts.length === 0 ? <p className="py-10 text-center text-sm">No work to show yet.</p> : (
          <div className="mt-4 grid grid-cols-2 gap-4">
            {posts.map((p) => {
              const when = dateRange(p.startedOn, p.endedOn) || monthYear(p.photos.find((x) => x.takenAt)?.takenAt ?? null)
              return (
                <article key={p.id} className="overflow-hidden rounded-lg border border-black/15">
                  {p.photos[0] && (
                    <div className={`grid gap-0.5 ${p.photos.length > 1 ? 'grid-cols-2' : ''}`}>
                      {p.photos.slice(0, 2).map((ph) => (
                        <div key={ph.url} className="relative aspect-[4/3] bg-black/5">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={ph.url} alt="" className="h-full w-full object-cover" />
                          {ph.label && <span className="absolute left-1 top-1 rounded bg-black/70 px-1 text-[8px] font-bold uppercase text-white">{ph.label}</span>}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="space-y-1 p-2.5 text-[11px] leading-snug">
                    {p.title && <h2 style={{ fontSize: '0.85rem', lineHeight: 1.25, color: '#000' }} className="font-bold">{p.title}</h2>}
                    {p.story && <p className="line-clamp-4">{p.story}</p>}
                    <p className="text-black/60">{[p.role, when, p.place].filter(Boolean).join(' · ')}</p>
                    {p.people.length > 0 && <p className="text-black/60">With {p.people.map((x) => x.name).join(', ')}</p>}
                    {p.seals.map((s, i) => <p key={i} className="font-semibold text-emerald-800">✓ Vouched by {s.who}{s.what ? `, ${s.what}` : ''}{s.comment ? `: “${s.comment}”` : ''}</p>)}
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
