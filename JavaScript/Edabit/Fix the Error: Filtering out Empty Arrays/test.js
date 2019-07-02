var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Fix the Error: Filtering out Empty Arrays (unit tests)\n', () => {
  it("[Test 1] Expected: ['a', 'b']", () =>
    assert.deepEqual(e.removeEmptyArrays(['a', 'b', []]), ['a', 'b']));
  it('[Test 2] Expected: [1, 2, 4]', () =>
    assert.deepEqual(e.removeEmptyArrays([1, 2, [], 4]), [1, 2, 4]));
  it('[Test 3] Expected: []', () =>
    assert.deepEqual(e.removeEmptyArrays([[], [], [], []]), []));
  it('[Test 4] Expected: [1, 2, 3, 4]', () =>
    assert.deepEqual(e.removeEmptyArrays([1, 2, 3, 4]), [1, 2, 3, 4]));
  it('[Test 5] Expected: [1, 4]', () =>
    assert.deepEqual(e.removeEmptyArrays([1, [], [], 4]), [1, 4]));
});
