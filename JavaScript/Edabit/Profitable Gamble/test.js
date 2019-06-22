var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Profitable Gamble (unit tests)\n', () => {
    it('[Test 1] Expected: true', () => 
        assert.strictEqual(e.profitableGamble(0.2, 50, 9), true)
    )
    it('[Test 2] Expected: false', () => 
        assert.strictEqual(e.profitableGamble(0.9, 1, 2), false)
    )
    it('[Test 3] Expected: true', () => 
        assert.strictEqual(e.profitableGamble(0.9, 3, 2), true)
    )
    it('[Test 4] Expected: true', () => 
        assert.strictEqual(e.profitableGamble(0.33, 10, 3.30), true)
    )
    it('[Test 5] Expected: false', () => 
        assert.strictEqual(e.profitableGamble(0, 1000, 0.01), false)
    )
    it('[Test 6] Expected: true', () => 
        assert.strictEqual(e.profitableGamble(0.1, 1000, 7), true)
    )
    it('[Test 7] Expected: false', () => 
        assert.strictEqual(e.profitableGamble(0, 0, 0), false)
    )
})
