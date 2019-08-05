var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Equality of 3 Values (unit tests)\n', () => {
    it('[Test 1] Expected: 0', () =>
      assert.strictEqual(e.equal(2,3,4), 0)
    );
    it('[Test 2] Expected: 2', () =>
      assert.strictEqual(e.equal(7,3,7), 2)
    );
    it('[Test 3] Expected: 3', () =>
      assert.strictEqual(e.equal(4,4,4), 3)
    );
    it('[Test 4] Expected: 0', () =>
      assert.strictEqual(e.equal(7,3,4), 0)
    );
    it('[Test 5] Expected: 2', () =>
      assert.strictEqual(e.equal(3,3,6), 2)
    );
    it('[Test 6] Expected: 3', () =>
      assert.strictEqual(e.equal(1,1,1), 3)
    );
    it('[Test 7] Expected: 0', () =>
      assert.strictEqual(e.equal(1,7,6), 0)
    );
    it('[Test 8] Expected: 3', () =>
      assert.strictEqual(e.equal(7, 7, 7), 3)
    );
})
