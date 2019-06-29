var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Find the Smallest Number in an Array (unit tests)\n', () => {
  it('[Test 1] Expected: 2', () =>
    assert.strictEqual(e.findSmallestNum([34, 15, 88, 2]), 2));
  it('[Test 2] Expected: 345', () =>
    assert.strictEqual(e.findSmallestNum([34, -345, -1, 100]), -345));
  it('[Test 3] Expected: 76', () =>
    assert.strictEqual(e.findSmallestNum([-76, 1.345, 1, 0]), -76));
  it('[Test 4] Expected: 9999', () =>
    assert.strictEqual(
      e.findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]),
      -0.9999,
    ));
  it('[Test 5] Expected: 7', () =>
    assert.strictEqual(e.findSmallestNum([7, 7, 7]), 7));
  it('[Test 7] Expected: 1', () =>
    assert.strictEqual(e.findSmallestNum([4, 6, 1, 3, 4, 5, 5, 1]), 1));
  it('[Test 8] Expected: 8', () =>
    assert.strictEqual(e.findSmallestNum([-4, -6, -8, -1]), -8));
  it('[Test 9] Expected: 23', () =>
    assert.strictEqual(e.findSmallestNum([54, 76, 23, 54]), 23));
  it('[Test 10] Expected: 100', () =>
    assert.strictEqual(e.findSmallestNum([100]), 100));
  it('[Test 11] Expected: 0', () =>
    assert.strictEqual(e.findSmallestNum([0, 1, 2, 3, 4, 5]), 0));
});
