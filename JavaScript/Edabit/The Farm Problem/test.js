var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('The Farm Problem (unit tests)\n', () => {
  it('[Test 1] Expected ➞ 50', () =>
    assert.strictEqual(e.animals(5, 2, 8), 50));
  it('[Test 2] Expected ➞ 50', () =>
    assert.strictEqual(e.animals(3, 4, 7), 50));
  it('[Test 3] Expected ➞ 22', () =>
    assert.strictEqual(e.animals(1, 2, 3), 22));
  it('[Test 4] Expected ➞ 34', () =>
    assert.strictEqual(e.animals(3, 5, 2), 34));
});
