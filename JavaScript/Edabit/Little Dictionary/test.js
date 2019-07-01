var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Little Dictionary (unit tests)\n', () => {
  it("[Test 1] Expected: ['button']", () =>
    assert.deepEqual(e.dictionary('bu', ['button', 'breakfast', 'border']), [
      'button',
    ]));
  it('[Test 2] Expected: []', () =>
    assert.deepEqual(
      e.dictionary('beau', ['pastry', 'delicious', 'name', 'boring']),
      [],
    ));
  it("[Test 3] Expected: ['there']", () =>
    assert.deepEqual(e.dictionary('there', ['there', 'here', 'everywhere']), [
      'there',
    ]));
  it("[Test 4] Expected: ['snow']", () =>
    assert.deepEqual(e.dictionary('sno', ['snow', 'paper', 'ghost']), [
      'snow',
    ]));
  it("[Test 5] Expected: ['marriage', 'married', 'many']", () =>
    assert.deepEqual(
      e.dictionary('ma', ['marriage', 'married', 'many', 'delight']),
      ['marriage', 'married', 'many'],
    ));
  it("[Test 6] Expected: ['notion', 'nominate', 'note']", () =>
    assert.deepEqual(
      e.dictionary('no', ['inferno', 'notion', 'nominate', 'note', 'fairy']),
      ['notion', 'nominate', 'note'],
    ));
  it("[Test 7] Expected: ['creating', 'creature', 'creed']", () =>
    assert.deepEqual(
      e.dictionary('cre', ['creating', 'creature', 'creed', 'increasing']),
      ['creating', 'creature', 'creed'],
    ));
});
