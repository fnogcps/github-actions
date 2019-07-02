var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Next Element in Arithmetic Sequence (unit tests)\n', () => {
  it('[Test 1] Expected: 11', () =>
    assert.strictEqual(e.nextElement([3, 5, 7, 9]), 11));
  it('[Test 2] Expected: -8', () =>
    assert.strictEqual(e.nextElement([-5, -6, -7]), -8));
  it('[Test 3] Expected: 2', () =>
    assert.strictEqual(e.nextElement([2, 2, 2, 2, 2]), 2));
});
