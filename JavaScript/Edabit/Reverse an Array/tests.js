var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Reverse an Array (unit tests)\n', () => {
    it('[Test 1] Expected: [4, 3, 2, 1]', () => 
        assert.deepEqual(e.reverse([1, 2, 3, 4]), [4, 3, 2, 1])
    )
    it('[Test 2] Expected: [7, 6, 5]', () => 
        assert.deepEqual(e.reverse([5, 6, 7]), [7, 6, 5])
    )
    it('[Test 3] Expected: [4, 3, 2, 9, 9]', () => 
        assert.deepEqual(e.reverse([9, 9, 2, 3, 4]), [4, 3, 2, 9, 9])
    )
    it('[Test 4] Expected: [3, 3]', () => 
        assert.deepEqual(e.reverse([3, 3]), [3, 3])
    )
    it('[Test 5] Expected: [-1, -1, -1]', () => 
        assert.deepEqual(e.reverse([-1, -1, -1]), [-1, -1, -1])
    )
    it('[Test 6] Expected: []', () => 
        assert.deepEqual(e.reverse([]), [])
    )
})
