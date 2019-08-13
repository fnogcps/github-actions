var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('No Conditionals? (unit tests)\n', () => {
  it('[Test 1] Expected: 1', () => assert.strictEqual(e.flip(0), 1));
  it('[Test 2] Expected: 0', () => assert.strictEqual(e.flip(1), 0));
});
