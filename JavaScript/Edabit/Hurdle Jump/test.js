var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Hurdle Jump (unit tests)\n', () => {
    it('[Test 1] Expected: true', () => assert.strictEqual(
        e.hurdleJump([1, 2, 3, 4, 5], 5), true)
    )
    it('[Test 2] Expected: false', () => assert.strictEqual(
        e.hurdleJump([5, 5, 3, 4, 5], 3), false)
    )
    it('[Test 3] Expected: true', () => assert.strictEqual(
        e.hurdleJump([5, 4, 5, 6], 10), true)
    )
    it('[Test 4] Expected: false', () => assert.strictEqual(
        e.hurdleJump([1,2,1], 1), false)
    )
    it('[Test 5] Expected: true', () => assert.strictEqual(
        e.hurdleJump([3,3,3], 4), true)
    )
    it('[Test 6] Expected: false', () => assert.strictEqual(
        e.hurdleJump([4,4], 3), false)
    )
    it('[Test 7] Expected: true', () => assert.strictEqual(
        e.hurdleJump([], 4), true)
    )
})
