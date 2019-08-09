var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Fix The Spacing (unit tests)\n', () => {
  it('[Test 1] Expected: "A glittering gem is not enough."', () =>
    assert.strictEqual(
      e.correctSpacing(' A  glittering  gem     is    not   enough.  '),
      'A glittering gem is not enough.',
    ));
  it('[Test 2] Expected: "She did her best to help him."', () =>
    assert.strictEqual(
      e.correctSpacing('   She      did  her best  to  help    him.  '),
      'She did her best to help him.',
    ));
  it('[Test 3] Expected: "They made sure to get there early."', () =>
    assert.strictEqual(
      e.correctSpacing('  They      made  sure   to get   there  early. '),
      'They made sure to get there early.',
    ));
  it('[Test 4] Expected: "She did her best to help him."', () =>
    assert.strictEqual(
      e.correctSpacing('  She  did   her      best     to   help him. '),
      'She did her best to help him.',
    ));
  it('[Test 5] Expected: "I love eating toasted cheese and tuna sandwiches."', () =>
    assert.strictEqual(
      e.correctSpacing(
        '      I     love  eating    toasted  cheese   and tuna  sandwiches.',
      ),
      'I love eating toasted cheese and tuna sandwiches.',
    ));
  it('[Test 6] Expected: "There were foggy conditions on the trail."', () =>
    assert.strictEqual(
      e.correctSpacing(
        '  There     were  foggy   conditions on   the      trail.   ',
      ),
      'There were foggy conditions on the trail.',
    ));
  it('[Test 7] Expected: "The roads were impassable due to snow."', () =>
    assert.strictEqual(
      e.correctSpacing(
        '     The  roads   were  impassable  due to      snow.  ',
      ),
      'The roads were impassable due to snow.',
    ));
  it('[Test 8] Expected: "Better to paint with bold colors."', () =>
    assert.strictEqual(
      e.correctSpacing(' Better   to      paint  with  bold  colors.   '),
      'Better to paint with bold colors.',
    ));
  it('[Test 9] Expected: "Remember to stretch before you run."', () =>
    assert.strictEqual(
      e.correctSpacing('     Remember to  stretch      before you  run.  '),
      'Remember to stretch before you run.',
    ));
  it('[Test 10] Expected: "You rarely see a royal flush in poker."', () =>
    assert.strictEqual(
      e.correctSpacing(
        '  You  rarely    see  a royal   flush     in   poker. ',
      ),
      'You rarely see a royal flush in poker.',
    ));
  it('[Test 11] Expected: "She was too short to see over the fence."', () =>
    assert.strictEqual(
      e.correctSpacing(
        '  She was too      short     to   see    over  the   fence.   ',
      ),
      'She was too short to see over the fence.',
    ));
  it('[Test 12] Expected: "I will post the letter tonight."', () =>
    assert.strictEqual(
      e.correctSpacing('   I   will  post     the letter      tonight.  '),
      'I will post the letter tonight.',
    ));
  it('[Test 13] Expected: "He could not remember a thing."', () =>
    assert.strictEqual(
      e.correctSpacing(' He      could  not remember   a     thing.   '),
      'He could not remember a thing.',
    ));
  it('[Test 14] Expected: "Sometimes it is better to just walk away."', () =>
    assert.strictEqual(
      e.correctSpacing(
        '      Sometimes     it    is  better   to  just walk away.',
      ),
      'Sometimes it is better to just walk away.',
    ));
  it('[Test 15] Expected: "A lack of stirring makes the sauce stick."', () =>
    assert.strictEqual(
      e.correctSpacing(
        ' A   lack   of      stirring  makes  the sauce     stick.  ',
      ),
      'A lack of stirring makes the sauce stick.',
    ));
  it('[Test 16] Expected: "I really want my dessert."', () =>
    assert.strictEqual(
      e.correctSpacing('   I      really   want  my dessert.  '),
      'I really want my dessert.',
    ));
  it('[Test 17] Expected: "Let me help you with your bags."', () =>
    assert.strictEqual(
      e.correctSpacing('   Let      me help you  with     your    bags.   '),
      'Let me help you with your bags.',
    ));
  it('[Test 18] Expected: "Around the world in eighty days."', () =>
    assert.strictEqual(
      e.correctSpacing('      Around  the world     in   eighty   days.  '),
      'Around the world in eighty days.',
    ));
  it('[Test 19] Expected: "The soup of the day is lentil."', () =>
    assert.strictEqual(
      e.correctSpacing('      The soup   of    the  day   is     lentil. '),
      'The soup of the day is lentil.',
    ));
  it('[Test 20] Expected: "Winter is coming."', () =>
    assert.strictEqual(
      e.correctSpacing('    Winter is   coming. '),
      'Winter is coming.',
    ));
});
