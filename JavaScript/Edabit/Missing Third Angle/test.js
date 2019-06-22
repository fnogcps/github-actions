var chai = require("chai");
var assert = chai.assert;

const e = require("./solution.js");

describe("Missing Third Angle (unit tests)\n", () => {
  it('[Test 1] Expected ➞ "obtuse"', () =>
    assert.strictEqual(e.missingAngle(27, 59), "obtuse"));
  it('[Test 2] Expected ➞ "acute"', () =>
    assert.strictEqual(e.missingAngle(135, 11), "acute"));
  it('[Test 3] Expected ➞ "right"', () =>
    assert.strictEqual(e.missingAngle(45, 45), "right"));
  it('[Test 4] Expected ➞ "obtuse"', () =>
    assert.strictEqual(e.missingAngle(45, 15), "obtuse"));
  it('[Test 5] Expected ➞ "acute"', () =>
    assert.strictEqual(e.missingAngle(31, 100), "acute"));
  it('[Test 6] Expected ➞ "right"', () =>
    assert.strictEqual(e.missingAngle(35, 55), "right"));
});
