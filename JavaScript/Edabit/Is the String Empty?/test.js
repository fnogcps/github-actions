var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Is the String Empty? (unit tests)\n', () => {
    it('[Test 1] Expected: true', () => 
        assert.equal(e.isEmpty(""), true)
    )
    it('[Test 2] Expected: false', () => 
        assert.equal(e.isEmpty(" "), false)
    )
    it('[Test 3] Expected: false', () => 
        assert.equal(e.isEmpty("            "), false)
    )
    it('[Test 4] Expected: false', () => 
        assert.equal(e.isEmpty("38215"), false)
    )
    it('[Test 5] Expected: false', () => 
        assert.equal(e.isEmpty("afjabsdf"), false)
    )
    it('[Test 6] Expected: false', () => 
        assert.equal(e.isEmpty("!?@&"), false)
    )
})
