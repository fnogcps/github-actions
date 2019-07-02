var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Repeating Letters N Times (unit tests)\n', () => {
  it('[Test 1] Expected: "mmmmmiiiiiccccceeeee"', () =>
    assert.strictEqual(e.repeat('mice', 5), 'mmmmmiiiiiccccceeeee'));
  it('[Test 2] Expected: "hhheeellllllooo"', () =>
    assert.strictEqual(e.repeat('hello', 3), 'hhheeellllllooo'));
  it('[Test 3] Expected: "stop"', () =>
    assert.strictEqual(e.repeat('stop', 1), 'stop'));
  it('[Test 4] Expected: "ttoommaattoo"', () =>
    assert.strictEqual(e.repeat('tomato', 2), 'ttoommaattoo'));
});
