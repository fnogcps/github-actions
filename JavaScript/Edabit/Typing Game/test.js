var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Typing Game (unit tests)\n', () => {
  it('[Test 1] Expected: [1, 1, -1]', () =>
    assert.deepEqual(
      e.correctStream(['it', 'is', 'find'], ['it', 'is', 'fine']),
      [1, 1, -1],
    ));
  it('[Test 2] Expected: [1, -1, 1, 1, 1]', () =>
    assert.deepEqual(
      e.correctStream(
        ['april', 'showrs', 'bring', 'may', 'flowers'],
        ['april', 'showers', 'bring', 'may', 'flowers'],
      ),
      [1, -1, 1, 1, 1],
    ));
  it('[Test 3] Expected: [1, -1, 1]', () =>
    assert.deepEqual(
      e.correctStream(
        ['weird', 'indicr', 'moment'],
        ['weird', 'indict', 'moment'],
      ),
      [1, -1, 1],
    ));
  it('[Test 4] Expected: [1, 1, 1]', () =>
    assert.deepEqual(
      e.correctStream(['starry', 'wind', 'skies'], ['starry', 'wind', 'skies']),
      [1, 1, 1],
    ));
});
