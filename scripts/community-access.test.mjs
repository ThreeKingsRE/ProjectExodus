import test from 'node:test'
import assert from 'node:assert/strict'
import { AsyncLocalStorage } from 'node:async_hooks'

// Next's testing utilities expect the same global provided by its server runtime.
globalThis.AsyncLocalStorage = AsyncLocalStorage
const { authConfig } = await import('../auth.config.ts')
const { config } = await import('../proxy.ts')
const { unstable_doesMiddlewareMatch } = await import('next/experimental/testing/server.js')

const guest = null
const member = { user: { id: 'member', role: 'USER' } }
const authorize = (path, auth = guest) => authConfig.callbacks.authorized({
  auth, request: { nextUrl: new URL(path, 'https://example.com') },
})
const matches = url => unstable_doesMiddlewareMatch({ config, nextConfig: {}, url })
const landings = ['/community', '/community/discussions', '/community/projects', '/fishbowl']
const privatePages = [
  '/community/discussions/post-id', '/community/projects/new',
  '/community/projects/another-initiative/documents',
  '/community/projects/riverknoll-renewal/community?tab=research',
  '/community/projects/riverknoll-renewal/community?tab=documents',
  '/community/projects/riverknoll-renewal/documents/document-id',
  '/community/feed', '/community/forum', '/community/users',
  '/community/leaderboard', '/fishbowl/personal', '/network/browse',
]
const privateApis = [
  '/api/social/feed?page=1', '/api/social/post/post-id', '/api/social/trending',
  '/api/projects?slug=riverknoll-renewal', '/api/projects/project-id/members',
  '/api/projects/project-id/discussions', '/api/users', '/api/users/search',
  '/api/projects/project-id/files', '/api/projects/project-id/surveys',
  '/api/projects/project-id/surveys/survey-id/export',
  '/api/fishbowl', '/api/fishbowl/personal', '/api/network/suggestions', '/api/forum/posts',
]

test('tab introductions and individual initiatives reach their server-side public-view checks', () => {
  for (const path of [...landings, '/community/projects/riverknoll-renewal', '/community/projects/another-initiative']) {
    assert.equal(matches(path), true, path)
    assert.equal(authorize(path), true, path)
    assert.equal(authorize(`${path}/`), true, `${path}/`)
  }
})

test('survey pages reach their own audience check; nested paths stay private', () => {
  assert.equal(matches('/community/projects/riverknoll-renewal/surveys/survey-id'), true)
  assert.equal(authorize('/community/projects/riverknoll-renewal/surveys/survey-id'), true)
  assert.equal(authorize('/community/projects/riverknoll-renewal/surveys/survey-id/results'), false)
  assert.equal(authorize('/community/projects/riverknoll-renewal/surveys'), false)
})

test('direct member URLs, including Riverknoll workspace tabs, require sign-in', () => {
  for (const path of privatePages) {
    assert.equal(matches(path), true, path)
    assert.equal(authorize(path), false, path)
  }
})

test('guests cannot fetch community data by bypassing the pages', async () => {
  for (const path of privateApis) {
    assert.equal(matches(path), true, path)
    const response = authorize(path)
    assert.equal(response.status, 401, path)
    assert.equal(response.headers.get('Cache-Control'), 'no-store', path)
    assert.equal((await response.json()).success, false, path)
  }
})

test('signed-in members retain access to community pages and APIs', () => {
  for (const path of [...landings, ...privatePages, ...privateApis]) {
    assert.equal(authorize(path, member), true, path)
  }
})

test('public proposal summary, products, and auth APIs keep their existing access rules', () => {
  for (const path of ['/api/initiatives/riverknoll-renewal', '/api/products', '/api/auth/session']) {
    assert.equal(matches(path), false, path)
  }
})

test('community access does not bypass existing admin and account protections', () => {
  assert.equal(authorize('/admin', member), false)
  assert.equal(authorize('/admin', { user: { id: 'admin', role: 'ADMIN' } }), true)
  for (const path of ['/messages', '/settings', '/profile/private', '/dashboard']) {
    assert.equal(authorize(path), false, path)
  }
})
