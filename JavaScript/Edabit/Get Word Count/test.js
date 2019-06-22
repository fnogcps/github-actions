var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Get Word Count (unit tests)\n', () => {
    it('[Test 1] Expected ➞ 3', () => 
        assert.strictEqual(e.countWords("It's high noon"), 3)
    )
    it('[Test 2] Expected ➞ 4', () => 
        assert.strictEqual(e.countWords("Is this easy mode"), 4)
    )
    it('[Test 3] Expected ➞ 5', () => 
        assert.strictEqual(e.countWords("What an easy task, right"), 5)
    )
    it('[Test 4] Expected ➞ 4', () => 
        assert.strictEqual(e.countWords("This is a test"), 4)
    )
    it('[Test 5] Expected ➞ 6', () => 
        assert.strictEqual(e.countWords("Just an example here move along"), 6)
    )
    it('[Test 6] Expected ➞ 4', () => 
        assert.strictEqual(e.countWords("How are you today?"), 4)
    )
})
