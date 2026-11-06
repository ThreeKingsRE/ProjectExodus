import 'server-only'
import type { Prisma } from '@prisma/client'
import { prisma } from '@/lib/db'
import { computeSustainabilityScore } from './score'

/**
 * Server-side product catalog queries. Pages call these directly instead of
 * fetching our own API over HTTP. Everything returned is plain JSON
 * (Decimals converted to numbers) so it can be passed to client components.
 */

export interface CatalogProduct {
  id: string
  name: string
  slug: string
  description: string
  price: number | null
  purchaseLink: string | null
  featured: boolean
  createdAt: string
  category: { id: string; name: string; slug: string }
  vendor: { name: string; slug: string } | null
  image: { url: string; alt: string | null } | null
  score: number | null
  metrics: {
    carbonFootprint: number | null
    carbonSavings: number | null
    waterSavings: number | null
    recycledContent: number | null
    recyclable: boolean
    biodegradable: boolean
    renewableEnergy: boolean
    energyEfficiencyRating: string | null
    lifespanYears: number | null
    repairability: number | null
  } | null
  certifications: { slug: string; name: string }[]
  tags: string[]
  rating: { average: number; count: number } | null
  specifications: Record<string, unknown> | null
}

export interface CatalogCategory {
  id: string
  name: string
  slug: string
  count: number
}

export interface CatalogCertification {
  slug: string
  name: string
  count: number
}

const num = (v: unknown): number | null =>
  v === null || v === undefined ? null : Number(v)

const productInclude = {
  category: { select: { id: true, name: true, slug: true } },
  vendor: { select: { name: true, slug: true } },
  images: { orderBy: { order: 'asc' as const }, take: 1, select: { url: true, alt: true } },
  sustainabilityMetric: true,
  certifications: { include: { certification: { select: { slug: true, name: true } } } },
  tags: { include: { tag: { select: { name: true } } } },
} satisfies Prisma.ProductInclude

type ProductRow = Prisma.ProductGetPayload<{ include: typeof productInclude }>

function toCatalogProduct(
  p: ProductRow,
  ratings: Map<string, { average: number; count: number }>
): CatalogProduct {
  const m = p.sustainabilityMetric
  const metrics = m
    ? {
        carbonFootprint: num(m.carbonFootprint),
        carbonSavings: num(m.carbonSavings),
        waterSavings: num(m.waterSavings),
        recycledContent: m.recycledContent,
        recyclable: m.recyclable,
        biodegradable: m.biodegradable,
        renewableEnergy: m.renewableEnergy,
        energyEfficiencyRating: m.energyEfficiencyRating,
        lifespanYears: m.lifespanYears,
        repairability: m.repairability,
      }
    : null

  const certifications = p.certifications.map((c) => c.certification)

  return {
    id: p.id,
    name: p.name,
    slug: p.slug,
    description: p.description,
    price: num(p.price),
    purchaseLink: p.purchaseLink,
    featured: p.featured,
    createdAt: p.createdAt.toISOString(),
    category: p.category,
    vendor: p.vendor,
    image: p.images[0] ?? null,
    score: computeSustainabilityScore(
      m ? { ...metrics, sustainabilityScore: m.sustainabilityScore } : null,
      certifications.length
    ),
    metrics,
    certifications,
    tags: p.tags.map((t) => t.tag.name),
    rating: ratings.get(p.id) ?? null,
    specifications:
      p.specifications && typeof p.specifications === 'object' && !Array.isArray(p.specifications)
        ? (p.specifications as Record<string, unknown>)
        : null,
  }
}

async function getRatings(productIds: string[]) {
  const map = new Map<string, { average: number; count: number }>()
  if (productIds.length === 0) return map
  const rows: Array<{
    productId: string
    _avg: { rating: number | null }
    _count: { _all: number }
  }> = await prisma.review.groupBy({
    by: ['productId'],
    where: { productId: { in: productIds } },
    _avg: { rating: true },
    _count: { _all: true },
  })
  for (const r of rows) {
    if (r._count._all > 0 && r._avg.rating != null) {
      map.set(r.productId, { average: r._avg.rating, count: r._count._all })
    }
  }
  return map
}

/** All published products plus facet data for the directory. */
export async function getCatalog(): Promise<{
  products: CatalogProduct[]
  categories: CatalogCategory[]
  certifications: CatalogCertification[]
}> {
  const rows: ProductRow[] = await prisma.product.findMany({
    where: { status: 'PUBLISHED' },
    include: productInclude,
    orderBy: [{ featured: 'desc' }, { publishedAt: 'desc' }, { createdAt: 'desc' }],
    // The directory filters client-side; revisit with server-side paging past this
    take: 500,
  })

  const ratings = await getRatings(rows.map((r) => r.id))
  const products = rows.map((r) => toCatalogProduct(r, ratings))

  const categoryMap = new Map<string, CatalogCategory>()
  const certMap = new Map<string, CatalogCertification>()
  for (const p of products) {
    const c = categoryMap.get(p.category.slug)
    if (c) c.count++
    else categoryMap.set(p.category.slug, { ...p.category, count: 1 })

    for (const cert of p.certifications) {
      const e = certMap.get(cert.slug)
      if (e) e.count++
      else certMap.set(cert.slug, { ...cert, count: 1 })
    }
  }

  return {
    products,
    categories: [...categoryMap.values()].sort((a, b) => b.count - a.count),
    certifications: [...certMap.values()].sort((a, b) => b.count - a.count),
  }
}

/** Published products by slug, preserving the requested order. */
export async function getProductsBySlugs(slugs: string[]): Promise<CatalogProduct[]> {
  if (slugs.length === 0) return []
  const rows: ProductRow[] = await prisma.product.findMany({
    where: { status: 'PUBLISHED', slug: { in: slugs } },
    include: productInclude,
  })
  const ratings = await getRatings(rows.map((r) => r.id))
  const bySlug = new Map(rows.map((r) => [r.slug, toCatalogProduct(r, ratings)]))
  return slugs.map((s) => bySlug.get(s)).filter((p): p is CatalogProduct => !!p)
}
