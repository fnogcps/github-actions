var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Reverse the Case (unit tests)\n', () => {
  it('[Test 1] Expected: "hAPPY bIRTHDAY"', () =>
    assert.strictEqual(e.reverseCase('Happy Birthday'), 'hAPPY bIRTHDAY'));
  it('[Test 2] Expected: "many thanks"', () =>
    assert.strictEqual(e.reverseCase('MANY THANKS'), 'many thanks'));
  it('[Test 3] Expected: "SpOnTaNeOuS"', () =>
    assert.strictEqual(e.reverseCase('sPoNtAnEoUs'), 'SpOnTaNeOuS'));
  it('[Test 4] Expected: "Excellent, YoUr Majesty"', () =>
    assert.strictEqual(
      e.reverseCase('eXCELLENT, yOuR mAJESTY'),
      'Excellent, YoUr Majesty',
    ));
});
