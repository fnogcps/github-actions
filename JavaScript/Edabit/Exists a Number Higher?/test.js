var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Exists a Number Higher? (unit tests)\n', () => {
    it('[Test 1] Expected ➞ true', () => 
        assert.strictEqual(e.existsHigher([5, 3, 15, 22, 4], 10), true)
    )
    it('[Test 2] Expected ➞ false', () => 
        assert.strictEqual(e.existsHigher([1, 2, 3, 4, 5], 8), false)
    )
    it('[Test 3] Expected ➞ true', () => 
        assert.strictEqual(e.existsHigher([4, 3, 3, 3, 2, 2, 2], 4), true)
    )
    it('[Test 4] Expected ➞ false', () => 
        assert.strictEqual(e.existsHigher([2, 2, 2, 2], 5), false)
    )
    it('[Test 5] Expected ➞ false', () => 
        assert.strictEqual(e.existsHigher([], 0), false)
    )
})
