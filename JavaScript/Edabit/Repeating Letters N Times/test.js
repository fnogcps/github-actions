var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Repeating Letters N Times (unit tests)\n', () => {
    it('[Test 1] Expected: "mmmmmiiiiiccccceeeee"', () => 
        assert.equal(e.repeat("mice", 5), "mmmmmiiiiiccccceeeee")
    )
    it('[Test 2] Expected: "hhheeellllllooo"', () => 
        assert.equal(e.repeat("hello", 3), "hhheeellllllooo")
    )
    it('[Test 3] Expected: "stop"', () => 
        assert.equal(e.repeat("stop", 1), "stop")
    )
    it('[Test 4] Expected: "ttoommaattoo"', () => 
        assert.equal(e.repeat("tomato", 2), "ttoommaattoo")
    )
})
