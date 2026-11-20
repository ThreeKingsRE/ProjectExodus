import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { FILE_SECTIONS, canManageFiles, fileForViewer, parseFileInput, type FileSection, type StoredFile } from '@/lib/projects/files'
import { fileCreatorSelect, filterMemberIds, getFileViewer } from '@/lib/projects/files-server'
import { isSpreadsheetUrl } from '@/lib/projects/live-tables'
import { refreshProjectTables } from '@/lib/projects/live-tables-server'
import { withSignedLinks } from '@/lib/projects/hosted-files'

// GET - Workspace files this member may see, each with the link they may open
export async function GET(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in to view files.' }, { status: 401 })
    const { projectId } = await params
    const viewer = await getFileViewer(projectId, session.user.id)
    if (!viewer) return NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 })
    if (!viewer.role && !viewer.isCreator) {
      return NextResponse.json({ success: false, error: 'Join this initiative to see its files.' }, { status: 403 })
    }

    const section = request.nextUrl.searchParams.get('section')
    const where: { projectId: string; section?: FileSection } = { projectId }
    if (section && FILE_SECTIONS.includes(section as FileSection)) where.section = section as FileSection

    const files = await prisma.projectFile.findMany({
      where,
      include: { createdBy: fileCreatorSelect },
      orderBy: [{ isPinned: 'desc' }, { order: 'asc' }, { updatedAt: 'desc' }],
    })

    const visible = (files as StoredFile[])
      .map(file => withSignedLinks(fileForViewer(file, viewer)))
      .filter(Boolean)

    return NextResponse.json({ success: true, data: { files: visible, canManage: canManageFiles(viewer) } })
  } catch (error) {
    console.error('Error fetching project files:', error)
    return NextResponse.json({ success: false, error: 'Failed to load files.' }, { status: 500 })
  }
}

// POST - Owners and admins add a linked file
export async function POST(request: NextRequest, { params }: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ success: false, error: 'Sign in to add files.' }, { status: 401 })
    const { projectId } = await params
    const viewer = await getFileViewer(projectId, session.user.id)
    if (!viewer) return NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 })
    if (!canManageFiles(viewer)) {
      return NextResponse.json({ success: false, error: 'Only the owner and admins can add files.' }, { status: 403 })
    }

    const parsed = parseFileInput(await request.json().catch(() => null), false)
    if (!parsed.ok) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 })
    const input = parsed.data
    const editorIds = await filterMemberIds(projectId, input.editorIds ?? [])

    const created = await prisma.projectFile.create({
      data: {
        projectId,
        section: input.section!,
        title: input.title!,
        description: input.description ?? null,
        viewUrl: input.viewUrl!,
        editUrl: input.editUrl ?? null,
        viewAccess: input.viewAccess ?? 'MEMBERS',
        editAccess: input.editAccess ?? 'OWNERS',
        editorIds,
        isPinned: input.isPinned ?? false,
        createdById: session.user.id,
      },
      include: { createdBy: fileCreatorSelect },
    })

    // A new version of a spreadsheet (…-v13.xlsx) updates the overview tables that follow it
    if (isSpreadsheetUrl(created.viewUrl)) await refreshProjectTables(projectId, created.viewUrl).catch((e) => console.error('Live table refresh failed:', e))

    return NextResponse.json({ success: true, data: withSignedLinks(fileForViewer(created as StoredFile, viewer)) }, { status: 201 })
  } catch (error) {
    console.error('Error creating project file:', error)
    return NextResponse.json({ success: false, error: 'Failed to add file.' }, { status: 500 })
  }
}
