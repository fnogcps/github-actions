var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Fix the Error: Value vs. Reference Types (unit tests)\n', () => {
  it('[Test 1] Expected: false', () =>
    assert.strictEqual(e.checkEquals([1, 2], [1, 3]), false));
  it('[Test 2] Expected: true', () =>
    assert.strictEqual(e.checkEquals([1, 2], [1, 2]), true));
  it('[Test 3] Expected: true', () =>
    assert.strictEqual(e.checkEquals([4, 5, 6], [4, 5, 6]), true));
  it('[Test 4] Expected: false', () =>
    assert.strictEqual(e.checkEquals([4, 7, 6], [4, 5, 6]), false));
});
