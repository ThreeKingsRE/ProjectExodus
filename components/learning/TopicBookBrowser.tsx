'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, ChevronDown, CheckCircle2 } from 'lucide-react'
import type { Module, CoreTopic, TopicDefinition } from '@/types/modules'
import { LearningLevel, LEARNING_LEVELS } from '@/types/learning'
import { moduleProgressKeys } from '@/lib/learning/topicVolumes'

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

const formatMinutes = (m: number) => (m < 60 ? `${m} min` : `${Math.floor(m / 60)} h${m % 60 ? ` ${m % 60} min` : ''}`)

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

// One part of the table of contents: a heading row that opens to its chapters
function ContentsPart({
  name, partNumber, lessons, selectedLevel, topicSlug, isCompleted, getModuleIndex, isExpanded, onToggle, onOpenDigitalScroll,
}: {
  name: string
  partNumber: number
  lessons: Module[]
  selectedLevel: LearningLevel
  topicSlug: CoreTopic
  isCompleted: (module: Module) => boolean
  getModuleIndex: (module: Module) => number
  isExpanded: boolean
  onToggle: () => void
  onOpenDigitalScroll?: (moduleIndex: number) => void
}) {
  const done = lessons.filter(isCompleted).length
  const complete = done === lessons.length && lessons.length > 0
  const minutes = lessons.reduce((acc, m) => acc + (m.duration[selectedLevel] || 0), 0)
  const panelId = `contents-part-${partNumber}`

  return (
    <li className="border-t border-[var(--border)] first:border-t-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={panelId}
        className="group flex w-full items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-[var(--muted)]/60 sm:gap-5 sm:px-6"
      >
        <span className="w-10 shrink-0 text-center font-serif text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)] sm:w-12">
          {complete ? <CheckCircle2 className="mx-auto h-5 w-5" aria-label="Part complete" /> : <>Part<span className="block text-lg leading-none tracking-normal">{ROMAN[partNumber - 1] ?? partNumber}</span></>}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-serif text-lg font-semibold leading-snug text-[var(--foreground)] sm:text-xl">{name}</span>
          <span className="mt-0.5 block text-xs text-[var(--muted-foreground)]">
            {lessons.length} chapter{lessons.length !== 1 ? 's' : ''}{minutes ? ` · about ${formatMinutes(minutes)}` : ''}{done > 0 && !complete ? ` · ${done} read` : ''}
          </span>
        </span>
        <span className="hidden shrink-0 items-center gap-2 sm:flex" aria-hidden>
          <span className="h-1 w-16 overflow-hidden rounded-full bg-[var(--muted)]">
            <span className="block h-full rounded-full bg-[var(--primary)] transition-all" style={{ width: `${lessons.length ? (done / lessons.length) * 100 : 0}%` }} />
          </span>
        </span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-[var(--muted-foreground)] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ol className="pb-3 pl-4 pr-4 sm:pl-[5.5rem] sm:pr-6">
              {lessons.map((lesson, i) => {
                const read = isCompleted(lesson)
                const content = (
                  <>
                    <span className="w-9 shrink-0 pt-0.5 font-serif text-sm tabular-nums text-[var(--muted-foreground)]">{partNumber}.{i + 1}</span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-baseline gap-2">
                        <span className={`font-medium leading-snug text-[var(--foreground)] group-hover:text-[var(--primary)] ${read ? 'opacity-70' : ''}`}>{lesson.title}</span>
                        <span aria-hidden className="mb-1 hidden min-w-[1.5rem] flex-1 border-b border-dotted border-[var(--border)] sm:block" />
                        <span className="shrink-0 text-xs tabular-nums text-[var(--muted-foreground)]">
                          {read ? <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400"><CheckCircle2 className="h-3.5 w-3.5" />Read</span> : `${lesson.duration[selectedLevel]} min`}
                        </span>
                      </span>
                      <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-[var(--muted-foreground)] sm:text-sm">{lesson.description[selectedLevel]}</span>
                    </span>
                  </>
                )
                const rowClass = 'group flex w-full items-start gap-2 rounded-lg px-2 py-2.5 text-left transition-colors hover:bg-[var(--muted)]/70'
                return (
                  <li key={`${getModuleIndex(lesson)}-${lesson.id}`}>
                    {onOpenDigitalScroll ? (
                      <button type="button" onClick={() => onOpenDigitalScroll(getModuleIndex(lesson))} className={rowClass}>{content}</button>
                    ) : (
                      <Link href={`/learn/modules/${lesson.slug}?level=${selectedLevel.toLowerCase()}&topic=${topicSlug}`} className={rowClass}>{content}</Link>
                    )}
                  </li>
                )
              })}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

// The topic's table of contents, set like the contents page of the book
export function TopicBookBrowser({ topicSlug, topic, selectedLevel, completedModules = [], onOpenDigitalScroll }: TopicBookProps) {
  const [expandedModule, setExpandedModule] = useState<string | null>(null)

  if (!topic) return null

  const parts = groupLessonsIntoLearningModules(topic.modules, topicSlug)

  // Progress is keyed per module position (some topics reuse a slug for different modules)
  const progressKeys = moduleProgressKeys(topic.modules)
  const completedSet = new Set(completedModules)
  const getModuleIndex = (module: Module) => topic.modules.indexOf(module)
  const isCompleted = (module: Module) => completedSet.has(progressKeys[getModuleIndex(module)])

  const totalChapters = topic.modules.length
  const read = topic.modules.filter(isCompleted).length
  const percent = totalChapters > 0 ? Math.round((read / totalChapters) * 100) : 0
  const level = LEARNING_LEVELS[selectedLevel]

  return (
    <section aria-labelledby="contents-heading" className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
        {/* Heading, like the top of a contents page */}
        <header className="border-b border-[var(--border)] px-5 pb-5 pt-7 text-center sm:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--muted-foreground)]">Contents</p>
          <h2 id="contents-heading" style={{ fontSize: 'clamp(1.6rem, 5vw, 2.1rem)', lineHeight: 1.15 }} className="mt-2 font-serif font-bold text-[var(--foreground)]">{topic.title}</h2>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            {parts.length} parts · {totalChapters} chapters · {level.label} edition
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

        <ol>
          {parts.map((group, idx) => (
            <ContentsPart
              key={group.learningModule}
              name={group.learningModule}
              partNumber={idx + 1}
              lessons={group.lessons}
              selectedLevel={selectedLevel}
              topicSlug={topicSlug}
              isCompleted={isCompleted}
              getModuleIndex={getModuleIndex}
              isExpanded={expandedModule === group.learningModule}
              onToggle={() => setExpandedModule(expandedModule === group.learningModule ? null : group.learningModule)}
              onOpenDigitalScroll={onOpenDigitalScroll}
            />
          ))}
        </ol>
      </div>
      <p className="mt-3 text-center text-xs text-[var(--muted-foreground)]">Choose any chapter to open the book there.</p>
    </section>
  )
}
