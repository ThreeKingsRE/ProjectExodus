'use client'

import { use, useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Loader2, CheckCircle2, ArrowLeft, Send, Eye } from 'lucide-react'
import { SurveyQuestionFields, SurveyResultsView } from '@/components/projects/surveys/SurveyQuestions'
import type { AnswerValue, Answers, QuestionSummary, SurveyQuestion } from '@/lib/projects/surveys'

interface PublicSurvey {
  id: string
  title: string
  description: string | null
  project: { name: string; slug: string }
  anonymous: boolean
  accepting: boolean
  closesAt: string | null
  questions: SurveyQuestion[]
  /** Set when the survey is answered on another site */
  externalUrl?: string | null
  hasResponded: boolean
  isPreview: boolean
  results: (QuestionSummary & { textCount?: number })[] | null
}

export default function SurveyPage({ params }: { params: Promise<{ slug: string; surveyId: string }> }) {
  const { slug, surveyId } = use(params)
  const [survey, setSurvey] = useState<PublicSurvey | null>(null)
  const [loadError, setLoadError] = useState<{ message: string; needsSignIn?: boolean } | null>(null)
  const [answers, setAnswers] = useState<Answers>({})
  const [website, setWebsite] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const [results, setResults] = useState<PublicSurvey['results']>(null)

  useEffect(() => {
    fetch(`/api/surveys/${surveyId}`)
      .then(async r => {
        const data = await r.json()
        if (!r.ok || !data.success) throw Object.assign(new Error(data.error || 'Survey not found.'), { needsSignIn: data.needsSignIn })
        setSurvey(data.data)
        setResults(data.data.results)
      })
      .catch((e: Error & { needsSignIn?: boolean }) => setLoadError({ message: e.message, needsSignIn: e.needsSignIn }))
  }, [surveyId])

  const setAnswer = (id: string, value: AnswerValue | undefined) =>
    setAnswers(prev => {
      const next = { ...prev }
      if (value === undefined) delete next[id]
      else next[id] = value
      return next
    })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch(`/api/surveys/${surveyId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, website }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.error || 'Could not submit.')
      setResults(data.data.results)
      setDone(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not submit.')
    } finally {
      setSubmitting(false)
    }
  }

  const backHref = `/community/projects/${survey?.project.slug ?? slug}`

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <Link href={backHref} className="mb-6 inline-flex items-center gap-1 text-sm font-bold text-theme-muted hover:text-theme-primary">
        <ArrowLeft className="w-4 h-4" /> {survey?.project.name ?? 'Back to initiative'}
      </Link>

      {!survey && !loadError && (
        <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-theme-primary" /></div>
      )}

      {loadError && (
        <Card className="border-2">
          <CardContent className="p-8 text-center space-y-4">
            <p className="font-bold">{loadError.message}</p>
            {loadError.needsSignIn && (
              <Link href={`/auth/signin?callbackUrl=${encodeURIComponent(`/community/projects/${slug}/surveys/${surveyId}`)}`}>
                <Button className="font-bold">SIGN IN</Button>
              </Link>
            )}
          </CardContent>
        </Card>
      )}

      {survey && (
        <Card className="border-2">
          <CardContent className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wide text-theme-primary">Survey</p>
              <h1 className="text-2xl sm:text-3xl font-black">{survey.title}</h1>
              {survey.description && <p className="text-theme-muted whitespace-pre-wrap">{survey.description}</p>}
              <p className="text-xs text-theme-muted">
                {survey.anonymous ? 'Your name is not shown with your answers.' : 'The initiative team can see who responded.'}
                {survey.closesAt && ` Closes ${new Date(survey.closesAt).toLocaleDateString()}.`}
              </p>
            </div>

            {survey.isPreview && (
              <p className="flex items-center gap-2 rounded-lg bg-[var(--muted)] p-3 text-sm font-bold"><Eye className="w-4 h-4" />Draft preview. Only owners and admins can see this until it’s opened.</p>
            )}

            {done || survey.hasResponded ? (
              <div className="space-y-6">
                <div className="flex items-center gap-3 rounded-lg bg-green-500/10 p-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                  <p className="font-bold">{done ? 'Thanks! Your answers were submitted.' : 'You’ve already answered this survey. Thank you!'}</p>
                </div>
                {results && (
                  <div className="space-y-3">
                    <h2 className="text-lg font-black">RESULTS SO FAR</h2>
                    <SurveyResultsView results={results} total={Math.max(...results.map(r => r.answered), 0)} />
                  </div>
                )}
              </div>
            ) : survey.externalUrl ? (
              <div className="space-y-3 rounded-lg bg-[var(--muted)] p-4">
                <p className="font-bold">This survey is answered on another site.</p>
                <a href={survey.externalUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-2 font-bold text-[var(--primary-foreground)]">Open the survey</a>
              </div>
            ) : !survey.accepting && !survey.isPreview ? (
              <p className="rounded-lg bg-[var(--muted)] p-4 font-bold">This survey is closed.</p>
            ) : (
              <form onSubmit={submit} className="space-y-6">
                <SurveyQuestionFields questions={survey.questions} answers={answers} onChange={setAnswer} disabled={submitting} />
                {/* Honeypot for bots; hidden from people and screen readers */}
                <input type="text" name="website" value={website} onChange={e => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
                {error && <p className="text-sm font-bold text-red-500" role="alert">{error}</p>}
                <Button type="submit" className="w-full font-bold" disabled={submitting || survey.isPreview}>
                  {submitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                  {survey.isPreview ? 'OPEN THE SURVEY TO COLLECT ANSWERS' : 'SUBMIT'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      )}
    </main>
  )
}
