'use client'

import type { AnswerValue, Answers, QuestionSummary, SurveyQuestion } from '@/lib/projects/surveys'

const field = 'w-full rounded-lg border-2 border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm focus:border-[var(--primary)] outline-none'

/** Renders survey questions as form inputs. */
export function SurveyQuestionFields({ questions, answers, onChange, disabled }: {
  questions: SurveyQuestion[]
  answers: Answers
  onChange: (id: string, value: AnswerValue | undefined) => void
  disabled?: boolean
}) {
  return (
    <div className="space-y-6">
      {questions.map((q, i) => {
        const value = answers[q.id]
        const name = `q-${q.id}`
        return (
          <fieldset key={q.id} className="space-y-2" disabled={disabled}>
            <legend className="font-bold">
              {i + 1}. {q.label}
              {q.required && <span className="text-red-500" aria-label="required"> *</span>}
            </legend>
            {q.help && <p className="text-sm text-theme-muted">{q.help}</p>}

            {q.type === 'SHORT_TEXT' && (
              <input className={field} maxLength={500} value={(value as string) ?? ''} onChange={e => onChange(q.id, e.target.value)} aria-label={q.label} />
            )}
            {q.type === 'LONG_TEXT' && (
              <textarea className={field} rows={4} maxLength={5000} value={(value as string) ?? ''} onChange={e => onChange(q.id, e.target.value)} aria-label={q.label} />
            )}
            {q.type === 'NUMBER' && (
              <input className={field} type="number" inputMode="decimal" value={value === undefined ? '' : String(value)} onChange={e => onChange(q.id, e.target.value === '' ? undefined : e.target.value)} aria-label={q.label} />
            )}
            {q.type === 'SINGLE_CHOICE' && (
              <div className="space-y-1">
                {q.options!.map(opt => (
                  <label key={opt} className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-[var(--muted)]">
                    <input type="radio" name={name} checked={value === opt} onChange={() => onChange(q.id, opt)} />
                    <span className="text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            )}
            {q.type === 'MULTIPLE_CHOICE' && (
              <div className="space-y-1">
                {q.options!.map(opt => {
                  const list = Array.isArray(value) ? value : []
                  return (
                    <label key={opt} className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-[var(--muted)]">
                      <input
                        type="checkbox"
                        checked={list.includes(opt)}
                        onChange={e => onChange(q.id, e.target.checked ? [...list, opt] : list.filter(v => v !== opt))}
                      />
                      <span className="text-sm">{opt}</span>
                    </label>
                  )
                })}
              </div>
            )}
            {q.type === 'SCALE' && (
              <div>
                <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={q.label}>
                  {Array.from({ length: (q.scaleMax ?? 5) - (q.scaleMin ?? 1) + 1 }, (_, k) => (q.scaleMin ?? 1) + k).map(n => (
                    <button
                      key={n}
                      type="button"
                      role="radio"
                      aria-checked={value === n}
                      onClick={() => onChange(q.id, n)}
                      className={`h-10 min-w-10 rounded-lg border-2 px-3 font-bold transition-colors ${
                        value === n ? 'border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]' : 'border-[var(--border)] hover:border-[var(--primary)]'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                {(q.minLabel || q.maxLabel) && (
                  <div className="mt-1 flex justify-between text-xs text-theme-muted">
                    <span>{q.minLabel}</span>
                    <span>{q.maxLabel}</span>
                  </div>
                )}
              </div>
            )}
          </fieldset>
        )
      })}
    </div>
  )
}

/** Bar-chart style summary of results. Written answers are listed when provided. */
export function SurveyResultsView({ results, total }: { results: (QuestionSummary & { textCount?: number })[]; total: number }) {
  return (
    <div className="space-y-6">
      {results.map((r, i) => {
        const max = Math.max(1, ...(r.counts?.map(c => c.count) ?? [1]))
        return (
          <div key={r.id} className="space-y-2">
            <p className="font-bold">{i + 1}. {r.label}</p>
            <p className="text-xs text-theme-muted">
              {r.answered} of {total} answered{r.average !== undefined && ` · average ${r.average}`}
              {r.type === 'NUMBER' && r.min !== undefined && ` · range ${r.min}–${r.max}`}
            </p>
            {r.counts && (
              <ul className="space-y-1.5">
                {r.counts.map(c => {
                  const pct = r.answered ? Math.round((c.count / r.answered) * 100) : 0
                  return (
                    <li key={c.option} className="text-sm">
                      <div className="flex justify-between gap-2"><span>{c.option}</span><span className="tabular-nums text-theme-muted">{c.count} ({pct}%)</span></div>
                      <div className="h-2 rounded-full bg-[var(--muted)]" aria-hidden>
                        <div className="h-2 rounded-full bg-[var(--primary)]" style={{ width: `${(c.count / max) * 100}%` }} />
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
            {r.texts && r.texts.length > 0 && (
              <ul className="max-h-64 space-y-2 overflow-y-auto">
                {r.texts.map((t, k) => <li key={k} className="rounded-lg bg-[var(--muted)] p-2 text-sm whitespace-pre-wrap">{t}</li>)}
              </ul>
            )}
            {r.texts === undefined && r.textCount !== undefined && (
              <p className="text-sm text-theme-muted">{r.textCount} written answers (visible to the initiative team).</p>
            )}
          </div>
        )
      })}
    </div>
  )
}
