import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Check, Minus, Leaf, ExternalLink, Star } from 'lucide-react'
import { getProductsBySlugs, type CatalogProduct } from '@/lib/products/catalog'
import { getScoreTier } from '@/lib/products/score'

export const metadata: Metadata = {
  title: 'Compare Products',
  description: 'Compare sustainable products side by side: Exodus score, carbon, materials, lifespan and certifications.',
  robots: { index: false },
}

const MAX_ITEMS = 3

type Row = {
  label: string
  value: (p: CatalogProduct) => React.ReactNode
  /** Numeric value used to highlight the best product in the row */
  best?: { get: (p: CatalogProduct) => number | null | undefined; higherIsBetter: boolean }
}

const yesNo = (v: boolean | undefined) =>
  v ? <Check className="w-5 h-5 text-emerald-500 inline" aria-label="Yes" /> : <Minus className="w-5 h-5 text-[var(--muted-foreground)] inline" aria-label="No" />

const orDash = (v: React.ReactNode) => (v === null || v === undefined || v === '' ? <span className="text-[var(--muted-foreground)]">—</span> : v)

const ROWS: Row[] = [
  {
    label: 'Exodus score',
    value: (p) =>
      p.score != null ? (
        <span className={`font-black ${getScoreTier(p.score).color}`}>
          {p.score} <span className="text-xs">{getScoreTier(p.score).label}</span>
        </span>
      ) : (
        orDash(null)
      ),
    best: { get: (p) => p.score, higherIsBetter: true },
  },
  {
    label: 'Price',
    value: (p) => orDash(p.price != null ? `$${p.price.toFixed(2)}` : null),
    best: { get: (p) => p.price, higherIsBetter: false },
  },
  {
    label: 'Community rating',
    value: (p) =>
      p.rating ? (
        <span className="inline-flex items-center gap-1">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {p.rating.average.toFixed(1)} ({p.rating.count})
        </span>
      ) : (
        orDash(null)
      ),
    best: { get: (p) => p.rating?.average, higherIsBetter: true },
  },
  {
    label: 'Carbon saved vs conventional',
    value: (p) => orDash(p.metrics?.carbonSavings != null ? `${p.metrics.carbonSavings} kg CO₂e` : null),
    best: { get: (p) => p.metrics?.carbonSavings, higherIsBetter: true },
  },
  {
    label: 'Carbon footprint',
    value: (p) => orDash(p.metrics?.carbonFootprint != null ? `${p.metrics.carbonFootprint} kg CO₂e` : null),
    best: { get: (p) => p.metrics?.carbonFootprint, higherIsBetter: false },
  },
  {
    label: 'Water saved',
    value: (p) => orDash(p.metrics?.waterSavings != null ? `${p.metrics.waterSavings} L` : null),
    best: { get: (p) => p.metrics?.waterSavings, higherIsBetter: true },
  },
  {
    label: 'Recycled content',
    value: (p) => orDash(p.metrics?.recycledContent != null ? `${p.metrics.recycledContent}%` : null),
    best: { get: (p) => p.metrics?.recycledContent, higherIsBetter: true },
  },
  {
    label: 'Expected lifespan',
    value: (p) => orDash(p.metrics?.lifespanYears != null ? `${p.metrics.lifespanYears} yrs` : null),
    best: { get: (p) => p.metrics?.lifespanYears, higherIsBetter: true },
  },
  {
    label: 'Repairability',
    value: (p) => orDash(p.metrics?.repairability != null ? `${p.metrics.repairability}/10` : null),
    best: { get: (p) => p.metrics?.repairability, higherIsBetter: true },
  },
  { label: 'Energy rating', value: (p) => orDash(p.metrics?.energyEfficiencyRating) },
  { label: 'Recyclable', value: (p) => yesNo(p.metrics?.recyclable) },
  { label: 'Biodegradable', value: (p) => yesNo(p.metrics?.biodegradable) },
  { label: 'Renewable energy', value: (p) => yesNo(p.metrics?.renewableEnergy) },
  {
    label: 'Certifications',
    value: (p) =>
      p.certifications.length ? (
        <ul className="space-y-1">
          {p.certifications.map((c) => (
            <li key={c.slug}>{c.name}</li>
          ))}
        </ul>
      ) : (
        orDash(null)
      ),
  },
  { label: 'Category', value: (p) => p.category.name },
  { label: 'Vendor', value: (p) => orDash(p.vendor?.name) },
]

function bestIndex(products: CatalogProduct[], best: NonNullable<Row['best']>): number | null {
  let idx: number | null = null
  let bestVal: number | null = null
  let distinct = false
  products.forEach((p, i) => {
    const v = best.get(p)
    if (v == null) return
    if (bestVal !== null && v !== bestVal) distinct = true
    if (bestVal === null || (best.higherIsBetter ? v > bestVal : v < bestVal)) {
      bestVal = v
      idx = i
    }
  })
  // Only highlight when there's a real difference between at least two values
  return distinct ? idx : null
}

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{ items?: string }>
}) {
  const { items } = await searchParams
  const slugs = [...new Set((items || '').split(',').map((s) => s.trim()).filter(Boolean))].slice(0, MAX_ITEMS)

  let products: CatalogProduct[] = []
  try {
    products = await getProductsBySlugs(slugs)
  } catch (error) {
    console.error('Failed to load products for comparison:', error)
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to directory
        </Link>
        <h1 className="text-3xl sm:text-4xl font-black text-[var(--foreground)] mb-8">Compare products</h1>

        {products.length < 2 ? (
          <div className="rounded-2xl border-2 border-dashed border-[var(--border)] p-10 text-center">
            <p className="text-lg font-bold text-[var(--foreground)] mb-2">Pick at least two products to compare</p>
            <p className="text-[var(--muted-foreground)] mb-6">
              Use the Compare button on any product in the directory.
            </p>
            <Link href="/products" className="px-5 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] font-bold">
              Browse products
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border-2 border-[var(--border)] bg-[var(--card)]">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--border)]">
                  <th className="w-44 p-4" />
                  {products.map((p) => (
                    <th key={p.id} scope="col" className="p-4 text-left align-top">
                      <div className="aspect-[4/3] rounded-xl bg-[var(--muted)] overflow-hidden mb-3 flex items-center justify-center">
                        {p.image?.url.startsWith('https://') ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={p.image.url} alt={p.image.alt || p.name} className="w-full h-full object-cover" />
                        ) : (
                          <Leaf className="w-10 h-10 text-[var(--primary)] opacity-30" />
                        )}
                      </div>
                      <Link href={`/products/${p.slug}`} className="block font-black hover:underline">
                        {p.name}
                      </Link>
                      {p.purchaseLink && (
                        <a
                          href={p.purchaseLink}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="mt-1 inline-flex items-center gap-1 text-xs font-bold hover:underline"
                        >
                          View at vendor <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => {
                  const winner = row.best ? bestIndex(products, row.best) : null
                  return (
                    <tr key={row.label} className="border-b border-[var(--border)] last:border-0">
                      <th scope="row" className="p-4 text-left font-bold text-[var(--muted-foreground)] align-top">
                        {row.label}
                      </th>
                      {products.map((p, i) => (
                        <td
                          key={p.id}
                          className={`p-4 align-top text-[var(--foreground)] ${
                            winner === i ? 'bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] font-bold' : ''
                          }`}
                        >
                          {row.value(p)}
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
