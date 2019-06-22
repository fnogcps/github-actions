var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Maximum Edge of a Triangle (unit tests)\n', () => {
    it('[Test 1] Expected ➞ 8', () => assert.strictEqual(e.nextEdge(5, 4), 8))
    it('[Test 2] Expected ➞ 10', () => assert.strictEqual(e.nextEdge(8, 3), 10))
    it('[Test 3] Expected ➞ 15', () => assert.strictEqual(e.nextEdge(7, 9), 15))
    it('[Test 4] Expected ➞ 13', () => assert.strictEqual(e.nextEdge(10, 4), 13))
    it('[Test 5] Expected ➞ 8', () => assert.strictEqual(e.nextEdge(7, 2), 8))
})
