var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Filter by Digit Length (unit tests)\n', () => {
  it('[Test 1] Expected: [232, 555]', () =>
    assert.deepEqual(e.filterDigitLength([88, 232, 4, 9721, 555], 3), [
      232,
      555,
    ]));
  it('[Test 2] Expected: [2, 7, 8, 9]', () =>
    assert.deepEqual(e.filterDigitLength([2, 7, 8, 9, 1012], 1), [2, 7, 8, 9]));
  it('[Test 3] Expected: []', () =>
    assert.deepEqual(e.filterDigitLength([32, 88, 74, 91, 300, 4050], 1), []));
  it('[Test 4] Expected: [5, 6, 8, 9]', () =>
    assert.deepEqual(e.filterDigitLength([5, 6, 8, 9], 1), [5, 6, 8, 9]));
  it('[Test 5] Expected: [838, 435, 989, 431]', () =>
    assert.deepEqual(e.filterDigitLength([99, 838, 435, 7666, 989, 431], 3), [
      838,
      435,
      989,
      431,
    ]));
  it('[Test 6] Expected: [99]', () =>
    assert.deepEqual(e.filterDigitLength([99, 838, 435, 7666, 989, 431], 2), [
      99,
    ]));
});
