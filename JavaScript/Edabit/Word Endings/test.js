var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('World Endings (unit tests)\n', () => {
  it('[Test 1] Expected: ["cleverly", "meekly", "hurriedly", "nicely"]', () =>
    assert.deepEqual(e.addEnding(['clever', 'meek', 'hurried', 'nice'], 'ly'), [
      'cleverly',
      'meekly',
      'hurriedly',
      'nicely',
    ]));
  it('[Test 2] Expected: ["newer", "panderer", "scooper"]', () =>
    assert.deepEqual(e.addEnding(['new', 'pander', 'scoop'], 'er'), [
      'newer',
      'panderer',
      'scooper',
    ]));
  it('[Test 3] Expected: ["bending", "sharpening", "meaning"]', () =>
    assert.deepEqual(e.addEnding(['bend', 'sharpen', 'mean'], 'ing'), [
      'bending',
      'sharpening',
      'meaning',
    ]));
  it('[Test 4] Expected: ["bendy", "toothy", "minty"]', () =>
    assert.deepEqual(e.addEnding(['bend', 'tooth', 'mint'], 'y'), [
      'bendy',
      'toothy',
      'minty',
    ]));
  it('[Test 5] Expected: ["bendier", "toothier", "mintier"]', () =>
    assert.deepEqual(e.addEnding(['bend', 'tooth', 'mint'], 'ier'), [
      'bendier',
      'toothier',
      'mintier',
    ]));
});
