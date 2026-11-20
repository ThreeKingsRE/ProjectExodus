import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db/prisma'
import { canManageFiles } from '@/lib/projects/files'
import { getFileViewer } from '@/lib/projects/files-server'
import { isSpreadsheetUrl, newestInSeries, readLiveTable, seriesKeyOf, parseRange } from '@/lib/projects/live-tables'
import { readHostedFile, refreshLiveTable, toView } from '@/lib/projects/live-tables-server'

type Params = { params: Promise<{ projectId: string }> }
type FileRow = { id: string; title: string; viewUrl: string; updatedAt: Date; createdAt: Date }
type TableRow = Parameters<typeof toView>[0]

// Live tables in the initiative overview.
//   GET                         owners/admins: spreadsheets in the workspace and existing tables
//   GET ?fileId=…               owners/admins: sheet names in the newest version of that file
//   GET ?ids=a,b                members: those tables' cached rows
//   POST { fileId, sheet?, range?, title? }   owners/admins: create a table (returns its {{table:ID}} token)
//   POST { refresh: true, tableId? }          members: re-read one table, or all of them
//   DELETE ?tableId=…           owners/admins

const REFRESH_COOLDOWN_MS = 20_000

async function standing(request: NextRequest, projectId: string) {
  if (request.method !== 'GET') {
    const origin = request.headers.get('origin')
    if (origin && origin !== new URL(request.url).origin) return { error: NextResponse.json({ success: false, error: 'Invalid request origin.' }, { status: 403 }) }
  }
  const session = await auth()
  if (!session?.user?.id) return { error: NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 }) }
  const viewer = await getFileViewer(projectId, session.user.id)
  if (!viewer) return { error: NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 }) }
  const isMember = viewer.isCreator || !!viewer.role
  return { viewer, userId: session.user.id, isMember, canManage: canManageFiles(viewer) }
}

const managersOnly = () => NextResponse.json({ success: false, error: 'Only the owner and admins can manage live tables.' }, { status: 403 })

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { projectId } = await params
    const s = await standing(request, projectId)
    if ('error' in s) return s.error
    // Members read the tables shown in the workspace overview
    const ids = request.nextUrl.searchParams.get('ids')
    if (ids !== null) {
      if (!s.isMember) return NextResponse.json({ success: false, error: 'Join this initiative to see its tables.' }, { status: 403 })
      const wanted = ids.split(',').filter((id) => /^[a-z0-9]{8,40}$/.test(id)).slice(0, 30)
      const rows: TableRow[] = await prisma.projectLiveTable.findMany({ where: { projectId, id: { in: wanted } } })
      return NextResponse.json({ success: true, data: { tables: rows.map(toView), canManage: s.canManage } })
    }
    if (!s.canManage) return managersOnly()

    const files: FileRow[] = await prisma.projectFile.findMany({ where: { projectId }, select: { id: true, title: true, viewUrl: true, updatedAt: true, createdAt: true } })
    const sheets = files.filter((f) => isSpreadsheetUrl(f.viewUrl))

    const fileId = request.nextUrl.searchParams.get('fileId')
    if (fileId) {
      const picked = sheets.find((f) => f.id === fileId)
      if (!picked) return NextResponse.json({ success: false, error: 'Pick a spreadsheet from the workspace.' }, { status: 404 })
      const newest = newestInSeries(sheets, seriesKeyOf(picked.viewUrl)) ?? picked
      try {
        const data = await readLiveTable(newest.viewUrl, null, null, { readHosted: readHostedFile })
        return NextResponse.json({ success: true, data: { sheets: data.sheets, newestTitle: newest.title } })
      } catch (e) {
        return NextResponse.json({ success: false, error: e instanceof Error ? e.message : 'Couldn’t read that file.' }, { status: 400 })
      }
    }

    const tables: TableRow[] = await prisma.projectLiveTable.findMany({ where: { projectId }, orderBy: { createdAt: 'desc' } })
    return NextResponse.json({
      success: true,
      data: {
        files: sheets.map((f) => ({ id: f.id, title: f.title })),
        tables: tables.map(toView),
      },
    })
  } catch (error) {
    console.error('Error loading live tables:', error)
    return NextResponse.json({ success: false, error: 'Failed to load live tables.' }, { status: 500 })
  }
}

export async function POST(request: NextRequest, { params }: Params) {
  try {
    const { projectId } = await params
    const s = await standing(request, projectId)
    if ('error' in s) return s.error
    const body = await request.json().catch(() => ({})) as Record<string, unknown>

    if (body.refresh) {
      if (!s.isMember) return NextResponse.json({ success: false, error: 'Join this initiative to refresh its tables.' }, { status: 403 })
      const tableId = typeof body.tableId === 'string' ? body.tableId : null
      const tables: { id: string; refreshedAt: Date | null }[] = await prisma.projectLiveTable.findMany({ where: { projectId, ...(tableId ? { id: tableId } : {}) }, select: { id: true, refreshedAt: true } })
      if (tableId && !tables.length) return NextResponse.json({ success: false, error: 'Table not found.' }, { status: 404 })
      const out = []
      for (const t of tables) {
        // A just-refreshed table is returned as is, so repeated clicks don't hammer the file host
        const fresh = t.refreshedAt && Date.now() - t.refreshedAt.getTime() < REFRESH_COOLDOWN_MS
        out.push(fresh ? toView((await prisma.projectLiveTable.findUnique({ where: { id: t.id } }))!) : await refreshLiveTable(t.id))
      }
      return NextResponse.json({ success: true, data: { tables: out.filter(Boolean) } })
    }

    if (!s.canManage) return managersOnly()
    const fileId = typeof body.fileId === 'string' ? body.fileId : ''
    const file = await prisma.projectFile.findFirst({ where: { id: fileId, projectId }, select: { id: true, title: true, viewUrl: true } })
    if (!file || !isSpreadsheetUrl(file.viewUrl)) return NextResponse.json({ success: false, error: 'Pick a spreadsheet (.xlsx, .csv or Google Sheet) from the workspace.' }, { status: 400 })
    const clip = (v: unknown, n: number) => (typeof v === 'string' && v.trim() ? v.trim().slice(0, n) : null)
    const range = clip(body.range, 20)
    try { parseRange(range) } catch (e) { return NextResponse.json({ success: false, error: (e as Error).message }, { status: 400 }) }

    const created = await prisma.projectLiveTable.create({
      data: { projectId, fileId: file.id, seriesKey: seriesKeyOf(file.viewUrl), title: clip(body.title, 120), sheet: clip(body.sheet, 100), range: range?.toUpperCase() ?? null, createdById: s.userId },
    })
    const view = await refreshLiveTable(created.id)
    if (view?.error && !view.data) {
      await prisma.projectLiveTable.delete({ where: { id: created.id } })
      return NextResponse.json({ success: false, error: view.error }, { status: 400 })
    }
    return NextResponse.json({ success: true, data: { table: view, token: `{{table:${created.id}}}` } })
  } catch (error) {
    console.error('Error saving live table:', error)
    return NextResponse.json({ success: false, error: 'Failed to save the live table.' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const { projectId } = await params
    const s = await standing(request, projectId)
    if ('error' in s) return s.error
    if (!s.canManage) return managersOnly()
    const tableId = request.nextUrl.searchParams.get('tableId') ?? ''
    const { count } = await prisma.projectLiveTable.deleteMany({ where: { id: tableId, projectId } })
    if (!count) return NextResponse.json({ success: false, error: 'Table not found.' }, { status: 404 })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting live table:', error)
    return NextResponse.json({ success: false, error: 'Failed to delete the live table.' }, { status: 500 })
  }
}
