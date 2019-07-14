var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Recursion: Length of a String (unit tests)\n', () => {
  it('[Test 1] Expected: 8', () => assert.strictEqual(e.length('shipment'), 8));
  it('[Test 2] Expected: 5', () => assert.strictEqual(e.length('apple'), 5));
  it('[Test 3] Expected: 4', () => assert.strictEqual(e.length('make'), 4));
  it('[Test 4] Expected: 1', () => assert.strictEqual(e.length('a'), 1));
  it('[Test 5] Expected: 0', () => assert.strictEqual(e.length(''), 0));
});
