var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Smaller String Number (unit tests)\n', () => {
  it('[Test 1] Expected: "21"', () =>
    assert.strictEqual(e.smallerNum('21', '44'), '21'));
  it('[Test 2] Expected: "153"', () =>
    assert.strictEqual(e.smallerNum('153', '367'), '153'));
  it('[Test 3] Expected: "16"', () =>
    assert.strictEqual(e.smallerNum('1500', '16'), '16'));
  it('[Test 4] Expected: "23"', () =>
    assert.strictEqual(e.smallerNum('100', '23'), '23'));
  it('[Test 5] Expected: "1"', () =>
    assert.strictEqual(e.smallerNum('1500', '1'), '1'));
  it('[Test 6] Expected: "5"', () =>
    assert.strictEqual(e.smallerNum('5', '5'), '5'));
});
