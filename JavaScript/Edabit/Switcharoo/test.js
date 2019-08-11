var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Switcharoo (unit tests)\n', () => {
  it('[Test 1] Expected: ".at, dog, and mouseC"', () =>
    assert.strictEqual(
      e.flipEndChars('Cat, dog, and mouse.'),
      '.at, dog, and mouseC',
    ));
  it('[Test 2] Expected: "anna, BananA"', () =>
    assert.strictEqual(e.flipEndChars('Anna, Banana'), 'anna, BananA'));
  it('[Test 3] Expected: "]["', () =>
    assert.strictEqual(e.flipEndChars('[]'), ']['));
  it('[Test 4] Expected: "Incompatible."', () =>
    assert.strictEqual(e.flipEndChars(''), 'Incompatible.'));
  it('[Test 5] Expected: "Incompatible."', () =>
    assert.strictEqual(e.flipEndChars([1, 2, 3]), 'Incompatible.'));
  it('[Test 6] Expected: "Two\'s a pair."', () =>
    assert.strictEqual(e.flipEndChars('dfdkf49824fdfdfjhd'), "Two's a pair."));
  it('[Test 7] Expected: "Two\'s a pair."', () =>
    assert.strictEqual(e.flipEndChars('#343473847#'), "Two's a pair."));
});
