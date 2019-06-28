var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Multiple of 100 (unit tests)\n', () => {
  it('[Test 1] Expected ➞ false', () =>
    assert.strictEqual(e.divisible(1), false));
  it('[Test 2] Expected ➞ true', () =>
    assert.strictEqual(e.divisible(100), true));
  it('[Test 3] Expected ➞ true', () =>
    assert.strictEqual(e.divisible(1000), true));
  it('[Test 4] Expected ➞ true', () =>
    assert.strictEqual(e.divisible(111000), true));
  it('[Test 5] Expected ➞ false', () =>
    assert.strictEqual(e.divisible(-1), false));
  it('[Test 6] Expected ➞ true', () =>
    assert.strictEqual(e.divisible(0), true));
  it('[Test 7] Expected ➞ true', () =>
    assert.strictEqual(e.divisible(-100), true));
});
