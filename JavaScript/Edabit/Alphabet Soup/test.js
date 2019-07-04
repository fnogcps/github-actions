var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Alphabet Soup (unit tests)\n', () => {
  it('[Test 1] Expected: "ehllo"', () =>
    assert.strictEqual(e.AlphabetSoup('hello'), 'ehllo'));
  it('[Test 2] Expected: "abdeit"', () =>
    assert.strictEqual(e.AlphabetSoup('edabit'), 'abdeit'));
  it('[Test 3] Expected: "acehkr"', () =>
    assert.strictEqual(e.AlphabetSoup('hacker'), 'acehkr'));
  it('[Test 4] Expected: "eegk"', () =>
    assert.strictEqual(e.AlphabetSoup('geek'), 'eegk'));
  it('[Test 5] Expected: "aacijprstv"', () =>
    assert.strictEqual(e.AlphabetSoup('javascript'), 'aacijprstv'));
  it('[Test 6] Expected: "bcdeiiilrty"', () =>
    assert.strictEqual(e.AlphabetSoup('credibility'), 'bcdeiiilrty'));
  it('[Test 7] Expected: "aehoopprst"', () =>
    assert.strictEqual(e.AlphabetSoup('apostrophe'), 'aehoopprst'));
  it('[Test 8] Expected: "adeeiimnnortt"', () =>
    assert.strictEqual(e.AlphabetSoup('determination'), 'adeeiimnnortt'));
  it('[Test 9] Expected: "inw"', () =>
    assert.strictEqual(e.AlphabetSoup('win'), 'inw'));
  it('[Test 10] Expected: "ehinsssty"', () =>
    assert.strictEqual(e.AlphabetSoup('synthesis'), 'ehinsssty'));
});
