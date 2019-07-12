var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('e.repeat the Same Item Multiple Times (unit tests)\n', () => {
  it('[Test 1] Expected: ["edabit", "edabit", "edabit"]', () =>
    assert.deepEqual(e.repeat('edabit', 3), ['edabit', 'edabit', 'edabit']));
  it('[Test 2] Expected: [13, 13, 13, 13, 13]', () =>
    assert.deepEqual(e.repeat(13, 5), [13, 13, 13, 13, 13]));
  it('[Test 3] Expected: ["7", "7"]', () =>
    assert.deepEqual(e.repeat('7', 2), ['7', '7']));
  it('[Test 4] Expected: ["2 0 1 8"]', () =>
    assert.deepEqual(e.repeat('2 0 1 8', 1), ['2 0 1 8']));
  it(
    '[Test 5] Expected: ["tom dick and harry", "tom dick and harry",' +
      '\n                          "tom dick and harry", "tom dick and harry",' +
      '\n                          "tom dick and harry", "tom dick and harry"]',
    () =>
      assert.deepEqual(e.repeat('tom dick and harry', 6), [
        'tom dick and harry',
        'tom dick and harry',
        'tom dick and harry',
        'tom dick and harry',
        'tom dick and harry',
        'tom dick and harry',
      ]),
  );
  it('[Test 6] Expected: [0]', () => assert.deepEqual(e.repeat(0, 1), [0]));
  it('[Test 7] Expected: []', () => assert.deepEqual(e.repeat(0, 0), []));
  it('[Test 8] Expected: []', () => assert.deepEqual(e.repeat('z', 0), []));
});
