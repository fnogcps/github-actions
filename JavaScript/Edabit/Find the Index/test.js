var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Find the Index (unit tests)\n', () => {
    it('[Test 1] Expected: 3', () => 
        assert.equal(
            e.find_index(
                ['abc', 'ghj', 'banana', 'grape'], 
                'grape'
            ),
        3)
    )
    it('[Test 2] Expected: 5', () => 
        assert.equal(
            e.find_index(
                ['a', 'b', 'c', 'd', 'e', 'f'], 
                'f'
            ),
        5)
    )
    it('[Test 3] Expected: 1', () => 
        assert.equal(
            e.find_index(
                ['hi', 'edabit.com', 'testcase', 'validstring'],
                'edabit.com'
            ),
        1)
    )
})
