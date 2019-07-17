var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Repeating Letters (unit tests)\n', () => {
  it('[Test 1] Expected: "SSttrriinngg"', () =>
    assert.strictEqual(e.doubleChar('String'), 'SSttrriinngg'));
  it('[Test 2] Expected: "HHeelllloo  WWoorrlldd!!"', () =>
    assert.strictEqual(
      e.doubleChar('Hello World!'),
      'HHeelllloo  WWoorrlldd!!',
    ));
  it('[Test 3] Expected: "11223344!!__  "', () =>
    assert.strictEqual(e.doubleChar('1234!_ '), '11223344!!__  '));
  it('[Test 4] Expected: "####^^&&%%%%**&&%%%%$$##@@@@!!"', () =>
    assert.strictEqual(
      e.doubleChar('##^&%%*&%%$#@@!'),
      '####^^&&%%%%**&&%%%%$$##@@@@!!',
    ));
  it('[Test 5] Expected: "ssccaannddaall"', () =>
    assert.strictEqual(e.doubleChar('scandal'), 'ssccaannddaall'));
  it('[Test 6] Expected: "eeccoonnoommiiccss"', () =>
    assert.strictEqual(e.doubleChar('economics'), 'eeccoonnoommiiccss'));
  it('[Test 7] Expected: "  "', () =>
    assert.strictEqual(e.doubleChar(' '), '  '));
  it('[Test 8] Expected: "______________"', () =>
    assert.strictEqual(e.doubleChar('_______'), '______________'));
  it('[Test 9] Expected: "eeqquuiipp  ggaalllloonn  rreeaadd"', () =>
    assert.strictEqual(
      e.doubleChar('equip gallon read'),
      'eeqquuiipp  ggaalllloonn  rreeaadd',
    ));
  it('[Test 10] Expected: "bbaabbyy  iinnccrreeaassee"', () =>
    assert.strictEqual(
      e.doubleChar('baby increase'),
      'bbaabbyy  iinnccrreeaassee',
    ));
});
