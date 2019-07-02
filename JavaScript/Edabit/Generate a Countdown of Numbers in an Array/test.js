var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Generate a Countdown of Numbers in an Array (unit tests)\n', () => {
  it('[Test 1] Expected: [3, 2, 1, 0]', () =>
    assert.deepEqual(e.countdown(3), [3, 2, 1, 0]));
  it(
    '[Test 2] Expected: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, ' +
      '9, 8, 7, 6, 5, 4, 3, 2, 1, 0]',
    () =>
      assert.deepEqual(e.countdown(20), [
        20,
        19,
        18,
        17,
        16,
        15,
        14,
        13,
        12,
        11,
        10,
        9,
        8,
        7,
        6,
        5,
        4,
        3,
        2,
        1,
        0,
      ]),
  );
  it('[Test 3] Expected: [1, 0]', () =>
    assert.deepEqual(e.countdown(1), [1, 0]));
  it('[Test 4] Expected: [0]', () => assert.deepEqual(e.countdown(0), [0]));
});
