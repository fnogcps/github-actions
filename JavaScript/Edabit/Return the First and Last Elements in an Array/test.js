var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Return the First and Last Elements in an Array (unit tests)\n', () => {
  it('[Test 1] Expected ➞ [5, 25]', () =>
    assert.deepEqual(e.firstLast([5, 10, 15, 20, 25]), [5, 25]));
  it('[Test 2] Expected ➞ ["edabit", true]', () =>
    assert.deepEqual(e.firstLast(['edabit', 13, null, false, true]), [
      'edabit',
      true,
    ]));
  it('[Test 3] Expected ➞ [undefined, null]', () =>
    assert.deepEqual(e.firstLast([undefined, 4, '6', 'hello', null]), [
      undefined,
      null,
    ]));
  it('[Test 4] Expected ➞ ["hello", "com"]', () =>
    assert.deepEqual(e.firstLast(['hello', 'edabit', 'dot', 'com']), [
      'hello',
      'com',
    ]));
  it('[Test 5] Expected ➞ [3, 1]', () =>
    assert.deepEqual(e.firstLast([3, 2, 1]), [3, 1]));
  it('[Test 6] Expected ➞ ["one", "two"]', () =>
    assert.deepEqual(e.firstLast(['one', 'two']), ['one', 'two']));
  it('[Test 7] Expected ➞ [false, false]', () =>
    assert.deepEqual(
      e.firstLast([false, false, true, false, false, true, false]),
      [false, false],
    ));
});
