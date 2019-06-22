var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Truthy or Falsy? (unit tests)\n', () => {
    it('[Test 1] Expected: 1', () => assert.strictEqual(e.isTruthy(1), 1))
    it('[Test 2] Expected: 1', () => assert.strictEqual(e.isTruthy(-1), 1))
    it('[Test 3] Expected: 1', () => assert.strictEqual(e.isTruthy("false"), 1))
    it('[Test 4] Expected: 1', () => assert.strictEqual(e.isTruthy([]), 1))
    it('[Test 5] Expected: 1', () => assert.strictEqual(e.isTruthy(true), 1))
    it('[Test 6] Expected: 1', () => assert.strictEqual(e.isTruthy({}), 1))
    it('[Test 7] Expected: 1', () => assert.strictEqual(e.isTruthy(function(){}), 1))
    it('[Test 8] Expected: 0', () => assert.strictEqual(e.isTruthy(0), 0))
    it('[Test 9] Expected: 0', () => assert.strictEqual(e.isTruthy(""), 0))
    it('[Test 10] Expected: 0', () => assert.strictEqual(e.isTruthy(null), 0))
    it('[Test 11] Expected: 0', () => assert.strictEqual(e.isTruthy(undefined), 0))
    it('[Test 12] Expected: 0', () => assert.strictEqual(e.isTruthy(false), 0))
    it('[Test 13] Expected: 0', () => assert.strictEqual(e.isTruthy(NaN), 0))
    it('[Test 14] Expected: 0', () => assert.strictEqual(e.isTruthy(''), 0))
})
