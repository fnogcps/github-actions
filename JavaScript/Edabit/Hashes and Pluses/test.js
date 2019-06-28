var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Hashes and Pluses (unit tests)\n', () => {
  it('[Test 1] Expected: [4, 0]', () =>
    assert.deepEqual(e.hashPlusCount('####'), [4, 0]));
  it('[Test 2] Expected: [1, 0]', () =>
    assert.deepEqual(e.hashPlusCount('#'), [1, 0]));
  it('[Test 3] Expected: [0, 7]', () =>
    assert.deepEqual(e.hashPlusCount('+++++++'), [0, 7]));
  it('[Test 4] Expected: [0, 2]', () =>
    assert.deepEqual(e.hashPlusCount('++'), [0, 2]));
  it('[Test 5] Expected: [2, 2]', () =>
    assert.deepEqual(e.hashPlusCount('#+#+'), [2, 2]));
  it('[Test 6] Expected: [3, 1]', () =>
    assert.deepEqual(e.hashPlusCount('###+'), [3, 1]));
  it('[Test 7] Expected: [3, 3]', () =>
    assert.deepEqual(e.hashPlusCount('##+++#'), [3, 3]));
  it('[Test 8] Expected: [4, 6]', () =>
    assert.deepEqual(e.hashPlusCount('#+++#+#++#'), [4, 6]));
  it('[Test 9] Expected: [0, 0]', () =>
    assert.deepEqual(e.hashPlusCount(''), [0, 0]));
});
