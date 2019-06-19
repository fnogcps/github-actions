var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Remove the First and Last Characters (unit tests)\n', () => {
    it('[Test 1] Expected: "ell"', () => 
        assert.equal(e.removeFirstLast("hello"), "ell")
    )
    it('[Test 2] Expected: "enefi"', () => 
        assert.equal(e.removeFirstLast("benefit"), "enefi")
    )
    it('[Test 3] Expected: "ord"', () => 
        assert.equal(e.removeFirstLast("wordy"), "ord")
    )
    it('[Test 4] Expected: "ayb"', () => 
        assert.equal(e.removeFirstLast("maybe"), "ayb")
    )
    it('[Test 5] Expected: "to"', () => 
        assert.equal(e.removeFirstLast("to"), "to")
    )
    it('[Test 6] Expected: "a"', () => 
        assert.equal(e.removeFirstLast("a"), "a")
    )
    it('[Test 7] Expected: """', () => 
        assert.equal(e.removeFirstLast(""), "")
    )
})
