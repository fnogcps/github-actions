var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Get the Century (unit tests)\n', () => {
  it('[Test 1] Expected: "18th century"', () =>
    assert.strictEqual(e.century(1756), '18th century'));
  it('[Test 2] Expected: "16th century"', () =>
    assert.strictEqual(e.century(1555), '16th century'));
  it('[Test 3] Expected: "10th century"', () =>
    assert.strictEqual(e.century(1000), '10th century'));
  it('[Test 4] Expected: "11th century"', () =>
    assert.strictEqual(e.century(1001), '11th century'));
  it('[Test 5] Expected: "21st century"', () =>
    assert.strictEqual(e.century(2005), '21st century'));
  it('[Test 6] Expected: "18th century"', () =>
    assert.strictEqual(e.century(1789), '18th century'));
  it('[Test 7] Expected: "16th century"', () =>
    assert.strictEqual(e.century(1510), '16th century'));
  it('[Test 8] Expected: "17th century"', () =>
    assert.strictEqual(e.century(1615), '17th century'));
  it('[Test 9] Expected: "20th century"', () =>
    assert.strictEqual(e.century(2000), '20th century'));
  it('[Test 10] Expected: "20th century"', () =>
    assert.strictEqual(e.century(1997), '20th century'));
});
