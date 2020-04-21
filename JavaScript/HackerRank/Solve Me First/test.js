var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Solve Me First (unit tests)\n', () => {
  it('[Test 1] Expected: 5', () => assert.strictEqual(e.solveMeFirst(2, 3), 5));
  it('[Test 2] Expected: 1100', () =>
    assert.strictEqual(e.solveMeFirst(100, 1000), 1100));
});
