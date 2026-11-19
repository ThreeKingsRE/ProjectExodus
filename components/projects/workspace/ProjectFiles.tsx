'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import {
  ExternalLink, Plus, Loader2, Pencil, Trash2, Pin, X, Save, FileSpreadsheet, FileText,
  Presentation, PenTool, Image as ImageIcon, File as FileIcon, Link2, Eye, Lock, Maximize2,
} from 'lucide-react'
import { ItemComments, fetchCommentCounts } from '@/components/projects/team/ItemComments'
import { FILE_SECTIONS, SECTION_INFO, type FileForViewer, type FileSection, type FileKind } from '@/lib/projects/files'

const KIND_ICON: Record<FileKind, typeof FileIcon> = {
  sheet: FileSpreadsheet, doc: FileText, slides: Presentation, drawing: PenTool, design: PenTool,
  pdf: FileText, image: ImageIcon, file: FileIcon, link: Link2,
}

const PROVIDER_LABEL: Record<string, string> = {
  google: 'Google', microsoft: 'Microsoft 365', figma: 'Figma', canva: 'Canva', hosted: 'Project Exodus', link: 'Link',
}

interface Member { userId: string; role: string; user: { id: string; name: string | null } }

interface Props {
  projectId: string
  /** Section chosen from the URL (?section=pitch); defaults to all sections. */
  initialSection?: FileSection | 'ALL'
}

export function ProjectFiles({ projectId, initialSection = 'ALL' }: Props) {
  const [commentCounts, setCommentCounts] = useState<Record<string, number>>({})
  const [section, setSection] = useState<FileSection | 'ALL'>(initialSection)
  const [files, setFiles] = useState<FileForViewer[]>([])
  // Comment counts for the file cards
  useEffect(() => { if (files.length) fetchCommentCounts(projectId, 'FILE', files.map(f => f.id)).then(setCommentCounts) }, [projectId, files])
  const [canManage, setCanManage] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editing, setEditing] = useState<FileForViewer | 'new' | null>(null)
  const [expanded, setExpanded] = useState<FileForViewer | null>(null)

  useEffect(() => setSection(initialSection), [initialSection])

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/projects/${projectId}/files`)
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.error || 'Failed to load files.')
      setFiles(data.data.files)
      setCanManage(data.data.canManage)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load files.')
    } finally {
      setLoading(false)
    }
  }, [projectId])

  useEffect(() => { load() }, [load])

  const counts = useMemo(() => {
    const c: Record<string, number> = {}
    for (const f of files) c[f.section] = (c[f.section] || 0) + 1
    return c
  }, [files])

  const shown = section === 'ALL' ? files : files.filter(f => f.section === section)

  const remove = async (file: FileForViewer) => {
    if (!window.confirm(`Remove "${file.title}" from the workspace? The original document is not deleted.`)) return
    const res = await fetch(`/api/projects/${projectId}/files/${file.id}`, { method: 'DELETE' })
    if (res.ok) setFiles(prev => prev.filter(f => f.id !== file.id))
  }

  const togglePin = async (file: FileForViewer) => {
    const res = await fetch(`/api/projects/${projectId}/files/${file.id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ isPinned: !file.isPinned }),
    })
    if (res.ok) load()
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-black">PROJECT WORKSPACE</h2>
          <p className="text-sm text-theme-muted">Pitch decks, financials, designs, schedules, and resources. Click any file to open the real document.</p>
        </div>
        {canManage && (
          <Button className="font-bold" onClick={() => setEditing('new')}>
            <Plus className="w-4 h-4 mr-2" />
            ADD FILE
          </Button>
        )}
      </div>

      {/* Section switcher */}
      <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Workspace sections">
        {(['ALL', ...FILE_SECTIONS] as const).map(s => {
          const active = section === s
          const label = s === 'ALL' ? 'All' : SECTION_INFO[s].label
          const count = s === 'ALL' ? files.length : counts[s] || 0
          return (
            <button
              key={s}
              role="tab"
              aria-selected={active}
              onClick={() => setSection(s)}
              className={`whitespace-nowrap rounded-full border-2 px-3 py-1.5 text-sm font-bold transition-colors ${
                active ? 'border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]' : 'border-[var(--border)] hover:border-[var(--primary)]'
              }`}
            >
              {label} <span className="opacity-70">({count})</span>
            </button>
          )
        })}
      </div>
      {section !== 'ALL' && <p className="text-sm text-theme-muted -mt-3">{SECTION_INFO[section].hint}</p>}

      {loading ? (
        <div className="flex items-center justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-theme-primary" /></div>
      ) : error ? (
        <Card className="border-2 border-dashed"><CardContent className="p-8 text-center text-theme-muted">{error}</CardContent></Card>
      ) : shown.length === 0 ? (
        <Card className="border-2 border-dashed">
          <CardContent className="p-6 sm:p-12 text-center">
            <FileSpreadsheet className="w-16 h-16 mx-auto mb-4 text-theme-muted opacity-50" />
            <h3 className="text-xl font-black mb-2 text-theme-muted">NO FILES HERE YET</h3>
            <p className="text-theme-muted mb-4">
              {canManage
                ? 'Add a Google Sheet, Excel file, slide deck, Figma board, or any link. Members see a preview and open the real document with the access you give them.'
                : 'The initiative owner hasn’t added files to this section yet.'}
            </p>
            {canManage && (
              <Button className="font-bold" onClick={() => setEditing('new')}>
                <Plus className="w-4 h-4 mr-2" />
                ADD FIRST FILE
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {shown.map(file => (
            <FileCard
              key={file.id}
              projectId={projectId}
              commentCount={commentCounts[file.id] ?? 0}
              file={file}
              canManage={canManage}
              onEdit={() => setEditing(file)}
              onRemove={() => remove(file)}
              onPin={() => togglePin(file)}
              onExpand={() => setExpanded(file)}
            />
          ))}
        </div>
      )}

      {editing && (
        <FileForm
          projectId={projectId}
          file={editing === 'new' ? null : editing}
          defaultSection={section === 'ALL' ? 'RESOURCES' : section}
          onClose={() => setEditing(null)}
          onSaved={() => { setEditing(null); load() }}
        />
      )}

      {expanded && expanded.previewUrl && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-black/80 p-3 sm:p-6" role="dialog" aria-modal="true" aria-label={expanded.title}>
          <div className="mb-3 flex items-center justify-between gap-3 text-white">
            <p className="truncate font-black">{expanded.title}</p>
            <div className="flex shrink-0 gap-2">
              <a href={expanded.openUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="font-bold"><ExternalLink className="w-4 h-4 mr-1" />{expanded.canEdit ? 'OPEN TO EDIT' : 'OPEN'}</Button>
              </a>
              <Button size="sm" variant="secondary" onClick={() => setExpanded(null)} aria-label="Close preview"><X className="w-4 h-4" /></Button>
            </div>
          </div>
          <Preview file={expanded} className="flex-1 rounded-lg bg-white" />
        </div>
      )}
    </div>
  )
}

function Preview({ file, className }: { file: FileForViewer; className: string }) {
  if (!file.previewUrl) return null
  if (file.previewIsImage) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={file.previewUrl} alt={file.title} className={`${className} object-contain`} loading="lazy" />
  }
  return (
    <iframe
      src={file.previewUrl}
      title={`Preview of ${file.title}`}
      className={`${className} w-full border-0`}
      loading="lazy"
      sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      referrerPolicy="strict-origin-when-cross-origin"
      allow="fullscreen"
    />
  )
}

function FileCard({ projectId, commentCount, file, canManage, onEdit, onRemove, onPin, onExpand }: {
  projectId: string; commentCount: number; file: FileForViewer; canManage: boolean; onEdit: () => void; onRemove: () => void; onPin: () => void; onExpand: () => void
}) {
  const Icon = KIND_ICON[file.kind] ?? FileIcon
  return (
    <Card className={`border-2 overflow-hidden ${file.isPinned ? 'border-theme-primary' : ''}`}>
      {file.previewUrl ? (
        <div className="relative h-56 bg-[var(--muted)]">
          <Preview file={file} className="h-full w-full" />
          <button
            onClick={onExpand}
            className="absolute right-2 top-2 rounded-md bg-[var(--background)]/90 p-1.5 shadow hover:bg-[var(--background)]"
            aria-label={`Expand preview of ${file.title}`}
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <a href={file.openUrl} target="_blank" rel="noopener noreferrer" className="hidden sm:flex h-32 items-center justify-center bg-[var(--muted)] hover:opacity-90">
          <Icon className="w-12 h-12 text-theme-primary" />
        </a>
      )}
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-[var(--primary)]/10 shrink-0"><Icon className="w-5 h-5 text-theme-primary" /></div>
          <div className="min-w-0 flex-1">
            <h3 className="font-black leading-tight">
              {file.isPinned && <Pin className="mr-1 inline w-3.5 h-3.5 text-theme-primary" aria-label="Pinned" />}
              {file.title}
            </h3>
            <p className="text-xs text-theme-muted">
              {SECTION_INFO[file.section as FileSection]?.label ?? file.section} · {PROVIDER_LABEL[file.provider] ?? 'Link'} · Updated {new Date(file.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        {file.description && <p className="mt-2 text-sm text-theme-muted line-clamp-3">{file.description}</p>}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <a href={file.openUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="font-bold">
              {file.canEdit ? <Pencil className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
              {file.canEdit ? 'OPEN TO EDIT' : 'OPEN'}
            </Button>
          </a>
          {!file.canEdit && (
            <span className="flex items-center gap-1 text-xs text-theme-muted"><Lock className="w-3 h-3" />View only</span>
          )}
          {canManage && (
            <div className="ml-auto flex gap-1">
              <Button size="sm" variant="ghost" onClick={onPin} aria-label={file.isPinned ? 'Unpin' : 'Pin'}><Pin className="w-4 h-4" /></Button>
              <Button size="sm" variant="ghost" onClick={onEdit} aria-label="Edit file settings"><Pencil className="w-4 h-4" /></Button>
              <Button size="sm" variant="ghost" onClick={onRemove} aria-label="Remove file"><Trash2 className="w-4 h-4" /></Button>
            </div>
          )}
        </div>
        <div className="mt-2"><ItemComments projectId={projectId} type="FILE" id={file.id} count={commentCount} /></div>
      </CardContent>
    </Card>
  )
}

function FileForm({ projectId, file, defaultSection, onClose, onSaved }: {
  projectId: string; file: FileForViewer | null; defaultSection: FileSection; onClose: () => void; onSaved: () => void
}) {
  const [form, setForm] = useState({
    section: (file?.section as FileSection) ?? defaultSection,
    title: file?.title ?? '',
    description: file?.description ?? '',
    viewUrl: file?.manage?.viewUrl ?? '',
    editUrl: file?.manage?.editUrl ?? '',
    viewAccess: file?.manage?.viewAccess ?? 'TEAM',
    editAccess: file?.manage?.editAccess ?? 'OWNERS',
    editorIds: file?.manage?.editorIds ?? [] as string[],
  })
  const [members, setMembers] = useState<Member[]>([])
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (form.editAccess !== 'SELECTED' || members.length) return
    fetch(`/api/projects/${projectId}/members`).then(r => r.json()).then(d => {
      if (d.success) setMembers(d.data.members)
    }).catch(() => {})
  }, [form.editAccess, members.length, projectId])

  const set = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => setForm(prev => ({ ...prev, [key]: value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    try {
      const res = await fetch(file ? `/api/projects/${projectId}/files/${file.id}` : `/api/projects/${projectId}/files`, {
        method: file ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, editUrl: form.editUrl.trim() || null }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.error || 'Could not save.')
      onSaved()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not save.')
    } finally {
      setSaving(false)
    }
  }

  const input = 'w-full rounded-lg border-2 border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm'

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-label={file ? 'Edit file' : 'Add file'}>
      <form onSubmit={submit} className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-[var(--background)] p-5 sm:rounded-2xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black">{file ? 'EDIT FILE' : 'ADD FILE'}</h3>
          <button type="button" onClick={onClose} aria-label="Close"><X className="w-5 h-5" /></button>
        </div>

        <label className="block space-y-1">
          <span className="text-xs font-bold">Section</span>
          <select value={form.section} onChange={e => set('section', e.target.value as FileSection)} className={input}>
            {FILE_SECTIONS.map(s => <option key={s} value={s}>{SECTION_INFO[s].label}</option>)}
          </select>
        </label>

        <label className="block space-y-1">
          <span className="text-xs font-bold">Title</span>
          <input required maxLength={200} value={form.title} onChange={e => set('title', e.target.value)} placeholder="e.g. Feasibility model v11" className={input} />
        </label>

        <label className="block space-y-1">
          <span className="text-xs font-bold">Description (optional)</span>
          <textarea maxLength={2000} rows={2} value={form.description} onChange={e => set('description', e.target.value)} className={input} />
        </label>

        <label className="block space-y-1">
          <span className="text-xs font-bold">View link</span>
          <input required value={form.viewUrl} onChange={e => set('viewUrl', e.target.value)} placeholder="https://docs.google.com/spreadsheets/d/…" className={input} />
          <span className="block text-xs text-theme-muted">Everyone who can see this file opens this link. Use a “Viewer” share link from Google or Microsoft.</span>
        </label>

        <label className="block space-y-1">
          <span className="text-xs font-bold">Edit link (optional)</span>
          <input value={form.editUrl} onChange={e => set('editUrl', e.target.value)} placeholder="https://docs.google.com/spreadsheets/d/…/edit" className={input} />
          <span className="block text-xs text-theme-muted">Only the people you allow below receive this link.</span>
        </label>

        <fieldset className="space-y-1">
          <legend className="text-xs font-bold">Who can see it</legend>
          <label className="flex items-center gap-2 text-sm"><input type="radio" checked={form.viewAccess === 'TEAM'} onChange={() => set('viewAccess', 'TEAM')} />Team only (collaborators)</label>
          <label className="flex items-center gap-2 text-sm"><input type="radio" checked={form.viewAccess === 'MEMBERS'} onChange={() => set('viewAccess', 'MEMBERS')} />Share with followers too (view and comment)</label>
        </fieldset>

        <fieldset className="space-y-1">
          <legend className="text-xs font-bold">Who gets the edit link</legend>
          <label className="flex items-center gap-2 text-sm"><input type="radio" checked={form.editAccess === 'OWNERS'} onChange={() => set('editAccess', 'OWNERS')} />Only me and admins</label>
          <label className="flex items-center gap-2 text-sm"><input type="radio" checked={form.editAccess === 'TEAM'} onChange={() => set('editAccess', 'TEAM')} />The whole team (contributors and up)</label>
          <label className="flex items-center gap-2 text-sm"><input type="radio" checked={form.editAccess === 'SELECTED'} onChange={() => set('editAccess', 'SELECTED')} />People I choose</label>
          {form.editAccess === 'SELECTED' && (
            <div className="mt-2 max-h-48 space-y-1 overflow-y-auto rounded-lg border-2 border-[var(--border)] p-2">
              {members.length === 0 ? <p className="text-xs text-theme-muted">Loading members…</p> : members
                .filter(m => m.role !== 'OWNER' && m.role !== 'ADMIN')
                .map(m => (
                  <label key={m.userId} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={form.editorIds.includes(m.userId)}
                      onChange={e => set('editorIds', e.target.checked ? [...form.editorIds, m.userId] : form.editorIds.filter(id => id !== m.userId))}
                    />
                    {m.user.name || 'Member'} <span className="text-xs text-theme-muted">({m.role.toLowerCase()})</span>
                  </label>
                ))}
            </div>
          )}
        </fieldset>

        <p className="rounded-lg bg-[var(--muted)] p-3 text-xs text-theme-muted">
          The site decides which link each person gets. Google or Microsoft still controls the document itself, so share it there with your editors too.
          If the edit link is set to “anyone with the link can edit,” anyone who is given it can edit.
        </p>

        {error && <p className="text-sm font-bold text-red-500">{error}</p>}

        <div className="flex justify-end gap-2">
          <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
          <Button type="submit" className="font-bold" disabled={saving}>
            {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
            SAVE
          </Button>
        </div>
      </form>
    </div>
  )
}
