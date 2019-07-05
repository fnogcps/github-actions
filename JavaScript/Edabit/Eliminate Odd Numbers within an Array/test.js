var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Eliminate Odd Numbers within an Array (unit tests)\n', () => {
  it('[Test 1] Expected: [2, 4, 6, 8]', () =>
    assert.deepEqual(e.noOdds([1, 2, 3, 4, 5, 6, 7, 8]), [2, 4, 6, 8]));
  it('[Test 2] Expected: [6]', () =>
    assert.deepEqual(e.noOdds([43, 65, 23, 89, 53, 9, 6]), [6]));
  it('[Test 3] Expected: [718, 644, 380, 440]', () =>
    assert.deepEqual(e.noOdds([718, 991, 449, 644, 380, 440]), [
      718,
      644,
      380,
      440,
    ]));
  it('[Test 4] Expected: [148, 6, 16]', () =>
    assert.deepEqual(e.noOdds([148, 6, 16, 85]), [148, 6, 16]));
  it('[Test 5] Expected: []', () =>
    assert.deepEqual(e.noOdds([9, 49, 23]), []));
  it('[Test 6] Expected: [34, 32, 40]', () =>
    assert.deepEqual(e.noOdds([34, 43, 32, 49, 40]), [34, 32, 40]));
  it('[Test 7] Expected: [1232, 1990, 1284, 1958]', () =>
    assert.deepEqual(e.noOdds([1232, 1990, 1284, 1391, 1958]), [
      1232,
      1990,
      1284,
      1958,
    ]));
  it('[Test 8] Expected: [2766, 2916]', () =>
    assert.deepEqual(e.noOdds([2766, 2651, 2373, 2916, 2397, 2539]), [
      2766,
      2916,
    ]));
  it('[Test 9] Expected: [52, 62]', () =>
    assert.deepEqual(e.noOdds([53, 65, 52, 62, 59]), [52, 62]));
  it('[Test 10] Expected: [156, 14, 166, 246]', () =>
    assert.deepEqual(e.noOdds([393, 156, 14, 166, 129, 246]), [
      156,
      14,
      166,
      246,
    ]));
});
