import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { canViewFile } from '@/lib/projects/files'
import { getFileViewer } from '@/lib/projects/files-server'
import { verifyHostedSignature } from '@/lib/projects/hosted-files'
import { PRIVATE_FILES_DIR } from '@/lib/projects/live-tables-server'

// Initiative files the site hosts (/projects/<slug>/<file>). They live outside
// /public and are served only when:
//   - the request carries a valid, unexpired signature (links we give to people
//     allowed to see the file, e.g. for the Office viewer), or
//   - the signed-in user may view a workspace file that links to this path.
// Anything else gets 404, so file names and existence aren't revealed.

export const runtime = 'nodejs'

const TYPES: Record<string, string> = {
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  xls: 'application/vnd.ms-excel',
  csv: 'text/csv; charset=utf-8',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  pdf: 'application/pdf',
  png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', gif: 'image/gif',
  svg: 'image/svg+xml',
  dxf: 'application/dxf',
  md: 'text/plain; charset=utf-8', txt: 'text/plain; charset=utf-8',
}

const notFound = () => new NextResponse('Not found', { status: 404, headers: { 'Cache-Control': 'no-store' } })

export async function GET(request: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  const parts = (await params).path
  if (!parts?.length || parts.some((p) => !p || p === '.' || p === '..' || p.includes('\\') || p.includes('\0'))) return notFound()
  const sitePath = `/projects/${parts.map(encodeURIComponent).join('/')}`
  const decodedPath = `/projects/${parts.join('/')}`

  let allowed = verifyHostedSignature(sitePath, request.nextUrl.searchParams.get('exp'), request.nextUrl.searchParams.get('sig'))
  if (!allowed) {
    const session = await auth()
    if (!session?.user?.id) return notFound()
    // Workspace files that point at this path (absolute or relative link)
    const candidates: { id: string; projectId: string; viewAccess: string }[] = await prisma.projectFile.findMany({
      where: { OR: [{ viewUrl: { endsWith: sitePath } }, { viewUrl: { endsWith: decodedPath } }, { editUrl: { endsWith: sitePath } }] },
      select: { id: true, projectId: true, viewAccess: true },
      take: 20,
    })
    for (const file of candidates) {
      const viewer = await getFileViewer(file.projectId, session.user.id)
      if (viewer && canViewFile(file, viewer)) { allowed = true; break }
    }
  }
  if (!allowed) return notFound()

  const full = path.join(PRIVATE_FILES_DIR, decodedPath)
  if (!full.startsWith(path.join(PRIVATE_FILES_DIR, 'projects') + path.sep)) return notFound()
  let body: Buffer
  try { body = await readFile(full) } catch { return notFound() }

  const ext = (decodedPath.split('.').pop() ?? '').toLowerCase()
  const name = parts[parts.length - 1]
  const inline = ['pdf', 'png', 'jpg', 'jpeg', 'webp', 'gif', 'md', 'txt'].includes(ext)
  return new NextResponse(new Uint8Array(body), {
    headers: {
      'Content-Type': TYPES[ext] ?? 'application/octet-stream',
      'Content-Disposition': `${inline ? 'inline' : 'attachment'}; filename="${name.replace(/"/g, '')}"`,
      'Cache-Control': 'private, no-store',
      'X-Content-Type-Options': 'nosniff',
      // SVGs and text can't run scripts when opened directly
      'Content-Security-Policy': "default-src 'none'; img-src 'self' data:; style-src 'unsafe-inline'; sandbox",
      'X-Robots-Tag': 'noindex',
    },
  })
}
