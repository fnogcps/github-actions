var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Transform Upvotes (unit tests)\n', () => {
  it('[Test 1] Expected: [20300, 3800, 7700, 992]', () =>
    assert.deepEqual(e.transformUpvotes('20.3k 3.8k 7.7k 992'), [
      20300,
      3800,
      7700,
      992,
    ]));
  it('[Test 2] Expected: [5500, 8900, 32]', () =>
    assert.deepEqual(e.transformUpvotes('5.5k 8.9k 32'), [5500, 8900, 32]));
  it('[Test 3] Expected: [6800, 13500]', () =>
    assert.deepEqual(e.transformUpvotes('6.8k 13.5k'), [6800, 13500]));
});
