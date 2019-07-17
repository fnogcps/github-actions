var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('How Many Vowels? (unit tests)\n', () => {
  it('[Test 1] Expected: 5', () =>
    assert.strictEqual(e.countVowels('Celebration'), 5));
  it('[Test 2] Expected: 1', () =>
    assert.strictEqual(e.countVowels('Palm'), 1));
  it('[Test 3] Expected: 4', () =>
    assert.strictEqual(e.countVowels('Prediction'), 4));
  it('[Test 4] Expected: 3', () =>
    assert.strictEqual(e.countVowels('Suite'), 3));
  it('[Test 5] Expected: 3', () =>
    assert.strictEqual(e.countVowels('Quote'), 3));
  it('[Test 6] Expected: 3', () =>
    assert.strictEqual(e.countVowels('Portrait'), 3));
  it('[Test 7] Expected: 2', () =>
    assert.strictEqual(e.countVowels('Steam'), 2));
  it('[Test 8] Expected: 2', () =>
    assert.strictEqual(e.countVowels('Tape'), 2));
  it('[Test 9] Expected: 3', () =>
    assert.strictEqual(e.countVowels('Nightmare'), 3));
  it('[Test 10] Expected: 4', () =>
    assert.strictEqual(e.countVowels('Convention'), 4));
});
