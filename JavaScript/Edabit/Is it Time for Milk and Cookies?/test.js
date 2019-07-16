var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Is it Time for Milk and Cookies? (unit tests)\n', () => {
  it('[Test 1] Expected: true', () =>
    assert.strictEqual(e.timeForMilkAndCookies(new Date(2013, 11, 24)), true));
  it('[Test 2] Expected: true', () =>
    assert.strictEqual(e.timeForMilkAndCookies(new Date(3000, 11, 24)), true));
  it('[Test 3] Expected: false', () =>
    assert.strictEqual(e.timeForMilkAndCookies(new Date(2154, 11, 11)), false));
  it('[Test 4] Expected: false', () =>
    assert.strictEqual(e.timeForMilkAndCookies(new Date(2010, 11, 2)), false));
  it('[Test 5] Expected: false', () =>
    assert.strictEqual(e.timeForMilkAndCookies(new Date(1980, 9, 24)), false));
});
