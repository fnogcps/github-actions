var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Return the Index of the First Vowel (unit tests)\n', () => {
    it('[Test 1] Expected: 1', () =>
      assert.strictEqual(e.firstVowel("hello"), 1)
    );
    it('[Test 2] Expected: 0', () =>
      assert.strictEqual(e.firstVowel("apple"), 0)
    );
    it('[Test 3] Expected: 3', () =>
      assert.strictEqual(e.firstVowel("string"), 3)
    );
    it('[Test 4] Expected: 3', () =>
      assert.strictEqual(e.firstVowel("STRAWBERRY"), 3)
    );
    it('[Test 5] Expected: 1', () =>
      assert.strictEqual(e.firstVowel("MELON"), 1)
    );
    it('[Test 6] Expected: 1', () =>
      assert.strictEqual(e.firstVowel("piNNEaPLE"), 1)
    );
})
