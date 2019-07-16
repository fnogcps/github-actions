var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Recursion: Factorials (unit tests)\n', () => {
  it('[Test 1] Expected: 120', () => assert.strictEqual(e.factorial(5), 120));
  it('[Test 2] Expected: 6', () => assert.strictEqual(e.factorial(3), 6));
  it('[Test 3] Expected: 1', () => assert.strictEqual(e.factorial(1), 1));
  it('[Test 4] Expected: 1', () => assert.strictEqual(e.factorial(0), 1));
});
