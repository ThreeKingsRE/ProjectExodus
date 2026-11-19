'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import {
  ClipboardList, Plus, Loader2, X, Save, Trash2, ArrowUp, ArrowDown, Link2, Check, Download,
  BarChart3, Pencil, Play, Square, ExternalLink, Users, Globe, Lock, Star,
} from 'lucide-react'
import {
  AUDIENCE_LABEL, QUESTION_TYPES, QUESTION_TYPE_LABEL,
  type QuestionSummary, type QuestionType, type SurveyAudience, type SurveyQuestion, type SurveyStatus,
} from '@/lib/projects/surveys'
import { SurveyResultsView } from './SurveyQuestions'

interface SurveyListItem {
  id: string
  title: string
  description: string | null
  status: SurveyStatus
  audience: SurveyAudience
  anonymous: boolean
  shareResults: boolean
  closesAt: string | null
  accepting: boolean
  questionCount: number
  hasResponded: boolean
  responseCount?: number
  /** Set for a survey hosted on another site (Google Forms, etc.) */
  externalUrl?: string | null
}

interface SurveyDetail extends Omit<SurveyListItem, 'questionCount' | 'hasResponded'> {
  externalUrl?: string | null
  questions: SurveyQuestion[]
  responseCount: number
  results: QuestionSummary[]
  respondents: { name: string; at: string }[]
  /** For linked surveys: where the results came from */
  resultsImport?: { connected: boolean; source: 'sheet' | 'upload' | null; importedAt: string | null } | null
}

const AUDIENCE_ICON = { MEMBERS: Lock, SIGNED_IN: Users, PUBLIC: Globe } as const
const STATUS_STYLE: Record<SurveyStatus, string> = {
  DRAFT: 'bg-[var(--muted)] text-theme-muted',
  OPEN: 'bg-green-500/15 text-green-700 dark:text-green-400',
  CLOSED: 'bg-red-500/10 text-red-600',
}

export function ProjectSurveys({ projectId, projectSlug, featuredUrl = null, onFeature }: {
  projectId: string
  projectSlug: string
  /** The link behind the initiative's "Take the survey" button, if any */
  featuredUrl?: string | null
  /** Set (or clear with null) the featured survey link; owners and admins only */
  onFeature?: (url: string | null) => Promise<boolean>
}) {
  const [surveys, setSurveys] = useState<SurveyListItem[]>([])
  const [canManage, setCanManage] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [builder, setBuilder] = useState<SurveyDetail | 'new' | null>(null)
  const [resultsFor, setResultsFor] = useState<SurveyDetail | null>(null)
  const [copied, setCopied] = useState<string | null>(null)
  const [linker, setLinker] = useState<SurveyListItem | 'new' | null>(null)
  const [featuring, setFeaturing] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/projects/${projectId}/surveys`)
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.error || 'Failed to load surveys.')
      setSurveys(data.data.surveys)
      setCanManage(data.data.canManage)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load surveys.')
    } finally {
      setLoading(false)
    }
  }, [projectId])

  useEffect(() => { load() }, [load])

  const surveyUrl = (id: string) => `${window.location.origin}/community/projects/${projectSlug}/surveys/${id}`
  /** Where people answer: the linked site, or this site's survey page */
  const answerUrl = (s: SurveyListItem) => s.externalUrl || surveyUrl(s.id)

  const copyLink = async (s: SurveyListItem) => {
    const url = answerUrl(s)
    try {
      await navigator.clipboard.writeText(url)
      setCopied(s.id)
      setTimeout(() => setCopied(null), 2000)
    } catch {
      window.prompt('Copy this survey link:', url)
    }
  }

  const feature = async (s: SurveyListItem | null) => {
    if (!onFeature) return
    setFeaturing(s?.id ?? 'clear')
    await onFeature(s ? answerUrl(s) : null)
    setFeaturing(null)
  }

  const loadDetail = async (id: string) => {
    const res = await fetch(`/api/projects/${projectId}/surveys/${id}`)
    const data = await res.json()
    if (!res.ok || !data.success) throw new Error(data.error || 'Failed to load survey.')
    return data.data as SurveyDetail
  }

  const setStatus = async (s: SurveyListItem, status: SurveyStatus) => {
    const res = await fetch(`/api/projects/${projectId}/surveys/${s.id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }),
    })
    if (res.ok) load()
  }

  const remove = async (s: SurveyListItem) => {
    if (!window.confirm(`Delete "${s.title}" and all ${s.responseCount ?? 0} responses? This can’t be undone.`)) return
    const res = await fetch(`/api/projects/${projectId}/surveys/${s.id}`, { method: 'DELETE' })
    if (res.ok) load()
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-black">SURVEYS</h2>
          <p className="text-sm text-theme-muted">Build a survey here, or link one you already run (Google Forms, Microsoft Forms, Typeform and others).</p>
        </div>
        {canManage && (
          <div className="flex flex-wrap gap-2">
            <Button className="font-bold" onClick={() => setBuilder('new')}>
              <Plus className="w-4 h-4 mr-2" />
              NEW SURVEY
            </Button>
            <Button variant="outline" className="font-bold" onClick={() => setLinker('new')}>
              <Link2 className="w-4 h-4 mr-2" />
              LINK EXISTING SURVEY
            </Button>
          </div>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 animate-spin text-theme-primary" /></div>
      ) : error ? (
        <Card className="border-2 border-dashed"><CardContent className="p-8 text-center text-theme-muted">{error}</CardContent></Card>
      ) : surveys.length === 0 ? (
        <Card className="border-2 border-dashed">
          <CardContent className="p-12 text-center">
            <ClipboardList className="w-16 h-16 mx-auto mb-4 text-theme-muted opacity-50" />
            <h3 className="text-xl font-black mb-2 text-theme-muted">NO SURVEYS YET</h3>
            <p className="text-theme-muted mb-4">
              {canManage ? 'Create a survey here and share its link (anyone can answer, even without an account), or link a survey you already run elsewhere.' : 'Surveys from this initiative will show up here.'}
            </p>
            {canManage && (
              <div className="flex flex-wrap justify-center gap-2">
                <Button className="font-bold" onClick={() => setBuilder('new')}><Plus className="w-4 h-4 mr-2" />CREATE A SURVEY</Button>
                <Button variant="outline" className="font-bold" onClick={() => setLinker('new')}><Link2 className="w-4 h-4 mr-2" />LINK EXISTING SURVEY</Button>
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {surveys.map(s => {
            const AudienceIcon = AUDIENCE_ICON[s.audience]
            return (
              <Card key={s.id} className="border-2">
                <CardContent className="p-4 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="font-black text-lg leading-tight">{s.title}</h3>
                      <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-theme-muted">
                        <span className={`rounded-full px-2 py-0.5 font-bold ${STATUS_STYLE[s.status]}`}>{s.accepting ? 'OPEN' : s.status === 'OPEN' ? 'CLOSED' : s.status}</span>
                        {s.externalUrl ? (
                          <span className="flex items-center gap-1"><ExternalLink className="w-3 h-3" />Linked · answered on {(() => { try { return new URL(s.externalUrl).hostname.replace(/^www\./, '') } catch { return 'another site' } })()}</span>
                        ) : (
                          <>
                            <span>{s.questionCount} questions</span>
                            {s.responseCount !== undefined && <span>{s.responseCount} responses</span>}
                          </>
                        )}
                        {featuredUrl && featuredUrl === answerUrl(s) && <span className="flex items-center gap-1 font-bold text-theme-primary"><Star className="w-3 h-3" />Featured on the initiative page</span>}
                        <span className="flex items-center gap-1"><AudienceIcon className="w-3 h-3" />{AUDIENCE_LABEL[s.audience]}</span>
                        {s.closesAt && <span>Closes {new Date(s.closesAt).toLocaleDateString()}</span>}
                      </p>
                    </div>
                  </div>
                  {s.description && <p className="text-sm text-theme-muted line-clamp-2">{s.description}</p>}
                  <div className="flex flex-wrap gap-2">
                    {s.externalUrl ? (
                      <a href={s.externalUrl} target="_blank" rel="noreferrer">
                        <Button size="sm" className="font-bold"><ExternalLink className="w-4 h-4 mr-1" />OPEN SURVEY</Button>
                      </a>
                    ) : (
                      <Link href={`/community/projects/${projectSlug}/surveys/${s.id}`}>
                        <Button size="sm" className="font-bold">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          {s.status === 'DRAFT' ? 'PREVIEW' : s.hasResponded ? 'VIEW' : s.accepting ? 'ANSWER' : 'VIEW'}
                        </Button>
                      </Link>
                    )}
                    {s.status !== 'DRAFT' && (
                      <Button size="sm" variant="outline" className="font-bold" onClick={() => copyLink(s)}>
                        {copied === s.id ? <Check className="w-4 h-4 mr-1" /> : <Link2 className="w-4 h-4 mr-1" />}
                        {copied === s.id ? 'COPIED' : 'COPY LINK'}
                      </Button>
                    )}
                    {canManage && onFeature && s.status === 'OPEN' && (
                      featuredUrl === answerUrl(s) ? (
                        <Button size="sm" variant="outline" className="font-bold" disabled={featuring !== null} onClick={() => feature(null)} title="Remove the Take the survey button from the initiative page">
                          <Star className="w-4 h-4 mr-1 fill-current" />FEATURED
                        </Button>
                      ) : (
                        <Button
                          size="sm" variant="outline" className="font-bold"
                          disabled={featuring !== null || (!s.externalUrl && s.audience !== 'PUBLIC')}
                          onClick={() => feature(s)}
                          title={!s.externalUrl && s.audience !== 'PUBLIC' ? 'Set who can answer to “Anyone with the link” to feature it for visitors' : 'Show a Take the survey button for this survey on the initiative page'}
                        >
                          <Star className="w-4 h-4 mr-1" />FEATURE ON PAGE
                        </Button>
                      )
                    )}
                    {canManage && (
                      <>
                        <Button size="sm" variant="outline" className="font-bold" onClick={async () => setResultsFor(await loadDetail(s.id))}>
                          <BarChart3 className="w-4 h-4 mr-1" />RESULTS
                        </Button>
                        {s.status === 'OPEN' ? (
                          <Button size="sm" variant="ghost" onClick={() => setStatus(s, 'CLOSED')}><Square className="w-4 h-4 mr-1" />Close</Button>
                        ) : (
                          <Button size="sm" variant="ghost" onClick={() => setStatus(s, 'OPEN')}><Play className="w-4 h-4 mr-1" />{s.status === 'DRAFT' ? 'Open' : 'Reopen'}</Button>
                        )}
                        <Button size="sm" variant="ghost" onClick={async () => (s.externalUrl ? setLinker(s) : setBuilder(await loadDetail(s.id)))} aria-label="Edit survey"><Pencil className="w-4 h-4" /></Button>
                        <Button size="sm" variant="ghost" onClick={() => remove(s)} aria-label="Delete survey"><Trash2 className="w-4 h-4" /></Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}

      {linker && (
        <SurveyLinker
          projectId={projectId}
          survey={linker === 'new' ? null : linker}
          onClose={() => setLinker(null)}
          onSaved={() => { setLinker(null); load() }}
        />
      )}

      {builder && (
        <SurveyBuilder
          projectId={projectId}
          survey={builder === 'new' ? null : builder}
          onClose={() => setBuilder(null)}
          onSaved={() => { setBuilder(null); load() }}
        />
      )}

      {resultsFor && (
        <Modal title={resultsFor.title} onClose={() => setResultsFor(null)}>
          {resultsFor.externalUrl && (
            <ResultsImport
              projectId={projectId}
              survey={resultsFor}
              onImported={async () => setResultsFor(await loadDetail(resultsFor.id))}
            />
          )}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-theme-muted">{resultsFor.responseCount} responses</p>
            {resultsFor.responseCount > 0 && !resultsFor.externalUrl && (
              <a href={`/api/projects/${projectId}/surveys/${resultsFor.id}/export`}>
                <Button size="sm" variant="outline" className="font-bold"><Download className="w-4 h-4 mr-1" />DOWNLOAD CSV</Button>
              </a>
            )}
          </div>
          {resultsFor.responseCount === 0 ? (
            <p className="py-8 text-center text-theme-muted">{resultsFor.externalUrl ? 'No results imported yet. Connect the form’s results above.' : 'No responses yet. Open the survey and share its link.'}</p>
          ) : (
            <SurveyResultsView results={resultsFor.results} total={resultsFor.responseCount} />
          )}
          {!resultsFor.anonymous && resultsFor.respondents.length > 0 && (
            <details className="rounded-lg border-2 border-[var(--border)] p-3">
              <summary className="cursor-pointer text-sm font-bold">Who responded ({resultsFor.respondents.length})</summary>
              <ul className="mt-2 space-y-1 text-sm">
                {resultsFor.respondents.map((r, i) => (
                  <li key={i} className="flex justify-between gap-2"><span>{r.name}</span><span className="text-theme-muted">{new Date(r.at).toLocaleDateString()}</span></li>
                ))}
              </ul>
            </details>
          )}
        </Modal>
      )}
    </div>
  )
}

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-label={title}>
      <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-[var(--background)] p-5 sm:rounded-2xl space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-black truncate">{title}</h3>
          <button type="button" onClick={onClose} aria-label="Close"><X className="w-5 h-5" /></button>
        </div>
        {children}
      </div>
    </div>
  )
}

/** Bring a linked survey's results in: a Google Sheets link (refreshable) or an uploaded CSV. */
function ResultsImport({ projectId, survey, onImported }: { projectId: string; survey: SurveyDetail; onImported: () => Promise<void> }) {
  const [sheetUrl, setSheetUrl] = useState('')
  const [busy, setBusy] = useState<string | null>(null)
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null)
  const info = survey.resultsImport

  const send = async (label: string, body: object | null) => {
    setBusy(label)
    setMessage(null)
    const res = await fetch(`/api/projects/${projectId}/surveys/${survey.id}/import`, {
      method: body ? 'POST' : 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    }).catch(() => null)
    const data = await res?.json().catch(() => null)
    setBusy(null)
    if (data?.success) {
      setMessage({ ok: true, text: body ? `Imported ${data.data.responses} responses.` : 'Imported results removed.' })
      setSheetUrl('')
      await onImported()
    } else setMessage({ ok: false, text: data?.error ?? 'Something went wrong. Try again.' })
  }

  const upload = (file: File | undefined) => {
    if (!file) return
    if (file.size > 3 * 1024 * 1024) { setMessage({ ok: false, text: 'That file is too large (3 MB maximum).' }); return }
    file.text().then(text => send('upload', { csv: text }))
  }

  return (
    <div className="space-y-3 rounded-lg border-2 border-[var(--border)] p-3 text-sm">
      <p className="font-bold">Results from the linked survey</p>
      {info?.importedAt && (
        <p className="text-xs text-theme-muted">
          {info.source === 'sheet' ? 'From the connected Google Sheet' : 'From an uploaded CSV'} · updated {new Date(info.importedAt).toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {info?.connected && (
          <Button size="sm" className="font-bold" disabled={busy !== null} onClick={() => send('refresh', { refresh: true })}>
            {busy === 'refresh' ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Download className="w-4 h-4 mr-1" />}REFRESH
          </Button>
        )}
        <label className="inline-flex cursor-pointer items-center rounded-md border-2 border-[var(--border)] px-3 py-1.5 text-xs font-bold focus-within:ring-2 focus-within:ring-[var(--primary)]">
          {busy === 'upload' ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Download className="w-4 h-4 mr-1 rotate-180" />}UPLOAD CSV
          <input type="file" accept=".csv,text/csv" className="sr-only" disabled={busy !== null} onChange={e => { upload(e.target.files?.[0]); e.target.value = '' }} />
        </label>
        {info?.importedAt && (
          <Button size="sm" variant="ghost" disabled={busy !== null} onClick={() => send('remove', null)}><Trash2 className="w-4 h-4 mr-1" />Remove</Button>
        )}
      </div>
      <details className="rounded-md bg-[var(--muted)] p-2" open={!info?.importedAt}>
        <summary className="cursor-pointer text-xs font-bold">Connect a Google Form’s results (updates when you refresh)</summary>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-xs text-theme-muted">
          <li>In Google Forms, open <strong>Responses</strong> and choose <strong>Link to Sheets</strong>.</li>
          <li>In that sheet, choose <strong>File → Share → Publish to web</strong>, pick the responses sheet and <strong>Comma-separated values (.csv)</strong>, then Publish. (Or share the sheet as “Anyone with the link can view”.)</li>
          <li>Paste the link here.</li>
        </ol>
        <p className="mt-1 text-xs text-theme-muted">Published or shared sheets can be opened by anyone who has the link. If the answers are sensitive, use <strong>Upload CSV</strong> instead (Forms: Responses → ⋮ → Download responses).</p>
        <div className="mt-2 flex gap-2">
          <label htmlFor={`sheet-${survey.id}`} className="sr-only">Google Sheets link</label>
          <input id={`sheet-${survey.id}`} type="url" inputMode="url" value={sheetUrl} onChange={e => setSheetUrl(e.target.value)} placeholder="https://docs.google.com/spreadsheets/…" className="min-w-0 flex-1 rounded-md border-2 border-[var(--border)] bg-[var(--background)] px-2 py-1.5 text-xs" />
          <Button size="sm" className="font-bold" disabled={busy !== null || !sheetUrl.trim()} onClick={() => send('connect', { csvUrl: sheetUrl })}>
            {busy === 'connect' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'CONNECT'}
          </Button>
        </div>
      </details>
      {message && <p role="status" className={`text-xs font-bold ${message.ok ? 'text-green-600' : 'text-red-500'}`}>{message.text}</p>}
    </div>
  )
}

/** Link a survey that already runs on another site. */
function SurveyLinker({ projectId, survey, onClose, onSaved }: {
  projectId: string; survey: SurveyListItem | null; onClose: () => void; onSaved: () => void
}) {
  const [title, setTitle] = useState(survey?.title ?? '')
  const [url, setUrl] = useState(survey?.externalUrl ?? '')
  const [description, setDescription] = useState(survey?.description ?? '')
  const [audience, setAudience] = useState<SurveyAudience>(survey?.audience ?? 'PUBLIC')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const save = async () => {
    setSaving(true)
    setError(null)
    const res = await fetch(survey ? `/api/projects/${projectId}/surveys/${survey.id}` : `/api/projects/${projectId}/surveys`, {
      method: survey ? 'PATCH' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, audience, externalUrl: url, ...(survey ? {} : { status: 'OPEN' }) }),
    }).catch(() => null)
    const data = await res?.json().catch(() => null)
    setSaving(false)
    if (data?.success) onSaved()
    else setError(data?.error ?? 'Could not save. Try again.')
  }

  return (
    <Modal title={survey ? 'EDIT LINKED SURVEY' : 'LINK AN EXISTING SURVEY'} onClose={onClose}>
      <p className="text-sm text-theme-muted">Already running a survey in Google Forms, Microsoft Forms, Typeform or elsewhere? Link it here. People answer it there, and its results stay in that tool.</p>
      <div className="space-y-1">
        <label htmlFor="link-survey-url" className="text-sm font-bold">Survey link</label>
        <input id="link-survey-url" type="url" inputMode="url" value={url} onChange={e => setUrl(e.target.value)} maxLength={500} placeholder="https://forms.gle/…" className="w-full rounded-lg border-2 border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm" />
      </div>
      <div className="space-y-1">
        <label htmlFor="link-survey-title" className="text-sm font-bold">Title</label>
        <input id="link-survey-title" value={title} onChange={e => setTitle(e.target.value)} maxLength={200} placeholder="e.g. Riverknoll housing survey" className="w-full rounded-lg border-2 border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm" />
      </div>
      <div className="space-y-1">
        <label htmlFor="link-survey-description" className="text-sm font-bold">Description (optional)</label>
        <textarea id="link-survey-description" value={description} onChange={e => setDescription(e.target.value)} maxLength={4000} rows={2} className="w-full rounded-lg border-2 border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm" />
      </div>
      <div className="space-y-1">
        <label htmlFor="link-survey-audience" className="text-sm font-bold">Who sees it in this tab</label>
        <select id="link-survey-audience" value={audience} onChange={e => setAudience(e.target.value as SurveyAudience)} className="w-full rounded-lg border-2 border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm">
          {(Object.keys(AUDIENCE_LABEL) as SurveyAudience[]).map(a => <option key={a} value={a}>{AUDIENCE_LABEL[a]}</option>)}
        </select>
      </div>
      {error && <p className="text-sm font-bold text-red-500" role="alert">{error}</p>}
      <div className="flex flex-wrap justify-end gap-2">
        <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
        <Button type="button" className="font-bold" disabled={saving || !url.trim() || !title.trim()} onClick={save}>
          {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}{survey ? 'SAVE' : 'LINK SURVEY'}
        </Button>
      </div>
    </Modal>
  )
}

let idCounter = 0
const newId = () => `q${Date.now().toString(36)}${(idCounter++).toString(36)}`

const blankQuestion = (type: QuestionType = 'SINGLE_CHOICE'): SurveyQuestion => ({
  id: newId(),
  type,
  label: '',
  required: false,
  ...(type === 'SINGLE_CHOICE' || type === 'MULTIPLE_CHOICE' ? { options: ['', ''] } : {}),
  ...(type === 'SCALE' ? { scaleMin: 1, scaleMax: 5 } : {}),
})

function SurveyBuilder({ projectId, survey, onClose, onSaved }: {
  projectId: string; survey: SurveyDetail | null; onClose: () => void; onSaved: () => void
}) {
  const locked = !!survey && survey.responseCount > 0
  const [title, setTitle] = useState(survey?.title ?? '')
  const [description, setDescription] = useState(survey?.description ?? '')
  const [audience, setAudience] = useState<SurveyAudience>(survey?.audience ?? 'MEMBERS')
  const [anonymous, setAnonymous] = useState(survey?.anonymous ?? false)
  const [shareResults, setShareResults] = useState(survey?.shareResults ?? false)
  const [closesAt, setClosesAt] = useState(survey?.closesAt ? survey.closesAt.slice(0, 10) : '')
  const [questions, setQuestions] = useState<SurveyQuestion[]>(survey?.questions ?? [blankQuestion()])
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const update = (i: number, patch: Partial<SurveyQuestion>) => setQuestions(qs => qs.map((q, k) => (k === i ? { ...q, ...patch } : q)))
  const changeType = (i: number, type: QuestionType) =>
    setQuestions(qs => qs.map((q, k) => (k === i ? { ...blankQuestion(type), id: q.id, label: q.label, help: q.help, required: q.required, ...(q.options && (type === 'SINGLE_CHOICE' || type === 'MULTIPLE_CHOICE') ? { options: q.options } : {}) } : q)))
  const move = (i: number, dir: -1 | 1) =>
    setQuestions(qs => {
      const next = [...qs]
      const j = i + dir
      if (j < 0 || j >= next.length) return qs
      ;[next[i], next[j]] = [next[j], next[i]]
      return next
    })

  const save = async (status?: SurveyStatus) => {
    setSaving(true)
    setError(null)
    try {
      const body: Record<string, unknown> = {
        title, description, audience, anonymous, shareResults,
        closesAt: closesAt ? new Date(`${closesAt}T23:59:59`).toISOString() : null,
      }
      if (status) body.status = status
      if (!locked) body.questions = questions
      const res = await fetch(survey ? `/api/projects/${projectId}/surveys/${survey.id}` : `/api/projects/${projectId}/surveys`, {
        method: survey ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
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
    <Modal title={survey ? 'EDIT SURVEY' : 'NEW SURVEY'} onClose={onClose}>
      <label className="block space-y-1">
        <span className="text-xs font-bold">Title</span>
        <input className={input} maxLength={200} value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Riverknoll resident housing survey" />
      </label>
      <label className="block space-y-1">
        <span className="text-xs font-bold">Intro (optional)</span>
        <textarea className={input} rows={2} maxLength={4000} value={description} onChange={e => setDescription(e.target.value)} placeholder="Why you’re asking and how answers will be used." />
      </label>

      <fieldset className="space-y-1">
        <legend className="text-xs font-bold">Who can answer</legend>
        {(Object.keys(AUDIENCE_LABEL) as SurveyAudience[]).map(a => (
          <label key={a} className="flex items-center gap-2 text-sm">
            <input type="radio" checked={audience === a} onChange={() => setAudience(a)} />{AUDIENCE_LABEL[a]}
          </label>
        ))}
      </fieldset>

      <div className="grid gap-2 sm:grid-cols-2">
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={anonymous} onChange={e => setAnonymous(e.target.checked)} />Anonymous (hide names from the team)</label>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={shareResults} onChange={e => setShareResults(e.target.checked)} />Show results to people after they answer</label>
        <label className="block space-y-1 sm:col-span-2">
          <span className="text-xs font-bold">Closes on (optional)</span>
          <input type="date" className={input} value={closesAt} onChange={e => setClosesAt(e.target.value)} />
        </label>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-bold">Questions</p>
        {locked && (
          <p className="rounded-lg bg-[var(--muted)] p-3 text-xs text-theme-muted">
            People have already answered, so the questions are locked to keep results consistent. You can still change the title, intro, and settings.
          </p>
        )}
        {questions.map((q, i) => (
          <div key={q.id} className="space-y-2 rounded-xl border-2 border-[var(--border)] p-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-black">{i + 1}</span>
              <select className={`${input} flex-1`} value={q.type} disabled={locked} onChange={e => changeType(i, e.target.value as QuestionType)} aria-label="Question type">
                {QUESTION_TYPES.map(t => <option key={t} value={t}>{QUESTION_TYPE_LABEL[t]}</option>)}
              </select>
              {!locked && (
                <div className="flex">
                  <Button type="button" size="sm" variant="ghost" onClick={() => move(i, -1)} aria-label="Move up"><ArrowUp className="w-4 h-4" /></Button>
                  <Button type="button" size="sm" variant="ghost" onClick={() => move(i, 1)} aria-label="Move down"><ArrowDown className="w-4 h-4" /></Button>
                  <Button type="button" size="sm" variant="ghost" onClick={() => setQuestions(qs => qs.filter((_, k) => k !== i))} aria-label="Remove question" disabled={questions.length === 1}><Trash2 className="w-4 h-4" /></Button>
                </div>
              )}
            </div>
            <input className={input} maxLength={500} value={q.label} disabled={locked} onChange={e => update(i, { label: e.target.value })} placeholder="Question" />
            <input className={input} maxLength={500} value={q.help ?? ''} disabled={locked} onChange={e => update(i, { help: e.target.value })} placeholder="Helper text (optional)" />

            {q.options && (
              <div className="space-y-1">
                {q.options.map((opt, k) => (
                  <div key={k} className="flex gap-1">
                    <input
                      className={input}
                      maxLength={200}
                      value={opt}
                      disabled={locked}
                      onChange={e => update(i, { options: q.options!.map((o, j) => (j === k ? e.target.value : o)) })}
                      placeholder={`Choice ${k + 1}`}
                    />
                    {!locked && q.options!.length > 2 && (
                      <Button type="button" size="sm" variant="ghost" onClick={() => update(i, { options: q.options!.filter((_, j) => j !== k) })} aria-label="Remove choice"><X className="w-4 h-4" /></Button>
                    )}
                  </div>
                ))}
                {!locked && (
                  <Button type="button" size="sm" variant="ghost" onClick={() => update(i, { options: [...q.options!, ''] })}><Plus className="w-4 h-4 mr-1" />Add choice</Button>
                )}
              </div>
            )}

            {q.type === 'SCALE' && (
              <div className="grid grid-cols-2 gap-2">
                <label className="text-xs space-y-1">From
                  <select className={input} value={q.scaleMin ?? 1} disabled={locked} onChange={e => update(i, { scaleMin: Number(e.target.value) })}>
                    {[0, 1].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </label>
                <label className="text-xs space-y-1">To
                  <select className={input} value={q.scaleMax ?? 5} disabled={locked} onChange={e => update(i, { scaleMax: Number(e.target.value) })}>
                    {[3, 4, 5, 7, 10].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </label>
                <input className={input} maxLength={60} value={q.minLabel ?? ''} disabled={locked} onChange={e => update(i, { minLabel: e.target.value })} placeholder="Low label (e.g. Poor)" />
                <input className={input} maxLength={60} value={q.maxLabel ?? ''} disabled={locked} onChange={e => update(i, { maxLabel: e.target.value })} placeholder="High label (e.g. Excellent)" />
              </div>
            )}

            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={q.required} disabled={locked} onChange={e => update(i, { required: e.target.checked })} />Required
            </label>
          </div>
        ))}
        {!locked && (
          <Button type="button" variant="outline" className="w-full font-bold" onClick={() => setQuestions(qs => [...qs, blankQuestion()])}>
            <Plus className="w-4 h-4 mr-2" />ADD QUESTION
          </Button>
        )}
      </div>

      {error && <p className="text-sm font-bold text-red-500" role="alert">{error}</p>}

      <div className="flex flex-wrap justify-end gap-2">
        <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
        <Button type="button" variant="outline" className="font-bold" disabled={saving} onClick={() => save()}>
          <Save className="w-4 h-4 mr-2" />{survey ? 'SAVE' : 'SAVE DRAFT'}
        </Button>
        {(!survey || survey.status === 'DRAFT') && (
          <Button type="button" className="font-bold" disabled={saving} onClick={() => save('OPEN')}>
            {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Play className="w-4 h-4 mr-2" />}
            SAVE &amp; OPEN
          </Button>
        )}
      </div>
    </Modal>
  )
}
