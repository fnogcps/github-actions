var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Convert Number to Corresponding Month Name (unit tests)\n', () => {
    it('[Test 1] Expected: "January"', () => 
        assert.strictEqual(e.month_name(1), 'January')
    )
    it('[Test 2] Expected: "February"', () => 
        assert.strictEqual(e.month_name(2), 'February')
    )
    it('[Test 3] Expected: "March"', () => 
        assert.strictEqual(e.month_name(3), 'March')
    )
    it('[Test 4] Expected: "April"', () => 
        assert.strictEqual(e.month_name(4), 'April')
    )
    it('[Test 5] Expected: "May"', () => 
        assert.strictEqual(e.month_name(5), 'May')
    )
    it('[Test 6] Expected: "June"', () => 
        assert.strictEqual(e.month_name(6), 'June')
    )
    it('[Test 7] Expected: "July"', () => 
        assert.strictEqual(e.month_name(7), 'July')
    )
    it('[Test 8] Expected: "August"', () => 
        assert.strictEqual(e.month_name(8), 'August')
    )
    it('[Test 9] Expected: "September"', () => 
        assert.strictEqual(e.month_name(9), 'September')
    )
    it('[Test 10] Expected: "October"', () => 
        assert.strictEqual(e.month_name(10), 'October')
    )
    it('[Test 11] Expected: "November"', () => 
        assert.strictEqual(e.month_name(11), 'November')
    )
    it('[Test 12] Expected: "December"', () => 
        assert.strictEqual(e.month_name(12), 'December')
    )
})
