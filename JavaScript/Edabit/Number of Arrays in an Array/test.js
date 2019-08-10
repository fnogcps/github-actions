var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Number of Arrays in an Array (unit tests)\n', () => {
  it('[Test 1] Expected: 3', () =>
    assert.strictEqual(
      e.numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]),
      3,
    ));
  it('[Test 2] Expected: 1', () =>
    assert.strictEqual(e.numOfSubbarrays([[1, 2, 3]]), 1));
  it('[Test 3] Expected: 0', () =>
    assert.strictEqual(e.numOfSubbarrays([1, 2, 3]), 0));
  it('[Test 4] Expected: 4', () =>
    assert.strictEqual(
      e.numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]),
      4,
    ));
});
