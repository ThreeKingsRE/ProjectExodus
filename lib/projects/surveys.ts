import { normalizeSurveyUrl } from './linked-text'
// Native initiative surveys: question definitions, answer validation,
// access rules, result summaries, and CSV export. Pure functions only so they
// can be tested without a database.

export const QUESTION_TYPES = ['SHORT_TEXT', 'LONG_TEXT', 'SINGLE_CHOICE', 'MULTIPLE_CHOICE', 'SCALE', 'NUMBER'] as const
export type QuestionType = (typeof QUESTION_TYPES)[number]

export const QUESTION_TYPE_LABEL: Record<QuestionType, string> = {
  SHORT_TEXT: 'Short answer',
  LONG_TEXT: 'Paragraph',
  SINGLE_CHOICE: 'Multiple choice (pick one)',
  MULTIPLE_CHOICE: 'Checkboxes (pick any)',
  SCALE: 'Rating scale',
  NUMBER: 'Number',
}

export const SURVEY_STATUSES = ['DRAFT', 'OPEN', 'CLOSED'] as const
export type SurveyStatus = (typeof SURVEY_STATUSES)[number]

export const SURVEY_AUDIENCES = ['MEMBERS', 'SIGNED_IN', 'PUBLIC'] as const
export type SurveyAudience = (typeof SURVEY_AUDIENCES)[number]

export const AUDIENCE_LABEL: Record<SurveyAudience, string> = {
  MEMBERS: 'Initiative members only',
  SIGNED_IN: 'Anyone signed in to Project Exodus with the link',
  PUBLIC: 'Anyone with the link (no account needed)',
}

export interface SurveyQuestion {
  id: string
  type: QuestionType
  label: string
  help?: string
  required: boolean
  options?: string[] // SINGLE_CHOICE, MULTIPLE_CHOICE
  scaleMin?: number // SCALE (default 1)
  scaleMax?: number // SCALE (default 5)
  minLabel?: string
  maxLabel?: string
}

export type AnswerValue = string | string[] | number
export type Answers = Record<string, AnswerValue>

const MAX_QUESTIONS = 60
const MAX_OPTIONS = 30
const MAX_LABEL = 500
const MAX_TEXT_ANSWER = { SHORT_TEXT: 500, LONG_TEXT: 5000 } as const

type Result<T> = { ok: true; data: T } | { ok: false; error: string }

function str(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

/** Validate and normalize the question list sent by the survey builder. */
export function parseQuestions(raw: unknown): Result<SurveyQuestion[]> {
  if (!Array.isArray(raw)) return { ok: false, error: 'Add at least one question.' }
  if (raw.length === 0) return { ok: false, error: 'Add at least one question.' }
  if (raw.length > MAX_QUESTIONS) return { ok: false, error: `Surveys can have up to ${MAX_QUESTIONS} questions.` }

  const seen = new Set<string>()
  const questions: SurveyQuestion[] = []
  for (let i = 0; i < raw.length; i++) {
    const q = raw[i] as Record<string, unknown>
    const n = i + 1
    if (!q || typeof q !== 'object') return { ok: false, error: `Question ${n} is invalid.` }
    const id = str(q.id, 40)
    if (!id || !/^[a-zA-Z0-9_-]+$/.test(id) || seen.has(id)) return { ok: false, error: `Question ${n} has an invalid id.` }
    seen.add(id)
    if (!QUESTION_TYPES.includes(q.type as QuestionType)) return { ok: false, error: `Question ${n} has an unknown type.` }
    const type = q.type as QuestionType
    const label = str(q.label, MAX_LABEL)
    if (!label) return { ok: false, error: `Question ${n} needs text.` }
    const question: SurveyQuestion = { id, type, label, required: q.required === true }
    const help = str(q.help, MAX_LABEL)
    if (help) question.help = help

    if (type === 'SINGLE_CHOICE' || type === 'MULTIPLE_CHOICE') {
      if (!Array.isArray(q.options)) return { ok: false, error: `Question ${n} needs answer choices.` }
      const options = [...new Set(q.options.map(o => str(o, 200)).filter(Boolean))]
      if (options.length < 2) return { ok: false, error: `Question ${n} needs at least two different choices.` }
      if (options.length > MAX_OPTIONS) return { ok: false, error: `Question ${n} has too many choices (max ${MAX_OPTIONS}).` }
      question.options = options
    }
    if (type === 'SCALE') {
      const min = q.scaleMin === undefined ? 1 : Number(q.scaleMin)
      const max = q.scaleMax === undefined ? 5 : Number(q.scaleMax)
      if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max > 10 || max - min < 1) {
        return { ok: false, error: `Question ${n}: the scale must run between 0 and 10.` }
      }
      question.scaleMin = min
      question.scaleMax = max
      const minLabel = str(q.minLabel, 60)
      const maxLabel = str(q.maxLabel, 60)
      if (minLabel) question.minLabel = minLabel
      if (maxLabel) question.maxLabel = maxLabel
    }
    questions.push(question)
  }
  return { ok: true, data: questions }
}

/** Check a respondent's answers against the questions. Unknown keys are dropped. */
export function validateAnswers(questions: SurveyQuestion[], raw: unknown): Result<Answers> {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return { ok: false, error: 'Invalid answers.' }
  const input = raw as Record<string, unknown>
  const answers: Answers = {}

  for (const q of questions) {
    const value = input[q.id]
    const empty = value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)
    if (empty) {
      if (q.required) return { ok: false, error: `Please answer: "${q.label}"` }
      continue
    }
    switch (q.type) {
      case 'SHORT_TEXT':
      case 'LONG_TEXT': {
        if (typeof value !== 'string') return { ok: false, error: `Invalid answer for "${q.label}".` }
        const text = value.trim()
        if (text.length > MAX_TEXT_ANSWER[q.type]) return { ok: false, error: `Your answer to "${q.label}" is too long.` }
        if (!text) {
          if (q.required) return { ok: false, error: `Please answer: "${q.label}"` }
          continue
        }
        answers[q.id] = text
        break
      }
      case 'SINGLE_CHOICE': {
        if (typeof value !== 'string' || !q.options?.includes(value)) return { ok: false, error: `Pick one of the choices for "${q.label}".` }
        answers[q.id] = value
        break
      }
      case 'MULTIPLE_CHOICE': {
        if (!Array.isArray(value) || !value.every(v => typeof v === 'string' && q.options?.includes(v))) {
          return { ok: false, error: `Pick from the choices for "${q.label}".` }
        }
        answers[q.id] = [...new Set(value as string[])]
        break
      }
      case 'SCALE': {
        const num = typeof value === 'string' ? Number(value) : value
        const min = q.scaleMin ?? 1
        const max = q.scaleMax ?? 5
        if (typeof num !== 'number' || !Number.isInteger(num) || num < min || num > max) {
          return { ok: false, error: `Choose a rating from ${min} to ${max} for "${q.label}".` }
        }
        answers[q.id] = num
        break
      }
      case 'NUMBER': {
        const num = typeof value === 'string' ? Number(value.trim()) : value
        if (typeof num !== 'number' || !Number.isFinite(num) || Math.abs(num) > 1e12) {
          return { ok: false, error: `Enter a number for "${q.label}".` }
        }
        answers[q.id] = num
        break
      }
    }
  }
  return { ok: true, data: answers }
}

export interface SurveySettings {
  title: string
  description: string | null
  status: SurveyStatus
  audience: SurveyAudience
  anonymous: boolean
  shareResults: boolean
  closesAt: Date | null
  /** Set for a linked survey hosted on another site */
  externalUrl: string | null
}

/** Validate survey settings. `partial` allows omitted fields for updates. */
export function parseSurveySettings(body: unknown, partial: boolean): Result<Partial<SurveySettings>> {
  if (!body || typeof body !== 'object') return { ok: false, error: 'Invalid request.' }
  const b = body as Record<string, unknown>
  const data: Partial<SurveySettings> = {}
  if (b.title !== undefined || !partial) {
    const title = str(b.title, 200)
    if (!title) return { ok: false, error: 'Give the survey a title.' }
    data.title = title
  }
  if (b.description !== undefined) data.description = str(b.description, 4000) || null
  if (b.status !== undefined || !partial) {
    const status = b.status ?? 'DRAFT'
    if (!SURVEY_STATUSES.includes(status as SurveyStatus)) return { ok: false, error: 'Invalid status.' }
    data.status = status as SurveyStatus
  }
  if (b.audience !== undefined || !partial) {
    const audience = b.audience ?? 'MEMBERS'
    if (!SURVEY_AUDIENCES.includes(audience as SurveyAudience)) return { ok: false, error: 'Invalid audience.' }
    data.audience = audience as SurveyAudience
  }
  if (b.externalUrl !== undefined) {
    const url = b.externalUrl === null ? '' : normalizeSurveyUrl(b.externalUrl)
    if (url === null) return { ok: false, error: 'The survey link must be a full https:// address.' }
    data.externalUrl = url || null
  }
  if (b.anonymous !== undefined) data.anonymous = b.anonymous === true
  if (b.shareResults !== undefined) data.shareResults = b.shareResults === true
  if (b.closesAt !== undefined) {
    if (b.closesAt === null || b.closesAt === '') {
      data.closesAt = null
    } else {
      const d = new Date(String(b.closesAt))
      if (Number.isNaN(d.getTime())) return { ok: false, error: 'Invalid closing date.' }
      data.closesAt = d
    }
  }
  return { ok: true, data }
}

export function isAcceptingResponses(survey: { status: string; closesAt: Date | string | null }, now = new Date()): boolean {
  if (survey.status !== 'OPEN') return false
  if (survey.closesAt && new Date(survey.closesAt).getTime() <= now.getTime()) return false
  return true
}

export interface Respondent {
  userId: string | null
  isMember: boolean
  canManage: boolean
}

/** Whether someone may load the survey form. Managers can always preview. */
export function canSeeSurvey(survey: { status: string; audience: string }, who: Respondent): boolean {
  if (who.canManage) return true
  if (survey.status === 'DRAFT') return false
  if (survey.audience === 'PUBLIC') return true
  if (survey.audience === 'SIGNED_IN') return who.userId !== null
  return who.isMember
}

export interface QuestionSummary {
  id: string
  type: QuestionType
  label: string
  answered: number
  counts?: { option: string; count: number }[] // choice and scale questions
  average?: number // scale and number questions
  min?: number
  max?: number
  texts?: string[] // text questions (most recent first, capped)
}

/** Aggregate responses into per-question results. */
export function summarize(questions: SurveyQuestion[], responses: { answers: unknown }[], textLimit = 200): QuestionSummary[] {
  return questions.map(q => {
    const values = responses
      .map(r => (r.answers && typeof r.answers === 'object' ? (r.answers as Answers)[q.id] : undefined))
      .filter(v => v !== undefined && v !== null && v !== '')
    const summary: QuestionSummary = { id: q.id, type: q.type, label: q.label, answered: values.length }

    if (q.type === 'SINGLE_CHOICE' || q.type === 'MULTIPLE_CHOICE') {
      const counts = new Map((q.options ?? []).map(o => [o, 0]))
      for (const v of values) for (const choice of Array.isArray(v) ? v : [v]) {
        if (typeof choice === 'string' && counts.has(choice)) counts.set(choice, counts.get(choice)! + 1)
      }
      summary.counts = [...counts].map(([option, count]) => ({ option, count }))
    } else if (q.type === 'SCALE' || q.type === 'NUMBER') {
      const nums = values.filter((v): v is number => typeof v === 'number')
      if (nums.length) {
        summary.average = Math.round((nums.reduce((a, b) => a + b, 0) / nums.length) * 100) / 100
        summary.min = Math.min(...nums)
        summary.max = Math.max(...nums)
      }
      if (q.type === 'SCALE') {
        const lo = q.scaleMin ?? 1
        const hi = q.scaleMax ?? 5
        summary.counts = []
        for (let s = lo; s <= hi; s++) summary.counts.push({ option: String(s), count: nums.filter(n => n === s).length })
      }
    } else {
      summary.texts = values.filter((v): v is string => typeof v === 'string').slice(-textLimit).reverse()
    }
    return summary
  })
}

function csvCell(value: unknown): string {
  let text = value === undefined || value === null ? '' : Array.isArray(value) ? value.join('; ') : String(value)
  // Stop spreadsheet apps from treating answers as formulas.
  if (/^[=+\-@\t\r]/.test(text)) text = `'${text}`
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text
}

/** Build a CSV with one row per response. */
export function toCsv(
  questions: SurveyQuestion[],
  responses: { createdAt: Date | string; answers: unknown; respondentName?: string | null }[],
  includeNames: boolean,
): string {
  const header = ['Submitted', ...(includeNames ? ['Respondent'] : []), ...questions.map(q => q.label)]
  const rows = responses.map(r => {
    const answers = (r.answers && typeof r.answers === 'object' ? r.answers : {}) as Answers
    return [
      new Date(r.createdAt).toISOString(),
      ...(includeNames ? [r.respondentName || 'Guest'] : []),
      ...questions.map(q => answers[q.id]),
    ]
  })
  return [header, ...rows].map(row => row.map(csvCell).join(',')).join('\r\n') + '\r\n'
}
