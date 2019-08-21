var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Reverse the Order of Words with Five Letters or More (unit tests)\n', () => {
  it('[Test 1] Expected: "esreveR"', () =>
    assert.strictEqual(e.reverse('Reverse'), 'esreveR'));
  it('[Test 2] Expected: "This is a lacipyt .ecnetnes"', () =>
    assert.strictEqual(
      e.reverse('This is a typical sentence.'),
      'This is a lacipyt .ecnetnes',
    ));
  it('[Test 3] Expected: "The dog is big."', () =>
    assert.strictEqual(e.reverse('The dog is big.'), 'The dog is big.'));
  it('[Test 4] Expected: "esreveR the redro of yreve word retaerg than or lauqe to five .sretcarahc"', () =>
    assert.strictEqual(
      e.reverse(
        'Reverse the order of every word greater than or equal to five characters.',
      ),
      'esreveR the redro of yreve word retaerg than or lauqe to five .sretcarahc',
    ));
  it('[Test 5] Expected: "Lets all be euqinu rehtegot litnu we esilaer we are all the .emas"', () =>
    assert.strictEqual(
      e.reverse(
        'Lets all be unique together until we realise we are all the same.',
      ),
      'Lets all be euqinu rehtegot litnu we esilaer we are all the .emas',
    ));
  it('[Test 6] Expected: "The old elppa slever in its .ytirohtua"', () =>
    assert.strictEqual(
      e.reverse('The old apple revels in its authority.'),
      'The old elppa slever in its .ytirohtua',
    ));
  it('[Test 7] Expected: "The retoohs says eybdoog to his .evol"', () =>
    assert.strictEqual(
      e.reverse('The shooter says goodbye to his love.'),
      'The retoohs says eybdoog to his .evol',
    ));
  it('[Test 8] Expected: "esaelP wait edistuo of the .esuoh"', () =>
    assert.strictEqual(
      e.reverse('Please wait outside of the house.'),
      'esaelP wait edistuo of the .esuoh',
    ));
  it('[Test 9] Expected: "Two staes were .tnacav"', () =>
    assert.strictEqual(
      e.reverse('Two seats were vacant.'),
      'Two staes were .tnacav',
    ));
  it('[Test 10] Expected: "ruoF-ytxiS semoc gniksa for .daerb"', () =>
    assert.strictEqual(
      e.reverse('Sixty-Four comes asking for bread.'),
      'ruoF-ytxiS semoc gniksa for .daerb',
    ));
});
