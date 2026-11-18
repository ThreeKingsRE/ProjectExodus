import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { toCsv } from '@/lib/projects/surveys'
import { getProjectStanding, storedQuestions } from '@/lib/projects/surveys-server'

// GET - Download all responses as CSV (opens in Excel or Google Sheets)
export async function GET(_request: NextRequest, { params }: { params: Promise<{ projectId: string; surveyId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 })
    const { projectId, surveyId } = await params
    const who = await getProjectStanding(projectId, session.user.id)
    if (!who?.canManage) return NextResponse.json({ success: false, error: 'Only the owner and admins can export responses.' }, { status: 403 })

    const survey = await prisma.projectSurvey.findFirst({
      where: { id: surveyId, projectId },
      include: { responses: { select: { answers: true, createdAt: true, user: { select: { name: true } } }, orderBy: { createdAt: 'asc' } } },
    })
    if (!survey) return NextResponse.json({ success: false, error: 'Survey not found.' }, { status: 404 })

    const csv = toCsv(
      storedQuestions(survey.questions),
      (survey.responses as { answers: unknown; createdAt: Date; user: { name: string | null } | null }[]).map(r => ({
        answers: r.answers,
        createdAt: r.createdAt,
        respondentName: r.user?.name ?? null,
      })),
      !survey.anonymous,
    )
    const filename = `${survey.title.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase() || 'survey'}-responses.csv`
    return new NextResponse('﻿' + csv, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-store',
      },
    })
  } catch (error) {
    console.error('Error exporting survey:', error)
    return NextResponse.json({ success: false, error: 'Failed to export responses.' }, { status: 500 })
  }
}
