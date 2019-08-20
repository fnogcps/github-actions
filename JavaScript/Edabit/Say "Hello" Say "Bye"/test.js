var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Say "Hello" Say "Bye" (unit tests)\n', () => {
  it('[Test 1] Expected: "Hello Jose"', () =>
    assert.strictEqual(e.sayHelloBye('jose', 1), 'Hello Jose'));
  it('[Test 2] Expected: "Hello Barry"', () =>
    assert.strictEqual(e.sayHelloBye('barry', 1), 'Hello Barry'));
  it('[Test 3] Expected: "Bye Jon"', () =>
    assert.strictEqual(e.sayHelloBye('jon', 0), 'Bye Jon'));
  it('[Test 4] Expected: "Hello Khloy"', () =>
    assert.strictEqual(e.sayHelloBye('khloy', 1), 'Hello Khloy'));
  it('[Test 5] Expected: "Bye Sara"', () =>
    assert.strictEqual(e.sayHelloBye('sara', 0), 'Bye Sara'));
  it('[Test 6] Expected: "Bye Jon"', () =>
    assert.strictEqual(e.sayHelloBye('Jon', 0), 'Bye Jon'));
  it('[Test 7] Expected: "Hello Matt"', () =>
    assert.strictEqual(e.sayHelloBye('Matt', 1), 'Hello Matt'));
});
