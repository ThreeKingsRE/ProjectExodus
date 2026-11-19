import test from 'node:test'
import assert from 'node:assert/strict'
const lt = await import('../lib/projects/linked-text.ts')
const { splitLinks, normalizeSurveyUrl } = lt.default || lt
const pv = await import('../lib/projects/public-view.ts')
const { publicProjectFields } = pv.default || pv

test('bare https links become links; trailing punctuation stays text', () => {
  assert.deepEqual(splitLinks('Take our survey: https://forms.gle/ZZmocqQbpuf9BHMW8.'), [
    { text: 'Take our survey: ' }, { href: 'https://forms.gle/ZZmocqQbpuf9BHMW8', label: 'https://forms.gle/ZZmocqQbpuf9BHMW8' }, { text: '.' },
  ])
  assert.deepEqual(splitLinks('(see https://example.org/a)'), [{ text: '(see ' }, { href: 'https://example.org/a', label: 'https://example.org/a' }, { text: ')' }])
  assert.deepEqual(splitLinks('[Take the survey](https://forms.gle/x)'), [{ href: 'https://forms.gle/x', label: 'Take the survey' }])
})

test('only https is linked; http, javascript and plain text stay text', () => {
  for (const s of ['http://example.org', 'javascript:alert(1)', 'no links here', 'https://']) {
    assert.ok(splitLinks(s).every(p => 'text' in p), s)
  }
})

test('survey link: https only, real URL, clearable', () => {
  assert.equal(normalizeSurveyUrl('https://forms.gle/ZZmocqQbpuf9BHMW8'), 'https://forms.gle/ZZmocqQbpuf9BHMW8')
  assert.equal(normalizeSurveyUrl('  '), '')
  for (const bad of ['http://forms.gle/x', 'javascript:alert(1)', 'forms.gle/x', 'https://localhost/x', 'https://' + 'a'.repeat(600) + '.com', 42]) {
    assert.equal(normalizeSurveyUrl(bad), null, String(bad).slice(0, 40))
  }
})

test('public page carries the survey link only when it is valid', () => {
  const base = { id: 'p', name: 'N', slug: 's', description: 'd', goal: null, status: 'PLANNING', coverImage: null, visibility: 'PUBLIC',
    creator: { id: 'c', name: 'C' }, _count: { members: 1 } }
  assert.equal(publicProjectFields({ ...base, layoutConfig: { allowPublicView: true, surveyUrl: 'https://forms.gle/x' } }).surveyUrl, 'https://forms.gle/x')
  assert.equal(publicProjectFields({ ...base, layoutConfig: { allowPublicView: true, surveyUrl: 'javascript:alert(1)' } }).surveyUrl, null)
  assert.equal(publicProjectFields({ ...base, layoutConfig: { allowPublicView: true } }).surveyUrl, null)
})
