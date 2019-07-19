var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Join Two Portions of a Path (unit tests)\n', () => {
  it('[Test 1] Expected: "portion1/portion2"', () =>
    assert.strictEqual(
      e.joinPath('portion1', 'portion2'),
      'portion1/portion2',
    ));
  it('[Test 2] Expected: "portion1/portion2"', () =>
    assert.strictEqual(
      e.joinPath('portion1/', 'portion2'),
      'portion1/portion2',
    ));
  it('[Test 3] Expected: "portion1/portion2"', () =>
    assert.strictEqual(
      e.joinPath('portion1', '/portion2'),
      'portion1/portion2',
    ));
  it('[Test 4] Expected: "portion1/portion2"', () =>
    assert.strictEqual(
      e.joinPath('portion1/', '/portion2'),
      'portion1/portion2',
    ));
  it('[Test 5] Expected: "5wf7fny/stJKXlc8"', () =>
    assert.strictEqual(e.joinPath('5wf7fny', 'stJKXlc8'), '5wf7fny/stJKXlc8'));
  it('[Test 6] Expected: "5wf7fny/stJKXlc8"', () =>
    assert.strictEqual(e.joinPath('5wf7fny/', 'stJKXlc8'), '5wf7fny/stJKXlc8'));
  it('[Test 7] Expected: "5wf7fny/stJKXlc8"', () =>
    assert.strictEqual(e.joinPath('5wf7fny', '/stJKXlc8'), '5wf7fny/stJKXlc8'));
  it('[Test 8] Expected: "5wf7fny/stJKXlc8"', () =>
    assert.strictEqual(
      e.joinPath('5wf7fny/', '/stJKXlc8'),
      '5wf7fny/stJKXlc8',
    ));
  it('[Test 9] Expected: "FKBZOBHo/GNcYGnB"', () =>
    assert.strictEqual(e.joinPath('FKBZOBHo', 'GNcYGnB'), 'FKBZOBHo/GNcYGnB'));
  it('[Test 10] Expected: "FKBZOBHo/GNcYGnB"', () =>
    assert.strictEqual(e.joinPath('FKBZOBHo/', 'GNcYGnB'), 'FKBZOBHo/GNcYGnB'));
  it('[Test 11] Expected: "FKBZOBHo/GNcYGnB"', () =>
    assert.strictEqual(e.joinPath('FKBZOBHo', '/GNcYGnB'), 'FKBZOBHo/GNcYGnB'));
  it('[Test 12] Expected: "FKBZOBHo/GNcYGnB"', () =>
    assert.strictEqual(
      e.joinPath('FKBZOBHo/', '/GNcYGnB'),
      'FKBZOBHo/GNcYGnB',
    ));
  it('[Test 13] Expected: "vL533Y3/uVz3nul"', () =>
    assert.strictEqual(e.joinPath('vL533Y3', 'uVz3nul'), 'vL533Y3/uVz3nul'));
  it('[Test 14] Expected: "vL533Y3/uVz3nul"', () =>
    assert.strictEqual(e.joinPath('vL533Y3/', 'uVz3nul'), 'vL533Y3/uVz3nul'));
  it('[Test 15] Expected: "vL533Y3/uVz3nul"', () =>
    assert.strictEqual(e.joinPath('vL533Y3', '/uVz3nul'), 'vL533Y3/uVz3nul'));
  it('[Test 16] Expected: "vL533Y3/uVz3nul"', () =>
    assert.strictEqual(e.joinPath('vL533Y3/', '/uVz3nul'), 'vL533Y3/uVz3nul'));
  it('[Test 17] Expected: "kfDOTwf/Xr8viY8e"', () =>
    assert.strictEqual(e.joinPath('kfDOTwf', 'Xr8viY8e'), 'kfDOTwf/Xr8viY8e'));
  it('[Test 18] Expected: "kfDOTwf/Xr8viY8e"', () =>
    assert.strictEqual(e.joinPath('kfDOTwf/', 'Xr8viY8e'), 'kfDOTwf/Xr8viY8e'));
  it('[Test 19] Expected: "kfDOTwf/Xr8viY8e"', () =>
    assert.strictEqual(e.joinPath('kfDOTwf', '/Xr8viY8e'), 'kfDOTwf/Xr8viY8e'));
  it('[Test 20] Expected: "kfDOTwf/Xr8viY8e"', () =>
    assert.strictEqual(
      e.joinPath('kfDOTwf/', '/Xr8viY8e'),
      'kfDOTwf/Xr8viY8e',
    ));
  it('[Test 21] Expected: "F4tBPmoV/Lv18joOw"', () =>
    assert.strictEqual(
      e.joinPath('F4tBPmoV', 'Lv18joOw'),
      'F4tBPmoV/Lv18joOw',
    ));
  it('[Test 22] Expected: "F4tBPmoV/Lv18joOw"', () =>
    assert.strictEqual(
      e.joinPath('F4tBPmoV/', 'Lv18joOw'),
      'F4tBPmoV/Lv18joOw',
    ));
  it('[Test 23] Expected: "F4tBPmoV/Lv18joOw"', () =>
    assert.strictEqual(
      e.joinPath('F4tBPmoV', '/Lv18joOw'),
      'F4tBPmoV/Lv18joOw',
    ));
  it('[Test 24] Expected: "F4tBPmoV/Lv18joOw"', () =>
    assert.strictEqual(
      e.joinPath('F4tBPmoV/', '/Lv18joOw'),
      'F4tBPmoV/Lv18joOw',
    ));
  it('[Test 25] Expected: "7ASOjVuT/wwPOgKX"', () =>
    assert.strictEqual(e.joinPath('7ASOjVuT', 'wwPOgKX'), '7ASOjVuT/wwPOgKX'));
  it('[Test 26] Expected: "7ASOjVuT/wwPOgKX"', () =>
    assert.strictEqual(e.joinPath('7ASOjVuT/', 'wwPOgKX'), '7ASOjVuT/wwPOgKX'));
  it('[Test 27] Expected: "7ASOjVuT/wwPOgKX"', () =>
    assert.strictEqual(e.joinPath('7ASOjVuT', '/wwPOgKX'), '7ASOjVuT/wwPOgKX'));
  it('[Test 28] Expected: "7ASOjVuT/wwPOgKX"', () =>
    assert.strictEqual(
      e.joinPath('7ASOjVuT/', '/wwPOgKX'),
      '7ASOjVuT/wwPOgKX',
    ));
  it('[Test 29] Expected: "r1AiTrL/KkyjD3K"', () =>
    assert.strictEqual(e.joinPath('r1AiTrL', 'KkyjD3K'), 'r1AiTrL/KkyjD3K'));
  it('[Test 30] Expected: "r1AiTrL/KkyjD3K"', () =>
    assert.strictEqual(e.joinPath('r1AiTrL/', 'KkyjD3K'), 'r1AiTrL/KkyjD3K'));
  it('[Test 31] Expected: "r1AiTrL/KkyjD3K"', () =>
    assert.strictEqual(e.joinPath('r1AiTrL', '/KkyjD3K'), 'r1AiTrL/KkyjD3K'));
  it('[Test 32] Expected: "r1AiTrL/KkyjD3K"', () =>
    assert.strictEqual(e.joinPath('r1AiTrL/', '/KkyjD3K'), 'r1AiTrL/KkyjD3K'));
  it('[Test 33] Expected: "1h1gRAxu/apQtQYgl"', () =>
    assert.strictEqual(
      e.joinPath('1h1gRAxu', 'apQtQYgl'),
      '1h1gRAxu/apQtQYgl',
    ));
  it('[Test 34] Expected: "1h1gRAxu/apQtQYgl"', () =>
    assert.strictEqual(
      e.joinPath('1h1gRAxu/', 'apQtQYgl'),
      '1h1gRAxu/apQtQYgl',
    ));
  it('[Test 35] Expected: "1h1gRAxu/apQtQYgl"', () =>
    assert.strictEqual(
      e.joinPath('1h1gRAxu', '/apQtQYgl'),
      '1h1gRAxu/apQtQYgl',
    ));
  it('[Test 36] Expected: "1h1gRAxu/apQtQYgl"', () =>
    assert.strictEqual(
      e.joinPath('1h1gRAxu/', '/apQtQYgl'),
      '1h1gRAxu/apQtQYgl',
    ));
  it('[Test 37] Expected: "IYo5kuL/QFEM6dSv"', () =>
    assert.strictEqual(e.joinPath('IYo5kuL', 'QFEM6dSv'), 'IYo5kuL/QFEM6dSv'));
  it('[Test 38] Expected: "IYo5kuL/QFEM6dSv"', () =>
    assert.strictEqual(e.joinPath('IYo5kuL/', 'QFEM6dSv'), 'IYo5kuL/QFEM6dSv'));
  it('[Test 39] Expected: "IYo5kuL/QFEM6dSv"', () =>
    assert.strictEqual(e.joinPath('IYo5kuL', '/QFEM6dSv'), 'IYo5kuL/QFEM6dSv'));
  it('[Test 40] Expected: "IYo5kuL/QFEM6dSv"', () =>
    assert.strictEqual(
      e.joinPath('IYo5kuL/', '/QFEM6dSv'),
      'IYo5kuL/QFEM6dSv',
    ));
  it('[Test 41] Expected: "M6c7OnQI/nj-CEAqV"', () =>
    assert.strictEqual(
      e.joinPath('M6c7OnQI', 'nj-CEAqV'),
      'M6c7OnQI/nj-CEAqV',
    ));
  it('[Test 42] Expected: "M6c7OnQI/nj-CEAqV"', () =>
    assert.strictEqual(
      e.joinPath('M6c7OnQI/', 'nj-CEAqV'),
      'M6c7OnQI/nj-CEAqV',
    ));
  it('[Test 43] Expected: "M6c7OnQI/nj-CEAqV"', () =>
    assert.strictEqual(
      e.joinPath('M6c7OnQI', '/nj-CEAqV'),
      'M6c7OnQI/nj-CEAqV',
    ));
  it('[Test 44] Expected: "M6c7OnQI/nj-CEAqV"', () =>
    assert.strictEqual(
      e.joinPath('M6c7OnQI/', '/nj-CEAqV'),
      'M6c7OnQI/nj-CEAqV',
    ));
});
