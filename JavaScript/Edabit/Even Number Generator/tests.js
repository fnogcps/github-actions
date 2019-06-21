var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Even Number Generator (unit tests)\n', () => {
    it('[Test 1] Expected: [2, 4]', () => 
        assert.deepEqual(e.findEvenNums(4), [2, 4])
    )
    it('[Test 2] Expected: [2, 4 ,6, 8]', () => 
        assert.deepEqual(e.findEvenNums(8), [2, 4 ,6, 8])
    )
    it('[Test 3] Expected: [2]', () => 
        assert.deepEqual(e.findEvenNums(2), [2])
    )
    it('[Test 4] Expected: []', () => 
        assert.deepEqual(e.findEvenNums(1), [])
    )
    it('[Test 5] Expected: [2, 4 ,6, 8]', () => 
        assert.deepEqual(e.findEvenNums(9), [2, 4 ,6, 8])
    )
    it('[Test 6] Expected: [2, 4 ,6, 8, 10]', () => 
        assert.deepEqual(e.findEvenNums(11), [2, 4 ,6, 8, 10])
    )

})
