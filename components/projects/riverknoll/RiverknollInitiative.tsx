'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { ArrowDown, ArrowRight, Download, ExternalLink, Leaf, MessageCircle, RefreshCw } from 'lucide-react'
import plan from '@/data/riverknoll-renewal.json'
import { calculateRiverknoll } from '@/lib/riverknoll-model'
import { JoinProjectButton } from '@/components/projects/JoinProjectButton'
import styles from './riverknoll.module.css'

const root = '/community/projects/riverknoll-renewal'
const money = (v: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v)
const millions = (v: number) => `$${(v / 1e6).toFixed(1)}M`
type Community = { id: string; members: number; isMember: boolean; isOwner: boolean }
const navigation = [['vision', 'The idea'], ['design', 'Design'], ['evidence', 'Research'], ['feasibility', 'Financials'], ['participate', 'Get involved'], ['materials', 'Materials']]

function SectionHeading({ number, title, description }: { number: string; title: string; description: string }) {
  return <div className="mb-8 max-w-3xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#527764]">{number} / Riverknoll Renewal</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2><p className="mt-4 text-base leading-7 text-[#53655b]">{description}</p></div>
}

export default function RiverknollInitiative() {
  const { data: session } = useSession()
  const [community, setCommunity] = useState<Community | null>(null)
  const [communityState, setCommunityState] = useState<'loading' | 'ready' | 'pending' | 'error'>('loading')
  const [activating, setActivating] = useState(false)
  const [activationError, setActivationError] = useState('')
  const [target, setTarget] = useState(String(plan.finance.targetBeds))
  const [retained, setRetained] = useState('')
  const targetValue = Number(target)
  const retainedValue = retained.trim() === '' ? null : Number(retained)
  let model: ReturnType<typeof calculateRiverknoll> | null = null
  let modelError = ''
  try { model = calculateRiverknoll(targetValue, retainedValue) } catch (e) { modelError = e instanceof Error ? e.message : 'Check your inputs.' }

  useEffect(() => {
    const controller = new AbortController()
    fetch('/api/initiatives/riverknoll-renewal', { cache: 'no-store', signal: controller.signal })
      .then(async res => { if (!res.ok) throw new Error('Unavailable'); return res.json() })
      .then(data => { setCommunity(data.project); setCommunityState(data.project ? 'ready' : 'pending') })
      .catch(() => { if (!controller.signal.aborted) setCommunityState('error') })
    return () => controller.abort()
  }, [session?.user?.id])

  async function activate() {
    setActivating(true)
    setActivationError('')
    try {
      const response = await fetch('/api/initiatives/riverknoll-renewal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Could not activate the workspace.')
      window.location.assign(`${root}/community`)
    } catch (e) { setActivationError(e instanceof Error ? e.message : 'Please try again.'); setActivating(false) }
  }

  return <main className={`${styles.page} bg-[#f4f2e9] text-[#243d32] selection:bg-[#c8d9b7]`}>
    <header className="relative isolate overflow-hidden bg-[#172f29] text-[#f8f5e9]">
      <div className="mx-auto grid max-w-7xl lg:min-h-[650px] lg:grid-cols-[1fr_1.04fr]">
        <div className="relative z-10 px-6 py-14 sm:px-10 lg:py-20">
          <Link href="/community/projects" className="mb-10 inline-block text-sm text-[#d4dfd2] hover:underline">← Community initiatives</Link>
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#ccdfa8]"><Leaf size={15} aria-hidden="true" /> First Exodus design · student-led</p>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">Riverknoll<br /><span className="text-[#d8e5b7]">Renewal.</span></h1>
          <p className="mt-7 max-w-md text-xl leading-8 text-[#e5e8d9]">{plan.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#participate" data-tone="dark" className="inline-flex items-center gap-3 rounded-full bg-[#d6e6b3] px-6 py-3 text-sm font-bold text-[#203a2e] hover:bg-[#e5f0ca]">Help shape the proposal <ArrowRight size={17} /></a>
            <a href="#design" className="inline-flex items-center gap-2 rounded-full border border-[#82927d] px-5 py-3 text-sm font-semibold hover:bg-white/10">Explore the design <ArrowDown size={15} /></a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#d3dfcd]"><span className="rounded-full border border-[#78906f] px-3 py-1">{plan.status}</span><span>Initiated by {plan.attribution}</span></div>
        </div>
        <figure className="relative min-h-[320px] lg:min-h-full">
          <img src={plan.coverImage} alt="Illustrative Riverknoll Renewal courtyard with attached homes, paths, gardens, and a central water feature" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#172f29]/80 via-transparent to-transparent" />
          <figcaption className="absolute bottom-6 left-6 right-6 max-w-sm text-xs leading-5 text-white">Illustrative concept render. Building placement, drainage, materials, and dimensions are under development.</figcaption>
        </figure>
      </div>
    </header>

    <nav aria-label="Initiative sections" className="border-b border-[#d9dece] bg-[#e9ecdf]">
      <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-5 text-sm font-semibold sm:px-10">{navigation.map(([id, label]) => <a key={id} href={`#${id}`} className="shrink-0 underline-offset-8 hover:underline">{label}</a>)}<span className="ml-auto shrink-0 text-xs font-normal text-[#596953]">Updated {plan.updated}</span></div>
    </nav>

    <div className="mx-auto max-w-7xl space-y-20 px-6 py-14 sm:px-10 sm:py-20">
      <section id="vision" className="scroll-mt-24 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div><SectionHeading number="01" title="Students build RIT. Housing should support them." description={plan.summary} /><p className="max-w-2xl leading-7 text-[#53655b]">{plan.context}</p><a href={plan.sources[0].url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">Read the closure reporting <ExternalLink size={14} /></a></div>
        <aside className="self-start rounded-2xl border border-[#d4dac8] bg-[#e6eadc] p-7"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#55704d]">Exodology in practice</p><h3 className="mt-3 text-2xl font-semibold">One place. Connected systems.</h3><p className="mt-4 text-sm leading-7 text-[#4a6050]">{plan.exodology}</p><Link href="/exodology" className="mt-5 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4">Explore Exodology <ArrowRight size={15} /></Link></aside>
      </section>

      <section id="design" className="scroll-mt-24"><SectionHeading number="02" title="A neighborhood, designed together." description="Homes, shared landscape, water, access, and construction are parts of the same design. These are working requirements for the next architectural revision." />
        <div className="grid gap-4 md:grid-cols-2">{plan.design.map((item, i) => <article key={item.title} className="rounded-2xl border border-[#d9dece] bg-[#faf9f2] p-7"><span className="text-sm font-semibold text-[#6a835d]">0{i + 1}</span><h3 className="mt-4 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[#53655b]">{item.text}</p></article>)}</div>
        <figure className="mt-7 overflow-hidden rounded-2xl border border-[#d4dac8]"><a href="/projects/riverknoll-renewal/water-sequence.svg" target="_blank" rel="noreferrer" aria-label="Open full-size courtyard water sequence diagram"><img src="/projects/riverknoll-renewal/water-sequence.svg" alt="Courtyard water study: roof collection, screened inlet, sediment treatment, planted basin, and safe overflow; salted pavement drains separately" className="h-auto w-full" /></a><figcaption className="bg-[#faf9f2] px-6 py-3 text-xs leading-6 text-[#63735e]">New design study · Open the diagram for full-size labels. Schematic process, not a grading or hydraulic design.</figcaption></figure>
        <div className="mt-7 rounded-2xl bg-[#e5e9dc] p-7"><h3 className="text-lg font-semibold">The construction sequence is part of the architecture.</h3><ol className="mt-6 grid gap-7 md:grid-cols-2 lg:grid-cols-4">{plan.phases.map((phase, i) => <li key={phase.title}><span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#284d3c] text-sm font-bold text-white">{i + 1}</span><h4 className="font-semibold">{phase.title}</h4><p className="mt-2 text-sm leading-6 text-[#53655b]">{phase.text}</p></li>)}</ol></div>
      </section>

      <section id="evidence" className="scroll-mt-24"><SectionHeading number="03" title="A promising system. Questions worth testing." description="System 3E is a candidate for the proposal. The comparison must cover the same housing design, installed scope, local requirements, and operating conditions." />
        <div className="grid gap-4 md:grid-cols-3">{[
          ['14 → 1 day', 'House-scale wall installation', 'Manufacturer example for a 1,560 SF house. This is wall work, not a Riverknoll move-in schedule.'],
          ['5 → 3 months', 'House-scale shell and core', 'Published manufacturer comparison. Utilities, fit-out, inspections, site work, and fall turnover still need a project-specific schedule.'],
          ['R-27.8', 'Published wall resistance', 'Manufacturer value for the EKO+ wall element. Require an assembly-level review of thermal bridges, air leakage, fire, moisture, acoustics, and structure.']
        ].map(([metric, title, text]) => <article key={title} className="rounded-2xl bg-[#213f33] p-7 text-[#f5f5e9]"><p className="text-3xl font-semibold text-[#d5e3b4]">{metric}</p><h3 className="mt-3 font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#d1dbcd]">{text}</p></article>)}</div>
        <a href={plan.sources[4].url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">Manufacturer source and technical data <ExternalLink size={14} /></a>
        <details className="mt-7 rounded-xl border border-[#d4dac8] p-6"><summary className="cursor-pointer font-semibold">What we still need to verify</summary><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-[#53655b]">{plan.openItems.map(item => <li key={item}>{item}</li>)}</ul></details>
      </section>

      <section id="feasibility" className="scroll-mt-24"><SectionHeading number="04" title="Show the assumptions. Follow the numbers." description="An interactive planning screen carried from our detailed feasibility workbook. Change the target and retained capacity to see their effects together. These figures are concept allowances, not prices or an approved budget." />
        <div className="rounded-2xl border border-[#d4dac8] bg-[#faf9f2] p-5 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-[1fr_1fr_auto] sm:items-end"><label className="text-sm font-semibold">Total neighborhood target (beds)<input type="number" min="1" max="2000" step="1" value={target} onChange={e => setTarget(e.target.value)} className="mt-2 block w-full rounded-lg border border-[#a6b59e] bg-white px-4 py-3 text-base text-[#243d32]" /></label><label className="text-sm font-semibold">Retained beds at 516–536<input type="number" min="0" max={targetValue || 2000} step="1" value={retained} onChange={e => setRetained(e.target.value)} placeholder="Unknown — leave blank" className="mt-2 block w-full rounded-lg border border-[#a6b59e] bg-white px-4 py-3 text-base text-[#243d32]" /></label><button type="button" onClick={() => { setTarget(String(plan.finance.targetBeds)); setRetained('') }} className="flex items-center justify-center gap-2 rounded-lg border border-[#a6b59e] px-4 py-3 text-sm font-semibold hover:bg-[#e6eadc]"><RefreshCw size={15} /> Reset</button></div>
          <div aria-live="polite">
            {modelError && <p role="alert" className="mt-5 rounded-lg bg-[#f5e3d7] p-4 text-sm text-[#7a361c]">{modelError}</p>}
            {model && <>
              <p className="mt-5 rounded-lg bg-[#eee7d1] p-4 text-sm leading-6 text-[#65562d]">{model.retainedUnverified ? 'Retained capacity is unverified. This screen provisionally prices all target beds as new; it is not the final replacement scope.' : `Illustrative scenario: ${model.retainedBeds} retained + ${model.newBeds} new = ${model.targetBeds} total beds. This input is your scenario, not a verified inventory.`}</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-3"><div><p className="text-xs uppercase tracking-wider text-[#63735e]">New beds screened</p><p className="mt-2 text-3xl font-semibold">{model.newBeds.toLocaleString()}</p></div><div><p className="text-xs uppercase tracking-wider text-[#63735e]">New gross floor area</p><p className="mt-2 text-3xl font-semibold">{model.grossArea.toLocaleString()} <span className="text-base">SF</span></p></div><div><p className="text-xs uppercase tracking-wider text-[#63735e]">Base capital allowance</p><p className="mt-2 text-3xl font-semibold">{millions(model.cases[1].total)}</p></div></div>
              <div className="mt-7 overflow-x-auto"><table className="w-full min-w-[420px] text-left text-sm"><caption className="sr-only">Development cost scenarios in 2026 dollars</caption><thead><tr className="border-b border-[#c6cfbb]"><th scope="col" className="py-3">Scenario</th><th scope="col" className="py-3 text-right">Total project uses</th><th scope="col" className="py-3 text-right">Per new bed</th></tr></thead><tbody>{model.cases.map(c => <tr key={c.name} className="border-b border-[#e1e4d8]"><th scope="row" className="py-3 font-medium">{c.name}</th><td className="py-3 text-right tabular-nums">{money(c.total)}</td><td className="py-3 text-right tabular-nums">{money(c.perNewBed)}</td></tr>)}</tbody></table></div>
              <details className="mt-5"><summary className="cursor-pointer text-sm font-semibold">See the base cost build-up</summary><dl className="mt-4 grid gap-2 text-sm">{[['Building construction', model.cases[1].building], ['Site and utilities', model.cases[1].site], ['Demolition allowance', model.cases[1].demolition], ['Abatement allowance', model.cases[1].abatement], ['Temporary works allowance', model.cases[1].temporaryWorks], ['Design, consultants, permits', model.cases[1].soft], ['Contingency', model.cases[1].contingency], ['Escalation', model.cases[1].escalation], ['Financing and issuance', model.cases[1].financing]].map(([label, amount]) => <div key={String(label)} className="flex justify-between gap-4 border-b border-[#e1e4d8] py-2"><dt>{label}</dt><dd className="tabular-nums">{money(Number(amount))}</dd></div>)}</dl></details>
              <div className="mt-8 grid gap-6 lg:grid-cols-2"><article className="rounded-xl bg-[#e6eadc] p-6"><h3 className="text-lg font-semibold">Affordability needs a funding plan.</h3><p className="mt-3 text-sm leading-6">At {money(plan.finance.academicYearRent)} per academic-year bed, {plan.finance.occupancy * 100}% occupancy, and a {plan.finance.operatingExpenseRatio * 100}% operating allowance, modeled net operating income is <strong>{money(model.noi)}</strong>. At {plan.finance.debtRate * 100}% over {plan.finance.debtYears} years with {plan.finance.debtServiceCoverage.toFixed(2)}× debt coverage, that supports about <strong>{millions(model.supportedDebt)}</strong> of debt.</p><p className="mt-3 text-sm leading-6">The base capital gap is about <strong>{millions(model.capitalGap)}</strong> before grants, institutional capital, or other support. This is not a proposed rent increase or a financing commitment.</p><a href={plan.sources[1].url} target="_blank" rel="noreferrer" className="mt-4 inline-block text-xs font-semibold underline">Check the RIT room-rate source ↗</a></article><article className="rounded-xl bg-[#eee7d1] p-6"><h3 className="text-lg font-semibold">Energy savings: keep the scope honest.</h3><p className="mt-3 text-sm leading-6">The prior R-22 versus R-27.8 wall-only screen scales to about <strong>{money(model.annualWallSavings)} / year</strong> here. With {plan.finance.discountRate * 100}% discounting and {plan.finance.energyEscalation * 100}% energy escalation, {plan.finance.years}-year present value is about <strong>{money(model.savingsPv)}</strong>.</p><p className="mt-3 text-sm leading-6">That is roughly {money(model.premiumPerBed)} per new bed in wall-energy value. No maintenance savings are assumed; the System 3E premium is unquoted. This does not demonstrate payback or whole-building savings.</p></article></div>
            </>}
          </div>
          <details className="mt-6 text-sm"><summary className="cursor-pointer font-semibold">Model basis and limits</summary><p className="mt-3 leading-7 text-[#53655b]">{plan.finance.notes} Floor area is {plan.finance.grossAreaPerNewBed} GSF per new bed. Building allowances are $350 / $425 / $525 per GSF before the separately shown additions. Zero new beds produces zero modeled new-build cost; it does not imply that retained homes need no spending.</p></details>
        </div>
      </section>

      <section id="participate" className="scroll-mt-24"><SectionHeading number="05" title="Bring your lived experience. Bring your questions." description="Residents, students, alumni, neighbors, designers, builders, and researchers can help make the proposal stronger. Joining a workspace means participation; it is not a counted endorsement." />
        <div className="grid gap-4 md:grid-cols-3">{plan.questions.map(q => <article key={q.title} className="rounded-2xl border border-[#d4dac8] p-6"><MessageCircle size={22} className="text-[#54764c]" /><h3 className="mt-4 text-lg font-semibold">{q.title}</h3><p className="mt-3 text-sm leading-7 text-[#53655b]">{q.text}</p></article>)}</div>
        <div className="mt-7 rounded-2xl bg-[#213f33] p-7 text-[#f4f3e8] sm:p-9">
          <h3 className="text-2xl font-semibold">A proposal grows through conversation.</h3>
          {community ? <><p className="mt-3 text-sm text-[#d1dbcd]">The community workspace is open · {community.members} {community.members === 1 ? 'member' : 'members'}.</p><div className="mt-5 flex flex-wrap items-center gap-4"><Link href={`${root}/community?tab=discussions`} className="rounded-full bg-[#d6e6b3] px-5 py-3 text-sm font-bold text-[#203a2e]">Share an idea →</Link><Link href={`${root}/community?tab=research`} className="rounded-full border border-[#82927d] px-5 py-3 text-sm font-semibold">Contribute research</Link><JoinProjectButton projectId={community.id} projectName={plan.title} isMember={community.isMember} isOwner={community.isOwner} /></div><p className="mt-4 text-xs leading-5 text-[#d1dbcd]">Workspace membership and contributions use your site profile. The proposal’s public byline does not make member accounts anonymous.</p></> : <><p className="mt-3 max-w-2xl text-sm leading-7 text-[#d1dbcd]">{communityState === 'error' ? 'The proposal is available, but we could not load the community workspace. Please try again later. You can still reach Project Exodus below.' : communityState === 'loading' ? 'Checking community workspace availability…' : 'The proposal is open for review. On-site membership and project discussions will open when the community workspace is activated.'}</p><Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#d6e6b3] px-5 py-3 text-sm font-bold text-[#203a2e]">Contact Project Exodus <ArrowRight size={16} /></Link>{['ADMIN', 'SUPER_ADMIN'].includes(session?.user?.role || '') && <button onClick={activate} disabled={activating} className="ml-3 mt-4 rounded-full border border-[#82927d] px-5 py-3 text-sm font-semibold disabled:opacity-50">{activating ? 'Activating…' : 'Activate community workspace'}</button>}{activationError && <p role="alert" className="mt-3 text-sm text-[#ffd6b3]">{activationError}</p>}</>}
        </div>
      </section>

      <section id="materials" className="scroll-mt-24"><SectionHeading number="06" title="Open the work. Follow its development." description="The earlier review package is available below. These are schematic studies and an illustrative financial model. The current page records refinements beyond those files; revisions will be linked as they are completed." />
        <div className="grid gap-3 sm:grid-cols-2">{plan.materials.map(material => <a key={material.href} href={material.href} download className="group flex items-center justify-between gap-4 rounded-xl border border-[#d4dac8] bg-[#faf9f2] p-6 hover:bg-[#e6eadc]"><div><p className="text-xs font-bold tracking-widest text-[#63735e]">{material.kind}</p><h3 className="mt-2 font-semibold">{material.title}</h3><p className="mt-1 text-xs text-[#63735e]">{material.version}</p></div><Download size={19} aria-hidden="true" /></a>)}</div>
        <a href="/projects/riverknoll-renewal/current-plan.md" download className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">Download current plan &amp; assumptions · revision {plan.revision} <Download size={15} /></a>
        <div className="mt-10 grid gap-8 lg:grid-cols-2"><div><h3 className="text-xl font-semibold">Research sources</h3><ul className="mt-5 space-y-4">{plan.sources.map(source => <li key={source.id}><a href={source.url} target="_blank" rel="noreferrer" className="text-sm font-semibold underline underline-offset-4">{source.label} ↗</a><p className="mt-1 text-xs leading-6 text-[#63735e]">{source.use}</p></li>)}</ul></div><div><h3 className="text-xl font-semibold">Project notes</h3>{plan.updates.map(update => <article key={update.date} className="mt-5 border-l-2 border-[#a1b58b] pl-5"><p className="text-xs text-[#63735e]">{update.date}</p><h4 className="mt-2 font-semibold">{update.title}</h4><p className="mt-3 text-sm leading-7 text-[#53655b]">{update.text}</p></article>)}<p className="mt-6 text-xs leading-6 text-[#63735e]">Plan updates and initiative updates travel together. The current revision records the same design requirements, assumptions, and questions on this page and in the downloadable plan.</p></div></div>
      </section>
      <footer className="border-t border-[#d4dac8] pt-7 text-xs leading-6 text-[#63735e]">{plan.title} · {plan.attribution} · Project Exodus<br />Student-originated proposal. RIT approval, funding, code acceptance, construction duration, and operating outcomes have not been established. Revision {plan.revision}.</footer>
    </div>
  </main>
}
