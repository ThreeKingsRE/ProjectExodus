import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { getProjectStanding } from '@/lib/projects/surveys-server'
import { googleSheetCsvUrl, readResultsCsv, MAX_CSV_BYTES } from '@/lib/projects/survey-import'

type Params = { params: Promise<{ projectId: string; surveyId: string }> }

// Results for a linked survey (owners and admins only).
//   POST { csvUrl }   connect a Google Sheets link and import it
//   POST { refresh }  re-import from the connected link
//   POST { csv }      import an uploaded CSV export (any survey tool)
//   DELETE            remove imported results and the connected link

async function gate(request: NextRequest, projectId: string, surveyId: string) {
  const origin = request.headers.get('origin')
  if (origin && origin !== new URL(request.url).origin) return { error: NextResponse.json({ success: false, error: 'Invalid request origin.' }, { status: 403 }) }
  const session = await auth()
  if (!session?.user?.id) return { error: NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 }) }
  const who = await getProjectStanding(projectId, session.user.id)
  if (!who) return { error: NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 }) }
  if (!who.canManage) return { error: NextResponse.json({ success: false, error: 'Only the owner and admins can import results.' }, { status: 403 }) }
  const survey = await prisma.projectSurvey.findFirst({ where: { id: surveyId, projectId }, select: { id: true, externalUrl: true, resultsCsvUrl: true } })
  if (!survey) return { error: NextResponse.json({ success: false, error: 'Survey not found.' }, { status: 404 }) }
  if (!survey.externalUrl) return { error: NextResponse.json({ success: false, error: 'Results import is for linked surveys. Built surveys collect results here automatically.' }, { status: 400 }) }
  return { survey }
}

/** Fetch a Google Sheets CSV with a timeout and size cap. */
async function fetchCsv(url: string): Promise<{ ok: true; text: string } | { ok: false; error: string }> {
  try {
    const res = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(15000), headers: { Accept: 'text/csv' } })
    if (!res.ok) {
      return { ok: false, error: res.status === 401 || res.status === 403 || res.status === 404
        ? 'Google wouldn’t share that sheet. Publish it to the web as CSV, or share it as “Anyone with the link can view”.'
        : `Google returned an error (${res.status}). Try again in a minute.` }
    }
    const length = Number(res.headers.get('content-length') || 0)
    if (length > MAX_CSV_BYTES) return { ok: false, error: 'That sheet is too large to import (3 MB maximum).' }
    const text = await res.text()
    return { ok: true, text }
  } catch {
    return { ok: false, error: 'Couldn’t reach Google Sheets. Check the link and try again.' }
  }
}

export async function POST(request: NextRequest, { params }: Params) {
  try {
    const { projectId, surveyId } = await params
    const g = await gate(request, projectId, surveyId)
    if ('error' in g) return g.error
    const body = await request.json().catch(() => ({}))

    let csvUrl: string | null = g.survey.resultsCsvUrl
    let text: string
    if (typeof body.csv === 'string') {
      text = body.csv
      csvUrl = null // an upload replaces any connected link
    } else {
      if (typeof body.csvUrl === 'string') {
        csvUrl = googleSheetCsvUrl(body.csvUrl)
        if (!csvUrl) return NextResponse.json({ success: false, error: 'Paste a Google Sheets link (docs.google.com/spreadsheets/…).' }, { status: 400 })
      } else if (!body.refresh || !csvUrl) {
        return NextResponse.json({ success: false, error: 'Paste a Google Sheets link or upload a CSV.' }, { status: 400 })
      }
      const fetched = await fetchCsv(csvUrl)
      if (!fetched.ok) return NextResponse.json({ success: false, error: fetched.error }, { status: 400 })
      text = fetched.text
    }

    const parsed = readResultsCsv(text)
    if (!parsed.ok) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 })
    await prisma.projectSurvey.update({
      where: { id: surveyId },
      data: { resultsCsvUrl: csvUrl, importedResults: parsed.data as unknown as object, resultsImportedAt: new Date() },
    })
    return NextResponse.json({ success: true, data: { responses: parsed.data.rows.length, columns: parsed.data.header.length } })
  } catch (error) {
    console.error('Error importing survey results:', error)
    return NextResponse.json({ success: false, error: 'Failed to import results.' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const { projectId, surveyId } = await params
    const g = await gate(request, projectId, surveyId)
    if ('error' in g) return g.error
    await prisma.projectSurvey.update({ where: { id: surveyId }, data: { resultsCsvUrl: null, importedResults: null as unknown as undefined, resultsImportedAt: null } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error removing imported results:', error)
    return NextResponse.json({ success: false, error: 'Failed to remove results.' }, { status: 500 })
  }
}
