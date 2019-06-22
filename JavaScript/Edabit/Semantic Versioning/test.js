var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Semantic Versioning (unit tests)\n', () => {
    it('[Test 1] Expected: 6', () => 
        assert.equal(e.retrieveMajor("6.1.9"), "6")
    )
    it('[Test 2] Expected: 1', () => 
        assert.equal(e.retrieveMinor("6.1.9"), "1")
    )
    it('[Test 3] Expected: 9', () => 
        assert.equal(e.retrievePatch("6.1.9"), "9")
    )
    it('[Test 4] Expected: 2', () => 
        assert.equal(e.retrieveMajor("2.1.0"), "2")
    )
    it('[Test 5] Expected: 1', () => 
        assert.equal(e.retrieveMinor("2.1.0"), "1")
    )
    it('[Test 6] Expected: 0', () => 
        assert.equal(e.retrievePatch("2.1.0"), "0")
    )
    it('[Test 7] Expected: 5', () => 
        assert.equal(e.retrieveMajor("5.12.13"), "5")
    )
    it('[Test 8] Expected: 12', () => 
        assert.equal(e.retrieveMinor("5.12.13"), "12")
    )
    it('[Test 9] Expected: 13', () => 
        assert.equal(e.retrievePatch("5.12.13"), "13")
    )
})
