var chai = require("chai");
var assert = chai.assert;

const e = require("./solution.js");

describe("Remove the First and Last Characters (unit tests)\n", () => {
  it('[Test 1] Expected ➞ "ell"', () =>
    assert.strictEqual(e.removeFirstLast("hello"), "ell"));
  it('[Test 2] Expected ➞ "enefi"', () =>
    assert.strictEqual(e.removeFirstLast("benefit"), "enefi"));
  it('[Test 3] Expected ➞ "ord"', () =>
    assert.strictEqual(e.removeFirstLast("wordy"), "ord"));
  it('[Test 4] Expected ➞ "ayb"', () =>
    assert.strictEqual(e.removeFirstLast("maybe"), "ayb"));
  it('[Test 5] Expected ➞ "to"', () =>
    assert.strictEqual(e.removeFirstLast("to"), "to"));
  it('[Test 6] Expected ➞ "a"', () =>
    assert.strictEqual(e.removeFirstLast("a"), "a"));
  it('[Test 7] Expected ➞ ""', () =>
    assert.strictEqual(e.removeFirstLast(""), ""));
});
