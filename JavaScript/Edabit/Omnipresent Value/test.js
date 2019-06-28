var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Omnipresent Value (unit tests)\n', () => {
  it('[Test 1] Expected: true', () =>
    assert.strictEqual(
      e.isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1),
      true,
    ));
  it('[Test 2] Expected: false', () =>
    assert.strictEqual(
      e.isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6),
      false,
    ));
  it('[Test 3] Expected: true', () =>
    assert.strictEqual(e.isOmnipresent([[5], [5], [5], [6, 5]], 5), true));
  it('[Test 4] Expected: false', () =>
    assert.strictEqual(e.isOmnipresent([[5], [5], [5], [6, 5]], 6), false));
  it('[Test 5] Expected: true', () =>
    assert.strictEqual(
      e.isOmnipresent([[5, 1], [5, 1], [5, 1], [6, 5, 1]], 1),
      true,
    ));
});
