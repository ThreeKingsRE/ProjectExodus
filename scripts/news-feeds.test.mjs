import test from 'node:test'
import assert from 'node:assert/strict'
const m = await import('../lib/news/feeds.ts')
const { parseFeed, mergeNews } = m.default || m

const RSS = `<?xml version="1.0"?><rss><channel><title>Feed</title>
<item><title><![CDATA[Solar &amp; storage beat gas in Texas]]></title><link>https://example.org/a</link><pubDate>Mon, 23 Nov 2026 14:00:00 +0000</pubDate></item>
<item><title>Heat pumps outsell furnaces &#8212; again</title><link>https://example.org/b</link><pubDate>Sun, 22 Nov 2026 10:00:00 +0000</pubDate></item>
<item><title>No link here</title></item>
<item><title>Insecure link</title><link>http://example.org/c</link></item>
</channel></rss>`
const ATOM = `<feed><entry><title type="html">Atom headline</title><link rel="alternate" href="https://example.net/x"/><updated>2026-11-24T08:00:00Z</updated></entry></feed>`

test('parses RSS items: CDATA, entities, https links only', () => {
  const items = parseFeed(RSS, 'Src')
  assert.deepEqual(items.map((i) => i.title), ['Solar & storage beat gas in Texas', 'Heat pumps outsell furnaces — again'])
  assert.equal(items[0].url, 'https://example.org/a')
  assert.equal(items[0].publishedAt, '2026-11-23T14:00:00.000Z')
})

test('parses Atom entries', () => {
  assert.deepEqual(parseFeed(ATOM, 'A'), [{ title: 'Atom headline', url: 'https://example.net/x', source: 'A', publishedAt: '2026-11-24T08:00:00.000Z' }])
})

test('merge: newest first, deduped, at most two per newsroom', () => {
  const a = parseFeed(RSS, 'A'), b = parseFeed(ATOM, 'B')
  const dup = [{ ...a[0], source: 'C' }]
  const many = [1, 2, 3].map((i) => ({ title: `T${i}`, url: `https://x/${i}`, source: 'D', publishedAt: `2026-11-2${i}T00:00:00Z` }))
  const out = mergeNews([a, b, dup, many], 6)
  assert.equal(out[0].title, 'Atom headline')
  assert.equal(out.filter((n) => n.source === 'D').length, 2)
  assert.equal(out.filter((n) => n.title.startsWith('Solar')).length, 1)
})
