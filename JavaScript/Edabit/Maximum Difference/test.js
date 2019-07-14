var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Maximum Difference (unit tests)\n', () => {
  it('[Test 1] Expected: 24', () =>
    assert.strictEqual(e.difference([-9, -8, 6, -9, 15, 6]), 24));
  it('[Test 2] Expected: 23', () =>
    assert.strictEqual(e.difference([-5, 6, 18, 4, 16, -2]), 23));
  it('[Test 3] Expected: 29', () =>
    assert.strictEqual(e.difference([-2, 20, -9, -9, -2, -7]), 29));
  it('[Test 4] Expected: 24', () =>
    assert.strictEqual(e.difference([4, -2, 11, -9, 15, 2]), 24));
  it('[Test 5] Expected: 25', () =>
    assert.strictEqual(e.difference([15, 10, 3, -6, 6, 19]), 25));
  it('[Test 6] Expected: 20', () =>
    assert.strictEqual(e.difference([1, 7, 18, -1, -2, 9]), 20));
  it('[Test 7] Expected: 17', () =>
    assert.strictEqual(e.difference([5, 1, -9, 7, -8, -10]), 17));
  it('[Test 8] Expected: 27', () =>
    assert.strictEqual(e.difference([-4, 17, -4, 20, -7, 0]), 27));
  it('[Test 9] Expected: 14', () =>
    assert.strictEqual(e.difference([-2, 11, 11, -3, -3, -3]), 14));
  it('[Test 10] Expected: 19', () =>
    assert.strictEqual(e.difference([1, 15, 14, 20, 10, 6]), 19));
  it('[Test 11] Expected: 15', () =>
    assert.strictEqual(e.difference([4, 17, 12, 2, 10, 2]), 15));
  it('[Test 12] Expected: 23', () =>
    assert.strictEqual(e.difference([-3, 3, 20, 10, 0, 17]), 23));
  it('[Test 13] Expected: 23', () =>
    assert.strictEqual(e.difference([-3, 6, 20, 9, 6, 7]), 23));
  it('[Test 14] Expected: 25', () =>
    assert.strictEqual(e.difference([16, 15, 1, 18, -7, -3]), 25));
  it('[Test 15] Expected: 13', () =>
    assert.strictEqual(e.difference([-7, 4, -4, -3, -8, -9]), 13));
  it('[Test 16] Expected: 10', () =>
    assert.strictEqual(e.difference([15, 8, 17, 18, 10, 10]), 10));
  it('[Test 17] Expected: 30', () =>
    assert.strictEqual(e.difference([-3, 20, 16, 8, 18, -10]), 30));
  it('[Test 18] Expected: 17', () =>
    assert.strictEqual(e.difference([6, 18, 9, 1, 3, 1]), 17));
  it('[Test 19] Expected: 30', () =>
    assert.strictEqual(e.difference([20, 18, -2, -10, -10, 17]), 30));
  it('[Test 20] Expected: 28', () =>
    assert.strictEqual(e.difference([18, 20, -7, -4, -2, -8]), 28));
});
