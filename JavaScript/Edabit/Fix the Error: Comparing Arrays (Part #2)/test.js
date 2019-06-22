var chai = require("chai");
var assert = chai.assert;

const e = require("./solution.js");

describe("Fix the Error / Comparing Arrays (Part #2)\n", () => {
  it("[Test 1] Expected ➞ true", () =>
    assert.strictEqual(e.checkEquals([1, 2], [1, 2]), true));
  it("[Test 2] Expected ➞ false", () =>
    assert.strictEqual(e.checkEquals([1, 2], [1, 3]), false));
  it("[Test 3] Expected ➞ false", () =>
    assert.strictEqual(e.checkEquals([11, 2], [1, 12]), false));
  it("[Test 4] Expected ➞ true", () =>
    assert.strictEqual(e.checkEquals([34, 56, 98], [34, 56, 98]), true));
  it("[Test 5] Expected ➞ false", () =>
    assert.strictEqual(
      e.checkEquals(
        [1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7],
        [1, 12, 13, 14, 15, 16, 17]
      ),
      false
    ));
  it("[Test 6] Expected ➞ false", () =>
    assert.strictEqual(
      e.checkEquals([11, 12, 15, 16, 19], [1, 13, 15, 1, 6, 19, 20]),
      false
    ));
  it("[Test 7] Expected ➞ true", () =>
    assert.strictEqual(
      e.checkEquals([11, 12, 13, 14, 15, 16], [11, 12, 13, 14, 15, 16]),
      true
    ));
  it("[Test 8] Expected ➞ false", () =>
    assert.strictEqual(
      e.checkEquals([123, 45, 6, 78, 90], [134, 5678, 90]),
      false
    ));
  it("[Test 9] Expected ➞ false", () =>
    assert.strictEqual(
      e.checkEquals([23, 26, 78, 934], [9, 26, 78, 934]),
      false
    ));
  it("[Test 10] Expected ➞ true", () =>
    assert.strictEqual(e.checkEquals([], []), true));
  it("[Test 11] Expected ➞ false", () =>
    assert.strictEqual(e.checkEquals([9, 87, 1, 23], [9, 7, 12, 3]), false));
});
