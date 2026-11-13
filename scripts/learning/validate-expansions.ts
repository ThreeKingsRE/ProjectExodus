/**
 * Validate expanded module content (data/modules/expanded).
 *   npx tsx scripts/learning/validate-expansions.ts [topicId] [--partial]
 * --partial: don't fail on modules that have no expansion yet.
 *   npx tsx scripts/learning/validate-expansions.ts --file data/modules/expanded/<topic>/<key>.ts
 * --file: validate one expansion file directly (no need to regenerate the index).
 */
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { MODULE_EXPANSIONS as REGISTERED } from '../../data/modules/expanded'
import type { ModuleExpansion } from '../../data/modules/expanded/types'
import { extractTermsFromContent, isQuizWorthyTerm } from '../../lib/learning/termExtractor'

const LEVELS = ['ELEMENTARY', 'MIDDLE_SCHOOL', 'HIGH_SCHOOL', 'UNDERGRADUATE', 'GRADUATE', 'PHD'] as const
const MIN_CHARS: Record<string, number> = { ELEMENTARY: 1400, MIDDLE_SCHOOL: 1800, HIGH_SCHOOL: 2300, UNDERGRADUATE: 2800, GRADUATE: 3200, PHD: 3500 }
const ALLOWED_TAGS = new Set(['div', 'h2', 'h3', 'h4', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'b', 'i', 'blockquote', 'cite', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'caption', 'br', 'hr', 'span', 'sup', 'sub', 'small', 'mark', 'code', 'pre', 'dl', 'dt', 'dd', 'figure', 'figcaption'])
const txt = (h: string) => h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()

async function main() {
const fileArg = process.argv.indexOf('--file')
let MODULE_EXPANSIONS: ModuleExpansion[] = REGISTERED
if (fileArg !== -1) {
  const mod = await import(resolve(process.argv[fileArg + 1]))
  MODULE_EXPANSIONS = [mod.default?.default ?? mod.default]
}
const stubs: { topicId: string; moduleKey: string; lessonIds: string[] }[] = JSON.parse(readFileSync('data/modules/expanded/STUBS.json', 'utf8'))
const onlyTopic = fileArg !== -1 ? MODULE_EXPANSIONS[0]?.topicId : process.argv.slice(2).find((a) => !a.startsWith('--'))
const partial = process.argv.includes('--partial') || fileArg !== -1
const errors: string[] = []
let checked = 0

for (const stub of stubs) {
  if (onlyTopic && stub.topicId !== onlyTopic) continue
  const exp = MODULE_EXPANSIONS.find((e) => e.topicId === stub.topicId && e.moduleKey === stub.moduleKey)
  const tag = `${stub.topicId}/${stub.moduleKey}`
  if (!exp) { if (!partial) errors.push(`${tag}: missing expansion`); continue }
  checked++
  for (const id of stub.lessonIds) if (!exp.lessons.some((l) => l.id === id)) errors.push(`${tag}: lesson ${id} not expanded`)
  for (const lesson of exp.lessons) {
    if (!lesson.title?.trim()) errors.push(`${tag}/${lesson.id}: empty title`)
    const openings = new Set<string>()
    for (const level of LEVELS) {
      const html = lesson.content?.[level]
      const lt = `${tag}/${lesson.id}/${level}`
      if (!html) { errors.push(`${lt}: missing`); continue }
      const text = txt(html)
      if (text.length < MIN_CHARS[level]) errors.push(`${lt}: ${text.length} chars (min ${MIN_CHARS[level]})`)
      for (const m of html.matchAll(/<\/?([a-zA-Z0-9]+)/g)) if (!ALLOWED_TAGS.has(m[1].toLowerCase())) errors.push(`${lt}: tag <${m[1]}> not allowed`)
      if (/\[Image|image-placeholder|<script|style=|on[a-z]+=|href=|src=/i.test(html)) errors.push(`${lt}: placeholder, link, inline style or script`)
      if (/\$\{/.test(html)) errors.push(`${lt}: template placeholder left in text`)
      if ((html.match(/<h[23]/g) ?? []).length < 3) errors.push(`${lt}: fewer than 3 section headings`)
      const terms = extractTermsFromContent(html, 'm', lesson.title).filter(isQuizWorthyTerm)
      if (terms.length < 5) errors.push(`${lt}: only ${terms.length} well-formed key terms (need 5: <li><strong>Term:</strong> definition</li>)`)
      const opening = text.slice(0, 160)
      if (openings.has(opening)) errors.push(`${lt}: same opening as another level`)
      openings.add(opening)
    }
  }
  if (exp.quiz?.length !== 5) errors.push(`${tag}: quiz has ${exp.quiz?.length ?? 0} questions (need 5)`)
  const ids = new Set<string>()
  for (const q of exp.quiz ?? []) {
    if (ids.has(q.id)) errors.push(`${tag}: duplicate question id ${q.id}`)
    ids.add(q.id)
    if (!(q.correctIndex >= 0 && q.correctIndex <= 3)) errors.push(`${tag}/${q.id}: correctIndex ${q.correctIndex}`)
    for (const level of LEVELS) {
      const o = q.options?.[level]
      if (!q.question?.[level]?.trim()) errors.push(`${tag}/${q.id}/${level}: empty question`)
      if (!q.explanation?.[level]?.trim()) errors.push(`${tag}/${q.id}/${level}: empty explanation`)
      if (!o || o.length !== 4 || o.some((x) => !x?.trim())) errors.push(`${tag}/${q.id}/${level}: need 4 options`)
      else if (new Set(o).size !== 4) errors.push(`${tag}/${q.id}/${level}: duplicate options`)
    }
  }
  if (exp.quiz?.length === 5 && new Set(exp.quiz.map((q) => q.correctIndex)).size === 1) errors.push(`${tag}: every answer is at the same position`)
}

if (fileArg !== -1 && checked === 0) errors.push(`${MODULE_EXPANSIONS[0]?.topicId}/${MODULE_EXPANSIONS[0]?.moduleKey}: not a known stub module (check topicId and moduleKey)`)
const expected = stubs.filter((s) => !onlyTopic || s.topicId === onlyTopic).length
console.log(`checked ${checked}/${fileArg !== -1 ? 1 : expected} expansions, ${errors.length} problems`)
for (const e of errors.slice(0, 80)) console.log(' -', e)
if (errors.length) process.exit(1)
}
main()
