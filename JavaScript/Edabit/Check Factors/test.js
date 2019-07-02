var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Check Factors (unit tests)\n', () => {
  it('[Test 1] Expected: true', () =>
    assert.strictEqual(e.checkFactors([2, 3, 4], 12), true));
  it('[Test 2] Expected: false', () =>
    assert.strictEqual(e.checkFactors([1, 2, 3, 8], 12), false));
  it('[Test 3] Expected: true', () =>
    assert.strictEqual(e.checkFactors([1, 2, 50], 100), true));
  it('[Test 4] Expected: true', () =>
    assert.strictEqual(e.checkFactors([1, 9, 81], 81), true));
  it('[Test 5] Expected: true', () =>
    assert.strictEqual(e.checkFactors([5, 10, 50], 500), true));
  it('[Test 6] Expected: false', () =>
    assert.strictEqual(e.checkFactors([5, 10, 499], 500), false));
  it('[Test 7] Expected: false', () =>
    assert.strictEqual(e.checkFactors([3, 6], 9), false));
});
