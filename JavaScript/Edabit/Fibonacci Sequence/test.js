var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Fibonacci Sequence (unit tests)\n', () => {
  it('[Test ] Expected: [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ]', () =>
    assert.deepEqual(e.fibonacciSequence(), [
      0,
      1,
      1,
      2,
      3,
      5,
      8,
      13,
      21,
      34,
      55,
      89,
      144,
      233,
    ]));
});
