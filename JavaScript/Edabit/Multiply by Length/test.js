var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Multiply by Length (unit tests)\n', () => {
  it('[Test 1] Expected: [8,24,16,36]', () =>
    assert.deepEqual(e.MultiplyByLength([2, 6, 4, 9]), [8, 24, 16, 36]));
  it('[Test 2] Expected: [12,3,3]', () =>
    assert.deepEqual(e.MultiplyByLength([4, 1, 1]), [12, 3, 3]));
  it('[Test 3] Expected: [7,0,21,21,49,14,7]', () =>
    assert.deepEqual(e.MultiplyByLength([1, 0, 3, 3, 7, 2, 1]), [
      7,
      0,
      21,
      21,
      49,
      14,
      7,
    ]));
  it('[Test 4] Expected: [0]', () =>
    assert.deepEqual(e.MultiplyByLength([0]), [0]));
});
