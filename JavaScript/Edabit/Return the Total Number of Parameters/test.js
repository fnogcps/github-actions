var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Return the Total Number of Parameters (unit tests)\n', () => {
  it('[Test 1] Expected ➞ 3', () =>
    assert.strictEqual(e.numberArgs('a', 'b', 'c'), 3));
  it('[Test 2] Expected ➞ 5', () =>
    assert.strictEqual(e.numberArgs(10, 20, 30, 40, 50), 5));
  it('[Test 3] Expected ➞ 2', () =>
    assert.strictEqual(e.numberArgs('x', 'y'), 2));
  it('[Test 4] Expected ➞ 0', () => assert.strictEqual(e.numberArgs(), 0));
});
