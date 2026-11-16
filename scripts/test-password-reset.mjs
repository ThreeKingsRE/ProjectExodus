import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import vm from 'node:vm'
import ts from 'typescript'

const require = createRequire(import.meta.url)
const quiet = { error() {}, warn() {} }
function load(path, mocks = {}, globals = {}) {
  const exports = {}
  const source = readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText
  vm.runInNewContext(compiled, { exports, require: name => name in mocks ? mocks[name] : require(name), console: quiet, URL, Date, ...globals })
  return exports
}

const env = { NODE_ENV: 'production' }
let sentBody
let providerOk = true
const mail = load('lib/email/send.ts', {}, { process: { env }, AbortSignal, fetch: async (_url, init) => {
  sentBody = JSON.parse(init.body)
  return { ok: providerOk, status: providerOk ? 200 : 403, json: async () => providerOk ? { id: 'email-id' } : { message: 'Sender not verified' } }
} })
assert.equal(mail.siteUrl(), 'https://www.projxodus.com')
for (const url of ['http://localhost:3000', 'https://localhost', 'javascript:alert(1)', 'invalid']) {
  env.NEXT_PUBLIC_SITE_URL = url
  assert.equal(mail.siteUrl(), 'https://www.projxodus.com')
}
env.AUTH_URL = 'https://www.projxodus.com/'
assert.equal(mail.siteUrl(), 'https://www.projxodus.com')
env.NEXT_PUBLIC_SITE_URL = 'https://example.com/path?discard=1#fragment'
assert.equal(mail.siteUrl(), 'https://example.com')
env.RESEND_API_KEY = '  '
env.EMAIL_FROM = '  '
assert.equal(mail.emailConfigured(), false)
const message = { to: 'person@example.com', subject: 'Reset', html: '<p>Reset</p>', text: 'Reset' }
assert.equal((await mail.sendEmail(message)).reason, 'not-configured')
env.RESEND_API_KEY = ' test-key '
env.EMAIL_FROM = ' Project Exodus <auth@example.com> '
assert.equal((await mail.sendEmail(message)).sent, true)
assert.equal(sentBody.from, 'Project Exodus <auth@example.com>')
providerOk = false
assert.equal((await mail.sendEmail(message)).reason, 'failed')

const password = load('lib/auth/password.ts')
let configured = false
let user = { id: 'user', password: 'hash' }
let lookups = 0
let delivered = true
let capturedEmail
let limited = false
const records = []
const removed = []
const next = { NextResponse: { json: (data, opts = {}) => ({ status: opts.status ?? 200, data }) } }
const rate = { rateLimit: async () => ({ success: !limited, reset: 123 }), rateLimitResponse: () => ({ status: 429 }) }
const prisma = {
  user: { findUnique: async args => { lookups++; capturedEmail = args.where.email; return user } },
  verificationToken: {
    create: async args => { records.push(args.data) },
    deleteMany: async args => { removed.push(args.where); return { count: 1 } },
  },
}
const forgot = load('app/api/auth/password/forgot/route.ts', {
  'next/server': next,
  '@/lib/db': { prisma },
  '@/lib/rate-limit': rate,
  '@/lib/auth/password': password,
  '@/lib/email/reset': load('lib/email/reset.ts'),
  '@/lib/email/send': { emailConfigured: () => configured, siteUrl: () => 'https://www.projxodus.com', sendEmail: async () => ({ sent: delivered, reason: 'failed' }) },
}, { process: { env: { NODE_ENV: 'production' } } })
const requestReset = email => forgot.POST({ json: async () => ({ email }) })
assert.equal((await requestReset('bad-email')).status, 400)
assert.equal((await requestReset('person@example.com')).status, 503)
assert.equal(lookups, 0, 'Missing email setup must fail before account lookup')
configured = true
const accepted = await requestReset(' Person@Example.COM ')
assert.equal(accepted.status, 200)
assert.equal(capturedEmail, 'person@example.com')
assert.equal(accepted.data.devResetUrl, undefined, 'Never return a reset token in production')
assert.equal(records[0].token.length, 64, 'Only hashed tokens are stored')
assert.equal(removed.length, 0, 'A request must not invalidate previous links')
delivered = false
const failed = await requestReset('person@example.com')
assert.equal(removed.length, 1)
assert.equal(removed[0].token, records[1].token, 'Failed delivery removes only the new token')
user = null
assert.deepEqual((await requestReset('unknown@example.com')).data, failed.data, 'Provider failure must not reveal account existence')
limited = true
assert.equal((await requestReset('person@example.com')).status, 429)
limited = false

let record = { token: password.hashToken('x'.repeat(43)), identifier: 'reset:person@example.com', expires: new Date(Date.now() + 3600000) }
let claims = 1
let writes = 0
const reset = load('app/api/auth/password/reset/route.ts', {
  'next/server': next,
  '@/lib/db': { prisma: {
    verificationToken: { findUnique: async () => record },
    $transaction: async action => action({
      verificationToken: { deleteMany: async args => args.where.token ? { count: claims-- > 0 ? 1 : 0 } : { count: 0 } },
      user: { update: async () => { writes++ } },
    }),
  } },
  '@/lib/rate-limit': rate,
  '@/lib/auth/password': password,
  bcryptjs: { hash: async () => 'new-hash' },
})
const submit = () => reset.POST({ json: async () => ({ token: 'x'.repeat(43), password: 'Strong!Password123' }) })
const concurrent = await Promise.all([submit(), submit()])
assert.deepEqual(concurrent.map(r => r.status).sort(), [200, 400])
assert.equal(writes, 1, 'Concurrent token reuse must not update a password twice')
record = { ...record, expires: new Date(0) }
assert.equal((await submit()).status, 400)
assert.equal(writes, 1)

let signedInEmail
let authorization
load('auth.ts', {
  'next-auth': options => { authorization = options.providers.at(-1).authorize({ email: ' Person@Example.COM ', password: 'password' }); return {} },
  'next-auth/providers/credentials': options => options,
  'next-auth/providers/google': () => ({}), 'next-auth/providers/github': () => ({}),
  'next-auth/providers/facebook': () => ({}), 'next-auth/providers/apple': () => ({}),
  '@/lib/db': { prisma: { user: { findUnique: async args => { signedInEmail = args.where.email; return null } } } },
  './auth.config': { authConfig: { callbacks: {} } },
}, { process: { env: {} } })
await assert.rejects(authorization, /Invalid credentials/)
assert.equal(signedInEmail, 'person@example.com')
console.log('Password reset checks passed: configuration, delivery, privacy, links, token reuse, and email normalization.')
