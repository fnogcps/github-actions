var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Diagonal Difference (unit tests)\n', () => {
  it('[Test 1] Expected: 0', () =>
    assert.strictEqual(
      e.diagonalDifference([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ]),
      0,
    ));
  it('[Test 2] Expected: 15', () =>
    assert.strictEqual(
      e.diagonalDifference([
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
      ]),
      15,
    ));
});
