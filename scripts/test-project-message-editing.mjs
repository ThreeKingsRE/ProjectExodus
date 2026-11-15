import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import ts from 'typescript'

const source = readFileSync(new URL('../app/api/projects/[projectId]/messages/route.ts', import.meta.url), 'utf8')
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText
let session = { user: { id: 'author' } }
let message = { id: 'message', projectId: 'project', userId: 'author' }
let membership = { id: 'member' }
const updates = []
const mocks = {
  'next/server': { NextResponse: { json: (data, options = {}) => ({ status: options.status || 200, data }) } },
  '@/auth': { auth: async () => session },
  '@/lib/pusher': { pusherServer: {} },
  '@/lib/db': { prisma: {
    projectMessage: { findUnique: async () => message, update: async args => { updates.push(args); return { ...message, ...args.data } } },
    projectMember: { findUnique: async () => membership },
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
console.log('Message editing: authentication, membership, ownership, project boundary, validation, and paragraph preservation passed.')
