// "In the news" on Current Events: real headlines from established climate and
// clean-energy newsrooms, read from their public RSS feeds. Cached for an hour,
// so the list updates on its own without slowing pages down. Any feed that
// fails is skipped; if all fail, the page shows a built-in list instead.

export interface NewsItem { title: string; url: string; source: string; publishedAt: string | null }

export const NEWS_FEEDS: { source: string; url: string }[] = [
  { source: 'Canary Media', url: 'https://www.canarymedia.com/rss.rss' },
  { source: 'Inside Climate News', url: 'https://insideclimatenews.org/feed/' },
  { source: 'Grist', url: 'https://grist.org/feed/' },
  { source: 'Carbon Brief', url: 'https://www.carbonbrief.org/feed/' },
  { source: 'Yale Environment 360', url: 'https://e360.yale.edu/feed.xml' },
]

const ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', '#8217': '’', '#8216': '‘', '#8220': '“', '#8221': '”', '#8211': '–', '#8212': '—', '#038': '&' }

function clean(raw: string): string {
  return raw
    .replace(/^\s*<!\[CDATA\[/, '').replace(/\]\]>\s*$/, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&(#x?[0-9a-f]+|\w+);/gi, (m, e: string) => {
      if (ENTITIES[e.toLowerCase()]) return ENTITIES[e.toLowerCase()]
      if (e[0] === '#') { const n = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10); return Number.isFinite(n) ? String.fromCodePoint(n) : m }
      return m
    })
    .replace(/\s+/g, ' ').trim()
}

const tag = (block: string, name: string) => {
  const m = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, 'i'))
  return m ? clean(m[1]) : ''
}

/** Parse RSS 2.0 <item>s or Atom <entry>s into headlines. */
export function parseFeed(xml: string, source: string): NewsItem[] {
  const blocks = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) ?? xml.match(/<entry[\s>][\s\S]*?<\/entry>/gi) ?? []
  return blocks.flatMap((b) => {
    const title = tag(b, 'title')
    let url = tag(b, 'link')
    if (!url) url = b.match(/<link[^>]*href="([^"]+)"/i)?.[1] ?? ''
    url = clean(url)
    const date = tag(b, 'pubDate') || tag(b, 'published') || tag(b, 'updated') || tag(b, 'dc:date')
    const t = date ? new Date(date) : null
    if (!title || !/^https:\/\//i.test(url)) return []
    return [{ title: title.slice(0, 160), url, source, publishedAt: t && !isNaN(+t) ? t.toISOString() : null }]
  })
}

/** Newest headlines across all feeds, one or two per newsroom so no single source dominates. */
export function mergeNews(lists: NewsItem[][], take = 6, perSource = 2): NewsItem[] {
  const seen = new Set<string>()
  const all = lists.flat()
    .filter((n) => { const k = n.title.toLowerCase(); if (seen.has(k)) return false; seen.add(k); return true })
    .sort((a, b) => +new Date(b.publishedAt ?? 0) - +new Date(a.publishedAt ?? 0))
  const count: Record<string, number> = {}
  const out: NewsItem[] = []
  for (const n of all) {
    if ((count[n.source] ?? 0) >= perSource) continue
    count[n.source] = (count[n.source] ?? 0) + 1
    out.push(n)
    if (out.length >= take) break
  }
  return out
}

export async function getLatestNews(take = 6): Promise<NewsItem[]> {
  const results = await Promise.allSettled(NEWS_FEEDS.map(async (f) => {
    const res = await fetch(f.url, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
      headers: { 'User-Agent': 'ProjectExodusNews/1.0 (+https://www.projxodus.com)', Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml' },
    })
    if (!res.ok) throw new Error(`${f.source}: ${res.status}`)
    return parseFeed(await res.text(), f.source)
  }))
  return mergeNews(results.flatMap((r) => (r.status === 'fulfilled' ? [r.value] : [])), take)
}
