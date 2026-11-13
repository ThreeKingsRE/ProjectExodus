import test from 'node:test'
import assert from 'node:assert/strict'
import { calculateRiverknoll } from '../../lib/riverknoll-model.ts'

test('historic 513-new-bed baseline reproduces v11 base capital allowance', () => {
  const m = calculateRiverknoll(513, null)
  assert.equal(m.retainedUnverified, true)
  assert.equal(m.grossArea, 179550)
  assert.ok(Math.abs(m.cases[1].total - 158900000) < 100000)
  assert.equal(m.annualWallSavings, 4628)
  assert.ok(m.savingsPv > 67000 && m.savingsPv < 69000)
  assert.ok(m.supportedDebt > 25000000 && m.supportedDebt < 26000000)
})

test('retained beds reduce new scope and savings but retain gross-target rent basis', () => {
  const full = calculateRiverknoll(513, null)
  const retained = calculateRiverknoll(513, 100)
  assert.equal(retained.newBeds, 413)
  assert.equal(retained.retainedUnverified, false)
  assert.ok(retained.cases[1].total < full.cases[1].total)
  assert.equal(retained.grossRent, full.grossRent)
  assert.ok(Math.abs(retained.annualWallSavings / full.annualWallSavings - 413 / 513) < 1e-10)
})

test('zero new beds have no new-build fixed allowance or divide-by-zero results', () => {
  const m = calculateRiverknoll(513, 513)
  assert.equal(m.newBeds, 0)
  assert.equal(m.savingsPv, 0)
  for (const c of m.cases) { assert.equal(c.total, 0); assert.equal(c.perNewBed, 0) }
})

test('invalid capacity inputs are rejected rather than silently clamped', () => {
  for (const [target, retained] of [[0, null], [513, 514], [513, -1], [513, 1.5], [NaN, null], [2001, null]]) assert.throws(() => calculateRiverknoll(target, retained))
})
