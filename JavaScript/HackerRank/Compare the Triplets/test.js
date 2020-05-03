var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Compare the Triplets (unit tests)\n', () => {
  it('[Test 1] Expected: [1, 1]', () =>
    assert.deepEqual(e.compareTriplets([5, 6, 7], [3, 6, 10]), [1, 1]));
  it('[Test 2] Expected: [2, 1]', () =>
    assert.deepEqual(e.compareTriplets([17, 28, 30], [99, 16, 8]), [2, 1]));
});
