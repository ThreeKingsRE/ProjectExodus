import test from 'node:test'
import assert from 'node:assert/strict'
const mod = await import('../lib/projects/access.ts')
const { isCollaborator, isFollower, isManagerAccess, canSeeDiscussion, canInviteAs, roleAfterAccepting, normalizeEmail } = mod.default || mod

const creator = { userId: 'c', role: null, isCreator: true }
const owner = { userId: 'o', role: 'OWNER', isCreator: false }
const admin = { userId: 'a', role: 'ADMIN', isCreator: false }
const contributor = { userId: 'k', role: 'CONTRIBUTOR', isCreator: false }
const follower = { userId: 'f', role: 'VIEWER', isCreator: false }
const stranger = { userId: 's', role: null, isCreator: false }
const guest = { userId: null, role: null, isCreator: false }

test('followers are not collaborators', () => {
  assert.equal(isCollaborator(follower), false)
  assert.equal(isFollower(follower), true)
  assert.equal(isCollaborator(contributor), true)
  assert.equal(isCollaborator(creator), true)
  assert.equal(isFollower(stranger), false)
  assert.equal(isManagerAccess(admin), true)
  assert.equal(isManagerAccess(contributor), false)
})

test('public discussion is for followers and team; team discussion is team only', () => {
  assert.equal(canSeeDiscussion('PUBLIC', follower), true)
  assert.equal(canSeeDiscussion('TEAM', follower), false)
  assert.equal(canSeeDiscussion('TEAM', contributor), true)
  assert.equal(canSeeDiscussion('PUBLIC', stranger), false)
  assert.equal(canSeeDiscussion('PUBLIC', guest), false)
})

test('only managers invite; only the owner invites admins', () => {
  assert.equal(canInviteAs('CONTRIBUTOR', admin), true)
  assert.equal(canInviteAs('ADMIN', admin), false)
  assert.equal(canInviteAs('ADMIN', owner), true)
  assert.equal(canInviteAs('ADMIN', creator), true)
  assert.equal(canInviteAs('CONTRIBUTOR', contributor), false)
  assert.equal(canInviteAs('OWNER', creator), false)
  assert.equal(canInviteAs('VIEWER', creator), false)
})

test('accepting an invite never demotes', () => {
  assert.equal(roleAfterAccepting(null, 'CONTRIBUTOR'), 'CONTRIBUTOR')
  assert.equal(roleAfterAccepting('VIEWER', 'CONTRIBUTOR'), 'CONTRIBUTOR')
  assert.equal(roleAfterAccepting('ADMIN', 'CONTRIBUTOR'), 'ADMIN')
})

test('emails are normalized', () => {
  assert.equal(normalizeEmail('  Ana@Example.COM '), 'ana@example.com')
  assert.equal(normalizeEmail('nope'), null)
  assert.equal(normalizeEmail(42), null)
})
