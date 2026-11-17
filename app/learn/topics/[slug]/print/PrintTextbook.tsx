'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Download, FileText, Printer } from 'lucide-react'
import { sanitizeHtml } from '@/lib/utils/sanitize'
import { LEARNING_LEVELS, LearningLevel } from '@/types/learning'

export interface PrintChapter {
  number: number
  title: string
  description: string
  lessons: { title: string; html: string }[]
  quiz: { question: string; options: string[]; correctIndex: number; explanation: string }[]
}

type TextStyle = 'standard' | 'large' | 'dyslexia'
type QuizMode = 'none' | 'questions' | 'answers'

// One stylesheet for the page, for printing, and inside downloaded HTML files
const BOOK_CSS = `
.pt-book { color: #111; background: #fff; font-family: Georgia, 'Times New Roman', serif; font-size: 12pt; line-height: 1.6; max-width: 46em; margin: 0 auto; padding: 2em 1.5em; }
.pt-book h1 { font-size: 2.2em; margin: 0 0 .2em; line-height: 1.15; }
.pt-book h2 { font-size: 1.6em; margin: 1.6em 0 .4em; line-height: 1.25; }
.pt-book h3 { font-size: 1.25em; margin: 1.3em 0 .4em; }
.pt-book h4 { font-size: 1.05em; margin: 1.1em 0 .3em; }
.pt-book p, .pt-book li { orphans: 3; widows: 3; }
.pt-book table { border-collapse: collapse; width: 100%; margin: 1em 0; font-size: .92em; }
.pt-book th, .pt-book td { border: 1px solid #999; padding: .35em .5em; text-align: left; vertical-align: top; }
.pt-book th { background: #f1f1f1; }
.pt-book blockquote { border-left: 3px solid #999; margin: 1em 0; padding: .2em 1em; color: #333; font-style: italic; }
.pt-book img { max-width: 100%; height: auto; }
.pt-book .pt-meta { color: #444; font-size: .95em; }
.pt-book .pt-contents ol { padding-left: 1.4em; }
.pt-book .pt-chapter { border-top: 2px solid #111; margin-top: 2.5em; padding-top: 1em; }
.pt-book .pt-chapter-label { text-transform: uppercase; letter-spacing: .12em; font-size: .8em; color: #555; }
.pt-book .pt-quiz ol { padding-left: 1.4em; }
.pt-book .pt-quiz ol ol { list-style: upper-alpha; }
.pt-book .pt-answers { border-top: 1px dashed #777; margin-top: 2em; padding-top: .5em; }
.pt-book.pt-large { font-size: 16pt; line-height: 1.7; }
.pt-book.pt-dyslexia { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14pt; line-height: 1.9; letter-spacing: .03em; word-spacing: .12em; text-align: left; }
.pt-book.pt-dyslexia blockquote { font-style: normal; }
@media print {
  @page { margin: 18mm 16mm; }
  .pt-book { max-width: none; padding: 0; }
  .pt-book .pt-chapter { break-before: page; border-top: none; margin-top: 0; }
  .pt-book h2, .pt-book h3, .pt-book h4 { break-after: avoid; }
  .pt-book table, .pt-book blockquote, .pt-book li { break-inside: avoid; }
  .pt-book .pt-answers { break-before: page; }
}
`

const STYLE_LABEL: Record<TextStyle, string> = { standard: 'Standard', large: 'Large print', dyslexia: 'Dyslexia-friendly' }

export default function PrintTextbook(props: {
  topicId: string
  topicTitle: string
  topicDescription: string
  level: LearningLevel
  scope: string
  volumeCount: number
  volumeLabels: string[]
  chapterTitles: string[]
  chapters: PrintChapter[]
}) {
  const { topicId, topicTitle, topicDescription, level, scope, volumeCount, volumeLabels, chapterTitles, chapters } = props
  const router = useRouter()
  const bookRef = useRef<HTMLElement>(null)
  const [style, setStyle] = useState<TextStyle>('standard')
  const [quiz, setQuiz] = useState<QuizMode>('questions')
  const [ready, setReady] = useState(false)
  useEffect(() => setReady(true), []) // sanitizing needs the browser

  // Remember the reader's choices on this device
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('exodus:print-options') ?? '{}')
      if (saved.style) setStyle(saved.style)
      if (saved.quiz) setQuiz(saved.quiz)
    } catch { /* storage unavailable */ }
  }, [])
  useEffect(() => {
    try { localStorage.setItem('exodus:print-options', JSON.stringify({ style, quiz })) } catch { /* ignore */ }
  }, [style, quiz])

  const levelLabel = LEARNING_LEVELS[level]?.label ?? level
  const scopeLabel = scope === 'all' ? 'Complete textbook' : scope.startsWith('v') ? volumeLabels[Number(scope.slice(1)) - 1] : `Chapter ${scope.slice(1)}`
  const fileBase = `${topicId}-${level.toLowerCase().replace(/_/g, '-')}-${scope}`
  const html = useMemo(
    () => (ready ? chapters.map((c) => c.lessons.map((l) => sanitizeHtml(l.html))) : []),
    [ready, chapters]
  )

  const go = (next: { level?: string; scope?: string }) => {
    const q = new URLSearchParams({ level: next.level ?? level, scope: next.scope ?? scope })
    router.push(`/learn/topics/${topicId}/print?${q}`)
  }

  const download = (kind: 'html' | 'txt') => {
    const book = bookRef.current
    if (!book) return
    const title = `${topicTitle} (${levelLabel}) · ${scopeLabel}`
    const content = kind === 'html'
      ? `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><style>${BOOK_CSS} body{margin:0;background:#fff}</style></head><body>${book.outerHTML}</body></html>`
      : book.innerText.replace(/\n{3,}/g, '\n\n')
    const url = URL.createObjectURL(new Blob([content], { type: kind === 'html' ? 'text/html' : 'text/plain' }))
    const a = document.createElement('a')
    a.href = url
    a.download = `${fileBase}.${kind}`
    a.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  const select = 'max-w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-900'
  const button = 'inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium'

  return (
    <div className="min-h-screen bg-white">
      <style>{`${BOOK_CSS}
@media print { .pt-toolbar, header, nav, footer, button[aria-label="Open Sage"] { display: none !important; } }`}</style>

      <div className="pt-toolbar border-b border-gray-200 bg-gray-50 print:hidden">
        <div className="mx-auto px-4 py-4" style={{ maxWidth: '64rem' }}>
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <Link href={`/learn/topics/${topicId}`} className="inline-flex items-center gap-1 text-sm text-gray-700 hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to {topicTitle}
            </Link>
            <h1 className="text-base font-semibold text-gray-900">Print or download your textbook</h1>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            <label className="min-w-0 max-w-full text-xs text-gray-700">Level<br />
              <select className={select} value={level} onChange={(e) => go({ level: e.target.value })}>
                {Object.entries(LEARNING_LEVELS).map(([key, v]) => <option key={key} value={key}>{v.label}</option>)}
              </select>
            </label>
            <label className="min-w-0 max-w-full text-xs text-gray-700">What to include<br />
              <select className={select} value={scope} onChange={(e) => go({ scope: e.target.value })}>
                <option value="all">Complete textbook</option>
                {volumeCount > 1 && volumeLabels.map((v, i) => <option key={v} value={`v${i + 1}`}>{v}</option>)}
                {chapterTitles.map((t, i) => <option key={i} value={`c${i + 1}`}>Chapter {i + 1}: {t}</option>)}
              </select>
            </label>
            <label className="min-w-0 max-w-full text-xs text-gray-700">Text style<br />
              <select className={select} value={style} onChange={(e) => setStyle(e.target.value as TextStyle)}>
                {(Object.keys(STYLE_LABEL) as TextStyle[]).map((s) => <option key={s} value={s}>{STYLE_LABEL[s]}</option>)}
              </select>
            </label>
            <label className="min-w-0 max-w-full text-xs text-gray-700">Quizzes<br />
              <select className={select} value={quiz} onChange={(e) => setQuiz(e.target.value as QuizMode)}>
                <option value="none">Leave out</option>
                <option value="questions">Questions only</option>
                <option value="answers">Questions + answer key</option>
              </select>
            </label>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => window.print()} className={`${button} bg-green-700 text-white hover:bg-green-800`}>
                <Printer className="h-4 w-4" /> Print or save as PDF
              </button>
              <button type="button" onClick={() => download('html')} className={`${button} border border-gray-300 bg-white text-gray-900 hover:bg-gray-100`}>
                <Download className="h-4 w-4" /> Web page (.html)
              </button>
              <button type="button" onClick={() => download('txt')} className={`${button} border border-gray-300 bg-white text-gray-900 hover:bg-gray-100`}>
                <FileText className="h-4 w-4" /> Plain text (.txt)
              </button>
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-600">
            PDF: choose &ldquo;Save as PDF&rdquo; in the print dialog. The web page works offline in any browser and with screen
            readers; plain text suits braille and text-to-speech tools.
          </p>
        </div>
      </div>

      <article ref={bookRef} className={`pt-book${style === 'large' ? ' pt-large' : style === 'dyslexia' ? ' pt-dyslexia' : ''}`} lang="en">
        <header className="pt-title">
          <h1>{topicTitle}</h1>
          <p className="pt-meta">{topicDescription}</p>
          <p className="pt-meta">{levelLabel} level · {scopeLabel} · Project Exodus</p>
        </header>

        {chapters.length > 1 && (
          <nav className="pt-contents" aria-label="Contents">
            <h2>Contents</h2>
            <ol start={chapters[0].number}>
              {chapters.map((c) => <li key={c.number}>{c.title}</li>)}
            </ol>
          </nav>
        )}

        {chapters.map((c, ci) => (
          <section key={c.number} className="pt-chapter" aria-labelledby={`ch-${c.number}`}>
            <p className="pt-chapter-label">Chapter {c.number}</p>
            <h2 id={`ch-${c.number}`}>{c.title}</h2>
            {c.description && <p className="pt-meta">{c.description}</p>}
            {c.lessons.map((l, li) => (
              <div key={li} className="pt-lesson">
                {c.lessons.length > 1 && <h3>{l.title}</h3>}
                <div dangerouslySetInnerHTML={{ __html: html[ci]?.[li] ?? '' }} />
              </div>
            ))}
            {quiz !== 'none' && c.quiz.length > 0 && (
              <div className="pt-quiz">
                <h3>Check your understanding</h3>
                <ol>
                  {c.quiz.map((q, qi) => (
                    <li key={qi}>
                      {q.question}
                      <ol>{q.options.map((o, oi) => <li key={oi}>{o}</li>)}</ol>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </section>
        ))}

        {quiz === 'answers' && (
          <section className="pt-answers" aria-labelledby="answer-key">
            <h2 id="answer-key">Answer key</h2>
            {chapters.filter((c) => c.quiz.length).map((c) => (
              <div key={c.number}>
                <h3>Chapter {c.number}: {c.title}</h3>
                <ol>
                  {c.quiz.map((q, qi) => (
                    <li key={qi}><strong>{String.fromCharCode(65 + q.correctIndex)}.</strong> {q.options[q.correctIndex]}{q.explanation ? ` — ${q.explanation}` : ''}</li>
                  ))}
                </ol>
              </div>
            ))}
          </section>
        )}
      </article>
    </div>
  )
}
