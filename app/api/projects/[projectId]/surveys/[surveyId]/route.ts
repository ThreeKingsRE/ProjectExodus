import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { isAcceptingResponses, parseQuestions, parseSurveySettings, summarize } from '@/lib/projects/surveys'
import { getProjectStanding, storedQuestions } from '@/lib/projects/surveys-server'

type Params = { params: Promise<{ projectId: string; surveyId: string }> }

async function managerOnly(projectId: string) {
  const session = await auth()
  if (!session?.user?.id) return { error: NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 }) }
  const who = await getProjectStanding(projectId, session.user.id)
  if (!who) return { error: NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 }) }
  if (!who.canManage) return { error: NextResponse.json({ success: false, error: 'Only the owner and admins can manage surveys.' }, { status: 403 }) }
  return { userId: session.user.id }
}

// GET - Full survey with results, for owners/admins
export async function GET(_request: NextRequest, { params }: Params) {
  try {
    const { projectId, surveyId } = await params
    const gate = await managerOnly(projectId)
    if (gate.error) return gate.error

    const survey = await prisma.projectSurvey.findFirst({
      where: { id: surveyId, projectId },
      include: {
        responses: {
          select: { id: true, answers: true, createdAt: true, user: { select: { id: true, name: true } } },
          orderBy: { createdAt: 'asc' },
          take: 5000,
        },
      },
    })
    if (!survey) return NextResponse.json({ success: false, error: 'Survey not found.' }, { status: 404 })

    const questions = storedQuestions(survey.questions)
    const responses = survey.responses as { id: string; answers: unknown; createdAt: Date; user: { id: string; name: string | null } | null }[]
    return NextResponse.json({
      success: true,
      data: {
        id: survey.id,
        title: survey.title,
        description: survey.description,
        status: survey.status,
        audience: survey.audience,
        anonymous: survey.anonymous,
        shareResults: survey.shareResults,
        closesAt: survey.closesAt,
        accepting: isAcceptingResponses(survey),
        questions,
        responseCount: responses.length,
        results: summarize(questions, responses),
        respondents: survey.anonymous
          ? []
          : responses.slice(-200).reverse().map(r => ({ name: r.user?.name || 'Guest', at: r.createdAt })),
      },
    })
  } catch (error) {
    console.error('Error loading survey:', error)
    return NextResponse.json({ success: false, error: 'Failed to load survey.' }, { status: 500 })
  }
}

// PATCH - Update settings; questions can only change before the first response
export async function PATCH(request: NextRequest, { params }: Params) {
  try {
    const { projectId, surveyId } = await params
    const gate = await managerOnly(projectId)
    if (gate.error) return gate.error

    const existing = await prisma.projectSurvey.findFirst({
      where: { id: surveyId, projectId },
      select: { id: true, externalUrl: true, _count: { select: { responses: true } } },
    })
    if (!existing) return NextResponse.json({ success: false, error: 'Survey not found.' }, { status: 404 })

    const body = await request.json().catch(() => null)
    const settings = parseSurveySettings(body, true)
    if (!settings.ok) return NextResponse.json({ success: false, error: settings.error }, { status: 400 })
    const data: Record<string, unknown> = { ...settings.data }

    // A linked survey has no questions on this site
    if (body?.questions !== undefined && !(data.externalUrl ?? existing.externalUrl)) {
      if (existing._count.responses > 0) {
        return NextResponse.json(
          { success: false, error: 'Questions are locked once people have responded. Duplicate the survey to change them.' },
          { status: 409 },
        )
      }
      const questions = parseQuestions(body.questions)
      if (!questions.ok) return NextResponse.json({ success: false, error: questions.error }, { status: 400 })
      data.questions = questions.data
    }

    await prisma.projectSurvey.update({ where: { id: surveyId }, data })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating survey:', error)
    return NextResponse.json({ success: false, error: 'Failed to update survey.' }, { status: 500 })
  }
}

// DELETE - Remove the survey and all its responses
export async function DELETE(_request: NextRequest, { params }: Params) {
  try {
    const { projectId, surveyId } = await params
    const gate = await managerOnly(projectId)
    if (gate.error) return gate.error
    const result = await prisma.projectSurvey.deleteMany({ where: { id: surveyId, projectId } })
    if (result.count === 0) return NextResponse.json({ success: false, error: 'Survey not found.' }, { status: 404 })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting survey:', error)
    return NextResponse.json({ success: false, error: 'Failed to delete survey.' }, { status: 500 })
  }
}
