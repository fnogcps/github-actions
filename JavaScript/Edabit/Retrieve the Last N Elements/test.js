var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Retrieve the Last N Elements (unit tests)\n', () => {
  it('[Test 1] Expected: []', () =>
    assert.deepEqual(e.last([1, 2, 3, 4, 5], 0), []));
  it('[Test 2] Expected: [5]', () =>
    assert.deepEqual(e.last([1, 2, 3, 4, 5], 1), [5]));
  it('[Test 3] Expected: [9, 7, 6]', () =>
    assert.deepEqual(e.last([4, 3, 9, 9, 7, 6], 3), [9, 7, 6]));
  it('[Test 4] Expected: [5, 1, 2]', () =>
    assert.deepEqual(e.last([5, 1, 2], 3), [5, 1, 2]));
  it('[Test 5] Expected: "invalid"', () =>
    assert.deepEqual(e.last([], 1), 'invalid'));
  it('[Test 6] Expected: "invalid"', () =>
    assert.deepEqual(e.last([1, 2, 3, 4, 5], 7), 'invalid'));
});
