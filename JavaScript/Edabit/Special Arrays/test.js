var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Special Arrays (unit tests)\n', () => {
  it('[Test 1] Expected: true', () =>
    assert.strictEqual(e.isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]), true));
  it('[Test 2] Expected: false', () =>
    assert.strictEqual(e.isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]), false));
  it('[Test 3] Expected: false', () =>
    assert.strictEqual(e.isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]), false));
  it('[Test 4] Expected: false', () =>
    assert.strictEqual(e.isSpecialArray([1, 1, 1, 2]), false));
  it('[Test 5] Expected: false', () =>
    assert.strictEqual(e.isSpecialArray([2, 2, 2, 2]), false));
  it('[Test 6] Expected: true', () =>
    assert.strictEqual(e.isSpecialArray([2, 1, 2, 1]), true));
  it('[Test 7] Expected: true', () =>
    assert.strictEqual(e.isSpecialArray([4, 5, 6, 7]), true));
  it('[Test 8] Expected: true', () =>
    assert.strictEqual(e.isSpecialArray([4, 5, 6, 7, 0, 5]), true));
});
