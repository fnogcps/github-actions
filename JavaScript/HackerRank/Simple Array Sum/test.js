var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Simple Array Sum (unit tests)\n', () => {
  it('[Test 1] Expected: 31', () =>
    assert.strictEqual(e.simpleArraySum([1, 2, 3, 4, 10, 11]), 31));
  it('[Test 2] Expected: 1100', () =>
    assert.strictEqual(
      e.simpleArraySum([338, 65, 713, 595, 428, 610, 728, 573, 871, 868]),
      5789,
    ));
});
