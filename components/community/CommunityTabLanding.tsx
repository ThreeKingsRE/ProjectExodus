import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight, ChevronDown, Lock, MessageSquare, Rocket, Waves } from 'lucide-react'

const tabs = {
  discussions: {
    label: 'Discussions', title: 'ROUND TABLE',
    description: 'Where every voice shapes the future. Bring a question, share an idea, and learn from people working toward a more sustainable world.',
    href: '/community/discussions', icon: MessageSquare,
    features: ['Start a conversation', 'Share ideas and research', 'Build understanding together'],
  },
  initiatives: {
    label: 'Initiatives', title: 'Ideas take root here.',
    description: 'Turn shared purpose into practical change. Discover community-led initiatives, follow their progress, and bring your skills to a shared goal.',
    href: '/community/projects', icon: Rocket,
    features: ['Join an initiative', 'Contribute research', 'Collaborate in project workspaces'],
  },
  fishTank: {
    label: 'Fish Tank', title: 'Find your community.',
    description: 'A living network of people making a difference. Meet fellow changemakers, grow your connections, and build your place in the community.',
    href: '/fishbowl', icon: Waves,
    features: ['Meet community members', 'Grow your network', 'Make your tank your own'],
  },
} as const

/** `children` (e.g. the public list of initiatives) shows right under the intro. */
export function CommunityTabLanding({ tab, children }: { tab: keyof typeof tabs; children?: ReactNode }) {
  const content = tabs[tab]
  const Icon = content.icon
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className={`relative isolate overflow-hidden border-b border-[var(--border)] px-6 ${children ? 'flex min-h-[calc(100svh-68px)] flex-col justify-center py-6 sm:block sm:min-h-0 sm:py-14' : 'py-14 sm:py-28'}`}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--accent)]/10" />
        <div className="mx-auto max-w-4xl text-center">
          <Icon aria-hidden="true" className={`mx-auto text-[var(--primary)] ${children ? 'mb-3 h-8 w-8 sm:mb-6 sm:h-12 sm:w-12' : 'mb-6 h-12 w-12'}`} />
          <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[var(--primary)]">The community · {content.label}</p>
          <h1 className={`font-black tracking-tight sm:text-6xl ${children ? 'text-[1.75rem] leading-tight' : 'text-4xl'}`}>{content.title}</h1>
          <p className={`mx-auto max-w-2xl leading-relaxed text-[var(--muted-foreground)] ${children ? 'mt-3 text-sm sm:mt-6 sm:text-lg' : 'mt-6 text-lg'}`}>{content.description}</p>
          <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 ${children ? 'mt-5 sm:mt-9' : 'mt-9'}`}>
            <Link href={`/auth/signin?callbackUrl=${encodeURIComponent(content.href)}`} style={{ color: 'var(--primary-foreground)' }} className={`inline-flex items-center gap-2 rounded-full bg-[var(--primary)] font-bold hover:opacity-90 ${children ? 'px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-base' : 'px-6 py-3'}`}>
              Sign in to participate <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 sm:h-[18px] sm:w-[18px]" />
            </Link>
            <Link href="/auth/signup" className={`inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card)] font-bold hover:border-[var(--primary)] ${children ? 'px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-base' : 'px-6 py-3'}`}>Join the community</Link>
          </div>
          {children && (
            <a href="#public-initiatives" className="mt-10 inline-flex flex-col items-center gap-1 text-xs font-semibold text-[var(--muted-foreground)] sm:hidden">
              See the initiatives <ChevronDown aria-hidden="true" className="h-4 w-4 animate-bounce" />
            </a>
          )}
          {!children && <p className="mt-5 inline-flex items-center justify-center gap-2 text-sm text-[var(--muted-foreground)]"><Lock aria-hidden="true" size={14} /> Member content and tools unlock after sign-in.</p>}
        </div>
      </section>
      {children}
      <section aria-label="Community features" className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <ul className="grid grid-cols-3 gap-2 sm:gap-4">
          {content.features.map(feature => <li key={feature} className="flex flex-col items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--card)] p-2.5 text-center text-[11px] leading-snug font-semibold sm:flex-row sm:gap-3 sm:rounded-2xl sm:p-6 sm:text-left sm:text-base"><Lock aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[var(--primary)] sm:h-4 sm:w-4" />{feature}</li>)}
        </ul>
        <nav aria-label="Community introductions" className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-3 text-xs sm:text-sm font-semibold text-[var(--primary)]">
          <Link href="/community">Current Events</Link>
          {Object.values(tabs).map(item => <Link key={item.href} href={item.href} aria-current={item.href === content.href ? 'page' : undefined}>{item.label}</Link>)}
        </nav>
      </section>
    </div>
  )
}
