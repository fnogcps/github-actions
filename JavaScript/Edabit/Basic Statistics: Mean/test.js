var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Basic Statistics: Mean (unit tests)\n', () => {
  it('[Test 1] Expected: 3.4', () =>
    assert.strictEqual(e.mean([1, 1, 2, 2, 3, 5, 5, 5, 7]), 3.4));
  it('[Test 2] Expected: 4.9', () =>
    assert.strictEqual(e.mean([1, 2, 2, 3, 7, 9, 10]), 4.9));
  it('[Test 3] Expected: 5.2', () =>
    assert.strictEqual(e.mean([1, 2, 3, 4, 5, 6, 6, 10, 10]), 5.2));
  it('[Test 4] Expected: 7.2', () =>
    assert.strictEqual(e.mean([5, 5, 6, 7, 10, 10]), 7.2));
  it('[Test 5] Expected: 4.6', () =>
    assert.strictEqual(e.mean([1, 3, 3, 4, 5, 6, 7, 8]), 4.6));
  it('[Test 6] Expected: 5.9', () =>
    assert.strictEqual(e.mean([2, 4, 6, 6, 6, 8, 9]), 5.9));
  it('[Test 7] Expected: 6.1', () =>
    assert.strictEqual(e.mean([2, 4, 6, 6, 6, 7, 7, 8, 9]), 6.1));
  it('[Test 8] Expected: 5.3', () =>
    assert.strictEqual(e.mean([2, 3, 4, 7, 8, 8]), 5.3));
  it('[Test 9] Expected: 3.1', () =>
    assert.strictEqual(e.mean([1, 2, 2, 2, 3, 4, 4, 4, 6]), 3.1));
  it('[Test 10] Expected: 7.1', () =>
    assert.strictEqual(e.mean([2, 2, 8, 9, 9, 10, 10]), 7.1));
  it('[Test 11] Expected: 4.6', () =>
    assert.strictEqual(e.mean([1, 3, 3, 4, 5, 5, 7, 9]), 4.6));
  it('[Test 12] Expected: 4.8', () =>
    assert.strictEqual(e.mean([1, 1, 3, 4, 4, 4, 7, 9, 10]), 4.8));
  it('[Test 13] Expected: 4.5', () =>
    assert.strictEqual(e.mean([1, 2, 3, 6, 6, 9]), 4.5));
  it('[Test 14] Expected: 7.3', () =>
    assert.strictEqual(e.mean([3, 5, 7, 7, 9, 10, 10]), 7.3));
  it('[Test 15] Expected: 3.8', () =>
    assert.strictEqual(e.mean([1, 2, 4, 4, 6, 6]), 3.8));
  it('[Test 16] Expected: 7.1', () =>
    assert.strictEqual(e.mean([2, 4, 7, 7, 8, 8, 9, 9, 10]), 7.1));
  it('[Test 17] Expected: 5.7', () =>
    assert.strictEqual(e.mean([2, 4, 4, 4, 5, 5, 8, 9, 10]), 5.7));
  it('[Test 18] Expected: 6.8', () =>
    assert.strictEqual(e.mean([1, 6, 6, 8, 10, 10]), 6.8));
  it('[Test 19] Expected: 7.2', () =>
    assert.strictEqual(e.mean([2, 6, 6, 9, 10, 10]), 7.2));
  it('[Test 20] Expected: 5.3', () =>
    assert.strictEqual(e.mean([1, 4, 4, 4, 7, 8, 9]), 5.3));
});
