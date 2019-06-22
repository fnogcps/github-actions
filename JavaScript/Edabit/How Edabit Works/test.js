var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('How Edabit Works (unit tests)\n', () => {
    it('[Test 1] Expected: "hello edabit.com"', () => 
        assert.strictEqual(e.hello(), "hello edabit.com")
    )
})
