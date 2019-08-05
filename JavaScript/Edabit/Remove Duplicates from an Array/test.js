var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Remove Duplicates from an Array (unit tests)\n', () => {
  it("[Test 1] Expected: ['John', 'Taylor']", () =>
    assert.deepEqual(e.removeDups(['John', 'Taylor', 'John']), [
      'John',
      'Taylor',
    ]));
  it("[Test 2] Expected: ['John', 'Taylor', 'john']", () =>
    assert.deepEqual(e.removeDups(['John', 'Taylor', 'John', 'john']), [
      'John',
      'Taylor',
      'john',
    ]));
  it("[Test 3] Expected: ['javascript', 'python', 'ruby', 'c']", () =>
    assert.deepEqual(
      e.removeDups([
        'javascript',
        'python',
        'python',
        'ruby',
        'javascript',
        'c',
        'ruby',
      ]),
      ['javascript', 'python', 'ruby', 'c'],
    ));
  it('[Test 4] Expected: [1, 2, 3, 5, 6, 7]', () =>
    assert.deepEqual(
      e.removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5]),
      [1, 2, 3, 5, 6, 7],
    ));
  it("[Test 5] Expected: ['#', '%', '&', '$']", () =>
    assert.deepEqual(e.removeDups(['#', '#', '%', '&', '#', '$', '&']), [
      '#',
      '%',
      '&',
      '$',
    ]));
  it("[Test 6] Expected: [3, 'Apple', 'Orange']", () =>
    assert.deepEqual(e.removeDups([3, 'Apple', 3, 'Orange', 'Apple']), [
      3,
      'Apple',
      'Orange',
    ]));
});
