var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Remove Null from an Array (unit tests)\n', () => {
    it('[Test 1] Expected ➞ ["a", "b"]', () => 
        assert.deepEqual(e.removeNull(['a', null, 'b', null]), ['a', 'b'])
    )
    it('[Test 2] Expected ➞ []', () => 
        assert.deepEqual(e.removeNull([null, null, null, null, null]), [])
    )
    it('[Test 3] Expected ➞ [7, 8, 9]', () => 
        assert.deepEqual(e.removeNull([7, 8, null, 9]), [7, 8, 9])
    )
    it('[Test 4] Expected ➞ [7, 8, 9]', () => 
        assert.deepEqual(e.removeNull([7, null, 8, null, 9]), [7, 8, 9])
    )
})
