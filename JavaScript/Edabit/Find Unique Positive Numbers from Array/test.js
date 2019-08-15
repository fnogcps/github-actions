var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Find Unique Positive Numbers from Array (unit tests)\n', () => {
  it('[Test 1] Expected: [1, 3]', () =>
    assert.deepEqual(e.uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]), [
      1,
      3,
    ]));
  it('[Test 2] Expected: [3, 5]', () =>
    assert.deepEqual(e.uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]), [
      3,
      5,
    ]));
  it('[Test 3] Expected: [3, 2, 4]', () =>
    assert.deepEqual(e.uniqueArr([-5, 3, 2, -4, 3, -1, -7, 2, 4, 4]), [
      3,
      2,
      4,
    ]));
  it('[Test 4] Expected: [3, 2, 1]', () =>
    assert.deepEqual(e.uniqueArr([3, -5, 0, -5, 2, -1, 0, -4, -6, 1]), [
      3,
      2,
      1,
    ]));
  it('[Test 5] Expected: [10, 6, 13, 5]', () =>
    assert.deepEqual(e.uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]), [
      10,
      6,
      13,
      5,
    ]));
  it('[Test 6] Expected: [5, 10, 9]', () =>
    assert.deepEqual(e.uniqueArr([5, 10, -12, 5, 9, 5, 10, 9, 10, -12]), [
      5,
      10,
      9,
    ]));
  it('[Test 7] Expected: []', () => assert.deepEqual(e.uniqueArr([]), []));
});
