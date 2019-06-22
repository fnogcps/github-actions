var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Return First and Last Parameter (unit tests)\n', () => {
    it('[Test 1] Expected: 1', () => 
        assert.equal(e.firstArg(1, 2, 3), 1)
    )
    it('[Test 2] Expected: "a"', () => 
        assert.equal(e.firstArg('a', 'b', 'c'), "a")
    )
    it('[Test 3] Expected: 8', () => 
        assert.equal(e.firstArg(8), 8)
    )
    it('[Test 4] Expected: undefined', () => 
        assert.equal(e.firstArg(), undefined)
    )
    it('[Test 5] Expected: 3', () => 
        assert.equal(e.lastArg(1, 2, 3), 3)
    )
    it('[Test 6] Expected: "c"', () => 
        assert.equal(e.lastArg('a', 'b', 'c'), "c")
    )
    it('[Test 7] Expected: 8', () => 
        assert.equal(e.lastArg(8), 8)
    )
    it('[Test 8] Expected: undefined', () => 
        assert.equal(e.lastArg(), undefined)
    )
})
