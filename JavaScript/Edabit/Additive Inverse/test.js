var chai = require("chai");
var assert = chai.assert;

const e = require("./solution.js");

describe("Additive Inverse (unit tests)\n", () => {
  it("[Test 1] Expected ➞ [-5, 7, -8, -3]", () =>
    assert.deepEqual(e.additiveInverse([5, -7, 8, 3]), [-5, 7, -8, -3]));
  it("[Test 2] Expected ➞ [-1, -1, -1, -1, -1]", () =>
    assert.deepEqual(e.additiveInverse([1, 1, 1, 1, 1]), [-1, -1, -1, -1, -1]));
  it("[Test 3] Expected ➞ [5, 25, -35]", () =>
    assert.deepEqual(e.additiveInverse([-5, -25, 35]), [5, 25, -35]));
});
