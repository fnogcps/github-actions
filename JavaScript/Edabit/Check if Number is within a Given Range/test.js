var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Check if Number is within a Given Range (unit tests)\n', () => {
  it('[Test 1] Expected ➞ true', () =>
    assert.strictEqual(e.isInRange(4, {min: 0, max: 5}), true));
  it('[Test 2] Expected ➞ true', () =>
    assert.strictEqual(e.isInRange(4, {min: 4, max: 5}), true));
  it('[Test 3] Expected ➞ true', () =>
    assert.strictEqual(e.isInRange(4, {min: 0, max: 4}), true));
  it('[Test 4] Expected ➞ false', () =>
    assert.strictEqual(e.isInRange(4, {min: 6, max: 10}), false));
  it('[Test 5] Expected ➞ false', () =>
    assert.strictEqual(e.isInRange(11, {min: 6, max: 10}), false));
  it('[Test 6] Expected ➞ true', () =>
    assert.strictEqual(e.isInRange(5, {min: 5, max: 5}), true));
  it('[Test 7] Expected ➞ true', () =>
    assert.strictEqual(e.isInRange(1.5, {min: 1.25, max: 1.75}), true));
  it('[Test 8] Expected ➞ false', () =>
    assert.strictEqual(e.isInRange(1.1, {min: 1.25, max: 1.75}), false));
  it('[Test 9] Expected ➞ false', () =>
    assert.strictEqual(e.isInRange(1.8, {min: 1.25, max: 1.75}), false));
  it('[Test 10] Expected ➞ true', () =>
    assert.strictEqual(e.isInRange(-1, {min: -1, max: 1}), true));
});
