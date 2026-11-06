import 'server-only'
import type Anthropic from '@anthropic-ai/sdk'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { getCatalog } from '@/lib/products/catalog'
import { getAllModules } from '@/data/modules'
import { glossaryTerms } from '@/data/exodology-glossary'

/**
 * Read-only tools Sage can call to ground answers in the site's own content.
 * Every tool returns compact JSON with on-site links so Sage can point people
 * to real pages instead of inventing them.
 */

const SearchInput = z.object({
  query: z.string().trim().min(1).max(200),
})

const ProductSearchInput = SearchInput.extend({
  category: z.string().trim().max(100).optional(),
  max_price: z.number().positive().max(1_000_000).optional(),
})

type ToolName = 'search_products' | 'search_articles' | 'search_learning'

export const SAGE_TOOLS: Anthropic.Beta.BetaTool[] = [
  {
    name: 'search_products',
    description:
      'Search the Project Exodus sustainable product directory. Returns matching published products with price, category, Exodus sustainability score (0-100, null if unscored), certifications and a link. Use whenever the user asks about buying, comparing or recommending products.',
    input_schema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Keywords, e.g. "solar panel" or "compostable sponge"' },
        category: { type: 'string', description: 'Optional category name or slug to restrict to, e.g. "energy"' },
        max_price: { type: 'number', description: 'Optional maximum price in USD' },
      },
      required: ['query'],
      additionalProperties: false,
    },
    strict: true,
    eager_input_streaming: true,
  },
  {
    name: 'search_articles',
    description:
      'Search published community articles on Project Exodus. Returns titles, excerpts and links. Use for questions where an in-depth article would help.',
    input_schema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Keywords to search for' },
      },
      required: ['query'],
      additionalProperties: false,
    },
    strict: true,
    eager_input_streaming: true,
  },
  {
    name: 'search_learning',
    description:
      'Search Project Exodus learning content: interactive learning modules (by topic) and the Exodology glossary. Returns titles, short descriptions and links. Use when the user wants to learn about a topic or asks what a term means.',
    input_schema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Topic or term, e.g. "composting" or "regenerative agriculture"' },
      },
      required: ['query'],
      additionalProperties: false,
    },
    strict: true,
    eager_input_streaming: true,
  },
]

const terms = (q: string) => q.toLowerCase().split(/\s+/).filter((t) => t.length > 1)

/** Score = number of query terms found in the text (0 = no match). */
const matchScore = (haystack: string, ts: string[]) => {
  const h = haystack.toLowerCase()
  return ts.reduce((n, t) => n + (h.includes(t) ? 1 : 0), 0)
}

const stripHtml = (s: string) => s.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
const clip = (s: string, n: number) => (s.length > n ? `${s.slice(0, n - 1)}…` : s)

async function searchProducts(input: z.infer<typeof ProductSearchInput>) {
  const { products } = await getCatalog()
  const ts = terms(input.query)
  const cat = input.category?.toLowerCase()

  const results = products
    .filter((p) => !cat || p.category.slug === cat || p.category.name.toLowerCase().includes(cat))
    .filter((p) => input.max_price == null || (p.price != null && p.price <= input.max_price))
    .map((p) => ({
      p,
      score: matchScore(
        [p.name, p.description, p.vendor?.name, p.category.name, ...p.tags, ...p.certifications.map((c) => c.name)].join(' '),
        ts
      ),
    }))
    .filter((r) => ts.length === 0 || r.score > 0)
    .sort((a, b) => b.score - a.score || (b.p.score ?? -1) - (a.p.score ?? -1))
    .slice(0, 6)
    .map(({ p }) => ({
      name: p.name,
      url: `/products/${p.slug}`,
      category: p.category.name,
      vendor: p.vendor?.name ?? null,
      price_usd: p.price,
      exodus_score: p.score,
      carbon_saved_kg: p.metrics?.carbonSavings ?? null,
      certifications: p.certifications.map((c) => c.name),
      summary: clip(p.description, 200),
    }))

  return { results, directory_url: '/products', compare_url_hint: '/products/compare?items=<slug>,<slug>' }
}

async function searchArticles(input: z.infer<typeof SearchInput>) {
  const ts = terms(input.query)
  if (ts.length === 0) return { results: [] }

  const rows: Array<{ title: string; slug: string; excerpt: string | null; readTime: number | null }> =
    await prisma.article.findMany({
      where: {
        status: 'PUBLISHED',
        OR: ts.flatMap((t) => [
          { title: { contains: t, mode: 'insensitive' as const } },
          { excerpt: { contains: t, mode: 'insensitive' as const } },
        ]),
      },
      select: { title: true, slug: true, excerpt: true, readTime: true },
      orderBy: { publishedAt: 'desc' },
      take: 20,
    })

  const results = rows
    .map((a) => ({ a, score: matchScore(`${a.title} ${a.excerpt ?? ''}`, ts) }))
    .sort((x, y) => y.score - x.score)
    .slice(0, 5)
    .map(({ a }) => ({
      title: a.title,
      url: `/articles/${a.slug}`,
      excerpt: a.excerpt ? clip(stripHtml(a.excerpt), 200) : null,
      read_minutes: a.readTime,
    }))

  return { results }
}

async function searchLearning(input: z.infer<typeof SearchInput>) {
  const ts = terms(input.query)

  const modules = getAllModules()
    .map((m) => {
      const description = Object.values(m.description)[0] ?? ''
      return {
        m,
        description,
        score: matchScore(`${m.title} ${m.topic} ${m.category} ${description}`, ts),
      }
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(({ m, description }) => ({
      title: m.title,
      topic: m.topic,
      url: `/learn/modules/${m.slug}?topic=${m.topic}`,
      description: clip(stripHtml(description), 200),
      lessons: m.lessons.length,
    }))

  const glossary = glossaryTerms
    .map((g) => ({ g, score: matchScore(`${g.term} ${g.definition}`, ts) + (ts.some((t) => g.term.toLowerCase().includes(t)) ? 2 : 0) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ g }) => ({ term: g.term, definition: clip(g.definition, 300), url: '/exodology/glossary' }))

  return { modules, glossary, learn_hub_url: '/learn' }
}

/**
 * Validate and run one tool call. Inputs are validated here because eager
 * input streaming skips server-side validation and the tolerant parser can
 * yield partial objects. Errors come back as `is_error` tool results.
 */
export async function runSageTool(
  name: string,
  input: unknown
): Promise<{ content: string; isError: boolean }> {
  try {
    let result: unknown
    switch (name as ToolName) {
      case 'search_products':
        result = await searchProducts(ProductSearchInput.parse(input))
        break
      case 'search_articles':
        result = await searchArticles(SearchInput.parse(input))
        break
      case 'search_learning':
        result = await searchLearning(SearchInput.parse(input))
        break
      default:
        return { content: `Unknown tool: ${name}`, isError: true }
    }
    return { content: JSON.stringify(result), isError: false }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { content: `INVALID_INPUT: ${error.issues.map((i) => i.message).join('; ')}`, isError: true }
    }
    console.error(`[Sage] tool ${name} failed:`, error)
    return { content: 'The search is temporarily unavailable.', isError: true }
  }
}
