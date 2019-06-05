var chai = require('chai')
var assert = chai.assert

const Test = require('./solution.js')

describe('The Farm Problem - Unit Testing', () => {
    it('[Test 1] Expected: 50', () => assert.equal(Test.animals(5, 2, 8), 50))
    it('[Test 2] Expected: 50', () => assert.equal(Test.animals(3, 4, 7), 50))
    it('[Test 3] Expected: 22', () => assert.equal(Test.animals(1, 2, 3), 22))
    it('[Test 4] Expected: 34', () => assert.equal(Test.animals(3, 5, 2), 34))
})
