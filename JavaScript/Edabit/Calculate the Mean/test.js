var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Calculate the Mean (unit tests)\n', () => {
  it('[Test 1] Expected: 2.55', () =>
    assert.strictEqual(e.mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]), 2.55));
  it('[Test 2] Expected: 2849.25', () =>
    assert.strictEqual(e.mean([324, 543, 654, 9876]), 2849.25));
  it('[Test 3] Expected: 0.00', () =>
    assert.strictEqual(e.mean([0, 0, 0, 0]), 0.0));
  it('[Test 4] Expected: 44.00', () =>
    assert.strictEqual(e.mean([30, 40, 20, 100, 30]), 44.0));
  it('[Test 5] Expected: 0.75', () =>
    assert.strictEqual(e.mean([1, 1, 1, 0]), 0.75));
  it('[Test 6] Expected: 0.80', () =>
    assert.strictEqual(e.mean([1, 1, 0, 1, 2, 1, 1, 1, 0, 0]), 0.8));
  it('[Test 7] Expected: 10000.00', () =>
    assert.strictEqual(e.mean([10000]), 10000.0));
});
