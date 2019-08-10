var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Purge and Organize (unit tests)\n', () => {
  it('[Test 1] Expected: [1, 2, 3, 4, 5, 8, 10]', () =>
    assert.deepEqual(e.uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10]), [
      1,
      2,
      3,
      4,
      5,
      8,
      10,
    ]));
  it('[Test 2] Expected: [1, 2, 4, 5, 7]', () =>
    assert.deepEqual(e.uniqueSort([1, 2, 5, 4, 7, 7, 7]), [1, 2, 4, 5, 7]));
  it('[Test 3] Expected: [0, 1, 2, 3, 4, 5, 6, 7]', () =>
    assert.deepEqual(e.uniqueSort([7, 6, 5, 4, 3, 2, 1, 0, 1]), [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
    ]));
  it('[Test 4] Expected: [1, 3, 4, 5, 6, 27, 100]', () =>
    assert.deepEqual(e.uniqueSort([3, 6, 5, 4, 3, 27, 1, 100, 1]), [
      1,
      3,
      4,
      5,
      6,
      27,
      100,
    ]));
  it('[Test 5] Expected: [-87, -9, -4.323827, -3.1415, -3.1414, 8]', () =>
    assert.deepEqual(
      e.uniqueSort([-9, -3.1414, -87, 8, -4.323827, -3.1415, -3.1415]),
      [-87, -9, -4.323827, -3.1415, -3.1414, 8],
    ));
});
