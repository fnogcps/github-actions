var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Bitwise Operations (unit tests)\n', () => {
  it('[Test 1] Expected: 4', () => assert.strictEqual(e.bitwiseAND(7, 12), 4));
  it('[Test 2] Expected: 15', () => assert.strictEqual(e.bitwiseOR(7, 12), 15));
  it('[Test 3] Expected: 11', () =>
    assert.strictEqual(e.bitwiseXOR(7, 12), 11));
  it('[Test 4] Expected: 0', () => assert.strictEqual(e.bitwiseAND(32, 17), 0));
  it('[Test 5] Expected: 49', () =>
    assert.strictEqual(e.bitwiseOR(32, 17), 49));
  it('[Test 6] Expected: 49', () =>
    assert.strictEqual(e.bitwiseXOR(32, 17), 49));
  it('[Test 7] Expected: 1', () => assert.strictEqual(e.bitwiseAND(13, 19), 1));
  it('[Test 8] Expected: 31', () =>
    assert.strictEqual(e.bitwiseOR(13, 19), 31));
  it('[Test 9] Expected: 30', () =>
    assert.strictEqual(e.bitwiseXOR(13, 19), 30));
});
