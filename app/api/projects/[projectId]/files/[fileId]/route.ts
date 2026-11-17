import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'
import { canManageFiles, fileForViewer, parseFileInput, type StoredFile } from '@/lib/projects/files'
import { fileCreatorSelect, filterMemberIds, getFileViewer } from '@/lib/projects/files-server'

type Params = { params: Promise<{ projectId: string; fileId: string }> }

async function authorize(projectId: string) {
  const session = await auth()
  if (!session?.user?.id) return { error: NextResponse.json({ success: false, error: 'Sign in first.' }, { status: 401 }) }
  const viewer = await getFileViewer(projectId, session.user.id)
  if (!viewer) return { error: NextResponse.json({ success: false, error: 'Initiative not found.' }, { status: 404 }) }
  if (!canManageFiles(viewer)) {
    return { error: NextResponse.json({ success: false, error: 'Only the owner and admins can change files.' }, { status: 403 }) }
  }
  return { viewer }
}

// PATCH - Update a file's details, links, or permissions
export async function PATCH(request: NextRequest, { params }: Params) {
  try {
    const { projectId, fileId } = await params
    const { viewer, error } = await authorize(projectId)
    if (error) return error

    const existing = await prisma.projectFile.findFirst({ where: { id: fileId, projectId }, select: { id: true } })
    if (!existing) return NextResponse.json({ success: false, error: 'File not found.' }, { status: 404 })

    const parsed = parseFileInput(await request.json().catch(() => null), true)
    if (!parsed.ok) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 })
    const data = { ...parsed.data }
    if (data.editorIds) data.editorIds = await filterMemberIds(projectId, data.editorIds)

    const updated = await prisma.projectFile.update({
      where: { id: fileId },
      data,
      include: { createdBy: fileCreatorSelect },
    })
    return NextResponse.json({ success: true, data: fileForViewer(updated as StoredFile, viewer!) })
  } catch (err) {
    console.error('Error updating project file:', err)
    return NextResponse.json({ success: false, error: 'Failed to update file.' }, { status: 500 })
  }
}

// DELETE - Remove the file card (the real document is not touched)
export async function DELETE(_request: NextRequest, { params }: Params) {
  try {
    const { projectId, fileId } = await params
    const { error } = await authorize(projectId)
    if (error) return error

    const result = await prisma.projectFile.deleteMany({ where: { id: fileId, projectId } })
    if (result.count === 0) return NextResponse.json({ success: false, error: 'File not found.' }, { status: 404 })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error deleting project file:', err)
    return NextResponse.json({ success: false, error: 'Failed to remove file.' }, { status: 500 })
  }
}
