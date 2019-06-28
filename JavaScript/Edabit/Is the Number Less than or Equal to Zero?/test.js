var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Is the Number Less than or Equal to Zero? (unit tests)\n', () => {
  it('[Test 1] Expected ➞ false', () =>
    assert.strictEqual(e.lessThanOrEqualToZero(5), false));
  it('[Test 2] Expected ➞ true', () =>
    assert.strictEqual(e.lessThanOrEqualToZero(0), true));
  it('[Test 3] Expected ➞ true', () =>
    assert.strictEqual(e.lessThanOrEqualToZero(-5), true));
  it('[Test 4] Expected ➞ false', () =>
    assert.strictEqual(e.lessThanOrEqualToZero(1), false));
  it('[Test 5] Expected ➞ false', () =>
    assert.strictEqual(e.lessThanOrEqualToZero(2), false));
  it('[Test 6] Expected ➞ false', () =>
    assert.strictEqual(e.lessThanOrEqualToZero(10000), false));
  it('[Test 7] Expected ➞ false', () =>
    assert.strictEqual(e.lessThanOrEqualToZero(0.5), false));
});
