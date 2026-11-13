/**
 * Merge Exodology assessment JSON files into data/exodology-assessments.ts.
 *   npx tsx scripts/learning/merge-exodology-assessments.ts <dir with M.json files>
 */
import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const dir = process.argv[2]
const OUT = 'data/exodology-assessments.ts'
const entries: Record<string, unknown> = {}
const problems: string[] = []
for (const f of readdirSync(dir).filter((x) => x.endsWith('.json')).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))) {
  const d = JSON.parse(readFileSync(join(dir, f), 'utf8'))
  const id = f.replace(/\.json$/, '')
  if (d.moduleId !== id) problems.push(`${f}: moduleId ${d.moduleId}`)
  const qs = d.questions ?? []
  if (qs.length < 6) problems.push(`${f}: only ${qs.length} questions`)
  for (const [i, q] of qs.entries()) {
    if (!q.question?.trim() || !q.explanation?.trim()) problems.push(`${f} q${i + 1}: empty text`)
    if (q.options?.length !== 4 || new Set(q.options).size !== 4) problems.push(`${f} q${i + 1}: need 4 distinct options`)
    if (!(q.correctAnswer >= 0 && q.correctAnswer <= 3)) problems.push(`${f} q${i + 1}: correctAnswer ${q.correctAnswer}`)
    if (/<[a-z]|\*\*/i.test(JSON.stringify(q))) problems.push(`${f} q${i + 1}: markup in text`)
  }
  const pos = qs.map((q: { correctAnswer: number }) => q.correctAnswer)
  if (Math.max(...[0, 1, 2, 3].map((p) => pos.filter((x: number) => x === p).length)) > qs.length / 2) problems.push(`${f}: answers bunched in one position`)
  entries[id] = { moduleId: id, title: d.title, description: d.description, passingScore: d.passingScore ?? 70, questions: qs }
}
if (problems.length) { console.error(problems.join('\n')); process.exit(1) }
const src = readFileSync(OUT, 'utf8').replace(
  /export const additionalAssessments: Record<string, SimpleAssessment> = [\s\S]*$/,
  `export const additionalAssessments: Record<string, SimpleAssessment> = ${JSON.stringify(entries, null, 2)}\n`
)
writeFileSync(OUT, src)
console.log(`Merged ${Object.keys(entries).length} assessments into ${OUT}`)
