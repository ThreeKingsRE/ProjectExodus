'use client'

import { useMemo, useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
  Search,
  SlidersHorizontal,
  X,
  Leaf,
  Recycle,
  Sprout,
  Zap,
  Star,
  ExternalLink,
  GitCompareArrows,
  Check,
  Package,
} from 'lucide-react'
import type { CatalogCategory, CatalogCertification, CatalogProduct } from '@/lib/products/catalog'
import { getScoreTier, isAffiliateLink } from '@/lib/products/score'

const MAX_COMPARE = 3
const PAGE_SIZE = 24

type SortKey = 'featured' | 'score' | 'price-asc' | 'price-desc' | 'newest' | 'rating'

const SORT_LABELS: Record<SortKey, string> = {
  featured: 'Featured',
  score: 'Exodus score',
  rating: 'Community rating',
  'price-asc': 'Price: low to high',
  'price-desc': 'Price: high to low',
  newest: 'Newest',
}

const ATTRIBUTES = [
  { key: 'recyclable', label: 'Recyclable', icon: Recycle },
  { key: 'biodegradable', label: 'Biodegradable', icon: Sprout },
  { key: 'renewableEnergy', label: 'Renewable energy', icon: Zap },
] as const
type AttributeKey = (typeof ATTRIBUTES)[number]['key']

const PRICE_BANDS = [
  { key: 'under-25', label: 'Under $25', min: 0, max: 25 },
  { key: '25-100', label: '$25 – $100', min: 25, max: 100 },
  { key: '100-500', label: '$100 – $500', min: 100, max: 500 },
  { key: '500-plus', label: '$500+', min: 500, max: Infinity },
] as const

const MIN_SCORES = [0, 60, 70, 80, 90]

interface Filters {
  q: string
  category: string
  certs: string[]
  attrs: AttributeKey[]
  price: string
  minScore: number
  sort: SortKey
}

function readFilters(params: URLSearchParams): Filters {
  const list = (key: string) => (params.get(key) || '').split(',').filter(Boolean)
  const sort = params.get('sort') as SortKey | null
  return {
    q: params.get('q') || '',
    category: params.get('category') || '',
    certs: list('certs'),
    attrs: list('attrs').filter((a): a is AttributeKey => ATTRIBUTES.some((x) => x.key === a)),
    price: params.get('price') || '',
    minScore: Number(params.get('minScore')) || 0,
    sort: sort && sort in SORT_LABELS ? sort : 'featured',
  }
}

function writeFilters(f: Filters): string {
  const p = new URLSearchParams()
  if (f.q) p.set('q', f.q)
  if (f.category) p.set('category', f.category)
  if (f.certs.length) p.set('certs', f.certs.join(','))
  if (f.attrs.length) p.set('attrs', f.attrs.join(','))
  if (f.price) p.set('price', f.price)
  if (f.minScore) p.set('minScore', String(f.minScore))
  if (f.sort !== 'featured') p.set('sort', f.sort)
  return p.toString()
}

function applyFilters(products: CatalogProduct[], f: Filters): CatalogProduct[] {
  const terms = f.q.toLowerCase().split(/\s+/).filter(Boolean)
  const band = PRICE_BANDS.find((b) => b.key === f.price)

  const result = products.filter((p) => {
    if (f.category && p.category.slug !== f.category) return false
    if (f.minScore && (p.score ?? -1) < f.minScore) return false
    if (band && (p.price == null || p.price < band.min || p.price >= band.max)) return false
    if (f.certs.length && !f.certs.every((c) => p.certifications.some((pc) => pc.slug === c))) return false
    if (f.attrs.length && !f.attrs.every((a) => p.metrics?.[a])) return false
    if (terms.length) {
      const haystack = [p.name, p.description, p.vendor?.name, p.category.name, ...p.tags]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
      if (!terms.every((t) => haystack.includes(t))) return false
    }
    return true
  })

  // Nulls always sort last
  const byNum = (get: (p: CatalogProduct) => number | null, dir: 1 | -1) =>
    (a: CatalogProduct, b: CatalogProduct) => {
      const av = get(a)
      const bv = get(b)
      if (av == null && bv == null) return 0
      if (av == null) return 1
      if (bv == null) return -1
      return (av - bv) * dir
    }

  switch (f.sort) {
    case 'score':
      return result.sort(byNum((p) => p.score, -1))
    case 'rating':
      return result.sort(byNum((p) => p.rating?.average ?? null, -1))
    case 'price-asc':
      return result.sort(byNum((p) => p.price, 1))
    case 'price-desc':
      return result.sort(byNum((p) => p.price, -1))
    case 'newest':
      return result.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    default:
      return result // server order: featured first, then newest
  }
}

interface ProductDirectoryProps {
  products: CatalogProduct[]
  categories: CatalogCategory[]
  certifications: CatalogCertification[]
}

export function ProductDirectory({ products, categories, certifications }: ProductDirectoryProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const filters = useMemo(() => readFilters(new URLSearchParams(searchParams.toString())), [searchParams])
  const [query, setQuery] = useState(filters.q)
  const [showFilters, setShowFilters] = useState(false)
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [compare, setCompare] = useState<string[]>([])

  const update = useCallback(
    (patch: Partial<Filters>) => {
      // Read the live URL rather than the rendered `filters`, so rapid successive
      // changes (before the router re-renders) don't overwrite each other.
      const current = readFilters(new URLSearchParams(window.location.search))
      const qs = writeFilters({ ...current, ...patch })
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
      setVisible(PAGE_SIZE)
    },
    [pathname, router]
  )

  // Debounce typing into the URL
  useEffect(() => {
    if (query === filters.q) return
    const t = setTimeout(() => update({ q: query.trim() }), 250)
    return () => clearTimeout(t)
  }, [query, filters.q, update])

  const results = useMemo(() => applyFilters([...products], filters), [products, filters])

  const activeCount =
    (filters.category ? 1 : 0) +
    filters.certs.length +
    filters.attrs.length +
    (filters.price ? 1 : 0) +
    (filters.minScore ? 1 : 0)

  const toggleIn = <T,>(list: T[], item: T) =>
    list.includes(item) ? list.filter((x) => x !== item) : [...list, item]

  const toggleCompare = (slug: string) =>
    setCompare((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : prev.length >= MAX_COMPARE ? prev : [...prev, slug]
    )

  const clearAll = () => {
    setQuery('')
    router.replace(pathname, { scroll: false })
  }

  const filterPanel = (
    <div className="space-y-6">
      <FilterGroup title="Exodus score">
        <div className="flex flex-wrap gap-2">
          {MIN_SCORES.map((s) => (
            <Chip key={s} active={filters.minScore === s} onClick={() => update({ minScore: s })}>
              {s === 0 ? 'Any' : `${s}+`}
            </Chip>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Price">
        <div className="flex flex-wrap gap-2">
          {PRICE_BANDS.map((b) => (
            <Chip
              key={b.key}
              active={filters.price === b.key}
              onClick={() => update({ price: filters.price === b.key ? '' : b.key })}
            >
              {b.label}
            </Chip>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Attributes">
        <div className="space-y-2">
          {ATTRIBUTES.map(({ key, label, icon: Icon }) => (
            <CheckRow
              key={key}
              checked={filters.attrs.includes(key)}
              onChange={() => update({ attrs: toggleIn(filters.attrs, key) })}
            >
              <Icon className="w-4 h-4 text-[var(--primary)]" />
              {label}
            </CheckRow>
          ))}
        </div>
      </FilterGroup>

      {certifications.length > 0 && (
        <FilterGroup title="Certifications">
          <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
            {certifications.map((c) => (
              <CheckRow
                key={c.slug}
                checked={filters.certs.includes(c.slug)}
                onChange={() => update({ certs: toggleIn(filters.certs, c.slug) })}
              >
                <span className="flex-1">{c.name}</span>
                <span className="text-xs text-[var(--muted-foreground)]">{c.count}</span>
              </CheckRow>
            ))}
          </div>
        </FilterGroup>
      )}
    </div>
  )

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search + sort bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, brands, materials…"
            aria-label="Search products"
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--card)] border-2 border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--primary)]"
          />
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowFilters(true)}
            className="lg:hidden inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[var(--card)] border-2 border-[var(--border)] font-bold text-[var(--foreground)]"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters{activeCount > 0 && ` (${activeCount})`}
          </button>
          <select
            value={filters.sort}
            onChange={(e) => update({ sort: e.target.value as SortKey })}
            aria-label="Sort products"
            className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-[var(--card)] border-2 border-[var(--border)] font-bold text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)]"
          >
            {(Object.keys(SORT_LABELS) as SortKey[]).map((k) => (
              <option key={k} value={k}>
                {SORT_LABELS[k]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Category chips */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
        <Chip active={!filters.category} onClick={() => update({ category: '' })}>
          All <span className="opacity-60">{products.length}</span>
        </Chip>
        {categories.map((c) => (
          <Chip
            key={c.slug}
            active={filters.category === c.slug}
            onClick={() => update({ category: filters.category === c.slug ? '' : c.slug })}
          >
            {c.name} <span className="opacity-60">{c.count}</span>
          </Chip>
        ))}
      </div>

      <div className="flex gap-8">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 p-5 rounded-2xl bg-[var(--card)] border-2 border-[var(--border)]">
            {filterPanel}
          </div>
        </aside>

        {/* Results */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-4 text-sm">
            <p className="font-bold text-[var(--muted-foreground)]" aria-live="polite">
              {results.length} {results.length === 1 ? 'product' : 'products'}
            </p>
            {(activeCount > 0 || filters.q) && (
              <button onClick={clearAll} className="font-bold text-[var(--primary)] hover:underline">
                Clear all
              </button>
            )}
          </div>

          {results.length === 0 ? (
            <div className="text-center py-20 rounded-2xl border-2 border-dashed border-[var(--border)]">
              <Package className="w-12 h-12 mx-auto mb-4 text-[var(--muted-foreground)]" />
              <p className="text-lg font-bold text-[var(--foreground)] mb-2">No products match those filters</p>
              <p className="text-[var(--muted-foreground)] mb-6">Try removing a filter or searching for something broader.</p>
              <button
                onClick={clearAll}
                className="px-5 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] font-bold"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {results.slice(0, visible).map((p) => (
                  <DirectoryCard
                    key={p.id}
                    product={p}
                    comparing={compare.includes(p.slug)}
                    compareDisabled={!compare.includes(p.slug) && compare.length >= MAX_COMPARE}
                    onToggleCompare={() => toggleCompare(p.slug)}
                  />
                ))}
              </div>
              {visible < results.length && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    className="px-6 py-3 rounded-xl bg-[var(--card)] border-2 border-[var(--border)] font-bold text-[var(--foreground)] hover:border-[var(--primary)]"
                  >
                    Show more ({results.length - visible} left)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      {showFilters && (
        <div className="lg:hidden fixed inset-0 z-[150] flex" role="dialog" aria-modal="true" aria-label="Filters">
          <button className="flex-1 bg-black/50" aria-label="Close filters" onClick={() => setShowFilters(false)} />
          <div className="w-[85%] max-w-sm h-full overflow-y-auto bg-[var(--background)] p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <p role="heading" aria-level={2} className="text-lg font-black text-[var(--foreground)]">Filters</p>
              <button onClick={() => setShowFilters(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-[var(--foreground)]" />
              </button>
            </div>
            {filterPanel}
            <button
              onClick={() => setShowFilters(false)}
              className="mt-8 w-full py-3 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-bold"
            >
              Show {results.length} products
            </button>
          </div>
        </div>
      )}

      {/* Compare tray. Sits above the floating Sage button (bottom-right) so they never overlap */}
      {compare.length > 0 && (
        <div className="fixed bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-2xl">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[var(--card)] border-2 border-[var(--primary)] shadow-2xl">
            <GitCompareArrows className="w-5 h-5 text-[var(--primary)] flex-shrink-0 hidden sm:block" />
            <div className="flex-1 min-w-0 flex gap-2 overflow-x-auto">
              {compare.map((slug) => {
                const p = products.find((x) => x.slug === slug)
                return (
                  <span
                    key={slug}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-[var(--muted)] text-xs font-bold text-[var(--foreground)] whitespace-nowrap"
                  >
                    <span className="max-w-[9rem] truncate">{p?.name}</span>
                    <button onClick={() => toggleCompare(slug)} aria-label={`Remove ${p?.name} from compare`}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )
              })}
            </div>
            <Link
              href={`/products/compare?items=${compare.join(',')}`}
              aria-disabled={compare.length < 2}
              className={`px-4 py-2 rounded-xl font-bold text-sm whitespace-nowrap ${
                compare.length < 2
                  ? 'bg-[var(--muted)] text-[var(--muted-foreground)] pointer-events-none'
                  : 'bg-[var(--primary)] text-[var(--primary-foreground)]'
              }`}
            >
              {/* span carries the color: the global `a` rule overrides utilities on the link */}
              <span className={compare.length < 2 ? 'text-[var(--muted-foreground)]' : 'text-[var(--primary-foreground)]'}>
                {compare.length < 2 ? 'Pick 2+' : `Compare ${compare.length}`}
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

function DirectoryCard({
  product: p,
  comparing,
  compareDisabled,
  onToggleCompare,
}: {
  product: CatalogProduct
  comparing: boolean
  compareDisabled: boolean
  onToggleCompare: () => void
}) {
  const tier = p.score != null ? getScoreTier(p.score) : null
  const partner = isAffiliateLink(p.purchaseLink)
  const [imageFailed, setImageFailed] = useState(false)
  const safeImage = !imageFailed && p.image?.url.startsWith('https://') ? p.image : null

  return (
    <article className="group relative flex flex-col rounded-2xl bg-[var(--card)] border-2 border-[var(--border)] hover:border-[var(--primary)] transition-colors overflow-hidden">
      <Link href={`/products/${p.slug}`} className="flex flex-col flex-1">
        <div className="relative aspect-[4/3] bg-[var(--muted)] overflow-hidden">
          {safeImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={safeImage.url}
              alt={safeImage.alt || p.name}
              loading="lazy"
              onError={() => setImageFailed(true)}
              // Images that failed before hydration never fire onError
              ref={(el) => {
                if (el && el.complete && el.naturalWidth === 0) setImageFailed(true)
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Leaf className="w-12 h-12 text-[var(--primary)] opacity-30" />
            </div>
          )}
          <div className="absolute top-3 left-3 flex gap-2">
            {p.featured && (
              <span className="px-2 py-0.5 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] text-[10px] font-black uppercase tracking-wide">
                Featured
              </span>
            )}
            {partner && (
              <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-black uppercase tracking-wide">
                Partner
              </span>
            )}
          </div>
          {tier && (
            <div
              className={`absolute top-3 right-3 w-12 h-12 rounded-full ${tier.bgColor} text-white flex flex-col items-center justify-center shadow-lg`}
              title={`Exodus score: ${p.score} (${tier.label})`}
            >
              <span className="text-base font-black leading-none">{p.score}</span>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-[var(--muted-foreground)] mb-1">
            {p.category.name}
            {p.vendor && <> · <span className="text-[var(--primary)]">{p.vendor.name}</span></>}
          </p>
          <p role="heading" aria-level={3} className="font-black text-[var(--foreground)] leading-snug mb-2 line-clamp-2">
            {p.name}
          </p>
          <p className="text-sm text-[var(--muted-foreground)] line-clamp-2 mb-3">{p.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {p.metrics?.carbonSavings ? (
              <MetricPill icon={Leaf}>{Math.round(p.metrics.carbonSavings)} kg CO₂ saved</MetricPill>
            ) : null}
            {p.metrics?.recyclable && <MetricPill icon={Recycle}>Recyclable</MetricPill>}
            {p.metrics?.biodegradable && <MetricPill icon={Sprout}>Biodegradable</MetricPill>}
            {p.certifications.slice(0, 2).map((c) => (
              <MetricPill key={c.slug}>{c.name}</MetricPill>
            ))}
          </div>

          <div className="mt-auto flex items-end justify-between">
            <span className="text-xl font-black text-[var(--foreground)]">
              {p.price != null ? `$${p.price.toFixed(2)}` : <span className="text-sm text-[var(--muted-foreground)]">See pricing</span>}
            </span>
            {p.rating && (
              <span className="inline-flex items-center gap-1 text-sm font-bold text-[var(--foreground)]">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                {p.rating.average.toFixed(1)}
                <span className="text-[var(--muted-foreground)] font-medium">({p.rating.count})</span>
              </span>
            )}
            {!p.rating && partner && <ExternalLink className="w-4 h-4 text-[var(--muted-foreground)]" />}
          </div>
        </div>
      </Link>

      <button
        onClick={onToggleCompare}
        disabled={compareDisabled}
        aria-pressed={comparing}
        className={`flex items-center justify-center gap-2 py-2 text-xs font-bold border-t-2 border-[var(--border)] transition-colors ${
          comparing
            ? 'bg-[var(--primary)] text-[var(--primary-foreground)]'
            : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] disabled:opacity-40 disabled:cursor-not-allowed'
        }`}
      >
        {comparing ? <Check className="w-3.5 h-3.5" /> : <GitCompareArrows className="w-3.5 h-3.5" />}
        {comparing ? 'Comparing' : compareDisabled ? `Compare (max ${MAX_COMPARE})` : 'Compare'}
      </button>
    </article>
  )
}

function MetricPill({ icon: Icon, children }: { icon?: typeof Leaf; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[var(--muted)] text-[11px] font-bold text-[var(--foreground)]">
      {Icon && <Icon className="w-3 h-3 text-[var(--primary)]" />}
      {children}
    </span>
  )
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`px-3 py-1.5 rounded-full text-sm font-bold whitespace-nowrap border-2 transition-colors ${
        active
          ? 'bg-[var(--primary)] border-[var(--primary)] text-[var(--primary-foreground)]'
          : 'bg-[var(--card)] border-[var(--border)] text-[var(--foreground)] hover:border-[var(--primary)]'
      }`}
    >
      {children}
    </button>
  )
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      {/* Not an <h3>: global h3 styles in globals.css would override these sizes */}
      <p role="heading" aria-level={3} className="text-xs font-black uppercase tracking-wider text-[var(--muted-foreground)] mb-3">
        {title}
      </p>
      {children}
    </div>
  )
}

function CheckRow({
  checked,
  onChange,
  children,
}: {
  checked: boolean
  onChange: () => void
  children: React.ReactNode
}) {
  return (
    <label className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)] cursor-pointer">
      <input type="checkbox" checked={checked} onChange={onChange} className="w-4 h-4 accent-[var(--primary)]" />
      {children}
    </label>
  )
}
