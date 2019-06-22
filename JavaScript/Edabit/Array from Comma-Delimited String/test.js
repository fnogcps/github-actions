var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Array from Comma-Delimited String (unit tests)\n', () => {
    it('[Test 1] Expected ➞ ["watermelon", "raspberry", "orange"]', () => 
        assert.deepEqual(
            e.toArray("watermelon, raspberry, orange"),
            ["watermelon", "raspberry", "orange"]
        )
    )
    it('[Test 2] Expected ➞ ["x1", "x2", "x3", "x4", "x5"]', () => 
        assert.deepEqual(
            e.toArray("x1, x2, x3, x4, x5"), 
            ["x1", "x2", "x3", "x4", "x5"]
        )
    )
    it('[Test 3] Expected ➞ ["a", "b", "c", "d"]', () => 
        assert.deepEqual(
            e.toArray("a, b, c, d"), 
            ["a", "b", "c", "d"]
        )
    )
    it('[Test 4] Expected ➞ []', () => 
        assert.deepEqual(
            e.toArray(""), 
            []
        )
    )
})
