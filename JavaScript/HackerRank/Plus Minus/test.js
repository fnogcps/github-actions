var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Plus Minus (unit tests)\n', () => {
  it('[Test 1] Expected: [0.5, 0.333333, 0.166667]', () =>
    assert.deepEqual(e.plusMinus([-4, 3, -9, 0, 4, 1]), [
      0.5,
      0.333333,
      0.166667,
    ]));
  it('[Test 2] Expected: [0.4, 0.2, 0.4]', () =>
    assert.deepEqual(e.plusMinus([0, 0, -1, 1, 1]), [0.4, 0.2, 0.4]));
});
