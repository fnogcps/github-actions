const moduleA = require('./moduleA.js');
const moduleB = require('./moduleB.js');

console.log(moduleA.hello);
console.log(moduleA.welcome);
console.log(moduleA.goodbye);
console.log(moduleA);

console.log(moduleB.goodMorning);
console.log(moduleB.goodEvening());
console.log(moduleB);
