var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Is the Word Singular or Plural? (unit tests)\n', () => {
    it('[Test 1] Expected: true', () => 
        assert.equal(e.isPlural("dudes"), true)
    )
    it('[Test 2] Expected: true', () => 
        assert.equal(e.isPlural("flowers"), true)
    )
    it('[Test 3] Expected: true', () => 
        assert.equal(e.isPlural("checks"), true)
    )
    it('[Test 4] Expected: true', () => 
        assert.equal(e.isPlural("varies"), true)
    )
    it('[Test 5] Expected: true', () => 
        assert.equal(e.isPlural("efforts"), true)
    )
    it('[Test 6] Expected: false', () => 
        assert.equal(e.isPlural("mood"), false)
    )
    it('[Test 7] Expected: false', () => 
        assert.equal(e.isPlural("whiteboard"), false)
    )
    it('[Test 8] Expected: false', () => 
        assert.equal(e.isPlural("cow"), false)
    )
    it('[Test 9] Expected: false', () => 
        assert.equal(e.isPlural("word"), false)
    )
    it('[Test 10] Expected: false', () => 
        assert.equal(e.isPlural("love"), false)
    )
})
