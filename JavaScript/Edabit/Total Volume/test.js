var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Total Volume (unit tests)\n', () => {
  it('[Test 1] Expected: 63', () =>
    assert.strictEqual(
      e.totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]),
      63,
    ));
  it('[Test 2] Expected: 10', () =>
    assert.strictEqual(e.totalVolume([2, 2, 2], [2, 1, 1]), 10));
  it('[Test 3] Expected: 1', () =>
    assert.strictEqual(e.totalVolume([1, 1, 1]), 1));
  it('[Test 4] Expected: 68', () =>
    assert.strictEqual(e.totalVolume([5, 1, 10], [1, 9, 2]), 68));
  it('[Test 5] Expected: 14', () =>
    assert.strictEqual(e.totalVolume([1, 1, 5], [3, 3, 1]), 14));
});
