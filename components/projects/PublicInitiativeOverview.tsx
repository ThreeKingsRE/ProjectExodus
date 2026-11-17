import Link from 'next/link'
import { ArrowRight, Globe2, Lock, MessageSquare, Users } from 'lucide-react'
import type { PublicProject } from '@/lib/projects/public-view'

export function InitiativeStory({ text }: { text: string }) {
  const inline = (value: string) => value.split(/(\[[^\]]+\]\(https:\/\/[^\s)]+\)|https:\/\/[^\s]+)/g).map((part, i) => {
    const named = part.match(/^\[([^\]]+)\]\((https:\/\/[^\s)]+)\)$/)
    if (named || /^https:\/\//.test(part)) return <a key={i} href={named ? named[2] : part} target="_blank" rel="noreferrer" className="underline underline-offset-4">{named ? named[1] : part}</a>
    return part
  })
  return <div className="space-y-5 text-base leading-8 text-[var(--foreground)]">
    {text.split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => {
      const lines = paragraph.trim().split('\n')
      const cells = (line: string) => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => cell.trim())
      if (lines.length >= 2 && lines[0].trim().startsWith('|') && /^\|?[\s:|-]+\|?$/.test(lines[1]) && lines[1].includes('---')) {
        const headers = cells(lines[0])
        return <div key={index} className="overflow-x-auto rounded-xl border border-[var(--border)]"><table className="w-full min-w-[420px] border-collapse text-left text-sm leading-6"><thead className="bg-[var(--muted)]"><tr>{headers.map((heading, i) => <th key={i} scope="col" className="px-4 py-3 font-bold">{inline(heading)}</th>)}</tr></thead><tbody>{lines.slice(2).map((row, r) => <tr key={r} className="border-t border-[var(--border)]">{headers.map((_, c) => <td key={c} className="px-4 py-3 align-top">{inline(cells(row)[c] || '')}</td>)}</tr>)}</tbody></table></div>
      }
      if (lines.length === 1 && paragraph.startsWith('## ')) return <h2 key={index} className="pt-4 text-2xl font-black leading-tight">{inline(paragraph.slice(3))}</h2>
      if (lines.length === 1 && paragraph.startsWith('### ')) return <h3 key={index} className="pt-2 text-lg font-bold">{inline(paragraph.slice(4))}</h3>
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
    {project.coverImage && <img src={project.coverImage} alt={`${project.name} initiative cover`} className="max-h-[460px] w-full object-cover" />}
    <section className="border-b border-[var(--border)] bg-[var(--card)] px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/community/projects" className="text-sm font-semibold">← Community initiatives</Link>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider"><span className="inline-flex items-center gap-2"><Globe2 size={15} />Public overview</span><span>{project.status.toLowerCase().replaceAll('_', ' ')}</span></div>
        <h1 className="mt-4 text-4xl font-black sm:text-5xl">{project.name}</h1>
        {project.tagline && <p className="mt-4 text-xl font-semibold">{project.tagline}</p>}
        <p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--muted-foreground)]">{project.description}</p>
        <p className="mt-5 text-sm">Posted by {project.organizer.name} · {project.participants} {project.participants === 1 ? 'participant' : 'participants'}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href={signIn} style={{ color: 'var(--primary-foreground)' }} className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3 font-bold"><Users size={17} /> Follow or collaborate <ArrowRight size={17} /></Link>
          <Link href={contact} className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-5 py-3 font-bold"><MessageSquare size={17} /> Message the organizer</Link>
        </div>
      </div>
    </section>
    <div className="mx-auto max-w-6xl space-y-8 px-5 py-10 sm:px-8">
      {project.mission && <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"><h2 className="mb-4 text-xl font-black">Our mission</h2><p className="whitespace-pre-wrap leading-8">{project.mission}</p></section>}
      {project.goal && <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"><h2 className="mb-4 text-xl font-black">Our goal</h2><p className="whitespace-pre-wrap leading-8">{project.goal}</p></section>}
      {project.story && <section aria-label="Public initiative story" className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8"><InitiativeStory text={project.story} /></section>}
      <aside className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
        <h2 className="flex items-center gap-2 text-xl font-black"><Lock size={20} /> Join the conversation</h2>
        <p className="mt-4 leading-7 text-[var(--muted-foreground)]">This overview is open to everyone. Sign in to follow the initiative or join its workspace. Research, discussions, documents, and member tools are available after sign-in and membership where required.</p>
        <Link href={signIn} className="mt-5 inline-flex items-center gap-2 font-bold">Sign in to get involved <ArrowRight size={17} /></Link>
      </aside>
    </div>
  </main>
}

