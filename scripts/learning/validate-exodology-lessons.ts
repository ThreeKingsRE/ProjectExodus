/**
 * Validate new Exodology lessons (data/exodology-new-lessons/<id>.ts).
 *   npx tsx scripts/learning/validate-exodology-lessons.ts --file data/exodology-new-lessons/a-m3-n1.ts
 *   npx tsx scripts/learning/validate-exodology-lessons.ts            # all files
 *
 * Checks structure and depth for the lesson type, and opens every reference
 * link to confirm it resolves to a page about that work (title must match).
 * Allowed link targets: en.wikipedia.org/wiki/<Article> and
 * openlibrary.org/works/<id> (both let the title be checked).
 */
import { readdirSync } from 'fs'
import { resolve } from 'path'
import { NEW_LESSON_SPECS } from '../../lib/exodology/mergedOutline'
import type { NewExodologyLesson } from '../../data/exodology-new-lessons/types'

const DIR = 'data/exodology-new-lessons'
const norm = (s: string) => s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim()
const titleMatches = (cited: string, found: string) => {
  const a = norm(cited.split(':')[0]), b = norm(found.split(':')[0])
  return a === b || a.includes(b) || b.includes(a)
}

type Ref = NonNullable<NewExodologyLesson['content']['references']>[number]
async function checkLink(ref: Ref, retried = false): Promise<string | null> {
  const url = ref.url ?? ''
  try {
    const wiki = url.match(/^https:\/\/en\.wikipedia\.org\/wiki\/([^#?]+)$/)
    const ol = url.match(/^https:\/\/openlibrary\.org\/works\/(OL\d+W)(\/[^#?]*)?$/)
    if (wiki) {
      const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${wiki[1]}`, { redirect: 'follow' })
      if (!res.ok) return `link not found (${res.status}): ${url}`
      const j = await res.json()
      const pageTitle: string = j.title ?? ''
      const text = `${pageTitle} ${j.description ?? ''} ${j.extract ?? ''}`
      // The article must be about the work itself, or (for an author article) mention the work
      if (!titleMatches(ref.title, pageTitle) && !norm(text).includes(norm(ref.title.split(':')[0]))) {
        return `link does not describe "${ref.title}" (page: "${pageTitle}"): ${url}`
      }
      return null
    }
    if (ol) {
      const res = await fetch(`https://openlibrary.org/works/${ol[1]}.json`)
      if (!res.ok) return `link not found (${res.status}): ${url}`
      const j = await res.json()
      if (!titleMatches(ref.title, j.title ?? '')) return `link is "${j.title}", not "${ref.title}": ${url}`
      return null
    }
    return `link must be an en.wikipedia.org/wiki/... or openlibrary.org/works/... URL: ${url}`
  } catch (e) {
    if (!retried) {
      // One retry for transient network/proxy errors
      await new Promise((r) => setTimeout(r, 1500))
      return checkLink(ref, true)
    }
    return `could not open ${url}: ${(e as Error).message}`
  }
}

async function validate(lesson: NewExodologyLesson): Promise<string[]> {
  const errors: string[] = []
  const spec = NEW_LESSON_SPECS.find((s) => s.id === lesson.id)
  const tag = lesson.id
  if (!spec) return [`${tag}: not a lesson in the merged outline`]
  if (lesson.type !== spec.type) errors.push(`${tag}: type ${lesson.type}, outline says ${spec.type}`)
  if (!lesson.title?.trim() || !lesson.duration?.trim()) errors.push(`${tag}: missing title or duration`)
  const c = lesson.content
  if (!c?.introduction || c.introduction.length < 300) errors.push(`${tag}: introduction under 300 characters`)
  if ((lesson.learningObjectives ?? []).length < 3) errors.push(`${tag}: need at least 3 learning objectives`)
  if ((lesson.keyTerms ?? []).length < 3) errors.push(`${tag}: need at least 3 key terms`)
  if (lesson.type === 'instruction') {
    const secs = c.sections ?? []
    if (secs.length < 4) errors.push(`${tag}: need at least 4 sections`)
    secs.forEach((s, i) => { if (!s.title?.trim() || (s.content ?? '').length < 400) errors.push(`${tag}: section ${i + 1} under 400 characters`) })
    if ((c.keyTakeaways ?? []).length < 3) errors.push(`${tag}: need at least 3 key takeaways`)
  }
  if (lesson.type === 'interactive') {
    if (c.gameType !== 'guided-exercise') errors.push(`${tag}: interactive lessons use gameType "guided-exercise"`)
    if ((c.steps ?? []).length < 4) errors.push(`${tag}: need at least 4 steps`)
    ;(c.steps ?? []).forEach((s, i) => { if (!s.instruction?.trim() || !s.prompt?.trim()) errors.push(`${tag}: step ${i + 1} incomplete`) })
    if (!c.completionRequirement?.trim()) errors.push(`${tag}: missing completionRequirement`)
  }
  if (lesson.type === 'reflection') {
    if ((c.prompts ?? []).length < 4) errors.push(`${tag}: need at least 4 prompts`)
    ;(c.prompts ?? []).forEach((p, i) => { if (!p.question?.trim() || !p.guidance?.trim()) errors.push(`${tag}: prompt ${i + 1} incomplete`) })
    if (!c.closingNote?.trim()) errors.push(`${tag}: missing closingNote`)
  }
  const refs = c.references ?? []
  if (lesson.type === 'instruction' && refs.length < 2) errors.push(`${tag}: instruction lessons need at least 2 references`)
  for (const r of refs) {
    if (!r.author || !r.title || !r.year || !r.publisher || !r.relevance) errors.push(`${tag}: incomplete reference "${r.title}"`)
    const linkError = await checkLink(r)
    if (linkError) errors.push(`${tag}: ${linkError}`)
  }
  if (/<[a-z][^>]*>/i.test(JSON.stringify(lesson))) errors.push(`${tag}: HTML is not used in Exodology lessons (plain text with **bold** only)`)
  return errors
}

async function main() {
  // Node's fetch only uses the HTTPS proxy when NODE_USE_ENV_PROXY is set at
  // startup; re-run with it so reference links can be checked behind a proxy.
  if ((process.env.HTTPS_PROXY || process.env.https_proxy) && !process.env.NODE_USE_ENV_PROXY) {
    const { spawnSync } = await import('child_process')
    const r = spawnSync(process.execPath, process.execArgv.concat(process.argv.slice(1)), {
      stdio: 'inherit', env: { ...process.env, NODE_USE_ENV_PROXY: '1' },
    })
    process.exit(r.status ?? 1)
  }
  const fileArg = process.argv.indexOf('--file')
  const files = fileArg !== -1 ? [process.argv[fileArg + 1]] : readdirSync(DIR).filter((f) => /^[as]-m\d+-n\d+\.ts$/.test(f)).map((f) => `${DIR}/${f}`)
  let problems: string[] = []
  for (const f of files) {
    const mod = await import(resolve(f))
    const lesson: NewExodologyLesson = mod.default?.default ?? mod.default
    if (!f.endsWith(`${lesson?.id}.ts`)) { problems.push(`${f}: file name must be <lesson id>.ts`); continue }
    problems = problems.concat(await validate(lesson))
  }
  console.log(`checked ${files.length} lessons, ${problems.length} problems`)
  problems.slice(0, 60).forEach((p) => console.log(' -', p))
  if (problems.length) process.exit(1)
}
main()
