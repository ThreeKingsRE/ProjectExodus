import test from 'node:test'
import assert from 'node:assert/strict'
const publicViewModule = await import('../lib/projects/public-view.ts')
const { projectPublication, publicProjectFields } = publicViewModule.default || publicViewModule
const participationModule = await import('../lib/projects/participation.ts')
const { participate } = participationModule.default || participationModule

const project = {
  id: 'project', slug: 'a-user-initiative', name: 'A user initiative', description: 'An overview',
  goal: 'A shared goal', status: 'PLANNING', coverImage: null, visibility: 'PUBLIC',
  layoutConfig: { allowPublicView: true, publicStory: 'A saved story', internalNotes: 'private', settings: { secret: 'private' } },
  creator: { id: 'creator', name: 'The account owner' }, _count: { members: 3 },
  members: [{ user: { email: 'private@example.com' } }], messages: ['private'],
}

test('public viewing requires explicit opt-in; private and draft choices cannot enable it', () => {
  for (const visibility of ['PRIVATE', 'DRAFT', 'UNLISTED']) {
    assert.deepEqual(projectPublication(visibility, true), { visibility: 'UNLISTED', publication: visibility, allowPublicView: false })
    assert.equal(publicProjectFields({ ...project, visibility: 'UNLISTED' }), null)
  }
  assert.equal(publicProjectFields({ ...project, layoutConfig: {} }), null)
  assert.equal(publicProjectFields({ ...project, layoutConfig: { allowPublicView: 'true' } }), null)
  assert.equal(projectPublication('PUBLIC', false).allowPublicView, false)
  assert.equal(projectPublication('PUBLIC', true).allowPublicView, true)
})

test('public output contains saved overview fields and no member or private configuration data', () => {
  const output = publicProjectFields(project)
  assert.equal(output.story, 'A saved story')
  assert.equal(output.organizer.name, 'The account owner')
  assert.equal(output.participants, 3)
  const serialized = JSON.stringify(output)
  assert.equal(serialized.includes('private'), false)
  for (const key of ['members', 'messages', 'layoutConfig', 'settings']) assert.equal(key in output, false)
})

function fakeDatabase({ visibility = 'PUBLIC', role = null, creatorId = 'owner' } = {}) {
  let member = role ? { id: 'membership', role, projectId: 'project', userId: 'user' } : null
  let creates = 0
  const requests = []
  const tx = {
    project: { findUnique: async () => ({ id: 'project', visibility, creatorId }) },
    projectMember: {
      findUnique: async () => member,
      upsert: async ({ create, update }) => { if (!member) { member = { id: 'membership', ...create }; creates++ } else member = { ...member, ...update }; return member },
      findUniqueOrThrow: async () => member,
    },
    projectJoinRequest: {
      findFirst: async () => requests.find(r => r.status === 'PENDING') ?? null,
      create: async ({ data }) => { const r = { id: `r${requests.length}`, status: 'PENDING', ...data }; requests.push(r); return r },
    },
  }
  return { $transaction: fn => fn(tx), state: () => ({ member, creates, requests }) }
}

test('repeat follows create one membership; asking to collaborate files one request and grants nothing', async () => {
  const db = fakeDatabase()
  await participate(db, 'user', 'project', 'follow')
  await participate(db, 'user', 'project', 'follow')
  assert.equal(db.state().creates, 1)
  assert.equal(db.state().member.role, 'VIEWER')
  const first = await participate(db, 'user', 'project', 'collaborate', '  I can help with costing  ')
  await participate(db, 'user', 'project', 'collaborate')
  assert.equal(first.requested, true)
  assert.equal(db.state().member.role, 'VIEWER', 'only an owner can add collaborators')
  assert.equal(db.state().requests.length, 1, 'no duplicate pending requests')
  assert.equal(db.state().requests[0].message, 'I can help with costing')
  assert.equal(db.state().creates, 1)
})

test('following or asking never changes an existing role', async () => {
  const owner = fakeDatabase({ role: 'OWNER' })
  const result = await participate(owner, 'user', 'project', 'collaborate')
  await participate(owner, 'user', 'project', 'follow')
  assert.equal(owner.state().member.role, 'OWNER')
  assert.equal(result.requested, false)
  assert.equal(owner.state().requests.length, 0)
})

test('knowing an unlisted project ID does not let a new person join', async () => {
  const db = fakeDatabase({ visibility: 'UNLISTED' })
  await assert.rejects(participate(db, 'user', 'project', 'follow'), error => error.status === 403)
  assert.equal(db.state().creates, 0)
})
