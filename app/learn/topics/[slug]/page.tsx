import { notFound } from 'next/navigation'
import { getTopic, CoreTopic } from '@/data/modules'
import { LearningLevel, LEARNING_LEVELS } from '@/types/learning'
import TopicPageClient from './TopicPageClient'
import { toTopicSummary } from '@/lib/learning/topicVolumes'

interface PageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ level?: string }>
}

export default async function TopicPage({ params, searchParams }: PageProps) {
  const { slug } = await params
  const { level } = await searchParams

  // Server-side: full topic data stays on the server; the client gets a content-free summary
  const topic = getTopic(slug as CoreTopic)

  if (!topic) {
    notFound()
  }

  // Determine initial level from URL params
  const levelParam = level?.toUpperCase() as LearningLevel | undefined
  const initialLevel: LearningLevel = levelParam && LEARNING_LEVELS[levelParam] ? levelParam : 'HIGH_SCHOOL'

  return (
    <TopicPageClient
      // Summary only: lesson HTML is fetched per volume when the Digital Scroll opens
      topic={toTopicSummary(topic)}
      initialLevel={initialLevel}
    />
  )
}
