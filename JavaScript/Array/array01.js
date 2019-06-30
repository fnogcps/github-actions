// Array.length, Array.sort

arrOne = new Array(1, 2, 3);
arrTwo = [5, 40, 1];
arrThree = ['y', 'k', 'j'];
strOne = 'Felipe';

console.log(`arrOne (length): ${arrOne.length}`);

arrTwo.sort();
console.log('\narrTwo (sort):', arrTwo);
console.log('arrThree (sort):', arrThree.sort());

console.log('\nstrOne:', strOne);
console.log(
  'strOne (sort):',
  strOne
    .split('')
    .sort()
    .join(''),
);
