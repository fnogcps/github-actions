var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Numbers to Arrays and Vice Versa (unit tests)\n', () => {
  it('[Test 1] Expected: [2, 3, 5]', () =>
    assert.deepEqual(e.toArray(235), [2, 3, 5]));
  it('[Test 2] Expected: [1, 9]', () =>
    assert.deepEqual(e.toArray(19), [1, 9]));
  it('[Test 3] Expected: [0] ', () => assert.deepEqual(e.toArray(0), [0]));
  it('[Test 4] Expected: 235', () =>
    assert.strictEqual(e.toNumber([2, 3, 5]), 235));
  it('[Test 5] Expected: 19', () => assert.strictEqual(e.toNumber([1, 9]), 19));
  it('[Test 6] Expected: 0', () => assert.strictEqual(e.toNumber([0]), 0));
});
