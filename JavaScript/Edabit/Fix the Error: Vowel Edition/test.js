var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Fix the Error: Vowel Edition (unit tests)\n', () => {
    it('[Test 1] Expected ➞ "bn"', () => 
        assert.strictEqual(e.removeVowels('ben'), 'bn')
    )
    it('[Test 2] Expected ➞ "mny"', () => 
        assert.strictEqual(e.removeVowels('many'), 'mny')
    )
    it('[Test 3] Expected ➞ "cndy"', () => 
        assert.strictEqual(e.removeVowels('candy'), 'cndy')
    )
    it('[Test 4] Expected ➞ "hll"', () => 
        assert.strictEqual(e.removeVowels('hello'), 'hll')
    )
    it('[Test 5] Expected ➞ "ppl"', () => 
        assert.strictEqual(e.removeVowels('apple'), 'ppl')
    )
    it('[Test 6] Expected ➞ "fvr"', () => 
        assert.strictEqual(e.removeVowels('fever'), 'fvr')
    )
})
