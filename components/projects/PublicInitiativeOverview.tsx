import Link from 'next/link'
import { ArrowRight, ClipboardList, Globe2, Lock, Megaphone, MessageSquare, Users } from 'lucide-react'
import type { PublicProject } from '@/lib/projects/public-view'
import { InitiativeShare } from './InitiativeShare'
import { LinkedText } from './LinkedText'
import { LiveTable } from './LiveTable'
import type { LiveTableView } from '@/lib/projects/live-tables'

/**
 * The overview story. A line {{table:ID}} shows a live table read from a workspace
 * spreadsheet: `tables` supplies its rows (public page), or with `projectId` the
 * workspace loads them for members, who can also refresh it.
 */
export function InitiativeStory({ text, tables, projectId, canRefresh = false }: { text: string; tables?: Record<string, LiveTableView>; projectId?: string; canRefresh?: boolean }) {
  const inline = (value: string) => <LinkedText text={value} />
  return <div className="space-y-4 sm:space-y-5 text-sm leading-7 sm:text-base sm:leading-8 text-[var(--foreground)]">
    {text.split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => {
      const lines = paragraph.trim().split('\n')
      const live = lines.length === 1 ? lines[0].trim().match(/^\{\{table:([a-z0-9]{8,40})\}\}$/) : null
      if (live) {
        if (tables && !tables[live[1]]) return null // removed table: show nothing to visitors
        return <LiveTable key={index} id={live[1]} projectId={projectId} initial={tables ? tables[live[1]] : undefined} canRefresh={canRefresh} />
      }
      const cells = (line: string) => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => cell.trim())
      if (lines.length >= 2 && lines[0].trim().startsWith('|') && /^\|?[\s:|-]+\|?$/.test(lines[1]) && lines[1].includes('---')) {
        const headers = cells(lines[0])
        return <div key={index} className="overflow-x-auto rounded-xl border border-[var(--border)]"><table className="w-full sm:min-w-[420px] border-collapse text-left text-xs leading-5 sm:text-sm sm:leading-6 [&_th]:!px-2 [&_td]:!px-2 [&_th]:!py-2 [&_td]:!py-2 sm:[&_th]:!px-4 sm:[&_td]:!px-4 sm:[&_th]:!py-3 sm:[&_td]:!py-3"><thead className="bg-[var(--muted)]"><tr>{headers.map((heading, i) => <th key={i} scope="col" className="px-4 py-3 font-bold">{inline(heading)}</th>)}</tr></thead><tbody>{lines.slice(2).map((row, r) => <tr key={r} className="border-t border-[var(--border)]">{headers.map((_, c) => <td key={c} className="px-4 py-3 align-top">{inline(cells(row)[c] || '')}</td>)}</tr>)}</tbody></table></div>
      }
      if (lines.length === 1 && paragraph.startsWith('## ')) return <h2 key={index} className="pt-2 sm:pt-4 text-lg sm:text-2xl font-black leading-tight">{inline(paragraph.slice(3))}</h2>
      if (lines.length === 1 && paragraph.startsWith('### ')) return <h3 key={index} className="pt-1 sm:pt-2 text-base sm:text-lg font-bold">{inline(paragraph.slice(4))}</h3>
      return <p key={index} className="whitespace-pre-wrap break-words">{inline(paragraph)}</p>
    })}
  </div>
}

/** The same saved overview works for any initiative whose creator enables public view. */
export function PublicInitiativeOverview({ project }: { project: PublicProject }) {
  const path = `/community/projects/${encodeURIComponent(project.slug)}`
  const signIn = `/auth/signin?callbackUrl=${encodeURIComponent(path)}`
  const contact = `/auth/signin?callbackUrl=${encodeURIComponent(`/messages/${project.organizer.id}`)}`
  return <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
    {project.coverImage && <img src={project.coverImage} alt={`${project.name} initiative cover`} className="aspect-[21/9] sm:aspect-auto max-h-[460px] w-full object-cover" />}
    <section className="border-b border-[var(--border)] bg-[var(--card)] px-4 py-4 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <Link href="/community/projects" className="text-sm font-semibold">← Community initiatives</Link>
        <div className="mt-3 sm:mt-6 flex flex-wrap items-center gap-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider"><span className="inline-flex items-center gap-2"><Globe2 size={15} />Public overview</span><span>{project.status.toLowerCase().replaceAll('_', ' ')}</span>{project.ventureType && <span>{project.ventureType}</span>}</div>
        <h1 className="mt-2 sm:mt-4 text-2xl leading-tight font-black break-words sm:text-5xl">{project.name}</h1>
        {project.tagline && <p className="mt-2 sm:mt-4 text-sm sm:text-xl font-semibold">{project.tagline}</p>}
        <p className="mt-3 sm:mt-5 max-w-4xl text-sm leading-6 sm:text-lg sm:leading-8 text-[var(--muted-foreground)] break-words"><LinkedText text={project.description} linkClassName="font-semibold text-[var(--foreground)] underline underline-offset-4 break-all" /></p>
        <p className="mt-3 sm:mt-5 text-xs sm:text-sm">Posted by {project.organizer.name} · {project.participants} {project.participants === 1 ? 'participant' : 'participants'}</p>
        <div className="mt-4 sm:mt-7 flex flex-wrap gap-2 sm:gap-3 [&>:not(dialog)]:!px-3 [&>:not(dialog)]:!py-2 [&>:not(dialog)]:!text-xs [&>:not(dialog)]:!rounded-lg sm:[&>:not(dialog)]:!px-5 sm:[&>:not(dialog)]:!py-3 sm:[&>:not(dialog)]:!text-base sm:[&>:not(dialog)]:!rounded-xl [&_svg]:!w-3.5 [&_svg]:!h-3.5 sm:[&_svg]:!w-[17px] sm:[&_svg]:!h-[17px]">
          {project.surveyUrl && <a href={project.surveyUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--primary-foreground)' }} className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3 font-bold"><ClipboardList size={17} /> Take the survey</a>}
          <Link href={signIn} style={project.surveyUrl ? undefined : { color: 'var(--primary-foreground)' }} className={project.surveyUrl ? 'inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-5 py-3 font-bold' : 'inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3 font-bold'}><Users size={17} /> Follow this initiative <ArrowRight size={17} /></Link>
          <Link href={contact} className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-5 py-3 font-bold"><MessageSquare size={17} /> Message the organizer</Link>
          <InitiativeShare slug={project.slug} name={project.name} />
        </div>
      </div>
    </section>
    <div className="mx-auto max-w-6xl space-y-4 sm:space-y-8 px-4 py-4 sm:px-8 sm:py-10 text-sm sm:text-base">
      {project.mission && <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 sm:p-6"><h2 className="mb-2 sm:mb-4 text-base sm:text-xl font-black">Our mission</h2><p className="whitespace-pre-wrap leading-7 sm:leading-8">{project.mission}</p></section>}
      {project.goal && <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 sm:p-6"><h2 className="mb-2 sm:mb-4 text-base sm:text-xl font-black">Our goal</h2><p className="whitespace-pre-wrap leading-7 sm:leading-8">{project.goal}</p></section>}
      {project.story && <section aria-label="Public initiative story" className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 sm:p-8"><InitiativeStory text={project.story} tables={project.liveTables ?? {}} /></section>}
      {project.updates && project.updates.length > 0 && (
        <section aria-label="Latest updates" className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-black"><Megaphone size={20} /> Latest updates</h2>
          <ul className="space-y-5">
            {project.updates.map(u => (
              <li key={u.id} className="space-y-2 border-b border-[var(--border)] pb-5 last:border-0 last:pb-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {u.image && <img src={u.image} alt="" className="max-h-72 w-full rounded-xl object-cover" loading="lazy" />}
                {u.title && <h3 className="text-lg font-black">{u.title}</h3>}
                <p className="whitespace-pre-wrap leading-7">{u.excerpt}</p>
                <p className="text-xs text-[var(--muted-foreground)]">
                  {u.author ? `${u.author} · ` : ''}{new Date(u.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} · {u.likes} likes · {u.comments} comments
                </p>
              </li>
            ))}
          </ul>
          <Link href={signIn} className="mt-5 inline-flex items-center gap-2 font-bold">Sign in to like, comment, and follow <ArrowRight size={17} /></Link>
        </section>
      )}
      <aside className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6">
        <h2 className="flex items-center gap-2 text-xl font-black"><Lock size={20} /> Join the conversation</h2>
        <p className="mt-4 leading-7 text-[var(--muted-foreground)]">This overview is open to everyone. Sign in to follow the initiative, join its public discussion, and see what the team shares. The team's workspace is for collaborators the organizer invites; followers can ask to join.</p>
        <Link href={signIn} className="mt-5 inline-flex items-center gap-2 font-bold">Sign in to get involved <ArrowRight size={17} /></Link>
      </aside>
    </div>
  </main>
}

