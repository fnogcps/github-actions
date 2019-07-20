const counterOne = require('./instanceOne.js');
const counterTwo = require('./instanceOne.js');

const counterThree = require('./instanceTwo.js')();
const counterFour = require('./instanceTwo.js')();

counterOne.increases();
counterOne.increases();

console.log(counterTwo.value);

counterThree.increases();
counterThree.increases();

console.log(counterFour.value);
