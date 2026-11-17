import test from 'node:test'
import assert from 'node:assert/strict'
const mod = await import('../lib/projects/surveys.ts')
const { parseQuestions, validateAnswers, parseSurveySettings, isAcceptingResponses, canSeeSurvey, summarize, toCsv } = mod.default || mod

const questions = [
  { id: 'q1', type: 'SINGLE_CHOICE', label: 'Do you live in Riverknoll?', required: true, options: ['Yes', 'No'] },
  { id: 'q2', type: 'MULTIPLE_CHOICE', label: 'What matters most?', required: false, options: ['Cost', 'Privacy', 'Gardens'] },
  { id: 'q3', type: 'SCALE', label: 'Rate current housing', required: true, scaleMin: 1, scaleMax: 5 },
  { id: 'q4', type: 'LONG_TEXT', label: 'Anything else?', required: false },
  { id: 'q5', type: 'NUMBER', label: 'Monthly rent you could afford', required: false },
]

test('question definitions are validated', () => {
  assert.equal(parseQuestions([]).ok, false)
  assert.equal(parseQuestions([{ id: 'a', type: 'SINGLE_CHOICE', label: 'x', options: ['only one'] }]).ok, false)
  assert.equal(parseQuestions([{ id: 'a', type: 'SINGLE_CHOICE', label: 'x', options: ['A', 'A'] }]).ok, false)
  assert.equal(parseQuestions([{ id: 'a', type: 'BOGUS', label: 'x' }]).ok, false)
  assert.equal(parseQuestions([{ id: 'a', type: 'SHORT_TEXT', label: 'x' }, { id: 'a', type: 'SHORT_TEXT', label: 'y' }]).ok, false)
  assert.equal(parseQuestions([{ id: 'a', type: 'SCALE', label: 'x', scaleMin: 3, scaleMax: 3 }]).ok, false)
  const ok = parseQuestions(questions)
  assert.equal(ok.ok, true)
  assert.equal(ok.data.length, 5)
  assert.equal(parseQuestions([{ id: 's', type: 'SCALE', label: 'x' }]).data[0].scaleMax, 5)
})

test('answers are validated against questions', () => {
  assert.equal(validateAnswers(questions, { q3: 4 }).ok, false, 'required q1 missing')
  assert.equal(validateAnswers(questions, { q1: 'Maybe', q3: 4 }).ok, false, 'not a choice')
  assert.equal(validateAnswers(questions, { q1: 'Yes', q3: 9 }).ok, false, 'out of scale')
  assert.equal(validateAnswers(questions, { q1: 'Yes', q3: 4, q2: ['Cost', 'Nope'] }).ok, false)
  assert.equal(validateAnswers(questions, { q1: 'Yes', q3: 4, q5: 'abc' }).ok, false)
  const ok = validateAnswers(questions, { q1: 'Yes', q2: ['Cost', 'Cost', 'Gardens'], q3: '4', q4: '  more gardens ', q5: '800', extra: 'dropped' })
  assert.equal(ok.ok, true)
  assert.deepEqual(ok.data, { q1: 'Yes', q2: ['Cost', 'Gardens'], q3: 4, q4: 'more gardens', q5: 800 })
})

test('settings and open/closed state', () => {
  assert.equal(parseSurveySettings({ title: '' }, false).ok, false)
  assert.equal(parseSurveySettings({ title: 'x', audience: 'EVERYONE' }, false).ok, false)
  const s = parseSurveySettings({ title: 'Resident survey' }, false)
  assert.deepEqual([s.data.status, s.data.audience], ['DRAFT', 'MEMBERS'])
  assert.equal(isAcceptingResponses({ status: 'DRAFT', closesAt: null }), false)
  assert.equal(isAcceptingResponses({ status: 'OPEN', closesAt: null }), true)
  assert.equal(isAcceptingResponses({ status: 'OPEN', closesAt: new Date(Date.now() - 1000) }), false)
  assert.equal(isAcceptingResponses({ status: 'CLOSED', closesAt: null }), false)
})

test('audience rules', () => {
  const guest = { userId: null, isMember: false, canManage: false }
  const user = { userId: 'u', isMember: false, canManage: false }
  const member = { userId: 'm', isMember: true, canManage: false }
  const owner = { userId: 'o', isMember: true, canManage: true }
  assert.equal(canSeeSurvey({ status: 'DRAFT', audience: 'PUBLIC' }, member), false)
  assert.equal(canSeeSurvey({ status: 'DRAFT', audience: 'MEMBERS' }, owner), true)
  assert.equal(canSeeSurvey({ status: 'OPEN', audience: 'PUBLIC' }, guest), true)
  assert.equal(canSeeSurvey({ status: 'OPEN', audience: 'SIGNED_IN' }, guest), false)
  assert.equal(canSeeSurvey({ status: 'OPEN', audience: 'SIGNED_IN' }, user), true)
  assert.equal(canSeeSurvey({ status: 'OPEN', audience: 'MEMBERS' }, user), false)
  assert.equal(canSeeSurvey({ status: 'OPEN', audience: 'MEMBERS' }, member), true)
})

test('results summary and CSV', () => {
  const responses = [
    { answers: { q1: 'Yes', q2: ['Cost'], q3: 2, q4: 'first' }, createdAt: '2026-11-01T00:00:00Z', respondentName: 'Ana' },
    { answers: { q1: 'No', q2: ['Cost', 'Gardens'], q3: 4, q5: 900 }, createdAt: '2026-11-02T00:00:00Z', respondentName: null },
  ]
  const [s1, s2, s3, s4, s5] = summarize(questions, responses)
  assert.deepEqual(s1.counts, [{ option: 'Yes', count: 1 }, { option: 'No', count: 1 }])
  assert.deepEqual(s2.counts, [{ option: 'Cost', count: 2 }, { option: 'Privacy', count: 0 }, { option: 'Gardens', count: 1 }])
  assert.equal(s3.average, 3)
  assert.equal(s3.counts.length, 5)
  assert.deepEqual(s4.texts, ['first'])
  assert.equal(s5.average, 900)

  const csv = toCsv(questions, [...responses, { answers: { q4: '=HYPERLINK("x")' }, createdAt: '2026-11-03T00:00:00Z' }], true)
  const lines = csv.trim().split('\r\n')
  assert.equal(lines.length, 4)
  assert.match(lines[0], /^Submitted,Respondent,Do you live in Riverknoll\?/)
  assert.match(lines[2], /Guest/)
  assert.match(lines[2], /Cost; Gardens/)
  assert.ok(lines[3].includes(`"'=HYPERLINK(""x"")"`), 'formula is neutralized and quoted')
  assert.equal(toCsv(questions, responses, false).includes('Ana'), false)
})
