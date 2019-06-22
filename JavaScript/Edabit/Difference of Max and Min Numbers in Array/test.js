var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Difference of Max and Min Numbers in Array (unit tests)\n', () => {
    it('[Test 1] Expected: 90', () => 
        assert.equal(e.differenceMaxMin([10,4,1,2,8,91]), 90)
    )
    it('[Test 2] Expected: 124', () => 
        assert.equal(e.differenceMaxMin([-70,43,34,54,22]), 124)
    )
})
