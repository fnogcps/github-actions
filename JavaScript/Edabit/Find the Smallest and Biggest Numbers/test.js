var chai = require("chai");
var assert = chai.assert;

const e = require("./solution.js");

describe("Find the Smallest and Biggest Numbers (unit tests)\n", () => {
  it("[Test 1] Expected: [1, 54]", () =>
    assert.deepEqual(e.minMax([14, 35, 6, 1, 34, 54]), [1, 54]));
  it("[Test 2] Expected: [1.346, 1.8734]", () =>
    assert.deepEqual(e.minMax([1.346, 1.6532, 1.8734, 1.8723]), [
      1.346,
      1.8734
    ]));
  it("[Test 3] Expected: [0.2345, 0.984]", () =>
    assert.deepEqual(e.minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]), [
      0.2345,
      0.984
    ]));
  it("[Test 4] Expected: [13, 98]", () =>
    assert.deepEqual(e.minMax([13, 72, 98, 43, 24, 65, 31]), [13, 98]));
  it("[Test 5] Expected: [-54, -21]", () =>
    assert.deepEqual(e.minMax([-54, -23, -54, -21]), [-54, -21]));
  it("[Test 6] Expected: [-0.6834, 0.5632]", () =>
    assert.deepEqual(e.minMax([-0.473, -0.6834, -0.1287, 0.5632]), [
      -0.6834,
      0.5632
    ]));
  it("[Test 7] Expected: [0, 0]", () =>
    assert.deepEqual(e.minMax([0, 0, 0, 0]), [0, 0]));
});
