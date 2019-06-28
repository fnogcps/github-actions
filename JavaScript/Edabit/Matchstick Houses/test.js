var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Matchstick Houses (unit tests)\n', () => {
  it('[Test 1] Expected: 6', () => assert.strictEqual(e.matchHouses(1), 6));
  it('[Test 2] Expected: 0', () => assert.strictEqual(e.matchHouses(0), 0));
  it('[Test 3] Expected: 86', () => assert.strictEqual(e.matchHouses(17), 86));
  it('[Test 4] Expected: 181', () =>
    assert.strictEqual(e.matchHouses(36), 181));
  it('[Test 5] Expected: 76', () => assert.strictEqual(e.matchHouses(15), 76));
  it('[Test 6] Expected: 496', () =>
    assert.strictEqual(e.matchHouses(99), 496));
  it('[Test 7] Expected: 16', () => assert.strictEqual(e.matchHouses(3), 16));
  it('[Test 8] Expected: 436', () =>
    assert.strictEqual(e.matchHouses(87), 436));
});
