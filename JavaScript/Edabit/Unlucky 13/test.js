var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Unlucky 13 (unit tests)\n', () => {
  it('[Test 1] Expected: [1229]', () =>
    assert.deepEqual(e.unlucky13([91, 286, 416, 884, 1229]), [1229]));
  it('[Test 2] Expected: [245, 518, 824]', () =>
    assert.deepEqual(e.unlucky13([245, 518, 741, 824, 1092]), [245, 518, 824]));
  it('[Test 3] Expected: [394, 447]', () =>
    assert.deepEqual(e.unlucky13([394, 447, 572, 832, 1105]), [394, 447]));
  it('[Test 4] Expected: [289, 406, 791]', () =>
    assert.deepEqual(e.unlucky13([289, 406, 650, 791, 1079]), [289, 406, 791]));
  it('[Test 5] Expected: [438, 1067, 1091]', () =>
    assert.deepEqual(e.unlucky13([390, 438, 1014, 1067, 1091]), [
      438,
      1067,
      1091,
    ]));
  it('[Test 6] Expected: [1041, 1158, 1188, 1298]', () =>
    assert.deepEqual(e.unlucky13([494, 1041, 1158, 1188, 1298]), [
      1041,
      1158,
      1188,
      1298,
    ]));
  it('[Test 7] Expected: [43, 1048]', () =>
    assert.deepEqual(e.unlucky13([43, 117, 169, 702, 1048]), [43, 1048]));
  it('[Test 8] Expected: [430, 857, 874]', () =>
    assert.deepEqual(e.unlucky13([195, 430, 845, 857, 874]), [430, 857, 874]));
  it('[Test 9] Expected: [510, 1164, 1206]', () =>
    assert.deepEqual(e.unlucky13([247, 510, 1144, 1164, 1206]), [
      510,
      1164,
      1206,
    ]));
  it('[Test 10] Expected: []', () =>
    assert.deepEqual(e.unlucky13([182, 520, 533, 923, 1196]), []));
  it('[Test 11] Expected: [144, 148, 1114]', () =>
    assert.deepEqual(e.unlucky13([52, 144, 148, 1105, 1114]), [
      144,
      148,
      1114,
    ]));
  it('[Test 12] Expected: [204, 679]', () =>
    assert.deepEqual(e.unlucky13([130, 204, 364, 585, 679]), [204, 679]));
  it('[Test 13] Expected: [23, 309]', () =>
    assert.deepEqual(e.unlucky13([23, 309, 949, 975, 1235]), [23, 309]));
  it('[Test 14] Expected: [804, 1069, 1190, 1249]', () =>
    assert.deepEqual(e.unlucky13([804, 910, 1069, 1190, 1249]), [
      804,
      1069,
      1190,
      1249,
    ]));
  it('[Test 15] Expected: [21, 652, 1036]', () =>
    assert.deepEqual(e.unlucky13([21, 78, 611, 652, 1036]), [21, 652, 1036]));
  it('[Test 16] Expected: [32, 107, 891]', () =>
    assert.deepEqual(e.unlucky13([32, 107, 481, 891, 1131]), [32, 107, 891]));
  it('[Test 17] Expected: [389, 420, 1035, 1086]', () =>
    assert.deepEqual(e.unlucky13([260, 389, 420, 1035, 1086]), [
      389,
      420,
      1035,
      1086,
    ]));
  it('[Test 18] Expected: [251, 508, 630]', () =>
    assert.deepEqual(e.unlucky13([251, 416, 508, 630, 1235]), [251, 508, 630]));
  it('[Test 19] Expected: [213, 592, 1130, 1172, 1281]', () =>
    assert.deepEqual(e.unlucky13([213, 592, 1130, 1172, 1281]), [
      213,
      592,
      1130,
      1172,
      1281,
    ]));
  it('[Test 20] Expected: [25, 136, 632, 1193]', () =>
    assert.deepEqual(e.unlucky13([25, 136, 312, 632, 1193]), [
      25,
      136,
      632,
      1193,
    ]));
});
