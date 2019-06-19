var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Reverse Coding Challenge #3 (unit tests)\n', () => {
    it('[Test 1] Expected: [1, 1, 0, 0, 1]', () => 
        assert.deepEqual(
            e.mysteryFunc([5, 7, 8, 2, 1], 2),
            [1, 1, 0, 0, 1]
        )
    )
    it('[Test 2] Expected: [1, 0, 0, 3]', () => 
        assert.deepEqual(
            e.mysteryFunc([9, 8, 16, 47], 4),
            [1, 0, 0, 3]
        )
    )
    it('[Test 3] Expected: [2, 1, 4, 0, 3, 1]', () => 
        assert.deepEqual(
            e.mysteryFunc([17, 11, 99, 55, 23, 1], 5),
            [2, 1, 4, 0, 3, 1]
        )
    )
    it('[Test 4] Expected: [6, 1]', () => 
        assert.deepEqual(
            e.mysteryFunc([6, 1], 7),
            [6, 1]
        )
    )
    it('[Test 5] Expected: [0, 2, 0]', () => 
        assert.deepEqual(
            e.mysteryFunc([3, 2, 9], 3),
            [0, 2, 0]
        )
    )
    it('[Test 6] Expected: [8, 2, 0, 9, 3, 0]', () => 
        assert.deepEqual(
            e.mysteryFunc([48, 22, 0, 19, 33, 100], 10),
            [8, 2, 0, 9, 3, 0]
        )
    )
})
