var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Concatenate First and Last Name into One String (unit tests)\n', 
() => {
    it('[Test 1] Expected ➞ "Doe, John"', () => 
        assert.strictEqual(e.concatName("John", "Doe"), "Doe, John")
    )
    it('[Test 2] Expected ➞ "Last, First"', () => 
        assert.strictEqual(e.concatName("First", "Last"), "Last, First")
    )
    it('[Test 3] Expected ➞ "B, A"', () => 
        assert.strictEqual(e.concatName("A", "B"), "B, A")
    )
    it('[Test 4] Expected ➞ ",, ,"', () => 
        assert.strictEqual(e.concatName(",", ","), ",, ,")
    )
})
