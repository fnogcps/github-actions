var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Minimum Removals to Make Sum Even (unit tests)\n', () => {
  it('[Test 1] Expected: 1', () =>
    assert.strictEqual(e.minimumRemovals([1, 2, 3, 4, 5]), 1));
  it('[Test 2] Expected: 0', () =>
    assert.strictEqual(e.minimumRemovals([5, 7, 9, 11]), 0));
  it('[Test 3] Expected: 1', () =>
    assert.strictEqual(e.minimumRemovals([5, 7, 9, 12]), 1));
  it('[Test 4] Expected: 1', () =>
    assert.strictEqual(e.minimumRemovals([5, 8, 8, 8]), 1));
  it('[Test 5] Expected: 1', () =>
    assert.strictEqual(e.minimumRemovals([5, 8, 8, 8, 9, 9]), 1));
  it('[Test 6] Expected: 1', () =>
    assert.strictEqual(e.minimumRemovals([9, 8, 8, 8, 9, 9]), 1));
  it('[Test 7] Expected: 0', () =>
    assert.strictEqual(e.minimumRemovals([5, 5, 4, 4, 3, 3]), 0));
  it('[Test 8] Expected: 1', () =>
    assert.strictEqual(e.minimumRemovals([5, 3, 4, 4, 3]), 1));
  it('[Test 9] Expected: 0', () =>
    assert.strictEqual(e.minimumRemovals([5, 3, 4, 4, 0]), 0));
});
