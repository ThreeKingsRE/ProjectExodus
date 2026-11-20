import 'server-only'
import { readFile } from 'fs/promises'
import path from 'path'
import { prisma } from '@/lib/db/prisma'
import { newestInSeries, readLiveTable, seriesKeyOf, type LiveTableData, type LiveTableView } from './live-tables'
export type { LiveTableView }

type TableRow = Parameters<typeof toView>[0]

// Files the site hosts for initiatives live in /private (not /public), so they are
// only reachable through the access-checked /projects/... route. Reading them for a
// live table happens on the server, from disk.
export const PRIVATE_FILES_DIR = path.join(process.cwd(), 'private')

export async function readHostedFile(sitePath: string): Promise<Uint8Array | null> {
  const clean = path.posix.normalize(sitePath)
  if (!clean.startsWith('/projects/') || clean.includes('..')) return null
  try {
    return new Uint8Array(await readFile(path.join(PRIVATE_FILES_DIR, clean)))
  } catch {
    return null
  }
}


export function toView(t: { id: string; title: string | null; sheet: string | null; range: string | null; data: unknown; sourceTitle: string | null; refreshedAt: Date | null; error: string | null }): LiveTableView {
  const data = t.data as LiveTableData | null
  return {
    id: t.id, title: t.title, sheet: t.sheet, range: t.range,
    data: data && Array.isArray(data.header) && Array.isArray(data.rows) ? data : null,
    sourceTitle: t.sourceTitle, refreshedAt: t.refreshedAt?.toISOString() ?? null, error: t.error,
  }
}

/** Live tables used by a project's overview text, keyed by id (only the ones its text mentions). */
export async function liveTablesForText(projectId: string, text: string | null | undefined): Promise<Record<string, LiveTableView>> {
  const ids = [...(text ?? '').matchAll(/\{\{table:([a-z0-9]{8,40})\}\}/g)].map((m) => m[1])
  if (!ids.length) return {}
  const rows: TableRow[] = await prisma.projectLiveTable.findMany({ where: { projectId, id: { in: ids } } })
  return Object.fromEntries(rows.map((t) => [t.id, toView(t)]))
}

/** Re-read one table from the newest file in its version series and save the result. */
export async function refreshLiveTable(tableId: string): Promise<LiveTableView | null> {
  const table = await prisma.projectLiveTable.findUnique({ where: { id: tableId } })
  if (!table) return null
  const files: { id: string; title: string; viewUrl: string; updatedAt: Date; createdAt: Date }[] = await prisma.projectFile.findMany({
    where: { projectId: table.projectId },
    select: { id: true, title: true, viewUrl: true, updatedAt: true, createdAt: true },
  })
  const source = newestInSeries(files, table.seriesKey) ?? files.find((f) => f.id === table.fileId) ?? null
  let update: { data?: object; sourceTitle?: string; fileId?: string; error: string | null; refreshedAt: Date }
  if (!source) {
    update = { error: 'The spreadsheet for this table was removed from the workspace.', refreshedAt: new Date() }
  } else {
    try {
      const data = await readLiveTable(source.viewUrl, table.sheet, table.range, { readHosted: readHostedFile })
      update = { data: data as unknown as object, sourceTitle: source.title, fileId: source.id, error: null, refreshedAt: new Date() }
    } catch (e) {
      // Keep the last good rows on screen; show why the refresh failed
      update = { error: e instanceof Error ? e.message : 'Couldn’t read that file.', sourceTitle: source.title, refreshedAt: new Date() }
    }
  }
  const saved = await prisma.projectLiveTable.update({ where: { id: tableId }, data: update })
  return toView(saved)
}

/** Refresh every table in a project, or only those following a given file's series. */
export async function refreshProjectTables(projectId: string, fileNameOrUrl?: string): Promise<number> {
  const key = fileNameOrUrl ? seriesKeyOf(fileNameOrUrl) : null
  const tables: { id: string }[] = await prisma.projectLiveTable.findMany({ where: { projectId, ...(key ? { seriesKey: key } : {}) }, select: { id: true } })
  for (const t of tables) await refreshLiveTable(t.id)
  return tables.length
}
