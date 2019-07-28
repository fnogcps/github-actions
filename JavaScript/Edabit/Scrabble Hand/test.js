var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Scrabble Hand (unit tests)\n', () => {
  it('[Test 1] Expected: 28', () =>
    assert.strictEqual(
      e.maximumScore([
        {tile: 'N', score: 1},
        {tile: 'K', score: 5},
        {tile: 'Z', score: 10},
        {tile: 'X', score: 8},
        {tile: 'D', score: 2},
        {tile: 'A', score: 1},
        {tile: 'E', score: 1},
      ]),
      28,
    ));
  it('[Test 2] Expected: 15', () =>
    assert.strictEqual(
      e.maximumScore([
        {tile: 'B', score: 2},
        {tile: 'V', score: 4},
        {tile: 'F', score: 4},
        {tile: 'U', score: 1},
        {tile: 'D', score: 2},
        {tile: 'O', score: 1},
        {tile: 'U', score: 1},
      ]),
      15,
    ));
  it('[Test 3] Expected: 18', () =>
    assert.strictEqual(
      e.maximumScore([
        {tile: 'M', score: 3},
        {tile: 'Q', score: 10},
        {tile: 'O', score: 1},
        {tile: 'E', score: 1},
        {tile: 'E', score: 1},
        {tile: 'I', score: 1},
        {tile: 'A', score: 1},
      ]),
      18,
    ));
  it('[Test 4] Expected: 7', () =>
    assert.strictEqual(
      e.maximumScore([
        {tile: 'A', score: 1},
        {tile: 'E', score: 1},
        {tile: 'O', score: 1},
        {tile: 'E', score: 1},
        {tile: 'E', score: 1},
        {tile: 'I', score: 1},
        {tile: 'A', score: 1},
      ]),
      7,
    ));
});
