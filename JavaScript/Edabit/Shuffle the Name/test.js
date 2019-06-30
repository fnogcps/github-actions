var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Shuffle the Name (unit tests)\n', () => {
  it('[Test 1] Expected: "Trump Donald"', () =>
    assert.strictEqual(e.nameShuffle('Donald Trump'), 'Trump Donald'));
  it('[Test 2] Expected: "O\'Donnel Rosie"', () =>
    assert.strictEqual(e.nameShuffle("Rosie O'Donnel"), "O'Donnel Rosie"));
  it('[Test 3] Expected: "Butts Seymour"', () =>
    assert.strictEqual(e.nameShuffle('Seymour Butts'), 'Butts Seymour'));
  it('[Test 4] Expected: "Greene Ebony"', () =>
    assert.strictEqual(e.nameShuffle('Ebony Greene'), 'Greene Ebony'));
  it('[Test 5] Expected: "Kennedy Ken"', () =>
    assert.strictEqual(e.nameShuffle('Ken Kennedy'), 'Kennedy Ken'));
  it('[Test 6] Expected: "Gonzalez Allison"', () =>
    assert.strictEqual(e.nameShuffle('Allison Gonzalez'), 'Gonzalez Allison'));
  it('[Test 7] Expected: "Frazier Albert"', () =>
    assert.strictEqual(e.nameShuffle('Albert Frazier'), 'Frazier Albert'));
  it('[Test 8] Expected: "Hopkins Eloise"', () =>
    assert.strictEqual(e.nameShuffle('Eloise Hopkins'), 'Hopkins Eloise'));
  it('[Test 9] Expected: "Welch Donnie"', () =>
    assert.strictEqual(e.nameShuffle('Donnie Welch'), 'Welch Donnie'));
  it('[Test 10] Expected: "Thomas Vernon"', () =>
    assert.strictEqual(e.nameShuffle('Vernon Thomas'), 'Thomas Vernon'));
});
