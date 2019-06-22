var chai = require("chai");
var assert = chai.assert;

const e = require("./solution.js");

describe("Char-to-ASCII (unit tests)\n", () => {
  it("[Test 1] Expected ➞ 32", () => assert.strictEqual(e.ctoa(" "), 32));
  it("[Test 2] Expected ➞ 65", () => assert.strictEqual(e.ctoa("A"), 65));
  it("[Test 3] Expected ➞ 93", () => assert.strictEqual(e.ctoa("]"), 93));
  it("[Test 4] Expected ➞ 94", () => assert.strictEqual(e.ctoa("^"), 94));
  it("[Test 5] Expected ➞ 99", () => assert.strictEqual(e.ctoa("c"), 99));
});
