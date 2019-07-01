// Array.map

arrayOne = [5, 50, 1500];

const map = arrayOne.map(function(n) {
  return n * 2;
});

console.log(map);
console.log(arrayOne.map(n => n * 2));

const arrAdd = n => n + 10;
console.log('\nAddition:', arrayOne.map(arrAdd));

const arrSub = n => n - 10;
console.log('Subtraction:', arrayOne.map(arrSub));

const arrMult = n => n * 10;
console.log('Multiplication:', arrayOne.map(arrMult));

const arrDiv = n => n * 10;
console.log('Division:', arrayOne.map(arrDiv));
