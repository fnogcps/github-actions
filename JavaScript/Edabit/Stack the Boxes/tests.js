var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Stack the Boxes (unit tests)\n', () => {
    it('[Test 1] Expected: 1', () => assert.equal(e.stackBoxes(1), 1))
    it('[Test 2] Expected: 4', () => assert.equal(e.stackBoxes(2), 4))
    it('[Test 3] Expected: 0', () => assert.equal(e.stackBoxes(0), 0))
    it('[Test 4] Expected: 25', () => assert.equal(e.stackBoxes(5), 25))
    it('[Test 5] Expected: 729', () => assert.equal(e.stackBoxes(27), 729))
    it('[Test 6] Expected: 38416', () => assert.equal(e.stackBoxes(196), 38416))
    it('[Test 7] Expected: 262144', () => 
        assert.equal(e.stackBoxes(512), 262144)
    )
})
