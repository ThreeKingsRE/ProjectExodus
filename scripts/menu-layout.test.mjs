import test from 'node:test'
import assert from 'node:assert/strict'
const m = await import('../lib/menu/layout.ts'); const L = m.default || m
const { defaultLayout, normalizeLayout, resolveMenu, moveSection, moveItem, moveItemToSection, hideItem, showItem, isItemActive, MENU_ITEMS, itemById, isDefault } = L

const placedIds = (l) => [...Object.values(l.items).flat(), ...l.hidden].sort()
test('the default menu has every item exactly once, in the order members know', () => {
  const d = defaultLayout()
  assert.deepEqual(placedIds(d), MENU_ITEMS.map((i) => i.id).sort())
  assert.deepEqual(d.sections.slice(0, 3), ['main', 'career', 'meetings'])
  assert.deepEqual(d.items.main, ['home', 'products', 'articles'])
  assert.ok(isDefault(d))
  assert.deepEqual(normalizeLayout(null), d)
})

test('saved layouts are cleaned: unknown and repeated ids dropped, new items return home', () => {
  const n = normalizeLayout({ sections: ['learn', 'nope', 'learn'], items: { learn: ['exodology', 'ghost', 'home', 'exodology'] }, hidden: ['products', 'zzz'] })
  assert.equal(n.sections[0], 'learn')
  assert.equal(n.sections.length, 8)
  assert.deepEqual(n.items.learn.slice(0, 2), ['exodology', 'home'])
  assert.ok(n.hidden.includes('products') && !n.hidden.includes('zzz'))
  assert.deepEqual(placedIds(n), MENU_ITEMS.map((i) => i.id).sort())
  // An old layout that predates a newer menu item still shows the new one
  const old = normalizeLayout({ sections: defaultLayout().sections, items: { main: ['home'] }, hidden: [] })
  assert.ok(old.items.main.includes('products') && old.items.account.includes('settings'))
  assert.deepEqual(normalizeLayout('junk'), defaultLayout())
})

test('moving sections and items', () => {
  let l = defaultLayout()
  l = moveSection(l, 'learn', -1)
  assert.equal(l.sections.indexOf('learn'), l.sections.indexOf('community') - 1)
  assert.deepEqual(moveSection(l, l.sections[0], -1).sections, l.sections) // no moving past the top
  l = moveItem(l, 'products', -1)
  assert.deepEqual(l.items.main.slice(0, 2), ['products', 'home'])
  // Moving past the end of a section hops into the next one
  const l2 = moveItem(defaultLayout(), 'articles', 1)
  assert.ok(!l2.items.main.includes('articles') && l2.items.career[0] === 'articles')
  const l3 = moveItemToSection(defaultLayout(), 'fish-tank', 'main')
  assert.ok(l3.items.main.includes('fish-tank') && !l3.items.community.includes('fish-tank'))
  assert.deepEqual(placedIds(l3), MENU_ITEMS.map((i) => i.id).sort())
})

test('hiding and bringing items back', () => {
  let l = hideItem(defaultLayout(), 'products')
  assert.ok(l.hidden.includes('products') && !l.items.main.includes('products'))
  assert.ok(!resolveMenu(l, true).flatMap((s) => s.items).some((i) => i.id === 'products'))
  l = showItem(l, 'products')
  assert.ok(l.items.main.includes('products') && l.hidden.length === 0)
  assert.ok(showItem(hideItem(defaultLayout(), 'messages'), 'messages', 'main').items.main.includes('messages'))
})

test('what visitors and members see', () => {
  const d = defaultLayout()
  const guest = resolveMenu(d, false).flatMap((s) => s.items.map((i) => i.id))
  assert.ok(!guest.includes('messages') && !guest.includes('settings'))
  assert.ok(guest.includes('career') && guest.includes('exodology')) // shown locked
  assert.ok(!resolveMenu(d, false).some((s) => s.id === 'account')) // nothing left, so no empty section
  assert.ok(resolveMenu(d, true).some((s) => s.id === 'account'))
  assert.equal(resolveMenu(d, false, true).length, 8) // the editor shows all
})

test('About and policy pages are in the menu for everyone, at the bottom', () => {
  const d = defaultLayout()
  assert.deepEqual(d.sections.slice(-2), ['about', 'policies'])
  const guest = resolveMenu(d, false).flatMap((s) => s.items.map((i) => i.id))
  for (const id of ['about-us', 'contact', 'faq', 'privacy', 'terms', 'accessibility']) assert.ok(guest.includes(id), id)
})

test('highlighting the current page', () => {
  const it = (id) => itemById.get(id)
  assert.ok(isItemActive(it('home'), '/') && !isItemActive(it('home'), '/products'))
  assert.ok(isItemActive(it('current-events'), '/community') && !isItemActive(it('current-events'), '/community/discussions'))
  assert.ok(isItemActive(it('architecture'), '/architecture/games') && !isItemActive(it('architecture'), '/architecture/structural'))
  assert.ok(isItemActive(it('structural'), '/architecture/structural/beams'))
  assert.ok(isItemActive(it('career'), '/career/jane') && isItemActive(it('career'), '/my/career'))
})
