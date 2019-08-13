var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Split Item Codes (unit tests)\n', () => {
  it('[Test 1] Expected: ["TEWA", 8392]', () =>
    assert.deepEqual(e.splitCode('TEWA8392'), ['TEWA', 8392]));
  it('[Test 2] Expected: ["MMU", 778]', () =>
    assert.deepEqual(e.splitCode('MMU778'), ['MMU', 778]));
  it('[Test 3] Expected: ["SRPE", 5532]', () =>
    assert.deepEqual(e.splitCode('SRPE5532'), ['SRPE', 5532]));
  it('[Test 4] Expected: ["SKU", 8977]', () =>
    assert.deepEqual(e.splitCode('SKU8977'), ['SKU', 8977]));
  it('[Test 5] Expected: ["MCI", 5589]', () =>
    assert.deepEqual(e.splitCode('MCI5589'), ['MCI', 5589]));
  it('[Test 6] Expected: ["WIEB", 3921]', () =>
    assert.deepEqual(e.splitCode('WIEB3921'), ['WIEB', 3921]));
});
