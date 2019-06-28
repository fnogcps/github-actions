var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Compare Strings by Sum of Characters (unit tests)\n', () => {
  it('[Test 1] Expected ➞ true', () =>
    assert.strictEqual(e.comp('AB', 'CD'), true));
  it('[Test 2] Expected ➞ false', () =>
    assert.strictEqual(e.comp('ABC', 'DE'), false));
  it('[Test 3] Expected ➞ false', () =>
    assert.strictEqual(e.comp('hello', 'edabit'), false));
  it('[Test 4] Expected ➞ true', () =>
    assert.strictEqual(e.comp('meow', 'woof'), true));
  it('[Test 5] Expected ➞ false', () =>
    assert.strictEqual(e.comp('jrnvjrnnt', 'cvjknfjvmfvnfjn'), false));
  it('[Test 6] Expected ➞ false', () =>
    assert.strictEqual(e.comp('jkvnjrt', 'krnf'), false));
  it('[Test 7] Expected ➞ true', () =>
    assert.strictEqual(e.comp('Facebook', 'Snapchat'), true));
});
