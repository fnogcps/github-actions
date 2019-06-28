var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Check if an Integer is Divisible By Five (unit tests)\n', () => {
  it('[Test 1] Expected ➞ false', () =>
    assert.strictEqual(e.divisibleByFive(7), false));
  it('[Test 2] Expected ➞ true', () =>
    assert.strictEqual(e.divisibleByFive(5), true));
  it('[Test 3] Expected ➞ true', () =>
    assert.strictEqual(e.divisibleByFive(15), true));
  it('[Test 4] Expected ➞ false', () =>
    assert.strictEqual(e.divisibleByFive(33), false));
  it('[Test 5] Expected ➞ false', () =>
    assert.strictEqual(e.divisibleByFive(-18), false));
  it('[Test 6] Expected ➞ false', () =>
    assert.strictEqual(e.divisibleByFive(999), false));
  it('[Test 7] Expected ➞ false', () =>
    assert.strictEqual(e.divisibleByFive(2), false));
});
