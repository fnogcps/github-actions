var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')
let x = [1, 2, 3, 4, 5]

describe('Fix the Error: Mutating Arrays (unit tests)\n', () => {
    it('[Test 1] Expected: [1, 2, 3, 4]', () => 
        assert.deepEqual(e.minusOne(x), [1, 2, 3, 4])
    )
    it('[Test 2] Expected: [1, 2, 3, 4]', () => 
        assert.deepEqual(e.minusOne(x), [1, 2, 3, 4])
    )
    it('[Test 3] Expected: [1, 2, 3, 4]', () => 
        assert.deepEqual(e.minusOne(x), [1, 2, 3, 4])
    )
})
