var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Slice of Pie (unit tests)\n', () => {
  it('[Test 1] Expected: true', () =>
    assert.strictEqual(e.equalSlices(8, 3, 2), true));
  it('[Test 2] Expected: false', () =>
    assert.strictEqual(e.equalSlices(8, 3, 3), false));
  it('[Test 3] Expected: true', () =>
    assert.strictEqual(e.equalSlices(24, 12, 2), true));
  it('[Test 4] Expected: false', () =>
    assert.strictEqual(e.equalSlices(5, 6, 1), false));
  it('[Test 5] Expected: true', () =>
    assert.strictEqual(e.equalSlices(5, 0, 100), true));
  it('[Test 6] Expected: true', () =>
    assert.strictEqual(e.equalSlices(15, 2, 7), true));
  it('[Test 7] Expected: false', () =>
    assert.strictEqual(e.equalSlices(15, 2, 8), false));
});
