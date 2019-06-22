var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Check if a String Contains only Identical Characters (unit tests)\n', 
() => {
    it('[Test 1] Expected: true', () => 
        assert.equal(e.isIdentical("kkkkk"), true)
    )
    it('[Test 2] Expected: false', () => 
        assert.equal(e.isIdentical("ckkkk"), false)
    )
    it('[Test 3] Expected: false', () => 
        assert.equal(e.isIdentical("kkkkck"), false)
    )
    it('[Test 4] Expected: false', () => 
        assert.equal(e.isIdentical("aabc"), false)
    )
    it('[Test 5] Expected: true', () => 
        assert.equal(e.isIdentical("ccc"), true)
    )
    it('[Test 6] Expected: false', () => 
        assert.equal(e.isIdentical("aabbbb"), false)
    )
    it('[Test 7] Expected: true', () => 
        assert.equal(e.isIdentical("bbbbbb"), true)
    )
})
