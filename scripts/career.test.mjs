import test from 'node:test'
import assert from 'node:assert/strict'
const c = await import('../lib/career/career.ts')
const { parsePostInput, looksLikeStreetAddress, isSealed, sealView, dateRange, isEmail, HANDLE_RE } = c.default || c
const s = await import('../lib/career/server.ts')
const { contentHash, handleFrom, hashToken, newToken, careerQrSvg, ownerPost } = s.default || s

const IMG = 'https://res.cloudinary.com/demo/image/upload/v1/career/a.jpg'

test('places stay city/region level: street addresses are refused', () => {
  for (const a of ['12 Oak St', '450 N Main Avenue, Rochester', '9 Elm Road', 'Apt 3, Buffalo', '77 Lake Shore Drive']) assert.ok(looksLikeStreetAddress(a), a)
  for (const ok of ['Rochester, NY', 'Greater Rochester', 'Route 9 corridor', 'Brooklyn', 'Zone 5b']) assert.ok(!looksLikeStreetAddress(ok), ok)
  const r = parsePostInput({ title: 'Deck', place: '12 Oak St, Rochester' })
  assert.equal(r.ok, false)
})

test('quick post: one photo or a title is enough; foreign image hosts are dropped', () => {
  assert.equal(parsePostInput({}).ok, false)
  assert.equal(parsePostInput({ photos: [{ url: 'https://evil.example/x.jpg' }] }).ok, false)
  const r = parsePostInput({ photos: [{ url: IMG, label: 'before', takenAt: '2026-05-01T10:00:00Z' }, { url: 'http://res.cloudinary.com/demo/image/upload/x.jpg' }] })
  assert.ok(r.ok)
  assert.deepEqual(r.data.photos, [{ url: IMG, takenAt: '2026-05-01T10:00:00.000Z', label: 'before' }])
  assert.equal(r.data.visibility, 'PUBLIC')
})

test('details are cleaned: trades deduped and lowercased, months accepted, bad ranges refused', () => {
  const r = parsePostInput({ title: 'Stair rebuild', trades: ['Carpentry', 'carpentry', ' Framing '], startedOn: '2026-03', endedOn: '2026-04', visibility: 'MEMBERS' })
  assert.ok(r.ok)
  assert.deepEqual(r.data.trades, ['carpentry', 'framing'])
  assert.equal(r.data.startedOn, '2026-03-01')
  assert.equal(r.data.visibility, 'MEMBERS')
  assert.equal(parsePostInput({ title: 'x', startedOn: '2026-05', endedOn: '2026-04' }).ok, false)
  assert.equal(dateRange('2026-03-01', '2026-04-01'), 'Mar 2026 – Apr 2026')
  assert.equal(dateRange('2026-03-01', '2026-03-01'), 'Mar 2026')
})

test('seal lock: editing vouched details changes the hash; story and visibility do not', () => {
  const base = parsePostInput({ title: 'Patio', place: 'Rochester, NY', trades: ['masonry'], photos: [{ url: IMG }], story: 'a' }).data
  const h = contentHash(base)
  assert.equal(contentHash({ ...base, story: 'rewritten' }), h)
  assert.equal(contentHash({ ...base, visibility: 'PRIVATE' }), h)
  assert.equal(contentHash({ ...base, trades: ['masonry'].reverse() }), h)
  assert.notEqual(contentHash({ ...base, title: 'Bigger patio' }), h)
  assert.notEqual(contentHash({ ...base, photos: [] }), h)
  assert.notEqual(contentHash({ ...base, place: 'Buffalo, NY' }), h)
  const v = { status: 'VERIFIED', signedHash: h, signerName: 'Ana Ruiz', signerRole: 'Site supervisor', signerCompany: 'Ruiz Build', anonymousAs: null, comment: 'Solid', verifiedAt: new Date('2026-06-10') }
  assert.ok(isSealed(v, h))
  assert.ok(!isSealed(v, contentHash({ ...base, title: 'Bigger patio' })))
  assert.ok(!isSealed({ ...v, status: 'SIGNED' }, h), 'unconfirmed email: no seal')
})

test('public seal hides the email and respects anonymity', () => {
  const v = { status: 'VERIFIED', signedHash: 'h', signerName: 'Ana Ruiz', signerRole: 'Homeowner', signerCompany: null, anonymousAs: 'Homeowner, Rochester NY', comment: null, verifiedAt: new Date('2026-06-10') }
  assert.deepEqual(sealView(v), { who: 'Homeowner, Rochester NY', what: null, comment: null, date: '2026-06-10T00:00:00.000Z' })
  assert.equal(sealView({ ...v, anonymousAs: null }).what, 'Homeowner')
  const post = { id: 'p', title: 't', story: null, trades: [], role: null, startedOn: null, endedOn: null, place: null, materials: null, photos: [], visibility: 'PUBLIC', contentHash: 'h', createdAt: new Date(), updatedAt: new Date(),
    vouches: [{ ...v, id: 'v', expiresAt: new Date(Date.now() + 1e6), createdAt: new Date(), signerEmail: 'secret@example.com' }] }
  assert.ok(!JSON.stringify(ownerPost(post)).includes('secret@example.com'))
  assert.equal(ownerPost(post).vouches[0].state, 'sealed')
  assert.equal(ownerPost({ ...post, contentHash: 'changed' }).vouches[0].state, 'edited')
})

test('tokens are stored only as hashes; handles and emails validate', () => {
  const { token, hash } = newToken()
  assert.ok(token.length >= 30)
  assert.equal(hashToken(token), hash)
  assert.notEqual(token, hash)
  assert.equal(handleFrom('José  O’Brien'), 'jose-o-brien')
  assert.match(handleFrom('Al'), /^maker-[0-9a-f]{6}$/)
  assert.ok(HANDLE_RE.test(handleFrom('A very very long name that keeps going on')))
  assert.ok(isEmail('a@b.co') && !isEmail('nope') && !isEmail('a@b'))
  assert.match(careerQrSvg('jose-o-brien'), /^<svg/)
})
