import test from 'node:test'
import assert from 'node:assert/strict'
const mod = await import('../lib/projects/item-comments.ts')
const { canSeeItem, canCommentOnItem, canDeleteComment, parseCommentBody, isCommentTarget } = mod.default || mod

const owner = { userId: 'owner', role: 'OWNER', isCreator: true }
const contributor = { userId: 'c', role: 'CONTRIBUTOR', isCreator: false }
const moderator = { userId: 'm', role: 'MODERATOR', isCreator: false }
const follower = { userId: 'f', role: 'VIEWER', isCreator: false }
const stranger = { userId: 's', role: null, isCreator: false }
const shared = { sharedWithFollowers: true }
const teamOnly = { sharedWithFollowers: false }

test('followers see and comment on shared items only; strangers on nothing', () => {
  for (const a of [owner, contributor, moderator, follower]) assert.equal(canSeeItem(shared, a), true)
  for (const a of [owner, contributor, moderator]) assert.equal(canSeeItem(teamOnly, a), true)
  assert.equal(canSeeItem(teamOnly, follower), false)
  for (const t of [shared, teamOnly]) {
    assert.equal(canSeeItem(t, stranger), false)
    assert.equal(canCommentOnItem(t, stranger), false)
  }
  assert.equal(canCommentOnItem(shared, follower), true)
  assert.equal(canCommentOnItem(teamOnly, follower), false)
})

test('authors delete their own comments; moderators and above delete any', () => {
  const byFollower = { userId: 'f' }
  assert.equal(canDeleteComment(byFollower, follower), true)
  assert.equal(canDeleteComment({ userId: 'owner' }, follower), false)
  assert.equal(canDeleteComment(byFollower, contributor), false)
  for (const a of [owner, moderator]) assert.equal(canDeleteComment(byFollower, a), true)
  assert.equal(canDeleteComment(byFollower, { userId: null, role: null, isCreator: false }), false)
})

test('comment text and target validation', () => {
  assert.equal(parseCommentBody('  ').ok, false)
  assert.equal(parseCommentBody(42).ok, false)
  assert.equal(parseCommentBody('x'.repeat(2001)).ok, false)
  assert.deepEqual(parseCommentBody('  Looks good  '), { ok: true, body: 'Looks good' })
  assert.equal(isCommentTarget('FILE'), true)
  assert.equal(isCommentTarget('TIMELINE_ITEM'), true)
  assert.equal(isCommentTarget('DOCUMENT'), false)
})
