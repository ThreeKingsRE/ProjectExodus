import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { canSeeSurvey, isAcceptingResponses, parseQuestions, parseSurveySettings } from '@/lib/projects/surveys'
import { getProjectStanding, storedQuestions, surveyListSelect } from '@/lib/projects/surveys-server'

// GET - Surveys in this initiative. Owners/admins see drafts and response counts.
export async function GET(_request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
    const { projectId } = await params
    const who = await getProjectStanding(projectId, session.user.id)
    if (!who) return NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 })
    if (!who.isMember) return NextResponse.json({ success: false, error: 'Join this initiative to see its surveys.' }, { status: 403 })

    const surveys = await prisma.projectSurvey.findMany({
      where: { projectId, ...(who.canManage ? {} : { status: { not: 'DRAFT' } }) },
      select: { ...surveyListSelect, responses: { where: { respondentKey: `user:${session.user.id}` }, select: { id: true }, take: 1 } },
      orderBy: [{ status: 'asc' }, { updatedAt: 'desc' }],
    })

    const data = surveys
      .filter((s: { status: string; audience: string }) => canSeeSurvey(s, who))
      .map((s: any) => ({
        id: s.id,
        title: s.title,
        description: s.description,
        status: s.status,
        audience: s.audience,
        anonymous: s.anonymous,
        shareResults: s.shareResults,
        closesAt: s.closesAt,
        accepting: isAcceptingResponses(s),
        questionCount: storedQuestions(s.questions).length,
        hasResponded: s.responses.length > 0,
        responseCount: who.canManage ? s._count.responses : undefined,
        updatedAt: s.updatedAt,
      }))

    return NextResponse.json({ success: true, data: { surveys: data, canManage: who.canManage } })
  } catch (error) {
    console.error('Error listing surveys:', error)
    return NextResponse.json({ success: false, error: 'Failed to load surveys.' }, { status: 500 })
  }
}

// POST - Owners/admins create a survey
export async function POST(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
    const { projectId } = await params
    const who = await getProjectStanding(projectId, session.user.id)
    if (!who) return NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 })
    if (!who.canManage) return NextResponse.json({ success: false, error: 'Only the owner and admins can create surveys.' }, { status: 403 })

    const body = await request.json().catch(() => null)
    const settings = parseSurveySettings(body, false)
    if (!settings.ok) return NextResponse.json({ success: false, error: settings.error }, { status: 400 })
    const questions = parseQuestions(body?.questions)
    if (!questions.ok) return NextResponse.json({ success: false, error: questions.error }, { status: 400 })

    const survey = await prisma.projectSurvey.create({
      data: {
        projectId,
        createdById: session.user.id,
        title: settings.data.title!,
        description: settings.data.description ?? null,
        status: settings.data.status ?? 'DRAFT',
        audience: settings.data.audience ?? 'MEMBERS',
        anonymous: settings.data.anonymous ?? false,
        shareResults: settings.data.shareResults ?? false,
        closesAt: settings.data.closesAt ?? null,
        questions: questions.data,
      },
      select: { id: true },
    })
    return NextResponse.json({ success: true, data: survey }, { status: 201 })
  } catch (error) {
    console.error('Error creating survey:', error)
    return NextResponse.json({ success: false, error: 'Failed to create survey.' }, { status: 500 })
  }
}
