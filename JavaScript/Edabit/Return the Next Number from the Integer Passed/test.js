var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Return the Next Number from the Integer Passed (unit tests)\n', () => {
  it('[Test 1] Expected: 3', () => assert.strictEqual(e.addition(2), 3));
  it('[Test 2] Expected: -8', () => assert.strictEqual(e.addition(-9), -8));
  it('[Test 3] Expected: 1', () => assert.strictEqual(e.addition(0), 1));
});
