import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import ts from 'typescript'

const source = readFileSync(new URL('../app/api/projects/[projectId]/messages/route.ts', import.meta.url), 'utf8')
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText
let session = { user: { id: 'author' } }
let message = { id: 'message', projectId: 'project', userId: 'author' }
let membership = { id: 'member' }
let project = { creatorId: 'owner' }
const updates = []
const removals = []
let research = { id: 'research', projectId: 'project', authorId: 'author' }
const mocks = {
  'next/server': { NextResponse: { json: (data, options = {}) => ({ status: options.status || 200, data }) } },
  '@/auth': { auth: async () => session },
  '@/lib/pusher': { pusherServer: {} },
  '@/lib/db': { prisma: {
    projectMessage: { findUnique: async () => message, update: async args => { updates.push(args); return { ...message, ...args.data } }, deleteMany: async args => { removals.push(args); return { count: 1 } } },
    projectResearch: { findUnique: async () => research, update: async args => ({ ...research, ...args.data }) },
    projectMember: { findUnique: async () => membership },
    project: { findUnique: async () => project },
  } },
}
const sandbox = { exports: {}, require: name => { if (!(name in mocks)) throw new Error(`Unexpected import ${name}`); return mocks[name] }, console }
vm.runInNewContext(compiled, sandbox)
const edit = body => sandbox.exports.PATCH({ json: async () => body }, { params: Promise.resolve({ projectId: 'project' }) })
const valid = { messageId: 'message', content: '  First paragraph.\n\nSecond paragraph.  ' }
session = null
assert.equal((await edit(valid)).status, 401)
session = { user: { id: 'author' } }
for (const content of ['', '  ', 123, 'x'.repeat(10001)]) assert.equal((await edit({ ...valid, content })).status, 400)
message = { ...message, projectId: 'another-project' }
assert.equal((await edit(valid)).status, 404)
message = { ...message, projectId: 'project', userId: 'someone-else' }
assert.equal((await edit(valid)).status, 403)
message = { ...message, userId: 'author' }
membership = null
assert.equal((await edit(valid)).status, 403)
assert.equal(updates.length, 0, 'Rejected requests must not write')
membership = { id: 'member' }
const result = await edit(valid)
assert.equal(result.status, 200)
assert.equal(updates.length, 1)
assert.equal(result.data.data.content, 'First paragraph.\n\nSecond paragraph.')
session = { user: { id: 'owner' } }
message = { ...message, userId: 'someone-else' }
membership = null
assert.equal((await edit(valid)).status, 200, 'The initiative creator may edit another author’s contribution')
const remove = () => sandbox.exports.DELETE({ json: async () => ({ messageId: 'message' }) }, { params: Promise.resolve({ projectId: 'project' }) })
session = { user: { id: 'author' } }
assert.equal((await remove()).status, 403, 'Members cannot moderate discussion messages')
session = { user: { id: 'owner' } }
assert.equal((await remove()).status, 200)
assert.equal(removals[0].where.projectId, 'project')

const researchSource = readFileSync(new URL('../app/api/projects/[projectId]/research/[researchId]/route.ts', import.meta.url), 'utf8')
const researchSandbox = { ...sandbox, exports: {} }
vm.runInNewContext(ts.transpileModule(researchSource, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, researchSandbox)
const editResearch = () => researchSandbox.exports.PUT({ json: async () => ({ heading: 'Corrected title', summary: 'Corrected summary' }) }, { params: Promise.resolve({ projectId: 'project', researchId: 'research' }) })
session = { user: { id: 'other' } }
membership = { id: 'member', role: 'ADMIN' }
assert.equal((await editResearch()).status, 403, 'A role label does not grant authority over someone else’s content')
session = { user: { id: 'author' } }
assert.equal((await editResearch()).status, 200)
session = { user: { id: 'owner' } }
const ownerResearch = await editResearch()
assert.equal(ownerResearch.status, 200)
assert.equal(ownerResearch.data.data.heading, 'Corrected title')
const documentSource = readFileSync(new URL('../app/api/documents/[documentId]/route.ts', import.meta.url), 'utf8')
let document = { id: 'document', creatorId: 'author', projectId: 'project', content: 'Unchanged', project: { members: [{ role: 'CONTRIBUTOR' }] }, collaborators: [] }
const documentPrisma = { ...mocks['@/lib/db'].prisma, document: { findUnique: async () => document, update: async args => ({ ...document, ...args.data }) }, $transaction: async callback => callback(documentPrisma) }
const documentSandbox = { ...sandbox, exports: {}, require: name => name === '@/lib/db/prisma' ? { prisma: documentPrisma } : sandbox.require(name) }
vm.runInNewContext(ts.transpileModule(documentSource, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, documentSandbox)
const editDocument = () => documentSandbox.exports.PATCH({ json: async () => ({ title: 'Corrected title' }) }, { params: Promise.resolve({ documentId: 'document' }) })
session = { user: { id: 'other' } }
assert.equal((await editDocument()).status, 403, 'Membership alone must not allow editing someone else’s document')
document.collaborators = [{ permission: 'EDIT' }]
assert.equal((await editDocument()).status, 200, 'An explicitly granted document permission permits editing')
document.collaborators = []
session = { user: { id: 'owner' } }
assert.equal((await editDocument()).status, 200, 'The initiative creator retains document moderation authority')
mocks['@/lib/collaboration'] = { getDocumentName: (_type, id) => id }
mocks['@/lib/collab-token'] = { COLLAB_TOKEN_TTL_SECONDS: 60, signCollabToken: async claims => JSON.stringify(claims) }
document.project.creatorId = 'owner'
const tokenSandbox = { ...documentSandbox, exports: {}, process: { env: { PARTYKIT_SECRET: 'test-only' } } }
const tokenSource = readFileSync(new URL('../app/api/documents/[documentId]/collab-token/route.ts', import.meta.url), 'utf8')
vm.runInNewContext(ts.transpileModule(tokenSource, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, tokenSandbox)
const token = () => tokenSandbox.exports.GET({}, { params: Promise.resolve({ documentId: 'document' }) })
session = { user: { id: 'other' } }
assert.equal((await token()).data.canEdit, false, 'Ordinary members receive read-only collaboration tokens')
document.collaborators = [{ permission: 'EDIT' }]
assert.equal((await token()).data.canEdit, true)
document.collaborators = []
session = { user: { id: 'owner' } }
assert.equal((await token()).data.canEdit, true)
console.log('Message editing: authentication, membership, ownership, project boundary, validation, and paragraph preservation passed.')
