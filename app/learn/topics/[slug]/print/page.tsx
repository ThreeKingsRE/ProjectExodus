import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getTopic, CoreTopic } from '@/data/modules'
import { LEARNING_LEVELS, LearningLevel } from '@/types/learning'
import { VOLUME_SIZE, getVolumeCount, volumeLabel } from '@/lib/learning/topicVolumes'
import PrintTextbook, { type PrintChapter } from './PrintTextbook'

// Printable / downloadable textbook for a topic at one learning level.
//   ?level=HIGH_SCHOOL&scope=all | v2 | c5
// Text style, quiz and answer-key options are chosen on the page itself.

interface PageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ level?: string; scope?: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const topic = getTopic(slug as CoreTopic)
  return { title: topic ? `${topic.title} · Print or download` : 'Print', robots: { index: false } }
}

export default async function PrintPage({ params, searchParams }: PageProps) {
  const { slug } = await params
  const sp = await searchParams
  const topic = getTopic(slug as CoreTopic)
  if (!topic) notFound()

  const levelParam = (sp.level ?? '').toUpperCase()
  const level: LearningLevel = levelParam in LEARNING_LEVELS ? (levelParam as LearningLevel) : 'HIGH_SCHOOL'
  const volumeCount = getVolumeCount(topic.modules.length)

  // Scope: whole book, one volume (v1..), or one chapter (c1..)
  const m = (sp.scope ?? 'all').match(/^(v|c)(\d+)$/)
  let start = 0
  let end = topic.modules.length
  let scope = 'all'
  if (m) {
    const n = Number(m[2])
    if (m[1] === 'v' && n >= 1 && n <= volumeCount) { start = (n - 1) * VOLUME_SIZE; end = Math.min(start + VOLUME_SIZE, end); scope = `v${n}` }
    if (m[1] === 'c' && n >= 1 && n <= topic.modules.length) { start = n - 1; end = n; scope = `c${n}` }
  }

  const chapters: PrintChapter[] = topic.modules.slice(start, end).map((mod, i) => ({
    number: start + i + 1,
    title: mod.title,
    description: mod.description[level] ?? mod.description.HIGH_SCHOOL ?? '',
    lessons: mod.lessons.map((l) => ({ title: l.title, html: l.content[level] ?? l.content.HIGH_SCHOOL ?? '' })),
    quiz: mod.quiz.questions.map((q) => ({
      question: q.question[level] ?? q.question.HIGH_SCHOOL ?? '',
      options: q.options[level] ?? q.options.HIGH_SCHOOL ?? [],
      correctIndex: q.correctIndex,
      explanation: q.explanation[level] ?? q.explanation.HIGH_SCHOOL ?? '',
    })),
  }))

  return (
    <PrintTextbook
      topicId={topic.id}
      topicTitle={topic.title}
      topicDescription={topic.description}
      level={level}
      scope={scope}
      volumeCount={volumeCount}
      volumeLabels={Array.from({ length: volumeCount }, (_, i) => volumeLabel(i))}
      chapterTitles={topic.modules.map((mod) => mod.title)}
      chapters={chapters}
    />
  )
}
