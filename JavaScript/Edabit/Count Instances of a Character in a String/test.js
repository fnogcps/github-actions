var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Count Instances of a Character in a String (unit tests)\n', () => {
  it('[Test 1] Expected: 1', () =>
    assert.strictEqual(e.charCount('a', 'edabit'), 1));
  it('[Test 2] Expected: 4', () =>
    assert.strictEqual(e.charCount('b', 'big fat bubble'), 4));
  it('[Test 3] Expected: 1', () =>
    assert.strictEqual(e.charCount('c', 'Chamber of secrets'), 1));
  it('[Test 4] Expected: 7', () =>
    assert.strictEqual(
      e.charCount(
        'f',
        'frank and his friends have offered five foxes for sale',
      ),
      7,
    ));
  it('[Test 5] Expected: 0', () =>
    assert.strictEqual(e.charCount('x', 'edabit'), 0));
  it('[Test 6] Expected: 6', () =>
    assert.strictEqual(
      e.charCount('a', 'Adam and Eve bit the apple and found a snake'),
      6,
    ));
  it('[Test 7] Expected: 25', () =>
    assert.strictEqual(e.charCount('s', 'sssssssssssssssssssssssss'), 25));
  it('[Test 8] Expected: 2', () =>
    assert.strictEqual(e.charCount('7', '10795426697'), 2));
});
