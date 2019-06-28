var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Is the String Empty? (unit tests)\n', () => {
  it('[Test 1] Expected ➞ true', () => assert.strictEqual(e.isEmpty(''), true));
  it('[Test 2] Expected ➞ false', () =>
    assert.strictEqual(e.isEmpty(' '), false));
  it('[Test 3] Expected ➞ false', () =>
    assert.strictEqual(e.isEmpty('            '), false));
  it('[Test 4] Expected ➞ false', () =>
    assert.strictEqual(e.isEmpty('38215'), false));
  it('[Test 5] Expected ➞ false', () =>
    assert.strictEqual(e.isEmpty('afjabsdf'), false));
  it('[Test 6] Expected ➞ false', () =>
    assert.strictEqual(e.isEmpty('!?@&'), false));
});
