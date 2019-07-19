var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Remove Every Vowel from a String (unit tests)\n', () => {
  it('[Test 1] Expected: "f bm rsgns frm ffc NW, thrby dng  grt srvc t th cntry— wll gv hm fr lftm glf t ny n f my crss!"', () =>
    assert.strictEqual(
      e.removeVowels(
        'If Obama resigns from office NOW, thereby doing a great service to the country—I will give him free lifetime golf at any one of my courses!',
      ),
      'f bm rsgns frm ffc NW, thrby dng  grt srvc t th cntry— wll gv hm fr lftm glf t ny n f my crss!',
    ));
  it('[Test 2] Expected: "Ths lctn s  ttl shm nd  trvsty. W r nt  dmcrcy!"', () =>
    assert.strictEqual(
      e.removeVowels(
        'This election is a total sham and a travesty. We are not a democracy!',
      ),
      'Ths lctn s  ttl shm nd  trvsty. W r nt  dmcrcy!',
    ));
  it('[Test 3] Expected: " hv nvr sn  thn prsn drnkng Dt Ck."', () =>
    assert.strictEqual(
      e.removeVowels('I have never seen a thin person drinking Diet Coke.'),
      ' hv nvr sn  thn prsn drnkng Dt Ck.',
    ));
  it('[Test 4] Expected: "vrybdy wnts m t tlk bt Rbrt Pttnsn nd nt Brn Wllms— gss ppl jst dn’t cr bt Brn!"', () =>
    assert.strictEqual(
      e.removeVowels(
        'Everybody wants me to talk about Robert Pattinson and not Brian Williams—I guess people just don’t care about Brian!',
      ),
      'vrybdy wnts m t tlk bt Rbrt Pttnsn nd nt Brn Wllms— gss ppl jst dn’t cr bt Brn!',
    ));
  it('[Test 5] Expected: "Kty, wht th hll wr y thnkng whn y mrrd lsr Rssll Brnd. Thr s  gy wh hs gt nthng gng,  wst!"', () =>
    assert.strictEqual(
      e.removeVowels(
        'Katy, what the hell were you thinking when you married loser Russell Brand. There is a guy who has got nothing going, a waste!',
      ),
      'Kty, wht th hll wr y thnkng whn y mrrd lsr Rssll Brnd. Thr s  gy wh hs gt nthng gng,  wst!',
    ));
  it('[Test 6] Expected: "Wndmlls r th grtst thrt n th S t bth bld nd gldn gls. Md clms fctnl ‘glbl wrmng’ s wrs."', () =>
    assert.strictEqual(
      e.removeVowels(
        'Windmills are the greatest threat in the US to both bald and golden eagles. Media claims fictional ‘global warming’ is worse.',
      ),
      'Wndmlls r th grtst thrt n th S t bth bld nd gldn gls. Md clms fctnl ‘glbl wrmng’ s wrs.',
    ));
  it('[Test 7] Expected: "Srry lsrs nd htrs, bt my .Q. s n f th hghst -nd y ll knw t! Pls dn’t fl s stpd r nscr,t’s nt yr flt"', () =>
    assert.strictEqual(
      e.removeVowels(
        'Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don’t feel so stupid or insecure,it’s not your fault',
      ),
      'Srry lsrs nd htrs, bt my .Q. s n f th hghst -nd y ll knw t! Pls dn’t fl s stpd r nscr,t’s nt yr flt',
    ));
  it('[Test 8] Expected: "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"', () =>
    assert.strictEqual(
      e.removeVowels('Happy Thanksgiving to all--even the haters and losers!'),
      'Hppy Thnksgvng t ll--vn th htrs nd lsrs!',
    ));
  it('[Test 9] Expected: "Wtch Ksch sqrm --- f h s nt trthfl n hs ngtv ds  wll s hm jst fr fn!"', () =>
    assert.strictEqual(
      e.removeVowels(
        'Watch Kasich squirm --- if he is not truthful in his negative ads I will sue him just for fun!',
      ),
      'Wtch Ksch sqrm --- f h s nt trthfl n hs ngtv ds  wll s hm jst fr fn!',
    ));
  it('[Test 10] Expected: "bm s, wtht qstn, th WRST VR prsdnt.  prdct h wll nw d smthng rlly bd nd ttlly stpd t shw mnhd!"', () =>
    assert.strictEqual(
      e.removeVowels(
        'Obama is, without question, the WORST EVER president. I predict he will now do something really bad and totally stupid to show manhood!',
      ),
      'bm s, wtht qstn, th WRST VR prsdnt.  prdct h wll nw d smthng rlly bd nd ttlly stpd t shw mnhd!',
    ));
});
