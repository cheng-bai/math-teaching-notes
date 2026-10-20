import test from 'node:test';
import assert from 'node:assert/strict';
import { distances } from '../src/lib/distance.mjs';

test('distance sum is 2 exactly on the whole interval, including endpoints', () => {
  for (let i = -100; i <= 100; i++) assert.ok(Math.abs(distances(i / 100).sum - 2) < 1e-12);
});
test('outside the interval the sum is twice the absolute value', () => {
  for (const x of [-100, -3, -1.1, 1.1, 3, 100]) {
    assert.equal(distances(x).sum, 2 * Math.abs(x));
    assert.ok(distances(x).sum > 2);
  }
});
test('interactive default and boundary values are correct', () => {
  assert.deepEqual(distances(.5), { left: 1.5, right: .5, sum: 2 });
  assert.deepEqual(distances(-1), { left: 0, right: 2, sum: 2 });
  assert.deepEqual(distances(1), { left: 2, right: 0, sum: 2 });
});
test('non-finite input is rejected', () => {
  for (const x of [NaN, Infinity, -Infinity, '1']) assert.throws(() => distances(x), TypeError);
});
