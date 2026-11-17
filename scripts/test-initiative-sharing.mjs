import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import vm from 'node:vm'
import ts from 'typescript'

const require = createRequire(import.meta.url)
function load(path, mocks) {
  const exports = {}
  const source = readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')
  vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText, {
    exports, require: name => name in mocks ? mocks[name] : require(name), Response, encodeURIComponent,
  })
  return exports
}

const sharing = load('lib/projects/share-qr.ts', {})
assert.equal(sharing.initiativeShareUrl('riverknoll-renewal'), 'https://www.projxodus.com/community/projects/riverknoll-renewal')
assert.equal(sharing.initiativeShareUrl('test?next=https://other.example'), 'https://www.projxodus.com/community/projects/test%3Fnext%3Dhttps%3A%2F%2Fother.example')
const svg = sharing.initiativeQrSvg('riverknoll-renewal')
assert.match(svg, /^<svg /)
assert.match(svg, /viewBox=/)
assert.doesNotMatch(svg, /<script|<foreignObject|https?:\/\/(?!www\.w3\.org)/)

let project = null
const route = load('app/api/initiatives/[slug]/qr/route.ts', {
  '@/lib/projects/get-public-project': { getPublicProject: async () => project },
  '@/lib/projects/share-qr': sharing,
})
const get = () => route.GET(new Request('https://www.projxodus.com/api/initiatives/riverknoll-renewal/qr'), { params: Promise.resolve({ slug: 'riverknoll-renewal' }) })
assert.equal((await get()).status, 404, 'A private, disabled, or missing public overview cannot expose a QR')
project = { slug: 'riverknoll-renewal' }
const response = await get()
assert.equal(response.status, 200)
assert.equal(response.headers.get('content-type'), 'image/svg+xml; charset=utf-8')
assert.equal(response.headers.get('cache-control'), 'no-store', 'Turning public view off must take effect on the next request')
assert.equal(await response.text(), svg)
console.log('Initiative QR checks passed: canonical URL, local generation, public-view boundary, and uncached responses.')
