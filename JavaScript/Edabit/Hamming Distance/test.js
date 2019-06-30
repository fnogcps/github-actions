var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Hamming Distance (unit tests)\n', () => {
  it('[Test 1] Expected: 5', () =>
    assert.strictEqual(e.hammingDistance('abcde', 'bcdef'), 5));
  it('[Test 2] Expected: 0', () =>
    assert.strictEqual(e.hammingDistance('abcde', 'abcde'), 0));
  it('[Test 3] Expected: 1', () =>
    assert.strictEqual(e.hammingDistance('strong', 'strung'), 1));
});
