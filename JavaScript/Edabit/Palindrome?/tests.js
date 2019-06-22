var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Palindrome? (unit tests)\n', () => {
    it('[Test 1] Expected: true', () => 
        assert.equal(e.checkPalindrome('mom'), true)
    )
    it('[Test 2] Expected: false', () => 
        assert.equal(e.checkPalindrome('scary'), false)
    )
    it('[Test 3] Expected: true', () => 
        assert.equal(e.checkPalindrome('reviver'), true)
    )
    it('[Test 4] Expected: false ', () => 
        assert.equal(e.checkPalindrome('stressed'), false)
    )
    it('[Test 5] Expected: false', () => 
        assert.equal(e.checkPalindrome('good'), false)
    )
    it('[Test 6] Expected: true', () => 
        assert.equal(e.checkPalindrome('refer'), true)
    )
    it('[Test 7] Expected: false', () => 
        assert.equal(e.checkPalindrome('something'), false)
    )
    it('[Test 8] Expected: true', () => 
        assert.equal(e.checkPalindrome('redder'), true)
    )
    it('[Test 9] Expected: true', () => 
        assert.equal(e.checkPalindrome('civic'), true)
    )
})
