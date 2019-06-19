var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Is the Object Empty? (unit tests)\n', () => {
    it('[Test 1] Expected: true', () => 
        assert.equal(e.isEmpty({}), true)
    )
    it('[Test 2] Expected: false', () => 
        assert.equal(e.isEmpty({a: 1}), false)
    )
    it('[Test 3] Expected: false', () => 
        assert.equal(e.isEmpty({z: 2, w: 4, y: 5}), false)
    )
})
