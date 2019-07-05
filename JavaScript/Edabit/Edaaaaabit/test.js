var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Edaaaaabit (unit tests)\n', () => {
  it('[Test 1] Expected: "Edaaaaabit"', () =>
    assert.strictEqual(e.howManyTimes(5), 'Edaaaaabit'));
  it('[Test 2] Expected: "Edaaaaaaaaaaaaaaabit"', () =>
    assert.strictEqual(e.howManyTimes(15), 'Edaaaaaaaaaaaaaaabit'));
  it('[Test 3] Expected: "Edaaaaaaaaaabit"', () =>
    assert.strictEqual(e.howManyTimes(10), 'Edaaaaaaaaaabit'));
  it('[Test 4] Expected: "Edaaaaaaaaaaaaaaaaaaaaaaabit"', () =>
    assert.strictEqual(e.howManyTimes(23), 'Edaaaaaaaaaaaaaaaaaaaaaaabit'));
  it('[Test 5] Expected: "Edabit"', () =>
    assert.strictEqual(e.howManyTimes(1), 'Edabit'));
});
