var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Is the Number Symmetrical? (unit tests)\n', () => {
  it('[Test 1] Expected: false', () =>
    assert.strictEqual(e.isSymmetrical(23), false));
  it('[Test 2] Expected: false', () =>
    assert.strictEqual(e.isSymmetrical(9562), false));
  it('[Test 3] Expected: false', () =>
    assert.strictEqual(e.isSymmetrical(10019), false));
  it('[Test 4] Expected: true', () =>
    assert.strictEqual(e.isSymmetrical(1), true));
  it('[Test 5] Expected: true', () =>
    assert.strictEqual(e.isSymmetrical(3223), true));
  it('[Test 6] Expected: true', () =>
    assert.strictEqual(e.isSymmetrical(95559), true));
  it('[Test 7] Expected: true', () =>
    assert.strictEqual(e.isSymmetrical(66566), true));
});
