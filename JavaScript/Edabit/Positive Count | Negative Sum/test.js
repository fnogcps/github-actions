var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Positive Count / Negative Sum (unit tests)\n', () => {
  it('[Test 1] Expected: [10, -65]', () =>
    assert.deepEqual(
      e.countPosSumNeg([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        -11,
        -12,
        -13,
        -14,
        -15,
      ]),
      [10, -65],
    ));
  it('[Test 2] Expected: [7, -252]', () =>
    assert.deepEqual(
      e.countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]),
      [7, -252],
    ));
  it('[Test 3] Expected: [2, -105]', () =>
    assert.deepEqual(e.countPosSumNeg([91, -4, 80, -73, -28]), [2, -105]));
  it('[Test 4] Expected: []', () => assert.deepEqual(e.countPosSumNeg([]), []));
  it('[Test 5] Expected: [5, -85]', () =>
    assert.deepEqual(e.countPosSumNeg([69, 100, 28, 47, 53, -61, -24]), [
      5,
      -85,
    ]));
  it('[Test 6] Expected: [4, -34]', () =>
    assert.deepEqual(e.countPosSumNeg([5, 7, 9, -3, -7, 61, -24]), [4, -34]));
  it('[Test 7] Expected: []', () =>
    assert.deepEqual(e.countPosSumNeg(null), []));
  it('[Test 8] Expected: [2, -116]', () =>
    assert.deepEqual(e.countPosSumNeg([98, 51, -19, -97]), [2, -116]));
  it('[Test 9] Expected: [4, -258]', () =>
    assert.deepEqual(
      e.countPosSumNeg([-42, 3, -51, -64, 69, 77, -20, -5, 68, -76]),
      [4, -258],
    ));
  it('[Test 10] Expected: []', () =>
    assert.deepEqual(e.countPosSumNeg(null, null, null), []));
});
