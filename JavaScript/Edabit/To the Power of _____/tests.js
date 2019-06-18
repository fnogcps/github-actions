var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('To the Power of _____ (unit tests)\n', () => {
    it('[Test 1] Expected: 3125', () => 
        assert.equal(e.calculateExponent(5,5), 3125)
    )
    it('[Test 2] Expected: 27', () => 
        assert.equal(e.calculateExponent(3,3), 27)
    )
    it('[Test 3] Expected: 10000000000', () => 
        assert.equal(e.calculateExponent(10,10), 10000000000)
    )
})
