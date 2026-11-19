import type { CoreTopic, TopicDefinition } from '@/types/modules'
import { LEARNING_LEVELS, type LearningLevel } from '@/types/learning'
import { BOOK_PITCHES, BOOK_OUTCOMES } from '@/lib/learning/bookPitches'
import { getVolumeCount } from '@/lib/learning/topicVolumes'
import { groupLessonsIntoLearningModules } from './TopicBookBrowser'

/** "About this book": the inside-cover pitch above the table of contents. */
export function BookBlurb({ topic, level }: { topic: TopicDefinition; level: LearningLevel }) {
  // The pitch for the whole book, written at the reader's level
  const pitch = BOOK_PITCHES[topic.id as CoreTopic]?.[level] ?? topic.description
  const outcomes = BOOK_OUTCOMES[topic.id as CoreTopic]?.[level] ?? []
  const parts = groupLessonsIntoLearningModules(topic.modules, topic.id).length
  const minutes = topic.modules.reduce((acc, m) => acc + (m.duration[level] || 0), 0)
  const hours = Math.max(1, Math.round(minutes / 60))
  const volumes = getVolumeCount(topic.modules.length)
  const facts = [
    `${topic.modules.length} chapters`,
    `${parts} parts`,
    `${volumes} volume${volumes === 1 ? '' : 's'}`,
    `About ${hours} hours`,
    'Elementary to PhD',
  ]

  return (
    <section aria-labelledby="about-book" className="mx-auto mb-8 max-w-3xl sm:mb-10">
      <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-7 text-center shadow-sm sm:px-10 sm:py-9">
        {/* Thin inner rule, like a printed flap */}
        <div aria-hidden className="pointer-events-none absolute inset-2 rounded-xl border border-[var(--border)] opacity-60" />
        <p className="relative text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--muted-foreground)]">About this book</p>
        <h2 id="about-book" style={{ fontSize: '0.8rem', lineHeight: 1.4 }} className="relative mt-2 font-serif italic text-[var(--muted-foreground)]">
          {LEARNING_LEVELS[level].label} edition
        </h2>
        <p className="relative mx-auto mt-4 max-w-2xl font-serif text-[15px] leading-7 text-[var(--foreground)] sm:text-base sm:leading-8">
          {pitch}
        </p>
        {outcomes.length > 0 && (
          <div className="relative mx-auto mt-6 max-w-xl text-left">
            <h3 style={{ fontSize: '0.7rem', lineHeight: 1.4 }} className="mb-2 text-center font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">What you&apos;ll learn</h3>
            <ul className="space-y-1.5">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-sm leading-snug text-[var(--foreground)]">
                  <span aria-hidden className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="relative mx-auto mt-6 max-w-xl text-xs font-medium leading-6 text-[var(--muted-foreground)]">
          {facts.join('  ·  ')}
        </p>
        <p className="relative mt-4 text-xs text-[var(--muted-foreground)]">
          You&apos;ll choose your reading level when you open the book.
        </p>
      </div>
    </section>
  )
}
