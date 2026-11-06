import { NextRequest, NextResponse } from 'next/server'
import { getElementById } from '@/data/architecture/elements'
import { getSummaryById, type ElementDetail } from '@/data/architecture/summary'
import { LEARNING_LEVELS, type LearningLevel } from '@/data/architecture/types'

/**
 * GET /api/architecture/elements?ids=a,b,c&level=HIGH_SCHOOL
 *
 * Full content for up to 30 elements at one learning level. Element data is
 * static, so responses are cached aggressively at the CDN and in the browser.
 */
const MAX_IDS = 30

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  const ids = [...new Set((params.get('ids') || '').split(',').map((s) => s.trim()).filter(Boolean))]
  const levelParam = params.get('level') || 'HIGH_SCHOOL'

  if (ids.length === 0 || ids.length > MAX_IDS) {
    return NextResponse.json({ error: `Provide 1-${MAX_IDS} ids` }, { status: 400 })
  }
  if (!LEARNING_LEVELS.includes(levelParam as LearningLevel)) {
    return NextResponse.json({ error: 'Invalid level' }, { status: 400 })
  }
  const level = levelParam as LearningLevel

  const elements: ElementDetail[] = []
  for (const id of ids) {
    const full = getElementById(id)
    const summary = getSummaryById(id)
    if (!full || !summary) continue
    elements.push({
      ...summary,
      level,
      description: full.description[level],
      history: full.history[level],
      characteristics: full.characteristics ?? [],
      famousExamples: full.famousExamples ?? [],
      confusionPairs: full.confusionPairs ?? [],
      etymology: full.etymology,
    })
  }

  return NextResponse.json(
    { elements },
    { headers: { 'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' } }
  )
}
