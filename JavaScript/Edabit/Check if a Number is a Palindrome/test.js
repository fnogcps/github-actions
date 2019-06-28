var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Check if a Number is a Palindrome (unit tests)\n', () => {
  it('[Test 1] Expected: true', () =>
    assert.strictEqual(e.isPalindrome(838), true));
  it('[Test 2] Expected: true', () =>
    assert.strictEqual(e.isPalindrome(77), true));
  it('[Test 3] Expected: true', () =>
    assert.strictEqual(e.isPalindrome(95159), true));
  it('[Test 4] Expected: false', () =>
    assert.strictEqual(e.isPalindrome(839), false));
  it('[Test 5] Expected: false', () =>
    assert.strictEqual(e.isPalindrome(4234), false));
  it('[Test 6] Expected: false', () =>
    assert.strictEqual(e.isPalindrome(13), false));
});
