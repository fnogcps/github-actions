var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Sort Numbers in Ascending Order (unit tests)\n', () => {
  it('[Test 1] Expected: [1, 2, 5, 10, 50]', () =>
    assert.deepEqual(e.sortNumsAscending([1, 2, 10, 50, 5]), [
      1,
      2,
      5,
      10,
      50,
    ]));
  it('[Test 2] Expected: [-95, -24, 4, 29, 80, 85]', () =>
    assert.deepEqual(e.sortNumsAscending([80, 29, 4, -95, -24, 85]), [
      -95,
      -24,
      4,
      29,
      80,
      85,
    ]));
  it('[Test 3] Expected: []', () =>
    assert.deepEqual(e.sortNumsAscending(null), []));
  it('[Test 4] Expected: []', () =>
    assert.deepEqual(e.sortNumsAscending([]), []));
  it('[Test 5] Expected: [-85, -27, -17, -16, -16, -8, 47, 47, 51, 91]', () =>
    assert.deepEqual(
      e.sortNumsAscending([47, 51, -17, -16, 91, 47, -85, -8, -16, -27]),
      [-85, -27, -17, -16, -16, -8, 47, 47, 51, 91],
    ));
  it('[Test 6] Expected: [-76, -73, -51, -14, 65, 69, 74]', () =>
    assert.deepEqual(e.sortNumsAscending([-51, -73, 65, 69, -76, 74, -14]), [
      -76,
      -73,
      -51,
      -14,
      65,
      69,
      74,
    ]));
  it('[Test 7] Expected: [21, 33, 35, 45, 65, 97, 98]', () =>
    assert.deepEqual(e.sortNumsAscending([45, 98, 35, 65, 97, 21, 33]), [
      21,
      33,
      35,
      45,
      65,
      97,
      98,
    ]));
  it('[Test 8] Expected: [-69, -54, -32, -23, -2]', () =>
    assert.deepEqual(e.sortNumsAscending([-23, -69, -54, -2, -32]), [
      -69,
      -54,
      -32,
      -23,
      -2,
    ]));
  it('[Test 9] Expected: [-96, -21, -9]', () =>
    assert.deepEqual(e.sortNumsAscending([-21, -9, -96]), [-96, -21, -9]));
  it('[Test 10] Expected: [0]', () =>
    assert.deepEqual(e.sortNumsAscending([0]), [0]));
});
