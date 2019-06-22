var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Return the Remainder from Two Numbers (unit tests)\n', () => {
    it('[Test 1] Expected: 1', () => assert.equal(e.remainder(7,2), 1))
    it('[Test 2] Expected: 3', () => assert.equal(e.remainder(3, 4), 3))
    it('[Test 3] Expected: -9', () => assert.equal(e.remainder(-9, 45), -9))
    it('[Test 4] Expected: 0', () => assert.equal(e.remainder(5, 5), 0))
})
