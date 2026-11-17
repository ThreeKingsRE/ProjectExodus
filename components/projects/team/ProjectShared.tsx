'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Diamond, Eye, FileText, Loader2, Pencil, Share2, CalendarDays, CheckCircle2 } from 'lucide-react'
import { SECTION_INFO, type FileForViewer, type FileSection } from '@/lib/projects/files'
import { STATUS_LABEL, type TimelineStatus } from '@/lib/projects/timeline'

interface Doc { id: string; title: string; description: string | null; updatedAt: string; isPublic: boolean; status: string; _count?: { comments: number } }
interface Item { id: string; kind: string; title: string; startAt: string | null; endAt: string | null; allDay: boolean; status: TimelineStatus; isPublic: boolean }

/**
 * What followers can see: files, documents, and timeline items the team chose
 * to share. Collaborators see the same view, as a preview of the public side.
 */
export function ProjectShared({ projectId, slug, isTeam }: { projectId: string; slug: string; isTeam: boolean }) {
  const [files, setFiles] = useState<FileForViewer[] | null>(null)
  const [docs, setDocs] = useState<Doc[] | null>(null)
  const [items, setItems] = useState<Item[] | null>(null)

  useEffect(() => {
    const now = Date.now()
    const qs = new URLSearchParams({ from: new Date(now - 90 * 86400000).toISOString(), to: new Date(now + 730 * 86400000).toISOString() })
    fetch(`/api/projects/${projectId}/files`).then(r => r.json()).then(d => setFiles(d.success ? d.data.files.filter((f: FileForViewer) => f.sharedWithFollowers) : [])).catch(() => setFiles([]))
    fetch(`/api/documents?projectId=${projectId}`).then(r => r.json()).then(d => setDocs(d.success ? d.data.filter((x: Doc) => x.isPublic && x.status === 'PUBLISHED') : [])).catch(() => setDocs([]))
    fetch(`/api/projects/${projectId}/timeline?${qs}`).then(r => r.json()).then(d => setItems(d.success ? d.data.items.filter((i: Item) => i.isPublic) : [])).catch(() => setItems([]))
  }, [projectId])

  const loading = files === null || docs === null || items === null
  const empty = !loading && !files!.length && !docs!.length && !items!.length
  const when = (i: Item) => {
    const iso = i.endAt ?? i.startAt
    if (!iso) return 'No date'
    const d = new Date(iso)
    return i.allDay
      ? new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()).toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })
      : d.toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black flex items-center gap-2"><Share2 className="w-6 h-6" />SHARED</h2>
        <p className="text-sm text-theme-muted">
          {isTeam
            ? 'What followers can see. Share a file, document, or timeline item from its own tab to add it here.'
            : 'Plans, documents, and milestones the team has shared with followers.'}
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-theme-primary" /></div>
      ) : empty ? (
        <Card className="border-2 border-dashed">
          <CardContent className="p-10 text-center text-theme-muted">
            <Share2 className="w-12 h-12 mx-auto mb-3 opacity-50" />
            {isTeam ? 'Nothing is shared with followers yet.' : 'The team hasn’t shared anything yet. Follow along in the public discussion.'}
          </CardContent>
        </Card>
      ) : (
        <>
          {items!.length > 0 && (
            <section className="space-y-2">
              <h3 className="font-black flex items-center gap-2"><CalendarDays className="w-5 h-5" />Milestones & schedule</h3>
              <ul className="space-y-1">
                {items!.map(i => (
                  <li key={i.id} className="flex items-center gap-3 rounded-lg border-2 border-[var(--border)] px-3 py-2">
                    {i.kind === 'MILESTONE' ? <Diamond className="w-4 h-4 text-purple-500 shrink-0" /> : i.status === 'DONE' ? <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" /> : <CalendarDays className="w-4 h-4 text-theme-muted shrink-0" />}
                    <span className={`min-w-0 flex-1 truncate font-bold ${i.status === 'DONE' ? 'line-through opacity-60' : ''}`}>{i.title}</span>
                    <span className="shrink-0 text-xs text-theme-muted">{STATUS_LABEL[i.status]} · {when(i)}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {docs!.length > 0 && (
            <section className="space-y-2">
              <h3 className="font-black flex items-center gap-2"><FileText className="w-5 h-5" />Documents</h3>
              <div className="grid gap-3 md:grid-cols-2">
                {docs!.map(d => (
                  <Link key={d.id} href={`/community/projects/${slug}/documents/${d.id}`}>
                    <Card className="border-2 hover:border-theme-primary transition-colors h-full">
                      <CardContent className="p-4">
                        <p className="font-black truncate">{d.title}</p>
                        {d.description && <p className="text-sm text-theme-muted line-clamp-2">{d.description}</p>}
                        <p className="mt-2 text-xs text-theme-muted">Updated {new Date(d.updatedAt).toLocaleDateString()} · {d._count?.comments ?? 0} comments</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {files!.length > 0 && (
            <section className="space-y-2">
              <h3 className="font-black flex items-center gap-2"><Eye className="w-5 h-5" />Files</h3>
              <div className="grid gap-3 md:grid-cols-2">
                {files!.map(f => (
                  <Card key={f.id} className="border-2">
                    <CardContent className="p-4 space-y-2">
                      <div>
                        <p className="font-black truncate">{f.title}</p>
                        <p className="text-xs text-theme-muted">{SECTION_INFO[f.section as FileSection]?.label ?? f.section}</p>
                      </div>
                      {f.description && <p className="text-sm text-theme-muted line-clamp-2">{f.description}</p>}
                      <a href={f.openUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="font-bold">{f.canEdit ? <Pencil className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}{f.canEdit ? 'OPEN TO EDIT' : 'OPEN'}</Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  )
}
