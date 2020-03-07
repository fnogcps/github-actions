var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Calculate Determinant of a 2x2 Matrix (unit tests)\n', () => {
  it('[Test 1] Expected: -2', () =>
    assert.strictEqual(
      e.calcDeterminant([
        [1, 2],
        [3, 4],
      ]),
      -2,
    ));
  it('[Test 2] Expected: -4', () =>
    assert.strictEqual(
      e.calcDeterminant([
        [5, 3],
        [3, 1],
      ]),
      -4,
    ));
  it('[Test 3] Expected: 0', () =>
    assert.strictEqual(
      e.calcDeterminant([
        [1, 1],
        [1, 1],
      ]),
      0,
    ));
  it('[Test 4] Expected: -1', () =>
    assert.strictEqual(
      e.calcDeterminant([
        [1, 1],
        [1, 0],
      ]),
      -1,
    ));
});
