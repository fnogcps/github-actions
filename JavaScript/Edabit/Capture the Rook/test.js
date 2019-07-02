var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Capture the Rook (unit tests)\n', () => {
  it('[Test 1] Expected: true', () =>
    assert.strictEqual(e.canCapture(['A8', 'E8']), true));
  it('[Test 2] Expected: false', () =>
    assert.strictEqual(e.canCapture(['A1', 'B2']), false));
  it('[Test 3] Expected: true', () =>
    assert.strictEqual(e.canCapture(['H4', 'H3']), true));
  it('[Test 4] Expected: false', () =>
    assert.strictEqual(e.canCapture(['F5', 'C8']), false));
  it('[Test 5] Expected: true', () =>
    assert.strictEqual(e.canCapture(['G3', 'G7']), true));
  it('[Test 6] Expected: true', () =>
    assert.strictEqual(e.canCapture(['B3', 'B2']), true));
  it('[Test 7] Expected: false', () =>
    assert.strictEqual(e.canCapture(['F5', 'B2']), false));
  it('[Test 8] Expected: false', () =>
    assert.strictEqual(e.canCapture(['H5', 'C8']), false));
});
