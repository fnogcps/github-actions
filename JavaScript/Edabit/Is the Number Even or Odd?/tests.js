var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Is the Number Even or Odd? (unit tests)\n', () => {
    it('[Test 1] Expected: "odd"', () => assert.equal(
        e.isEvenOrOdd(3), "odd")
    )
    it('[Test 2] Expected: "even"', () => assert.equal(
        e.isEvenOrOdd(0), "even")
    )
    it('[Test 3] Expected: "odd"', () => assert.equal(
        e.isEvenOrOdd(7), "odd")
    )
    it('[Test 4] Expected: "even"', () => assert.equal(
        e.isEvenOrOdd(12), "even")
    )
    it('[Test 5] Expected: "even"', () => assert.equal(
        e.isEvenOrOdd(6474), "even")
    )
    it('[Test 6] Expected: "odd"', () => assert.equal(
        e.isEvenOrOdd(0563), "odd")
    )
    it('[Test 7] Expected: "odd"', () => assert.equal(
        e.isEvenOrOdd(3), "odd")
    )
    it('[Test 8] Expected: "even"', () => assert.equal(
        e.isEvenOrOdd(0000001111100000), "even")
    )
    it('[Test 9] Expected: "odd"', () => assert.equal(
        e.isEvenOrOdd(301), "odd")
    )
    it('[Test 10] Expected: "odd"', () => assert.equal(
        e.isEvenOrOdd(-3), "odd")
    )
    it('[Test 11] Expected: "even"', () => assert.equal(
        e.isEvenOrOdd(-0), "even")
    )
    it('[Test 12] Expected: "odd"', () => assert.equal(
        e.isEvenOrOdd(-7), "odd")
    )
    it('[Test 13] Expected: "even"', () => assert.equal(
        e.isEvenOrOdd(-12), "even")
    )
    it('[Test 14] Expected: "even"', () => assert.equal(
        e.isEvenOrOdd(-6474), "even")
    )
    it('[Test 15] Expected: "odd"', () => assert.equal(
        e.isEvenOrOdd(-0563), "odd")
    )
    it('[Test 16] Expected: "odd"', () => assert.equal(
        e.isEvenOrOdd(-3), "odd")
    )
    it('[Test 17] Expected: "even"', () => assert.equal(
        e.isEvenOrOdd(-0000001111100000), "even")
    )
    it('[Test 18] Expected: "odd"', () => assert.equal(
        e.isEvenOrOdd(-301), "odd")
    )
})
