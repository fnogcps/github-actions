var chai = require("chai");
var assert = chai.assert;

const e = require("./solution.js");

describe("Return First and Last Parameter (unit tests)\n", () => {
  it("[Test 1] Expected ➞ 1", () => assert.strictEqual(e.firstArg(1, 2, 3), 1));
  it('[Test 2] Expected ➞ "a"', () =>
    assert.strictEqual(e.firstArg("a", "b", "c"), "a"));
  it("[Test 3] Expected ➞ 8", () => assert.strictEqual(e.firstArg(8), 8));
  it("[Test 4] Expected ➞ undefined", () =>
    assert.strictEqual(e.firstArg(), undefined));
  it("[Test 5] Expected ➞ 3", () => assert.strictEqual(e.lastArg(1, 2, 3), 3));
  it('[Test 6] Expected ➞ "c"', () =>
    assert.strictEqual(e.lastArg("a", "b", "c"), "c"));
  it("[Test 7] Expected ➞ 8", () => assert.strictEqual(e.lastArg(8), 8));
  it("[Test 8] Expected ➞ undefined", () =>
    assert.strictEqual(e.lastArg(), undefined));
});
