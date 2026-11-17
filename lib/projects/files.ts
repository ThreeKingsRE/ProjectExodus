// Linked workspace files for initiatives.
//
// A file is stored as links to the real document (Google Sheets, Excel online,
// Slides, Figma, a PDF, ...). The site decides which link each member receives:
// people allowed to edit get the edit link, everyone else gets the view link.
// The document's own sharing settings in Google/Microsoft still apply, so owners
// must also share the file with their editors there.

export const FILE_SECTIONS = ['PITCH', 'FINANCIALS', 'DESIGNS', 'TIMELINE', 'RESOURCES'] as const
export type FileSection = (typeof FILE_SECTIONS)[number]

export const VIEW_ACCESS = ['MEMBERS', 'TEAM'] as const
export type ViewAccess = (typeof VIEW_ACCESS)[number]

export const EDIT_ACCESS = ['OWNERS', 'TEAM', 'SELECTED'] as const
export type EditAccess = (typeof EDIT_ACCESS)[number]

export type MemberRole = 'VIEWER' | 'CONTRIBUTOR' | 'MODERATOR' | 'ADMIN' | 'OWNER'

export const SECTION_INFO: Record<FileSection, { label: string; hint: string }> = {
  PITCH: { label: 'Pitch', hint: 'Pitch decks, one-pagers, and presentations.' },
  FINANCIALS: { label: 'Financials', hint: 'Budgets, feasibility models, and funding plans.' },
  DESIGNS: { label: 'Designs & Plans', hint: 'Drawings, diagrams, axonometrics, schemes, and site plans.' },
  TIMELINE: { label: 'Timeline', hint: 'Schedules, milestones, and Gantt charts.' },
  RESOURCES: { label: 'Resources', hint: 'Research files, references, and anything else the team needs.' },
}

export interface Viewer {
  userId: string
  role: MemberRole | null // null when the user is not a member
  isCreator: boolean
}

export interface StoredFile {
  id: string
  projectId: string
  section: string
  title: string
  description: string | null
  viewUrl: string
  editUrl: string | null
  viewAccess: string
  editAccess: string
  editorIds: string[]
  isPinned: boolean
  order: number
  createdById: string
  createdAt: Date | string
  updatedAt: Date | string
  createdBy?: { id: string; name: string | null; image?: string | null } | null
}

const TEAM_ROLES: MemberRole[] = ['CONTRIBUTOR', 'MODERATOR', 'ADMIN', 'OWNER']

/** Owners and admins add, change, and remove workspace files. */
export function canManageFiles(viewer: Viewer): boolean {
  return viewer.isCreator || viewer.role === 'OWNER' || viewer.role === 'ADMIN'
}

export function canViewFile(file: Pick<StoredFile, 'viewAccess'>, viewer: Viewer): boolean {
  if (canManageFiles(viewer)) return true
  if (!viewer.role) return false
  if (file.viewAccess === 'TEAM') return TEAM_ROLES.includes(viewer.role)
  return true
}

export function canEditFile(file: Pick<StoredFile, 'viewAccess' | 'editAccess' | 'editorIds' | 'editUrl'>, viewer: Viewer): boolean {
  if (!file.editUrl) return false
  if (canManageFiles(viewer)) return true
  if (!viewer.role || !canViewFile(file, viewer)) return false
  if (file.editAccess === 'TEAM') return TEAM_ROLES.includes(viewer.role)
  if (file.editAccess === 'SELECTED') return file.editorIds.includes(viewer.userId)
  return false
}

export type Provider = 'google' | 'microsoft' | 'figma' | 'canva' | 'hosted' | 'link'
export type FileKind = 'sheet' | 'doc' | 'slides' | 'drawing' | 'pdf' | 'image' | 'design' | 'file' | 'link'

/** Accept only absolute https links (or site-relative paths to files we host). */
export function normalizeFileUrl(raw: unknown, siteOrigin = 'https://www.projxodus.com'): string | null {
  if (typeof raw !== 'string') return null
  const value = raw.trim()
  if (!value || value.length > 2048) return null
  try {
    const url = value.startsWith('/') && !value.startsWith('//') ? new URL(value, siteOrigin) : new URL(value)
    if (url.protocol !== 'https:') return null
    if (url.username || url.password) return null
    return url.toString()
  } catch {
    return null
  }
}

function extOf(pathname: string): string {
  const match = /\.([a-z0-9]+)$/i.exec(pathname)
  return match ? match[1].toLowerCase() : ''
}

const KIND_BY_EXT: Record<string, FileKind> = {
  xlsx: 'sheet', xls: 'sheet', csv: 'sheet', ods: 'sheet',
  docx: 'doc', doc: 'doc', odt: 'doc', md: 'doc', txt: 'doc',
  pptx: 'slides', ppt: 'slides', odp: 'slides', key: 'slides',
  pdf: 'pdf',
  png: 'image', jpg: 'image', jpeg: 'image', gif: 'image', webp: 'image', svg: 'image',
  dxf: 'drawing', dwg: 'drawing', skp: 'drawing', ifc: 'drawing',
}

const OFFICE_EXT = new Set(['xlsx', 'xls', 'docx', 'doc', 'pptx', 'ppt'])

export interface FileLinkInfo {
  provider: Provider
  kind: FileKind
  /** URL safe to load in an iframe, or null when no preview is possible. */
  previewUrl: string | null
  /** Use an <img> instead of an iframe. */
  previewIsImage: boolean
}

function isHost(host: string, domain: string) {
  return host === domain || host.endsWith(`.${domain}`)
}

export function describeFileLink(rawUrl: string, siteOrigin = 'https://www.projxodus.com'): FileLinkInfo {
  let url: URL
  try {
    url = new URL(rawUrl)
  } catch {
    return { provider: 'link', kind: 'link', previewUrl: null, previewIsImage: false }
  }
  const host = url.hostname.toLowerCase()
  const site = new URL(siteOrigin).hostname.replace(/^www\./, '')

  // Google Docs, Sheets, Slides, Drawings
  if (host === 'docs.google.com') {
    const m = /^\/(document|spreadsheets|presentation|drawings)\/d\/([a-zA-Z0-9_-]+)/.exec(url.pathname)
    if (m) {
      const kind: FileKind = m[1] === 'spreadsheets' ? 'sheet' : m[1] === 'presentation' ? 'slides' : m[1] === 'drawings' ? 'drawing' : 'doc'
      return { provider: 'google', kind, previewUrl: `https://docs.google.com/${m[1]}/d/${m[2]}/preview`, previewIsImage: false }
    }
    return { provider: 'google', kind: 'doc', previewUrl: null, previewIsImage: false }
  }
  // Google Drive uploads (PDF, xlsx, images, ...)
  if (host === 'drive.google.com') {
    const m = /^\/file\/d\/([a-zA-Z0-9_-]+)/.exec(url.pathname)
    const id = m?.[1] ?? url.searchParams.get('id')
    if (id && /^[a-zA-Z0-9_-]+$/.test(id)) {
      return { provider: 'google', kind: 'file', previewUrl: `https://drive.google.com/file/d/${id}/preview`, previewIsImage: false }
    }
    return { provider: 'google', kind: 'file', previewUrl: null, previewIsImage: false }
  }
  // Microsoft 365 (OneDrive / SharePoint). Share links can only be previewed when
  // the owner pastes an embed link; otherwise the card opens the file.
  if (isHost(host, 'sharepoint.com') || host === 'onedrive.live.com' || host === '1drv.ms') {
    const ext = extOf(url.pathname)
    const kind = KIND_BY_EXT[ext] ?? (url.pathname.includes('/:x:/') ? 'sheet' : url.pathname.includes('/:p:/') ? 'slides' : url.pathname.includes('/:w:/') ? 'doc' : 'file')
    const embeddable = host === 'onedrive.live.com' ? url.pathname.startsWith('/embed') : url.searchParams.get('action') === 'embedview'
    return { provider: 'microsoft', kind, previewUrl: embeddable ? url.toString() : null, previewIsImage: false }
  }
  // Figma
  if (host === 'www.figma.com' || host === 'figma.com') {
    return {
      provider: 'figma',
      kind: 'design',
      previewUrl: `https://www.figma.com/embed?embed_host=projxodus&url=${encodeURIComponent(url.toString())}`,
      previewIsImage: false,
    }
  }
  // Canva
  if (isHost(host, 'canva.com')) {
    const viewPath = /^\/design\/[^/]+\/[^/]+\/(view|edit)/.test(url.pathname)
    const embed = new URL(url.toString())
    if (viewPath) {
      embed.pathname = embed.pathname.replace(/\/(view|edit).*$/, '/view')
      embed.search = '?embed'
    }
    return { provider: 'canva', kind: 'design', previewUrl: viewPath ? embed.toString() : null, previewIsImage: false }
  }
  // Files hosted on our own site (e.g. /projects/riverknoll-renewal/*.xlsx)
  if (host.replace(/^www\./, '') === site) {
    const ext = extOf(url.pathname)
    const kind = KIND_BY_EXT[ext] ?? 'file'
    if (OFFICE_EXT.has(ext)) {
      return { provider: 'hosted', kind, previewUrl: `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url.toString())}`, previewIsImage: false }
    }
    if (kind === 'image') return { provider: 'hosted', kind, previewUrl: url.toString(), previewIsImage: true }
    // Our own pages send X-Frame-Options: DENY, so hosted PDFs open in a new tab instead.
    return { provider: 'hosted', kind, previewUrl: null, previewIsImage: false }
  }
  const ext = extOf(url.pathname)
  const kind = KIND_BY_EXT[ext] ?? 'link'
  return { provider: 'link', kind, previewUrl: null, previewIsImage: false }
}

export interface FileForViewer {
  id: string
  section: string
  title: string
  description: string | null
  provider: Provider
  kind: FileKind
  previewUrl: string | null
  previewIsImage: boolean
  /** The link this viewer should open: the edit link if allowed, otherwise the view link. */
  openUrl: string
  canEdit: boolean
  isPinned: boolean
  order: number
  createdBy: { id: string; name: string | null; image?: string | null } | null
  updatedAt: string
  /** Only present for owners and admins, who manage the file. */
  manage?: {
    viewUrl: string
    editUrl: string | null
    viewAccess: string
    editAccess: string
    editorIds: string[]
  }
}

/** Shape a stored file for one viewer. Returns null if they may not see it. */
export function fileForViewer(file: StoredFile, viewer: Viewer, siteOrigin?: string): FileForViewer | null {
  if (!canViewFile(file, viewer)) return null
  const canEdit = canEditFile(file, viewer)
  const info = describeFileLink(file.viewUrl, siteOrigin)
  const result: FileForViewer = {
    id: file.id,
    section: file.section,
    title: file.title,
    description: file.description,
    provider: info.provider,
    kind: info.kind,
    previewUrl: info.previewUrl,
    previewIsImage: info.previewIsImage,
    openUrl: canEdit && file.editUrl ? file.editUrl : file.viewUrl,
    canEdit,
    isPinned: file.isPinned,
    order: file.order,
    createdBy: file.createdBy ?? null,
    updatedAt: new Date(file.updatedAt).toISOString(),
  }
  if (canManageFiles(viewer)) {
    result.manage = {
      viewUrl: file.viewUrl,
      editUrl: file.editUrl,
      viewAccess: file.viewAccess,
      editAccess: file.editAccess,
      editorIds: file.editorIds,
    }
  }
  return result
}

export interface FileInput {
  section: FileSection
  title: string
  description: string | null
  viewUrl: string
  editUrl: string | null
  viewAccess: ViewAccess
  editAccess: EditAccess
  editorIds: string[]
  isPinned: boolean
}

/** Validate a create/update body. `partial` allows omitted fields for updates. */
export function parseFileInput(body: unknown, partial: boolean, siteOrigin?: string): { ok: true; data: Partial<FileInput> } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') return { ok: false, error: 'Invalid request.' }
  const b = body as Record<string, unknown>
  const data: Partial<FileInput> = {}

  if (b.section !== undefined || !partial) {
    if (!FILE_SECTIONS.includes(b.section as FileSection)) return { ok: false, error: 'Choose a section.' }
    data.section = b.section as FileSection
  }
  if (b.title !== undefined || !partial) {
    const title = typeof b.title === 'string' ? b.title.trim() : ''
    if (!title || title.length > 200) return { ok: false, error: 'Give the file a title (up to 200 characters).' }
    data.title = title
  }
  if (b.description !== undefined) {
    const d = typeof b.description === 'string' ? b.description.trim() : ''
    if (d.length > 2000) return { ok: false, error: 'Description is too long (2,000 characters max).' }
    data.description = d || null
  }
  if (b.viewUrl !== undefined || !partial) {
    const v = normalizeFileUrl(b.viewUrl, siteOrigin)
    if (!v) return { ok: false, error: 'Paste a valid https:// link for viewing.' }
    data.viewUrl = v
  }
  if (b.editUrl !== undefined) {
    if (b.editUrl === null || b.editUrl === '') {
      data.editUrl = null
    } else {
      const e = normalizeFileUrl(b.editUrl, siteOrigin)
      if (!e) return { ok: false, error: 'The edit link must be a valid https:// link.' }
      data.editUrl = e
    }
  }
  if (b.viewAccess !== undefined || !partial) {
    const va = b.viewAccess ?? 'MEMBERS'
    if (!VIEW_ACCESS.includes(va as ViewAccess)) return { ok: false, error: 'Invalid view access.' }
    data.viewAccess = va as ViewAccess
  }
  if (b.editAccess !== undefined || !partial) {
    const ea = b.editAccess ?? 'OWNERS'
    if (!EDIT_ACCESS.includes(ea as EditAccess)) return { ok: false, error: 'Invalid edit access.' }
    data.editAccess = ea as EditAccess
  }
  if (b.editorIds !== undefined) {
    if (!Array.isArray(b.editorIds) || b.editorIds.length > 200 || !b.editorIds.every(id => typeof id === 'string' && id.length <= 64)) {
      return { ok: false, error: 'Invalid editor list.' }
    }
    data.editorIds = [...new Set(b.editorIds as string[])]
  }
  if (b.isPinned !== undefined) data.isPinned = b.isPinned === true
  return { ok: true, data }
}
