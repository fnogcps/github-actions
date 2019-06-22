var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Odd Up, Even Down (unit tests)\n', () => {
    it('[Test 1] Expected ➞ [2, 1, 4, 3, 6]', () => 
        assert.deepEqual(e.transform([1, 2, 3, 4, 5]), [2, 1, 4, 3, 6])
    )
    it('[Test 2] Expected ➞ [4, 4, 3, 4]', () => 
        assert.deepEqual(e.transform([3, 3, 4, 3]), [4, 4, 3, 4])
    )
    it('[Test 3] Expected ➞ [1, 1, -1, 7, 9]', () => 
        assert.deepEqual(e.transform([2, 2, 0, 8, 10]), [1, 1, -1, 7, 9])
    )
    it('[Test 4] Expected ➞ [10, 14, 16, 6, 1, 12]', () => 
        assert.deepEqual(
            e.transform([9, 13, 15, 5, 2, 11]),
            [10, 14, 16, 6, 1, 12]
        )
    )
})
