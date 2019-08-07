var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Hitting the Jackpot (unit tests)\n', () => {
  it('[Test 1] Expected: true', () =>
    assert.strictEqual(e.testJackpot(['@', '@', '@', '@']), true));
  it('[Test 2] Expected: true', () =>
    assert.strictEqual(e.testJackpot(['!', '!', '!', '!']), true));
  it('[Test 3] Expected: true', () =>
    assert.strictEqual(e.testJackpot(['abc', 'abc', 'abc', 'abc']), true));
  it('[Test 4] Expected: true', () =>
    assert.strictEqual(
      e.testJackpot(['karaoke', 'karaoke', 'karaoke', 'karaoke']),
      true,
    ));
  it('[Test 5] Expected: true', () =>
    assert.strictEqual(e.testJackpot(['SS', 'SS', 'SS', 'SS']), true));
  it('[Test 6] Expected: false', () =>
    assert.strictEqual(e.testJackpot([':(', ':)', ':|', ':|']), false));
  it('[Test 7] Expected: false', () =>
    assert.strictEqual(e.testJackpot(['&&', '&', '&&&', '&&&&']), false));
  it('[Test 8] Expected: false', () =>
    assert.strictEqual(e.testJackpot(['hee', 'heh', 'heh', 'heh']), false));
  it('[Test 9] Expected: false', () =>
    assert.strictEqual(e.testJackpot(['SS', 'SS', 'SS', 'Ss']), false));
  it('[Test 10] Expected: false', () =>
    assert.strictEqual(e.testJackpot(['SS', 'SS', 'Ss', 'Ss']), false));
});
