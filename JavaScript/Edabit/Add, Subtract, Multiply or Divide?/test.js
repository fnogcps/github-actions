var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Add, Subtract, Multiply or Divide? (unit tests)\n', () => {
  it('[Test 1] Expected: "added"', () =>
    assert.strictEqual(e.operation(12, 12), 'added'));
  it('[Test 2] Expected: "subtracted"', () =>
    assert.strictEqual(e.operation(100, 76), 'subtracted'));
  it('[Test 3] Expected: "multiplied"', () =>
    assert.strictEqual(e.operation(6, 4), 'multiplied'));
  it('[Test 4] Expected: "divided"', () =>
    assert.strictEqual(e.operation(528, 22), 'divided'));
  it('[Test 5] Expected: null', () =>
    assert.strictEqual(e.operation(10, 12), null));
});
