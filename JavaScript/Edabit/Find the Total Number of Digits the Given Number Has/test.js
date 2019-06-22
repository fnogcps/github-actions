var chai = require("chai");
var assert = chai.assert;

const e = require("./solution.js");

describe("Find the Total Number of Digits the Given Number Has (unit tests)\n", () => {
  it("[Test 1] Expected ➞ 1", () =>
    assert.strictEqual(e.findDigitAmount(1), 1));
  it("[Test 2] Expected ➞ 2", () =>
    assert.strictEqual(e.findDigitAmount(67), 2));
  it("[Test 3] Expected ➞ 3", () =>
    assert.strictEqual(e.findDigitAmount(123), 3));
  it("[Test 4] Expected ➞ 5", () =>
    assert.strictEqual(e.findDigitAmount(55551), 5));
  it("[Test 5] Expected ➞ 8", () =>
    assert.strictEqual(e.findDigitAmount(96456431), 8));
  it("[Test 6] Expected ➞ 1", () =>
    assert.strictEqual(e.findDigitAmount(0), 1));
});
