var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Return the Highest and Lowest Numbers (unit tests)\n', () => {
  it('[Test 1] Expected: "542 -214"', () =>
    assert.strictEqual(
      e.highLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'),
      '542 -214',
    ));
  it('[Test 2] Expected: "1 -1"', () =>
    assert.strictEqual(e.highLow('1 -1'), '1 -1'));
  it('[Test 3] Expected: "1 1"', () =>
    assert.strictEqual(e.highLow('1 1'), '1 1'));
  it('[Test 4] Expected: "-1 -1"', () =>
    assert.strictEqual(e.highLow('-1 -1'), '-1 -1'));
  it('[Test 5] Expected: "1 -1"', () =>
    assert.strictEqual(e.highLow('1 -1 0'), '1 -1'));
  it('[Test 6] Expected: "1 0"', () =>
    assert.strictEqual(e.highLow('1 1 0'), '1 0'));
  it('[Test 7] Expected: "0 -1"', () =>
    assert.strictEqual(e.highLow('-1 -1 0'), '0 -1'));
  it('[Test 8] Expected: "42 42"', () =>
    assert.strictEqual(e.highLow('42'), '42 42'));
});
