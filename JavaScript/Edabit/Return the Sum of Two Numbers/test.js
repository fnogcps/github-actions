var chai = require("chai");
var assert = chai.assert;

const e = require("./solution.js");

describe("Return the Sum of Two Numbers (unit tests)\n", () => {
  it("[Test 1] Expected 5: ", () => assert.strictEqual(e.addition(2, 3), 5));
  it("[Test 2] Expected -9: ", () =>
    assert.strictEqual(e.addition(-3, -6), -9));
  it("[Test 3] Expected 10: ", () => assert.strictEqual(e.addition(7, 3), 10));
});
