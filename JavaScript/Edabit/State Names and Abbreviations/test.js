var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('State Names and Abbreviations (unit tests)\n', () => {
    it('[Test 1] Expected: ["CA", "NY"]', () => 
        assert.deepEqual(
            e.filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'abb'),
            ['CA', 'NY']
        )
    )
    it('[Test 2] Expected: ["Arizona", "Nevada"]', () => 
        assert.deepEqual(
            e.filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'full'),
            ['Arizona', 'Nevada']
        )
    )
    it('[Test 3] Expected: ["MT", "NJ", "TX", "ID", "IL"]', () => 
        assert.deepEqual(
            e.filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'abb'), 
            ['MT', 'NJ', 'TX', 'ID', 'IL']
        )
    )
    it('[Test 4] Expected: []', () => 
        assert.deepEqual(
            e.filterStateNames(['MT', 'NJ', 'TX', "ID", "IL"], 'full'),
            []
        )
    )
    it('[Test 5] Expected: ["FL"]', () => 
        assert.deepEqual(
            e.filterStateNames(['Montana', 'FL'], 'abb'),
            ['FL']
        )
    )
    it('[Test 6] Expected: ["Montana"]', () => 
        assert.deepEqual(
            e.filterStateNames(['Montana', 'FL'], 'full'),
            ['Montana']
        )
    )
})
