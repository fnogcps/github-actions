var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Convert to Decimal Notation (unit tests)\n', () => {
  it('[Test 1] Expected: [0.33, 0.981, 0.5644, 1]', () =>
    assert.deepEqual(e.convertToDecimal(['33%', '98.1%', '56.44%', '100%']), [
      0.33,
      0.981,
      0.5644,
      1,
    ]));
  it('[Test 2] Expected: [0.45, 0.32, 0.97, 0.33]', () =>
    assert.deepEqual(e.convertToDecimal(['45%', '32%', '97%', '33%']), [
      0.45,
      0.32,
      0.97,
      0.33,
    ]));
  it('[Test 3] Expected: [0.01, 0.02, 0.03]', () =>
    assert.deepEqual(e.convertToDecimal(['1%', '2%', '3%']), [
      0.01,
      0.02,
      0.03,
    ]));
});
