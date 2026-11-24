import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import ts from 'typescript'

const calls = []
const env = {}
const server = {
  ensureDirectory: async () => calls.push('directory'),
  ensureFederal: async () => calls.push('federal'),
  ensureKnownSources: async () => calls.push('sources'),
  staleSourceIds: async (...args) => { assert.equal(args[2], 150); return ['ok', 'failed'] },
  refreshSource: async id => { calls.push(id); return id === 'failed' ? { error: 'unavailable' } : {} },
  sendReminders: async () => { calls.push('reminders'); return { users: 2, sent: 3 } },
}
function load(path) {
  const exports = {}
  const source = readFileSync(new URL('../' + path, import.meta.url), 'utf8')
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText
  vm.runInNewContext(compiled, {
    exports, process: { env },
    require: name => {
      if (name === '@/lib/meetings/server') return server
      if (name === 'next/server') return { NextResponse: { json: (data, options = {}) => ({ data, status: options.status ?? 200 }) } }
      throw new Error('Unexpected import: ' + name)
    },
  })
  return exports
}
const refresh = load('app/api/meetings/refresh/route.ts')
const reminders = load('app/api/meetings/reminders/route.ts')
const request = auth => ({ headers: { get: () => auth } })
for (const route of [refresh, reminders]) {
  delete env.CRON_SECRET
  assert.equal((await route.GET(request('Bearer undefined'))).status, 401)
  env.CRON_SECRET = 'test-only-secret'
  for (const auth of [null, '', 'Bearer wrong']) assert.equal((await route.GET(request(auth))).status, 401)
}
assert.equal(calls.length, 0, 'Unauthorized requests must not touch calendars or send reminders')
const imported = await refresh.GET(request('Bearer test-only-secret'))
assert.equal(imported.status, 200)
assert.equal(imported.data.refreshed, 1)
assert.equal(imported.data.failed, 1)
assert.equal(calls.join(','), 'directory,federal,sources,ok,failed')
calls.length = 0
const delivered = await reminders.GET(request('Bearer test-only-secret'))
assert.equal(delivered.status, 200)
assert.equal(delivered.data.reminders.sent, 3)
assert.equal(calls.join(','), 'reminders', 'Reminders must not wait on calendar imports')
const { crons } = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'))
assert.deepEqual(crons, [
  { path: '/api/meetings/refresh', schedule: '0 8 * * *' },
  { path: '/api/meetings/reminders', schedule: '0 12 * * *' },
])
console.log('Meeting cron checks passed: authorization, independent execution, import results, and daily schedules.')
