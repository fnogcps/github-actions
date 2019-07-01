var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Filter out Strings from a List (unit tests)\n', () => {
  it('[Test 1] Expected: [1, 2, 3, 4]', () =>
    assert.deepEqual(e.filterList([1, 2, 3, 'a', 'b', 4]), [1, 2, 3, 4]));
  it('[Test 2] Expected: [1, 0, -9]', () =>
    assert.deepEqual(e.filterList(['A', 1, '&amp', 0, -9, 'Edabit']), [
      1,
      0,
      -9,
    ]));
});
