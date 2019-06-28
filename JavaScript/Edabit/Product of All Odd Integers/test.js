var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Product of All Odd Integers (unit tests)\n', () => {
  it('[Test 1] Expected ➞ 15', () =>
    assert.strictEqual(e.oddProduct([3, 4, 1, 1, 5]), 15));
  it('[Test 2] Expected ➞ 25', () =>
    assert.strictEqual(e.oddProduct([5, 5, 8, 2, 4, 32]), 25));
  it('[Test 3] Expected ➞ 1', () =>
    assert.strictEqual(e.oddProduct([1, 2, 1, 2, 1, 2, 1, 2]), 1));
  it('[Test 4] Expected ➞ 1', () =>
    assert.strictEqual(e.oddProduct([0, 0, 0, 1]), 1));
  it('[Test 5] Expected ➞ 5', () =>
    assert.strictEqual(e.oddProduct([1, 2, 2, 5, 2, 0]), 5));
});
