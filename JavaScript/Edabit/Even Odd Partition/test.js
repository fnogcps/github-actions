var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Even Odd Partition (unit tests)\n', () => {
    it('[Test 1] Expected: [[8, 2, 0], [5, 9]]', () => 
        assert.deepEqual(
            e.evenOddPartition([5, 8, 9, 2, 0]),
            ([[8, 2, 0], [5, 9]])
        )

    )
    it('[Test 2] Expected: [[0, 0, 0], [1, 1, 1]]', () => 
        assert.deepEqual(
            e.evenOddPartition([1, 0, 1, 0, 1, 0]),
            ([[0, 0, 0], [1, 1, 1]])
        )

    )
    it('[Test 3] Expected: [[8, 8, 4, 2], []]', () => 
        assert.deepEqual(
            e.evenOddPartition([8, 8, 4, 2]),
            ([[8, 8, 4, 2], []])
        )

    )
    it('[Test 4] Expected: [[], [1, 3, 5, 7, 9]]', () => 
        assert.deepEqual(
            e.evenOddPartition([1, 3, 5, 7, 9]),
            ([[], [1, 3, 5, 7, 9]])
        )
    )
    it('[Test 5] Expected: [[], []]', () => 
        assert.deepEqual(
            e.evenOddPartition([]), 
            ([[], []])
        )
    )
})
