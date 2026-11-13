import { NextRequest, NextResponse } from 'next/server'
import { getTopic, CoreTopic } from '@/data/modules'
import { LEARNING_LEVELS, LearningLevel } from '@/types/learning'
import { getTopicVolume, getVolumeCount } from '@/lib/learning/topicVolumes'

// GET /api/learn/topics/[slug]/volume?v=0&level=HIGH_SCHOOL
// One Digital Scroll volume (up to 7 chapters) at one learning level.
// Content is static, so responses are cacheable.
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const topic = getTopic(slug as CoreTopic)
  if (!topic) {
    return NextResponse.json({ success: false, error: 'Topic not found' }, { status: 404 })
  }

  const { searchParams } = new URL(request.url)
  const volume = Number.parseInt(searchParams.get('v') ?? '0', 10)
  const levelParam = (searchParams.get('level') ?? 'HIGH_SCHOOL').toUpperCase()
  const volumeCount = getVolumeCount(topic.modules.length)

  if (!Number.isInteger(volume) || volume < 0 || volume >= volumeCount) {
    return NextResponse.json({ success: false, error: 'Volume not found' }, { status: 404 })
  }
  if (!(levelParam in LEARNING_LEVELS)) {
    return NextResponse.json({ success: false, error: 'Invalid level' }, { status: 400 })
  }

  return NextResponse.json(
    { success: true, data: getTopicVolume(topic, volume, levelParam as LearningLevel) },
    { headers: { 'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400' } }
  )
}
