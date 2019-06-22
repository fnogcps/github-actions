var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Find the Bug: Checking Even Numbers (unit tests)\n', () => {
    it('[Test 1] Expected: false', () => 
        assert.strictEqual(e.checkAllEven([1, 2, 3, 4]), false)
    )
    it('[Test 2] Expected: true', () => 
        assert.strictEqual(e.checkAllEven([2, 4, 6]), true)
    )
    it('[Test 3] Expected: false', () => 
        assert.strictEqual(e.checkAllEven([5, 6, 8, 10]), false)
    )
    it('[Test 4] Expected: true', () => 
        assert.strictEqual(e.checkAllEven([-2, 2, -2, 2]), true)
    )
})
