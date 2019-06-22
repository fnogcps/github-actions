var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Fix the Error: Vowel Edition (unit tests)\n', () => {
    it('[Test 1] Expected: "bn"', () => 
        assert.equal(e.removeVowels('ben'), 'bn')
    )
    it('[Test 2] Expected: "mny"', () => 
        assert.equal(e.removeVowels('many'), 'mny')
    )
    it('[Test 3] Expected: "cndy"', () => 
        assert.equal(e.removeVowels('candy'), 'cndy')
    )
    it('[Test 4] Expected: "hll"', () => 
        assert.equal(e.removeVowels('hello'), 'hll')
    )
    it('[Test 5] Expected: "ppl"', () => 
        assert.equal(e.removeVowels('apple'), 'ppl')
    )
    it('[Test 6] Expected: "fvr"', () => 
        assert.equal(e.removeVowels('fever'), 'fvr')
    )
})
