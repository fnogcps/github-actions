var chai = require("chai");
var assert = chai.assert;

const e = require("./solution.js");

describe("First and Last Index (unit tests)\n", () => {
  it("[Test 1] Expected: [2, 3]", () =>
    assert.deepEqual(e.charIndex("hello", "l"), [2, 3]));
  it("[Test 2] Expected: [2, 2]", () =>
    assert.deepEqual(e.charIndex("circumlocution", "r"), [2, 2]));
  it("[Test 3] Expected: [1, 11]", () =>
    assert.deepEqual(e.charIndex("circumlocution", "i"), [1, 11]));
  it("[Test 4] Expected: [0, 8]", () =>
    assert.deepEqual(e.charIndex("circumlocution", "c"), [0, 8]));
  it("[Test 5] Expected: [0, 0]", () =>
    assert.deepEqual(e.charIndex("happy", "h"), [0, 0]));
  it("[Test 6] Expected: [2, 3]", () =>
    assert.deepEqual(e.charIndex("happy", "p"), [2, 3]));
  it("[Test 7] Expected: undefined", () =>
    assert.deepEqual(e.charIndex("happy", "e"), undefined));
});
