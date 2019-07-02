var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Strange Pair (unit tests)\n', () => {
  it('[Test 1] Expected: true', () =>
    assert.strictEqual(e.isStrangePair('ratio', 'orator'), true));
  it('[Test 2] Expected: true', () =>
    assert.strictEqual(e.isStrangePair('sparkling', 'groups'), true));
  it('[Test 3] Expected: true', () =>
    assert.strictEqual(e.isStrangePair('mentee', 'eminem'), true));
  it('[Test 4] Expected: true', () =>
    assert.strictEqual(e.isStrangePair('yahtzee', 'easy'), true));
  it('[Test 5] Expected: false', () =>
    assert.strictEqual(e.isStrangePair('bush', 'hubris'), false));
  it('[Test 6] Expected: false', () =>
    assert.strictEqual(e.isStrangePair('edit', 'cheese'), false));
  it('[Test 7] Expected: false', () =>
    assert.strictEqual(e.isStrangePair('false', 'true'), false));
  it('[Test 8] Expected: false', () =>
    assert.strictEqual(e.isStrangePair('cupid', 'dionysus'), false));
  it('[Test 9] Expected: false', () =>
    assert.strictEqual(e.isStrangePair('futile', 'elephant'), false));
  it('[Test 10] Expected: true', () =>
    assert.strictEqual(e.isStrangePair('', ''), true));
  it('[Test 11] Expected: false', () =>
    assert.strictEqual(e.isStrangePair('', 'abc'), false));
  it('[Test 12] Expected: true', () =>
    assert.strictEqual(e.isStrangePair('a', 'a'), true));
  it('[Test 13] Expected: false', () =>
    assert.strictEqual(e.isStrangePair('a', 'b'), false));
  it('[Test 14] Expected: true', () =>
    assert.strictEqual(e.isStrangePair('&', '&'), true));
  it('[Test 15] Expected: true', () =>
    assert.strictEqual(e.isStrangePair('&!', '!&'), true));
  it('[Test 16] Expected: true', () =>
    assert.strictEqual(e.isStrangePair('5556', '65'), true));
});
