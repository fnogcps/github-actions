var chai = require("chai");
var assert = chai.assert;

const e = require("./solution.js");

describe("Convert Number to String of Dashes (unit tests)\n", () => {
  it('[Test 1] Expected ➞ "-"', () => assert.strictEqual(e.Go(1), "-"));
  it('[Test 2] Expected ➞ "--"', () => assert.strictEqual(e.Go(2), "--"));
  it('[Test 3] Expected ➞ "---"', () => assert.strictEqual(e.Go(3), "---"));
  it('[Test 4] Expected ➞ "----"', () => assert.strictEqual(e.Go(4), "----"));
  it('[Test 5] Expected ➞ "-----"', () => assert.strictEqual(e.Go(5), "-----"));
  it('[Test 6] Expected ➞ "------"', () =>
    assert.strictEqual(e.Go(6), "------"));
  it('[Test 7] Expected ➞ "-------"', () =>
    assert.strictEqual(e.Go(7), "-------"));
  it('[Test 8] Expected ➞ "--------"', () =>
    assert.strictEqual(e.Go(8), "--------"));
  it('[Test 9] Expected ➞ "---------"', () =>
    assert.strictEqual(e.Go(9), "---------"));
  it('[Test 10] Expected ➞ "----------"', () =>
    assert.strictEqual(e.Go(10), "----------"));
  it('[Test 11] Expected ➞ "-----------"', () =>
    assert.strictEqual(e.Go(11), "-----------"));
  it('[Test 12] Expected ➞ "------------"', () =>
    assert.strictEqual(e.Go(12), "------------"));
  it('[Test 13] Expected ➞ "-------------"', () =>
    assert.strictEqual(e.Go(13), "-------------"));
  it('[Test 14] Expected ➞ "--------------"', () =>
    assert.strictEqual(e.Go(14), "--------------"));
  it('[Test 15] Expected ➞ "---------------"', () =>
    assert.strictEqual(e.Go(15), "---------------"));
  it('[Test 16] Expected ➞ "----------------"', () =>
    assert.strictEqual(e.Go(16), "----------------"));
  it('[Test 17] Expected ➞ "-----------------"', () =>
    assert.strictEqual(e.Go(17), "-----------------"));
  it('[Test 18] Expected ➞ "------------------"', () =>
    assert.strictEqual(e.Go(18), "------------------"));
  it('[Test 19] Expected ➞ "-------------------"', () =>
    assert.strictEqual(e.Go(19), "-------------------"));
  it('[Test 20] Expected ➞ "--------------------"', () =>
    assert.strictEqual(e.Go(20), "--------------------"));
  it('[Test 21] Expected ➞ "---------------------"', () =>
    assert.strictEqual(e.Go(21), "---------------------"));
  it('[Test 22] Expected ➞ "----------------------"', () =>
    assert.strictEqual(e.Go(22), "----------------------"));
  it('[Test 23] Expected ➞ "-----------------------"', () =>
    assert.strictEqual(e.Go(23), "-----------------------"));
  it('[Test 24] Expected ➞ "------------------------"', () =>
    assert.strictEqual(e.Go(24), "------------------------"));
  it('[Test 25] Expected ➞ "-------------------------"', () =>
    assert.strictEqual(e.Go(25), "-------------------------"));
  it('[Test 26] Expected ➞ "--------------------------"', () =>
    assert.strictEqual(e.Go(26), "--------------------------"));
  it('[Test 27] Expected ➞ "---------------------------"', () =>
    assert.strictEqual(e.Go(27), "---------------------------"));
  it('[Test 28] Expected ➞ "----------------------------"', () =>
    assert.strictEqual(e.Go(28), "----------------------------"));
  it('[Test 29] Expected ➞ "-----------------------------"', () =>
    assert.strictEqual(e.Go(29), "-----------------------------"));
  it('[Test 30] Expected ➞ "------------------------------"', () =>
    assert.strictEqual(e.Go(30), "------------------------------"));
});
