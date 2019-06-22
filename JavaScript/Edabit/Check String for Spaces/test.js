var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Check String for Spaces (unit tests)\n', () => {
    it('[Test 1] Expected ➞ false', () => 
        assert.strictEqual(e.hasSpaces("Foo"), false)
    )
    it('[Test 2] Expected ➞ true', () => 
        assert.strictEqual(e.hasSpaces("Foo bar"), true)
    )
    it('[Test 3] Expected ➞ true', () => 
        assert.strictEqual(e.hasSpaces("Foo "), true)
    )
    it('[Test 4] Expected ➞ true', () => 
        assert.strictEqual(e.hasSpaces(" Foo"), true)
    )
    it('[Test 5] Expected ➞ true', () => 
        assert.strictEqual(e.hasSpaces(" "), true)
    )
    it('[Test 6] Expected ➞ false', () => 
        assert.strictEqual(e.hasSpaces(""), false)
    )
    it('[Test 7] Expected ➞ false', () => 
        assert.strictEqual(e.hasSpaces(",./;'[]-="), false)
    )
})
