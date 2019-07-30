var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe("Limit a Number's Value (unit tests)\n", () => {
  it('[Test 1] Expected: 5', () =>
    assert.strictEqual(e.limitNumber(5, 1, 10), 5));
  it('[Test 2] Expected: 1', () =>
    assert.strictEqual(e.limitNumber(-3, 1, 10), 1));
  it('[Test 3] Expected: 10', () =>
    assert.strictEqual(e.limitNumber(14, 1, 10), 10));
  it('[Test 4] Expected: 4.6', () =>
    assert.strictEqual(e.limitNumber(4.6, 1, 10), 4.6));
  it('[Test 5] Expected: -73', () =>
    assert.strictEqual(e.limitNumber(-100, -73, -70), -73));
  it('[Test 6] Expected: -70', () =>
    assert.strictEqual(e.limitNumber(2, -73, -70), -70));
  it('[Test 7] Expected: -71.5', () =>
    assert.strictEqual(e.limitNumber(-71.5, -73, -70), -71.5));
  it('[Test 8] Expected: 8', () =>
    assert.strictEqual(e.limitNumber(7, 8, 8.1), 8));
  it('[Test 9] Expected: 8.1', () =>
    assert.strictEqual(e.limitNumber(9, 8, 8.1), 8.1));
  it('[Test 10] Expected: 8.05', () =>
    assert.strictEqual(e.limitNumber(8.05, 8, 8.1), 8.05));
  it('[Test 11] Expected: 16', () =>
    assert.strictEqual(e.limitNumber(16, 16, 16), 16));
  it('[Test 12] Expected: 16', () =>
    assert.strictEqual(e.limitNumber(-1, 16, 16), 16));
  it('[Test 13] Expected: 16', () =>
    assert.strictEqual(e.limitNumber(800, 16, 16), 16));
});
