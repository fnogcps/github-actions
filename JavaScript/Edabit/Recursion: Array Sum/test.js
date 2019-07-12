var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Recursion: Array Sum (unit tests)\n', () => {
  it('[Test 1] Expected: 10', () =>
    assert.strictEqual(e.sum([1, 2, 3, 4]), 10));
  it('[Test 2] Expected: -3', () =>
    assert.strictEqual(e.sum([-1, -1, -1]), -3));
  it('[Test 3] Expected: 1', () => assert.strictEqual(e.sum([1]), 1));
  it('[Test 4] Expected: 0', () => assert.strictEqual(e.sum([]), 0));
});
