var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('The 3 Programmers Problem (unit tests)\n', () => {
  it('[Test 1] Expected: 8', () =>
    assert.strictEqual(e.programmers(1, 5, 9), 8));
  it('[Test 2] Expected: 10', () =>
    assert.strictEqual(e.programmers(43, 33, 43), 10));
  it('[Test 3] Expected: 74', () =>
    assert.strictEqual(e.programmers(88, 14, 23), 74));
  it('[Test 4] Expected: 41', () =>
    assert.strictEqual(e.programmers(33, 72, 74), 41));
  it('[Test 5] Expected: 493', () =>
    assert.strictEqual(e.programmers(147, 33, 526), 493));
  it('[Test 6] Expected: 223', () =>
    assert.strictEqual(e.programmers(234, 345, 457), 223));
});
