var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Absolute Sum (unit tests)\n', () => {
  it('[Test 1] Expected: 18', () =>
    assert.strictEqual(e.getAbsSum([2, -1, -3, 4, 8]), 18));
  it('[Test 2] Expected: 1', () => assert.strictEqual(e.getAbsSum([-1]), 1));
  it('[Test 3] Expected: 23', () =>
    assert.strictEqual(e.getAbsSum([-1, -3, -5, -4, -10, 0]), 23));
  it('[Test 4] Expected: 170', () =>
    assert.strictEqual(e.getAbsSum([8, 9, 10, 32, 101, -10]), 170));
  it('[Test 5] Expected: 500', () =>
    assert.strictEqual(e.getAbsSum([500]), 500));
});
