var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Recursion: Sum (unit tests)\n', () => {
  it('[Test 1] Expected: 1', () => assert.strictEqual(e.sum(1), 1));
  it('[Test 2] Expected: 15', () => assert.strictEqual(e.sum(5), 15));
  it('[Test 3] Expected: 28', () => assert.strictEqual(e.sum(7), 28));
  it('[Test 4] Expected: 55', () => assert.strictEqual(e.sum(10), 55));
  it('[Test 5] Expected: 78', () => assert.strictEqual(e.sum(12), 78));
  it('[Test 6] Expected: 120', () => assert.strictEqual(e.sum(15), 120));
  it('[Test 7] Expected: 210', () => assert.strictEqual(e.sum(20), 210));
  it('[Test 8] Expected: 5050', () => assert.strictEqual(e.sum(100), 5050));
});
