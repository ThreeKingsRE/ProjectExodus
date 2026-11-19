import test from 'node:test'
import assert from 'node:assert/strict'
const ribbonModule = await import('../lib/learning/ribbon.ts')
const { cleanRibbon, isValidRibbon, DEFAULT_RIBBON } = ribbonModule.default || ribbonModule
const volumesModule = await import('../lib/learning/topicVolumes.ts')
const { chapterStartPage, OPENING_PAGES, PAGES_PER_CHAPTER } = volumesModule.default || volumesModule

test('a new reader gets the classic red swallowtail ribbon', () => {
  assert.deepEqual(cleanRibbon(null), DEFAULT_RIBBON)
  assert.equal(DEFAULT_RIBBON.tail, 'swallowtail')
  assert.match(DEFAULT_RIBBON.color, /^#[0-9a-f]{6}$/)
})

test('designs keep valid choices and drop invalid ones', () => {
  const full = { color: '#1F5F8B', pattern: 'dots', decal: 'fish', initials: 'ab1', tail: 'pointed' }
  assert.equal(isValidRibbon(full), true)
  assert.deepEqual(cleanRibbon(full), { color: '#1f5f8b', pattern: 'dots', decal: 'fish', initials: 'AB1', tail: 'pointed' })
  assert.equal(isValidRibbon({ ...full, color: 'red' }), false, 'colour must be #rrggbb')
  assert.equal(isValidRibbon({ ...full, pattern: 'plaid' }), false)
  assert.equal(isValidRibbon({ ...full, decal: '<script>' }), false)
  assert.equal(isValidRibbon({ ...full, tail: 'forked' }), false)
  assert.equal(cleanRibbon({ ...full, initials: '<b>x</b>!' }).initials, 'BXB', 'initials: letters and digits only, max 3')
})

test('chapter page numbers match the scroll layout (4 opening pages, 7 per chapter)', () => {
  assert.equal(OPENING_PAGES, 4)
  assert.equal(PAGES_PER_CHAPTER, 7)
  assert.deepEqual([0, 1, 2, 6].map(chapterStartPage), [5, 12, 19, 47])
})
