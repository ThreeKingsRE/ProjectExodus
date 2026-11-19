import type { CoreTopic, TopicDefinition } from '@/types/modules'
import type { LearningLevel } from '@/types/learning'
import { getVolumeCount } from '@/lib/learning/topicVolumes'
import { groupLessonsIntoLearningModules } from './TopicBookBrowser'

// The inside-flap pitch for each textbook: what it's about and what you'll be able to do
const BLURBS: Record<CoreTopic, { hook: string; pitch: string }> = {
  'renewable-energy': {
    hook: 'Every rooftop, river and gust of wind is an energy source waiting to be understood.',
    pitch: 'This book starts with how sunlight becomes electricity and moves through wind, water and other sources to the batteries and grids that hold it all together. It ends with the people side: how communities, policy and money decide who gets clean power, and how the transition can be fair.',
  },
  'water-systems': {
    hook: 'Every community depends on water, and few of us know where ours comes from or where it goes.',
    pitch: 'Follow water from the rain on a roof through harvesting, treatment and reuse, into fields and fish ponds, and across the ecosystems that clean it. Then see the sensors, prices and policies that protect it, and what water systems of the future could look like.',
  },
  'regenerative-agriculture': {
    hook: 'Healthy food starts with living soil.',
    pitch: 'Learn how growers rebuild soil instead of using it up: cover crops and rotations, compost, trees among crops, animals that graze in step with the land, and pest and water management that works with nature. The final part covers the economics that keep regenerative farms going, from a backyard bed to a working farm.',
  },
  'zero-waste': {
    hook: 'When we throw something away, there is no "away".',
    pitch: 'Trace what we use from design to disposal and learn how to close the loop: composting food waste, recycling well, designing waste out from the start, and building circular businesses. You finish with the community and policy tools that turn good habits into whole systems.',
  },
  'green-building': {
    hook: 'The buildings we live and work in shape our energy use, our health and our climate.',
    pitch: 'Start with passive design that heats, cools and lights a building with the sun and air, then choose materials, systems and landscapes that use less and last longer. You will also see how indoor health, certification and renovation turn good principles into real buildings.',
  },
  'food-sovereignty': {
    hook: 'Who grows your food, who keeps the seeds, and who decides what is on the table?',
    pitch: 'Explore the right of communities to shape their own food systems: urban farms, seed saving, cooperatives and local markets, preserving the harvest, and the Indigenous and cultural knowledge that has fed people for generations. It closes with the policies and plans that help a place feed itself.',
  },
}

/** "About this book": the inside-cover pitch above the table of contents. */
export function BookBlurb({ topic, level }: { topic: TopicDefinition; level: LearningLevel }) {
  const blurb = BLURBS[topic.id as CoreTopic]
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
        <h2 id="about-book" style={{ fontSize: 'clamp(1.15rem, 3.6vw, 1.5rem)', lineHeight: 1.35 }} className="relative mx-auto mt-3 max-w-xl font-serif font-semibold italic text-[var(--foreground)]">
          {blurb?.hook ?? topic.description}
        </h2>
        {blurb && (
          <p className="relative mx-auto mt-4 max-w-2xl font-serif text-[15px] leading-7 text-[var(--muted-foreground)] sm:text-base">
            {blurb.pitch}
          </p>
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
