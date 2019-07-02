var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Lexicographically First and Last (unit tests)\n', () => {
  it("[Test 1] Expected: ['aeimmrt', 'trmmiea']", () =>
    assert.deepEqual(e.firstAndLast('marmite'), ['aeimmrt', 'trmmiea']));
  it("[Test 2] Expected: ['bcehn', 'nhecb']", () =>
    assert.deepEqual(e.firstAndLast('bench'), ['bcehn', 'nhecb']));
  it("[Test 3] Expected: ['coops', 'spooc']", () =>
    assert.deepEqual(e.firstAndLast('scoop'), ['coops', 'spooc']));
  it("[Test 4] Expected: ['aacfint', 'tnifcaa']", () =>
    assert.deepEqual(e.firstAndLast('fanatic'), ['aacfint', 'tnifcaa']));
});
