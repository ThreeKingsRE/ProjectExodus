import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Leaf, Package, ShieldCheck, GitCompareArrows } from 'lucide-react'
import { getCatalog } from '@/lib/products/catalog'
import { ProductDirectory } from '@/components/product/ProductDirectory'

// Rebuild the directory at most every 10 minutes
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Sustainable Product Directory',
  description:
    'Browse vetted sustainable products by category, certification and Exodus sustainability score. Compare carbon savings, materials and lifespan side by side.',
}

async function loadCatalog() {
  try {
    return await getCatalog()
  } catch (error) {
    console.error('Failed to load product catalog:', error)
    return null
  }
}

export default async function ProductsPage() {
  const catalog = await loadCatalog()
  const hasProducts = !!catalog && catalog.products.length > 0

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <section className="pt-16 pb-10 bg-gradient-to-br from-[color-mix(in_srgb,var(--primary)_18%,var(--background))] via-[color-mix(in_srgb,var(--accent)_12%,var(--background))] to-[var(--background)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card)] border-2 border-[var(--border)] text-xs font-black uppercase tracking-wider text-[var(--primary)] mb-4">
              <Leaf className="w-3.5 h-3.5" /> Product directory
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-[var(--foreground)] mb-4 leading-tight">
              Sustainable alternatives, measured.
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] mb-6">
              Every product is scored on carbon, materials, lifespan, repairability and certifications, so you can
              see the impact before you buy.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-[var(--foreground)]">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--primary)]" /> Vetted vendors
              </span>
              <span className="inline-flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[var(--primary)]" /> Exodus score
              </span>
              <span className="inline-flex items-center gap-2">
                <GitCompareArrows className="w-4 h-4 text-[var(--primary)]" /> Side-by-side compare
              </span>
            </div>
          </div>
        </div>
      </section>

      {hasProducts ? (
        // useSearchParams in the directory requires a Suspense boundary
        <Suspense fallback={<div className="container mx-auto px-4 py-16 text-[var(--muted-foreground)]">Loading products…</div>}>
          <ProductDirectory
            products={catalog.products}
            categories={catalog.categories}
            certifications={catalog.certifications}
          />
        </Suspense>
      ) : (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-xl mx-auto text-center rounded-2xl border-2 border-dashed border-[var(--border)] p-10">
            <Package className="w-12 h-12 mx-auto mb-4 text-[var(--muted-foreground)]" />
            <h2 className="text-2xl font-black text-[var(--foreground)] mb-2">
              {catalog ? 'The directory is being stocked' : 'Products are unavailable right now'}
            </h2>
            <p className="text-[var(--muted-foreground)] mb-6">
              {catalog
                ? 'We’re vetting our first products. In the meantime, browse the community marketplace or learn what makes a product sustainable.'
                : 'We couldn’t load the catalog. Please try again in a moment.'}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/marketplace" className="px-5 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] font-bold">
                Community marketplace
              </Link>
              <Link href="/learn" className="px-5 py-2 rounded-lg bg-[var(--card)] border-2 border-[var(--border)] text-[var(--foreground)] font-bold">
                Learning hub
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
