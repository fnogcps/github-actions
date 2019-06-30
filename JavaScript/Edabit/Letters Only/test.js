var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Letters Only (unit tests)\n', () => {
  it('[Test 1] Expected: "Aladdin"', () =>
    assert.strictEqual(
      e.lettersOnly(',1|2)")A^1<[_)?^"]l[a`3+%!d@8-0_0d.*}i@&n?='),
      'Aladdin',
    ));
  it('[Test 2] Expected: "Up"', () =>
    assert.strictEqual(e.lettersOnly('^U)6$22>8p).'), 'Up'));
  it('[Test 3] Expected: "Inception"', () =>
    assert.strictEqual(
      e.lettersOnly('I5n!449+c@e*}@@1]p{2@`,~t:i0o%n<3%8'),
      'Inception',
    ));
  it('[Test 4] Expected: "Psycho"', () =>
    assert.strictEqual(e.lettersOnly('!)"P[s9)"69}yc3+?1]+33>3ho'), 'Psycho'));
  it('[Test 5] Expected: "Goodfellas"', () =>
    assert.strictEqual(
      e.lettersOnly(':~;G{o}o{+524<df~:>}e24{l8:_l]a:?@]%s7'),
      'Goodfellas',
    ));
  it('[Test 6] Expected: "Shrek"', () =>
    assert.strictEqual(
      e.lettersOnly('&&S~]@8>1-0!h#r),80<_>!}|e>_k:'),
      'Shrek',
    ));
  it('[Test 7] Expected: "Gladiator"', () =>
    assert.strictEqual(
      e.lettersOnly(')^/|,!!09]=/1<G2?`=[l{a}d9]^i7a0|t6_o2*r'),
      'Gladiator',
    ));
  it('[Test 8] Expected: "Vertigo"', () =>
    assert.strictEqual(
      e.lettersOnly(']8;]V9e{=0r!.5t>i<^_g"4o"5~'),
      'Vertigo',
    ));
  it('[Test 9] Expected: "Batman"', () =>
    assert.strictEqual(e.lettersOnly('%%)?"?B#>/_4a#,;t8|m8675a(n'), 'Batman'));
  it('[Test 10] Expected: "Halloween"', () =>
    assert.strictEqual(
      e.lettersOnly('97H^)~a8567ll*o?"6%)w63e37e<n?@='),
      'Halloween',
    ));
});
