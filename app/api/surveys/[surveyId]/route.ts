import { NextRequest, NextResponse } from 'next/server'
import { createHash, randomBytes } from 'crypto'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { rateLimit, rateLimitResponse } from '@/lib/rate-limit'
import { canSeeSurvey, isAcceptingResponses, summarize, validateAnswers, type SurveyQuestion } from '@/lib/projects/surveys'
import { getProjectStanding, storedQuestions } from '@/lib/projects/surveys-server'

// Public survey endpoint. Not behind the community proxy, so every request
// checks the survey's audience itself: members only, anyone signed in, or anyone.

type Params = { params: Promise<{ surveyId: string }> }

const GUEST_COOKIE = 'pxs_guest'

function guestKey(token: string) {
  return `guest:${createHash('sha256').update(token).digest('hex')}`
}

async function loadSurvey(surveyId: string) {
  return prisma.projectSurvey.findUnique({
    where: { id: surveyId },
    select: {
      id: true, projectId: true, title: true, description: true, status: true, audience: true,
      anonymous: true, shareResults: true, closesAt: true, questions: true, externalUrl: true,
      project: { select: { name: true, slug: true } },
    },
  })
}

async function respondentKeyFor(request: NextRequest, userId: string | null) {
  if (userId) return { key: `user:${userId}`, newToken: null as string | null }
  const existing = request.cookies.get(GUEST_COOKIE)?.value
  if (existing && /^[a-f0-9]{48}$/.test(existing)) return { key: guestKey(existing), newToken: null }
  const token = randomBytes(24).toString('hex')
  return { key: guestKey(token), newToken: token }
}

/** Summary shared with respondents: counts and averages, never individual written answers. */
async function publicResults(surveyId: string, questions: SurveyQuestion[]) {
  const responses = await prisma.projectSurvey.findUnique({
    where: { id: surveyId },
    select: { responses: { select: { answers: true }, take: 5000 } },
  })
  return summarize(questions, responses?.responses ?? []).map(({ texts, ...rest }) => ({ ...rest, textCount: texts?.length }))
}

// GET - The survey form (and results, if shared and already answered)
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { surveyId } = await params
    const survey = await loadSurvey(surveyId)
    if (!survey) return NextResponse.json({ success: false, error: 'Survey not found.' }, { status: 404 })

    const session = await auth()
    const userId = session?.user?.id ?? null
    const who = await getProjectStanding(survey.projectId, userId)
    if (!who || !canSeeSurvey(survey, who)) {
      const needsSignIn = !userId && survey.status !== 'DRAFT' && survey.audience !== 'PUBLIC'
      return NextResponse.json(
        { success: false, error: needsSignIn ? 'Sign in to answer this survey.' : 'This survey isn’t available to you.', needsSignIn },
        { status: needsSignIn ? 401 : 404 },
      )
    }

    const questions = storedQuestions(survey.questions)
    const guestToken = userId ? null : request.cookies.get(GUEST_COOKIE)?.value
    const key = userId ? `user:${userId}` : guestToken && /^[a-f0-9]{48}$/.test(guestToken) ? guestKey(guestToken) : null
    const hasResponded = key
      ? !!(await prisma.projectSurveyResponse.findUnique({ where: { surveyId_respondentKey: { surveyId, respondentKey: key } }, select: { id: true } }))
      : false

    return NextResponse.json({
      success: true,
      data: {
        id: survey.id,
        title: survey.title,
        description: survey.description,
        project: survey.project,
        anonymous: survey.anonymous,
        status: survey.status,
        accepting: isAcceptingResponses(survey),
        closesAt: survey.closesAt,
        questions,
        externalUrl: survey.externalUrl ?? null,
        hasResponded,
        isPreview: survey.status === 'DRAFT',
        results: hasResponded && survey.shareResults ? await publicResults(surveyId, questions) : null,
      },
    }, { headers: { 'Cache-Control': 'no-store' } })
  } catch (error) {
    console.error('Error loading public survey:', error)
    return NextResponse.json({ success: false, error: 'Failed to load survey.' }, { status: 500 })
  }
}

// POST - Submit answers (one response per person)
export async function POST(request: NextRequest, { params }: Params) {
  try {
    const limit = await rateLimit(request, { id: 'survey-response', limit: 20, windowSeconds: 600 })
    if (!limit.success) return rateLimitResponse(limit.reset)

    const { surveyId } = await params
    const survey = await loadSurvey(surveyId)
    if (!survey) return NextResponse.json({ success: false, error: 'Survey not found.' }, { status: 404 })

    const session = await auth()
    const userId = session?.user?.id ?? null
    const who = await getProjectStanding(survey.projectId, userId)
    if (!who || !canSeeSurvey(survey, who) || survey.status === 'DRAFT') {
      return NextResponse.json({ success: false, error: 'This survey isn’t available to you.' }, { status: 403 })
    }
    if (!isAcceptingResponses(survey)) {
      return NextResponse.json({ success: false, error: 'This survey is closed.' }, { status: 409 })
    }

    const body = await request.json().catch(() => null)
    // Honeypot: real people never fill the hidden "website" field.
    if (body?.website) return NextResponse.json({ success: true, data: { results: null } })

    if (survey.externalUrl) return NextResponse.json({ success: false, error: 'This survey is answered on another site.' }, { status: 400 })
    const questions = storedQuestions(survey.questions)
    const answers = validateAnswers(questions, body?.answers)
    if (!answers.ok) return NextResponse.json({ success: false, error: answers.error }, { status: 400 })

    const { key, newToken } = await respondentKeyFor(request, userId)
    try {
      await prisma.projectSurveyResponse.create({
        data: { surveyId, userId, respondentKey: key, answers: answers.data },
      })
    } catch (err: unknown) {
      if ((err as { code?: string })?.code === 'P2002') {
        return NextResponse.json({ success: false, error: 'You’ve already answered this survey. Thank you!' }, { status: 409 })
      }
      throw err
    }

    const res = NextResponse.json({
      success: true,
      data: { results: survey.shareResults ? await publicResults(surveyId, questions) : null },
    })
    if (newToken) {
      res.cookies.set(GUEST_COOKIE, newToken, {
        httpOnly: true, secure: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 365,
      })
    }
    return res
  } catch (error) {
    console.error('Error saving survey response:', error)
    return NextResponse.json({ success: false, error: 'Failed to submit your answers.' }, { status: 500 })
  }
}
