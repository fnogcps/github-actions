var chai = require("chai");
var assert = chai.assert;

const e = require("./solution.js");

describe("Sum of Cubes (unit tests)\n", () => {
  it("[Test 1] Expected: 855", () =>
    assert.strictEqual(e.sumOfCubes([1, 5, 9]), 855));
  it("[Test 2] Expected: 216", () =>
    assert.strictEqual(e.sumOfCubes([3, 4, 5]), 216));
  it("[Test 3] Expected: 3", () =>
    assert.strictEqual(e.sumOfCubes([1, 1, 1]), 3));
  it("[Test 4] Expected: 8", () => assert.strictEqual(e.sumOfCubes([2]), 8));
  it("[Test 5] Expected: 134", () =>
    assert.strictEqual(e.sumOfCubes([5, 1, 2]), 134));
  it("[Test 6] Expected: 32768", () =>
    assert.strictEqual(e.sumOfCubes([32]), 32768));
  it("[Test 7] Expected: 1711", () =>
    assert.strictEqual(e.sumOfCubes([5, 9, 4, 4, 9]), 1711));
  it("[Test 8] Expected: 9", () =>
    assert.strictEqual(e.sumOfCubes([0, 1, 2]), 9));
  it("[Test 9] Expected: 0", () => assert.strictEqual(e.sumOfCubes([]), 0));
});
