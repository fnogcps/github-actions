var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Reverse the Order of a String (unit tests)\n', () => {
  it('[Test 1] Expected: ".tnereffid knihT"', () =>
    assert.strictEqual(e.reverse('Think different.'), '.tnereffid knihT'));
  it('[Test 2] Expected: ".od ot tahw su llet nac yeht os elpoep trams erih ew ;od ot tahw meht llet dna elpoep trams erih ot esnes ekam t’nseod tI"', () =>
    assert.strictEqual(
      e.reverse(
        'It doesn’t make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do.',
      ),
      '.od ot tahw su llet nac yeht os elpoep trams erih ew ;od ot tahw meht llet dna elpoep trams erih ot esnes ekam t’nseod tI',
    ));
  it('[Test 3] Expected: "taerht a ton - ytinutroppo na sa egnahc ees ot ytiliba eht si noitavonnI"', () =>
    assert.strictEqual(
      e.reverse(
        'Innovation is the ability to see change as an opportunity - not a threat',
      ),
      'taerht a ton - ytinutroppo na sa egnahc ees ot ytiliba eht si noitavonnI',
    ));
  it('[Test 4] Expected: ".nalp ssenisub tseb eht si ytilauQ :elur elpmis a no desab si gnihtyrevE"', () =>
    assert.strictEqual(
      e.reverse(
        'Everything is based on a simple rule: Quality is the best business plan.',
      ),
      '.nalp ssenisub tseb eht si ytilauQ :elur elpmis a no desab si gnihtyrevE',
    ));
  it('[Test 5] Expected: ".od ohw seno eht era dlrow eht egnahc nac yeht kniht ot hguone yzarc era ohw elpoep ehT"', () =>
    assert.strictEqual(
      e.reverse(
        'The people who are crazy enough to think they can change the world are the ones who do.',
      ),
      '.od ohw seno eht era dlrow eht egnahc nac yeht kniht ot hguone yzarc era ohw elpoep ehT',
    ));
  it('[Test 6] Expected: ".eciov renni nwo ruoy tuo nword snoinipo ’srehto fo esion eht tel t’noD"', () =>
    assert.strictEqual(
      e.reverse(
        'Don’t let the noise of others’ opinions drown out your own inner voice.',
      ),
      '.eciov renni nwo ruoy tuo nword snoinipo ’srehto fo esion eht tel t’noD',
    ));
  it('[Test 7] Expected: ".nrael ot gniht erom eno syawla s\'erehT ;yllaunitnoc nraeL"', () =>
    assert.strictEqual(
      e.reverse("Learn continually; There's always one more thing to learn."),
      ".nrael ot gniht erom eno syawla s'erehT ;yllaunitnoc nraeL",
    ));
  it('[Test 8] Expected: ".selbuod owt naht retteb hcum si nur emoh enO .ytitnauq naht tnatropmi erom si ytilauQ"', () =>
    assert.strictEqual(
      e.reverse(
        'Quality is more important than quantity. One home run is much better than two doubles.',
      ),
      '.selbuod owt naht retteb hcum si nur emoh enO .ytitnauq naht tnatropmi erom si ytilauQ',
    ));
  it('[Test 9] Expected: ".efil s\'esle enoemos gnivil ti etsaw t\'nod os detimil si emit ruoY"', () =>
    assert.strictEqual(
      e.reverse(
        "Your time is limited so don't waste it living someone else's life.",
      ),
      ".efil s'esle enoemos gnivil ti etsaw t'nod os detimil si emit ruoY",
    ));
  it('[Test 10] Expected: " .krow taerg si eveileb uoy tahw od ot si deifsitas ylurt eb ot yaw ylno ehT"', () =>
    assert.strictEqual(
      e.reverse(
        'The only way to be truly satisfied is to do what you believe is great work.',
      ),
      '.krow taerg si eveileb uoy tahw od ot si deifsitas ylurt eb ot yaw ylno ehT',
    ));
});
