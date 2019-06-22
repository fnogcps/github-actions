var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Name Greeting! (unit tests)\n', () => {
    it('[Test 1] Expected: "Hello Gerald!"', () => 
        assert.equal(e.helloName("Gerald"), "Hello Gerald!")
    )
    it('[Test 2] Expected: "Hello Fatima!"', () => 
        assert.equal(e.helloName("Fatima"), "Hello Fatima!")
    )
    it('[Test 3] Expected: "Hello Ed!"', () => 
        assert.equal(e.helloName("Ed"), "Hello Ed!")
    )
    it('[Test 4] Expected: "Hello Tiffany!"', () => 
        assert.equal(e.helloName("Tiffany"), "Hello Tiffany!")
    )
})
