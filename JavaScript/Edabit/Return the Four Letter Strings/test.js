var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Return the Four Letter Strings (unit tests)\n', () => {
  it('[Test 1] Expected: ["Ryan", "Matt"]', () =>
    assert.deepEqual(e.isFourLetters(['Ryan', 'Kieran', 'Jason', 'Matt']), [
      'Ryan',
      'Matt',
    ]));
  it('[Test 2] Expected: ["Pair"]', () =>
    assert.deepEqual(e.isFourLetters(['Tomato', 'Potato', 'Pair']), ['Pair']));
  it('[Test 3] Expected: ["Bear"]', () =>
    assert.deepEqual(e.isFourLetters(['Kangaroo', 'Bear', 'Fox']), ['Bear']));
  it('[Test 4] Expected: ["Blue", "Pink"]', () =>
    assert.deepEqual(e.isFourLetters(['Red', 'Blue', 'Green', 'Pink']), [
      'Blue',
      'Pink',
    ]));
  it('[Test 5] Expected: []', () =>
    assert.deepEqual(e.isFourLetters(['is', 'up', 'two', 'elephant']), []));
  it('[Test 6] Expected: []', () => assert.deepEqual(e.isFourLetters([]), []));
  it('[Test 7] Expected: "jazz", "quiz", "jump"]', () =>
    assert.deepEqual(e.isFourLetters(['jazz', 'quiz', 'jump']), [
      'jazz',
      'quiz',
      'jump',
    ]));
  it('[Test 8] Expected: []', () =>
    assert.deepEqual(e.isFourLetters(['']), []));
  it('[Test 9] Expected: []', () =>
    assert.deepEqual(e.isFourLetters(['Broccoli', 'Carrot', 'Spinach']), []));
});
