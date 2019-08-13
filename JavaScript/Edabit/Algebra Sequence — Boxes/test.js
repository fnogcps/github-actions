var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Algebra Sequence — Boxes (unit tests)\n', () => {
  it('[Test 1] Expected: 7', () => assert.strictEqual(e.boxSeq(5), 7));
  it('[Test 2] Expected: 0', () => assert.strictEqual(e.boxSeq(0), 0));
  it('[Test 3] Expected: 6', () => assert.strictEqual(e.boxSeq(6), 6));
  it('[Test 4] Expected: 101', () => assert.strictEqual(e.boxSeq(99), 101));
  it('[Test 5] Expected: 2', () => assert.strictEqual(e.boxSeq(2), 2));
  it('[Test 6] Expected: 3', () => assert.strictEqual(e.boxSeq(1), 3));
});
