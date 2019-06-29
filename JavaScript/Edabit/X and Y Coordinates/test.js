var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('X and Y Coordinates (unit tests)\n', () => {
  it('[Test 1] Expected: [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]', () =>
    assert.deepEqual(e.convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]), [
      [1, 5],
      [5, 8],
      [3, 9],
      [3, 1],
      [4, 0],
    ]));
  it('[Test 2] Expected: [[9, 1], [8, 1], [3, 1]]', () =>
    assert.deepEqual(e.convertCartesian([9, 8, 3], [1, 1, 1]), [
      [9, 1],
      [8, 1],
      [3, 1],
    ]));
  it('[Test 3] Expected: [[2, 7], [5, 8], [1, 9]]', () =>
    assert.deepEqual(e.convertCartesian([2, 5, 1], [7, 8, 9]), [
      [2, 7],
      [5, 8],
      [1, 9],
    ]));
  it('[Test 4] Expected: [[3, 6], [2, 1], [2, 7]]', () =>
    assert.deepEqual(e.convertCartesian([3, 2, 2], [6, 1, 7]), [
      [3, 6],
      [2, 1],
      [2, 7],
    ]));
});
