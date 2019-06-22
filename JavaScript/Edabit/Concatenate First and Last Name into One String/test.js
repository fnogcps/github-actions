var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Concatenate First and Last Name into One String (unit tests)\n', 
() => {
    it('[Test 1] Expected: "Doe, John"', () => 
        assert.equal(e.concatName("John", "Doe"), "Doe, John")
    )
    it('[Test 2] Expected: "Last, First"', () => 
        assert.equal(e.concatName("First", "Last"), "Last, First")
    )
    it('[Test 3] Expected: "B, A"', () => 
        assert.equal(e.concatName("A", "B"), "B, A")
    )
    it('[Test 4] Expected: ",, ,"', () => 
        assert.equal(e.concatName(",", ","), ",, ,")
    )
})
