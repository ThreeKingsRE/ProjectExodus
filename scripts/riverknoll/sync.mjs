import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { calculateRiverknoll } from '../../lib/riverknoll-model.ts'

const root = new URL('../../', import.meta.url)
const plan = JSON.parse(await fs.readFile(new URL('data/riverknoll-renewal.json', root), 'utf8'))
const f = plan.finance
const model = calculateRiverknoll(f.targetBeds, f.retainedBeds)
const money = n => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
const text = `# ${plan.title}\n\nRevision: ${plan.revision} · ${plan.updated}\n\nInitiated by ${plan.attribution}\n\n**${plan.status}.** Student-originated proposal; not approved or funded by RIT.\n\n${plan.summary}\n\n## Purpose and Exodology\n\n${plan.mission}\n\n${plan.exodology}\n\n## Design requirements\n\n${plan.design.map(x => `### ${x.title}\n\n${x.text}`).join('\n\n')}\n\n## Delivery sequence\n\n${plan.phases.map((x, i) => `${i + 1}. **${x.title}:** ${x.text}`).join('\n')}\n\n## Financial screen\n\nWorking target: ${model.targetBeds} total beds. Retained capacity: ${f.retainedBeds === null ? 'unverified; all target beds provisionally priced as new' : f.retainedBeds}. New beds screened: ${model.newBeds}. Gross building area: ${model.grossArea.toLocaleString()} SF.\n\n| Case | Total uses | Cost per new bed |\n| --- | ---: | ---: |\n${model.cases.map(x => `| ${x.name} | ${money(x.total)} | ${money(x.perNewBed)} |`).join('\n')}\n\nAcademic-year rent reference: ${money(f.academicYearRent)} per bed; occupancy ${f.occupancy * 100}%; operating allowance ${f.operatingExpenseRatio * 100}%; debt rate ${f.debtRate * 100}%; amortization ${f.debtYears} years; debt coverage ${f.debtServiceCoverage.toFixed(2)}x. Modeled NOI: ${money(model.noi)}. Illustrative debt supported: ${money(model.supportedDebt)}. Base capital gap: ${money(model.capitalGap)}.\n\nWall-only savings screen: ${money(model.annualWallSavings)} per year, using the earlier R-22 vs R-27.8 screen. ${f.years}-year present value: ${money(model.savingsPv)} at ${f.discountRate * 100}% discount and ${f.energyEscalation * 100}% escalation. No maintenance differential is assumed; System 3E premium remains unquoted. This is not a whole-building forecast or proof of payback.\n\n${f.notes}\n\n## Open questions\n\n${plan.openItems.map(x => `- ${x}`).join('\n')}\n\n## Participation\n\n${plan.questions.map(x => `### ${x.title}\n\n${x.text}`).join('\n\n')}\n\n## Research sources\n\n${plan.sources.map(x => `- [${x.label}](${x.url}) — ${x.use}`).join('\n')}\n\n## Review materials\n\n${plan.materials.map(x => `- [${x.title} · ${x.version}](https://www.projxodus.com${x.href})`).join('\n')}\n\nThe downloadable decks and workbook are the previous review baseline, not reissued by this web revision. Debt coverage and revised design requirements on this page supersede those earlier assumptions where different.\n\n## Revision notes\n\n${plan.updates.map(x => `### ${x.date} · ${x.title}\n\n${x.text}`).join('\n\n')}\n`

const outputs = ['docs/riverknoll/current-plan.md', 'public/projects/riverknoll-renewal/current-plan.md']
for (const output of outputs) {
  const path = new URL(output, root)
  if (process.argv.includes('--check')) {
    const current = await fs.readFile(path, 'utf8').catch(() => '')
    if (current !== text) throw new Error(`Plan/page synchronization required: ${fileURLToPath(path)}. Run npm run riverknoll:sync.`)
  } else {
    await fs.mkdir(new URL('./', path), { recursive: true })
    await fs.writeFile(path, text)
  }
}
console.log(process.argv.includes('--check') ? 'Riverknoll page and plan are synchronized.' : 'Updated Riverknoll plan and public download from shared data.')
