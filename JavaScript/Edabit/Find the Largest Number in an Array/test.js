var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Find the Largest Number in an Array (unit tests)\n', () => {
  it('[Test 1] Expected: 5', () =>
    assert.strictEqual(e.findLargestNum([4, 5, 1, 3]), 5));
  it('[Test 2] Expected: 27', () =>
    assert.strictEqual(e.findLargestNum([13, 27, 18, 26]), 27));
  it('[Test 3] Expected: 39', () =>
    assert.strictEqual(e.findLargestNum([32, 35, 37, 39]), 39));
  it('[Test 4] Expected: 1001', () =>
    assert.strictEqual(e.findLargestNum([1000, 1001, 857, 1]), 1001));
  it('[Test 5] Expected: 837363', () =>
    assert.strictEqual(
      e.findLargestNum([27364, 837363, 736736, 73635]),
      837363,
    ));
  it('[Test 6] Expected: 40', () =>
    assert.strictEqual(e.findLargestNum([30, 2, 40, 3]), 40));
  it('[Test 7] Expected: 1', () =>
    assert.strictEqual(e.findLargestNum([0, 1, 0, 0, 1]), 1));
});
