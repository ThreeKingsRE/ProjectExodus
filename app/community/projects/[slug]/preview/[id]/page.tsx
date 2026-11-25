import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Eye, Lock } from 'lucide-react'
import { getPublicProject } from '@/lib/projects/get-public-project'
import { getPreviewItem, getPreviewItems, readPreviewSheets, readPreviewText } from '@/lib/projects/public-previews'
import { InitiativeStory } from '@/components/projects/PublicInitiativeOverview'

// A read-only preview of one initiative file, open to everyone while the
// initiative's overview is public. No download links: team members download the
// originals from the Workspace.

type Props = { params: Promise<{ slug: string; id: string }>; searchParams: Promise<{ tab?: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, id } = await params
  const project = await getPublicProject(slug).catch(() => null)
  const item = project ? await getPreviewItem(slug, id) : null
  if (!project || !item) return { title: 'File preview', robots: { index: false, follow: false } }
  return { title: `${item.title} · ${project.name} | Project Exodus`, description: item.summary ?? `Preview of ${item.title}` }
}

/** Markdown notes to the story format: headings on their own block, no bold markers. */
function toStory(markdown: string) {
  return markdown
    .replace(/\r\n/g, '\n')
    .replace(/^#{1,2} (.+)$/gm, '\n## $1\n')
    .replace(/^#{3,} (.+)$/gm, '\n### $1\n')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export default async function FilePreviewPage({ params, searchParams }: Props) {
  const { slug, id } = await params
  const project = await getPublicProject(slug)
  if (!project) notFound()
  const item = await getPreviewItem(slug, id)
  if (!item) notFound()
  const items = await getPreviewItems(slug)
  const siblings = items.filter((other) => other.group === item.group)
  const back = `/community/projects/${encodeURIComponent(slug)}`
  const base = `${back}/preview/${encodeURIComponent(item.id)}`

  const sheets = item.kind === 'sheets' ? await readPreviewSheets(slug, item) : []
  const tabParam = Number((await searchParams).tab ?? 0)
  const tab = Number.isInteger(tabParam) && tabParam >= 0 && tabParam < sheets.length ? tabParam : 0
  const sheet = sheets[tab]
  const text = item.kind === 'text' ? toStory(await readPreviewText(slug, item)) : ''

  return <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
    <section className="border-b border-[var(--border)] bg-[var(--card)] px-4 py-4 sm:px-8 sm:py-8">
      <div className="mx-auto max-w-6xl">
        <Link href={`${back}#files`} className="text-sm font-semibold">← {project.name}</Link>
        <p className="mt-3 flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider"><Eye size={15} /> Preview · {item.group}</p>
        <h1 className="mt-2 text-2xl leading-tight font-black break-words sm:text-4xl">{item.title}</h1>
        {item.summary && <p className="mt-2 max-w-4xl text-sm leading-6 sm:text-base sm:leading-7 text-[var(--muted-foreground)]">{item.summary}</p>}
        <p className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-[var(--muted-foreground)]"><Lock size={14} /> Preview only. Signed-in team members can download the original from the initiative's Workspace.</p>
        {siblings.length > 1 && <nav aria-label={`Other ${item.group.toLowerCase()}`} className="mt-4 flex flex-wrap gap-2">
          {siblings.map((other) => <Link key={other.id} href={`${back}/preview/${encodeURIComponent(other.id)}`} aria-current={other.id === item.id ? 'page' : undefined} className={`rounded-lg border px-3 py-1.5 text-xs font-bold ${other.id === item.id ? 'border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]' : 'border-[var(--border)]'}`}>{other.title.replace(/^(Pitch deck|Feasibility model) /, '')}</Link>)}
        </nav>}
      </div>
    </section>

    <div className="mx-auto max-w-6xl px-4 py-4 sm:px-8 sm:py-8">
      {item.kind === 'pages' && <ol className="space-y-4 sm:space-y-6">
        {Array.from({ length: item.pages ?? 0 }, (_, i) => i + 1).map((page) => <li key={page} className="overflow-hidden rounded-xl border border-[var(--border)] bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${base}/${String(page).padStart(2, '0')}.jpg`} alt={`${item.title}, page ${page} of ${item.pages}`} loading={page <= 2 ? 'eager' : 'lazy'} draggable={false} className="block h-auto w-full select-none" />
        </li>)}
      </ol>}

      {item.kind === 'sheets' && (sheet ? <>
        <nav aria-label="Sheets" className="mb-4 flex gap-2 overflow-x-auto pb-2">
          {sheets.map((s, i) => <Link key={s.name + i} href={i === 0 ? base : `${base}?tab=${i}`} scroll={false} aria-current={i === tab ? 'page' : undefined} className={`shrink-0 rounded-lg border px-3 py-1.5 text-xs font-bold ${i === tab ? 'border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]' : 'border-[var(--border)] bg-[var(--card)]'}`}>{s.name}</Link>)}
        </nav>
        <div className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <table className="border-collapse text-left text-xs leading-5">
            <caption className="sr-only">{sheet.name}</caption>
            <tbody>
              {sheet.rows.map((row, r) => <tr key={r} className="border-t border-[var(--border)] first:border-t-0">
                <th scope="row" className="sticky left-0 bg-[var(--muted)] px-2 py-1 text-right font-normal text-[var(--muted-foreground)]">{r + 1}</th>
                {row.map((cell, c) => <td key={c} className="max-w-[26rem] min-w-[4rem] px-2 py-1 align-top whitespace-pre-wrap break-words">{cell}</td>)}
              </tr>)}
            </tbody>
          </table>
        </div>
        {sheet.truncated && <p className="mt-3 text-xs text-[var(--muted-foreground)]">This sheet is longer than the preview shows. Team members can open the full file.</p>}
        <p className="mt-3 text-xs text-[var(--muted-foreground)]">Values as saved in the model. Formulas and formatting are in the original file.</p>
      </> : <p>This preview isn't available right now.</p>)}

      {item.kind === 'text' && (text
        ? <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 sm:p-8"><InitiativeStory text={text} /></section>
        : <p>This preview isn't available right now.</p>)}
    </div>
  </main>
}
