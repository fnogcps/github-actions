var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Simple Array Sum (unit tests)\n', () => {
  it('[Test 1] Expected: 31', () =>
    assert.strictEqual(e.aVeryBigSum([1, 2, 3, 4, 10, 11]), 31));
  it('[Test 2] Expected: 5000000015', () =>
    assert.strictEqual(
      e.aVeryBigSum([
        1000000001,
        1000000002,
        1000000003,
        1000000004,
        1000000005,
      ]),
      5000000015,
    ));
});
