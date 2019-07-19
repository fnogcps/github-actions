var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Sort an Array by String Length (unit tests)\n', () => {
  it('[Test 1] Expected: ["Apple", "Google", "Microsoft"]', () =>
    assert.deepEqual(e.sortByLength(['Google', 'Apple', 'Microsoft']), [
      'Apple',
      'Google',
      'Microsoft',
    ]));
  it('[Test 2] Expected: ["Raphael", "Leonardo", "Donatello", "Michelangelo"]', () =>
    assert.deepEqual(
      e.sortByLength(['Leonardo', 'Michelangelo', 'Raphael', 'Donatello']),
      ['Raphael', 'Leonardo', 'Donatello', 'Michelangelo'],
    ));
  it('[Test 3] Expected: ["Jung", "Turing", "Einstein"]', () =>
    assert.deepEqual(e.sortByLength(['Turing', 'Einstein', 'Jung']), [
      'Jung',
      'Turing',
      'Einstein',
    ]));
  it('[Test 4] Expected: ["Hoth", "Yavin", "Tatooine", "Dantooine"]', () =>
    assert.deepEqual(
      e.sortByLength(['Tatooine', 'Hoth', 'Yavin', 'Dantooine']),
      ['Hoth', 'Yavin', 'Tatooine', 'Dantooine'],
    ));
  it('[Test 5] Expected: ["Link", "Mario", "Bowser"]', () =>
    assert.deepEqual(e.sortByLength(['Mario', 'Bowser', 'Link']), [
      'Link',
      'Mario',
      'Bowser',
    ]));
});
