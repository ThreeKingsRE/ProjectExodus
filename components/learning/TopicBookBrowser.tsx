'use client'

import Link from 'next/link'
import { BookOpen, CheckCircle2 } from 'lucide-react'
import type { Module, CoreTopic, TopicDefinition } from '@/types/modules'
import type { LearningLevel } from '@/types/learning'
import { moduleProgressKeys, getVolumeCount, volumeLabel, chapterStartPage, VOLUME_SIZE } from '@/lib/learning/topicVolumes'

interface TopicBookProps {
  topicSlug: CoreTopic
  topic: TopicDefinition
  selectedLevel: LearningLevel
  /** Progress keys (see moduleProgressKeys) of modules the user has completed */
  completedModules?: string[]
  /** Opens the Digital Scroll at a module, by its index in topic.modules */
  onOpenDigitalScroll?: (moduleIndex: number) => void
}

// Learning Module definitions for each core topic - exactly 7 modules per topic
const LEARNING_MODULE_MAPPING: Record<string, { name: string; categories: string[] }[]> = {
  'renewable-energy': [
    { name: 'Solar Energy Systems', categories: ['SOLAR'] },
    { name: 'Wind, Hydro & Ocean Power', categories: ['WIND', 'HYDRO', 'OCEAN'] },
    { name: 'Alternative Energy Sources', categories: ['GEOTHERMAL', 'BIOMASS', 'HYDROGEN'] },
    { name: 'Energy Storage & Grid', categories: ['STORAGE', 'GRID', 'MICROGRIDS', 'DISTRIBUTED'] },
    { name: 'Transportation & Buildings', categories: ['TRANSPORTATION', 'BUILDINGS', 'EFFICIENCY', 'HYBRID'] },
    { name: 'Community & Policy', categories: ['COMMUNITY', 'POLICY', 'FINANCE', 'EQUITY'] },
    { name: 'Energy Transition', categories: ['TRANSITION', 'RESILIENCE'] },
  ],
  'water-systems': [
    { name: 'Water Collection & Harvesting', categories: ['COLLECTION', 'STORMWATER', 'GREEN'] },
    { name: 'Treatment & Reuse', categories: ['TREATMENT', 'REUSE', 'GROUNDWATER'] },
    { name: 'Irrigation & Aquaculture', categories: ['IRRIGATION', 'AQUACULTURE'] },
    { name: 'Ecosystems & Conservation', categories: ['ECOSYSTEMS', 'CONSERVATION'] },
    { name: 'Monitoring & Technology', categories: ['MONITORING', 'TECHNOLOGY'] },
    { name: 'Policy & Economics', categories: ['POLICY', 'ECONOMICS', 'ECONOMY', 'GOVERNANCE'] },
    { name: 'Future Water Systems', categories: ['INTEGRATED', 'SECURITY', 'RESILIENCE', 'CLIMATE', 'URBAN', 'NEXUS', 'TRADITIONAL', 'FUTURES'] },
  ],
  'regenerative-agriculture': [
    { name: 'Soil Health Fundamentals', categories: ['SOIL HEALTH', 'SOIL_HEALTH', 'SOIL_MANAGEMENT'] },
    { name: 'Cover Crops & Rotation', categories: ['COVER CROPS', 'TILLAGE', 'ROTATION'] },
    { name: 'Composting & Organic Matter', categories: ['COMPOSTING'] },
    { name: 'Agroforestry & Perennials', categories: ['AGROFORESTRY', 'PERENNIALS', 'PERENNIAL'] },
    { name: 'Livestock & Grazing', categories: ['LIVESTOCK', 'GRAZING'] },
    { name: 'Pest & Water Management', categories: ['PEST MANAGEMENT', 'PEST_MANAGEMENT', 'WATER', 'BIODIVERSITY'] },
    { name: 'Economics & Future Systems', categories: ['ECONOMICS', 'SEEDS', 'CARBON', 'SYSTEMS', 'COMMUNITY', 'MONITORING', 'CLIMATE', 'LANDSCAPE', 'FUTURE'] },
  ],
  'zero-waste': [
    { name: 'Composting & Food Waste', categories: ['COMPOSTING', 'FOOD WASTE'] },
    { name: 'Recycling & Materials', categories: ['RECYCLING', 'MATERIALS', 'PLASTICS'] },
    { name: 'Design & Prevention', categories: ['DESIGN', 'PREVENTION'] },
    { name: 'Circular Economy', categories: ['CIRCULAR ECONOMY', 'CIRCULAR', 'REUSE'] },
    { name: 'Industry & Technology', categories: ['INDUSTRY', 'TECHNOLOGY', 'ELECTRONICS', 'TEXTILES'] },
    { name: 'Community & Policy', categories: ['COMMUNITY', 'POLICY', 'SAFETY', 'DATA', 'CAREERS'] },
    { name: 'Systems & Future', categories: ['SYSTEMS', 'MASTERCLASS', 'FUTURE'] },
  ],
  'green-building': [
    { name: 'Passive Design Principles', categories: ['PASSIVE DESIGN'] },
    { name: 'Sustainable Materials', categories: ['MATERIALS'] },
    { name: 'Energy & Efficiency', categories: ['ENERGY', 'EFFICIENCY', 'NET ZERO', 'LIGHTING'] },
    { name: 'Water & Landscaping', categories: ['WATER', 'LANDSCAPING', 'LANDSCAPE'] },
    { name: 'Health & Wellness', categories: ['HEALTH', 'WELLNESS', 'QUALITY', 'COMFORT'] },
    { name: 'Certification & Carbon', categories: ['CERTIFICATION', 'CARBON', 'MASTERCLASS'] },
    { name: 'Renovation & Future', categories: ['RENOVATION', 'RESILIENCE', 'TECHNOLOGY', 'PRESERVATION', 'OPERATIONS', 'FUTURE'] },
  ],
  'food-sovereignty': [
    { name: 'Foundations & Philosophy', categories: ['FOUNDATIONS', 'FOOD JUSTICE', 'EQUITY'] },
    { name: 'Urban Agriculture', categories: ['URBAN AGRICULTURE'] },
    { name: 'Seed & Production Systems', categories: ['SEED SYSTEMS', 'PRODUCTION', 'AGROECOLOGY'] },
    { name: 'Local Markets & Cooperatives', categories: ['LOCAL MARKETS', 'COOPERATIVES', 'COOPERATIVE', 'LOCAL FOOD'] },
    { name: 'Preservation & Processing', categories: ['PRESERVATION', 'PROCESSING', 'WASTE'] },
    { name: 'Indigenous & Cultural Knowledge', categories: ['INDIGENOUS SYSTEMS', 'INDIGENOUS', 'CULTURE'] },
    { name: 'Policy & Future', categories: ['POLICY', 'EDUCATION', 'CLIMATE', 'BIODIVERSITY', 'REGENERATIVE', 'RESILIENCE', 'FINANCE', 'FUTURES'] },
  ],
}

// Group lessons (modules in code) into exactly 7 Learning Modules
export function groupLessonsIntoLearningModules(modules: Module[], topicSlug: string): { learningModule: string; lessons: Module[] }[] {
  const mapping = LEARNING_MODULE_MAPPING[topicSlug]

  if (!mapping) {
    // Fallback: group by category if no mapping defined
    const groups: Record<string, Module[]> = {}
    modules.forEach(module => {
      const learningModule = module.category || 'General'
      if (!groups[learningModule]) groups[learningModule] = []
      groups[learningModule].push(module)
    })
    return Object.entries(groups)
      .map(([learningModule, lessons]) => ({ learningModule, lessons }))
      .sort((a, b) => a.learningModule.localeCompare(b.learningModule))
  }

  // Use the defined 7-module mapping
  const result: { learningModule: string; lessons: Module[] }[] = []
  const assignedModuleIds = new Set<string>()

  mapping.forEach(({ name, categories }) => {
    const lessonsInModule = modules.filter(m => {
      const cat = (m.category || '').toUpperCase()
      return categories.some(c => c.toUpperCase() === cat) && !assignedModuleIds.has(m.id)
    })

    lessonsInModule.forEach(m => assignedModuleIds.add(m.id))

    if (lessonsInModule.length > 0) {
      result.push({ learningModule: name, lessons: lessonsInModule })
    }
  })

  // Add any unassigned modules to the last category or create "Additional Topics"
  const unassigned = modules.filter(m => !assignedModuleIds.has(m.id))
  if (unassigned.length > 0) {
    if (result.length > 0) {
      result[result.length - 1].lessons.push(...unassigned)
    } else {
      result.push({ learningModule: 'Additional Topics', lessons: unassigned })
    }
  }

  return result
}

// The topic's table of contents, in the book's own order: volumes, then each
// chapter's number, title and the page it starts on, as printed in the scroll
export function TopicBookBrowser({ topic, completedModules = [], onOpenDigitalScroll, topicSlug, selectedLevel }: TopicBookProps) {
  if (!topic) return null

  const progressKeys = moduleProgressKeys(topic.modules)
  const completedSet = new Set(completedModules)
  const totalChapters = topic.modules.length
  const read = topic.modules.filter((_, i) => completedSet.has(progressKeys[i])).length
  const percent = totalChapters > 0 ? Math.round((read / totalChapters) * 100) : 0
  const volumeCount = getVolumeCount(totalChapters)
  const volumes = Array.from({ length: volumeCount }, (_, v) => topic.modules.slice(v * VOLUME_SIZE, (v + 1) * VOLUME_SIZE))

  return (
    <section aria-labelledby="contents-heading" className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
        <header className="border-b border-[var(--border)] px-5 pb-5 pt-7 text-center sm:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--muted-foreground)]">Table of Contents</p>
          <h2 id="contents-heading" style={{ fontSize: 'clamp(1.6rem, 5vw, 2.1rem)', lineHeight: 1.15 }} className="mt-2 font-serif font-bold text-[var(--foreground)]">{topic.title}</h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            {volumeCount > 1 ? `${volumeCount} volumes · ` : ''}{totalChapters} chapters
          </p>
          <div className="mx-auto mt-5 w-full" style={{ maxWidth: '24rem' }}>
            <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
              <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5" />{read === 0 ? 'Not started' : `${read} of ${totalChapters} chapters read`}</span>
              <span className="font-semibold tabular-nums text-[var(--foreground)]">{percent}%</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[var(--muted)]">
              <div className="h-full rounded-full bg-[var(--primary)] transition-all duration-700" style={{ width: `${percent}%` }} />
            </div>
            {percent === 100 && <p className="mt-3 text-sm font-semibold text-green-600 dark:text-green-400">You&apos;ve read the whole book. Well done.</p>}
          </div>
        </header>

        {volumes.map((chapters, v) => {
          const first = v * VOLUME_SIZE + 1
          return (
            <section key={v} aria-label={volumeLabel(v)} className="border-t border-[var(--border)] first-of-type:border-t-0">
              {volumeCount > 1 && (
                <div className="flex items-baseline justify-between bg-[var(--muted)]/50 px-4 py-2.5 sm:px-6">
                  <h3 style={{ fontSize: '0.8rem', lineHeight: 1.3 }} className="font-serif font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{volumeLabel(v)}</h3>
                  <span className="text-xs text-[var(--muted-foreground)]">Chapters {first}–{first + chapters.length - 1}</span>
                </div>
              )}
              <ol className="px-2 py-1.5 sm:px-4">
                {chapters.map((module, i) => {
                  const index = v * VOLUME_SIZE + i
                  const isRead = completedSet.has(progressKeys[index])
                  const content = (
                    <>
                      <span className="w-7 shrink-0 text-right font-serif text-sm tabular-nums text-[var(--muted-foreground)]">{index + 1}</span>
                      <span className={`min-w-0 font-serif text-[15px] leading-snug text-[var(--foreground)] group-hover:text-[var(--primary)] sm:text-base ${isRead ? 'opacity-70' : ''}`}>{module.title}</span>
                      <span aria-hidden className="mb-1 min-w-[1rem] flex-1 self-end border-b border-dotted border-[var(--border)]" />
                      {isRead && <CheckCircle2 className="h-3.5 w-3.5 shrink-0 self-center text-green-600 dark:text-green-400" aria-label="Read" />}
                      <span className="shrink-0 font-serif text-sm tabular-nums text-[var(--muted-foreground)]">p. {chapterStartPage(i)}</span>
                    </>
                  )
                  const rowClass = 'group flex w-full items-baseline gap-2.5 rounded-lg px-2 py-2.5 text-left transition-colors hover:bg-[var(--muted)]/70'
                  return (
                    <li key={`${index}-${module.id}`}>
                      {onOpenDigitalScroll ? (
                        <button type="button" onClick={() => onOpenDigitalScroll(index)} className={rowClass} aria-label={`Chapter ${index + 1}: ${module.title}, page ${chapterStartPage(i)}${volumeCount > 1 ? ` of ${volumeLabel(v)}` : ''}`}>{content}</button>
                      ) : (
                        <Link href={`/learn/modules/${module.slug}?level=${selectedLevel.toLowerCase()}&topic=${topicSlug}`} className={rowClass}>{content}</Link>
                      )}
                    </li>
                  )
                })}
              </ol>
            </section>
          )
        })}
      </div>
      <p className="mt-3 text-center text-xs text-[var(--muted-foreground)]">Choose any chapter to open the book there.</p>
    </section>
  )
}
