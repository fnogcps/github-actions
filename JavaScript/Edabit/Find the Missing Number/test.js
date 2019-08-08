var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Find the Missing Number (unit tests)\n', () => {
  it('[Test 1] Expected: 5', () =>
    assert.strictEqual(e.missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]), 5));
  it('[Test 2] Expected: 10', () =>
    assert.strictEqual(e.missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]), 10));
  it('[Test 3] Expected: 1', () =>
    assert.strictEqual(e.missingNum([7, 2, 3, 9, 4, 5, 6, 8, 10]), 1));
  it('[Test 4] Expected: 7', () =>
    assert.strictEqual(e.missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]), 7));
  it('[Test 5] Expected: 3', () =>
    assert.strictEqual(e.missingNum([1, 7, 2, 4, 8, 10, 5, 6, 9]), 3));
});
