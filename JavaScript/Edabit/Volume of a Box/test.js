var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Volume of a Box (unit tests)\n', () => {
    it('[Test 1] Expected: 22', () => 
        assert.strictEqual(e.volumeOfBox({width: 11,length: 1, height: 2}), 22)
    )
    it('[Test 2] Expected: 15', () => 
        assert.strictEqual(e.volumeOfBox({width: 1, length: 5,  height: 3}), 15)
    )
    it('[Test 3] Expected: 2', () => 
        assert.strictEqual(e.volumeOfBox({width: 2, length: 1,  height: 1}), 2)
    )
    it('[Test 4] Expected: 60', () => 
        assert.strictEqual(e.volumeOfBox({width: 2, length: 6,  height: 5}), 60)
    )
    it('[Test 5] Expected: 30', () => 
        assert.strictEqual(e.volumeOfBox({width: 2, length: 5,  height: 3}), 30)
    )
    it('[Test 6] Expected: 10', () => 
        assert.strictEqual(e.volumeOfBox({width: 2, length: 5,  height: 1}), 10)
    )
})
