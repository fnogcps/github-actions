var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Breaking Records (unit tests)\n', () => {
  it('[Test 1] Expected: [10, 5, 20, 20, 4, 5, 2, 25, 1]', () =>
    assert.deepEqual(e.breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]), [
      2,
      4,
    ]));
  it('[Test 2] Expected: [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]', () =>
    assert.deepEqual(e.breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]), [
      4,
      0,
    ]));
});
