import test from 'node:test'
import assert from 'node:assert/strict'
const updates = await import('../lib/social/updates.ts')
const access = await import('../lib/social/postAccess.ts')
const { parseUpdateInput, isAllowedImageUrl } = updates.default || updates
const { canSeePost } = access.default || access

const follower = { userId: 'f', role: 'VIEWER', isCreator: false }
const team = { userId: 't', role: 'CONTRIBUTOR', isCreator: false }

test('initiative updates reach the right audience', () => {
  const pub = { userId: 'a', visibility: 'PUBLIC', projectId: 'p', projectVisibility: 'PUBLIC' }
  const guest = { userId: null, followsAuthor: false, projectAccess: null }
  assert.equal(canSeePost(pub, guest), true)
  assert.equal(canSeePost({ ...pub, projectVisibility: 'PRIVATE' }, guest), false, 'a private initiative’s posts never go public')
  const followersOnly = { ...pub, visibility: 'FOLLOWERS_ONLY' }
  assert.equal(canSeePost(followersOnly, { userId: 's', followsAuthor: true, projectAccess: null }), false, 'following the author is not following the initiative')
  assert.equal(canSeePost(followersOnly, { userId: 'f', followsAuthor: false, projectAccess: follower }), true)
  const teamOnly = { ...pub, visibility: 'PRIVATE' }
  assert.equal(canSeePost(teamOnly, { userId: 'f', followsAuthor: false, projectAccess: follower }), false)
  assert.equal(canSeePost(teamOnly, { userId: 't', followsAuthor: false, projectAccess: team }), true)
  assert.equal(canSeePost(teamOnly, { userId: 'a', followsAuthor: false, projectAccess: null }), true, 'authors see their own posts')
})

test('personal posts keep their old rules', () => {
  const p = { userId: 'a', visibility: 'FOLLOWERS_ONLY', projectId: null }
  assert.equal(canSeePost(p, { userId: 'x', followsAuthor: true, projectAccess: null }), true)
  assert.equal(canSeePost(p, { userId: 'x', followsAuthor: false, projectAccess: null }), false)
  assert.equal(canSeePost({ ...p, visibility: 'PRIVATE' }, { userId: 'x', followsAuthor: true, projectAccess: null }), false)
})

test('update input', () => {
  assert.equal(parseUpdateInput({ content: '  ' }, false).ok, false)
  assert.equal(parseUpdateInput({ content: 'x', visibility: 'EVERYONE' }, false).ok, false)
  assert.equal(parseUpdateInput({ content: 'x', images: ['https://evil.example.com/a.png'] }, false).ok, false)
  const ok = parseUpdateInput({ title: ' Week 3 ', content: 'Site visit done #Housing #housing #RIT', images: ['https://res.cloudinary.com/demo/image/upload/a.jpg'] }, false)
  assert.equal(ok.ok, true)
  assert.equal(ok.data.title, 'Week 3')
  assert.equal(ok.data.visibility, 'PUBLIC')
  assert.deepEqual(ok.data.hashtags, ['housing', 'rit'])
  assert.equal(isAllowedImageUrl('http://res.cloudinary.com/a.jpg'), false)
  assert.equal(isAllowedImageUrl('https://res.cloudinary.com.evil.com/a.jpg'), false)
})
