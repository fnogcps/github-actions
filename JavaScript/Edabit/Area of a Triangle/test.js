var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Area of a Triangle (unit tests)\n', () => {
    it('[Test 1] Expected: 3', () => assert.equal(e.triArea(3, 2), 3))
    it('[Test 2] Expected: 10', () => assert.equal(e.triArea(5, 4), 10))  
    it('[Test 3] Expected: 50', () => assert.equal(e.triArea(10, 10), 50))
    it('[Test 4] Expected: 0', () => assert.equal(e.triArea(0, 60), 0))
    it('[Test 5] Expected: 66', () => assert.equal(e.triArea(12, 11), 66))
})
