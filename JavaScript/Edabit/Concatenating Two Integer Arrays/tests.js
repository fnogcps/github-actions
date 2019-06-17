var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Concatenating Two Integer Arrays (unit tests)\n', () => {
    it('[Test 1] Expected: [1, 3, 5, 2, 6, 8]', () => 
        assert.deepEqual(e.concat([1, 3, 5], [2, 6, 8]), [1, 3, 5, 2, 6, 8])
    )
    it('[Test 2] Expected: [7, 8, 10, 9, 1, 1, 2]', () => 
        assert.deepEqual(
            e.concat([7, 8], [10, 9, 1, 1, 2]), [7, 8, 10, 9, 1, 1, 2])
    )
    it('[Test 3] Expected: [4, 5, 1, 3, 3, 3, 3, 3]', () => 
        assert.deepEqual(
            e.concat([4, 5, 1], [3, 3, 3, 3, 3]), [4, 5, 1, 3, 3, 3, 3, 3])
    )
})
