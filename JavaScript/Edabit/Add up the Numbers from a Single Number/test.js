var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Add up the Numbers from a Single Number (unit tests)\n', () => {
  it('[Test 1] Expected: 10', () => assert.strictEqual(e.addUp(4), 10));
  it('[Test 2] Expected: 91', () => assert.strictEqual(e.addUp(13), 91));
  it('[Test 3] Expected: 180300', () =>
    assert.strictEqual(e.addUp(600), 180300));
  it('[Test 4] Expected: 77028', () => assert.strictEqual(e.addUp(392), 77028));
  it('[Test 5] Expected: 1431', () => assert.strictEqual(e.addUp(53), 1431));
  it('[Test 6] Expected: 402753', () =>
    assert.strictEqual(e.addUp(897), 402753));
  it('[Test 7] Expected: 276', () => assert.strictEqual(e.addUp(23), 276));
  it('[Test 8] Expected: 500500', () =>
    assert.strictEqual(e.addUp(1000), 500500));
  it('[Test 9] Expected: 272691', () =>
    assert.strictEqual(e.addUp(738), 272691));
  it('[Test 10] Expected: 5050', () => assert.strictEqual(e.addUp(100), 5050));
  it('[Test 11] Expected: 428275', () =>
    assert.strictEqual(e.addUp(925), 428275));
  it('[Test 12] Expected: 1', () => assert.strictEqual(e.addUp(1), 1));
  it('[Test 13] Expected: 499500', () =>
    assert.strictEqual(e.addUp(999), 499500));
  it('[Test 14] Expected: 15400', () =>
    assert.strictEqual(e.addUp(175), 15400));
  it('[Test 15] Expected: 6216', () => assert.strictEqual(e.addUp(111), 6216));
});
