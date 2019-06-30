var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Flip the Boolean (unit tests)\n', () => {
  it('[Test 1] Expected: true', () =>
    assert.strictEqual(e.reverse(false), true));
  it('[Test 2] Expected: false', () =>
    assert.strictEqual(e.reverse(true), false));
  it('[Test 3] Expected: "boolean expected"', () =>
    assert.strictEqual(e.reverse(0), 'boolean expected'));
  it('[Test 4] Expected: "boolean expected"', () =>
    assert.strictEqual(e.reverse(null), 'boolean expected'));
  it('[Test 5] Expected: "boolean expected"', () =>
    assert.strictEqual(e.reverse(undefined), 'boolean expected'));
  it('[Test 6] Expected: "boolean expected"', () =>
    assert.strictEqual(e.reverse({}), 'boolean expected'));
});
