'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FeedPost } from '@/components/social/FeedPost'
import { ImagePlus, Loader2, Megaphone, MoreHorizontal, Pencil, Pin, PinOff, Send, Trash2, X, Globe, Users, Lock } from 'lucide-react'
import { AUDIENCE_LABEL, MAX_UPDATE_IMAGES, UPDATE_AUDIENCES, type UpdateAudience } from '@/lib/social/updates'

const AUDIENCE_ICON = { PUBLIC: Globe, FOLLOWERS_ONLY: Users, PRIVATE: Lock } as const

/** Shrink a photo in the browser before upload (phone photos are often 5–10 MB). */
async function toUploadableDataUrl(file: File): Promise<string> {
  const bitmap = await createImageBitmap(file)
  const scale = Math.min(1, 1600 / Math.max(bitmap.width, bitmap.height))
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(bitmap.width * scale)
  canvas.height = Math.round(bitmap.height * scale)
  canvas.getContext('2d')!.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
  bitmap.close?.()
  return canvas.toDataURL('image/jpeg', 0.85)
}

/**
 * An initiative's updates: a feed of posts, newsletter style. Public updates also
 * appear in the community feed and Current Events.
 */
export function ProjectUpdates({ projectId, projectName }: { projectId: string; projectName: string }) {
  const [posts, setPosts] = useState<any[]>([])
  const [cursor, setCursor] = useState<string | null>(null)
  const [canPost, setCanPost] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [editing, setEditing] = useState<any | null>(null)

  const load = useCallback(async (after?: string) => {
    after ? setLoadingMore(true) : setLoading(true)
    try {
      const res = await fetch(`/api/projects/${projectId}/updates${after ? `?cursor=${after}` : ''}`)
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json.error || 'Failed to load updates.')
      setPosts(prev => (after ? [...prev, ...json.data.posts] : json.data.posts))
      setCursor(json.data.nextCursor)
      setCanPost(json.data.canPost)
      setError(null)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load updates.')
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }, [projectId])

  useEffect(() => { load() }, [load])

  const patch = async (post: any, body: Record<string, unknown>) => {
    const res = await fetch(`/api/projects/${projectId}/updates/${post.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    if (res.ok) load()
    else alert((await res.json().catch(() => ({}))).error || 'Could not save.')
  }
  const remove = async (post: any) => {
    if (!window.confirm('Delete this update? Its likes and comments are deleted too.')) return
    const res = await fetch(`/api/projects/${projectId}/updates/${post.id}`, { method: 'DELETE' })
    if (res.ok) setPosts(prev => prev.filter(p => p.id !== post.id))
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h2 className="text-2xl font-black flex items-center gap-2"><Megaphone className="w-6 h-6" />UPDATES</h2>
        <p className="text-sm text-theme-muted">News from {projectName}. Public updates also show in the community feed.</p>
      </div>

      {canPost && <Composer projectId={projectId} onPosted={() => load()} />}

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-theme-primary" /></div>
      ) : error ? (
        <Card className="border-2 border-dashed"><CardContent className="p-8 text-center text-theme-muted">{error}</CardContent></Card>
      ) : posts.length === 0 ? (
        <Card className="border-2 border-dashed">
          <CardContent className="p-10 text-center text-theme-muted">
            <Megaphone className="w-12 h-12 mx-auto mb-3 opacity-50" />
            {canPost ? 'Post your first update: share progress, photos, wins, and what you need help with.' : 'No updates yet. Follow to see them in your feed when they’re posted.'}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {posts.map(post => (
            <FeedPost
              key={post.id}
              post={post}
              hideInitiative
              menu={(post.canEdit || post.canModerate) ? (
                <PostMenu
                  post={post}
                  onPin={() => patch(post, { isPinned: !post.isPinned })}
                  onEdit={() => setEditing(post)}
                  onDelete={() => remove(post)}
                />
              ) : undefined}
            />
          ))}
          {cursor && (
            <div className="flex justify-center">
              <Button variant="outline" className="font-bold" disabled={loadingMore} onClick={() => load(cursor)}>
                {loadingMore && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}OLDER UPDATES
              </Button>
            </div>
          )}
        </div>
      )}

      {editing && <EditUpdate projectId={projectId} post={editing} onClose={() => setEditing(null)} onSaved={() => { setEditing(null); load() }} />}
    </div>
  )
}

function PostMenu({ post, onPin, onEdit, onDelete }: { post: any; onPin: () => void; onEdit: () => void; onDelete: () => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button className="p-2 hover:bg-[var(--muted)] rounded-lg" onClick={() => setOpen(o => !o)} aria-label="Update options" aria-expanded={open}>
        <MoreHorizontal className="w-5 h-5 text-theme-muted" />
      </button>
      {open && (
        <div className="absolute right-0 z-20 mt-1 w-44 overflow-hidden rounded-lg border-2 border-[var(--border)] bg-[var(--background)] shadow-lg" onMouseLeave={() => setOpen(false)}>
          {post.canModerate && (
            <button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-[var(--muted)]" onClick={() => { setOpen(false); onPin() }}>
              {post.isPinned ? <PinOff className="w-4 h-4" /> : <Pin className="w-4 h-4" />}{post.isPinned ? 'Unpin' : 'Pin to top'}
            </button>
          )}
          {post.canEdit && (
            <button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-[var(--muted)]" onClick={() => { setOpen(false); onEdit() }}>
              <Pencil className="w-4 h-4" />Edit
            </button>
          )}
          <button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-[var(--muted)]" onClick={() => { setOpen(false); onDelete() }}>
            <Trash2 className="w-4 h-4" />Delete
          </button>
        </div>
      )}
    </div>
  )
}

function AudiencePicker({ value, onChange }: { value: UpdateAudience; onChange: (v: UpdateAudience) => void }) {
  return (
    <div className="flex flex-wrap gap-1" role="radiogroup" aria-label="Who can see this">
      {UPDATE_AUDIENCES.map(a => {
        const Icon = AUDIENCE_ICON[a]
        return (
          <button
            key={a}
            type="button"
            role="radio"
            aria-checked={value === a}
            onClick={() => onChange(a)}
            className={`flex items-center gap-1 rounded-full border-2 px-2.5 py-1 text-xs font-bold ${value === a ? 'border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]' : 'border-[var(--border)] hover:border-[var(--primary)]'}`}
            title={AUDIENCE_LABEL[a]}
          >
            <Icon className="w-3.5 h-3.5" />{a === 'PUBLIC' ? 'Everyone' : a === 'FOLLOWERS_ONLY' ? 'Followers' : 'Team'}
          </button>
        )
      })}
    </div>
  )
}

function Composer({ projectId, onPosted }: { projectId: string; onPosted: () => void }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [visibility, setVisibility] = useState<UpdateAudience>('PUBLIC')
  const [images, setImages] = useState<string[]>([])
  const [uploading, setUploading] = useState(0)
  const [posting, setPosting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInput = useRef<HTMLInputElement>(null)

  const addPhotos = async (files: FileList | null) => {
    if (!files?.length) return
    const room = MAX_UPDATE_IMAGES - images.length
    const chosen = Array.from(files).filter(f => f.type.startsWith('image/')).slice(0, room)
    setError(chosen.length < files.length ? `Up to ${MAX_UPDATE_IMAGES} photos per update.` : null)
    setUploading(n => n + chosen.length)
    await Promise.all(chosen.map(async file => {
      try {
        const image = await toUploadableDataUrl(file)
        const res = await fetch('/api/upload', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ image, folder: 'projects' }) })
        const json = await res.json()
        if (!res.ok || !json.success) throw new Error(json.error || 'Upload failed.')
        setImages(prev => [...prev, json.data.url].slice(0, MAX_UPDATE_IMAGES))
      } catch (e) {
        setError(e instanceof Error ? e.message : 'A photo failed to upload.')
      } finally {
        setUploading(n => n - 1)
      }
    }))
  }

  const post = async () => {
    setPosting(true)
    setError(null)
    try {
      const res = await fetch(`/api/projects/${projectId}/updates`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, visibility, images }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json.error || 'Could not post.')
      setTitle(''); setContent(''); setImages([]); setVisibility('PUBLIC')
      onPosted()
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not post.')
    } finally {
      setPosting(false)
    }
  }

  const input = 'w-full rounded-lg border-2 border-[var(--border)] bg-[var(--background)] px-3 py-2'

  return (
    <Card className="border-2 border-theme-primary">
      <CardContent className="p-4 space-y-3">
        <input className={`${input} font-black`} maxLength={160} value={title} onChange={e => setTitle(e.target.value)} placeholder="Headline (optional)" aria-label="Headline" />
        <textarea className={`${input} text-sm`} rows={4} maxLength={10000} value={content} onChange={e => setContent(e.target.value)} placeholder="What’s new? Progress, photos, wins, what you need help with… Use #hashtags to reach more people." aria-label="Update" />
        {(images.length > 0 || uploading > 0) && (
          <div className="grid grid-cols-3 gap-2">
            {images.map((url, i) => (
              <div key={url} className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt={`Photo ${i + 1}`} className="aspect-square w-full rounded-lg object-cover" />
                <button className="absolute right-1 top-1 rounded-full bg-black/60 p-1 text-white" onClick={() => setImages(prev => prev.filter(u => u !== url))} aria-label={`Remove photo ${i + 1}`}><X className="w-3.5 h-3.5" /></button>
              </div>
            ))}
            {Array.from({ length: uploading }).map((_, i) => (
              <div key={`u${i}`} className="flex aspect-square items-center justify-center rounded-lg bg-[var(--muted)]"><Loader2 className="w-5 h-5 animate-spin" /></div>
            ))}
          </div>
        )}
        <div className="flex flex-wrap items-center gap-2">
          <Button type="button" size="sm" variant="ghost" disabled={images.length + uploading >= MAX_UPDATE_IMAGES} onClick={() => fileInput.current?.click()}>
            <ImagePlus className="w-4 h-4 mr-1" />Photos
          </Button>
          <input ref={fileInput} type="file" accept="image/jpeg,image/png,image/webp,image/heic" multiple className="sr-only" onChange={e => { addPhotos(e.target.files); e.target.value = '' }} />
          <AudiencePicker value={visibility} onChange={setVisibility} />
          <Button className="ml-auto font-bold" disabled={posting || uploading > 0 || !content.trim()} onClick={post}>
            {posting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}POST
          </Button>
        </div>
        <p className="text-xs text-theme-muted">{AUDIENCE_LABEL[visibility]}</p>
        {error && <p className="text-sm font-bold text-red-500" role="alert">{error}</p>}
      </CardContent>
    </Card>
  )
}

function EditUpdate({ projectId, post, onClose, onSaved }: { projectId: string; post: any; onClose: () => void; onSaved: () => void }) {
  const [title, setTitle] = useState(post.title ?? '')
  const [content, setContent] = useState(post.content)
  const [visibility, setVisibility] = useState<UpdateAudience>(post.visibility)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const save = async () => {
    setSaving(true)
    const res = await fetch(`/api/projects/${projectId}/updates/${post.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, content, visibility }) })
    const json = await res.json().catch(() => ({}))
    setSaving(false)
    if (res.ok && json.success) onSaved()
    else setError(json.error || 'Could not save.')
  }
  const input = 'w-full rounded-lg border-2 border-[var(--border)] bg-[var(--background)] px-3 py-2'
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-label="Edit update">
      <div className="w-full max-w-lg space-y-3 rounded-t-2xl bg-[var(--background)] p-5 sm:rounded-2xl">
        <div className="flex items-center justify-between"><h3 className="text-lg font-black">EDIT UPDATE</h3><button onClick={onClose} aria-label="Close"><X className="w-5 h-5" /></button></div>
        <input className={`${input} font-black`} maxLength={160} value={title} onChange={e => setTitle(e.target.value)} placeholder="Headline (optional)" aria-label="Headline" />
        <textarea className={`${input} text-sm`} rows={6} maxLength={10000} value={content} onChange={e => setContent(e.target.value)} aria-label="Update" />
        <AudiencePicker value={visibility} onChange={setVisibility} />
        {error && <p className="text-sm font-bold text-red-500" role="alert">{error}</p>}
        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button className="font-bold" disabled={saving || !content.trim()} onClick={save}>{saving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}SAVE</Button>
        </div>
      </div>
    </div>
  )
}
