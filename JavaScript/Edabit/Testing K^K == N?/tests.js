var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Testing K^K == N? (unit tests)\n', () => {
    it('[Test 1] Expected: true', () => 
        assert.equal(e.kToK(4, 2), true)
    )
    it('[Test 2] Expected: true', () => 
        assert.equal(e.kToK(387420489, 9), true)
    )
    it('[Test 3] Expected: true', () => 
        assert.equal(e.kToK(302875106592253, 13), true)
    )
    it('[Test 4] Expected: false', () => 
        assert.equal(e.kToK(3124, 5), false)
    )
    it('[Test 5] Expected: false', () => 
        assert.equal(e.kToK(17, 3), false)
    )
    it('[Test 6] Expected: false', () => 
        assert.equal(e.kToK(823544, 7), false)
    )
})
