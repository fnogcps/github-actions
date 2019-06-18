var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('String to Integer and Vice Versa (unit tests)\n', () => {
    it('[Test 1] Expected: 37', () => assert.equal(e.toInt("37"), 37))
    it('[Test 2] Expected: 113', () => assert.equal(e.toInt("113"), 113))
    it('[Test 3] Expected: 5', () => assert.equal(e.toInt("5"), 5))
    it('[Test 4] Expected: 5231', () => assert.equal(e.toInt("5231"), 5231))
    it('[Test 5] Expected: "37"', () => assert.equal(e.toStr(37), "37"))
    it('[Test 6] Expected: "113"', () => assert.equal(e.toStr(113), "113"))
    it('[Test 7] Expected: "5"', () => assert.equal(e.toStr(5), "5"))
    it('[Test 8] Expected: "5231"', () => assert.equal(e.toStr(5231), "5231"))
})
