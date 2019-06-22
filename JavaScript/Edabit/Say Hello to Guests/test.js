var chai = require("chai");
var assert = chai.assert;

const e = require("./solution.js");

describe("Say Hello to Guests (unit tests)\n", () => {
  it('[Test 1] Expected ➞ "Hello Kyrill"', () =>
    assert.strictEqual(e.greetPeople(["Kyrill"]), "Hello Kyrill"));
  it('[Test 2] Expected ➞ "Hello Kyrill, Hello Mom, Hello Dad, Hello Zuzu"', () =>
    assert.strictEqual(
      e.greetPeople(["Kyrill", "Mom", "Dad", "Zuzu"]),
      "Hello Kyrill, Hello Mom, Hello Dad, Hello Zuzu"
    ));
  it('[Test 3] Expected ➞ ""', () => assert.strictEqual(e.greetPeople([]), ""));
});
