var chai = require("chai");
var assert = chai.assert;

const e = require("./solution.js");

describe("Count the Arguments (unit tests)\n", () => {
  it("[Test 1] Expected ➞ 0", () => assert.strictEqual(e.numArgs(), 0));
  it("[Test 2] Expected ➞ 1", () => assert.strictEqual(e.numArgs("foo"), 1));
  it("[Test 3] Expected ➞ 2", () =>
    assert.strictEqual(e.numArgs("foo", "bar"), 2));
  it("[Test 4] Expected ➞ 2", () =>
    assert.strictEqual(e.numArgs(null, null), 2));
  it("[Test 5] Expected ➞ 4", () =>
    assert.strictEqual(e.numArgs("foo", "bar", 5, null), 4));
  it("[Test 6] Expected ➞ 1", () => assert.strictEqual(e.numArgs(false), 1));
  it("[Test 7] Expected ➞ 2", () =>
    assert.strictEqual(e.numArgs("foo", {}), 2));
  it("[Test 8] Expected ➞ 3", () =>
    assert.strictEqual(e.numArgs("foo", "bar", {}), 3));
  it("[Test 9] Expected ➞ 3", () =>
    assert.strictEqual(e.numArgs([], [], {}), 3));
  it("[Test 10] Expected ➞ 5", () =>
    assert.strictEqual(e.numArgs("foo", "bar", true, null, 0), 5));
});
