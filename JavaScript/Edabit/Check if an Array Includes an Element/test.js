var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Check if an Array Includes an Element (unit tests)\n', () => {
  it('[Test 1] Expected ➞ true', () =>
    assert.strictEqual(e.check([1, 2, 3, 4, 5], 3), true));
  it('[Test 2] Expected ➞ false', () =>
    assert.strictEqual(e.check([1, 1, 2, 1, 1], 3), false));
  it('[Test 3] Expected ➞ true', () =>
    assert.strictEqual(e.check([1, 1, 2, 1, 5, 4, 7], 7), true));
  it('[Test 4] Expected ➞ false', () =>
    assert.strictEqual(e.check([1, 1, 2, 1, 5, 4, 7], 8), false));
  it('[Test 5] Expected ➞ true', () =>
    assert.strictEqual(e.check([5, 5, 5, 6], 5), true));
  it('[Test 6] Expected ➞ false', () =>
    assert.strictEqual(e.check([], 5), false));
});
