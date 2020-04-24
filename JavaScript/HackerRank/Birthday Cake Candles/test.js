var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Birthday Cake Candles (unit tests)\n', () => {
  it('[Test 1] Expected: 2', () =>
    assert.strictEqual(e.birthdayCakeCandles([3, 2, 1, 3]), 2));
  it('[Test 2] Expected: 4', () =>
    assert.strictEqual(
      e.birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]),
      4,
    ));
});
