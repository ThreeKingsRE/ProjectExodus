/**
 * Generate data/architecture/element-summaries.json from the full element data.
 *
 *   npx tsx scripts/architecture/build-summaries.ts          # write
 *   npx tsx scripts/architecture/build-summaries.ts --check  # CI: fail if stale
 */
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { ALL_ELEMENTS } from '../../data/architecture/elements'
import type { ElementSummary } from '../../data/architecture/summary'

const OUT = 'data/architecture/element-summaries.json'

function firstSentence(text: string): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  const match = clean.match(/^.+?[.!?](\s|$)/)
  const sentence = (match ? match[0] : clean).trim()
  return sentence.length > 220 ? `${sentence.slice(0, 217).trimEnd()}…` : sentence
}

const summaries: ElementSummary[] = ALL_ELEMENTS.map((e) => ({
  id: e.id,
  slug: e.slug,
  name: e.name,
  alternativeNames: e.alternativeNames ?? [],
  category: e.category,
  subcategory: e.subcategory,
  periods: e.periods,
  regions: e.regions,
  searchTags: e.searchTags ?? [],
  difficultyScore: e.difficultyScore,
  phonetic: e.pronunciation?.phonetic ?? '',
  teaser: firstSentence(e.description.HIGH_SCHOOL || e.description.ELEMENTARY || ''),
}))

const json = JSON.stringify(summaries, null, 1) + '\n'

if (process.argv.includes('--check')) {
  const current = existsSync(OUT) ? readFileSync(OUT, 'utf8') : ''
  if (current !== json) {
    console.error(`${OUT} is out of date. Run: npm run arch:summaries`)
    process.exit(1)
  }
  console.log(`${OUT} is up to date (${summaries.length} elements)`)
} else {
  writeFileSync(OUT, json)
  console.log(`wrote ${OUT}: ${summaries.length} elements, ${(json.length / 1024).toFixed(0)} KB`)
}
