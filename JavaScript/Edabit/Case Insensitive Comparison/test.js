var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Case Insensitive Comparison (unit tests)\n', () => {
  it('[Test 1] Expected ➞ true', () =>
    assert.strictEqual(e.match('hello', 'hELLo'), true));
  it('[Test 2] Expected ➞ true', () =>
    assert.strictEqual(e.match('hey', 'hey'), true));
  it('[Test 3] Expected ➞ true', () =>
    assert.strictEqual(e.match('venom', 'VENOM'), true));
  it('[Test 4] Expected ➞ true', () =>
    assert.strictEqual(e.match('maGIciAN', 'magician'), true));
  it('[Test 5] Expected ➞ true', () =>
    assert.strictEqual(e.match('stupIFy', 'stupifY'), true));
  it('[Test 6] Expected ➞ false', () =>
    assert.strictEqual(e.match('bald', 'blad'), false));
  it('[Test 7] Expected ➞ false', () =>
    assert.strictEqual(e.match('motive', 'emotive'), false));
  it('[Test 9] Expected ➞ false', () =>
    assert.strictEqual(e.match('mask', 'mAskinG'), false));
  it('[Test 10] Expected ➞ false', () =>
    assert.strictEqual(e.match('skim', 'skimp'), false));
  it('[Test 11] Expected ➞ false', () =>
    assert.strictEqual(e.match('EXCEl', 'exceLs'), false));
});
