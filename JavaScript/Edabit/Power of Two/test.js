var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Power of Two (unit tests)\n', () => {
  it('[Test 1] Expected: true', () =>
    assert.strictEqual(e.powerOfTwo(32), true));
  it('[Test 2] Expected: true', () =>
    assert.strictEqual(e.powerOfTwo(1), true));
  it('[Test 3] Expected: false', () =>
    assert.strictEqual(e.powerOfTwo(-7), false));
  it('[Test 4] Expected: false', () =>
    assert.strictEqual(e.powerOfTwo(18), false));
});
