var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Find the Characters Counterpart Char Code (unit tests)\n', () => {
  it('[Test 1] Expected: 65', () =>
    assert.strictEqual(e.counterpartCharCode('a'), 65));
  it('[Test 2] Expected: 97', () =>
    assert.strictEqual(e.counterpartCharCode('A'), 97));
  it('[Test 3] Expected: 76', () =>
    assert.strictEqual(e.counterpartCharCode('l'), 76));
  it('[Test 4] Expected: 108', () =>
    assert.strictEqual(e.counterpartCharCode('L'), 108));
  it('[Test 5] Expected: 90', () =>
    assert.strictEqual(e.counterpartCharCode('z'), 90));
  it('[Test 6] Expected: 122', () =>
    assert.strictEqual(e.counterpartCharCode('Z'), 122));
  it('[Test 7] Expected: 200', () =>
    assert.strictEqual(e.counterpartCharCode('è'), 200));
  it('[Test 8] Expected: 232', () =>
    assert.strictEqual(e.counterpartCharCode('È'), 232));
  it('[Test 9] Expected: 339', () =>
    assert.strictEqual(e.counterpartCharCode('Œ'), 339));
  it('[Test 10] Expected: 338', () =>
    assert.strictEqual(e.counterpartCharCode('œ'), 338));
  it('[Test 11] Expected: 11365', () =>
    assert.strictEqual(e.counterpartCharCode('Ⱥ'), 11365));
  it('[Test 12] Expected: 570', () =>
    assert.strictEqual(e.counterpartCharCode('ⱥ'), 570));
  it('[Test 13] Expected: 53', () =>
    assert.strictEqual(e.counterpartCharCode('5'), 53));
  it('[Test 14] Expected: 36', () =>
    assert.strictEqual(e.counterpartCharCode('$'), 36));
});
