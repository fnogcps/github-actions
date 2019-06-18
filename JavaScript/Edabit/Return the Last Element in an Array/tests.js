var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe("Return the Last Element in an Array (unit tests)\n", () => {
    it("[Test 1] Expected: 'Duck'", () => 
        assert.equal(e.getLastItem(['Cat', 'Dog', 'Duck']), 'Duck')
    )
    it("[Test 2] Expected: 3", () => 
        assert.equal(e.getLastItem([1, 2, 3]), 3)
    )
    it("[Test 3] Expected: undefined", () => 
        assert.equal(e.getLastItem([undefined]), undefined)
    )
    it("[Test 4] Expected: true", () => 
        assert.equal(e.getLastItem([true, false, false, true]), true)
    )
    it("[Test 5] Expected: null", () => 
        assert.equal(e.getLastItem([7, 'String', false, undefined, null]), null)
    )
    it("[Test 6] Expected: false", () => 
        assert.equal(e.getLastItem([false]), false)
    )
    it("[Test 7] Expected: undefined", () => 
        assert.equal(
            e.getLastItem([undefined, undefined, undefined]), 
            undefined
        )
    )
    it("[Test 8] Expected: 45", () => 
        assert.equal(e.getLastItem([1, 2, 3, 56, 87, 23, 65, 45]), 45)
    )
    it("[Test 9] Expected: undefined", () => 
        assert.equal(e.getLastItem(['Apple', 'Orange', undefined]), undefined)
    )
    it("[Test 10] Expected: 'Apple'", () => 
        assert.equal(e.getLastItem([true, false, 'Apple']), 'Apple')
    )
    it("[Test 11] Expected: null", () => 
        assert.equal(e.getLastItem([null, null, null]), null)
    )
    it("[Test 12] Expected: 1", () => 
        assert.equal(e.getLastItem([1]), 1)
    )
})
