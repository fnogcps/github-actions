var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Flash Cards (unit tests)\n', () => {
  it('[Test 1] Expected: 21', () => assert.deepEqual(e.flash([3, 'x', 7]), 21));
  it('[Test 2] Expected: 12', () => assert.deepEqual(e.flash([5, '+', 7]), 12));
  it('[Test 3] Expected: 1', () => assert.deepEqual(e.flash([10, '-', 9]), 1));
  it('[Test 4] Expected: undefined', () =>
    assert.deepEqual(e.flash([10, '/', 0]), undefined));
  it('[Test 5] Expected: 3.33', () =>
    assert.deepEqual(e.flash([10, '/', 3]), 3.33));
  it('[Test 6] Expected: 0', () => assert.deepEqual(e.flash([2, 'x', 0]), 0));
  it('[Test 7] Expected: 0', () => assert.deepEqual(e.flash([0, '/', 5]), 0));
  it('[Test 8] Expected: 0', () => assert.deepEqual(e.flash([0, '+', 0]), 0));
  it('[Test 9] Expected: 0', () => assert.deepEqual(e.flash([0, '-', 0]), 0));
  it('[Test 10] Expected: 8', () => assert.deepEqual(e.flash([8, '-', 0]), 8));
  it('[Test 11] Expected: undefined', () =>
    assert.deepEqual(e.flash([0, '/', 0]), undefined));
  it('[Test 12] Expected: 0.38', () =>
    assert.deepEqual(e.flash([3, '/', 8]), 0.38));
});
