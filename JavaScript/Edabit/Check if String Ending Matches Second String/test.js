var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Check if String Ending Matches Second String (unit tests)\n', () => {
  it('[Test 1] Expected: true', () =>
    assert.strictEqual(e.checkEnding('abc', 'bc'), true));
  it('[Test 2] Expected: false', () =>
    assert.strictEqual(e.checkEnding('abc', 'd'), false));
  it('[Test 3] Expected: false', () =>
    assert.strictEqual(e.checkEnding('samurai', 'zi'), false));
  it('[Test 4] Expected: true', () =>
    assert.strictEqual(e.checkEnding('feminine', 'nine'), true));
  it('[Test 5] Expected: false', () =>
    assert.strictEqual(e.checkEnding('convention', 'tio'), false));
  it('[Test 6] Expected: false', () =>
    assert.strictEqual(e.checkEnding('cooperative', 'ooper'), false));
  it('[Test 7] Expected: true', () =>
    assert.strictEqual(
      e.checkEnding('extraterrestrial', 'xtraterrestrial'),
      true,
    ));
  it('[Test 8] Expected: true', () =>
    assert.strictEqual(e.checkEnding('access', 'ss'), true));
  it('[Test 9] Expected: false', () =>
    assert.strictEqual(e.checkEnding('motorist', 'is'), false));
  it('[Test 10] Expected: true', () =>
    assert.strictEqual(e.checkEnding('landowner', 'landowner'), true));
});
