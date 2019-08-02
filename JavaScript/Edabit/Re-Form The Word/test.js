var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Re-Form The Word (unit tests)\n', () => {
  it('[Test 1] Expected: "Magazine"', () =>
    assert.strictEqual(e.getWord('maga', 'zine'), 'Magazine'));
  it('[Test 2] Expected: "Reliable"', () =>
    assert.strictEqual(e.getWord('reli', 'able'), 'Reliable'));
  it('[Test 3] Expected: "Implicit"', () =>
    assert.strictEqual(e.getWord('impl', 'icit'), 'Implicit'));
  it('[Test 4] Expected: "Document"', () =>
    assert.strictEqual(e.getWord('docu', 'ment'), 'Document'));
  it('[Test 5] Expected: "Opposite"', () =>
    assert.strictEqual(e.getWord('oppo', 'site'), 'Opposite'));
  it('[Test 6] Expected: "Official"', () =>
    assert.strictEqual(e.getWord('offi', 'cial'), 'Official'));
  it('[Test 7] Expected: "Disagree"', () =>
    assert.strictEqual(e.getWord('disa', 'gree'), 'Disagree'));
  it('[Test 8] Expected: "Accident"', () =>
    assert.strictEqual(e.getWord('acci', 'dent'), 'Accident'));
  it('[Test 9] Expected: "Omission"', () =>
    assert.strictEqual(e.getWord('omis', 'sion'), 'Omission'));
  it('[Test 10] Expected: "Vigorous"', () =>
    assert.strictEqual(e.getWord('vigo', 'rous'), 'Vigorous'));
  it('[Test 11] Expected: "Predator"', () =>
    assert.strictEqual(e.getWord('pred', 'ator'), 'Predator'));
  it('[Test 12] Expected: "Progress"', () =>
    assert.strictEqual(e.getWord('prog', 'ress'), 'Progress'));
  it('[Test 13] Expected: "Invasion"', () =>
    assert.strictEqual(e.getWord('inva', 'sion'), 'Invasion'));
  it('[Test 14] Expected: "Farewell"', () =>
    assert.strictEqual(e.getWord('fare', 'well'), 'Farewell'));
  it('[Test 15] Expected: "Majority"', () =>
    assert.strictEqual(e.getWord('majo', 'rity'), 'Majority'));
  it('[Test 16] Expected: "Personal"', () =>
    assert.strictEqual(e.getWord('pers', 'onal'), 'Personal'));
  it('[Test 17] Expected: "Sequence"', () =>
    assert.strictEqual(e.getWord('sequ', 'ence'), 'Sequence'));
  it('[Test 18] Expected: "Governor"', () =>
    assert.strictEqual(e.getWord('gove', 'rnor'), 'Governor'));
  it('[Test 19] Expected: "Ignorant"', () =>
    assert.strictEqual(e.getWord('igno', 'rant'), 'Ignorant'));
  it('[Test 20] Expected: "Finished"', () =>
    assert.strictEqual(e.getWord('fini', 'shed'), 'Finished'));
});
