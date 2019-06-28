var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Largest Swap (unit tests)\n', () => {
  it('[Test 1] Expected: false', () =>
    assert.strictEqual(e.largestSwap(27), false));
  it('[Test 2] Expected: true', () =>
    assert.strictEqual(e.largestSwap(43), true));
  it('[Test 3] Expected: false', () =>
    assert.strictEqual(e.largestSwap(14), false));
  it('[Test 4] Expected: true', () =>
    assert.strictEqual(e.largestSwap(53), true));
  it('[Test 5] Expected: true', () =>
    assert.strictEqual(e.largestSwap(99), true));
});
