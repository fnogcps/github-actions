var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Finding Nemo (unit tests)\n', () => {
  it('[Test 1] Expected: "I found Nemo at 5!', () =>
    assert.strictEqual(e.findNemo('I am Ne mo Nemo !'), 'I found Nemo at 5!'));
  it('[Test 2] Expected: "I found Nemo at 8!', () =>
    assert.strictEqual(
      e.findNemo('N e m o is NEMO NeMo Nemo !'),
      'I found Nemo at 8!',
    ));
  it('[Test 3] Expected: "I found Nemo at 5!', () =>
    assert.strictEqual(
      e.findNemo("I am Nemo's dad Nemo senior ."),
      'I found Nemo at 5!',
    ));
  it('[Test 4] Expected: "I can\'t find Nemo :(', () =>
    assert.strictEqual(e.findNemo('Oh, hello !'), "I can't find Nemo :("));
  it('[Test 5] Expected: "I can\'t find Nemo :(', () =>
    assert.strictEqual(
      e.findNemo('Is it Nemos, Nemona, Nemoor or Garfield?'),
      "I can't find Nemo :(",
    ));
  it('[Test 6] Expected: "I found Nemo at 1!', () =>
    assert.strictEqual(
      e.findNemo(
        'Nemo is a clown fish, he has white and orange stripes. Nemo , come back!',
      ),
      'I found Nemo at 1!',
    ));
});
