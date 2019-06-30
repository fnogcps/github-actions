var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Product Divisible By Sum? (unit tests)\n', () => {
  it('[Test 1] Expected: false', () =>
    assert.strictEqual(e.divisible([3, 2, 4, 1]), false));
  it('[Test 2] Expected: true', () =>
    assert.strictEqual(e.divisible([4, 4, 4, 4]), true));
  it('[Test 3] Expected: true', () =>
    assert.strictEqual(e.divisible([4, 2, 6]), true));
  it('[Test 4] Expected: false', () =>
    assert.strictEqual(e.divisible([1, 1, 1, 1, 10]), false));
  it('[Test 5] Expected: true', () =>
    assert.strictEqual(e.divisible([10, 5, 10]), true));
  it('[Test 6] Expected: false', () =>
    assert.strictEqual(e.divisible([3, 5, 1]), false));
});
