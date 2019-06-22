var chai = require('chai')
var expect = chai.expect

const e = require('./solution.js')

const validate = (str) => (e.x).test(str)

describe('Regex Series: String Contains at Least One Digit (unit tests)\n', 
() => {
    it('[Test 1] Expected ➞ true', () => 
        expect(validate("c8")).to.equal(true)
    )
    it('[Test 2] Expected ➞ true', () => 
        expect(validate("23cc4")).to.equal(true)
    )
    it('[Test 3] Expected ➞ false', () => 
        expect(validate("abwekz")).to.equal(false)
    )
    it('[Test 4] Expected ➞ false', () => 
        expect(validate("sdfkxi")).to.equal(false)
    )
    it('[Test 5] Expected ➞ true', () => 
        expect(validate("jm0vu2")).to.equal(true)
    )
    it('[Test 6] Expected ➞ true', () => 
        expect(validate("dj42n7l0")).to.equal(true)
    )
    it('[Test 7] Expected ➞ false', () => 
        expect(validate("sdfkxi")).to.equal(false)
    )
})
